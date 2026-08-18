import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: "md" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold " +
  "transition-[transform,background-color,box-shadow,color] duration-200 " +
  "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-bright text-white shadow-[0_10px_24px_-12px_rgba(225,29,72,0.9)] hover:bg-accent",
  secondary: "border-2 border-fg/15 bg-bg text-fg hover:border-fg/40",
  ghost: "text-muted hover:text-accent",
  // 深色 CTA 區塊上的按鈕，需要反轉配色才看得見
  inverse: "bg-white text-fg hover:bg-accent-soft",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-4 text-base",
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
