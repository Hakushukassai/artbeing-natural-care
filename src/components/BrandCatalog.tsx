import { useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { ProductGrid } from "./ProductGrid";
import { Breadcrumbs } from "./PageIntro";
import { type Brand } from "@/data/products";
import { filterProducts } from "@/data/catalog";

export function BrandCatalog({ brand, other }: { brand: Brand; other: Brand }) {
  const [query, setQuery] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const hash = useRouterState({ select: (state) => state.location.hash });
  const products = filterProducts({ brand: brand.key, query });
  const groups = brand.groups
    .map((group) => ({
      ...group,
      showCategories: group.categories.length > 1,
      categories: group.categories
        .map((category) => ({
          ...category,
          products: products.filter((product) => product.category.id === category.id),
        }))
        .filter((category) => category.products.length),
    }))
    .filter((group) => group.categories.length);
  function clearSearch() {
    setQuery("");
    input.current?.focus();
  }
  return (
    <main id="main-content" tabIndex={-1}>
      <div className={`brand-index-title shell ${brand.key}`}>
        <Breadcrumbs items={[{ label: "商品一覧", to: "/products" }, { label: brand.name }]} />
        <h1>
          {brand.reading}
          <span>{brand.name}</span>
        </h1>
      </div>
      <div id="collection" className="brand-collection shell">
        <div className="brand-collection-tools">
          <p role="status" aria-live="polite">
            {products.length} 商品
          </p>
          <div className="product-search">
            <Search size={17} aria-hidden="true" />
            <input
              ref={input}
              type="search"
              aria-label={`${brand.name}の商品を検索`}
              placeholder="ブランド内の商品を検索"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button aria-label="検索語を消す" onClick={clearSearch}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>
        {groups.length ? (
          <div className="brand-collection-layout">
            <nav className="brand-category-nav" aria-label={`${brand.name}の商品カテゴリ`}>
              {groups.map((group) => (
                <Link
                  key={group.id}
                  to={brand.path}
                  hash={group.id}
                  aria-current={hash === group.id ? "location" : undefined}
                >
                  {group.ja}
                  <span>
                    {group.categories.reduce((sum, category) => sum + category.products.length, 0)}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="brand-collection-groups">
              {groups.map((group) => (
                <section
                  key={group.id}
                  id={group.id}
                  className="brand-product-group"
                  aria-labelledby={`${group.id}-heading`}
                  tabIndex={-1}
                >
                  <h2 id={`${group.id}-heading`}>{group.ja}</h2>
                  {group.categories.map((category) => {
                    const showCategory = group.showCategories;
                    return (
                      <div
                        className="brand-product-category"
                        key={category.id}
                        data-category={category.id}
                      >
                        {showCategory && <h3 className="brand-category-heading">{category.ja}</h3>}
                        <ProductGrid
                          products={category.products}
                          showBrand={false}
                          headingLevel={showCategory ? 4 : 3}
                        />
                      </div>
                    );
                  })}
                </section>
              ))}
            </div>
          </div>
        ) : (
          <div className="product-empty">
            <p>該当する商品がありません。</p>
            <button className="product-focus-more" onClick={clearSearch}>
              検索を解除する
            </button>
          </div>
        )}
      </div>
      <nav className="brand-switch-link shell" aria-label="ほかの商品を見る">
        <Link to="/products">すべての商品</Link>
        <Link to={other.path}>{other.name}の商品</Link>
      </nav>
    </main>
  );
}
