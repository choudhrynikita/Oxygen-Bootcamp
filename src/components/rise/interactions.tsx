"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { MarkdownBody } from "@/components/markdown-body";
import { CourseFigure, LeadLine } from "@/components/rise/figure";
import type { FlashcardsBlock, ProcessBlock, SortingBlock } from "@/lib/bootcamp/pack-types";

type DoneProps = { onComplete: () => void; complete: boolean };

export function FlashB({ block, onComplete }: { block: FlashcardsBlock } & DoneProps) {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const [seen, setSeen] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (Object.keys(seen).length >= block.cards.length) onComplete();
  }, [seen, block.cards.length, onComplete]);

  return (
    <div>
      <LeadLine text={block.lead} />
      <ul className="my-8 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2">
      {block.cards.map((card, i) => {
        const on = !!flipped[i];
        return (
          <li key={card.front} className="rise-flip">
            <button
              type="button"
              className="block w-full border-0 bg-transparent p-0 text-left"
              aria-pressed={on}
              aria-label={on ? card.back : card.front}
              onClick={() => {
                setFlipped((s) => ({ ...s, [i]: !s[i] }));
                setSeen((s) => ({ ...s, [i]: true }));
              }}
            >
              <div className={`rise-flip-inner ${on ? "is-flipped" : ""}`}>
                <div className="rise-flip-face flex flex-col justify-center rounded-xl border border-line bg-card px-6 py-8 shadow-[var(--shadow-soft)]">
                  <p className="m-0 text-center font-[family-name:var(--font-sans)] text-lg font-bold text-navy">
                    {card.front}
                  </p>
                  <span className="absolute right-3 bottom-3 text-accent" aria-hidden>
                    <RefreshCw className="h-5 w-5" />
                  </span>
                </div>
                <div className="rise-flip-face rise-flip-back flex flex-col justify-center rounded-xl border border-accent bg-pick px-6 py-8 shadow-[var(--shadow-soft)]">
                  <p className="m-0 text-center font-[family-name:var(--font-sans)] text-base leading-snug text-ink">
                    {card.back}
                  </p>
                  <span className="absolute right-3 bottom-3 text-accent" aria-hidden>
                    <RefreshCw className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
    </div>
  );
}

export function SortB({ block, onComplete }: { block: SortingBlock } & DoneProps) {
  const [remaining, setRemaining] = useState(block.items.map((it) => it.id));
  const [first, setFirst] = useState<Record<string, boolean>>({});
  const [over, setOver] = useState<string | null>(null);
  const [shake, setShake] = useState<string | null>(null);
  const [checkOn, setCheckOn] = useState<string | null>(null);
  const [drag, setDrag] = useState<{
    id: string;
    x: number;
    y: number;
    w: number;
  } | null>(null);
  const binsRef = useRef<Record<string, HTMLElement | null>>({});

  const left = block.items.filter((it) => remaining.includes(it.id));
  const done = remaining.length === 0;
  const firstRight = Object.values(first).filter(Boolean).length;

  useEffect(() => {
    if (done) onComplete();
  }, [done, onComplete]);

  function binAt(x: number, y: number) {
    for (const bin of block.bins) {
      const el = binsRef.current[bin];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return bin;
    }
    return null;
  }

  function tryDrop(id: string, bin: string | null) {
    setDrag(null);
    setOver(null);
    const item = block.items.find((it) => it.id === id);
    if (!item || !bin) return;
    const ok = item.bin === bin;
    setFirst((s) => (id in s ? s : { ...s, [id]: ok }));
    if (ok) {
      setCheckOn(bin);
      window.setTimeout(() => setCheckOn(null), 700);
      setRemaining((list) => list.filter((x) => x !== id));
    } else {
      setShake(id);
      window.setTimeout(() => setShake(null), 450);
    }
  }

  function onPointerDown(e: React.PointerEvent, id: string) {
    if (e.button !== 0) return;
    const target = e.currentTarget as HTMLElement;
    target.setPointerCapture(e.pointerId);
    setDrag({ id, x: e.clientX, y: e.clientY, w: target.offsetWidth });
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!drag) return;
    setDrag((d) => (d ? { ...d, x: e.clientX, y: e.clientY } : d));
    setOver(binAt(e.clientX, e.clientY));
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!drag) return;
    tryDrop(drag.id, binAt(e.clientX, e.clientY));
  }

  const dragging = drag ? block.items.find((it) => it.id === drag.id) : null;

  return (
    <div className="my-8">
      <LeadLine text={block.lead} />
      <p className="font-[family-name:var(--font-sans)] text-base font-bold text-navy">{block.prompt}</p>
      <p className="mt-1 font-[family-name:var(--font-sans)] text-sm text-muted">Drag each card onto a category.</p>
      <div className="mt-4 flex min-h-16 flex-wrap justify-center gap-3">
        {left.map((it) => (
          <button
            key={it.id}
            type="button"
            className={`min-h-12 cursor-grab touch-none select-none rounded-lg border border-line bg-card px-4 py-3 font-[family-name:var(--font-sans)] text-sm font-bold text-navy shadow-[var(--shadow-soft)] active:cursor-grabbing ${
              shake === it.id ? "rise-shake" : ""
            } ${drag?.id === it.id ? "opacity-40" : ""}`}
            onPointerDown={(e) => onPointerDown(e, it.id)}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              setDrag(null);
              setOver(null);
            }}
          >
            {it.text}
          </button>
        ))}
        {left.length === 0 ? (
          <p className="m-0 font-[family-name:var(--font-sans)] text-sm text-good">
            You got {firstRight} of {block.items.length} right on the first try.
          </p>
        ) : null}
      </div>
      <div className={`mt-6 grid gap-4 ${block.bins.length > 1 ? "md:grid-cols-2" : ""}`}>
        {block.bins.map((bin) => (
          <div
            key={bin}
            ref={(el) => {
              binsRef.current[bin] = el;
            }}
            className={`relative min-h-32 rounded-xl border-2 border-dashed p-5 text-center transition-colors ${
              over === bin ? "border-accent bg-pick" : "border-line bg-step"
            }`}
          >
            <p className="m-0 font-[family-name:var(--font-sans)] text-sm font-bold text-navy">{bin}</p>
            {checkOn === bin ? (
              <span className="rise-pop absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-good text-accent-fg">
                <Check className="h-4 w-4" />
              </span>
            ) : null}
          </div>
        ))}
      </div>
      {drag && dragging ? (
        <div
          className="pointer-events-none fixed z-50 rounded-lg border border-accent bg-card px-4 py-3 font-[family-name:var(--font-sans)] text-sm font-bold text-navy shadow-[var(--shadow-soft)]"
          style={{
            left: drag.x,
            top: drag.y,
            width: drag.w,
            transform: "translate(-50%, -50%) rotate(-2deg)",
          }}
        >
          {dragging.text}
        </div>
      ) : null}
    </div>
  );
}

