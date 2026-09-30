import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpenText, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { GUIDE_LIST } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Parent Guides: Online Quran Learning, Explained Honestly | QuranHub",
  description:
    "Honest, practical guides for US Muslim parents: starting ages, costs, choosing a teacher, online vs masjid classes, and what a free trial really includes.",
  alternates: { canonical: `${SITE.url}/guides` },
  openGraph: {
    title: "Parent Guides: Online Quran Learning, Explained Honestly | QuranHub",
    description:
      "Honest, practical guides for US Muslim parents: starting ages, costs, choosing a teacher, online vs masjid classes, and what a free trial really includes.",
    url: `${SITE.url}/guides`,
    type: "website",
  },
};

export default function GuidesIndexPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
      <header className="pt-10 text-center sm:pt-14">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-700 dark:text-gold-300">
          <BookOpenText className="h-4 w-4" aria-hidden="true" />
          Parent Guides
        </p>
        <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink dark:text-sand-100 sm:text-4xl lg:text-[2.9rem]">
          Online Quran Learning, Explained Honestly
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-left text-base leading-relaxed text-ink-soft dark:text-night-muted sm:text-lg">
          Straight answers to the questions US Muslim parents actually ask: when should my child
          start, what does it cost, how do I choose a teacher, and what really happens in a free
          trial. No hype, no invented numbers — just practical guidance from 1,000+ lessons of
          teaching experience.
        </p>
      </header>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {GUIDE_LIST.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="glass group flex flex-col justify-between rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-gold-400/50"
          >
            <div>
              <h2 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink dark:text-sand-100">
                {g.h1}
              </h2>
              <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink-soft dark:text-night-muted">
                {g.metaDescription}
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-700 dark:text-gold-300">
              Read the guide
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>

      <aside className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-8 text-center shadow-card sm:p-10">
        <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
          Reading is good. Experiencing is better.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-sand-200/90">
          Put any of these guides to the test with 3 free trial classes — real lessons with a
          qualified tutor, no credit card required.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink("Assalamu Alaikum, I read your parent guides and want to book the free 3-day trial.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-8 text-base font-bold text-white transition-transform hover:scale-[1.03] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp Us Now
          </a>
          <Link
            href="/free-trial"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-gold-400 px-8 text-base font-bold text-brand-950 transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Claim My Free Trial
          </Link>
        </div>
      </aside>
    </article>
  );
}
