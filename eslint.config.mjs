import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "legacy/**",
      "content/**",
      "scripts/**",
      "src/routes/**",
      "src/lib/auth/**",
      "src/lib/app-data/**",
      "src/lib/multiplayer/**",
      "src/lib/db.ts",
      "src/lib/env.server.ts",
      "src/lib/error-component.tsx",
      "src/lib/preview-embedder-origin.ts",
      "src/lib/preview-host-bridge.ts",
      "server/**",
      "migrations/**",
      "e2e/**",
      "playwright.config.ts",
      "next-env.d.ts",
      "artifacts/**",
      "screenshots/**",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
