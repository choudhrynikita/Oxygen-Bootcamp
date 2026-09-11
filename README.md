# Oxygen Bootcamp

90-day authoring training for **Oxygen XML Author / Editor / Web Author** (Syncro Soft) and **AEM authoring** — Sites, Page Editor, Universal Editor, Document Authoring, Assets, Content Fragments, **AEM Guides**, and **Edit in Oxygen**.

Oxygen is Syncro Soft. AEM Guides can launch Oxygen. There is no product called “AEM Oxygen XML Editor.”

**Live classroom is Vercel**, not GitHub Pages. Pages is a footnote for the old static shell.

Production URL: see [docs/VERCEL.md](docs/VERCEL.md) (filled after the first successful deploy).

## Run

```
npm ci
npm run content:generate   # writes content/lessons/day-001.mdx … day-090.mdx
npm run dev                # http://localhost:8080 in this sandbox; Vercel uses next start
```

Scripts: `dev`, `build`, `start`, `lint`, `content:audit`, `test`.

Node 20 or 22 (`.nvmrc` is 22). No secrets required to build.

## How to study

Home is Today: current day, streak, Daily Burst (5–8 min), next unfinished lab, search.

A weekday day is 75–110 minutes in four pauseable blocks. XP follows labs, quizzes, and quests — not page views. Badges wait for a lab that can fail.

Game rules: [docs/GAME.md](docs/GAME.md). Update guard: [docs/UPDATE_GUARD.md](docs/UPDATE_GUARD.md).

## Add a day

1. Edit or add the day object in `scripts/days/weekNN.mjs`.
2. Run `npm run content:generate`.
3. `npm run content:audit` must pass. A missing Day file fails `next build`.

## v1 classroom

The original 8-track LMS lives in `legacy/` and is linked from Library. Flower-docs is unchanged. v1 lesson ids map through `content/curriculum/legacy-map.json`. Importing v1 ticks awards the Legacy classroom badge only.

## Deploy (Vercel)

1. Import `choudhrynikita/Oxygen-Bootcamp` in the Vercel dashboard.
2. Framework: Next.js.
3. Root Directory: `.` (repo root).
4. Install: `npm ci`. Build: `npm run build`.
5. Production branch: `main`. Preview on PRs.
6. Node 22.

`vercel.json` pins install/build. Do not set `output: 'export'`.

GitHub Pages is not the classroom. If Pages is still enabled, it may serve `legacy/` only — ignore it.

## Copyright

Training materials are original or rewritten from the v1 LMS. Official Oxygen and Adobe manuals are linked, not pasted. See [docs/CONTENT_POLICY.md](docs/CONTENT_POLICY.md) and [LICENSE](LICENSE).
