/**
 * SectionDivider — a quiet, theme-aware transition between homepage
 * sections: a hairline gold gradient with a soft glow and a centered
 * 8-point-star (khatam) ornament. Decorative only.
 */
export default function SectionDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 ${className}`}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/50 to-gold-400/70 dark:via-gold-400/40" />
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        className="shrink-0 text-gold-500/80 dark:text-gold-400/70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <rect x="4.2" y="4.2" width="9.6" height="9.6" />
        <rect x="4.2" y="4.2" width="9.6" height="9.6" transform="rotate(45 9 9)" />
        <circle cx="9" cy="9" r="1.6" fill="currentColor" stroke="none" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-400/50 to-gold-400/70 dark:via-gold-400/40" />
    </div>
  );
}
