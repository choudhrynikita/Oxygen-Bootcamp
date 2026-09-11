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
  dare?: { text: string; forbidden: string; maxWords: number };
  skill: "xmlLiteracy" | "oxygenUi" | "ditaTopics" | "maps" | "reuse" | "publish" | "review" | "aemSites" | "aemGuides";
};

const pool = bursts as BurstItem[];
const terms = glossary as { term: string; def: string; decoys: string[] }[];

export function BurstPanel({ preferredPool }: { preferredPool: BurstType[] }) {
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
    const matches = pool.filter((b) => b.type === type);
    if (!matches.length) return pool[0];
    const seed = Array.from(today).reduce((a, c) => a + c.charCodeAt(0), 0);
    return matches[seed % matches.length];
  }, [burst.type, preferredPool, today]);

  if (!item) return null;

  function succeed() {
    completeBurst(today, item.skill);
    setCelebrate(true);
    setResult(item.why ?? "Burst recorded. Curriculum day is unchanged.");
  }

  const done = burst.date === today && burst.done;

  return (
    <section className="rounded-xl border border-line bg-card p-4 shadow-[var(--shadow-soft)]" aria-labelledby="burst-h">
      <h2 id="burst-h" className="mt-0 font-[family-name:var(--font-sans)] text-base font-semibold">
        Daily Burst · {item.type.replace(/-/g, " ")}
      </h2>
      <p className="mt-0 text-sm text-muted">5–8 minutes. Ticks the streak. Does not complete a curriculum day.</p>
      <p className="font-medium">{item.prompt}</p>

      {item.type === "glossary-lightning" ? (
        <GlossaryRound onWin={succeed} disabled={done} seed={Array.from(today).reduce((a, c) => a + c.charCodeAt(0), 0)} />
      ) : item.type === "authors-dare" && item.dare ? (
        <div>
          <p className="text-sm">
            Constraint: ≤ {item.dare.maxWords} words, no “{item.dare.forbidden}”.
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
                setResult("Rewrite fails the constraint. Count the words. Drop the forbidden word.");
                return;
              }
              succeed();
            }}
          >
            Submit rewrite
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
              else setResult(item.why ?? "Not the first place.");
            }}
          >
            Lock answer
          </button>
        </div>
      )}

      {done ? <p className="text-sm text-good">Burst done for {today}.</p> : null}
      {result ? <p className="text-sm">{result}</p> : null}
      <Celebrate show={celebrate} label="Streak ticked" />
    </section>
  );
}

function GlossaryRound({ onWin, disabled, seed }: { onWin: () => void; disabled: boolean; seed: number }) {
  const [i, setI] = useState(0);
  const [wrong, setWrong] = useState(0);
  const card = terms[i % terms.length];
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

function shuffleStable(list: string[], seed: number): string[] {
  const a = [...list];
  let s = (seed % 2147483646) + 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}
