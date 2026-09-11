"use client";

import { useEffect, useMemo, useState } from "react";
import { localDate } from "@game/streak";
import { useBootcamp } from "@/lib/bootcamp/store";
import { Celebrate } from "@/components/celebrate";
import bursts from "../../content/game/bursts.json";
import glossary from "../../content/game/glossary.json";
import type { BurstType } from "@game/bursts";

type BurstItem = {
  id: string;
  type: BurstType;
  prompt: string;
  options?: string[];
  answer?: number;
  why?: string;
  fromDay?: number;
  dare?: { text: string; forbidden: string; maxWords: number };
  skill: "xmlLiteracy" | "oxygenUi" | "ditaTopics" | "maps" | "reuse" | "publish" | "review" | "aemSites" | "aemGuides";
};

const pool = bursts as BurstItem[];
const terms = glossary as { term: string; def: string; decoys: string[]; fromDay?: number }[];

export function BurstPanel({
  preferredPool,
  currentDay = 1,
}: {
  preferredPool: BurstType[];
  currentDay?: number;
}) {
  const today = localDate();
  const ensureBurst = useBootcamp((s) => s.ensureBurst);
  const completeBurst = useBootcamp((s) => s.completeBurst);
  const burst = useBootcamp((s) => s.game.dailyBurst);
  const [pick, setPick] = useState<number | null>(null);
  const [dare, setDare] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    ensureBurst(today, preferredPool);
  }, [today, preferredPool, ensureBurst]);

  const item = useMemo(() => {
    const type = (burst.type || preferredPool[0]) as BurstType;
    const matches = pool.filter((b) => b.type === type && (b.fromDay ?? 1) <= currentDay);
    const usable = matches.length ? matches : pool.filter((b) => (b.fromDay ?? 1) <= currentDay);
    if (!usable.length) return pool[0];
    const seed = Array.from(today).reduce((a, c) => a + c.charCodeAt(0), 0);
    return usable[seed % usable.length];
  }, [burst.type, preferredPool, today, currentDay]);

  if (!item) return null;

  function succeed() {
    completeBurst(today, item.skill);
    setCelebrate(true);
    setResult(item.why ?? "Warmup recorded. It does not finish today’s lesson.");
  }

  const done = burst.date === today && burst.done;

  return (
    <section className="rounded-xl border border-line bg-card p-4 shadow-[var(--shadow-soft)]" aria-labelledby="burst-h">
      <h2 id="burst-h" className="mt-0 font-[family-name:var(--font-sans)] text-base font-semibold">
        Today’s warmup
      </h2>
      <p className="mt-0 text-sm text-muted">5–8 minutes. Keeps your streak. Does not finish the day’s lesson.</p>
      <p className="font-medium">{item.prompt}</p>

      {item.type === "glossary-lightning" ? (
        <GlossaryRound
          onWin={succeed}
          disabled={done}
          seed={Array.from(today).reduce((a, c) => a + c.charCodeAt(0), 0)}
          currentDay={currentDay}
        />
      ) : item.type === "authors-dare" && item.dare ? (
        <div>
          <p className="text-sm">
            At most {item.dare.maxWords} words, and do not use “{item.dare.forbidden}”.
          </p>
          <p className="rounded-md bg-track p-2 text-sm">{item.dare.text}</p>
          <textarea
            className="mt-2 w-full rounded-md border border-line p-2"
            rows={3}
            value={dare}
            disabled={done}
            onChange={(e) => setDare(e.target.value)}
            aria-label="Rewrite"
          />
          <button
            type="button"
            disabled={done}
            className="mt-2 rounded-full bg-accent px-3 py-1.5 font-[family-name:var(--font-sans)] text-sm text-accent-fg"
            onClick={() => {
              const words = dare.trim().split(/\s+/).filter(Boolean);
              const hasForbidden = new RegExp(item.dare!.forbidden, "i").test(dare);
              if (words.length === 0 || words.length > item.dare!.maxWords || hasForbidden) {
                setResult("Too long, empty, or it still has the banned word. Try again.");
                return;
              }
              succeed();
            }}
          >
            Save rewrite
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {(item.options ?? []).map((opt, i) => (
            <button
              key={opt}
              type="button"
              disabled={done}
              onClick={() => setPick(i)}
              className={`rounded-[10px] border px-3 py-2 text-left ${
                pick === i ? "border-accent bg-pick" : "border-line bg-card"
              }`}
            >
              {opt}
            </button>
          ))}
          <button
            type="button"
            disabled={done || pick == null}
            className="mt-1 w-fit rounded-full bg-accent px-3 py-1.5 font-[family-name:var(--font-sans)] text-sm text-accent-fg disabled:opacity-50"
            data-testid="burst-lock"
            onClick={() => {
              if (pick === item.answer) succeed();
              else setResult(item.why ?? "Not that one. Read it once more.");
            }}
          >
            Lock answer
          </button>
        </div>
      )}

      {done ? <p className="text-sm text-good">Warmup done for {today}.</p> : null}
      {result ? <p className="text-sm">{result}</p> : null}
      <Celebrate show={celebrate} label="Streak ticked" />
    </section>
  );
}

function GlossaryRound({
  onWin,
  disabled,
  seed,
  currentDay,
}: {
  onWin: () => void;
  disabled: boolean;
  seed: number;
  currentDay: number;
}) {
  const [i, setI] = useState(0);
  const [wrong, setWrong] = useState(0);
  const learned = terms.filter((t) => (t.fromDay ?? 1) <= currentDay);
  const deck = learned.length ? learned : terms.slice(0, 3);
  const card = deck[i % deck.length];
  if (!card) return null;
  const options = shuffleStable([card.def, ...card.decoys].slice(0, 3), seed + i);
  return (
    <div>
      <p className="font-[family-name:var(--font-sans)] text-sm text-muted">Card {Math.min(i + 1, 5)} / 5</p>
      <p className="font-semibold">{card.term}</p>
      <div className="mt-2 flex flex-col gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            disabled={disabled}
            className="min-h-11 rounded-[10px] border border-line px-3 py-2 text-left"
            onClick={() => {
              const nextWrong = opt !== card.def ? wrong + 1 : wrong;
              if (opt !== card.def) setWrong(nextWrong);
              if (i + 1 >= 5) {
                if (nextWrong <= 2) onWin();
              } else setI((n) => n + 1);
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function shuffleStable<T>(arr: T[], seed: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = seed % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
