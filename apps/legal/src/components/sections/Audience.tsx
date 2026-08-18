import { Reveal } from "@wendy/ui";

import { audienceSection } from "@/content/site";
import SectionHeading from "../SectionHeading";

export default function Audience() {
  return (
    <section
      id="audience"
      aria-labelledby="audience-title"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        id="audience-title"
        eyebrow={audienceSection.eyebrow}
        title={audienceSection.title}
      />

      {/* 這一站用細線分欄，而不是卡片 */}
      <ul className="mt-16 grid border-t border-line md:grid-cols-3">
        {audienceSection.items.map((item, index) => (
          <Reveal
            as="li"
            key={item.id}
            delay={index * 0.08}
            className="border-b border-line py-9 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
          >
            <h3 className="font-serif text-xl font-medium">{item.name}</h3>

            <dl className="mt-6 space-y-5 text-sm leading-[1.9]">
              <div>
                <dt className="text-xs tracking-[0.2em] text-muted uppercase">
                  現況
                </dt>
                <dd className="mt-2 text-muted">{item.pain}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.2em] text-accent uppercase">
                  合作後
                </dt>
                <dd className="mt-2">{item.outcome}</dd>
              </div>
            </dl>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
