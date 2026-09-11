"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  CURRICULUM_VERSION,
  STORAGE_KEY,
  emptyDay,
  freshState,
  type DayRecord,
  type LearnerState,
  type SkillId,
} from "@progress/schema";
import { canUnlock, syncLocks } from "@progress/unlocks";
import { importLegacy, readLegacyIds } from "@progress/legacy-import";
import { parseExport } from "@progress/update-guard";
import { awardSkillXp, rankFor, XP } from "@game/xp";
import { grantFreezeFromCurriculumDay, tickStreakFromBurst } from "@game/streak";
import { burstId, pickBurstType, type BurstType } from "@game/bursts";
import type { DayDoc } from "./types";

type Store = LearnerState & {
  hydrated: boolean;
  guardOpen: boolean;
  setHydrated: (v: boolean) => void;
  setFlags: (partial: Partial<LearnerState["flags"]>) => void;
  ensureBurst: (today: string, pool: BurstType[]) => void;
  completeBurst: (today: string, skill: SkillId) => void;
  startDay: (day: number) => void;
  completeQuest: (day: number, questId: string, skills: SkillId[]) => void;
  completeLab: (day: number, skills: SkillId[], badgeId: string | null, toolCards: string[]) => void;
  completeQuiz: (day: number, score: number, skills: SkillId[]) => void;
  saveFieldNote: (day: number, note: string, skills: SkillId[]) => void;
  tryCombo: (day: number, skills: SkillId[]) => void;
  importV1: (map: Record<string, number[]>) => number;
  exportState: () => string;
  importState: (raw: string) => string | null;
  resetDay: (day: number) => void;
  resetAll: () => void;
};

function applyDay(state: LearnerState, day: number, rec: DayRecord): LearnerState {
  return syncLocks({
    ...state,
    days: { ...state.days, [String(day)]: rec },
  });
}

