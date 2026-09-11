import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, normalize } from "node:path";
import { NextResponse } from "next/server";

const TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".dita": "application/xml; charset=utf-8",
  ".ditamap": "application/xml; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json",
};

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ path?: string[] }> },
) {
  const { path: parts } = await ctx.params;
  const rel = (parts && parts.length ? parts.join("/") : "index.html").replace(/\\/g, "/");
  if (rel.includes("..")) return new NextResponse("Not found", { status: 404 });
  const base = join(process.cwd(), "legacy");
  let file = join(base, rel);
  if (!normalize(file).startsWith(base)) return new NextResponse("Not found", { status: 404 });
  if (existsSync(file) && !rel.includes(".")) {
    file = join(file, "index.html");
  }
  if (!existsSync(file)) return new NextResponse("Not found", { status: 404 });
  const buf = await readFile(file);
  const ext = file.slice(file.lastIndexOf("."));
  return new NextResponse(buf, {
    headers: { "content-type": TYPES[ext] ?? "application/octet-stream" },
  });
}
