import { test, expect, type Page, type Request } from "@playwright/test";

const FORMSPREE = /formspree\.io/;

// Formspree is cross-origin, so the mocked response must include CORS headers,
// otherwise the browser blocks the app from reading it and every submit looks
// like a network error.
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
};

type FormspreeMock = { status: number; body: unknown; onPost?: (request: Request) => void };

async function mockFormspree(page: Page, { status, body, onPost }: FormspreeMock) {
  await page.route(FORMSPREE, (route) => {
    const request = route.request();
    if (request.method() === "OPTIONS") {
      return route.fulfill({ status: 204, headers: CORS_HEADERS });
    }
    onPost?.(request);
    return route.fulfill({
      status,
      headers: CORS_HEADERS,
      contentType: "application/json",
      body: JSON.stringify(body),
    });
  });
}

async function openMessageForm(page: Page) {
  await page.goto("/");
  await page.getByRole("button", { name: "Send a Message" }).click();
  await expect(page.getByLabel("Full Name")).toBeVisible();
}

async function fillForm(page: Page, interest: string) {
  await page.getByLabel("Full Name").fill("Ada Lovelace");
  await page.getByLabel("Company").fill("Analytical Engines");
  await page.getByLabel("Work Email").fill("ada@example.com");
  await page.getByLabel("Area of Interest").click();
  await page.getByRole("option", { name: interest }).click();
  await page.getByLabel("Brief Description of Needs").fill("We need an operational audit.");
}

test.describe("Contact form (Formspree)", () => {
  test("submits successfully and shows the confirmation state", async ({ page }) => {
    await mockFormspree(page, { status: 200, body: { next: "https://formspree.io/thanks" } });

    await openMessageForm(page);
    await fillForm(page, "General Enquiry");
    await page.getByRole("button", { name: /submit enquiry/i }).click();

    await expect(page.getByText("Message received.")).toBeVisible();
  });

  test("includes the selected interest in the submitted payload", async ({ page }) => {
    let postBody = "";
    await mockFormspree(page, {
      status: 200,
      body: { next: "https://formspree.io/thanks" },
      onPost: (request) => {
        postBody = request.postData() ?? "";
      },
    });

    await openMessageForm(page);
    await fillForm(page, "Human Resources Support");
    await page.getByRole("button", { name: /submit enquiry/i }).click();

    await expect(page.getByText("Message received.")).toBeVisible();
    expect(postBody).toContain("Human Resources Support");
  });

  test("keeps the form and surfaces an error toast when Formspree fails", async ({ page }) => {
    await mockFormspree(page, { status: 422, body: { errors: [{ message: "Form not found" }] } });

    await openMessageForm(page);
    await fillForm(page, "Operations Consulting");
    await page.getByRole("button", { name: /submit enquiry/i }).click();

    await expect(page.getByText("Something went wrong.", { exact: true })).toBeVisible();
    await expect(page.getByText("Message received.")).toHaveCount(0);
  });

  test("blocks submission while required fields are empty", async ({ page }) => {
    let requested = false;
    await mockFormspree(page, {
      status: 200,
      body: { next: "https://formspree.io/thanks" },
      onPost: () => {
        requested = true;
      },
    });

    await openMessageForm(page);
    await page.getByRole("button", { name: /submit enquiry/i }).click();

    await expect(page.getByLabel("Full Name")).toBeVisible();
    await expect(page.getByText("Message received.")).toHaveCount(0);
    expect(requested).toBe(false);
  });
});
