# Folder Structure — Noor Al-Quran Academy Website

Think of the project like a well-organized office. Every file has a fixed place so anyone can find things later.

```
quran-academy/
├── app/                          ← Pages of the website (Next.js App Router)
│   ├── layout.tsx                ← Shared frame: header, footer, fonts, SEO tags
│   ├── page.tsx                  ← HOME page (the one built in this step)
│   ├── globals.css               ← Colors, fonts, buttons, patterns
│   ├── manifest.ts               ← Makes the site installable as a phone app (PWA)
│   ├── sitemap.ts                ← Tells Google which pages exist
│   └── robots.ts                 ← Tells Google it may index the site
│
├── components/
│   ├── layout/                   ← Appears on every page
│   │   ├── Header.tsx            ← Sticky top bar: logo, menu, language, theme, CTA
│   │   ├── Footer.tsx            ← Bottom: links, contact, payment badges
│   │   ├── WhatsAppFloat.tsx     ← Green pulsing WhatsApp button (bottom-right)
│   │   ├── ChatWidget.tsx        ← On-site chat bot with WhatsApp handoff
│   │   ├── LanguageSwitcher.tsx  ← English / اردو / العربية (+ RTL switching)
│   │   └── ThemeToggle.tsx       ← Dark / light mode sun–moon button
│   ├── home/                     ← Sections of the HOME page only
│   │   ├── Hero.tsx              ← Big headline + 3D background + two CTAs
│   │   ├── HeroScene.tsx         ← The 3D particle animation (loads in browser only)
│   │   ├── TrustBadges.tsx       ← 6 trust badges row
│   │   ├── Stats.tsx             ← Animated counters (students, teachers…)
│   │   ├── CourseShowcase.tsx    ← 12 course cards with 3D tilt + Enroll buttons
│   │   ├── EnrollModal.tsx       ← "Enroll Now" pop-up form
│   │   ├── HowItWorks.tsx        ← 3 steps section
│   │   ├── TeacherCarousel.tsx   ← Scrollable teacher cards
│   │   ├── PricingPreview.tsx    ← Plans with billing toggle + currency selector
│   │   ├── Results.tsx           ← Student outcome highlights
│   │   ├── Testimonials.tsx      ← Rotating parent/student reviews
│   │   ├── FreeTrialForm.tsx     ← Trial booking form (timezone auto-detect)
│   │   ├── FAQ.tsx               ← Accordion of 8 questions
│   │   └── FinalCTA.tsx          ← Big closing call-to-action
│   ├── ui/                       ← Reusable building blocks
│   │   ├── Button.tsx            ← Magnetic gold/glass/WhatsApp buttons
│   │   ├── SectionHeading.tsx    ← Eyebrow + title + description pattern
│   │   └── Reveal.tsx            ← Scroll-reveal animation wrapper
│   └── seo/
│       └── JsonLd.tsx            ← Google structured data (Organization, FAQ…)
│
├── lib/
│   ├── site.ts                   ← ★ CHANGE BRAND/COURSES/TEACHERS/PRICES HERE
│   ├── i18n.ts                   ← English/Urdu/Arabic translations (header + hero)
│   └── analytics.tsx             ← Google Analytics 4 + Meta Pixel (auto on/off)
│
├── supabase/
│   └── schema.sql                ← Database tables (paste into Supabase SQL Editor)
│
├── docs/                         ← You are here — plain-language guides
│
├── public/
│   └── icon.svg                  ← Logo icon (used for PWA + favicon)
│
├── package.json                  ← Project ingredients list
├── tsconfig.json / next.config.mjs / tailwind.config.ts / postcss.config.mjs
├── .env.example                  ← Copy to .env.local and fill in your keys
└── README.md                     ← Start-here guide
```

## Where future pages go (next steps)

| Page | New files to create |
|---|---|
| Courses (list + 12 detail pages) | `app/courses/page.tsx`, `app/courses/[slug]/page.tsx` |
| Teachers | `app/teachers/page.tsx` (+ reuse `components/home/TeacherCarousel.tsx` ideas) |
| Fees / Pricing (full) | `app/pricing/page.tsx` |
| Free Trial (dedicated page) | `app/trial/page.tsx` |
| About / Founder (Nazeer Ahmad) | `app/about/page.tsx` |
| Blog (list + articles) | `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` |
| Contact | `app/contact/page.tsx` |
| Legal | `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/refund/page.tsx` |
| Country landing pages (SEO) | `app/usa/page.tsx`, `app/uk/page.tsx` … (or `app/[country]/`) |
| Student portal | `app/dashboard/…` (login required) |
| Teacher portal | `app/teacher/…` (login required) |
| Admin panel | `app/admin/…` (login required) |

**Rule of thumb:** one folder per page under `app/`, shared pieces under `components/`, all editable content (courses, teachers, prices, FAQs) in `lib/site.ts`.
