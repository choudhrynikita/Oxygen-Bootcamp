export const BURST_TYPES = [
  "warmup-match",
  "one-line-repair",
  "menu-path-race",
  "output-oracle",
  "glossary-lightning",
  "authors-dare",
];

export function burstPoolForDay(day) {
  const offset = Math.floor((day - 1) / 6) % 6;
  const primary = (((day - 1) % 6) + offset) % 6;
  const secondary = (primary + 1) % 6;
  return [BURST_TYPES[primary], BURST_TYPES[secondary]];
}
