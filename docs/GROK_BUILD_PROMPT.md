# Grok Build prompt — fresher rewrite

Paste this into Grok Build against repo `choudhrynikita/Oxygen-Bootcamp`. Do not create a second repo. Live classroom is Vercel.

---

You are Grok Build. Rewrite Oxygen Bootcamp so a total fresher can finish it.

The current course asks how an apple tastes before it shows an apple. Day 1 dumps DITA, AEM Sites, Guides, keys, conrefs, and Schematron before the learner has installed Oxygen. The prose sounds like a model: “sits next to”, “what it forbids”, “keep the note honest”, “map surgery”, riddle titles. Every quest says “Name X and what it forbids.” The home logo is `</>`. The 5-minute warmup on day 1 asks about conref and the AEM Sites console. Friday lab unlocks next week even if Sunday’s check failed.

## Product

90-day desk for **Oxygen XML Author / Editor** (Syncro Soft) and, from week 9, **AEM authoring / AEM Guides**. There is no product called “AEM Oxygen XML Editor.” Auth/DB stay off (localStorage). Keep v1 in `legacy/`. Official YouTube ids only. Lessons stay original prose + labeled mocks + links. Bump `CURRICULUM_VERSION` so the update guard fires.

## Pedagogy (non-negotiable)

You cannot quiz a word you have not taught. Teach in this order:

1. Help pages are files. Oxygen is the app. Install it. Look around.
2. Type a sentence. Save. Find the file.
3. Page view (Author) vs tags view (Text). Grid is a glance.
4. New file from a template. Folder names, not the desktop.
5. Three kinds of pages: what it is, how to do it, lookup facts. No booklet yet.
6. A map is a table of contents that points at files.
7. Completeness, then keys, then reuse, then publish, then teammates.
8. AEM starts week 9 as a different desk, first time, in plain words.

Rewrite all 90 days in `scripts/days/week01.mjs` … `week12.mjs`, then `npm run content:generate`. Follow [docs/VOICE.md](./VOICE.md) and [docs/PEDAGOGY.md](./PEDAGOGY.md).

## Voice

Senior writer, common words, short sentences. Titles are verbs or plain nouns. Labs are in the app. Field notes: “What did you do?” Quiz options: only taught words. Ban the slop list in VOICE.md. Content audit must fail the build on those phrases and on early AEM/map/key terms.

## Gates

- Sequential days: previous `lab_done` or `complete`.
- Next week: previous boss must be `complete`. Friday lab does not skip Sunday.
- Warmup never unlocks a day.
- Warmup items have `fromDay`. Day 1 cannot see conref, Maps Manager, or AEM.

## UI

Home is a desk, not a hackathon. Replace `</>` with a document mark. “Today’s warmup”, not “glossary-lightning”. Path copy must say Sunday’s check opens next week. Search placeholder uses week-1 words. First visit: two sentences on what this course is.

## Done

- Day 1 lab is install + look around. Day 1 quiz has no AEM, no Schematron, no landing page.
- Week 2 still has no map.
- Week 3 is the first booklet.
- Week 9 is the first AEM teaching.
- `npm test`, `npm run content:audit`, preview on the existing Next app.
- Commit and push to `choudhrynikita/Oxygen-Bootcamp` `main`. No force-push.
