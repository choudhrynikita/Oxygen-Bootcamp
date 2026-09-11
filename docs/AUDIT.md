# Self-audit loops

## Loop 1 — after Days 1–7

- [x] Fresher can sit Day 1 in 90 minutes. Four surfaces, no invented product name.
- [x] Flower-docs map exists at `samples/flower-docs/flowers.ditamap` with two topics.
- [x] Daily Burst primary types on Days 1–7 rotate (`burstPoolForDay`). Completing a burst ticks streak, does not mark the curriculum day complete.
- [x] Session blocks pause. Timer is optional; the quest checkbox is what counts.
- [x] v1 ids mapped in `content/curriculum/legacy-map.json`. Import awards Legacy classroom only.
- [x] 375px day pages: one column, no unlabeled horizontal scroll.
- [x] Reduced motion: `Celebrate` returns null; CSS kills transitions.
- [x] `npm run build` gated on 90 day files.
- [x] `docs/VERCEL.md` documents dashboard import.

Fail conditions checked: Day 6 still builds a real map; burst XP does not complete a day; v1 files live in `legacy/`.

## Loop 2 — after Day 42

- [x] Weeks 1–6 are a course: topics, maps, reuse, publish. Reuse week is labs, not a glossary dump.
- [x] Publish week includes a failed transform (Day 40 badge: Transform log reader).
- [x] Bursts recycle last-week terms via glossary-lightning + glossary.json.
- [x] Tool cards unlock from labs (`toolCards` on day files).
- [x] No duplicate conref padding — Days 22–28 each have a distinct lab.
- [x] CI: `npm ci`, `content:audit`, `lint`, `test`, `build`.

## Loop 3 — after Day 90

- [x] Path lists Days 1–90 with week boss markers.
- [x] Unlock: Day N after previous `lab_done`/`complete`; next week if Friday lab done even if boss failed.
- [x] Library links v1 classroom, official Oxygen and AEM docs, practice packs.
- [x] Guides + Oxygen stay distinct (Week 12). There is no product called “AEM Oxygen XML Editor.”
- [x] Update guard: version bump does not silently rewrite completed days or badges with evidence.
- [x] Export rejects unknown `schemaVersion`.
- [x] Streak freeze cannot be stacked from burst-only days (unit test).
- [x] Playwright: home, day 1, daily burst, quiz, export (`e2e/classroom.spec.ts`).
- [x] `content:audit` writes `content/media-manifest/youtube.json`.

See `docs/SHIPPED.md` after the first production URL is live.
