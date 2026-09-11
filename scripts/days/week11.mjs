import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 70,
    week: 11,
    title: "Three ways to write in AEM, names first",
    objective:
      "Name Page Editor, Universal Editor, and Document Authoring in one line each, and keep Oxygen off that list.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: [],
    youtube: [
      yt("aemGlobal", [
        "Document-based authoring, if shown",
        "A visual editor that is not the classic page canvas",
      ]),
    ],
    sources: [S.aemMethods, S.docAuth, S.aemCloudQs],
    toolCards: ["page-editor", "universal-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Three names, three one-liners",
      steps: [
        "You may not have AEM. Use the official article, the video, and a field log.",
        "Write oxygen-bootcamp-work/week11/field-log-70.txt with three names and one line each.",
        "Page Editor: the canvas you used in week 10. You drop Title, Text, Image, Teaser onto a template.",
        "Universal Editor: a visual editor for pages that are wired for it, including pages that are not the classic Page Editor.",
        "Document Authoring: writing an AEM page from Word or Google Docs, with a helper in the browser. Verify the current product name in the article.",
        "Do not merge the three into ‘the AEM editor’. Do not add Oxygen to the list.",
        "Labeled mock: three boxes, one name each. Caption: mock.",
      ],
      failWhen: "You merge all three into one editor, or you put Oxygen on the list.",
      expected: "Three one-liners. Three names. Mock labeled.",
    },
    quiz: [
      {
        q: "Document Authoring is how you edit a DITA how-to in Oxygen. True or not?",
        options: [
          "True — both use the word document",
          "Not true — Document Authoring is an AEM way to write a web page from Word or Google Docs",
          "True if you have Guides",
        ],
        answer: 1,
        why: "Same English word. Different tools. Oxygen is the DITA app. Document Authoring is AEM.",
      },
      {
        q: "The canvas you used last week to drop Title and Text is…",
        options: ["Page Editor", "Document Authoring", "Oxygen Author view"],
        answer: 0,
        why: "Page Editor is the classic AEM canvas. Oxygen Author view is a different product.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the three names in the official article",
      doTitle: "Write one line for each name",
      doDone: "Three names in the field log. Mock labeled.",
      stress: "Pick whether Document Authoring is Oxygen",
    }),
    fieldNotePrompt: "Which of the three names did you write down, and which one (if any) exists on your project? ‘Unknown / mock’ is fine.",
    tomorrowHook: "Tomorrow: when to use each way — and when none of them is the job.",
    body: `## Three names first

AEM has more than one way to write a page. Today you only learn the names. You do not pick a favourite.

**Page Editor** is the canvas you used last week. You drop blocks onto a template.

**Universal Editor** is a visual editor for pages that are wired for it. Some of those pages are not the classic Page Editor template.

**Document Authoring** is writing an AEM page from Word or Google Docs. A helper in the browser sends the doc into AEM. Verify the current name in the official article — product labels move.

Oxygen is not a fourth item on this list. Oxygen is the DITA app on your desktop (and in a browser, earlier in the course). Different desk.

## Word today

**Page Editor** — the classic AEM canvas of blocks.

**Universal Editor** — a visual editor for pages wired for it.

**Document Authoring** — an AEM page written from Word or Google Docs.

## Watch

Play the official video. Pause on each named editor if it appears. You are collecting names, not clicking around a live site.

## Lab

Three one-liners. Labeled mock. No AEM instance required.

## Figure

Labeled mock: three boxes. Caption: *Mock. Three names, not one blur.*
`,
  },
  {
    n: 71,
    week: 11,
    title: "When to use each way",
    objective:
      "Match four jobs to a method: Page Editor, Universal Editor, Document Authoring, or Oxygen — and keep a DITA how-to off the AEM list.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: [],
    youtube: [
      yt("aemGlobal", ["When a Word-like flow is the point"]),
      yt("aemHeadless", ["When a visual or app-driven page shows up"]),
    ],
    sources: [S.aemMethods, S.docAuth],
    toolCards: ["universal-editor", "page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Job to method table",
      steps: [
        "Write oxygen-bootcamp-work/week11/field-log-71.txt as a four-row table.",
        "Job: a WKND-style page with Title, Text, Teaser on a template → Page Editor.",
        "Job: a page or app that Universal Editor is wired for → Universal Editor.",
        "Job: marketers already writing in Word or Google Docs → Document Authoring.",
        "Job: a 12-step pump prime in DITA → Oxygen (or Adobe Guides, which you open next week). Not the three AEM page methods.",
        "Labeled mock: the four-row table. Caption: mock.",
      ],
      failWhen: "The DITA how-to is assigned to Document Authoring because both say document.",
      expected: "Four rows. The how-to stays off the AEM page methods.",
    },
    quiz: [
      {
        q: "A marketer wants to write a campaign page in Google Docs. Which AEM method?",
        options: ["Page Editor", "Document Authoring", "Oxygen File > New"],
        answer: 1,
        why: "Document Authoring is the Word / Google Docs path into AEM.",
      },
      {
        q: "A 12-step how-to already lives as a DITA task. Which method today?",
        options: [
          "Document Authoring — it says document",
          "Oxygen — it is a DITA how-to",
          "Universal Editor — visual is always better",
        ],
        answer: 1,
        why: "A DITA how-to is not an AEM page method. Keep it in Oxygen this week.",
      },
    ],
    quests: defaultQuests({
      learn: "Read the four jobs and the matching method",
      doTitle: "Write the four-row table",
      doDone: "DITA how-to is not on the AEM page list.",
      stress: "Pick the method for a Google Doc campaign page, and for a DITA how-to",
    }),
    fieldNotePrompt: "What four jobs did you write, and which method sat on each row?",
    tomorrowHook: "Tomorrow a form-like page: fields, not a layout.",
    body: `## Match the job

Yesterday you named three AEM ways to write. Today you match a job to a way.

- A templated site page with Core Components → **Page Editor**
- A page or app wired for visual editing beyond that canvas → **Universal Editor**
- Marketers already in Word or Google Docs → **Document Authoring**
- A DITA how-to → **Oxygen** (Guides next week)

If you only remember one thing: a DITA how-to does not become Document Authoring because both use the word document.

You do not have to pick a favourite. You have to pick the matching row.

## Lab

Four rows in the field log. Labeled mock of the table.

## Figure

Labeled mock: four jobs, four methods. Caption: *Mock. The how-to row is Oxygen.*
`,
  },
  {
    n: 72,
    week: 11,
    title: "A form-like page (Content Fragment) in plain words",
    objective:
      "Open or mock a Content Fragment, write three fields, and say it is not a laid-out page and not a DITA lookup page.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: [],
    youtube: [
      yt("aemHeadless", [
        "A form of fields, not a page layout",
        "Fragment vs page, if shown",
      ]),
    ],
    sources: [S.aemMethods, S.aemCloudQs],
    toolCards: ["content-fragment"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Three fields, no page tree",
      steps: [
        "If you have AEM: open a Content Fragment (WKND has them). Write the model name and three fields in oxygen-bootcamp-work/week11/field-log-72.txt.",
        "If you do not: write ‘model: Kitepump spec (mock) / fields: name, pressure, valve’ and label it mock.",
        "Write two ‘is not’ sentences: this is not an Experience Fragment, and this is not a DITA lookup page.",
        "Write who might read the fields: a page, an app, both, or unknown.",
        "Do not decorate the fragment like a landing page.",
        "Labeled mock: a short form with three fields. Caption: mock.",
      ],
      failWhen: "You treat the fragment as a Sites page layout, or you skip the two ‘is not’ sentences.",
      expected: "Three fields. Two ‘is not’ sentences. Mock labeled if no instance.",
    },
    quiz: [
      {
        q: "A Content Fragment is a DITA lookup page stored in AEM. True or not?",
        options: [
          "True — fields are a lookup page",
          "Not true — it is a fill-in form of fields for a page or an app",
          "True if the model is named reference",
        ],
        answer: 1,
        why: "A DITA lookup page is XML in Oxygen. A Content Fragment is an AEM form of fields.",
      },
      {
        q: "A promo strip reused on forty pages is which of these?",
        options: [
          "Content Fragment",
          "Experience Fragment (layout strip from last week)",
          "Document Authoring",
        ],
        answer: 1,
        why: "Layout strip = Experience Fragment. Fields = Content Fragment. Different jobs.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Content Fragment as a form of fields",
      doTitle: "Write three fields and two ‘is not’ sentences",
      doDone: "Model name plus fields. Mock labeled if needed.",
      stress: "Pick Content Fragment vs Experience Fragment vs a DITA lookup page",
    }),
    fieldNotePrompt: "What three fields did you write, and who reads them — a page, an app, both, or unknown?",
    tomorrowHook: "Tomorrow you upload a file to the asset library.",
    body: `## A form, not a layout

A **Content Fragment** is a fill-in form of fields. Name. Pressure. Valve. An app can read those fields. A page can read them too. There is no tree of Title / Teaser / Container here.

It is not an **Experience Fragment**. That is a layout strip. Last week.

It is not a DITA lookup page. That is XML in Oxygen. Week 2.

Do not decorate a Content Fragment like a landing page. You are filling fields, not stacking blocks.

If you have no AEM, a labeled mock is the lab. Three fields is enough.

## Word today

**Content Fragment** — a fill-in form of fields in AEM, not a laid-out page.

## Watch

Pause the official video on the form, not on the pretty page. You want fields.

## Lab

Three fields. Two ‘is not’ sentences. Labeled mock.

## Figure

Labeled mock: model name plus three fields. Caption: *Mock. A form, not a landing page.*
`,
  },
  {
    n: 73,
    week: 11,
    title: "Upload a file to the asset library",
    objective:
      "Upload or mock one picture, set a title and a description, and write the folder path — without putting the file in git.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: [],
    youtube: [yt("aemQuick", ["Authoring next to pictures, if shown"])],
    sources: [S.assets, S.basicHandling],
    toolCards: ["assets-console"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "One file, title, description, path",
      steps: [
        "If you have AEM: Assets, upload a small photo you own or a public-domain picture. Title. Description. Do not steal a vendor screenshot.",
        "Move it to a folder you are allowed to use. Write the path in oxygen-bootcamp-work/week11/field-log-73.txt.",
        "If you do not have AEM: write the path you would use, for example /content/dam/kitepump/beach-card.jpg, and label it mock.",
        "Write: this path is not a DITA image href. Guides may store DITA pictures in this library later. Still a different pointer.",
        "Do not put a large photo in this git repo. The library lives in AEM.",
        "Labeled mock: Assets folder with one file card. Caption: mock.",
      ],
      failWhen:
        "You commit a huge photo to git, or you paste a copyrighted Adobe screenshot, or the path is missing.",
      expected: "Path plus title plus description. Git stays small. Mock labeled if no instance.",
    },
    quiz: [
      {
        q: "Should you put the library file into this course’s git repo?",
        options: [
          "Yes — so the picture travels with the lesson",
          "No — the file lives in AEM’s library, not in this git tree",
          "Yes, if it is under 20 MB",
        ],
        answer: 1,
        why: "Assets live in AEM. This repo stays small.",
      },
      {
        q: "You set a title on the file in Assets. Is that the same as the Title block on a page?",
        options: [
          "Yes — one title everywhere",
          "No — one is metadata on the file, the other is a heading block on a page",
          "Yes on Cloud only",
        ],
        answer: 1,
        why: "Same English word. File title lives in the library. Page Title is a block.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the Assets console (or the mock of it)",
      doTitle: "Write path, title, and description",
      doDone: "Path written. No binary in git.",
      stress: "Pick whether the picture belongs in git",
    }),
    fieldNotePrompt: "What title did you give the file, and what path did you write?",
    tomorrowHook: "Tomorrow: language copies, awareness only. You will not run one on a live tree.",
    body: `## Upload a file

Last week **Assets** was ‘the library the Image block points at’. Today you put a file in that library.

Upload. Give it a **title** (a name in the library) and a **description**. Move it into a folder you are allowed to use. Write the path.

A typical path looks like \`/content/dam/kitepump/beach-card.jpg\`. That is not a DITA \`href\`. Do not mix the two pointers.

Do not dump the photo into this git repo. The library is AEM, not the course folder.

If you have no AEM, write the path you would use and label the mock.

## Word today

**Assets console** — the screen where you upload, move, and name files in AEM’s library.

## Lab

One file (or a mock). Title, description, path. Git stays small.

## Figure

Labeled mock: one file card in a folder. Caption: *Mock. Path written in the log.*
`,
  },
  {
    n: 74,
    week: 11,
    title: "Language copies, awareness only",
    objective:
      "Explain a language copy as an AEM copy of a page tree for another language, not a DITA ditaval, and write who owns translation.",
    minutes: 75,
    skills: ["aemSites"],
    legacy: [],
    youtube: [
      yt("aemGlobal", ["Language and translation as a workflow, if shown"]),
    ],
    sources: [S.aemAuthor, S.aemMethods],
    toolCards: ["sites-console"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Language copy vs ditaval",
      steps: [
        "Write oxygen-bootcamp-work/week11/field-log-74.txt: a language copy copies a page tree for another language. Verify the current menu name in the docs.",
        "Write: a ditaval filters a DITA book. It is not a language copy.",
        "Write who owns translation: a team name, or ‘unknown — awareness only’.",
        "Do not create a language copy on a production tree you do not own.",
        "Labeled mock: English tree and French tree as two folders. Caption: mock.",
      ],
      failWhen: "You run a language copy on a live site as a lab stunt.",
      expected: "Two distinctions plus an owner line. No production copy. Mock labeled.",
    },
    quiz: [
      {
        q: "A ditaval is how AEM copies English pages into French. True or not?",
        options: [
          "True — filter equals translate",
          "Not true — a ditaval filters a DITA book. A language copy is an AEM page-tree copy",
          "True if the ditaval is named fr",
        ],
        answer: 1,
        why: "You used ditavals in the handbook. Language copies are Sites. Different desks.",
      },
      {
        q: "Today’s lab asks you to create a language copy on a live site. True or not?",
        options: [
          "True — that is the badge",
          "Not true — awareness only. Do not touch a live tree you do not own",
          "True on a mock site only, then push it live",
        ],
        answer: 1,
        why: "You can explain the idea. You do not perform it on someone else’s live tree.",
      },
    ],
    quests: defaultQuests({
      learn: "Read language copy as a page-tree copy for another language",
      doTitle: "Write the owner line, or ‘unknown’",
      doDone: "No production copy created.",
      stress: "Pick language copy vs ditaval, and whether you run it live today",
    }),
    fieldNotePrompt: "Who owns translation on your team, or ‘unknown’? One line.",
    tomorrowHook: "Tomorrow is the week check: four jobs, four methods. The how-to stays in Oxygen.",
    body: `## Awareness only

A **language copy** is an AEM copy of a page tree for another language. English pages in one folder. French pages in another. People then translate. Verify the current menu name — it moves.

A **ditaval** filters a DITA book (show the novice steps, hide the expert ones). You already used that. It is not a language copy.

Today you explain the idea. You write who owns translation, or you write ‘unknown’. You do not click the action on a live tree you do not own.

## Word today

**Language copy** — a copy of an AEM page tree started for another language.

## Lab

Two sentences (language copy vs ditaval). One owner line. Labeled mock. No live click.

## Figure

Labeled mock: two folders, EN and FR. Caption: *Mock. Awareness. No live copy.*
`,
  },
  {
    n: 75,
    week: 11,
    title: "Week 11 check",
    objective:
      "Given four jobs, pick Page Editor, Document Authoring, Content Fragment, or Oxygen — and keep the DITA how-to off the AEM list.",
    minutes: 90,
    skills: ["aemSites", "aemGuides"],
    legacy: [],
    youtube: [
      yt("aemGlobal", ["The methods in one sitting"]),
      yt("aemHeadless", ["Fragments vs pages"]),
    ],
    sources: [S.aemMethods, S.guidesOverview, S.coreComp],
    toolCards: ["page-editor", "universal-editor", "content-fragment"],
    badgeId: null,
    boss: true,
    lab: {
      pack: "aem-author-field-log",
      title: "Four jobs",
      steps: [
        "Write oxygen-bootcamp-work/week11/field-log-75.txt with four assignments.",
        "Job A: hero plus teaser on a templated site page → Page Editor.",
        "Job B: marketers in Google Docs → Document Authoring.",
        "Job C: product fields for an app → Content Fragment.",
        "Job D: a 12-step pump prime with reused warnings → Oxygen (or Guides next week), not Sites.",
        "Labeled mock: the four jobs. Caption: mock.",
        "Pass the quiz. Week 12 stays locked until this day is finished (lab + quiz + a short note).",
      ],
      failWhen: "Job D is assigned to Page Editor or Document Authoring.",
      expected: "Four correct assignments. Job D stays DITA. Mock labeled.",
    },
    quiz: [
      {
        q: "You failed this check. Does week 12 open anyway?",
        options: [
          "Yes, Friday’s table is enough",
          "No. Finish this day’s lab, quiz, and note. You can retry the quiz.",
          "Yes, if the 5-minute warmup is done",
        ],
        answer: 1,
        why: "The handoff week waits until you can match the four jobs. Retry is free.",
      },
      {
        q: "Job D is a 12-step pump prime with reused warnings. Where does it live?",
        options: [
          "Document Authoring, because it is a document",
          "Oxygen (or Guides next week)",
          "A Content Fragment named steps",
        ],
        answer: 1,
        why: "A DITA how-to with reuse is handbook work. Not a Sites method.",
      },
      {
        q: "Product fields an app will read. Which of these?",
        options: ["Page Editor", "Content Fragment", "A DITA map"],
        answer: 1,
        why: "Fields for an app are a Content Fragment.",
      },
    ],
    quests: defaultQuests({
      learn: "Read the four jobs out loud",
      doTitle: "Assign all four. Keep Job D in Oxygen",
      doDone: "Four assignments written. Mock labeled.",
      stress: "Pass the quiz. Retry if you need to.",
    }),
    fieldNotePrompt: "Write the four jobs and the method you assigned to each.",
    tomorrowHook: "Week 12: Guides in the browser, Oxygen on the desktop, and who edits where.",
    body: `## A check, not a show

This is the week boss. Four jobs. Four methods. You already met them.

- Templated page with blocks → **Page Editor**
- Marketers in Google Docs → **Document Authoring**
- Fields for an app → **Content Fragment**
- DITA how-to → **Oxygen** (Guides is next week)

If you put the how-to in Document Authoring because both say document, start the four rows again.

Fail the quiz and **week 12 stays locked**. Retry is free. The warmup does not open the week.

You may not have AEM. The table in the field log is the evidence.

## Proof

1. Three AEM names still distinct.
2. Content Fragment is fields, not a layout strip.
3. Job D stays in the handbook.

## Figure

Labeled mock of the four jobs. Caption: *Mock. The how-to row is Oxygen.*
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
