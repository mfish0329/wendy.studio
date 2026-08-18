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
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="works-title"
          eyebrow={workSection.eyebrow}
          title={workSection.title}
          description={workSection.description}
        />

        {/* 商品卡的排法：圖片在上、標籤與說明在下 */}
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {workSection.items.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 0.06}
              className="group overflow-hidden rounded-card bg-bg transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_-28px_rgba(16,16,20,0.5)]"
            >
              <div className="aspect-16/10 overflow-hidden bg-surface-2">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={1200}
                  height={750}
                  /* SVG 佔位圖不需經過圖片優化；換成 PNG / JPG 後會自動啟用優化 */
                  unoptimized={item.image.endsWith(".svg")}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  /* 前兩張在桌機通常位於首屏附近，優先載入以改善 LCP */
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="p-7">
                <span className="inline-block rounded-pill bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                  {item.category}
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.problem}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-colors hover:text-fg"
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
