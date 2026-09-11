"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BurstPanel } from "@/components/burst-panel";
import { StreakStrip } from "@/components/streak-strip";
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
    <div className="grid gap-4">
      <header>
        <p className="m-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.14em] text-accent-dark uppercase">
          Today
        </p>
        <h1 className="mt-1 mb-0 text-3xl">
          Day {dayNum}: {current?.title ?? day1.title}
        </h1>
        <p className="mt-1 text-muted">
          About {current?.timeboxMinutes ?? 90} minutes · Week {week}: {WEEK_THEMES[week]} · {rank.label}
        </p>
      </header>

      {firstVisit && dayNum === 1 ? (
        <section className="rounded-xl border border-line bg-card p-4">
          <h2 className="mt-0 font-[family-name:var(--font-sans)] text-base font-semibold">Welcome to the desk</h2>
          <p className="mb-0">
            You write help pages. This course puts you in Oxygen, the app writers use. Day 1 is
            install and look around. That is enough. Adobe’s website tool waits until week 9.
          </p>
        </section>
      ) : null}

      <StreakStrip />

      <section className="rounded-xl border border-line bg-card p-4">
        <h2 className="mt-0 font-[family-name:var(--font-sans)] text-base font-semibold">What you will do</h2>
        <p className="mb-0">{current?.objective ?? day1.objective}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href={`/session/${dayNum}`}
            className="rounded-full bg-accent px-4 py-2 font-[family-name:var(--font-sans)] text-sm font-medium text-accent-fg no-underline"
          >
            Start session
          </Link>
          <Link
            href={`/day/${dayNum}`}
            className="rounded-full border border-line px-4 py-2 font-[family-name:var(--font-sans)] text-sm no-underline"
          >
            Full day
          </Link>
          <Link
            href={`/practice`}
            className="rounded-full border border-line px-4 py-2 font-[family-name:var(--font-sans)] text-sm no-underline"
          >
            Practice files
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-line bg-card p-4">
        <h2 className="mt-0 font-[family-name:var(--font-sans)] text-base font-semibold">Next unfinished lab</h2>
        <p className="mb-2">{current?.labTitle}</p>
        <p className="m-0 text-sm text-muted">
          {game.xp} XP · {game.badges.length} badges
        </p>
      </section>

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
