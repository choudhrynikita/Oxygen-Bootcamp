import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 22,
    week: 4,
    title: "Keys are names — the map owns the path",
    objective:
      "Define a product-name key in the root map and keyref it twice so a rename in the map updates both topics.",
    minutes: 90,
    skills: ["reuse", "maps"],
    legacy: ["t5-keys"],
    youtube: [
      yt("ditaStart", [
        "Root map so keys resolve",
        "keyref in a topic",
      ]),
    ],
    sources: [S.authorDita, S.mapsDemo, S.learnDita],
    toolCards: ["maps-manager", "attributes"],
    badgeId: "key-not-path",
    lab: {
      pack: "kitepump-dita",
      title: "product-name key, two hits",
      steps: [
        "Open kitepump.ditamap as root map.",
        "Add a keydef keys=\"product-name\" with keyword Kitepump HP-40 (or the name your pack already uses).",
        "In what-kitepump-is.dita and inflate-the-tire.dita, insert <keyword keyref=\"product-name\"/> in a sentence. Do not type the product string in those two places.",
        "Change the keydef keyword to Kitepump HP-40a. Both topics should show the new name in Author.",
        "Unset the root map. Confirm the key looks unresolved. Set the root map again.",
        "Run completeness. Unresolved keys are a row — fix any you caused.",
      ],
      failWhen:
        "The product string is hardcoded in both topics, or root map is unset when you mark the lab done, or only one topic uses the key.",
      expected:
        "keydef on the map. Two keyrefs. Author shows HP-40a in both. Completeness clean with root map set.",
    },
    quiz: [
      {
        q: "Keys look broken in Author. First place you look?",
        options: [
          "AEM Sites console",
          "Whether the root map is set",
          "The PDF Chemistry install",
        ],
        answer: 1,
        why: "v1: Always set the root map or keyrefs look broken. Keys are names defined in a map.",
      },
      {
        q: "You keyref a topic as keyref=\"inflate\" instead of href. What must exist?",
        options: [
          "A matching keys on a topicref or keydef in the root map",
          "A file named inflate.dita in the same folder",
          "An AEM Experience Fragment",
        ],
        answer: 0,
        why: "keyref looks up a key, not a filename. The map binds the name to a target.",
      },
      {
        q: "Why prefer a key over href for the product name?",
        options: [
          "Keys are faster to parse",
          "The map owns the string; topics do not hard-code a name that will change",
          "href is illegal on keyword",
        ],
        answer: 1,
        why: "A path-plus-string in every topic is copy. A key is one edit.",
      },
    ],
    quests: defaultQuests({
      learn: "Name keydef, keyref, and what an unset root map forbids",
      doTitle: "Keep product-name resolving in two topics",
      doDone: "Two keyrefs. Map owns HP-40a. Completeness clean.",
      stress: "Unset the root map, watch the unresolved key, restore it",
    }),
    fieldNotePrompt: "What string in your pack should have been a key this week, and was not?",
    tomorrowHook: "Tomorrow you conref a warning by path-plus-id — then you will feel why keys are kinder.",
    body: `## Keys are names

v1: *Keys are names defined in a map. Always set the root map or keyrefs look broken.*

A **keydef** (or a topicref with \`keys\`) binds a name to a target or a string. A **keyref** uses the name. The path lives in one place.

flower-docs already did this with \`keyword keyref="product"\` → Aurora Vase. Kitepump gets \`product-name\`.

## Key, not path

href is a path. Paths move. Keys stay. This badge is **key-not-path**: you stop typing folders into every topic.

## Figure

Map snippet: keydef product-name → keyword Kitepump HP-40a. Caption: *Root map owns the name. Topics keyref it.*
`,
  },
  {
    n: 23,
    week: 4,
    title: "conref is path plus id — practice, not a definition slide",
    objective:
      "Pull a warning note from a library topic into a task using conref, and break it on purpose to see the unresolved content.",
    minutes: 90,
    skills: ["reuse", "ditaTopics"],
    legacy: ["t5-reuse"],
    youtube: [
      yt("reuse", [
        "Reusable Components view",
        "How a conref looks in Author vs Text",
      ]),
    ],
    sources: [S.authorDita, S.learnDita, S.ugEditor],
    toolCards: ["author-mode", "attributes"],
    badgeId: "first-conref",
    lab: {
      pack: "kitepump-dita",
      title: "conref a warning into inflate-the-tire",
      steps: [
        "Create topics/library/warnings.dita (concept or a warehouse topic). One <note id=\"pinch-hazard\" type=\"warning\">: pinch hazard at the lever. Keep that sentence only in this file.",
        "Give the library topic a stable id. Append it to the map with toc=\"no\" or processing-role so it does not become a chapter (write which attribute you used).",
        "In inflate-the-tire.dita, insert a note and set conref to warnings.dita#warnings/pinch-hazard (adjust to your topic id). Use Reusable Components view if you have it.",
        "Author should show the warning text. Text should show conref, not a copy of the sentence.",
        "Typo the conref path. Author shows unresolved. Record the message. Repair.",
        "Do not copy the warning sentence into the task as a backup paragraph.",
      ],
      failWhen:
        "The warning sentence is duplicated in the task, or conref is missing, or the library topic is a TOC chapter you forgot to hide.",
      expected:
        "One source sentence. Task shows it via conref. Text has no copy. Completeness/validation clean after repair.",
    },
    quiz: [
      {
        q: "conref uses a path plus id. What is the id pointing at?",
        options: [
          "The filename without extension",
          "The element that holds the reusable chunk",
          "The map’s product key",
        ],
        answer: 1,
        why: "v1: conref uses a path plus id. The id is on the note (or other element), not on the folder.",
      },
      {
        q: "You conref a whole task into another task. What should you suspect?",
        options: [
          "Normal — reuse as much as possible",
          "You probably wanted a topicref, a key, or a smaller chunk",
          "DITA forbids conref on tasks",
        ],
        answer: 1,
        why: "Reuse small stable chunks such as warnings. A whole procedure is usually a topic you point at.",
      },
      {
        q: "Reusable Components view is empty. First place you look?",
        options: [
          "Whether the root map is set and the library topic is in that map",
          "Schema Design",
          "AEM Assets",
        ],
        answer: 0,
        why: "The view reads the map. No root map, no library.",
      },
    ],
    quests: defaultQuests({
      learn: "Name conref (path plus id) and what a copied warning forbids",
      doTitle: "Keep the pinch warning in one file",
      doDone: "conref resolves. Task Text has no copy of the sentence. Library not a TOC chapter.",
      stress: "Typo the path, read unresolved, repair",
    }),
    fieldNotePrompt: "What would happen if you edited the warning in the task instead of in the library file?",
    tomorrowHook: "Tomorrow you replace that path with conkeyref so the map owns the library too.",
    body: `## conref

v1: *conref uses a path plus id. conkeyref uses a key and is preferred. Reuse small stable chunks such as warnings.*

Today you do the path-plus-id form so you can feel it break. The library topic holds the note. The task points at it.

## Reusable Components

**DITA Reusable Components** view lists candidates from the root map. Insert from there. Do not paste the sentence.

## Hide the warehouse

A library topic is not a chapter. \`toc="no"\` or a resource-only keydef keeps it out of the TOC. Write the attribute you used.

## Figure

Left: warnings.dita with id pinch-hazard. Right: task note with conref. Caption: *Author shows the text. Text shows the pointer.*
`,
  },
  {
    n: 24,
    week: 4,
    title: "conkeyref — the map owns the library too",
    objective:
      "Replace yesterday’s path conref with conkeyref so a folder move does not break the warning.",
    minutes: 90,
    skills: ["reuse", "maps"],
    legacy: ["t5-reuse", "t5-keys"],
    youtube: [
      yt("reuse", [
        "Reusable component inserted as a key",
        "conkeyref in Text mode",
      ]),
    ],
    sources: [S.authorDita, S.mapsDemo, S.learnDita],
    toolCards: ["maps-manager", "attributes"],
    badgeId: "key-not-path",
    lab: {
      pack: "kitepump-dita",
      title: "Same warning, now a key",
      steps: [
        "On the library topicref, set keys=\"warnings-lib\".",
        "In inflate-the-tire.dita, change the note from conref=path to conkeyref=\"warnings-lib/pinch-hazard\". Remove the path conref.",
        "Move warnings.dita into topics/library/ if it is not already there. Update the topicref href only — the task should still resolve via the key.",
        "Unset root map; confirm unresolved; restore.",
        "Add the same conkeyref to a second task (create topics/bleed-the-valve.dita if needed, three cmds plus the warning).",
        "Completeness clean. Two tasks, one library sentence.",
      ],
      failWhen:
        "The task still uses a path conref, or you copied the sentence, or the key is undefined on the map.",
      expected:
        "conkeyref in both tasks. Map holds keys=\"warnings-lib\". Move did not edit the tasks. Completeness clean.",
    },
    quiz: [
      {
        q: "conkeyref is preferred over conref. Why, in one operational reason?",
        options: [
          "It is newer XML",
          "The map can retarget the library without editing every task",
          "conref is deprecated in DITA 1.3",
        ],
        answer: 1,
        why: "v1: conkeyref uses a key and is preferred. Keys are retargetable. Paths are not.",
      },
      {
        q: "conkeyref=\"warnings-lib/pinch-hazard\". What is pinch-hazard?",
        options: [
          "A filename",
          "An element id inside the key’s target topic",
          "A ditaval flag",
        ],
        answer: 1,
        why: "The key finds the topic. The id finds the element.",
      },
      {
        q: "You leave both conref and conkeyref on the same note. What should you do?",
        options: [
          "Keep both as fallback",
          "Keep one. Two pointers is a fight when they disagree",
          "Convert the note to a keyword",
        ],
        answer: 1,
        why: "Processors pick a precedence. You should not have to remember it under deadline.",
      },
    ],
    quests: defaultQuests({
      learn: "Name conkeyref and what a leftover path conref forbids",
      doTitle: "Keep the warning on a key in two tasks",
      doDone: "Two conkeyrefs. Library moved. Tasks not edited for the move. Completeness clean.",
      stress: "Break the key name, read unresolved, repair",
    }),
    fieldNotePrompt: "If the library file moves again next month, which file do you expect to edit?",
    tomorrowHook: "Tomorrow you peek at key scopes — enough to not panic, not enough to design a CCMS.",
    body: `## conkeyref

Same chunk, better pointer. **conkeyref** is \`key/id\`. The map’s \`keys="warnings-lib"\` owns the file path.

Move the library. Update one topicref. Tasks sleep through it.

## Practice

This week is practice. You now have:

- a product **keyref**
- a warning **conkeyref**
- a leftover **conref** you retired

If any sentence still exists twice, you are not done.

## Figure

Text mode: \`<note conkeyref="warnings-lib/pinch-hazard"/>\`. Caption: *No path. No copied sentence.*
`,
  },
  {
    n: 25,
    week: 4,
    title: "Key scopes — beginner, one nested map",
    objective:
      "Put the same key name on two submaps with different values and show which value a topic sees.",
    minutes: 90,
    skills: ["reuse", "maps"],
    legacy: ["t5-keys"],
    youtube: [
      yt("ditaIntro", [
        "Maps defining keys",
        "Why two products cannot share one flat key space blindly",
      ]),
    ],
    sources: [S.dita13, S.mapsDemo, S.authorDita],
    toolCards: ["maps-manager", "author-mode"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Two scopes, one key name",
      steps: [
        "Create maps/hp40.ditamap and maps/hp20.ditamap as submaps. Each keydef keys=\"product-name\" to a different string (HP-40 vs HP-20).",
        "Set keyscope on each mapref from the root (e.g. keyscope=\"hp40\" and keyscope=\"hp20\"). Verify the attribute name in your DITA version.",
        "Put a small concept in each submap that keyrefs product-name. Open each with the root map set.",
        "Write oxygen-bootcamp-work/week4/scope-note.txt: which value each topic shows, and what you saw if you opened a topic with the wrong root.",
        "Do not try to merge HP-20 into flower-docs. Do not design a six-level scope tree.",
        "Completeness on the root map.",
      ],
      failWhen:
        "Both products show the same name because scopes were omitted, or you nested more than one extra keyscope ‘to see what happens’ and cannot explain it.",
      expected:
        "Two scoped submaps. Two different product-name values. Scope note explains what each topic saw.",
    },
    quiz: [
      {
        q: "Without keyscope, two submaps both define product-name. What happens?",
        options: [
          "DITA merges the strings",
          "One definition wins (usually first in the map); the other is a collision you may not notice in Author",
          "Oxygen deletes the second submap",
        ],
        answer: 1,
        why: "Flat key space: one name, one binding. Scopes keep the same name in two chapters.",
      },
      {
        q: "You are a junior author. A lead asks you to add a third keyscope level this afternoon. First move?",
        options: [
          "Do it — more scopes are more reuse",
          "Ask which value a topic is supposed to see, and refuse a tree you cannot draw",
          "Put the key in AEM page properties",
        ],
        answer: 1,
        why: "Beginner scopes are one nested map. A tree you cannot draw will ship the wrong product name.",
      },
      {
        q: "keyref=\"hp40.product-name\" (explicit scope). When do you type that?",
        options: [
          "Always — implicit scope is illegal",
          "When you are outside the scope and still need that product’s value",
          "Never in DITA 1.3",
        ],
        answer: 1,
        why: "Inside the scoped map, product-name is enough. Qualified names are for crossing scopes on purpose.",
      },
    ],
    quests: defaultQuests({
      learn: "Name keyscope and what a flat collision forbids",
      doTitle: "Keep HP-40 and HP-20 as two values of one key name",
      doDone: "Two scopes. Two strings. Scope note written. Completeness clean.",
      stress: "Remove one keyscope, watch the collision, restore it",
    }),
    fieldNotePrompt: "Draw the two-scope tree in words. If you cannot, you nested too far.",
    tomorrowHook: "Tomorrow you build a small warning library and reuse it without turning the book into a puzzle.",
    body: `## Key scopes, beginner

A **keyscope** puts a name on a branch of the map. Inside that branch, \`product-name\` means this product. A sibling branch may reuse the same key name.

This is not a CCMS design course. One extra level. Draw it. If you cannot draw it, do not ship it.

## Collision

Without scopes, two \`keydef keys="product-name"\` collide. One wins. Authors see the wrong pump.

## Figure

Root → mapref keyscope=hp40, mapref keyscope=hp20. Caption: *Same key name. Two bindings. Beginner shape only.*
`,
  },
  {
    n: 26,
    week: 4,
    title: "A warning library you can defend",
    objective:
      "Hold three reusable notes in one library topic and conkeyref each into the right task — no unused chunks.",
    minutes: 90,
    skills: ["reuse", "ditaTopics"],
    legacy: ["t5-reuse"],
    youtube: [
      yt("reuse", [
        "More than one reusable component in a view",
        "Insert without copying text",
      ]),
    ],
    sources: [S.authorDita, S.learnDita, S.ugEditor],
    toolCards: ["author-mode", "maps-manager"],
    badgeId: "first-conref",
    lab: {
      pack: "kitepump-dita",
      title: "Three warnings, three homes",
      steps: [
        "In warnings.dita, keep pinch-hazard. Add note id=\"eye-protection\" type=\"caution\" and note id=\"burst-risk\" type=\"warning\".",
        "conkeyref eye-protection into bleed-the-valve.dita. conkeyref burst-risk into a new task topics/read-the-gauge.dita (three cmds).",
        "pinch-hazard stays on inflate-the-tire.",
        "Every library note is used at least once. Do not add a fourth ‘just in case’.",
        "Open Text on a task: you should see conkeyref, not the sentence.",
        "Completeness clean. Library still not a TOC chapter.",
      ],
      failWhen:
        "A library note is unused, or a task copies the sentence, or a fourth speculative warning exists with no home.",
      expected:
        "Three notes, three conkeyrefs, three tasks. No unused chunks. Completeness clean.",
    },
    quiz: [
      {
        q: "Reuse small stable chunks such as warnings. Which chunk is a bad first conref?",
        options: [
          "A one-sentence pinch warning",
          "The entire Care chapter",
          "A product name keyword",
        ],
        answer: 1,
        why: "A chapter is a map. A product name is a keyref. Warnings are the conref-sized chunk.",
      },
      {
        q: "A library note is never conkeyref’d. What is it?",
        options: [
          "A healthy warehouse",
          "Dead content that will rot and still look official in the library file",
          "A keydef",
        ],
        answer: 1,
        why: "Unused reuse is inventory you will not maintain. Delete or use it.",
      },
      {
        q: "You need a slightly different warning in one task. First move?",
        options: [
          "conref and then edit the pulled text in the task",
          "Write a local note, or make a second library id if the variant is real",
          "Put if/else in the conref path",
        ],
        answer: 1,
        why: "Do not edit a conref’d copy in place. You either share the sentence or you do not.",
      },
    ],
    quests: defaultQuests({
      learn: "Name three library ids and what an unused chunk forbids",
      doTitle: "Keep every warning used once",
      doDone: "Three conkeyrefs. Zero unused notes. Text shows pointers.",
      stress: "Edit the library sentence and watch two tasks change",
    }),
    fieldNotePrompt: "Which warning would you refuse to reuse, and why is a local note better?",
    tomorrowHook: "Tomorrow you practice the opposite craft: when copy is better than reuse.",
    body: `## A library is not a junk drawer

Three notes. Three homes. If you cannot name the task that uses a chunk, delete the chunk.

Stable means the sentence will still be true next quarter. “Hold the HP-40a upright” is a product fact — that may want a key inside the note, or a scoped library, not a single global sentence.

## Do not edit the pull

Author may let you type into a resolved conref. Don’t. Change the source, or break the reuse.

## Figure

warnings.dita: three ids. Three tasks pointing in. Caption: *Reusable Components view with three entries, all used.*
`,
  },
  {
    n: 27,
    week: 4,
    title: "When reuse is worse than copy",
    objective:
      "Find one conkeyref that should be a local sentence, replace it, and write the rule you used.",
    minutes: 90,
    skills: ["reuse", "review"],
    legacy: ["t5-reuse"],
    youtube: [
      yt("ditaWebinar", [
        "A reuse example that stays small",
        "Any mention of over-reuse or maps getting hard",
      ]),
    ],
    sources: [S.learnDita, S.authorDita, S.ugEditor],
    toolCards: ["author-mode", "review"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Retire one bad reuse",
      steps: [
        "Audit the three library notes. Pick the weakest: too specific, too vague, or only used once with no future home.",
        "Replace that conkeyref with a local <note> in the task. Delete the library id if nothing else uses it.",
        "Write oxygen-bootcamp-work/week4/reuse-worse.txt with three bullets: (1) what you retired, (2) why copy won, (3) what you would still reuse.",
        "Do not retire the pinch-hazard if it is still used twice and still true — pick a real weak one, or create a bad reuse (a whole paragraph of marketing) and then retire it.",
        "Completeness and validation clean.",
      ],
      failWhen:
        "You retired nothing, or you deleted a still-shared warning without replacing it, or the rule file is slogans.",
      expected:
        "One fewer library id or one converted local note. A three-bullet rule file. Pack still valid.",
    },
    quiz: [
      {
        q: "A sentence is reused in one topic and will never appear elsewhere. Keep the conkeyref?",
        options: [
          "Yes — reuse is always cleaner",
          "No — you paid indirection for a single use",
          "Yes if the id is stable",
        ],
        answer: 1,
        why: "Single-use reuse is a pointer that helps no one. Copy (or just write it) is cheaper.",
      },
      {
        q: "Two products need opposite warnings. One library note tries to cover both with vague wording. First repair?",
        options: [
          "Make the sentence vaguer",
          "Two notes, or scopes, or local notes — do not share a sentence that is half-false",
          "Hide the note with CSS",
        ],
        answer: 1,
        why: "A shared sentence that is half-false is a liability. Reuse is not a virtue if the fact splits.",
      },
      {
        q: "Marketing wants the warning to sound friendlier in one brochure map. Edit the library?",
        options: [
          "Yes — one source of truth",
          "No — that is a different sentence; copy or a scoped variant, do not soften a safety note globally",
          "Yes, then ditaval it",
        ],
        answer: 1,
        why: "Safety text is the worst place to get clever with reuse. Tone changes are often copy.",
      },
    ],
    quests: defaultQuests({
      learn: "Name one case where copy beats conkeyref",
      doTitle: "Retire one weak reuse",
      doDone: "Pack valid. Rule file has three bullets. No orphan library id.",
      stress: "Defend the reuse you kept in one sentence",
    }),
    fieldNotePrompt: "Complete: I will reuse _____ and I will copy _____ because _____.",
    tomorrowHook: "Tomorrow is the Week 4 boss: keys, conkeyref, and a reuse you can explain.",
    body: `## Reuse is a tool

Reuse is not a score. A conkeyref that saves twenty identical warnings is craft. A conkeyref that saves one sentence is ceremony. A conkeyref that shares a half-false warning is a defect.

## Rules you can say

- Reuse **small**, **stable**, **true in every place it appears**.
- Copy when the sentence will drift, or appears once, or is safety-critical and product-specific.
- Never edit the pulled copy in the child.

## Figure

Two columns: Keep (pinch-hazard ×2) vs Retire (one-off marketing blurb). Caption: *Audit, not a glossary.*
`,
  },
  {
    n: 28,
    week: 4,
    title: "Boss — reuse you can explain",
    objective:
      "Show a product key, a conkeyref warning, a retired bad reuse, and completeness clean — and explain each pointer in one sentence.",
    minutes: 110,
    skills: ["reuse", "maps", "review"],
    legacy: ["t5-reuse", "t5-keys"],
    youtube: [
      yt("reuse", ["Reusable Components view as a checklist"]),
      yt("completeness", ["Unresolved key vs missing href"]),
    ],
    sources: [S.mapsDemo, S.authorDita, S.learnDita],
    toolCards: ["maps-manager", "attributes"],
    badgeId: "key-not-path",
    boss: true,
    lab: {
      pack: "kitepump-dita",
      title: "Clinic: pointers, not copies",
      steps: [
        "Copy kitepump to oxygen-bootcamp-work/week4-clinic/.",
        "Prove product-name keyref in two topics. Change the keydef; both follow.",
        "Prove one conkeyref warning in two tasks. Change the library; both follow.",
        "Break 1: unset root map. Record unresolved keys. Restore.",
        "Break 2: typo conkeyref. Record unresolved content. Repair.",
        "Break 3: put a path conref back next to a conkeyref on the same note. Delete the path form.",
        "Write three sentences: what the key owns, what the conkeyref owns, what you refused to reuse.",
        "Completeness clean on the clinic copy.",
      ],
      failWhen:
        "A warning sentence exists twice, or keys only work in one topic, or you cannot explain a pointer, or completeness is red.",
      expected:
        "Clinic copy clean. Two keyrefs. At least one shared conkeyref. Three explanation sentences.",
    },
    quiz: [
      {
        q: "Unresolved keyref in Author. First place you look?",
        options: ["CSS PDF Chemistry", "Root map and the keydef", "AEM workflow payload"],
        answer: 1,
        why: "Keys live in the map. Root map plus keydef. Not a publish engine.",
      },
      {
        q: "You failed this boss. Does Day 29 stay locked?",
        options: [
          "Yes, forever",
          "No, if Friday (Day 27) lab is done the next week can unlock. The boss badge stays locked until you pass.",
          "No, Daily Burst unlocks the week",
        ],
        answer: 1,
        why: "Boss badge waits. Curriculum week does not hostage you if Friday lab is done.",
      },
      {
        q: "conref path still works after you also added conkeyref. Ship both?",
        options: [
          "Yes — redundancy is safety",
          "No — pick the key form and delete the path",
          "Yes if they point at the same id",
        ],
        answer: 1,
        why: "Two pointers will diverge. The preferred form is conkeyref.",
      },
      {
        q: "A teammate wants to conref the entire inflate task into a Sites page. Verdict?",
        options: [
          "Do it — reuse everywhere",
          "Refuse — Sites is not a DITA map; this is the wrong surface",
          "Export the task as an Experience Fragment first",
        ],
        answer: 1,
        why: "DITA reuse stays in DITA. AEM pages are components. Do not smash the two.",
      },
    ],
    quests: defaultQuests({
      learn: "Name keyref vs conkeyref vs copy",
      doTitle: "Clinic copy still resolves",
      doDone: "Keys and conkeyref proven. Three sentences written. Completeness clean.",
      stress: "Explain each pointer in one sentence",
    }),
    fieldNotePrompt: "Write the three sentences: key, conkeyref, refused reuse.",
    tomorrowHook: "Week 5: profiling, ditaval, change tracking, and Author tools you may actually touch.",
    body: `## Clinic, not a glossary

This is a week boss. You practice pointers. You do not recite definitions.

Fail it and **Day 29 still unlocks if Day 27 lab is done**. The badge stays locked until you retry.

## Proof

1. Change the product key — two topics follow.
2. Change the library warning — two tasks follow.
3. A sentence you copied on purpose — because reuse would have lied.

## Figure

Reusable Components view plus Maps Manager keys. Caption: *If the view is empty, the root map is unset.*
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
