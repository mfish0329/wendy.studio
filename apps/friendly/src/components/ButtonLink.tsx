import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: "md" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-bold " +
  "transition-[transform,background-color,border-color,color,box-shadow] duration-200 " +
  "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] whitespace-nowrap";

/* 亮天藍配深藍字，對比 5.5:1（AA 通過）。
   直接用亮藍配白字只有 2.2:1，看起來清爽但實際上讀不清楚。 */
const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-fg shadow-[0_10px_24px_-10px_rgba(56,189,248,0.9)] hover:bg-accent-soft",
  secondary:
    "border-2 border-accent/60 bg-bg text-accent-strong hover:border-accent hover:bg-surface",
  ghost: "text-muted hover:text-accent-strong",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  // 外部連結（含 mailto / LINE）補上安全屬性
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(isExternal && href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : null)}
      {...rest}
    >
      {children}
    </a>
  );
}
