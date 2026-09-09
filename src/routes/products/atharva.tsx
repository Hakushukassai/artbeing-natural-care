import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BrandCatalog } from "@/components/BrandCatalog";
import { atharva, maharani } from "@/data/products";
import { pageMeta } from "@/data/site";
export const Route = createFileRoute("/products/atharva")({
  component: () => (
    <>
      <Header />
      <BrandCatalog brand={atharva} other={maharani} />
      <Footer />
    </>
  ),
  head: () =>
    pageMeta(
      "アタルバの商品｜髪・肌・全身のケア",
      "伝統のアーユルヴェーダ製法を大切にしたアタルバ。ヘアオイル、マッサージオイル、クリーム、フェイスパックをご紹介します。",
    ),
});
