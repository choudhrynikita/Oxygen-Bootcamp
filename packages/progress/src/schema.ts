export const SCHEMA_VERSION = 1 as const;
export const CURRICULUM_VERSION = "2026.09.3";
export const STORAGE_KEY = "oxygen-bootcamp-state-v1";
export const LEGACY_STORAGE_KEY = "oxygen-bootcamp-progress-v1";

export const SKILL_IDS = [
  "xmlLiteracy",
  "oxygenUi",
  "ditaTopics",
  "maps",
  "reuse",
  "publish",
  "review",
  "aemSites",
  "aemGuides",
] as const;

export type SkillId = (typeof SKILL_IDS)[number];

export type DayStatus =
  | "locked"
  | "available"
  | "started"
  | "lab_done"
  | "checked"
  | "complete";

export type DayRecord = {
  status: DayStatus;
  startedAt?: string;
  completedAt?: string;
  checks: Record<string, boolean>;
  quizScore?: number;
  notes?: string;
  legacyLessonIds?: string[];
  burstsDone: string[];
  sessionQuestsDone: string[];
  hourlyBlocksCompleted: number;
  fieldNote?: string;
};

export type GameState = {
  xp: number;
  skillXp: Record<SkillId, number>;
  streak: {
    current: number;
    longest: number;
    lastActiveDate: string;
    freezes: number;
    curriculumDaysTowardFreeze: number;
  };
  badges: string[];
  cards: string[];
  dailyBurst: { date: string; id: string; type: string; done: boolean };
  combo: { sameDayLabQuizField: boolean };
  lastBurstType?: string;
};

export type LearnerState = {
  schemaVersion: typeof SCHEMA_VERSION;
  curriculumVersion: string;
  learnerId: "local";
  startedAt: string;
  days: Record<string, DayRecord>;
  game: GameState;
  flags: {
    reducedMotion: boolean;
    textScale: number;
    sound: false | boolean;
    contrast: "default" | "high";
  };
};

export const emptySkillXp = (): Record<SkillId, number> =>
  Object.fromEntries(SKILL_IDS.map((id) => [id, 0])) as Record<SkillId, number>;

export function emptyDay(): DayRecord {
  return {
    status: "locked",
    checks: {},
    burstsDone: [],
    sessionQuestsDone: [],
    hourlyBlocksCompleted: 0,
  };
}

export function emptyGame(): GameState {
  return {
    xp: 0,
    skillXp: emptySkillXp(),
    streak: {
      current: 0,
      longest: 0,
      lastActiveDate: "",
      freezes: 0,
      curriculumDaysTowardFreeze: 0,
    },
    badges: [],
    cards: [],
    dailyBurst: { date: "", id: "", type: "", done: false },
    combo: { sameDayLabQuizField: false },
  };
}

export function freshState(now = new Date()): LearnerState {
  return {
    schemaVersion: SCHEMA_VERSION,
    curriculumVersion: CURRICULUM_VERSION,
    learnerId: "local",
    startedAt: now.toISOString(),
    days: { "1": { ...emptyDay(), status: "available" } },
    game: emptyGame(),
    flags: {
      reducedMotion: false,
      textScale: 1,
      sound: false,
      contrast: "default",
    },
  };
}
