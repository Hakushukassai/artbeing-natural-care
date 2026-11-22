import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { BrandPair } from "@/components/BrandPair";
import { pageMeta, site } from "@/data/site";
import plantingImage from "@/assets/real/planting.jpg";
import farmImage from "@/assets/origin/farm.jpg";
import leaves1200 from "@/assets/photo/about-leaves-1200.webp";
import leaves600 from "@/assets/photo/about-leaves-600.webp";

const values = [
  {
    title: "産地を知る",
    text: "ヘナの産地で生産者とつながり、葉の買い付けや製造を確認。届くまでの背景を大切にします。",
  },
  {
    title: "製法を大切にする",
    text: "石臼で挽くヘナ、アーユルヴェーダ製法のオイル。素材に合う方法を大切にしたケアを届けます。",
  },
  {
    title: "商品情報を伝える",
    text: "配合と使い方を商品ごとにお伝えします。植物由来でも体質に合わない場合があることも書いています。",
  },
];
export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    pageMeta(
      "私たちについて",
      "株式会社アートビーングは2003年からインドの産地に通い、マハラニのヘナとアタルバのオイルを作っています。原料と製法、大切にしていることをご紹介します。",
    ),
});
function About() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageIntro title="私たちについて" />
        {/* 公式サイトに掲載している産地の写真。元の大きさを超えて広げないよう2枚を並べる */}
        <div className="about-landscape shell">
          <figure>
            <img
              src={plantingImage}
              alt="ヘナの苗を植える人たち"
              width={778}
              height={520}
              fetchPriority="high"
            />
            <figcaption>2010年、アートビーングのヘナの植樹</figcaption>
          </figure>
          <figure>
            <img src={farmImage} alt="ヘナの枝を持つ二人" width={800} height={636} />
            <figcaption>インドの契約農園</figcaption>
          </figure>
        </div>
        <section className="section shell about-story">
          <Reveal>
            <h2>原料と製法</h2>
            <span className="about-year">2003年から</span>
          </Reveal>
          <Reveal>
            <p>
              マハラニのヘナは、インド・ラジャスタン州ソジャットの現地提携企業で製造。収穫の時期には代表が現地に渡り、原料や製造を確認します。
            </p>
            <p>
              そして、インドのアーユルヴェーダ製法を大切にしたアタルバ。オイル、クリーム、ハーブの粉末を通じて、髪と肌をいたわる習慣をご紹介しています。
            </p>
            <a href={site.company} target="_blank" rel="noreferrer" className="text-link">
              公式のものづくり・会社案内 <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </section>
        <section className="about-values">
          <div className="shell">
            <figure>
              <img
                src={leaves600}
                srcSet={`${leaves600} 600w, ${leaves1200} 1200w`}
                sizes="(max-width: 760px) 100vw, 40vw"
                alt="乾燥させたヘナの葉を両手にのせて確かめている"
                loading="lazy"
                width={1200}
                height={1500}
              />
              <figcaption>乾燥させたヘナの葉(インド・ソジャット)</figcaption>
            </figure>
            <div>
              <h2>大切にしていること</h2>
              <dl>
                {values.map((v) => (
                  <div key={v.title}>
                    <dt>{v.title}</dt>
                    <dd>{v.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
        <section className="section shell">
          <div className="section-heading">
            <div>
              <h2>ブランド</h2>
            </div>
            <Link to="/products" className="text-link">
              商品一覧 <ArrowRight size={18} />
            </Link>
          </div>
          <BrandPair />
        </section>
      </main>
      <Footer />
    </>
  );
}
