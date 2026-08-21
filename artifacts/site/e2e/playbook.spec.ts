import { test, expect } from "@playwright/test";

test.describe("Scalable Startup Operating System page", () => {
  test("renders the hero and every main section", async ({ page }) => {
    await page.goto("/playbook");

    await expect(page).toHaveTitle(/Scalable Startup Operating System/i);
    await expect(
      page.getByRole("heading", { level: 1, name: /From chaos to clarity/i }),
    ).toBeVisible();

    for (const id of [
      "problem",
      "modules",
      "toolkit",
      "audience",
      "outcomes",
      "pricing",
      "about",
      "faq",
      "final-cta",
    ]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test("shows three pricing tiers, each with an outbound buy link", async ({ page }) => {
    await page.goto("/playbook");

    const buyLinks = page.locator('#pricing a[target="_blank"]');
    await expect(buyLinks).toHaveCount(3);

    for (const price of ["₦20,000", "₦50,000", "₦100,000"]) {
      await expect(page.locator("#pricing").getByText(price)).toBeVisible();
    }

    await expect(page.getByText("Most popular")).toBeVisible();
  });

  test("expands an FAQ answer", async ({ page }) => {
    await page.goto("/playbook");

    const trigger = page.getByRole("button", { name: /Is this just an ebook\?/i });
    await trigger.click();
    await expect(page.getByText(/combines practical guidance across eight/i)).toBeVisible();
  });

  test("is reachable from the home page teaser", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: /Explore the Playbook/i }).click();
    await expect(page).toHaveURL(/\/playbook$/);
    await expect(
      page.getByRole("heading", { level: 1, name: /From chaos to clarity/i }),
    ).toBeVisible();
  });
});
