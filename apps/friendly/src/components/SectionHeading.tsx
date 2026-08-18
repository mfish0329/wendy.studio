import { Reveal } from "@wendy/ui";

type SectionHeadingProps = {
  /** 對應 section 的 aria-labelledby */
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="max-w-2xl">
      {/* eyebrow 做成圓圓的標籤，是這一站的識別元素之一 */}
      <p className="inline-flex items-center gap-2 rounded-pill bg-surface-2 px-4 py-1.5 text-sm font-bold text-accent-strong">
        <span aria-hidden className="size-2 rounded-full bg-accent" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-5 text-3xl leading-[1.35] font-extrabold text-balance sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
