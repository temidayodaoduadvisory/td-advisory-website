import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// `color-contrast` is design-owned (the visual palette is out of scope for this
// migration), so it's excluded here while every other WCAG 2 A/AA rule is enforced.
const WCAG_TAGS = ["wcag2a", "wcag2aa"];
const EXCLUDED_RULES = ["color-contrast"];

test.describe("Accessibility (axe)", () => {
  test("home page has no WCAG A/AA violations", async ({ page }) => {
    await page.goto("/");

    const { violations } = await new AxeBuilder({ page })
      .withTags(WCAG_TAGS)
      .disableRules(EXCLUDED_RULES)
      .analyze();

    expect(violations).toEqual([]);
  });

  test("contact form is accessible (labels, roles, names)", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Send a Message" }).click();
    await expect(page.getByLabel("Full Name")).toBeVisible();

    const { violations } = await new AxeBuilder({ page })
      .include("#contact")
      .withTags(WCAG_TAGS)
      .disableRules(EXCLUDED_RULES)
      .analyze();

    expect(violations).toEqual([]);
  });
});
