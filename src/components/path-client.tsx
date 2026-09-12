"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useBootcamp } from "@/lib/bootcamp/store";
import { canUnlock } from "@progress/unlocks";
import { WEEK_THEMES } from "@/lib/bootcamp/weeks";

type Row = {
  day: number;
  week: number;
  title: string;
  boss: boolean;
};

export function PathClient({ catalog }: { catalog: Row[] }) {
  const state = useBootcamp();
  const weeks = Array.from({ length: 12 }, (_, i) => i + 1);

  const currentWeek = useMemo(() => {
    const open = catalog.find((d) => {
      const st = state.days[String(d.day)]?.status;
      return st === "started" || st === "available" || st === "lab_done" || st === "checked";
    });
    return open?.week ?? 1;
  }, [catalog, state.days]);

  const [openWeek, setOpenWeek] = useState(currentWeek);

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl">Path</h1>
      <p className="text-muted">One week at a time. Finish Sunday’s check to open the next week.</p>
      {weeks.map((w) => {
        const days = catalog.filter((d) => d.week === w);
        const isOpen = openWeek === w;
        const done = days.filter((d) => {
          const st = state.days[String(d.day)]?.status;
          return st === "complete" || st === "checked";
        }).length;
        return (
          <section key={w} className="mt-3 border-b border-line">
            <button
              type="button"
              className="flex min-h-12 w-full items-center justify-between gap-3 py-3 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenWeek(isOpen ? 0 : w)}
            >
              <span className="font-[family-name:var(--font-sans)] text-base font-bold text-navy">
                Week {w} · {WEEK_THEMES[w]}
              </span>
              <span className="font-[family-name:var(--font-sans)] text-sm text-muted">
                {done}/{days.length}
              </span>
            </button>
            {isOpen ? (
              <ol className="mb-4 grid list-none grid-cols-1 gap-2 p-0">
                {days.map((d) => {
                  const rec = state.days[String(d.day)];
                  const locked = (rec?.status ?? "locked") === "locked" && !canUnlock(state, d.day);
                  const status = rec?.status ?? (d.day === 1 ? "available" : "locked");
                  const inner = (
                    <>
                      <span className="font-[family-name:var(--font-sans)] text-xs text-muted">
                        Day {d.day}
                        {d.boss ? " · week check" : ""}
                      </span>
                      <span className="block">{d.title}</span>
                    </>
                  );
                  return (
                    <li key={d.day}>
                      {locked ? (
                        <div className="rounded-xl border border-line bg-track/40 p-3 text-muted">{inner}</div>
                      ) : (
                        <Link
                          href={`/session/${d.day}`}
                          className="block rounded-xl border border-line bg-card p-3 no-underline hover:border-accent"
                        >
                          {inner}
                          <span className="sr-only">{status.replace("_", " ")}</span>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
