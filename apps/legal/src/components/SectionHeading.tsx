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
      <p className="flex items-center gap-4 text-xs font-medium tracking-[0.25em] text-accent uppercase">
        <span aria-hidden className="h-px w-10 bg-accent-soft" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-6 font-serif text-3xl leading-[1.4] font-medium sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
