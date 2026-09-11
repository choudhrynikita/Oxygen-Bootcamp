import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 22,
    week: 4,
    title: "One product name, used everywhere",
    objective:
      "Put the product name in the booklet once, point at it from two pages, then change it once and watch both pages follow.",
    minutes: 90,
    skills: ["reuse", "maps"],
    legacy: ["t5-keys"],
    youtube: [
      yt("ditaStart", [
        "Root map so names in the booklet work",
        "A product name used on a page",
      ]),
    ],
    sources: [S.authorDita, S.mapsDemo, S.learnDita],
    toolCards: ["maps-manager", "attributes"],
    badgeId: "key-not-path",
    lab: {
      pack: "kitepump-dita",
      title: "Change the name once",
      steps: [
        "Open samples/kitepump-dita/kitepump.ditamap. Set it as the root map (the main booklet).",
        "Find the product name in the booklet. The sample already has a name (Kitepump KP-2) stored once. If you cannot see it in the tree, open the booklet in Text and look for keys=\"product\".",
        "Open what-is-kitepump.dita and prime-the-pump.dita. Each page should use that name, not a typed copy of Kitepump KP-2. If a sentence still types the name, replace that bit with a keyword that points at the name in the booklet.",
        "In the booklet, change the stored name to Kitepump KP-2a. Both pages should show KP-2a in Author.",
        "Unset the root map. The name on the pages should look broken or empty. Set the root map again.",
        "Run completeness. Fix any broken name you caused.",
      ],
      failWhen:
        "You typed the product string on both pages, or you left the root map unset, or only one page uses the name from the booklet.",
      expected:
        "The booklet holds Kitepump KP-2a. Two pages show it. Completeness is clean with the root map set.",
    },
    quiz: [
      {
        q: "The product name looks broken in Author. First place you look?",
        options: [
          "Whether the root map is set",
          "Help > About",
          "The Recycle Bin",
        ],
        answer: 0,
        why: "Names in the booklet only work when that booklet is the root map.",
      },
      {
        q: "Why put the product name in the booklet instead of typing it on every page?",
        options: [
          "You change it once and every page that uses the name follows",
          "The booklet cannot store words",
          "Typing is the only way a title works",
        ],
        answer: 0,
        why: "One name in the booklet is one edit. Forty typed copies are forty misses.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the product name in the booklet and set the root map",
      doTitle: "Change the name once and confirm two pages follow",
      doDone: "Both pages show KP-2a. Completeness is clean. Root map is set.",
      stress: "Pick where you look when a name looks broken, and why the booklet owns it",
    }),
    fieldNotePrompt:
      "What name did you put in the booklet, and what did the two pages show after you changed it?",
    tomorrowHook: "Tomorrow you write a warning once and point at it, instead of copying it.",
    body: `## Type it once

Last week the booklet was a table of contents. This week it also holds **names**.

You have two pages that mention the shop’s product. If you type “Kitepump KP-2” in both, a rename will miss a page. Put the name in the booklet. Point at it from the pages.

Open \`kitepump.ditamap\`. Set it as the **root map** — the main booklet Oxygen should use. Then change the stored name. Both pages should follow.

## Word today

**Key** — a name defined in the booklet. A **keydef** is the line that sets it. A **keyref** is the pointer on a page that uses it. You can say “the name in the booklet” out loud.

## If the name looks broken

Unset the root map on purpose. The pages cannot see the name. Set it again. That is the whole trick.
`,
  },
  {
    n: 23,
    week: 4,
    title: "Reuse a warning instead of copying it",
    objective:
      "Write a warning in one library file, pull it into a how-to with a pointer, then break the pointer on purpose and repair it.",
    minutes: 90,
    skills: ["reuse", "ditaTopics"],
    legacy: ["t5-reuse"],
    youtube: [
      yt("reuse", [
        "Reusable Components view",
        "How a reused warning looks in Author vs Text",
      ]),
    ],
    sources: [S.authorDita, S.learnDita, S.ugEditor],
    toolCards: ["author-mode", "attributes"],
    badgeId: "first-conref",
    lab: {
      pack: "kitepump-dita",
      title: "One warning, one pointer",
      steps: [
        "Create topics/library/warnings.dita (an explaining page is fine). One warning note with id=\"pinch-hazard\": pinch hazard at the lever. That sentence lives only in this file.",
        "Add the library page to the booklet. Hide it from the table of contents (toc=\"no\" on the pointer, or the similar control your version shows). Write which setting you used.",
        "In prime-the-pump.dita, insert a note that points at that warning (conref to warnings.dita, id pinch-hazard). Use Reusable Components view if you have it.",
        "Author should show the warning text. Text should show the pointer, not a second copy of the sentence.",
        "Typo the path on the pointer. Author shows a broken pull. Write the message. Put the path back.",
        "Do not paste the warning sentence into the how-to as a backup paragraph.",
      ],
      failWhen:
        "The warning sentence is copied into the how-to, or there is no pointer, or the library page is a chapter in the table of contents.",
      expected:
        "One source sentence. The how-to shows it through a pointer. Text has no copy. Completeness is clean after repair.",
    },
    quiz: [
      {
        q: "A warning pointer uses a path plus an id. What is the id on?",
        options: [
          "The file name without a suffix",
          "The note (the chunk) you want to pull",
          "The product name in the booklet",
        ],
        answer: 1,
        why: "The path finds the file. The id finds the note inside it.",
      },
      {
        q: "Reusable Components view is empty. First place you look?",
        options: [
          "Whether the root map is set and the library page is in that booklet",
          "Help > About",
          "The desktop",
        ],
        answer: 0,
        why: "The view reads the booklet. No root map, no library list.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Reusable Components view, or the pointer fields on a note",
      doTitle: "Write the pinch warning once and pull it into the how-to",
      doDone: "Author shows the warning. Text shows the pointer. Library is not a chapter.",
      stress: "Pick what the id points at, and why the view can be empty",
    }),
    fieldNotePrompt:
      "Which file holds the warning sentence, and which how-to points at it?",
    tomorrowHook: "Tomorrow you point at the library by a name in the booklet, not by a file path.",
    body: `## Write the warning once

A **conref** is a pointer that pulls a chunk from another file by **path plus id**.

Today you feel the path form. The library file holds the note. The how-to points at it. Author shows the words. Text shows the pointer.

**Reusable Components** view lists chunks from the root map. Insert from there if you have it. Do not paste the sentence.

## Hide the library

A library page is not a chapter. \`toc="no"\` on its booklet line hides it from the table of contents. Write the setting you used.

## Word today

**conref** — a pointer that reuses a chunk by file path plus id.
`,
  },
  {
    n: 24,
    week: 4,
    title: "Point at the library by name, not by path",
    objective:
      "Give the library a name in the booklet, switch the warning pointer to that name, then move the file and confirm the how-to still works.",
    minutes: 90,
    skills: ["reuse", "maps"],
    legacy: ["t5-reuse", "t5-keys"],
    youtube: [
      yt("reuse", [
        "A reusable chunk inserted with a name",
        "The pointer in Text after you switch it",
      ]),
    ],
    sources: [S.authorDita, S.mapsDemo, S.learnDita],
    toolCards: ["maps-manager", "attributes"],
    badgeId: "key-not-path",
    lab: {
      pack: "kitepump-dita",
      title: "Same warning, now a name",
      steps: [
        "On the library page’s line in the booklet, set keys=\"warnings-lib\".",
        "In prime-the-pump.dita, change the warning from a path pointer (conref) to a name pointer: conkeyref=\"warnings-lib/pinch-hazard\". Remove the path form.",
        "Move warnings.dita into topics/library/ if it is not already there. Update only the booklet line’s path. The how-to should still resolve through the name.",
        "Unset the root map. Confirm the warning looks broken. Set the root map again.",
        "Add the same name pointer to a second how-to (create topics/inflate-the-kite.dita if needed: three steps plus the warning).",
        "Completeness clean. Two how-tos, one library sentence.",
      ],
      failWhen:
        "The how-to still uses a path pointer, or you copied the sentence, or the name is missing from the booklet.",
      expected:
        "Name pointers in both how-tos. The booklet holds keys=\"warnings-lib\". Moving the file did not mean editing the how-tos. Completeness clean.",
    },
    quiz: [
      {
        q: "Why point at the library by a name in the booklet, not by a file path?",
        options: [
          "The booklet can retarget the library without editing every how-to",
          "Paths are not allowed on notes",
          "A name is shorter to type, and that is the only reason",
        ],
        answer: 0,
        why: "Move the library, update one booklet line. The how-tos keep the name.",
      },
      {
        q: "The pointer says warnings-lib/pinch-hazard. What is pinch-hazard?",
        options: [
          "A file name",
          "The id of the note inside the library page that name points at",
          "The product name in the booklet",
        ],
        answer: 1,
        why: "The name finds the page. The id finds the note.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the keys field on the library line in the booklet",
      doTitle: "Switch the warning to a name pointer on two how-tos",
      doDone: "Two name pointers. Library moved. How-tos not edited for the move. Completeness clean.",
      stress: "Pick why a name beats a path, and what pinch-hazard is",
    }),
    fieldNotePrompt:
      "When you moved the library file, which file did you edit — the booklet line, or the how-to pages?",
    tomorrowHook: "Tomorrow you put one booklet inside another, so the same name can mean two products.",
    body: `## Same chunk, better pointer

A **conkeyref** is a pointer that pulls a chunk by a **name in the booklet**, not by a file path. It looks like \`name/id\`.

Give the library line \`keys="warnings-lib"\`. The how-to stores that name. Move the file. Update one booklet path. The how-tos sleep through it.

If a sentence still exists twice, you are not done.

## Word today

**conkeyref** — a pointer that reuses a chunk by a name from the booklet, plus an id.
`,
  },
  {
    n: 25,
    week: 4,
    title: "A booklet inside a booklet",
    objective:
      "Put the same product name on two nested booklets with different values, and write which value each page shows.",
    minutes: 90,
    skills: ["reuse", "maps"],
    legacy: ["t5-keys"],
    youtube: [
      yt("ditaIntro", [
        "Maps that define names",
        "Two products that need the same name with different values",
      ]),
    ],
    sources: [S.dita13, S.mapsDemo, S.authorDita],
    toolCards: ["maps-manager", "author-mode"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Two nested booklets, one name",
      steps: [
        "Create maps/kp2.ditamap and maps/kp1.ditamap as nested booklets. Each one sets keys=\"product-name\" to a different string (KP-2 vs KP-1).",
        "From the root booklet, point at each nested booklet. Set keyscope on each of those lines (for example keyscope=\"kp2\" and keyscope=\"kp1\"). If the label differs, write the label you see.",
        "Put a small explaining page in each nested booklet that uses product-name. Open each with the root map set.",
        "Write oxygen-bootcamp-work/week4/scope-note.txt: which value each page shows.",
        "Do not add a third nested level. Do not merge this into flower-docs.",
        "Run completeness on the root map.",
      ],
      failWhen:
        "Both products show the same name because the nested labels are missing, or you added extra nested levels you cannot explain.",
      expected:
        "Two nested booklets. Two different product-name values. The note says what each page showed.",
    },
    quiz: [
      {
        q: "Two nested booklets both set product-name, and you did not label the branches. What happens?",
        options: [
          "The two strings join into one",
          "One value wins. You may not notice in Author that the other product is wrong",
          "Oxygen deletes the second nested booklet",
        ],
        answer: 1,
        why: "Without a branch label, one name can only mean one thing. The other binding is lost.",
      },
      {
        q: "Inside a labeled nested booklet, how do you write the product name on a page?",
        options: [
          "Just the name (product-name) — the branch already applies",
          "You must type the folder path every time",
          "You cannot use a name inside a nested booklet",
        ],
        answer: 0,
        why: "Inside that branch, the short name is enough.",
      },
    ],
    quests: defaultQuests({
      learn: "Find where a booklet line can point at another booklet",
      doTitle: "Give KP-2 and KP-1 their own nested booklets",
      doDone: "Two values. Scope note written. Completeness clean.",
      stress: "Pick what happens with no branch label, and how a page writes the name inside one",
    }),
    fieldNotePrompt: "What product name did each nested booklet show on its page?",
    tomorrowHook: "Tomorrow you build a small warning library and use every chunk.",
    body: `## One book, two inner books

A map can point at another map. That inner file is still a table of contents. Call it a **nested booklet**.

A **keyscope** is a label on that nested booklet’s line. Inside that branch, \`product-name\` means this product. A sibling branch may reuse the same name for a different product.

One extra level. Draw it. If you cannot draw it, do not add more.

Without the label, two \`keydef keys="product-name"\` collide. One wins. A page can show the wrong pump.

## Word today

**keyscope** — a label on a nested booklet so the same name can mean two different things.
`,
  },
  {
    n: 26,
    week: 4,
    title: "Build a small warning library",
    objective:
      "Hold three reusable notes in one library file and point at each from the right how-to. No unused chunks.",
    minutes: 90,
    skills: ["reuse", "ditaTopics"],
    legacy: ["t5-reuse"],
    youtube: [
      yt("reuse", [
        "More than one reusable chunk in the view",
        "Insert without copying the sentence",
      ]),
    ],
    sources: [S.authorDita, S.learnDita, S.ugEditor],
    toolCards: ["author-mode", "maps-manager"],
    badgeId: "first-conref",
    lab: {
      pack: "kitepump-dita",
      title: "Three warnings, three homes",
      steps: [
        "In warnings.dita, keep pinch-hazard. Add a caution note id=\"eye-protection\" and a warning note id=\"burst-risk\".",
        "Point eye-protection into bleed-the-valve.dita (create that how-to if needed: three steps). Point burst-risk into a new how-to topics/read-the-gauge.dita (three steps).",
        "pinch-hazard stays on prime-the-pump (or inflate-the-kite if that is where you put it yesterday).",
        "Every library note is used at least once. Do not add a fourth “just in case”.",
        "Open Text on a how-to: you should see the name pointer, not the sentence.",
        "Completeness clean. Library still not a chapter.",
      ],
      failWhen:
        "A library note is unused, or a how-to copies the sentence, or a fourth warning exists with no home.",
      expected:
        "Three notes, three pointers, three how-tos. No unused chunks. Completeness clean.",
    },
    quiz: [
      {
        q: "Which chunk is a bad first reuse?",
        options: [
          "A one-sentence pinch warning",
          "A whole chapter of the booklet",
          "The product name (that is a key, and you already did it)",
        ],
        answer: 1,
        why: "A chapter is a booklet problem. A product name is a key. Warnings are the small stable chunk.",
      },
      {
        q: "A library note is never pointed at. What is it?",
        options: [
          "A spare you should keep forever",
          "A sentence nobody will update, still sitting in the library file",
          "A keydef",
        ],
        answer: 1,
        why: "Unused reuse is inventory you will not maintain. Use it or delete it.",
      },
    ],
    quests: defaultQuests({
      learn: "Find all three notes in the library file",
      doTitle: "Point each warning at one how-to",
      doDone: "Three pointers. Zero unused notes. Text shows pointers.",
      stress: "Pick a bad first reuse, and what an unused library note is",
    }),
    fieldNotePrompt:
      "Which three warnings did you make, and which how-to uses each one?",
    tomorrowHook: "Tomorrow you practice the other craft: when a local copy is better.",
    body: `## Three notes, three homes

If you cannot name the how-to that uses a chunk, delete the chunk.

Change the sentence in the library. The how-tos should follow. Do not type into the pulled warning on the how-to. Change the source, or stop reusing it.

## Word today

**Library topic** — a page that holds reusable chunks. It is not a chapter in the booklet.
`,
  },
  {
    n: 27,
    week: 4,
    title: "When it is better to copy",
    objective:
      "Find one reused warning that should be a local sentence, replace the pointer, and write the rule you used.",
    minutes: 90,
    skills: ["reuse", "review"],
    legacy: ["t5-reuse"],
    youtube: [
      yt("ditaWebinar", [
        "A reuse example that stays small",
        "Any mention of reuse getting hard to follow",
      ]),
    ],
    sources: [S.learnDita, S.authorDita, S.ugEditor],
    toolCards: ["author-mode", "review"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Retire one weak reuse",
      steps: [
        "Look at the three library notes. Pick the weakest: too specific, too vague, or used only once with no second home.",
        "Replace that pointer with a local note on the how-to. Delete the library id if nothing else uses it.",
        "Write oxygen-bootcamp-work/week4/reuse-worse.txt with three bullets: (1) what you retired, (2) why a local sentence won, (3) what you still reuse.",
        "Do not retire pinch-hazard if it is still used twice and still true. Pick a real weak one, or add a bad reuse (a whole marketing paragraph) and then retire that.",
        "Completeness clean. The how-to still opens with no red error.",
      ],
      failWhen:
        "You retired nothing, or you deleted a still-shared warning without replacing it, or the rule file is slogans with no example.",
      expected:
        "One fewer library id, or one converted local note. A three-bullet rule file. Pack still clean.",
    },
    quiz: [
      {
        q: "A sentence is reused on one page and will not appear anywhere else. Keep the pointer?",
        options: [
          "Yes — a pointer is always cleaner",
          "No — you paid for a pointer that helps no one",
          "Yes if the id looks stable",
        ],
        answer: 1,
        why: "Single-use reuse is extra machinery. A local sentence is cheaper.",
      },
      {
        q: "Two products need opposite warnings. One library note tries to cover both with vague wording. What do you do?",
        options: [
          "Make the sentence even vaguer",
          "Write two notes, or two local notes — do not share a sentence that is half wrong",
          "Hide the note by changing Author colors",
        ],
        answer: 1,
        why: "A shared sentence that is half wrong is a defect. Reuse is not a prize.",
      },
    ],
    quests: defaultQuests({
      learn: "Read the three library notes and pick the weakest",
      doTitle: "Replace one weak pointer with a local note",
      doDone: "Pack clean. Rule file has three bullets. No leftover unused id.",
      stress: "Pick when a pointer is not worth it, and what to do with a half-wrong warning",
    }),
    fieldNotePrompt:
      "Which pointer did you replace with a local sentence, and what three bullets did you write?",
    tomorrowHook: "Tomorrow is the week check. Passing it opens week 5.",
    body: `## Reuse is a tool

A pointer that saves twenty identical warnings is useful. A pointer that saves one sentence is extra work. A pointer that shares a half-wrong warning is a defect.

Reuse **small**, **stable**, **true in every place it appears**. Copy when the sentence will drift, or appears once, or is product-specific safety text.

Never edit the pulled copy on the how-to. Change the source, or write a local note.

## Word today

**Local note** — a warning that lives only on this page, not in the library.
`,
  },
  {
    n: 28,
    week: 4,
    title: "Week 4 check",
    objective:
      "Show a product name in the booklet, a reused warning, one retired weak reuse, and completeness clean. Explain each pointer in one sentence.",
    minutes: 110,
    skills: ["reuse", "maps", "review"],
    legacy: ["t5-reuse", "t5-keys"],
    youtube: [
      yt("reuse", ["Reusable Components view as a checklist"]),
      yt("completeness", ["A broken name vs a missing file path"]),
    ],
    sources: [S.mapsDemo, S.authorDita, S.learnDita],
    toolCards: ["maps-manager", "attributes"],
    badgeId: "key-not-path",
    boss: true,
    lab: {
      pack: "kitepump-dita",
      title: "Three proofs on a check copy",
      steps: [
        "Copy kitepump to oxygen-bootcamp-work/week4-check/ so you do not wreck the original.",
        "Prove the product name: change it in the booklet; two pages follow.",
        "Prove one reused warning: change the library sentence; two how-tos follow.",
        "Break 1: unset the root map. Write what the names looked like. Restore.",
        "Break 2: typo the warning pointer. Write what you saw. Repair.",
        "Break 3: put a path pointer back next to the name pointer on the same note. Delete the path form.",
        "Write three sentences: what the product name owns, what the warning pointer owns, which sentence you copied on purpose.",
        "Completeness clean on the check copy.",
        "Pass the quiz. Week 5 stays locked until this day is finished (lab + quiz + a short note).",
      ],
      failWhen:
        "A warning sentence exists twice, or the product name only works on one page, or you cannot explain a pointer, or completeness is red.",
      expected:
        "Check copy clean. Two pages use the product name. At least one shared warning pointer. Three explanation sentences.",
    },
    quiz: [
      {
        q: "A product name looks broken in Author. First place you look?",
        options: [
          "The root map and the name in the booklet",
          "Help > About",
          "The color of Author view",
        ],
        answer: 0,
        why: "Names live in the booklet. Root map plus the name line. Not a version number.",
      },
      {
        q: "You failed this check. Does week 5 open?",
        options: [
          "Yes, Friday’s pages are enough",
          "No. Week 5 stays locked until this day is finished. Retry the quiz if you need to.",
          "Yes, if the 5-minute warmup is done",
        ],
        answer: 1,
        why: "Lab, quiz, and a short note. Retry is free. The warmup does not open the week.",
      },
      {
        q: "A path pointer and a name pointer both sit on the same warning. What do you do?",
        options: [
          "Keep both, in case one breaks",
          "Keep the name pointer and delete the path",
          "Delete both and type the sentence twice",
        ],
        answer: 1,
        why: "Two pointers will drift. The better form is the name in the booklet.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the three proofs from this week out loud",
      doTitle: "Repair the check copy until completeness is clean",
      doDone: "Names and warning pointer proven. Three sentences written. Completeness clean.",
      stress: "Pass the quiz. Retry if you need to.",
    }),
    fieldNotePrompt:
      "Write the three sentences: product name, warning pointer, and the copy you kept on purpose.",
    tomorrowHook:
      "Week 5: tools on the desk — hide a step from some readers, comments, and find and replace.",
    body: `## A check, not a show

This is the week boss. You already met these pointers. You are only proving you can name them.

1. **Product name** — change it in the booklet; two pages follow.
2. **Warning pointer** — change the library; two how-tos follow.
3. **A sentence you copied** — because a pointer would have been the wrong tool.

Fail the quiz and **week 5 stays locked**. Retry as many times as you want. The 5-minute warmup does not open the week.

## Word today

No new word. Use **key**, **conref**, **conkeyref**, and **local note** in the three sentences you write.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
