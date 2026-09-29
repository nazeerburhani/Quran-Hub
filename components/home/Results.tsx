"use client";

import { Award, BookOpenCheck, Repeat2, TrendingUp } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";

/** Measurable outcomes students typically reach — kept specific, no hype. */
const OUTCOMES = [
  {
    icon: BookOpenCheck,
    stat: "7–14 days",
    label: "to memorize Al-Fatihah with daily 15-minute practice",
  },
  {
    icon: Repeat2,
    stat: "3 months",
    label: "from the alphabet to fluent reading (Noorani Qaida track)",
  },
  {
    icon: TrendingUp,
    stat: "100%",
    label: "of trial students receive a personal learning plan",
  },
  {
    icon: Award,
    stat: "12",
    label: "courses from first letters to Ijazah certification",
  },
];

export default function Results() {
  const { locale } = useLocale();
  const d = dict[locale];

  return (
    <section aria-labelledby="results-heading" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="results-heading"
          eyebrow={d.resultsEyebrow}
          title={d.resultsTitle}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o.label} delay={i * 0.08}>
              <div className="glass h-full rounded-3xl p-6 text-center shadow-card-light dark:shadow-card">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-800/10 text-brand-700 dark:bg-gold-400/15 dark:text-gold-300">
                  <o.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-4 font-display text-3xl font-semibold text-ink dark:text-sand-100">
                  {o.stat}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-night-muted">
                  {o.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="text-center text-xs text-ink-soft/70 dark:text-night-muted/70">
            Typical outcomes reported by our tutors — individual progress varies with practice.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
