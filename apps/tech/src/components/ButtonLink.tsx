import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: "md" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-[transform,background-color,border-color,color] duration-200 " +
  "active:scale-[0.98] whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-bg hover:bg-accent-soft",
  secondary:
    "border border-line bg-surface/60 text-fg hover:border-muted hover:bg-surface",
  ghost: "text-muted hover:text-fg",
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
