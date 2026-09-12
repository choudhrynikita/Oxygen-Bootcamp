"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BurstPanel } from "@/components/burst-panel";
import { useBootcamp } from "@/lib/bootcamp/store";
import type { DayDoc } from "@/lib/bootcamp/types";
import { canUnlock } from "@progress/unlocks";
import { rankFor } from "@game/xp";
import { WEEK_THEMES } from "@/lib/bootcamp/weeks";

type Summary = {
  day: number;
  week: number;
  title: string;
  objective: string;
  timeboxMinutes: number;
  boss: boolean;
  labTitle: string;
  dailyBurstPool: DayDoc["dailyBurstPool"];
};

export function TodayClient({ catalog, day1 }: { catalog: Summary[]; day1: DayDoc }) {
  const days = useBootcamp((s) => s.days);
  const game = useBootcamp((s) => s.game);
  const state = useBootcamp();
  const [q, setQ] = useState("");
  const rank = rankFor(state);

  const current = useMemo(() => {
    const next = catalog.find((d) => {
      const st = days[String(d.day)]?.status;
      return !st || st === "available" || st === "started" || st === "locked";
    });
    const open = catalog.find((d) => {
      const st = days[String(d.day)]?.status;
      return st === "started" || st === "available" || st === "lab_done" || st === "checked";
    });
    return open ?? next ?? catalog[0];
  }, [catalog, days]);

  const filtered = catalog.filter((d) => {
    if (!q.trim()) return false;
    const hay = `${d.day} ${d.title} ${d.objective}`.toLowerCase();
    return hay.includes(q.trim().toLowerCase());
  });

  const burstPool = current?.dailyBurstPool ?? day1.dailyBurstPool;
  const dayNum = current?.day ?? 1;
  const week = current?.week ?? 1;
  const firstVisit = !days["1"]?.status || days["1"]?.status === "available";

  return (
    <div className="mx-auto grid max-w-2xl gap-6">
      <header>
        <p className="m-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.14em] text-accent-dark uppercase">
          Day {dayNum} of 90 · {rank.label}
          {game.streak.current ? ` · ${game.streak.current}-day streak` : ""}
        </p>
        <h1 className="mt-2 mb-2 text-3xl">{current?.title ?? day1.title}</h1>
        <p className="mt-0 mb-0 text-muted">{current?.objective ?? day1.objective}</p>
        <p className="mt-2 mb-0 font-[family-name:var(--font-sans)] text-sm text-muted">
          About {current?.timeboxMinutes ?? 90} min · Week {week}: {WEEK_THEMES[week]}
        </p>
      </header>

      {firstVisit && dayNum === 1 ? (
        <p className="m-0">
          You write help pages. Day 1 is install and look around. Adobe’s website tool waits until week 9.
        </p>
      ) : null}

      <div>
        <Link
          href={`/session/${dayNum}`}
          className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 py-3 font-[family-name:var(--font-sans)] text-sm font-bold text-accent-fg no-underline"
        >
          Start course
        </Link>
        <p className="mt-3 mb-0 font-[family-name:var(--font-sans)] text-sm text-muted">
          Lab today: {current?.labTitle}
          {" · "}
          <Link href={`/day/${dayNum}`}>Full day</Link>
        </p>
      </div>

      <BurstPanel preferredPool={burstPool} currentDay={dayNum} />

      <label className="block">
        <span className="font-[family-name:var(--font-sans)] text-sm">Search days</span>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="mt-1 w-full rounded-md border border-line bg-card px-3 py-2"
          placeholder="Install, how-to, table of contents…"
        />
      </label>
      {q.trim() ? (
        <ul className="m-0 list-none p-0">
          {filtered.slice(0, 8).map((d) => {
            const locked = days[String(d.day)]?.status === "locked" && !canUnlock(state, d.day);
            return (
              <li key={d.day} className="border-b border-line py-2">
                {locked ? (
                  <span className="text-muted">
                    Day {d.day} · {d.title} (locked — finish the previous check)
                  </span>
                ) : (
                  <Link href={`/day/${d.day}`}>
                    Day {d.day} · {d.title}
                  </Link>
                )}
              </li>
            );
          })}
          {filtered.length === 0 ? <li className="text-muted">No days match.</li> : null}
        </ul>
      ) : null}
    </div>
  );
}
