import { Reveal } from "@wendy/ui";

import { brand, hero } from "@/content/site";
import ButtonLink from "../ButtonLink";

export default function Hero() {
  return (
    <section id="top" aria-label="品牌與主張" className="border-b border-line">
      {/* 扣掉 header 高度後撐滿首屏；手機留白刻意壓縮，確保主標與 CTA 同時在首屏內 */}
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-5 py-12 sm:px-8 sm:py-24">
        <Reveal className="max-w-4xl">
          <h1>
            {/* 品牌名：頁面的第一個資訊層級 */}
            <span className="flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-accent uppercase sm:text-sm">
              <span aria-hidden className="h-px w-12 bg-accent-soft" />
              {brand.name}
            </span>
            {/* 主標：價值主張 */}
            <span className="mt-8 block max-w-[42rem] font-serif text-[1.75rem] leading-[1.5] font-medium sm:text-[3.25rem] sm:leading-[1.3]">
              {hero.headline}
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-[1.9] text-muted sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
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
        </Reveal>

        {/* 信任標記用細線分欄呈現，取代其他版型的標籤樣式 */}
        {hero.trustBadges.length > 0 ? (
          <Reveal
            as="ul"
            delay={0.15}
            className="mt-16 grid max-w-3xl grid-cols-1 border-t border-line sm:grid-cols-3"
          >
            {hero.trustBadges.map((badge) => (
              <li
                key={badge}
                className="border-b border-line px-1 py-4 text-sm text-muted sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pr-6 sm:pl-0 sm:not-first:pl-6"
              >
                {badge}
              </li>
            ))}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
