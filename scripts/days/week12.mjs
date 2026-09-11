import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 76,
    week: 12,
    title: "Guides web editor vs desktop Oxygen",
    objective: "Write who lives in Guides and who still opens Oxygen, without inventing a product named AEM Oxygen XML Editor.",
    minutes: 90,
    skills: ["aemGuides", "oxygenUi"],
    legacy: ["t7-guides"],
    youtube: [yt("ditaStart", ["Desktop Maps Manager as the thing Guides will not fully replace"])],
    sources: [S.guidesOverview, S.guidesStart, S.ugEditor],
    toolCards: ["guides-web-editor", "maps-manager"],
    badgeId: null,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Who lives where",
      steps: [
        "Read samples/guides-oxygen-handoff/who-edits-where.md.",
        "Write: SMEs and review cycles → Guides web editor.",
        "Write: map surgery, Schematron, offline frameworks → Oxygen desktop.",
        "Write the forbidden name: there is no AEM Oxygen XML Editor.",
      ],
      failWhen: "You use the forbidden product name as if it were real.",
      expected: "Two homes, one forbidden name crossed out.",
    },
    quiz: [
      {
        q: "Guides is the browser DITA editor plus reviews, translation, baselines, and publishing. True?",
        options: ["True", "False"],
        answer: 0,
        why: "That is the v1 T7 sentence. SMEs should live there. Oxygen is for specialist work.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Guides vs Oxygen and the forbidden mash-up",
      doTitle: "Handoff card matches the pack",
      doDone: "Two homes written. Forbidden name refused.",
      stress: "A SME who was given desktop by mistake",
    }),
    fieldNotePrompt: "Who on your team is a SME, and where should they edit?",
    tomorrowHook: "Check-in / check-out mental model.",
    body: `## Two editors, one repository story

Guides is Adobe’s DITA CCMS in the browser. Oxygen is Syncro Soft on the desktop. Guides can launch Oxygen. They are not one product.
`,
  },
  {
    n: 77,
    week: 12,
    title: "Checkout / check-in mental model",
    objective: "Write the cycle: checkout, edit, check in — and what happens if you skip checkout.",
    minutes: 90,
    skills: ["aemGuides", "review"],
    legacy: ["t7-connector"],
    youtube: [yt("completeness", ["A book still needs a lock — different product, same idea of not clobbering"])],
    sources: [S.guidesOverview, S.editOxygen],
    toolCards: ["guides-web-editor"],
    badgeId: "checkout-checkin",
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Cycle card",
      steps: [
        "Write: checkout locks the topic so a teammate cannot overwrite you.",
        "Write: edit in Guides or, if enabled, Edit in Oxygen.",
        "Write: check in returns the lock and versions the topic in Guides.",
        "Write the failure: skip checkout, two writers, last save wins or a conflict you cannot explain.",
        "If you have Guides, complete one real cycle. If not, label this mock and still write the cycle.",
      ],
      failWhen: "You describe checkout as AEM Sites Quick Publish.",
      expected: "Four sentences. Mock labeled if no instance.",
    },
    quiz: [
      {
        q: "Checkout in Guides is the same as Preview in the Page Editor. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Checkout is a lock on a DITA object. Preview is a Sites mode.",
      },
    ],
    quests: defaultQuests({
      learn: "Name checkout and what skipping it forbids",
      doTitle: "Cycle card is complete",
      doDone: "Four sentences. No Sites mash-up.",
      stress: "Two writers, one topic, no lock",
    }),
    fieldNotePrompt: "Have you ever overwritten someone by skipping a lock? What would you do now?",
    tomorrowHook: "Edit in Oxygen as a configuration concept.",
    body: `## Lock, edit, return

You do not need a live Guides box to learn the mental model. You do need the words right.
`,
  },
  {
    n: 78,
    week: 12,
    title: "Edit in Oxygen — configuration as a concept",
    objective: "Point at the official Configure Edit in Oxygen article and write the PID/key as something an admin owns.",
    minutes: 90,
    skills: ["aemGuides", "oxygenUi"],
    legacy: ["t7-connector"],
    youtube: [yt("customize", ["Desktop frameworks must match what the server expects"])],
    sources: [S.editOxygen, S.desktop, S.guidesOverview],
    toolCards: ["guides-web-editor", "author-mode"],
    badgeId: null,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Admin owns the switch",
      steps: [
        "Open the Experience League article Configure Edit in Oxygen (Source box).",
        "Write the idea: admin enables the connector. Authors do not guess a PID on production.",
        "Copy the PID name from the v1 lesson as a question for an admin: com.adobe.fmdita.xmleditor.config.XmlEditorConfig / xmleditor.editinoxygen=true — then write ‘verify in the article for your cloud vs on-prem’.",
        "Write: keep DITA version, catalogs, and Schematron identical on server and desktop.",
      ],
      failWhen: "You paste a made-up OSGi config as if you applied it.",
      expected: "Article linked in your note. PID treated as an admin question. Parity sentence written.",
    },
    quiz: [
      {
        q: "Authors should enable Edit in Oxygen by guessing OSGi keys on prod. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Admin work. You need the concept and the official article, not a cowboy config.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the official article and what authors must not flip",
      doTitle: "Parity sentence written",
      doDone: "Admin owns the switch. Catalogs must match.",
      stress: "What breaks if Schematron differs desktop vs server",
    }),
    fieldNotePrompt: "Who would you ask to enable Edit in Oxygen?",
    tomorrowHook: "Maps and topics living on AEM.",
    body: `## Concept, not a prod change

The connector is real. Your lab is to understand it. Official article in the Source box. Verify labels and keys for cloud vs on-prem.
`,
  },
  {
    n: 79,
    week: 12,
    title: "Maps and topics living on AEM",
    objective: "Explain that Guides stores DITA in the DAM, and a desktop path is a working copy after checkout.",
    minutes: 90,
    skills: ["aemGuides", "maps"],
    legacy: [],
    youtube: [yt("maps", ["The map is still the book, wherever it lives"])],
    sources: [S.guidesOverview, S.guidesStart],
    toolCards: ["guides-web-editor", "maps-manager"],
    badgeId: null,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "DAM vs working copy",
      steps: [
        "Write: in Guides, the map is an asset in the DAM, not a desktop-only file.",
        "Write: Edit in Oxygen makes a working copy. Check in puts it back.",
        "Open kitepump.ditamap locally as the analog of that working copy. Completeness still applies.",
        "Do not upload the sample into a real DAM as a stunt.",
      ],
      failWhen: "You treat the Git repo as the AEM DAM.",
      expected: "DAM vs working copy written. Local completeness still clean.",
    },
    quiz: [
      {
        q: "Once DITA lives in AEM, completeness in Oxygen no longer matters. True?",
        options: ["True", "False"],
        answer: 1,
        why: "The book can still miss hrefs. Completeness is still a map action.",
      },
    ],
    quests: defaultQuests({
      learn: "Name DAM storage vs working copy",
      doTitle: "Local analog still complete",
      doDone: "kitepump completeness clean. No DAM stunt.",
      stress: "Two working copies, one check-in",
    }),
    fieldNotePrompt: "Where does your team’s map actually live today?",
    tomorrowHook: "Publish outputs from Guides.",
    body: `## The book still exists

Storage moved. The map is still a map. Completeness did not retire.
`,
  },
  {
    n: 80,
    week: 12,
    title: "Publish outputs from Guides",
    objective: "Contrast Guides server publish (baseline, output) with a local Oxygen WebHelp draft.",
    minutes: 90,
    skills: ["aemGuides", "publish"],
    legacy: ["t5-publish"],
    youtube: [yt("webhelp", ["Local WebHelp as a draft analog"])],
    sources: [S.guidesOverview, S.ugEditor],
    toolCards: ["transformation", "guides-web-editor"],
    badgeId: null,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Draft vs release",
      steps: [
        "Write: local Oxygen PDF/WebHelp is a draft.",
        "Write: Guides publish uses the server baseline as the release (verify wording in your shop).",
        "If you have Guides, note one output type you saw. If not, write ‘mock — AEM Guides documentation lists outputs; I did not invent a button’.",
        "Do not call Sites Quick Publish a DITA output.",
      ],
      failWhen: "Quick Publish is listed as a DITA output.",
      expected: "Draft vs release written. Sites kept out.",
    },
    quiz: [
      {
        q: "A local WebHelp from Oxygen is the release of record on a Guides shop. True?",
        options: ["True", "False — the server baseline is the release; local is a draft"],
        answer: 1,
        why: "v1 T5 sentence. Keep it.",
      },
    ],
    quests: defaultQuests({
      learn: "Name baseline as release and local as draft",
      doTitle: "Sites stays out of the DITA output list",
      doDone: "Two sentences. No Quick Publish mash-up.",
      stress: "Who clicks publish in Guides",
    }),
    fieldNotePrompt: "Who is allowed to publish DITA where you work, or ‘unknown’?",
    tomorrowHook: "Guides lab — a full mental cycle.",
    body: `## Draft vs release

Oxygen can still build WebHelp on your laptop. That is a draft. Guides owns the release if that is the CCMS. Sites Quick Publish is a different family.
`,
  },
  {
    n: 81,
    week: 12,
    title: "Guides lab — one mental cycle",
    objective: "Write a checkout → Edit in Oxygen (or Guides editor) → check-in → request publish cycle for one topic.",
    minutes: 90,
    skills: ["aemGuides", "oxygenUi"],
    legacy: ["t7-connector"],
    youtube: [yt("ditaEdit", ["The topic you would actually edit"])],
    sources: [S.guidesStart, S.editOxygen],
    toolCards: ["guides-web-editor", "author-mode"],
    badgeId: null,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Cycle on paper, or for real",
      steps: [
        "Pick prime-the-pump.dita as the object.",
        "Write the cycle with actual control names you verified, or ‘verify this label in your version’ plus the official article.",
        "If you have Guides, do the cycle once. If not, label mock and still write it.",
        "Completeness on the local analog remains clean.",
      ],
      failWhen: "The cycle includes Sites Create Page as a step.",
      expected: "A four-step cycle with no Sites page in it.",
    },
    quiz: [
      {
        q: "The Guides cycle includes Create Page in Sites. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Different family.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the four steps",
      doTitle: "Cycle has no Sites page",
      doDone: "Four steps. Mock labeled if needed.",
      stress: "Where the lock lives",
    }),
    fieldNotePrompt: "Which step would you forget under time pressure?",
    tomorrowHook: "Handoff clinic.",
    body: `## One object, one cycle

Pick a task. Walk it. Do not wander into Sites.
`,
  },
  {
    n: 82,
    week: 12,
    title: "Handoff clinic",
    objective: "Decide, for three objects, who edits in Guides vs Oxygen vs Sites.",
    minutes: 90,
    skills: ["aemGuides", "aemSites"],
    legacy: ["t7-guides"],
    youtube: [yt("aemHeadless", ["Pages and fragments — keep them off the DITA table"]), yt("maps", ["The map stays a map"])],
    sources: [S.guidesOverview, S.aemAuthor, S.editOxygen],
    toolCards: ["guides-web-editor", "sites-console"],
    badgeId: "guides-handoff",
    boss: true,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Three objects",
      steps: [
        "Object 1: kitepump.ditamap restructure → Oxygen.",
        "Object 2: SME comment on a step → Guides.",
        "Object 3: beach campaign landing page → Sites.",
        "Write the three. Fail if any two share a surface they should not.",
      ],
      failWhen: "The landing page is assigned to Oxygen or the map to Sites.",
      expected: "Three correct surfaces.",
    },
    quiz: [
      {
        q: "A campaign landing page with a hero belongs in Oxygen. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Sites. v1 T7 quiz, still true.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the three objects and surfaces",
      doTitle: "No crossed wires",
      doDone: "Three assignments. Badge-worthy if all correct.",
      stress: "The object people always put in the wrong tool",
    }),
    fieldNotePrompt: "Which object would your team mis-route?",
    tomorrowHook: "Capstone starts — one product story, two surfaces.",
    body: `## Clinic

If the map goes to Sites or the landing page goes to Oxygen, you are not done. Retry is unlimited. Week continues if Friday lab is done.
`,
  },
  {
    n: 83,
    week: 12,
    title: "Capstone — DITA publication in Oxygen",
    objective: "Ship a small valid Kitepump (or flower-docs) publication: map, keys, one reuse, completeness clean, local WebHelp or a recorded transform attempt.",
    minutes: 110,
    skills: ["maps", "reuse", "publish"],
    legacy: ["t7-capstone"],
    youtube: [yt("webhelp", ["WebHelp as the draft output"]), yt("completeness", ["Zero missing hrefs"])],
    sources: [S.mapsDemo, S.authorDita, S.ugEditor],
    toolCards: ["maps-manager", "transformation"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "DITA half of the capstone",
      steps: [
        "Map with at least six topics or a documented subset of flower-docs + kitepump. Completeness clean.",
        "One key (product name) used twice. One conkeyref or conref of a warning.",
        "One ditaval or a written reason you did not filter.",
        "WebHelp Responsive or a failed transform you then repaired (Day 40 skill).",
        "Note: local output is a draft if Guides is the release.",
      ],
      failWhen: "Completeness is dirty, or reuse is copy-paste, or you skipped the transform log.",
      expected: "Clean completeness. Key + reuse. Transform evidence.",
    },
    quiz: [
      {
        q: "Capstone DITA can skip completeness if WebHelp opened. True?",
        options: ["True", "False"],
        answer: 1,
        why: "The book can still miss topics. Completeness is the gate.",
      },
    ],
    quests: defaultQuests({
      learn: "Name completeness as the capstone gate",
      doTitle: "Keep the map complete",
      doDone: "Completeness clean. Key + reuse present.",
      stress: "First transform error, if any",
    }),
    fieldNotePrompt: "How many topics, and which warning is reused?",
    tomorrowHook: "AEM page family for the same product.",
    body: `## DITA half

This is the Oxygen proof. Six topics, reuse, completeness, a transform. Flower-docs may join kitepump. Do not replace flower-docs in the repo; copy into your work folder.
`,
  },
  {
    n: 84,
    week: 12,
    title: "Capstone — AEM page family",
    objective: "Create or mock a small page family that tells the same Kitepump story: one parent, two children, Text/Image/Teaser, no DITA dumped into Text.",
    minutes: 110,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [yt("aemQuick", ["Pages as a family"]), yt("aemHeadless", ["Components not topics"])],
    sources: [S.aemCloudQs, S.coreComp, S.wknd],
    toolCards: ["sites-console", "page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Sites half of the capstone",
      steps: [
        "Parent page: Kitepump (title). Child: Beach use. Child: Where to buy (or mock names).",
        "Core Components: Title, Text, Image with teaching-point alt, Teaser linking parent to child.",
        "Quick Publish or mock the payload. Field log filled.",
        "No DITA XML pasted into Text.",
      ],
      failWhen: "You paste a DITA task into the Text component, or the family has one orphan page with no parent.",
      expected: "Three pages (or mocks). Components used honestly. Payload written.",
    },
    quiz: [
      {
        q: "Pasting the DITA task into Text keeps the capstone ‘one story’. True?",
        options: ["True", "False — that smashes families; tell the story in page language"],
        answer: 1,
        why: "Same product, two models. Rewrite for the page. Link to the help if you must.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the page family and what Text forbids",
      doTitle: "Family exists on instance or mock",
      doDone: "Three pages. Field log filled.",
      stress: "How the Teaser points at the child",
    }),
    fieldNotePrompt: "What is the parent page title?",
    tomorrowHook: "Same product story on both surfaces — a comparison sheet.",
    body: `## Sites half

Same product. Different model. Pages, not topicrefs.
`,
  },
  {
    n: 85,
    week: 12,
    title: "Two surfaces, one story",
    objective: "Write a one-page comparison: how the DITA book and the AEM family tell the same Kitepump story, and where they must differ.",
    minutes: 90,
    skills: ["aemGuides", "aemSites", "ditaTopics"],
    legacy: ["t7-capstone"],
    youtube: [yt("aemHeadless", ["Headful page vs structured content"]), yt("ditaEdit", ["Typed topics"])],
    sources: [S.guidesOverview, S.aemAuthor, S.authorDita],
    toolCards: ["guides-web-editor", "page-editor"],
    badgeId: "two-surfaces-one-story",
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Comparison sheet",
      steps: [
        "Row: product name — key in DITA vs title on the page.",
        "Row: procedure — task vs a short page that points at help (not a fake task in Text).",
        "Row: warning — conkeyref vs a short Text warning (not a reused DITA id).",
        "Row: publish — transform/baseline vs Quick Publish.",
        "Save oxygen-bootcamp-work/week12/two-surfaces.md.",
      ],
      failWhen: "The sheet claims the two publishes are the same button.",
      expected: "Four rows. Badge if the lab is honest.",
    },
    quiz: [
      {
        q: "One story means one CMS. True?",
        options: ["True", "False — one product story, two families of tools"],
        answer: 1,
        why: "That is the point of the capstone.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the four comparison rows",
      doTitle: "Sheet exists and does not mash publishes",
      doDone: "four rows saved.",
      stress: "The row a junior always mashes",
    }),
    fieldNotePrompt: "Which row was hardest to keep distinct?",
    tomorrowHook: "Capstone review — completeness + field log.",
    body: `## One story

Kitepump on the beach. The book explains how. The site sells the beach card. They share a name, not a file format.
`,
  },
  {
    n: 86,
    week: 12,
    title: "Capstone review",
    objective: "Re-run completeness on the DITA half and re-read the AEM field log. Fix one issue on each surface.",
    minutes: 90,
    skills: ["review", "maps", "aemSites"],
    legacy: [],
    youtube: [yt("completeness", ["Last completeness read"])],
    sources: [S.mapsDemo, S.aemAuthor],
    toolCards: ["maps-manager", "sites-console"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "One fix per surface",
      steps: [
        "Completeness on the capstone map. Quote the report (zero is a valid quote).",
        "Field log: fix one missing payload or alt.",
        "Write what you would tell a teammate in two sentences — one per surface.",
      ],
      failWhen: "You skip one surface.",
      expected: "Quoted completeness. One AEM fix. Two teammate sentences.",
    },
    quiz: [
      {
        q: "Review means watching the videos again. True?",
        options: ["True", "False — review means the reports and the log"],
        answer: 1,
        why: "Evidence. Not a rewatch badge.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the two reports",
      doTitle: "Both surfaces still honest",
      doDone: "Completeness quoted. Field log patched.",
      stress: "The remaining issue you will not pretend is done",
    }),
    fieldNotePrompt: "What is still not done, in one sentence?",
    tomorrowHook: "Capstone delivery package.",
    body: `## Review is evidence

Completeness output. Field log. Two sentences. No slogans.
`,
  },
  {
    n: 87,
    week: 12,
    title: "Capstone delivery",
    objective: "Zip the DITA work folder (no out/ bloat) and export the AEM field log. List what a lead would open first.",
    minutes: 75,
    skills: ["review", "publish"],
    legacy: ["t7-capstone"],
    youtube: [yt("maps", ["The map as the first file"])],
    sources: [S.learnDita, S.aemAuthor],
    toolCards: ["maps-manager"],
    badgeId: null,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Delivery list",
      steps: [
        "List: map path, topic list, ditaval if any, transform log snippet, field-log.md, two-surfaces.md.",
        "Do not zip node_modules or 5 GB of WebHelp skins.",
        "Write the first file a lead should open (the map, then the comparison sheet).",
      ],
      failWhen: "The zip includes binaries the CONTENT_BUDGET forbids.",
      expected: "A short delivery list. First file named.",
    },
    quiz: [
      {
        q: "The lead should open the WebHelp skin CSS first. True?",
        options: ["True", "False — map, then the comparison sheet"],
        answer: 1,
        why: "The book, then the story across surfaces.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the first file",
      doTitle: "Delivery list is small",
      doDone: "List written. No bloat.",
      stress: "What you left out on purpose",
    }),
    fieldNotePrompt: "First file a lead opens?",
    tomorrowHook: "Oral exam sheet.",
    body: `## Hand it over

Small zip. Honest list. No skins, no DAM dumps.
`,
  },
  {
    n: 88,
    week: 12,
    title: "Oral exam sheet",
    objective: "Answer out loud (or in writing if you are alone) ten questions a hiring lead would actually ask.",
    minutes: 90,
    skills: ["review", "xmlLiteracy", "aemSites"],
    legacy: [],
    youtube: [yt("gettingStarted", ["Modes you must still be able to name"]), yt("aemQuick", ["Publish you must still be able to name"])],
    sources: [S.ugEditor, S.aemAuthor, S.guidesOverview],
    toolCards: [],
    badgeId: null,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Ten answers",
      steps: [
        "1. Author vs Text vs Grid.",
        "2. Well-formed vs valid.",
        "3. Map vs topic.",
        "4. keyref vs href.",
        "5. Completeness vs schema.",
        "6. Local WebHelp vs Guides baseline.",
        "7. Author vs publish (AEM).",
        "8. Page Editor vs Universal Editor vs Document Authoring.",
        "9. Guides vs Oxygen.",
        "10. Why there is no AEM Oxygen XML Editor.",
        "Write answers. Speak them if you can.",
      ],
      failWhen: "Any answer mashes families, or #10 fails.",
      expected: "Ten short answers. #10 is a hard no on the fake product name.",
    },
    quiz: [
      {
        q: "There is a product called AEM Oxygen XML Editor. True?",
        options: ["True", "False"],
        answer: 1,
        why: "If you miss this on Day 88, start Day 1.",
      },
    ],
    quests: defaultQuests({
      learn: "Name all ten prompts",
      doTitle: "Ten answers exist",
      doDone: "File saved. #10 correct.",
      stress: "The question you still hedge",
    }),
    fieldNotePrompt: "Which question did you hedge?",
    tomorrowHook: "Written scenario exam and error clinic.",
    body: `## Out loud

Short answers. Concrete verbs. No slogans.
`,
  },
  {
    n: 89,
    week: 12,
    title: "Written scenario exam and error clinic",
    objective: "Solve three scenarios (broken map, wrong CMS, failed transform) in writing.",
    minutes: 90,
    skills: ["review", "maps", "publish", "aemSites"],
    legacy: ["t4-complete", "t5-publish", "t7-aem"],
    youtube: [yt("completeness", ["Missing href"]), yt("webhelp", ["Failed transform reading"])],
    sources: [S.mapsDemo, S.aemAuthor, S.guidesOverview],
    toolCards: ["maps-manager", "transformation", "sites-console"],
    badgeId: null,
    lab: {
      pack: "kitepump-broken-map",
      title: "Three scenarios",
      steps: [
        "Scenario A: completeness names a missing href. First move?",
        "Scenario B: a PM wants the landing page written as a DITA map. What do you say?",
        "Scenario C: PDF transform failed. First place you look?",
        "Write three answers. Then repair the broken map copy if it is still broken.",
      ],
      failWhen: "Any first move is ‘reinstall Oxygen’ or ‘Quick Publish the map’.",
      expected: "Three first moves. Broken map clinic copy clean.",
    },
    quiz: [
      {
        q: "A failed PDF transform: first place you look is the Sites console. True?",
        options: ["True", "False — the transformation log, first error"],
        answer: 1,
        why: "Output oracle from the game rules, now as an exam.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the three first moves",
      doTitle: "Broken copy clean",
      doDone: "Three answers. Completeness clean.",
      stress: "The PM in scenario B",
    }),
    fieldNotePrompt: "What did you tell the PM?",
    tomorrowHook: "Portfolio export and what is not taught.",
    body: `## Exam

First moves. Then repair. No reinstall folklore.
`,
  },
  {
    n: 90,
    week: 12,
    title: "Portfolio export, skills inventory, what next",
    objective: "Export progress, list skills with evidence, and write three things this course does not teach.",
    minutes: 90,
    skills: ["review"],
    legacy: [],
    youtube: [yt("gettingStarted", ["How far you have come from first launch — evidence, not a slogan"])],
    sources: [S.learnDita, S.guidesOverview, S.coreComp],
    toolCards: [],
    badgeId: "portfolio-ready",
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Export + inventory",
      steps: [
        "Settings > Export progress + game state. Keep the JSON.",
        "List each skill with one piece of evidence (day number + artifact).",
        "Write what is not taught: specializations, DITA-OT customizing, AEM developer path (HTL, models). Listed, not taught.",
        "Write one next course you would actually take.",
      ],
      failWhen: "You claim this course made you an AEM developer, or you skip the export.",
      expected: "JSON export exists. Inventory has evidence. Three not-taught items.",
    },
    quiz: [
      {
        q: "This course taught you to customize DITA-OT plugins. True?",
        options: ["True", "False — listed as next, not taught"],
        answer: 1,
        why: "Day 90 is honest about the edge of the map.",
      },
    ],
    quests: defaultQuests({
      learn: "Name three things not taught",
      doTitle: "Export exists",
      doDone: "JSON saved. Inventory has day numbers.",
      stress: "The skill with the weakest evidence",
    }),
    fieldNotePrompt: "What will you learn next, in one line?",
    tomorrowHook: "There is no Day 91 in this pack. Add Week 13 in docs when you need it.",
    body: `## Done looks like this

You can open a DITA map in Oxygen, reuse with keys and conrefs, publish WebHelp or PDF, then switch to AEM, create and edit pages, publish, run a workflow, author a Content Fragment, and explain when Guides + Oxygen beats in-AEM web editing.

You are not a DITA-OT customizer. You are not an AEM developer. Those paths are listed, not taught.

Export your progress. Keep the evidence.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
