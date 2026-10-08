import { useEffect, useRef, type CSSProperties } from "react";
import { productPhotoFrames } from "@/data/product-photo-frames";

export function ProductPhoto({
  src,
  alt = "",
  variant = "tile",
  priority = false,
}: {
  src: string;
  alt?: string;
  variant?: "tile" | "detail" | "related";
  priority?: boolean;
}) {
  const frame = productPhotoFrames[src];
  const img = useRef<HTMLImageElement>(null);
  // 読み込み中だけ写真を隠し、届いたらふわっと出す。JavaScript がなければ常に見える。
  useEffect(() => {
    const el = img.current;
    if (!el || el.complete) return;
    el.dataset.loading = "";
    const done = () => delete el.dataset.loading;
    el.addEventListener("load", done);
    el.addEventListener("error", done);
    return () => {
      el.removeEventListener("load", done);
      el.removeEventListener("error", done);
      done();
    };
  }, [src]);
  return (
    <div className={`product-photo product-photo-${variant}`}>
      <div
        className="product-photo-subject"
        style={{ "--photo-ratio": frame ? frame.width / frame.height : 0.8 } as CSSProperties}
      >
        <img
          ref={img}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          width={frame?.imageWidth ?? 600}
          height={frame?.imageHeight ?? 750}
          style={
            frame
              ? {
                  width: `${(frame.imageWidth / frame.width) * 100}%`,
                  height: `${(frame.imageHeight / frame.height) * 100}%`,
                  left: `${(-frame.left / frame.width) * 100}%`,
                  top: `${(-frame.top / frame.height) * 100}%`,
                }
              : undefined
          }
        />
      </div>
    </div>
  );
}
