"use client";

import Link from "next/link";
import { useBootcamp } from "@/lib/bootcamp/store";
import { canUnlock } from "@progress/unlocks";

export function DayPager({ day }: { day: number }) {
  const state = useBootcamp();
  const prev = day > 1 ? day - 1 : null;
  const next = day < 90 ? day + 1 : null;
  const nextOpen = next
    ? canUnlock(state, next) || (state.days[String(next)]?.status && state.days[String(next)]?.status !== "locked")
    : false;

  return (
    <nav className="my-4 flex flex-wrap gap-2" aria-label="Day pager">
      {prev ? (
        <Link
          href={`/day/${prev}`}
          className="rounded-full border border-line px-3 py-1 font-[family-name:var(--font-sans)] text-sm no-underline"
        >
          Day {prev}
        </Link>
      ) : null}
      {next && nextOpen ? (
        <Link
          href={`/day/${next}`}
          className="rounded-full border border-line px-3 py-1 font-[family-name:var(--font-sans)] text-sm no-underline"
        >
          Day {next}
        </Link>
      ) : next ? (
        <span className="rounded-full border border-line px-3 py-1 font-[family-name:var(--font-sans)] text-sm text-muted">
          Day {next} locked
        </span>
      ) : null}
    </nav>
  );
}
