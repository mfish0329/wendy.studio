import { Reveal } from "@wendy/ui";

import { audienceSection } from "@/content/site";
import SectionHeading from "../SectionHeading";

export default function Audience() {
  return (
    <section
      id="audience"
      aria-labelledby="audience-title"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading
        id="audience-title"
        eyebrow={audienceSection.eyebrow}
        title={audienceSection.title}
      />

      <ul className="mt-14 grid gap-5 md:grid-cols-3">
        {audienceSection.items.map((item, index) => (
          <Reveal
            as="li"
            key={item.id}
            delay={index * 0.06}
            className="flex flex-col rounded-card border border-line bg-bg p-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_-28px_rgba(16,16,20,0.5)]"
          >
            <h3 className="text-lg font-extrabold tracking-tight">
              {item.name}
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-muted">
              <span className="mr-2 rounded-pill bg-surface px-2.5 py-0.5 text-xs font-bold">
                現在
              </span>
              {item.pain}
            </p>

            <p className="mt-4 text-sm leading-relaxed">
              <span className="mr-2 rounded-pill bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent">
                合作後
              </span>
              {item.outcome}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
