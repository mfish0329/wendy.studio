import { contact, ctaSection, primaryCtaHref } from "@/content/site";
import ButtonLink from "../ButtonLink";
import { Reveal } from "@wendy/ui";

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
            "radial-gradient(48rem 24rem at 50% 100%, rgba(255,107,74,0.18), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <h2
            id="contact-title"
            className="text-3xl leading-[1.3] font-semibold text-balance sm:text-4xl"
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
          <dl className="mt-12 flex flex-col items-center justify-center gap-6 text-sm sm:flex-row sm:gap-10">
            <div className="flex items-center gap-2">
              <dt className="text-muted">Email</dt>
              <dd>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {contact.email}
                </a>
              </dd>
            </div>

            {contact.line ? (
              <div className="flex items-center gap-2">
                <dt className="text-muted">LINE</dt>
                <dd>
                  <a
                    href={contact.line.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
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
