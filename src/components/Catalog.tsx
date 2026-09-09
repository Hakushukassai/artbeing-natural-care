import { useRef, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { brands, type Brand } from "@/data/products";
import { filterProducts } from "@/data/catalog";
import { ProductGrid } from "./ProductGrid";

export function Catalog({ brand }: { brand?: Brand }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [brandKey, setBrandKey] = useState("all");
  const [groupKey, setGroupKey] = useState("all");
  const hash = useRouterState({ select: (state) => state.location.hash });
  const input = useRef<HTMLInputElement>(null);
  const currentBrand = brand?.key ?? brandKey;
  const currentGroup = brand
    ? brand.groups.some((group) => group.id === hash)
      ? hash
      : "all"
    : groupKey;
  const groups = brands
    .filter((b) => currentBrand === "all" || b.key === currentBrand)
    .flatMap((b) => b.groups);
  const filtered = filterProducts({ brand: currentBrand, group: currentGroup, query });
  const hasFilters = query || currentGroup !== "all" || (!brand && brandKey !== "all");
  function selectGroup(value: string) {
    if (brand)
      void navigate({
        to: brand.path,
        hash: value === "all" ? "collection" : value,
        resetScroll: false,
      });
    else setGroupKey(value);
  }
  function clear() {
    setQuery("");
    setBrandKey("all");
    setGroupKey("all");
    if (brand) void navigate({ to: brand.path, hash: "collection", resetScroll: false });
    input.current?.focus();
  }
  return (
    <section
      id={currentGroup === "all" ? "collection" : currentGroup}
      className="product-catalog shell"
      aria-label="商品一覧"
    >
      <div className="product-controls">
        {!brand && (
          <ToggleGroup
            type="single"
            value={brandKey}
            onValueChange={(value) => {
              if (value) {
                setBrandKey(value);
                setGroupKey("all");
              }
            }}
            className="product-brand-switch"
            aria-label="ブランドを選ぶ"
          >
            <ToggleGroupItem value="all">すべて</ToggleGroupItem>
            <ToggleGroupItem value="maharani">マハラニ</ToggleGroupItem>
            <ToggleGroupItem value="atharva">アタルバ</ToggleGroupItem>
          </ToggleGroup>
        )}
        <div className="product-tools">
          <Select value={currentGroup} onValueChange={selectGroup}>
            <SelectTrigger className="product-purpose-select" aria-label="用途で絞り込む">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="product-purpose-options">
              <SelectItem value="all">すべての用途</SelectItem>
              {groups.map((group) => (
                <SelectItem key={group.id} value={group.id}>
                  {group.ja}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="product-search">
            <Search size={17} />
            <input
              type="search"
              ref={input}
              aria-label="商品を検索"
              placeholder="商品を検索"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button
                aria-label="検索語を消す"
                onClick={() => {
                  setQuery("");
                  input.current?.focus();
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="product-results">
        <p role="status" aria-live="polite">
          {filtered.length} 商品
        </p>
        {hasFilters && (
          <button onClick={clear}>
            絞り込みを解除 <X size={14} />
          </button>
        )}
      </div>
      {filtered.length ? (
        <ProductGrid products={filtered} showBrand={!brand} />
      ) : (
        <div className="product-empty">
          <p>該当する商品がありません。</p>
          <button className="product-focus-more" onClick={clear}>
            条件を解除する
          </button>
        </div>
      )}
    </section>
  );
}
