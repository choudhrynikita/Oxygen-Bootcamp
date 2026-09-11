# 90-day curriculum

12 weeks. All days are MDX in `content/lessons/day-NNN.mdx`. Missing a day file fails `content:audit` and `next build`.

Voice and sequence: [VOICE.md](./VOICE.md), [PEDAGOGY.md](./PEDAGOGY.md).

| Week | Days | Theme | The apple |
|---|---|---|---|
| 1 | 1–7 | Sit down and write | The app opens. A page saves. |
| 2 | 8–14 | Three kinds of pages | Concept, task, reference — as files. |
| 3 | 15–21 | Make a booklet | A map is a table of contents. |
| 4 | 22–28 | Stop copying the same words | Keys and reuse. |
| 5 | 29–35 | Tools on the desk | Conditions, comments, find/replace. |
| 6 | 36–42 | Make a site or a PDF | Publish. Read the log. |
| 7 | 43–49 | Work with other people | Browser Oxygen, review, one home for files. |
| 8 | 50–55 | When things break | Repair a booklet. House rules. |
| 9 | 56–62 | The website team next door | AEM, first time. |
| 10 | 63–69 | Build a web page | Title, text, image, teaser. |
| 11 | 70–75 | Other ways they write in AEM | Fragments, assets. |
| 12 | 76–90 | Hand work between the two desks | Guides + Oxygen, then a portfolio. |

v1 tracks T0–T7 fold into this calendar. See `content/curriculum/legacy-map.json`.

## Unlock

Day 1 is open. Day N opens when day N−1 is `lab_done` or `complete`. The first day of the next week opens only when the week boss is `complete` (lab + quiz at least 70% + a short note). Friday lab alone does not open Monday. The warmup never opens a day.

## Done rule for a day

A day is `complete` only when the lab is done, the check (quiz) meets the threshold, and the field note is stored. `lab_done` is enough to unlock tomorrow inside the same week.
