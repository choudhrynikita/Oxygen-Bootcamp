import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 70,
    week: 11,
    title: "Three AEM authoring methods — names first",
    objective: "Name Page Editor, Universal Editor, and Document Authoring, and refuse to pick a favourite without a use.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: [],
    youtube: [yt("aemGlobal", ["Document-based authoring", "Universal Editor WYSIWYG"])],
    sources: [S.aemMethods, S.docAuth, S.aemCloudQs],
    toolCards: ["page-editor", "universal-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Three names, three one-liners",
      steps: [
        "Page Editor: in-place components on an AEM template (what you used in Week 10).",
        "Universal Editor: visual editing of instrumented pages, including cases that are not classic Page Editor.",
        "Document Authoring: Word/Google-doc based flow with a sidekick (verify current name).",
        "Write all three. Label mocks if you have no instance.",
      ],
      failWhen: "You merge all three into ‘the AEM editor’.",
      expected: "Three one-liners. Three names.",
    },
    quiz: [
      {
        q: "Document Authoring is how you edit DITA in Oxygen. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Document Authoring is an AEM Sites method. Oxygen is Syncro Soft XML.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the three methods",
      doTitle: "Keep the one-liners unmixed",
      doDone: "Three names in the field log.",
      stress: "Which one your shop actually has",
    }),
    fieldNotePrompt: "Which of the three exists on your project, or ‘unknown / mock’?",
    tomorrowHook: "When each method is used.",
    body: `## Methods stay distinct

Experience League’s authoring methods article is the source. Do not smash them into one CMS blur. Do not smash them with Oxygen.
`,
  },
  {
    n: 71,
    week: 11,
    title: "When each authoring method is used",
    objective: "Match a job to a method: classic templated page, instrumented headless/visual, doc-based marketing page.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: [],
    youtube: [yt("aemGlobal", ["When document-based is the point"]), yt("aemHeadless", ["When visual/headless authoring shows up"])],
    sources: [S.aemMethods, S.docAuth],
    toolCards: ["universal-editor", "page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Job → method table",
      steps: [
        "Job: WKND-style page with Core Components → Page Editor.",
        "Job: instrumented app/page that Universal Editor is wired for → Universal Editor.",
        "Job: marketers in Word/Google Docs → Document Authoring.",
        "Job: DITA procedure → Oxygen or Guides, not these three.",
        "Write the table in the field log.",
      ],
      failWhen: "DITA procedure is assigned to Document Authoring as if it were DITA.",
      expected: "Four rows. DITA stays off the Sites methods.",
    },
    quiz: [
      {
        q: "Universal Editor replaces AEM Guides. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Guides is DITA on AEM. Universal Editor is a Sites/visual method.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the matching rule and what it forbids",
      doTitle: "Table has four honest rows",
      doDone: "DITA is not a Sites method.",
      stress: "A marketer who wants Word — which method",
    }),
    fieldNotePrompt: "Which job on your team is currently using the wrong method?",
    tomorrowHook: "Content Fragments for headless authors.",
    body: `## Match the job

If you only remember one thing: DITA does not become Document Authoring because both use the word document.
`,
  },
  {
    n: 72,
    week: 11,
    title: "Content Fragments for headless authors",
    objective: "Open or mock a Content Fragment model and write three fields. It is not a page and not a DITA reference.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: [],
    youtube: [yt("aemHeadless", ["Content Fragment model builder", "Fragment vs page"])],
    sources: [S.aemMethods, S.aemCloudQs],
    toolCards: ["content-fragment"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Three fields, no page tree",
      steps: [
        "On instance: open a Content Fragment (WKND has them). Write the model name and three fields.",
        "On mock: invent nothing pretty — write ‘model: Kitepump spec (mock) / fields: name, pressure, valve’ and label mock.",
        "Write: this is not an Experience Fragment and not a DITA reference topic.",
      ],
      failWhen: "You edit the fragment as if it were a Sites page layout.",
      expected: "Three fields. Two ‘is not’ sentences.",
    },
    quiz: [
      {
        q: "A Content Fragment is a DITA reference stored in AEM. True?",
        options: ["True", "False"],
        answer: 1,
        why: "CF is a headless content model. DITA reference is XML in Oxygen/Guides.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Content Fragment and what it forbids (page layout)",
      doTitle: "Three fields written",
      doDone: "Model name + fields + two is-nots.",
      stress: "Who consumes the fragment",
    }),
    fieldNotePrompt: "Who reads this fragment — a page, an app, both, or unknown?",
    tomorrowHook: "Assets: upload, move, metadata.",
    body: `## Fragments without a page

Structured fields. Headless authors live here. Do not decorate it like a landing page.
`,
  },
  {
    n: 73,
    week: 11,
    title: "Assets — upload, move, basic metadata",
    objective: "Upload or mock an image, set a title and description, and write the move path.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: [],
    youtube: [yt("aemQuick", ["Authoring adjacent to assets"])],
    sources: [S.assets, S.basicHandling],
    toolCards: ["assets-console"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "One asset, honest metadata",
      steps: [
        "On instance: Assets > upload a small photo you own or a public-domain beach photo. Title. Description. Do not steal a vendor screenshot.",
        "Move it to a folder you are allowed to use. Write the path.",
        "On mock: write the path you would use: /content/dam/kitepump/beach-card.jpg (mock).",
        "Write: DAM path is not a DITA image href, though Guides may store DITA images in DAM later.",
      ],
      failWhen: "You commit a 20 MB photo to git, or you paste a copyrighted Adobe screenshot.",
      expected: "Path + title + description. Git stays small.",
    },
    quiz: [
      {
        q: "You should commit the DAM binary into this Git repo. True?",
        options: ["True", "False"],
        answer: 1,
        why: "CONTENT_BUDGET.md. Assets live in AEM or object storage, not this git tree.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Assets console and what git forbids",
      doTitle: "Metadata is filled",
      doDone: "Path written. No binary in git.",
      stress: "Move vs copy on a live DAM",
    }),
    fieldNotePrompt: "What title did you give the asset?",
    tomorrowHook: "Language copies at awareness level.",
    body: `## Assets

Upload, move, basic metadata. Experience League Assets basic operations is the source. No vendor PDFs in git.
`,
  },
  {
    n: 74,
    week: 11,
    title: "Language copies — awareness",
    objective: "Explain a language copy as a Sites mechanism, not a DITA ditaval, and write who owns translation on your team.",
    minutes: 75,
    skills: ["aemSites"],
    legacy: [],
    youtube: [yt("aemGlobal", ["MSM / language and translation as a workflow"])],
    sources: [S.aemAuthor, S.aemMethods],
    toolCards: ["sites-console"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Language copy vs ditaval",
      steps: [
        "Write: language copy / MSM (verify current name) copies a page tree for another language.",
        "Write: ditaval filters a DITA book. It is not a language copy.",
        "Write who owns translation: a team name or ‘unknown — awareness only’.",
        "Do not create a language copy on a production tree you do not own.",
      ],
      failWhen: "You run MSM on a live site as a lab stunt.",
      expected: "Two distinctions + owner line. No production stunt.",
    },
    quiz: [
      {
        q: "A ditaval is how AEM copies English pages into French. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Ditaval is DITA filtering. Language copies are Sites.",
      },
    ],
    quests: defaultQuests({
      learn: "Name language copy and what ditaval is not",
      doTitle: "Owner line written",
      doDone: "No production copy created.",
      stress: "Who would be angry if you copied live",
    }),
    fieldNotePrompt: "Who owns translation, or ‘unknown’?",
    tomorrowHook: "Authoring methods clinic.",
    body: `## Awareness only

You can explain language copies. You do not perform them on someone else’s live tree for a badge.
`,
  },
  {
    n: 75,
    week: 11,
    title: "Authoring methods clinic",
    objective: "Given four jobs, pick the method, and fail the one that is secretly DITA.",
    minutes: 90,
    skills: ["aemSites", "aemGuides"],
    legacy: [],
    youtube: [yt("aemGlobal", ["Methods in one sitting"]), yt("aemHeadless", ["Fragments vs pages"])],
    sources: [S.aemMethods, S.guidesOverview, S.coreComp],
    toolCards: ["page-editor", "universal-editor", "content-fragment"],
    badgeId: null,
    boss: true,
    lab: {
      pack: "aem-author-field-log",
      title: "Four jobs",
      steps: [
        "Job A: hero + teaser on a templated site page → Page Editor.",
        "Job B: marketers in Google Docs → Document Authoring.",
        "Job C: product fields for an app → Content Fragment.",
        "Job D: 12-step pump prime with conkeyref → Oxygen / Guides, not Sites.",
        "Write the four answers. The clinic fails if Job D goes to Sites.",
      ],
      failWhen: "Job D is assigned to Page Editor or Document Authoring.",
      expected: "Four correct assignments. Job D stays DITA.",
    },
    quiz: [
      {
        q: "If the boss quiz is failed, Week 12 stays locked forever. True?",
        options: ["True", "False — Friday lab can unlock; badge waits"],
        answer: 1,
        why: "Same rule all course.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the four jobs",
      doTitle: "Job D stays DITA",
      doDone: "Four assignments written.",
      stress: "Why Job D is not Document Authoring",
    }),
    fieldNotePrompt: "Which job would your current team mis-assign?",
    tomorrowHook: "Guides web editor vs desktop Oxygen.",
    body: `## Clinic

If you put DITA in Document Authoring because both say document, start this week over. Families stay distinct.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
