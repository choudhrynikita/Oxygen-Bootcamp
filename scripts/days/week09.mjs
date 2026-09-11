import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 56,
    week: 9,
    title: "Another team writes web pages in Adobe",
    objective:
      "Write what AEM is, what Oxygen still is, and why they are not the same product.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemHeadless", [
        "That Adobe has a website tool with an editing side",
        "You are only looking — you will not build a headless site today",
      ]),
    ],
    sources: [S.aemAuthor, S.aemCloudQs, S.aem65],
    toolCards: ["sites-console"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: two desks",
      steps: [
        "You may not have an AEM login. That is expected. Use the official video, the labeled mock in the pack, and this field log.",
        "Create oxygen-bootcamp-work/week9/field-log-56.txt with four sentences: (1) Author is where the website team edits pages. (2) Publish is what a site visitor hits. (3) Oxygen is the Syncro Soft writing app you have used since week 1. (4) There is no product named AEM Oxygen XML Editor.",
        "Add: a campaign landing page belongs on the website team’s desk first, not in your DITA booklet.",
        "Sketch or paste a labeled mock: two boxes, Author | Publish. Caption: mock.",
        "Do not install AEM on your laptop as this lab. Do not treat a developer tutorial as an authoring exercise.",
      ],
      failWhen:
        "The log names AEM Oxygen XML Editor as a real product, or treats publish as last week’s PDF button, or has no mock caption.",
      expected:
        "Four factual sentences. Mock labeled. Landing-page rule present.",
    },
    quiz: [
      {
        q: "What is AEM, in one line?",
        options: [
          "Adobe’s website tool. Another team writes web pages in it",
          "The Syncro Soft writing app you installed in week 1",
          "A PDF engine",
        ],
        answer: 0,
        why: "AEM is Adobe Experience Manager. It is a different desk. You still write help pages in Oxygen.",
      },
      {
        q: "Oxygen and AEM are the same product. True or not?",
        options: [
          "True — the name is AEM Oxygen XML Editor",
          "Not true. Oxygen is Syncro Soft. AEM is Adobe. There is no product called AEM Oxygen XML Editor",
          "True — they both save files, so they are one app",
        ],
        answer: 1,
        why: "Two companies. Two apps. They can hand work to each other later. They are not one editor.",
      },
      {
        q: "Author vs publish: what is the difference?",
        options: [
          "Author is where they edit. Publish is the live copy a visitor hits",
          "Author is Oxygen. Publish is a DITA map",
          "They are two names for last week’s WebHelp folder",
        ],
        answer: 0,
        why: "Two environments. Edit on author. Visitors see publish. This is not a transform scenario.",
      },
    ],
    quests: defaultQuests({
      learn: "Watch the official video and open the labeled mock",
      doTitle: "Write the four sentences and caption the mock",
      doDone: "Log written. Mock labeled. No fake product name.",
      stress: "Pick what AEM is, what Oxygen still is, and what author vs publish means",
    }),
    fieldNotePrompt:
      "What four sentences did you write? Paste them.",
    tomorrowHook:
      "Tomorrow the Sites tree — where their pages live. It is not your booklet.",
    body: `## A different desk

You have been writing help pages in **Oxygen**, the Syncro Soft writing app, since week 1.

Another team writes web pages in a tool called **AEM** (Adobe Experience Manager). Adobe makes it. It is a website tool. Landing pages, marketing pages, the public site.

Oxygen is still your writing app. AEM is still their website tool. They are not the same product. There is no product called “AEM Oxygen XML Editor.” If a search hit or a coworker’s note uses that mash-up, it is still wrong. Write the two names on two lines in your notes.

## Author vs publish

**Author** is the editing environment — where the website team changes a page.

**Publish** is the live copy a visitor hits.

That pair is not last week’s WebHelp folder. You are not running DITA-OT. You are not making a PDF.

You will hear extra words in the video (headless, cloud). Skip them today. You only need: another team, another app, author vs publish.

## Word today

**AEM** — Adobe’s website tool. Not Oxygen. Not your booklet.

## Figure

Labeled mock: two boxes, Author | Publish. Caption: *Mock. Not a screenshot of a customer instance.*

## Lab

Four sentences. Mock labeled. If you have no login, the pack \`aem-author-field-log\` is the work.
`,
  },
  {
    n: 57,
    week: 9,
    title: "The Sites tree is not your booklet",
    objective:
      "Name the Sites console, list three things you can do there, and write why that tree is not a DITA map.",
    minutes: 90,
    skills: ["aemSites", "oxygenUi"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemQuick", [
        "Where pages appear as a tree",
        "The console around that tree",
      ]),
    ],
    sources: [S.basicHandling, S.aemCloudQs, S.aemAuthor],
    toolCards: ["sites-console"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: Sites console",
      steps: [
        "Watch the official Quick site creation video. Pause on the Sites console (or the closest view). Write three control names you can see.",
        "Open samples/aem-author-field-log/mocks/sites-console.txt. It is a labeled mock, not a screenshot of Adobe UI.",
        "Write oxygen-bootcamp-work/week9/field-log-57.txt: Sites console is a page tree. A DITA map is a booklet of topics. They do not share a toolbar.",
        "List three jobs: go to a folder, open a page’s properties, open a page for edit. Write ‘verify in your version’ next to any guessed label.",
        "Do not draw Oxygen Maps Manager inside the mock.",
      ],
      failWhen:
        "The log calls the Sites tree a ditamap, or the mock includes Oxygen toolbars, or there are zero official-video notes.",
      expected:
        "Three control names from the video. Tree vs booklet sentence. Mock labeled.",
    },
    quiz: [
      {
        q: "You need to find the Kitepump landing page on the website team’s desk. First surface?",
        options: [
          "DITA Maps Manager in Oxygen",
          "The Sites console in AEM",
          "Help > About",
        ],
        answer: 1,
        why: "Pages live in Sites. Booklets live in Oxygen. Two trees. Two apps.",
      },
      {
        q: "The Sites tree and your booklet both look like lists. Why not treat them as the same thing?",
        options: [
          "They are the same thing",
          "Sites holds web pages. A map holds pointers to help-page files. Different files, different toolbar",
          "Sites is a completeness check",
        ],
        answer: 1,
        why: "A tree is a tree. The thing in it is not. Do not look for topicref here.",
      },
      {
        q: "Card view, column view, list view. Why care?",
        options: [
          "They are DITA page types",
          "They are ways to see the same page tree — pick one and still know it is not your booklet",
          "They change author vs publish",
        ],
        answer: 1,
        why: "Views are views. The tree is still Sites.",
      },
    ],
    quests: defaultQuests({
      learn: "Pause the video on the Sites console and write three labels",
      doTitle: "Write tree vs booklet and caption the mock",
      doDone: "Three controls named. Mock labeled. Tree vs booklet written.",
      stress: "Pick where a landing page lives, and why the tree is not a map",
    }),
    fieldNotePrompt:
      "Which three control names did you write from the video or the mock?",
    tomorrowHook:
      "Tomorrow you make a page (or walk the create-page wizard on a labeled mock) and write title vs name.",
    body: `## Sites console

The **Sites** console is where the website team’s page tree lives. Create, copy, move, properties. Official docs call the literacy **Basic Handling** — how you move around, select, and open.

It is not Maps Manager. Do not look for a topicref, a key, or completeness here.

Kitepump is still your training product. Their landing page for it would live in this tree. Your handbook still lives in Oxygen.

## Word today

**Sites** — the AEM console that holds web pages as a tree. Not your booklet.

## Figure

Labeled mock: Sites card view with a Kitepump folder. Caption: *Mock. Kitepump is the training product story, not a live Adobe demo.* Open \`samples/aem-author-field-log/mocks/sites-console.txt\`.

## Watch

Pause the video on the tree. Write labels you actually saw. If a label differs in your shop, write “verify”.
`,
  },
  {
    n: 58,
    week: 9,
    title: "Make a page (or walk a labeled mock)",
    objective:
      "Log the Create Page wizard (template, title, name) and three page properties you would fill for Kitepump.",
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
        "From video, instance, or labeled mock: Create Page. Note parent folder, template, title, and name (the URL bit).",
        "Write oxygen-bootcamp-work/week9/field-log-58.txt with a fillable page: title Kitepump HP-40, name kitepump-hp-40, template (write the template name you saw, or ‘standard page template — verify’).",
        "Page properties: title, description, on/off time if shown. Do not invent fields you did not see.",
        "Write: the name field is not a DITA topic id, even if both are lowercase with hyphens.",
        "Labeled mock: Create Page wizard. Caption: mock.",
      ],
      failWhen:
        "You treat the page name as a booklet pointer, or you skip template choice, or you paste a developer setup as the lab.",
      expected:
        "Log with parent, template, title, name. Three properties. Mock labeled.",
    },
    quiz: [
      {
        q: "Page name vs page title. Which one is the URL bit?",
        options: [
          "Title always",
          "Name — title is the human heading",
          "The short line under a DITA title",
        ],
        answer: 1,
        why: "Title can change for display. Name is the path. Verify labels in your AEM version.",
      },
      {
        q: "You pick a template at create time. Can you casually swap it later like a DITA page type?",
        options: [
          "Yes, always easy",
          "Often no — the template is the page shape they already built. Changing it is a lead or developer move",
          "Templates are ditaval files",
        ],
        answer: 1,
        why: "Authors choose from allowed templates. They do not redesign the template this week.",
      },
      {
        q: "A template here is the same as File > New in Oxygen. True or not?",
        options: [
          "True — both are File > New",
          "Not true. In Oxygen a template starts a help page. In AEM a template is the web-page shape already built for that site",
          "True if the name is lowercase",
        ],
        answer: 1,
        why: "Same English word. Two desks. Define it each time.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Create Page: template, title, name",
      doTitle: "Fill a Kitepump page log from video or mock",
      doDone: "Four create fields + three properties. Mock labeled.",
      stress: "Pick name vs title, and what an AEM template is",
    }),
    fieldNotePrompt:
      "What template name did you actually see (or explicitly mark verify)? What title and name did you write?",
    tomorrowHook:
      "Tomorrow Edit vs Preview. Neither is Publish. Neither is Oxygen’s Author view.",
    body: `## Create Page

**Create** → **Page**. Parent folder. **Template**. **Title**. **Name**. Then **Open** or **Done** (verify the button).

A **template** here is the page shape the website team already built. It is not File > New in Oxygen.

**Name** is the URL bit. **Title** is what people read. Lowercase hyphen names look like topic files. They are not. There is no concept template here.

Page **Properties** hold title, tags, times — fill what an author is asked to fill. Do not hunt developer tabs.

If you have no instance, the wizard in the video plus a labeled mock is the lab.

## Word today

**Template** (AEM) — the web-page shape already built for that site. Not an Oxygen File > New starter.

## Figure

Labeled mock: wizard step Template → step Title/Name. Caption: *Mock. Verify button labels on your instance.*
`,
  },
  {
    n: 59,
    week: 9,
    title: "Edit and Preview are not Publish",
    objective:
      "Describe Edit (handles on the page) vs Preview (visitor-like) and write that neither one sends the page live.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemHeadless", [
        "An editing canvas if shown",
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
        "Write oxygen-bootcamp-work/week9/field-log-59.txt: Edit shows handles on the pieces of the page. Preview hides them so you can read the page. Preview does not send the page live.",
        "Add: Oxygen Author view is the page view for XML. Page Editor Edit is the canvas for AEM pages. Do not call Page Editor ‘Author mode’.",
        "List one thing you can only do in Edit (open a piece’s dialog) and one thing Preview is for (read the layout).",
        "Labeled mock: same page, two states, Edit | Preview. Caption: mock.",
      ],
      failWhen:
        "The log says Preview publishes the page, or Page Editor is called Oxygen Author mode, or you skip the mock label.",
      expected:
        "Edit vs Preview vs Publish as three verbs. Mock labeled. Naming rule present.",
    },
    quiz: [
      {
        q: "Preview in Page Editor sends the page live. True or not?",
        options: [
          "True — Preview means publish",
          "Not true. Preview is a view. Publish is a later action that copies the page to the live environment",
          "True if the page looks fine in Edit",
        ],
        answer: 1,
        why: "Three verbs. Edit. Preview. Publish. Preview does not copy anything to visitors.",
      },
      {
        q: "Why not call Page Editor ‘Author mode’?",
        options: [
          "Adobe never uses the word author",
          "Author mode already names Oxygen’s page view — colliding names smash two products",
          "Page Editor has no editing",
        ],
        answer: 1,
        why: "Keep the desks distinct. Say Edit in Page Editor. Say Author in Oxygen.",
      },
      {
        q: "You need to change the page title in properties. Are you on the Edit canvas?",
        options: [
          "Always — titles only live on the canvas",
          "Often Page Properties from the console or an editor menu — not the same as typing on the canvas",
          "In Maps Manager",
        ],
        answer: 1,
        why: "Properties vs the canvas. Both exist. The title in properties is not a sentence you typed in Edit.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Edit and Preview on the page canvas (video or mock)",
      doTitle: "Write three verbs: Edit, Preview, Publish",
      doDone: "Log distinguishes three verbs. Mock labeled. Author mode not borrowed.",
      stress: "Pick what Preview does not do, and why Author mode is the wrong name",
    }),
    fieldNotePrompt:
      "Which verb did you mix up before this lesson — Edit, Preview, or Publish? What did you write in the log?",
    tomorrowHook:
      "Tomorrow a page is a stack of blocks, not a DITA topic.",
    body: `## Three verbs

**Edit** — handles on the pieces of the page, dialogs, insert.

**Preview** — read the page without the handles.

**Publish** — copy the page to the live environment. Not today as a click. Tomorrow-plus. Today you only keep Preview apart from Publish.

Oxygen **Author** is a different product’s page view. Do not borrow the word. Say **Edit** in Page Editor.

## Word today

**Page Editor** — the AEM canvas where you edit a web page. Edit and Preview live here. Publish does not.

## Figure

Labeled mock: toggle Edit | Preview. Caption: *Mock. Not a transform scenario. Not Oxygen Author view.*
`,
  },
  {
    n: 60,
    week: 9,
    title: "A page is a stack of blocks, not a DITA topic",
    objective:
      "Name page vs block, and write why a Text block is not an explaining page.",
    minutes: 90,
    skills: ["aemSites", "ditaTopics"],
    legacy: ["t7-aem"],
    youtube: [yt("aemQuick", ["A page made of stacked pieces, if shown"])],
    sources: [S.coreComp, S.aemAuthor, S.wknd],
    toolCards: ["page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: page vs block",
      steps: [
        "Write oxygen-bootcamp-work/week9/field-log-60.txt: A page is a stack of blocks on a template. A DITA topic is a typed XML file. A Text block is not a concept. A Teaser is not the short line under a DITA title.",
        "List four ready-made blocks you will meet next week: Text, Image, Teaser, Title — names only today.",
        "Draw a labeled mock: page skeleton with three block boxes. Caption: mock.",
        "Write one sentence: you would not paste the prime-the-pump how-to into a Text block on a landing page.",
      ],
      failWhen:
        "The log calls Text a DITA concept, or the mock is unlabeled, or you skip the four block names.",
      expected:
        "Page vs block vs topic distinguished. Four names listed. Mock labeled.",
    },
    quiz: [
      {
        q: "A Text block on a landing page is where you should paste the prime-the-pump how-to. True or not?",
        options: [
          "True — faster",
          "Not true. How-to pages belong in Oxygen. A landing page can tease the product. It does not become the handbook",
          "True if the block is named Task",
        ],
        answer: 1,
        why: "Two desks. A block is a piece of a web page. A topic is a whole help file.",
      },
      {
        q: "What is a component in AEM, in one line?",
        options: [
          "A DITA map",
          "A block on the page — Title, Text, Image. Adobe ships a ready-made set of these blocks",
          "A completeness row",
        ],
        answer: 1,
        why: "Component means block. The page is a stack of them on a template.",
      },
      {
        q: "Are you building a new block type today?",
        options: [
          "Yes — write code",
          "No — authors insert ready-made blocks. Developers build new types",
          "Yes — a Schematron file",
        ],
        answer: 1,
        why: "Author week. Next week you place Text, Image, Teaser as an author. You do not implement them.",
      },
    ],
    quests: defaultQuests({
      learn: "Find a page made of stacked blocks in the video or mock",
      doTitle: "Write page vs block vs topic, and list four block names",
      doDone: "Four-object rule written. Mock labeled.",
      stress: "Pick what a Text block is not, and what a component is",
    }),
    fieldNotePrompt:
      "What would you put on a Kitepump landing page vs in prime-the-pump.dita? Two sentences.",
    tomorrowHook:
      "Tomorrow you send a page live, and take it down. Still a mock if you have no login.",
    body: `## Pages and blocks

An AEM **page** has a template and a stack of **blocks**. Adobe’s ready-made blocks are called **Core Components** — Title, Text, Image, Teaser, and more. You insert them. You do not build them this week.

A **DITA topic** is a whole file with a type (explaining page, how-to, lookup). It is not a block. Do not paste a how-to into a Text block and call the landing page the handbook.

## Word today

**Component** — a block on an AEM page. Title, Text, Image. Not a DITA topic.

## Figure

Labeled mock: page with Title, Image, Text stacked. Caption: *Mock. Not Oxygen Author view.*
`,
  },
  {
    n: 61,
    week: 9,
    title: "Send a page live, and take it down",
    objective:
      "Log Quick Publish vs Unpublish, and write a short checklist you would run before you click.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemQuick", [
        "Going live / any publish action shown",
        "That a live site is the point of the wizard",
      ]),
      yt("aemGlobal", ["A live site is not a local HTML folder on your laptop"]),
    ],
    sources: [S.basicHandling, S.aemAuthor, S.aemCloudQs],
    toolCards: ["sites-console"],
    badgeId: "aem-quick-publish",
    lab: {
      pack: "aem-author-field-log",
      title: "Field log: publish actions",
      steps: [
        "Read Basic Handling plus authoring essentials on publish and unpublish (Experience League). Quote at most one sentence, then write your own.",
        "Write oxygen-bootcamp-work/week9/field-log-61.txt: Quick Publish is a short path to copy selected pages to the live environment. Manage Publication / Publish may include children and later times — verify labels. Unpublish takes the page off the live environment.",
        "Checklist: did I select the right page, do pictures need to come along, is this the author environment I’m allowed to publish from?",
        "Write: this is not Apply Transformation Scenario. No out/ folder appears on your laptop.",
        "Labeled mock: Sites console with Quick Publish on a Kitepump page. Caption: mock.",
      ],
      failWhen:
        "The log treats Quick Publish as last week’s DITA-OT run, or skips Unpublish, or has no checklist.",
      expected:
        "Three actions named. Checklist present. Mock labeled.",
    },
    quiz: [
      {
        q: "Quick Publish vs last week’s WebHelp folder. Same button?",
        options: [
          "Yes",
          "No — AEM copies a page to the live environment. DITA-OT writes HTML on your laptop",
          "Yes if you Preview first",
        ],
        answer: 1,
        why: "Two desks. Two verbs: send live vs write HTML on your laptop.",
      },
      {
        q: "You Quick Publish a page but the picture at the top is missing on the live site. Likely miss?",
        options: [
          "The booklet is missing",
          "The picture was not sent live, or it is not referenced correctly",
          "You forgot Help > About",
        ],
        answer: 1,
        why: "Pictures have their own live state. Authors check what goes along with the page.",
      },
      {
        q: "Unpublish means delete the page from author. True or not?",
        options: [
          "True — gone everywhere",
          "Not true. Unpublish affects the live environment. Author can still hold the page",
          "True if you also Preview",
        ],
        answer: 1,
        why: "Take it down on publish. The editing copy can stay.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Quick Publish and Unpublish on the Sites console (video or mock)",
      doTitle: "Write a pre-publish checklist",
      doDone: "Checklist written. Mock labeled. Not confused with DITA-OT.",
      stress: "Pick Quick Publish vs a transform, and what Unpublish does not delete",
    }),
    fieldNotePrompt:
      "What three checklist lines did you write? What would you check before sending a page with a new picture?",
    tomorrowHook:
      "Tomorrow is the week 9 check. Field logs 56–61, still mocks if no instance. Week 10 stays locked until that day is finished.",
    body: `## Send it. Take it down.

**Quick Publish** — fast copy of what you selected to the live environment.

**Publish / Manage Publication** — more control (tree, schedule — verify labels).

**Unpublish** — take it off the live environment. The author copy can stay.

**Basic Handling** covers selecting items and using the rail. Read it. Do not memorize an old screenshot.

This is not last week’s transform. No DITA-OT log. No \`index.html\` on your laptop. A published URL is the proof — or a field log if you have no instance.

Pictures have to go live too, or the live page shows a hole.

## Word today

**Quick Publish** — a short path to send selected pages live. Not Preview. Not a DITA-OT run.

## Figure

Labeled mock: Quick Publish confirmation. Caption: *Mock. Checklist lives in your log.*
`,
  },
  {
    n: 62,
    week: 9,
    title: "Week 9 check",
    objective:
      "Gather this week’s field logs, keep Oxygen and AEM on two lines, and pass the quiz so week 10 can open.",
    minutes: 110,
    skills: ["aemSites", "review"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemQuick", ["Site creation recap — the tree and going live"]),
      yt("aemHeadless", ["AEM is a website tool with more than one surface — recap only"]),
    ],
    sources: [S.aemAuthor, S.basicHandling, S.coreComp],
    toolCards: ["sites-console", "page-editor"],
    badgeId: "aem-quick-publish",
    boss: true,
    lab: {
      pack: "aem-author-field-log",
      title: "Field logs 56–61 in one folder",
      steps: [
        "Gather field-log-56 through 61 into oxygen-bootcamp-work/week9-check/.",
        "Search your notes for the words AEM Oxygen. You should find zero hits. Every figure that is a mock must say mock.",
        "Write a one-page Kitepump plan: one landing page (Sites), one handbook (DITA in Oxygen). They share a product story, not an app.",
        "Timed: list the menu path for Create Page and for Quick Publish as you understand them, with ‘verify label’ notes.",
        "Pass the quiz. You can retry it. Week 10 stays locked until this day is finished (lab + quiz + a short note).",
      ],
      failWhen:
        "Logs smash AEM and Oxygen into one app, or Quick Publish is described as DITA-OT, or mocks are unlabeled.",
      expected:
        "Check folder complete. Zero fake product names. Two-desk Kitepump plan. Verify-labels present.",
    },
    quiz: [
      {
        q: "You failed this check. Does week 10 open anyway?",
        options: [
          "Yes, the Friday page is enough",
          "No. Finish this day’s lab, quiz, and note. You can retry the quiz.",
          "Yes, if you do the 5-minute warmup",
        ],
        answer: 1,
        why: "Next week waits until you can keep the two desks apart and name Quick Publish without saying transform. Retry is free.",
      },
      {
        q: "You have no AEM login this week. Can you still finish the labs?",
        options: [
          "No, impossible",
          "Yes — a field log plus labeled mocks plus official video notes",
          "Only with a copied screenshot from the internet",
        ],
        answer: 1,
        why: "The pack is aem-author-field-log. A fake login is not the lab.",
      },
      {
        q: "AEM Author is not DITA. Which object is still DITA this week?",
        options: [
          "The landing page Text block",
          "The kitepump handbook you still have in Oxygen",
          "Page properties",
        ],
        answer: 1,
        why: "Two desks, one product story. The handbook did not move.",
      },
      {
        q: "There is a product called AEM Oxygen XML Editor. True or not?",
        options: [
          "True — that is the desktop app",
          "Not true. Oxygen is Syncro Soft. AEM is Adobe. Write the two names on two lines",
          "True in the Sites console",
        ],
        answer: 1,
        why: "Day 56. If it is in your notes, delete it.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Sites vs Oxygen as two desks",
      doTitle: "Gather the logs and write the two-desk Kitepump plan",
      doDone: "Folder complete. Zero fake product names. Plan written.",
      stress: "Pass the quiz. Retry if you need to.",
    }),
    fieldNotePrompt:
      "Write the two-desk Kitepump plan in four sentences.",
    tomorrowHook:
      "Week 10: you place Text, Image, and Teaser on a page — still as an author, still a mock if you have no login.",
    body: `## A check, not a show

This is the week boss. Your evidence is **field logs**, not a stolen login.

You already met these four facts. You are only proving you can name them.

1. Author ≠ publish ≠ last week’s DITA-OT run.
2. Sites console ≠ Maps Manager.
3. Edit ≠ Preview ≠ Publish.
4. Page ≠ topic. Block ≠ how-to.

Fail the quiz and **week 10 stays locked**. Retry as many times as you want. The 5-minute warmup does not open the week.

If you have no instance, a field log with a real checklist plus labeled mocks plus official video notes is enough.

## Word today

**Two desks** — Oxygen for the handbook. AEM Sites for the web pages. One product story. Not one app.

## Figure

Folder of field logs. Caption: *aem-author-field-log pack. Mocks labeled.*
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
