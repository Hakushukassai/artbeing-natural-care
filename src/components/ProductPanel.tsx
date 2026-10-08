import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Link, useNavigate, useRouter, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { catalogProducts, displayProductName, type CatalogProduct } from "@/data/catalog";
import { details } from "@/data/details";
import { hairColorOf } from "@/data/hair-colors";
import { ProductPhoto } from "./ProductPhoto";

type OpenProduct = (product: CatalogProduct, trigger?: HTMLElement | null) => void;
const ProductPanelContext = createContext<OpenProduct>(() => {});

/** 商品タイルや色見本から、その商品の詳細パネルを開く。 */
export const useOpenProduct = () => useContext(ProductPanelContext);

/**
 * 詳細パネルはページに1つだけ置き、開いている商品を URL の `?item=` で表す。
 * 「戻る」でパネルだけが閉じ、URL を共有すれば同じ商品が開いた状態で表示される。
 */
export function ProductPanelProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const router = useRouter();
  const item = useRouterState({ select: (state) => state.location.search.item });
  // 静的に書き出した HTML と食い違わないよう、URL の商品は読み込み後に開く。
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const current = hydrated && item ? catalogProducts.find((p) => p.id === item) : undefined;
  // 閉じる動きの間も中身を残す
  const [shown, setShown] = useState<CatalogProduct>();
  useEffect(() => {
    if (current) setShown(current);
  }, [current]);
  const pushed = useRef(false);
  const trigger = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!current) pushed.current = false;
  }, [current]);

  const open = useCallback<OpenProduct>(
    (product, from) => {
      trigger.current = from ?? null;
      pushed.current = true;
      void navigate({
        to: ".",
        search: (prev) => ({ ...prev, item: product.id }),
        hash: (prev) => prev ?? "",
        resetScroll: false,
        hashScrollIntoView: false,
      });
    },
    [navigate],
  );

  function close() {
    // サイト内で開いたときは履歴を1つ戻し、「戻る」の回数が増えないようにする
    if (pushed.current) {
      pushed.current = false;
      router.history.back();
      return;
    }
    void navigate({
      to: ".",
      search: ({ item: _item, ...rest }) => rest,
      hash: (prev) => prev ?? "",
      replace: true,
      resetScroll: false,
      hashScrollIntoView: false,
    });
  }

  return (
    <ProductPanelContext.Provider value={open}>
      {children}
      <Sheet open={!!current} onOpenChange={(value) => !value && close()}>
        <SheetContent
          className="product-focus-sheet w-full sm:max-w-xl"
          onCloseAutoFocus={(event) => {
            if (!trigger.current?.isConnected) return;
            event.preventDefault();
            trigger.current.focus({ preventScroll: true });
          }}
        >
          {shown && <ProductPanelBody product={shown} />}
        </SheetContent>
      </Sheet>
    </ProductPanelContext.Provider>
  );
}

function ProductPanelBody({ product }: { product: CatalogProduct }) {
  const { item, brand, category } = product;
  const color = hairColorOf(item.name);
  const detail = item.to ? details[item.to.split("/").pop() as keyof typeof details] : undefined;
  return (
    <>
      <p className="product-focus-brand">
        {brand.reading}
        <span>{brand.name}</span>
      </p>
      <SheetTitle className="product-focus-title">{displayProductName(item.name)}</SheetTitle>
      <p className="product-focus-category">
        {color ? (
          <>
            <span className="product-swatch" style={{ background: color.color }} aria-hidden />
            仕上がりの目安は{color.name}
          </>
        ) : (
          category.ja
        )}
      </p>
      <div className="product-focus-photo">
        <ProductPhoto
          src={item.image ?? category.image}
          alt={`${item.name}の商品写真`}
          variant="detail"
        />
      </div>
      <SheetDescription className="product-focus-description">{item.desc}</SheetDescription>
      {detail && (
        <dl className="product-focus-facts">
          {detail.facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
      <a
        href={item.shopUrl}
        target="_blank"
        rel="noreferrer"
        className="button button-primary product-focus-buy"
      >
        公式ストアで見る <ArrowUpRight size={17} />
        <span className="sr-only">（新しいタブ）</span>
      </a>
      <p className="product-focus-note">価格・容量・全成分は公式ストアでご確認ください。</p>
      {item.to && (
        <Link to={item.to} className="product-focus-more">
          使い方・詳しい商品情報
        </Link>
      )}
      <p className="product-focus-caution">
        ご使用前に説明書とパッチテストの案内をご確認ください。
      </p>
      <p className="product-focus-note">写真は容量・パッケージの一例です。</p>
    </>
  );
}
