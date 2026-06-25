import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("renders the hero and every main section", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/TD Advisory/i);
    await expect(page.getByText("Operations · Quality · People")).toBeVisible();

    for (const id of ["ethos", "practices", "services", "approach", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }

    await expect(
      page.getByRole("heading", { name: "Let's discuss your operations." }),
    ).toBeVisible();
  });

  test("navigates to a section via the top nav", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Services", exact: true }).first().click();
    await expect(page.locator("#services")).toBeInViewport({ timeout: 5000 });
  });

  test("shows the booking iframe by default in the contact panel", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByTitle(/Book a Consultation with TD Advisory/i)).toBeAttached();
  });
});

test.describe("Unknown routes", () => {
  test("renders the 404 page for an unknown path", async ({ page }) => {
    await page.goto("/this-route-does-not-exist");

    await expect(page.getByText(/404/)).toBeVisible();
  });
});
