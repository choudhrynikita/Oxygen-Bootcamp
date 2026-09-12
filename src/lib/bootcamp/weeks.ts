export type Unit = {
  id: number;
  from: number;
  to: number;
  title: string;
};

export const UNITS: Unit[] = [
  { id: 1, from: 1, to: 7, title: "Sit down and write" },
  { id: 2, from: 8, to: 14, title: "Three kinds of pages" },
  { id: 3, from: 15, to: 21, title: "Make a booklet" },
  { id: 4, from: 22, to: 28, title: "Stop copying the same words" },
  { id: 5, from: 29, to: 35, title: "The tools on your desk" },
  { id: 6, from: 36, to: 42, title: "Turn the booklet into a site or a PDF" },
  { id: 7, from: 43, to: 49, title: "Work with other people" },
  { id: 8, from: 50, to: 55, title: "When things break" },
  { id: 9, from: 56, to: 62, title: "The website team next door" },
  { id: 10, from: 63, to: 69, title: "Build a web page" },
  { id: 11, from: 70, to: 75, title: "Other ways they write in AEM" },
  { id: 12, from: 76, to: 90, title: "Hand work between the two desks" },
];

export function unitForDay(day: number): Unit {
  return UNITS.find((u) => day >= u.from && day <= u.to) ?? UNITS[0];
}

/** @deprecated Display UNITS / unitForDay. Kept so old week numbers still resolve. */
export const WEEK_THEMES: Record<number, string> = Object.fromEntries(
  UNITS.map((u) => [u.id, u.title]),
);
