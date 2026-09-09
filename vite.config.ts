import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// The normal build keeps the existing server deployment. GitHub Pages uses
// prerendered HTML and the repository path for both navigation and assets.
const pages = process.env.GITHUB_PAGES === "true";
const base = pages ? process.env.PAGES_BASE_PATH || "/artbeing-natural-care/" : "/";

export default defineConfig({
  vite: { base },
  ...(pages ? { nitro: false } : {}),
  tanstackStart: {
    server: { entry: "server" },
    ...(pages
      ? {
          prerender: {
            enabled: true,
            autoSubfolderIndex: true,
            autoStaticPathsDiscovery: true,
            crawlLinks: false,
            failOnError: true,
          },
        }
      : {}),
  },
});
