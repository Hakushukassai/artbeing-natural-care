import { brands, normalizeQuery, type Brand, type Category, type Item } from "./products";

export type CatalogProduct = {
  id: string;
  item: Item;
  brand: Brand;
  category: Category;
  groupId: string;
  groupName: string;
};

export const catalogProducts: CatalogProduct[] = brands.flatMap((brand) =>
  brand.groups.flatMap((group) =>
    group.categories.flatMap((category) =>
      category.items.map((item, index) => ({
        id: `${brand.key}-${category.id}-${index}`,
        item,
        brand,
        category,
        groupId: group.id,
        groupName: group.ja,
      })),
    ),
  ),
);

export function filterProducts({
  brand = "all",
  group = "all",
  query = "",
}: {
  brand?: string;
  group?: string;
  query?: string;
}) {
  const terms = query.trim().split(/\s+/).map(normalizeQuery).filter(Boolean);
  return catalogProducts.filter((product) => {
    if (brand !== "all" && product.brand.key !== brand) return false;
    if (group !== "all" && product.groupId !== group) return false;
    const text = normalizeQuery(
      [
        product.item.name,
        product.item.desc,
        product.category.ja,
        product.groupName,
        product.brand.name,
        product.brand.reading,
      ].join(" "),
    );
    return terms.every((term) => text.includes(term));
  });
}

export const displayProductName = (name: string) => name.replace(/^(マハラニ|アタルバ)\s*/, "");
