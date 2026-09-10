import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { displayProductName, type CatalogProduct } from "@/data/catalog";
import { ProductPhoto } from "./ProductPhoto";

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
  const [selected, setSelected] = useState<CatalogProduct | null>(null);
  const [open, setOpen] = useState(false);
  const returnFocus = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-tile" key={product.id} data-product-name={product.item.name}>
            <button
              className="product-tile-button"
              aria-label={`${product.item.name}の詳細`}
              aria-haspopup="dialog"
              onClick={(event) => {
                returnFocus.current = event.currentTarget;
                setSelected(product);
                setOpen(true);
              }}
            >
              <ProductPhoto src={product.item.image ?? product.category.image} />
              {showBrand && (
                <span className={`product-tile-brand ${product.brand.key}`}>
                  {product.brand.reading}
                </span>
              )}
              <Heading>{displayProductName(product.item.name)}</Heading>
            </button>
          </article>
        ))}
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          className="product-focus-sheet w-full sm:max-w-xl"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            returnFocus.current?.focus({ preventScroll: true });
          }}
        >
          {selected && (
            <>
              <p className="product-focus-brand">
                {selected.brand.reading}
                <span>{selected.brand.name}</span>
              </p>
              <SheetTitle className="product-focus-title">
                {displayProductName(selected.item.name)}
              </SheetTitle>
              <p className="product-focus-category">{selected.category.ja}</p>
              <div className="product-focus-photo">
                <ProductPhoto
                  src={selected.item.image ?? selected.category.image}
                  alt={`${selected.item.name}の商品写真`}
                  variant="detail"
                />
              </div>
              <SheetDescription className="product-focus-description">
                {selected.item.desc}
              </SheetDescription>
              <a
                href={selected.item.shopUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-primary product-focus-buy"
              >
                公式ストアで見る <ArrowUpRight size={17} />
                <span className="sr-only">（新しいタブ）</span>
              </a>
              <p className="product-focus-note">価格・容量・全成分は公式ストアでご確認ください。</p>
              {selected.item.to && (
                <Link
                  to={selected.item.to}
                  className="product-focus-more"
                  onClick={() => setOpen(false)}
                >
                  使い方・詳しい商品情報
                </Link>
              )}
              <p className="product-focus-caution">
                ご使用前に説明書とパッチテストの案内をご確認ください。
              </p>
              <p className="product-focus-note">写真は容量・パッケージの一例です。</p>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
