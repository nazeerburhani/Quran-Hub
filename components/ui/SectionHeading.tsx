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
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark dark:text-gold-light">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
