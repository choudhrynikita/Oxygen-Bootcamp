import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 8,
    week: 2,
    title: "A page that explains what something is",
    objective: "Write a page that explains a thing. Title, short line, two paragraphs. No how-to steps.",
    minutes: 90,
    skills: ["ditaTopics", "oxygenUi"],
    legacy: ["t3-topics"],
    youtube: [yt("ditaEdit", ["A concept template", "The short line under the title"])],
    sources: [S.authorDita, S.firstDita, S.learnDita],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "What a cut flower is",
      steps: [
        "File > New > DITA Concept. Title: What a cut flower is. File: oxygen-bootcamp-work/week2/what-a-cut-flower.dita.",
        "Short line under the title: one sentence a search hit could show. Do not copy the title.",
        "Two paragraphs in the body: what a cut flower is, and what you will not cover (growing from seed).",
        "Do not add numbered steps. If you need steps, that is tomorrow.",
        "Save. No red error.",
      ],
      failWhen: "The page has numbered how-to steps, or the short line copies the title, or a red error remains.",
      expected: "A clean explaining page. Distinct short line. No steps.",
    },
    quiz: [
      {
        q: "Someone asks “what does ‘conditioned stems’ mean?” Which page type?",
        options: [
          "A how-to page — any term is a procedure",
          "An explaining page — a term and what it means",
          "A table of contents — definitions live only there",
        ],
        answer: 1,
        why: "An explaining page (a concept) holds what a thing is. A how-to holds steps. You have not made a table of contents yet.",
      },
      {
        q: "You need three actions to recut stems. Where do they go today?",
        options: [
          "A numbered list on this explaining page",
          "A new how-to page tomorrow — this page stays a definition",
          "Help > About",
        ],
        answer: 1,
        why: "What it is, and how to do it, are two different pages. Mixing them makes both worse.",
      },
    ],
    quests: defaultQuests({
      learn: "Open File > New and pick the Concept template",
      doTitle: "Write an explaining page with no steps",
      doDone: "Clean file. Short line is not the title. No how-to list.",
      stress: "Pick the page type for a definition, and where steps wait",
    }),
    fieldNotePrompt: "What did you leave off this page on purpose?",
    tomorrowHook: "Tomorrow you write a how-to: numbered steps and a result.",
    body: `## Three kinds of pages

This week you write three kinds of help pages. You still do not make a booklet. Each page is its own file in \`oxygen-bootcamp-work/week2/\`.

Today is the **explaining page**. Oxygen calls this a **concept**.

- Title
- Short line under the title
- Paragraphs that say what the thing is
- No numbered how-to

If you catch yourself writing “First, … Then, …” you are on the wrong page. Save those verbs for tomorrow.

## Word today

**Concept** — a page that explains what something is.
`,
  },
  {
    n: 9,
    week: 2,
    title: "A page with steps",
    objective: "Write a how-to with a title, a bit of context, numbered steps, and a result. Not a story.",
    minutes: 90,
    skills: ["ditaTopics", "oxygenUi"],
    legacy: ["t3-topics"],
    youtube: [yt("ditaEdit", ["A task template", "Steps in Author"])],
    sources: [S.authorDita, S.firstDita],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Change the water",
      steps: [
        "File > New > DITA Task. Title: Change the water. File: oxygen-bootcamp-work/week2/change-the-water.dita.",
        "In the context line (if the template has one), say when to do this: every two days, or when the water is cloudy.",
        "Add three steps in the step list, not as a numbered list inside a paragraph: recut the stems, empty the vase, refill with cool water.",
        "Add a result line: the water is clear and the stems are recut.",
        "Do not explain the history of vases. That belongs on an explaining page.",
        "Save. No red error.",
      ],
      failWhen: "Steps are a fake numbered paragraph, or there are no steps, or you used a Concept template.",
      expected: "A task file with real steps and a result. Clean.",
    },
    quiz: [
      {
        q: "A how-to page (a task) should hold…",
        options: [
          "The history of the product",
          "Numbered steps a person can do, plus a result",
          "A price table",
        ],
        answer: 1,
        why: "A task is a procedure. History is a concept. A price table is a lookup page.",
      },
      {
        q: "Why not type 1. 2. 3. inside a normal paragraph?",
        options: [
          "It looks the same, so it is fine",
          "The app has real steps. Fake numbers in a paragraph will not behave like steps later",
          "Paragraphs cannot hold numbers",
        ],
        answer: 1,
        why: "Use the step list from the task template. That is the apple today.",
      },
    ],
    quests: defaultQuests({
      learn: "Open File > New and pick the Task template",
      doTitle: "Write three real steps and a result",
      doDone: "Task file. Real steps. No red error.",
      stress: "Pick what a how-to holds, and why fake numbers are a problem",
    }),
    fieldNotePrompt: "Read your three steps out loud. Would a new hire succeed?",
    tomorrowHook: "Tomorrow you write a lookup page: facts in a table, not a lecture.",
    body: `## How to do it

Oxygen calls this a **task**. It is a how-to.

- A little **context** (when / who)
- **Steps** (the real step list, not a numbered paragraph)
- A **result** (what “done” looks like)

Do not tell the history of vases here. Yesterday’s page already did “what it is.”

## Word today

**Task** — a page of numbered steps a person can follow.
`,
  },
  {
    n: 10,
    week: 2,
    title: "A page for looking things up",
    objective: "Write a lookup page with a title and a small table of facts. Not a lecture.",
    minutes: 90,
    skills: ["ditaTopics"],
    legacy: ["t3-topics"],
    youtube: [yt("ditaEdit", ["A reference template", "A simple table"])],
    sources: [S.authorDita, S.ugEditor],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Studio hours",
      steps: [
        "File > New > DITA Reference. Title: Studio hours. File: oxygen-bootcamp-work/week2/studio-hours.dita.",
        "Add one short line under the title.",
        "Insert a two-column table: Day / Hours. Four rows is enough (Mon–Thu, or similar).",
        "Do not write a story about why the studio closes on Sunday. Facts only.",
        "Save. No red error.",
      ],
      failWhen: "There is no table, or the page is a lecture with no facts to look up, or you used a Task template.",
      expected: "A reference file with a small table. Clean.",
    },
    quiz: [
      {
        q: "Studio opening hours belong on…",
        options: [
          "A how-to page",
          "A lookup page with a table",
          "Help > About",
        ],
        answer: 1,
        why: "Hours are facts you look up. That is a reference.",
      },
      {
        q: "A lookup page should read like…",
        options: [
          "A speech",
          "A small table or list a person can scan",
          "A numbered procedure",
        ],
        answer: 1,
        why: "If you need a speech, you wanted a concept. If you need steps, you wanted a task.",
      },
    ],
    quests: defaultQuests({
      learn: "Open File > New and pick the Reference template",
      doTitle: "Make a small Day / Hours table",
      doDone: "Reference file with a table. Clean.",
      stress: "Pick where hours belong, and how a lookup page should read",
    }),
    fieldNotePrompt: "What fact is in your table, and who would look it up?",
    tomorrowHook: "Tomorrow you pick the right list and the right note — without decorating the page.",
    body: `## Facts you look up

Oxygen calls this a **reference**. Hours, names, sizes, part numbers. A table or a tight list. Not a speech.

You now have all three apples of the week:

1. **Concept** — what it is
2. **Task** — how to do it
3. **Reference** — facts you look up

Still no booklet. Three files in a folder is enough.

## Word today

**Reference** — a page of facts a person scans, often a table.
`,
  },
  {
    n: 11,
    week: 2,
    title: "Lists and notes",
    objective: "Put a bullet list, a numbered list, and one note on the right kind of page.",
    minutes: 85,
    skills: ["ditaTopics", "oxygenUi"],
    legacy: ["t3-insert"],
    youtube: [yt("ditaEdit", ["Insert a list", "Insert a note"])],
    sources: [S.authorDita, S.ugEditor],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "One list, one note, the right page",
      steps: [
        "Open your explaining page (what-a-cut-flower.dita). Add a bullet list of two flower parts. Not numbered — these are not steps.",
        "Open your how-to (change-the-water.dita). Confirm the steps are still real steps, not a bullet list.",
        "On the how-to, insert a Note under step 1: Recut over a bin so stems do not slip.",
        "Do not turn the note into another step. Do not put the note on the hours table.",
        "Save both files. No red error.",
      ],
      failWhen: "The explaining page has numbered steps, or the how-to’s steps became bullets, or the note is a fake extra step.",
      expected: "Bullets on the explaining page. Real steps plus one note on the how-to. Both clean.",
    },
    quiz: [
      {
        q: "Flower parts (stem, bloom) on an explaining page should be…",
        options: ["A bullet list", "Numbered steps", "A second title"],
        answer: 0,
        why: "Parts are not a procedure. Bullets are fine. Numbers would look like a how-to.",
      },
      {
        q: "A note on a how-to is for…",
        options: [
          "A warning or a tip beside a step",
          "Replacing the steps",
          "The hours table",
        ],
        answer: 0,
        why: "A note is a tip beside the work. It is not a fourth step and not a lookup table.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Insert for a list and for a note",
      doTitle: "Bullets on the explaining page, a note on the how-to",
      doDone: "Both files clean. Steps still look like steps.",
      stress: "Pick bullets vs numbers, and what a note is for",
    }),
    fieldNotePrompt: "Where did you put the note, and why not on the hours page?",
    tomorrowHook: "Tomorrow a small table and a picture with alt text.",
    body: `## Lists are not decoration

- **Bullets** — a set of things, no order.
- **Numbers** — only when the order is the work. On a task, use real steps.
- **A note** — a tip or a warning beside the work. Not a fourth step.

If you use numbers because they “look serious,” you are decorating. Stop.

## Word today

**Note** — a tip or warning beside a step or a paragraph.
`,
  },
  {
    n: 12,
    week: 2,
    title: "A table and a picture",
    objective: "Add one small table and one picture with alt text that would still help if the picture were gone.",
    minutes: 90,
    skills: ["ditaTopics"],
    legacy: ["t3-insert"],
    youtube: [yt("ditaEdit", ["Insert table", "Insert image"])],
    sources: [S.authorDita, S.ugEditor],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Table plus a picture with alt",
      steps: [
        "On studio-hours.dita, confirm the Day / Hours table still scans in one glance.",
        "On the explaining page, insert a picture if the pack has one (samples/flower-docs images). If not, insert a placeholder image from the sample and keep going.",
        "Write alt text that names what is in the picture, not “image1”. Example: “Clear glass vase with three stems.”",
        "Do not put a huge table on the how-to. Hours stay on the lookup page.",
        "Save. No red error.",
      ],
      failWhen: "Alt text is empty or “image1”, or the hours table is gone, or a red error remains.",
      expected: "Hours table intact. Picture has real alt text. Files clean.",
    },
    quiz: [
      {
        q: "Alt text is for…",
        options: [
          "A person who cannot see the picture, and for search",
          "The printer’s colour profile",
          "Oxygen’s version number",
        ],
        answer: 0,
        why: "If the picture is gone, the alt sentence should still make sense.",
      },
      {
        q: "Studio hours belong in…",
        options: ["The how-to’s third step", "The lookup table", "Alt text"],
        answer: 1,
        why: "Hours are facts. Keep them on the lookup page.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Insert table and Insert image",
      doTitle: "Keep the hours table and add alt text that names the picture",
      doDone: "Alt text is a real sentence. Files clean.",
      stress: "Pick what alt text is for, and where hours live",
    }),
    fieldNotePrompt: "Write the alt text you used. Would it work with the picture turned off?",
    tomorrowHook: "Tomorrow you put the three pages in one folder and check they still open.",
    body: `## A table you can scan

If a reader needs two facts (day, hours), a two-column table beats a paragraph.

## A picture that still works if it vanishes

**Alt text** is the sentence that stands in for the picture. “image1” is not a sentence. “Clear glass vase with three stems” is.

## Word today

**Alt text** — a short sentence for a picture, used when the picture cannot be seen.
`,
  },
  {
    n: 13,
    week: 2,
    title: "Three pages that belong together",
    objective: "Keep one explaining page, one how-to, and one lookup page in the same folder. All three open clean.",
    minutes: 100,
    skills: ["ditaTopics", "review"],
    legacy: ["t3-topics"],
    youtube: [yt("ditaStart", ["Three topic types in one project"])],
    sources: [S.authorDita, S.firstDita],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "The week 2 folder",
      steps: [
        "Put these three files in oxygen-bootcamp-work/week2/ (copy from flower-docs if you drifted): what-a-cut-flower.dita, change-the-water.dita, studio-hours.dita.",
        "Open each one. No red error. Each still matches its type: explaining, how-to, lookup.",
        "Write a three-line index in oxygen-bootcamp-work/week2/INDEX.txt: file name — kind of page — one-line summary.",
        "Do not build a table of contents in Oxygen yet. The text index is enough. The booklet is week 3.",
        "If a page is the wrong type, make a new file from the right template and move the words. Do not pretend.",
      ],
      failWhen: "A file is missing, a file is the wrong type, or a red error remains.",
      expected: "Three clean files and a three-line INDEX.txt.",
    },
    quiz: [
      {
        q: "Why three files instead of one long page?",
        options: [
          "Because later you can mix and reuse them in a booklet",
          "Because Oxygen cannot open long files",
          "Because Help > About requires it",
        ],
        answer: 0,
        why: "Small pages are easier to fix and, next week, easier to list in a table of contents.",
      },
      {
        q: "Your INDEX.txt is…",
        options: [
          "The booklet Oxygen will publish",
          "A simple list so you know what you have before week 3",
          "A website",
        ],
        answer: 1,
        why: "Next week you will make a real table of contents in Oxygen. Today, a text list is the apple.",
      },
    ],
    quests: defaultQuests({
      learn: "Name your three files and their types out loud",
      doTitle: "Keep the folder clean and write INDEX.txt",
      doDone: "Three clean files. Three-line index.",
      stress: "Pick why you split pages, and what INDEX.txt is (and is not)",
    }),
    fieldNotePrompt: "List the three files and the kind of page each one is.",
    tomorrowHook: "Tomorrow is the week check. You must pass it to open the booklet week.",
    body: `## The week’s apple

Three pages. Three jobs. One folder.

You still do **not** make a booklet. A booklet is a table of contents that points at files. That is week 3. Stay in the folder. Do not hunt for extra views.

## INDEX.txt

A three-line list in a text file. That is your memory, not the published book.
`,
  },
  {
    n: 14,
    week: 2,
    title: "Week 2 check",
    objective: "Given a messy draft, pick the right page type three times, and pass the quiz so week 3 can open.",
    minutes: 90,
    skills: ["review", "ditaTopics"],
    legacy: ["t3-topics"],
    youtube: [yt("ditaEdit", ["Concept vs task vs reference in one sitting"])],
    sources: [S.authorDita, S.learnDita],
    toolCards: ["author-mode"],
    badgeId: null,
    boss: true,
    lab: {
      pack: "flower-docs",
      title: "Sort the messy draft",
      steps: [
        "Read these three jobs: (1) what a vase is, (2) how to recut stems, (3) vase sizes in centimetres.",
        "Say which existing file (or new file) each job belongs in: concept, task, or reference.",
        "If you put steps on the explaining page during the week, move them to the how-to now.",
        "All three week2 files open clean.",
        "Pass the quiz. Week 3 stays locked until this day is finished.",
      ],
      failWhen: "You still have steps on the explaining page, or a file is broken, or you cannot say which type is which.",
      expected: "Three clean files, each the right type. Quiz passed.",
    },
    quiz: [
      {
        q: "“What a vase is” belongs on…",
        options: ["A concept (explaining page)", "A task (how-to)", "A reference (lookup)"],
        answer: 0,
        why: "What it is = concept.",
      },
      {
        q: "“How to recut stems” belongs on…",
        options: ["A concept", "A task", "A reference"],
        answer: 1,
        why: "How to do it = task.",
      },
      {
        q: "You failed this check. Does week 3 open?",
        options: [
          "Yes, Friday’s folder is enough",
          "No. Finish lab, quiz, and note. Retry the quiz if you need to.",
          "Yes, if the warmup is done",
        ],
        answer: 1,
        why: "The booklet week waits until you can sort the three page types.",
      },
    ],
    quests: defaultQuests({
      learn: "Name concept, task, and reference in plain words",
      doTitle: "Sort the three jobs onto the right pages",
      doDone: "Three clean files, each the right type.",
      stress: "Pass the quiz. Retry if you need to.",
    }),
    fieldNotePrompt: "In three short lines: what it is, how to do it, facts you look up — with your file names.",
    tomorrowHook: "Week 3: a table of contents that points at these files. That is a booklet.",
    body: `## Check

If you cannot say which page is which, you are not ready to stitch them into a booklet.

Fail the quiz and **week 3 stays locked**. Retry is free. The warmup does not open the week.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
