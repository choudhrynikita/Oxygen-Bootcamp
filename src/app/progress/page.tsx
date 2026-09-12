"use client";

import { rankFor } from "@game/xp";
import { SKILL_IDS } from "@progress/schema";
import { useBootcamp } from "@/lib/bootcamp/store";

const LABELS: Record<string, string> = {
  xmlLiteracy: "XML literacy",
  oxygenUi: "Oxygen UI",
  ditaTopics: "DITA topics",
  maps: "Maps",
  reuse: "Reuse",
  publish: "Publish",
  review: "Review",
  aemSites: "AEM Sites",
  aemGuides: "AEM Guides",
};

export default function ProgressPage() {
  const state = useBootcamp();
  const rank = rankFor(state);
  const progressed = Object.values(state.days).filter(
    (d) => d.status === "lab_done" || d.status === "checked" || d.status === "complete",
  ).length;
  const maxSkill = Math.max(1, ...SKILL_IDS.map((id) => state.game.skillXp[id] || 0));

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl">Progress</h1>
      <p className="text-muted">
        {rank.label} · {progressed} / 90 days · {state.game.xp} XP
        {state.game.streak.current ? ` · ${state.game.streak.current}-day streak` : ""}
      </p>

      <h2 className="mt-8 font-[family-name:var(--font-sans)] text-base font-bold text-navy">Skills</h2>
      <ul className="mt-3 list-none p-0">
        {SKILL_IDS.map((id) => {
          const n = state.game.skillXp[id] || 0;
          return (
            <li key={id} className="mb-3">
              <div className="flex items-center justify-between font-[family-name:var(--font-sans)] text-sm">
                <span>{LABELS[id]}</span>
                <span className="tabular-nums text-muted">{n}</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-track">
                <div className="h-full bg-accent" style={{ width: `${Math.round((n / maxSkill) * 100)}%` }} />
              </div>
            </li>
          );
        })}
      </ul>

      <h2 className="mt-8 font-[family-name:var(--font-sans)] text-base font-bold text-navy">Badges</h2>
      {state.game.badges.length ? (
        <ul className="mt-2 flex flex-wrap gap-2 p-0">
          {state.game.badges.map((b) => (
            <li key={b} className="list-none rounded-full bg-pick px-3 py-1 font-[family-name:var(--font-sans)] text-sm">
              {b}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">None yet. Badges wait for labs that can fail.</p>
      )}
    </div>
  );
}
