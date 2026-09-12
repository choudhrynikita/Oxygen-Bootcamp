/** Gold Day 1 pack. Human copy. No em-dashes. No AEM. No maps. */
export default {
  day: 1,
  cover: {
    kicker: "Day 1 of 90 · Week 1",
    title: "Install Oxygen and look around",
    overview:
      "You were hired to write help pages. Those pages are files on a computer. Today you meet the writing app, put it on your machine, and click around the window. You will not write a real page yet.",
    durationMin: 75,
    audience: "New writers. You do not need XML, folders of topics, or any other company’s tools today.",
  },
  objectives: [
    { id: "lo1", bloom: "remember", text: "Identify Oxygen as the writing app for help-page files" },
    { id: "lo2", bloom: "understand", text: "Describe who uses Oxygen at a writing desk" },
    { id: "lo3", bloom: "apply", text: "Install Oxygen, or complete the mock, and start it" },
    { id: "lo4", bloom: "apply", text: "Locate the menus, the empty middle, and Help > About" },
    { id: "lo5", bloom: "apply", text: "Create a new blank project so your files have a home" },
  ],
  sections: [
    {
      id: "today",
      title: "Today",
      lessons: [
        {
          id: "welcome",
          title: "Welcome",
          durationMin: 8,
          questId: "a",
          blocks: [
            {
              type: "statement",
              id: "w-stmt",
              body: "You write help pages. This course is 90 days at a desk.",
            },
            {
              type: "text",
              id: "w-hello",
              heading: "Hello",
              body: "Someone hired you to explain a product in writing. The pages you write are files. **Oxygen** is the app you will open those files in. It comes from a company named Syncro Soft.\n\nToday is day 1. You install the app and look at the window. That is the whole job. You will not write a handbook page. You will not publish a website. You will not meet Adobe.",
            },
            {
              type: "objectives",
              id: "w-lo",
            },
            {
              type: "callout",
              id: "w-enough",
              kind: "note",
              title: "Enough for today",
              body: "If a menu name on your copy is slightly different, write “my menu said …” next to it and keep going. The idea is the same.",
            },
            { type: "continue", id: "w-go", rule: "none", label: "Continue" },
          ],
        },
        {
          id: "oxygen",
          title: "What is Oxygen, and who uses it",
          durationMin: 12,
          questId: "a",
          blocks: [
            {
              type: "text",
              id: "o-what",
              heading: "The writing app",
              body: "Oxygen is a writing app you install on your computer. You open a file. You type. You save. The file is still a file, sitting in a folder, the way a spreadsheet file sits in a folder.\n\nIt is not a website. It is not a photo editor. It is the desk.",
            },
            {
              type: "tabs",
              id: "o-who",
              items: [
                {
                  title: "You",
                  body: "You are a writer. You open Oxygen most days. You write the pages a reader will use when they need help.",
                },
                {
                  title: "Reviewers",
                  body: "A reviewer reads your page and leaves comments. They may open the same file. You will meet review later. Today, know they exist.",
                },
                {
                  title: "Engineers",
                  body: "Engineers build the product you document. They do not sit in this course. You write for the people who use the product, not for the people who compiled it.",
                },
              ],
            },
            {
              type: "accordion",
              id: "o-edition",
              items: [
                {
                  title: "Oxygen XML Author",
                  body: "This edition is enough for writers. Download this if you have a choice.",
                },
                {
                  title: "Oxygen XML Editor",
                  body: "This edition is fine too. It has extra tools you will not need this week. If work already gave you Editor, use it.",
                },
                {
                  title: "The trial",
                  body: "A trial is fine for this course. You need the window to open. You do not need a paid license on day 1.",
                },
              ],
            },
            {
              type: "flashcards",
              id: "o-cards",
              cards: [
                { front: "Oxygen", back: "The writing app from Syncro Soft. You open help-page files in it." },
                { front: "Help page", back: "A file you write for the people who use a product." },
                { front: "Syncro Soft", back: "The company that makes Oxygen. Not Adobe. Not this course’s classroom site." },
              ],
            },
            {
              type: "sorting",
              id: "o-sort",
              prompt: "Put each job in the right bin.",
              bins: ["Oxygen does this", "Not Oxygen"],
              items: [
                { id: "s1", text: "Write help pages stored as files", bin: "Oxygen does this" },
                { id: "s2", text: "Host the public website customers visit", bin: "Not Oxygen" },
                { id: "s3", text: "Show the version under Help > About", bin: "Oxygen does this" },
                { id: "s4", text: "Edit photographs", bin: "Not Oxygen" },
              ],
            },
            {
              type: "knowledge-check",
              id: "o-kc",
              kind: "mc",
              q: "What is Oxygen, in one line?",
              options: [
                "A writing app for help pages stored as files",
                "A website you publish to customers",
                "A photo editor",
              ],
              answer: 0,
              why: "Oxygen is the app on your computer (or in a browser later) where you write structured help pages.",
            },
            { type: "continue", id: "o-go", rule: "complete-all-above", label: "Continue" },
          ],
        },
        {
          id: "install",
          title: "Installation and startup",
          durationMin: 20,
          questId: "b",
          blocks: [
            {
              type: "text",
              id: "i-lead",
              heading: "Get the app open",
              body: "You need the window in front of you. Download, install, open. Then read the version from Help > About and write it down. If you cannot install today, use the labeled window in the next lesson and write why.",
            },
            {
              type: "process",
              id: "i-steps",
              intro: "Five moves. Do them on your machine, or follow along on the mock later.",
              steps: [
                {
                  title: "Open the site",
                  body: "In a browser, go to oxygenxml.com. That is the official site from Syncro Soft.",
                },
                {
                  title: "Download",
                  body: "Download Oxygen XML Author or Oxygen XML Editor. Author is enough for writers. Editor is fine. The trial is fine.",
                },
                {
                  title: "Install and open",
                  body: "Run the installer. Open the app. You should see a window with menus at the top and a big empty area in the middle.",
                },
                {
                  title: "Read the version",
                  body: "Click Help, then About. Write the version in a plain text file named oxygen-bootcamp-work/day-01-version.txt.",
                },
                {
                  title: "Walk the window once",
                  body: "Top menus. Left side. Bottom edge if anything is showing. You do not have to name every panel yet.",
                },
              ],
              summary: "The app is open, or you are ready to use the labeled mock and say why.",
            },
            {
              type: "media",
              id: "i-vid",
              youtubeId: "PiCWAIiKx78",
              title: "Getting Started with Oxygen XML Editor",
              watchFor: ["The window when the app first opens", "Where the menus sit at the top"],
            },
            {
              type: "callout",
              id: "i-mock",
              kind: "tip",
              title: "If you cannot install",
              body: "Look at the labeled window in the next lesson. Write why you could not install. Still write what you see. That counts. Do not fake a version number.",
            },
            { type: "lab", id: "i-lab" },
            { type: "continue", id: "i-go", rule: "complete-block-above", label: "Continue" },
          ],
        },
        {
          id: "window",
          title: "Homepage and the UI",
          durationMin: 15,
          questId: "a",
          blocks: [
            {
              type: "text",
              id: "u-lead",
              heading: "The first window",
              body: "When Oxygen opens, you get a window. Menus along the top. A big middle. Some side panels that may be empty. That is the desk. Click each number on the picture.",
            },
            {
              type: "labeled-graphic",
              id: "u-graphic",
              variant: "first-window",
              labels: [
                {
                  id: "g1",
                  title: "Title bar",
                  body: "The top strip. It shows the app name. Later it will also show the file you have open.",
                },
                {
                  id: "g2",
                  title: "Menu bar",
                  body: "File, Edit, Find, and the rest. Help is usually last. About lives under Help.",
                },
                {
                  id: "g3",
                  title: "Left side",
                  body: "Often empty on first open. After you make a project, this is where the project name shows.",
                },
                {
                  id: "g4",
                  title: "The middle",
                  body: "This is where a page will go. Empty today. Tomorrow you put a sentence here.",
                },
                {
                  id: "g5",
                  title: "Help",
                  body: "Last menu on the right of the menu bar. Open it. About is inside. That is the version.",
                },
              ],
            },
            {
              type: "accordion",
              id: "u-parts",
              items: [
                {
                  title: "Menus",
                  body: "A row of words at the top. You click a word, then a command. File is for opening and saving. Help is for About.",
                },
                {
                  title: "The empty middle",
                  body: "This is the writing area. Nothing lives here until you open or create a file. Empty is correct on day 1.",
                },
                {
                  title: "Help > About",
                  body: "Help is a menu. About is a command in that menu. The box that opens shows the version. Write that number down.",
                },
              ],
            },
            {
              type: "knowledge-check",
              id: "u-kc",
              kind: "mc",
              q: "Where do you read the version number?",
              options: ["File > New", "Help > About", "The Recycle Bin"],
              answer: 1,
              why: "Help > About shows the version. If your menu label is slightly different, write that next to the number and keep going.",
            },
            { type: "continue", id: "u-go", rule: "complete-all-above", label: "Continue" },
          ],
        },
        {
          id: "project",
          title: "Creating a new blank project",
          durationMin: 15,
          questId: "b",
          blocks: [
            {
              type: "text",
              id: "p-lead",
              heading: "A home for files",
              body: "A **project** is a named home Oxygen remembers. It is not a website. It is not a page. It is a small file that points at a folder of work, so you do not lose things on the desktop.\n\nToday you make a blank one. You do not write a page into it yet. Tomorrow you open a sample page. Later this week you save a page in a real folder.",
            },
            {
              type: "process",
              id: "p-steps",
              intro: "Make the project. Leave it empty.",
              steps: [
                {
                  title: "Find New Project",
                  body: "Look at the top menus. Open Project, then New Project. If you do not see Project, look under File for New Project.",
                },
                {
                  title: "Name it",
                  body: "Name: oxygen-bootcamp. No spaces. Lowercase is easier later.",
                },
                {
                  title: "Save it where you will find it",
                  body: "Put it in Documents, or in a folder named oxygen-bootcamp-work. Not the desktop. The desktop is a hallway.",
                },
                {
                  title: "Look left",
                  body: "The left side should now show the project name. Empty underneath is fine. You have a home. You do not have pages in it yet.",
                },
              ],
              summary: "You have a blank project, or you pointed at the Project menu on the mock and wrote that in your note.",
            },
            {
              type: "callout",
              id: "p-not-page",
              kind: "warning",
              title: "Do not write a page yet",
              body: "File > New is how you make a page. That is a later day. Today is only the project, the empty home. If you already clicked File > New, close that tab without sweating. Stay with the project.",
            },
            {
              type: "scenario",
              id: "p-scene",
              situation:
                "A teammate saved three help pages on the desktop named Final, Final2, and Document. They cannot find them next week. What do you tell them to do first?",
              choices: [
                {
                  text: "Make a project (or a folder the project points at) and put the pages there.",
                  feedback: "Yes. A named home beats the desktop. You will practise file names later this week.",
                  correct: true,
                },
                {
                  text: "Email the three files to yourself so they are safe.",
                  feedback: "That makes three more copies to lose. A project is one home.",
                  correct: false,
                },
                {
                  text: "Rename them FINAL_USE_THIS and leave them on the desktop.",
                  feedback: "Caps and the desktop still hide files. Make a project.",
                  correct: false,
                },
              ],
            },
            {
              type: "knowledge-check",
              id: "p-kc",
              kind: "mc",
              q: "Why make a blank project on day 1?",
              options: [
                "So the files have a named home Oxygen can remember",
                "So the pages go live on the public website",
                "So you can skip Help > About",
              ],
              answer: 0,
              why: "A project is a home for files. It does not publish anything. You still wrote the version down earlier.",
            },
            { type: "continue", id: "p-go", rule: "complete-all-above", label: "Continue" },
          ],
        },
      ],
    },
  ],
  summary: {
    heading: "You should now be able to",
    recap: "You met the desk. The app opens. You know who it is for. You have a blank project waiting for pages.",
    nextDayHook: "Tomorrow you open a sample page and type one sentence.",
  },
};
