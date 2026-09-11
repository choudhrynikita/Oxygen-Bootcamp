/** Resolve extensionless relative imports to .ts for node:test + strip-types. */
export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context);
  } catch (err) {
    if (err?.code === "ERR_MODULE_NOT_FOUND" && !hasKnownExt(specifier)) {
      for (const ext of [".ts", ".js", ".mjs"]) {
        try {
          return await nextResolve(specifier + ext, context);
        } catch {
          /* try next */
        }
      }
    }
    throw err;
  }
}

function hasKnownExt(specifier) {
  return /\.(ts|js|mjs|cjs|json)$/.test(specifier);
}
