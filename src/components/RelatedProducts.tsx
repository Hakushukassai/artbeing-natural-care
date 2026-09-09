import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import hennaImg from "@/assets/product-henna.jpg";
import indigoImg from "@/assets/product-indigo.jpg";
import shampooImg from "@/assets/product-shampoo.jpg";

type Slug = "henna" | "indigo" | "shampoo";

const all: Record<Slug, { name: string; en: string; img: string; tone: string; bg: string }> = {
  henna: { name: "マハラニヘナ 石臼挽き", en: "Stone-milled Henna", img: hennaImg, tone: "text-terracotta", bg: "bg-terracotta-soft/25" },
  indigo: { name: "インディゴ", en: "Pure Indigo", img: indigoImg, tone: "text-indigo-deep", bg: "bg-indigo-deep/10" },
  shampoo: { name: "ハーブシャンプー 香る髪", en: "Kaoru-Kami Shampoo", img: shampooImg, tone: "text-leaf", bg: "bg-leaf-soft/40" },
};

export function RelatedProducts({ exclude }: { exclude: Slug }) {
  const items = (Object.keys(all) as Slug[]).filter((k) => k !== exclude);
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="eyebrow-en text-leaf mb-3">こちらもどうぞ</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-xl md:text-[1.4rem] font-light mb-12">あわせて使われている製品</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {items.map((slug, i) => {
            const p = all[slug];
            return (
              <Reveal key={slug} delay={i * 120}>
                <Link to={`/products/${slug}`} className="group block">
                  <div className={`hover-zoom rounded-[1.8rem] ${p.bg}`}>
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div className="mt-6">
                    <p className={`eyebrow-en mb-2 ${p.tone}`}>{p.en}</p>
                    <h3 className="text-lg font-light mb-3">{p.name}</h3>
                    <span className={`inline-flex items-center gap-2 text-[0.9rem] ${p.tone} border-b border-current/40 pb-0.5`}>
                      詳しく見る <span className="hover-arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
