import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <div>
            <Link to="/" className="wordmark" aria-label="アートビーング トップページ">
              <span>artbeing.</span>
            </Link>
            <p>株式会社アートビーング</p>
          </div>
          <nav aria-label="商品">
            <Link to="/products/maharani">マハラニ</Link>
            <Link to="/products/atharva">アタルバ</Link>
            <Link to="/products">商品一覧</Link>
          </nav>
          <nav aria-label="ご案内">
            <Link to="/about">私たちについて</Link>
            <Link to="/guide">はじめての方へ・使い方</Link>
            <Link to="/company">会社情報</Link>
          </nav>
          <nav aria-label="ご購入・サポート" id="contact">
            <a href={site.shop} target="_blank" rel="noreferrer">
              公式オンラインストア <ArrowUpRight size={15} />
              <span className="sr-only">（新しいタブ）</span>
            </a>
            <Link to="/faq">よくあるご質問</Link>
            <a href={site.contact} target="_blank" rel="noreferrer">
              お問い合わせ <ArrowUpRight size={15} />
              <span className="sr-only">（新しいタブ）</span>
            </a>
          </nav>
        </div>
        <p className="image-notice">
          掲載画像はAI生成の仮画像です。実際の商品・パッケージとは異なります。
        </p>
        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} ARTBEING INC.</small>
          <div>
            <a href={site.legal} target="_blank" rel="noreferrer">
              特定商取引法に基づく表記 <ArrowUpRight size={12} />
            </a>
            <a href={site.privacy} target="_blank" rel="noreferrer">
              プライバシーポリシー <ArrowUpRight size={12} />
            </a>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "instant"
                    : "smooth",
                })
              }
              aria-label="ページの先頭へ戻る"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
