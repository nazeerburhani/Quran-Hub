"use client";

import { useMemo, useState } from "react";
import { BadgeCheck, Users } from "lucide-react";
import { CURRENCIES, PLANS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

type Billing = "monthly" | "quarterly" | "yearly";

const BILLING_MULTIPLIER: Record<Billing, number> = {
  monthly: 1,
  quarterly: 2.85, // 3 months with ~5% off
  yearly: 9.6, // 12 months with 20% off
};

const BILLING_LABEL: Record<Billing, string> = {
  monthly: "per month",
  quarterly: "per quarter",
  yearly: "per year",
};

export default function PricingPreview() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [currency, setCurrency] = useState<string>("USD");

  const rate = useMemo(
    () => CURRENCIES.find((c) => c.code === currency)?.rate ?? 1,
    [currency]
  );

  const format = (usd: number) => {
    const converted = Math.round(usd * BILLING_MULTIPLIER[billing] * rate);
    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }).format(converted);
    } catch {
      return `${currency} ${converted.toLocaleString("en-US")}`;
    }
  };

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="relative scroll-mt-20 overflow-hidden bg-navy-950">
      <div className="geo-pattern absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          id="pricing-heading"
          eyebrow="Simple Pricing"
          title="One plan per family rhythm"
          description="Choose how many days a week you learn. Every plan includes live 1-on-1 classes, homework, progress reports and free rescheduling."
        />

        {/* Controls */}
        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div
            role="group"
            aria-label="Billing period"
            className="glass inline-flex rounded-full p-1"
          >
            {(["monthly", "quarterly", "yearly"] as Billing[]).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBilling(b)}
                aria-pressed={billing === b}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-all ${
                  billing === b
                    ? "bg-gradient-to-r from-gold-dark to-gold text-navy-950 shadow-glow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
          <div>
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="glass h-11 rounded-full bg-transparent px-4 text-sm font-medium text-slate-200 outline-none [&>option]:text-slate-900"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </Reveal>

        {/* Plans */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl p-7 backdrop-blur-xl ${
                  p.popular
                    ? "border-2 border-gold bg-gradient-to-b from-gold/15 to-white/[0.04] shadow-glow-lg"
                    : "glass"
                }`}
              >
                {p.popular ? (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-dark to-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">
                    Most popular
                  </span>
                ) : null}
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{p.tagline}</p>
                <p className="mt-5">
                  <span className="text-gold-gradient text-4xl font-extrabold">
                    {format(p.monthlyUSD)}
                  </span>
                  <span className="text-sm text-slate-400"> {BILLING_LABEL[billing]}</span>
                </p>
                <span className="mt-2 inline-block w-fit rounded-md bg-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-light">
                  Placeholder price
                </span>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {p.classesPerWeek} live classes per week
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {p.minutesPerClass} minutes, one-on-one
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    Homework & monthly parent report
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    Free rescheduling & male/female tutor choice
                  </li>
                </ul>
                <Button
                  href="#trial"
                  size="sm"
                  variant={p.popular ? "primary" : "secondary"}
                  className="mt-6 w-full"
                >
                  Start Free Trial
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="mx-auto flex max-w-2xl items-start justify-center gap-2 text-center text-sm text-slate-400">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
            Family discount: save 10% on the 2nd child and 15% on the 3rd+. Group
            class options also available — ask us on WhatsApp.
          </p>
          <p className="mt-3 text-center text-xs text-slate-500">
            Prices shown are design placeholders and will be replaced with final rates before launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
