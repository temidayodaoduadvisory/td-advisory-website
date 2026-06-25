import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Static SPA built by Vite and deployed to Vercel. No backend, no Replit coupling.
// `PORT` only affects the local dev/preview server and is optional.
const DEV_SERVER_PORT = Number(process.env.PORT ?? 5173);

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
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
