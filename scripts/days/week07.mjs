import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 43,
    week: 7,
    title: "Oxygen in a web browser",
    objective:
      "Open Web Author (or a labeled mock) and write three things it shares with the desktop app, and three things it does not.",
    minutes: 90,
    skills: ["oxygenUi", "review"],
    legacy: [],
    youtube: [
      yt("gettingStarted", [
        "The desktop window when the app first opens",
        "Menus and side panels you may not see in a browser tab",
      ]),
    ],
    sources: [S.ugEditor, S.documentation, S.videos],
    toolCards: ["author-mode"],
    badgeId: "web-author-tour",
    lab: {
      pack: "kitepump-dita",
      title: "Three shares, three gaps",
      steps: [
        "Open kitepump.ditamap on the desktop app so you have a baseline. Look at Author view on one page.",
        "Read the official Web Author page from the Source box (or the video catalog). If your shop has a Web Author URL, open it. If not, use the labeled mock in this lesson.",
        "Write three things the browser app still has: a page view, a way to see errors, a writing toolbar. Check the labels. Write “verify” next to any label you guessed.",
        "Write three things the desktop app still does that the browser tab may not: the booklet view with a completeness check, local publish, work with no internet.",
        "Save the six lines in oxygen-bootcamp-work/week7/web-author-gap.txt.",
      ],
      failWhen:
        "You never opened the desktop app or the mock, or you wrote that the browser tab can do every desktop job.",
      expected:
        "Six factual lines. Web Author is Oxygen in a browser. The desktop app is still the full desk.",
    },
    quiz: [
      {
        q: "What is Web Author?",
        options: [
          "Oxygen in a browser tab, from the same company as the desktop app",
          "A second booklet file",
          "The PDF you published last week",
        ],
        answer: 0,
        why: "Web Author is still Oxygen. It lives in a browser. It is a thinner desk, not a different kind of page.",
      },
      {
        q: "You need to run a completeness check on the booklet and read a local publish log. Where do you work?",
        options: [
          "Only in a browser tab — it can do every desktop job",
          "On the desktop app",
          "In a notes app",
        ],
        answer: 1,
        why: "The browser cousin is for writing and light review. Completeness and local publish still live on the desktop.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Web Author on the official page, or open the labeled mock",
      doTitle: "Write three shares and three gaps",
      doDone: "Six lines in week7/web-author-gap.txt.",
      stress: "Pick what Web Author is, and where completeness still lives",
    }),
    fieldNotePrompt:
      "What three things did you write that the desktop app still does better? Paste the lines.",
    tomorrowHook: "Tomorrow you prove three desktop moves on the booklet in your hand.",
    body: `## Same company, thinner desk

**Web Author** is Oxygen in a browser tab. Same company as the desktop app (Syncro Soft). You still see a page view. You can still type. You can still see a red error.

It is not the full desk. Do not expect every add-on, every publish button, or a completeness check that matches last week.

Use it when you are away from the licensed desktop, or when someone only needs to read a page and leave a comment. Do not send a writer into a browser tab and then ask them for a local WebHelp folder.

## Word today

**Web Author** — Oxygen in a browser. Same writing app. Fewer tools.

## Watch

Play the Getting Started video. Pause on the first full desktop window. That chrome is what a browser tab may not give you.

## Lab

Six lines: three shares, three gaps. If you have no Web Author URL, the labeled mock counts. Caption the mock as a mock.
`,
  },
  {
    n: 44,
    week: 7,
    title: "When the desktop app is still the right tool",
    objective:
      "Run three desktop-only moves on kitepump.ditamap that you would not bet a browser tab on.",
    minutes: 90,
    skills: ["oxygenUi", "maps"],
    legacy: [],
    youtube: [
      yt("maps", [
        "The booklet view (Maps Manager)",
        "Where you run a completeness check from the booklet",
      ]),
    ],
    sources: [S.mapsDemo, S.ugEditor],
    toolCards: ["maps-manager", "transformation"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Three desktop moves",
      steps: [
        "Open kitepump.ditamap in Maps Manager. Run Validate and Check for Completeness. Write the result (clean, or the first row you saw).",
        "Open Configure Transformation Scenario. Write the scenario name you would run. Do not hunt for that same local publish inside a browser tab.",
        "Turn off wifi for a minute, or write how you would open the booklet on a train with no signal. The desktop copy on disk still opens. A browser tab may not.",
        "Save the three moves in oxygen-bootcamp-work/week7/desktop-still.txt.",
      ],
      failWhen:
        "You skip the completeness check, or you write slogans about ‘the cloud’ with no file in your hand.",
      expected:
        "Completeness ran. Three desktop moves named with evidence.",
    },
    quiz: [
      {
        q: "A completeness check on the booklet is mainly a desktop job this course. True or not?",
        options: [
          "True — you ran it in Maps Manager last month, and you run it here again",
          "Not true — only a browser tab can check links",
          "Not true — Help > About checks the booklet",
        ],
        answer: 0,
        why: "Maps Manager lives on the desktop app. A reviewer in a browser does not need this button.",
      },
      {
        q: "Last week you published WebHelp to a folder on your computer. Who needs that job?",
        options: [
          "Every reviewer who only comments on one sentence",
          "The person who owns the booklet and the publish log",
          "Nobody — publish logs are optional forever",
        ],
        answer: 1,
        why: "A browser editor may preview a page. The transform log you debug lives on the desktop (or on a publish server). Not on a reviewer’s phone.",
      },
    ],
    quests: defaultQuests({
      learn: "Find completeness on the booklet in Maps Manager",
      doTitle: "Run three desktop moves and write them down",
      doDone: "Completeness ran. Three moves in desktop-still.txt.",
      stress: "Pick which jobs stay on the desktop app",
    }),
    fieldNotePrompt:
      "Which of the three desktop moves did you actually run? Quote the completeness result in one line.",
    tomorrowHook: "Tomorrow you send a file out for review: track a change, leave a comment, accept one edit.",
    body: `## Desktop still wins some jobs

The booklet view. A completeness check. A transformation log. A rename that updates pointers. Work with no internet.

A person who only needs to read one page on a train does not need those buttons. Do not make them install the desktop app for a comment.

You are the person with the booklet. You still need the desktop.

## Word today

**Desktop app** — Oxygen installed on your computer. Full menus. Files on disk. The desk you have used since week 1.

## Lab

Three moves, written down. Completeness is the one you must actually click.
`,
  },
  {
    n: 45,
    week: 7,
    title: "Send a file out for review",
    objective:
      "Turn on Track Changes, edit one command, add one comment, and accept the edit.",
    minutes: 90,
    skills: ["review", "oxygenUi"],
    legacy: ["t4-review"],
    youtube: [yt("wysiwyg", ["Author canvas while you write", "Where a comment might sit on the page"])],
    sources: [S.ugEditor, S.authorDita],
    toolCards: ["review"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "One tracked edit, one comment, one accept",
      steps: [
        "Copy prime-the-pump.dita to oxygen-bootcamp-work/week7/prime-the-pump-review.dita so you do not wreck the sample.",
        "Open the copy. Turn on Track Changes (Review view — verify the label in your version).",
        "Edit one command (a cmd line). Add a comment on the context paragraph.",
        "Accept the edit. Leave the comment or resolve it — write which you did in oxygen-bootcamp-work/week7/review-cycle.txt.",
        "Save. The copy should open with no red error.",
      ],
      failWhen:
        "You edited with Track Changes off and called it a review, or you left the copy broken, or you never wrote which way you closed the comment.",
      expected:
        "Review view shows the cycle. One accept. Comment noted. File opens clean.",
    },
    quiz: [
      {
        q: "Track Changes is on. You edit a command. What should a reviewer see?",
        options: [
          "The new words marked as a change, until someone accepts or rejects them",
          "Nothing — typing always hides the old words forever",
          "A new booklet file on the desktop",
        ],
        answer: 0,
        why: "Track Changes keeps the old and the new until a person decides. That is the review.",
      },
      {
        q: "You left twelve leftover insertions in a page you want to ship. First move?",
        options: [
          "Accept or reject each one on purpose, then save",
          "Publish first, clean later",
          "Rename the file to FINAL",
        ],
        answer: 0,
        why: "Leftover marks are not a style. They are unfinished review. Finish them before you hand the file on.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Track Changes and the Review view",
      doTitle: "Edit, comment, accept on a copy of the how-to",
      doDone: "One accept. Comment noted. File opens clean.",
      stress: "Pick what Track Changes shows, and what leftover marks mean",
    }),
    fieldNotePrompt:
      "What did you change in the command, and did you accept it? One or two sentences.",
    tomorrowHook:
      "Tomorrow you work with someone who does not live in Oxygen — a share they can open in a browser.",
    body: `## Review view

**Track Changes** marks insertions and deletions so a second person can see what you did. **Comments** sit on a sentence. Accept or reject like a grown-up. Then save.

Do not mix two review piles on the same file (desktop comments plus a second share tool, both half-done). Pick one pile. Finish it.

## Word today

**Track Changes** — a switch that marks what you type so a reviewer can accept or reject it.

## Watch

The WYSIWYG video is the page view. You want the same canvas with Review open. Verify the label **Review > Track Changes** in your version.

## Lab

A copy of the how-to. One edit. One comment. One accept. Write which way you closed the comment.
`,
  },
  {
    n: 46,
    week: 7,
    title: "Work with someone who does not live in Oxygen",
    objective:
      "Explain Content Fusion as a way to share a change with a reviewer who may only have a browser — not as a second home for the files.",
    minutes: 75,
    skills: ["review"],
    legacy: [],
    youtube: [yt("tutorials", ["In-app lessons vs a shared review with another person"])],
    sources: [S.documentation, S.ugEditor],
    toolCards: ["review"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Share tool, four lines",
      steps: [
        "Read the official Content Fusion description from Oxygen’s documentation hub. Quote at most two lines, then write your own.",
        "Write: what Fusion is for (share a change set with a reviewer who may not install the desktop app).",
        "Write: what it is not (not the one place the files live, not a second booklet).",
        "Write who should ignore Fusion this week (anyone who already reviews in the desktop Review view on the same file).",
        "If you have Fusion at work, try a share on a copy. If not, caption a labeled mock as a mock and still write the four lines in oxygen-bootcamp-work/week7/fusion-four-lines.txt.",
      ],
      failWhen:
        "You describe Fusion as the home of the files, or you skip the four lines because you have no login.",
      expected:
        "Four lines. Fusion stays a share around Oxygen files. Mock labeled if you used one.",
    },
    quiz: [
      {
        q: "A reviewer will not install Oxygen. One Syncro Soft answer is Content Fusion. What is it for?",
        options: [
          "Share a change so they can comment in a browser",
          "Replace the booklet with a new file type",
          "Publish WebHelp to your laptop",
        ],
        answer: 0,
        why: "Fusion is a share around the files you already have. It is not a second desk and not last week’s publish button.",
      },
      {
        q: "You already have Track Changes comments on a file, and you start a Fusion share on the same file without finishing the first pile. What goes wrong?",
        options: [
          "Nothing — two piles are clearer",
          "Status hides. Nobody knows which comment is the real one",
          "Oxygen deletes the file",
        ],
        answer: 1,
        why: "One review pile per file. Finish or drop the first before you start a second.",
      },
    ],
    quests: defaultQuests({
      learn: "Read what Content Fusion is on the official page",
      doTitle: "Write four lines: for, not-for, who ignores it, and a mock note if needed",
      doDone: "Four lines saved. Fusion is not the home of the files.",
      stress: "Pick what Fusion is for, and what two review piles hide",
    }),
    fieldNotePrompt:
      "Did you open Fusion, or did you use the labeled mock? What four lines did you write?",
    tomorrowHook: "Tomorrow you hand off a clean folder: map plus pages, plus a cover note.",
    body: `## A reviewer with no desktop app

Some people will not install Oxygen. They still need a way to read a change and leave a comment.

**Content Fusion** is one Syncro Soft answer: you share a change set. They open it in a browser. That is the whole apple today.

It is not a second home for the files. The booklet and the pages still live in the folder you already use (or in Git, tomorrow). If your shop has no Fusion, you still write the four lines. A labeled mock counts.

## Word today

**Content Fusion** — Oxygen’s share tool. A reviewer comments in a browser. Your files do not move house.

## Do not

Do not run Fusion comments and desktop Track Changes on the same file at once. Two piles hide status.
`,
  },
  {
    n: 47,
    week: 7,
    title: "Hand off a clean folder",
    objective:
      "Pack the booklet and its pages into a small folder a reviewer can open, plus a one-page note, without sending your whole disk.",
    minutes: 90,
    skills: ["review", "maps"],
    legacy: ["t6-git"],
    youtube: [yt("ditaStart", ["The map as the thing you send, not random pages"])],
    sources: [S.authorDita, S.learnDita],
    toolCards: ["maps-manager"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Reviewer folder plus cover note",
      steps: [
        "Copy kitepump.ditamap and its topics into oxygen-bootcamp-work/week7/reviewer-pack/.",
        "Add README-reviewer.txt: open the map in Maps Manager; comment only on prime-the-pump.dita; do not rename files.",
        "List every file in the pack in oxygen-bootcamp-work/week7/reviewer-list.txt. Do not include out/ publish folders.",
        "If you use Git at work, write one line: this week the pack is a folder (or a zip) because the reviewer has no repo.",
      ],
      failWhen:
        "You send the whole oxygen-bootcamp-work tree, or you omit the map, or you include a publish out/ folder.",
      expected:
        "A small pack with the map, the pages, and a cover note a non-writer can follow.",
    },
    quiz: [
      {
        q: "A reviewer without Oxygen should receive only the one topic file. True or not?",
        options: [
          "True — one file is simpler",
          "Not true — keys and sibling pages break without the map. Send the tiny book, or use a browser review tool",
          "True if the file name is FINAL",
        ],
        answer: 1,
        why: "The booklet holds the pointers. One loose page loses its neighbors and its product name key.",
      },
      {
        q: "What stays out of a reviewer pack?",
        options: [
          "The map",
          "The cover note",
          "Publish output folders (out/) and the rest of your disk",
        ],
        answer: 2,
        why: "Send the book. Do not send last week’s HTML, and do not send every file you have ever saved.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the map and the two topic files you will copy",
      doTitle: "Build a small reviewer pack with a cover note",
      doDone: "Map included. out/ excluded. File list written.",
      stress: "Pick why the map must go in the pack, and what stays out",
    }),
    fieldNotePrompt:
      "What files did you put in the reviewer pack? Paste the list.",
    tomorrowHook: "Tomorrow you pick one place the files live — a folder or Git, not both by accident.",
    body: `## The pack is a book

Send the **map** plus the **pages** it points at. Say what to comment on. Say do not rename files. A renamed file is a broken pointer.

Do not send \`out/\` publish folders. Do not send your whole \`oxygen-bootcamp-work/\` tree. Git can wait until the reviewer has a repo.

## Word today

**Reviewer pack** — a small folder (or zip) with the booklet, its pages, and a cover note. Not your whole disk.

## Lab

Copy. Cover note. List. If a file is missing from the list, it is missing from the pack.
`,
  },
  {
    n: 48,
    week: 7,
    title: "Pick one place the files live",
    objective:
      "Write the one place kitepump lives this week, rename one page without breaking the pointer, and name the failure if two places both claim to be home.",
    minutes: 90,
    skills: ["review", "maps"],
    legacy: ["t6-git"],
    youtube: [yt("completeness", ["A broken pointer after a casual rename"])],
    sources: [S.ugEditor, S.documentation],
    toolCards: ["maps-manager"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "One home for the files",
      steps: [
        "Copy kitepump-dita to oxygen-bootcamp-work/week7/one-home/ so you do not wreck the sample.",
        "Write in oxygen-bootcamp-work/week7/source-of-truth.txt: this week the files live in ____ (a folder, or Git). Pick one.",
        "If you picked a folder: rename one topic file, then fix the pointer in the map by hand. Run completeness.",
        "If you picked Git: enable Master Files on the map in Oxygen (verify the label) and rename a topic. Confirm the pointer updates. Run completeness.",
        "Write the failure mode of two people editing two copies and both calling their copy the home.",
      ],
      failWhen:
        "You claim two homes with no bridge, or completeness still shows a missing file after the rename.",
      expected:
        "One home written down. Completeness clean after rename. Failure mode written.",
    },
    quiz: [
      {
        q: "Master Files in Oxygen exist to update pointers when you rename a file. True or not?",
        options: [
          "True — that is the point. Without them, a rename is a silent broken link",
          "Not true — Master Files publish the PDF",
          "Not true — rename never breaks a booklet",
        ],
        answer: 0,
        why: "The booklet stores a path. Rename the file and the path is a lie until something updates it.",
      },
      {
        q: "You and a teammate each have a full copy of kitepump on two desktops, and neither copy is Git. What fails first?",
        options: [
          "Nothing — two homes are safer",
          "One of you overwrites the other’s page, and nobody can say which copy is real",
          "Oxygen cannot store two copies",
        ],
        answer: 1,
        why: "Pick one place the files live. Two homes are how pages vanish.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Master Files, or the pointer in the map you will fix by hand",
      doTitle: "Rename one page in the copy and keep completeness clean",
      doDone: "One home written. Completeness clean. Failure mode written.",
      stress: "Pick what Master Files are for, and what two homes break",
    }),
    fieldNotePrompt:
      "Where do the files live this week, and what did you rename? Quote the completeness result.",
    tomorrowHook:
      "Tomorrow is the week 7 check. You will repair a messy handoff. Week 8 stays locked until that day is finished.",
    body: `## Pick one

A **shared folder**, or **Git** (Git is a history tool for files). Not both by accident.

**Master Files** tell Oxygen which booklet owns the pages, so a rename can update pointers. If you have no Master Files, you fix the pointer by hand and you run completeness.

Two desktops, two copies, two people who both think they are home: that is how a page disappears.

## Word today

**Source of truth** — the one place the real files live. Everyone else has a copy, or a share, not a second home.

## Watch

The completeness video. Watch what a broken pointer looks like after a rename. That row is the whole lesson.
`,
  },
  {
    n: 49,
    week: 7,
    title: "Week 7 check",
    objective:
      "Repair a messy handoff: a pack with no map, leftover Track Changes, and a note that claims two homes. Pass the quiz so week 8 can open.",
    minutes: 90,
    skills: ["review", "maps"],
    legacy: [],
    youtube: [
      yt("maps", ["The map as the unit you hand off"]),
      yt("completeness", ["A missing pointer after a bad pack"]),
    ],
    sources: [S.mapsDemo, S.ugEditor, S.documentation],
    toolCards: ["review", "maps-manager"],
    badgeId: null,
    boss: true,
    lab: {
      pack: "kitepump-dita",
      title: "Three handoff faults",
      steps: [
        "Copy kitepump to oxygen-bootcamp-work/week7-check/ so you do not wreck the original.",
        "Fault 1: make a pack with topics and no map, then add the map back. Run completeness.",
        "Fault 2: turn on Track Changes, leave two leftover insertions, then accept or reject with intent. File opens clean.",
        "Fault 3: a note that says ‘the files live on my desktop and in the zip and both are home’. Rewrite it to one home.",
        "List the files you would send a reviewer, in 60 seconds, in oxygen-bootcamp-work/week7-check/send-list.txt.",
        "Pass the quiz. You can retry it. Week 8 stays locked until this day is finished (lab + quiz + a short note).",
      ],
      failWhen:
        "The check copy still has no map, or leftover insertions are still in the page, or the note still claims two homes.",
      expected:
        "Map present. Review clean enough to send. One-home sentence. Send list written.",
    },
    quiz: [
      {
        q: "You failed this check. Does week 8 open anyway?",
        options: [
          "Yes, the Friday page is enough",
          "No. Finish this day’s lab, quiz, and note. You can retry the quiz.",
          "Yes, if you do the 5-minute warmup",
        ],
        answer: 1,
        why: "Next week waits until you can hand off a book with one home and a finished review. Retry is free.",
      },
      {
        q: "A reviewer pack is missing the map. What breaks?",
        options: [
          "Nothing — each page is a full book",
          "Pointers, keys, and neighbor pages. The reviewer cannot see the booklet",
          "Help > About",
        ],
        answer: 1,
        why: "The pack is a book. The map is the table of contents. No map, no book.",
      },
      {
        q: "Web Author is the same thing as the desktop app, just in a browser. What is still true?",
        options: [
          "Every desktop button is in the browser tab",
          "Same company and same kind of page. Fewer tools. Completeness and local publish still live on the desktop",
          "The browser tab stores the only copy of the files",
        ],
        answer: 1,
        why: "Thinner desk. Same writing app. You still pick one place the files live.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the three faults from this week",
      doTitle: "Repair the check copy until it is a book again",
      doDone: "Map present. Review finished. One home. Send list written.",
      stress: "Pass the quiz. Retry if you need to.",
    }),
    fieldNotePrompt:
      "Write the three faults and the one-line repair for each.",
    tomorrowHook:
      "Week 8: when things break. Same words, slow booklets, a broken map you can repair. Still Oxygen.",
    body: `## A check, not a show

This is the week boss. You already met these faults. You are only proving you can name them.

1. **No map in the pack** — you sent pages and no booklet.
2. **Leftover Track Changes** — the review was not finished.
3. **Two homes** — a desktop copy and a zip both claimed to be the real files.

Fail the quiz and **week 8 stays locked**. Retry as many times as you want. The 5-minute warmup does not open the week.

## Word today

**Handoff** — giving someone else a pack they can open. Map, pages, cover note, one home.

## Tone

Messy packs are normal the first time. Repair them. Then go home.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
