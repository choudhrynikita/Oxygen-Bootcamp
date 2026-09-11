"use client";

import { CURRICULUM_VERSION } from "@progress/schema";
import { applyGuard, type GuardAction } from "@progress/update-guard";
import { useBootcamp } from "@/lib/bootcamp/store";

export function GuardDialog() {
  const curriculumVersion = useBootcamp((s) => s.curriculumVersion);
  const hydrated = useBootcamp((s) => s.hydrated);

  if (!hydrated) return null;
  if (curriculumVersion === CURRICULUM_VERSION) return null;

  function act(action: GuardAction) {
    const s = useBootcamp.getState();
    const next = applyGuard(
      s,
      action,
      {
        needed: true,
        fromVersion: s.curriculumVersion,
        toVersion: CURRICULUM_VERSION,
        changedDays: [],
        badgesKept: s.game.badges,
        badgesDropped: [],
      },
      s.game.badges,
      {},
      CURRICULUM_VERSION,
    );
    useBootcamp.setState({ ...next, guardOpen: false });
  }

  return (
    <div
      role="dialog"
      aria-labelledby="guard-title"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-[rgba(18,32,44,0.55)] p-4"
    >
      <div className="max-w-lg rounded-xl border border-line bg-card p-6 shadow-[var(--shadow-soft)]">
        <h2 id="guard-title" className="font-[family-name:var(--font-sans)] text-xl font-semibold text-navy">
          Curriculum updated
        </h2>
        <p className="mt-2 text-muted">
          Stored version {curriculumVersion} → {CURRICULUM_VERSION}. Completed days and earned badges are not rewritten
          silently. Pick one action.
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5">
          <li>Keep progress and skip changed days</li>
          <li>Recheck only changed days</li>
          <li>Reset from Day 1 (badges with evidence stay)</li>
        </ol>
        <div className="mt-5 flex flex-col gap-2">
          <button
            type="button"
            className="rounded-full bg-accent px-4 py-2 font-[family-name:var(--font-sans)] text-sm font-medium text-accent-fg"
            onClick={() => act("keep-skip")}
          >
            Keep progress and skip changed days
          </button>
          <button
            type="button"
            className="rounded-full border border-line bg-card px-4 py-2 font-[family-name:var(--font-sans)] text-sm"
            onClick={() => act("recheck-changed")}
          >
            Recheck only changed days
          </button>
          <button
            type="button"
            className="rounded-full border border-warn px-4 py-2 font-[family-name:var(--font-sans)] text-sm text-warn"
            onClick={() => act("reset")}
          >
            Reset from Day 1
          </button>
        </div>
      </div>
    </div>
  );
}
