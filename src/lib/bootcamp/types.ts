export type SkillId =
  | "xmlLiteracy"
  | "oxygenUi"
  | "ditaTopics"
  | "maps"
  | "reuse"
  | "publish"
  | "review"
  | "aemSites"
  | "aemGuides";

export type BurstType =
  | "warmup-match"
  | "one-line-repair"
  | "menu-path-race"
  | "output-oracle"
  | "glossary-lightning"
  | "authors-dare";

export type YoutubeRef = {
  id: string;
  title: string;
  watchFor: string[];
};

export type SourceRef = {
  href: string;
  label: string;
  dated: string;
};

export type Lab = {
  id: string;
  title: string;
  pack: string;
  failWhen: string;
  expected: string;
  steps: string[];
};

export type SessionQuest = {
  id: string;
  block: "A" | "B" | "C" | "D";
  title: string;
  minutes: number;
  done: string;
};

export type QuizItem = {
  q: string;
  options: string[];
  answer: number;
  why: string;
};

export type DayDoc = {
  day: number;
  week: number;
  title: string;
  objective: string;
  timeboxMinutes: number;
  skills: SkillId[];
  legacyLessonIds: string[];
  youtube: YoutubeRef[];
  sources: SourceRef[];
  lab: Lab;
  sessionQuests: SessionQuest[];
  dailyBurstPool: BurstType[];
  toolCards: string[];
  badgeId: string | null;
  boss: boolean;
  checks: { id: string; prompt: string }[];
  quiz: QuizItem[];
  fieldNotePrompt: string;
  tomorrowHook: string;
  body: string;
};
