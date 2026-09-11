# Update guard

New `curriculumVersion` values must never silently rewrite completed days or earned badges.

## When it fires

On load, if stored `curriculumVersion` !== the catalog version (currently `2026.09.1`), show **one** screen before Today:

1. What changed (day titles, quest ids, badge ids).
2. Which of the learner's completed days or quests are affected.
3. Three actions:
   - **Keep progress and skip changed days** — keep `complete` / `lab_done` on unchanged days; mark changed days `available` without wiping notes; keep badges that still have evidence.
   - **Recheck only changed days** — set those days to `started` (or `available` if never started), drop their quiz scores, keep other days.
   - **Reset from Day 1** — wipe day records and game XP/streak/combo. Keep badges that still have evidence unless the learner also ticks “drop all badges”.

## Badge evidence

A badge stays if:

- its `badgeId` still exists in `content/game/badges.json`, and
- the earning lab's day is still in the catalog, and
- the learner's day record is `lab_done` or `complete`.

Otherwise drop it and list it on the guard screen. Never auto-migrate quiz answers onto new questions.

## Schema

Export **rejects** unknown `schemaVersion`. Current schema is `1`. Importers must not coerce `schemaVersion: 2` into `1`.

v1 LMS key `oxygen-bootcamp-progress-v1` is a separate import (Settings). It awards the **Legacy classroom** badge only. It does not invent day completions.

## Tests

`packages/progress/src/update-guard.test.ts` covers keep / recheck / reset and unknown schema rejection.
