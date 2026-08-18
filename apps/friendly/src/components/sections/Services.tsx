import { Reveal } from "@wendy/ui";

import { serviceSection } from "@/content/site";
import SectionHeading from "../SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="services-title"
          eyebrow={serviceSection.eyebrow}
          title={serviceSection.title}
          description={serviceSection.description}
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {serviceSection.items.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 0.08}
              className="rounded-cute bg-bg p-8 shadow-[0_16px_36px_-28px_rgba(18,59,92,0.55)] transition-transform duration-200 hover:-translate-y-1"
            >
              <span
                aria-hidden
                className="flex size-11 items-center justify-center rounded-pill bg-accent text-lg font-extrabold text-fg"
              >
                {index + 1}
              </span>
              <h3 className="mt-6 text-xl font-extrabold text-balance">
                {item.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.outcome}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
