import type { Metadata } from "next";
import { MessageCircle, BadgeCheck } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import FreeTrialForm from "@/components/home/FreeTrialForm";

export const metadata: Metadata = {
  title: "Free Trial — 3 Free Online Quran Classes | No Credit Card | QuranHub",
  description:
    "Claim 3 free online Quran classes: meet your tutor, get a free level assessment, and experience live 1-on-1 learning. No credit card, no obligation.",
  keywords: [
    "free quran classes",
    "free trial quran classes",
    "free online quran classes",
    "quran classes free trial",
  ],
  alternates: { canonical: `${SITE.url}/free-trial` },
  openGraph: {
    title: "3 Free Online Quran Classes — No Credit Card | QuranHub",
    description: "Meet your tutor, get a free assessment, experience real 1-on-1 classes.",
    url: `${SITE.url}/free-trial`,
    type: "article",
  },
};

const STEPS = [
  {
    title: "Day 1 — Meet your tutor",
    text: "A friendly introduction and a free assessment of your (or your child's) current level — reading, Tajweed, or memorization.",
  },
  {
    title: "Days 2–3 — Real live classes",
    text: "Two full 1-on-1 classes with the same tutor. Real teaching, real correction, real progress — not a sales demo.",
  },
  {
    title: "Then you decide",
    text: "You get honest feedback and a recommended plan. Continue with the same tutor, or walk away — no charge, no pressure, no card on file.",
  },
];

const FAQS = [
  {
    q: "Is the trial really free?",
    a: "Yes — 3 full live classes, completely free. We don't ask for a credit card, and there's no automatic charge afterwards. If you don't continue, you pay nothing.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Your details open in WhatsApp — just tap send, and our team replies (usually within minutes) to schedule your 3 classes at times you choose. A backup email also reaches us, so nothing gets lost.",
  },
  {
    q: "Who will teach the trial classes?",
    a: "The same qualified tutor you'd continue with — not a substitute. You can request a male Qari or female Qariah when booking.",
  },
  {
    q: "What do I need for the trial?",
    a: "Just a phone, tablet, or computer with a camera and internet. We'll guide you through the simple video-call setup on WhatsApp before class one.",
  },
];

export default function FreeTrialPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Free Trial", item: `${SITE.url}/free-trial` },
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

      <article className="mx-auto max-w-4xl px-4 pb-8 sm:px-6">
        <header className="pt-10 text-center sm:pt-14">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-700 dark:text-gold-300">
            Limited free offer
          </p>
          <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink dark:text-sand-100 sm:text-4xl lg:text-[2.9rem]">
            Get 3 Online Quran Classes Free
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft dark:text-night-muted sm:text-lg">
            Don't take our word for the quality — experience it. Meet your qualified tutor, get a free level
            assessment, and take 3 real 1-on-1 classes. <strong className="text-ink dark:text-sand-100">No credit
            card. No obligation.</strong>
          </p>
        </header>

        {/* How it works */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.title} className="glass rounded-3xl p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-gold-400 font-display text-lg font-bold text-brand-950">
                {i + 1}
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-ink dark:text-sand-100">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-night-muted">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={whatsappLink("Assalamu Alaikum, I want to claim my 3 FREE trial classes.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25d366] px-8 text-base font-bold text-white shadow-card transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Claim on WhatsApp Instead
          </a>
        </div>
      </article>

      {/* The actual trial form (shared with homepage) */}
      <FreeTrialForm />

      <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-ink dark:text-sand-100">
          Trial questions, answered
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

        <p className="mt-10 flex items-start justify-center gap-2 text-center text-sm text-ink-soft dark:text-night-muted">
          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-gold-300" aria-hidden="true" />
          Premium 1-on-1 teaching from $35/month after the trial — only if you love it.
        </p>
      </article>
    </>
  );
}
