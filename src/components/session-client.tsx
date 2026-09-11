"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { DayDoc } from "@/lib/bootcamp/types";
import { useBootcamp } from "@/lib/bootcamp/store";
import { SessionStrip } from "@/components/session-strip";
import { SourceBox } from "@/components/source-box";
import { MarkdownBody } from "@/components/markdown-body";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { LabPanel } from "@/components/lab-panel";
import { Quiz } from "@/components/quiz";
import { FieldNote } from "@/components/field-note";
import { DayPager } from "@/components/day-pager";

export function SessionClient({ day }: { day: DayDoc }) {
  const rec = useBootcamp((s) => s.days[String(day.day)]);
  const initial = useMemo(() => {
    const idx = day.sessionQuests.findIndex((q) => !rec?.sessionQuestsDone.includes(q.id));
    return idx >= 0 ? idx : 0;
  }, [day.sessionQuests, rec?.sessionQuestsDone]);
  const [active, setActive] = useState(initial);
  const quest = day.sessionQuests[active] ?? day.sessionQuests[0];
  const block = quest?.block ?? "A";

  return (
    <article>
      <p className="m-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.14em] text-accent-dark uppercase">
        Session · Week {day.week}
        {day.boss ? " · week boss" : ""}
      </p>
      <h1 className="mt-1 text-3xl">
        Day {day.day}: {day.title}
      </h1>
      <p className="text-muted">
        {day.timeboxMinutes} min day · this block {quest?.minutes ?? 20} min. Leave after one block if that is all you
        have.
      </p>
      <p>{day.objective}</p>
      <DayPager day={day.day} />
      <SessionStrip day={day} activeIndex={active} onActiveIndex={setActive} />

      {block === "A" ? (
        <section aria-labelledby="learn-h">
          <h2 id="learn-h" className="font-[family-name:var(--font-sans)] text-xl font-semibold text-navy">
            Learn
          </h2>
          <SourceBox sources={day.sources} youtube={day.youtube} />
          <MarkdownBody source={day.body} />
          {day.youtube.map((v) => (
            <YoutubeEmbed key={v.id} video={v} />
          ))}
        </section>
      ) : null}
      {block === "B" ? <LabPanel day={day} /> : null}
      {block === "C" ? <Quiz day={day.day} items={day.quiz} skills={day.skills} /> : null}
      {block === "D" ? <FieldNote day={day} /> : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {active > 0 ? (
          <button
            type="button"
            className="rounded-full border border-line px-4 py-2 font-[family-name:var(--font-sans)] text-sm"
            onClick={() => setActive((i) => Math.max(0, i - 1))}
          >
            Previous block
          </button>
        ) : null}
        {active < day.sessionQuests.length - 1 ? (
          <button
            type="button"
            className="rounded-full bg-navy px-4 py-2 font-[family-name:var(--font-sans)] text-sm text-accent-fg"
            onClick={() => setActive((i) => Math.min(day.sessionQuests.length - 1, i + 1))}
          >
            Next block
          </button>
        ) : null}
        <Link
          href={`/day/${day.day}`}
          className="rounded-full border border-line px-4 py-2 font-[family-name:var(--font-sans)] text-sm no-underline"
        >
          Full day
        </Link>
      </div>
    </article>
  );
}
