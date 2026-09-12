export type BloomLevel = "remember" | "understand" | "apply" | "analyze" | "evaluate" | "create";

export type LearningObjective = {
  id: string;
  bloom: BloomLevel;
  text: string;
};

export type ContinueRule = "none" | "complete-block-above" | "complete-all-above";

export type FigureRef = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  href?: string;
};

export type TextBlock = { type: "text"; id: string; heading?: string; body: string };
export type HeadingBlock = { type: "heading"; id: string; text: string; level?: 2 | 3 };
export type StatementBlock = { type: "statement"; id: string; body: string };
export type ListBlock = { type: "list"; id: string; ordered?: boolean; items: string[] };
export type CalloutBlock = {
  type: "callout";
  id: string;
  kind: "note" | "tip" | "warning";
  title?: string;
  body: string;
};
export type MediaBlock = { type: "media"; id: string; youtubeId: string; title: string; watchFor?: string[] };
export type FigureBlock = {
  type: "figure";
  id: string;
  src: string;
  alt: string;
  caption: string;
  credit?: string;
  href?: string;
};
export type AccordionBlock = {
  type: "accordion";
  id: string;
  lead?: string;
  items: { title: string; body: string }[];
};
export type TabsBlock = {
  type: "tabs";
  id: string;
  lead?: string;
  items: { title: string; body: string }[];
};
export type ProcessBlock = {
  type: "process";
  id: string;
  lead?: string;
  intro?: string;
  steps: { title: string; body: string; image?: FigureRef }[];
  summary?: string;
};
export type LabeledGraphicBlock = {
  type: "labeled-graphic";
  id: string;
  lead?: string;
  variant?: "first-window" | "workbench";
  src?: string;
  alt?: string;
  caption?: string;
  credit?: string;
  href?: string;
  labels: { id: string; title: string; body: string; x?: number; y?: number }[];
};
export type FlashcardsBlock = {
  type: "flashcards";
  id: string;
  lead?: string;
  cards: { front: string; back: string }[];
};
export type SortingBlock = {
  type: "sorting";
  id: string;
  lead?: string;
  prompt: string;
  bins: string[];
  items: { id: string; text: string; bin: string }[];
};
export type ScenarioBlock = {
  type: "scenario";
  id: string;
  lead?: string;
  situation: string;
  choices: { text: string; feedback: string; correct?: boolean }[];
};
export type KnowledgeCheckBlock = {
  type: "knowledge-check";
  id: string;
  lead?: string;
  kind?: "mc" | "mr" | "tf";
  q: string;
  options: string[];
  answer: number | number[];
  why: string;
};
export type ButtonsBlock = { type: "buttons"; id: string; items: { label: string; body: string }[] };
export type TimelineBlock = { type: "timeline"; id: string; items: { title: string; body: string }[] };
export type DividerBlock = { type: "divider"; id: string };
export type ContinueBlock = { type: "continue"; id: string; rule: ContinueRule; label?: string };
export type LabBlock = { type: "lab"; id: string };
export type ObjectivesBlock = { type: "objectives"; id: string };
export type FieldNoteBlock = { type: "field-note"; id: string };

export type PackBlock =
  | TextBlock
  | HeadingBlock
  | StatementBlock
  | ListBlock
  | CalloutBlock
  | MediaBlock
  | FigureBlock
  | AccordionBlock
  | TabsBlock
  | ProcessBlock
  | LabeledGraphicBlock
  | FlashcardsBlock
  | SortingBlock
  | ScenarioBlock
  | KnowledgeCheckBlock
  | ButtonsBlock
  | TimelineBlock
  | DividerBlock
  | ContinueBlock
  | LabBlock
  | ObjectivesBlock
  | FieldNoteBlock;

export type PackLesson = {
  id: string;
  title: string;
  durationMin: number;
  questId?: string;
  blocks: PackBlock[];
};

export type PackSection = {
  id: string;
  title: string;
  lessons: PackLesson[];
};

export type CoursePack = {
  day: number;
  cover: {
    kicker: string;
    title: string;
    overview: string;
    durationMin: number;
    audience: string;
  };
  objectives: LearningObjective[];
  sections: PackSection[];
  summary: {
    heading: string;
    recap: string;
    nextDayHook: string;
  };
};

export const INTERACTIVE_TYPES = new Set<PackBlock["type"]>([
  "accordion",
  "tabs",
  "process",
  "labeled-graphic",
  "flashcards",
  "sorting",
  "scenario",
  "knowledge-check",
  "lab",
]);

export function isInteractive(block: PackBlock): boolean {
  return INTERACTIVE_TYPES.has(block.type);
}

export function flattenLessons(pack: CoursePack): PackLesson[] {
  return pack.sections.flatMap((s) => s.lessons);
}

export function knowledgeChecks(pack: CoursePack): KnowledgeCheckBlock[] {
  return flattenLessons(pack)
    .flatMap((l) => l.blocks)
    .filter((b): b is KnowledgeCheckBlock => b.type === "knowledge-check");
}
