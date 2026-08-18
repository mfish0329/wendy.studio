import { Reveal } from "@wendy/ui";

import { processSection } from "@/content/site";
import SectionHeading from "../SectionHeading";

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading
        id="process-title"
        eyebrow={processSection.eyebrow}
        title={processSection.title}
      />

      {/* 做成訂單進度條的樣子：實心圓點 + 連接線 */}
      <ol className="mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
        {processSection.steps.map((step, index) => (
          <Reveal
            as="li"
            key={step.name}
            delay={index * 0.06}
            className="relative"
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex size-8 shrink-0 items-center justify-center rounded-pill bg-accent-bright text-sm font-extrabold text-white"
              >
                {index + 1}
              </span>
              {/* 最後一步不畫連接線；手機版直向堆疊時隱藏 */}
              {index < processSection.steps.length - 1 ? (
                <span
                  aria-hidden
                  className="hidden h-0.5 flex-1 bg-line md:block"
                />
              ) : null}
            </div>

            <h3 className="mt-5 text-lg font-extrabold tracking-tight text-balance">
              {step.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12 flex items-start gap-3 rounded-card bg-surface px-6 py-5 text-sm text-muted">
        <span
          aria-hidden
          className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-pill bg-accent-soft text-[0.7rem] text-accent"
        >
          ✓
        </span>
        <p>
          <span className="font-bold text-fg">保固說明：</span>
          {processSection.warranty}
        </p>
      </Reveal>
    </section>
  );
}
