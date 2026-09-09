import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "@/components/ProductDetail";
import { details } from "@/data/details";
import { pageMeta } from "@/data/site";
export const Route = createFileRoute("/products/indigo")({
  component: () => <ProductDetail id="indigo" />,
  head: () => pageMeta(details.indigo.name, details.indigo.description),
});
