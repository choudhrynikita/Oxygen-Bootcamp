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

_Pending first successful Git integration deploy. This line is replaced with the `*.vercel.app` URL once the build is green._

## Build proof

`npm ci && npm run build` exits 0. Last 30 log lines from the green run:

```
   Generating static pages (0/100) ...
   Generating static pages (25/100)
   Generating static pages (50/100)
   Generating static pages (75/100)
 ✓ Generating static pages (100/100)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                    5.83 kB         158 kB
├ ○ /_not-found                            992 B         104 kB
├ ● /day/[n]                             8.21 kB         160 kB
├   ├ /day/1
├   ├ /day/2
├   ├ /day/3
├   └ [+87 more paths]
├ ƒ /docs/[[...path]]                      136 B         103 kB
├ ƒ /legacy/[[...path]]                    136 B         103 kB
├ ○ /library                               162 B         106 kB
├ ○ /path                                2.01 kB         112 kB
├ ○ /practice                              136 B         103 kB
├ ○ /progress                             2.6 kB         109 kB
├ ƒ /samples/[[...path]]                   136 B         103 kB
├ ƒ /session/[n]                           136 B         103 kB
├ ○ /settings                            2.83 kB         109 kB
└ ○ /workshop                            2.12 kB         108 kB
+ First Load JS shared by all             103 kB

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```

90 day routes are prerendered. Missing Day files fail the build in `next.config.ts`.

## CI

`.github/workflows/ci.yml` runs `npm ci`, `content:audit`, `lint`, `npm test`, `npm run build` on PRs to `main`.
