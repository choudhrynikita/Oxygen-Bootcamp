import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 63,
    week: 10,
    title: "Title and Text — type on the page, not in a DITA body",
    objective:
      "Log how an author inserts Title and Text Core Components and what each dialog forbids (HTML soup, fake headings).",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemHeadless", [
        "Headful pages still use components",
        "Content as fields vs as page layout",
      ]),
    ],
    sources: [S.coreComp, S.aemAuthor, S.wknd],
    toolCards: ["page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: Title + Text",
      steps: [
        "Read Core Components intro + Title and Text component pages on Experience League (skim, do not paste).",
        "Write oxygen-bootcamp-work/week10/field-log-63.txt: Title component is a heading with a type (h1–h6) the template allows. Text is a rich-text body. Do not fake an h1 inside Text if Title exists.",
        "Kitepump landing: one Title (Kitepump HP-40), one Text (two sentences, no pasted handbook steps).",
        "Write what the Text dialog lets you bold/list — and that this is not DITA <cmd>.",
        "Labeled mock: Title over Text. Caption: mock.",
      ],
      failWhen:
        "You paste inflate-the-tire steps into Text, or you skip heading type, or the mock is unlabeled.",
      expected:
        "Log names Title vs Text. Kitepump copy is marketing-short. Mock labeled.",
    },
    quiz: [
      {
        q: "The template already has an h1 in the page Title component. You add another h1 in Text. What goes wrong?",
        options: [
          "Nothing — more h1s help SEO always",
          "You fight the template and confuse headings",
          "AEM deletes the page",
        ],
        answer: 1,
        why: "Responsive layout without fighting the template starts with headings.",
      },
      {
        q: "Text component lists are DITA <ol> with cmd. True?",
        options: ["True", "False"],
        answer: 1,
        why: "HTML-ish rich text in a component. Not a task model.",
      },
      {
        q: "Where do the inflate steps still live?",
        options: [
          "In the Text component",
          "In inflate-the-tire.dita",
          "In page properties",
        ],
        answer: 1,
        why: "Two surfaces, one story. Handbook stays DITA.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Title vs Text and what a fake h1 forbids",
      doTitle: "Keep Kitepump Text to two marketing sentences",
      doDone: "Log written. Mock labeled. No handbook paste.",
      stress: "Delete a pasted step if you added one",
    }),
    fieldNotePrompt: "What heading type did the Title component offer in the docs/video?",
    tomorrowHook: "Tomorrow Image — alt text again, now in an AEM dialog, plus the Assets idea.",
    body: `## Title and Text

Core Components **Title** and **Text** are the daily desk. Title is a heading. Text is body copy for the **page**.

Do not paste the DITA handbook into Text. Do not fight the template’s heading.

## Figure

Labeled mock: Title (h1) + Text. Caption: *Mock. Page Editor Edit state.*
`,
  },
  {
    n: 64,
    week: 10,
    title: "Image component — alt in the dialog, asset from DAM",
    objective:
      "Log how an author places an Image Core Component, fills alt, and why the file lives in Assets, not on the desktop.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemGlobal", [
        "Images on a real site",
        "Assets as a separate concern if shown",
      ]),
    ],
    sources: [S.coreComp, S.assets, S.aemAuthor],
    toolCards: ["page-editor", "assets-console"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: Image + alt",
      steps: [
        "Read Image Core Component + Assets basic operations (skim).",
        "Write oxygen-bootcamp-work/week10/field-log-64.txt: pick from Assets (DAM), set alt in the component (or from asset metadata — write which the docs say wins), do not upload a random desktop PNG as the long-term source if the desk uses Assets.",
        "Kitepump: alt phrase ‘Kitepump HP-40 floor pump, upright, gauge visible’ — not kitepump.png.",
        "Write: DITA image alt and AEM image alt are the same job on two surfaces. Both can fail.",
        "Labeled mock: Image component dialog with Alt text field. Caption: mock.",
      ],
      failWhen:
        "Alt is the filename, or the log says images live only on the author’s laptop, or Assets is called Maps Manager.",
      expected:
        "Alt phrase written. Assets named as source. Mock labeled.",
    },
    quiz: [
      {
        q: "Asset unpublished, page published. Visitor sees?",
        options: [
          "The desktop PNG",
          "Often a broken image — publish the asset too",
          "The DITA image automatically",
        ],
        answer: 1,
        why: "Assets have publish state. Week 9 checklist.",
      },
      {
        q: "Decorative image. Empty alt vs missing alt?",
        options: [
          "Same",
          "Empty can be a decision; missing is a defect — confirm how the Image component represents decorative",
          "AEM forbids decorative images",
        ],
        answer: 1,
        why: "Same literacy as DITA. Confirm the dialog.",
      },
      {
        q: "You crop in the Image component. Did you change the DAM original?",
        options: [
          "Always",
          "Usually a rendition/crop on the page; the DAM file may stay — verify, do not assume",
          "Never in any version",
        ],
        answer: 1,
        why: "Authors should not assume they destroyed the master. Check the desk.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Image alt and Assets as the source",
      doTitle: "Keep alt as a phrase",
      doDone: "Phrase written. Mock labeled. Filename-alt refused.",
      stress: "Add ‘publish the asset’ to your checklist if missing",
    }),
    fieldNotePrompt: "Write the exact alt string you would ship for the hero image.",
    tomorrowHook: "Tomorrow Teaser — a card that points somewhere, not a dumped paragraph.",
    body: `## Image

Core Component **Image** points at **Assets**. Alt is a phrase. Publish the asset.

This is the same alt discipline as Week 2, on a different dialog.

## Figure

Labeled mock: Image dialog, Alt text filled. Caption: *Mock. Not a DITA image element.*
`,
  },
  {
    n: 65,
    week: 10,
    title: "Teaser — a card with a destination",
    objective:
      "Log a Teaser’s title, description, image, and link, and refuse to paste a full task into the description.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemQuick", ["Cards / teasers on a generated site if shown"]),
    ],
    sources: [S.coreComp, S.wknd, S.aemAuthor],
    toolCards: ["page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: one Kitepump teaser",
      steps: [
        "Read Teaser Core Component docs (skim).",
        "Write oxygen-bootcamp-work/week10/field-log-65.txt for a teaser: title Inflate in three steps, description one sentence, link to a how-to page (or a future Guides URL — write ‘page that does not exist yet’ if needed). Image alt phrase.",
        "Write: teaser description is not the task. The task stays in DITA.",
        "If the teaser can inherit from the target page, note that. Do not invent fields you did not see.",
        "Labeled mock: teaser card. Caption: mock.",
      ],
      failWhen:
        "Description contains three cmds, or the teaser has no destination, or the mock is unlabeled.",
      expected:
        "One teaser spec with title, one-sentence description, link, alt. Mock labeled.",
    },
    quiz: [
      {
        q: "A Teaser is a DITA shortdesc. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Similar job (lure + pointer), different system. Do not smash names.",
      },
      {
        q: "Teaser links to the DITA WebHelp on your laptop out/ folder. Verdict?",
        options: [
          "Fine for production",
          "Refuse — production links to published URLs (Sites or Guides), not a laptop path",
          "Fine if the path is absolute",
        ],
        answer: 1,
        why: "Draft transforms are not the live site.",
      },
      {
        q: "Empty link on a teaser that looks clickable. Problem?",
        options: [
          "None",
          "A fake affordance — pick a page or do not use Teaser",
          "AEM fills it at publish",
        ],
        answer: 1,
        why: "Cards that do not go anywhere train people to ignore cards.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Teaser fields and what a dumped task forbids",
      doTitle: "Keep the description to one sentence",
      doDone: "Teaser spec complete. Mock labeled.",
      stress: "Remove cmd-like verbs from the description",
    }),
    fieldNotePrompt: "Where should the teaser’s link go in a real desk — a Sites how-to, or a Guides topic URL?",
    tomorrowHook: "Tomorrow Container and responsive layout — you will not fight the template grid.",
    body: `## Teaser

A **Teaser** is a card: image, title, short text, link. It points. It does not contain the procedure.

Kitepump landing can tease Care. The steps stay in the handbook.

## Figure

Labeled mock: three teaser cards in a row. Caption: *Mock. Destinations are pages, not out/index.html.*
`,
  },
  {
    n: 66,
    week: 10,
    title: "Container and responsive layout — do not fight the template",
    objective:
      "Log Container as a layout wrapper and write two layout fights you will refuse (nested containers for fun, breaking the grid).",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemGlobal", [
        "A global site layout that already works",
        "What authors should not restyle",
      ]),
    ],
    sources: [S.coreComp, S.aemAuthor, S.wknd],
    toolCards: ["page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: Container without a fight",
      steps: [
        "Read Container Core Component (skim): layout, columns if offered, background.",
        "Write oxygen-bootcamp-work/week10/field-log-66.txt: I will put Title, Image, Text, Teaser in the template’s containers. I will not add five nested containers to ‘center’ a button.",
        "Write two refuses: (1) paste tables as layout, (2) set odd widths that break mobile. Responsive is the template’s job first.",
        "Kitepump landing skeleton: hero (Title+Image+Text) then a Container of teasers. That is enough.",
        "Labeled mock: simple stacked layout. Caption: mock. Not a designer portfolio.",
      ],
      failWhen:
        "The log proposes nested containers as the craft, or you redesign the template in CSS, or you smash this with Oxygen Author CSS.",
      expected:
        "Skeleton written. Two refuses. Mock labeled. No template fight.",
    },
    quiz: [
      {
        q: "The page looks off-center. First move as a junior author?",
        options: [
          "Add nested Containers until it looks Word-like",
          "Check you are in the template’s intended container; ask a lead before custom layout",
          "Paste a CALS table",
        ],
        answer: 1,
        why: "Responsive layout without fighting the template.",
      },
      {
        q: "Oxygen Hints CSS vs AEM Container. Same control?",
        options: [
          "Yes",
          "No — different products, different layout systems",
          "Yes on Cloud",
        ],
        answer: 1,
        why: "Do not smash.",
      },
      {
        q: "Container can be a grid of teasers. When is that OK?",
        options: [
          "Never",
          "When the template/component offers that layout — you fill it, you do not invent a new grid system",
          "Only with DITA maps",
        ],
        answer: 1,
        why: "Use offered layout. Do not invent one.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Container and two layout fights you refuse",
      doTitle: "Keep the Kitepump skeleton simple",
      doDone: "Skeleton + two refuses. Mock labeled.",
      stress: "Remove one extra wrapper from your sketch",
    }),
    fieldNotePrompt: "What layout request would you bounce to a developer instead of nesting containers?",
    tomorrowHook: "Tomorrow Experience Fragments as reusable layout — awareness, not a conref clone.",
    body: `## Container

**Container** groups components. Templates already have them. Authors fill them. Nested containers as a hobby break mobile.

Responsive layout is **not** a junior-author CSS course. Same spirit as Styles Basket: awareness, don’t fork.

## Figure

Labeled mock: one hero, one container of three teasers. Caption: *Mock. Simple on purpose.*
`,
  },
  {
    n: 67,
    week: 10,
    title: "Experience Fragment awareness — reusable layout, not conref",
    objective:
      "Explain XF as an AEM reusable layout chunk and write when you would still use a Core Component instead.",
    minutes: 90,
    skills: ["aemSites", "reuse"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemHeadless", [
        "Fragments in the AEM family if mentioned",
        "Headless vs page layout",
      ]),
    ],
    sources: [S.aemAuthor, S.coreComp, S.aemMethods],
    toolCards: ["page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: XF vs conref vs CF",
      steps: [
        "Write oxygen-bootcamp-work/week10/field-log-67.txt: Experience Fragment = reusable page layout (header promo, footer strip). Content Fragment = structured fields for headless/other (Week 11). conref = DITA XML reuse.",
        "Kitepump: a promo XF ‘Shop HP-40’ could appear on two pages. The pinch warning stays a DITA conkeyref.",
        "Write when you would refuse XF: a one-off sentence, or a procedure.",
        "Labeled mock: two pages sharing a promo strip. Caption: mock. Not a conref arrow.",
      ],
      failWhen:
        "The log says XF is conref, or CF is XF, or a procedure is placed in an XF as the handbook.",
      expected:
        "Three-way distinction written. One Kitepump XF idea. One refuse. Mock labeled.",
    },
    quiz: [
      {
        q: "Reuse the pinch warning on two AEM pages via XF. Verdict?",
        options: [
          "Perfect — XF is conref",
          "Wrong surface — that sentence is DITA; pages should link to the handbook or paraphrase without pretending to be the warning library",
          "Perfect — also keyref it",
        ],
        answer: 1,
        why: "Safety library stays DITA. XF is layout.",
      },
      {
        q: "A header used on 40 pages. XF or copy-paste components?",
        options: [
          "Copy-paste",
          "XF (or the template) — layout reuse is the point",
          "A DITA map",
        ],
        answer: 1,
        why: "That is the XF/template job.",
      },
      {
        q: "Content Fragments are this afternoon’s lab. True?",
        options: ["True", "False — Week 11"],
        answer: 1,
        why: "Awareness of the name so you do not mix it with XF today.",
      },
    ],
    quests: defaultQuests({
      learn: "Name XF vs CF vs conref",
      doTitle: "Keep the pinch warning out of the XF",
      doDone: "Three-way note written. Mock labeled.",
      stress: "Refuse one smash synonym in your draft",
    }),
    fieldNotePrompt: "What layout chunk on Kitepump would actually deserve an XF?",
    tomorrowHook: "Tomorrow annotations, versions, restore — author-level history, not Git.",
    body: `## Experience Fragments

v1: *Experience Fragments for reusable layout.* They are AEM. They are not \`conref\`. They are not Content Fragments.

Use them for a promo strip you would otherwise copy from page to page. Do not store the handbook there.

## Figure

Labeled mock: shared promo strip. Caption: *Mock. Layout reuse, not XML reuse.*
`,
  },
  {
    n: 68,
    week: 10,
    title: "Annotations, versions, restore — author-level history",
    objective:
      "Log how an author annotates a page, creates a version, and restores — and write how this is not Git and not DITA Track Changes.",
    minutes: 90,
    skills: ["aemSites", "review"],
    legacy: ["t7-aem", "t4-review"],
    youtube: [
      yt("aemGlobal", ["A live site that still needs review discipline"]),
    ],
    sources: [S.aemAuthor, S.basicHandling, S.aem65],
    toolCards: ["page-editor", "review"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: annotate and restore",
      steps: [
        "Read Experience League on annotations and page versions (authoring). Write oxygen-bootcamp-work/week10/field-log-68.txt with the menu names you saw (verify labels).",
        "Three verbs: annotate (comment on the page), version (snapshot), restore (roll back the page).",
        "Write: this is not Git. This is not Oxygen Track Changes. This is not Guides review. Pick a channel for the page.",
        "Kitepump: you would version before a campaign swap, not after a panic.",
        "Labeled mock: timeline of versions. Caption: mock.",
      ],
      failWhen:
        "The log says restore is Git revert, or annotations are DITA comments, or you mix three review channels on the landing page.",
      expected:
        "Three verbs with official-ish names. Channel rule. Mock labeled.",
    },
    quiz: [
      {
        q: "You restored a page version. Did that unpublish automatically?",
        options: [
          "Always",
          "Not necessarily — restore is author-side; you may still need to publish",
          "Restore is publish",
        ],
        answer: 1,
        why: "Author vs publish still applies. Verify on your instance.",
      },
      {
        q: "Annotations vs XF vs DITA comments. Why pick one for the landing page?",
        options: [
          "They merge",
          "Split channels hide the decision",
          "AEM forbids annotations if DITA exists",
        ],
        answer: 1,
        why: "Same mix rule as Week 7, now on a page.",
      },
      {
        q: "Version before a teaser swap. Why?",
        options: [
          "AEM requires versions hourly",
          "Restore needs a snapshot; panic has none",
          "Versions replace backups of Assets",
        ],
        answer: 1,
        why: "Author-level insurance.",
      },
    ],
    quests: defaultQuests({
      learn: "Name annotate, version, restore as AEM page verbs",
      doTitle: "Keep Git and Track Changes out of the page channel",
      doDone: "Three verbs logged. Channel rule written. Mock labeled.",
      stress: "Add ‘publish after restore?’ as a question in the log",
    }),
    fieldNotePrompt: "When would you refuse to restore without talking to the last editor?",
    tomorrowHook: "Tomorrow workflows at author level and the Week 10 boss — a Core Components desk you can name.",
    body: `## History on the page

**Annotations** are page comments. **Versions** are snapshots of the page. **Restore** rolls back the page on author.

Not Git. Not Track Changes. Not Fusion. If the landing page is in AEM, review it in AEM.

## Figure

Labeled mock: version list with Restore. Caption: *Mock. Verify the Timewarp/versions label in your version.*
`,
  },
  {
    n: 69,
    week: 10,
    title: "Boss — Core Components desk and a workflow you can name",
    objective:
      "Name Text, Image, Teaser, Title, Container, XF awareness, plus one author workflow, without fighting the template.",
    minutes: 110,
    skills: ["aemSites", "review"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemHeadless", ["Surfaces recap"]),
      yt("aemGlobal", ["A finished site recap"]),
    ],
    sources: [S.coreComp, S.aemAuthor, S.basicHandling],
    toolCards: ["page-editor", "sites-console"],
    badgeId: "core-components-desk",
    boss: true,
    lab: {
      pack: "aem-author-field-log",
      title: "Clinic: landing skeleton + workflow",
      steps: [
        "Gather field-log-63 through 68. Add field-log-69.txt: Kitepump landing skeleton (Title, Image+alt, Text, Container of Teasers, optional XF promo). Two refuses (no handbook paste, no nested-container hobby).",
        "Read a page-workflow topic on Experience League (request activation, or the workflow your docs show). Write the workflow name and who starts it. If your desk uses only Quick Publish, write that as the honest workflow.",
        "Grep clinic folder for conref=XF or ‘Author mode’ meaning Page Editor. Fix hits.",
        "Labeled mock: the landing skeleton. Caption: mock.",
        "Day 70 still unlocks if Day 68 lab is done.",
      ],
      failWhen:
        "Skeleton missing a component you claimed, or workflow unnamed, or smash-words remain, or mocks unlabeled.",
      expected:
        "Skeleton + workflow name. Grep clean. Badge evidence is the named desk kit.",
    },
    quiz: [
      {
        q: "You failed this boss. Does Day 70 stay locked?",
        options: [
          "Yes, forever",
          "No, if Friday (Day 68) lab is done the next week can unlock. The boss badge stays locked until you pass.",
          "No, Daily Burst unlocks the week",
        ],
        answer: 1,
        why: "Boss badge waits.",
      },
      {
        q: "core-components-desk means you implemented HTL. True?",
        options: ["True", "False"],
        answer: 1,
        why: "It means you can name and use the author kit. Developers implement.",
      },
      {
        q: "A workflow ‘Request for Activation’ vs Quick Publish. Why name yours?",
        options: [
          "Trivia",
          "Some desks forbid Quick Publish; the runbook name is the craft",
          "Workflows are DITA-OT",
        ],
        answer: 1,
        why: "Author-level workflows. Name the one you would actually click.",
      },
      {
        q: "Restore then Quick Publish without looking. Risk?",
        options: [
          "None",
          "You may ship an old hero or unpublish-needed asset state you did not check",
          "AEM blocks it always",
        ],
        answer: 1,
        why: "Checklist still applies.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the Core Components kit and one workflow",
      doTitle: "Keep the landing skeleton honest",
      doDone: "Skeleton + workflow + grep clean. Mock labeled.",
      stress: "Refuse template fighting in one sentence",
    }),
    fieldNotePrompt: "List the components on the Kitepump landing and the workflow that would ship it.",
    tomorrowHook: "Week 11: Universal Editor vs Page Editor vs Document Authoring, Content Fragments, Assets, language copies.",
    body: `## Clinic

This is a week boss. **core-components-desk** is a named kit: Title, Text, Image, Teaser, Container, XF awareness — plus a workflow name.

Fail it and **Day 70 still unlocks if Day 68 lab is done**.

## Proof

1. Landing skeleton without handbook paste.
2. Alt phrases.
3. No layout hobby.
4. One workflow or an honest Quick Publish.

## Figure

Labeled mock of the landing. Caption: *Mock. Same product story as kitepump-dita, different surface.*
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
