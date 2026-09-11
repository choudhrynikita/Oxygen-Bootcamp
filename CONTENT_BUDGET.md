# Content budget

Keep git small. Text and small diagrams live in the repo. Videos are official URLs. Screenshots belong in LFS or object storage if they grow past a few hundred KB.

| Kind | Where | Budget |
|---|---|---|
| 90 day MDX files | `content/lessons/` | ~1–2 MB total |
| Curriculum JSON, bursts, badges, cards | `content/` | < 400 KB |
| flower-docs, kitepump, field logs | `samples/` | < 500 KB |
| v1 LMS | `legacy/` | < 50 KB |
| Wireframe SVGs | `public/figures/` | < 200 KB |
| YouTube | ids in `content/media-manifest.json` | 0 bytes of video in git |
| Official manuals | links only | 0 bytes |

If a future pack exceeds 20 MB, put it in Git LFS or a release asset and link it from Library. Do not commit Oxygen binaries, license keys, or vendor PDF manuals.
