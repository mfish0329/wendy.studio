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
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="services-title"
          eyebrow={serviceSection.eyebrow}
          title={serviceSection.title}
          description={serviceSection.description}
        />

        {/*
          這一站有四項服務（其他版型是三項）。schema 沒有限制數量，
          由版面自己決定怎麼排：手機一欄、平板兩欄、桌機四欄。
        */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceSection.items.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 0.06}
              className="flex flex-col rounded-card bg-bg p-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_-28px_rgba(16,16,20,0.5)]"
            >
              <span
                aria-hidden
                className="flex size-9 items-center justify-center rounded-pill bg-accent-soft text-sm font-extrabold text-accent"
              >
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-extrabold tracking-tight text-balance">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.outcome}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
