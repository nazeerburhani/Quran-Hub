# QuranHub — Online Quran Academy Website

Live one-on-one online Quran classes for kids and adults. Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Three.js**.

## Quick start (your computer)

You need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
# 1. Install the ingredients
npm install

# 2. Start the website on your computer
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site appears. Edit any file and the page updates instantly.

```bash
# Check for code errors
npm run typecheck

# Build the production version (what Vercel runs)
npm run build
```

## Make it yours

| Change | Where |
|---|---|
| Academy name, WhatsApp, email, founder | `lib/site.ts` (top of the file) |
| Courses (titles, descriptions, durations) | `lib/site.ts` → `COURSES` |
| Teachers | `lib/site.ts` → `TEACHERS` |
| Prices (currently placeholders) | `lib/site.ts` → `PLANS` |
| FAQs | `lib/site.ts` → `FAQS` |
| Testimonials | `lib/site.ts` → `TESTIMONIALS` |
| Header/hero translations (EN/UR/AR) | `lib/i18n.ts` |
| Colors, fonts | `tailwind.config.ts`, `app/globals.css` |

## Environment variables

```bash
cp .env.example .env.local
```

Fill in `.env.local` with your keys (Supabase, Stripe, analytics…). The site works without them — analytics and integrations simply stay off until configured.

## Guides (plain language)

- `docs/FOLDER_STRUCTURE.md` — where everything lives + where future pages go
- `docs/DATABASE_SCHEMA.md` — the 16 database tables + how to create them in Supabase
- `docs/DEPLOYMENT.md` — going live on Vercel, step by step
- `docs/SEO_CHECKLIST.md` — Google first-page plan + 30 blog topics
- `docs/LAUNCH_CHECKLIST.md` — tick-box list before announcing the site

## What's built (this step)

Home page only: 3D animated hero, trust badges, animated stats, 12 course cards with 3D tilt + enrollment modal, 3-step how-it-works, teacher carousel, pricing preview (placeholder prices), results, testimonials, free-trial form with timezone auto-detect, FAQ accordion, final CTA — plus floating WhatsApp button, FAQ chat bot, EN/UR/AR language switcher with RTL, dark/light mode, SEO metadata + JSON-LD, sitemap, robots, PWA manifest, and the Supabase schema.

## Roadmap (next steps)

1. Course detail pages, teachers page, full pricing page, dedicated trial page
2. About/founder, blog, contact, legal pages; country landing pages (USA, UK, Canada, Australia…)
3. Supabase auth + connect forms to `trial_requests` / `enrollments`
4. Stripe + PayPal payments; LiveKit/Zoom live classes
5. Student, teacher and admin portals
