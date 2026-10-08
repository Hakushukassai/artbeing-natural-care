import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { build } from "esbuild";

// Validate the data actually used by the site, including its final deduplication.
const result = await build({
  stdin: {
    contents: 'export * from "./src/data/products.ts"; export * from "./src/data/catalog.ts";',
    resolveDir: process.cwd(),
    loader: "ts",
  },
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
  plugins: [
    {
      name: "image-paths",
      setup(b) {
        b.onLoad({ filter: /\.(webp|jpg|png)$/ }, ({ path }) => ({
          contents: `export default ${JSON.stringify(path)}`,
          loader: "js",
        }));
      },
    },
  ],
});
const data = await import(
  `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`
);
const products = data.brands.flatMap((b) =>
  b.groups.flatMap((g) =>
    g.categories.flatMap((c) => c.items.map((i) => ({ ...i, brand: b.key, group: g.id }))),
  ),
);
assert.equal(
  new Set(products.map((p) => p.name)).size,
  products.length,
  "Product names must not be duplicated across categories",
);
assert.equal(
  products.some((p) => p.brand === "maharani" && p.name.startsWith("アタルバ")),
  false,
  "Atharva products must not be listed under Maharani",
);
for (const p of products) {
  assert.equal(new URL(p.shopUrl).origin, "https://maharani.jp");
  assert.ok(p.desc.trim());
  assert.ok(p.image, `${p.name}: individual product photo`);
}
assert.equal(
  new Set(products.map((p) => p.image)).size,
  products.length,
  "Every product uses a different photograph",
);
const imageHashes = await Promise.all(
  products.map(async (p) =>
    createHash("sha256")
      .update(await readFile(p.image))
      .digest("hex"),
  ),
);
assert.equal(new Set(imageHashes).size, products.length, "Product photos are not duplicated files");
assert.equal(data.normalizeQuery("ﾍﾅ"), data.normalizeQuery("ヘナ"));
assert.equal(data.normalizeQuery("いんでぃご"), data.normalizeQuery("インディゴ"));
assert.equal(data.normalizeQuery("ＦＢ"), data.normalizeQuery("fb"));
assert.equal(data.catalogProducts.length, 52, "Every product has its own tile");
assert.equal(new Set(data.catalogProducts.map((p) => p.id)).size, 52, "Stable, unique tile IDs");
assert.equal(data.filterProducts({ brand: "maharani" }).length, 32);
assert.equal(data.filterProducts({ brand: "atharva" }).length, 20);
assert.deepEqual(
  data.filterProducts({ query: "マハラニ　ヘアケア　ｆｂ" }).map((p) => p.item.name),
  ["マハラニ ヘアケアオイル FB"],
  "Multiword search handles full-width characters",
);
assert.ok(
  data
    .filterProducts({ query: "あたるば ふぇいすくりーむ" })
    .some((p) => p.item.name === "アタルバ フェイスクリーム R"),
  "Kana search finds the matching products and category",
);
assert.equal(data.filterProducts({ brand: "maharani", query: "Atharva" }).length, 0);
assert.equal(data.filterProducts({ brand: "atharva", group: "head" }).length, 5);
assert.equal(data.filterProducts({ query: "存在しない商品" }).length, 0);
const pages = [
  "/",
  "/products",
  "/products/maharani",
  "/products/atharva",
  "/products/henna",
  "/products/indigo",
  "/products/shampoo",
  "/about",
  "/guide",
  "/faq",
  "/company",
];
const siteUrl = process.argv[2];
if (siteUrl) {
  const baseUrl = new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);
  const assets = new Set();
  for (const path of pages) {
    const response = await fetch(new URL(path.slice(1), baseUrl));
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /<html[^>]*lang="ja"/, `${path}: Japanese document language`);
    assert.match(html, /<title>[^<]*アートビーング[^<]*<\/title>/, `${path}: real page title`);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${path}: one primary heading`);
    assert.match(html, /id="main-content"/, `${path}: keyboard skip target`);
    assert.doesNotMatch(html, /Lovable App|kusa &amp; mi|info@example\.com/);
    if (path === "/") {
      // トップ：用途の入口4つ、髪色の見本6色、ヘナが届くまでの4枚
      assert.equal((html.match(/class="home-care[" ]/g) || []).length, 4, "/: care entries");
      assert.equal((html.match(/class="hair-swatch"/g) || []).length, 6, "/: hair color swatches");
      assert.equal((html.match(/class="origin-photo"/g) || []).length, 4, "/: origin photographs");
    }
    const expectedTiles = {
      "/products": 52,
      "/products/maharani": 32,
      "/products/atharva": 20,
    }[path];
    if (expectedTiles !== undefined) {
      assert.equal(
        (html.match(/data-product-name=/g) || []).length,
        expectedTiles,
        `${path}: individual products visible`,
      );
      assert.doesNotMatch(html, /class="collection-card/, `${path}: no series cards`);
      const tiles = [...html.matchAll(/<article class="product-tile"[\s\S]*?<\/article>/g)];
      assert.equal(
        new Set(tiles.map(([tile]) => tile.match(/<img[^>]+src="([^"]+)"/)?.[1])).size,
        expectedTiles,
        `${path}: each product displays a different photograph`,
      );
      for (const [tile] of tiles) {
        assert.doesNotMatch(tile, /<p[\s>]/, `${path}: descriptions stay in product details`);
        assert.match(tile, /aria-haspopup="dialog"/, `${path}: product detail action`);
      }
      const brand = data.brands.find((entry) => entry.path === path);
      if (brand) {
        const categories = brand.groups.flatMap((group) => group.categories);
        const blocks = [...html.matchAll(/data-category="([^"]+)"/g)];
        assert.deepEqual(
          blocks.map((block) => block[1]),
          categories.map((category) => category.id),
        );
        for (const [index, block] of blocks.entries()) {
          const content = html.slice(block.index, blocks[index + 1]?.index);
          const names = [...content.matchAll(/data-product-name="([^"]+)"/g)].map(
            (match) => match[1],
          );
          assert.deepEqual(
            names,
            categories[index].items.map((item) => item.name),
            `${path}: products stay in their category`,
          );
        }
        for (const group of brand.groups) {
          assert.ok(html.includes(`id="${group.id}"`), `${path}: category jump destination`);
          assert.ok(html.includes(`id="${group.id}-heading"`), `${path}: named product group`);
        }
      } else {
        assert.doesNotMatch(html, /data-category=/, `${path}: flat product overview`);
      }
    }
    for (const match of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
      const url = new URL(match[1], siteUrl);
      if (url.origin === new URL(siteUrl).origin) assets.add(url.href);
    }
    console.log(`PASS ${path}`);
  }
  for (const url of assets) {
    const r = await fetch(url);
    assert.equal(r.status, 200, `Image: ${url}`);
    assert.match(r.headers.get("content-type") || "", /^image\//);
    await r.body?.cancel();
  }
  const missing = await fetch(new URL("this-page-does-not-exist", baseUrl));
  assert.equal(missing.status, 404, "Unknown routes return 404");
  await missing.body?.cancel();
  console.log(`PASS ${assets.size} image assets and 404 page`);
}
console.log(
  `PASS ${products.length} unique products and photographs; official destinations, brand/use filters and multiword search`,
);
