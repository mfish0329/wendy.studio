import Reveal from "./Reveal";

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
      <p className="flex items-center gap-3 text-sm font-medium tracking-widest text-accent uppercase">
        <span aria-hidden className="h-px w-8 bg-accent/60" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-5 text-3xl leading-[1.3] font-semibold text-balance sm:text-4xl"
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
