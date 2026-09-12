"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, List, X } from "lucide-react";
import type { DayDoc } from "@/lib/bootcamp/types";
import type { CoursePack, PackLesson } from "@/lib/bootcamp/pack-types";
import { flattenLessons, isInteractive, knowledgeChecks } from "@/lib/bootcamp/pack-types";
import { useBootcamp } from "@/lib/bootcamp/store";
import { FieldNote } from "@/components/field-note";
import { ContinueBar, RiseBlock, segmentBlocks } from "@/components/rise/blocks";

type View = "cover" | "lesson" | "summary";

export function PackPlayer({ day, pack }: { day: DayDoc; pack: CoursePack }) {
  const rec = useBootcamp((s) => s.days[String(day.day)]);
  const startDay = useBootcamp((s) => s.startDay);
  const completeQuest = useBootcamp((s) => s.completeQuest);
  const completeQuiz = useBootcamp((s) => s.completeQuiz);

  const lessons = useMemo(() => flattenLessons(pack), [pack]);
  const kcs = useMemo(() => knowledgeChecks(pack), [pack]);
  const doneSet = useMemo(() => new Set(rec?.sessionQuestsDone ?? []), [rec?.sessionQuestsDone]);

  const firstIncomplete = lessons.find((l) => !doneSet.has(l.id)) ?? lessons[0];
  const resumed = lessons.some((l) => doneSet.has(l.id));

  const [view, setView] = useState<View>("cover");
  const [lessonId, setLessonId] = useState(firstIncomplete?.id ?? lessons[0]?.id);
  const [menuOpen, setMenuOpen] = useState(false);
  const [blockDone, setBlockDone] = useState<Record<string, boolean>>({});
  const [kcCorrect, setKcCorrect] = useState<Record<string, boolean>>({});
  const [segment, setSegment] = useState(0);

  const lesson = lessons.find((l) => l.id === lessonId) ?? lessons[0];
  const lessonIndex = lessons.findIndex((l) => l.id === lesson?.id);
  const completedCount = lessons.filter((l) => doneSet.has(l.id)).length;
  const percent = Math.round((completedCount / Math.max(1, lessons.length)) * 100);

  useEffect(() => {
    startDay(day.day);
  }, [day.day, startDay]);

  useEffect(() => {
    setSegment(0);
    setMenuOpen(false);
  }, [lessonId, view]);

  const markBlock = useCallback((id: string) => {
    setBlockDone((s) => (s[id] ? s : { ...s, [id]: true }));
  }, []);

  const onKc = useCallback((id: string, correct: boolean) => {
    setKcCorrect((s) => ({ ...s, [id]: correct }));
    setBlockDone((s) => (s[id] ? s : { ...s, [id]: true }));
  }, []);

  function lessonUnlocked(index: number) {
    if (index <= 0) return true;
    return lessons.slice(0, index).every((l) => doneSet.has(l.id));
  }

  function finishLesson(l: PackLesson) {
    completeQuest(day.day, l.id, day.skills);
    if (l.questId) completeQuest(day.day, l.questId, day.skills);
    const idx = lessons.findIndex((x) => x.id === l.id);
    const next = lessons[idx + 1];
    if (next) {
      setLessonId(next.id);
      setView("lesson");
    } else {
      scoreQuizIfReady();
      setView("summary");
    }
  }

  function goLesson(id: string) {
    const idx = lessons.findIndex((l) => l.id === id);
    if (idx < 0 || !lessonUnlocked(idx)) return;
    setLessonId(id);
    setView("lesson");
  }

  function scoreQuizIfReady(extra?: Record<string, boolean>) {
    const map = { ...kcCorrect, ...extra };
    if (!kcs.length) return;
    const answered = kcs.filter((k) => k.id in map).length;
    if (answered < kcs.length) return;
    if (typeof rec?.quizScore === "number") return;
    const right = kcs.filter((k) => map[k.id]).length;
    completeQuiz(day.day, Math.round((right / kcs.length) * 100), day.skills);
    completeQuest(day.day, "c", day.skills);
  }

  const outline = (
    <Outline
      pack={pack}
      lessons={lessons}
      view={view}
      lessonId={lessonId}
      doneSet={doneSet}
      percent={percent}
      unlocked={lessonUnlocked}
      onCover={() => setView("cover")}
      onLesson={goLesson}
      onSummary={() => {
        if (completedCount === lessons.length) {
          scoreQuizIfReady();
          setView("summary");
        }
      }}
    />
  );

  return (
    <div className="rise-player flex min-h-[calc(100dvh-52px)] flex-col bg-paper md:flex-row">
      <aside className="hidden w-72 shrink-0 border-r border-line bg-card md:block">{outline}</aside>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-sidebar/60"
            aria-label="Close lessons"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative h-full w-[min(100%,20rem)] bg-card shadow-[var(--shadow-soft)]">{outline}</div>
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2 border-b border-line bg-card px-3 py-2 md:hidden">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md"
            aria-label="Lessons"
            onClick={() => setMenuOpen(true)}
          >
            <List className="h-5 w-5" />
          </button>
          <p className="m-0 min-w-0 flex-1 truncate font-[family-name:var(--font-sans)] text-sm font-semibold">
            {view === "cover" ? pack.cover.title : view === "summary" ? "Summary" : lesson?.title}
          </p>
          <span className="font-[family-name:var(--font-sans)] text-xs tabular-nums text-muted">{percent}%</span>
        </div>

        {view === "cover" ? (
          <Cover
            pack={pack}
            resume={resumed}
            onStart={() => {
              setLessonId(firstIncomplete?.id ?? lessons[0]?.id);
              setView("lesson");
            }}
          />
        ) : view === "summary" ? (
          <Summary day={day} pack={pack} />
        ) : lesson ? (
          <LessonCanvas
            day={day}
            pack={pack}
            lesson={lesson}
            lessonIndex={lessonIndex}
            lessonCount={lessons.length}
            blockDone={blockDone}
            markBlock={markBlock}
            onKc={(id, correct) => {
              onKc(id, correct);
              scoreQuizIfReady({ [id]: correct });
            }}
            segment={segment}
            setSegment={setSegment}
            onFinish={() => finishLesson(lesson)}
          />
        ) : null}
      </div>
    </div>
  );
}

