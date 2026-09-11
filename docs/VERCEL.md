# Vercel

Vercel is the source of truth for the live classroom. GitHub Pages is a footnote.

## Dashboard import (zero guesswork)

1. Vercel → Add New → Project → Import Git Repository.
2. Repository: `choudhrynikita/Oxygen-Bootcamp`.
3. Framework Preset: **Next.js**.
4. Root Directory: **.** (leave default).
5. Build Command: `npm run build` (also in `vercel.json`).
6. Install Command: `npm ci`.
7. Output: default Next.js (do **not** enable static export).
8. Node.js Version: **22**.
9. Production Branch: `main`.
10. Deploy.

No environment variables are required for the first production deploy. Progress lives in the browser.

## Project file

`vercel.json`:

```json
{
  "framework": "nextjs",
  "installCommand": "npm ci",
  "buildCommand": "npm run build"
}
```

`next/image` allows `i.ytimg.com` and `img.youtube.com`.

## Production URL

GitHub: [choudhrynikita/Oxygen-Bootcamp](https://github.com/choudhrynikita/Oxygen-Bootcamp)

CI on `main` is green: [actions/runs/34633848711](https://github.com/choudhrynikita/Oxygen-Bootcamp/actions/runs/34633848711) (`npm ci`, `content:audit`, `lint`, `test`, `build`). 90 day routes and 90 session routes prerender.

Import the repo in the Vercel dashboard (the Vercel account that has GitHub access to `choudhrynikita`). The `*.vercel.app` URL replaces this paragraph on first successful Git integration deploy. No extra env vars.

## Build proof

CI `npm run build` on `main` (Next.js 15.5.25, Node 22):

```
   ▲ Next.js 15.5.25
   Creating an optimized production build ...
 ✓ Compiled successfully in 11.2s
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/190) ...
   Generating static pages (47/190)
   Generating static pages (94/190)
   Generating static pages (142/190)
 ✓ Generating static pages (190/190)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                    5.96 kB         158 kB
├ ○ /_not-found                            136 B         103 kB
├ ● /day/[n]                               204 B         161 kB
├   ├ /day/1
├   ├ /day/2
├   ├ /day/3
├   └ [+87 more paths]
├ ƒ /docs/[[...path]]                      136 B         103 kB
├ ƒ /legacy/[[...path]]                    136 B         103 kB
├ ○ /library                               164 B         106 kB
├ ○ /path                                2.02 kB         112 kB
├ ○ /practice                              136 B         103 kB
├ ○ /progress                             2.6 kB         109 kB
├ ƒ /samples/[[...path]]                   136 B         103 kB
├ ● /session/[n]                         46.7 kB         207 kB
├   ├ /session/1
├   ├ /session/2
├   ├ /session/3
├   └ [+87 more paths]
├ ○ /settings                            2.83 kB         109 kB
└ ○ /workshop                            2.12 kB         108 kB
+ First Load JS shared by all             103 kB

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```

90 day routes and 90 session routes are prerendered. Missing Day files fail the build in `next.config.ts`.

## CI

`.github/workflows/ci.yml` runs `npm ci`, `content:audit`, `lint`, `npm test`, `npm run build` on PRs and pushes to `main`.
