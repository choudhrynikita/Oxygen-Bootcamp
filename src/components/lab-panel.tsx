"use client";

import { useState } from "react";
import type { DayDoc } from "@/lib/bootcamp/types";
import { useBootcamp } from "@/lib/bootcamp/store";
import { Celebrate } from "@/components/celebrate";

export function LabPanel({ day }: { day: DayDoc }) {
  const rec = useBootcamp((s) => s.days[String(day.day)]);
  const completeLab = useBootcamp((s) => s.completeLab);
  const completeQuest = useBootcamp((s) => s.completeQuest);
  const [ticks, setTicks] = useState<Record<number, boolean>>({});
  const [celebrate, setCelebrate] = useState(false);
  const done = rec?.status === "lab_done" || rec?.status === "checked" || rec?.status === "complete";

  const allTicked = day.lab.steps.every((_, i) => ticks[i]);

  function finish() {
    completeLab(day.day, day.skills, day.badgeId, day.toolCards);
    completeQuest(day.day, "b", day.skills);
    setCelebrate(true);
  }

  return (
    <section className="mt-8 rounded-xl border-l-[5px] border-teal bg-lab p-4" aria-labelledby="lab-h">
      <h2 id="lab-h" className="mt-0 font-[family-name:var(--font-sans)] text-xl font-semibold text-navy">
        Lab: {day.lab.title}
      </h2>
      <p className="text-sm">
        Pack: <code>{day.lab.pack}</code>
      </p>
      <ol className="steps my-3 list-none space-y-2 p-0">
        {day.lab.steps.map((step, i) => (
          <li key={step} className="flex items-start gap-3 rounded-xl border border-line bg-step p-3">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy font-[family-name:var(--font-sans)] text-xs text-accent-fg">
              {i + 1}
            </span>
            <label className="flex min-h-11 flex-1 items-start gap-2">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0"
                checked={!!ticks[i] || done}
                disabled={done}
                onChange={(e) => setTicks((t) => ({ ...t, [i]: e.target.checked }))}
              />
              <span>{step}</span>
            </label>
          </li>
        ))}
      </ol>
      <p className="rounded-md border border-warn/40 bg-pick p-3 text-sm">
        <strong>This lab can fail.</strong> Fail when: {day.lab.failWhen}
      </p>
      <p className="text-sm">
        <strong>Expected:</strong> {day.lab.expected}
      </p>
      {done ? (
        <p className="font-[family-name:var(--font-sans)] text-sm text-good">Lab recorded. Reopen anytime; history stays.</p>
      ) : (
        <button
          type="button"
          disabled={!allTicked}
          onClick={finish}
          className="mt-2 rounded-full bg-accent px-4 py-2 font-[family-name:var(--font-sans)] text-sm font-medium text-accent-fg disabled:opacity-50"
        >
          Mark lab done — I hit the expected result
        </button>
      )}
      <Celebrate show={celebrate} label="Lab done" />
    </section>
  );
}
