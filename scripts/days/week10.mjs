import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 63,
    week: 10,
    title: "Type on the page (Title and Text)",
    objective:
      "Put a heading and two short sentences on a web page using Title and Text, and keep the handbook steps out of the body.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemHeadless", [
        "A page made of blocks, not one blob of text",
        "A heading and a body on the canvas",
      ]),
    ],
    sources: [S.coreComp, S.aemAuthor, S.wknd],
    toolCards: ["page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Title and two sentences",
      steps: [
        "You may not have AEM. That is expected. Use the official video, a labeled mock, and a field log.",
        "Read the Core Components pages for Title and Text (skim). Write oxygen-bootcamp-work/week10/field-log-63.txt.",
        "In the log: Title is the heading block. You pick a heading size (h1, h2, and so on) that the page template allows. Text is the body block.",
        "Kitepump landing: one Title (Kitepump HP-40) and one Text with two short marketing sentences. Do not paste inflate-the-tire steps.",
        "Write what Text lets you do (bold, a list). Write that this is not a DITA how-to.",
        "Labeled mock: Title over Text. Caption: mock.",
      ],
      failWhen:
        "You paste handbook steps into Text, or you skip heading size, or the mock has no caption.",
      expected:
        "Log names Title vs Text. Kitepump copy is two short sentences. Mock labeled.",
    },
    quiz: [
      {
        q: "The page already has a Title set as the main heading. You also make a main heading inside Text. What is the problem?",
        options: [
          "Nothing — extra main headings always help",
          "You now have two main headings on one page",
          "AEM deletes the page",
        ],
        answer: 1,
        why: "Title owns the heading. Do not fake a second main heading inside Text.",
      },
      {
        q: "Where do the inflate-the-tire steps live?",
        options: [
          "In the Text block on the web page",
          "In the handbook page in Oxygen",
          "In page properties",
        ],
        answer: 1,
        why: "The web page is short. The how-to stays in the handbook.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Title and Text in the docs or the video",
      doTitle: "Write two marketing sentences, not handbook steps",
      doDone: "Log written. Mock labeled. No how-to paste.",
      stress: "Pick where the heading lives, and where the steps live",
    }),
    fieldNotePrompt: "What did you put in Title, and what did you put in Text? Two sentences.",
    tomorrowHook: "Tomorrow you put a picture on the page and write a short phrase for it.",
    body: `## Type on the page

Last week you made a page in AEM — Adobe’s website tool — and looked at Edit, Preview, and Publish. Today you put words on that page.

A page is built from **components**. A component is a block you drop onto the page. Adobe ships a set of ready-made blocks called **Core Components**. Today you use two of them.

**Title** is the heading block. You pick a heading size (h1, h2, and so on) in a small form. Use the size the template already planned. **Text** is the body. You can bold and make a list there.

Do not paste the handbook how-to into Text. The handbook stays in Oxygen. This page is a short web page.

## Word today

**Title** — the heading block on an AEM page.

**Text** — the body block. It is not a DITA how-to.

## Watch

Play the official video. Pause when you see a page made of blocks. Look for a heading and a body.

## Lab

You may not have AEM. Use the video, a labeled mock, and the field log. Two marketing sentences for Kitepump. Not the inflate steps.

## Figure

Labeled mock: Title over Text. Caption: *Mock. Page Editor, Edit. Not a customer screenshot.*
`,
  },
  {
    n: 64,
    week: 10,
    title: "Put a picture on the page",
    objective:
      "Place an Image block, write a short alt phrase, and say that the file lives in the asset library — not on your desktop.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemGlobal", [
        "Pictures on a real site",
        "Files living in a library, not on a laptop",
      ]),
    ],
    sources: [S.coreComp, S.assets, S.aemAuthor],
    toolCards: ["page-editor", "assets-console"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Picture plus alt phrase",
      steps: [
        "Read the Image Core Component page and Assets basic operations (skim).",
        "Write oxygen-bootcamp-work/week10/field-log-64.txt: pick the file from Assets (the library in AEM). Set alt in the Image form. Do not treat a random desktop PNG as the long-term file.",
        "Kitepump alt phrase: Kitepump HP-40 floor pump, upright, gauge visible. Not kitepump.png.",
        "Write: a picture on an AEM page and a picture in a DITA page are the same job on two desks. Both need a real phrase.",
        "Write: if you crop on the page, the library file often stays. Check. Do not assume you destroyed the original.",
        "Labeled mock: Image form with Alt text filled. Caption: mock.",
      ],
      failWhen:
        "Alt is the file name, or the log says pictures live only on your laptop, or Assets is called Maps Manager.",
      expected:
        "Alt phrase written. Assets named as the source. Mock labeled.",
    },
    quiz: [
      {
        q: "You published the page but not the picture. What does a visitor often see?",
        options: [
          "The picture from your laptop",
          "A broken picture — publish the file in the library too",
          "The picture from the DITA handbook, automatically",
        ],
        answer: 1,
        why: "The picture is its own file in Assets. It has its own publish state. You met that last week.",
      },
      {
        q: "A good alt for the hero picture is…",
        options: [
          "kitepump.png",
          "Kitepump HP-40 floor pump, upright, gauge visible",
          "image",
        ],
        answer: 1,
        why: "Alt is a phrase a person can hear. A file name is not a phrase.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the Image block and the Alt text field",
      doTitle: "Write a real alt phrase, not a file name",
      doDone: "Phrase written. Mock labeled. Assets named as the source.",
      stress: "Pick what a visitor sees if the picture was not published",
    }),
    fieldNotePrompt: "Write the exact alt phrase you would ship for the hero picture.",
    tomorrowHook: "Tomorrow a card that points somewhere — not a dumped paragraph.",
    body: `## Put a picture on the page

The **Image** block points at a file in **Assets**. Assets is the file library inside AEM. You pick the picture there. You do not leave it on the desktop.

**Alt** is a short phrase that describes the picture for someone who cannot see it. Write a phrase. Do not paste the file name.

Publish the picture as well as the page. Last week you saw that a page can go live while its picture stays behind.

If you crop on the page, that is usually a crop for this page. The file in the library often stays. Check before you panic.

## Word today

**Image** — the picture block on the page.

**Assets** — the library of files in AEM (pictures, PDFs, and so on).

## Watch

Pause the official video on a page with a picture. Ask: where does that file live?

## Lab

Field log plus labeled mock. No AEM instance required.

## Figure

Labeled mock: Image form, Alt text filled. Caption: *Mock. Not a DITA image tag.*
`,
  },
  {
    n: 65,
    week: 10,
    title: "A card that points somewhere (Teaser)",
    objective:
      "Spec a Teaser with a title, one sentence, a picture, and a real link — and keep the how-to out of the card.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemQuick", ["Cards or teasers on a generated site, if they show"]),
    ],
    sources: [S.coreComp, S.wknd, S.aemAuthor],
    toolCards: ["page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "One Kitepump card",
      steps: [
        "Read the Teaser Core Component page (skim).",
        "Write oxygen-bootcamp-work/week10/field-log-65.txt for one teaser: title Inflate in three steps, description one sentence, link to a how-to page (or write ‘page that does not exist yet’). Image alt phrase.",
        "Write: the teaser description is not the task. The task stays in the handbook.",
        "If the docs say the teaser can pull title or picture from the target page, note that. Do not invent fields you did not see.",
        "Labeled mock: one teaser card. Caption: mock.",
      ],
      failWhen:
        "The description holds three how-to steps, or the card has no destination, or the mock has no caption.",
      expected:
        "One teaser spec with title, one sentence, link, and alt. Mock labeled.",
    },
    quiz: [
      {
        q: "A Teaser is the same thing as the short line under a DITA title. True or not?",
        options: [
          "True — same file, same tag",
          "Not true — similar job (lure plus pointer), different tool",
          "True on Cloud only",
        ],
        answer: 1,
        why: "A short line under a DITA title lives in the handbook. A Teaser lives on the web page.",
      },
      {
        q: "The card looks clickable but the link is empty. What do you do?",
        options: [
          "Leave it — AEM fills the link at publish",
          "Pick a real page, or do not use a Teaser",
          "Point it at a folder on your laptop",
        ],
        answer: 1,
        why: "A card that goes nowhere trains people to ignore cards.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the Teaser fields: title, description, image, link",
      doTitle: "Keep the description to one sentence",
      doDone: "Teaser spec complete. Mock labeled.",
      stress: "Pick what an empty link on a clickable card means",
    }),
    fieldNotePrompt: "What page does your card point at? Write the title or ‘page that does not exist yet’.",
    tomorrowHook: "Tomorrow a box that holds other blocks, without fighting the template.",
    body: `## A card that points somewhere

A **Teaser** is a card: picture, title, short text, and a link. It points. It does not hold the procedure.

Kitepump’s landing page can tease Care. The steps stay in the handbook.

The link must go to a published page (a Sites page, or a help URL your shop actually ships). Not a folder on your laptop. Not \`out/index.html\` from a local Oxygen build.

If the card looks clickable, it needs a destination. If you have no destination, do not use a Teaser.

## Word today

**Teaser** — a card with a picture, a title, a short line, and a link.

## Watch

Look for cards on the official site-creation video. Pause on one. Ask: where would that click go?

## Lab

One Kitepump teaser in the field log. One sentence. One link. Labeled mock.

## Figure

Labeled mock: three teaser cards in a row. Caption: *Mock. Destinations are pages, not a laptop folder.*
`,
  },
  {
    n: 66,
    week: 10,
    title: "A box that holds other blocks",
    objective:
      "Use Container as a box that holds Title, Image, Text, and Teasers, and skip extra nested boxes.",
    minutes: 90,
    skills: ["aemSites"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemGlobal", [
        "A site layout that already works",
        "What authors should not restyle",
      ]),
    ],
    sources: [S.coreComp, S.aemAuthor, S.wknd],
    toolCards: ["page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "A simple stack",
      steps: [
        "Read the Container Core Component page (skim): layout, columns if offered, background.",
        "Write oxygen-bootcamp-work/week10/field-log-66.txt: I will put Title, Image, Text, and Teaser in the template’s containers. I will not add five nested boxes to centre a button.",
        "Write two things you will not do: (1) paste a table as layout, (2) set odd widths that break a phone screen. Layout for small screens is the template’s job first.",
        "Kitepump landing skeleton: hero (Title + Image + Text), then a Container of teasers. That is enough.",
        "Labeled mock: simple stacked layout. Caption: mock. Not a designer portfolio.",
      ],
      failWhen:
        "The log treats nested boxes as the craft, or you redesign the template in CSS, or you mix this with Oxygen’s page-view styles.",
      expected:
        "Skeleton written. Two ‘will not’ lines. Mock labeled. No template fight.",
    },
    quiz: [
      {
        q: "The page looks off-centre. First move as a junior author?",
        options: [
          "Add nested Containers until it looks like a Word doc",
          "Check you are in the template’s intended box; ask a lead before a custom layout",
          "Paste a table and hope",
        ],
        answer: 1,
        why: "Fill the box the template gave you. Do not invent a new grid.",
      },
      {
        q: "The template offers a row of teasers inside a Container. Is that allowed?",
        options: [
          "Never",
          "Yes — you fill the layout it offers. You do not invent a new one",
          "Only with a DITA map",
        ],
        answer: 1,
        why: "Use the layout that is already there.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Container as a box that holds other blocks",
      doTitle: "Keep the Kitepump skeleton simple",
      doDone: "Skeleton plus two ‘will not’ lines. Mock labeled.",
      stress: "Pick the first move when the page looks off-centre",
    }),
    fieldNotePrompt: "How did you stack the Kitepump blocks? One short list.",
    tomorrowHook: "Tomorrow you reuse a layout strip — not the same as reusing a DITA warning.",
    body: `## A box that holds other blocks

A **Container** is a box that groups other blocks. Templates already have them. You fill them.

Do not add five nested boxes to centre a button. That breaks phones. Do not paste a table as a layout trick. Do not restyle the page with CSS. That is not this job.

A good Kitepump landing page: a hero (Title, Image, Text) and one Container of teasers. Stop there.

Oxygen’s page view has its own styles. Those do not control an AEM Container. Different tools.

## Word today

**Container** — a box on the page that holds other blocks.

## Watch

Look at a finished layout in the official video. Notice how little the author moved the walls.

## Lab

Write the skeleton. Write two things you will not do. Label the mock.

## Figure

Labeled mock: one hero, one container of three teasers. Caption: *Mock. Simple on purpose.*
`,
  },
  {
    n: 67,
    week: 10,
    title: "Reuse a layout (not the same as Oxygen reuse)",
    objective:
      "Explain an Experience Fragment as a reusable layout strip, and keep the handbook warning in DITA.",
    minutes: 90,
    skills: ["aemSites", "reuse"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemHeadless", [
        "Fragments in the AEM family, if mentioned",
        "A layout chunk vs a page of fields",
      ]),
    ],
    sources: [S.aemAuthor, S.coreComp, S.aemMethods],
    toolCards: ["page-editor"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "A promo strip, not a warning library",
      steps: [
        "Write oxygen-bootcamp-work/week10/field-log-67.txt: Experience Fragment = a reusable page layout (header promo, footer strip). Next week you will meet Content Fragments, which are fill-in forms. A DITA conref is XML reuse in Oxygen. Three different things.",
        "Kitepump: a promo strip ‘Shop HP-40’ could appear on two pages. The pinch warning stays a DITA reuse in the handbook.",
        "Write when you would not use an Experience Fragment: a one-off sentence, or a procedure.",
        "Labeled mock: two pages sharing a promo strip. Caption: mock. Not a conref arrow.",
      ],
      failWhen:
        "The log says an Experience Fragment is a conref, or a procedure is stored in the fragment as the handbook.",
      expected:
        "Three-way distinction written. One Kitepump promo idea. One ‘would not’. Mock labeled.",
    },
    quiz: [
      {
        q: "You want the pinch warning on two AEM pages. Do you put it in an Experience Fragment?",
        options: [
          "Yes — an Experience Fragment is a conref",
          "No — that sentence is DITA. Link to the handbook, or paraphrase. Do not pretend the fragment is the warning library",
          "Yes — also add a keyref",
        ],
        answer: 1,
        why: "Safety lines stay in the handbook. An Experience Fragment is layout.",
      },
      {
        q: "A header used on 40 pages. Copy-paste the blocks each time, or reuse a layout strip?",
        options: [
          "Copy-paste",
          "Reuse a layout strip (Experience Fragment or the template) — that is the point",
          "A DITA map",
        ],
        answer: 1,
        why: "Layout you would otherwise copy from page to page is the job.",
      },
    ],
    quests: defaultQuests({
      learn: "See Experience Fragment as a reusable layout strip",
      doTitle: "Keep the pinch warning in the handbook",
      doDone: "Three-way note written. Mock labeled.",
      stress: "Pick where the pinch warning lives",
    }),
    fieldNotePrompt: "What promo strip did you reuse, and on which two pages?",
    tomorrowHook: "Tomorrow: notes on the page, snapshots, and restore.",
    body: `## Reuse a layout

An **Experience Fragment** is a reusable chunk of page layout. A promo strip. A footer. Something you would otherwise copy from page to page.

It is not a **conref**. A conref reuses a piece of XML in Oxygen. You did that in week 4. Different desk, different file.

It is not a **Content Fragment**. That is a fill-in form of fields. You will meet it next week. Do not mix the names.

Use an Experience Fragment for ‘Shop HP-40’ on two pages. Do not store the handbook there. Do not store a procedure there.

## Word today

**Experience Fragment** — a reusable strip of page layout in AEM.

## Lab

Three names in the log. One promo idea. One thing you would not put in the strip. Labeled mock.

## Figure

Labeled mock: shared promo strip. Caption: *Mock. Layout reuse, not XML reuse.*
`,
  },
  {
    n: 68,
    week: 10,
    title: "Notes, versions, restore",
    objective:
      "Log annotate, version, and restore on an AEM page, and write that this is not Git and not Oxygen Track Changes.",
    minutes: 90,
    skills: ["aemSites", "review"],
    legacy: ["t7-aem", "t4-review"],
    youtube: [
      yt("aemGlobal", ["A live site that still needs a review path"]),
    ],
    sources: [S.aemAuthor, S.basicHandling, S.aem65],
    toolCards: ["page-editor", "review"],
    badgeId: null,
    lab: {
      pack: "aem-author-field-log",
      title: "Three verbs on the page",
      steps: [
        "Read Experience League on annotations and page versions (authoring). Write oxygen-bootcamp-work/week10/field-log-68.txt with the menu names you saw. If a label differs, write ‘verify in your version’.",
        "Three verbs: annotate (leave a note on the page), version (take a snapshot), restore (put an old snapshot back).",
        "Write: this is not Git. This is not Oxygen Track Changes. If the landing page is in AEM, review it in AEM.",
        "Kitepump: take a version before a campaign swap, not after a panic.",
        "Write a question in the log: after restore, do I still need to publish? (Usually yes — restore is on author.)",
        "Labeled mock: a list of versions. Caption: mock.",
      ],
      failWhen:
        "The log says restore is Git, or annotations are DITA comments, or you mix three review tools on the same landing page.",
      expected:
        "Three verbs with menu names (or verify notes). One channel for the page. Mock labeled.",
    },
    quiz: [
      {
        q: "You restored a page version. Did that publish the page?",
        options: [
          "Always",
          "Not always — restore is on the author side. You may still need to publish",
          "Restore is the same as Publish",
        ],
        answer: 1,
        why: "Author vs publish still applies. Restore puts the old page back on author.",
      },
      {
        q: "Why take a version before you swap the teaser?",
        options: [
          "AEM requires a version every hour",
          "Restore needs a snapshot. Panic has none",
          "Versions replace the asset library",
        ],
        answer: 1,
        why: "A snapshot is insurance on the author side.",
      },
    ],
    quests: defaultQuests({
      learn: "Find annotate, version, and restore in the docs or video",
      doTitle: "Write the three verbs and one channel for the page",
      doDone: "Three verbs logged. Channel written. Mock labeled.",
      stress: "Pick whether restore also publishes",
    }),
    fieldNotePrompt: "Which three verbs did you write in the log? Quote the menu names you saw.",
    tomorrowHook: "Tomorrow is the week check: name the blocks and one way to ship the page.",
    body: `## Notes, snapshots, restore

An **annotation** is a note stuck on the AEM page for a teammate. A **version** is a snapshot of the page. **Restore** puts an old snapshot back on author.

This is not Git. This is not Track Changes in Oxygen. If the landing page lives in AEM, leave the notes in AEM.

Take a version before a campaign swap. After a restore, check whether you still need to publish. Restore does not always mean live.

## Word today

**Annotation** — a note on the AEM page.

**Version** — a snapshot of the page you can go back to.

**Restore** — put that snapshot back on author.

## Lab

Three verbs. Menu names from the docs (or a verify note). Labeled mock.

## Figure

Labeled mock: version list with Restore. Caption: *Mock. Check the label in your version of AEM.*
`,
  },
  {
    n: 69,
    week: 10,
    title: "Week 10 check",
    objective:
      "Name Title, Text, Image, Teaser, Container, and Experience Fragment on a landing skeleton, plus one way to ship the page.",
    minutes: 110,
    skills: ["aemSites", "review"],
    legacy: ["t7-aem"],
    youtube: [
      yt("aemHeadless", ["Blocks on a page, recap"]),
      yt("aemGlobal", ["A finished site, recap"]),
    ],
    sources: [S.coreComp, S.aemAuthor, S.basicHandling],
    toolCards: ["page-editor", "sites-console"],
    badgeId: "core-components-desk",
    boss: true,
    lab: {
      pack: "aem-author-field-log",
      title: "Landing skeleton plus a ship path",
      steps: [
        "Gather field-log-63 through 68. Add field-log-69.txt: Kitepump landing skeleton (Title, Image with alt, Text, Container of Teasers, optional Experience Fragment promo). Two ‘will not’ lines (no handbook paste, no nested-box hobby).",
        "Read a page-workflow topic on Experience League (request activation, or the path your docs show). Write the name and who starts it. If your desk uses only Quick Publish, write that.",
        "A **workflow** is a named path that asks someone (or the system) to publish. Quick Publish is the short path you met last week. Name the one you would actually click.",
        "Check the week10 folder: no sentence that calls an Experience Fragment a conref. No sentence that calls Page Editor ‘Author mode’.",
        "Labeled mock: the landing skeleton. Caption: mock.",
        "Pass the quiz. Week 11 stays locked until this day is finished (lab + quiz + a short note).",
      ],
      failWhen:
        "Skeleton missing a block you claimed, or the ship path is unnamed, or mixed names remain, or mocks have no caption.",
      expected:
        "Skeleton plus a workflow name or Quick Publish. Names clean. Mock labeled.",
    },
    quiz: [
      {
        q: "You failed this check. Does week 11 open anyway?",
        options: [
          "Yes, Friday’s log is enough",
          "No. Finish this day’s lab, quiz, and note. You can retry the quiz.",
          "Yes, if you do the 5-minute warmup",
        ],
        answer: 1,
        why: "Next week waits until you can name the blocks and one way to ship. Retry is free.",
      },
      {
        q: "The core-components-desk badge means you wrote the code behind Title and Text. True or not?",
        options: [
          "True — authors write the code",
          "Not true — you can name and use the blocks. Developers build them",
          "True on Cloud only",
        ],
        answer: 1,
        why: "This week is author work. You insert the blocks. You do not implement them.",
      },
      {
        q: "You restore an old hero, then Quick Publish without looking. What can go wrong?",
        options: [
          "Nothing — restore is always safe",
          "You may ship an old picture, or a picture that was never published",
          "AEM blocks it every time",
        ],
        answer: 1,
        why: "Restore is on author. Publish is a second step. Check the picture too.",
      },
    ],
    quests: defaultQuests({
      learn: "List the blocks on the Kitepump landing page",
      doTitle: "Write the skeleton and one ship path",
      doDone: "Skeleton plus workflow or Quick Publish. Mock labeled.",
      stress: "Pass the quiz. Retry if you need to.",
    }),
    fieldNotePrompt: "List the blocks on the Kitepump landing and the ship path you named.",
    tomorrowHook: "Week 11: three ways people write in AEM. Names first.",
    body: `## A check, not a show

This is the week boss. You already met these blocks. You are proving you can name them.

- **Title, Text, Image, Teaser, Container**
- **Experience Fragment** as a layout strip, not a DITA reuse
- One **workflow** (a named path to ask for publish) or **Quick Publish** if that is the path your desk uses

Fail the quiz and **week 11 stays locked**. Retry as many times as you want. The 5-minute warmup does not open the week.

You may not have AEM. The evidence is the field log, the labeled mock, and the official video. That is enough.

## Word today

**Workflow** — a named path that asks for publish. Quick Publish is the short path. Some desks want the longer named path. Write the one you would click.

## Proof

1. Landing skeleton without handbook paste.
2. Alt phrases.
3. No extra nested boxes.
4. One ship path.

## Figure

Labeled mock of the landing. Caption: *Mock. Same product story as the handbook, different desk.*
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
