import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 76,
    week: 12,
    title: "Guides in the browser vs Oxygen on the desktop",
    objective:
      "Write who lives in Guides and who still opens Oxygen, and cross out the fake product name AEM Oxygen XML Editor.",
    minutes: 90,
    skills: ["aemGuides", "oxygenUi"],
    legacy: ["t7-guides"],
    youtube: [
      yt("ditaStart", [
        "Desktop booklet tools that a browser editor will not fully replace",
      ]),
    ],
    sources: [S.guidesOverview, S.guidesStart, S.ugEditor],
    toolCards: ["guides-web-editor", "maps-manager"],
    badgeId: null,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Who lives where",
      steps: [
        "Read samples/guides-oxygen-handoff/who-edits-where.md.",
        "Write oxygen-bootcamp-work/week12/field-log-76.txt.",
        "Write: subject-matter experts and review cycles → Guides web editor.",
        "Write: rebuilding a booklet, house-style checks, offline frameworks → Oxygen desktop.",
        "Write the forbidden name and cross it out: there is no product called AEM Oxygen XML Editor.",
        "If you have no Guides, label a mock of two desks and still write the two homes.",
      ],
      failWhen: "You use the forbidden product name as if it were real.",
      expected: "Two homes written. Forbidden name crossed out. Mock labeled if no instance.",
    },
    quiz: [
      {
        q: "What is AEM Guides, in one line?",
        options: [
          "Adobe’s DITA tool in the browser: write, review, and publish the handbook",
          "A theme for the Sites page tree",
          "A new name for Oxygen XML Editor",
        ],
        answer: 0,
        why: "Guides is Adobe’s DITA desk in the browser. Oxygen is Syncro Soft on the desktop.",
      },
      {
        q: "There is a product called AEM Oxygen XML Editor. True or not?",
        options: [
          "True — Adobe bought Oxygen and merged the names",
          "Not true — two companies, two apps. Guides can open Oxygen. They are not one product",
          "True if you enable a connector",
        ],
        answer: 1,
        why: "You wrote this in week 9. It is still true. Cross the fake name out.",
      },
    ],
    quests: defaultQuests({
      learn: "Read who-edits-where.md in the pack",
      doTitle: "Write two homes and cross out the fake product name",
      doDone: "Two homes written. Fake product name crossed out.",
      stress: "Pick what Guides is, and whether the merged product name is real",
    }),
    fieldNotePrompt: "What two homes did you write, and which fake product name did you cross out?",
    tomorrowHook: "Tomorrow: checkout and check-in, like borrowing a book.",
    body: `## Two desks, one handbook

**AEM Guides** is Adobe’s DITA tool in the browser. People write, review, and publish the handbook there. Subject-matter experts should live there.

**Oxygen** is still Syncro Soft on your desktop. You still open it to rebuild a booklet, run house-style checks, and work offline.

Guides can launch Oxygen. They are not one product. There is no product called **AEM Oxygen XML Editor**. You wrote that in week 9. Write it again.

If you have no Guides, a labeled mock of two desks is the lab.

## Word today

**AEM Guides** — Adobe’s DITA tool in the browser.

## Watch

The Oxygen booklet video is a reminder of what the desktop still does. You are not installing a merged app.

## Lab

Two homes. One forbidden name, crossed out.

## Figure

Labeled mock: browser desk | desktop desk. Caption: *Mock. Two products.*
`,
  },
  {
    n: 77,
    week: 12,
    title: "Checkout and check-in, like borrowing a book",
    objective:
      "Write the cycle: checkout, edit, check in — and what goes wrong if two people skip the lock.",
    minutes: 90,
    skills: ["aemGuides", "review"],
    legacy: ["t7-connector"],
    youtube: [
      yt("completeness", [
        "A book still needs a lock so two people do not overwrite the same page",
      ]),
    ],
    sources: [S.guidesOverview, S.editOxygen],
    toolCards: ["guides-web-editor"],
    badgeId: "checkout-checkin",
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Cycle card",
      steps: [
        "Write oxygen-bootcamp-work/week12/field-log-77.txt with four sentences.",
        "Checkout locks the topic so a teammate cannot overwrite you. Like borrowing a library book.",
        "Edit in Guides, or — if the desk allows it — Edit in Oxygen.",
        "Check in returns the lock and stores a version of the topic in Guides.",
        "Skip checkout: two writers, last save wins, or a conflict you cannot explain.",
        "If you have Guides, complete one real cycle. If not, label this mock and still write the cycle.",
      ],
      failWhen: "You describe checkout as AEM Sites Quick Publish.",
      expected: "Four sentences. Mock labeled if no instance.",
    },
    quiz: [
      {
        q: "Checkout in Guides is the same as Preview in the Page Editor. True or not?",
        options: [
          "True — both are a look-before-you-leap",
          "Not true — checkout is a lock on a DITA topic. Preview is a Sites view",
          "True on Cloud only",
        ],
        answer: 1,
        why: "A lock is not a preview. Different desks.",
      },
      {
        q: "Two writers edit the same topic with no checkout. What often happens?",
        options: [
          "Guides merges every sentence automatically",
          "Last save wins, or a conflict nobody can explain",
          "The topic publishes itself",
        ],
        answer: 1,
        why: "Borrow the book. Write. Return it.",
      },
    ],
    quests: defaultQuests({
      learn: "See checkout as borrowing the topic, check-in as giving it back",
      doTitle: "Write the four-sentence cycle card",
      doDone: "Four sentences. No Sites mix-up.",
      stress: "Pick checkout vs Preview, and what skip-the-lock does",
    }),
    fieldNotePrompt: "Write the four sentences you put on the cycle card.",
    tomorrowHook: "Tomorrow: the Edit in Oxygen button — what it means, and who turns it on.",
    body: `## Borrow, write, return

**Checkout** locks the topic so a teammate cannot overwrite you. Like borrowing a library book. **Check-in** gives the book back and stores a version in Guides.

In between, you edit. In Guides in the browser, or — if the desk allows it — in Oxygen on the desktop.

You do not need a live Guides box to learn the words. You do need the words right. Checkout is not Preview. Checkout is not Quick Publish.

Skip the lock and two people write the same file. Last save wins, or a conflict you cannot explain.

## Word today

**Checkout** — borrow the topic. It is locked for you.

**Check-in** — give it back. Guides stores a version.

## Lab

Four sentences. Real cycle if you have Guides. Labeled mock if you do not.

## Figure

Labeled mock: Checkout → Edit → Check in. Caption: *Mock. A lock, not a publish.*
`,
  },
  {
    n: 78,
    week: 12,
    title: "Edit in Oxygen — what that button means",
    objective:
      "Open the official Configure Edit in Oxygen article and write that an admin turns the button on — authors do not guess settings on the live system.",
    minutes: 90,
    skills: ["aemGuides", "oxygenUi"],
    legacy: ["t7-connector"],
    youtube: [
      yt("customize", [
        "Desktop setups must match what the server expects",
      ]),
    ],
    sources: [S.editOxygen, S.desktop, S.guidesOverview],
    toolCards: ["guides-web-editor", "author-mode"],
    badgeId: null,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Admin owns the switch",
      steps: [
        "Open the Experience League article Configure Edit in Oxygen (Source box).",
        "Write oxygen-bootcamp-work/week12/field-log-78.txt: an admin enables the connector. Authors do not guess a setting on production.",
        "Copy the setting name from the pack as a question for an admin (com.adobe.fmdita.xmleditor.config.XmlEditorConfig / xmleditor.editinoxygen=true). Then write ‘verify in the article for your cloud vs on-prem’.",
        "Write: keep DITA version, catalogs, and house-style checks the same on server and desktop.",
        "Do not paste a made-up config as if you applied it.",
      ],
      failWhen: "You paste a made-up config as if you applied it on production.",
      expected:
        "Article noted. Setting treated as an admin question. Match-the-server sentence written.",
    },
    quiz: [
      {
        q: "Who turns on Edit in Oxygen?",
        options: [
          "Any author, by guessing the setting on production",
          "An admin, after reading the official article",
          "The 5-minute warmup",
        ],
        answer: 1,
        why: "The button is real. The live switch is admin work.",
      },
      {
        q: "House-style checks differ on the desktop and on the server. What breaks?",
        options: [
          "Nothing — desktop always wins",
          "A topic can look clean in Oxygen and fail when you check it in",
          "Sites Quick Publish fails",
        ],
        answer: 1,
        why: "Same rules on both desks, or you fight yourself.",
      },
    ],
    quests: defaultQuests({
      learn: "Open the official Configure Edit in Oxygen article",
      doTitle: "Write that an admin owns the switch",
      doDone: "Admin question written. Match-the-server sentence written.",
      stress: "Pick who turns the button on, and what a rules mismatch does",
    }),
    fieldNotePrompt: "Who would you ask to enable Edit in Oxygen, and which article did you open?",
    tomorrowHook: "Tomorrow: the booklet lives in AEM’s library. Your laptop holds a working copy.",
    body: `## A button, not a prod change

**Edit in Oxygen** is a button in Guides. It opens the topic in desktop Oxygen. Then you check it back in.

An admin turns this on. You do not guess a setting on the live system. The official article is in the Source box. Cloud and on-prem labels differ. Verify.

Keep the DITA version, the catalogs, and the house-style checks the same on the server and on the desktop. If they differ, a topic can look clean in Oxygen and fail when you check it in.

Your lab is to understand the button. It is not to change production.

## Word today

**Edit in Oxygen** — a Guides button that opens the topic in desktop Oxygen.

## Lab

Article open. Admin question written. No cowboy config.

## Figure

Labeled mock: Guides toolbar with Edit in Oxygen. Caption: *Mock. Admin owns the switch.*
`,
  },
  {
    n: 79,
    week: 12,
    title: "Booklets and pages living in AEM",
    objective:
      "Explain that Guides stores the DITA booklet in AEM’s library, and a desktop path is a working copy after checkout.",
    minutes: 90,
    skills: ["aemGuides", "maps"],
    legacy: [],
    youtube: [
      yt("maps", ["The booklet is still a table of contents, wherever it lives"]),
    ],
    sources: [S.guidesOverview, S.guidesStart],
    toolCards: ["guides-web-editor", "maps-manager"],
    badgeId: null,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Library vs working copy",
      steps: [
        "Write oxygen-bootcamp-work/week12/field-log-79.txt: in Guides, the map is a file in AEM’s library (Assets), not a desktop-only file.",
        "Write: Edit in Oxygen makes a working copy. Check in puts it back.",
        "Open kitepump.ditamap locally as the analog of that working copy. Run completeness. The links should still work.",
        "Do not upload the sample into a real library as a stunt.",
      ],
      failWhen: "You treat this git repo as the AEM library.",
      expected: "Library vs working copy written. Local completeness still clean.",
    },
    quiz: [
      {
        q: "Once DITA lives in AEM, completeness in Oxygen no longer matters. True or not?",
        options: [
          "True — the server fixes links",
          "Not true — the booklet can still miss files. Completeness still names them",
          "True after the first check-in",
        ],
        answer: 1,
        why: "Storage moved. The booklet is still a booklet. Broken links still break.",
      },
      {
        q: "After checkout, the file on your laptop is…",
        options: [
          "The only copy that exists",
          "A working copy. Check in puts it back in the library",
          "A Sites page",
        ],
        answer: 1,
        why: "Borrow, edit, return. The library keeps the book.",
      },
    ],
    quests: defaultQuests({
      learn: "See the booklet as a library file, and the laptop as a working copy",
      doTitle: "Run completeness on the local analog",
      doDone: "kitepump completeness clean. No library stunt.",
      stress: "Pick whether completeness retired, and what a working copy is",
    }),
    fieldNotePrompt: "Where did you write that the booklet lives, and did local completeness still pass?",
    tomorrowHook: "Tomorrow: publish from Guides vs a local Oxygen draft.",
    body: `## The booklet still exists

In Guides, the map is a file in AEM’s **library** (Assets). It is not a desktop-only file.

**Edit in Oxygen** makes a **working copy** on your laptop — a copy you edit while the library holds the book. Check in puts it back.

Open \`kitepump.ditamap\` locally as the analog of that working copy. Completeness still applies. Missing links still matter. Storage moved. The booklet did not retire.

Do not treat this git repo as the AEM library. Do not upload the sample into a real library as a stunt.

## Word today

**Working copy** — the file on your laptop after checkout. Check in returns it.

## Lab

Two sentences (library vs working copy). Local completeness still clean.

## Figure

Labeled mock: library box and laptop box, one arrow each way. Caption: *Mock. Borrow and return.*
`,
  },
  {
    n: 80,
    week: 12,
    title: "Publish from Guides",
    objective:
      "Contrast a local Oxygen WebHelp draft with a Guides server publish, and keep Sites Quick Publish off the DITA output list.",
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
        "Write oxygen-bootcamp-work/week12/field-log-80.txt: local Oxygen PDF or WebHelp is a draft.",
        "Write: Guides publish uses a server **baseline** (a named snapshot of the book) as the release. Verify the wording in your shop.",
        "If you have Guides, note one output type you saw. If not, write ‘mock — the Guides docs list outputs; I did not invent a button’.",
        "Do not call Sites Quick Publish a DITA output.",
      ],
      failWhen: "Quick Publish is listed as a DITA output.",
      expected: "Draft vs release written. Sites kept out.",
    },
    quiz: [
      {
        q: "A local WebHelp from Oxygen is the release of record on a Guides shop. True or not?",
        options: [
          "True — if the HTML opened, it shipped",
          "Not true — the server baseline is the release. Local is a draft",
          "True if you named the folder FINAL",
        ],
        answer: 1,
        why: "You learned local WebHelp in week 6. On a Guides shop, that build is a draft.",
      },
      {
        q: "Sites Quick Publish is a DITA output. True or not?",
        options: [
          "True — publish is publish",
          "Not true — Quick Publish activates an AEM web page. Guides publish ships the handbook",
          "True on Cloud only",
        ],
        answer: 1,
        why: "Two desks. Two publish buttons. Do not mix them.",
      },
    ],
    quests: defaultQuests({
      learn: "See local WebHelp as a draft and Guides as the release",
      doTitle: "Keep Sites Quick Publish off the DITA output list",
      doDone: "Two sentences. No Quick Publish mix-up.",
      stress: "Pick draft vs release, and whether Quick Publish ships DITA",
    }),
    fieldNotePrompt: "Who is allowed to publish DITA where you work, or ‘unknown’?",
    tomorrowHook: "Tomorrow: one full loop on paper — checkout, edit, check in, ask to publish.",
    body: `## Draft vs release

Oxygen can still build WebHelp or PDF on your laptop. That is a **draft**. You used that in week 6.

On a Guides shop, **Guides publish** is the release. It uses a **baseline** — a named snapshot of the book — so everyone knows which version shipped. Verify the wording on your desk.

Sites **Quick Publish** activates a web page. It is not a DITA output. Do not put it on this list.

If you have no Guides, write ‘mock’ and do not invent a button.

## Word today

**Baseline** — a named snapshot of the handbook that Guides can publish.

## Lab

Draft vs release. One output type, or a mock note. Sites kept off the list.

## Figure

Labeled mock: laptop draft | server release. Caption: *Mock. Two publish buttons, two desks.*
`,
  },
  {
    n: 81,
    week: 12,
    title: "One full loop on paper (or mock)",
    objective:
      "Write a checkout → edit → check-in → request publish cycle for one topic, with no Sites Create Page in it.",
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
        "Write oxygen-bootcamp-work/week12/field-log-81.txt with four steps: checkout, edit (Guides or Edit in Oxygen), check in, request publish.",
        "Use control names you verified, or write ‘verify this label in your version’ plus the official article.",
        "If you have Guides, do the cycle once. If not, label mock and still write it.",
        "Completeness on the local analog remains clean.",
        "Do not add Sites Create Page as a step.",
      ],
      failWhen: "The cycle includes Sites Create Page as a step.",
      expected: "A four-step cycle with no Sites page in it. Mock labeled if needed.",
    },
    quiz: [
      {
        q: "The Guides cycle includes Create Page in Sites. True or not?",
        options: [
          "True — every publish starts with a new page",
          "Not true — this loop is handbook work. Create Page is the other desk",
          "True if the topic is a landing page",
        ],
        answer: 1,
        why: "One object. One loop. Stay on the handbook desk.",
      },
      {
        q: "Which step holds the lock?",
        options: ["Preview", "Checkout", "Quick Publish"],
        answer: 1,
        why: "Checkout borrows the topic. That is the lock.",
      },
    ],
    quests: defaultQuests({
      learn: "Read the four steps in order",
      doTitle: "Write the cycle with no Sites page in it",
      doDone: "Four steps. Mock labeled if needed.",
      stress: "Pick whether Create Page belongs, and which step holds the lock",
    }),
    fieldNotePrompt: "Write the four steps you put in the log, in order.",
    tomorrowHook: "Tomorrow is the week check: who edits where — map, SME comment, landing page.",
    body: `## One object, one loop

Pick a how-to. Walk it.

1. **Checkout**
2. **Edit** (Guides, or Edit in Oxygen)
3. **Check in**
4. **Request publish** (Guides, not Sites Quick Publish)

No Create Page. No landing-page hero. No Page Editor. Those are the other desk.

If you have Guides, do it once. If not, write the loop and label the mock. Completeness on the local analog stays clean.

## Lab

Four steps. Real or paper. No Sites page in the list.

## Figure

Labeled mock: four arrows in a row. Caption: *Mock. Handbook loop only.*
`,
  },
  {
    n: 82,
    week: 12,
    title: "Week 12 check — who edits where",
    objective:
      "Decide, for three objects, who edits in Oxygen, who edits in Guides, and who edits in Sites.",
    minutes: 90,
    skills: ["aemGuides", "aemSites"],
    legacy: ["t7-guides"],
    youtube: [
      yt("aemHeadless", ["Pages and fragments — keep them off the DITA table"]),
      yt("maps", ["The booklet stays a booklet"]),
    ],
    sources: [S.guidesOverview, S.aemAuthor, S.editOxygen],
    toolCards: ["guides-web-editor", "sites-console"],
    badgeId: "guides-handoff",
    boss: true,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Three objects",
      steps: [
        "Write oxygen-bootcamp-work/week12/field-log-82.txt.",
        "Object 1: kitepump.ditamap restructure → Oxygen.",
        "Object 2: a subject-matter expert comments on a step → Guides.",
        "Object 3: a beach campaign landing page → Sites.",
        "Labeled mock: three objects, three desks. Caption: mock.",
        "Pass the quiz. Retry is free. The capstone starts tomorrow; finish this check first.",
      ],
      failWhen: "The landing page is assigned to Oxygen, or the map is assigned to Sites.",
      expected: "Three correct desks. Mock labeled.",
    },
    quiz: [
      {
        q: "A campaign landing page with a hero belongs in Oxygen. True or not?",
        options: [
          "True — one CMS for everything",
          "Not true — landing pages belong in Sites",
          "True if you wrap it in a map",
        ],
        answer: 1,
        why: "You wrote this in week 9. It is still true. Sites for the campaign page.",
      },
      {
        q: "Who rebuilds the booklet when the chapters move?",
        options: ["Sites Page Editor", "Oxygen", "Document Authoring"],
        answer: 1,
        why: "Maps, completeness, keys: desktop Oxygen.",
      },
      {
        q: "A reviewer flags one step. Where should they comment?",
        options: [
          "Guides in the browser",
          "A sticky note on the Sites hero",
          "A new language copy",
        ],
        answer: 0,
        why: "Subject-matter experts live in Guides.",
      },
    ],
    quests: defaultQuests({
      learn: "Read the three objects and the three desks",
      doTitle: "Assign map, SME comment, and landing page",
      doDone: "Three assignments. Mock labeled.",
      stress: "Pass the quiz. Retry if you need to.",
    }),
    fieldNotePrompt: "Write the three objects and the desk you assigned to each.",
    tomorrowHook: "Capstone starts: a DITA handbook in Oxygen for the same product.",
    body: `## A check, not a show

This is the week boss. Three objects. Three desks.

- Rebuild the booklet → **Oxygen**
- A reviewer flags a step → **Guides**
- A campaign landing page → **Sites**

If the map goes to Sites, or the landing page goes to Oxygen, you are not done. Retry is free.

The capstone starts tomorrow. It needs this split in your bones.

## Proof

1. Two handbook desks (Guides and Oxygen), one website desk (Sites).
2. No fake product name.
3. Checkout is a lock, not a preview.

## Figure

Labeled mock: three objects, three desks. Caption: *Mock. Who edits where.*
`,
  },
  {
    n: 83,
    week: 12,
    title: "Capstone: a DITA handbook in Oxygen",
    objective:
      "Ship a small valid Kitepump (or flower-docs) publication: map, keys, one reuse, completeness clean, and a local WebHelp or a recorded transform attempt.",
    minutes: 110,
    skills: ["maps", "reuse", "publish"],
    legacy: ["t7-capstone"],
    youtube: [
      yt("webhelp", ["WebHelp as the draft output"]),
      yt("completeness", ["Zero missing links"]),
    ],
    sources: [S.mapsDemo, S.authorDita, S.ugEditor],
    toolCards: ["maps-manager", "transformation"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "DITA half of the capstone",
      steps: [
        "Work in oxygen-bootcamp-work/week12/, not inside samples/. Copy what you need.",
        "Map with at least six topics, or a documented subset of flower-docs plus kitepump. Completeness clean.",
        "One key (product name) used twice. One reused warning (conkeyref or conref).",
        "One ditaval, or a written reason you did not filter.",
        "WebHelp Responsive, or a failed transform you then repaired (the week 6 skill).",
        "Note: local output is a draft if Guides is the release on your desk.",
      ],
      failWhen: "Completeness is dirty, or reuse is copy-paste, or you skipped the transform log.",
      expected: "Clean completeness. Key plus reuse. Transform evidence.",
    },
    quiz: [
      {
        q: "The HTML opened. Completeness still shows a missing link. Are you done?",
        options: [
          "Yes — if it opened, it shipped",
          "No — fix the missing link. Completeness is the gate",
          "Yes if the folder is named FINAL",
        ],
        answer: 1,
        why: "A site can open and still miss a page. Completeness names the miss.",
      },
      {
        q: "The product name is typed by hand in six topics. What should it have been?",
        options: [
          "A key in the map, used twice or more",
          "A Teaser description",
          "A language copy",
        ],
        answer: 0,
        why: "Week 4: the map owns the name. Topics point at it.",
      },
    ],
    quests: defaultQuests({
      learn: "Open the capstone map and run completeness",
      doTitle: "Keep the map complete, with a key and one reused warning",
      doDone: "Completeness clean. Key plus reuse present. Transform evidence.",
      stress: "Pick whether an open HTML skips completeness",
    }),
    fieldNotePrompt: "How many topics, which warning is reused, and did completeness pass?",
    tomorrowHook: "Tomorrow: a small family of AEM pages for the same product.",
    body: `## The Oxygen half

This is the handbook proof. You already know every piece.

- A **map** with at least six topics
- A **key** for the product name, used twice
- One **reused warning**
- **Completeness** clean
- A **transform** (WebHelp, or a failure you then repaired)

Copy into \`oxygen-bootcamp-work/week12/\`. Do not replace the samples in the repo.

Local WebHelp is a draft if Guides is the release. Say so in the log.

## Lab

The book builds. The links work. The name is a key. The warning is reused.

## Figure

Maps Manager plus a completeness report. Caption: *Your work folder, not the sample original.*
`,
  },
  {
    n: 84,
    week: 12,
    title: "Capstone: a small family of AEM pages",
    objective:
      "Create or mock a small page family that tells the same Kitepump story: one parent, two children, Title / Text / Image / Teaser, no DITA dumped into Text.",
    minutes: 110,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemQuick", ["Pages as a family"]),
      yt("aemHeadless", ["Blocks, not topics"]),
    ],
    sources: [S.aemCloudQs, S.coreComp, S.wknd],
    toolCards: ["sites-console", "page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Sites half of the capstone",
      steps: [
        "Parent page: Kitepump (title). Child: Beach use. Child: Where to buy (or mock names).",
        "Blocks: Title, Text, Image with a real alt phrase, Teaser linking parent to child.",
        "Quick Publish or mock the payload. Fill oxygen-bootcamp-work/week12/field-log-84.txt.",
        "No DITA XML pasted into Text. Rewrite for the page. Link to the help if you must.",
        "Labeled mock: three pages in a tree. Caption: mock.",
      ],
      failWhen:
        "You paste a DITA how-to into the Text block, or the family has one orphan page with no parent.",
      expected: "Three pages (or mocks). Blocks used as taught. Payload written.",
    },
    quiz: [
      {
        q: "Pasting the DITA how-to into Text keeps the capstone as one story. True or not?",
        options: [
          "True — one story means one file",
          "Not true — same product, two desks. Rewrite for the page. Link to the help if you must",
          "True if you hide the tags",
        ],
        answer: 1,
        why: "One product story. Two models. Do not dump the handbook into the hero.",
      },
      {
        q: "How do you connect parent to child on the web page?",
        options: [
          "A topicref in a map",
          "A Teaser (or another real link) on the parent, pointing at the child",
          "A ditaval",
        ],
        answer: 1,
        why: "Pages point with links and teasers. Maps point with topicrefs. Different desks.",
      },
    ],
    quests: defaultQuests({
      learn: "See the three pages as a parent plus two children",
      doTitle: "Build or mock the family with Title, Text, Image, Teaser",
      doDone: "Three pages. Field log filled. Mock labeled.",
      stress: "Pick whether pasting the how-to into Text is the capstone",
    }),
    fieldNotePrompt: "What is the parent page title, and what are the two children called?",
    tomorrowHook: "Tomorrow: one product story on both desks — a comparison sheet.",
    body: `## The Sites half

Same product. Different model. Pages, not topicrefs.

- One **parent**
- Two **children**
- **Title, Text, Image, Teaser**
- A real **alt** phrase
- No handbook XML in Text

You may not have AEM. A labeled mock plus a field log is the lab. Quick Publish on a real instance if you have one.

The page sells the beach card. The book explains how. They share a name, not a file format.

## Lab

Three pages or three mocks. Blocks as taught. No DITA paste.

## Figure

Labeled mock: parent plus two children. Caption: *Mock. A family of pages, not a map.*
`,
  },
  {
    n: 85,
    week: 12,
    title: "Two desks, one product story",
    objective:
      "Write a one-page comparison: how the DITA book and the AEM family tell the same Kitepump story, and where they must differ.",
    minutes: 90,
    skills: ["aemGuides", "aemSites", "ditaTopics"],
    legacy: ["t7-capstone"],
    youtube: [
      yt("aemHeadless", ["A laid-out page vs structured content"]),
      yt("ditaEdit", ["Typed topics"]),
    ],
    sources: [S.guidesOverview, S.aemAuthor, S.authorDita],
    toolCards: ["guides-web-editor", "page-editor"],
    badgeId: "two-surfaces-one-story",
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Comparison sheet",
      steps: [
        "Save oxygen-bootcamp-work/week12/two-surfaces.md.",
        "Row: product name — key in DITA vs title on the page.",
        "Row: procedure — task vs a short page that points at help (not a fake how-to in Text).",
        "Row: warning — reused DITA warning vs a short Text warning (not a reused DITA id).",
        "Row: publish — transform or baseline vs Quick Publish.",
        "Do not claim the two publish buttons are the same button.",
      ],
      failWhen: "The sheet claims the two publishes are the same button.",
      expected: "Four rows saved.",
    },
    quiz: [
      {
        q: "One product story means one CMS. True or not?",
        options: [
          "True — pick Oxygen or AEM and delete the other",
          "Not true — one product story, two desks of tools",
          "True after the capstone zip",
        ],
        answer: 1,
        why: "That is the point of the capstone. Same pump. Two desks.",
      },
      {
        q: "Which row is a key in the map on one desk, and a page title on the other?",
        options: ["Publish", "Product name", "Language copy"],
        answer: 1,
        why: "The name is a key in DITA and a title on the page. Same story, different pointer.",
      },
    ],
    quests: defaultQuests({
      learn: "Read the four comparison rows",
      doTitle: "Save two-surfaces.md without mixing the publish buttons",
      doDone: "Four rows saved.",
      stress: "Pick whether one story means one CMS",
    }),
    fieldNotePrompt: "Which of the four rows took the longest to keep distinct?",
    tomorrowHook: "Tomorrow: re-run completeness and re-read the AEM log. Fix one thing on each desk.",
    body: `## One story

Kitepump on the beach. The book explains how. The site sells the beach card. They share a name, not a file format.

Write four rows:

1. **Product name** — key vs page title
2. **Procedure** — task vs a short page that points at help
3. **Warning** — reused DITA vs a short Text line
4. **Publish** — transform or baseline vs Quick Publish

The two publish buttons are not the same button. If the sheet says they are, rewrite the row.

## Lab

\`oxygen-bootcamp-work/week12/two-surfaces.md\`. Four rows.

## Figure

A four-row table. Caption: *Same pump. Two desks.*
`,
  },
  {
    n: 86,
    week: 12,
    title: "Capstone review",
    objective:
      "Re-run completeness on the DITA half and re-read the AEM field log. Fix one issue on each desk.",
    minutes: 90,
    skills: ["review", "maps", "aemSites"],
    legacy: [],
    youtube: [yt("completeness", ["Last completeness read"])],
    sources: [S.mapsDemo, S.aemAuthor],
    toolCards: ["maps-manager", "sites-console"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "One fix per desk",
      steps: [
        "Completeness on the capstone map. Quote the report (zero missing links is a valid quote).",
        "Field log: fix one missing payload or alt.",
        "Write what you would tell a teammate in two sentences — one per desk.",
        "Save oxygen-bootcamp-work/week12/field-log-86.txt.",
      ],
      failWhen: "You skip one desk.",
      expected: "Quoted completeness. One AEM fix. Two teammate sentences.",
    },
    quiz: [
      {
        q: "Review means watching the videos again. True or not?",
        options: [
          "True — rewatch is the badge",
          "Not true — review means the completeness report and the field log",
          "True if you take notes",
        ],
        answer: 1,
        why: "Evidence. Not a rewatch.",
      },
      {
        q: "Completeness reports zero missing links. What do you write?",
        options: [
          "Nothing — zero does not count",
          "Quote the zero. That is a valid quote",
          "Run a language copy instead",
        ],
        answer: 1,
        why: "Zero is a result. Write it down.",
      },
    ],
    quests: defaultQuests({
      learn: "Open the completeness report and the AEM field log",
      doTitle: "Fix one thing on each desk",
      doDone: "Completeness quoted. Field log patched.",
      stress: "Pick what review means, and whether zero counts",
    }),
    fieldNotePrompt: "What is still not done, in one sentence? If everything is done, write that.",
    tomorrowHook: "Tomorrow: hand in the work. Small zip. First file a lead should open.",
    body: `## Review is evidence

Completeness output. Field log. Two sentences for a teammate. One per desk.

If completeness is already clean, quote the zero. If an alt is missing, write it. Do not skip a desk because it felt finished yesterday.

## Lab

One quoted report. One AEM fix. Two teammate sentences.

## Figure

A completeness report next to a field log. Caption: *Both desks. Both pieces of evidence.*
`,
  },
  {
    n: 87,
    week: 12,
    title: "Hand in the work",
    objective:
      "List what a lead would open first: the map, then the comparison sheet. Keep the zip small — no giant output folders.",
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
        "Write oxygen-bootcamp-work/week12/delivery.txt.",
        "List: map path, topic list, ditaval if any, transform log snippet, field-log files, two-surfaces.md.",
        "Do not zip node_modules or a huge WebHelp output folder.",
        "Write the first file a lead should open (the map, then the comparison sheet).",
      ],
      failWhen: "The zip includes huge binaries or a full WebHelp skin tree.",
      expected: "A short delivery list. First file named.",
    },
    quiz: [
      {
        q: "The lead should open the WebHelp skin CSS first. True or not?",
        options: [
          "True — pretty is proof",
          "Not true — the map, then the comparison sheet",
          "True if the CSS is short",
        ],
        answer: 1,
        why: "The book, then the story across desks.",
      },
      {
        q: "Why leave the huge WebHelp folder out of the zip?",
        options: [
          "Leads cannot open HTML",
          "The list plus the map is the handoff. The giant output is a draft you can rebuild",
          "Git requires skins",
        ],
        answer: 1,
        why: "Small zip. Rebuild the draft if someone needs it.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the first file a lead opens",
      doTitle: "Write a small delivery list",
      doDone: "List written. No bloat.",
      stress: "Pick the first file, and what stays out of the zip",
    }),
    fieldNotePrompt: "What is the first file a lead opens? Write the path.",
    tomorrowHook: "Tomorrow: a talk-through sheet. Ten answers, out loud if you can.",
    body: `## Hand it over

Small zip. Short list. No skins, no library dumps, no \`node_modules\`.

A lead opens:

1. The **map**
2. The **comparison sheet** (\`two-surfaces.md\`)

Then the field logs, then a transform snippet. That order.

If you built WebHelp, keep a note that it is a draft. Do not ship a 5 GB output tree.

## Lab

\`delivery.txt\`. First file named. Zip stays small.

## Figure

A short list on a page. Caption: *Map first. Comparison second.*
`,
  },
  {
    n: 88,
    week: 12,
    title: "Talk-through sheet",
    objective:
      "Answer out loud (or in writing if you are alone) ten questions a hiring lead would actually ask.",
    minutes: 90,
    skills: ["review", "xmlLiteracy", "aemSites"],
    legacy: [],
    youtube: [
      yt("gettingStarted", ["Modes you must still be able to name"]),
      yt("aemQuick", ["Publish you must still be able to name"]),
    ],
    sources: [S.ugEditor, S.aemAuthor, S.guidesOverview],
    toolCards: [],
    badgeId: null,
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Ten answers",
      steps: [
        "Write oxygen-bootcamp-work/week12/talk-through.txt.",
        "1. Author vs Text vs Grid in Oxygen.",
        "2. Well-formed vs valid.",
        "3. Map vs topic.",
        "4. keyref vs href.",
        "5. Completeness vs schema.",
        "6. Local WebHelp vs Guides baseline.",
        "7. Author vs publish in AEM.",
        "8. Page Editor vs Universal Editor vs Document Authoring.",
        "9. Guides vs Oxygen.",
        "10. Why there is no AEM Oxygen XML Editor.",
        "Write short answers. Speak them if you can.",
      ],
      failWhen: "Any answer mixes the two desks, or #10 treats the fake product name as real.",
      expected: "Ten short answers. #10 is a hard no on the fake product name.",
    },
    quiz: [
      {
        q: "There is a product called AEM Oxygen XML Editor. True or not?",
        options: [
          "True — that is the connector",
          "Not true — Guides can open Oxygen. They are not one product",
          "True after an admin enables the button",
        ],
        answer: 1,
        why: "If you miss this on day 88, go back to day 76 (and day 56).",
      },
      {
        q: "Local WebHelp and a Guides baseline are the same publish. True or not?",
        options: [
          "True",
          "Not true — local is a draft, the baseline is the release on a Guides shop",
          "True if both made HTML",
        ],
        answer: 1,
        why: "Question 6 on the sheet. Draft vs release.",
      },
    ],
    quests: defaultQuests({
      learn: "Read the ten prompts before you write",
      doTitle: "Write ten short answers",
      doDone: "File saved. #10 correct.",
      stress: "Pick the fake product name, and draft vs release",
    }),
    fieldNotePrompt: "Which of the ten questions did you hesitate on? Quote your answer.",
    tomorrowHook: "Tomorrow: three written scenarios and a broken map to repair.",
    body: `## Out loud

Ten short answers. Concrete verbs. No slogans.

You have met every word on this list. If one is fuzzy, open that week’s field log and rewrite the line.

Number 10 is not a trick. There is no product called AEM Oxygen XML Editor.

## Lab

\`talk-through.txt\`. Ten answers. Speak them if you can.

## Figure

A numbered list of ten. Caption: *Short answers. Number 10 is no.*
`,
  },
  {
    n: 89,
    week: 12,
    title: "Written scenarios and error repair",
    objective:
      "Solve three scenarios in writing (broken map, wrong desk, failed transform), then repair the broken map copy.",
    minutes: 90,
    skills: ["review", "maps", "publish", "aemSites"],
    legacy: ["t4-complete", "t5-publish", "t7-aem"],
    youtube: [
      yt("completeness", ["A missing link"]),
      yt("webhelp", ["Reading a failed transform"]),
    ],
    sources: [S.mapsDemo, S.aemAuthor, S.guidesOverview],
    toolCards: ["maps-manager", "transformation", "sites-console"],
    badgeId: null,
    lab: {
      pack: "kitepump-broken-map",
      title: "Three scenarios",
      steps: [
        "Write oxygen-bootcamp-work/week12/field-log-89.txt.",
        "Scenario A: completeness names a missing href. First move?",
        "Scenario B: a project manager wants the landing page written as a DITA map. What do you say?",
        "Scenario C: a PDF transform failed. First place you look?",
        "Then repair the broken map copy in the pack (work on a copy). Completeness clean when you stop.",
      ],
      failWhen: "Any first move is ‘reinstall Oxygen’ or ‘Quick Publish the map’.",
      expected: "Three first moves. Broken map copy clean.",
    },
    quiz: [
      {
        q: "A failed PDF transform: first place you look is the Sites console. True or not?",
        options: [
          "True — publish lives in Sites",
          "Not true — open the transformation log and read the first real error",
          "True if the PDF is for the landing page",
        ],
        answer: 1,
        why: "Week 6: the log is the oracle. Sites is the other desk.",
      },
      {
        q: "A project manager wants the landing page written as a DITA map. What do you say?",
        options: [
          "Yes — one CMS",
          "No — the landing page is Sites. The handbook is DITA. They share a product story, not a file format",
          "Yes, then Quick Publish the map",
        ],
        answer: 1,
        why: "Scenario B. You have been saying this since week 9.",
      },
    ],
    quests: defaultQuests({
      learn: "Read the three scenarios before you write",
      doTitle: "Write three first moves, then repair the broken copy",
      doDone: "Three answers. Completeness clean.",
      stress: "Pick the first look on a failed PDF, and what you tell the project manager",
    }),
    fieldNotePrompt: "What did you tell the project manager in scenario B? Two sentences.",
    tomorrowHook: "Last day: what you can do now, what this course did not teach, and what is next.",
    body: `## Three first moves

A. Completeness names a missing link. Open the map. Fix the href (or drop the row). Run completeness again.

B. A project manager wants the landing page as a DITA map. Say no. The landing page is Sites. The handbook is DITA.

C. A PDF transform failed. Open the transformation log. Quote the first real error. Do not reinstall Oxygen. Do not Quick Publish the map.

Then repair the broken map copy. Completeness clean when you stop.

## Lab

Three answers. One repaired copy.

## Figure

A completeness report with one missing href. Caption: *Fix the link. Do not reinstall.*
`,
  },
  {
    n: 90,
    week: 12,
    title: "What you can do now, and what is next",
    objective:
      "Export progress, list skills with evidence, and write three things this course does not teach — plus one next course you would actually take.",
    minutes: 90,
    skills: ["review"],
    legacy: [],
    youtube: [
      yt("gettingStarted", [
        "How far you have come from the first window — evidence, not a slogan",
      ]),
    ],
    sources: [S.learnDita, S.guidesOverview, S.coreComp],
    toolCards: [],
    badgeId: "portfolio-ready",
    lab: {
      pack: "guides-oxygen-handoff",
      title: "Export plus inventory",
      steps: [
        "Settings: Export progress and game state. Keep the JSON.",
        "Write oxygen-bootcamp-work/week12/inventory.txt. List each skill with one piece of evidence (day number plus a file).",
        "Write what is not taught: DITA specializations, customizing DITA-OT, the AEM developer path (the code behind the blocks). Listed, not taught.",
        "Write one next course you would actually take.",
        "Do not claim this course made you an AEM developer.",
      ],
      failWhen: "You claim this course made you an AEM developer, or you skip the export.",
      expected: "JSON export exists. Inventory has evidence. Three not-taught items. One next course.",
    },
    quiz: [
      {
        q: "This course taught you to customize DITA-OT plugins. True or not?",
        options: [
          "True — week 6 was that",
          "Not true — listed as next, not taught",
          "True if WebHelp opened",
        ],
        answer: 1,
        why: "Week 6 taught you to run a transform and read a log. Plugin work is a later course.",
      },
      {
        q: "What is the evidence for a skill on the inventory?",
        options: [
          "A feeling that you remember it",
          "A day number plus a file you actually wrote",
          "The warmup streak",
        ],
        answer: 1,
        why: "Evidence is a file with a date. Not a streak.",
      },
    ],
    quests: defaultQuests({
      learn: "Read the three things this course does not teach",
      doTitle: "Export progress and write the inventory",
      doDone: "JSON saved. Inventory has day numbers. One next course written.",
      stress: "Pick whether DITA-OT plugins were taught, and what counts as evidence",
    }),
    fieldNotePrompt: "What will you learn next, in one line?",
    tomorrowHook: "There is no day 91 in this pack. Add a next course when you need one.",
    body: `## Done looks like this

You can open a DITA booklet in Oxygen, reuse with keys and conrefs, publish WebHelp or PDF, then switch to AEM, create and edit pages, publish, fill a Content Fragment, and say when Guides plus Oxygen is the handbook desk.

You are not a DITA-OT customizer. You are not an AEM developer. Those paths are listed, not taught.

Export your progress. Keep the evidence. Write one next course you would actually take.

## Word today

None. You already have the words. The inventory is the proof.

## Lab

JSON export. Inventory with day numbers. Three not-taught items. One next course.

## Figure

A short inventory. Caption: *Day numbers plus files. That is the portfolio.*
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
