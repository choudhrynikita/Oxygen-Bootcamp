import type { NextConfig } from "next";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

function assertNinetyDays() {
  const lessonDir = join(process.cwd(), "content/lessons");
  const packDir = join(process.cwd(), "content/packs");
  if (!existsSync(lessonDir)) {
    throw new Error("content/lessons is missing. Run npm run content:generate.");
  }
  if (!existsSync(packDir)) {
    throw new Error("content/packs is missing. Run npm run content:generate.");
  }
  const files = readdirSync(lessonDir).filter((f) => /^day-\d{3}\.mdx$/.test(f));
  const packs = readdirSync(packDir).filter((f) => /^day-\d{3}\.json$/.test(f));
  if (files.length < 90) {
    throw new Error(`Missing day files: found ${files.length}, need 90.`);
  }
  if (packs.length < 90) {
    throw new Error(`Missing course packs: found ${packs.length}, need 90.`);
  }
  for (let n = 1; n <= 90; n++) {
    const name = `day-${String(n).padStart(3, "0")}.mdx`;
    if (!files.includes(name)) {
      throw new Error(`Missing Day file ${name} — build refused.`);
    }
    const packName = `day-${String(n).padStart(3, "0")}.json`;
    if (!packs.includes(packName)) {
      throw new Error(`Missing course pack ${packName} — build refused.`);
    }
  }
}

assertNinetyDays();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  eslint: {
    dirs: ["src/app", "src/components", "src/lib/bootcamp", "packages"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
