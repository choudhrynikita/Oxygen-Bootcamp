import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 36,
    week: 6,
    title: "Transformation scenarios — the map is what you publish",
    objective:
      "Open Configure Transformation Scenario, filter DITA Map, and attach a scenario to kitepump.ditamap without running a broken output path.",
    minutes: 90,
    skills: ["publish", "maps"],
    legacy: ["t5-publish"],
    youtube: [
      yt("webhelp", [
        "Where publishing templates sit relative to a scenario",
        "That WebHelp and PDF can share CSS ideas — awareness",
      ]),
    ],
    sources: [S.ugEditor, S.authorDita, S.documentation],
    toolCards: ["transformation", "maps-manager"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Name the scenario, pick the output folder",
      steps: [
        "Set kitepump.ditamap as root map. Open DITA Maps Manager.",
        "Configure Transformation Scenario (toolbar or Document > Transformation — verify the label). Filter ‘DITA Map’.",
        "Select DITA Map WebHelp Responsive. Do not run it yet.",
        "Set the output folder to oxygen-bootcamp-work/week6/out-webhelp/ — outside the source tree. If the default is inside maps/, change it.",
        "Attach novice.ditaval if the scenario has a DITAVAL field. Write whether you attached it.",
        "Save the scenario association on the map if your version stores it. Write the scenario name in oxygen-bootcamp-work/week6/scenario-name.txt.",
      ],
      failWhen:
        "Output is set to the source topics/ folder, or you published a single topic when you meant the map, or you skipped Configure and mashed Apply on a mystery default.",
      expected:
        "Scenario named and associated to the map. Output folder outside source. DITAVAL field noted. Nothing published yet if you chose to wait — or a clean first run if you did run it.",
    },
    quiz: [
      {
        q: "Apply Transformation Scenario runs DITA-OT. What should you select as the resource?",
        options: [
          "The currently open paragraph",
          "The DITA map (the book)",
          "A Schematron file",
        ],
        answer: 1,
        why: "v1: Publish the map. A topic transform is a fragment, not the handbook.",
      },
      {
        q: "Output folder inside topics/. What goes wrong next week?",
        options: [
          "Nothing — DITA-OT skips XML",
          "Generated HTML gets topicref’d or committed as source",
          "Oxygen deletes the map",
        ],
        answer: 1,
        why: "out/ stays out. Source stays source.",
      },
      {
        q: "In AEM Guides the server baseline is the release; a local PDF is a draft. True?",
        options: ["True", "False"],
        answer: 0,
        why: "v1 sentence. Desktop transforms are drafts unless your desk says otherwise.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Configure Transformation Scenario and what an in-source out folder forbids",
      doTitle: "Keep output outside the pack",
      doDone: "Scenario associated to the map. Output path recorded. DITAVAL field noted.",
      stress: "Filter the scenario list wrong (XML instead of DITA Map) and recover",
    }),
    fieldNotePrompt: "What scenario name did you associate, and where does HTML go?",
    tomorrowHook: "Tomorrow you actually run WebHelp Responsive and open index.html from the output folder.",
    body: `## Transformation scenarios

v1: *Apply Transformation Scenario runs DITA-OT. Publish the map. In AEM Guides the server baseline is the release; a local PDF is a draft.*

**Configure Transformation Scenario** → filter **DITA Map**. Pick the type. Set **output** outside source (e.g. \`out/\`).

## DITAVAL on the scenario

Author preview and publish filters are different attachments. If novice.ditaval belongs on this output, attach it here too.

## Figure

Transformation dialog: filter DITA Map, output path \`oxygen-bootcamp-work/week6/out-webhelp/\`. Caption: *Right rail Transformation view, or the toolbar Apply. Verify labels.*
`,
  },
  {
    n: 37,
    week: 6,
    title: "WebHelp Responsive — a draft you can click",
    objective:
      "Publish kitepump.ditamap to WebHelp Responsive and open the output index.html, then match three TOC entries to topic titles.",
    minutes: 90,
    skills: ["publish", "maps"],
    legacy: ["t5-publish"],
    youtube: [
      yt("webhelp", [
        "WebHelp output as a folder of HTML",
        "A publishing template vs the scenario",
      ]),
    ],
    sources: [S.ugEditor, S.videos, S.authorDita],
    toolCards: ["transformation", "maps-manager"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "WebHelp draft, three TOC checks",
      steps: [
        "Apply the WebHelp Responsive scenario on kitepump.ditamap. Wait for the Transformation view.",
        "If the status is SUCCESS, open out-webhelp/index.html in a browser (Oxygen may offer Open).",
        "Write three TOC labels you see and the topic files they come from.",
        "Confirm the product-name key resolved in HTML (Kitepump HP-40a, not the key string).",
        "If the expert step is missing, check whether novice.ditaval was attached. Write which it was.",
        "If the status is FAILED, do not panic — Day 40 is the failed-log lab. Still paste the first error line into the field note and stop; do not thrash for an hour.",
      ],
      failWhen:
        "You published a single topic and called it the book, or you cannot find index.html, or you committed the output into topics/.",
      expected:
        "WebHelp folder exists. Three TOC lines mapped to files. Key resolved in HTML — or a first error line parked for Day 40.",
    },
    quiz: [
      {
        q: "WebHelp Responsive output is a folder. What is the usual entry file?",
        options: [
          "the .ditamap",
          "index.html (verify in your output)",
          "schema.xsd",
        ],
        answer: 1,
        why: "You open HTML. The map is source.",
      },
      {
        q: "The TOC is missing a topic that completeness includes. First place you look?",
        options: [
          "toc=\"no\" on the topicref, or a submap not referenced",
          "AEM page properties",
          "Author CSS Hints",
        ],
        answer: 0,
        why: "Publish reads the map. toc=no hides a node. Completeness does not mean ‘visible in TOC’.",
      },
      {
        q: "Local WebHelp is the AEM Guides release. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Local output is a draft. Guides/server baseline is the release when that is your CCMS.",
      },
    ],
    quests: defaultQuests({
      learn: "Name WebHelp Responsive and the output entry file",
      doTitle: "Open index.html and match three TOC entries",
      doDone: "Output exists. Three mappings written. Key checked.",
      stress: "Find one TOC surprise (navtitle vs title) and write it",
    }),
    fieldNotePrompt: "Which TOC label disagreed with the topic title, and was that navtitle on purpose?",
    tomorrowHook: "Tomorrow you run a PDF path (Publishing Engine or Chemistry) as a draft, not a brand.",
    body: `## WebHelp Responsive

This is the HTML draft of the book. Apply the scenario. Read **Transformation**. Open \`index.html\`.

You are not designing a theme today. You are proving the map produces a site you can click.

## Keys and filters

HTML is the proof that keys resolved and that DITAVAL did or did not drop a step. If the product name is still \`product-name\`, the root map or the scenario’s map input is wrong.

## Figure

Browser with WebHelp TOC on the left. Caption: *Draft output. Not AEM Sites. Not Guides server publish.*
`,
  },
  {
    n: 38,
    week: 6,
    title: "PDF draft — Publishing Engine or Chemistry, not a brand course",
    objective:
      "Run a DITA Map PDF scenario (Chemistry or Publishing Engine, whichever your install has) and write which engine produced the file.",
    minutes: 90,
    skills: ["publish", "oxygenUi"],
    legacy: ["t5-publish"],
    youtube: [
      yt("webhelp", [
        "PDF mentioned next to WebHelp / CSS",
        "That CSS ideas can apply to PDF — awareness, not homework",
      ]),
    ],
    sources: [S.ugEditor, S.documentation, S.videos],
    toolCards: ["transformation"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "One PDF, named engine",
      steps: [
        "In Configure Transformation Scenario, filter DITA Map PDF. Pick the scenario your install ships (PDF — based on HTML5 & CSS / Chemistry, or Publishing Engine — verify the name).",
        "Output to oxygen-bootcamp-work/week6/out-pdf/. Run it.",
        "If SUCCESS, open the PDF. Write: engine name, page count, whether the pinch warning appears.",
        "If the engine is not installed, write that in oxygen-bootcamp-work/week6/pdf-engine.txt and run the scenario far enough to capture the missing-engine message. That message is the lab, not a fake PDF.",
        "Do not install random CSS themes to ‘make it pretty’. Do not treat this as InDesign.",
        "Keep the PDF out of the source map folder.",
      ],
      failWhen:
        "You ship a screenshot of someone else’s PDF as yours, or you dump output into topics/, or you claim Chemistry when the log says another engine.",
      expected:
        "pdf-engine.txt names the engine or the missing-engine message. Output path outside source. Warning presence noted if PDF exists.",
    },
    quiz: [
      {
        q: "Chemistry vs Publishing Engine vs a generic DITA-OT PDF plugin. Why write the name?",
        options: [
          "It is trivia",
          "The log and the missing-plugin errors use that name; ‘the PDF button’ is not a diagnosis",
          "AEM Sites needs it",
        ],
        answer: 1,
        why: "Week 6 is log literacy. Engines have names.",
      },
      {
        q: "The PDF dropped your table borders. First move as a junior author?",
        options: [
          "Rewrite the CALS table as HTML",
          "Record it; do not start a CSS career this afternoon — check whether the table is valid first",
          "Switch the whole book to Markdown",
        ],
        answer: 1,
        why: "This is not a designer course. Validity and scenario choice first. Styles Basket is awareness tomorrow.",
      },
      {
        q: "A local PDF is a draft. Who owns the release PDF if the team uses Guides?",
        options: [
          "Whoever hit Apply last on a laptop",
          "The server/baseline publish in Guides, unless your desk written policy says otherwise",
          "Flower-docs",
        ],
        answer: 1,
        why: "v1: In AEM Guides the server baseline is the release; a local PDF is a draft.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the PDF engine your install actually has",
      doTitle: "Keep the PDF (or the missing-engine message) outside source",
      doDone: "Engine named. Output path clean. Warning presence noted or failure parked.",
      stress: "Read the first PDF log line even on SUCCESS",
    }),
    fieldNotePrompt: "Which engine ran, or which exact missing-engine line did you capture?",
    tomorrowHook: "Tomorrow you read a SUCCESS log like a skeptic — then Day 40 forces a FAILED one.",
    body: `## PDF is a transform

A PDF is not a print layout you paint. It is DITA-OT (and maybe **Chemistry** or **Publishing Engine**) reading the map.

Name the engine. Put the file in \`out-pdf/\`. Check one fact (the warning). Stop.

## Missing engine

If Chemistry is not installed, the log says so. That line is a valid lab outcome. Do not download a random plugin off a blog.

## Figure

Transformation view SUCCESS plus a PDF icon. Caption: *Draft. Engine name in the scenario title. Verify in Help > About / scenario description.*
`,
  },
  {
    n: 39,
    week: 6,
    title: "SUCCESS logs still deserve a read",
    objective:
      "Open a SUCCESS transformation log, copy three lines (start, a warning if any, finish), and say what you would ignore.",
    minutes: 90,
    skills: ["publish", "review"],
    legacy: ["t5-publish"],
    youtube: [
      yt("ditaEdit", ["Any mention of publishing output or logs if present"]),
    ],
    sources: [S.ugEditor, S.documentation],
    toolCards: ["transformation"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Three lines from a SUCCESS log",
      steps: [
        "Rerun WebHelp or PDF so you have a fresh log in Transformation view.",
        "Open the log (the view usually has a log document or console — verify).",
        "Copy into oxygen-bootcamp-work/week6/success-log-excerpt.txt: (1) the command or scenario name, (2) one WARN or INFO that is not fatal, (3) the BUILD SUCCESSFUL / SUCCESS line.",
        "If there is a WARN about a missing image or unresolved key, that is not SUCCESS in spirit — go fix it. Do not document around a real miss.",
        "Write one line: I will ignore ____ (example: deprecated parameter INFO) and I will never ignore ____ (FAILED, missing file, unresolved key).",
        "Do not paste a 4000-line log into the field note.",
      ],
      failWhen:
        "The excerpt has no SUCCESS line, or you ignored a missing-file WARN, or you pasted the entire log.",
      expected:
        "Three-line excerpt. Ignore/never-ignore sentence. Real WARNs fixed or explained.",
    },
    quiz: [
      {
        q: "BUILD SUCCESSFUL with a WARN: missing image. Ship it?",
        options: [
          "Yes — SUCCESS means ship",
          "No — treat missing image as a defect; completeness should have caught it too",
          "Yes if the PDF has enough pages",
        ],
        answer: 1,
        why: "The engine can succeed and still omit a figure. Completeness + log together.",
      },
      {
        q: "Where is the first place you look when HTML is empty but the log says SUCCESS?",
        options: [
          "The output folder path you configured (did you open an old out/?)",
          "AEM workflow",
          "Schema Design",
        ],
        answer: 0,
        why: "Wrong folder is the classic ‘success but empty’ bug.",
      },
      {
        q: "Why not paste the whole log into chat?",
        options: [
          "Logs are secret",
          "The useful lines are start, first error/warn, finish — the rest is noise until you need it",
          "Oxygen forbids copy",
        ],
        answer: 1,
        why: "Junior-author hygiene. Excerpt, then drill.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Transformation log and what a missing-image WARN forbids",
      doTitle: "Keep a three-line SUCCESS excerpt honest",
      doDone: "Excerpt written. Real WARNs fixed or called out. Ignore rule written.",
      stress: "Open an old out/ folder on purpose, notice it, switch to the new path",
    }),
    fieldNotePrompt: "What will you never ignore in a SUCCESS log?",
    tomorrowHook: "Tomorrow is required: you will cause a FAILED transform and read the first real error.",
    body: `## The log is a document

Transformation view is not a traffic light. Open the log. Read the first unexpected line.

SUCCESS plus a missing image is a defect. SUCCESS plus an INFO about a default parameter is noise.

## Excerpt

Start. First interesting WARN. Finish. That is the note. The rest waits.

## Figure

Transformation view with a log tab. Caption: *Click the log. Do not screenshot only the green bar.*
`,
  },
  {
    n: 40,
    week: 6,
    title: "FAILED transform — read the first real error",
    objective:
      "Cause a FAILED transform on purpose, quote the first real error, repair it, and rerun to SUCCESS.",
    minutes: 110,
    skills: ["publish", "review", "xmlLiteracy"],
    legacy: ["t5-publish", "t4-complete"],
    youtube: [
      yt("completeness", ["Missing href rows you might also see in a log"]),
      yt("webhelp", ["A failed custom template is not today’s hunt unless the log names it"]),
    ],
    sources: [S.ugEditor, S.mapsDemo, S.documentation],
    toolCards: ["transformation", "maps-manager"],
    badgeId: "transform-log-reader",
    lab: {
      pack: "kitepump-dita",
      title: "Break, read, repair, rerun",
      steps: [
        "Copy kitepump to oxygen-bootcamp-work/week6-failed/ so you can vandalize a copy.",
        "Break 1 (pick one): point a topicref at a missing file, or delete a closing tag in a topic the map includes, or attach a DITAVAL that references a nonsense property if you can do it cleanly.",
        "Run WebHelp Responsive. Status must be FAILED (or SUCCESS with a hard error you can quote — if it still succeeds, break the map href until it fails).",
        "Copy the first real error line (not a trailing Java stack if a human line exists above it) into oxygen-bootcamp-work/week6/failed-first-error.txt.",
        "Repair the copy. Rerun. SUCCESS. Quote the SUCCESS line under the error in the same file.",
        "Write one sentence: the first place I looked was ____ (log, then the file it named).",
      ],
      failWhen:
        "You never produced FAILED, or you quoted only ‘BUILD FAILED’ with no cause, or you left the copy broken, or you ‘fixed’ it by switching to a different map.",
      expected:
        "failed-first-error.txt has FAILED cause + SUCCESS confirmation. Clinic copy publishes. Badge evidence is the quoted line.",
    },
    quiz: [
      {
        q: "The log ends with a Java stack trace. Where is the first real error usually?",
        options: [
          "The last line of the stack",
          "Higher — a [ERROR] or DITA-OT message that names a file",
          "In AEM Sites",
        ],
        answer: 1,
        why: "Read from the first [ERROR] that names a file or a plugin. The stack is the engine falling after that.",
      },
      {
        q: "FAILED because a topic is not well-formed. Completeness was clean yesterday. What is true?",
        options: [
          "Completeness includes well-formedness of every file always",
          "Possible — you broke the file after, or completeness did not parse that file the same way",
          "Then DITA-OT is wrong",
        ],
        answer: 1,
        why: "Run both. A new Text-mode break is a new error.",
      },
      {
        q: "You cannot get FAILED no matter what. What did you probably transform?",
        options: [
          "The map with the break",
          "A different scenario still pointing at the intact original pack",
          "Schema Design",
        ],
        answer: 1,
        why: "Wrong input path is a classic miss. Check the scenario’s input map.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the first [ERROR] line and what BUILD FAILED alone forbids as a quote",
      doTitle: "FAILED then SUCCESS on the clinic copy",
      doDone: "Cause quoted. Repair proven. Rerun SUCCESS.",
      stress: "Ignore the stack until you have the human error line",
    }),
    fieldNotePrompt: "Paste the first real error line and the file it named.",
    tomorrowHook: "Tomorrow you glance at Styles Basket so you know it exists — you will not become a designer.",
    body: `## Required failure

This lab **must FAIL first**. A green bar you did not earn does not grant **transform-log-reader**.

Cause a real break. Apply the scenario. Read the log from the top. Quote the first human error. Open that file. Repair. Rerun.

## What you quote

Good: \`[ERROR] Failed to parse ... inflate-the-tire.dita: well-formedness error...\`

Bad: \`BUILD FAILED\` with no cause.

## Figure

Transformation view red, log scrolled to the first [ERROR]. Caption: *The stack below is not the quote unless nothing else exists.*
`,
  },
  {
    n: 41,
    week: 6,
    title: "Styles Basket awareness — not a designer course",
    objective:
      "Open the publishing template / Styles Basket UI far enough to name two things you may not customize this week.",
    minutes: 90,
    skills: ["publish", "oxygenUi"],
    legacy: ["t5-publish"],
    youtube: [
      yt("webhelp", [
        "Publishing template editor / CSS customization overview",
        "What they change vs what a writer should not touch yet",
      ]),
    ],
    sources: [S.ugEditor, S.videos, S.documentation],
    toolCards: ["transformation"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Look, name, close",
      steps: [
        "From the WebHelp scenario, open the publishing template / CSS / Styles Basket control your version exposes (verify the label — it has moved across versions).",
        "Write oxygen-bootcamp-work/week6/styles-awareness.txt: (1) the control name you found, (2) two settings you must not change on a shared desk (example: deleting a CSS file, swapping fonts for a joke), (3) who on a real team would own a template change.",
        "Do not save a custom template as the new default for all maps.",
        "Do not restyle the pinch warning to look friendly.",
        "Rerun WebHelp only if you changed nothing; if you changed something by accident, revert.",
      ],
      failWhen:
        "You shipped a personal template as the map default, or you cannot name the control, or you restyled safety notes.",
      expected:
        "Awareness file with control name, two forbidden touches, and an owner. Default template unchanged.",
    },
    quiz: [
      {
        q: "Why is this not a designer course?",
        options: [
          "Writers never publish",
          "A shared template is a product decision; a personal CSS fork splits the draft from the release",
          "WebHelp cannot be styled",
        ],
        answer: 1,
        why: "Awareness so you can talk to a lead. No homework to rebrand Kitepump.",
      },
      {
        q: "You need a larger base font for a review PDF. First move?",
        options: [
          "Fork the template in place on the shared map",
          "Ask whether a scenario parameter or a review-only template already exists",
          "Paste Word into the map",
        ],
        answer: 1,
        why: "Do not fork by default. Parameters and named review scenarios exist on many desks.",
      },
      {
        q: "Styles Basket (or equivalent) lives where?",
        options: [
          "AEM Core Components",
          "Oxygen publishing template / WebHelp customization UI (verify the label)",
          "Maps Manager Edit Properties",
        ],
        answer: 1,
        why: "It is a publish-side tool. Not a topic attribute.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the publishing template control and what a personal fork forbids",
      doTitle: "Keep the default template unchanged",
      doDone: "Awareness file written. No saved fork on the map.",
      stress: "Revert if you saved by accident",
    }),
    fieldNotePrompt: "Who would own a real template change on your future desk?",
    tomorrowHook: "Tomorrow is the Week 6 boss: scenarios, WebHelp, a PDF note, and a FAILED log you can read.",
    body: `## Awareness only

The official video shows **publishing templates** and CSS for WebHelp and PDF. Watch so the names are not foreign.

You do not leave this day with a brand. You leave with a note: what the control is called, what you will not touch, who would.

## Safety

Do not restyle warnings to look like body text. Do not set a personal template as the team default.

## Figure

Labeled mock of a template editor: *mock, not your homework.* Caption: *Open, name, close.*
`,
  },
  {
    n: 42,
    week: 6,
    title: "Boss — publish with a log you can read",
    objective:
      "Produce WebHelp SUCCESS, a PDF engine note, and a quoted FAILED-then-fixed error on the clinic copy.",
    minutes: 110,
    skills: ["publish", "review", "maps"],
    legacy: ["t5-publish"],
    youtube: [
      yt("webhelp", ["Template vs scenario recap"]),
      yt("completeness", ["Missing href as a publish failure"]),
    ],
    sources: [S.ugEditor, S.mapsDemo, S.documentation],
    toolCards: ["transformation", "maps-manager"],
    badgeId: "transform-log-reader",
    boss: true,
    lab: {
      pack: "kitepump-dita",
      title: "Clinic: green, paper, red, green",
      steps: [
        "On the week6-failed clinic copy (or a fresh copy), start from a known-good map.",
        "Run WebHelp to SUCCESS. Note the output folder.",
        "Run or record the PDF engine name (or missing-engine message).",
        "Break one href. Run WebHelp to FAILED. Quote the first real error. Repair. SUCCESS.",
        "Confirm output is still outside source. Confirm novice.ditaval behavior in HTML matches your explanation.",
        "Timed completeness read, then a transform. Write both durations if you have them.",
        "Day 43 still unlocks if Day 41 lab is done. Badge waits on the quoted FAILED line.",
      ],
      failWhen:
        "No FAILED quote, or output lives in topics/, or you cannot name the PDF engine/message, or WebHelp never succeeded.",
      expected:
        "WebHelp SUCCESS path. PDF engine note. failed-first-error.txt complete. Completeness clean.",
    },
    quiz: [
      {
        q: "You failed this boss. Does Day 43 stay locked?",
        options: [
          "Yes, forever",
          "No, if Friday (Day 41) lab is done the next week can unlock. The boss badge stays locked until you pass.",
          "No, Daily Burst unlocks the week",
        ],
        answer: 1,
        why: "Boss badge waits. Curriculum week does not hostage you if Friday lab is done.",
      },
      {
        q: "Local WebHelp SUCCESS means the Guides server release is updated. True?",
        options: ["True", "False"],
        answer: 1,
        why: "Different surfaces. Desktop DITA-OT is a draft.",
      },
      {
        q: "The first log line is INFO Loading plugins. Is that the quote for transform-log-reader?",
        options: [
          "Yes — any line",
          "No — quote the first real error that names the break",
          "Yes if it is red",
        ],
        answer: 1,
        why: "The badge is log reader, not log pasting.",
      },
      {
        q: "A missing topicref target: completeness red, transform FAILED. Which do you run first next time?",
        options: [
          "Transform only — faster",
          "Completeness on the map, then transform",
          "PDF only",
        ],
        answer: 1,
        why: "Completeness is cheaper and names missing files before DITA-OT boots.",
      },
    ],
    quests: defaultQuests({
      learn: "Name SUCCESS vs FAILED vs a missing-engine message",
      doTitle: "Clinic copy publishes after a quoted failure",
      doDone: "WebHelp green. PDF noted. FAILED quoted and repaired.",
      stress: "Read the first [ERROR], not the stack tail",
    }),
    fieldNotePrompt: "Paste the FAILED cause and the SUCCESS confirmation as two lines.",
    tomorrowHook: "Week 7: Oxygen XML Web Author, what desktop still does better, and handing files to a non-specialist.",
    body: `## Clinic

This is a week boss: WebHelp + PDF note + **required FAILED log**.

Fail it and **Day 43 still unlocks if Day 41 lab is done**. **transform-log-reader** stays locked until the quote is real.

## Proof

1. HTML you can click.
2. Engine name or missing-engine line.
3. FAILED first error + repair + SUCCESS.

## Figure

Two Transformation results: red then green. Caption: *The red one is the badge evidence.*
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
