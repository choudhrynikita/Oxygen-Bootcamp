import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 56,
    week: 9,
    title: "AEM author vs publish — you are not a developer this week",
    objective:
      "Write what the author environment is for, what the publish environment is for, and why a DITA map is not an AEM page.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemHeadless", [
        "Headful Sites vs headless mentions",
        "That AEM is more than one authoring surface",
      ]),
    ],
    sources: [S.aemAuthor, S.aemCloudQs, S.aem65],
    toolCards: ["sites-console"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: author vs publish vs Oxygen",
      steps: [
        "You may not have an AEM instance. That is expected. Use official video + labeled mocks + this field log.",
        "Create oxygen-bootcamp-work/week9/field-log-56.txt with four sentences: (1) Author is where you edit pages. (2) Publish is what the site visitor hits. (3) Oxygen is Syncro Soft desktop DITA. (4) There is no product named AEM Oxygen XML Editor.",
        "Add: a campaign landing page belongs in Sites first, not in a DITA map.",
        "Sketch or paste a labeled mock: two boxes, Author | Publish. Caption: mock.",
        "Do not install AEM locally as this lab. Do not treat WKND code as an authoring exercise.",
      ],
      failWhen:
        "The log names AEM Oxygen XML Editor, or treats publish as ‘the PDF button’, or claims Guides is a Sites theme.",
      expected:
        "Four factual sentences. Mock labeled. Landing-page rule present.",
    },
    quiz: [
      {
        q: "Campaign landing pages should be written in Oxygen. True?",
        options: ["True", "False"],
        answer: 1,
        why: "v1: Landing pages belong in AEM Sites. Oxygen is structured XML topics.",
      },
      {
        q: "Author vs publish: you Quick Publish a page. What did you ask AEM to do?",
        options: [
          "Run DITA-OT",
          "Activate the page (and often its assets) to the publish environment",
          "Commit to Git",
        ],
        answer: 1,
        why: "Publish is a topology, not a transform scenario.",
      },
      {
        q: "Why are this week’s screenshots called mocks if you have no instance?",
        options: [
          "To hide Adobe UI",
          "Official UI is copyrighted; labeled mocks plus Experience League videos are the honest substitute",
          "Mocks are graded as code",
        ],
        answer: 1,
        why: "Content policy: label mocks as mocks. Do not use stock photos as product UI.",
      },
    ],
    quests: defaultQuests({
      learn: "Name author, publish, and Oxygen as three different things",
      doTitle: "Keep the four sentences honest",
      doDone: "Log written. Mock labeled. No fake product name.",
      stress: "Catch publish-as-PDF in your own draft and delete it",
    }),
    fieldNotePrompt: "When would you refuse to write a procedure as a Sites Text component?",
    tomorrowHook: "Tomorrow the Sites console — where pages live as a tree, not as a ditamap.",
    body: `## AEM as an author

v1: *AEM Author is pages, assets, fragments, and workflows. Use Sites for marketing pages, Content Fragments for headless fields, Experience Fragments for reusable layout, and AEM Guides for DITA stored in the DAM.*

This week is **Sites**. You are an author, not a developer. You will not deploy WKND as code.

## Author vs publish

**Author** is the editing environment. **Publish** is the public (or internal) live copy. Quick Publish copies selected trees. This is not DITA-OT.

## Figure

Labeled mock: two servers, author left, publish right. Caption: *Mock. Not a screenshot of a customer instance.*
`,
  },
  {
    n: 57,
    week: 9,
    title: "Sites console — the tree is not a DITA map",
    objective:
      "Name the Sites console, list three things you can do there (navigate, create, select), and refuse to call the tree a ditamap.",
    minutes: 90,
    skills: ["aemSites", "oxygenUi"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemQuick", [
        "Site creation / console context",
        "Where pages appear as a tree",
      ]),
    ],
    sources: [S.basicHandling, S.aemCloudQs, S.aemAuthor],
    toolCards: ["sites-console"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: Sites console",
      steps: [
        "Watch the official Quick site creation video. Pause on the Sites console (or closest view). Write three control names you can see.",
        "Write oxygen-bootcamp-work/week9/field-log-57.txt: Sites console is a page tree. A DITA map is a book of topics. They do not share a toolbar.",
        "List: navigate to a folder, open a page’s properties, open a page for edit — as jobs, not as guessed clicks if the UI differs. Write ‘verify in your version’ next to any guessed label.",
        "Labeled mock: left rail + card view of pages. Caption: mock.",
        "Do not draw Oxygen Maps Manager inside the mock.",
      ],
      failWhen:
        "The log calls the Sites tree a ditamap, or the mock includes Oxygen toolbars, or there are zero official-video notes.",
      expected:
        "Three control names from the video. Tree vs map sentence. Mock labeled.",
    },
    quiz: [
      {
        q: "You need to find the Kitepump landing page. First AEM surface?",
        options: [
          "DITA Maps Manager",
          "Sites console",
          "Transformation view",
        ],
        answer: 1,
        why: "Pages live in Sites. Maps live in Oxygen (or Guides).",
      },
      {
        q: "Basic Handling in Experience League is about what?",
        options: [
          "DITA conref",
          "How authors move around AEM (find, select, edit)",
          "Chemistry CSS",
        ],
        answer: 1,
        why: "S.basicHandling is the official authoring handling guide. Use it.",
      },
      {
        q: "Card view vs column view vs list view. Why care?",
        options: [
          "They are DITA topic types",
          "They are ways to see the same page tree — pick one and still know it is not a map",
          "They change publish topology",
        ],
        answer: 1,
        why: "Basic Handling. Views are views.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Sites console and what a ditamap comparison forbids",
      doTitle: "Keep the mock free of Oxygen chrome",
      doDone: "Three controls named. Mock labeled. Tree vs map written.",
      stress: "Pause the video and write a label you actually saw",
    }),
    fieldNotePrompt: "What did the Sites console show that Maps Manager never will?",
    tomorrowHook: "Tomorrow you create a page (or log the create-page wizard from video/mock) and open page properties.",
    body: `## Sites console

The **Sites** console is where page trees live. Create, copy, move, properties, publish. **Basic Handling** is the official name for this literacy.

It is not Maps Manager. Do not look for topicref or keys here.

## Figure

Labeled mock: Sites card view with a Kitepump folder. Caption: *Mock. Kitepump is the training product story, not a live Adobe demo.*
`,
  },
  {
    n: 58,
    week: 9,
    title: "Create page and page properties",
    objective:
      "Log the Create Page wizard (template + title + name) and three page properties you would actually fill for Kitepump.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemQuick", [
        "Create page or site creation flow",
        "Template choice",
      ]),
    ],
    sources: [S.aemCloudQs, S.basicHandling, S.wknd],
    toolCards: ["sites-console", "page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: create page",
      steps: [
        "From video or instance: Create Page. Note: parent folder, template, title, name (URL fragment).",
        "Write oxygen-bootcamp-work/week9/field-log-58.txt with a fake-but-honest page: title Kitepump HP-40, name kitepump-hp-40, template (write the template name you saw, or ‘standard page template — verify’).",
        "Page properties: title, description, on/off time if shown. Do not invent SEO fields you did not see.",
        "Write: the name field is not a DITA topic id, even if both are lowercase hyphens.",
        "Labeled mock: Create Page wizard. Caption: mock.",
      ],
      failWhen:
        "You treat the page name as a topicref href, or you skip template choice, or you paste WKND developer setup as the lab.",
      expected:
        "Log with parent, template, title, name. Three properties. Mock labeled.",
    },
    quiz: [
      {
        q: "Page name vs page title. Which one is the URL fragment?",
        options: [
          "Title always",
          "Name (the node name) — title is the human heading",
          "The DITA shortdesc",
        ],
        answer: 1,
        why: "Title can change for display. Name is the path. Verify labels in your AEM version.",
      },
      {
        q: "You pick a template at create time. Can you casually swap it later like a DITA topic type?",
        options: [
          "Yes, always frictionless",
          "Often no — template is a contract with the page; changing it is a lead/developer move",
          "Templates are ditavals",
        ],
        answer: 1,
        why: "Authors choose from allowed templates. They do not redesign the template this week.",
      },
      {
        q: "WKND tutorial appears in sources. Are you developing WKND today?",
        options: [
          "Yes — clone the repo",
          "No — it is a reference for what an author site can look like",
          "Yes — deploy to production",
        ],
        answer: 1,
        why: "Author week. Not a developer week.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Create Page fields: template, title, name",
      doTitle: "Keep the Kitepump page log fillable",
      doDone: "Four create fields + three properties. Mock labeled.",
      stress: "Refuse a property you did not see in video or UI",
    }),
    fieldNotePrompt: "What template name did you actually see (or explicitly mark verify)?",
    tomorrowHook: "Tomorrow Edit vs Preview — the page canvas is not Author mode, and Preview is not publish.",
    body: `## Create Page

**Create** → **Page**. Parent folder. **Template**. **Title**. **Name**. Then **Open** or **Done** (verify).

Page **Properties** hold title, tags, appearance, cloud — fill what an author is asked to fill. Do not hunt developer tabs.

## Not DITA

Lowercase hyphen names look like topic files. They are not. There is no \`concept.dtd\` here.

## Figure

Labeled mock: wizard step Template → step Title/Name. Caption: *Mock. Verify button labels on your instance.*
`,
  },
  {
    n: 59,
    week: 9,
    title: "Edit vs Preview — neither is publish, neither is Oxygen Author",
    objective:
      "Describe Edit (component chrome) vs Preview (visitor-like) and write what still requires the Sites console or a workflow.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemHeadless", [
        "Headful editing context",
        "Preview as a distinct mode if shown",
      ]),
    ],
    sources: [S.aemAuthor, S.basicHandling, S.aemMethods],
    toolCards: ["page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: Edit vs Preview",
      steps: [
        "Write oxygen-bootcamp-work/week9/field-log-59.txt: Edit shows component handles. Preview hides them so you can read the page. Preview does not activate the page to publish.",
        "Add: Oxygen Author mode is CSS for XML. Page Editor Edit mode is component chrome for AEM pages. Do not call Page Editor ‘Author mode’.",
        "List one thing you can only do in Edit (open a component dialog) and one thing Preview is for (read the layout).",
        "Labeled mock: same page, two states, Edit | Preview. Caption: mock.",
      ],
      failWhen:
        "The log says Preview publishes the page, or Page Editor is called Oxygen Author mode, or you skip the mock label.",
      expected:
        "Edit vs Preview vs Publish as three verbs. Mock labeled. Naming rule present.",
    },
    quiz: [
      {
        q: "Preview in Page Editor pushes the page live. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Preview is a view. Publish/Quick Publish is activation.",
      },
      {
        q: "Why not call Page Editor ‘Author mode’?",
        options: [
          "Adobe forbids the word author",
          "Author mode already names Oxygen’s CSS XML view — colliding names smash two products",
          "Page Editor has no editing",
        ],
        answer: 1,
        why: "Keep families distinct. Say Edit in Page Editor.",
      },
      {
        q: "You need to change the page title in properties. Are you in Edit on the canvas?",
        options: [
          "Always — titles are components only",
          "Often Page Properties from console or editor menu — not the same as a Text component",
          "In Maps Manager",
        ],
        answer: 1,
        why: "Properties vs components. Both exist.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Edit, Preview, and Publish as three verbs",
      doTitle: "Keep Page Editor from being called Author mode",
      doDone: "Log distinguishes three verbs. Mock labeled.",
      stress: "Find one UI label that collided with Oxygen in your draft and fix it",
    }),
    fieldNotePrompt: "Which verb did you mix up before this lesson — Edit, Preview, or Publish?",
    tomorrowHook: "Tomorrow components vs pages — a Text component is not a DITA concept.",
    body: `## Edit vs Preview vs Publish

**Edit** — component chrome, dialogs, insert. **Preview** — read the page without chrome. **Publish** — activate to the publish environment.

Oxygen **Author** is a different product’s mode. Do not borrow the word.

## Figure

Labeled mock: toggle Edit | Preview in Page Editor. Caption: *Mock. Not a transform scenario.*
`,
  },
  {
    n: 60,
    week: 9,
    title: "Components vs pages — do not smash DITA types into Core Components",
    objective:
      "Name page vs component, and refuse to call a Text component a concept topic.",
    minutes: 90,
    skills: ["aemSites", "ditaTopics"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemQuick", ["A page made of components if shown"]),
    ],
    sources: [S.coreComp, S.aemAuthor, S.wknd],
    toolCards: ["page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: page vs component",
      steps: [
        "Write oxygen-bootcamp-work/week9/field-log-60.txt: A page is a tree of components on a template. A DITA topic is a typed XML document. A Text component is not a concept. A Teaser is not a shortdesc.",
        "List four Core Components you will meet next week: Text, Image, Teaser, Title — awareness only today.",
        "Draw a labeled mock: page skeleton with three component boxes. Caption: mock.",
        "Write one sentence: Experience Fragments are reusable layout, not conref.",
      ],
      failWhen:
        "The log calls Text a DITA concept, or XF a conref, or the mock is unlabeled.",
      expected:
        "Page vs component vs topic vs conref distinguished. Mock labeled.",
    },
    quiz: [
      {
        q: "A Text component on a landing page is where you should paste the inflate-the-tire task. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Procedures belong in DITA tasks (Oxygen/Guides). Landing pages teaser the product; they do not become the handbook.",
      },
      {
        q: "Experience Fragment vs DITA conref. Shared idea, same implementation?",
        options: [
          "Same XML",
          "Shared idea (reuse), different system — XF is AEM layout; conref is DITA XML",
          "XF is a keydef",
        ],
        answer: 1,
        why: "v1 listed XF for reusable layout and conref for DITA. Do not smash.",
      },
      {
        q: "Core Components introduction is in sources. Are you implementing a component today?",
        options: [
          "Yes — HTL",
          "No — authors insert them; developers implement them",
          "Yes — Schematron",
        ],
        answer: 1,
        why: "Author week. Next week you use Text/Image/Teaser as an author.",
      },
    ],
    quests: defaultQuests({
      learn: "Name page, component, topic, conref as four different objects",
      doTitle: "Keep the smash-words out of the log",
      doDone: "Four-object rule written. Mock labeled.",
      stress: "Delete any sentence that calls AEM a DITA map",
    }),
    fieldNotePrompt: "What would you put on the Kitepump landing page vs in inflate-the-tire.dita?",
    tomorrowHook: "Tomorrow Quick Publish, Unpublish, and Basic Handling — the first AEM ship action.",
    body: `## Pages and components

A **page** has a template and a paragraph system of **components**. Core Components (Text, Image, Title, Teaser, Container, …) are the usual author kit.

A **DITA topic** is not a component. **conref** is not an Experience Fragment. **keyref** is not a content fragment variation — we will say that again in Week 11.

## Figure

Labeled mock: page with Title, Image, Text stacked. Caption: *Mock. Not Author mode.*
`,
  },
  {
    n: 61,
    week: 9,
    title: "Quick Publish, Unpublish, Basic Handling",
    objective:
      "Log Quick Publish vs Publish vs Unpublish, and write what you must check (references, assets) before you click.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemQuick", [
        "Going live / site creation leading to published site",
        "Any publish action shown",
      ]),
      yt("aemGlobal", ["A live site is not a local DITA-OT out/ folder"]),
    ],
    sources: [S.basicHandling, S.aemAuthor, S.aemCloudQs],
    toolCards: ["sites-console"],
    badgeId: "aem-quick-publish",
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: publish actions",
      steps: [
        "Read Basic Handling + authoring essentials on publish/unpublish (Experience League). Quote at most one sentence, then write your own.",
        "Write oxygen-bootcamp-work/week9/field-log-61.txt: Quick Publish is a short path to activate selected pages. Manage Publication / Publish may include children and later times — verify labels. Unpublish removes from the publish environment.",
        "Checklist: did I select the right page, do references/assets need to come along, is this the author environment I’m allowed to publish from?",
        "Write: this is not Apply Transformation Scenario. No out/ folder appears on your laptop.",
        "Labeled mock: Sites console with Quick Publish on a Kitepump page. Caption: mock.",
      ],
      failWhen:
        "The log treats Quick Publish as DITA-OT, or skips Unpublish, or has no checklist.",
      expected:
        "Three actions named. Checklist present. Mock labeled. Badge evidence is the checklist.",
    },
    quiz: [
      {
        q: "Quick Publish vs a DITA-OT WebHelp folder. Same button?",
        options: [
          "Yes",
          "No — AEM activation vs local transform",
          "Yes on Cloud only",
        ],
        answer: 1,
        why: "Two families. Two verbs: activate vs transform.",
      },
      {
        q: "You Quick Publish a page but the hero image 404s on publish. Likely miss?",
        options: [
          "Chemistry",
          "The image asset was not published / not referenced correctly",
          "Missing ditamap",
        ],
        answer: 1,
        why: "Assets have their own publish state. Authors check references.",
      },
      {
        q: "Unpublish means delete from author. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Unpublish affects the publish environment. Author can still hold the page.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Quick Publish, Publish, Unpublish",
      doTitle: "Keep a pre-publish checklist",
      doDone: "Checklist written. Mock labeled. Not confused with DITA-OT.",
      stress: "Add assets/references as a checklist line if you forgot it",
    }),
    fieldNotePrompt: "What would you check before Quick Publish on a page with a new image?",
    tomorrowHook: "Tomorrow is the Week 9 boss: author vs publish, console, create, Edit/Preview, Quick Publish — still mocks if no instance.",
    body: `## Publish actions

**Quick Publish** — fast activate of what you selected. **Publish / Manage Publication** — more control (tree, schedule — verify). **Unpublish** — take it off publish.

**Basic Handling** covers selecting items and using the rail. Read it. Do not memorize a 2016 screenshot.

## Not a transform

No DITA-OT log. No \`index.html\` on your laptop. A published URL on the publish host is the proof — or a field log if you have no instance.

## Figure

Labeled mock: Quick Publish confirmation. Caption: *Mock. Checklist lives in your log.*
`,
  },
  {
    n: 62,
    week: 9,
    title: "Boss — AEM author literacy without smashing Oxygen",
    objective:
      "Produce a seven-day field log that keeps Sites, Oxygen, and Guides distinct, and pass the Week 9 quiz.",
    minutes: 110,
    skills: ["aemSites", "review"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemQuick", ["Site creation recap"]),
      yt("aemHeadless", ["AEM is more than one surface recap"]),
    ],
    sources: [S.aemAuthor, S.basicHandling, S.coreComp],
    toolCards: ["sites-console", "page-editor"],
    badgeId: "aem-quick-publish",
    boss: true,
    lab: {
      pack: "aem-author-field-log",
      title: "Clinic: field logs 56–61",
      steps: [
        "Gather field-log-56 through 61 into oxygen-bootcamp-work/week9-clinic/.",
        "Grep for ‘AEM Oxygen’. Zero hits. Grep for unlabeled ‘screenshot’ claims — every figure must say mock if it is a mock.",
        "Write a one-page Kitepump plan: one landing page (Sites), one handbook (DITA in Oxygen). They share a product story, not a CMS.",
        "Timed: list the menu path for Create Page and for Quick Publish as you understand them, with ‘verify label’ notes.",
        "Day 63 still unlocks if Day 61 lab is done.",
      ],
      failWhen:
        "Logs smash AEM and Oxygen into one CMS, or Quick Publish is described as DITA-OT, or mocks are unlabeled.",
      expected:
        "Clinic folder complete. Zero fake product names. Two-surface Kitepump plan. Verify-labels present.",
    },
    quiz: [
      {
        q: "You failed this boss. Does Day 63 stay locked?",
        options: [
          "Yes, forever",
          "No, if Friday (Day 61) lab is done the next week can unlock. The boss badge stays locked until you pass.",
          "No, Daily Burst unlocks the week",
        ],
        answer: 1,
        why: "Boss badge waits. Curriculum week does not hostage you if Friday lab is done.",
      },
      {
        q: "AEM Author is not DITA. Which object is DITA this week?",
        options: [
          "The landing page Text component",
          "The kitepump handbook you still have in Oxygen",
          "Page properties",
        ],
        answer: 1,
        why: "Two surfaces, one product story. Week 12 will require both.",
      },
      {
        q: "You have no AEM instance. Can you earn aem-quick-publish?",
        options: [
          "No, impossible",
          "Yes — a field log with a real checklist plus labeled mocks plus official video notes",
          "Only with a pirated screenshot",
        ],
        answer: 1,
        why: "The pack is aem-author-field-log. Honesty over fake access.",
      },
      {
        q: "Guides stores DITA in AEM. That means the Sites console is Maps Manager. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Guides has its own editors and map console. Sites is pages. Week 12.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Sites vs Oxygen vs Guides",
      doTitle: "Keep the clinic logs unsmashed",
      doDone: "Grep clean. Two-surface plan written. Labels verified.",
      stress: "Explain Quick Publish without saying transform",
    }),
    fieldNotePrompt: "Write the two-surface Kitepump plan in four sentences.",
    tomorrowHook: "Week 10: Core Components you actually insert — Text, Image, Teaser, Title, Container — still as an author.",
    body: `## Clinic

This is a week boss. Your evidence is **field logs**, not a stolen instance.

Fail it and **Day 63 still unlocks if Day 61 lab is done**. **aem-quick-publish** waits on an honest checklist.

## Proof

1. Author ≠ publish ≠ DITA-OT.
2. Sites console ≠ Maps Manager.
3. Edit ≠ Preview ≠ Publish.
4. Page ≠ topic. Component ≠ conref.

## Figure

Folder of field logs. Caption: *aem-author-field-log pack. Mocks labeled.*
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
