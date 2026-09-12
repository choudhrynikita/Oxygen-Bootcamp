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
              body: "Someone hired you to explain a product in writing. The pages you write are files. **Oxygen** is the app you will open those files in. It comes from a company named Syncro Soft.\n\nToday is day 1. You install the app and look at the window. That is the whole job. You will not write a handbook page. You will not publish a website. You will not meet Adobe.\n\nNext you will meet the app by name, then who uses it, then you put it on the machine.",
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
              id: "o-bridge",
              body: "You just heard the job for today: install and look around. First, name the app and who sits in it. Then you will put it on the machine.",
            },
            {
              type: "text",
              id: "o-what",
              heading: "The writing app",
              body: "Oxygen is a writing app you install on your computer. You open a file. You type. You save. The file is still a file, sitting in a folder, the way a spreadsheet file sits in a folder.\n\nIt is not a website. It is not a photo editor. It is the desk.",
            },
            {
              type: "tabs",
              id: "o-who",
              lead: "Open each tab. They are three people around the same desk, not three separate lessons.",
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
              lead: "Open an edition name only if you need to choose a download.",
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
              lead: "Flip each card. The front is a name from this lesson. The back is what it means here.",
              cards: [
                { front: "Oxygen", back: "The writing app from Syncro Soft. You open help-page files in it." },
                { front: "Help page", back: "A file you write for the people who use a product." },
                { front: "Syncro Soft", back: "The company that makes Oxygen. Not Adobe. Not this course’s classroom site." },
              ],
            },
            {
              type: "sorting",
              id: "o-sort",
              lead: "Drag each card onto the job it belongs to. Wrong cards shake and come back.",
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
              lead: "Answer with words from this lesson only.",
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
              body: "You know what Oxygen is, and who uses it. Now you put it on the machine. Download, install, open. Then read the version from Help > About and write it down. If you cannot install today, use the labeled window in the next lesson and write why.",
            },
            {
              type: "process",
              id: "i-steps",
              lead: "Walk the cards below, in order, to install Oxygen and start it.",
              intro: "How to install Oxygen and start it. Five moves. Do them on your machine, or follow along on the labeled window later.",
              steps: [
                {
                  title: "How to install Oxygen",
                  body: "This is the whole move. The next cards are the steps, in order. Stay with them until the window is open.",
                },
                {
                  title: "Open the site",
                  body: "In a browser, go to oxygenxml.com. That is the official site from Syncro Soft. Do not download the app from a random mirror.",
                },
                {
                  title: "Download",
                  body: "Download Oxygen XML Author or Oxygen XML Editor. Author is enough for writers. Editor is fine. The trial is fine.",
                },
                {
                  title: "Install and open",
                  body: "Run the installer. Open the app. You should see menus at the top and a big empty area in the middle, like the official window below.",
                  image: {
                    src: "/media/oxygen/oxygen-UI.png",
                    alt: "Default Oxygen XML Editor window with menus, side views, and the empty editor in the middle",
                    caption: "This is the window you want after install. Yours may look a little different. The idea is the same.",
                    credit: "Oxygen XML Editor User Guide, Syncro Soft",
                    href: "https://www.oxygenxml.com/doc/ug-editor/topics/getting-familiar-2.html",
                  },
                },
                {
                  title: "Read the version",
                  body: "Click Help, then About. Write the version in a plain text file named oxygen-bootcamp-work/day-01-version.txt.",
                },
                {
                  title: "Walk the window once",
                  body: "Top menus. Left side. Bottom edge if anything is showing. You do not have to name every panel yet. The next lesson puts numbers on this same window.",
                },
              ],
              summary: "The app is open, or you are ready to use the labeled window and say why.",
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
              body: "The app is running, or you are looking at the official picture. Now look at the window so later steps have somewhere to point. Menus along the top. A big middle. Some side panels that may be empty. That is the desk.",
            },
            {
              type: "labeled-graphic",
              id: "u-graphic",
              lead: "Click each number on the real Oxygen window. A short note opens for that spot.",
              src: "/media/oxygen/oxygen-UI.png",
              alt: "Default Oxygen XML Editor window with menus, side views, and the empty editor in the middle",
              caption: "Official screenshot of the Oxygen XML Editor interface. Click the numbers.",
              credit: "Oxygen XML Editor User Guide, Syncro Soft",
              href: "https://www.oxygenxml.com/doc/ug-editor/topics/getting-familiar-2.html",
              labels: [
                {
                  id: "g1",
                  title: "Title bar",
                  body: "The top strip. It shows the app name. Later it will also show the file you have open.",
                  x: 42,
                  y: 3,
                },
                {
                  id: "g2",
                  title: "Menu bar",
                  body: "File, Edit, Find, and the rest. Help is usually last. About lives under Help.",
                  x: 22,
                  y: 8,
                },
                {
                  id: "g3",
                  title: "Left side",
                  body: "Often empty on first open. After you make a project, this is where the project name shows.",
                  x: 14,
                  y: 42,
                },
                {
                  id: "g4",
                  title: "The middle",
                  body: "This is where a page will go. Empty today. Tomorrow you put a sentence here.",
                  x: 58,
                  y: 48,
                },
                {
                  id: "g5",
                  title: "Help",
                  body: "Last menu on the right of the menu bar. Open it. About is inside. That is the version.",
                  x: 78,
                  y: 8,
                },
              ],
            },
            {
              type: "accordion",
              id: "u-parts",
              lead: "Open a heading only if you want a second pass on that part of the window.",
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
              lead: "Answer from the window you just clicked.",
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
              body: "You can point at the menus. Files still need a home. That home is a **project**. A project is a named home Oxygen remembers. It is not a website. It is not a page. It is a small file that points at a folder of work, so you do not lose things on the desktop.\n\nToday you make a blank one. You do not write a page into it yet. Tomorrow you open a sample page. Later this week you save a page in a real folder.",
            },
            {
              type: "process",
              id: "p-steps",
              lead: "Walk the cards below, in order, to create a blank project.",
              intro: "How to create a new blank project. Leave it empty.",
              steps: [
                {
                  title: "How to create a blank project",
                  body: "This is the whole move. The next cards are the steps. Stay with them until Oxygen shows the project name.",
                },
                {
                  title: "Find New Project",
                  body: "Look at the top menus. Open Project, then New Project. If you do not see Project, look under File for New Project. The dialog looks like this.",
                  image: {
                    src: "/media/oxygen/New-Project-dialog.png",
                    alt: "New Project dialog in Oxygen XML Editor",
                    caption: "File or Project > New Project. Name it, then save it in a folder you can find tomorrow.",
                    credit: "Oxygen XML Editor User Guide, Syncro Soft",
                    href: "https://www.oxygenxml.com/doc/ug-editor/",
                  },
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
              lead: "Read the situation, then pick the move you would make at this desk.",
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
              lead: "Answer from the project you just made, or from the dialog you just saw.",
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
    nextDayHook: "Tomorrow you stay in this same window. You open a sample page and type one sentence into the empty middle you just named.",
  },
};
