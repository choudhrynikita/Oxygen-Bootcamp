import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, normalize } from "node:path";
import { NextResponse } from "next/server";

const TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".dita": "application/xml; charset=utf-8",
  ".ditamap": "application/xml; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ path?: string[] }> },
) {
  const { path: parts } = await ctx.params;
  const rel = (parts && parts.length ? parts.join("/") : "index.html").replace(/\\/g, "/");
  if (rel.includes("..")) return new NextResponse("Not found", { status: 404 });
  const base = join(process.cwd(), "samples");
  const file = join(base, rel);
  if (!normalize(file).startsWith(base) || !existsSync(file)) {
    return new NextResponse("Not found", { status: 404 });
  }
  const buf = await readFile(file);
  const ext = file.slice(file.lastIndexOf("."));
  return new NextResponse(buf, {
    headers: { "content-type": TYPES[ext] ?? "text/plain; charset=utf-8" },
  });
}
