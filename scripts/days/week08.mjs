import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 50,
    week: 8,
    title: "Subject scheme — awareness, not a taxonomy project",
    objective: "Read a subject scheme as a controlled list of values and say when you must not invent @audience values.",
    minutes: 90,
    skills: ["reuse", "ditaTopics"],
    legacy: [],
    youtube: [yt("advProfile", ["Conditional attributes as a system, not decoration"])],
    sources: [S.authorDita, S.dita13, S.ugEditor],
    toolCards: ["attributes"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Write the allowed audience values",
      steps: [
        "Read the DITA 1.3 overview page on subject scheme (link in Source box). Quote at most two lines.",
        "List the audience values your kitepump map actually uses today (expert is already on a step).",
        "Write one invented value you will not add (e.g. ninja) and why a scheme would reject it.",
        "Do not build a full classification map this week.",
      ],
      failWhen: "You invent a 40-subject taxonomy or you skip the existing expert step.",
      expected: "A short allowed-values list plus one rejected invention.",
    },
    quiz: [
      {
        q: "A subject scheme exists so writers type any string they like in @audience. True?",
        options: ["True", "False"],
        answer: 1,
        why: "It constrains values. Awareness this week. You are not the taxonomist.",
      },
    ],
    quests: defaultQuests({
      learn: "Name subject scheme as a constraint, not a mood",
      doTitle: "Keep the value list short",
      doDone: "Existing values listed. One invention rejected.",
      stress: "What breaks if every writer invents audience",
    }),
    fieldNotePrompt: "Who on your team owns allowed profiling values?",
    tomorrowHook: "Branch filtering as an idea — not a production switch.",
    body: `## Awareness

Subject scheme binds profiling values so “expert” means one thing. You will not design the company taxonomy today. You will stop typing random audience strings.

Official DITA 1.3 overview is in the Source box. Do not paste the spec.
`,
  },
  {
    n: 51,
    week: 8,
    title: "Branch filtering — the idea, not the production switch",
    objective: "Explain branch filtering as ‘this subtree uses a different ditaval’ and refuse to turn it on in a live map you do not own.",
    minutes: 90,
    skills: ["reuse", "maps"],
    legacy: [],
    youtube: [yt("profile", ["Ditaval at map level vs a mystery flag"])],
    sources: [S.authorDita, S.dita13],
    toolCards: ["maps-manager"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Draw the subtree, do not throw the switch",
      steps: [
        "Sketch on paper: Service topichead filtered novice, Product topichead unfiltered.",
        "Write how a ditavalval on a topicref (verify the element name in your DITA version) would differ from a transform-level ditaval.",
        "Do not add ditavalref to the shipping kitepump map unless you copied it first.",
        "Record: I did not enable a DITA 1.3 feature I cannot support in review.",
      ],
      failWhen: "You push branch filtering to the only copy of the map.",
      expected: "A sketch plus a restraint sentence. Copy remains publishable without the experiment.",
    },
    quiz: [
      {
        q: "Branch filtering is required to print a PDF. True?",
        options: ["True", "False"],
        answer: 1,
        why: "A transform-level ditaval is enough for this course. Branch filtering is an idea you must be able to explain, not a switch to flip at work.",
      },
    ],
    quests: defaultQuests({
      learn: "Name branch filtering and what it forbids (surprise subtrees)",
      doTitle: "Keep the shipping map boring",
      doDone: "Sketch done. Shipping map untouched or copied.",
      stress: "Explain ditavalref vs transform ditaval in one sentence",
    }),
    fieldNotePrompt: "When would you tell a lead ‘not this release’ about branch filtering?",
    tomorrowHook: "DITA 2.0 experimental flags — what exists, what you will not enable at work.",
    body: `## Idea only

A subtree can carry its own filter. That is powerful and easy to make undebuggable. This week you can draw it. You do not owe production a ditavalref.
`,
  },
  {
    n: 52,
    week: 8,
    title: "DITA 2.0 flags and optional AI — what not to turn on at work",
    objective: "List what DITA 2.0 experimental support exists in your Oxygen, and write a hard no for production flags you cannot staff.",
    minutes: 90,
    skills: ["xmlLiteracy", "review"],
    legacy: ["t6-ai"],
    youtube: [yt("customize", ["Frameworks are safer than mystery flags"])],
    sources: [S.ugEditor, S.dita13, S.documentation],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "The do-not-enable card",
      steps: [
        "Help > About. Write the Oxygen version.",
        "Open Options and find DITA / experimental features (verify labels). Screenshot-less: write the names you see, or write ‘not present in this version’.",
        "Write: I will not enable a DITA 2.0 experimental flag on a customer map.",
        "If Oxygen AI Positron is licensed, draft a task then rewrite every cmd yourself. If not, write ‘not licensed — human still owns the cmd’.",
      ],
      failWhen: "You enable an experimental flag on kitepump.ditamap and leave it on.",
      expected: "Version recorded. Do-not-enable sentence. AI output, if any, rewritten by you.",
    },
    quiz: [
      {
        q: "Positron (or any AI draft) owns the cmd elements if the XML validates. True?",
        options: ["True", "False — a human and Schematron still own the result"],
        answer: 1,
        why: "Optional. Confirm IT policy. Valid XML can still be the wrong procedure.",
      },
    ],
    quests: defaultQuests({
      learn: "Name experimental flags as not-for-production",
      doTitle: "Shipping map has no experimental flag",
      doDone: "Do-not-enable card written. Map unchanged.",
      stress: "Who owns an AI-drafted step",
    }),
    fieldNotePrompt: "What would you say if a lead asked you to ‘just turn on DITA 2.0’ this afternoon?",
    tomorrowHook: "Troubleshooting invalid maps with the broken pack.",
    body: `## Hard no

Experimental DITA 2.0 flags exist so vendors can test. They are not a work instruction. AI Positron can draft XML. You still rewrite the cmd. Confirm IT policy.
`,
  },
  {
    n: 53,
    week: 8,
    title: "Troubleshooting invalid maps",
    objective: "Use kitepump-broken-map, read completeness, and repair the missing href without guessing.",
    minutes: 90,
    skills: ["maps", "xmlLiteracy"],
    legacy: ["t6-xpath", "t4-complete"],
    youtube: [yt("completeness", ["The missing href row", "What a missing id looks like vs a missing file"])],
    sources: [S.mapsDemo, S.ugEditor],
    toolCards: ["maps-manager"],
    badgeId: "completeness-clean",
    lab: {
      pack: "kitepump-broken-map",
      title: "Repair the broken book",
      steps: [
        "Copy samples/kitepump-broken-map to oxygen-bootcamp-work/week8/broken/.",
        "Open kitepump-broken.ditamap in Maps Manager. Run completeness. Write the first error exactly.",
        "The href topics/missing-file.dita does not exist. Either restore a stub file with a matching id or remove the topicref. Pick one and do it.",
        "XPath toolbar: list every title in the open topic (//*[contains(name(),'title')] is plenty — you need three stolen queries, not XPath 3 fluency).",
        "Completeness clean on the clinic copy.",
      ],
      failWhen: "You edit the repo sample in place and leave it broken, or you ignore the first error and ‘clean up’ unrelated warnings.",
      expected: "First error quoted. Clinic copy completeness clean.",
    },
    quiz: [
      {
        q: "The first completeness error is a missing href. You should start by restyling the PDF. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Repair the book. Styles Basket is not this error.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the completeness row that names a missing file",
      doTitle: "Clinic copy still validates as a book",
      doDone: "Completeness clean. First error quoted in the note.",
      stress: "Explain the missing file in one sentence",
    }),
    fieldNotePrompt: "Quote the first completeness error you saw.",
    tomorrowHook: "Large maps and performance — what you will not do in Author.",
    body: `## The broken pack is supposed to fail

\`samples/kitepump-broken-map/\` points at a file that is not there. Completeness should yell. Copy it. Repair the copy. XPath is a lamp, not a career.
`,
  },
  {
    n: 54,
    week: 8,
    title: "Performance with large maps, and Schematron as policy",
    objective: "Write three things that make Author crawl, and read one Schematron assert as compiled house style.",
    minutes: 90,
    skills: ["oxygenUi", "review"],
    legacy: ["t6-schematron"],
    youtube: [yt("schematron", ["An assert message as policy", "Quick Fix as a structured rewrite"])],
    sources: [S.ugEditor, S.authorDita],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Slow Author / Schematron policy card",
      steps: [
        "Write three slowness causes: huge unsplitting maps, Author CSS with full tags on a 400-topic book, validating the world on every keystroke without a scenario.",
        "If you have a Schematron, open one rule and write what it forbids. If not, write a pretend assert: shortdesc must not start with ‘This topic’ — and say it is pretend.",
        "Do not paste a vendor Schematron file into git.",
      ],
      failWhen: "You copy a 200-line Schematron from a forum as ‘the rule’.",
      expected: "Three slowness causes. One assert in your words.",
    },
    quiz: [
      {
        q: "Schematron encodes style-guide rules grammar cannot express. True?",
        options: ["True", "False"],
        answer: 0,
        why: "That is the point. Read one assert as compiled policy.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Schematron as policy, not grammar",
      doTitle: "Keep the policy card original",
      doDone: "Three slowness causes. One assert rewritten.",
      stress: "When a Quick Fix is too clever",
    }),
    fieldNotePrompt: "What house rule would you encode first if you could only have one assert?",
    tomorrowHook: "Accessibility of the content you write — alt, titles, tables.",
    body: `## Slow is usually self-inflicted

Do not open a 2,000-topic map in Author with full tags and live validate-everything. Split. Use Maps Manager. Schematron is policy. Quick Fixes only when you can explain them.
`,
  },
  {
    n: 55,
    week: 8,
    title: "Accessibility of the DITA you write",
    objective: "Fix alt text, heading order, and a table header in kitepump, and say what Author CSS cannot fake.",
    minutes: 90,
    skills: ["ditaTopics", "review"],
    legacy: [],
    youtube: [yt("wysiwyg", ["Author is CSS. Accessibility is in the XML."]), yt("schematron", ["Policy you could encode later"])],
    sources: [S.authorDita, S.ugEditor, S.learnDita],
    toolCards: ["author-mode"],
    badgeId: null,
    boss: true,
    lab: {
      pack: "kitepump-dita",
      title: "Alt, title, table header",
      steps: [
        "Add an image to a topic with alt text that states the teaching point, not ‘image1.png’.",
        "Check titles: one title per topic, shortdesc is not a second h1.",
        "If you have a simple table, give it a header row. If not, add a two-column lookup table with headers.",
        "Write: Author CSS cannot make missing alt accessible in WebHelp.",
      ],
      failWhen: "Alt is empty or equals the filename, or the table has no header.",
      expected: "Image with teaching-point alt. Table with header. CSS limitation written.",
    },
    quiz: [
      {
        q: "Pretty Author CSS is enough for output accessibility. True?",
        options: ["True", "False"],
        answer: 1,
        why: "The XML has to carry alt, headers, and titles. CSS can hide the problem in Author and still fail the output.",
      },
    ],
    quests: defaultQuests({
      learn: "Name alt and table headers as content, not chrome",
      doTitle: "Topic still validates with the image",
      doDone: "Alt is a teaching point. Table has a header.",
      stress: "What a screen reader gets from filename alt",
    }),
    fieldNotePrompt: "Which inaccessible pattern do you still see in your real job?",
    tomorrowHook: "AEM as an author — Sites is not DITA.",
    body: `## The content you write

Alt text is a teaching point. Tables have headers. Titles are titles. Author CSS is not an accessibility tree. Week 8 clinic badge waits if the lab fails. Week 9 still unlocks if Friday (Day 54) lab is done.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
