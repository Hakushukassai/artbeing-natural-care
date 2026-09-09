import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BrandCatalog } from "@/components/BrandCatalog";
import { maharani, atharva } from "@/data/products";
import { pageMeta } from "@/data/site";
export const Route = createFileRoute("/products/maharani")({
  component: () => (
    <>
      <Header />
      <BrandCatalog brand={maharani} other={atharva} />
      <Footer />
    </>
  ),
  head: () =>
    pageMeta(
      "マハラニの商品｜ヘナ・ハーブのヘアケア",
      "ヘナ・インディゴ・ハーブシャンプー・ヘアオイル。マハラニの植物のケアを用途や商品名から探せます。",
    ),
});
