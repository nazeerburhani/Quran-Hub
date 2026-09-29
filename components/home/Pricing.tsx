"use client";

import { BadgeCheck, Check, ShieldCheck } from "lucide-react";
import { PLANS } from "@/lib/site";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Pricing() {
  const { locale } = useLocale();
  const d = dict[locale];

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="geo-pattern-adaptive relative scroll-mt-20 border-y border-brand-800/10 bg-sand-100/60 dark:border-white/10 dark:bg-night-soft/60"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="pricing-heading"
          eyebrow={d.pricingEyebrow}
          title={d.pricingTitle}
          description={d.pricingDesc}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl p-6 sm:p-7 ${
                  plan.popular
                    ? "border-2 border-gold-400 bg-white shadow-glow dark:bg-night-soft"
                    : "glass shadow-card-light dark:shadow-card"
                }`}
              >
                {plan.popular ? (
                  <span className="absolute -top-3.5 start-1/2 -translate-x-1/2 rounded-full bg-gold-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-950 shadow-glow rtl:translate-x-1/2">
                    {d.mostPopular}
                  </span>
                ) : null}

                <h3 className="font-display text-2xl font-semibold text-ink dark:text-sand-100">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-ink-soft dark:text-night-muted">
                  {plan.tagline}
                </p>

                <p className="mt-5 flex items-baseline gap-2">
                  <span
                    aria-hidden="true"
                    className="text-lg text-ink-soft/70 line-through dark:text-night-muted/70"
                  >
                    ${plan.anchorUSD}
                  </span>
                  <span className="font-display text-4xl font-semibold text-ink dark:text-sand-100">
                    ${plan.monthlyUSD}
                  </span>
                  <span className="text-sm text-ink-soft dark:text-night-muted">
                    {d.perMonth}
                  </span>
                </p>
                <p className="mt-1 text-xs text-ink-soft/80 dark:text-night-muted/80">
                  {plan.classesPerWeek} {d.perWeek} · {plan.minutesPerClass} min/class
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-ink-soft dark:text-night-muted">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-gold-300" aria-hidden="true" />
                    Live 1-on-1 classes
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-gold-300" aria-hidden="true" />
                    Same tutor every class
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-gold-300" aria-hidden="true" />
                    Weekly parent progress reports
                  </li>
                </ul>

                <a
                  href="#trial"
                  className={`mt-7 ${plan.popular ? "btn-gold" : "btn-teal"} w-full text-sm`}
                >
                  {d.startTrial}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Trust row */}
        <Reveal className="mt-10">
          <ul className="flex flex-col items-center justify-center gap-3 text-sm font-semibold text-ink-soft dark:text-night-muted sm:flex-row sm:gap-8">
            <li className="inline-flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-brand-600 dark:text-gold-300" aria-hidden="true" />
              {d.noFee}
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-600 dark:text-gold-300" aria-hidden="true" />
              {d.moneyBackBadge}
            </li>
          </ul>
          <p className="mt-4 text-center text-xs text-ink-soft/80 dark:text-night-muted/80">
            {d.siblingNote}
          </p>
          <p className="mt-2 text-center text-[11px] italic text-ink-soft/70 dark:text-night-muted/70">
            {d.placeholderNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
