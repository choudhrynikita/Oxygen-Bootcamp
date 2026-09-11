# Game rules

This is a craft game. Points follow proof of work. Watching a video is never enough to earn a badge.

Curriculum version this document describes: `2026.09.1`.

## What is stored

One JSON document in `localStorage` key `oxygen-bootcamp-state-v1`. Schema is in `packages/progress`. Export from Settings. No account.

## Daily Burst (5–8 minutes)

Shown on Today. One burst per local calendar day. Completing it **ticks the streak** and awards a small XP packet. It does **not** mark the curriculum day complete.

Types (runtime never serves the same type two calendar days in a row):

1. `warmup-match` — pair a labeled region with the official control name
2. `one-line-repair` — pick the first real error in a 6–12 line invalid DITA snippet
3. `menu-path-race` — pick the correct menu path for a goal
4. `output-oracle` — publish symptom → first place you look
5. `glossary-lightning` — five cards, spaced from the last 7 days of terms
6. `authors-dare` — one constraint (word count, forbidden word)

Burst-only days do **not** earn streak freezes.

## Streak and freezes

- Burst completion on a calendar day sets `lastActiveDate` and increments `current` if the previous active date was yesterday (or today).
- Miss a calendar day: streak resets to 0 unless a freeze is spent.
- Earn one freeze by completing **7 curriculum days** (`lab_done` or `complete`). Burst-only days do not count.
- Max 2 freezes stored. You cannot stack freezes from burst-only activity.

## Hourly session blocks

A weekday day is 75–110 minutes, split into 20–25 minute blocks (A Learn, B Do, C Stress, D Lock). Each block has a pauseable 20:00 timer (no panic beeps), one craft-language quest, and an observable done condition.

XP is awarded only when the done condition is met. Partial blocks are stored. A short session is not punished.

Hourly extras, at most once per day:

- **Combo** — lab + quiz + field note the same day
- **Overtime puzzle** — optional 8-minute repair from `/broken`. Never required to unlock tomorrow
- **Co-op ghost** — hint after two failed checks, not before the first try

## Skill XP

Skills: `xmlLiteracy`, `oxygenUi`, `ditaTopics`, `maps`, `reuse`, `publish`, `review`, `aemSites`, `aemGuides`.

| Action | XP | Where it lands |
|---|---|---|
| Daily Burst complete | 15 | primary skill of the burst |
| Session quest complete | 25 | day's listed skills, split |
| Lab done | 40 | day's listed skills, split |
| Quiz ≥ 70% | 30 | day's listed skills, split |
| Combo | 20 | extra on the day's skills |
| Badge | 0 extra | the lab already paid |

Opening a page: **0 XP**.

## Ranks

Rank cannot jump from Daily Burst mashing. Rank uses **curriculum completions** plus skill XP floors.

| Rank | Curriculum days `complete` or `lab_done` | Combined skill XP floor |
|---|---|---|
| Trainee | 0 | 0 |
| Bench author | 7 | 200 |
| Map keeper | 21 | 800 |
| Reuse smith | 42 | 1600 |
| Publish lead | 55 | 2200 |
| Desk captain | 90 | 3200 |

If days are ahead of XP, rank stays at the last rank whose **both** gates pass.

## Badges

Dry names. Earned from labs that can fail. See `content/game/badges.json`. Watching a video can be a quest step; the badge waits for the lab.

Week boss badge stays locked on fail even if next week unlocks.

## Tool cards

Collectible reference. Earn the first time that day's lab uses the surface. Album lives in Workshop. Flip side: what it is for, what it is not for, official link.

## Week bosses

Days 7, 14, 21, 28, 35, 42, 49, 55, 62, 69, 75, 82. Mixed repair + scenario questions + timed completeness read. Retry unlimited. Next week still unlocks if the Friday lab is `lab_done` or `complete`.
