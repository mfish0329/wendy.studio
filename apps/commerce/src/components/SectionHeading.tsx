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
      <p className="inline-flex rounded-pill bg-accent-soft px-4 py-1.5 text-sm font-bold text-accent">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-5 text-3xl leading-[1.3] font-extrabold tracking-tight text-balance sm:text-4xl"
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
