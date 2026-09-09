import assert from "node:assert/strict";
import { readFile, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const output = "dist/client";
const base = process.env.PAGES_BASE_PATH || "/artbeing-natural-care/";
const routes = [
  "",
  "products",
  "products/maharani",
  "products/atharva",
  "products/henna",
  "products/indigo",
  "products/shampoo",
  "about",
  "guide",
  "faq",
  "company",
];
for (const route of routes) {
  const file = join(output, route, "index.html");
  const html = await readFile(file, "utf8");
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, file);
  assert.match(html, /id="main-content"/, file);
  for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    const url = match[1];
    if (!url.startsWith("/")) continue;
    assert.ok(url.startsWith(base), `${file}: URL outside repository path: ${url}`);
    if (url.includes("/assets/")) await access(join(output, url.slice(base.length).split("?")[0]));
  }
}
await writeFile(join(output, ".nojekyll"), "");
await writeFile(
  join(output, "404.html"),
  `<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>ページが見つかりません｜アートビーング</title><body style="font-family:sans-serif;background:#fafbf7;color:#263d32;padding:15vh 8vw"><h1>ページが見つかりません</h1><p><a href="${base}">トップページへ戻る</a></p></body></html>`,
);
console.log(`Verified ${routes.length} static pages, repository-prefixed URLs and local assets.`);
