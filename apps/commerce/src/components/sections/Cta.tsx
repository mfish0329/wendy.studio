import { Reveal } from "@wendy/ui";

import { contact, ctaSection, primaryCtaHref } from "@/content/site";
import ButtonLink from "../ButtonLink";

export default function Cta() {
  return (
    // 深色收尾區塊，讓最後的行動呼籲有最高對比
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-fg text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40rem 22rem at 50% 118%, rgba(225,29,72,0.55), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <h2
            id="contact-title"
            className="text-3xl leading-[1.3] font-extrabold tracking-tight text-balance sm:text-4xl"
          >
            {ctaSection.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {ctaSection.description}
          </p>

          <div className="mt-10 flex justify-center">
            <ButtonLink href={primaryCtaHref} variant="inverse" size="lg">
              {ctaSection.cta.label}
              <span aria-hidden>→</span>
            </ButtonLink>
          </div>

          {/* 除了主 CTA，一律提供可直接點的聯絡方式，避免訪客卡住 */}
          <dl className="mt-12 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              <dt className="text-white/60">Email</dt>
              <dd>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  {contact.email}
                </a>
              </dd>
            </div>

            {contact.line ? (
              <div className="flex items-center gap-2">
                <dt className="text-white/60">LINE</dt>
                <dd>
                  <a
                    href={contact.line.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
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
