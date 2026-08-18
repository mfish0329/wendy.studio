import { Reveal } from "@wendy/ui";

import { brand, hero } from "@/content/site";
import ButtonLink from "../ButtonLink";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="品牌與主張"
      className="relative isolate overflow-hidden border-b border-line"
    >
      {/* 背景：右上角的桃紅暈染，純裝飾 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(46rem 28rem at 86% -8%, rgba(225,29,72,0.14), transparent 68%)",
        }}
      />

      {/* 扣掉 header 高度後撐滿首屏；手機留白刻意壓縮，確保主標與 CTA 同時在首屏內 */}
      <div className="mx-auto flex min-h-[calc(100svh-6.5rem)] max-w-6xl flex-col justify-center px-5 py-12 sm:px-8 sm:py-24">
        <Reveal className="max-w-3xl">
          <h1>
            {/* 品牌名：頁面的第一個資訊層級 */}
            <span className="inline-flex items-center gap-2 rounded-pill bg-accent-soft px-4 py-1.5 text-sm font-extrabold tracking-[0.12em] text-accent uppercase">
              {brand.name}
            </span>
            {/* 主標：價值主張 */}
            <span className="mt-6 block max-w-[44rem] text-[1.8rem] leading-[1.35] font-extrabold tracking-tight sm:text-[3.5rem] sm:leading-[1.15]">
              {hero.headline}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
              <span aria-hidden>→</span>
            </ButtonLink>
            {hero.secondaryCta ? (
              <ButtonLink
                href={hero.secondaryCta.href}
                variant="secondary"
                size="lg"
              >
                {hero.secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>

          {hero.trustBadges.length > 0 ? (
            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted sm:mt-11">
              {hero.trustBadges.map((badge) => (
                <li key={badge} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="flex size-5 items-center justify-center rounded-pill bg-accent-soft text-[0.7rem] text-accent"
                  >
                    ✓
                  </span>
                  {badge}
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
