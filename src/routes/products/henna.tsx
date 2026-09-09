import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "@/components/ProductDetail";
import { details } from "@/data/details";
import { pageMeta } from "@/data/site";
export const Route = createFileRoute("/products/henna")({
  component: () => <ProductDetail id="henna" />,
  head: () => pageMeta(details.henna.name, details.henna.description),
});
