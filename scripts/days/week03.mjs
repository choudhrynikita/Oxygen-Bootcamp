import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 15,
    week: 3,
    title: "topicref is a contract — href, keys, navtitle, linking",
    objective:
      "Edit one topicref’s properties (keys, navtitle, linking) without breaking completeness or inventing a second title in the topic.",
    minutes: 90,
    skills: ["maps", "oxygenUi"],
    legacy: ["t3-maps"],
    youtube: [
      yt("maps", [
        "Edit Properties on a topicref",
        "navtitle vs the topic title",
      ]),
    ],
    sources: [S.mapsDemo, S.authorDita, S.ugEditor],
    toolCards: ["maps-manager", "attributes"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "One topicref, four fields",
      steps: [
        "Open flowers.ditamap in Maps Manager. Set it as root map.",
        "Right-click the Care task change-water.dita > Edit Properties (verify the label).",
        "Set keys=\"change-water\" if missing. Set navtitle to Change vase water (different from the topic title Change the water).",
        "Set linking to normal (or leave default). Write the four fields you saw in oxygen-bootcamp-work/week3/topicref-fields.txt.",
        "Do not duplicate the navtitle as a second <title> inside the topic.",
        "Run completeness. Open the topic — title in the file must still be Change the water.",
      ],
      failWhen:
        "You edited the topic title instead of navtitle, or keys are empty, or completeness reports a missing href.",
      expected:
        "topicref has keys and a navtitle distinct from the file title. Completeness clean. Field note lists the four fields.",
    },
    quiz: [
      {
        q: "navtitle on the topicref disagrees with <title> in the topic. What publishes in the TOC?",
        options: [
          "Always the file title — navtitle is decoration",
          "The map can show navtitle in the TOC; the topic title still heads the page",
          "Oxygen rejects the map",
        ],
        answer: 1,
        why: "navtitle is a map-side label. The topic still owns its title. Do not copy navtitle into a second title element.",
      },
      {
        q: "linking=\"none\" on a topicref. What did you just forbid?",
        options: [
          "The topic cannot be opened in Author",
          "Generated related links to and from this topicref",
          "Images inside the topic",
        ],
        answer: 1,
        why: "linking controls generated links. The file still opens. Images are unrelated.",
      },
      {
        q: "You type a second <title> in the topic so the TOC matches. First repair?",
        options: [
          "Leave it — two titles are a DITA feature",
          "Delete the extra title; put the TOC label on the topicref as navtitle",
          "Move the topic into AEM Sites",
        ],
        answer: 1,
        why: "One title in the topic. TOC labels belong on the map.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Edit Properties and what a second title forbids",
      doTitle: "Keep navtitle on the topicref",
      doDone: "keys set. navtitle ≠ file title. Completeness clean.",
      stress: "Add a second title, read the error or the mess, undo",
    }),
    fieldNotePrompt: "Which of the four topicref fields would you refuse to leave blank on a shared map, and why?",
    tomorrowHook: "Tomorrow you split a book: a submap the parent map owns, not a copy of the files.",
    body: `## The map is the book

A **topicref** is a pointer plus policy. **href** is the file. **keys** is the name the rest of the book uses. **navtitle** is a TOC label when you need one. **linking** and **toc** and **collection-type** change generated behavior.

Right-click a node > **Edit Properties**. Do not hand-edit a 200-line map in Text until you can survive Properties.

## Title vs navtitle

The topic owns \`<title>\`. The map may own \`navtitle\`. If they match, skip navtitle. If the TOC needs a shorter label, set navtitle — do not add a second title in the file.

## Figure

Edit Properties dialog: href, keys, navtitle, linking. Caption: *Maps Manager > Edit Properties. Verify the menu path in your version.*
`,
  },
  {
    n: 16,
    week: 3,
    title: "Submaps — a chapter is a map, not a folder",
    objective:
      "Create a submap, point the parent map at it, and prove completeness still walks both files.",
    minutes: 90,
    skills: ["maps", "oxygenUi"],
    legacy: ["t3-maps"],
    youtube: [
      yt("maps", [
        "A map referenced from a map",
        "Root map vs the file you are editing",
      ]),
      yt("ditaStart", ["Where the map will later live"]),
    ],
    sources: [S.mapsDemo, S.authorDita, S.ugEditor],
    toolCards: ["maps-manager"],
    badgeId: "map-is-a-book",
    lab: {
      pack: "kitepump-dita",
      title: "Kitepump care as a submap",
      steps: [
        "Create oxygen-bootcamp-work/week3/kitepump/ (or samples/kitepump-dita/ if the pack already exists). This is the new product next to flower-docs — do not replace flower-docs.",
        "Create maps/kitepump.ditamap (root) and maps/care.ditamap (submap). Root title: Kitepump handbook. Submap title: Care.",
        "In the submap, topicref two new topics: topics/what-kitepump-is.dita (concept) and topics/inflate-the-tire.dita (task, three cmds).",
        "In the root map, add <mapref href=\"maps/care.ditamap\"/> (or topicref format=\"ditamap\" — write which your version inserts).",
        "Set kitepump.ditamap as root map. Completeness must visit both maps and both topics.",
        "Do not copy the two topics into the root map as a second set of topicrefs.",
      ],
      failWhen:
        "The submap is a folder with no map file, or topics are referenced twice, or completeness never opens care.ditamap.",
      expected:
        "Root maprefs the care submap. Two valid topics. Completeness walks parent + child. Zero duplicate topicrefs.",
    },
    quiz: [
      {
        q: "A folder named care/ with two topics is a submap. True?",
        options: ["True", "False"],
        answer: 1,
        why: "A submap is a .ditamap the parent references. A folder is only a folder.",
      },
      {
        q: "You set care.ditamap as root map to edit it, then forget to switch back. What breaks first?",
        options: [
          "Keys defined only on the parent look unresolved",
          "The submap files delete themselves",
          "Author mode disables",
        ],
        answer: 0,
        why: "Keys resolve from the root map. The wrong root map is the classic unresolved-key bug.",
      },
      {
        q: "Parent and submap both topicref inflate-the-tire.dita. What did you ship?",
        options: [
          "A useful alias",
          "A duplicated chapter in the book",
          "A keydef",
        ],
        answer: 1,
        why: "Two topicrefs are two TOC entries. An alias is a key, not a second href.",
      },
    ],
    quests: defaultQuests({
      learn: "Name mapref and what a folder-as-chapter forbids",
      doTitle: "Keep the care submap owned by the root",
      doDone: "Completeness walks both maps. Topics are not duplicated.",
      stress: "Set the wrong root map, watch a key fail, switch back",
    }),
    fieldNotePrompt: "When would you refuse to split a map, even if the folder is getting large?",
    tomorrowHook: "Tomorrow you put stable ids on topics and elements so xrefs can survive a title change.",
    body: `## Submaps

A **submap** is a map the parent map references. Use it when a chapter is a book of its own: Care, Parts, Service.

The parent uses \`mapref\` (or a topicref with \`format="ditamap"\`). The filesystem folder is not the chapter.

## Root map

Set the **root map** to the parent when you want keys and completeness for the whole book. You may open the submap as root to edit it — then switch back.

## kitepump-dita

This pack sits **beside** flower-docs. Flower-docs stays. Kitepump is a portable floor pump used in later reuse and publish labs.

## Figure

Two map files: kitepump.ditamap → care.ditamap → two topics. Caption: *Maps Manager tree after mapref. Not two copies of the topics.*
`,
  },
  {
    n: 17,
    week: 3,
    title: "IDs that stay when the title changes",
    objective:
      "Set a stable topic id and one element id, and prove a title edit does not rename the id.",
    minutes: 90,
    skills: ["ditaTopics", "xmlLiteracy"],
    legacy: ["t3-topics"],
    youtube: [
      yt("ditaEdit", [
        "id on the topic element",
        "id on a paragraph or step you might xref",
      ]),
    ],
    sources: [S.authorDita, S.dita13, S.ugEditor],
    toolCards: ["attributes", "outline"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Stable ids on the inflate task",
      steps: [
        "Open topics/inflate-the-tire.dita. In Attributes or Text, set the task id to inflate-the-tire (lowercase, hyphens). Not the title string.",
        "Put id=\"gauge-check\" on the step that mentions the gauge (or add that step).",
        "Change the topic title to Inflate a tire with Kitepump. Save. Confirm id did not change.",
        "Create topics/id-rules.dita (concept) with three rules: lowercase, hyphens, never the sentence title.",
        "Append id-rules.dita to the root or care map. Completeness clean.",
        "If Oxygen auto-generated an id like unique_123, replace it with a stable one and write why in the field note.",
      ],
      failWhen:
        "The topic id is a sentence, or it changed when the title changed, or two topics share an id in the same map.",
      expected:
        "inflate-the-tire id stable across a title edit. gauge-check on one step. id-rules.dita in the map.",
    },
    quiz: [
      {
        q: "Oxygen filled id=\"unique_4\". You ship it. What hurts later?",
        options: [
          "Nothing — unique is unique",
          "xrefs and conrefs that cannot be read by a human in review",
          "The file becomes not well-formed",
        ],
        answer: 1,
        why: "Auto ids are valid and opaque. Reviewers and reuse authors need a name they can type.",
      },
      {
        q: "Two topics in one map both have id=\"intro\". What fails?",
        options: [
          "Well-formedness of each file",
          "xrefs that only say #intro — the target is ambiguous in the book",
          "Maps Manager refuses to open",
        ],
        answer: 1,
        why: "Each file can be valid. The book cannot point at #intro alone. Prefer filename + id, or keys.",
      },
      {
        q: "You rename a title to match a product change. Should the topic id follow?",
        options: [
          "Yes — ids track titles",
          "No — ids are addresses; titles are words",
          "Only if you also rename the file",
        ],
        answer: 1,
        why: "Ids are addresses. Change them only when you are ready to fix every pointer.",
      },
    ],
    quests: defaultQuests({
      learn: "Name topic id vs title and what unique_123 forbids in a shared book",
      doTitle: "Keep inflate-the-tire as the id after a title edit",
      doDone: "id stable. gauge-check present. id-rules.dita in the map.",
      stress: "Duplicate an id on purpose, try an xref, then restore",
    }),
    fieldNotePrompt: "What id would you refuse to generate automatically, and what would you type instead?",
    tomorrowHook: "Tomorrow you xref a topic and an element without typing a web URL.",
    body: `## IDs are addresses

The topic element needs an **id**. Elements you will link to need an id too. Use lowercase hyphens. Match the filename when you can: \`inflate-the-tire.dita\` → \`id="inflate-the-tire"\`.

Do not use the title sentence as an id. Titles change. Ids are addresses.

## Scope

An id must be unique **in the file**. Across a map, two topics named \`intro\` make \`#intro\` a coin toss. Prefer keys (next week) or \`filename.dita#id\`.

## Auto ids

Oxygen may insert \`unique_*\`. Valid. Opaque. Replace them on anything a teammate will xref.

## Figure

Attributes view: id=\`inflate-the-tire\` on the task. Caption: *Attributes panel on the topic element, not on the title text.*
`,
  },
  {
    n: 18,
    week: 3,
    title: "xref — point at a topic, not at a URL you invented",
    objective:
      "Insert two xrefs: one to a topic, one to an element id, and prove a broken href shows up in completeness.",
    minutes: 90,
    skills: ["ditaTopics", "maps"],
    legacy: ["t3-insert"],
    youtube: [
      yt("ditaEdit", [
        "Insert Cross Reference",
        "Target picker vs typing a URL",
      ]),
    ],
    sources: [S.authorDita, S.ugEditor, S.mapsDemo],
    toolCards: ["author-mode", "maps-manager"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Two xrefs, one broken on purpose",
      steps: [
        "In what-kitepump-is.dita, insert an xref to inflate-the-tire.dita using the toolbar (Insert Cross Reference). Do not type https://.",
        "Insert a second xref to inflate-the-tire.dita#gauge-check (the step id from Day 17).",
        "Validate both topics. Follow the xref in Author — it should jump.",
        "Break the topic xref href (typo the filename). Run completeness on the root map. Record the exact row.",
        "Repair the href. Completeness clean.",
        "Write one sentence in the concept: xrefs are DITA pointers, not website URLs.",
      ],
      failWhen:
        "An xref is a raw https link to a local file, or you leave the broken href in the map, or the element xref has no id target.",
      expected:
        "Two working xrefs (topic + element). Completeness was red, then clean. No invented URL.",
    },
    quiz: [
      {
        q: "You paste https://example.com/inflate.html into an xref href for a DITA topic. What did you ship?",
        options: [
          "A portable book link",
          "A web address that will not track the DITA file when it moves",
          "A keyref",
        ],
        answer: 1,
        why: "xref href in a DITA book should be a topic/element (or a key). A URL is a website, not a topic move.",
      },
      {
        q: "The xref text is hardcoded ‘click here’. First repair?",
        options: [
          "Leave it — screen readers prefer click here",
          "Let the xref use the target title, or write a phrase that names the destination",
          "Convert the xref to an image",
        ],
        answer: 1,
        why: "Click here fails accessibility and reuse. The target title travels with the link.",
      },
      {
        q: "Completeness reports the xref target missing, but the topic opens. What is likely?",
        options: [
          "The href path is wrong relative to the source topic",
          "Author mode cannot follow valid xrefs",
          "You need AEM Guides to resolve xrefs",
        ],
        answer: 0,
        why: "href is relative to the file that contains the xref unless you use a key.",
      },
    ],
    quests: defaultQuests({
      learn: "Name Insert Cross Reference and what an https href forbids in a local book",
      doTitle: "Keep two xrefs resolvable",
      doDone: "Topic xref and element xref jump. Completeness clean after the break/repair.",
      stress: "Typo the href, read the completeness row, fix it",
    }),
    fieldNotePrompt: "Quote the completeness row you caused. What path would have been right on the first try?",
    tomorrowHook: "Tomorrow you add related links the map can generate — and you refuse a handmade list that duplicates the map.",
    body: `## xref

An **xref** points at a DITA target: a topic, or a topic plus element id. Use the toolbar picker. Do not invent a website URL for a file that lives in the map.

Keys (next week) are even better: the map owns the name, the path can move.

## Link text

Prefer empty xref text so the processor pulls the target title. If you write text, name the destination. Never “click here.”

## Completeness

A typo in href is a completeness row. Cause one. Read it. Fix it. That is the literacy.

## Figure

Insert Cross Reference dialog: tree of the root map. Caption: *Picker from the root map. Not a browser address bar.*
`,
  },
  {
    n: 19,
    week: 3,
    title: "Related links — generated beats handmade when the map already knows",
    objective:
      "Let a collection-type or related-links list point at siblings, and delete a handmade list that duplicated the map.",
    minutes: 90,
    skills: ["maps", "ditaTopics"],
    legacy: ["t3-maps", "t3-insert"],
    youtube: [
      yt("maps", [
        "collection-type on a topicref",
        "How sibling links show after publish — or in Author preview",
      ]),
    ],
    sources: [S.mapsDemo, S.authorDita, S.dita13],
    toolCards: ["maps-manager", "author-mode"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Siblings, not a pasted See also",
      steps: [
        "On the Care mapref or the parent topicref, set collection-type=\"family\" (or sequence if you want ordered next/prev). Write which you picked.",
        "In what-kitepump-is.dita, if you pasted a See also list of filenames, delete it.",
        "Add a related-links section only if you must point outside the family. One linkrel to inflate-the-tire is enough — or skip it if family covers it.",
        "Create topics/parts-list.dita (reference) and add it to Care so the family has three members.",
        "Run completeness. In the field note, list how a reader should move from concept → task → reference without a handmade list.",
      ],
      failWhen:
        "A bullet list of filenames sits in conbody as fake related links, or collection-type is set but the siblings are not in the same parent.",
      expected:
        "Three topics under Care. collection-type set. No handmade See also of paths. Completeness clean.",
    },
    quiz: [
      {
        q: "A See also list in the concept hard-codes inflate-the-tire.dita. The file moves. What happens?",
        options: [
          "The list updates because it is DITA",
          "The list lies — it is text, not a pointer the map owns",
          "Completeness rewrites the list",
        ],
        answer: 1,
        why: "A bullet of filenames is prose. related-links and collection-type are structure.",
      },
      {
        q: "collection-type=\"family\" on a topicref with one child. What did you get?",
        options: [
          "A full related-links group",
          "Almost nothing — family needs siblings",
          "A submap",
        ],
        answer: 1,
        why: "Family links siblings. One child has no siblings. Add members or drop the attribute.",
      },
      {
        q: "You need a link to a topic in a different chapter. Best first tool?",
        options: [
          "collection-type on this chapter",
          "related-links or an xref (soon: a key)",
          "Paste the other chapter’s map into this topic",
        ],
        answer: 1,
        why: "collection-type is local family. Cross-chapter wants xref/key or an explicit related link.",
      },
    ],
    quests: defaultQuests({
      learn: "Name collection-type and what a handmade See also forbids",
      doTitle: "Keep Care as a family of three",
      doDone: "collection-type set. No path list in conbody. Completeness clean.",
      stress: "Paste a fake See also, then delete it",
    }),
    fieldNotePrompt: "When would you refuse collection-type and write an explicit related-links entry instead?",
    tomorrowHook: "Tomorrow you name files so a move is boring — lowercase, hyphens, no FINAL(2).",
    body: `## Related links

The map already knows the family. **collection-type** (\`family\`, \`sequence\`, \`choice\`) tells processors to generate sibling or next/prev links.

**related-links** in a topic is for a pointer the map cannot infer. Use it sparingly.

## Handmade lists

A bullet list of filenames is not a link. It will not move when the file moves. Completeness will not see it. Delete it.

## Figure

Care parent with three children and collection-type=family. Caption: *Edit Properties on the parent topicref, not on each child.*
`,
  },
  {
    n: 20,
    week: 3,
    title: "Name files, then move them without silent breakage",
    objective:
      "Rename one topic with Master Files or a careful map edit, and prove a desktop-style FINAL(2) name never enters the pack.",
    minutes: 90,
    skills: ["maps", "oxygenUi"],
    legacy: ["t3-maps"],
    youtube: [
      yt("completeness", [
        "Missing href after a move",
        "How many files the check visited",
      ]),
    ],
    sources: [S.mapsDemo, S.ugEditor, S.authorDita],
    toolCards: ["maps-manager"],
    badgeId: null,
    lab: {
      pack: "kitepump-dita",
      title: "Rename without lying to the map",
      steps: [
        "Write the house rules in topics/file-naming.dita: lowercase, hyphens, no spaces, no FINAL, no (2), topic id matches basename when possible.",
        "Append that concept to the root map.",
        "Rename parts-list.dita to pump-parts.dita. Update the topicref href. If your Oxygen project has Master Files enabled, use it and write that you did; if not, edit the map and search the pack for the old name.",
        "Run completeness. Then grep (Find in Files) for parts-list. Zero hits except the field note.",
        "Move pump-parts.dita into topics/ref/ (create the folder). Update href. Completeness clean.",
        "Refuse a filename Pump Parts FINAL(2).dita — if a teammate sent one, save it under the house name instead.",
      ],
      failWhen:
        "The map still points at the old path, or completeness is clean while a leftover xref uses the old name, or the new file lives on the desktop.",
      expected:
        "pump-parts.dita in its new folder. Map and xrefs updated. Completeness clean. Naming topic in the map.",
    },
    quiz: [
      {
        q: "You renamed a file in the OS file manager. Oxygen still opens the old tab. Completeness is red. First repair?",
        options: [
          "Ignore completeness — the tab is open",
          "Update every href/key that pointed at the old path, then close the stale tab",
          "Delete the map",
        ],
        answer: 1,
        why: "The OS does not update DITA pointers. Completeness is telling the truth.",
      },
      {
        q: "Master Files can rewrite references on rename. When is that still not enough?",
        options: [
          "Never — Master Files is magic",
          "When a path lives in a comment, a SME email, or a file not in the project",
          "When the file is a concept",
        ],
        answer: 1,
        why: "Master Files updates project references. It does not search Slack. Find in Files after every rename.",
      },
      {
        q: "Why refuse Hello Concept FINAL(2).dita?",
        options: [
          "Spaces, capitals, and FINAL(2) break href discipline and collide on the next email",
          "DITA forbids digits in filenames",
          "Oxygen cannot open files with parentheses",
        ],
        answer: 0,
        why: "Oxygen can open it. Your map and your teammates cannot live with it.",
      },
    ],
    quests: defaultQuests({
      learn: "Name lowercase-hyphen rules and what an OS-only rename forbids",
      doTitle: "Keep hrefs true after rename and move",
      doDone: "New path in the map. Find in Files clean. Completeness clean.",
      stress: "Rename in the OS only, read completeness, then fix every pointer",
    }),
    fieldNotePrompt: "What leftover string would still say the old filename if you forgot Find in Files?",
    tomorrowHook: "Tomorrow is the Week 3 boss: a kitepump map you can break and repair without silent misses.",
    body: `## File naming

Lowercase. Hyphens. No spaces. No \`FINAL\`. No \`(2)\`. Basename matches topic id when you can. Maps live in \`maps/\`. Topics live in \`topics/\`. Images in \`images/\`.

A teammate email named \`Hello Concept FINAL(2).dita\` gets saved under the house name. The email name never enters the pack.

## Moving files

Move, then **update hrefs**. Enable **Master Files** on the map if your project allows it so Oxygen rewrites references on rename. Then **Find in Files** for the old name anyway.

## Silent breakage

The failure mode is completeness green on the current file and red on the book — or worse, green because the topicref still points at a copy you forgot. Run completeness on the **root map**.

## Figure

Find in Files hits for \`parts-list\` going to zero. Caption: *Find in Files after rename. Completeness is necessary, not sufficient, if an xref was typed by hand.*
`,
  },
  {
    n: 21,
    week: 3,
    title: "Boss — map surgery without silent breakage",
    objective:
      "Break and repair a kitepump book: missing href, duplicate topicref, bad id, leftover xref — then pass completeness.",
    minutes: 110,
    skills: ["maps", "review", "xmlLiteracy"],
    legacy: ["t4-complete", "t3-maps"],
    youtube: [
      yt("completeness", ["The completeness report rows", "Missing href vs missing id"]),
      yt("maps", ["Root map control on the toolbar"]),
    ],
    sources: [S.mapsDemo, S.ugEditor, S.learnDita],
    toolCards: ["maps-manager", "outline"],
    badgeId: "completeness-clean",
    boss: true,
    lab: {
      pack: "kitepump-dita",
      title: "Clinic: four breaks, four repairs",
      steps: [
        "Copy your kitepump pack to oxygen-bootcamp-work/week3-clinic/ (do not vandalize the only copy).",
        "Break 1: rename a topic file without updating the topicref. Completeness. Repair.",
        "Break 2: duplicate a topicref in parent and submap. Notice the double TOC. Remove the extra.",
        "Break 3: change an element id that an xref uses. Follow the xref. Repair the id or the xref.",
        "Break 4: unset the root map. Open a topic with a keyref if you have one; or xref across folders. Restore the root map.",
        "Timed completeness read: run once on the clean clinic copy. Write how many files it visited.",
        "Answer the boss quiz. Retry unlimited. Day 22 still unlocks if Day 20 lab is done.",
      ],
      failWhen:
        "You cannot explain one of the four errors in a sentence, or you leave the clinic copy broken, or flower-docs was edited instead of kitepump.",
      expected:
        "Clinic copy completeness clean. Four error sentences in the field note. File-visit count recorded.",
    },
    quiz: [
      {
        q: "Completeness is clean but an xref still jumps to the wrong paragraph. What is true?",
        options: [
          "Impossible — completeness checks xref text",
          "Possible — the id exists but is on the wrong element",
          "Then the submap is illegal",
        ],
        answer: 1,
        why: "Completeness finds missing targets. It does not score whether the surviving id is the one you meant.",
      },
      {
        q: "You failed this boss. Does Day 22 stay locked?",
        options: [
          "Yes, forever",
          "No, if Friday (Day 20) lab is done the next week can unlock. The boss badge stays locked until you pass.",
          "No, Daily Burst unlocks the week",
        ],
        answer: 1,
        why: "Boss badge waits. Curriculum week does not hostage you if Friday lab is done.",
      },
      {
        q: "Parent map and submap both href the same topic. Completeness is green. Ship it?",
        options: [
          "Yes — green means the book is honest",
          "No — you shipped the chapter twice; completeness does not mean unique",
          "Yes if the ids differ",
        ],
        answer: 1,
        why: "Completeness is missing targets, images, keys. Duplicates can be valid and wrong.",
      },
      {
        q: "Flower-docs still exists. Kitepump is the Week 3 pack. What do you not do?",
        options: [
          "Keep both",
          "Replace flower-docs with kitepump",
          "Open either as root map when you work that book",
        ],
        answer: 1,
        why: "Flower-docs stays the Week 1–2 bench. Kitepump is additive.",
      },
    ],
    quests: defaultQuests({
      learn: "Name completeness vs duplicate-chapter and wrong-id failures",
      doTitle: "Clinic copy still validates",
      doDone: "Four breaks repaired. Completeness clean. File-visit count written.",
      stress: "Explain each error in one sentence",
    }),
    fieldNotePrompt: "Write the four errors you caused and the one-line repair for each.",
    tomorrowHook: "Week 4: keys and conref as practice — you will reuse a warning, not memorize a glossary.",
    body: `## Clinic, not a ceremony

This is a week boss: mixed repair + scenario questions + a timed completeness read.

Fail it and **Day 22 still unlocks if Day 20 lab is done**. The boss badge stays locked until you retry.

## Errors from this week

1. **Missing href** — file moved, map not updated.
2. **Duplicate chapter** — parent and submap both point at the same topic.
3. **Wrong id** — xref target exists but is the wrong element.
4. **Wrong root map** — keys and some xrefs look broken.

## Two packs

\`flower-docs\` stays. \`kitepump-dita\` is the product book from here through publish. Do not merge them into one map.

## Figure

Completeness report: one row per problem. Caption: *DITA Maps Manager > Validate and Check for Completeness.*
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
