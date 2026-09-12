"use client";

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

  return (
    <div>
      <h1 className="text-3xl">Path · 90 days</h1>
      <p className="text-muted">
        Finish Sunday’s check (lab, quiz, and a short note) to open the next week. You can retry the
        quiz as often as you need. The 5-minute warmup never opens a day.
      </p>
      {weeks.map((w) => {
        const days = catalog.filter((d) => d.week === w);
        return (
          <section key={w} className="mt-6">
            <h2 className="font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">
              Week {w} · {WEEK_THEMES[w]}
            </h2>
            <ol className="grid list-none grid-cols-1 gap-2 p-0 sm:grid-cols-2">
              {days.map((d) => {
                const rec = state.days[String(d.day)];
                const locked = (rec?.status ?? "locked") === "locked" && !canUnlock(state, d.day);
                const status = rec?.status ?? (d.day === 1 ? "available" : "locked");
                const inner = (
                  <>
                    <span className="font-[family-name:var(--font-sans)] text-xs text-muted">
                      Day {d.day}
                      {d.boss ? " · week check" : ""} · {status.replace("_", " ")}
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
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
