import Image from "next/image";

import { Reveal } from "@wendy/ui";

import { workSection } from "@/content/site";
import SectionHeading from "../SectionHeading";

export default function Works() {
  return (
    <section
      id="works"
      aria-labelledby="works-title"
      className="border-y border-line bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          id="works-title"
          eyebrow={workSection.eyebrow}
          title={workSection.title}
          description={workSection.description}
        />

        <ul className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {workSection.items.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 0.08} className="group">
              <div className="aspect-16/10 overflow-hidden border border-line bg-bg">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={1200}
                  height={750}
                  /* SVG 佔位圖不需經過圖片優化；換成 PNG / JPG 後會自動啟用優化 */
                  unoptimized={item.image.endsWith(".svg")}
                  className="size-full object-cover"
                  /* 前兩張在桌機通常位於首屏附近，優先載入以改善 LCP */
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <p className="mt-6 text-xs tracking-[0.2em] text-accent uppercase">
                {item.category}
              </p>
              <h3 className="mt-3 font-serif text-lg font-medium">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.9] text-muted">
                {item.problem}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-accent underline underline-offset-4 transition-colors hover:text-fg"
                >
                  查看 Demo
                  <span aria-hidden>↗</span>
                </a>
              ) : null}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