export const useBootcamp = create<Store>()(
  persist(
    (set, get) => ({
      ...freshState(),
      hydrated: false,
      guardOpen: false,
      setHydrated: (v) => set({ hydrated: v }),
      setFlags: (partial) => set({ flags: { ...get().flags, ...partial } }),
      ensureBurst: (today, pool) => {
        const game = get().game;
        if (game.dailyBurst.date === today && game.dailyBurst.id) return;
        const type = pickBurstType(pool, game.lastBurstType, today);
        set({
          game: {
            ...game,
            dailyBurst: { date: today, id: burstId(today, type), type, done: false },
          },
        });
      },
      completeBurst: (today, skill) => {
        const s = get();
        if (s.game.dailyBurst.date !== today || s.game.dailyBurst.done) return;
        const ticked = tickStreakFromBurst(s.game, today);
        const withXp = awardSkillXp(ticked.game, XP.burst, [skill]);
        set({
          game: {
            ...withXp,
            lastBurstType: s.game.dailyBurst.type,
            dailyBurst: { ...s.game.dailyBurst, done: true },
          },
        });
      },
      startDay: (day) => {
        const s = get();
        if (!canUnlock(s, day) && day !== 1) return;
        const rec = s.days[String(day)] ?? emptyDay();
        if (rec.status === "locked") rec.status = "available";
        if (rec.status === "available") {
          set(
            applyDay(s, day, {
              ...rec,
              status: "started",
              startedAt: rec.startedAt ?? new Date().toISOString(),
            }),
          );
        }
      },
      completeQuest: (day, questId, skills) => {
        const s = get();
        const rec = s.days[String(day)] ?? emptyDay();
        if (rec.sessionQuestsDone.includes(questId)) return;
        const done = [...rec.sessionQuestsDone, questId];
        const game = awardSkillXp(s.game, XP.quest, skills);
        set({
          ...applyDay(
            { ...s, game },
            day,
            {
              ...rec,
              sessionQuestsDone: done,
              hourlyBlocksCompleted: rec.hourlyBlocksCompleted + 1,
              status: rec.status === "available" || rec.status === "locked" ? "started" : rec.status,
            },
          ),
          game,
        });
      },
      completeLab: (day, skills, badgeId, toolCards) => {
        const s = get();
        const rec = s.days[String(day)] ?? emptyDay();
        if (rec.status === "lab_done" || rec.status === "checked" || rec.status === "complete") {
          /* reopen allowed; do not re-award */
          return;
        }
        let game = awardSkillXp(s.game, XP.lab, skills);
        if (badgeId && !game.badges.includes(badgeId)) game = { ...game, badges: [...game.badges, badgeId] };
        const cards = Array.from(new Set([...game.cards, ...toolCards]));
        game = { ...game, cards };
        const next: DayRecord = {
          ...rec,
          status: "lab_done",
        };
        let nextState = applyDay({ ...s, game }, day, next);
        nextState = grantFreezeFromCurriculumDay(nextState);
        set(nextState);
      },
      completeQuiz: (day, score, skills) => {
        const s = get();
        const rec = s.days[String(day)] ?? emptyDay();
        let game = s.game;
        let status = rec.status;
        if (score >= 70 && rec.quizScore == null) {
          game = awardSkillXp(game, XP.quiz, skills);
        }
        if (score >= 70 && (status === "lab_done" || status === "checked" || status === "complete")) {
          status = rec.fieldNote ? "complete" : "checked";
        }
        set(
          applyDay(
            { ...s, game },
            day,
            { ...rec, quizScore: score, status, completedAt: status === "complete" ? new Date().toISOString() : rec.completedAt },
          ),
        );
      },
      saveFieldNote: (day, note, skills) => {
        const s = get();
        const rec = s.days[String(day)] ?? emptyDay();
        let status = rec.status;
        if ((status === "checked" || status === "lab_done") && (rec.quizScore ?? 0) >= 70) {
          status = "complete";
        }
        set(
          applyDay(s, day, {
            ...rec,
            notes: note,
            fieldNote: note,
            status,
            completedAt: status === "complete" ? new Date().toISOString() : rec.completedAt,
          }),
        );
        get().tryCombo(day, skills);
      },
      tryCombo: (day, skills) => {
        const s = get();
        const rec = s.days[String(day)];
        if (!rec) return;
        if (rec.status !== "complete" && rec.status !== "checked" && rec.status !== "lab_done") return;
        if (!rec.fieldNote || (rec.quizScore ?? 0) < 70) return;
        if (rec.status !== "lab_done" && rec.status !== "checked" && rec.status !== "complete") return;
        if (s.game.combo.sameDayLabQuizField) return;
        if (rec.status === "complete" || (rec.status === "checked" && rec.fieldNote)) {
          const game = awardSkillXp(
            { ...s.game, combo: { sameDayLabQuizField: true } },
            XP.combo,
            skills,
          );
          set({ game });
        }
      },
      importV1: (map) => {
        const ids = typeof window === "undefined" ? [] : readLegacyIds(window.localStorage);
        if (!ids.length) return 0;
        const next = importLegacy(get(), ids, map);
        set(next);
        return ids.length;
      },
      exportState: () => {
        const { hydrated, guardOpen, ...rest } = get();
        void hydrated;
        void guardOpen;
        const dump: LearnerState = {
          schemaVersion: rest.schemaVersion,
          curriculumVersion: rest.curriculumVersion,
          learnerId: rest.learnerId,
          startedAt: rest.startedAt,
          days: rest.days,
          game: rest.game,
          flags: rest.flags,
        };
        return JSON.stringify(dump, null, 2);
      },
      importState: (raw) => {
        try {
          const parsed = parseExport(JSON.parse(raw));
          if (!parsed.ok) return parsed.error;
          set({ ...parsed.state, hydrated: true });
          return null;
        } catch {
          return "Not valid JSON.";
        }
      },
      resetDay: (day) => {
        const s = get();
        const rec = s.days[String(day)];
        if (!rec) return;
        set(
          applyDay(s, day, {
            ...emptyDay(),
            status: day === 1 ? "available" : rec.status === "locked" ? "locked" : "available",
            legacyLessonIds: rec.legacyLessonIds,
          }),
        );
      },
      resetAll: () => set({ ...freshState(), hydrated: true, guardOpen: false }),
    }),
    {
      name: STORAGE_KEY,
      partialize: (s) => ({
        schemaVersion: s.schemaVersion,
        curriculumVersion: s.curriculumVersion,
        learnerId: s.learnerId,
        startedAt: s.startedAt,
        days: s.days,
        game: s.game,
        flags: s.flags,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
        if (state && state.curriculumVersion !== CURRICULUM_VERSION) {
          state.guardOpen = true;
        }
      },
    },
  ),
);

export function useRank() {
  return rankFor(useBootcamp.getState());
}

export type { DayDoc };
