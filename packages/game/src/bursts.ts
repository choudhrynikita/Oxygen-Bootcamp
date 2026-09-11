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
  const offset = Math.floor((day - 1) / 6) % 6;
  const primary = (((day - 1) % 6) + offset) % 6;
  const secondary = (primary + 1) % 6;
  return [BURST_TYPES[primary], BURST_TYPES[secondary]];
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
