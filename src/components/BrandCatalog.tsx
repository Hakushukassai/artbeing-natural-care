import { Link } from "@tanstack/react-router";
import { Catalog } from "./Catalog";
import { Breadcrumbs } from "./PageIntro";
import { type Brand } from "@/data/products";

export function BrandCatalog({ brand, other }: { brand: Brand; other: Brand }) {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className={`brand-index-title shell ${brand.key}`}>
        <Breadcrumbs items={[{ label: "商品一覧", to: "/products" }, { label: brand.name }]} />
        <h1>
          {brand.reading}
          <span>{brand.name}</span>
        </h1>
        <p>
          {brand.key === "maharani"
            ? "ヘナ・ハーブシャンプー・ヘアケア"
            : "オイル・スキンケア・ボディケア"}
        </p>
      </div>
      <Catalog brand={brand} />
      <nav className="brand-switch-link shell" aria-label="ほかの商品を見る">
        <Link to="/products">すべての商品</Link>
        <Link to={other.path}>{other.name}の商品</Link>
      </nav>
    </main>
  );
}
