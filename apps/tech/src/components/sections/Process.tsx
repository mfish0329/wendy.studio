import { processSection } from "@/content/site";
import { Reveal } from "@wendy/ui";
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

      <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
        {processSection.steps.map((step, index) => (
          <Reveal
            as="li"
            key={step.name}
            delay={index * 0.08}
            className="relative pt-8"
          >
            {/* 步驟軸線：桌機為水平，手機自然堆疊成分隔線 */}
            <span
              aria-hidden
              className="absolute top-0 left-0 h-px w-full bg-line"
            />
            <span
              aria-hidden
              className="absolute -top-[3px] left-0 size-[7px] rounded-full bg-accent"
            />
            <span className="font-mono text-sm text-accent">
              STEP {index + 1}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-balance">
              {step.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12 flex items-start gap-3 rounded-xl border border-line bg-surface px-6 py-5 text-sm text-muted">
        <span aria-hidden className="mt-px text-accent">
          ◆
        </span>
        <p>
          <span className="font-medium text-fg">保固說明：</span>
          {processSection.warranty}
        </p>
      </Reveal>
    </section>
  );
}
