import type { NextConfig } from "next";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

function assertNinetyDays() {
  const dir = join(process.cwd(), "content/lessons");
  if (!existsSync(dir)) {
    throw new Error("content/lessons is missing. Run npm run content:generate.");
  }
  const files = readdirSync(dir).filter((f) => /^day-\d{3}\.mdx$/.test(f));
  if (files.length < 90) {
    throw new Error(`Missing day files: found ${files.length}, need 90.`);
  }
  for (let n = 1; n <= 90; n++) {
    const name = `day-${String(n).padStart(3, "0")}.mdx`;
    if (!files.includes(name)) {
      throw new Error(`Missing Day file ${name} — build refused.`);
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
