import { Reveal } from "@wendy/ui";

import { serviceSection } from "@/content/site";
import SectionHeading from "../SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-y border-line bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          id="services-title"
          eyebrow={serviceSection.eyebrow}
          title={serviceSection.title}
          description={serviceSection.description}
        />

        {/* 橫向細線分隔的條列，比卡片更接近事務所文件的排版 */}
        <ul className="mt-16 border-t border-line">
          {serviceSection.items.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 0.08}
              className="grid gap-4 border-b border-line py-9 md:grid-cols-[5rem_1fr_1.4fr] md:items-baseline md:gap-8"
            >
              <span
                aria-hidden
                className="font-serif text-sm text-accent-soft"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl font-medium text-balance">
                {item.name}
              </h3>
              <p className="text-sm leading-[1.9] text-muted">{item.outcome}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
