"use client";

import { useEffect, useState } from "react";
import type { DayDoc } from "@/lib/bootcamp/types";
import { useBootcamp } from "@/lib/bootcamp/store";

export function SessionStrip({
  day,
  activeIndex,
  onActiveIndex,
}: {
  day: DayDoc;
  activeIndex?: number;
  onActiveIndex?: (i: number) => void;
}) {
  const rec = useBootcamp((s) => s.days[String(day.day)]);
  const completeQuest = useBootcamp((s) => s.completeQuest);
  const startDay = useBootcamp((s) => s.startDay);
  const [internal, setInternal] = useState(0);
  const active = activeIndex ?? internal;
  const setActive = (i: number) => {
    onActiveIndex?.(i);
    if (activeIndex === undefined) setInternal(i);
  };
  const [remaining, setRemaining] = useState((day.sessionQuests[active]?.minutes ?? 20) * 60);
  const [running, setRunning] = useState(false);
  const quest = day.sessionQuests[active];

  useEffect(() => {
    startDay(day.day);
  }, [day.day, startDay]);

  useEffect(() => {
    setRemaining((day.sessionQuests[active]?.minutes ?? 20) * 60);
    setRunning(false);
  }, [active, day.sessionQuests]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setRemaining((r) => (r > 0 ? r - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  if (!quest) return null;
  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");
  const done = rec?.sessionQuestsDone.includes(quest.id);

  return (
    <div className="mb-6 rounded-xl border border-line bg-card p-3 shadow-[var(--shadow-soft)]">
      <div className="flex flex-wrap items-center gap-3 font-[family-name:var(--font-sans)] text-sm">
        <p className="m-0 font-medium">
          Block {quest.block} · {quest.title}
        </p>
        <p className="m-0 tabular-nums text-muted" aria-live="polite">
          {mm}:{ss}
        </p>
        <button
          type="button"
          className="min-h-11 rounded-full border border-line px-3 py-1"
          onClick={() => setRunning((r) => !r)}
          aria-pressed={running}
        >
          {running ? "Pause" : "Start timer"}
        </button>
        <span className="text-muted">Timer is optional. The quest checkbox is what counts.</span>
      </div>
      <p className="mt-2 mb-0 text-sm">Done when: {quest.done}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {day.sessionQuests.map((q, i) => {
          const qDone = rec?.sessionQuestsDone.includes(q.id);
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => setActive(i)}
              className={`min-h-11 rounded-full px-3 py-1 font-[family-name:var(--font-sans)] text-xs ${
                i === active ? "bg-navy text-accent-fg" : "border border-line"
              }`}
            >
              {q.block}
              {qDone ? " done" : ""}
            </button>
          );
        })}
        <button
          type="button"
          disabled={done}
          onClick={() => completeQuest(day.day, quest.id, day.skills)}
          className="min-h-11 rounded-full bg-teal px-3 py-1 font-[family-name:var(--font-sans)] text-xs text-accent-fg disabled:opacity-50"
        >
          {done ? "Quest recorded" : "Mark quest done"}
        </button>
      </div>
    </div>
  );
}
