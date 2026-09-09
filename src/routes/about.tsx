import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Leaf, HandHeart, Sprout } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { BrandPair } from "@/components/BrandPair";
import { pageMeta, site } from "@/data/site";
import hero from "@/assets/natural-care-hero-1440.webp";
export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    pageMeta(
      "私たちの想い",
      "原料を知る、つくる人を知る。株式会社アートビーングが、マハラニとアタルバを通してお届けするナチュラルケアの背景。",
    ),
});
function About() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageIntro title="私たちについて" />
        <div className="about-landscape shell">
          <img
            src={hero}
            alt="葉とハーブの粉末、オイルのイメージ"
            width={1536}
            height={1024}
            fetchPriority="high"
          />
        </div>
        <section className="section shell about-story">
          <Reveal>
            <h2>原料と製法</h2>
            <span className="about-year">Since 2003</span>
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
        <section className="philosophy-values">
          <div className="shell">
            <h2>大切にしていること</h2>
            <div>
              {[
                {
                  Icon: Sprout,
                  title: "産地を知る",
                  text: "ヘナの産地で生産者とつながり、葉の買い付けや製造を確認。届くまでの背景を大切にします。",
                },
                {
                  Icon: HandHeart,
                  title: "製法を大切にする",
                  text: "石臼で挽くヘナ、アーユルヴェーダ製法のオイル。素材に合う方法を大切にしたケアを届けます。",
                },
                {
                  Icon: Leaf,
                  title: "商品情報を伝える",
                  text: "配合も、使い方も、ひとつずつ。植物由来であっても体質に合わない場合があることまで、丁寧にお伝えします。",
                },
              ].map(({ Icon, ...v }, i) => (
                <Reveal key={v.title} delay={i * 80}>
                  <Icon size={30} strokeWidth={1.2} />
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </Reveal>
              ))}
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
