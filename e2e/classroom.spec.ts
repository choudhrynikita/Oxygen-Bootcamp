import { test, expect } from "@playwright/test";

test.describe("Oxygen Bootcamp classroom", () => {
  test("home is Today, not a marketing hero", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Day");
    await expect(page.getByRole("heading", { name: /Daily Burst/i })).toBeVisible();
    await expect(page.getByText("Next unfinished lab")).toBeVisible();
    await expect(page.getByRole("searchbox").or(page.getByPlaceholder(/Maps, conref/i))).toBeVisible();
    await expect(page.getByText(/exciting journey/i)).toHaveCount(0);
  });

  test("day 1 has lab, check, session blocks, source box", async ({ page }) => {
    await page.goto("/day/1");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Day 1");
    await expect(page.getByRole("heading", { name: /Lab/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Check" })).toBeVisible();
    await expect(page.getByText("Source box")).toBeVisible();
    await expect(page.getByText("Block A")).toBeVisible();
    await expect(page.getByRole("button", { name: "Pause" }).or(page.getByRole("button", { name: "Start timer" }))).toBeVisible();
  });

  test("hourly session shows one block at a time", async ({ page }) => {
    await page.goto("/session/1");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Day 1");
    await expect(page.getByText("Block A")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Learn" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Next block" })).toBeVisible();
    await page.getByRole("button", { name: "Next block" }).click();
    await expect(page.getByRole("heading", { name: /Lab/i })).toBeVisible();
  });

  test("daily burst can be answered and does not complete the day", async ({ page }) => {
    await page.goto("/");
    const lock = page.getByTestId("burst-lock");
    if (await lock.count()) {
      await page.locator("section[aria-labelledby='burst-h'] button").first().click();
      await lock.click();
    }
    await expect(page.getByText(/does not complete a curriculum day/i)).toBeVisible();
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
