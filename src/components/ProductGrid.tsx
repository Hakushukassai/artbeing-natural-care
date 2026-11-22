import { displayProductName, type CatalogProduct } from "@/data/catalog";
import { hairColorOf } from "@/data/hair-colors";
import { ProductPhoto } from "./ProductPhoto";
import { useOpenProduct } from "./ProductPanel";

export function ProductGrid({
  products,
  showBrand = true,
  headingLevel = 3,
}: {
  products: CatalogProduct[];
  showBrand?: boolean;
  headingLevel?: 3 | 4;
}) {
  const Heading = headingLevel === 4 ? "h4" : "h3";
  const openProduct = useOpenProduct();
  return (
    <div className="product-grid">
      {products.map((product) => {
        const color = hairColorOf(product.item.name);
        return (
          <article className="product-tile" key={product.id} data-product-name={product.item.name}>
            <button
              className="product-tile-button"
              aria-label={`${product.item.name}の詳細`}
              aria-haspopup="dialog"
              onClick={(event) => openProduct(product, event.currentTarget)}
            >
              <span className="product-tile-photo">
                <ProductPhoto src={product.item.image ?? product.category.image} />
              </span>
              {showBrand && (
                <span className={`product-tile-brand ${product.brand.key}`}>
                  {product.brand.name}
                </span>
              )}
              <Heading>{displayProductName(product.item.name)}</Heading>
              {/* 仕上がりの色は、染めた毛束の写真と色の名前で商品名の下に出す */}
              {color && (
                <span className="product-tone">
                  <img className="product-tone-hair" src={color.photo} alt="" width={40} height={18} />
                  {color.name}
                </span>
              )}
            </button>
          </article>
        );
      })}
    </div>
  );
}
