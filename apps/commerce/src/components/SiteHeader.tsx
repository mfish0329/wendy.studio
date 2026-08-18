import { brand, nav } from "@/content/site";
import ButtonLink from "./ButtonLink";

export default function SiteHeader() {
  return (
    <>
      {/* 電商網站常見的公告條。這裡放的是實際的合作條件，不是促銷話術。 */}
      <div className="bg-fg px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
        30 分鐘免費估價 · 書面報價、分階段驗收、交付後 30 天保固
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#top"
            className="text-base font-extrabold tracking-tight transition-colors hover:text-accent"
          >
            {brand.name}
          </a>

          {/* 手機版空間有限，導覽連結收起來，只保留品牌與主要 CTA */}
          <nav aria-label="主要導覽" className="hidden md:block">
            <ul className="flex items-center gap-7 text-sm font-medium text-muted">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ButtonLink href="#contact" size="md">
            免費估價
          </ButtonLink>
        </div>
      </header>
    </>
  );
}
