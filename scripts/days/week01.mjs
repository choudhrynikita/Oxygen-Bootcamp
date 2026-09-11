import { S, YT } from "../sources.mjs";
import { defaultQuests, weekOf } from "../lesson-format.mjs";

const yt = (key, watchFor) => ({ ...YT[key], watchFor });

export default [
  {
    n: 1,
    week: 1,
    title: "Install Oxygen and look around",
    objective: "Download Oxygen, open it, and write down the version from Help > About.",
    minutes: 75,
    skills: ["oxygenUi"],
    legacy: ["t1-install"],
    youtube: [
      yt("gettingStarted", [
        "The window when the app first opens",
        "Where the menus sit at the top",
      ]),
    ],
    sources: [S.ugEditor, S.documentation],
    toolCards: [],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Get the app open",
      steps: [
        "Go to oxygenxml.com and download Oxygen XML Author or Oxygen XML Editor (the trial is fine).",
        "Install it and open it. You should see a window with menus at the top and a big empty area in the middle.",
        "Open Help > About. Write the version in a plain text file named oxygen-bootcamp-work/day-01-version.txt.",
        "Walk the window once: top menus, left side, bottom tabs if any are showing. You do not have to name them yet.",
        "If you cannot install today, look at the labeled mock in this lesson, write why you could not install, and still write what you see in the mock.",
      ],
      failWhen: "You never opened the app (or the mock) and you have no version note.",
      expected: "A version number in day-01-version.txt, or a mock note that says why the app is not installed.",
    },
    quiz: [
      {
        q: "What is Oxygen, in one line?",
        options: [
          "A writing app for help pages stored as files",
          "A website you publish to customers",
          "A photo editor",
        ],
        answer: 0,
        why: "Oxygen is the app on your computer (or in a browser later) where you write structured help pages.",
      },
      {
        q: "Where do you read the version number?",
        options: ["File > New", "Help > About", "The Recycle Bin"],
        answer: 1,
        why: "Help > About shows the version. If your menu label is slightly different, write that next to the number and keep going.",
      },
    ],
    quests: defaultQuests({
      learn: "Find Help > About and read the version",
      doTitle: "Install Oxygen, or complete the mock and say why",
      doDone: "Version is written down, or the mock note is saved.",
      stress: "Pick what Oxygen is, and where the version lives",
    }),
    fieldNotePrompt: "What did the window look like when it first opened? Two sentences is enough.",
    tomorrowHook: "Tomorrow you open a sample page and type one sentence.",
    body: `## You got a desk

You were hired to write help pages. Those pages are files on a computer. **Oxygen** is the writing app you will live in for most of this course.

Today you only install it and look at the window. You will not write a real page yet. You will not meet any other company’s tools today.

## Install

1. Open [oxygenxml.com](https://www.oxygenxml.com/) in a browser.
2. Download **Oxygen XML Author** or **Oxygen XML Editor**. Author is enough for writers. Editor is fine too.
3. Install. Open the app.
4. Click **Help > About**. Write the version in \`oxygen-bootcamp-work/day-01-version.txt\`.

If a menu name is different on your copy, write “my menu said …” next to it and keep going.

## What you should see

A window. Menus along the top. A big area in the middle that will hold a page. Some side panels that may be empty. That is the desk.

## Word today

**Oxygen** — the writing app from Syncro Soft. Remember the name. You will open it every day.

## Watch

Play the official Getting Started video. Pause on the first full window. You are only looking. You do not need the four editing modes yet.

## Lab

The lab is: the app is open, and you wrote the version down. If you cannot install, use the labeled mock and say why.
`,
  },
  {
    n: 2,
    week: 1,
    title: "Open a sample and type a sentence",
    objective: "Open the sample page, type one sentence, and save the file.",
    minutes: 80,
    skills: ["oxygenUi"],
    legacy: ["t1-xml"],
    youtube: [
      yt("gettingStarted", ["File > Open", "How a page looks in the big middle area"]),
    ],
    sources: [S.ugEditor, S.firstDita],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "One sentence in the sample",
      steps: [
        "In Oxygen: File > Open. Open samples/flower-docs/topics/hello-concept.dita from this course.",
        "Click in the big writing area. Add this sentence under the first paragraph: The desk copy is a sample, not a live catalog.",
        "Save (Ctrl+S or Cmd+S). Confirm the file name in the tab still ends with .dita.",
        "Close the file. Open it again. Your sentence should still be there.",
        "Write the full path of the file in oxygen-bootcamp-work/day-02-path.txt.",
      ],
      failWhen: "You typed in a notes app instead of Oxygen, or you did not save, or the sentence is gone after reopen.",
      expected: "The sample file opens, the extra sentence is there after save and reopen, and you wrote the path down.",
    },
    quiz: [
      {
        q: "How do you open a page that already exists?",
        options: ["File > Open", "Help > About", "Close the app and hope"],
        answer: 0,
        why: "File > Open picks a file on disk. Help > About is only the version.",
      },
      {
        q: "You typed a sentence and the tab still shows the file name. What should you do before you quit?",
        options: ["Nothing — typing is enough", "Save, then open the file again to check", "Rename it to FINAL"],
        answer: 1,
        why: "If it is not saved, it is not in the file. Reopen is how you prove it.",
      },
    ],
    quests: defaultQuests({
      learn: "Find File > Open and the Save command",
      doTitle: "Type one sentence in the sample and save",
      doDone: "The sentence is still there after you reopen the file.",
      stress: "Pick how you open a file, and how you prove a save",
    }),
    fieldNotePrompt: "Where does the file live on your computer? Paste the path.",
    tomorrowHook: "Tomorrow you look at the same file two ways: as a page, and as tags.",
    body: `## A page is a file

Yesterday you opened the app. Today you open a **page**. A page is just a file. This course ships a tiny sample shop called flower-docs. You will write into it, not into a blank desktop file.

**File > Open** → \`samples/flower-docs/topics/hello-concept.dita\`.

The big middle area is where you type. Add one sentence. **Save**. Close. Open it again. If the sentence is still there, you did the job.

## Word today

**Topic** — one help page in its own file. Today you edited a topic. You do not need other kinds of pages yet.

## If the file will not open

Use File > Open, not drag-onto-Slack. The file name should end in \`.dita\`. If Oxygen asks which type it is, pick a DITA topic.

## Lab

One sentence, saved, still there after reopen. Write the path down so you can find it tomorrow.
`,
  },
  {
    n: 3,
    week: 1,
    title: "Two views of the same file",
    objective: "Look at the same sentence in the page view and in the tags view, then glance at Grid.",
    minutes: 85,
    skills: ["oxygenUi", "xmlLiteracy"],
    legacy: ["t2-modes"],
    youtube: [
      yt("wysiwyg", ["The Author canvas", "The tabs under the editor"]),
    ],
    sources: [S.ugEditor, S.ugAuthor],
    toolCards: ["author-mode", "text-mode"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "Same sentence, two views",
      steps: [
        "Open hello-concept.dita again.",
        "Find the tabs under the big writing area. They are named Text, Grid, and Author (the order can vary).",
        "Stay in Author. That is the page view. Confirm your sentence from yesterday is still readable as a normal sentence.",
        "Switch to Text. You should see angle brackets around the same words. Do not delete a bracket.",
        "Switch to Grid. It looks a bit like a spreadsheet. Glance, then switch back to Author.",
        "In oxygen-bootcamp-work/day-03-views.txt write one line: Author looks like a page. Text shows tags.",
      ],
      failWhen: "You never left Author, or you deleted a tag in Text and left it broken.",
      expected: "You saw the sentence in Author and in Text. The file still opens.",
    },
    quiz: [
      {
        q: "Author view is for…",
        options: [
          "Daily writing that looks like a page",
          "Drawing a website layout",
          "Only reading Help > About",
        ],
        answer: 0,
        why: "Author is the page view. You will write here most days.",
      },
      {
        q: "Text view shows…",
        options: [
          "A spreadsheet of the shop’s prices",
          "The same page with tags around the words",
          "A second copy of the file on the desktop",
        ],
        answer: 1,
        why: "Text is the same file. The tags are the skeleton. One file, two views.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the Author, Text, and Grid tabs under the page",
      doTitle: "See your sentence in Author and in Text",
      doDone: "You wrote the one-line note. The file still opens.",
      stress: "Pick what Author is for, and what Text shows",
    }),
    fieldNotePrompt: "In your words: what is different when you switch from Author to Text?",
    tomorrowHook: "Tomorrow you make a new page from a template and save it in a folder.",
    body: `## One file, two views

The tabs under the page are **Author**, **Text**, and **Grid**.

- **Author** — looks like a page. This is where you write on most days.
- **Text** — the same page with **tags** (those angle brackets). The tags are the skeleton of the file.
- **Grid** — looks a bit like a spreadsheet. You will almost never live here this week. Glance and leave.

Author is not Microsoft Word. If a button on the toolbar is grey, the page type does not allow that thing in that spot. You will feel this later. Today, just switch tabs.

## Word today

**Tag** — a label in angle brackets, like \`<p>\` around a paragraph. You do not need to memorise a list. You only need to see that Text view is the same file.

## Watch

The official WYSIWYG video shows Author as a page view, not as a fake Word. Watch for the tabs under the editor.

## Do not

Do not delete a closing tag “to see what happens” unless you are ready to Undo. Tomorrow is soon enough for a safe broken file.
`,
  },
  {
    n: 4,
    week: 1,
    title: "Make a new page and save it in a folder",
    objective: "Create a new page from a template, give it a simple file name, and save it in a folder — not on the desktop.",
    minutes: 90,
    skills: ["oxygenUi", "ditaTopics"],
    legacy: ["t1-newdoc"],
    youtube: [
      yt("ditaStart", ["File > New", "A DITA topic template"]),
      yt("tutorials", ["Help > Install new add-ons, if you want the in-app lessons"]),
    ],
    sources: [S.firstDita, S.ugEditor],
    toolCards: ["author-mode"],
    badgeId: "first-valid-task",
    lab: {
      pack: "flower-docs",
      title: "A new page in a real folder",
      steps: [
        "Create a folder oxygen-bootcamp-work/week1/ if it does not exist.",
        "In Oxygen: File > New. Choose a DITA Concept template. (Concept just means “a page that explains what something is.”)",
        "Title: Hello concept. File name: hello-concept.dita — all lowercase, with a hyphen, not a space.",
        "Save under oxygen-bootcamp-work/week1/, not the desktop.",
        "Under the title, add one short line that says what the page is about. Then add one paragraph in the body.",
        "Confirm Author, Text, and Grid still open this same file.",
      ],
      failWhen: "The file is Hello Concept.dita on the desktop, or the title is empty, or the file will not save.",
      expected: "hello-concept.dita sits in week1/, has a title and a paragraph, and opens again after save.",
    },
    quiz: [
      {
        q: "Why File > New instead of a blank notepad file?",
        options: [
          "The template sets the page up so the writing toolbar works",
          "Notepad cannot save",
          "File > New publishes the page to the web",
        ],
        answer: 0,
        why: "A template gives Oxygen the right kind of page. A random .txt file will not get the DITA toolbar.",
      },
      {
        q: "Which file name will be easier for the rest of the course?",
        options: ["Hello Concept FINAL (2).dita", "hello-concept.dita", "Document.dita"],
        answer: 1,
        why: "Lowercase, hyphens, no spaces. Other people and later booklets can find it.",
      },
    ],
    quests: defaultQuests({
      learn: "Find File > New and the Concept template",
      doTitle: "Save hello-concept.dita in week1/, not on the desktop",
      doDone: "The file opens, the name is lowercase with a hyphen, and it is in the folder.",
      stress: "Pick why a template matters, and which file name to use",
    }),
    fieldNotePrompt: "What folder did you save in? Why not the desktop?",
    tomorrowHook: "Tomorrow you paste a list and fix one red error on purpose.",
    body: `## New page, real folder

**File > New.** Pick a **DITA Concept** template. A concept is a page that explains what something is. You will meet the other two kinds of pages next week.

Save as \`hello-concept.dita\` in \`oxygen-bootcamp-work/week1/\`.

Not the desktop. A file on the desktop gets lost the first time someone looks for \`topics/hello-concept.dita\`.

## Names

Lowercase. Hyphens. No spaces. \`hello-concept.dita\` is a good name. \`Hello Concept FINAL (2).dita\` is how files get lost.

## Word today

**Template** — a starter page Oxygen already knows how to edit. File > New attaches the right toolbar. A blank notepad file does not.

## Optional

**Help > Install new add-ons** has official Live Tutorials inside Oxygen. Nice extra. Not required to finish today.
`,
  },
  {
    n: 5,
    week: 1,
    title: "Paste a list and fix a red error",
    objective: "Paste a short list into your page, then cause one red error on purpose, read it, and fix it.",
    minutes: 90,
    skills: ["oxygenUi", "ditaTopics"],
    legacy: ["t3-insert", "t4-validate"],
    youtube: [
      yt("wysiwyg", ["Paste into Author", "The error list under the page"]),
      yt("ditaEdit", ["Insert from the toolbar vs typing tags by hand"]),
    ],
    sources: [S.authorDita, S.ugEditor],
    toolCards: ["author-mode", "outline"],
    badgeId: "well-formed",
    lab: {
      pack: "flower-docs",
      title: "Paste, then repair one red line",
      steps: [
        "Open your hello-concept.dita from week1/ (or the sample if yours is missing).",
        "Copy a short three-item list from any browser page.",
        "Paste it into the body in Author. Oxygen should turn it into a list. If it pastes as a blob of text, make a simple list with the toolbar instead.",
        "Switch to Text. Look at the tags around the list. Do not panic.",
        "In Text, delete one closing tag on purpose. Read the red error. Write the exact message in oxygen-bootcamp-work/day-05-error.txt. Then Undo.",
        "Save. The page should open with no red error.",
      ],
      failWhen: "You left the file broken, or you clicked a magic fix you cannot explain, or you never read the error message.",
      expected: "The list is in the page. You quoted one red error. You undid it. The file opens clean.",
    },
    quiz: [
      {
        q: "A yellow bulb offers to “fix” the error. When do you click it?",
        options: [
          "Always — bulbs are official",
          "Only when you can say what it will change",
          "Never, in any view",
        ],
        answer: 1,
        why: "Some fixes are fine. Some rewrite the page. If you cannot say what will change, Undo is cheaper.",
      },
      {
        q: "You deleted a closing tag in Text. The file is “not well-formed.” That means…",
        options: [
          "The tags no longer match, so the file is broken as XML",
          "The shop will not like your wording",
          "You forgot to publish",
        ],
        answer: 0,
        why: "Well-formed means the tags nest and match. It is about the skeleton, not about spelling.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the error list under the page",
      doTitle: "Paste a list, cause one red error, read it, undo",
      doDone: "You quoted the error. The file opens clean.",
      stress: "Pick when to trust a magic fix, and what “not well-formed” means",
    }),
    fieldNotePrompt: "Quote the red error you saw. One line.",
    tomorrowHook: "Tomorrow you finish one real page: title, short line under the title, and a body.",
    body: `## Paste, then look

Paste is useful and messy. After a paste, glance at **Text** view. If the list looks like a list, you are fine. If it looks like leftover website code, undo and make the list with the toolbar.

## Break it on purpose

In Text, delete one closing tag. Read the red line. Write it down. **Undo**.

That red line is not a personal insult. It is the app saying the skeleton does not match.

## Words today

**Well-formed** — the tags nest and match. A missing \`</p>\` is not well-formed.

**Valid** — the file also follows the rules for this kind of page (a concept may not want a how-to step in it). You will feel “valid” more next week. Today, well-formed is the apple.

## Outline

The **Outline** panel (often on the right) lists the pieces of the page. Click a paragraph there to jump. If you cannot find it, skip it. It is a helper, not the lesson.
`,
  },
  {
    n: 6,
    week: 1,
    title: "Your first real page",
    objective: "Finish one page with a title, a short line under the title, and two short paragraphs. It must open with no red error.",
    minutes: 100,
    skills: ["ditaTopics", "oxygenUi"],
    legacy: ["t3-topics"],
    youtube: [yt("ditaEdit", ["Title and the short line under it", "A normal paragraph in the body"])],
    sources: [S.firstDita, S.authorDita],
    toolCards: ["author-mode"],
    badgeId: null,
    lab: {
      pack: "flower-docs",
      title: "One page, done",
      steps: [
        "Open or create topics/what-a-cut-flower.dita (or oxygen-bootcamp-work/week1/what-a-cut-flower.dita).",
        "Title: What a cut flower is.",
        "Under the title, write one short line that would make sense in a search hit. Do not copy the title word for word.",
        "In the body, two paragraphs: what a cut flower is, and what this handbook will not cover (growing from seed).",
        "Do not add numbered how-to steps. That is next week.",
        "Save. Confirm there is no red error. Write the file path in oxygen-bootcamp-work/day-06-page.txt.",
      ],
      failWhen: "The title is empty, the short line copies the title, there is a numbered how-to, or a red error remains.",
      expected: "A clean page with a title, a distinct short line, and two paragraphs. Path written down.",
    },
    quiz: [
      {
        q: "The short line under the title is for…",
        options: [
          "Search hits and previews — a reader sees it before the full page",
          "The printer only",
          "A second title because one is never enough",
        ],
        answer: 0,
        why: "If it copies the title, the reader sees the same sentence twice. Make it add a bit.",
      },
      {
        q: "You want three actions to recut a stem. Where do those actions go this week?",
        options: [
          "A numbered list on this “what it is” page — faster",
          "They wait. Next week you write a how-to page",
          "Help > About",
        ],
        answer: 1,
        why: "This week’s apple is one explaining page. How-to pages are week 2.",
      },
    ],
    quests: defaultQuests({
      learn: "Find the title and the short line under it",
      doTitle: "Finish one clean explaining page",
      doDone: "No red error. Short line is not the title. No how-to list.",
      stress: "Pick what the short line is for, and where steps will live",
    }),
    fieldNotePrompt: "What is your page about, in one sentence you would say out loud?",
    tomorrowHook: "Tomorrow is the week check. You will break a file on purpose and fix it. Passing it opens week 2.",
    body: `## This is the week’s apple

You are not making a booklet yet. You are proving you can finish **one page**.

- A **title**
- A **short line under the title** (not a copy of the title)
- Two short **paragraphs**
- No red error
- Saved in a folder you can find

No table of contents this week. No website tools. No how-to steps. If you need steps, write “week 2” in your notes and leave them off this page.

## Figure

A simple page mock: title at the top, one short line, two paragraphs. Caption: *Author view of a finished explaining page.*

## Do not publish

Publishing (making a website or a PDF from your files) is weeks away. Valid and saved beats pretty.
`,
  },
  {
    n: 7,
    week: 1,
    title: "Week 1 check",
    objective: "Fix three simple breaks, say what each error meant, and pass the quiz so week 2 can open.",
    minutes: 90,
    skills: ["review", "xmlLiteracy", "oxygenUi"],
    legacy: ["t4-validate"],
    youtube: [yt("tutorials", ["Where the in-app tutorials sit if you installed them"])],
    sources: [S.ugEditor, S.learnDita],
    toolCards: ["author-mode"],
    badgeId: null,
    boss: true,
    lab: {
      pack: "flower-docs",
      title: "Three breaks, three repairs",
      steps: [
        "Copy your week1 folder to oxygen-bootcamp-work/week1-check/ so you do not wreck the original.",
        "Break 1: delete a closing tag in Text. Read the red error. Undo.",
        "Break 2: put the file on the desktop in your head — actually move a copy to the desktop, then move it back into the folder. Write why the desktop is a bad home.",
        "Break 3: clear the title, save, read the error or the empty tab, put the title back.",
        "The page must open with no red error when you stop.",
        "Pass the quiz. You can retry it. Week 2 stays locked until this day is finished (lab + quiz + a short note).",
      ],
      failWhen: "You cannot say what one of the three errors meant, or you leave the check copy broken.",
      expected: "Check copy opens clean. Three one-line notes about the three breaks.",
    },
    quiz: [
      {
        q: "You deleted a closing tag. The app says the file is not well-formed. First move?",
        options: ["Undo, then read the message you just saw", "Install a new app", "Ignore red lines"],
        answer: 0,
        why: "Undo is the whole move. Then you know what the message looks like next time.",
      },
      {
        q: "Why not keep help pages on the desktop?",
        options: [
          "They are harder to find later, and later booklets look for a folder",
          "Desktops cannot store .dita files",
          "Oxygen will delete them overnight",
        ],
        answer: 0,
        why: "A folder you chose is a home. The desktop is a hallway.",
      },
      {
        q: "You failed this check. Does week 2 open anyway?",
        options: [
          "Yes, the Friday page is enough",
          "No. Finish this day’s lab, quiz, and note. You can retry the quiz.",
          "Yes, if you do the 5-minute warmup",
        ],
        answer: 1,
        why: "Next week waits until you can save a clean page and say what a red error meant. Retry is free.",
      },
    ],
    quests: defaultQuests({
      learn: "Name the three breaks from this week",
      doTitle: "Repair the check copy until it opens clean",
      doDone: "Three one-line notes. No red error.",
      stress: "Pass the quiz. Retry if you need to.",
    }),
    fieldNotePrompt: "Write the three breaks and the one-line repair for each.",
    tomorrowHook: "Week 2: three kinds of pages — what it is, how to do it, and facts you look up. Still no booklet.",
    body: `## A check, not a show

This is the week boss. You already met these errors. You are only proving you can name them.

1. **Tags do not match** — you deleted a closing tag in Text.
2. **Lost file** — it lived on the desktop.
3. **Empty title** — the page has no name.

Fail the quiz and **week 2 stays locked**. Retry as many times as you want. The 5-minute warmup does not open the week.

## One line about later

Adobe has a website tool used by another team. You will open that in **week 9**. Not now. Do not mix it with Oxygen in your notes.

## Tone

Red errors are normal. Repair them. Then go home.
`,
  },
].map((d) => ({ ...d, week: weekOf(d.n) }));
