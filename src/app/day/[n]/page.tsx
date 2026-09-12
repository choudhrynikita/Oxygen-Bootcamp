import Link from "next/link";
import { notFound } from "next/navigation";
import { loadDay, listDayNumbers } from "@/lib/bootcamp/curriculum";
import { MarkdownBody } from "@/components/markdown-body";
import { SourceBox } from "@/components/source-box";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { LabPanel } from "@/components/lab-panel";
import { Quiz } from "@/components/quiz";
import { FieldNote } from "@/components/field-note";
import { DayPager } from "@/components/day-pager";

export function generateStaticParams() {
  return listDayNumbers().map((n) => ({ n: String(n) }));
}

export default async function DayPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const dayNum = Number(n);
  if (!Number.isInteger(dayNum) || dayNum < 1 || dayNum > 90) notFound();
  const day = loadDay(dayNum);

  return (
    <article>
      <p className="m-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.14em] text-accent-dark uppercase">
        Week {day.week}
        {day.boss ? " · week boss" : ""}
      </p>
      <h1 className="mt-1 text-3xl">
        Day {day.day}: {day.title}
      </h1>
      <p className="text-muted">
        {day.timeboxMinutes} min · {day.skills.join(" · ")}
      </p>
      <p>{day.objective}</p>
      <p className="mt-4">
        <Link
          href={`/session/${day.day}`}
          className="inline-flex min-h-12 items-center rounded-full bg-accent px-5 py-2 font-[family-name:var(--font-sans)] text-sm font-semibold text-accent-fg no-underline"
        >
          Open course pack
        </Link>
      </p>
      <DayPager day={day.day} />
      <SourceBox sources={day.sources} youtube={day.youtube} />
      <MarkdownBody source={day.body} />
      {day.youtube.map((v) => (
        <YoutubeEmbed key={v.id} video={v} />
      ))}
      <LabPanel day={day} />
      <Quiz day={day.day} items={day.quiz} skills={day.skills} />
      <FieldNote day={day} />
      <p className="mt-8 text-sm">
        <Link href="/path">Back to Path</Link>
      </p>
    </article>
  );
}
