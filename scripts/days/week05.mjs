import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 29,
    week: 5,
    title: "Hide text some readers should not see",
    objective:
      "Mark one step for experts and one paragraph for print, turn on the colors in Author, and write what each mark means on this desk.",
    minutes: 90,
    skills: ["reuse", "ditaTopics"],
    legacy: ["t5-profile"],
    youtube: [
      yt("profile", [
        "Color of marked text in Author",
        "Where audience and platform are set",
      ]),
    ],
    sources: [S.authorDita, S.learnDita, S.ugEditor],
    toolCards: ["attributes", "author-mode"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Two marks, two meanings",
      steps: [
        "Open prime-the-pump.dita. The sample may already mark one step audience=\"expert\" (the gauge step). If not, set audience=\"expert\" on that step.",
        "In what-is-kitepump.dita, set platform=\"print\" on one paragraph you would drop from a screen copy.",
        "Turn on profiling colors in Author (Profiling / Conditional Text — if the label differs, write the label you see). Expert and print should look different.",
        "Write oxygen-bootcamp-work/week5/condition-meanings.txt: audience=expert means ____. platform=print means ____. Do not invent a third mark today.",
        "Do not set a joke value. Do not mark the whole how-to when you meant one step.",
        "Save. No red error. Completeness still clean.",
      ],
      failWhen:
        "A mark has no sentence in the meanings file, or you marked the whole how-to when you meant one step, or colors never turned on.",
      expected:
        "Two marks, two written meanings. Colors visible. Files open clean.",
    },
    quiz: [
      {
        q: "You marked a step audience=expert. You have not hidden it yet. Is the step still in the file?",
        options: [
          "Yes — a mark is a label. It does not delete the step",
          "No — the mark deletes the step",
          "Only if completeness is clean",
        ],
        answer: 0,
        why: "The mark labels the step. It does not delete the step. You still see it in Text.",
      },
      {
        q: "The whole how-to is marked audience=expert. What did you probably want?",
        options: [
          "A separate how-to, or one step marked — not a hidden chapter with no booklet signal",
          "platform=print on the booklet",
          "A warning pointer on the title",
        ],
        answer: 0,
        why: "Hiding a whole how-to with one mark is how a chapter disappears. Prefer a dedicated page, or mark the one step.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the audience and platform fields on a step or paragraph",
      doTitle: "Mark one expert step and one print paragraph, and write the meanings",
      doDone: "Two marks. Meanings file written. Colors on. Files clean.",
      stress: "Pick whether a mark deletes the step, and what a whole-page mark probably wanted",
    }),
    fieldNotePrompt:
      "What did audience=expert and platform=print mean in the two sentences you wrote?",
    tomorrowHook: "Tomorrow a switch file shows, hides, or flags those marks on purpose.",
    body: `## A mark is not a delete

Some readers should not see a step. You do not delete the step. You **mark** it.

Today you set two marks: **audience="expert"** on a step, **platform="print"** on a paragraph. Author can paint marked text in color. Turn that on. If you cannot see the mark, you will forget it is there.

A mark you cannot explain will become a filter someone else trusts. Do not invent a joke value.

The step is still in the file. A switch file tomorrow will act on the mark.

## Word today

**Condition** (also called profiling) — a mark such as audience or platform that says who a chunk is for. It does not hide anything until a switch file says so.
`,
  },
  {
    n: 30,
    week: 5,
    title: "A switch file for those readers",
    objective:
      "Write a switch file that hides expert steps and a second one that flags print paragraphs, then apply each in Author so you can see the difference.",
    minutes: 90,
    skills: ["reuse", "publish"],
    legacy: ["t5-profile"],
    youtube: [
      yt("profile", [
        "A switch file attached to profiling",
        "Hide vs flag in the UI",
      ]),
      yt("advProfile", [
        "A condition group you would not invent yet",
        "How flag is different from hide",
      ]),
    ],
    sources: [S.authorDita, S.learnDita, S.ugEditor],
    toolCards: ["author-mode", "attributes"],
    badgeId: "ditaval-explained",
    lab: {
      pack: "kitepump-dita",
      title: "Two switch files",
      steps: [
        "Create ditaval/novice.ditaval: exclude audience=expert. Leave other marks alone (include them, or omit them).",
        "Create ditaval/print-flag.ditaval: flag platform=print (a style or a color — write what you picked).",
        "In Oxygen, apply novice.ditaval as the profiling filter for Author (DITA > Profiling / Conditional Text — verify the label). The expert step should disappear or gray out per your setting.",
        "Switch to print-flag.ditaval. The print paragraph should stay visible but flagged.",
        "Write oxygen-bootcamp-work/week5/ditaval-explained.txt: exclude means ____. flag means ____. include means ____.",
        "Do not delete the expert step from the source file.",
      ],
      failWhen:
        "You deleted the expert step instead of filtering it, or a switch file has no action, or you cannot explain exclude vs flag.",
      expected:
        "Two switch files. Author view changes with the filter. Source still contains the expert step. Meanings file written.",
    },
    quiz: [
      {
        q: "Exclude vs flag: which one removes the chunk from what the reader sees?",
        options: ["flag", "exclude", "include"],
        answer: 1,
        why: "exclude drops the content. flag keeps it and marks it. include keeps it.",
      },
      {
        q: "You applied the novice switch file in Author. Text view no longer has the expert step. What went wrong?",
        options: [
          "Nothing — exclude deletes source",
          "You edited or deleted source instead of filtering the view",
          "A switch file always rewrites the page",
        ],
        answer: 1,
        why: "A filter is a view. Source keeps the step.",
      },
    ],
    quests: defaultQuests({
      learn: "Find where Author attaches a switch file",
      doTitle: "Hide the expert step in the view while it stays in the file",
      doDone: "Two switch files. View changes. Source still has the step. Meanings written.",
      stress: "Pick exclude vs flag, and what a missing step in Text means",
    }),
    fieldNotePrompt:
      "Who is the novice switch file for, and did the expert step stay in Text view?",
    tomorrowHook: "Tomorrow you keep only the marks you can explain, and you delete the rest.",
    body: `## A list of actions

A **.ditaval** file is a switch file: a list of actions on your marks. The actions are **include**, **exclude**, and **flag**.

Attach it in Author to preview. You will use a switch file again in week 6 when you make a site or a PDF. Today you only preview.

If you cannot say what the file does, do not attach it.

Open the switch file in Text. It is a small file you can read. It is not only a hidden setting.

## Word today

**ditaval** — a switch file that includes, excludes, or flags marked text.
`,
  },
  {
    n: 31,
    week: 5,
    title: "Only keep switches you can explain",
    objective:
      "Search the pack for every audience, platform, and similar mark, then delete or justify each value in a list.",
    minutes: 90,
    skills: ["reuse", "review"],
    legacy: ["t5-profile"],
    youtube: [
      yt("advProfile", [
        "Grouped conditions — look, do not copy yet",
        "A filter that would surprise you",
      ]),
    ],
    sources: [S.authorDita, S.dita13, S.learnDita],
    toolCards: ["attributes", "outline"],
    badgeId: "ditaval-explained",
    lab: {
      pack: "kitepump-dita",
      title: "A list of every mark",
      steps: [
        "Find in Files for audience= and platform= across the kitepump folder. Also search product=, otherprops=, props=, and rev= — extra mark fields some files use. If you cannot explain one, it goes on the delete list.",
        "Write oxygen-bootcamp-work/week5/condition-census.txt: each hit, the value, one-line meaning, keep or delete.",
        "Delete any value you cannot explain. Do not replace it with a different joke.",
        "Leave audience=expert and platform=print if they still match yesterday’s meanings.",
        "If you find grouped marks from a paste, simplify to one attribute unless you can draw the group.",
        "Save. Completeness clean.",
      ],
      failWhen:
        "A mark remains without a list line, or you deleted the expert step’s words while removing a mark, or the list is empty because you skipped Find in Files.",
      expected:
        "The list matches the pack. Every remaining mark has a meaning. Files clean.",
    },
    quiz: [
      {
        q: "Find in Files shows audience=\"legacy\". Nobody can say what legacy means. What do you do?",
        options: [
          "Keep it for the next person",
          "Remove it, or write a meaning and a switch file action — those are the two options",
          "Set it on every page so it looks consistent",
        ],
        answer: 1,
        why: "A mark with no meaning is a filter waiting to surprise you. Define it or delete it.",
      },
      {
        q: "A product name in the booklet vs a product mark on a step. Which one changes the word in the sentence?",
        options: [
          "The mark — it rewrites text",
          "The name in the booklet — a mark shows or hides a chunk, it does not rename a word",
          "They do the same job",
        ],
        answer: 1,
        why: "A key changes the word. A condition shows, hides, or flags the chunk. Different tools.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Find in Files and search the kitepump folder",
      doTitle: "List every mark and delete the ones you cannot explain",
      doDone: "List complete. Leftover values gone. Pack clean.",
      stress: "Pick what to do with a mystery value, and key vs mark",
    }),
    fieldNotePrompt:
      "Which mark did you delete, and why?",
    tomorrowHook: "Tomorrow you turn on suggested edits and leave a comment a teammate can read.",
    body: `## Search the pack

Find in Files is the audit. A mark that is not on your list is not a plan. It is a surprise.

The video shows grouped marks. Watch for the idea. Do not design groups this week.

A **key** changes the word. A **condition** shows or hides the chunk. Do not mix the jobs.

## Word today

**Find in Files** — a search across many files, not only the one you have open.
`,
  },
  {
    n: 32,
    week: 5,
    title: "Comments and suggested edits",
    objective:
      "Turn on suggested edits, change a paragraph, add a comment, accept one change and reject another.",
    minutes: 90,
    skills: ["review", "oxygenUi"],
    legacy: ["t4-review"],
    youtube: [
      yt("wysiwyg", [
        "Comments in Author",
        "Review extras if they appear",
      ]),
    ],
    sources: [S.ugEditor, S.ugAuthor, S.authorDita],
    toolCards: ["review", "author-mode"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Accept one, reject one",
      steps: [
        "Open prime-the-pump.dita. Turn on Track Changes (Review toolbar — verify the label).",
        "Edit one step (an insertion). Delete a word in the context line (a deletion). Add a comment on the warning: confirm the pinch warning still belongs.",
        "Open Review view. You should see insertion, deletion, and comment.",
        "Accept the insertion. Reject the deletion. Leave the comment for a teammate — or resolve it if your version uses resolve. Write which you did.",
        "Turn Track Changes off before you tidy anything else.",
        "Do not type the warning sentence over a name pointer and call it an edit.",
      ],
      failWhen:
        "Track Changes was off so the edit vanished into the source, or you accepted everything without reading, or you replaced a warning pointer with a copied sentence.",
      expected:
        "Review view shows the leftover comment (or a resolved thread you recorded). One accept, one reject. File clean.",
    },
    quiz: [
      {
        q: "Track Changes is on and you tidy a warning pointer by typing the sentence. What did you do?",
        options: [
          "A useful accept",
          "You may have replaced a pointer with a copy, and the suggested edit hides that",
          "Nothing — a pointer cannot be edited",
        ],
        answer: 1,
        why: "Glance at Text if a change looks like ordinary typing on reused content.",
      },
      {
        q: "Review view records insertions, deletions, and comments. Where is that view?",
        options: [
          "Help > About",
          "Oxygen’s Review view (right side or Window menu — verify the label)",
          "The completeness report",
        ],
        answer: 1,
        why: "Suggested edits live in Review view, not in the version dialog and not in completeness.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Track Changes and Review view",
      doTitle: "Accept one change, reject one, leave a comment",
      doDone: "Review view matches the story. File clean. Track Changes off at the end.",
      stress: "Pick what typing over a pointer can hide, and where Review view lives",
    }),
    fieldNotePrompt:
      "Which change did you accept, which did you reject, and what did the comment say?",
    tomorrowHook: "Tomorrow you turn on Hints — labels that appear while you type.",
    body: `## Suggested edits

**Track Changes** is a mode that records insertions and deletions so you can accept or reject them. **Review view** lists those edits and your **comments**.

Turn it on. Edit. Comment. Accept or reject with intent. Then turn it off.

This desk uses this panel. One file, one place for comments.

If you type over a reused warning while tracking is on, you may replace a pointer with a copy. Check Text if the “edit” looks too smooth.

## Word today

**Track Changes** — a mode that records suggested edits. **Comment** — a note on a chunk for a teammate.
`,
  },
  {
    n: 33,
    week: 5,
    title: "Hints that appear while you type",
    objective:
      "Turn on Hints, use the list that appears when you press Enter, and leave the look of Author alone.",
    minutes: 90,
    skills: ["oxygenUi", "ditaTopics"],
    legacy: ["t6-framework"],
    youtube: [
      yt("customize", [
        "A framework as a package",
        "Hints and inline actions — not a private look first",
      ]),
    ],
    sources: [S.ugEditor, S.authorDita, S.ugAuthor],
    toolCards: ["author-mode", "outline"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Hints on",
      steps: [
        "In Author, find the Styles dropdown (default / Hints / Inline actions / Full tags — verify labels).",
        "Turn on Hints. Write three hint labels you see on a how-to (for example cmd, info, result).",
        "Place the caret in the steps. Press Enter. The list should offer a step, not a free paragraph at all costs.",
        "Open Outline. Click result to jump. Click cmd to jump.",
        "Do not add a private look in Options to make headings a new color. If you already did, remove it and write that you did.",
        "Write oxygen-bootcamp-work/week5/framework-note.txt: a framework packages the page rules, the look, the toolbar, and the templates. I may turn on Hints. I do not ship a private look.",
      ],
      failWhen:
        "You added a private Author look as the lab, or you never opened the Enter list, or Hints stayed off.",
      expected:
        "Hints on. Three labels listed. Enter used for the list. Framework note written. No private look.",
    },
    quiz: [
      {
        q: "A framework packages page rules, look, toolbars, and templates. Who owns that package on a team desk?",
        options: [
          "Each writer in Options",
          "The lead, shared with the install",
          "Whoever last changed the heading color",
        ],
        answer: 1,
        why: "You may turn on Hints. You do not each invent a private look.",
      },
      {
        q: "Enter in Author opens a list of next pieces. You press Enter twice to ‘make space’. What goes wrong?",
        options: [
          "Nothing — like a normal word processor",
          "You may insert extra pieces this kind of page did not ask for",
          "Oxygen converts the file to a notepad file",
        ],
        answer: 1,
        why: "Enter is a smart insert. Space is not a design tool.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the Styles dropdown and turn on Hints",
      doTitle: "Press Enter in a how-to and write the first offers",
      doDone: "Three hint labels listed. Framework note written. No private look.",
      stress: "Pick who owns the package, and what double-Enter can insert",
    }),
    fieldNotePrompt:
      "What did the Enter list offer, and what did it not offer?",
    tomorrowHook: "Tomorrow you find and replace in a folder — without breaking the booklet.",
    body: `## Labels while you type

**Hints** are labels in Author that show the name of the piece you are in (step, command, result) while you type.

You may toggle **Hints**, **Inline actions**, and **Full tags**. You may not ship a private Author look that only your login can see.

**Enter** opens a list of next legal pieces. The parent piece decides the list. If a toolbar button is grey, this kind of page does not allow that thing in that spot.

Outline is the tree. Click to jump.

## Word today

**Framework** — a package that tells Oxygen how this kind of page works: rules, look, toolbar, templates. **Hints** are one layer you may turn on.
`,
  },
  {
    n: 34,
    week: 5,
    title: "Find and replace without breaking files",
    objective:
      "Replace a product string in a scoped folder without touching the library warning or the booklet’s stored name by accident.",
    minutes: 90,
    skills: ["oxygenUi", "xmlLiteracy"],
    legacy: ["t4-validate"],
    youtube: [
      yt("tutorials", ["Where Find/Replace in Files lives if shown"]),
    ],
    sources: [S.ugEditor, S.authorDita],
    toolCards: ["author-mode", "text-mode"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "A scoped replace, then completeness",
      steps: [
        "Find in Files: KP-2a (or your product string) across the kitepump folder. Count the hits. Note which are the stored name in the booklet, which are pointers, and which are leftover typed text.",
        "If topics still have a typed product string, replace them in topics/ only — not in maps/, not in ditaval/, not in warnings.dita unless you mean to.",
        "Use Find/Replace in Files with a file filter (*.dita) and a folder scope. Preview replacements if your version has Preview. Do not Replace All on the whole workspace.",
        "After replace: confirm open files have no red error, then run completeness on the root map.",
        "Write oxygen-bootcamp-work/week5/replace-log.txt: scope, filter, how many replacements, what you left untouched.",
        "If the booklet’s stored name changed by accident, undo, then write that you needed undo.",
      ],
      failWhen:
        "Replace All ran on the whole workspace, or the booklet’s stored name was emptied, or warnings.dita lost a sentence you did not intend.",
      expected:
        "Replace log written. The booklet still holds the product name. Completeness clean. No workspace-wide replace.",
    },
    quiz: [
      {
        q: "Replace All on the whole workspace for note → caution. What blows up?",
        options: [
          "Nothing — words are words",
          "Tag names, comments, and unmatched sentences",
          "Only the completeness report",
        ],
        answer: 1,
        why: "You will rename tags. Folder plus file filter exist because of this class of mistake.",
      },
      {
        q: "The product name lives in the booklet. A page still has a typed copy. First repair?",
        options: [
          "Replace All including the booklet",
          "Replace the page copy with a name pointer; leave the booklet as the source",
          "Delete the name in the booklet so there is one copy on the page",
        ],
        answer: 1,
        why: "The booklet owns the name. Replace on pages is toward a key, not toward deleting the key.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Find/Replace in Files and the folder field",
      doTitle: "Replace in topics/ only, then run completeness",
      doDone: "Log written. Completeness clean. Booklet name still there.",
      stress: "Pick what a workspace-wide replace breaks, and how to repair a typed product name",
    }),
    fieldNotePrompt:
      "What folder did you search, how many replacements ran, and what did you leave untouched?",
    tomorrowHook: "Tomorrow is the week check. Passing it opens week 6.",
    body: `## Folder first

Find in Files is an audit. Replace is a sharp tool. Set **folder**, **file filter**, and if you have it, **preview**.

Never Replace All on the whole workspace. Never replace a tag name as if it were English.

If the string is the product name, the repair is a **keyref** (a name pointer), not a replace that also hits the booklet’s stored name.

## Word today

**Scope** — the folder and file type you search in, so you do not change the whole workspace.
`,
  },
  {
    n: 35,
    week: 5,
    title: "Week 5 check",
    objective:
      "Explain one switch file, show suggested-edit hygiene, prove Hints are on, and pass the mark list.",
    minutes: 110,
    skills: ["review", "reuse", "oxygenUi"],
    legacy: ["t5-profile", "t4-review"],
    youtube: [
      yt("profile", ["Exclude vs flag recap"]),
      yt("customize", ["Hints layer recap"]),
    ],
    sources: [S.authorDita, S.ugEditor, S.learnDita],
    toolCards: ["review", "attributes", "outline"],
    badgeId: "ditaval-explained",
    boss: true,
    lab: {
      pack: "kitepump-dita",
      title: "Filter, review, Hints",
      steps: [
        "Copy kitepump to oxygen-bootcamp-work/week5-check/ so you do not wreck the original.",
        "Apply novice.ditaval in Author. Show that the expert step is filtered. Switch off. Source still has the step.",
        "Track Changes: make a dummy edit, reject it. Leave tracking off when you stop.",
        "Hints on. Press Enter in a how-to. Write the first three offers.",
        "The mark list still matches the check copy. No unexplained marks.",
        "Run completeness on the check copy.",
        "Pass the quiz. Week 6 stays locked until this day is finished (lab + quiz + a short note).",
      ],
      failWhen:
        "The expert step was deleted from source, or Track Changes is still recording junk, or a mark has no meaning, or Hints were never opened.",
      expected:
        "Check copy clean. Switch file explained in one sentence. Review clean. Hints on. Completeness clean.",
    },
    quiz: [
      {
        q: "A yellow bulb offers to fix a mark. When do you click it?",
        options: [
          "Always — bulbs are official",
          "Only when you can say what it will change",
          "Never in Author",
        ],
        answer: 1,
        why: "Some fixes reshape the page. Read first. Same rule as week 1.",
      },
      {
        q: "You failed this check. Does week 6 open?",
        options: [
          "Yes, Friday’s replace is enough",
          "No. Week 6 stays locked until this day is finished. Retry the quiz if you need to.",
          "Yes, if the 5-minute warmup is done",
        ],
        answer: 1,
        why: "Lab, quiz, and a short note. Retry is free. The warmup does not open the week.",
      },
      {
        q: "The novice switch file is explained as ‘makes it pretty’. Ship it?",
        options: [
          "Yes if Author looks nicer",
          "No — you must say include, exclude, or flag in plain words",
          "Yes if Hints are on",
        ],
        answer: 1,
        why: "A switch file is an action list, not a vibe.",
      },
    ],
    quests: defaultQuests({
      learn: "Name exclude, flag, Review view, and Hints out loud",
      doTitle: "Prove the filter, the rejected edit, and Hints on the check copy",
      doDone: "Filter proven. Review clean. Hints on. List true. Completeness clean.",
      stress: "Pass the quiz. Retry if you need to.",
    }),
    fieldNotePrompt:
      "Write the switch file in one sentence: who it is for, and what it hides or flags.",
    tomorrowHook:
      "Week 6: turn the booklet into a site or a PDF. You will read the log even when it works.",
    body: `## A check, not a show

This is the week boss. You already met these tools.

1. **Exclude** hides a step in the view; Text still has it.
2. **Track Changes** off; leftover dummy rejected.
3. **Hints** on; Enter completes a step.
4. **The list** has no mystery marks.

Fail the quiz and **week 6 stays locked**. Retry as many times as you want. The 5-minute warmup does not open the week.

## Word today

No new word. Use **ditaval**, **exclude**, **flag**, **Track Changes**, and **Hints** in the note you write.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
