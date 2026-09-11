"use client";

import { useState } from "react";
import legacyMap from "../../../content/curriculum/legacy-map.json";
import { useBootcamp } from "@/lib/bootcamp/store";

export default function SettingsPage() {
  const flags = useBootcamp((s) => s.flags);
  const setFlags = useBootcamp((s) => s.setFlags);
  const exportState = useBootcamp((s) => s.exportState);
  const importState = useBootcamp((s) => s.importState);
  const importV1 = useBootcamp((s) => s.importV1);
  const resetAll = useBootcamp((s) => s.resetAll);
  const resetDay = useBootcamp((s) => s.resetDay);
  const [msg, setMsg] = useState("");
  const [dump, setDump] = useState("");
  const [day, setDay] = useState(1);

  function download() {
    const blob = new Blob([exportState()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "oxygen-bootcamp-progress.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="max-w-[70ch]">
      <h1 className="text-3xl">Settings</h1>
      <form className="mt-4 grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={flags.reducedMotion}
            onChange={(e) => setFlags({ reducedMotion: e.target.checked })}
          />
          Reduced motion (also honors the system setting)
        </label>
        <label className="flex items-center gap-2">
          <span className="w-28">Text size</span>
          <input
            type="range"
            min={1}
            max={1.35}
            step={0.05}
            value={flags.textScale}
            onChange={(e) => setFlags({ textScale: Number(e.target.value) })}
          />
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={flags.contrast === "high"}
            onChange={(e) => setFlags({ contrast: e.target.checked ? "high" : "default" })}
          />
          Higher contrast
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={!!flags.sound} onChange={(e) => setFlags({ sound: e.target.checked })} />
          Sound (off by default)
        </label>
      </form>

      <h2 className="mt-8 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">Reset this day</h2>
      <div className="flex gap-2">
        <input
          type="number"
          min={1}
          max={90}
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
          className="w-20 rounded-md border border-line px-2 py-1"
          aria-label="Day number"
        />
        <button
          type="button"
          className="rounded-full border border-line px-3 py-1 font-[family-name:var(--font-sans)] text-sm"
          onClick={() => {
            resetDay(day);
            setMsg(`Day ${day} reset. History on other days stays.`);
          }}
        >
          Reset day
        </button>
      </div>

      <h2 className="mt-8 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">Export / import</h2>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-full bg-navy px-3 py-1.5 font-[family-name:var(--font-sans)] text-sm text-accent-fg"
          data-testid="export-progress"
          onClick={download}
        >
          Export progress + game state
        </button>
        <button
          type="button"
          className="rounded-full border border-line px-3 py-1.5 font-[family-name:var(--font-sans)] text-sm"
          onClick={() => {
            const n = importV1(legacyMap as Record<string, number[]>);
            setMsg(n ? `Imported ${n} v1 lesson ids. Legacy classroom badge only.` : "No v1 key found in this browser.");
          }}
        >
          Import v1 classroom ticks
        </button>
      </div>
      <label className="mt-3 block">
        <span className="text-sm">Paste an export</span>
        <textarea
          className="mt-1 w-full rounded-md border border-line p-2 font-[family-name:var(--font-mono)] text-sm"
          rows={6}
          value={dump}
          onChange={(e) => setDump(e.target.value)}
        />
      </label>
      <button
        type="button"
        className="mt-2 rounded-full border border-line px-3 py-1.5 font-[family-name:var(--font-sans)] text-sm"
        onClick={() => setMsg(importState(dump) ?? "Import accepted.")}
      >
        Import JSON
      </button>

      <h2 className="mt-8 font-[family-name:var(--font-sans)] text-lg font-semibold text-navy">Danger</h2>
      <button
        type="button"
        className="rounded-full border border-warn px-3 py-1.5 font-[family-name:var(--font-sans)] text-sm text-warn"
        onClick={() => {
          resetAll();
          setMsg("Reset from Day 1.");
        }}
      >
        Reset from Day 1
      </button>
      {msg ? (
        <p role="status" className="mt-4 text-sm">
          {msg}
        </p>
      ) : null}
    </div>
  );
}
