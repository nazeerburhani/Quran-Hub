import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, BadgeCheck, Sparkles, ShieldCheck, CalendarClock } from "lucide-react";
import { SITE, PLANS, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quran Classes Fees & Pricing | Affordable 1-on-1 Plans from $35/mo | QuranHub",
  description:
    "Transparent online Quran classes pricing: 1-on-1 live tuition from just $35/month. Premium quality, qualified tutors, no hidden fees. Free 3-day trial included.",
  keywords: [
    "online quran classes fees",
    "quran academy fees",
    "online quran classes price",
    "quran tuition fees",
    "affordable quran classes online",
  ],
  alternates: { canonical: `${SITE.url}/fees` },
  openGraph: {
    title: "Quran Classes Fees — Premium 1-on-1 Tuition from $35/month",
    description:
      "Transparent pricing, qualified tutors, every class private 1-on-1. Free 3-day trial, no credit card.",
    url: `${SITE.url}/fees`,
    type: "article",
  },
};

const INCLUDED = [
  "Every class is private 1-on-1 — never group, never shared",
  "Qualified male or female tutor of your choice",
  "All subjects included: Qaida, Nazra, Tajweed, Hifz, Tafseer & Islamic studies",
  "Free 3-day trial before you pay anything",
  "Monthly parent progress reports for kids",
  "Reschedule anytime via WhatsApp — no penalty",
  "Pause or cancel anytime — no contracts, no fine print",
];

const FAQS = [
  {
    q: "Why are your prices lower than other academies?",
    a: "Because we keep our operation lean and pass the savings to families — not because we cut corners on teaching. Many academies charge $60–$120/month, often for group classes. Every QuranHub class is private 1-on-1 with a qualified tutor, starting at $35/month. Premium teaching, honest pricing.",
  },
  {
    q: "Are there any hidden fees — admission, materials, exams?",
    a: "No. The monthly plan price is the full price. No admission fee, no material charges, no exam fees. The 3-day trial is completely free and no credit card is required to start it.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes — upgrade, downgrade, or pause your plan anytime with a WhatsApp message. Changes take effect from your next billing cycle, and there's never a penalty.",
  },
  {
    q: "Do you offer family discounts?",
    a: "Yes — families enrolling 2 or more students get a discount on every additional plan. Message us on WhatsApp and we'll work out the best arrangement for your family.",
  },
  {
    q: "How do I pay?",
    a: "We accept all major international payment methods. Our team will walk you through the simple monthly payment setup on WhatsApp after your free trial — it takes two minutes.",
  },
  {
    q: "What if we're not satisfied after starting?",
    a: "Then you shouldn't pay for what you don't love. You can switch tutors free anytime, and you can cancel anytime — no lock-in, no awkward questions. The free trial exists so you decide with full confidence before spending anything.",
  },
];

export default function FeesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Fees & Pricing", item: `${SITE.url}/fees` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <header className="pt-10 text-center sm:pt-14">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-700 dark:text-gold-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Transparent Pricing
          </p>
          <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink dark:text-sand-100 sm:text-4xl lg:text-[2.9rem]">
            Premium 1-on-1 Quran Teaching, at Prices Families Can Afford
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft dark:text-night-muted sm:text-lg">
            Many online academies charge $60–$120/month — often for group classes where your child gets a few
            minutes of attention. At QuranHub, <strong className="text-ink dark:text-sand-100">every single class
            is private 1-on-1</strong> with a qualified tutor, starting at just{" "}
            <strong className="text-ink dark:text-sand-100">$35/month</strong>. High quality teaching shouldn't
            be a luxury — so we priced it like it isn't.
          </p>
        </header>

        {/* Plan cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`glass relative flex flex-col rounded-3xl p-6 transition-all hover:-translate-y-1 ${
                plan.popular ? "border-gold-400/60 shadow-glow" : ""
              }`}
            >
              {plan.popular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-950">
                  Most Popular
                </span>
              ) : null}
              <h2 className="font-display text-xl font-semibold text-ink dark:text-sand-100">{plan.name}</h2>
              <p className="mt-1 text-sm text-ink-soft dark:text-night-muted">{plan.tagline}</p>
              <p className="mt-4 text-sm text-ink-soft dark:text-night-muted">
                <span className="line-through">${plan.anchorUSD}</span>
                <span className="ml-2 font-display text-4xl font-bold text-ink dark:text-sand-100">
                  ${plan.monthlyUSD}
                </span>
                <span>/month</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft dark:text-night-muted">
                <li className="flex items-center gap-2">
                  <CalendarClock className="h-4 w-4 text-brand-600 dark:text-gold-300" aria-hidden="true" />
                  {plan.classesPerWeek} classes / week · {plan.minutesPerClass} min each
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-brand-600 dark:text-gold-300" aria-hidden="true" />
                  1-on-1 live with a qualified tutor
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-600 dark:text-gold-300" aria-hidden="true" />
                  ${(plan.monthlyUSD / (plan.classesPerWeek * 4)).toFixed(2)} per class
                </li>
              </ul>
              <a
                href={whatsappLink(`Assalamu Alaikum, I'm interested in the ${plan.name} plan ($${plan.monthlyUSD}/month). Please share details.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full px-6 text-sm font-bold transition-transform hover:scale-[1.03] ${
                  plan.popular
                    ? "bg-gradient-to-r from-gold-500 to-gold-400 text-brand-950 shadow-glow"
                    : "bg-brand-800 text-white dark:bg-gold-400 dark:text-brand-950"
                }`}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>

        {/* What's included */}
        <section aria-label="What's included" className="mt-14">
          <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-ink dark:text-sand-100">
            Every plan includes
          </h2>
          <ul className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li key={item} className="glass flex items-start gap-3 rounded-2xl px-5 py-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-gold-300" aria-hidden="true" />
                <span className="text-[15px] leading-relaxed text-ink-soft dark:text-night-muted">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Quality promise */}
        <aside className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-8 text-center shadow-card sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            High quality is the point — low prices are the promise
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-sand-200/90">
            Qualified tutors. Private 1-on-1 classes. Structured curriculum from Qaida to Ijazah.
            We refuse to choose between quality and affordability — so you don't have to either.
            Try 3 classes free and judge the quality yourself before you pay a cent.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink("Assalamu Alaikum, I saw your fees page and I have a question about pricing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-8 text-base font-bold text-white transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Ask About Pricing
            </a>
            <Link
              href="/free-trial"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-gold-400 px-8 text-base font-bold text-brand-950 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Start Free Trial
            </Link>
          </div>
        </aside>

        {/* FAQ */}
        <section aria-labelledby="fees-faq" className="mx-auto mt-14 max-w-3xl">
          <h2 id="fees-faq" className="text-center font-display text-2xl font-semibold tracking-tight text-ink dark:text-sand-100">
            Pricing questions, answered
          </h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="glass group rounded-2xl px-5 py-4 open:border-gold-400/50">
                <summary className="cursor-pointer list-none text-[15px] font-bold text-ink marker:hidden dark:text-sand-100 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-800/10 text-lg font-bold text-brand-700 transition-transform group-open:rotate-45 dark:bg-white/10 dark:text-gold-300">+</span>
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-soft dark:text-night-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
