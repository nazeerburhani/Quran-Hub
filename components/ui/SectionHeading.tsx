import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** id for aria-labelledby on the parent section */
  id?: string;
  align?: "center" | "start";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "center",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-start";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-700 dark:text-gold-300">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink dark:text-sand-100 sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-soft dark:text-night-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
