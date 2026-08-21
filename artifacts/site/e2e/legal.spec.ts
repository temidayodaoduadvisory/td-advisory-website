import { test, expect } from "@playwright/test";

const DOCUMENTS = [
  {
    path: "/privacy",
    heading: "Privacy Policy",
    title: /^Privacy Policy — TD Advisory$/,
    firstClause: "1. Information We Collect",
    lastClause: "11. Contact Us",
  },
  {
    path: "/terms",
    heading: "Terms and Conditions",
    title: /^Terms and Conditions — TD Advisory$/,
    firstClause: "1. About TD Advisory",
    lastClause: "14. Contact Us",
  },
];

test.describe("Legal pages", () => {
  for (const doc of DOCUMENTS) {
    test(`${doc.path} serves its own static entry`, async ({ page }) => {
      await page.goto(doc.path);

      // The title proves Vercel-style routing resolved the per-route HTML file
      // rather than falling through to the home page's index.html.
      await expect(page).toHaveTitle(doc.title);
      await expect(
        page.getByRole("heading", { level: 1, name: doc.heading }),
      ).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://tdadvisory.co${doc.path}`,
      );
    });

    test(`${doc.path} renders the document from first to last clause`, async ({ page }) => {
      await page.goto(doc.path);

      await expect(
        page.getByRole("heading", { level: 2, name: doc.firstClause }),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", { level: 2, name: doc.lastClause }),
      ).toBeVisible();
      await expect(page.getByText(/Last updated: 21 August 2026/)).toBeVisible();
    });

    test(`${doc.path} is indexable now that the text is published`, async ({ page }) => {
      await page.goto(doc.path);

      await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(0);
    });

    test(`${doc.path} links its contact address as mailto`, async ({ page }) => {
      await page.goto(doc.path);

      await expect(
        page.locator("#contact-us").getByRole("link", { name: "enquiries@tdadvisory.co" }),
      ).toHaveAttribute("href", "mailto:enquiries@tdadvisory.co");
    });
  }

  test("both are reachable from the footer's Legal column", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Privacy Policy" }).click();
    await expect(page).toHaveURL(/\/privacy$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Privacy Policy" }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Terms and Conditions" }).click();
    await expect(page).toHaveURL(/\/terms$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Terms and Conditions" }),
    ).toBeVisible();
  });

  test("the footer has no dead placeholder anchors", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('footer a[href="#"]')).toHaveCount(0);
  });

  test("a clause can be deep-linked by its anchor", async ({ page }) => {
    await page.goto("/terms#refund-policy");

    await expect(
      page.getByRole("heading", { level: 2, name: "8. Refund Policy" }),
    ).toBeInViewport();
  });

  test("shared navigation still works from a legal page", async ({ page }) => {
    await page.goto("/privacy");

    await page.getByRole("link", { name: "Playbook" }).first().click();
    await expect(page).toHaveURL(/\/playbook$/);
  });
});
