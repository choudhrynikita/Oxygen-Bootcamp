"use client";

import { useState } from "react";
import { useBootcamp } from "@/lib/bootcamp/store";

type Card = { id: string; name: string; for: string; notFor: string; href: string };
type Badge = { id: string; name: string; earn: string; day: number | null };
type Term = { term: string; def: string; decoys: string[] };

export function WorkshopClient({
  badges,
  cards,
  glossary,
}: {
  catalog: unknown;
  badges: Badge[];
  cards: Card[];
  glossary: Term[];
}) {
  const earnedBadges = useBootcamp((s) => s.game.badges);
  const earnedCards = useBootcamp((s) => s.game.cards);
  const [flip, setFlip] = useState<string | null>(null);

  return (
    <div>
      <h1 className="text-3xl">Workshop</h1>
      <p className="text-muted">Drills, tool-card album, glossary. Cards unlock when a lab uses that surface.</p>

      <h2 className="mt-8 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">Tool cards</h2>
      <ul className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
        {cards.map((c) => {
          const have = earnedCards.includes(c.id);
          const open = flip === c.id;
          return (
            <li key={c.id} className="rounded-xl border border-line bg-card p-4">
              <button
                type="button"
                className="w-full text-left"
                onClick={() => have && setFlip(open ? null : c.id)}
                disabled={!have}
              >
                <span className="font-[family-name:var(--font-sans)] text-xs text-muted">
                  {have ? "Earned" : "Locked until a lab uses this surface"}
                </span>
                <strong className="mt-1 block">{c.name}</strong>
              </button>
              {have && open ? (
                <div className="mt-2 text-sm">
                  <p>
                    <strong>For.</strong> {c.for}
                  </p>
                  <p>
                    <strong>Not for.</strong> {c.notFor}
                  </p>
                  <p>
                    <a href={c.href} target="_blank" rel="noopener noreferrer">
                      Official link
                    </a>
                  </p>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      <h2 className="mt-8 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">Badges</h2>
      <ul className="grid list-none grid-cols-1 gap-2 p-0 sm:grid-cols-2">
        {badges.map((b) => (
          <li key={b.id} className="rounded-xl border border-line bg-card p-3">
            <strong>{b.name}</strong>
            <p className="mb-0 text-sm text-muted">
              {earnedBadges.includes(b.id) ? "Earned. " : "Locked. "}
              {b.earn}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">Glossary</h2>
      <dl>
        {glossary.map((g) => (
          <div key={g.term} className="border-b border-line py-2">
            <dt className="font-[family-name:var(--font-sans)] font-medium">{g.term}</dt>
            <dd className="ml-0 text-sm">{g.def}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
