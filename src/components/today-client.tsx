"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BurstPanel } from "@/components/burst-panel";
import { StreakStrip } from "@/components/streak-strip";
import { useBootcamp } from "@/lib/bootcamp/store";
import type { DayDoc } from "@/lib/bootcamp/types";
import { canUnlock } from "@progress/unlocks";
import { rankFor } from "@game/xp";

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

  return (
    <div className="grid gap-4">
      <header>
        <p className="m-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.14em] text-accent-dark uppercase">
          Today
        </p>
        <h1 className="mt-1 mb-0 text-3xl">
          Day {current?.day ?? 1}: {current?.title ?? day1.title}
        </h1>
        <p className="mt-1 text-muted">
          {current?.timeboxMinutes ?? 90} min · Week {current?.week ?? 1} · Rank {rank.label}
        </p>
      </header>

      <StreakStrip />

      <section className="rounded-xl border border-line bg-card p-4">
        <h2 className="mt-0 font-[family-name:var(--font-sans)] text-base font-semibold">Objective</h2>
        <p className="mb-0">{current?.objective ?? day1.objective}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href={`/session/${current?.day ?? 1}`}
            className="rounded-full bg-accent px-4 py-2 font-[family-name:var(--font-sans)] text-sm font-medium text-accent-fg no-underline"
          >
            Start session
          </Link>
          <Link
            href={`/day/${current?.day ?? 1}`}
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
          XP {game.xp} · badges {game.badges.length} · cards {game.cards.length}
        </p>
      </section>

      <BurstPanel preferredPool={burstPool} />

      <label className="block">
        <span className="font-[family-name:var(--font-sans)] text-sm">Search days</span>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="mt-1 w-full rounded-md border border-line bg-card px-3 py-2"
          placeholder="Maps, conref, Quick Publish…"
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
                    Day {d.day} · {d.title} (locked)
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
