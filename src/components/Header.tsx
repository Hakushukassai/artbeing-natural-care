import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  { to: "/products/maharani", label: "マハラニ" },
  { to: "/products/atharva", label: "アタルバ" },
  { to: "/products", label: "商品一覧" },
  { to: "/guide", label: "はじめての方へ" },
  { to: "/about", label: "私たちについて" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <div className="header-inner">
        <Link to="/" className="wordmark" aria-label="アートビーング トップページ">
          <span>
            artbeing<span className="wordmark-dot">.</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/products" }}
              activeProps={{ className: "is-active" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a href="https://maharani.jp/" target="_blank" rel="noreferrer" className="shop-link">
            <ShoppingBag size={17} strokeWidth={1.5} />
            <span>公式オンラインストア</span>
            <ArrowUpRight size={15} />
            <span className="sr-only">（新しいタブで開きます）</span>
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="menu-button" aria-label="メニューを開く">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              className="mobile-menu w-full sm:max-w-md"
              aria-describedby="menu-description"
            >
              <SheetTitle className="menu-title">artbeing.</SheetTitle>
              <SheetDescription id="menu-description" className="sr-only">
                商品・使い方・会社情報のメニュー
              </SheetDescription>
              <nav aria-label="モバイルナビゲーション">
                {links.map((l) => (
                  <SheetClose asChild key={l.to}>
                    <Link to={l.to}>
                      <span>{l.label}</span>
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link to="/faq">
                    <span>よくあるご質問</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/company">
                    <span>会社情報・お問い合わせ</span>
                  </Link>
                </SheetClose>
              </nav>
              <a
                className="button button-primary"
                href="https://maharani.jp/"
                target="_blank"
                rel="noreferrer"
              >
                公式オンラインストア <ArrowUpRight size={18} />
                <span className="sr-only">（新しいタブ）</span>
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
