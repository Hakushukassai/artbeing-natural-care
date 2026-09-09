import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
export function Breadcrumbs({
  items,
}: {
  items: { label: string; to?: "/" | "/products" | "/products/maharani" | "/products/atharva" }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="パンくずリスト">
      <Link to="/">ホーム</Link>
      {items.map((i, index) => (
        <span key={index}>
          <ChevronRight size={12} />
          {i.to ? <Link to={i.to}>{i.label}</Link> : <span aria-current="page">{i.label}</span>}
        </span>
      ))}
    </nav>
  );
}
export function PageIntro({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className="page-intro shell">
      <Breadcrumbs items={[{ label: title }]} />
      <h1>{title}</h1>
      {children && <div className="page-intro-description">{children}</div>}
    </section>
  );
}
