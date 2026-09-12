import { mkdirSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import day01 from "./packs/day01.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "scripts/days");
const outDir = join(root, "content/packs");

const BLOOM = {
  remember: "remember",
  understand: "understand",
  apply: "apply",
  analyze: "analyze",
  evaluate: "evaluate",
  create: "create",
};

function plain(s) {
  return String(s ?? "")
    .replace(/\u2014/g, ": ")
    .replace(/—/g, ": ")
    .replace(/\u2013/g, "-")
    .trim();
}

function slug(s, fallback) {
  const t = String(s ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
  return t || fallback;
}

function splitBody(body) {
  const raw = plain(body);
  const parts = raw.split(/^## /m).map((p) => p.trim()).filter(Boolean);
  return parts.map((part, i) => {
    const nl = part.indexOf("\n");
    const heading = nl === -1 ? part : part.slice(0, nl).trim();
    const rest = nl === -1 ? "" : part.slice(nl).trim();
    return { heading, rest, i };
  });
}

function flashcardsFrom(text) {
  const cards = [];
  const re = /\*\*([^*]+)\*\*\s*(?:[:–-]|:)\s*([^\n]+)/g;
  let m;
  const src = plain(text);
  while ((m = re.exec(src))) {
    cards.push({ front: m[1].trim(), back: m[2].trim().replace(/\.$/, "") });
  }
  return cards.slice(0, 6);
}

function objectivesFor(day) {
  const obj = plain(day.objective).replace(/\.$/, "");
  const los = [{ id: "lo1", bloom: BLOOM.apply, text: obj }];
  los.push({
    id: "lo2",
    bloom: BLOOM.apply,
    text: `Carry out the lab: ${plain(day.lab.title).replace(/\.$/, "")}`,
  });
  if (day.quiz?.[0]) {
    const q = plain(day.quiz[0].q).replace(/\?$/, "");
    los.push({ id: "lo3", bloom: BLOOM.remember, text: `Choose the right answer for: ${q}` });
  }
  if (day.boss) {
    los.push({
      id: "lo4",
      bloom: BLOOM.evaluate,
      text: "Say what each error meant, in plain words",
    });
  }
  return los;
}

function packFromDay(day) {
  const sections = splitBody(day.body);
  const cards = flashcardsFrom(day.body);
  const los = objectivesFor(day);
  const learnBlocks = [];
  const extraAccordion = [];

  for (const sec of sections) {
    const h = sec.heading;
    if (/^lab$/i.test(h) || /^watch$/i.test(h)) continue;
    if (/^word/i.test(h)) {
      extraAccordion.push({
        title: h,
        body: sec.rest || "The word is in the heading. Use it today.",
      });
      continue;
    }
    if (/^(do not|if the file|optional|tone|one line about later|a check)/i.test(h)) {
      extraAccordion.push({ title: h, body: sec.rest });
      continue;
    }
    learnBlocks.push({
      type: "text",
      id: `t-${sec.i}`,
      heading: h,
      body: sec.rest || h,
    });
  }

  if (extraAccordion.length) {
    learnBlocks.push({ type: "accordion", id: "learn-extra", items: extraAccordion });
  }
  if (cards.length) {
    learnBlocks.push({ type: "flashcards", id: "learn-cards", cards });
  }
  if ((day.youtube ?? []).length) {
    const v = day.youtube[0];
    learnBlocks.push({
      type: "media",
      id: "learn-vid",
      youtubeId: v.id,
      title: v.title,
      watchFor: v.watchFor ?? [],
    });
  }
  const learnHasInteractive = learnBlocks.some((b) =>
    ["accordion", "flashcards", "tabs", "process"].includes(b.type),
  );
  learnBlocks.push({
    type: "continue",
    id: "learn-go",
    rule: learnHasInteractive ? "complete-all-above" : "none",
    label: "Continue",
  });

  const processSteps = (day.lab.steps ?? []).map((st, i) => ({
    title: `Step ${i + 1}`,
    body: plain(st),
  }));

  const kcBlocks = (day.quiz ?? []).map((q, i) => ({
    type: "knowledge-check",
    id: `kc-${i}`,
    kind: "mc",
    q: plain(q.q),
    options: q.options.map(plain),
    answer: q.answer,
    why: plain(q.why),
  }));
  kcBlocks.push({
    type: "continue",
    id: "check-go",
    rule: "complete-all-above",
    label: "Continue",
  });

  const welcomeTitle = day.boss ? "This week’s check" : "Welcome";
  const learnTitle = sections[0]?.heading || "The idea";

  return {
    day: day.n,
    cover: {
      kicker: `Day ${day.n} of 90 · Week ${day.week}${day.boss ? " · week check" : ""}`,
      title: plain(day.title),
      overview: plain(day.objective),
      durationMin: day.minutes,
      audience: day.boss
        ? "You already met these moves. Today you prove you can name them."
        : "New writers. Do the work in Oxygen, or on the labeled mock if the app cannot open.",
    },
    objectives: los,
    sections: [
      {
        id: "today",
        title: "Today",
        lessons: [
          {
            id: "welcome",
            title: welcomeTitle,
            durationMin: 8,
            questId: "a",
            blocks: [
              {
                type: "statement",
                id: "w-stmt",
                body: plain(day.objective),
              },
              {
                type: "text",
                id: "w-body",
                heading: "What today is",
                body: day.boss
                  ? "This is the week check. You already met these errors. You are only proving you can name them. Fail the quiz and the next week stays locked. Retry as many times as you want."
                  : `About ${day.minutes} minutes. Do the lab in the app. The check at the end uses words from today only.`,
              },
              { type: "objectives", id: "w-lo" },
              { type: "continue", id: "w-go", rule: "none", label: "Continue" },
            ],
          },
          {
            id: "learn",
            title: learnTitle,
            durationMin: Math.max(12, Math.round((day.minutes - 40) / 2)),
            questId: "a",
            blocks: learnBlocks.length
              ? learnBlocks
              : [
                  {
                    type: "text",
                    id: "t-0",
                    heading: learnTitle,
                    body: plain(day.objective),
                  },
                  { type: "continue", id: "learn-go", rule: "none", label: "Continue" },
                ],
          },
          {
            id: "lab",
            title: plain(day.lab.title),
            durationMin: 25,
            questId: "b",
            blocks: [
              {
                type: "text",
                id: "lab-lead",
                heading: "Do the work",
                body: `This lab can fail. Fail when: ${plain(day.lab.failWhen)}\n\nExpected: ${plain(day.lab.expected)}`,
              },
              {
                type: "process",
                id: "lab-process",
                intro: "Walk the steps in order. Tick them in the lab after you actually do them.",
                steps: processSteps,
                summary: plain(day.lab.expected),
              },
              { type: "lab", id: "lab-block" },
              { type: "continue", id: "lab-go", rule: "complete-block-above", label: "Continue" },
            ],
          },
          {
            id: "check",
            title: "Check",
            durationMin: 12,
            questId: "c",
            blocks: kcBlocks,
          },
        ],
      },
    ],
    summary: {
      heading: "You should now be able to",
      recap: plain(day.objective),
      nextDayHook: plain(day.tomorrowHook),
    },
  };
}

const files = readdirSync(dir)
  .filter((f) => /^week\d+\.mjs$/.test(f))
  .sort();

const days = [];
for (const f of files) {
  const mod = await import(pathToFileURL(join(dir, f)).href);
  days.push(...mod.default);
}
days.sort((a, b) => a.n - b.n);
if (days.length !== 90) {
  throw new Error(`Expected 90 days, got ${days.length}`);
}

function deepPlain(value) {
  if (typeof value === "string") return plain(value);
  if (Array.isArray(value)) return value.map(deepPlain);
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = deepPlain(v);
    return out;
  }
  return value;
}

mkdirSync(outDir, { recursive: true });
for (const day of days) {
  const pack = deepPlain(day.n === 1 ? day01 : packFromDay(day));
  if (pack.day !== day.n) throw new Error(`Pack day mismatch ${pack.day} vs ${day.n}`);
  const name = `day-${String(day.n).padStart(3, "0")}.json`;
  writeFileSync(join(outDir, name), `${JSON.stringify(pack, null, 2)}\n`);
}

console.log(`Wrote ${days.length} course packs to content/packs`);
