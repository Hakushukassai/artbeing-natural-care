import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ProductPhoto } from "@/components/ProductPhoto";
import { useOpenProduct } from "@/components/ProductPanel";
import { hairColors } from "@/data/hair-colors";
import { catalogProducts, displayProductName } from "@/data/catalog";
import { productImages } from "@/data/product-images";
import { pageMeta } from "@/data/site";
import harvestImage from "@/assets/origin/harvest.jpg";
import farmImage from "@/assets/origin/farm.jpg";
import buyingImage from "@/assets/origin/buying.jpg";
import stoneMillImage from "@/assets/origin/stone-mill.jpg";
import dyeTestImage from "@/assets/origin/dye-test.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageMeta(
      "髪と肌のナチュラルケア",
      "ヘナとハーブのマハラニ、オイルとスキンケアのアタルバ。株式会社アートビーングのナチュラルケア商品をご紹介します。",
    ),
});
const brands = [
  {
    key: "maharani",
    to: "/products/maharani",
    en: "Maharani",
    ja: "マハラニ",
    type: "ヘナ・ハーブシャンプー",
  },
  {
    key: "atharva",
    to: "/products/atharva",
    en: "Atharva",
    ja: "アタルバ",
    type: "オイル・スキンケア",
  },
] as const;
// 用途ごとに、代表の商品の写真で入口を作る
const cares = [
  {
    label: "髪を染める",
    to: "/products/maharani",
    hash: "color",
    product: "マハラニヘナ 石臼挽き",
  },
  {
    label: "髪を洗う・整える",
    to: "/products/maharani",
    hash: "nocolor",
    product: "ハーブシャンプー 香る髪",
  },
  {
    label: "髪・頭皮のケア",
    to: "/products/atharva",
    hash: "head",
    product: "アタルバ ヘッドマッサージオイル",
  },
  {
    label: "肌のケア",
    to: "/products/atharva",
    hash: "skin",
    product: "アタルバ フェイスクリーム R",
  },
] as const;
// 公式サイトに掲載している産地と製造の写真。順番どおりに並べる
const origin = [
  { image: farmImage, width: 800, height: 636, text: "契約農園で、農薬を使わずに育てる" },
  { image: buyingImage, width: 700, height: 467, text: "現地で葉を確かめて買い付ける" },
  { image: stoneMillImage, width: 700, height: 637, text: "石臼でゆっくり挽いて粉にする" },
  { image: dyeTestImage, width: 700, height: 330, text: "髪の束を染めて、色の出方を確かめる" },
];
const colorProducts = hairColors.map((color) => ({
  color,
  product: catalogProducts.find((product) => product.item.name === color.product)!,
}));

function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="home-hero shell" aria-labelledby="home-title">
          <h1 id="home-title">髪と肌の、ナチュラルケア。</h1>
          <figure className="home-hero-photo">
            <img
              src={harvestImage}
              alt="ヘナ畑で葉を摘む人たち"
              width={520}
              height={400}
              fetchPriority="high"
            />
            <figcaption>インド・ソジャットのヘナ農園</figcaption>
          </figure>
          <ul className="hero-brands">
            {brands.map((brand) => (
              <li key={brand.key}>
                <Link to={brand.to} className={`hero-brand ${brand.key}`}>
                  <strong>{brand.en}</strong>
                  <span>
                    {brand.ja}
                    <small>{brand.type}</small>
                  </span>
                  <ArrowRight size={18} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <nav className="home-cares shell" aria-labelledby="cares-title">
          <div className="quiet-heading">
            <h2 id="cares-title">用途から探す</h2>
            <Link to="/products" className="quiet-link">
              すべての商品 <ArrowRight size={17} />
            </Link>
          </div>
          <div className="home-care-row">
            {cares.map((care, index) => (
              <Reveal key={care.label} delay={index * 70}>
                <Link to={care.to} hash={care.hash} className="home-care">
                  <ProductPhoto src={productImages[care.product]} />
                  <span className="home-care-label">
                    {care.label}
                    <ArrowRight size={16} aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </nav>
        <HomeColors />
        <section className="home-origin" aria-labelledby="origin-title">
          <div className="shell">
            <div className="quiet-heading">
              <h2 id="origin-title">ヘナが届くまで</h2>
              <Link to="/about" className="quiet-link">
                私たちについて <ArrowRight size={17} />
              </Link>
            </div>
            <ol className="origin-steps">
              {origin.map((step, index) => (
                <Reveal key={step.text} tag="li" delay={index * 80}>
                  <span className="origin-photo">
                    <img
                      src={step.image}
                      alt=""
                      loading="lazy"
                      width={step.width}
                      height={step.height}
                    />
                  </span>
                  <span className="origin-step-number">{index + 1}</span>
                  <p>{step.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function HomeColors() {
  const openProduct = useOpenProduct();
  return (
    <section className="home-colors" aria-labelledby="colors-title">
      <div className="home-colors-inner shell">
        <div className="home-colors-intro">
          <h2 id="colors-title">仕上がりの色から選ぶ</h2>
          <p>色は白髪に対する仕上がりのイメージです。</p>
          <Link to="/guide" hash="colors" className="quiet-link">
            選び方 <ArrowRight size={17} />
          </Link>
        </div>
        {/* 白い毛を実際に染めた束の写真を、色見本として1色ずつ並べる */}
        <ul className="hair-swatches">
          {colorProducts.map(({ color, product }) => (
            <li key={color.name}>
              <button
                aria-haspopup="dialog"
                aria-label={`${color.name}（${product.item.name}）の詳細`}
                onClick={(event) => openProduct(product, event.currentTarget)}
              >
                <img
                  className="hair-swatch"
                  src={color.photo}
                  alt=""
                  loading="lazy"
                  width={100}
                  height={125}
                />
                <span className="hair-swatch-name">{color.name}</span>
                <span className="hair-swatch-product">
                  {displayProductName(product.item.name).replace(/\s.*$/, "")}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
