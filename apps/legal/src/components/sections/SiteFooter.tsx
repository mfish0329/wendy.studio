import { brand, contact, footer } from "@/content/site";

export default function SiteFooter() {
  // 靜態產生的頁面會在 build 時決定年份，重新部署即會更新
  const currentYear = new Date().getFullYear();
  const yearLabel =
    currentYear > footer.since
      ? `${footer.since}–${currentYear}`
      : `${currentYear}`;

  return (
    <footer className="bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-serif text-lg font-medium tracking-tight">
            {brand.name}
          </p>
          <p className="mt-4 text-sm leading-[1.9] text-muted">
            {footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <p className="text-xs tracking-[0.25em] text-muted uppercase">
            聯絡我們
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="text-muted transition-colors hover:text-accent"
          >
            {contact.email}
          </a>
          {contact.line ? (
            <a
              href={contact.line.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              LINE {contact.line.label}
            </a>
          ) : null}
          {contact.booking ? (
            <a
              href={contact.booking.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              {contact.booking.label}
            </a>
          ) : null}
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-7 text-xs text-muted sm:px-8">
          © {yearLabel} {brand.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
