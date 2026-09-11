import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 15,
    week: 3,
    title: "A table of contents for your pages",
    objective: "Open the sample booklet and see that it is a list of pointers to files, not the files themselves.",
    minutes: 90,
    skills: ["maps", "oxygenUi"],
    legacy: ["t3-maps"],
    youtube: [yt("maps", ["The tree on the left", "A line that points at a page"])],
    sources: [S.mapsDemo, S.authorDita, S.ugEditor],
    toolCards: ["maps-manager"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Look at the sample booklet",
      steps: [
        "In Oxygen, open samples/flower-docs/flowers.ditamap. If it opens as a wall of tags, look for a booklet view (DITA Maps Manager) and open it there too.",
        "Count how many pages the booklet points at. Write the number in oxygen-bootcamp-work/week3/day-15-count.txt.",
        "Click one line in the tree so the page opens. Confirm it is one of the topic files, not the booklet file itself.",
        "Do not add a page yet. Today you only look.",
      ],
      failWhen: "You only opened a topic file and never opened the .ditamap, or you cannot say the booklet is a list of pointers.",
      expected: "You opened flowers.ditamap, counted the pages it points at, and opened one page from the tree.",
    },
    quiz: [
      {
        q: "A .ditamap file is…",
        options: [
          "A table of contents that points at page files",
          "A picture",
          "The same thing as a how-to page",
        ],
        answer: 0,
        why: "The map is the booklet. The topics are the pages. Two kinds of files.",
      },
      {
        q: "If you delete a page file but leave it in the booklet, what happens?",
        options: [
          "Nothing — the booklet has a copy of the words",
          "The pointer breaks. The booklet still names a file that is gone",
          "Oxygen reprints the page from memory",
        ],
        answer: 1,
        why: "The booklet stores a pointer (a path), not a second copy of the page.",
      },
    ],
    quests: defaultQuests({
      learn: "Open flowers.ditamap and look at the tree",
      doTitle: "Count the pages the booklet points at",
      doDone: "Count written down. One page opened from the tree.",
      stress: "Pick what a map is, and what a broken pointer means",
    }),
    fieldNotePrompt: "In one sentence, what is the difference between the booklet file and a page file?",
    tomorrowHook: "Tomorrow you use the booklet view (Maps Manager) on purpose.",
    body: `## A booklet is a list

Last week you wrote three pages. A **map** is a table of contents that **points at** those pages. The file ends in \`.ditamap\`.

It is not a copy of the words. It is a list of pointers.

The sample shop already has \`samples/flower-docs/flowers.ditamap\`. Open it. Look. Count. Do not add anything yet.

## Word today

**Map** — a table of contents file that points at your pages.
`,
  },
  {
    n: 16,
    week: 3,
    title: "The booklet view",
    objective: "Open Maps Manager, set the sample map as the root booklet, and explain how that tree is not the folder list.",
    minutes: 90,
    skills: ["maps", "oxygenUi"],
    legacy: ["t2-dita-ui", "t3-maps"],
    youtube: [
      yt("maps", ["Maps Manager tree", "Root map control on the toolbar"]),
      yt("ditaStart", ["DITA perspective docks Maps Manager"]),
    ],
    sources: [S.mapsDemo, S.ugEditor],
    toolCards: ["maps-manager", "outline"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Maps Manager, on purpose",
      steps: [
        "Switch to the DITA perspective if you have it, so Maps Manager docks on the side.",
        "Open flowers.ditamap in Maps Manager (the tree), not only as tags.",
        "Set this map as the root map. The control is on the toolbar — if the label differs, write the label you see.",
        "In oxygen-bootcamp-work/week3/day-16-views.txt write two lines: Maps Manager = the booklet. Project view = the files on disk.",
        "Do not add a page yet.",
      ],
      failWhen: "You only opened the map as tags, or you cannot say tree vs folder list.",
      expected: "Maps Manager shows the sample booklet. Root map is set. Two-line note saved.",
    },
    quiz: [
      {
        q: "Maps Manager shows…",
        options: [
          "The booklet (what the reader will follow)",
          "Every file on your whole computer",
          "Help > About",
        ],
        answer: 0,
        why: "The tree is publication structure. The folder list is files on disk. They are not the same.",
      },
      {
        q: "Why set a root map?",
        options: [
          "So names defined in the booklet can resolve on the pages",
          "So Oxygen can delete unused files",
          "So the desktop stays empty",
        ],
        answer: 0,
        why: "The sample booklet already defines a product name. Without a root map, that name may not show.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Maps Manager and the root map control",
      doTitle: "Open the sample booklet in the tree and set it as root",
      doDone: "Tree is showing. Two-line note saved.",
      stress: "Pick what the tree shows, and why a root map matters",
    }),
    fieldNotePrompt: "How is the booklet tree different from the folder list?",
    tomorrowHook: "Tomorrow you add one of your pages to the booklet.",
    body: `## The tree is the booklet

**DITA Maps Manager** is the booklet view. The folder list (Project view) is just files on disk.

A page can sit on disk and still be missing from the booklet. That is like a chapter printed and left in a drawer.

**Root map** — the booklet Oxygen should use as the main table of contents. Set it. Later, names defined in the booklet will work.

## Word today

**Maps Manager** — the side tree that shows the booklet, not the folders.
`,
  },
  {
    n: 17,
    week: 3,
    title: "Add a page to the booklet",
    objective: "Append one of your week 2 pages to the sample map and open it from the tree.",
    minutes: 90,
    skills: ["maps", "oxygenUi"],
    legacy: ["t3-maps"],
    youtube: [yt("maps", ["Append Child", "A new line in the tree"])],
    sources: [S.mapsDemo, S.authorDita],
    toolCards: ["maps-manager"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Append one page",
      steps: [
        "Copy your week2 explaining page into samples/flower-docs/topics/ if it is not already there (or point at oxygen-bootcamp-work/week2/ if your map can see it). Keep the file name lowercase with hyphens.",
        "In Maps Manager, right-click a heading (or the map root) > Append Child > Reference. Point at that page.",
        "Click the new line. The page should open.",
        "Do not rename files in the folder without updating the booklet. That is a later day.",
      ],
      failWhen: "The page exists on disk but is not in the tree, or the new line does not open the page.",
      expected: "The tree shows your page. Clicking it opens the file.",
    },
    quiz: [
      {
        q: "Append Child adds…",
        options: [
          "A pointer from the booklet to a page file",
          "A second copy of the words inside the map",
          "A website",
        ],
        answer: 0,
        why: "The new line is a pointer. The words still live in the topic file.",
      },
      {
        q: "The page is on disk but missing from the tree. Is it in the booklet?",
        options: ["Yes", "No"],
        answer: 1,
        why: "On disk is not in the booklet. The tree is what counts.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Append Child on a tree line",
      doTitle: "Add one of your pages and open it from the tree",
      doDone: "New line in the tree opens the page.",
      stress: "Pick what Append Child adds, and whether a drawer file is in the book",
    }),
    fieldNotePrompt: "Which page did you add, and where does it sit in the tree?",
    tomorrowHook: "Tomorrow you check that every pointer in the booklet still works.",
    body: `## Put a chapter in the book

Right-click in Maps Manager → **Append Child** → point at a page.

You did not copy the words into the booklet. You added a pointer.

## Word today

**topicref** — one line in the booklet that points at a page (a topic file). You can say “a pointer” out loud. Same thing.
`,
  },
  {
    n: 18,
    week: 3,
    title: "Check that every link still works",
    objective: "Run the completeness check on the booklet and repair one broken pointer you caused on purpose.",
    minutes: 90,
    skills: ["maps", "review"],
    legacy: ["t4-complete"],
    youtube: [yt("completeness", ["The completeness report", "A missing file row"])],
    sources: [S.mapsDemo, S.ugEditor],
    toolCards: ["maps-manager"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Break a pointer, then fix it",
      steps: [
        "With flowers.ditamap as the root map, run Validate and Check for Completeness from Maps Manager.",
        "Write how many problems it reported in oxygen-bootcamp-work/week3/day-18-before.txt.",
        "On purpose: change one pointer to a file name that does not exist. Run completeness again. Read the row.",
        "Put the real file name back. Run completeness again. It should be clean (or back to the same count as before).",
        "Do not only validate the one page. The booklet check is the apple.",
      ],
      failWhen: "You never ran completeness, or you left a broken pointer, or you only validated one topic.",
      expected: "You saw a missing-file row and repaired it. Completeness is clean again.",
    },
    quiz: [
      {
        q: "A page can be clean while the booklet is broken. How?",
        options: [
          "The page’s tags match, but the booklet still points at a missing file",
          "Impossible",
          "Only if you publish",
        ],
        answer: 0,
        why: "Page check = this file. Booklet check = do the pointers work. You need both.",
      },
      {
        q: "Where do you run the booklet check?",
        options: ["Maps Manager, on the map", "Help > About", "Only on the current paragraph"],
        answer: 0,
        why: "Completeness lives on the booklet.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Validate and Check for Completeness",
      doTitle: "Cause a missing file, read the row, put it back",
      doDone: "Completeness is clean again. You quoted the missing-file row.",
      stress: "Pick page-clean vs booklet-broken, and where the check lives",
    }),
    fieldNotePrompt: "Quote the missing-file row you saw.",
    tomorrowHook: "Tomorrow you name files so moving them does not go silent.",
    body: `## Do the pointers work?

**Validate and Check for Completeness** (from Maps Manager) asks: does every pointer still find a file, a picture, a name?

A page can be fine on its own and still missing from the book — or named in the book and missing on disk.

## Word today

**Completeness** — a booklet check that the pointers still work.
`,
  },
  {
    n: 19,
    week: 3,
    title: "Name files so they are easy to find",
    objective: "Rename one page the safe way, or move it and update the booklet so completeness stays clean.",
    minutes: 90,
    skills: ["maps", "oxygenUi"],
    legacy: ["t3-maps"],
    youtube: [yt("maps", ["What happens when a path changes"])],
    sources: [S.mapsDemo, S.ugEditor],
    toolCards: ["maps-manager"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Rename without losing the pointer",
      steps: [
        "Pick a page you added (or vase-parts.dita if you make a short new one).",
        "If Oxygen can rename and update references, use that. If not: rename on disk, then edit the pointer in the booklet to match.",
        "Run completeness. It must be clean.",
        "Write the old name and the new name in oxygen-bootcamp-work/week3/day-19-rename.txt.",
        "Keep lowercase hyphens. No spaces. No FINAL(2).",
      ],
      failWhen: "Completeness reports a missing file, or the new name has spaces, or you renamed the disk file and never updated the booklet.",
      expected: "New name is simple. Completeness clean. Old and new names written down.",
    },
    quiz: [
      {
        q: "You renamed a file on disk and skipped the booklet. What breaks?",
        options: ["The pointer in the map", "Help > About", "The colour of Author view"],
        answer: 0,
        why: "The booklet still has the old path.",
      },
      {
        q: "Which name should you pick?",
        options: ["Vase Parts FINAL.dita", "vase-parts.dita", "Document (3).dita"],
        answer: 1,
        why: "Lowercase, hyphens, boring. Boring is good.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the pointer path in the booklet",
      doTitle: "Rename or move one page and keep completeness clean",
      doDone: "Simple new name. Completeness clean.",
      stress: "Pick what breaks on a silent rename, and which file name to use",
    }),
    fieldNotePrompt: "Old name → new name. Did completeness stay clean?",
    tomorrowHook: "Tomorrow you ship a small handbook: map plus your pages, completeness clean.",
    body: `## Boring names win

\`vase-parts.dita\` will still make sense in six months. \`Vase Parts FINAL(2).dita\` will not.

When you rename, update the booklet. Then run completeness. If you skip that, the pointer still points at a ghost.

## Word today

**href** — the path stored in a pointer. You can say “the path in the booklet line.”
`,
  },
  {
    n: 20,
    week: 3,
    title: "A small handbook",
    objective: "Ship a tiny booklet: the sample map, your pages, completeness clean. Do not publish a website yet.",
    minutes: 110,
    skills: ["maps", "ditaTopics", "oxygenUi"],
    legacy: ["t3-maps", "t3-topics"],
    youtube: [yt("maps", ["The tree after your pages are in it"])],
    sources: [S.mapsDemo, S.firstDita, S.authorDita],
    toolCards: ["maps-manager", "attributes"],
    badgeId: "map-is-a-book",
    lab: {
      pack: "flower-docs",
      title: "Flower studio handbook, on the desk",
      steps: [
        "Open flowers.ditamap in Maps Manager. Set it as the root map.",
        "The booklet should list at least: an explaining page, a how-to, and a lookup page. Add any that are missing from week 2.",
        "If the sample has a product name that shows on a page, leave it. Do not fight it.",
        "Run completeness. Zero missing files.",
        "Do not publish a website or a PDF. Write how many pages the tree lists in oxygen-bootcamp-work/week3/day-20-count.txt.",
      ],
      failWhen: "A week-2 page is missing from the tree, or completeness reports a missing file.",
      expected: "Tree lists at least three pages. Completeness clean. Count written down.",
    },
    quiz: [
      {
        q: "Why not publish a website today?",
        options: [
          "A clean booklet is the apple. Publishing is a later week",
          "Oxygen cannot publish",
          "Publishing deletes the map",
        ],
        answer: 0,
        why: "Week 6 is publish. Today is “the book’s table of contents works.”",
      },
      {
        q: "The how-to is on disk but not in the tree. Are you done?",
        options: ["Yes", "No — add the pointer, then run completeness"],
        answer: 1,
        why: "The handbook is the tree, not the folder.",
      },
    ],
    quests: defaultQuests({
      learn: "Read the tree like a table of contents",
      doTitle: "Keep at least three pages in the booklet, completeness clean",
      doDone: "Count written. Completeness clean.",
      stress: "Pick why publish waits, and what “not in the tree” means",
    }),
    fieldNotePrompt: "How many pages are in your booklet, and which one is the how-to?",
    tomorrowHook: "Tomorrow is the week check. Passing it opens reuse (one product name, used everywhere).",
    body: `## The week’s apple

A **handbook** on this desk means:

- A map (table of contents)
- Pages it points at
- Completeness clean

No website. No PDF. The sample shop’s flower-docs pack is the bench. Keep it.

## Figure

A tree mock:

1. Getting started → explaining page
2. Care → how-to
3. Studio hours → lookup

Caption: *Maps Manager after you add your pages. Not the folder list.*
`,
  },
  {
    n: 21,
    week: 3,
    title: "Week 3 check",
    objective: "Repair a broken booklet, explain three errors in plain words, and pass the quiz so week 4 can open.",
    minutes: 90,
    skills: ["review", "maps"],
    legacy: ["t4-complete"],
    youtube: [yt("completeness", ["Missing file vs broken tags"])],
    sources: [S.mapsDemo, S.ugEditor],
    toolCards: ["maps-manager"],
    badgeId: "completeness-clean",
    boss: true,
    lab: {
      pack: "flower-docs",
      title: "Three booklet breaks",
      steps: [
        "Copy flower-docs to oxygen-bootcamp-work/week3-check/ so you do not wreck the sample.",
        "Break 1: rename a page file without updating the booklet. Run completeness. Repair.",
        "Break 2: delete a closing tag on one page. Read the well-formed error. Undo.",
        "Break 3: add a pointer to a file you never created. Read the row. Remove the pointer or add the file.",
        "Check copy completeness is clean.",
        "Pass the quiz. Week 4 stays locked until this day is finished.",
      ],
      failWhen: "You cannot explain one error, or you leave the check copy broken.",
      expected: "Check copy completeness clean. Three one-line repairs.",
    },
    quiz: [
      {
        q: "Completeness is clean but a page is still red. What is true?",
        options: [
          "Impossible",
          "Possible — completeness is the booklet; the red line is that page’s tags",
          "Then the root map is wrong",
        ],
        answer: 1,
        why: "Two checks. Booklet pointers, and page skeleton. You need both.",
      },
      {
        q: "You failed this check. Does week 4 open?",
        options: [
          "Yes, Friday’s handbook is enough",
          "No. Finish lab, quiz, and note. Retry the quiz if you need to.",
          "Yes, if the warmup is done",
        ],
        answer: 1,
        why: "Reuse week waits until you can repair a booklet.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the three breaks out loud",
      doTitle: "Repair the check copy",
      doDone: "Completeness clean. Three one-line notes.",
      stress: "Pass the quiz. Retry if you need to.",
    }),
    fieldNotePrompt: "The three errors, and the one-line repair for each.",
    tomorrowHook: "Week 4: one product name, used everywhere — instead of typing it forty times.",
    body: `## Check

You now know the apple of a booklet: pointers, a tree, a completeness row.

Fail the quiz and **week 4 stays locked**. Retry is free.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
