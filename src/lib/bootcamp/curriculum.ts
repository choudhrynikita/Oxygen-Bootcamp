import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import type { DayDoc, QuizItem } from "./types";

const LESSON_DIR = join(process.cwd(), "content/lessons");

function asText(value: unknown): string {
  if (value === true) return "True";
  if (value === false) return "False";
  return String(value ?? "");
}

function normalizeQuiz(items: unknown): QuizItem[] {
  if (!Array.isArray(items)) return [];
  return items.map((raw) => {
    const q = raw as QuizItem;
    return {
      ...q,
      q: asText(q.q),
      why: asText(q.why),
      options: (q.options ?? []).map(asText),
    };
  });
}

export function lessonPath(day: number): string {
  return join(LESSON_DIR, `day-${String(day).padStart(3, "0")}.mdx`);
}

export function loadDay(day: number): DayDoc {
  const file = lessonPath(day);
  if (!existsSync(file)) {
    throw new Error(`Missing Day file ${file}`);
  }
  const raw = readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const doc = data as Omit<DayDoc, "body">;
  return {
    ...doc,
    quiz: normalizeQuiz(doc.quiz),
    body: content,
  };
}

export function listDayNumbers(): number[] {
  if (!existsSync(LESSON_DIR)) return [];
  return readdirSync(LESSON_DIR)
    .filter((f) => /^day-\d{3}\.mdx$/.test(f))
    .map((f) => Number(f.slice(4, 7)))
    .sort((a, b) => a - b);
}

export function loadAllDays(): DayDoc[] {
  return listDayNumbers().map(loadDay);
}

export function loadCatalogSummary() {
  return loadAllDays().map((d) => ({
    day: d.day,
    week: d.week,
    title: d.title,
    objective: d.objective,
    timeboxMinutes: d.timeboxMinutes,
    skills: d.skills,
    boss: d.boss,
    badgeId: d.badgeId,
    toolCards: d.toolCards,
    labTitle: d.lab.title,
    pack: d.lab.pack,
    legacyLessonIds: d.legacyLessonIds,
    dailyBurstPool: d.dailyBurstPool,
  }));
}
