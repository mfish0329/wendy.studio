import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: "md" | "lg";
};

/* 這一站不用圓角、不用位移動畫：正式感來自方正的邊界與克制的 hover。 */
const base =
  "inline-flex items-center justify-center gap-2.5 font-medium " +
  "transition-colors duration-200 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:bg-accent",
  secondary: "border border-line bg-transparent text-fg hover:border-fg",
  ghost: "text-muted underline underline-offset-4 hover:text-accent",
  // 深色區塊（CTA）上的按鈕，需要反轉配色才看得見
  inverse: "bg-bg text-fg hover:bg-accent-soft",
};

const sizes = {
  md: "px-6 py-3 text-sm",
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
