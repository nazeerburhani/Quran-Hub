import { SITE, FAQS, COURSES } from "@/lib/site";
import type { Faq } from "@/lib/site";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization + founder schema for the whole site (rendered in layout). */
export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: SITE.name,
        url: SITE.url,
        slogan: SITE.tagline,
        email: SITE.email,
        founder: {
          "@type": "Person",
          name: SITE.founder,
        },
        sameAs: [SITE.facebook, SITE.instagram],
      }}
    />
  );
}

/** WebSite schema (rendered in layout). */
export function WebSiteJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.url,
        inLanguage: ["en"],
      }}
    />
  );
}

/** FAQPage schema for the home page FAQ section. */
export function FaqJsonLd({ faqs = FAQS }: { faqs?: Faq[] }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

/** Course catalog schema — every course as a schema.org Course. */
export function CoursesJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${SITE.name} courses`,
        itemListElement: COURSES.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Course",
            name: `${c.title} — Online Quran Classes`,
            description: c.description,
            url: `${SITE.url}/#courses`,
            provider: {
              "@type": "EducationalOrganization",
              name: SITE.name,
              url: SITE.url,
            },
            educationalLevel: c.level,
            teaches: c.outcome,
            audience: {
              "@type": "EducationalAudience",
              educationalRole: c.whoFor,
            },
          },
        })),
      }}
    />
  );
}
