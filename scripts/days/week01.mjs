import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 1,
    week: 1,
    title: "Structured authoring sits next to WYSIWYG",
    objective:
      "Tell a teammate why a DITA topic in Oxygen and an AEM page in Sites can both be right — and what you must not mix.",
    minutes: 90,
    skills: ["xmlLiteracy", "aemSites"],
    legacy: ["t0-what"],
    youtube: [
      yt("gettingStarted", [
        "How the presenter names Oxygen XML Editor (Syncro Soft)",
        "The four editing modes on the editor stack",
      ]),
    ],
    sources: [S.ugEditor, S.aemAuthor, S.documentation],
    toolCards: [],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Four sentences, four surfaces",
      steps: [
        "Open a notes file (plain text is fine).",
        "Write one sentence: what Oxygen XML Editor is for (desktop XML / DITA).",
        "Write one sentence: what AEM Sites Page Editor is for (pages, components).",
        "Write one sentence: what AEM Guides is for (DITA in the AEM repository).",
        "Write one sentence: what you will not call this stack (there is no product named AEM Oxygen XML Editor).",
        "Save the note in oxygen-bootcamp-work/day-01-surfaces.txt.",
      ],
      failWhen: "Any sentence names a product 'AEM Oxygen XML Editor' or treats Guides as a theme for Sites.",
      expected: "Four factual sentences. No invented product name.",
    },
    quiz: [
      {
        q: "A campaign landing page with a hero image and form belongs where first?",
        options: [
          "A DITA map in Oxygen",
          "AEM Sites (Page Editor or Universal Editor)",
          "A Schematron file",
        ],
        answer: 1,
        why: "Landing pages are Sites work. Oxygen is for structured XML topics, not marketing page layout.",
      },
      {
        q: "AEM Guides can launch desktop Oxygen. That means Adobe ships Oxygen. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Oxygen is Syncro Soft. Guides can open it through a connector. The products stay distinct.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the three surfaces and what each forbids",
      doTitle: "Keep the four-sentence note honest",
      doDone: "The note has four sentences and zero invented product names.",
      stress: "Catch the fake product name",
    }),
    fieldNotePrompt: "In one sentence, when would you refuse to write a procedure as a Sites Text component?",
    tomorrowHook: "Tomorrow you install Oxygen XML Author and learn Author vs Text vs Grid by touching the same sentence in each.",
    body: `## Sit next to this

You will use two families of tools on one team.

**Oxygen XML Author / Editor / Web Author** is a Syncro Soft desktop (and browser) suite for XML. Writers live in Author mode. Developers live in Text mode. You validate, reuse, and publish DITA from here.

**AEM authoring** is Adobe. Sites, Page Editor, Universal Editor, Document Authoring, Assets, Content Fragments, and **AEM Guides**. Guides stores DITA in AEM. An admin can enable **Edit in Oxygen** so a specialist opens the same topic on the desktop.

There is no product called “AEM Oxygen XML Editor.” If a slide says that, the slide is wrong.

## Why both exist

A DITA topic is a typed document: concept, task, reference. A map is the book. Keys and conrefs are reuse. Publishing is a transform (WebHelp, PDF). That is Oxygen’s job.

An AEM page is a tree of components on a template. Publish is an author/publish topology, not DITA-OT. That is Sites’ job.

Guides is the DITA CCMS on AEM: check-in, review, baseline, translation, server publish. SMEs can stay in the browser. Map surgery still wants Oxygen.

## Figure

The wireframe below is a **labeled mock**, not a screenshot. Left: Oxygen with Maps Manager. Right: AEM Sites console. They do not share a toolbar.

## Watch

Play the official Getting Started webinar. Pause when the presenter names the modes. Write the four names: Text, Grid, Author, Schema Design. Schema Design is not your daily writing mode.

## Lab rule

The lab is the four-sentence note. If you cannot say the difference without slogans, do not mark it done.
`,
  },
  {
    n: 2,
    week: 1,
    title: "Install Oxygen, then Author vs Text vs Grid",
    objective: "Install a trial of Oxygen XML Author, launch it, and edit one sentence in Author, Text, and Grid.",
    minutes: 90,
    skills: ["oxygenUi", "xmlLiteracy"],
    legacy: ["t1-install", "t2-modes"],
    youtube: [
      yt("gettingStarted", ["First launch layout", "Where Help > About lives"]),
      yt("wysiwyg", ["Author mode canvas", "How Enter opens content completion"]),
    ],
    sources: [S.ugEditor, S.ugAuthor, S.videos],
    toolCards: ["author-mode", "text-mode"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Same sentence, three modes",
      steps: [
        "Download the standalone kit from oxygenxml.com. Install it. Remember the folder — add-ons live under plugins/.",
        "Launch. Register a trial or license. Open Help > About. Write the version in oxygen-bootcamp-work/day-02-version.txt.",
        "File > Open samples/flower-docs/topics/hello-concept.dita.",
        "In Author mode, add a sentence under the first paragraph: The desk copy is a sample, not a live catalog.",
        "Switch to Text. Find that sentence in XML. Do not break a tag.",
        "Switch to Grid. Confirm the same paragraph exists as a row. Switch back to Author.",
        "If you cannot install today, complete the labeled mock in this lesson and record why in the version file. Still write the three-mode observation.",
      ],
      failWhen: "You only opened Author and never switched tabs, or you left a raw unescaped ampersand in the sentence.",
      expected: "Version recorded. The new sentence exists in Author and Text. File still validates.",
    },
    quiz: [
      {
        q: "Which mode is CSS visual editing for daily DITA writing?",
        options: ["Grid", "Author", "Schema Design"],
        answer: 1,
        why: "Author mode renders XML with CSS. Grid is repetitive data. Schema Design is for XSD architects.",
      },
      {
        q: "You type & in Author for “Assets & workflow”. What must the XML contain?",
        options: ["A raw &", "&", "A comment around the word and"],
        answer: 1,
        why: "A raw ampersand is not well-formed. Author should insert & for you. Check Text mode.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Author, Text, and Grid and what each forbids",
      doTitle: "File still validates after the extra sentence",
      doDone: "hello-concept.dita validates and the sentence is in both Author and Text.",
      stress: "Find the ampersand if you used one",
    }),
    fieldNotePrompt: "When would you refuse to stay in Author and drop to Text?",
    tomorrowHook: "Tomorrow you use File > New and save a topic with lowercase hyphens.",
    body: `## Install

Download the standalone kit from oxygenxml.com. Install and remember the folder. Add-ons live under \`plugins/\`. Launch and register a trial or license. Open the bundled sample project if the installer offers it. Turn on automatic validation.

Write the version from **Help > About**. If your menu label differs, write “verify this label in your version” next to it and keep going.

## Three writer modes

- **Text** — surgery. You see tags. You can break well-formedness in one keystroke.
- **Grid** — repetitive data. Rows and cells. Not a novel.
- **Author** — CSS visual writing. Enter opens **content completion**, not “new paragraph at all costs.”
- **Schema Design** — XSD architects. You will not live here this week.

Author is not Word. The content model still wins. If a toolbar action is disabled, the parent element does not allow that child.

## Figure

Bottom tabs on the editor stack: Text · Grid · Author. Caption: *Menu path: the tabs under the editor, not Window > Perspective.*

## Video

WYSIWYG XML Editing shows Author as CSS, not as a fake word processor. Watch for content completion on Enter.
`,
  },
  {
    n: 3,
    week: 1,
    title: "New Document wizard, first DITA topic, save discipline",
    objective: "Create a Concept topic from the New wizard, save it with lowercase hyphens, and keep it inside a project folder — not on the desktop.",
    minutes: 90,
    skills: ["oxygenUi", "ditaTopics"],
    legacy: ["t1-newdoc", "t1-xml"],
    youtube: [
      yt("ditaStart", ["File New for a DITA topic", "Where the map will later live"]),
      yt("tutorials", ["Help > Install new add-ons for Live Tutorials"]),
    ],
    sources: [S.firstDita, S.ugEditor, S.learnDita],
    toolCards: ["author-mode"],
    badgeId: "first-valid-task",
    lab: {
      pack: "flower-docs",
      title: "Hello concept, saved like a writer",
      steps: [
        "Create a folder oxygen-bootcamp-work/ if you skipped it.",
        "In Oxygen: File > New. Choose a DITA Concept template so Author mode gets a toolbar.",
        "Title: Hello concept. File name: hello-concept.dita (lowercase, hyphens).",
        "Save under oxygen-bootcamp-work/week1/, not the desktop.",
        "Add a shortdesc of one sentence. Add one paragraph in conbody.",
        "Confirm tabs Text, Grid, Author all open the same file.",
        "Optional: Help > Install new add-ons > Live Tutorials. Bookmark the User Guide.",
      ],
      failWhen: "The file is Hello Concept.dita on the desktop, or the topic is invalid because title is empty.",
      expected: "hello-concept.dita validates. Path uses lowercase hyphens. Shortdesc is present.",
    },
    quiz: [
      {
        q: "Well-formed means the file matches a DTD. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Well-formed is syntax only (tags nest and match). Validity requires a schema or DTD.",
      },
      {
        q: "Why does File > New matter more than a blank XML file?",
        options: [
          "It downloads AEM Guides",
          "The template attaches a framework so Author gets the DITA toolbar",
          "It publishes WebHelp",
        ],
        answer: 1,
        why: "Without a framework, Author is a generic XML view. Templates give you the DITA toolbar and content completion.",
      },
    ],
    quests: defaultQuests({
      learn: "Name File > New and the template that attaches the DITA framework",
      doTitle: "Keep hello-concept.dita valid in the project folder",
      doDone: "File validates, is lowercase-hyphenated, and is not on the desktop.",
      stress: "Explain well-formed vs valid in one sentence",
    }),
    fieldNotePrompt: "What will you do when a teammate emails Hello Concept FINAL(2).dita?",
    tomorrowHook: "Tomorrow you type in Author, paste from a browser, and read validation messages that actually matter.",
    body: `## File > New

**File > New.** Choose a DITA Topic or DocBook template so Author mode gets a toolbar. Save with lowercase hyphens. Confirm tabs Text, Grid, Author.

A loose file on the desktop will haunt you when the map looks for \`topics/hello-concept.dita\` and finds nothing.

## Well-formed vs valid

**Well-formed** means tags nest and match (the blue check in Oxygen’s language). **Valid** also obeys a schema (the red check). Elements nest. Attributes hold \`id\` and props. Never leave a raw ampersand in text.

Delete a closing tag in Text mode, watch the error, undo. That is the whole literacy.

## Project vs loose files

Use a project folder or Oxygen project. Relative paths in maps assume you are not wandering the desktop. Master Files (later week) can rewrite references on rename. This week: pick a folder and stay there.

## Live Tutorials

Install the official Live Tutorials add-on inside Oxygen (**Help > Install new add-ons**). In-product missions beat a second browser tab.
`,
  },
  {
    n: 4,
    week: 1,
    title: "Author mode typing, smart paste, validation that matters",
    objective: "Type in Author, paste a formatted list from a browser, and repair the first real validation error — not a warning you do not understand.",
    minutes: 90,
    skills: ["oxygenUi", "ditaTopics"],
    legacy: ["t3-insert", "t4-validate"],
    youtube: [
      yt("wysiwyg", ["Smart paste result in Author", "Validation strip at the bottom"]),
      yt("ditaEdit", ["Toolbar insert vs typing tags by hand"]),
    ],
    sources: [S.authorDita, S.ugEditor],
    toolCards: ["author-mode", "outline"],
    badgeId: "well-formed",
    lab: {
      pack: "flower-docs",
      title: "Paste, then make it valid",
      steps: [
        "Open hello-concept.dita (yours or samples/flower-docs/topics/hello-concept.dita).",
        "Copy a short formatted list from a browser article (three items is enough).",
        "Paste into conbody in Author. Oxygen Smart Paste should turn it into DITA lists.",
        "Open Text. Inspect the tags. If you got <ul> from HTML leftover, you are not in a DITA framework — fix the file type.",
        "Insert an element the content model rejects (a step inside a concept). Read the validation message. Undo.",
        "Leave one real, intentional error: a second title element if the model forbids it, or an unclosed tag in Text. Record the exact message. Repair it.",
      ],
      failWhen: "You ignored a red error, or you used a Quick Fix you cannot explain.",
      expected: "File validates. You wrote the error message you saw and how you repaired it.",
    },
    quiz: [
      {
        q: "A yellow light bulb Quick Fix appears on an error. When do you click it?",
        options: [
          "Always — it is official",
          "Only when you can explain what it will change",
          "Never in Author mode",
        ],
        answer: 1,
        why: "Quick Fixes are useful and also able to reshape structure. Read the message. If you cannot explain it, undo is cheaper than a mystery.",
      },
      {
        q: "Smart Paste from Word gave you nested lists that do not match your house style. First move?",
        options: [
          "Publish anyway",
          "Inspect Text mode, then simplify the list in Author",
          "Switch to Schema Design",
        ],
        answer: 1,
        why: "Paste is a start. Validate and inspect tags after every large paste.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the validation strip and what a red error forbids",
      doTitle: "File still validates after smart paste",
      doDone: "The topic validates. You recorded one error message you caused and repaired.",
      stress: "Refuse a Quick Fix you cannot explain",
    }),
    fieldNotePrompt: "What validation message did you actually see today? Quote it.",
    tomorrowHook: "Tomorrow you open DITA Maps Manager and append a child topic.",
    body: `## Author typing

Toolbar actions insert legal children. **Enter** is content completion. If you fight the model, the model wins.

**Outline** on the right (or **Window** menu — verify the label) shows the element tree. Click a \`p\` there to jump.

## Smart paste

Smart Paste converts Word or HTML to DITA. It is not magic. Validate after every large paste. If the list is a mess, simplify it. Do not ship a paste artifact.

## Messages that matter

Well-formed is syntax. Validate is schema. A scenario can run DTD plus Schematron. Red errors block a clean transform. Warnings might be style. Read the first red error. Repair that. Do not “clean up” twenty warnings you do not own yet.

## Figure

Bottom panel: error list. Double-click jumps to the node. Caption: *Validation strip under the editor, not the Transformation view.*
`,
  },
  {
    n: 5,
    week: 1,
    title: "DITA Maps Manager, first map, append child topic",
    objective: "Open flowers.ditamap in Maps Manager, set it as root map, and append a child topic without breaking completeness.",
    minutes: 90,
    skills: ["maps", "oxygenUi"],
    legacy: ["t2-dita-ui", "t3-maps"],
    youtube: [
      yt("maps", [
        "Maps Manager tree vs the filesystem",
        "Append Child on a topicref",
        "Root map control on the toolbar",
      ]),
      yt("ditaStart", ["DITA perspective docks Maps Manager"]),
    ],
    sources: [S.mapsDemo, S.authorDita, S.ugEditor],
    toolCards: ["maps-manager", "outline"],
    badgeId: "map-is-a-book",
    lab: {
      pack: "flower-docs",
      title: "Append a child to the flower map",
      steps: [
        "Switch to the DITA perspective so Maps Manager docks. If the DITA toolbar vanishes, the file is not recognized as DITA.",
        "Open samples/flower-docs/flowers.ditamap in Maps Manager (not only as a text file).",
        "Set this map as the root map so keys resolve. Toolbar: the root map control — verify the label in your version.",
        "Create a short concept topics/vase-parts.dita (title Vase parts, one shortdesc, one paragraph).",
        "In Maps Manager, right-click the Care topichead (or the node you want) > Append Child > Reference. Point at vase-parts.dita.",
        "Run Validate and Check for Completeness from Maps Manager, not only the current file.",
      ],
      failWhen: "The new topic exists on disk but is not in the map, or completeness reports a missing href.",
      expected: "flowers.ditamap lists vase-parts.dita. Completeness is clean.",
    },
    quiz: [
      {
        q: "A map is the table of contents. Where should you run completeness?",
        options: [
          "Only on the current topic",
          "From DITA Maps Manager on the map",
          "From Schema Design",
        ],
        answer: 1,
        why: "Valid files can still make a broken book. Completeness reports missing targets, images, and keys on the map.",
      },
      {
        q: "Keys look broken in Author. First place you look?",
        options: [
          "AEM Sites console",
          "Whether the root map is set",
          "The PDF Chemistry install",
        ],
        answer: 1,
        why: "Keys resolve from the root map. No root map, no keys.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Maps Manager and what it forbids (treating the tree as the filesystem)",
      doTitle: "Keep the map complete after Append Child",
      doDone: "Completeness is clean and vase-parts.dita is a child topicref.",
      stress: "Break an href on purpose, read completeness, then fix it",
    }),
    fieldNotePrompt: "What is the difference between the Maps Manager tree and the Project view file list?",
    tomorrowHook: "Tomorrow you build the flower-docs mini publication as a real lab.",
    body: `## DITA perspective

Switch to the DITA perspective so **DITA Maps Manager** docks. If the DITA toolbar vanishes, the file is not recognized as DITA.

## The map is the book

A map is the table of contents. Set a **root map** so keys resolve. Run **Validate and Check for Completeness** from this view, not only the current file.

Right-click a node > **Append Child** to add a topicref. **Edit Properties** on a topicref for keys, navtitle, linking.

The tree is publication structure, not the filesystem. Project view is files. Maps Manager is the book.

## flower-docs

Open \`samples/flower-docs/flowers.ditamap\`. It already has a concept, a task, and a \`product\` key (Aurora Vase). You will add to this pack, not replace it.

## Figure

Left rail: Maps Manager tree. Caption: *Window docks Maps Manager on the left in the DITA perspective. Verify the menu path in your version.*
`,
  },
  {
    n: 6,
    week: 1,
    title: "Lab — flower-docs mini publication",
    objective: "Ship a tiny valid publication: map, concept, task, product key, completeness clean.",
    minutes: 110,
    skills: ["maps", "ditaTopics", "oxygenUi"],
    legacy: ["t3-maps", "t3-topics", "t5-keys"],
    youtube: [
      yt("maps", ["Publishing actions live on the map", "Edit Properties"]),
      yt("ditaEdit", ["Concept vs task in the same book"]),
    ],
    sources: [S.mapsDemo, S.firstDita, S.authorDita],
    toolCards: ["maps-manager", "attributes"],
    badgeId: "map-is-a-book",
    lab: {
      pack: "flower-docs",
      title: "Flower studio handbook, desk-ready",
      steps: [
        "Open samples/flower-docs/flowers.ditamap in Maps Manager. Set it as root map.",
        "Confirm topics/hello-concept.dita and topics/change-water.dita open from the map.",
        "Confirm the product key resolves: Author should show Aurora Vase where keyref=\"product\" is used.",
        "Add topics/vase-parts.dita if missing from Day 5. Append it under Getting started or Care with a topicref.",
        "Add a third topic topics/studio-hours.dita (reference: title Studio hours, one simple table with Day / Hours).",
        "Give studio-hours a keys attribute on its topicref (studio-hours).",
        "Validate and Check for Completeness. Zero missing hrefs, images, or keys.",
        "Do not publish WebHelp yet. Valid beats pretty. Record a screenshot-less note: number of topics in the map.",
      ],
      failWhen: "Completeness reports a missing topic, or the product key shows as unresolved, or studio-hours is a concept pretending to be a lookup table without a table.",
      expected: "Map lists at least four topics. Completeness clean. product key resolves to Aurora Vase.",
    },
    quiz: [
      {
        q: "change-water.dita is a task. Why not write those steps as a numbered list inside hello-concept.dita?",
        options: [
          "You can, DITA does not care",
          "A guide that requires tasks will reject a fake procedure in a concept",
          "Tasks cannot live in the same map as concepts",
        ],
        answer: 1,
        why: "Concept = what it is. Task = how to do it with steps. Do not fake a procedure as a numbered list inside a concept if your guide requires a task.",
      },
      {
        q: "The product name is defined in the map as a key. Where does the writer put the visible word Aurora Vase in a topic?",
        options: [
          "Hard-code it in every title",
          "Use keyref on keyword (or equivalent) so the map owns the name",
          "Put it in an AEM Experience Fragment",
        ],
        answer: 1,
        why: "flower-docs already uses keyword keyref=\"product\". The map’s keydef owns the name.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the root map control and what it forbids (orphan keys)",
      doTitle: "Keep the map complete",
      doDone: "Completeness is clean. Four topics. product key resolves.",
      stress: "Break a topicref href, read the completeness row, fix it",
    }),
    fieldNotePrompt: "How many topics are in your map, and which one is the task?",
    tomorrowHook: "Tomorrow is the Week 1 clinic: errors you will hit again.",
    body: `## This is the Week 1 publication

You are not designing a brand. You are proving the pack opens in Oxygen.

\`samples/flower-docs/\` is the lab bench. Keep it. Later weeks add kitepump-dita beside it. Do not replace flower-docs.

Open \`flowers.ditamap\` in Maps Manager:

- \`hello-concept.dita\` — concept
- \`change-water.dita\` — task with three steps and a product keyref
- \`product\` keydef — Aurora Vase

You add vase parts and studio hours. Completeness must be clean.

## Figure

Map tree:

1. Getting started → Hello concept, Vase parts
2. Care → Change the water
3. Studio hours (reference)

Caption: *Maps Manager tree after Append Child. Not the filesystem.*

## Do not publish yet

Transformation scenarios are Week 6. Today: valid map, resolving keys, honest topic types.
`,
  },
  {
    n: 7,
    week: 1,
    title: "Review clinic — errors you will hit this week",
    objective: "Repair a broken map, explain three errors in one sentence each, and pass the Week 1 boss quiz.",
    minutes: 90,
    skills: ["review", "maps", "xmlLiteracy"],
    legacy: ["t4-complete", "t4-validate"],
    youtube: [
      yt("completeness", ["The completeness report rows", "Missing href vs missing id"]),
      yt("tutorials", ["Where Live Tutorials sit after install"]),
    ],
    sources: [S.mapsDemo, S.ugEditor, S.learnDita],
    toolCards: ["maps-manager"],
    badgeId: "completeness-clean",
    boss: true,
    lab: {
      pack: "flower-docs",
      title: "Clinic: three breaks, three repairs",
      steps: [
        "Copy samples/flower-docs to oxygen-bootcamp-work/week1-clinic/ (do not vandalize the repo copy if you can avoid it).",
        "Break 1: rename a topic file without updating the topicref. Run completeness. Repair.",
        "Break 2: delete a closing tag in Text on hello-concept.dita. Read the well-formed error. Undo.",
        "Break 3: remove the product keydef from the map. Open change-water.dita. See the unresolved key. Restore the keydef.",
        "Timed completeness read: run completeness once on a clean map. Write how many files it visited.",
        "Answer the boss quiz. Retry is unlimited. Next week still unlocks if Day 6 lab is done.",
      ],
      failWhen: "You cannot explain one of the three errors in a sentence, or you leave the clinic copy broken.",
      expected: "Clinic copy completeness is clean. Three error sentences in your field note.",
    },
    quiz: [
      {
        q: "Completeness is clean but a topic is still invalid. What is true?",
        options: [
          "Impossible — completeness includes schema",
          "Possible — completeness is the book; schema is the file",
          "Then the root map is wrong",
        ],
        answer: 1,
        why: "Validate the file for schema. Completeness is missing targets, images, keys. You need both.",
      },
      {
        q: "You failed this boss. Does Day 8 stay locked?",
        options: [
          "Yes, forever",
          "No, if Friday (Day 6) lab is done the next week can unlock. The boss badge stays locked until you pass.",
          "No, Daily Burst unlocks the week",
        ],
        answer: 1,
        why: "Boss badge waits. Curriculum week does not hostage you if Friday lab is done.",
      },
      {
        q: "Unresolved keyref in Author. First place you look?",
        options: ["CSS PDF Chemistry", "Root map and the keydef", "AEM workflow payload"],
        answer: 1,
        why: "Keys live in the map. Root map plus keydef. Not a publish engine.",
      },
    ],
    quests: defaultQuests({
      learn: "Name completeness vs schema validation",
      doTitle: "Clinic copy still validates",
      doDone: "Three breaks repaired. Completeness clean.",
      stress: "Explain each error in one sentence",
    }),
    fieldNotePrompt: "Write the three errors you caused and the one-line repair for each.",
    tomorrowHook: "Week 2: concept, task, and reference as objects you will live in — not vocabulary slides.",
    body: `## Clinic, not a ceremony

This is a week boss: mixed repair + scenario questions + a timed completeness read.

Fail it and **Day 8 still unlocks if Day 6 lab is done**. The boss badge stays locked until you retry. Retry is unlimited.

## Errors from this week

1. **Missing href** — file moved, map not updated.
2. **Not well-formed** — deleted a closing tag in Text.
3. **Unresolved key** — root map unset, or keydef removed.
4. **Wrong topic type** — steps inside a concept when you needed a task.

## Figure

Completeness report: one row per problem. Caption: *DITA Maps Manager > Validate and Check for Completeness.*

## Tone

Wit is allowed: the ampersand strikes again. Do not mock yourself for a red error. Repair it.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
