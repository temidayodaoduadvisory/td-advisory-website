import { defineConfig, devices } from "@playwright/test";

// E2E tests run against a production build served by `vite preview`, exercised
// in Chromium (Chrome engine). A dummy Formspree id is baked into the build so
// the contact form posts to a predictable URL the tests can intercept.
const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}`;
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: isCI ? [["list"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: `pnpm run build && pnpm exec vite preview --config vite.config.ts --port ${PORT} --strictPort`,
    url: BASE_URL,
    reuseExistingServer: !isCI,
    timeout: 120_000,
    env: {
      VITE_FORMSPREE_FORM_ID: "e2eTestForm",
    },
  },
});
