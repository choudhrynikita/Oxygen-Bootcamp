import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 50,
    week: 8,
    title: "Keep the same words for the same things",
    objective:
      "List the audience values kitepump already uses, reject one invented value, and say why a shared list matters.",
    minutes: 90,
    skills: ["reuse", "ditaTopics"],
    legacy: [],
    youtube: [
      yt("advProfile", [
        "Conditional marks as a system, not decoration",
        "Where audience sits on a step",
      ]),
    ],
    sources: [S.authorDita, S.dita13, S.ugEditor],
    toolCards: ["attributes"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Write the allowed audience values",
      steps: [
        "Open prime-the-pump.dita. Find the step that already has audience=\"expert\". Write that value down.",
        "List every audience value your kitepump map actually uses today in oxygen-bootcamp-work/week8/allowed-values.txt.",
        "Write one invented value you will not add (for example ninja) and one sentence why a shared list would reject it.",
        "Read the DITA overview page on subject scheme from the Source box. Quote at most two lines, then write your own: a subject scheme is a list that says which words you may type for a mark like audience.",
        "Do not build a full company word-list today. Do not add a new audience value to the shipping map.",
      ],
      failWhen:
        "You invent a long word-list, or you skip the existing expert step, or you add ninja to the live map.",
      expected:
        "A short allowed-values list plus one rejected invention. Expert is on the list.",
    },
    quiz: [
      {
        q: "audience=\"expert\" is already on one step in the how-to. Why not type audience=\"ninja\" on another?",
        options: [
          "A shared list (a subject scheme) keeps the same word for the same kind of reader. Ninja is not on that list",
          "Ninja is illegal XML",
          "Expert steps cannot share a page with other steps",
        ],
        answer: 0,
        why: "If every writer invents a word, no filter can find the expert steps. Same mark, same word.",
      },
      {
        q: "A subject scheme exists so writers type any string they like in audience. True or not?",
        options: [
          "True — values are free",
          "Not true — it constrains values. You are not building the company list today. You are stopping random words",
          "True if the color is pretty",
        ],
        answer: 1,
        why: "The list is a fence. Awareness this week. You are not the person who owns the company list.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the expert step on the how-to",
      doTitle: "Write the allowed values and one value you will not add",
      doDone: "Existing values listed. One invention rejected. Shipping map unchanged.",
      stress: "Pick why ninja is a bad audience word, and what a subject scheme is for",
    }),
    fieldNotePrompt:
      "Which audience values did you actually find in the pack? Paste the list and the one word you rejected.",
    tomorrowHook: "Tomorrow: big booklets that feel slow, and what you will not turn on in Author.",
    body: `## Same mark, same word

Week 5 you marked a step \`audience="expert"\`. That word only works if everyone types **expert**. Not ninja. Not guru. Not adv.

A **subject scheme** is a list that says which words you may use for a mark like audience. If expert is on the list, type expert. The list rejects ninja.

You will not design the company list today. You will stop typing random strings.

## Word today

**Subject scheme** — a list of allowed words for marks like audience. Same thing, same word.

## Watch

The advanced profiling video. Watch the marks as a system, not as paint.

## Do not

Do not add a new audience value to kitepump.ditamap. The pack already has the apple.
`,
  },
  {
    n: 51,
    week: 8,
    title: "Big booklets that feel slow",
    objective:
      "Write three things that make Author crawl on a big booklet, and use Maps Manager on kitepump instead of opening every page at once.",
    minutes: 90,
    skills: ["reuse", "maps"],
    legacy: [],
    youtube: [
      yt("profile", [
        "Extra color marks on a page",
        "A filter on a booklet vs a mark on one step",
      ]),
    ],
    sources: [S.authorDita, S.dita13],
    toolCards: ["maps-manager"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Three slowness causes, one small book",
      steps: [
        "Open kitepump.ditamap in Maps Manager. Do not open both topics in Author at the same time unless you need them.",
        "Write three slowness causes in oxygen-bootcamp-work/week8/slow-author.txt: (1) a huge booklet opened as one Author page with every tag showing, (2) live checking of every file on every keystroke, (3) extra color marks and extra panels left on from last week.",
        "On this small pack, turn profiling colors on, then off again. Write one line: kitepump is small, so it stays snappy. A 400-page book with the same panels would not.",
        "Do not paste a second copy of the whole company book into this folder to ‘feel’ slowness.",
      ],
      failWhen:
        "You skip the three causes, or you try to prove slowness by copying a giant book into the pack.",
      expected:
        "Three slowness causes in your words. Maps Manager used. Pack still small.",
    },
    quiz: [
      {
        q: "A 2,000-page booklet feels slow in Author. First move?",
        options: [
          "Open the whole book in Author with every tag showing, so you can see everything",
          "Use Maps Manager. Open one page when you need it. Turn off live check-everything if it is on",
          "Add more color marks",
        ],
        answer: 1,
        why: "Author is a page view. Maps Manager is the book. Slow is usually too much book in the page view.",
      },
      {
        q: "kitepump only has two pages. Why write slowness causes today?",
        options: [
          "So you do not do those three things on a real shop book next month",
          "Because this pack is already slow",
          "Because completeness requires it",
        ],
        answer: 0,
        why: "The pack is the apple. The three causes are the lesson. You do not need a giant book to name them.",
      },
    ],
    quests: defaultQuests({
      learn: "Open the booklet in Maps Manager, not as one giant Author page",
      doTitle: "Write three slowness causes",
      doDone: "Three causes saved. Pack still small.",
      stress: "Pick the first move on a slow book, and why this tiny pack still teaches it",
    }),
    fieldNotePrompt:
      "What three slowness causes did you write? Paste them.",
    tomorrowHook:
      "Tomorrow: switches you should not turn on at work yet. Look. Do not flip them on the live map.",
    body: `## Slow is usually self-inflicted

kitepump is two pages. It will not crawl. A real shop book will, if you treat Author like a place to hold the whole company.

Do not open a huge booklet in Author with every tag showing. Do not validate the world on every keystroke. Do not leave every color mark and every panel on from last week.

Use **Maps Manager** for the book. Open one page when you write.

## Word today

**Slow booklet** — a big table of contents that crawls when you open too much of it in the page view.

## Watch

The profiling video. Extra color marks on a page are useful. On a 400-page book with every panel open, they add up.

## Lab

Three causes, written down. Do not import a giant book to prove a point.
`,
  },
  {
    n: 52,
    week: 8,
    title: "Switches you should not turn on at work yet",
    objective:
      "Write the Oxygen version, list any experimental switches you can see, and leave the shipping map alone.",
    minutes: 90,
    skills: ["xmlLiteracy", "review"],
    legacy: ["t6-ai"],
    youtube: [
      yt("customize", [
        "A safer custom setup vs a mystery switch",
        "That frameworks are a desk setting, not a flag to flip on a customer map",
      ]),
    ],
    sources: [S.ugEditor, S.dita13, S.documentation],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "The do-not-enable card",
      steps: [
        "Help > About. Write the Oxygen version in oxygen-bootcamp-work/week8/do-not-enable.txt.",
        "Open Options and find DITA or experimental features (verify labels). Write the names you see, or write ‘not present in this version’.",
        "Write: I will not turn on an experimental switch on a customer map. I will not add a per-chapter filter (a branch filter) to the only copy of kitepump.ditamap.",
        "If your copy of Oxygen can draft a step for you, draft one command then rewrite every word yourself. If not, write ‘not licensed — I still own the command’.",
        "Do not leave an experimental flag on. Do not save a changed Options set as the shop default.",
      ],
      failWhen:
        "You enable an experimental switch on kitepump.ditamap and leave it on, or you skip the version number.",
      expected:
        "Version recorded. Do-not-enable sentence. Any AI draft rewritten by you, or a not-licensed line.",
    },
    quiz: [
      {
        q: "An experimental switch exists in Options. When do you turn it on for a customer booklet?",
        options: [
          "This afternoon, if a lead asks",
          "You do not. Experimental means the vendor is testing. It is not a work instruction",
          "Always — new is better",
        ],
        answer: 1,
        why: "Look. Write the name. Leave it off. A customer map is not a test bed.",
      },
      {
        q: "Oxygen drafts a command for you. The file has no red error. Who owns the step?",
        options: [
          "The draft tool, because the file opens",
          "You. Valid XML can still be the wrong procedure. Rewrite every command you would ship",
          "Help > About",
        ],
        answer: 1,
        why: "A clean file can still tell a person to do the wrong thing. You own the words.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Help > About and the Options list",
      doTitle: "Write the do-not-enable card and leave the map alone",
      doDone: "Version written. Switches named or marked absent. Map unchanged.",
      stress: "Pick when to enable an experimental switch, and who owns a drafted step",
    }),
    fieldNotePrompt:
      "What version did you write down, and which switches did you see (or not see)?",
    tomorrowHook: "Tomorrow you fix a broken booklet. One error at a time. The pack is supposed to fail.",
    body: `## Look. Do not flip.

Oxygen can hide experimental switches under Options. A newer DITA version, a per-chapter filter, a draft tool that writes a command for you.

Those switches exist so vendors can test. They are not a work instruction.

A **branch filter** is a filter on one chapter of a booklet, different from the rest. Powerful. Easy to make undebuggable. You can explain it. You do not add it to the only copy of kitepump.

If a draft tool writes a step, you rewrite the command. Confirm shop policy.

## Word today

**Experimental switch** — an Options flag the vendor is still testing. Off on a customer map.

## Lab

Version. Names you saw (or ‘not present’). One hard no. Map unchanged.
`,
  },
  {
    n: 53,
    week: 8,
    title: "Fix a broken booklet, one error at a time",
    objective:
      "Copy the broken pack, quote the first completeness error, and repair that error before you touch anything else.",
    minutes: 90,
    skills: ["maps", "xmlLiteracy"],
    legacy: ["t6-xpath", "t4-complete"],
    youtube: [
      yt("completeness", [
        "The missing-file row",
        "What a missing file looks like vs a missing id",
      ]),
    ],
    sources: [S.mapsDemo, S.ugEditor],
    toolCards: ["maps-manager"],
    badgeId: "completeness-clean",
    lab: {
      pack: "kitepump-broken-map",
      title: "Repair the broken book",
      steps: [
        "Copy samples/kitepump-broken-map to oxygen-bootcamp-work/week8/broken/. Do not edit the sample in place.",
        "Open kitepump-broken.ditamap in Maps Manager. Run completeness. Write the first error exactly in oxygen-bootcamp-work/week8/first-error.txt.",
        "The pointer topics/missing-file.dita does not exist. Either restore a stub file with a matching id, or remove the topicref. Pick one and do it.",
        "If you want a lamp: the XPath toolbar searches tags. A simple search for title is enough. Write how many titles you saw. You do not need to become a programmer.",
        "Run completeness again. The check copy should be clean.",
      ],
      failWhen:
        "You edit the repo sample in place and leave it broken, or you ignore the first error and ‘clean up’ unrelated warnings.",
      expected:
        "First error quoted. Check copy completeness clean.",
    },
    quiz: [
      {
        q: "The first completeness error is a missing pointer. You should start by restyling the PDF. True or not?",
        options: [
          "True — pretty output first",
          "Not true — repair the book. The missing file is the error. Styles wait",
          "True if the cover looks wrong",
        ],
        answer: 1,
        why: "One error at a time. The first row is the job. Pretty is not this error.",
      },
      {
        q: "You copied the broken pack, then repaired the copy. Why not edit the sample in place?",
        options: [
          "So tomorrow’s class still has a pack that fails on purpose",
          "Copies are illegal",
          "Completeness only runs on copies",
        ],
        answer: 0,
        why: "The broken pack is supposed to fail. Your copy is the one you fix.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the completeness row that names a missing file",
      doTitle: "Repair the check copy until completeness is clean",
      doDone: "First error quoted. Copy clean. Sample still broken.",
      stress: "Pick the first move on a missing pointer, and why you copy first",
    }),
    fieldNotePrompt: "Quote the first completeness error you saw. One line.",
    tomorrowHook:
      "Tomorrow: a rules file that flags the same mistake twice. You may not have one yet. You can still write the rule in a sentence.",
    body: `## The broken pack is supposed to fail

\`samples/kitepump-broken-map/\` points at a file that is not there. Completeness should yell.

Copy it. Read the **first** row. Repair **that** row. Then run completeness again.

**XPath** is a search box for tags. Use it as a lamp if you want. It is not a career this week.

## Word today

**Completeness** — a check that the booklet’s pointers match real files (and that ids match). A missing file is a row, not a vibe.

## Do not

Do not restyle the PDF. Do not ‘clean up’ ten warnings before you fix the missing file. One error at a time.
`,
  },
  {
    n: 54,
    week: 8,
    title: "House rules that catch the same mistake twice",
    objective:
      "Read one house rule as a Schematron assert (or write a pretend one) and say what it flags.",
    minutes: 90,
    skills: ["oxygenUi", "review"],
    legacy: ["t6-schematron"],
    youtube: [
      yt("schematron", [
        "An assert message as a house rule",
        "A Quick Fix as a structured rewrite — only if you can say what it will change",
      ]),
    ],
    sources: [S.ugEditor, S.authorDita],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "One house rule, in your words",
      steps: [
        "If you have a Schematron file at work, open one rule. Write what it flags, in plain words, in oxygen-bootcamp-work/week8/house-rule.txt.",
        "If you do not have one, write a pretend rule and label it pretend: the short line under the title must not start with ‘This topic’.",
        "Write one sentence: Schematron is a rules file that flags the same mistake. Grammar will not catch ‘This topic’. This file can.",
        "Do not paste a long rules file from a forum into your folder and call it the shop rule.",
      ],
      failWhen:
        "You copy a long rules file from a forum as ‘the rule’, or you skip writing the rule in your own words.",
      expected:
        "One assert in your words, real or pretend. Pretend is labeled pretend.",
    },
    quiz: [
      {
        q: "A page is well-formed and valid, but the short line under the title starts with ‘This topic’. Who can flag that?",
        options: [
          "The grammar of the page type — it already blocks those words",
          "A house rules file (Schematron). Grammar will not catch wording. This file can",
          "Help > About",
        ],
        answer: 1,
        why: "Well-formed is the skeleton. Valid is the page type. House rules are extra. That is the point.",
      },
      {
        q: "A yellow bulb offers a Quick Fix on a house rule. When do you click it?",
        options: [
          "Always — bulbs are official",
          "Only when you can say what it will change",
          "Never, in any view",
        ],
        answer: 1,
        why: "Some fixes are fine. Some rewrite the page. If you cannot say what will change, Undo is cheaper.",
      },
    ],
    quests: defaultQuests({
      learn: "Find one Schematron rule, or write a pretend one and label it",
      doTitle: "Rewrite the rule in plain words",
      doDone: "One house rule in house-rule.txt. Pretend is labeled.",
      stress: "Pick what Schematron flags that grammar cannot, and when to trust a Quick Fix",
    }),
    fieldNotePrompt:
      "What house rule did you write, and was it real or pretend?",
    tomorrowHook:
      "Tomorrow is the week 8 check: make pages people can actually use. Week 9 stays locked until that day is finished.",
    body: `## The same mistake, twice

Grammar tells you a how-to may not want an explaining-page body. It does not tell you that the short line under the title should not start with “This topic”.

**Schematron** is a rules file that flags the same mistake. A shop writes the rule once. Oxygen shows it every time. That is a house rule, compiled.

If you have no file yet, write a pretend one and label it pretend. Do not paste a stranger’s 200-line file into git.

A **Quick Fix** can rewrite the page to match the rule. Click it only when you can say what will change.

## Word today

**Schematron** — a rules file that flags the same mistake. Not grammar. Not spelling. Shop wording.

## Watch

The official Schematron video. Watch the assert message. That sentence is the house rule.
`,
  },
  {
    n: 55,
    week: 8,
    title: "Make pages people can actually use",
    objective:
      "Add real alt text, keep one title, give a table a header row, and pass the quiz so week 9 can open.",
    minutes: 90,
    skills: ["ditaTopics", "review"],
    legacy: [],
    youtube: [
      yt("wysiwyg", ["The page view is not the published page"]),
      yt("schematron", ["A rule you could write later for missing alt"]),
    ],
    sources: [S.authorDita, S.ugEditor, S.learnDita],
    toolCards: ["author-mode"],
    badgeId: null,
    boss: true,
    lab: {
      pack: "kitepump-dita",
      title: "Alt, title, table header",
      steps: [
        "Copy a kitepump topic to oxygen-bootcamp-work/week8/usable/ so you do not wreck the sample.",
        "Add an image (or a figure with a placeholder) whose alt text states the teaching point, not the file name.",
        "Check titles: one title per page. The short line under the title is not a second title.",
        "If you have a simple table, give it a header row. If not, add a two-column lookup table with headers.",
        "Write in oxygen-bootcamp-work/week8/usable-note.txt: pretty Author view cannot make missing alt usable in the HTML output.",
        "Pass the quiz. You can retry it. Week 9 stays locked until this day is finished (lab + quiz + a short note).",
      ],
      failWhen:
        "Alt is empty or equals the file name, or the table has no header, or you leave the check copy broken.",
      expected:
        "Image with teaching-point alt. Table with a header. Limitation written. Check copy opens clean.",
    },
    quiz: [
      {
        q: "Pretty Author view is enough for the published page to be usable. True or not?",
        options: [
          "True — if it looks fine on your screen, it is fine",
          "Not true — the file has to carry alt text, headers, and a real title. Pretty view can hide a missing alt",
          "True for PDF only",
        ],
        answer: 1,
        why: "A screen reader reads the file, not your CSS. Alt and headers live in the page.",
      },
      {
        q: "You failed this check. Does week 9 open anyway?",
        options: [
          "Yes, the Friday page is enough",
          "No. Finish this day’s lab, quiz, and note. You can retry the quiz.",
          "Yes, if you do the 5-minute warmup",
        ],
        answer: 1,
        why: "Next week waits. Retry is free. The warmup does not open the week.",
      },
      {
        q: "The first completeness error yesterday was a missing file. First move this week?",
        options: [
          "Repair that row, then re-run the check",
          "Turn on an experimental switch",
          "Type audience=ninja so the filter is richer",
        ],
        answer: 0,
        why: "One error at a time. Same words for the same things. Switches stay off.",
      },
    ],
    quests: defaultQuests({
      learn: "Find alt text, the title, and a table header",
      doTitle: "Make one page usable: alt, one title, header row",
      doDone: "Alt is a teaching point. Table has a header. Note written.",
      stress: "Pass the quiz. Retry if you need to.",
    }),
    fieldNotePrompt:
      "What alt text did you write, and what did the table’s header row say?",
    tomorrowHook:
      "Tomorrow you meet the website team next door. Different app. Different job.",
    body: `## The content you write

**Alt text** is the words a screen reader speaks when there is a picture. Write the teaching point. Not \`image1.png\`.

Tables have **header** rows. Titles are titles. The short line under the title is not a second title.

Pretty Author view is not the published page. WebHelp will not invent alt you did not write.

This is the week boss. Fail the quiz and **week 9 stays locked**. Retry as many times as you want.

## Word today

**Alt text** — the words that stand in for a picture when a person cannot see it.

## One line about later

Next week you walk to the website team. Not today.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
