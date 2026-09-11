import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 8,
    week: 2,
    title: "A concept is what it is — not how to do it",
    objective:
      "Write a valid concept with title, shortdesc, and two paragraphs, and refuse to put steps in it.",
    minutes: 90,
    skills: ["ditaTopics", "oxygenUi"],
    legacy: ["t3-topics"],
    youtube: [
      yt("ditaEdit", [
        "How the presenter opens a concept vs a task",
        "Where shortdesc sits under title",
      ]),
    ],
    sources: [S.authorDita, S.firstDita, S.learnDita],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Cut-flower concept, no fake procedure",
      steps: [
        "File > New > DITA Concept. Title: What a cut flower is. File: topics/what-a-cut-flower.dita (lowercase hyphens).",
        "Shortdesc: one sentence that would make sense in a search hit. Not a repeat of the title.",
        "In conbody, write two paragraphs: what a cut flower is, and what this handbook will not cover (growing from seed).",
        "Do not add a numbered list of actions. If you need actions, that is tomorrow’s task.",
        "Save under samples/flower-docs/topics/ or oxygen-bootcamp-work/week2/topics/. Validate the file.",
        "In Maps Manager, Append Child the topic under Getting started on flowers.ditamap.",
      ],
      failWhen:
        "The concept contains <steps> or a numbered how-to list, or shortdesc is empty, or the file is not in the map.",
      expected:
        "Valid concept. Distinct shortdesc. Zero steps. Topicref present. Completeness still clean.",
    },
    quiz: [
      {
        q: "A florist wants a page that explains what ‘conditioned stems’ means. Which template?",
        options: [
          "DITA Task — anything with a term is a procedure",
          "DITA Concept — a term and its meaning",
          "DITA Map — definitions live only in maps",
        ],
        answer: 1,
        why: "A concept holds what a thing is. A task holds steps. Maps list topics; they do not replace them.",
      },
      {
        q: "Your shortdesc copies the title word for word. What breaks first?",
        options: [
          "Well-formedness — duplicate text is invalid XML",
          "Search and link previews — readers see the same line twice",
          "The DITA-OT PDF plugin refuses to run",
        ],
        answer: 1,
        why: "Duplicate shortdesc is valid XML. It is useless in search hits and related-link teasers.",
      },
      {
        q: "You need three actions to recut stems. Where do those actions go today?",
        options: [
          "A numbered list inside the concept — faster",
          "A new task topic — the concept stays a definition",
          "The map title",
        ],
        answer: 1,
        why: "Concept = what it is. Task = how. Do not fake a procedure inside a concept.",
      },
    ],
    quests: defaultQuests({
      learn: "Name concept, title, and shortdesc and what a concept forbids",
      doTitle: "Keep what-a-cut-flower.dita a definition",
      doDone: "File validates. Shortdesc is not the title. Zero steps. Map lists it.",
      stress: "Catch a numbered how-to that wandered into conbody",
    }),
    fieldNotePrompt: "In one sentence, what did you refuse to put in this concept, and where will it live instead?",
    tomorrowHook: "Tomorrow you write a task with context, steps, and a result — not a numbered list in a concept.",
    body: `## Concept = what it is

A **concept** topic explains a thing. Title names it. **Shortdesc** is one sentence a search hit can show. \`conbody\` holds paragraphs, lists, and notes — not procedures.

v1 said it in one line: *Concept = what it is. Task = how to do it with steps. Reference = lookup facts.* You will live in those three objects this week.

## Shortdesc

Write a sentence a tired florist could use without opening the topic. Do not paste the title. Do not write “This topic describes…” — say the fact.

## What a concept forbids

Do not fake a procedure as a numbered list inside a concept if your guide requires a task. If a sentence starts with an imperative (“Lift the stems…”), stop. That sentence belongs in a \`cmd\`.

## Figure

Author canvas: title block, shortdesc in italics under it, then paragraphs. Caption: *DITA Concept template. Verify the New wizard label in your version.*

## flower-docs

Keep \`hello-concept.dita\`. Add \`what-a-cut-flower.dita\` beside it. The weekly build is a 12-topic map. Today is topic five if you still have vase-parts and studio-hours from Week 1.
`,
  },
  {
    n: 9,
    week: 2,
    title: "A task is steps with a result — not a story",
    objective:
      "Write a three-step task with context, cmd on every step, and a result, and keep it valid.",
    minutes: 90,
    skills: ["ditaTopics", "oxygenUi"],
    legacy: ["t3-topics"],
    youtube: [
      yt("ditaEdit", [
        "Task body: context, steps, result",
        "What happens if a step has no cmd",
      ]),
      yt("ditaStart", ["File New for a DITA task"]),
    ],
    sources: [S.authorDita, S.firstDita, S.ugEditor],
    toolCards: ["author-mode", "outline"],
    badgeId: "first-valid-task",
    lab: {
      pack: "flower-docs",
      title: "Recut stems — three honest steps",
      steps: [
        "File > New > DITA Task. Title: Recut the stems. File: topics/recut-stems.dita.",
        "Shortdesc: one sentence that states the outcome (stems can drink again).",
        "Add <context> with one paragraph: when to recut (after transport, or when the cut is crushed).",
        "Add three steps. Each step has a <cmd>. Optional <info> under step 2 only (cut at an angle).",
        "Add <result> with one paragraph. Not a fourth step.",
        "Validate. If a step is missing cmd, the file is invalid — read the message, repair it.",
        "Append the task under Care on flowers.ditamap, next to change-water.dita.",
      ],
      failWhen:
        "A step has no cmd, or the how-to lives as a numbered list inside a concept, or the task is not in the map.",
      expected:
        "Valid task. Three cmds. Context and result present. Topicref under Care.",
    },
    quiz: [
      {
        q: "A step with only <info> and no <cmd> is valid. True?",
        options: ["True", "False"],
        answer: 1,
        why: "DITA task model requires cmd on a step. Info is extra. Missing cmd is a schema error.",
      },
      {
        q: "change-water.dita already exists. Why write recut-stems.dita instead of adding three steps to the concept from Day 8?",
        options: [
          "You cannot have two tasks in one map",
          "A guide that requires tasks will reject a fake procedure in a concept",
          "Concepts cannot live in the same map as tasks",
        ],
        answer: 1,
        why: "Topic type is a contract. Two tasks in one map is normal. Mixing types in one file is the failure.",
      },
      {
        q: "Where does ‘stems can drink again’ belong?",
        options: [
          "Inside the last cmd",
          "In <result>, after the steps",
          "In the map’s navtitle",
        ],
        answer: 1,
        why: "Result is the outcome. Cmd is the action. Navtitle is the book label.",
      },
    ],
    quests: defaultQuests({
      learn: "Name context, cmd, and result and what a step forbids",
      doTitle: "Keep recut-stems.dita valid with three cmds",
      doDone: "File validates. Three cmds. Context and result present. Map lists it.",
      stress: "Delete one cmd, read the schema message, restore it",
    }),
    fieldNotePrompt: "Quote the validation message you saw when a step had no cmd — or write that you caused one on purpose.",
    tomorrowHook: "Tomorrow you write a reference: a lookup table, not a story and not a procedure.",
    body: `## Task = how to do it

A **task** is a procedure. Title is the job. Shortdesc is the outcome in one line. \`taskbody\` usually holds:

- **context** — when and with what
- **steps** — each **step** has a **cmd** (the action)
- **result** — what good looks like

Do not write a novel in \`cmd\`. One imperative. Details go in \`info\`, \`stepresult\`, or a note.

## The sample you already have

\`change-water.dita\` is the model: three cmds, a product keyref, a result. Copy the shape, not the sentences. Write recut-stems as a second task.

## Outline

Open **Outline**. You should see \`task\` → \`title\` / \`shortdesc\` / \`taskbody\` → \`context\` / \`steps\` / \`result\`. If Outline shows a \`p\` where a \`cmd\` should be, you left Author and pasted a story.

## Figure

Task skeleton in Outline. Caption: *Window docks Outline on the right. Verify the label in your version.*
`,
  },
  {
    n: 10,
    week: 2,
    title: "A reference is lookup — not a lecture",
    objective:
      "Write a valid reference topic with a simple table a florist can scan, and keep prose out of the table cells.",
    minutes: 90,
    skills: ["ditaTopics", "oxygenUi"],
    legacy: ["t3-topics"],
    youtube: [
      yt("ditaIntro", [
        "How reference is named next to concept and task",
        "A table used as lookup, not as layout",
      ]),
    ],
    sources: [S.authorDita, S.dita13, S.ugEditor],
    toolCards: ["author-mode", "outline"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Variety card as a reference",
      steps: [
        "File > New > DITA Reference. Title: Variety card. File: topics/variety-card.dita.",
        "Shortdesc: one sentence — lookup facts for common studio varieties, not care instructions.",
        "In refbody, insert a simple table (toolbar table action). Four rows: Variety / Water / Light / Notes.",
        "Fill three data rows (e.g. tulip, rose, eucalyptus). Cells stay short. No paragraphs inside cells.",
        "Do not put ‘how to change water’ in this file. That is change-water.dita.",
        "Validate. Append under a topichead named Lookup (create the topichead if missing) on flowers.ditamap.",
      ],
      failWhen:
        "The table is a layout hack with one giant cell of prose, or the topic is a concept pretending to be a lookup, or it is not in the map.",
      expected:
        "Valid reference. Table with a header row and three data rows. Topicref under Lookup.",
    },
    quiz: [
      {
        q: "Studio hours from Week 1 was a reference with Day / Hours. Why not make that a task?",
        options: [
          "Hours change, so they must be steps",
          "There is nothing to do — it is a lookup",
          "References cannot contain tables",
        ],
        answer: 1,
        why: "A task needs a job the reader performs. A schedule is facts. Facts go in a reference.",
      },
      {
        q: "A table cell contains a three-sentence paragraph of advice. First move?",
        options: [
          "Publish — CALS allows any text",
          "Cut the advice into a concept or a note; leave the cell a fact",
          "Convert the whole reference into a task",
        ],
        answer: 1,
        why: "Cells are for scan. Advice is a concept or a note. Tasks are for actions.",
      },
      {
        q: "File > New without a Reference template, then you type <reference> in a concept. What goes wrong?",
        options: [
          "Nothing — the tags are the same",
          "The concept DTD rejects <reference>; the file is invalid",
          "Oxygen converts it on save",
        ],
        answer: 1,
        why: "Topic type is the document element. A concept cannot contain a reference document. Use the right template.",
      },
    ],
    quests: defaultQuests({
      learn: "Name reference vs concept vs task and what a lookup forbids",
      doTitle: "Keep variety-card.dita a scan table",
      doDone: "Valid reference. Header plus three data rows. Map lists it under Lookup.",
      stress: "Refuse a paragraph that wandered into a table cell",
    }),
    fieldNotePrompt: "Which fact in your table would be wrong as a step, and why?",
    tomorrowHook: "Tomorrow you insert lists and note types — and you pick caution vs warning on purpose.",
    body: `## Reference = lookup facts

A **reference** is a scan surface: properties, tables, catalogs. Title names the set. Shortdesc says what you can look up. \`refbody\` holds sections and tables.

v1: *Do not fake a procedure as a numbered list inside a concept if your guide requires a task.* The twin sin is a lecture inside a reference table.

## Tables

Toolbar insert. CALS is the default DITA table model. Header row is real header — not bolded first data. Cells stay short.

## Topic type is a contract

| Need | Type |
|---|---|
| What it is | concept |
| How to do it | task |
| Facts to look up | reference |

If you are unsure, ask: would a reader search this, or perform this?

## Figure

Simple table in Author: four columns, header shaded. Caption: *Toolbar table action in a DITA reference. Not a Word nested table.*
`,
  },
  {
    n: 11,
    week: 2,
    title: "Lists and notes — pick the type, do not decorate",
    objective:
      "Insert a ul, an ol, and three note types (note, caution, warning) and explain why warning is not bold text.",
    minutes: 90,
    skills: ["ditaTopics", "oxygenUi"],
    legacy: ["t3-insert"],
    youtube: [
      yt("wysiwyg", [
        "Toolbar insert for lists",
        "Note element vs italic paragraph",
      ]),
    ],
    sources: [S.authorDita, S.ugEditor],
    toolCards: ["author-mode", "attributes"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Condition notes that mean something",
      steps: [
        "File > New > DITA Concept. Title: Condition the stems. File: topics/condition-notes.dita.",
        "Shortdesc: what conditioning means in this studio (one sentence).",
        "In conbody: one unordered list of materials (bucket, clean water, shears).",
        "One ordered list of three conditioning moves (unwrap, recut, hydrate). This list is orientation, not a full task — keep it to three short items.",
        "Insert three <note> elements. Set type (Attributes view): note, caution, warning.",
        "warning: bleach mix is not a drink. caution: dull shears crush stems. note: time box is 30 minutes.",
        "Do not fake warning by bolding a paragraph. Validate. Append under Care.",
      ],
      failWhen:
        "A warning is only bold/italic with no <note>, or type is missing, or the file is invalid.",
      expected:
        "Valid concept. One ul, one ol, three notes with types note/caution/warning. Topicref under Care.",
    },
    quiz: [
      {
        q: "Why does a PDF still shout if you used <note type=\"warning\"> instead of bold?",
        options: [
          "It does not — you must also bold the text",
          "Publishing styles the note type; the element is the contract",
          "Warning notes only work in AEM Sites",
        ],
        answer: 1,
        why: "Type is data. CSS/PDF turn it into a label. Bold is paint. Filters and reuse cannot see paint.",
      },
      {
        q: "An ordered list of fifteen actions lives in a concept. What should you suspect?",
        options: [
          "Nothing — ol is legal in conbody",
          "You probably needed a task with steps",
          "Ordered lists are illegal in DITA",
        ],
        answer: 1,
        why: "ol is legal. A long how-to still wants a task. Legal is not the same as honest.",
      },
      {
        q: "Attributes view is blank when the caret is in a note. First place you look?",
        options: [
          "Whether the note element (not the text inside) is selected",
          "The PDF Chemistry install",
          "AEM workflow payload",
        ],
        answer: 0,
        why: "Attributes belong to the element. Click the note tag in Outline if the caret is only in the text.",
      },
    ],
    quests: defaultQuests({
      learn: "Name note types and what bold-as-warning forbids",
      doTitle: "Keep three typed notes in condition-notes.dita",
      doDone: "Valid file. ul, ol, note/caution/warning. Map lists it.",
      stress: "Change a warning to a plain paragraph, then put the type back",
    }),
    fieldNotePrompt: "When would you refuse a caution and escalate it to warning?",
    tomorrowHook: "Tomorrow you insert a real table and an image with alt text a screen reader can use.",
    body: `## Lists

**ul** is a set. **ol** is a sequence that is not a task (short orientation). A procedure with a result is still a **task**. Do not hide a job in a list.

Toolbar insert. If you type hyphens in a paragraph, you do not have a list — you have a paragraph with hyphens.

## Notes

\`<note type="note|tip|fastpath|restriction|important|remember|attention|caution|notice|danger|warning">\`.

Pick **caution** for damage to the work. Pick **warning** for harm to a person. Do not decorate a paragraph and call it a warning.

## Attributes

**Attributes** view (right rail) holds \`type\` on the note. Click the element in **Outline** if the panel looks empty.

## Figure

Three notes stacked: note (i), caution (triangle), warning (stop). Caption: *Author CSS paints the type. The type attribute is the source of truth.*
`,
  },
  {
    n: 12,
    week: 2,
    title: "Tables you can scan, images with alt text",
    objective:
      "Insert one CALS table and one image with alt text, and refuse an image that has no alt.",
    minutes: 90,
    skills: ["ditaTopics", "oxygenUi"],
    legacy: ["t3-insert"],
    youtube: [
      yt("ditaEdit", [
        "Toolbar image insert",
        "Where alt text lives on the image",
      ]),
    ],
    sources: [S.authorDita, S.ugEditor],
    toolCards: ["author-mode", "attributes"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Care table plus one honest image",
      steps: [
        "Create topics/care-table.dita as a DITA Reference. Title: Care at a glance. Shortdesc: scan table for water and recut interval.",
        "Insert a CALS table: Variety / Recut / Water change. Three data rows. Header is a header.",
        "Create a simple image (sketch is fine) named images/vase-outline.png under the pack. 200×200 is enough.",
        "Create topics/vase-photo.dita as a concept. Title: Vase outline. Insert the image with the toolbar. Set alt: Outline of the Aurora Vase, front view.",
        "Open Text. Confirm <image href=\"...\" alt=\"...\"/> (or alttext, depending on your DITA version — write which one you have).",
        "Run completeness on flowers.ditamap after you append both topics. A missing image is a completeness row.",
      ],
      failWhen:
        "The image has no alt, or href points at a file that does not exist, or the table has no header row.",
      expected:
        "Valid reference + concept. Table with header. Image file exists. Alt is a phrase, not the filename. Completeness clean.",
    },
    quiz: [
      {
        q: "Alt text is the filename without .png. When is that acceptable?",
        options: [
          "Always — screen readers prefer the file id",
          "Never as a habit — alt describes the picture",
          "Only in PDF",
        ],
        answer: 1,
        why: "Filename is for the filesystem. Alt is for a person who cannot see the image.",
      },
      {
        q: "Completeness is clean but the image is a broken icon in Author. First place you look?",
        options: [
          "Whether href is relative to the topic, not to the map",
          "AEM Assets console",
          "Schema Design",
        ],
        answer: 0,
        why: "href is resolved from the topic file. A path that works from the map folder can fail from topics/.",
      },
      {
        q: "CALS vs simpletable: you need column spans later. Which do you pick today?",
        options: [
          "simpletable — spans are easier",
          "CALS table — it is the default DITA model and supports more structure",
          "HTML table pasted from a browser",
        ],
        answer: 1,
        why: "v1: CALS is the default DITA table model. Paste HTML only if Smart Paste converted it.",
      },
    ],
    quests: defaultQuests({
      learn: "Name image alt and CALS header and what a missing file forbids",
      doTitle: "Keep the image href real and the alt a phrase",
      doDone: "Completeness clean. Alt is not the filename. Table has a header.",
      stress: "Break the href, read the completeness row, fix it",
    }),
    fieldNotePrompt: "Write the exact alt string you used and why a filename would have been a bad alt.",
    tomorrowHook: "Tomorrow you compare Author (rendered) with Text (source), and you look at Markdown without mixing it into this map.",
    body: `## Tables

Use toolbar actions. **CALS** is the default DITA table model. Header row first. Keep cells short. A table is not a page layout.

## Images

Toolbar **Insert Image**. \`href\` is relative to the topic unless you use a key. **alt** (or \`alttext\` in some shells) is a phrase: what the picture shows.

An empty alt is a decision (“decorative”). A missing alt is a defect. A filename as alt is laziness.

## Completeness

Valid XML can still miss the PNG. **Validate and Check for Completeness** on the map reports missing images. Run it after every insert.

## Figure

Topic folder next to \`images/vase-outline.png\`. Caption: *href from the topic, not from the repo root. Missing file = completeness row.*
`,
  },
  {
    n: 13,
    week: 2,
    title: "Preview vs source — and Markdown that stays in its lane",
    objective:
      "Edit one sentence in Author and Text, preview a Markdown file, and write why that Markdown file is not a child of flowers.ditamap.",
    minutes: 90,
    skills: ["oxygenUi", "ditaTopics"],
    legacy: ["t3-markdown"],
    youtube: [
      yt("markdown", [
        "Markdown preview pane",
        "What Oxygen will and will not treat as MDITA",
      ]),
    ],
    sources: [S.ugEditor, S.learnDita, S.videos],
    toolCards: ["author-mode", "text-mode"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Same sentence, two views — Markdown stays out of the map",
      steps: [
        "Open topics/what-a-cut-flower.dita. In Author, add a sentence: Preview is Author CSS. Source is Text.",
        "Switch to Text. Find that sentence inside a <p>. Do not break a tag.",
        "Create oxygen-bootcamp-work/week2/preview-notes.md with three headings and a list (CommonMark).",
        "Open the .md in Oxygen. Use the Markdown preview. Write one line in the file: this is not a DITA topic.",
        "Do not append preview-notes.md to flowers.ditamap. If you try, completeness should complain — undo.",
        "Create topics/studio-preview.dita (concept) that states in one paragraph when Markdown is allowed on this desk (never in this map).",
        "Append studio-preview.dita only. Completeness clean.",
      ],
      failWhen:
        "The map references a .md file, or the DITA sentence is only in Author comments, or you mixed MDITA into flowers.ditamap.",
      expected:
        "DITA sentence exists in Author and Text. Markdown file exists outside the map. Completeness clean.",
    },
    quiz: [
      {
        q: "Oxygen previews CommonMark and can use MDITA. When do you mix Markdown and full DITA in one map?",
        options: [
          "Whenever preview looks fine",
          "Only when publishing is designed for both — this flower map is not",
          "Never in any product, ever",
        ],
        answer: 1,
        why: "v1: Do not mix Markdown and full DITA unless publishing is designed for both. The flower map is DITA 1.3 topics.",
      },
      {
        q: "Author looks pretty and Text shows a raw &. What is true?",
        options: [
          "Author is the source of truth — ignore Text",
          "The file is not well-formed; repair the ampersand",
          "Grid will fix it on save",
        ],
        answer: 1,
        why: "Source is XML. Author is a view. A raw ampersand is a well-formed error even if Author still paints.",
      },
      {
        q: "You need a SME to draft in Markdown. First honest move?",
        options: [
          "Append the .md to the DITA map",
          "Keep the .md beside the pack and convert to a DITA topic before the map owns it",
          "Rename .md to .dita and hope",
        ],
        answer: 1,
        why: "A map of DITA topics expects DITA. Conversion is a step. A rename is not conversion.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Author vs Text vs Markdown preview and what the map forbids",
      doTitle: "Keep the Markdown file out of flowers.ditamap",
      doDone: "Sentence in Author and Text. .md exists. Map completeness clean.",
      stress: "Try a topicref to the .md, read the failure, undo",
    }),
    fieldNotePrompt: "When would you refuse a teammate’s .md as a topicref, and what would you ask for instead?",
    tomorrowHook: "Tomorrow is the Week 2 boss: a 12-topic flower map that still validates.",
    body: `## Preview vs source

**Author** is CSS visual writing. **Text** is the XML. **Grid** is rows. Preview is not a second document. If Author and Text disagree, Text wins — it is the file.

Markdown preview is a third view for \`.md\` files. It is not Author mode for DITA.

## Markdown and LwDITA

v1: *Oxygen previews CommonMark and can use MDITA. Do not mix Markdown and full DITA unless publishing is designed for both.*

This week’s pack is DITA topics and a DITA map. A SME draft in Markdown is a draft. Convert, then append.

## Figure

Split: left Author paragraph, right Text \`<p>\`. Below, a Markdown preview window with a caption: *Not a child of flowers.ditamap.*
`,
  },
  {
    n: 14,
    week: 2,
    title: "Boss — twelve topics, three types, one book",
    objective:
      "Ship a 12-topic flower map with concept, task, and reference in honest roles, completeness clean.",
    minutes: 110,
    skills: ["maps", "ditaTopics", "review"],
    legacy: ["t3-topics", "t3-maps"],
    youtube: [
      yt("maps", ["Publishing actions live on the map", "Edit Properties"]),
      yt("completeness", ["Missing href vs missing image"]),
    ],
    sources: [S.mapsDemo, S.authorDita, S.firstDita],
    toolCards: ["maps-manager", "outline"],
    badgeId: "completeness-clean",
    boss: true,
    lab: {
      pack: "flower-docs",
      title: "Flower studio handbook, twelve topics",
      steps: [
        "Open flowers.ditamap in Maps Manager. Set it as root map.",
        "Count topicrefs. You need twelve topics on disk and in the map. Create any missing ones as real concept/task/reference — not empty stubs.",
        "Minimum mix: two tasks (change-water, recut-stems), two references (studio-hours, variety-card or care-table), the rest concepts. No topic type used as a dump.",
        "Every topic has a title and a shortdesc that is not the title.",
        "At least one image with alt, at least one table with a header, at least one typed note.",
        "Run Validate and Check for Completeness. Zero missing hrefs, images, or keys. product key still resolves to Aurora Vase.",
        "Write oxygen-bootcamp-work/week2/topic-census.txt: twelve filenames plus type plus one-line job.",
      ],
      failWhen:
        "Fewer than twelve topics in the map, or a task with no cmd, or completeness reports a miss, or a .md file is a topicref.",
      expected:
        "Twelve valid topics. Mix of three types. Completeness clean. Census file matches the map.",
    },
    quiz: [
      {
        q: "You have twelve files on disk but completeness says 11 topicrefs. What is true?",
        options: [
          "Disk is the book — completeness is wrong",
          "The book is the map — a file that is not referenced is not in the publication",
          "Root map unset always drops one topic",
        ],
        answer: 1,
        why: "Maps Manager is the book. Project view is files. Completeness reads the map.",
      },
      {
        q: "A concept titled Recut the stems contains an ol of actions. Boss verdict?",
        options: [
          "Pass — ol is allowed in conbody",
          "Fail the honesty check — that job wants a task",
          "Pass if completeness is clean",
        ],
        answer: 1,
        why: "Completeness does not score topic type. You do. A job with steps is a task.",
      },
      {
        q: "You failed this boss. Does Day 15 stay locked?",
        options: [
          "Yes, forever",
          "No, if Friday (Day 13) lab is done the next week can unlock. The boss badge stays locked until you pass.",
          "No, Daily Burst unlocks the week",
        ],
        answer: 1,
        why: "Boss badge waits. Curriculum week does not hostage you if Friday lab is done.",
      },
      {
        q: "product key shows unresolved in one topic only. First place you look?",
        options: [
          "Whether that topic is in the root map’s tree",
          "CSS PDF Chemistry",
          "AEM Sites console",
        ],
        answer: 0,
        why: "Keys resolve from the root map for topics in that book. An orphan file has no keys.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the three topic types and what the map forbids (orphan files as chapters)",
      doTitle: "Keep twelve topics complete",
      doDone: "Census matches the map. Completeness clean. Three types in honest roles.",
      stress: "Break one href, read the row, fix it",
    }),
    fieldNotePrompt: "List the twelve filenames. Star the two you would defend in a review.",
    tomorrowHook: "Week 3: topicref details, submaps, IDs, and moving files without silent breakage — kitepump joins flower-docs.",
    body: `## Clinic, not a ceremony

This is a week boss: mixed repair + scenario questions + a completeness read on a 12-topic book.

Fail it and **Day 15 still unlocks if Day 13 lab is done**. The boss badge stays locked until you retry. Retry is unlimited.

## What “twelve” means

Twelve **topicrefs** to twelve **valid** topics. Not twelve files on the desktop. Not stubs with empty titles.

Suggested tree:

1. Getting started — hello-concept, what-a-cut-flower, vase-parts, studio-preview
2. Care — change-water, recut-stems, condition-notes, vase-photo
3. Lookup — studio-hours, variety-card, care-table
4. One more concept you still owe (delivery-window or studio-rules)

Adjust names if yours differ. Types must stay honest.

## Figure

Maps Manager tree with twelve children under three topicheads. Caption: *DITA Maps Manager > Validate and Check for Completeness.*
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
