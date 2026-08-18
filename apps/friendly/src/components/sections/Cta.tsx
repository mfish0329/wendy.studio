import { Reveal } from "@wendy/ui";

import { contact, ctaSection, primaryCtaHref } from "@/content/site";
import ButtonLink from "../ButtonLink";
import Cloud from "../Cloud";

export default function Cta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #eaf6ff 55%, #dff1ff 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <Cloud className="absolute bottom-8 left-[8%] w-28 animate-float-slow text-bg/80 sm:w-40" />
        <Cloud className="absolute right-[10%] bottom-24 hidden w-24 animate-float text-bg/70 sm:block" />
      </div>

      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <h2
            id="contact-title"
            className="text-3xl leading-[1.35] font-extrabold text-balance sm:text-4xl"
          >
            {ctaSection.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {ctaSection.description}
          </p>

          <div className="mt-10 flex justify-center">
            <ButtonLink href={primaryCtaHref} size="lg">
              {ctaSection.cta.label}
              <span aria-hidden>→</span>
            </ButtonLink>
          </div>

          {/* 除了主 CTA，一律提供可直接點的聯絡方式，避免訪客卡住 */}
          <dl className="mt-12 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2 rounded-pill bg-bg/80 px-5 py-2.5">
              <dt className="font-bold text-muted">Email</dt>
              <dd>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-bold text-accent-strong underline decoration-accent/50 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {contact.email}
                </a>
              </dd>
            </div>

            {contact.line ? (
              <div className="flex items-center gap-2 rounded-pill bg-bg/80 px-5 py-2.5">
                <dt className="font-bold text-muted">LINE</dt>
                <dd>
                  <a
                    href={contact.line.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-accent-strong underline decoration-accent/50 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {contact.line.label}
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
