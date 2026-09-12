"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import type { DayDoc } from "@/lib/bootcamp/types";
import type {
  AccordionBlock,
  ButtonsBlock,
  CalloutBlock,
  CoursePack,
  FigureBlock,
  KnowledgeCheckBlock,
  LabeledGraphicBlock,
  ListBlock,
  MediaBlock,
  PackBlock,
  ScenarioBlock,
  StatementBlock,
  TabsBlock,
  TextBlock,
  TimelineBlock,
} from "@/lib/bootcamp/pack-types";
import { MarkdownBody } from "@/components/markdown-body";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { LabPanel } from "@/components/lab-panel";
import { FieldNote } from "@/components/field-note";
import { FirstWindowGraphic, WorkbenchGraphic } from "@/components/rise/graphics";
import { FlashB, ProcessB, SortB } from "@/components/rise/interactions";
import { CourseFigure, LeadLine } from "@/components/rise/figure";
import { useBootcamp } from "@/lib/bootcamp/store";

type DoneProps = { onComplete: () => void; complete: boolean };

export function RiseBlock({
  block,
  day,
  pack,
  complete,
  onComplete,
  onKc,
}: {
  block: PackBlock;
  day: DayDoc;
  pack: CoursePack;
  complete: boolean;
  onComplete: () => void;
  onKc?: (id: string, correct: boolean) => void;
}) {
  switch (block.type) {
    case "text":
      return <TextB block={block} />;
    case "heading":
      return (
        <h2 className="mt-8 mb-2 font-[family-name:var(--font-sans)] text-2xl font-bold tracking-tight text-navy">
          {block.text}
        </h2>
      );
    case "statement":
      return <StatementB block={block} />;
    case "list":
      return <ListB block={block} />;
    case "callout":
      return <CalloutB block={block} />;
    case "media":
      return <MediaB block={block} />;
    case "figure":
      return <FigureB block={block} />;
    case "accordion":
      return <AccordionB block={block} complete={complete} onComplete={onComplete} />;
    case "tabs":
      return <TabsB block={block} complete={complete} onComplete={onComplete} />;
    case "process":
      return <ProcessB block={block} complete={complete} onComplete={onComplete} />;
    case "labeled-graphic":
      return <LabeledB block={block} complete={complete} onComplete={onComplete} />;
    case "flashcards":
      return <FlashB block={block} complete={complete} onComplete={onComplete} />;
    case "sorting":
      return <SortB block={block} complete={complete} onComplete={onComplete} />;
    case "scenario":
      return <ScenarioB block={block} complete={complete} onComplete={onComplete} />;
    case "knowledge-check":
      return <KcB block={block} complete={complete} onComplete={onComplete} onKc={onKc} />;
    case "buttons":
      return <ButtonsB block={block} />;
    case "timeline":
      return <TimelineB block={block} />;
    case "divider":
      return <hr className="my-10 border-line" />;
    case "continue":
      return null;
    case "lab":
      return <LabB day={day} complete={complete} onComplete={onComplete} />;
    case "objectives":
      return <ObjectivesB pack={pack} />;
    case "field-note":
      return <FieldNote day={day} />;
    default:
      return null;
  }
}

function TextB({ block }: { block: TextBlock }) {
  return (
    <div className="rise-block rise-enter">
      {block.heading ? (
        <h2 className="mt-2 mb-3 font-[family-name:var(--font-sans)] text-2xl font-bold tracking-tight text-navy">
          {block.heading}
        </h2>
      ) : null}
      <MarkdownBody source={block.body} />
    </div>
  );
}

function StatementB({ block }: { block: StatementBlock }) {
  return (
    <blockquote className="rise-enter my-12 border-0 px-2 text-center">
      <p className="m-0 font-[family-name:var(--font-sans)] text-2xl leading-snug font-light text-navy md:text-3xl">
        {block.body}
      </p>
    </blockquote>
  );
}

function ListB({ block }: { block: ListBlock }) {
  const Tag = block.ordered ? "ol" : "ul";
  return (
    <Tag className={`my-4 max-w-2xl ${block.ordered ? "list-decimal" : "list-disc"} pl-5`}>
      {block.items.map((item) => (
        <li key={item} className="my-2">
          {item}
        </li>
      ))}
    </Tag>
  );
}

