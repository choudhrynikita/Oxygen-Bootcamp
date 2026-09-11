import type { LearnerState } from "./schema";
import { LEGACY_STORAGE_KEY } from "./schema";

export const LEGACY_CLASSROOM_BADGE = "legacy-classroom";

export type LegacyMap = Record<string, number[]>;

/**
 * v1 stored an array of lesson ids in localStorage.
 * We never invent curriculum completions from a v1 tick.
 * We only attach the ids onto day records as `legacyLessonIds` and award
 * the Legacy classroom badge when at least one v1 id is present.
 */
export function importLegacy(
  state: LearnerState,
  v1Ids: string[],
  map: LegacyMap,
): LearnerState {
  if (!v1Ids.length) return state;
  const days = { ...state.days };
  for (const id of v1Ids) {
    const dayNums = map[id] ?? [];
    for (const n of dayNums) {
      const key = String(n);
      const rec = days[key] ?? {
        status: "locked" as const,
        checks: {},
        burstsDone: [],
        sessionQuestsDone: [],
        hourlyBlocksCompleted: 0,
      };
      const legacyLessonIds = Array.from(new Set([...(rec.legacyLessonIds ?? []), id]));
      days[key] = { ...rec, legacyLessonIds };
    }
  }
  const badges = state.game.badges.includes(LEGACY_CLASSROOM_BADGE)
    ? state.game.badges
    : [...state.game.badges, LEGACY_CLASSROOM_BADGE];
  return { ...state, days, game: { ...state.game, badges } };
}

export function readLegacyIds(storage: Pick<Storage, "getItem">): string[] {
  try {
    const raw = storage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}
