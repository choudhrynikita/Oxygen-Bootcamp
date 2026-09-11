export const BURST_TYPES = [
  "warmup-match",
  "one-line-repair",
  "menu-path-race",
  "output-oracle",
  "glossary-lightning",
  "authors-dare",
];

export function burstPoolForDay(day) {
  if (day <= 7) return ["warmup-match", "menu-path-race"];
  if (day <= 14) return ["warmup-match", "one-line-repair"];
  if (day <= 21) return ["menu-path-race", "one-line-repair"];
  if (day <= 35) return ["one-line-repair", "authors-dare"];
  if (day <= 42) return ["output-oracle", "one-line-repair"];
  if (day <= 55) return ["glossary-lightning", "one-line-repair"];
  if (day <= 75) return ["warmup-match", "glossary-lightning"];
  return ["glossary-lightning", "output-oracle"];
}
