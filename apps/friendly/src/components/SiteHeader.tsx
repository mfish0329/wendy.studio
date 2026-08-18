import { brand, nav } from "@/content/site";
import ButtonLink from "./ButtonLink";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-base font-extrabold tracking-tight transition-colors hover:text-accent-strong"
        >
          <span
            aria-hidden
            className="flex size-8 items-center justify-center rounded-pill bg-accent text-sm text-fg"
          >
            ☁
          </span>
          {brand.name}
        </a>

        {/* 手機版空間有限，導覽連結收起來，只保留品牌與主要 CTA */}
        <nav aria-label="主要導覽" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-bold text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-pill px-2 py-1 transition-colors hover:bg-surface hover:text-accent-strong"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink href="#contact" size="md">
          聊聊看
        </ButtonLink>
      </div>
    </header>
  );
}
