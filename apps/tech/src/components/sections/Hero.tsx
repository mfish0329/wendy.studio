import { brand, hero } from "@/content/site";
import ButtonLink from "../ButtonLink";
import { Reveal } from "@wendy/ui";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="品牌與主張"
      className="relative isolate overflow-hidden"
    >
      {/* 背景：中央柔光 + 細格線，純裝飾 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 32rem at 50% -12%, rgba(255,107,74,0.16), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-35 mask-[radial-gradient(50rem_28rem_at_50%_0%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff0d 1px, transparent 1px), linear-gradient(to bottom, #ffffff0d 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* 扣掉 header 高度後撐滿首屏；手機留白刻意壓縮，確保主標與 CTA 同時在首屏內 */}
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-5 py-12 sm:px-8 sm:py-24">
        <Reveal className="max-w-3xl">
          <h1>
            {/* 品牌名：頁面的第一個資訊層級 */}
            <span className="block text-xl font-semibold tracking-[0.2em] text-accent uppercase sm:text-2xl">
              {brand.name}
            </span>
            {/* 主標：價值主張 */}
            <span className="mt-6 block text-[1.75rem] leading-[1.35] font-semibold text-balance sm:text-5xl sm:leading-tight">
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
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted sm:mt-10">
              {hero.trustBadges.map((badge) => (
                <li key={badge} className="flex items-center gap-2">
                  <span aria-hidden className="text-accent">
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
