import { brand, nav } from "@/content/site";
import ButtonLink from "./ButtonLink";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="font-serif text-lg font-medium tracking-tight transition-colors hover:text-accent"
        >
          {brand.name}
        </a>

        {/* 手機版空間有限，導覽連結收起來，只保留品牌與主要 CTA */}
        <nav aria-label="主要導覽" className="hidden md:block">
          <ul className="flex items-center gap-9 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink href="#contact" size="md">
          預約諮詢
        </ButtonLink>
      </div>
    </header>
  );
}
