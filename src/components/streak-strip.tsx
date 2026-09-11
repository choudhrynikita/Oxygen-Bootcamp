"use client";

import { localDate } from "@game/streak";
import { useBootcamp } from "@/lib/bootcamp/store";

function lastSevenDates(today: string): string[] {
  const [y, m, d] = today.split("-").map(Number);
  const out: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const dt = new Date(Date.UTC(y, m - 1, d));
    dt.setUTCDate(dt.getUTCDate() - i);
    out.push(dt.toISOString().slice(0, 10));
  }
  return out;
}

export function StreakStrip() {
  const streak = useBootcamp((s) => s.game.streak);
  const burst = useBootcamp((s) => s.game.dailyBurst);
  const today = localDate();
  const days = lastSevenDates(today);

  return (
    <div className="rounded-xl border border-line bg-card p-4">
      <div className="flex items-baseline justify-between font-[family-name:var(--font-sans)]">
        <p className="m-0 text-sm font-medium">Streak</p>
        <p className="m-0 text-sm text-muted">
          {streak.current} current · {streak.longest} longest · {streak.freezes} freeze
          {streak.freezes === 1 ? "" : "s"}
        </p>
      </div>
      <ol className="mt-3 flex gap-2" aria-label="Last seven days">
        {days.map((date) => {
          const active =
            date === burst.date
              ? burst.done
              : streak.lastActiveDate >= date &&
                (() => {
                  const last = streak.lastActiveDate;
                  if (!last) return false;
                  const lastTime = Date.parse(last);
                  const dateTime = Date.parse(date);
                  const diff = (lastTime - dateTime) / 86400000;
                  return diff >= 0 && diff < streak.current;
                })();
          const isToday = date === today;
          return (
            <li key={date} className="flex flex-1 flex-col items-center gap-1">
              <span
                className={`block h-3 w-3 rounded-full border ${
                  active ? "border-good bg-good" : "border-line bg-track"
                }`}
                aria-hidden
              />
              <span className="font-[family-name:var(--font-sans)] text-[11px] text-muted">
                {isToday ? "Today" : date.slice(8)}
                <span className="sr-only">
                  {date}
                  {active ? " done" : " not done"}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
