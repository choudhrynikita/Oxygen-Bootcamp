"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { DayDoc } from "@/lib/bootcamp/types";
import type {
  AccordionBlock,
  ButtonsBlock,
  CalloutBlock,
  CoursePack,
  FlashcardsBlock,
  KnowledgeCheckBlock,
  LabeledGraphicBlock,
  ListBlock,
  MediaBlock,
  PackBlock,
  ProcessBlock,
  ScenarioBlock,
  SortingBlock,
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
        <h2 className="mt-8 mb-2 font-[family-name:var(--font-sans)] text-2xl font-semibold tracking-tight text-navy">
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
      return (
        <KcB
          block={block}
          complete={complete}
          onComplete={onComplete}
          onKc={onKc}
        />
      );
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
    <div className="rise-block">
      {block.heading ? (
        <h2 className="mt-2 mb-3 font-[family-name:var(--font-sans)] text-2xl font-semibold tracking-tight text-navy">
          {block.heading}
        </h2>
      ) : null}
      <MarkdownBody source={block.body} />
    </div>
  );
}

function StatementB({ block }: { block: StatementBlock }) {
  return (
    <blockquote className="my-10 border-0 px-2 text-center">
      <p className="m-0 font-[family-name:var(--font-serif)] text-2xl leading-snug font-semibold text-navy md:text-3xl">
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
    block.kind === "warning" ? "border-warn bg-warn-bg" : block.kind === "tip" ? "border-teal bg-lab" : "border-navy bg-step";
  return (
    <aside className={`my-6 rounded-xl border-l-[5px] ${border} px-4 py-3`}>
      {block.title ? (
        <p className="m-0 font-[family-name:var(--font-sans)] text-sm font-semibold text-navy">{block.title}</p>
      ) : null}
      <div className={block.title ? "mt-1" : ""}>
        <MarkdownBody source={block.body} />
      </div>
    </aside>
  );
}

function MediaB({ block }: { block: MediaBlock }) {
  return (
    <div className="my-6">
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
    <div className="my-6 divide-y divide-line overflow-hidden rounded-xl border border-line bg-card">
      {block.items.map((item, i) => {
        const isOpen = !!open[i];
        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex min-h-12 w-full items-center justify-between gap-3 px-4 py-3 text-left font-[family-name:var(--font-sans)] text-sm font-semibold text-navy"
              aria-expanded={isOpen}
              onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
            >
              {item.title}
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? (
              <div className="px-4 pb-4">
                <MarkdownBody source={item.body} />
              </div>
            ) : null}
          </div>
        );
      })}
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
    <div className="my-6">
      <div role="tablist" aria-label="Tabs" className="flex flex-wrap gap-1 border-b border-line">
        {block.items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={tab === i}
            className={`min-h-11 rounded-t-md px-4 py-2 font-[family-name:var(--font-sans)] text-sm ${
              tab === i ? "border-b-2 border-accent font-semibold text-navy" : "text-muted"
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
      <div role="tabpanel" className="rounded-b-xl border border-t-0 border-line bg-card px-4 py-3">
        {current ? <MarkdownBody source={current.body} /> : null}
      </div>
    </div>
  );
}

function ProcessB({ block, onComplete }: { block: ProcessBlock } & DoneProps) {
  const [step, setStep] = useState(-1);
  const total = block.steps.length;
  const done = step >= total;

  useEffect(() => {
    if (done) onComplete();
  }, [done, onComplete]);

  if (step < 0) {
    return (
      <div className="my-6 rounded-xl border border-line bg-card p-6 text-center">
        {block.intro ? <p className="mt-0">{block.intro}</p> : null}
        <p className="font-[family-name:var(--font-sans)] text-sm text-muted">{total} steps</p>
        <button
          type="button"
          className="mt-2 min-h-12 rounded-full bg-navy px-6 py-2 font-[family-name:var(--font-sans)] text-sm font-semibold text-accent-fg"
          onClick={() => setStep(0)}
        >
          Start
        </button>
      </div>
    );
  }

  if (done) {
    return (
      <div className="my-6 rounded-xl border border-good bg-good-bg p-6 text-center">
        <p className="mt-0 font-[family-name:var(--font-sans)] font-semibold text-good">Done</p>
        {block.summary ? <p className="mb-0">{block.summary}</p> : null}
        <button
          type="button"
          className="mt-3 min-h-11 rounded-full border border-line px-4 py-2 font-[family-name:var(--font-sans)] text-sm"
          onClick={() => setStep(0)}
        >
          Review steps
        </button>
      </div>
    );
  }

  const current = block.steps[step];
  return (
    <div className="my-6 rounded-xl border border-line bg-card p-5">
      <p className="m-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.14em] text-muted uppercase">
        Step {step + 1} of {total}
      </p>
      <div className="mt-3 flex gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy font-[family-name:var(--font-sans)] text-sm font-semibold text-accent-fg">
          {step + 1}
        </span>
        <div>
          <h3 className="mt-0 mb-1 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">{current.title}</h3>
          <MarkdownBody source={current.body} />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="min-h-11 rounded-full border border-line px-4 py-2 font-[family-name:var(--font-sans)] text-sm disabled:opacity-40"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
        >
          Back
        </button>
        <button
          type="button"
          className="min-h-11 rounded-full bg-navy px-4 py-2 font-[family-name:var(--font-sans)] text-sm font-semibold text-accent-fg"
          onClick={() => setStep((s) => s + 1)}
        >
          {step + 1 === total ? "Finish" : "Next step"}
        </button>
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
    <div className="my-6">
      <Graphic activeId={active} onPick={pick} labels={block.labels} />
      {current ? (
        <div className="mt-3 rounded-xl border border-line bg-card px-4 py-3">
          <p className="m-0 font-[family-name:var(--font-sans)] text-sm font-semibold text-navy">{current.title}</p>
          <p className="mb-0 mt-1">{current.body}</p>
        </div>
      ) : (
        <p className="mt-2 mb-0 font-[family-name:var(--font-sans)] text-sm text-muted">Click each number.</p>
      )}
    </div>
  );
}

function FlashB({ block, onComplete }: { block: FlashcardsBlock } & DoneProps) {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const [seen, setSeen] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (Object.keys(seen).length >= block.cards.length) onComplete();
  }, [seen, block.cards.length, onComplete]);

  return (
    <ul className="my-6 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
      {block.cards.map((card, i) => {
        const on = !!flipped[i];
        return (
          <li key={card.front}>
            <button
              type="button"
              className="min-h-32 w-full rounded-xl border border-line bg-card p-4 text-left shadow-[var(--shadow-soft)]"
              aria-pressed={on}
              onClick={() => {
                setFlipped((s) => ({ ...s, [i]: !s[i] }));
                setSeen((s) => ({ ...s, [i]: true }));
              }}
            >
              <p className="m-0 font-[family-name:var(--font-sans)] text-[11px] tracking-[0.14em] text-muted uppercase">
                {on ? "Back" : "Front"}
              </p>
              <p className="mb-0 mt-2 font-[family-name:var(--font-sans)] text-base font-semibold text-navy">
                {on ? card.back : card.front}
              </p>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function SortB({ block, complete, onComplete }: { block: SortingBlock } & DoneProps) {
  const [held, setHeld] = useState<string | null>(null);
  const [placed, setPlaced] = useState<Record<string, string>>({});

  const remaining = block.items.filter((it) => !placed[it.id]);
  const allPlaced = block.items.every((it) => placed[it.id]);
  const allRight = allPlaced && block.items.every((it) => placed[it.id] === it.bin);

  useEffect(() => {
    if (allRight) onComplete();
  }, [allRight, onComplete]);

  function drop(bin: string) {
    if (!held) return;
    setPlaced((p) => ({ ...p, [held]: bin }));
    setHeld(null);
  }

  return (
    <div className="my-6">
      <p className="font-[family-name:var(--font-sans)] text-sm font-semibold text-navy">{block.prompt}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {remaining.map((it) => (
          <button
            key={it.id}
            type="button"
            className={`min-h-11 rounded-full border px-3 py-2 font-[family-name:var(--font-sans)] text-sm ${
              held === it.id ? "border-accent bg-pick" : "border-line bg-card"
            }`}
            aria-pressed={held === it.id}
            onClick={() => setHeld(it.id === held ? null : it.id)}
          >
            {it.text}
          </button>
        ))}
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {block.bins.map((bin) => (
          <div key={bin} className="rounded-xl border border-dashed border-line bg-step p-3">
            <p className="mt-0 mb-2 font-[family-name:var(--font-sans)] text-sm font-semibold">{bin}</p>
            <ul className="m-0 list-none p-0">
              {block.items
                .filter((it) => placed[it.id] === bin)
                .map((it) => {
                  const right = it.bin === bin;
                  return (
                    <li
                      key={it.id}
                      className={`mb-2 rounded-md px-2 py-1 text-sm ${right ? "bg-good-bg" : "bg-warn-bg"}`}
                    >
                      {it.text}
                      {allPlaced ? (right ? " · right" : " · move this") : null}
                    </li>
                  );
                })}
            </ul>
            <button
              type="button"
              className="mt-2 min-h-11 w-full rounded-full border border-line bg-card px-3 py-2 font-[family-name:var(--font-sans)] text-sm disabled:opacity-40"
              disabled={!held}
              onClick={() => drop(bin)}
            >
              Put here
            </button>
          </div>
        ))}
      </div>
      {allPlaced && !allRight ? (
        <button
          type="button"
          className="mt-3 min-h-11 rounded-full border border-line px-4 py-2 font-[family-name:var(--font-sans)] text-sm"
          onClick={() => {
            setPlaced({});
            setHeld(null);
          }}
        >
          Try again
        </button>
      ) : null}
      {complete || allRight ? (
        <p className="mt-3 mb-0 font-[family-name:var(--font-sans)] text-sm text-good">Sorted.</p>
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
    <div className="my-6 rounded-xl border border-line bg-card p-4">
      <p className="mt-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.14em] text-muted uppercase">Scenario</p>
      <p>{block.situation}</p>
      <div className="mt-3 flex flex-col gap-2">
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
              className={`min-h-12 rounded-xl border px-3 py-3 text-left ${
                show && good
                  ? "border-good bg-good-bg"
                  : show && on && !good
                    ? "border-warn bg-warn-bg"
                    : on
                      ? "border-accent bg-pick"
                      : "border-line bg-card"
              }`}
            >
              {c.text}
            </button>
          );
        })}
      </div>
      {pick != null ? <p className="mb-0 mt-3">{block.choices[pick]?.feedback}</p> : null}
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
    <div className="my-6 rounded-xl border border-line bg-card p-5">
      <p className="m-0 font-[family-name:var(--font-sans)] text-xs tracking-[0.14em] text-muted uppercase">
        Knowledge check
      </p>
      <p className="mt-2 mb-4 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">{block.q}</p>
      <div className="flex flex-col gap-2">
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
              className={`min-h-12 rounded-xl border px-3 py-3 text-left ${
                show && isRight
                  ? "border-good bg-good-bg"
                  : show && on && !isRight
                    ? "border-warn bg-warn-bg"
                    : on
                      ? "border-accent bg-pick"
                      : "border-line"
              }`}
            >
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
          className="mt-4 min-h-12 rounded-full bg-navy px-5 py-2 font-[family-name:var(--font-sans)] text-sm font-semibold text-accent-fg disabled:opacity-40"
        >
          Submit
        </button>
      ) : (
        <p className={`mb-0 mt-4 ${correct ? "text-good" : "text-warn"}`}>
          {correct ? "Right. " : "Not that one. "}
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
            className={`min-h-11 rounded-full px-4 py-2 font-[family-name:var(--font-sans)] text-sm ${
              open === item.label ? "bg-navy text-accent-fg" : "border border-line bg-card"
            }`}
            onClick={() => setOpen(item.label === open ? null : item.label)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {current ? (
        <div className="mt-3 rounded-xl border border-line bg-card px-4 py-3">
          <MarkdownBody source={current.body} />
        </div>
      ) : null}
    </div>
  );
}

function TimelineB({ block }: { block: TimelineBlock }) {
  return (
    <ol className="my-6 list-none border-l-2 border-line p-0 pl-5">
      {block.items.map((item, i) => (
        <li key={item.title} className="relative mb-6">
          <span className="absolute -left-[27px] grid h-6 w-6 place-items-center rounded-full bg-navy font-[family-name:var(--font-sans)] text-[11px] text-accent-fg">
            {i + 1}
          </span>
          <p className="m-0 font-[family-name:var(--font-sans)] font-semibold text-navy">{item.title}</p>
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
    <section className="my-6" aria-labelledby="lo-h">
      <h2 id="lo-h" className="mt-0 font-[family-name:var(--font-sans)] text-xl font-semibold text-navy">
        After this course you will be able to
      </h2>
      <ol className="mt-3 list-none space-y-2 p-0">
        {pack.objectives.map((lo, i) => (
          <li key={lo.id} className="flex gap-3 rounded-xl border border-line bg-card p-3">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy font-[family-name:var(--font-sans)] text-xs text-accent-fg">
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
    <div className="mt-10 flex flex-col items-center border-t border-line pt-8 pb-4">
      <button
        type="button"
        disabled={!enabled}
        onClick={onClick}
        className="min-h-12 min-w-44 rounded-full bg-navy px-8 py-3 font-[family-name:var(--font-sans)] text-sm font-semibold text-accent-fg disabled:opacity-40"
      >
        {label}
      </button>
      {!enabled ? (
        <p className="mt-3 mb-0 font-[family-name:var(--font-sans)] text-sm text-muted">
          Finish the step above first.
        </p>
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

