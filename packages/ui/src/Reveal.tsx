"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

export type RevealProps = {
  children: ReactNode;
  /** 延遲秒數，用來讓同一排的卡片依序出現 */
  delay?: number;
  className?: string;
  /** 預設渲染成 div，需要語意標籤時可換成 li、article 等 */
  as?: ElementType;
};

/**
 * 捲動到可視範圍時才淡入。四個版型共用這一份行為邏輯，
 * 實際的隱藏與動畫樣式由各站自己的 globals.css 定義（`.js [data-reveal]`），
 * 因此關閉 JavaScript 時內容仍然完整可見。
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-revealed", "");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute("data-revealed", "");
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={delay ? { animationDelay: `${delay}s` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
