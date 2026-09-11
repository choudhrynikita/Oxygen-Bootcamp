import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 60_000,
  use: {
    baseURL: "http://127.0.0.1:8080",
    colorScheme: "light",
  },
  webServer: {
    command: "npm run start",
    url: "http://127.0.0.1:8080",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
