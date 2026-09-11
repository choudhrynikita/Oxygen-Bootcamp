import type { GameState, LearnerState, SkillId } from "../../progress/src/schema";

export const XP = {
  burst: 15,
  quest: 25,
  lab: 40,
  quiz: 30,
  combo: 20,
} as const;

export const RANKS = [
  { id: "trainee", label: "Trainee", days: 0, xp: 0 },
  { id: "bench-author", label: "Bench author", days: 7, xp: 200 },
  { id: "map-keeper", label: "Map keeper", days: 21, xp: 800 },
  { id: "reuse-smith", label: "Reuse smith", days: 42, xp: 1600 },
  { id: "publish-lead", label: "Publish lead", days: 55, xp: 2200 },
  { id: "desk-captain", label: "Desk captain", days: 90, xp: 3200 },
] as const;

export function awardSkillXp(
  game: GameState,
  amount: number,
  skills: SkillId[],
): GameState {
  if (amount <= 0 || skills.length === 0) return game;
  const skillXp = { ...game.skillXp };
  const share = Math.floor(amount / skills.length);
  let rest = amount - share * skills.length;
  for (const s of skills) {
    skillXp[s] += share + (rest > 0 ? 1 : 0);
    if (rest > 0) rest -= 1;
  }
  return { ...game, xp: game.xp + amount, skillXp };
}

export function progressedDayCount(state: LearnerState): number {
  return Object.values(state.days).filter(
    (d) => d.status === "lab_done" || d.status === "checked" || d.status === "complete",
  ).length;
}

export function rankFor(state: LearnerState): (typeof RANKS)[number] {
  const days = progressedDayCount(state);
  const xp = state.game.xp;
  let current: (typeof RANKS)[number] = RANKS[0];
  for (const r of RANKS) {
    if (days >= r.days && xp >= r.xp) current = r;
  }
  return current;
}
