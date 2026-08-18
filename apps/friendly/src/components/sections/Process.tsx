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

      <ol className="mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
        {processSection.steps.map((step, index) => (
          <Reveal
            as="li"
            key={step.name}
            delay={index * 0.08}
            className="relative"
          >
            {/* 步驟之間的虛線，最後一步不畫；手機版直向堆疊時隱藏 */}
            {index < processSection.steps.length - 1 ? (
              <span
                aria-hidden
                className="absolute top-6 left-14 hidden h-0.5 w-[calc(100%-3rem)] border-t-2 border-dashed border-line md:block"
              />
            ) : null}

            <span
              aria-hidden
              className="flex size-12 items-center justify-center rounded-pill border-2 border-line bg-bg text-lg font-extrabold text-accent-strong"
            >
              {index + 1}
            </span>
            <h3 className="mt-5 text-lg font-extrabold text-balance">
              {step.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-14 flex items-start gap-3 rounded-cute bg-surface px-6 py-5 text-sm text-muted">
        <span aria-hidden className="mt-px text-base">
          🛟
        </span>
        <p>
          <span className="font-extrabold text-fg">保固說明：</span>
          {processSection.warranty}
        </p>
      </Reveal>
    </section>
  );
}
