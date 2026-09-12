# Oxygen Bootcamp

90-day desk for a new help writer. Self-paced: finish a day’s lab to open the next. Days 1–55 are **Oxygen XML Author / Editor** (Syncro Soft). Days 56–90 add **AEM authoring** and **AEM Guides**. There is no product called “AEM Oxygen XML Editor.”

You install the app on day 1. You do not get a quiz about Adobe’s website tool until the AEM unit (day 56).

**Live classroom is Vercel**, not GitHub Pages. Pages is a footnote for the old static shell.

Production URL: [https://oxygen-bootcamp-nikita30.vercel.app](https://oxygen-bootcamp-nikita30.vercel.app). Dashboard: [vercel.com/nikita30/oxygen-bootcamp](https://vercel.com/nikita30/oxygen-bootcamp). CI on `main` is green — see [docs/VERCEL.md](docs/VERCEL.md).

## Run

```
npm ci
npm run content:generate   # writes content/lessons/day-001.mdx … day-090.mdx
npm run dev                # http://localhost:8080 in this sandbox; Vercel uses next start
```

Scripts: `dev`, `build`, `start`, `lint`, `content:audit`, `test`.

Node 20 or 22 (`.nvmrc` is 22). No secrets required to build.

## How to study

Home is Today: the current day, a 5-minute warmup, then Start course. There is no weekly quota. Pedagogy: [docs/PEDAGOGY.md](docs/PEDAGOGY.md). Voice: [docs/VOICE.md](docs/VOICE.md).

A day is 75–110 minutes. Do one, or several, in a sitting. XP follows labs, quizzes, and quests — not page views. Badges wait for a lab that can fail.

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
