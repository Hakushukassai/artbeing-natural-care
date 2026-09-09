import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqGroups } from "@/data/faqs";
import { normalizeQuery } from "@/data/products";
import { pageMeta, site } from "@/data/site";
export const Route = createFileRoute("/faq")({
  component: Faq,
  head: () =>
    pageMeta(
      "よくあるご質問",
      "マハラニとアタルバの商品選び・使い方・パッチテスト・購入についてのご質問を、カテゴリーやキーワードから探せます。",
    ),
});
function Faq() {
  const [group, setGroup] = useState("all");
  const [query, setQuery] = useState("");
  const filtered = faqGroups
    .filter((g) => group === "all" || g.id === group)
    .map((g) => ({
      ...g,
      items: g.items.filter((f) => normalizeQuery(f.q + f.a).includes(normalizeQuery(query))),
    }))
    .filter((g) => g.items.length);
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageIntro title="よくあるご質問" />
        <section className="faq-layout shell">
          <aside>
            <div className="catalog-search">
              <Search size={17} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="質問を検索"
                placeholder="気になる言葉で検索"
              />
              {query && (
                <button aria-label="検索をクリア" onClick={() => setQuery("")}>
                  <X size={16} />
                </button>
              )}
            </div>
            <nav aria-label="質問のカテゴリー">
              {[{ id: "all", label: "すべてのご質問" }, ...faqGroups].map((g) => (
                <button
                  key={g.id}
                  className={group === g.id ? "selected" : ""}
                  aria-pressed={group === g.id}
                  onClick={() => setGroup(g.id)}
                >
                  {g.label}
                  <ArrowRight size={15} />
                </button>
              ))}
            </nav>
          </aside>
          <div>
            <p className="faq-result-count" role="status">
              {filtered.reduce((n, g) => n + g.items.length, 0)} 件のご質問
            </p>
            {filtered.map((g) => (
              <div key={g.id} className="faq-group">
                <h2>{g.label}</h2>
                <Accordion type="multiple">
                  {g.items.map((f, i) => (
                    <AccordionItem key={f.q} value={`${g.id}-${i}`}>
                      <AccordionTrigger className="faq-trigger">
                        <span>
                          <em>Q</em>
                          {f.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="faq-answer">
                        <p>{f.a}</p>
                        {"to" in f && f.to && (
                          <Link
                            to={f.to}
                            hash={"hash" in f ? f.hash : undefined}
                            className="text-link"
                          >
                            詳しい案内を見る <ArrowRight size={16} />
                          </Link>
                        )}
                        {"url" in f && f.url && (
                          <a href={f.url} target="_blank" rel="noreferrer" className="text-link">
                            公式の案内を見る <ArrowUpRight size={16} />
                          </a>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
            {!filtered.length && (
              <div className="empty-state">
                <Search size={30} />
                <h3>該当するご質問が見つかりませんでした。</h3>
                <p>別のキーワードでお試しください。</p>
                <button
                  className="button button-outline"
                  onClick={() => {
                    setQuery("");
                    setGroup("all");
                  }}
                >
                  すべてのご質問を表示 <ArrowRight size={16} />
                </button>
              </div>
            )}
            <div className="faq-contact">
              <h3>解決しない場合</h3>
              <p>使い方や商品選びは、公式窓口でご相談いただけます。</p>
              <a
                href={site.contact}
                className="button button-primary"
                target="_blank"
                rel="noreferrer"
              >
                お問い合わせ <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
