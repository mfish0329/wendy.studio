import { serviceSection } from "@/content/site";
import { Reveal } from "@wendy/ui";
import SectionHeading from "../SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-y border-line bg-surface/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="services-title"
          eyebrow={serviceSection.eyebrow}
          title={serviceSection.title}
          description={serviceSection.description}
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {serviceSection.items.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 0.08}
              className="group bg-bg p-8 transition-colors hover:bg-surface-2"
            >
              <span
                aria-hidden
                className="font-mono text-sm text-muted/60 transition-colors group-hover:text-accent"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-balance">
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
