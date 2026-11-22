import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { useOpenProduct } from "@/components/ProductPanel";
import { hairColors } from "@/data/hair-colors";
import { catalogProducts, displayProductName } from "@/data/catalog";
import { pageMeta } from "@/data/site";
import hero2400 from "@/assets/photo/hero-herbal-color-2400.webp";
import hero1200 from "@/assets/photo/hero-herbal-color-1200.webp";
import careDye from "@/assets/photo/care-dye-1200.webp";
import careDyeSmall from "@/assets/photo/care-dye-600.webp";
import careWash from "@/assets/photo/care-wash-1200.webp";
import careWashSmall from "@/assets/photo/care-wash-600.webp";
import careHead from "@/assets/photo/care-head-1200.webp";
import careHeadSmall from "@/assets/photo/care-head-600.webp";
import careSkin from "@/assets/photo/care-skin-1200.webp";
import careSkinSmall from "@/assets/photo/care-skin-600.webp";
import maharaniLogo from "@/assets/logo/maharani.svg";
import fieldImage from "@/assets/origin/field.jpg";
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
// 用途ごとの入口。写真は社内の元データから書き出したもの(scripts/export-photos.py)
const cares = [
  {
    label: "髪を染める",
    to: "/products/maharani",
    hash: "color",
    image: careDye,
    small: careDyeSmall,
    alt: "ヘナの葉の上に並べたマハラニヘナの袋",
  },
  {
    label: "髪を洗う・整える",
    to: "/products/maharani",
    hash: "nocolor",
    image: careWash,
    small: careWashSmall,
    alt: "原料のハーブの上に置いたハーブシャンプー香る髪の袋",
  },
  {
    label: "髪・頭皮のケア",
    to: "/products/atharva",
    hash: "head",
    image: careHead,
    small: careHeadSmall,
    alt: "バナナの葉の上に置いたアタルバのヘアオイル",
  },
  {
    label: "肌のケア",
    to: "/products/atharva",
    hash: "skin",
    image: careSkin,
    small: careSkinSmall,
    alt: "アタルバのフェイスクリーム5種類",
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
        <section className="top-hero" aria-labelledby="home-title">
          {/* 最初の画面は人を置かず商品を主役にする(2026-10-08 の決めごと)。5色の袋から下の仕上がりの色へつなぐ */}
          <img
            className="top-hero-photo"
            src={hero2400}
            srcSet={`${hero1200} 1200w, ${hero2400} 2400w`}
            sizes="100vw"
            alt="ヘナの葉の上に並べたハーバルカラー5色の袋"
            width={2400}
            height={1600}
            fetchPriority="high"
          />
          <div className="top-intro shell">
            <div>
              <h1 id="home-title"><span>インドのヘナと</span><span>アーユルヴェーダのオイル</span></h1>
              <p>
                アートビーングは2003年からインドの産地に通い、髪と肌のケア用品を作っています。
              </p>
            </div>
            <ul className="brand-doors">
              <li>
                <Link to="/products/maharani" className="brand-door">
                  <img src={maharaniLogo} alt="マハラニ" width={718} height={381} />
                  <span>ヘナ・ハーブシャンプー</span>
                  <ArrowRight size={20} aria-hidden />
                </Link>
              </li>
              <li>
                <Link to="/products/atharva" className="brand-door">
                  <strong lang="en">ATHARVA</strong>
                  <span>
                    <span className="sr-only">アタルバ </span>オイル・スキンケア
                  </span>
                  <ArrowRight size={20} aria-hidden />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <HomeColors />
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
                <Link to={care.to} hash={care.hash} className="care-tile">
                  <img
                    src={care.image}
                    srcSet={`${care.small} 600w, ${care.image} 1200w`}
                    sizes="(max-width: 760px) 50vw, 25vw"
                    alt={care.alt}
                    loading="lazy"
                    width={1200}
                    height={1500}
                  />
                  <span className="home-care-label">
                    {care.label}
                    <ArrowRight size={16} aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </nav>
        <section className="home-origin" aria-labelledby="origin-title">
          <div className="shell">
            <div className="quiet-heading">
              <h2 id="origin-title">ヘナが届くまで</h2>
              <Link to="/about" className="quiet-link">
                私たちについて <ArrowRight size={17} />
              </Link>
            </div>
            <figure className="origin-lead">
              <img
                src={fieldImage}
                alt="ヘナ畑で葉を摘む人たち"
                loading="lazy"
                width={1600}
                height={1067}
              />
            </figure>
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
