import { readFileSync, readdirSync, existsSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const lessonDir = join(root, "content/lessons");
const banned = /\b(lorem ipsum|TODO|FIXME|placeholder video|TBD)\b/i;
const slop = [
  /what it forbids/i,
  /sits next to/i,
  /keep the .{0,40} honest/i,
  /clinic, not a ceremony/i,
  /map surgery/i,
  /desk-ready/i,
  /hostage you/i,
  /zero invented/i,
  /if a slide says/i,
  /wit is allowed/i,
  /the model wins/i,
  /CSS visual editing/i,
  /When would you refuse/i,
];

const earlyAem = /\b(AEM|Guides|Sites console|Quick Publish|Content Fragment|Experience Fragment|Universal Editor|Core Components|DAM)\b/;
const earlyMap = /\b(Maps Manager|topicref|ditamap|completeness)\b/i;
const earlyKey = /\b(conref|keyref|conkeyref|DITAVAL|Schematron)\b/i;

const ytId = /^[A-Za-z0-9_-]{11}$/;

const errors = [];
function fail(msg) {
  errors.push(msg);
}

if (!existsSync(lessonDir)) fail("content/lessons missing");

const files = existsSync(lessonDir)
  ? readdirSync(lessonDir).filter((f) => /^day-\d{3}\.mdx$/.test(f))
  : [];
if (files.length !== 90) fail(`Need 90 day files, found ${files.length}`);

const badgeFile = JSON.parse(readFileSync(join(root, "content/game/badges.json"), "utf8"));
const badgeIds = new Set(badgeFile.map((b) => b.id));
const cardFile = JSON.parse(readFileSync(join(root, "content/game/tool-cards.json"), "utf8"));
const cardIds = new Set(cardFile.map((c) => c.id));
const media = [];

for (let n = 1; n <= 90; n++) {
  const name = `day-${String(n).padStart(3, "0")}.mdx`;
  const path = join(lessonDir, name);
  if (!existsSync(path)) {
    fail(`Missing ${name}`);
    continue;
  }
  const raw = readFileSync(path, "utf8");
  if (banned.test(raw)) fail(`${name} contains banned placeholder text`);
  for (const re of slop) {
    if (re.test(raw)) fail(`${name} has AI-slop phrasing (${re})`);
  }
  if (n <= 7 && earlyAem.test(raw) && !/week 9/i.test(raw)) {
    fail(`${name} teaches AEM before the AEM unit`);
  }
  if (n <= 14 && earlyMap.test(raw)) fail(`${name} teaches maps before week 3`);
  if (n <= 21 && earlyKey.test(raw)) fail(`${name} teaches reuse terms before week 4`);

  for (const field of ["objective:", "lab:", "sessionQuests:", "sources:", "dailyBurstPool:"]) {
    if (!raw.includes(field)) fail(`${name} missing ${field}`);
  }
  const yts = [...raw.matchAll(/- id: ([A-Za-z0-9_-]{11})/g)].map((m) => m[1]);
  for (const id of yts) {
    if (!ytId.test(id)) fail(`${name} bad youtube id ${id}`);
    media.push({ day: n, id });
  }
  const badge = raw.match(/badgeId: (.+)/);
  if (badge && badge[1].trim() !== "null") {
    const id = badge[1].trim().replace(/"/g, "");
    if (!badgeIds.has(id)) fail(`${name} unknown badge ${id}`);
  }
  const tools = raw.match(/toolCards: \[(.*)\]/);
  if (tools && tools[1].trim()) {
    for (const t of tools[1].split(",").map((s) => s.trim()).filter(Boolean)) {
      if (!cardIds.has(t)) fail(`${name} unknown tool card ${t}`);
    }
  }
}

const mapPath = join(root, "content/curriculum/legacy-map.json");
if (!existsSync(mapPath)) fail("legacy-map.json missing");
else {
  const map = JSON.parse(readFileSync(mapPath, "utf8"));
  const v1 = [
    "t0-what",
    "t0-curve",
    "t1-install",
    "t1-xml",
    "t1-newdoc",
    "t2-ui",
    "t2-modes",
    "t2-dita-ui",
    "t3-topics",
    "t3-maps",
    "t3-insert",
    "t3-markdown",
    "t4-validate",
    "t4-complete",
    "t4-review",
    "t5-reuse",
    "t5-keys",
    "t5-profile",
    "t5-publish",
    "t6-xpath",
    "t6-schematron",
    "t6-framework",
    "t6-git",
    "t6-ai",
    "t7-aem",
    "t7-guides",
    "t7-connector",
    "t7-capstone",
  ];
  for (const id of v1) {
    if (!map[id]) fail(`legacy-map missing ${id}`);
  }
}

const emdash = /—/;

const packDir = join(root, "content/packs");
if (!existsSync(packDir)) fail("content/packs missing");
const packFiles = existsSync(packDir)
  ? readdirSync(packDir).filter((f) => /^day-\d{3}\.json$/.test(f))
  : [];
if (packFiles.length !== 90) fail(`Need 90 course packs, found ${packFiles.length}`);

for (let n = 1; n <= 90; n++) {
  const name = `day-${String(n).padStart(3, "0")}.json`;
  const path = join(packDir, name);
  if (!existsSync(path)) {
    fail(`Missing pack ${name}`);
    continue;
  }
  const raw = readFileSync(path, "utf8");
  if (emdash.test(raw)) fail(`${name} contains an em-dash`);
  if (banned.test(raw)) fail(`${name} contains banned placeholder text`);
  for (const re of slop) {
    if (re.test(raw)) fail(`${name} has AI-slop phrasing (${re})`);
  }
  if (n <= 7 && earlyAem.test(raw) && !/week 9/i.test(raw)) {
    fail(`${name} teaches AEM before the AEM unit`);
  }
  if (n <= 14 && earlyMap.test(raw)) fail(`${name} teaches maps before week 3`);
  if (n <= 21 && earlyKey.test(raw)) fail(`${name} teaches reuse terms before week 4`);

  let pack;
  try {
    pack = JSON.parse(raw);
  } catch {
    fail(`${name} is not JSON`);
    continue;
  }
  if (pack.day !== n) fail(`${name} day field is ${pack.day}`);
  if (!pack.cover?.title || !pack.cover?.overview) fail(`${name} missing cover`);
  if (!Array.isArray(pack.objectives) || pack.objectives.length < 2) fail(`${name} needs Bloom objectives`);
  for (const lo of pack.objectives) {
    if (!lo.bloom || !lo.text) fail(`${name} objective missing bloom or text`);
    if (!/^(remember|understand|apply|analyze|evaluate|create)$/.test(lo.bloom)) {
      fail(`${name} bad bloom level ${lo.bloom}`);
    }
  }
  const lessons = (pack.sections ?? []).flatMap((s) => s.lessons ?? []);
  if (lessons.length < 3) fail(`${name} needs at least 3 lessons`);
  if (!pack.summary?.heading) fail(`${name} missing summary heading`);
  if (!/you should now be able to/i.test(pack.summary.heading)) {
    fail(`${name} summary heading must be “You should now be able to”`);
  }
  const hasContinue = lessons.some((l) => (l.blocks ?? []).some((b) => b.type === "continue"));
  if (!hasContinue) fail(`${name} has no continue blocks`);
}

if (existsSync(join(packDir, "day-001.json"))) {
  const d1 = JSON.parse(readFileSync(join(packDir, "day-001.json"), "utf8"));
  const titles = (d1.sections ?? []).flatMap((s) => s.lessons ?? []).map((l) => l.title.toLowerCase());
  for (const need of ["welcome", "oxygen", "install", "homepage", "project"]) {
    if (!titles.some((t) => t.includes(need))) fail(`day-001.json missing lesson about ${need}`);
  }
  if (d1.objectives.length !== 5) fail("day-001.json should have 5 learning objectives");
}

mkdirSync(join(root, "content/media-manifest"), { recursive: true });
writeFileSync(
  join(root, "content/media-manifest/youtube.json"),
  JSON.stringify({ generated: new Date().toISOString().slice(0, 10), items: media }, null, 2),
);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("content:audit ok — 90 days, 90 packs, no placeholders, badges and v1 ids resolve");
