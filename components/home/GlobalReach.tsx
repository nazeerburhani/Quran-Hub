import { Globe2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

/**
 * Global reach / service-area section.
 * Keyword-rich copy for location-based searches ("online quran academy usa",
 * "online quran classes uk") while staying genuinely useful.
 */
const REGIONS = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "UAE",
  "Saudi Arabia",
  "Germany",
  "France",
  "Malaysia",
  "Pakistan",
];

export default function GlobalReach() {
  return (
    <section
      aria-labelledby="global-reach-heading"
      className="relative overflow-hidden border-y border-brand-800/10 bg-sand-100/60 dark:border-white/10 dark:bg-night-soft/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-800/15 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-brand-700 dark:border-white/15 dark:bg-white/5 dark:text-gold-300">
              <Globe2 className="h-4 w-4" aria-hidden="true" />
              Online Quran Academy — Worldwide
            </p>
            <h2
              id="global-reach-heading"
              className="mt-5 font-display text-3xl font-semibold leading-tight text-ink dark:text-sand-100 sm:text-4xl"
            >
              Learn Quran online from anywhere in the world
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft dark:text-night-muted">
              QuranHub is an online Quran academy serving Muslim families in the{" "}
              <strong className="font-semibold text-ink dark:text-sand-100">
                United States, United Kingdom, Canada, Australia
              </strong>{" "}
              and beyond. Our live, one-on-one online Quran classes run around
              the clock — kids learn Quran online after school, adults before or
              after work — with qualified male and female Quran tutors matched
              to your timezone, language and goals.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul
              aria-label="Countries and regions served"
              className="flex flex-wrap gap-2.5"
            >
              {REGIONS.map((r) => (
                <li
                  key={r}
                  className="rounded-full border border-brand-800/15 bg-white/80 px-4 py-2 text-sm font-semibold text-ink-soft shadow-card-light dark:border-white/10 dark:bg-white/5 dark:text-night-muted"
                >
                  {r}
                </li>
              ))}
              <li className="rounded-full bg-brand-800 px-4 py-2 text-sm font-bold text-white dark:bg-gold-400 dark:text-night-deep">
                + many more
              </li>
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft dark:text-night-muted">
              Searching for <em>online Quran classes for kids</em>,{" "}
              <em>female Quran teacher online</em> or{" "}
              <em>Quran memorization online</em>? You just found it — book a
              free 3-day trial and meet your tutor within 24 hours.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
