export const BURST_TYPES = [
  "warmup-match",
  "one-line-repair",
  "menu-path-race",
  "output-oracle",
  "glossary-lightning",
  "authors-dare",
] as const;

export type BurstType = (typeof BURST_TYPES)[number];

export function burstPoolForDay(day: number): BurstType[] {
  if (day <= 7) return ["warmup-match", "menu-path-race"];
  if (day <= 14) return ["warmup-match", "one-line-repair"];
  if (day <= 21) return ["menu-path-race", "one-line-repair"];
  if (day <= 35) return ["one-line-repair", "authors-dare"];
  if (day <= 42) return ["output-oracle", "one-line-repair"];
  if (day <= 55) return ["glossary-lightning", "one-line-repair"];
  if (day <= 75) return ["warmup-match", "glossary-lightning"];
  return ["glossary-lightning", "output-oracle"];
}

/** Never the same type two calendar days in a row. */
export function pickBurstType(pool: BurstType[], lastType?: string, dateSeed = ""): BurstType {
  const filtered = lastType ? pool.filter((t) => t !== lastType) : pool;
  const usable = filtered.length ? filtered : pool.filter((t) => t !== lastType);
  const list = usable.length ? usable : [...BURST_TYPES.filter((t) => t !== lastType)];
  const seed = Array.from(dateSeed).reduce((a, c) => a + c.charCodeAt(0), 0);
  return list[seed % list.length] ?? list[0];
}

export function burstId(date: string, type: BurstType): string {
  return `${date}:${type}`;
}
