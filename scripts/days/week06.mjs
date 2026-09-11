import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 36,
    week: 6,
    title: "What \"publish\" means here",
    objective:
      "Open Configure Transformation Scenario, filter DITA Map, and attach a recipe to kitepump.ditamap without dumping output into the source folder.",
    minutes: 90,
    skills: ["publish", "maps"],
    legacy: ["t5-publish"],
    youtube: [
      yt("webhelp", [
        "Where publishing recipes sit",
        "That a site and a PDF are two outputs from the same booklet",
      ]),
    ],
    sources: [S.ugEditor, S.authorDita, S.documentation],
    toolCards: ["transformation", "maps-manager"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Name the recipe, pick the output folder",
      steps: [
        "Set kitepump.ditamap as the root map. Open DITA Maps Manager.",
        "Configure Transformation Scenario (toolbar or Document > Transformation — verify the label). Filter ‘DITA Map’.",
        "Select DITA Map WebHelp Responsive. That is a clickable draft site. Do not run it yet.",
        "Set the output folder to oxygen-bootcamp-work/week6/out-webhelp/ — outside the source tree. If the default is inside maps/, change it.",
        "If the recipe has a field for a switch file, attach novice.ditaval. Write whether you attached it.",
        "Save the recipe on the map if your version stores it. Write the recipe name in oxygen-bootcamp-work/week6/scenario-name.txt.",
      ],
      failWhen:
        "Output is set to the source topics/ folder, or you published a single page when you meant the booklet, or you skipped Configure and ran a mystery default.",
      expected:
        "Recipe named and attached to the booklet. Output folder outside source. Switch-file field noted. Nothing published yet — or a clean first run if you did run it.",
    },
    quiz: [
      {
        q: "You run a transformation scenario. What should you select as the thing to publish?",
        options: [
          "The currently open paragraph",
          "The DITA map (the booklet)",
          "Help > About",
        ],
        answer: 1,
        why: "Publish the booklet. One page is a fragment, not the handbook.",
      },
      {
        q: "Output folder is inside topics/. What goes wrong later?",
        options: [
          "Nothing — the engine skips page files",
          "Generated files get mixed with source, or even pointed at by the booklet",
          "Oxygen deletes the booklet",
        ],
        answer: 1,
        why: "out/ stays out. Source stays source.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Configure Transformation Scenario and the DITA Map filter",
      doTitle: "Attach a recipe and put output outside the pack",
      doDone: "Recipe associated to the booklet. Output path recorded. Switch-file field noted.",
      stress: "Pick what you publish, and why output cannot live in topics/",
    }),
    fieldNotePrompt:
      "What recipe name did you attach, and where will the output folder live?",
    tomorrowHook: "Tomorrow you run that recipe and open a clickable draft site.",
    body: `## Publish, on this desk

**Publish** here means: turn the booklet into a site or a PDF.

A **transformation scenario** is a saved recipe: which booklet, which engine, which output folder.

**DITA-OT** is the engine that turns the booklet into a site or a PDF. You do not start it by hand. The recipe starts it.

**Configure Transformation Scenario** → filter **DITA Map**. Pick the type. Set **output** outside source (for example \`out/\`).

If yesterday’s switch file belongs on this output, attach it here too. Author preview and publish filters are different attachments.

The recipe named **WebHelp Responsive** makes a clickable draft site. You will run it tomorrow.

Do not run it yet unless you want a peek.

## Word today

**Publish** — turn the booklet into a site or a PDF. **Transformation scenario** — the saved recipe. **DITA-OT** — the engine that does the turning.
`,
  },
  {
    n: 37,
    week: 6,
    title: "Make a clickable draft site",
    objective:
      "Publish kitepump.ditamap to a draft site and open the output index.html, then match three table-of-contents entries to page titles.",
    minutes: 90,
    skills: ["publish", "maps"],
    legacy: ["t5-publish"],
    youtube: [
      yt("webhelp", [
        "Output as a folder of HTML",
        "A publishing template vs the recipe",
      ]),
    ],
    sources: [S.ugEditor, S.videos, S.authorDita],
    toolCards: ["transformation", "maps-manager"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Draft site, three contents checks",
      steps: [
        "Apply the WebHelp Responsive recipe on kitepump.ditamap. Wait for the Transformation view.",
        "If the status is SUCCESS, open out-webhelp/index.html in a browser (Oxygen may offer Open).",
        "Write three table-of-contents labels you see and the page files they come from.",
        "Confirm the product name resolved in the site (Kitepump KP-2a, not the key string).",
        "If the expert step is missing, check whether novice.ditaval was attached. Write which it was.",
        "If the status is FAILED, do not panic — day 40 is the failed-log lab. Still paste the first error line into the field note and stop; do not thrash for an hour.",
      ],
      failWhen:
        "You published a single page and called it the book, or you cannot find index.html, or you saved the output into topics/.",
      expected:
        "A site folder exists. Three contents lines mapped to files. Product name resolved — or a first error line parked for day 40.",
    },
    quiz: [
      {
        q: "A WebHelp output is a folder. What is the usual file you open first?",
        options: [
          "the .ditamap",
          "index.html (verify in your output)",
          "the completeness report",
        ],
        answer: 1,
        why: "You open HTML. The map is source.",
      },
      {
        q: "The site’s table of contents is missing a page that completeness still includes. First place you look?",
        options: [
          "toc=\"no\" on the booklet line, or a nested booklet not pointed at",
          "Hints in Author",
          "Help > About",
        ],
        answer: 0,
        why: "Publish reads the booklet. toc=no hides a node. Completeness does not mean ‘visible in the site contents’.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Apply Transformation Scenario and the Transformation view",
      doTitle: "Open index.html and match three contents entries",
      doDone: "Output exists. Three mappings written. Product name checked.",
      stress: "Pick the entry file, and why a page can pass completeness and still be hidden",
    }),
    fieldNotePrompt:
      "Which three contents labels did you match to files, and did the product name show?",
    tomorrowHook: "Tomorrow you make a PDF draft — or you write why the PDF tool is missing.",
    body: `## A site you can click

**WebHelp** is a draft website the engine builds from your booklet. Apply the recipe. Read **Transformation**. Open \`index.html\`.

You are not designing a theme today. You are proving the booklet produces a site you can click.

If the product name is still the key string, the root map or the recipe’s booklet input is wrong.

A local site is a draft on your desk. That is enough this week.

## Word today

**WebHelp** — a draft website the engine builds from your booklet. You open \`index.html\`.
`,
  },
  {
    n: 38,
    week: 6,
    title: "Make a PDF draft",
    objective:
      "Run a DITA Map PDF recipe if your install has one, write which tool produced the file, and skip with a reason if it is missing.",
    minutes: 90,
    skills: ["publish", "oxygenUi"],
    legacy: ["t5-publish"],
    youtube: [
      yt("webhelp", [
        "PDF mentioned next to the site output",
        "That look settings can apply to PDF — awareness, not homework",
      ]),
    ],
    sources: [S.ugEditor, S.documentation, S.videos],
    toolCards: ["transformation"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "One PDF, named tool",
      steps: [
        "In Configure Transformation Scenario, filter DITA Map PDF. Pick the recipe your install ships (PDF — based on HTML5 & CSS, Chemistry, or another PDF recipe — verify the name).",
        "Output to oxygen-bootcamp-work/week6/out-pdf/. Run it.",
        "If SUCCESS, open the PDF. Write: tool name, page count, whether the pinch warning appears.",
        "Chemistry is a PDF tool some teams use — if you do not have it, skip and write why. If any PDF recipe is missing, write the missing-tool message in oxygen-bootcamp-work/week6/pdf-engine.txt. That message is the lab, not a fake PDF.",
        "Do not install a random look to ‘make it pretty’. Do not treat this as a layout app.",
        "Keep the PDF out of the source booklet folder.",
      ],
      failWhen:
        "You ship a screenshot of someone else’s PDF as yours, or you dump output into topics/, or you claim a tool name the log does not use.",
      expected:
        "pdf-engine.txt names the tool or the missing-tool message. Output path outside source. Warning presence noted if a PDF exists.",
    },
    quiz: [
      {
        q: "Why write the PDF tool’s name?",
        options: [
          "It is trivia",
          "The log and the missing-tool errors use that name; ‘the PDF button’ is not a diagnosis",
          "The booklet check needs it",
        ],
        answer: 1,
        why: "This week is log literacy. Tools have names.",
      },
      {
        q: "The PDF dropped your table borders. First move today?",
        options: [
          "Rewrite the table as a picture",
          "Write it down; check whether the table is clean first. Do not start a look career this afternoon",
          "Switch the whole book to a notepad file",
        ],
        answer: 1,
        why: "Validity and recipe choice first. Look comes later, and not from you this week.",
      },
    ],
    quests: defaultQuests({
      learn: "Find a DITA Map PDF recipe, or the missing-tool message",
      doTitle: "Run a PDF draft or write why you skipped",
      doDone: "Tool named, or skip reason written. Output path clean.",
      stress: "Pick why the tool name matters, and the first move when borders drop",
    }),
    fieldNotePrompt:
      "Which PDF tool ran, or which exact missing-tool line did you capture?",
    tomorrowHook: "Tomorrow you read a SUCCESS log like a skeptic.",
    body: `## A PDF is also a recipe

A **PDF** is a print-style file the engine builds from your booklet.

**Chemistry** is a PDF tool some teams use — if you do not have it, skip and write why.

Name the tool. Put the file in \`out-pdf/\`. Check one fact (the warning). Stop.

If the tool is not installed, the log says so. That line is a valid lab outcome. Do not download a random add-on off a blog.

## Word today

**PDF** — a print-style file the engine builds from your booklet. **Chemistry** — a PDF tool some teams use; skip and write why if you do not have it.
`,
  },
  {
    n: 39,
    week: 6,
    title: "Read the log even when it works",
    objective:
      "Open a SUCCESS log, copy three lines (start, a warning if any, finish), and say what you would ignore.",
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
        "Rerun the site recipe or the PDF recipe so you have a fresh log in Transformation view.",
        "Open the log (the view usually has a log document or console — verify).",
        "Copy into oxygen-bootcamp-work/week6/success-log-excerpt.txt: (1) the command or recipe name, (2) one WARN or INFO that is not fatal, (3) the BUILD SUCCESSFUL / SUCCESS line.",
        "If there is a WARN about a missing image or a broken name, that is not SUCCESS in spirit — go fix it. Do not write around a real miss.",
        "Write one line: I will ignore ____ (example: a default-parameter INFO) and I will never ignore ____ (FAILED, missing file, broken name).",
        "Do not paste a 4000-line log into the field note.",
      ],
      failWhen:
        "The excerpt has no SUCCESS line, or you ignored a missing-file WARN, or you pasted the entire log.",
      expected:
        "Three-line excerpt. Ignore / never-ignore sentence. Real WARNs fixed or explained.",
    },
    quiz: [
      {
        q: "BUILD SUCCESSFUL with a WARN: missing image. Ship it?",
        options: [
          "Yes — SUCCESS means ship",
          "No — treat a missing image as a defect; completeness should have caught it too",
          "Yes if the PDF has enough pages",
        ],
        answer: 1,
        why: "The engine can succeed and still omit a figure. Completeness plus the log together.",
      },
      {
        q: "HTML looks empty but the log says SUCCESS. First place you look?",
        options: [
          "The output folder path you configured (did you open an old out/?)",
          "Help > About",
          "The Styles dropdown",
        ],
        answer: 0,
        why: "Wrong folder is the classic ‘success but empty’ bug.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the log in Transformation view",
      doTitle: "Copy three lines from a SUCCESS log",
      doDone: "Excerpt written. Real WARNs fixed or called out. Ignore rule written.",
      stress: "Pick whether SUCCESS plus a missing image ships, and where empty HTML points",
    }),
    fieldNotePrompt:
      "What three lines did you copy, and which WARN did you fix or call out?",
    tomorrowHook: "Tomorrow you will cause a FAILED run on purpose and read the first real error.",
    body: `## The log is a document

Transformation view is not only a green bar. Open the **log**. Read the first unexpected line.

SUCCESS plus a missing image is a defect. SUCCESS plus an INFO about a default parameter is noise.

Start. First interesting WARN. Finish. That is the note. The rest waits.

## Word today

**Log** — the text the engine writes while it works. **SUCCESS** still needs a glance.
`,
  },
  {
    n: 40,
    week: 6,
    title: "When publish fails, read the first real error",
    objective:
      "Cause a FAILED run on purpose, quote the first real error, repair it, and rerun to SUCCESS.",
    minutes: 110,
    skills: ["publish", "review", "xmlLiteracy"],
    legacy: ["t5-publish", "t4-complete"],
    youtube: [
      yt("completeness", ["Missing path rows you might also see in a log"]),
      yt("webhelp", ["A failed custom template is not today’s hunt unless the log names it"]),
    ],
    sources: [S.ugEditor, S.mapsDemo, S.documentation],
    toolCards: ["transformation", "maps-manager"],
    badgeId: "transform-log-reader",
    lab: {
      pack: "kitepump-dita",
      title: "Break, read, repair, rerun",
      steps: [
        "Copy kitepump to oxygen-bootcamp-work/week6-failed/ so you can break a copy.",
        "Break 1 (pick one): point a booklet line at a missing file, or delete a closing tag in a page the booklet includes.",
        "Run WebHelp Responsive. Status must be FAILED (if it still succeeds, break the booklet path until it fails).",
        "Copy the first real error line (not a long technical dump at the bottom if a human line exists above it) into oxygen-bootcamp-work/week6/failed-first-error.txt.",
        "Repair the copy. Rerun. SUCCESS. Quote the SUCCESS line under the error in the same file.",
        "Write one sentence: the first place I looked was ____ (log, then the file it named).",
      ],
      failWhen:
        "You never produced FAILED, or you quoted only ‘BUILD FAILED’ with no cause, or you left the copy broken, or you ‘fixed’ it by switching to a different booklet.",
      expected:
        "failed-first-error.txt has FAILED cause + SUCCESS confirmation. Check copy publishes.",
    },
    quiz: [
      {
        q: "The log ends with a long technical stack. Where is the first real error usually?",
        options: [
          "The last line of the stack",
          "Higher — an [ERROR] or engine message that names a file",
          "Help > About",
        ],
        answer: 1,
        why: "Read from the first [ERROR] that names a file. The stack is the engine falling after that.",
      },
      {
        q: "FAILED because a page is not well-formed. Completeness was clean yesterday. What is true?",
        options: [
          "Completeness always includes well-formedness of every file",
          "Possible — you broke the file after, or completeness did not read that file the same way",
          "Then the engine is wrong",
        ],
        answer: 1,
        why: "Run both. A new Text-mode break is a new error.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the first [ERROR] line that names a file",
      doTitle: "FAILED then SUCCESS on the broken copy",
      doDone: "Cause quoted. Repair proven. Rerun SUCCESS.",
      stress: "Pick where the real error lives, and how a new tag break sneaks past yesterday’s completeness",
    }),
    fieldNotePrompt: "Paste the first real error line and the file it named.",
    tomorrowHook: "Tomorrow you glance at the look controls so you know they exist — then you close them.",
    body: `## It must fail first

Cause a real break. Apply the recipe. Read the log from the top. Quote the first human error. Open that file. Repair. Rerun.

Good quote: a line that names \`inflate-the-kite.dita\` (or whichever file you broke) and says well-formed or missing file.

Bad quote: \`BUILD FAILED\` with no cause.

## Word today

**FAILED** — the engine stopped. The quote is the first real error that names a file, not the last stack line.
`,
  },
  {
    n: 41,
    week: 6,
    title: "Leave the look of the site to a designer",
    objective:
      "Open the publishing template control far enough to name two things you will not customize this week, then close it.",
    minutes: 90,
    skills: ["publish", "oxygenUi"],
    legacy: ["t5-publish"],
    youtube: [
      yt("webhelp", [
        "Publishing template editor overview",
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
        "From the WebHelp recipe, open the publishing template / look control your version exposes (verify the label — it has moved across versions).",
        "Write oxygen-bootcamp-work/week6/styles-awareness.txt: (1) the control name you found, (2) two settings you must not change on a shared desk (example: deleting a look file, swapping fonts for a joke), (3) who on a real team would own a template change.",
        "Do not save a custom template as the new default for all booklets.",
        "Do not restyle the pinch warning to look friendly.",
        "Rerun WebHelp only if you changed nothing; if you changed something by accident, revert.",
      ],
      failWhen:
        "You shipped a personal template as the booklet default, or you cannot name the control, or you restyled safety notes.",
      expected:
        "Awareness file with control name, two hands-off settings, and an owner. Default template unchanged.",
    },
    quiz: [
      {
        q: "Why is this not a designer course?",
        options: [
          "Writers never publish",
          "A shared template is a product decision; a personal fork splits the draft from what others see",
          "A draft site cannot be styled",
        ],
        answer: 1,
        why: "Awareness so you can talk to a lead. No homework to rebrand the pump.",
      },
      {
        q: "You need a larger base font for a review PDF. First move?",
        options: [
          "Fork the template in place on the shared booklet",
          "Ask whether a recipe setting or a review-only template already exists",
          "Paste from a word processor into the booklet",
        ],
        answer: 1,
        why: "Do not fork by default. Named review recipes exist on many desks.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the publishing template control from the site recipe",
      doTitle: "Name the control, write two hands-off settings, close it",
      doDone: "Awareness file written. No saved fork on the booklet.",
      stress: "Pick why you do not fork, and the first move for a larger review font",
    }),
    fieldNotePrompt:
      "What was the control called, and who would own a real template change on your desk?",
    tomorrowHook: "Tomorrow is the week check. Passing it opens week 7.",
    body: `## Look, name, close

The official video shows **publishing templates** — controls for how the site and the PDF look. Watch so the names are not foreign.

You do not leave this day with a brand. You leave with a note: what the control is called, what you will not touch, who would.

Do not restyle warnings to look like body text. Do not set a personal template as the team default.

## Word today

**Publishing template** — a control that changes how the site or PDF looks. A designer (or a lead) owns this. You look, name it, and close it.
`,
  },
  {
    n: 42,
    week: 6,
    title: "Week 6 check",
    objective:
      "Produce a site SUCCESS, a PDF tool note, and a quoted FAILED-then-fixed error on the check copy.",
    minutes: 110,
    skills: ["publish", "review", "maps"],
    legacy: ["t5-publish"],
    youtube: [
      yt("webhelp", ["Template vs recipe recap"]),
      yt("completeness", ["A missing path as a publish failure"]),
    ],
    sources: [S.ugEditor, S.mapsDemo, S.documentation],
    toolCards: ["transformation", "maps-manager"],
    badgeId: "transform-log-reader",
    boss: true,
    lab: {
      pack: "kitepump-dita",
      title: "Site, paper, red, green",
      steps: [
        "On the week6-failed copy (or a fresh copy), start from a known-good booklet.",
        "Run WebHelp to SUCCESS. Note the output folder.",
        "Run or record the PDF tool name (or missing-tool message).",
        "Break one booklet path. Run WebHelp to FAILED. Quote the first real error. Repair. SUCCESS.",
        "Confirm output is still outside source. Confirm the novice switch file in the site matches your explanation.",
        "Run completeness, then a transform.",
        "Pass the quiz. Week 7 stays locked until this day is finished (lab + quiz + a short note).",
      ],
      failWhen:
        "No FAILED quote, or output lives in topics/, or you cannot name the PDF tool or skip reason, or the site never succeeded.",
      expected:
        "WebHelp SUCCESS path. PDF tool note. failed-first-error.txt complete. Completeness clean.",
    },
    quiz: [
      {
        q: "You failed this check. Does week 7 open?",
        options: [
          "Yes, Friday’s look-and-close is enough",
          "No. Week 7 stays locked until this day is finished. Retry the quiz if you need to.",
          "Yes, if the 5-minute warmup is done",
        ],
        answer: 1,
        why: "Lab, quiz, and a short note. Retry is free. The warmup does not open the week.",
      },
      {
        q: "The first log line is INFO Loading plugins. Is that the quote for this check?",
        options: [
          "Yes — any line",
          "No — quote the first real error that names the break",
          "Yes if it is red",
        ],
        answer: 1,
        why: "The badge is log reader, not log pasting.",
      },
      {
        q: "A missing booklet target: completeness red, transform FAILED. Which do you run first next time?",
        options: [
          "Transform only — faster",
          "Completeness on the booklet, then transform",
          "PDF only",
        ],
        answer: 1,
        why: "Completeness is cheaper and names missing files before the engine starts.",
      },
    ],
    quests: defaultQuests({
      learn: "Name SUCCESS vs FAILED vs a missing-tool message",
      doTitle: "Publish the check copy after a quoted failure",
      doDone: "Site green. PDF noted. FAILED quoted and repaired.",
      stress: "Pass the quiz. Retry if you need to.",
    }),
    fieldNotePrompt:
      "Paste the FAILED cause and the SUCCESS confirmation as two lines.",
    tomorrowHook:
      "Week 7: work with other people. The writing app in a browser, and what the desktop still does better.",
    body: `## A check, not a show

This is the week boss: a clickable site, a PDF note, and a **required FAILED log**.

1. HTML you can click.
2. Tool name or missing-tool line.
3. FAILED first error + repair + SUCCESS.

Fail the quiz and **week 7 stays locked**. Retry as many times as you want. The 5-minute warmup does not open the week.

## Word today

No new word. Use **publish**, **WebHelp**, **PDF**, **log**, **SUCCESS**, and **FAILED** in the two lines you paste.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
