# Repository decision (Gate 0)

## Canonical home

| Field | Value |
|---|---|
| Owner | `choudhrynikita` (authenticated GitHub user; admin + push) |
| Name | `Oxygen-Bootcamp` |
| URL | https://github.com/choudhrynikita/Oxygen-Bootcamp |
| Default branch | `main` |
| Decision | **Reuse.** Do not create `Oxygen-Bootcamp-2`, `author-forge`, or any second home. |

Searched the working account first, then the public namespace, for `Oxygen-Bootcamp`, `Oxygen_Bootcamp`, `oxygen-bootcamp`, and `Oxygen Bootcamp`. Single match: this repo. The working user owns it.

## What already existed on `main`

Commit `42bf1c8` (and parents back to `b307392`) shipped a **static v1 LMS**:

- `index.html` — classroom shell
- `assets/curriculum.js` — 8 tracks (T0–T7), 28 lessons, YouTube ids, labs, quizzes, refs
- `assets/app.js` — localStorage key `oxygen-bootcamp-progress-v1`
- `assets/style.css` — IBM Plex Sans + Source Serif 4, terracotta/navy
- `docs/day1-slides.html`, `docs/official-references.html`, `docs/visual-guide.html`
- `samples/flower-docs/` — `flowers.ditamap`, `hello-concept.dita`, `change-water.dita`
- `README.md`, `LICENSE`, `.nojekyll`

No Next.js app, no 90-day calendar, no game schema.

## What we keep

- Every v1 lesson id, title, lab, quiz, and YouTube id — ported into the 90-day MDX set and mapped in `content/curriculum/legacy-map.json`.
- Flower-docs stays the Week 1–2 pack. Kitepump packs are additive. Flower-docs is not replaced.
- Naming: **Oxygen is Syncro Soft.** AEM Guides can launch Oxygen. There is no product called “AEM Oxygen XML Editor.”
- v1 static classroom lives in `legacy/` and is linked from Library as “v1 classroom.”
- Root `docs/day1-slides.html`, `docs/official-references.html`, and `docs/visual-guide.html` remain and are also copied under `legacy/docs/` so the v1 shell still resolves relative links.

## Git rules

- Do not force-push `main`.
- First commit after inventory: move the static LMS into `legacy/` without deleting history.
- Production classroom is **Vercel** on this repo. GitHub Pages is a footnote.

## Live classroom

Documented in [VERCEL.md](./VERCEL.md). Vercel is the source of truth, not Pages.
