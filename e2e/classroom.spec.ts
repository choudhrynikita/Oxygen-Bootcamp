import { test, expect } from "@playwright/test";

test.describe("Oxygen Bootcamp classroom", () => {
  test("home is Today, not a marketing hero", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Day");
    await expect(page.getByRole("heading", { name: /Today’s warmup|Today's warmup|Daily Burst/i })).toBeVisible();
    await expect(page.getByText("Next unfinished lab")).toBeVisible();
    await expect(page.getByPlaceholder(/Install, how-to|Maps, conref/i)).toBeVisible();
    await expect(page.getByText(/exciting journey/i)).toHaveCount(0);
  });

  test("day 1 has lab, check, course pack link, source box", async ({ page }) => {
    await page.goto("/day/1");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Day 1");
    await expect(page.getByRole("heading", { name: /Lab:/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Check" })).toBeVisible();
    await expect(page.getByText("Source box")).toBeVisible();
    await expect(page.getByRole("link", { name: /Open course pack/i })).toBeVisible();
    await expect(page.getByText("Block A")).toHaveCount(0);
  });

  test("course pack opens on cover, then Welcome", async ({ page }) => {
    await page.goto("/session/1");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Install Oxygen");
    await expect(page.getByRole("button", { name: /Start course|Resume course/i })).toBeVisible();
    await expect(page.getByText("Block A")).toHaveCount(0);
    await page.getByRole("button", { name: /Start course|Resume course/i }).click();
    await expect(page.getByRole("heading", { name: /Welcome/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /^Continue$/i })).toBeVisible();
    await page.getByRole("button", { name: /^Continue$/i }).click();
    await expect(page.getByRole("heading", { name: /What is Oxygen/i })).toBeVisible();
  });

  test("daily burst can be answered and does not complete the day", async ({ page }) => {
    await page.goto("/");
    const lock = page.getByTestId("burst-lock");
    if (await lock.count()) {
      await page.locator("section[aria-labelledby='burst-h'] button").first().click();
      await lock.click();
    }
    await expect(page.getByText(/does not finish (the day’s|today’s|the day's|today's) lesson/i)).toBeVisible();
    await page.goto("/progress");
    await expect(page.getByText("0 / 90 days with a lab")).toBeVisible();
  });

  test("quiz scores from options, not stems", async ({ page }) => {
    await page.goto("/day/1");
    const fieldsets = page.locator("fieldset");
    const n = await fieldsets.count();
    for (let i = 0; i < n; i++) {
      await fieldsets.nth(i).getByRole("button").nth(1).click();
    }
    await page.getByTestId("quiz-submit").click();
    await expect(page.getByText(/Score \d+%/)).toBeVisible();
  });

  test("settings export downloads progress JSON", async ({ page }) => {
    await page.goto("/settings");
    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.getByTestId("export-progress").click(),
    ]);
    expect(download.suggestedFilename()).toMatch(/oxygen-bootcamp-progress\.json/);
  });
});
