import {
  CURRICULUM_VERSION,
  SCHEMA_VERSION,
  type LearnerState,
  type DayRecord,
} from "./schema";
import { emptyDay } from "./schema";
import { syncLocks } from "./unlocks";

export type GuardAction = "keep-skip" | "recheck-changed" | "reset";

export type CatalogChange = {
  day: number;
  reason: string;
};

export type GuardReport = {
  needed: boolean;
  fromVersion: string;
  toVersion: string;
  changedDays: CatalogChange[];
  badgesKept: string[];
  badgesDropped: string[];
};

export function parseExport(raw: unknown): { ok: true; state: LearnerState } | { ok: false; error: string } {
  if (!raw || typeof raw !== "object") return { ok: false, error: "Not a JSON object." };
  const rec = raw as Partial<LearnerState>;
  if (rec.schemaVersion !== SCHEMA_VERSION) {
    return { ok: false, error: `Unknown schemaVersion ${String(rec.schemaVersion)}. Export rejected.` };
  }
  if (!rec.curriculumVersion || !rec.days || !rec.game) {
    return { ok: false, error: "Incomplete state document." };
  }
  return { ok: true, state: rec as LearnerState };
}

export function diffCatalog(
  state: LearnerState,
  liveVersion: string,
  liveDays: { day: number; title: string; labId: string; badgeId?: string }[],
  liveBadgeIds: string[],
  previousFingerprint: Map<number, string>,
  nextFingerprint: Map<number, string>,
): GuardReport {
  const changedDays: CatalogChange[] = [];
  for (const d of liveDays) {
    const prev = previousFingerprint.get(d.day);
    const next = nextFingerprint.get(d.day);
    if (prev && next && prev !== next) {
      changedDays.push({ day: d.day, reason: `Day ${d.day} lab or quests changed.` });
    }
  }
  const badgesDropped: string[] = [];
  const badgesKept: string[] = [];
  for (const id of state.game.badges) {
    if (!liveBadgeIds.includes(id)) badgesDropped.push(id);
    else badgesKept.push(id);
  }
  return {
    needed: state.curriculumVersion !== liveVersion,
    fromVersion: state.curriculumVersion,
    toVersion: liveVersion,
    changedDays,
    badgesKept,
    badgesDropped,
  };
}

function evidenceForBadge(
  state: LearnerState,
  badgeId: string,
  badgeDay: number | undefined,
  liveBadgeIds: string[],
): boolean {
  if (!liveBadgeIds.includes(badgeId)) return false;
  if (!badgeDay) return false;
  const rec = state.days[String(badgeDay)];
  return rec?.status === "lab_done" || rec?.status === "checked" || rec?.status === "complete";
}

export function applyGuard(
  state: LearnerState,
  action: GuardAction,
  report: GuardReport,
  liveBadgeIds: string[],
  badgeDayById: Record<string, number>,
  liveVersion = CURRICULUM_VERSION,
): LearnerState {
  const changed = new Set(report.changedDays.map((c) => c.day));
  let days: Record<string, DayRecord> = { ...state.days };
  let game = { ...state.game, badges: [...state.game.badges] };

  if (action === "reset") {
    days = { "1": { ...emptyDay(), status: "available" } };
    game = {
      ...game,
      xp: 0,
      skillXp: Object.fromEntries(Object.keys(game.skillXp).map((k) => [k, 0])) as typeof game.skillXp,
      streak: { ...game.streak, current: 0, lastActiveDate: "", curriculumDaysTowardFreeze: 0 },
      combo: { sameDayLabQuizField: false },
    };
  } else {
    for (const key of Object.keys(days)) {
      const n = Number(key);
      if (!changed.has(n)) continue;
      const rec = days[key];
      if (action === "keep-skip") {
        days[key] = { ...rec };
      } else {
        days[key] = {
          ...rec,
          status: rec.status === "locked" ? "locked" : "started",
          quizScore: undefined,
          sessionQuestsDone: [],
          hourlyBlocksCompleted: 0,
          checks: {},
        };
      }
    }
  }

  game.badges = game.badges.filter((id) =>
    evidenceForBadge({ ...state, days, game }, id, badgeDayById[id], liveBadgeIds),
  );

  return syncLocks({
    ...state,
    curriculumVersion: liveVersion,
    days,
    game,
  });
}
