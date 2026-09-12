import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { CoursePack } from "./pack-types";

const PACK_DIR = join(process.cwd(), "content/packs");

export function packPath(day: number): string {
  return join(PACK_DIR, `day-${String(day).padStart(3, "0")}.json`);
}

export function loadPack(day: number): CoursePack {
  const file = packPath(day);
  if (!existsSync(file)) {
    throw new Error(`Missing course pack ${file}`);
  }
  const pack = JSON.parse(readFileSync(file, "utf8")) as CoursePack;
  if (pack.day !== day) {
    throw new Error(`Pack ${file} has day ${pack.day}, expected ${day}`);
  }
  if (!pack.cover?.title || !pack.objectives?.length || !pack.sections?.length) {
    throw new Error(`Pack ${file} is missing cover, objectives, or sections`);
  }
  return pack;
}
