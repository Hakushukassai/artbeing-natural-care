import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BrandPair } from "@/components/BrandPair";
import { ProductGrid } from "@/components/ProductGrid";
import { catalogProducts } from "@/data/catalog";
import { pageMeta } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageMeta(
      "髪と肌のナチュラルケア",
      "ヘナとハーブのマハラニ、オイルとスキンケアのアタルバ。株式会社アートビーングのナチュラルケア商品をご紹介します。",
    ),
});
const featuredNames = [
  "マハラニヘナ 石臼挽き",
  "ハーブシャンプー 香る髪",
  "アタルバ ヘッドマッサージオイル",
  "アタルバ フェイスクリーム R",
];
const featuredProducts = catalogProducts.filter((product) =>
  featuredNames.includes(product.item.name),
);

function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="home-collection shell" aria-labelledby="home-title">
          <div className="home-collection-title">
            <h1 id="home-title">髪と肌の、ナチュラルケア。</h1>
            <Link to="/products" className="quiet-link">
              商品一覧 <ArrowRight size={18} />
            </Link>
          </div>
          <BrandPair />
        </section>
        <section className="home-products shell" aria-labelledby="featured-title">
          <div className="quiet-heading">
            <h2 id="featured-title">主な商品</h2>
            <Link to="/products" className="quiet-link">
              すべて見る <ArrowRight size={17} />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </section>
        <nav className="home-care-links shell" aria-label="用途から探す">
          <span>用途から探す</span>
          <Link to="/products/maharani" hash="color">
            髪を染める
          </Link>
          <Link to="/products/maharani" hash="nocolor">
            髪を洗う・整える
          </Link>
          <Link to="/products/atharva" hash="head">
            髪・頭皮のケア
          </Link>
          <Link to="/products/atharva" hash="skin">
            肌のケア
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
