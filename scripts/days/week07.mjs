import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 43,
    week: 7,
    title: "Oxygen XML Web Author — the browser cousin",
    objective: "Tour Web Author enough to name three things it shares with desktop and three it does not.",
    minutes: 90,
    skills: ["oxygenUi", "review"],
    legacy: [],
    youtube: [yt("gettingStarted", ["Desktop chrome you will not see in a browser tab"])],
    sources: [S.ugEditor, S.documentation, S.videos],
    toolCards: ["author-mode"],
    badgeId: "web-author-tour",
    lab: {
      pack: "kitepump-dita",
      title: "Three shares, three gaps",
      steps: [
        "Read the official Web Author product page from the Source box. Do not scrape a manual into your notes.",
        "Open kitepump-dita on desktop so you have a baseline.",
        "Write three shared things (Author canvas, validation, DITA toolbar actions — verify labels).",
        "Write three desktop-only things (Maps Manager power, Transformation scenarios, Schematron + frameworks, offline).",
        "Save oxygen-bootcamp-work/week7/web-author-gap.txt.",
      ],
      failWhen: "You claim Web Author publishes WebHelp locally like desktop, or you call it AEM Guides.",
      expected: "Six factual lines. Web Author is Syncro Soft in a browser, not Guides.",
    },
    quiz: [
      {
        q: "Oxygen XML Web Author is the same product as AEM Guides. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Web Author is Syncro Soft. Guides is Adobe. They can connect. They are not the same editor.",
      },
      {
        q: "Where do you still want desktop Oxygen?",
        options: ["Typing a shortdesc", "Map surgery, Schematron, offline frameworks", "Reading a comment"],
        answer: 1,
        why: "SMEs can comment in a browser. Specialists still need desktop for the book.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Web Author and what it is not (Guides, Sites)",
      doTitle: "Keep the gap list honest",
      doDone: "Six lines, no product mash-up.",
      stress: "Catch the Guides vs Web Author mix-up",
    }),
    fieldNotePrompt: "Who on your team should never be forced onto desktop Oxygen?",
    tomorrowHook: "Tomorrow: what desktop still does better, with a file in your hand.",
    body: `## Web Author

Oxygen XML Web Author is Syncro Soft in a browser. Author mode still exists. Validation still exists. It is not AEM Guides and not Sites.

Use it when a writer is away from the licensed desktop, or when IT wants a thinner client. Do not expect every add-on.

## Figure

Labeled mock: a browser tab with an Author canvas and a slimmer rail. Caption: *Not a screenshot. Verify the current Web Author layout in the official video catalog.*
`,
  },
  {
    n: 44,
    week: 7,
    title: "What desktop still does better",
    objective: "Prove three desktop-only moves on kitepump.ditamap that you would not bet a browser tab on.",
    minutes: 90,
    skills: ["oxygenUi", "maps"],
    legacy: [],
    youtube: [yt("maps", ["Completeness from Maps Manager — a desktop-grade move"])],
    sources: [S.mapsDemo, S.ugEditor],
    toolCards: ["maps-manager", "transformation"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Three desktop moves",
      steps: [
        "Run Validate and Check for Completeness on kitepump.ditamap.",
        "Open Configure Transformation Scenario. Write whether Web Author in your shop even offers local DITA-OT.",
        "Open a Schematron-aware validate if you have one; if not, write “no Schematron at this desk.”",
        "Record the three moves in week7/desktop-still.txt.",
      ],
      failWhen: "You skip completeness and write slogans about ‘the cloud’.",
      expected: "Completeness ran. Three desktop moves named with evidence.",
    },
    quiz: [
      {
        q: "Local WebHelp from DITA-OT is primarily a desktop (or server) job. True?",
        options: ["True", "False"],
        answer: 0,
        why: "A browser editor may preview. The transform log you will debug this course lives on desktop or a publish server.",
      },
    ],
    quests: defaultQuests({
      learn: "Name completeness as a desktop-grade map action",
      doTitle: "Completeness still clean",
      doDone: "Report ran. Three moves recorded.",
      stress: "Explain why a SME does not need this yet",
    }),
    fieldNotePrompt: "Which desktop move would you refuse to skip before a release?",
    tomorrowHook: "Review workflow: comments and change tracking without mixing tools.",
    body: `## Desktop still wins

Maps Manager completeness. Transformation logs. Schematron. Master Files rename. Custom frameworks. Offline.

Web Author wins for a writer who only needs the topic on a train. Do not make that person install DITA-OT.
`,
  },
  {
    n: 45,
    week: 7,
    title: "Review workflow in Oxygen",
    objective: "Track changes, comment, accept one, and refuse to mix Fusion comments with Guides review on the same file.",
    minutes: 90,
    skills: ["review", "oxygenUi"],
    legacy: ["t4-review"],
    youtube: [yt("wysiwyg", ["Author canvas while Review is open"])],
    sources: [S.ugEditor, S.authorDita],
    toolCards: ["review"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "One tracked edit, one comment, one accept",
      steps: [
        "Open prime-the-pump.dita. Turn on Track Changes (Review view — verify the label).",
        "Edit a cmd. Add a comment on the context paragraph.",
        "Accept the edit. Leave the comment or resolve it — write which you did.",
        "Write one line: I will not mix Content Fusion comments and AEM Guides review on this file.",
      ],
      failWhen: "You edited with Track Changes off and called it a review, or you mixed two review systems in the note.",
      expected: "Review view shows the cycle. The one-line mixing rule is in the field note.",
    },
    quiz: [
      {
        q: "You should run Content Fusion comments and AEM Guides review on the same topic at once. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Two review systems on one file hide status. Pick the source of truth.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Review view and what mixing two systems forbids",
      doTitle: "Tracked edit still validates",
      doDone: "File valid. One accept. Mixing rule written.",
      stress: "Explain the leftover comment in one sentence",
    }),
    fieldNotePrompt: "Which review system does your team actually own?",
    tomorrowHook: "Content Fusion as collaboration context — not a second CMS.",
    body: `## Review view

Insertions, deletions, comments. Accept/reject like a grown-up. Do not mix Content Fusion comments and AEM Guides review on the same file.

Caption: *Review lives in a dockable view. Verify Review > Track Changes in your version.*
`,
  },
  {
    n: 46,
    week: 7,
    title: "Content Fusion as collaboration context",
    objective: "Explain Fusion as a collaboration layer around Oxygen files — not a replacement for a CCMS.",
    minutes: 75,
    skills: ["review"],
    legacy: [],
    youtube: [yt("tutorials", ["In-product missions vs a shared review"])],
    sources: [S.documentation, S.ugEditor],
    toolCards: ["review"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Fusion vs CCMS in four lines",
      steps: [
        "Read the official Fusion description from Oxygen’s documentation hub. Quote at most two lines.",
        "Write: what Fusion is for (share a change set with a reviewer).",
        "Write: what it is not (AEM Guides baselines, translation memory, Sites).",
        "Write who on a Guides shop should ignore Fusion and live in Guides review.",
      ],
      failWhen: "You describe Fusion as Adobe Experience Manager.",
      expected: "Four lines. Fusion stays Syncro Soft collaboration context.",
    },
    quiz: [
      {
        q: "Content Fusion stores your DITA in the AEM DAM. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Guides stores DITA in AEM. Fusion is Oxygen’s collaboration context.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Fusion and what it forbids (pretending to be Guides)",
      doTitle: "Keep the four lines distinct",
      doDone: "No AEM DAM claim.",
      stress: "Pick the reviewer who should not see Fusion",
    }),
    fieldNotePrompt: "Would you introduce Fusion on a team that already lives in Guides? Why not?",
    tomorrowHook: "Hand a zip to a reviewer who is not a specialist.",
    body: `## Fusion is context

A reviewer who will not install Oxygen still needs a way to comment. Fusion is one Syncro Soft answer. It is not your CCMS. If the shop is AEM Guides, the review lives there.
`,
  },
  {
    n: 47,
    week: 7,
    title: "Hand files to a reviewer who is not a specialist",
    objective: "Package a zip a non-specialist can open, plus a one-page what-to-look-at, without sending your entire disk.",
    minutes: 90,
    skills: ["review", "maps"],
    legacy: ["t6-git"],
    youtube: [yt("ditaStart", ["The map as the thing you send, not random topics"])],
    sources: [S.authorDita, S.learnDita],
    toolCards: ["maps-manager"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Reviewer zip + cover note",
      steps: [
        "Copy kitepump.ditamap and its topics into oxygen-bootcamp-work/week7/reviewer-pack/.",
        "Add README-reviewer.txt: open the map in Maps Manager; comment only on prime-the-pump.dita; do not rename files.",
        "If you use Git, write why the pack is a zip this week (the reviewer has no repo).",
        "List the files in the zip. Do not include out/ transforms.",
      ],
      failWhen: "You send the whole oxygen-bootcamp-work tree, or you omit the map.",
      expected: "A small pack with the map and a cover note a non-specialist can follow.",
    },
    quiz: [
      {
        q: "A reviewer without Oxygen should receive only the one topic file. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Keys and sibling topics break without the map. Send the tiny book or use a browser review tool.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the map as the thing you hand over",
      doTitle: "Pack still complete if opened",
      doDone: "Zip contents listed. Map included. out/ excluded.",
      stress: "What breaks if they rename a file",
    }),
    fieldNotePrompt: "What will you refuse to put in a reviewer zip?",
    tomorrowHook: "Team flow lab: pick CCMS or Git, not both by accident.",
    body: `## The zip is a book

Send the map plus topics. Say what to comment on. Say do not rename. Git is later. Master Files help you rename without silent breakage — the reviewer does not have that.
`,
  },
  {
    n: 48,
    week: 7,
    title: "Team flow — CCMS or Git, pick one",
    objective: "Write the source of truth for kitepump this week and the failure mode if someone uses both by accident.",
    minutes: 90,
    skills: ["review", "maps"],
    legacy: ["t6-git"],
    youtube: [yt("completeness", ["Broken href after a casual rename"])],
    sources: [S.ugEditor, S.documentation],
    toolCards: ["maps-manager"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Source of truth card",
      steps: [
        "Write: source of truth = folder | Git | AEM Guides (pick one for this exercise).",
        "If Git: enable Master Files on the map in Oxygen (verify the label) and rename a topic. Confirm the topicref updates.",
        "If folder: rename carefully and fix the topicref by hand. Run completeness.",
        "Write the failure mode of running Git and Guides on the same files without a bridge.",
      ],
      failWhen: "You claim both Git and Guides are source of truth with no bridge.",
      expected: "One source of truth. Completeness clean after rename. Failure mode written.",
    },
    quiz: [
      {
        q: "Master Files in Oxygen exist to update references on rename. True?",
        options: ["True", "False"],
        answer: 0,
        why: "That is the point. Without them, a rename is a silent completeness miss.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Master Files and what they forbid (orphan hrefs)",
      doTitle: "Rename without silent breakage",
      doDone: "Completeness clean after rename.",
      stress: "Explain the dual-source failure in one sentence",
    }),
    fieldNotePrompt: "What is your team’s actual source of truth today?",
    tomorrowHook: "Week 7 clinic: a messy handoff.",
    body: `## Pick one

CCMS (Guides) or Git. Not both by accident. Master Files update references on rename. The Git Client add-on commits inside Oxygen. Still pick a source of truth.
`,
  },
  {
    n: 49,
    week: 7,
    title: "Collaboration clinic",
    objective: "Repair a messy handoff: mixed review comments, a missing map, and a dual-source claim.",
    minutes: 90,
    skills: ["review", "maps"],
    legacy: [],
    youtube: [yt("maps", ["Map as the unit of handoff"]), yt("completeness", ["Missing href after a bad zip"])],
    sources: [S.mapsDemo, S.ugEditor, S.documentation],
    toolCards: ["review", "maps-manager"],
    badgeId: null,
    boss: true,
    lab: {
      pack: "kitepump-dita",
      title: "Clinic: three handoff faults",
      steps: [
        "Fault 1: a pack with topics and no map. Add the map. Completeness.",
        "Fault 2: Track Changes left on with 12 leftover insertions. Accept or reject with intent. File validates.",
        "Fault 3: a note that says ‘Fusion is our AEM CMS’. Rewrite it.",
        "Timed: list the files you would send a SME in 60 seconds.",
      ],
      failWhen: "The clinic copy still has no map, or the Fusion sentence still says CMS.",
      expected: "Map present. Review clean enough to ship. Fusion sentence corrected.",
    },
    quiz: [
      {
        q: "Day 50 unlocks only if this boss is perfect. True?",
        options: ["True", "False — Friday lab can unlock the next week; the badge waits"],
        answer: 1,
        why: "Same rule as Week 1. Boss badge stays locked until you pass.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the three faults",
      doTitle: "Clinic pack is a book again",
      doDone: "Map + valid topics + honest Fusion line.",
      stress: "SME file list in one sentence",
    }),
    fieldNotePrompt: "Which fault would have wasted a real reviewer an hour?",
    tomorrowHook: "Hard Oxygen: subject scheme, flags you must not turn on at work, broken maps.",
    body: `## Clinic

Handoffs fail in boring ways: no map, leftover markup, wrong product names. Repair them. Next week still unlocks if Day 48 lab is done.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
