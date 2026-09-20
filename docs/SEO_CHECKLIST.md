# SEO Checklist — Getting to Google's First Page

SEO = making Google love your site so parents find you when they search "online Quran classes". This is already ~70% built into the code. The rest is content + consistency.

## A. Technical SEO (mostly DONE in this build)

- [x] Server-rendered pages (Next.js SSR/SSG) — Google reads full content
- [x] Unique `<title>` and meta description per page
- [x] One `<h1>` per page, logical heading order (h2 → h3)
- [x] Clean URLs (e.g. `/courses/noorani-qaida` when course pages are built)
- [x] XML sitemap (`/sitemap.xml`) + `robots.txt` (`/robots.txt`)
- [x] Canonical URLs + `hreflang` (en / ur / ar) in metadata
- [x] Structured data (JSON-LD): Organization + WebSite on every page, FAQPage on home
- [x] Semantic HTML, alt text, keyboard focus states, skip link (accessibility helps rankings)
- [x] Mobile-first responsive, dark/light mode
- [x] 3D hero loads only in the browser (`ssr: false`) so it never slows Google's crawl
- [ ] **To do:** add Course, Review, LocalBusiness and Person schema when those pages are built
- [ ] **To do:** compress/convert images to WebP/AVIF, add descriptive alt text
- [ ] **To do:** run PageSpeed Insights and keep all Core Web Vitals green (target 95+ Lighthouse)

## B. Content plan — be deeper and better than the top 10

For each money keyword, publish a page that is **longer, clearer and more useful** than competitors:

Target keywords: `online quran academy`, `online quran classes`, `learn quran online`, `online quran tutor`, `quran classes for kids`, `online tajweed classes`, `online hifz classes`, `noorani qaida online`, `online quran classes with female teacher`, `quran classes USA / UK / Canada / Australia`.

Each course + country page should include: what the course covers, who it's for, how classes work, teacher credentials, pricing, FAQs (long-tail questions), reviews, and a clear trial CTA.

## C. 90-day content calendar — 30 blog topics

Publish 2–3 per week. Each post: 1,200+ words, one H1, FAQ section, internal links.

**Tajweed (weeks 1–3)**
1. 10 Most Common Tajweed Mistakes Beginners Make (and How to Fix Them)
2. Makharij Made Simple: Where Every Arabic Letter Comes From
3. Noon Sakinah Rules Explained with Examples
4. Meem Sakinah Rules: Ikhfa, Idgham and Izhar Shafawi
5. Madd (Elongation) Rules: A Complete Beginner's Chart
6. Qalqalah Letters: Why Your Dal and Qaf Bounce
7. Waqf (Stopping) Rules: Where to Pause in Recitation
8. How Long Does It Take to Learn Tajweed Properly?

**Hifz / memorization (weeks 4–6)**
9. How to Memorize the Quran: The Sabaq–Sabqi–Manzil System
10. 15 Proven Tips to Memorize Faster and Forget Less
11. Best Time of Day for Hifz (Backed by Memory Science)
12. How to Revise: Keeping 10 Paras Strong While Learning New Ones
13. Memorizing as an Adult: It's Not Too Late
14. Juz Amma First? The Smartest Order to Memorize

**Kids (weeks 7–9)**
15. At What Age Should a Child Start Quran Classes?
16. 7 Ways to Make Quran Learning Fun for Kids
17. How to Choose an Online Quran Teacher for Your Child
18. Noorani Qaida at Home: A Parent's Step-by-Step Guide
19. Screen Time vs. Quran Time: Building a Daily Habit

**Adults, sisters & new Muslims (weeks 10–11)**
20. Learning Quran as a Busy Adult: A Realistic Weekly Plan
21. Why Sisters Prefer Female Quran Teachers (and Where to Find One)
22. New Muslim Starter Pack: Salah, Duas and First Surahs
23. I Never Learned as a Child — Can I Start at 40? (Yes.)

**Comparisons & decisions (weeks 12–13)**
24. Online vs. Local Mosque Quran Classes: Honest Pros and Cons
25. 1-on-1 vs. Group Quran Classes: Which Is Right for You?
26. How Much Do Online Quran Classes Cost? (2026 Price Guide)
27. 7 Questions to Ask Before Choosing an Online Quran Academy
28. What Is Ijazah? Understanding the Chain of Transmission
29. Hafs vs. Warsh: The Different Qira'at Explained Simply
30. Ramadan Plan: How to Finish One Quran Recitation in 30 Days

## D. Internal linking plan

- Every blog post links to: its course page, the free-trial section (`/#trial`), and 2–3 related posts.
- Every course page links to: related courses ("Students also take…"), teacher profiles, pricing, FAQ.
- Home page sections link down to detail pages (never leave a card without a link).
- Footer links to all key pages; add breadcrumb schema on detail pages.

## E. Backlink plan (get other sites to link to you)

1. **Directories:** list the academy on Islamic school/mosque directories and education listings.
2. **Google Business Profile:** create it, add photos, collect reviews, post weekly.
3. **Guest posts:** write for Islamic blogs/magazines (parenting, new-Muslim, education topics).
4. **Communities:** genuinely helpful answers on Reddit (r/islam), Quora, Facebook parenting groups — link only where truly useful.
5. **Partnerships:** mosques, Islamic schools and influencers; offer their community a discount code.
6. **Free resources:** publish a free printable Noorani Qaida chart / Tajweed cheat-sheet — these earn links naturally.

## F. Local SEO (country pages)

Build one landing page per market: "Online Quran Classes in the USA", "…in the UK", "…in Canada", "…in Australia" (+ UAE, Europe, Pakistan). Each page: local spelling/pricing hints, timezone reassurance, local testimonials, FAQ, LocalBusiness schema. Register Google Business Profile per region where possible.
