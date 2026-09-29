import Link from "next/link";
import { ChevronRight, MessageCircle, BadgeCheck, Clock3, Users, Sparkles } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface LandingFaq {
  q: string;
  a: string;
}

export interface LandingSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface RelatedLink {
  href: string;
  label: string;
}

export interface LandingPageData {
  /** URL slug without base path, e.g. "online-quran-classes-for-kids" */
  slug: string;
  /** e.g. "/courses" or "" for top-level pages */
  basePath: string;
  /** Short label for breadcrumbs */
  breadcrumb: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string[];
  sections: LandingSection[];
  faqs: LandingFaq[];
  related: RelatedLink[];
  /** Prefilled WhatsApp message for this page's CTA */
  whatsappMessage: string;
  /** For Course schema */
  courseName: string;
  courseDescription: string;
}

export function pageUrl(d: LandingPageData): string {
  return `${SITE.url}${d.basePath}/${d.slug}`;
}

/* ------------------------------------------------------------------ */
/* JSON-LD (BreadcrumbList + Course + FAQPage)                          */
/* ------------------------------------------------------------------ */

function LandingJsonLd({ data }: { data: LandingPageData }) {
  const url = pageUrl(data);
  const breadcrumbItems = [
    { name: "Home", url: SITE.url },
    ...(data.basePath
      ? [{ name: data.basePath === "/courses" ? "Courses" : "QuranHub", url: `${SITE.url}${data.basePath}` }]
      : []),
    { name: data.breadcrumb, url },
  ];
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: data.courseName,
      description: data.courseDescription,
      url,
      provider: {
        "@type": "EducationalOrganization",
        name: SITE.name,
        url: SITE.url,
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "P30D",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Renderer                                                            */
/* ------------------------------------------------------------------ */

const TRUST_CHIPS = [
  { icon: Sparkles, label: "Free 3-day trial · no credit card" },
  { icon: Users, label: "Live 1-on-1 online classes" },
  { icon: BadgeCheck, label: "Qualified male & female tutors" },
  { icon: Clock3, label: "24/7 — every timezone" },
];

export default function LandingPage({ data }: { data: LandingPageData }) {
  return (
    <>
      <LandingJsonLd data={data} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
        <ol className="flex flex-wrap items-center gap-1 text-[13px] text-ink-soft dark:text-night-muted">
          <li>
            <Link href="/" className="transition-colors hover:text-brand-700 dark:hover:text-gold-300">
              Home
            </Link>
          </li>
          {data.basePath ? (
            <>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li>
                <Link href={data.basePath === "/courses" ? "/#courses" : "/"} className="transition-colors hover:text-brand-700 dark:hover:text-gold-300">
                  {data.basePath === "/courses" ? "Courses" : "QuranHub"}
                </Link>
              </li>
            </>
          ) : null}
          <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
          <li aria-current="page" className="font-semibold text-ink dark:text-sand-100">
            {data.breadcrumb}
          </li>
        </ol>
      </nav>

      <article className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        {/* Header */}
        <header className="pt-8 text-center sm:pt-12">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-700 dark:text-gold-300">
            {SITE.name} · Online Quran Academy
          </p>
          <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink dark:text-sand-100 sm:text-4xl lg:text-[2.9rem]">
            {data.h1}
          </h1>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-left">
            {data.intro.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-soft dark:text-night-muted sm:text-lg">
                {p}
              </p>
            ))}
          </div>

          {/* Trust chips */}
          <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
            {TRUST_CHIPS.map((c) => (
              <li
                key={c.label}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-ink dark:text-sand-100"
              >
                <c.icon className="h-4 w-4 text-gold-600 dark:text-gold-300" aria-hidden="true" />
                {c.label}
              </li>
            ))}
          </ul>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(data.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-8 text-base font-bold text-white shadow-card transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <Link
              href="/free-trial"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 text-base font-bold text-brand-950 shadow-glow transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Claim My Free Trial
            </Link>
          </div>
        </header>

        {/* Content sections */}
        <div className="mt-14 space-y-12 sm:mt-16">
          {data.sections.map((s) => (
            <section key={s.heading} aria-label={s.heading}>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink dark:text-sand-100 sm:text-[1.7rem]">
                {s.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed text-ink-soft dark:text-night-muted">
                    {p}
                  </p>
                ))}
              </div>
              {s.bullets ? (
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-gold-300" aria-hidden="true" />
                      <span className="leading-relaxed text-ink-soft dark:text-night-muted">{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        {/* Mid-page CTA banner */}
        <aside className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-8 text-center shadow-card sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Try 3 classes free — no credit card required
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-sand-200/90">
            Meet your tutor, get a free level assessment, and experience a real live class before you decide anything.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(data.whatsappMessage)}
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
              Book Free Trial
            </Link>
          </div>
        </aside>

        {/* FAQ */}
        <section aria-labelledby="landing-faq" className="mt-14">
          <h2 id="landing-faq" className="text-center font-display text-2xl font-semibold tracking-tight text-ink dark:text-sand-100 sm:text-[1.7rem]">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-3">
            {data.faqs.map((f) => (
              <details
                key={f.q}
                className="glass group rounded-2xl px-5 py-4 transition-colors open:border-gold-400/50"
              >
                <summary className="cursor-pointer list-none text-[15px] font-bold text-ink marker:hidden dark:text-sand-100 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-800/10 text-lg font-bold text-brand-700 transition-transform group-open:rotate-45 dark:bg-white/10 dark:text-gold-300">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-soft dark:text-night-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related pages — internal linking web */}
        {data.related.length > 0 ? (
          <nav aria-label="Related pages" className="mt-14">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink dark:text-sand-100">
              Keep exploring
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {data.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="glass group flex items-center justify-between gap-3 rounded-2xl px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-gold-400/50"
                  >
                    <span className="text-[15px] font-semibold text-ink dark:text-sand-100">
                      {r.label}
                    </span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-gold-600 transition-transform group-hover:translate-x-1 dark:text-gold-300" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </article>
    </>
  );
}
