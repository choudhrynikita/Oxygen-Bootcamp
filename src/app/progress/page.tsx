"use client";

import { rankFor } from "@game/xp";
import { SKILL_IDS } from "@progress/schema";
import { StreakStrip } from "@/components/streak-strip";
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

  return (
    <div>
      <h1 className="text-3xl">Progress</h1>
      <p className="text-muted">
        Rank {rank.label} · {progressed} / 90 days with a lab · {state.game.xp} XP
      </p>
      <p className="text-sm">Rank needs both finished days and skill XP. The 5-minute warmup cannot jump rank by itself.</p>
      <StreakStrip />
      <h2 className="mt-6 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">XP by skill</h2>
      <ul className="list-none p-0">
        {SKILL_IDS.map((id) => (
          <li key={id} className="flex items-center justify-between border-b border-line py-2">
            <span>{LABELS[id]}</span>
            <span className="tabular-nums font-[family-name:var(--font-sans)]">{state.game.skillXp[id]}</span>
          </li>
        ))}
      </ul>
      <h2 className="mt-6 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">Badges</h2>
      {state.game.badges.length ? (
        <ul>
          {state.game.badges.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">None yet. Badges wait for labs that can fail.</p>
      )}
    </div>
  );
}
