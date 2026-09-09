import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Droplets, Info, BookOpen } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./PageIntro";
import { Reveal } from "./Reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { details, type DetailKey } from "@/data/details";
import { site } from "@/data/site";
export function ProductDetail({ id }: { id: DetailKey }) {
  const p = details[id];
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "商品一覧", to: "/products" },
              { label: "マハラニ", to: "/products/maharani" },
              { label: p.name },
            ]}
          />
        </div>
        <section className={`detail-hero shell detail-${id}`}>
          <div className="detail-photo">
            <img
              src={p.image}
              alt={`${p.name}の原料・ケアイメージ`}
              fetchPriority="high"
              width={900}
              height={1100}
            />
            <small>原料・ケアのイメージ</small>
          </div>
          <div className="detail-summary">
            <Link className="detail-brand" to="/products/maharani">
              Maharani <span>マハラニ</span>
            </Link>
            <h1>{p.name}</h1>
            <p>{p.description}</p>
            <dl className="detail-facts">
              {p.facts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <a href={p.shop} target="_blank" rel="noreferrer" className="button button-primary">
              公式ストアで購入する <ArrowUpRight size={19} />
              <span className="sr-only">（新しいタブ）</span>
            </a>
            <p className="purchase-note">価格・容量・在庫は公式ストアでご確認ください。</p>
            <Link to="/guide" hash={p.guide} className="text-link">
              <BookOpen size={16} />
              使い方を見る <ArrowRight size={17} />
            </Link>
          </div>
        </section>
        <nav className="detail-nav shell" aria-label="商品情報の目次">
          <a href="#features">商品の特長</a>
          <a href="#before-use">ご使用の前に</a>
          <a href="#product-faq">よくあるご質問</a>
        </nav>
        <section id="features" className="section shell">
          <div className="section-heading">
            <div>
              <h2>商品の特長</h2>
            </div>
          </div>
          <div className="detail-features">
            {p.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="before-use" className="before-use shell">
          <div>
            <Info size={24} strokeWidth={1.4} />
            <h2>ご使用の前に</h2>
          </div>
          <div>
            <p>{p.notes}</p>
            <p>
              天然の原料でも、体質によってアレルギーが起こる場合があります。ご使用前には商品に付属する説明書を読み、指定の方法でパッチテストを行ってください。
            </p>
            <a href={site.contact} target="_blank" rel="noreferrer" className="text-link">
              使い方・サンプルについて相談する <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
        <section id="product-faq" className="section shell detail-faq">
          <div>
            <h2>よくあるご質問</h2>
            <Link to="/faq" className="text-link">
              よくあるご質問をすべて見る <ArrowRight size={17} />
            </Link>
          </div>
          <Accordion type="single" collapsible>
            {p.faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="faq-trigger">
                  <span>
                    <em>Q</em>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="faq-answer">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section className="related-section">
          <div className="shell">
            <h2>関連商品</h2>
            <div className="related-grid">
              {Object.entries(details)
                .filter(([key]) => key !== id)
                .map(([key, d]) => (
                  <Link
                    key={key}
                    to={
                      `/products/${key}` as
                        | "/products/henna"
                        | "/products/indigo"
                        | "/products/shampoo"
                    }
                  >
                    <img src={d.image} alt="" loading="lazy" width={200} height={200} />
                    <div>
                      <small>Maharani</small>
                      <h3>{d.name}</h3>
                    </div>
                    <ArrowRight size={20} />
                  </Link>
                ))}
              <Link to="/products/atharva" hash="head" className="related-oil">
                <Droplets size={30} strokeWidth={1.2} />
                <div>
                  <small>Atharva</small>
                  <h3>髪と頭皮のオイルケア</h3>
                </div>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
