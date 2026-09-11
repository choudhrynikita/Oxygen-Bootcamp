import { mkdirSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { toMdx } from "./lesson-format.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "scripts/days");
const outDir = join(root, "content/lessons");

const files = readdirSync(dir)
  .filter((f) => /^week\d+\.mjs$/.test(f))
  .sort();

const days = [];
for (const f of files) {
  const mod = await import(pathToFileURL(join(dir, f)).href);
  days.push(...mod.default);
}

days.sort((a, b) => a.n - b.n);
const nums = days.map((d) => d.n);
if (nums.length !== 90) {
  throw new Error(`Expected 90 days, got ${nums.length} from ${files.join(", ")}`);
}
for (let n = 1; n <= 90; n++) {
  if (!nums.includes(n)) throw new Error(`Missing day ${n}`);
}

mkdirSync(outDir, { recursive: true });
for (const day of days) {
  const name = `day-${String(day.n).padStart(3, "0")}.mdx`;
  writeFileSync(join(outDir, name), toMdx(day));
}

writeFileSync(
  join(root, "content/curriculum/days.json"),
  JSON.stringify(
    days.map((d) => ({
      day: d.n,
      week: d.week,
      title: d.title,
      badgeId: d.badgeId,
      legacy: d.legacy,
      youtube: (d.youtube ?? []).map((v) => v.id),
    })),
    null,
    2,
  ),
);

console.log(`Wrote ${days.length} lesson files to content/lessons`);