function Cover({ pack, resume, onStart }: { pack: CoursePack; resume: boolean; onStart: () => void }) {
  return (
    <section className="flex flex-1 flex-col justify-center bg-navy px-6 py-16 text-sidebar-fg md:px-16">
      <p className="m-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.18em] text-sidebar-muted uppercase">
        {pack.cover.kicker}
      </p>
      <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-sans)] text-4xl leading-tight font-semibold tracking-tight text-accent-fg md:text-5xl">
        {pack.cover.title}
      </h1>
      <p className="mt-6 max-w-xl text-lg text-sidebar-fg">{pack.cover.overview}</p>
      <p className="mt-4 font-[family-name:var(--font-sans)] text-sm text-sidebar-muted">
        {pack.cover.durationMin} min · {pack.cover.audience}
      </p>
      <div className="mt-10">
        <button
          type="button"
          onClick={onStart}
          className="min-h-12 rounded-full bg-accent px-8 py-3 font-[family-name:var(--font-sans)] text-sm font-semibold text-accent-fg"
        >
          {resume ? "Resume course" : "Start course"}
        </button>
      </div>
    </section>
  );
}

function Outline({
  pack,
  lessons,
  view,
  lessonId,
  doneSet,
  percent,
  unlocked,
  onCover,
  onLesson,
  onSummary,
}: {
  pack: CoursePack;
  lessons: PackLesson[];
  view: View;
  lessonId: string;
  doneSet: Set<string>;
  percent: number;
  unlocked: (i: number) => boolean;
  onCover: () => void;
  onLesson: (id: string) => void;
  onSummary: () => void;
}) {
  const summaryOpen = lessons.every((l) => doneSet.has(l.id));
  return (
    <nav aria-label="Course lessons" className="flex h-full flex-col">
      <div className="border-b border-line px-4 py-4">
        <p className="m-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.14em] text-muted uppercase">
          {pack.cover.kicker}
        </p>
        <p className="mt-1 mb-3 font-[family-name:var(--font-sans)] text-sm font-semibold text-navy">{pack.cover.title}</p>
        <div className="h-1.5 overflow-hidden rounded-full bg-track">
          <div className="h-full bg-teal" style={{ width: `${percent}%` }} />
        </div>
        <p className="mt-2 mb-0 font-[family-name:var(--font-sans)] text-xs tabular-nums text-muted">{percent}% complete</p>
      </div>
      <ul className="m-0 flex-1 list-none overflow-y-auto p-2">
        <li>
          <button
            type="button"
            onClick={onCover}
            className={`flex min-h-11 w-full items-center gap-2 rounded-md px-3 py-2 text-left font-[family-name:var(--font-sans)] text-sm ${
              view === "cover" ? "bg-pick text-navy" : "text-muted"
            }`}
          >
            Cover
          </button>
        </li>
        {pack.sections.map((section) => (
          <li key={section.id} className="mt-2">
            <p className="m-0 px-3 py-1 font-[family-name:var(--font-sans)] text-[11px] tracking-[0.14em] text-muted uppercase">
              {section.title}
            </p>
            <ul className="m-0 list-none p-0">
              {section.lessons.map((l) => {
                const idx = lessons.findIndex((x) => x.id === l.id);
                const open = unlocked(idx);
                const current = view === "lesson" && lessonId === l.id;
                const done = doneSet.has(l.id);
                return (
                  <li key={l.id}>
                    <button
                      type="button"
                      disabled={!open}
                      onClick={() => onLesson(l.id)}
                      className={`flex min-h-11 w-full items-start gap-2 rounded-md px-3 py-2 text-left font-[family-name:var(--font-sans)] text-sm disabled:opacity-40 ${
                        current ? "bg-navy text-accent-fg" : "text-ink"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                          done
                            ? "border-good bg-good text-accent-fg"
                            : current
                              ? "border-accent-fg"
                              : "border-line"
                        }`}
                      >
                        {done ? <Check className="h-3 w-3" /> : idx + 1}
                      </span>
                      <span>
                        <span className="block leading-snug">{l.title}</span>
                        <span className={`block text-[11px] ${current ? "text-chrome-muted" : "text-muted"}`}>
                          {l.durationMin} min
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
        <li className="mt-2">
          <button
            type="button"
            disabled={!summaryOpen}
            onClick={onSummary}
            className={`flex min-h-11 w-full items-center gap-2 rounded-md px-3 py-2 text-left font-[family-name:var(--font-sans)] text-sm disabled:opacity-40 ${
              view === "summary" ? "bg-pick text-navy" : "text-muted"
            }`}
          >
            Summary
          </button>
        </li>
      </ul>
      <div className="border-t border-line p-3">
        <Link
          href="/"
          className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-line font-[family-name:var(--font-sans)] text-sm no-underline"
        >
          <X className="h-4 w-4" />
          Exit course
        </Link>
      </div>
    </nav>
  );
}

function LessonCanvas({
  day,
  pack,
  lesson,
  lessonIndex,
  lessonCount,
  blockDone,
  markBlock,
  onKc,
  segment,
  setSegment,
  onFinish,
}: {
  day: DayDoc;
  pack: CoursePack;
  lesson: PackLesson;
  lessonIndex: number;
  lessonCount: number;
  blockDone: Record<string, boolean>;
  markBlock: (id: string) => void;
  onKc: (id: string, correct: boolean) => void;
  segment: number;
  setSegment: (n: number | ((s: number) => number)) => void;
  onFinish: () => void;
}) {
  const segments = useMemo(() => segmentBlocks(lesson.blocks), [lesson.blocks]);
  const visible = segments.slice(0, segment + 1);
  const current = segments[segment];
  const last = segment >= segments.length - 1;

  function continueEnabled() {
    if (!current) return false;
    const rule = current.continue?.rule ?? "none";
    if (!current.continue && last) return true;
    if (rule === "none") return true;
    const inSeg = current.blocks.filter(isInteractive);
    if (rule === "complete-block-above") {
      const prev = inSeg[inSeg.length - 1];
      return prev ? !!blockDone[prev.id] : true;
    }
    const above = visible.flatMap((s) => s.blocks).filter(isInteractive);
    return above.every((b) => blockDone[b.id]);
  }

  function onContinue() {
    if (!continueEnabled()) return;
    if (last) onFinish();
    else setSegment((s) => s + 1);
  }

  return (
    <article className="mx-auto w-full max-w-2xl flex-1 px-5 py-10">
      <p className="m-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.14em] text-muted uppercase">
        Lesson {lessonIndex + 1} of {lessonCount}
      </p>
      <h1 className="mt-2 mb-8 font-[family-name:var(--font-sans)] text-3xl leading-tight font-semibold tracking-tight text-navy">
        {lesson.title}
      </h1>
      {visible.map((seg, i) => (
        <div key={seg.continue?.id ?? `seg-${i}`}>
          {seg.blocks.map((block) => (
            <RiseBlock
              key={block.id}
              block={block}
              day={day}
              pack={pack}
              complete={!!blockDone[block.id]}
              onComplete={() => markBlock(block.id)}
              onKc={onKc}
            />
          ))}
          {i === visible.length - 1 && (seg.continue || last) ? (
            <ContinueBar
              label={
                seg.continue?.label ??
                (last ? (lessonIndex + 1 === lessonCount ? "Go to summary" : "Next lesson") : "Continue")
              }
              enabled={continueEnabled()}
              onClick={onContinue}
            />
          ) : null}
        </div>
      ))}
    </article>
  );
}

function Summary({ day, pack }: { day: DayDoc; pack: CoursePack }) {
  return (
    <article className="mx-auto w-full max-w-2xl flex-1 px-5 py-12">
      <p className="m-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.14em] text-muted uppercase">Summary</p>
      <h1 className="mt-2 font-[family-name:var(--font-sans)] text-3xl font-semibold tracking-tight text-navy">
        {pack.summary.heading}
      </h1>
      <ol className="mt-6 list-none space-y-3 p-0">
        {pack.objectives.map((lo) => (
          <li key={lo.id} className="flex gap-3 rounded-xl border border-line bg-card p-4">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-good" aria-hidden />
            <span>
              <span className="block font-[family-name:var(--font-sans)] text-[11px] tracking-[0.12em] text-muted uppercase">
                {lo.bloom}
              </span>
              {lo.text}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-6">{pack.summary.recap}</p>
      <FieldNote day={day} />
      <p className="mt-2 font-[family-name:var(--font-sans)] text-sm text-muted">{pack.summary.nextDayHook}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center rounded-full bg-navy px-6 py-2 font-[family-name:var(--font-sans)] text-sm font-semibold text-accent-fg no-underline"
        >
          Exit course
        </Link>
        <Link
          href={`/day/${day.day}`}
          className="inline-flex min-h-12 items-center rounded-full border border-line px-6 py-2 font-[family-name:var(--font-sans)] text-sm no-underline"
        >
          Notes and sources
        </Link>
      </div>
    </article>
  );
}
