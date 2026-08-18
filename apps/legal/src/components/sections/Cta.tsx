import { Reveal } from "@wendy/ui";

import { contact, ctaSection, primaryCtaHref } from "@/content/site";
import ButtonLink from "../ButtonLink";

export default function Cta() {
  return (
    // 全站唯一的深色區塊，作為收尾的視覺錨點
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-fg text-bg"
    >
      <div className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 sm:py-36">
        <Reveal>
          <span aria-hidden className="mx-auto block h-px w-12 bg-accent-soft" />

          <h2
            id="contact-title"
            className="mt-10 font-serif text-3xl leading-[1.45] font-medium text-balance sm:text-4xl"
          >
            {ctaSection.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-[1.9] text-bg/75 sm:text-lg">
            {ctaSection.description}
          </p>

          <div className="mt-11 flex justify-center">
            <ButtonLink href={primaryCtaHref} variant="inverse" size="lg">
              {ctaSection.cta.label}
            </ButtonLink>
          </div>

          {/* 除了主 CTA，一律提供可直接點的聯絡方式，避免訪客卡住 */}
          <dl className="mx-auto mt-14 grid max-w-lg grid-cols-1 gap-y-5 border-t border-bg/20 pt-9 text-sm sm:grid-cols-2 sm:gap-x-8">
            <div className="flex flex-col items-center gap-2">
              <dt className="text-xs tracking-[0.2em] text-bg/60 uppercase">
                Email
              </dt>
              <dd>
                <a
                  href={`mailto:${contact.email}`}
                  className="underline underline-offset-4 transition-colors hover:text-accent-soft"
                >
                  {contact.email}
                </a>
              </dd>
            </div>

            {contact.line ? (
              <div className="flex flex-col items-center gap-2">
                <dt className="text-xs tracking-[0.2em] text-bg/60 uppercase">
                  LINE
                </dt>
                <dd>
                  <a
                    href={contact.line.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 transition-colors hover:text-accent-soft"
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
