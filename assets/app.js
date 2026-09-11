const KEY = "oxygen-bootcamp-progress-v1";
const state = {
  done: JSON.parse(localStorage.getItem(KEY) || "[]"),
  lessonId: location.hash.replace("#", "") || "home"
};

function save() {
  localStorage.setItem(KEY, JSON.stringify(state.done));
}

function isDone(id) { return state.done.includes(id); }

function markDone(id) {
  if (!isDone(id)) state.done.push(id);
  save();
  renderNav();
  updateProgress();
}

function updateProgress() {
  const total = CURRICULUM.reduce((n, t) => n + t.lessons.length, 0);
  const pct = total ? Math.round((state.done.length / total) * 100) : 0;
  document.getElementById("progressLabel").textContent =
    `${state.done.length} / ${total} lessons · ${pct}%`;
  document.getElementById("progressBar").style.width = pct + "%";
}

function renderNav(filter = "") {
  const nav = document.getElementById("nav");
  const q = filter.trim().toLowerCase();
  nav.innerHTML = CURRICULUM.map(track => {
    const lessons = track.lessons.filter(l =>
      !q || (track.title + " " + l.title + " " + l.level).toLowerCase().includes(q)
    );
    if (!lessons.length) return "";
    return `<div class="nav-track">${track.code} · ${track.title}</div>` +
      lessons.map(l =>
        `<button class="nav-item ${state.lessonId===l.id?"active":""} ${isDone(l.id)?"done":""}" data-id="${l.id}">
          ${l.title}<small>${l.level} · ${l.mins} min</small>
        </button>`
      ).join("");
  }).join("");
  nav.querySelectorAll(".nav-item").forEach(btn => {
    btn.onclick = () => openLesson(btn.dataset.id);
  });
}

function videoBlock(v) {
  if (!v) return "";
  return `<div class="video"><iframe src="https://www.youtube.com/embed/${v.id}" title="${v.title}" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>
    <p class="caption">Official / recommended video: ${v.title}${v.ch ? " · " + v.ch : ""} · <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">Open on YouTube</a></p>`;
}

function quizBlock(lesson) {
  if (!lesson.quiz) return "";
  const qs = lesson.quiz.map((q, i) => {
    const opts = q.options.map((o, j) =>
      `<button data-q="${i}" data-i="${j}">${o}</button>`
    ).join("");
    return `<div class="q" id="q-${lesson.id}-${i}"><strong>${q.q}</strong>${opts}<div class="explain"></div></div>`;
  }).join("");
  return `<div class="quiz"><h3>Check yourself</h3>${qs}</div>`;
}

function renderLesson(lesson, track) {
  const next = nextLesson(lesson.id);
  const prev = prevLesson(lesson.id);
  document.getElementById("main").innerHTML = `
    <div class="toolbar">
      <button class="btn ghost" onclick="openLesson('home')">All tracks</button>
      ${prev ? `<button class="btn" onclick="openLesson('${prev.id}')">← ${prev.title}</button>` : ""}
      ${next ? `<button class="btn" onclick="openLesson('${next.id}')">${next.title} →</button>` : ""}
    </div>
    <article class="lesson">
      <div class="meta">${track.code} ${track.title} · ${lesson.level} · ${lesson.mins} minutes</div>
      <h2>${lesson.title}</h2>
      ${lesson.body}
      ${videoBlock(lesson.video)}
      ${lesson.lab ? `<div class="callout teal"><strong>Lab.</strong> ${lesson.lab}</div>` : ""}
      ${lesson.refs ? `<h3>Official references</h3><ul>${lesson.refs.map(r => `<li><a href="${r.href}" target="_blank" rel="noopener">${r.label}</a></li>`).join("")}</ul>` : ""}
      ${quizBlock(lesson)}
      <div class="toolbar">
        <button class="btn primary" onclick="complete('${lesson.id}')">${isDone(lesson.id) ? "Completed \u2713" : "Mark lesson complete"}</button>
      </div>
    </article>
    <footer class="note">Oxygen XML is a Syncro Soft product. Screens in this LMS are instructional UI maps, not official screenshots. Always prefer the versioned user guide for your installed build.</footer>
  `;
  document.querySelectorAll(".q button").forEach(btn => {
    btn.onclick = () => {
      const q = lesson.quiz[btn.dataset.q];
      const ok = Number(btn.dataset.i) === q.answer;
      btn.classList.add(ok ? "correct" : "wrong");
      btn.parentElement.querySelector(".explain").textContent = q.why;
    };
  });
}

function renderHome() {
  document.getElementById("main").innerHTML = `
    <section class="hero">
      <h2>Learn Oxygen XML the way a writer actually works.</h2>
      <p>A customized classroom for freshers and intermediate authors: interface, Author / Text / Grid modes, DITA maps, reuse, publishing, Schematron, AI Positron, and the AEM Guides connector. Progress is saved in this browser.</p>
      <div class="pills">
        <span class="pill">28 lessons</span>
        <span class="pill">8 tracks</span>
        <span class="pill">Official videos</span>
        <span class="pill">Sample DITA project</span>
        <span class="pill">Quizzes + labs</span>
      </div>
    </section>
    <div class="toolbar">
      <button class="btn primary" onclick="openLesson('${firstIncomplete()}')">Continue learning</button>
      <a class="btn" href="samples/flower-docs/flowers.ditamap">Open sample map source</a>
      <a class="btn" href="docs/official-references.html">Reference library</a>
      <a class="btn" href="docs/visual-guide.html">Visual UI atlas</a>
    </div>
    <div class="home-tracks">
      ${CURRICULUM.map(t => `
        <article onclick="openLesson('${t.lessons[0].id}')">
          <div class="kicker">${t.code} · ${t.level}</div>
          <h3>${t.title}</h3>
          <p>${t.blurb}</p>
        </article>`).join("")}
    </div>
    <footer class="note">Start with Track 0 if you have never opened Oxygen. Skip to Track 2 if you already write DITA elsewhere.</footer>
  `;
}

function findLesson(id) {
  for (const t of CURRICULUM) {
    const l = t.lessons.find(x => x.id === id);
    if (l) return { lesson: l, track: t };
  }
  return null;
}
function flat() { return CURRICULUM.flatMap(t => t.lessons); }
function nextLesson(id) {
  const all = flat();
  const i = all.findIndex(l => l.id === id);
  return all[i + 1];
}
function prevLesson(id) {
  const all = flat();
  const i = all.findIndex(l => l.id === id);
  return all[i - 1];
}
function firstIncomplete() {
  const all = flat();
  return (all.find(l => !isDone(l.id)) || all[0]).id;
}

function openLesson(id) {
  state.lessonId = id;
  location.hash = id;
  if (id === "home") { renderHome(); renderNav(document.getElementById("search").value); return; }
  const found = findLesson(id);
  if (!found) { renderHome(); return; }
  renderLesson(found.lesson, found.track);
  renderNav(document.getElementById("search").value);
  window.scrollTo(0, 0);
}

function complete(id) {
  markDone(id);
  const n = nextLesson(id);
  if (n) openLesson(n.id);
  else openLesson("home");
}

document.getElementById("search").addEventListener("input", e => renderNav(e.target.value));
window.addEventListener("hashchange", () => openLesson(location.hash.replace("#", "") || "home"));
renderNav();
updateProgress();
openLesson(state.lessonId || "home");
