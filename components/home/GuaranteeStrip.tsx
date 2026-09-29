"use client";

import { BadgeCheck, CalendarClock, CreditCard, FileBarChart, UserCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";

const ICONS = [CalendarClock, CreditCard, UserCheck, FileBarChart, BadgeCheck];

export default function GuaranteeStrip() {
  const { locale } = useLocale();
  const d = dict[locale];
  const items = [
    d.guaranteeTrial,
    d.guaranteeNoCard,
    d.guaranteeSameTutor,
    d.guaranteeReports,
    d.guaranteeMoneyBack,
  ];

  return (
    <section
      id="guarantee"
      aria-label="Our guarantees"
      className="relative border-b border-brand-800/10 bg-sand-50 dark:border-white/10 dark:bg-night"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Reveal>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {items.map((label, i) => {
              const Icon = ICONS[i];
              return (
                <li
                  key={label}
                  className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5 shadow-card-light dark:shadow-card"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-800/10 text-brand-700 dark:bg-gold-400/15 dark:text-gold-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-[13px] font-semibold leading-snug text-ink dark:text-sand-100">
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
