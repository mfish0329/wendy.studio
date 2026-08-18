import { Reveal } from "@wendy/ui";

import { brand, hero } from "@/content/site";
import ButtonLink from "../ButtonLink";
import Cloud from "../Cloud";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="品牌與主張"
      className="relative isolate overflow-hidden"
    >
      {/* 背景：由上而下的天空漸層，純裝飾 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #dff1ff 0%, #f2f9ff 46%, #ffffff 100%)",
        }}
      />

      {/* 太陽與雲，這一站的視覺主題 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-6 right-[8%] size-36 rounded-full bg-sun/70 blur-[2px] sm:size-48" />
        <Cloud className="absolute top-24 left-[6%] w-32 animate-float text-bg/90 sm:w-44" />
        <Cloud className="absolute top-52 right-[14%] hidden w-24 animate-float-slow text-bg/80 sm:block sm:w-36" />
        <Cloud className="absolute top-[52%] right-[14%] hidden w-28 animate-float text-bg/90 lg:block" />
      </div>

      {/* 扣掉 header 高度後撐滿首屏；手機留白刻意壓縮，確保主標與 CTA 同時在首屏內 */}
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-5 py-12 sm:px-8 sm:py-24">
        <Reveal className="max-w-4xl">
          <h1>
            {/* 品牌名：頁面的第一個資訊層級 */}
            <span className="inline-flex items-center gap-2 rounded-pill bg-bg px-4 py-2 text-sm font-extrabold tracking-[0.18em] text-accent-strong uppercase shadow-[0_8px_20px_-14px_rgba(18,59,92,0.6)] sm:text-base">
              <span aria-hidden>☀</span>
              {brand.name}
            </span>
            {/* 主標：價值主張 */}
            <span className="mt-6 block text-[1.9rem] leading-[1.4] font-extrabold sm:text-5xl sm:leading-[1.2]">
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
            <ul className="mt-9 flex flex-wrap items-center gap-3 sm:mt-10">
              {hero.trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2 rounded-pill bg-bg/80 px-4 py-2 text-sm font-bold text-muted"
                >
                  <span aria-hidden className="text-accent-strong">
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
