import { audienceSection } from "@/content/site";
import { Reveal } from "@wendy/ui";
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
            delay={index * 0.08}
            className="flex flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent/40"
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>

            <p className="mt-5 text-sm leading-relaxed text-muted">
              <span className="mr-2 rounded bg-surface-2 px-2 py-0.5 text-xs text-muted/80">
                現況
              </span>
              {item.pain}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-fg">
              <span className="mr-2 rounded bg-accent/15 px-2 py-0.5 text-xs text-accent">
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
