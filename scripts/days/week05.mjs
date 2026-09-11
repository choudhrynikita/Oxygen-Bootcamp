import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 29,
    week: 5,
    title: "Profiling attributes you can say out loud",
    objective:
      "Mark one step audience=expert and one paragraph platform=print, and write what each value means on this desk.",
    minutes: 90,
    skills: ["reuse", "ditaTopics"],
    legacy: ["t5-profile"],
    youtube: [
      yt("profile", [
        "Color of profiled text in Author",
        "Where audience and platform are set",
      ]),
    ],
    sources: [S.authorDita, S.learnDita, S.ugEditor],
    toolCards: ["attributes", "author-mode"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Two conditions, two meanings",
      steps: [
        "In inflate-the-tire.dita, set audience=\"expert\" on one step (the gauge nuance).",
        "In what-kitepump-is.dita, set platform=\"print\" on one paragraph you would drop from WebHelp.",
        "Turn on profiling colors in Author (Profiling / Conditional Text — verify the label). Expert and print should look different.",
        "Write oxygen-bootcamp-work/week5/condition-meanings.txt: audience=expert means ____. platform=print means ____. Do not invent a third attribute today.",
        "Do not set otherprops=\"maybe\" or a joke value.",
        "Validate. Completeness still clean.",
      ],
      failWhen:
        "A profiling value has no sentence definition, or you profiled the whole topic when you meant one step, or colors never turned on.",
      expected:
        "Two attributes, two written meanings. Colors visible. Files valid.",
    },
    quiz: [
      {
        q: "audience=\"expert\" on a step. Without a DITAVAL, what does a default WebHelp transform usually do?",
        options: [
          "Hide the step",
          "Include it — profiling attributes are data until a DITAVAL acts",
          "Fail the transform",
        ],
        answer: 1,
        why: "Attributes mark content. DITAVAL includes, excludes, or flags. No DITAVAL, no filter.",
      },
      {
        q: "You set otherprops=\"asdf\" so you can ‘filter later’. Verdict?",
        options: [
          "Fine — values are freeform",
          "Refuse — a condition you cannot explain is a landmine",
          "Fine if the color is pretty",
        ],
        answer: 1,
        why: "Conditions you can explain. Joke values become production filters by accident.",
      },
      {
        q: "The whole task is audience=expert. What did you probably want?",
        options: [
          "A separate task, or one step profiled — not a hidden chapter with no map signal",
          "platform=print on the map",
          "A conref of the task",
        ],
        answer: 0,
        why: "Hiding an entire procedure with one attribute is how novices lose a chapter. Prefer a dedicated topic or a honest map branch.",
      },
    ],
    quests: defaultQuests({
      learn: "Name audience and platform and what a joke value forbids",
      doTitle: "Keep two explained conditions",
      doDone: "Two attributes. Meanings file written. Colors on. Files valid.",
      stress: "Profile a whole topic, then undo it down to one step",
    }),
    fieldNotePrompt: "Say the two condition values in a sentence a new hire would survive.",
    tomorrowHook: "Tomorrow a DITAVAL file includes, excludes, or flags those conditions on purpose.",
    body: `## Profiling is data

v1: *Condition attributes plus a DITAVAL file include, exclude, or flag content. Color profiled text in Author mode.*

Today is the attributes. **audience**, **platform**, **product**, **rev**, **props**, **otherprops**. Pick two. Write what they mean **on this desk**.

## Color

Author can paint profiled text. Turn that on. If you cannot see the mark, you will forget it is there and ship an expert-only step to everyone.

## Explain or do not use

A condition you cannot explain will become a filter someone else trusts. Do not invent \`otherprops="maybe"\`.

## Figure

One step with a profiling color. Caption: *Attributes view on the step element. Profiling colors on in Author.*
`,
  },
  {
    n: 30,
    week: 5,
    title: "DITAVAL — include, exclude, flag",
    objective:
      "Write a DITAVAL that excludes audience=expert, flag platform=print, and apply it so you can see the difference in Author.",
    minutes: 90,
    skills: ["reuse", "publish"],
    legacy: ["t5-profile"],
    youtube: [
      yt("profile", [
        "DITAVAL attached to profiling",
        "Exclude vs flag in the UI",
      ]),
      yt("advProfile", [
        "A condition group you would not invent yet",
        "How flag is different from exclude",
      ]),
    ],
    sources: [S.authorDita, S.learnDita, S.ugEditor],
    toolCards: ["author-mode", "attributes"],
    badgeId: "ditaval-explained",
    lab: {
      pack: "kitepump-dita",
      title: "novice.ditaval vs print-flag.ditaval",
      steps: [
        "Create ditaval/novice.ditaval: exclude audience=expert. Keep other conditions include (or omit).",
        "Create ditaval/print-flag.ditaval: flag platform=print (style or color — write what you picked).",
        "In Oxygen, apply novice.ditaval as the profiling filter for Author (DITA > Profiling / Conditional Text — verify label). The expert step should disappear or gray out per your setting.",
        "Switch to print-flag.ditaval. The print paragraph should stay visible but flagged.",
        "Write oxygen-bootcamp-work/week5/ditaval-explained.txt: exclude means ____. flag means ____. include means ____.",
        "Do not delete the expert step from the source file.",
      ],
      failWhen:
        "You deleted the expert step instead of filtering it, or the DITAVAL has no prop action, or you cannot explain exclude vs flag.",
      expected:
        "Two DITAVAL files. Author view changes with the filter. Source still contains the expert step. Meanings file written.",
    },
    quiz: [
      {
        q: "Exclude vs flag: which one removes the node from output?",
        options: [
          "flag",
          "exclude",
          "include",
        ],
        answer: 1,
        why: "exclude drops the content. flag keeps it and marks it. include keeps it.",
      },
      {
        q: "You applied novice.ditaval in Author. The source file no longer has the expert step in Text mode. What went wrong?",
        options: [
          "Nothing — exclude deletes source",
          "You edited or deleted source instead of filtering the view",
          "DITAVAL always rewrites the topic",
        ],
        answer: 1,
        why: "A filter is a view and a publish input. Source keeps the step.",
      },
      {
        q: "A DITAVAL you cannot explain is attached to the shipping transform. Risk?",
        options: [
          "None if completeness is clean",
          "You may drop safety steps from the novice PDF without knowing",
          "Author mode will refuse to open",
        ],
        answer: 1,
        why: "Completeness does not simulate DITAVAL. The badge is ditaval-explained: you can say what it does.",
      },
    ],
    quests: defaultQuests({
      learn: "Name include, exclude, and flag",
      doTitle: "Keep the expert step in source while novice.ditaval hides it",
      doDone: "Two ditavals. View changes. Source still has the step. Meanings written.",
      stress: "Apply the wrong ditaval, notice the expert step, switch back",
    }),
    fieldNotePrompt: "In one sentence, who is novice.ditaval for, and what must still appear in that output?",
    tomorrowHook: "Tomorrow you refuse conditions you cannot explain — including leftover flags from a copy-paste.",
    body: `## DITAVAL

A **.ditaval** file is a list of actions on profiling values: **include**, **exclude**, **flag**.

Attach it in Author to preview. Attach it to a transformation scenario to publish (Week 6).

## Explain it

**ditaval-explained** means you can say: novice output drops expert steps; print flag paints print-only notes; nothing else is filtered.

If you cannot say it, do not attach it.

## Figure

Two files in \`ditaval/\`. Caption: *DITAVAL is XML you can read. Open it in Text. Do not treat it as a GUI-only preset.*
`,
  },
  {
    n: 31,
    week: 5,
    title: "Conditions you can explain — retire the rest",
    objective:
      "Audit every profiling attribute in the kitepump pack and delete or justify each value in a list.",
    minutes: 90,
    skills: ["reuse", "review"],
    legacy: ["t5-profile"],
    youtube: [
      yt("advProfile", [
        "Grouped conditions — awareness only",
        "A filter that would surprise you",
      ]),
    ],
    sources: [S.authorDita, S.dita13, S.learnDita],
    toolCards: ["attributes", "outline"],
    badgeId: "ditaval-explained",
    lab: {
      pack: "kitepump-dita",
      title: "Condition census",
      steps: [
        "Find in Files for audience=, platform=, product=, otherprops=, props=, rev= across kitepump.",
        "Write oxygen-bootcamp-work/week5/condition-census.txt: each hit, the value, one-line meaning, keep or delete.",
        "Delete any value you cannot explain. Do not replace it with a different joke.",
        "Leave audience=expert and platform=print if they still match Day 29 meanings.",
        "If you find grouped conditions from a paste, simplify to one attribute unless you can draw the group.",
        "Validate. Completeness clean.",
      ],
      failWhen:
        "A profiling value remains without a census line, or you deleted the expert step’s content while removing the attribute, or the census is empty because you skipped Find in Files.",
      expected:
        "Census matches the pack. Every remaining condition has a meaning. Files valid.",
    },
    quiz: [
      {
        q: "Find in Files shows otherprops=\"legacy\". Nobody can define legacy. First move?",
        options: [
          "Keep it for the next team",
          "Remove it, or define it in the census and a ditaval — no third option",
          "Set it on every topic for consistency",
        ],
        answer: 1,
        why: "Undefined conditions are unexploded filters. Define or delete.",
      },
      {
        q: "Advanced profiling attribute groups exist. You are a junior author. When do you start using them this week?",
        options: [
          "Today — more power",
          "You do not, unless a lead hands you a drawn model",
          "Only in AEM Guides",
        ],
        answer: 1,
        why: "Awareness from the video. Practice stays on simple audience/platform.",
      },
      {
        q: "product profiling vs a product-name key. Which one changes the string in running text?",
        options: [
          "Profiling — it rewrites text",
          "The key — profiling shows or hides elements, it does not rename a keyword",
          "Both do the same job",
        ],
        answer: 1,
        why: "Keys substitute. Profiling includes/excludes/flags. Do not mix the jobs.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the census and what an undefined value forbids",
      doTitle: "Keep only explained conditions",
      doDone: "Census complete. Leftover values gone. Pack valid.",
      stress: "Find one surprise hit in Find in Files",
    }),
    fieldNotePrompt: "Which condition did you delete, and what bug would it have caused in a novice PDF?",
    tomorrowHook: "Tomorrow you turn on Track Changes and leave a comment a reviewer can accept.",
    body: `## Census

Find in Files is the audit. A condition that is not in the census does not exist as policy — it exists as a bug.

## Groups

The advanced profiling video shows attribute groups. Watch for the idea. Do not design groups this week.

## Keys vs conditions

**keyref** changes the word. **Profiling** shows or hides the element. Different tools.

## Figure

Find in Files panel with audience= hits. Caption: *Search the pack, not only the open file.*
`,
  },
  {
    n: 32,
    week: 5,
    title: "Change tracking and comments — one review channel",
    objective:
      "Track Changes, edit a paragraph, comment, accept one change and reject another — without mixing Fusion and Guides review on the same file.",
    minutes: 90,
    skills: ["review", "oxygenUi"],
    legacy: ["t4-review"],
    youtube: [
      yt("wysiwyg", [
        "Review extras if shown",
        "Comments in Author",
      ]),
    ],
    sources: [S.ugEditor, S.ugAuthor, S.authorDita],
    toolCards: ["review", "author-mode"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Accept one, reject one",
      steps: [
        "Open inflate-the-tire.dita. Turn on Track Changes (Review toolbar — verify the label).",
        "Edit one cmd (insertion). Delete a word in context (deletion). Add a comment on the warning note: confirm pinch-hazard still belongs.",
        "Open Review view. You should see insertion, deletion, comment.",
        "Accept the insertion. Reject the deletion. Leave the comment for a teammate — or resolve it if your version uses resolve. Write which you did.",
        "Turn Track Changes off before you ‘just tidy’ something else.",
        "Do not paste a Content Fusion comment thread into this file. Do not pretend AEM Guides review is the same panel.",
      ],
      failWhen:
        "Track Changes was off so the edit vanished into the source, or you accepted everything without reading, or you mixed a second review product into the file.",
      expected:
        "Review view shows the leftover comment (or a resolved thread you recorded). One accept, one reject. File valid.",
    },
    quiz: [
      {
        q: "v1: Do not mix Content Fusion comments and AEM Guides review on the same file. Why?",
        options: [
          "The XML becomes not well-formed immediately",
          "Two review channels split the decision; accepts in one tool miss the other",
          "Oxygen cannot open files with comments",
        ],
        answer: 1,
        why: "Both can store marks. The team will miss one set. Pick a channel per file.",
      },
      {
        q: "Track Changes is on and you tidy a conkeyref by typing the sentence. What did you do?",
        options: [
          "A useful accept",
          "You may have replaced a pointer with a copy, and the diff hides it as ‘edit’",
          "Nothing — conkeyref is locked",
        ],
        answer: 1,
        why: "Review the XML in Text if a change looks like ordinary typing on reused content.",
      },
      {
        q: "Review View records insertions, deletions, and comments. Where is that view?",
        options: [
          "AEM Sites console",
          "Oxygen’s Review view / panel (right rail or Window menu — verify the label)",
          "The Transformation view",
        ],
        answer: 1,
        why: "v1 lab: Track Changes, edit a paragraph, comment, accept.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Track Changes and Review view and what a second channel forbids",
      doTitle: "Accept one change, reject one, leave a comment",
      doDone: "Review view matches the story. File valid. Track Changes off at the end.",
      stress: "Turn tracking off too early, lose a diff, undo from Review if you can",
    }),
    fieldNotePrompt: "Which review channel does this desk use for DITA, and which two will you refuse to mix?",
    tomorrowHook: "Tomorrow you touch Author CSS the allowed way — Hints, not a personal theme.",
    body: `## Review View

v1: *Review View records insertions, deletions, and comments. Do not mix Content Fusion comments and AEM Guides review on the same file.*

**Track Changes** on. Edit. Comment. Accept or reject with intent. Then turn it off.

## One channel

Desktop Oxygen review is this panel. Content Fusion is a collaboration product. AEM Guides has its own review. One file, one channel.

## Figure

Review panel: insertion green, deletion red, comment card. Caption: *Review view, not the Transformation view, not Sites.*
`,
  },
  {
    n: 33,
    week: 5,
    title: "Author CSS you may touch — frameworks, Hints, content completion",
    objective:
      "Turn on the Hints style layer, use content completion on Enter, and refuse to invent CSS in Options.",
    minutes: 90,
    skills: ["oxygenUi", "ditaTopics"],
    legacy: ["t6-framework"],
    youtube: [
      yt("customize", [
        "Framework as a package",
        "Hints / inline actions — not a personal stylesheet first",
      ]),
    ],
    sources: [S.ugEditor, S.authorDita, S.ugAuthor],
    toolCards: ["author-mode", "outline"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Hints on, personal CSS off",
      steps: [
        "In Author, find the Styles dropdown (default / Hints / Inline actions / Full tags — verify labels).",
        "Turn on Hints. Write three hint labels you see on a task (e.g. cmd, info, result).",
        "Place the caret in steps. Press Enter. Content completion should offer step, not a free paragraph at all costs.",
        "Open Outline. Click result to jump. Click cmd to jump.",
        "Do not add a custom CSS file in Options to make headings teal. If you already did, remove it and write that you did.",
        "Write oxygen-bootcamp-work/week5/framework-note.txt: a framework packages schema, CSS, toolbars, templates. I may turn on Hints. I may not ship a personal theme.",
      ],
      failWhen:
        "You added personal Author CSS as the lab, or you never opened content completion, or Hints stayed off.",
      expected:
        "Hints on. Three labels listed. Enter used for completion. Framework note written. No personal theme.",
    },
    quiz: [
      {
        q: "A framework packages schema, CSS, toolbars, and templates. Who owns that package on a team desk?",
        options: [
          "Each author in Options",
          "The information architect / lead, shared with the install",
          "AEM Sites templates",
        ],
        answer: 1,
        why: "v1: Use Hints and Inline actions. Do not each invent CSS in Options.",
      },
      {
        q: "Enter in Author opens content completion. You press Enter twice to ‘make space’. What goes wrong?",
        options: [
          "Nothing — like Word",
          "You may insert illegal or extra elements the model did not ask for",
          "Oxygen converts the file to Markdown",
        ],
        answer: 1,
        why: "Enter is a schema-aware insert. Space is not a design tool.",
      },
      {
        q: "Full tags vs Hints. Which one is for daily writing?",
        options: [
          "Full tags — always",
          "Hints (or default) for writing; Full tags when you need to see structure",
          "Neither — use Grid",
        ],
        answer: 1,
        why: "Full tags are a diagnostic layer. Hints teach the model. Grid is not a novel.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Hints, Enter completion, and what Options CSS forbids on this desk",
      doTitle: "Keep Hints on and personal CSS off",
      doDone: "Three hint labels listed. Framework note written. No personal theme.",
      stress: "Turn on Full tags, find a wrapper you forgot, turn Hints back on",
    }),
    fieldNotePrompt: "What did content completion refuse to insert, and why was it right?",
    tomorrowHook: "Tomorrow you Find/Replace with a scope — and you refuse a repo-wide replace you cannot undo.",
    body: `## Frameworks

v1: *A framework packages schema, CSS, toolbars, and templates. Use Hints and Inline actions. Do not each invent CSS in Options.*

You may toggle **Hints**, **Inline actions**, **Full tags**. You may not ship a personal Author theme that only your login can see.

## Content completion

**Enter** opens completion. The parent element decides the list. If a toolbar action is disabled, the model refused it.

## Outline

Outline is the tree. Click to jump. If Outline and the canvas disagree, trust Outline plus Text.

## Figure

Styles dropdown on the Author toolbar. Caption: *Verify the label in your version. Hints is a layer, not a new file type.*
`,
  },
  {
    n: 34,
    week: 5,
    title: "Find/Replace with care — scope, then a dry run",
    objective:
      "Replace a product string in a scoped folder without touching the library warning or the map’s keydef by accident.",
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
      title: "Scoped replace, then completeness",
      steps: [
        "Find in Files: HP-40a (or your product string) across the kitepump folder. Count the hits. Note which are keydef, keyref, and leftover hardcoded text.",
        "If you still have hardcoded product strings in topics, replace them in topics/ only — not in maps/, not in ditaval/, not in warnings.dita unless you mean to.",
        "Use Find/Replace in Files with a file filter (*.dita) and a folder scope. Preview replacements if your version has Preview. Do not Replace All on the repo root.",
        "After replace: validate open files, then completeness on the root map.",
        "Write oxygen-bootcamp-work/week5/replace-log.txt: scope, filter, how many replacements, what you refused to touch.",
        "Undo from local history or Git if the map’s keydef changed by accident — then write that you needed undo.",
      ],
      failWhen:
        "Replace All ran on the whole workspace, or the keydef was emptied, or warnings.dita lost a sentence you did not intend.",
      expected:
        "Replace log written. Keydef still holds the name. Completeness clean. No workspace-wide replace.",
    },
    quiz: [
      {
        q: "Find/Replace in Files can restrict to an XPath. You need that today?",
        options: [
          "Yes, always",
          "Not required today — folder plus *.dita is the junior-safe scope; XPath is Week 8",
          "XPath is only for Schematron",
        ],
        answer: 1,
        why: "v1 mentions XPath restrict as a power tool. Scope first. XPath later.",
      },
      {
        q: "Replace All on the repo root for ‘note’ → ‘caution’. What blows up?",
        options: [
          "Nothing — words are words",
          "Element names, comments, and unmatched sentences",
          "Only Markdown files",
        ],
        answer: 1,
        why: "You will rename XML names. Scope and preview exist because of this class of mistake.",
      },
      {
        q: "The product name lives in a keydef. A topic still has a hardcoded copy. First repair?",
        options: [
          "Replace All including the map",
          "Replace the topic copy with a keyref; leave the keydef as the source",
          "Delete the keydef so there is one copy in the topic",
        ],
        answer: 1,
        why: "The map owns the name. Replace in topics is toward keyref, not toward deleting the key.",
      },
    ],
    quests: defaultQuests({
      learn: "Name folder scope and file filter and what Replace All on root forbids",
      doTitle: "Keep the keydef intact after a scoped replace",
      doDone: "Log written. Completeness clean. No accidental library wipe.",
      stress: "Preview a too-wide replace and cancel it",
    }),
    fieldNotePrompt: "What would you refuse to Replace All even with preview, and why?",
    tomorrowHook: "Tomorrow is the Week 5 boss: conditions, review, Hints, and a replace you can defend.",
    body: `## Scope first

Find in Files is an audit. Replace is a weapon. Set **folder**, **file filter**, and if you have it, **preview**.

Never Replace All on the workspace root. Never replace an XML name as if it were English.

## Keys

If the string is the product name, the repair is a **keyref**, not a clever replace that also hits the keydef.

## Figure

Find/Replace in Files dialog with a folder path and \`*.dita\`. Caption: *Scope is a field, not a hope.*
`,
  },
  {
    n: 35,
    week: 5,
    title: "Boss — Author tools you can defend",
    objective:
      "Explain one DITAVAL, show Track Changes hygiene, prove Hints are on, and pass a condition census.",
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
      title: "Clinic: filter, review, Hints",
      steps: [
        "Copy kitepump to oxygen-bootcamp-work/week5-clinic/.",
        "Apply novice.ditaval in Author. Show that the expert step is filtered. Switch off. Source still has the step.",
        "Track Changes: make a dummy edit, reject it. Leave no stray tracking on when you stop.",
        "Hints on. Content completion on Enter in a task. Write the first three offers.",
        "Condition census still true on the clinic copy. No unexplained otherprops.",
        "Timed completeness read on the clinic copy. Write file-visit count.",
        "Answer the boss quiz. Day 36 still unlocks if Day 34 lab is done.",
      ],
      failWhen:
        "The expert step was deleted from source, or Track Changes is still recording junk, or a condition has no meaning, or Hints were never opened.",
      expected:
        "Clinic copy valid. DITAVAL explained in one sentence. Review clean. Hints on. Completeness count written.",
    },
    quiz: [
      {
        q: "A yellow light bulb Quick Fix appears on a profiling error. When do you click it?",
        options: [
          "Always — it is official",
          "Only when you can explain what it will change",
          "Never in Author mode",
        ],
        answer: 1,
        why: "Quick Fixes can reshape structure. Read first. Same rule as Week 1.",
      },
      {
        q: "You failed this boss. Does Day 36 stay locked?",
        options: [
          "Yes, forever",
          "No, if Friday (Day 34) lab is done the next week can unlock. The boss badge stays locked until you pass.",
          "No, Daily Burst unlocks the week",
        ],
        answer: 1,
        why: "Boss badge waits. Curriculum week does not hostage you if Friday lab is done.",
      },
      {
        q: "novice.ditaval is explained as ‘makes it pretty’. Ship it?",
        options: [
          "Yes if the PDF looks nicer",
          "No — the badge requires include/exclude/flag in operational words",
          "Yes if Hints are on",
        ],
        answer: 1,
        why: "ditaval-explained is a meaning, not a vibe.",
      },
      {
        q: "Review comments from Fusion and desktop Track Changes both live on inflate-the-tire.dita. First move?",
        options: [
          "Keep both for safety",
          "Pick one channel; export or resolve the other before you accept",
          "Publish WebHelp — comments strip automatically",
        ],
        answer: 1,
        why: "Two channels split the decision. Publishing may or may not strip marks — do not bet the procedure on it.",
      },
    ],
    quests: defaultQuests({
      learn: "Name DITAVAL actions, Review view, and Hints",
      doTitle: "Clinic copy still honest",
      doDone: "Filter proven. Review clean. Hints on. Census true. Completeness counted.",
      stress: "Explain exclude vs flag in one sentence",
    }),
    fieldNotePrompt: "Write the DITAVAL in one sentence a lead could put in a runbook.",
    tomorrowHook: "Week 6: transformation scenarios, WebHelp, PDF, and a FAILED log you must be able to read.",
    body: `## Clinic

This is a week boss: filter + review hygiene + Author layers + completeness.

Fail it and **Day 36 still unlocks if Day 34 lab is done**. The badge stays locked until you retry.

## Proof

1. **Exclude** hides a step in the view; Text still has it.
2. **Track Changes** off, leftover dummy rejected.
3. **Hints** on; Enter completes a step.
4. **Census** has no orphans.

## Figure

Author with profiling colors + Review empty of junk + Styles = Hints. Caption: *Three panels, one clinic.*
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
