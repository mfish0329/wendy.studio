import { Reveal } from "@wendy/ui";

import { audienceSection } from "@/content/site";
import SectionHeading from "../SectionHeading";

/* 三張卡片各配一個點綴色，避免整頁只有一種藍。
   寫成完整 class 字串（而不是拼接），Tailwind 才掃得到。 */
const accents = [
  { dot: "bg-accent", ring: "hover:border-accent" },
  { dot: "bg-sun", ring: "hover:border-sun" },
  { dot: "bg-blush", ring: "hover:border-blush" },
];

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

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {audienceSection.items.map((item, index) => {
          const accent = accents[index % accents.length];

          return (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 0.08}
              className={`flex flex-col rounded-cute border-2 border-line bg-bg p-7 shadow-[0_16px_36px_-28px_rgba(18,59,92,0.55)] transition-[transform,border-color] duration-200 hover:-translate-y-1 ${accent.ring}`}
            >
              <h3 className="flex items-center gap-2.5 text-lg font-extrabold">
                <span aria-hidden className={`size-3 rounded-full ${accent.dot}`} />
                {item.name}
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-muted">
                <span className="mr-2 rounded-pill bg-surface px-2.5 py-0.5 text-xs font-bold">
                  現在
                </span>
                {item.pain}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-fg">
                <span className="mr-2 rounded-pill bg-surface-2 px-2.5 py-0.5 text-xs font-bold text-accent-strong">
                  合作後
                </span>
                {item.outcome}
              </p>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
