import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "@/components/ProductDetail";
import { details } from "@/data/details";
import { pageMeta } from "@/data/site";
export const Route = createFileRoute("/products/shampoo")({
  component: () => <ProductDetail id="shampoo" />,
  head: () => pageMeta(details.shampoo.name, details.shampoo.description),
});
