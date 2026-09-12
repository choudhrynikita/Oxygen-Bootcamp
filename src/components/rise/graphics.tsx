"use client";

import { UiFigure } from "@/components/ui-figure";

export function FirstWindowGraphic({
  activeId,
  onPick,
  labels,
}: {
  activeId: string | null;
  onPick: (id: string) => void;
  labels: { id: string; title: string }[];
}) {
  const hot = (id: string, className: string) => {
    const i = labels.findIndex((l) => l.id === id);
    const n = i >= 0 ? i + 1 : 0;
    const on = activeId === id;
    return (
      <button
        type="button"
        className={`rise-hotspot absolute grid h-8 w-8 place-items-center rounded-full border-2 font-[family-name:var(--font-sans)] text-xs font-bold shadow-[var(--shadow-soft)] ${
          on
            ? "border-accent bg-accent text-accent-fg"
            : "border-navy bg-card text-navy"
        } ${className}`}
        aria-pressed={on}
        aria-label={labels[i]?.title ?? `Spot ${n}`}
        onClick={() => onPick(id)}
      >
        {n}
      </button>
    );
  };

  return (
    <UiFigure caption="Labeled mock of the first Oxygen window. Not an official screenshot. Click each number.">
      <div className="relative min-h-[240px] bg-chrome">
        <div className="relative flex items-center gap-2 bg-chrome-bar px-2.5 py-2 text-chrome-fg">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span>Oxygen XML · (no file open)</span>
          {labels[0] ? hot(labels[0].id, "right-2 top-1") : null}
        </div>
        <div className="relative bg-chrome-menu px-2.5 py-2 text-chrome-muted">
          File Edit Find Document Project Options Tools Window{" "}
          <span className="text-chrome-fg">Help</span>
          {labels[1] ? hot(labels[1].id, "right-3 -top-1") : null}
          {labels[4] ? hot(labels[4].id, "right-14 -bottom-3") : null}
        </div>
        <div className="grid min-h-[180px] grid-cols-1 md:grid-cols-[160px_1fr]">
          <div className="relative border-r border-chrome-rule bg-chrome-rail p-3 text-ink">
            <p className="m-0 font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-wide text-muted">
              Left
            </p>
            <p className="m-0 text-muted">Empty until you make a project.</p>
            {labels[2] ? hot(labels[2].id, "right-2 top-2") : null}
          </div>
          <div className="relative bg-card p-4 text-ink">
            <p className="m-0 font-[family-name:var(--font-sans)] text-sm font-semibold">Middle</p>
            <p className="m-0 text-muted">Nothing here yet. A page will live here later.</p>
            {labels[3] ? hot(labels[3].id, "right-3 top-3") : null}
          </div>
        </div>
      </div>
    </UiFigure>
  );
}

export function WorkbenchGraphic({
  activeId,
  onPick,
  labels,
}: {
  activeId: string | null;
  onPick: (id: string) => void;
  labels: { id: string; title: string }[];
}) {
  const hot = (id: string, className: string) => {
    const i = labels.findIndex((l) => l.id === id);
    const n = i >= 0 ? i + 1 : 0;
    const on = activeId === id;
    return (
      <button
        type="button"
        className={`rise-hotspot absolute grid h-8 w-8 place-items-center rounded-full border-2 font-[family-name:var(--font-sans)] text-xs font-bold ${
          on ? "border-accent bg-accent text-accent-fg" : "border-navy bg-card text-navy"
        } ${className}`}
        aria-pressed={on}
        aria-label={labels[i]?.title ?? `Spot ${n}`}
        onClick={() => onPick(id)}
      >
        {n}
      </button>
    );
  };

  return (
    <UiFigure caption="Labeled mock of the Oxygen workbench. Not an official screenshot. Click each number.">
      <div className="relative bg-chrome">
        <div className="relative flex items-center gap-2 bg-chrome-bar px-2.5 py-2 text-chrome-fg">
          Title bar
          {labels[0] ? hot(labels[0].id, "right-2 top-1") : null}
        </div>
        <div className="relative bg-chrome-menu px-2.5 py-1.5 text-chrome-muted">
          File Edit Find Document DITA Project Options Tools Window Help
          {labels[1] ? hot(labels[1].id, "right-3 -top-1") : null}
        </div>
        <div className="grid min-h-[200px] grid-cols-1 md:grid-cols-[160px_1fr_140px]">
          <div className="relative border-r border-chrome-rule bg-chrome-rail p-2 text-ink">
            Left rail
            {labels[2] ? hot(labels[2].id, "right-2 top-2") : null}
          </div>
          <div className="relative bg-card p-4 text-ink">
            Editor
            <p className="m-0 text-muted">Author · Text · Grid</p>
            {labels[3] ? hot(labels[3].id, "right-3 top-3") : null}
          </div>
          <div className="relative bg-chrome-rail p-2 text-ink">
            Right rail
            {labels[4] ? hot(labels[4].id, "right-2 top-2") : null}
          </div>
        </div>
      </div>
    </UiFigure>
  );
}
