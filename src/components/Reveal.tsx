import { useEffect, useRef, type ElementType, type ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
  as?: "fade-up" | "fade-in" | "zoom-in";
  delay?: number;
  tag?: ElementType;
};
export function Reveal({
  children,
  className = "",
  as = "fade-up",
  delay = 0,
  tag: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    // Content is visible without JavaScript. Only arm elements below the viewport.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -25px 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      delete el.dataset.reveal;
    };
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-effect={as}
      style={{ "--reveal-delay": `${Math.min(delay, 240)}ms` }}
    >
      {children}
    </Tag>
  );
}
