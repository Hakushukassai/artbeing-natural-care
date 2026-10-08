# アートビーング 商品紹介サイト

株式会社アートビーングの「マハラニ」「アタルバ」を紹介する日本語サイトです。既存の React 19 / TanStack Start / Vite / Tailwind CSS の構成と `bun.lock` を継続しています。

## 開発

```sh
bun install --frozen-lockfile
bun run dev
```

Vite が表示するローカル URL を開きます。既存設定ではポートは 8080 です。

```sh
bun run build
bunx tsc --noEmit
node scripts/check-content.mjs
node scripts/check-content.mjs http://127.0.0.1:8080
```

最後のコマンドは起動中の開発サーバーに対して、全11ページの応答・日本語の文書情報・主見出し・画像リンク・404 と、商品データの重複および公式リンク・検索文字の正規化を検証します。

## 内容の管理

- `src/data/products.ts`：ブランド、用途、シリーズ、52商品の説明と公式ストアへのリンク。
- `src/data/catalog.ts`：商品単位への展開と、ブランド・用途・複数語検索。
- `src/data/product-images.ts`：52商品の個別画像。実写への差し替えもここで管理。
- `src/components/ProductGrid.tsx`：写真・商品名の一覧。
- `src/components/ProductPanel.tsx`：全ページで共通の商品詳細パネル。開いている商品はURLの `?item=` で表す。
- `src/data/hair-colors.ts`：髪色の見本。ガイド・トップ・商品タイル・詳細パネルで共有。
- `src/components/BrandCatalog.tsx`：ブランド内の商品を用途・カテゴリ別に整理。カテゴリへの移動とブランド内検索。
- `src/data/details.ts`：ヘナ・インディゴ・香る髪の詳細ページ。
- `src/data/guides.ts`：ケアごとの使い方ガイド。
- `src/data/faqs.ts`：質問と回答。
- `src/data/site.ts`：お問い合わせ・会社情報・販売条件などの公式URL。
- `src/styles.css`：色・書体・余白・画面幅ごとのレイアウト・モーション。
- `docs/redesign-notes.md`：調査元、設計意図、写真の差し替え方、確認事項。

商品写真は `src/data/product-images.ts` の商品名と画像の対応で管理し、一覧・詳細パネル・詳しい商品紹介へ反映します。52商品は公式サイトから取得した写真を使用し、元のJPEGを加工せず `src/assets/products/official/` に保存しています。出典とチェックサムは `docs/official-product-images.json`、差し替え方は [公式画像の管理](docs/official-product-images.md) を参照してください。トップ・私たちについて・ガイドの写真も、公式サイトに掲載している本物の写真から切り出したものです（`src/assets/origin/`・`src/assets/hair/`・`src/assets/real/`）。出どころは `docs/redesign-notes.md` に記録しています。

商品価格や在庫は掲載せず、公式ストアの該当商品へ直接案内します。購入・お問い合わせは公式サイトで完結します。このサイトには購入・送信フォームや架空の動画再生操作はありません。

## GitHub Pages

公開URL: https://hakushukassai.github.io/artbeing-natural-care/

`main` へのプッシュで `.github/workflows/pages.yml` が11ページを静的HTMLとして生成し、GitHub Pagesへ公開します。GitHubの Settings → Pages → Source は **GitHub Actions** を使用します。

```sh
bun run build:pages
```

公開対象は `dist/client` のみです。サーバー側のファイルや `.env` は公開しません。`scripts/prepare-pages.mjs` が全ページの出力・リポジトリ配下のリンク・画像を確認し、404ページを生成します。別のリポジトリ名で使う場合、ローカルビルドでは `PAGES_BASE_PATH=/リポジトリ名/` を設定してください。Actionsではリポジトリ名から自動設定します。

実装参考：[TanStack Startの静的出力](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering)、[GitHub PagesのActions公開](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。