function CalloutB({ block }: { block: CalloutBlock }) {
  const border =
    block.kind === "warning" ? "border-warn bg-warn-bg" : block.kind === "tip" ? "border-accent bg-lab" : "border-navy bg-step";
  return (
    <aside className={`rise-enter my-6 rounded-xl border-l-[5px] ${border} px-4 py-3`}>
      {block.title ? (
        <p className="m-0 font-[family-name:var(--font-sans)] text-sm font-bold text-navy">{block.title}</p>
      ) : null}
      <div className={block.title ? "mt-1" : ""}>
        <MarkdownBody source={block.body} />
      </div>
    </aside>
  );
}

function FigureB({ block }: { block: FigureBlock }) {
  return (
    <CourseFigure
      src={block.src}
      alt={block.alt}
      caption={block.caption}
      credit={block.credit}
      href={block.href}
    />
  );
}

function MediaB({ block }: { block: MediaBlock }) {
  return (
    <div className="rise-enter my-6">
      <YoutubeEmbed
        video={{
          id: block.youtubeId,
          title: block.title,
          watchFor: block.watchFor ?? [],
        }}
      />
    </div>
  );
}

function AccordionB({ block, onComplete }: { block: AccordionBlock } & DoneProps) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const seen = Object.keys(open).length;

  useEffect(() => {
    if (seen >= block.items.length) onComplete();
  }, [seen, block.items.length, onComplete]);

  return (
    <div>
      <LeadLine text={block.lead} />
      <div className="rise-enter my-8 divide-y divide-line overflow-hidden rounded-xl border border-line bg-card">
      {block.items.map((item, i) => {
        const isOpen = !!open[i];
        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex min-h-14 w-full items-center justify-between gap-3 px-5 py-4 text-left font-[family-name:var(--font-sans)] text-base font-bold text-navy"
              aria-expanded={isOpen}
              onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
            >
              {item.title}
              <Plus
                className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5">
                  <MarkdownBody source={item.body} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

function TabsB({ block, onComplete }: { block: TabsBlock } & DoneProps) {
  const [tab, setTab] = useState(0);
  const [seen, setSeen] = useState<Record<number, boolean>>({ 0: true });

  useEffect(() => {
    if (Object.keys(seen).length >= block.items.length) onComplete();
  }, [seen, block.items.length, onComplete]);

  const current = block.items[tab];
  return (
    <div className="rise-enter my-8">
      <LeadLine text={block.lead} />
      <div role="tablist" aria-label="Tabs" className="flex flex-wrap gap-0 border-b border-line">
        {block.items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={tab === i}
            className={`min-h-12 px-5 py-3 font-[family-name:var(--font-sans)] text-sm font-bold transition-colors ${
              tab === i ? "border-b-[3px] border-accent text-accent" : "text-muted"
            }`}
            onClick={() => {
              setTab(i);
              setSeen((s) => ({ ...s, [i]: true }));
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="rise-enter rounded-b-xl border border-t-0 border-line bg-card px-6 py-5">
        {current ? <MarkdownBody source={current.body} /> : null}
      </div>
    </div>
  );
}

function LabeledB({ block, onComplete }: { block: LabeledGraphicBlock } & DoneProps) {
  const [active, setActive] = useState<string | null>(null);
  const [seen, setSeen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (Object.keys(seen).length >= block.labels.length) onComplete();
  }, [seen, block.labels.length, onComplete]);

  function pick(id: string) {
    setActive(id);
    setSeen((s) => ({ ...s, [id]: true }));
  }

  const current = block.labels.find((l) => l.id === active);
  const Graphic = block.variant === "workbench" ? WorkbenchGraphic : FirstWindowGraphic;

  return (
    <div className="rise-enter my-8">
      <LeadLine text={block.lead} />
      {block.src ? (
        <div className="relative overflow-hidden rounded-xl border border-line bg-card shadow-[var(--shadow-soft)]">
          <img src={block.src} alt={block.alt ?? "Oxygen window"} className="block h-auto w-full" />
          {block.labels.map((label, i) =>
            label.x != null && label.y != null ? (
              <button
                key={label.id}
                type="button"
                className={`rise-hotspot absolute grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 font-[family-name:var(--font-sans)] text-xs font-bold ${
                  active === label.id
                    ? "border-accent-fg bg-accent text-accent-fg"
                    : "border-accent-fg bg-accent text-accent-fg"
                }`}
                style={{ left: `${label.x}%`, top: `${label.y}%` }}
                aria-label={label.title}
                onClick={() => pick(label.id)}
              >
                {i + 1}
              </button>
            ) : null,
          )}
        </div>
      ) : (
        <Graphic activeId={active} onPick={pick} labels={block.labels} />
      )}
      {current ? (
        <div className="rise-enter mt-3 rounded-xl border border-line bg-card px-4 py-3">
          <p className="m-0 font-[family-name:var(--font-sans)] text-sm font-bold text-navy">{current.title}</p>
          <p className="mb-0 mt-1">{current.body}</p>
        </div>
      ) : (
        <p className="mt-2 mb-0 font-[family-name:var(--font-sans)] text-sm text-muted">Click each number.</p>
      )}
      {block.caption ? <p className="mt-2 text-sm text-muted">{block.caption}</p> : null}
      {block.credit ? (
        <p className="mt-1 mb-0 font-[family-name:var(--font-sans)] text-xs text-muted">
          {block.href ? (
            <a href={block.href} target="_blank" rel="noopener noreferrer">
              {block.credit}
            </a>
          ) : (
            block.credit
          )}
        </p>
      ) : null}
    </div>
  );
}

function ScenarioB({ block, onComplete }: { block: ScenarioBlock } & DoneProps) {
  const [pick, setPick] = useState<number | null>(null);
  useEffect(() => {
    if (pick != null) onComplete();
  }, [pick, onComplete]);

  return (
    <div className="rise-enter my-8 rounded-xl border border-line bg-card p-6">
      <LeadLine text={block.lead} />
      <p className="mt-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.16em] text-muted uppercase">Scenario</p>
      <p className="text-lg">{block.situation}</p>
      <div className="mt-4 flex flex-col gap-3">
        {block.choices.map((c, i) => {
          const on = pick === i;
          const show = pick != null;
          const good = !!c.correct;
          return (
            <button
              key={c.text}
              type="button"
              disabled={pick != null}
              onClick={() => setPick(i)}
              className={`min-h-14 rounded-xl border px-4 py-4 text-left transition-transform duration-150 active:scale-[0.99] ${
                show && good
                  ? "border-good bg-good-bg"
                  : show && on && !good
                    ? "border-warn bg-warn-bg"
                    : on
                      ? "border-accent bg-pick"
                      : "border-line bg-card hover:border-accent"
              }`}
            >
              {c.text}
            </button>
          );
        })}
      </div>
      {pick != null ? <p className="rise-enter mb-0 mt-4">{block.choices[pick]?.feedback}</p> : null}
    </div>
  );
}

function KcB({
  block,
  onComplete,
  onKc,
}: { block: KnowledgeCheckBlock } & DoneProps & { onKc?: (id: string, correct: boolean) => void }) {
  const [pick, setPick] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const answer = Array.isArray(block.answer) ? block.answer[0] : block.answer;
  const correct = pick === answer;

  function submit() {
    if (pick == null) return;
    setSubmitted(true);
    onKc?.(block.id, pick === answer);
    onComplete();
  }

  return (
    <div className="rise-enter my-8 rounded-xl bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
      <LeadLine text={block.lead} />
      <p className="m-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.16em] text-muted uppercase">
        Knowledge check
      </p>
      <p className="mt-3 mb-5 font-[family-name:var(--font-sans)] text-xl font-bold text-navy">{block.q}</p>
      <div className="flex flex-col gap-3">
        {block.options.map((opt, j) => {
          const on = pick === j;
          const show = submitted;
          const isRight = j === answer;
          return (
            <button
              key={`${j}-${opt}`}
              type="button"
              disabled={submitted}
              onClick={() => setPick(j)}
              className={`flex min-h-14 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-transform duration-150 active:scale-[0.99] ${
                show && isRight
                  ? "border-good bg-good-bg"
                  : show && on && !isRight
                    ? "border-warn bg-warn-bg"
                    : on
                      ? "border-accent bg-pick"
                      : "border-line hover:border-accent"
              }`}
            >
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                  on ? "border-accent bg-accent" : "border-line"
                }`}
              >
                {on ? <span className="h-2 w-2 rounded-full bg-accent-fg" /> : null}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {!submitted ? (
        <button
          type="button"
          disabled={pick == null}
          onClick={submit}
          className="mt-5 min-h-12 rounded-full bg-accent px-8 py-2 font-[family-name:var(--font-sans)] text-sm font-bold text-accent-fg transition-transform duration-150 active:scale-[0.96] disabled:opacity-40"
        >
          Submit
        </button>
      ) : (
        <p className={`rise-enter mb-0 mt-5 ${correct ? "text-good" : "text-warn"}`}>
          {correct ? "Correct. " : "Not quite. "}
          {block.why}
        </p>
      )}
    </div>
  );
}

function ButtonsB({ block }: { block: ButtonsBlock }) {
  const [open, setOpen] = useState<string | null>(null);
  const current = block.items.find((i) => i.label === open);
  return (
    <div className="my-6">
      <div className="flex flex-wrap gap-2">
        {block.items.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`min-h-11 rounded-full px-5 py-2 font-[family-name:var(--font-sans)] text-sm font-bold ${
              open === item.label ? "bg-accent text-accent-fg" : "border border-line bg-card"
            }`}
            onClick={() => setOpen(item.label === open ? null : item.label)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {current ? (
        <div className="rise-enter mt-3 rounded-xl border border-line bg-card px-4 py-3">
          <MarkdownBody source={current.body} />
        </div>
      ) : null}
    </div>
  );
}

function TimelineB({ block }: { block: TimelineBlock }) {
  return (
    <ol className="my-8 list-none border-l-2 border-accent p-0 pl-6">
      {block.items.map((item, i) => (
        <li key={item.title} className="relative mb-8">
          <span className="absolute -left-[31px] grid h-7 w-7 place-items-center rounded-full bg-accent font-[family-name:var(--font-sans)] text-[11px] font-bold text-accent-fg">
            {i + 1}
          </span>
          <p className="m-0 font-[family-name:var(--font-sans)] font-bold text-navy">{item.title}</p>
          <MarkdownBody source={item.body} />
        </li>
      ))}
    </ol>
  );
}

function LabB({ day, complete, onComplete }: { day: DayDoc } & DoneProps) {
  const rec = useBootcamp((s) => s.days[String(day.day)]);
  const done = rec?.status === "lab_done" || rec?.status === "checked" || rec?.status === "complete" || complete;

  useEffect(() => {
    if (done) onComplete();
  }, [done, onComplete]);

  return <LabPanel day={day} />;
}

function ObjectivesB({ pack }: { pack: CoursePack }) {
  return (
    <section className="rise-enter my-8" aria-labelledby="lo-h">
      <h2 id="lo-h" className="mt-0 font-[family-name:var(--font-sans)] text-xl font-bold text-navy">
        After this course you will be able to
      </h2>
      <ol className="mt-4 list-none space-y-2 p-0">
        {pack.objectives.map((lo, i) => (
          <li key={lo.id} className="flex gap-3 rounded-xl border border-line bg-card p-4">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent font-[family-name:var(--font-sans)] text-xs font-bold text-accent-fg">
              {i + 1}
            </span>
            <span>
              <span className="font-[family-name:var(--font-sans)] text-[11px] tracking-[0.12em] text-muted uppercase">
                {lo.bloom}
              </span>
              <span className="mt-0.5 block">{lo.text}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ContinueBar({
  label,
  enabled,
  onClick,
}: {
  label: string;
  enabled: boolean;
  onClick: () => void;
}) {
  return (
    <div className="mt-12 flex flex-col items-center py-6">
      <button
        type="button"
        disabled={!enabled}
        onClick={onClick}
        className="min-h-14 min-w-48 rounded-full bg-accent px-10 py-3 font-[family-name:var(--font-sans)] text-sm font-bold tracking-wide text-accent-fg transition-transform duration-150 active:scale-[0.96] disabled:opacity-40"
      >
        {label}
      </button>
      {!enabled ? (
        <p className="mt-3 mb-0 font-[family-name:var(--font-sans)] text-sm text-muted">Finish the step above first.</p>
      ) : null}
    </div>
  );
}

export function segmentBlocks(blocks: PackBlock[]) {
  const segments: { blocks: PackBlock[]; continue?: Extract<PackBlock, { type: "continue" }> }[] = [];
  let current: PackBlock[] = [];
  for (const b of blocks) {
    if (b.type === "continue") {
      segments.push({ blocks: current, continue: b });
      current = [];
    } else {
      current.push(b);
    }
  }
  if (current.length) segments.push({ blocks: current });
  return segments;
}