export function ProcessB({ block, onComplete }: { block: ProcessBlock } & DoneProps) {
  const [step, setStep] = useState(-1);
  const total = block.steps.length;
  const finished = step >= total;

  useEffect(() => {
    if (finished) onComplete();
  }, [finished, onComplete]);

  if (step < 0) {
    return (
      <div>
        <LeadLine text={block.lead} />
        <div className="rise-enter my-8 rounded-xl bg-pick px-6 py-12 text-center">
          {block.intro ? <p className="mx-auto mt-0 max-w-lg text-lg">{block.intro}</p> : null}
          <p className="font-[family-name:var(--font-sans)] text-sm text-muted">{total} steps</p>
          <button
            type="button"
            className="mt-4 min-h-14 min-w-40 rounded-full bg-accent px-8 py-3 font-[family-name:var(--font-sans)] text-sm font-bold text-accent-fg transition-transform duration-150 active:scale-[0.96]"
            onClick={() => setStep(0)}
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    return (
      <div>
        <LeadLine text={block.lead} />
        <div className="rise-enter my-8 rounded-xl bg-good-bg px-6 py-12 text-center">
          <p className="mt-0 font-[family-name:var(--font-sans)] text-lg font-bold text-good">You finished the steps</p>
          {block.summary ? <p className="mx-auto mb-0 max-w-lg">{block.summary}</p> : null}
          <button
            type="button"
            className="mt-4 min-h-11 rounded-full border border-line bg-card px-5 py-2 font-[family-name:var(--font-sans)] text-sm"
            onClick={() => setStep(0)}
          >
            Review steps
          </button>
        </div>
      </div>
    );
  }

  const current = block.steps[step];
  return (
    <div>
      <LeadLine text={block.lead} />
      <div className="my-8 overflow-hidden rounded-xl bg-card shadow-[var(--shadow-soft)]">
        <div className="px-6 py-10 md:px-12">
          <p className="m-0 text-center font-[family-name:var(--font-sans)] text-xs tracking-[0.16em] text-muted uppercase">
            Step {step + 1} of {total}
          </p>
          <div className="mx-auto mt-4 grid h-12 w-12 place-items-center rounded-full bg-accent font-[family-name:var(--font-sans)] text-lg font-bold text-accent-fg">
            {step + 1}
          </div>
          <h3 className="mt-4 text-center font-[family-name:var(--font-sans)] text-2xl font-bold text-navy">
            {current.title}
          </h3>
          <div className="mx-auto max-w-lg text-center">
            <MarkdownBody source={current.body} />
          </div>
          {current.image ? (
            <div className="mx-auto mt-4 max-w-2xl">
              <CourseFigure
                src={current.image.src}
                alt={current.image.alt}
                caption={current.image.caption}
                credit={current.image.credit}
                href={current.image.href}
              />
            </div>
          ) : null}
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full border border-line disabled:opacity-30"
            disabled={step === 0}
            aria-label="Previous step"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {block.steps.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Step ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${i === step ? "w-6 bg-accent" : "w-2.5 bg-track"}`}
                onClick={() => setStep(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-fg"
            aria-label={step + 1 === total ? "Finish" : "Next step"}
            onClick={() => setStep((s) => s + 1)}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
