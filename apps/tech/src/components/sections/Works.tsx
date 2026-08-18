import Image from "next/image";

import { workSection } from "@/content/site";
import { Reveal } from "@wendy/ui";
import SectionHeading from "../SectionHeading";

export default function Works() {
  return (
    <section
      id="works"
      aria-labelledby="works-title"
      className="border-y border-line bg-surface/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="works-title"
          eyebrow={workSection.eyebrow}
          title={workSection.title}
          description={workSection.description}
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workSection.items.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 0.08}
              className="group overflow-hidden rounded-2xl border border-line bg-bg transition-colors hover:border-accent/40"
            >
              <div className="aspect-16/10 overflow-hidden border-b border-line bg-surface-2">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={1200}
                  height={750}
                  /* SVG 佔位圖不需經過圖片優化；換成 PNG / JPG 後會自動啟用優化 */
                  unoptimized={item.image.endsWith(".svg")}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  /* 前兩張在桌機通常位於首屏附近，優先載入以改善 LCP */
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="p-7">
                <span className="inline-block rounded-full border border-line px-3 py-1 text-xs text-muted">
                  {item.category}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.problem}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-soft"
                  >
                    查看 Demo
                    <span aria-hidden>↗</span>
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
