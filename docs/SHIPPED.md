# Shipped

## What the learner can do

Open Oxygen Bootcamp, run an 8-minute Daily Burst, start Day 1, and be in Oxygen in the first session. On a phone they can run a 20-minute block, tick a quest, and take a quiz. Streaks and badges live in the browser and survive a curriculum version bump (update guard). Rank needs both labs and XP floors — Daily Burst cannot jump rank.

After Day 90 they can open a DITA map in Oxygen, reuse with keys and conrefs, publish WebHelp or PDF, then switch to AEM, create and edit pages, publish, run a workflow, author a Content Fragment, and explain when Guides + Oxygen beats in-AEM web editing.

## What is not taught

Specializations, DITA-OT plugin customizing, AEM as a developer (Sling, HTL, OSGi), dispatcher, Cloud Manager pipelines, translation connectors. Day 90 lists these as next paths. There is no live AEM instance in the classroom — Weeks 9–12 use official video, labeled mocks, and field logs.

## How to add Week 13

1. Add `scripts/days/week13.mjs` exporting days 91–97 (or a shorter clinic).
2. Raise the 90-day assertions in `scripts/content-audit.mjs` and `next.config.ts`.
3. `npm run content:generate && npm run content:audit`.
4. Bump `CURRICULUM_VERSION` in `packages/progress/src/schema.ts`. The update guard will offer Keep / Recheck / Reset.

## Production URL

Source: [github.com/choudhrynikita/Oxygen-Bootcamp](https://github.com/choudhrynikita/Oxygen-Bootcamp). CI on `main` is green. Vercel dashboard import (Next.js, repo root, `npm ci` / `npm run build`, Node 22) is documented in [VERCEL.md](./VERCEL.md). That `*.vercel.app` URL is the classroom; GitHub Pages is a footnote.

## How the game awards work

XP follows proof of work: burst, quest, lab, quiz, combo. Page views award nothing. Badges wait for a lab that can fail. Tool cards unlock the first time a day’s lab uses that surface. Freeze: one per 7 curriculum days, max 2, never from burst-only days. Rules: [GAME.md](./GAME.md).
