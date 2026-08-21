import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Static SPA built by Vite and deployed to Vercel. No backend, no Replit coupling.
// `PORT` only affects the local dev/preview server and is optional.
const DEV_SERVER_PORT = Number(process.env.PORT ?? 5173);

// Extra multi-page entries beyond the root index.html. Each emits a real HTML
// file with its own <title>/og: tags — link-preview crawlers (WhatsApp,
// LinkedIn, X) don't run JS, so React-set metadata never reaches them.
const MPA_ENTRIES = [{ name: "playbook", route: "/playbook" }];

/**
 * Makes the dev and preview servers resolve an extensionless MPA route to its
 * HTML file, the way Vercel does. Without this, both answer /playbook with the
 * root index.html: the page still renders (the router handles the path) but it
 * inherits the home page's <title> and og: tags, so metadata problems stay
 * invisible locally and the E2E suite exercises a routing model production
 * doesn't use.
 */
function mpaRouting(): Plugin {
  const middleware = (
    req: { url?: string },
    _res: unknown,
    next: () => void,
  ) => {
    const [pathname, search = ""] = (req.url ?? "").split("?");
    const entry = MPA_ENTRIES.find((e) => e.route === pathname);
    if (entry) {
      req.url = `${entry.route}/index.html${search ? `?${search}` : ""}`;
    }
    next();
  };

  return {
    name: "mpa-routing",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), mpaRouting()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      // Multi-page build. Each entry emits a real HTML file with its own
      // <title>/og: tags, which is what link-preview crawlers read — they don't
      // run JS, so React-set metadata never reaches them. Vercel serves a
      // matching file before falling back to the SPA rewrite in vercel.json.
      input: {
        main: path.resolve(import.meta.dirname, "index.html"),
        ...Object.fromEntries(
          MPA_ENTRIES.map((e) => [
            e.name,
            path.resolve(import.meta.dirname, e.name, "index.html"),
          ]),
        ),
      },
    },
  },
  server: {
    port: DEV_SERVER_PORT,
    host: true,
  },
  preview: {
    port: DEV_SERVER_PORT,
    host: true,
  },
});
