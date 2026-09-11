import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, normalize } from "node:path";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ path?: string[] }> },
) {
  const { path: parts } = await ctx.params;
  const rel = (parts && parts.length ? parts.join("/") : "").replace(/\\/g, "/");
  if (!rel || rel.includes("..")) return new NextResponse("Not found", { status: 404 });
  const base = join(process.cwd(), "docs");
  const file = join(base, rel);
  if (!normalize(file).startsWith(base) || !existsSync(file)) {
    return new NextResponse("Not found", { status: 404 });
  }
  const buf = await readFile(file);
  const html = rel.endsWith(".html");
  return new NextResponse(buf, {
    headers: { "content-type": html ? "text/html; charset=utf-8" : "text/plain; charset=utf-8" },
  });
}
