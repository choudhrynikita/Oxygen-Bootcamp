"use client";

import { useState } from "react";
import type { DayDoc } from "@/lib/bootcamp/types";
import { useBootcamp } from "@/lib/bootcamp/store";

export function FieldNote({ day }: { day: DayDoc }) {
  const rec = useBootcamp((s) => s.days[String(day.day)]);
  const saveFieldNote = useBootcamp((s) => s.saveFieldNote);
  const completeQuest = useBootcamp((s) => s.completeQuest);
  const [note, setNote] = useState(rec?.fieldNote ?? rec?.notes ?? "");

  return (
    <section className="mt-8" aria-labelledby="note-h">
      <h2 id="note-h" className="font-[family-name:var(--font-sans)] text-xl font-semibold text-navy">
        Field note
      </h2>
      <p className="text-sm text-muted">{day.fieldNotePrompt}</p>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={4}
        className="mt-2 w-full rounded-md border border-line bg-card p-3"
        aria-label="Field note"
      />
      <button
        type="button"
        className="mt-2 rounded-full bg-navy px-4 py-2 font-[family-name:var(--font-sans)] text-sm text-accent-fg"
        onClick={() => {
          saveFieldNote(day.day, note.trim(), day.skills);
          completeQuest(day.day, "d", day.skills);
        }}
        disabled={!note.trim()}
      >
        Save note
      </button>
      <p className="mt-3 text-sm text-muted">Tomorrow: {day.tomorrowHook}</p>
    </section>
  );
}
