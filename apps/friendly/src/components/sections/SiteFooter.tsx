import { brand, contact, footer } from "@/content/site";

export default function SiteFooter() {
  // 靜態產生的頁面會在 build 時決定年份，重新部署即會更新
  const currentYear = new Date().getFullYear();
  const yearLabel =
    currentYear > footer.since
      ? `${footer.since}–${currentYear}`
      : `${currentYear}`;

  return (
    <footer className="border-t-2 border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="flex items-center gap-2 text-base font-extrabold tracking-tight">
            <span
              aria-hidden
              className="flex size-8 items-center justify-center rounded-pill bg-accent text-sm text-fg"
            >
              ☁
            </span>
            {brand.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <p className="text-xs font-bold tracking-widest text-muted uppercase">
            聯絡我們
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="text-muted transition-colors hover:text-accent-strong"
          >
            {contact.email}
          </a>
          {contact.line ? (
            <a
              href={contact.line.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent-strong"
            >
              LINE {contact.line.label}
            </a>
          ) : null}
          {contact.booking ? (
            <a
              href={contact.booking.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent-strong"
            >
              {contact.booking.label}
            </a>
          ) : null}
        </div>
      </div>

      <div className="border-t-2 border-line/70">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted sm:px-8">
          © {yearLabel} {brand.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
