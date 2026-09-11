import { burstPoolForDay } from "./burst-pool.mjs";

function yamlString(s) {
  if (s == null) return "null";
  const t = String(s);
  if (
    /^(true|false|yes|no|on|off|null)$/i.test(t) ||
    /^-?\d+(\.\d+)?$/.test(t) ||
    /[:#\n"'{}[\],&*?]|^\s|\s$/.test(t)
  ) {
    return `"${t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n")}"`;
  }
  return t;
}

function yamlList(arr, indent, mapper) {
  if (!arr?.length) return `${indent}[]`;
  return arr.map((item) => mapper(item, indent)).join("\n");
}

export function toMdx(day) {
  const pool = day.dailyBurstPool ?? burstPoolForDay(day.n);
  const yaml = [
    `day: ${day.n}`,
    `week: ${day.week}`,
    `title: ${yamlString(day.title)}`,
    `objective: ${yamlString(day.objective)}`,
    `timeboxMinutes: ${day.minutes}`,
    `skills: [${day.skills.join(", ")}]`,
    `legacyLessonIds: [${(day.legacy ?? []).map((x) => yamlString(x)).join(", ")}]`,
    `youtube:`,
    ...(day.youtube ?? []).flatMap((v) => [
      `  - id: ${v.id}`,
      `    title: ${yamlString(v.title)}`,
      `    watchFor:`,
      ...(v.watchFor ?? ["The named control the lesson asks you to find"]).map(
        (w) => `      - ${yamlString(w)}`,
      ),
    ]),
    `sources:`,
    ...(day.sources ?? []).map(
      (s) =>
        `  - { href: ${yamlString(s.href)}, label: ${yamlString(s.label)}, dated: ${yamlString(s.dated ?? "2026-09")} }`,
    ),
    `lab:`,
    `  id: lab-${day.n}`,
    `  title: ${yamlString(day.lab.title)}`,
    `  pack: ${yamlString(day.lab.pack)}`,
    `  failWhen: ${yamlString(day.lab.failWhen)}`,
    `  expected: ${yamlString(day.lab.expected)}`,
    `  steps:`,
    ...day.lab.steps.map((st) => `    - ${yamlString(st)}`),
    `sessionQuests:`,
    ...day.quests.flatMap((q) => [
      `  - id: ${q.id}`,
      `    block: ${q.block}`,
      `    title: ${yamlString(q.title)}`,
      `    minutes: ${q.minutes}`,
      `    done: ${yamlString(q.done)}`,
    ]),
    `dailyBurstPool: [${pool.join(", ")}]`,
    `toolCards: [${(day.toolCards ?? []).join(", ")}]`,
    `badgeId: ${day.badgeId ? yamlString(day.badgeId) : "null"}`,
    `boss: ${day.boss ? "true" : "false"}`,
    `checks:`,
    ...(day.checks ?? [{ id: "lab", prompt: day.lab.expected }]).map(
      (c) => `  - { id: ${yamlString(c.id)}, prompt: ${yamlString(c.prompt)} }`,
    ),
    `quiz:`,
    ...day.quiz.flatMap((q) => [
      `  - q: ${yamlString(q.q)}`,
      `    answer: ${q.answer}`,
      `    why: ${yamlString(q.why)}`,
      `    options:`,
      ...q.options.map((o) => `      - ${yamlString(o)}`),
    ]),
    `fieldNotePrompt: ${yamlString(day.fieldNotePrompt)}`,
    `tomorrowHook: ${yamlString(day.tomorrowHook)}`,
  ].join("\n");

  return `---
${yaml}
---

${day.body.trim()}
`;
}

export function weekOf(n) {
  if (n <= 7) return 1;
  if (n <= 14) return 2;
  if (n <= 21) return 3;
  if (n <= 28) return 4;
  if (n <= 35) return 5;
  if (n <= 42) return 6;
  if (n <= 49) return 7;
  if (n <= 55) return 8;
  if (n <= 62) return 9;
  if (n <= 69) return 10;
  if (n <= 75) return 11;
  return 12;
}

export function defaultQuests({ learn, doTitle, doDone, stress }) {
  return [
    {
      id: "a",
      block: "A",
      title: learn,
      minutes: 22,
      done: "You can point to it on the screen.",
    },
    {
      id: "b",
      block: "B",
      title: doTitle,
      minutes: 25,
      done: doDone,
    },
    {
      id: "c",
      block: "C",
      title: stress,
      minutes: 22,
      done: "Quiz score at least 70%.",
    },
    {
      id: "d",
      block: "D",
      title: "Write what you did today, in plain words",
      minutes: 20,
      done: "Note saved.",
    },
  ];
}
