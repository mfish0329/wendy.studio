import { Reveal } from "@wendy/ui";

import { processSection } from "@/content/site";
import SectionHeading from "../SectionHeading";

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        id="process-title"
        eyebrow={processSection.eyebrow}
        title={processSection.title}
      />

      <ol className="mt-16 grid border-t border-line md:grid-cols-4">
        {processSection.steps.map((step, index) => (
          <Reveal
            as="li"
            key={step.name}
            delay={index * 0.08}
            className="border-b border-line py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
          >
            <span
              aria-hidden
              className="font-serif text-sm tracking-[0.2em] text-accent-soft"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-serif text-lg font-medium text-balance">
              {step.name}
            </h3>
            <p className="mt-4 text-sm leading-[1.9] text-muted">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12 border-l-2 border-accent-soft bg-surface px-7 py-6 text-sm leading-[1.9] text-muted">
        <p>
          <span className="font-medium text-fg">保固說明：</span>
          {processSection.warranty}
        </p>
      </Reveal>
    </section>
  );
}
