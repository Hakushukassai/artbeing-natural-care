import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Catalog } from "@/components/Catalog";
import { Breadcrumbs } from "@/components/PageIntro";
import { pageMeta } from "@/data/site";
export const Route = createFileRoute("/products/")({
  component: Products,
  head: () =>
    pageMeta(
      "商品一覧｜マハラニ・アタルバ",
      "マハラニとアタルバの商品を、ブランド・用途・商品名から探せます。商品ごとの詳細と公式ストアをご案内します。",
    ),
});
function Products() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <div className="product-index-title shell">
          <Breadcrumbs items={[{ label: "商品一覧" }]} />
          <h1>商品一覧</h1>
        </div>
        <Catalog />
      </main>
      <Footer />
    </>
  );
}
