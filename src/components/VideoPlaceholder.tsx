type Props = {
  title: string;
  caption?: string;
  /** Optional poster image */
  poster?: string;
  /** TODO: 実際の動画埋め込み時はここに YouTube/Vimeo の URL を渡す */
  embedUrl?: string;
};

/**
 * チュートリアル動画の埋め込み枠（仮組）
 * TODO: 動画が用意できたら embedUrl を渡し、iframe に差し替える。
 */
export function VideoPlaceholder({ title, caption, poster, embedUrl }: Props) {
  if (embedUrl) {
    return (
      <figure className="rounded-[1.5rem] overflow-hidden bg-foreground/5">
        <div className="aspect-video">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
        {caption && (
          <figcaption className="px-5 py-4 text-sm text-muted-foreground">{caption}</figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="rounded-[1.5rem] overflow-hidden bg-leaf-soft/30">
      <div
        className="aspect-video relative flex items-center justify-center"
        style={
          poster
            ? { backgroundImage: `url(${poster})`, backgroundSize: "cover", backgroundPosition: "center" }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative flex flex-col items-center gap-4 text-background">
          <div className="w-16 h-16 rounded-full bg-background/95 flex items-center justify-center shadow-lg">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" className="ml-1">
              <path d="M2 2L20 12L2 22V2Z" fill="hsl(var(--leaf, 142 30% 35%))" stroke="currentColor" strokeWidth="0" />
              <path d="M2 2L20 12L2 22V2Z" className="fill-leaf" />
            </svg>
          </div>
          <p className="eyebrow-en text-background/90">近日公開</p>
          <p className="text-sm text-background/90">チュートリアル動画（準備中）</p>
        </div>
      </div>
      <figcaption className="px-6 py-5">
        <p className="text-base mb-1">{title}</p>
        {caption && <p className="text-sm text-muted-foreground leading-loose">{caption}</p>}
      </figcaption>
    </figure>
  );
}
