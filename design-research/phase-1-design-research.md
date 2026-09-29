# Phase 1 — Design Research: QuranHub Redesign

**Date:** 2026-09-20 · **Method:** text-fetch analysis of competitor homepages + course/pricing pages (browser.search + browser.open). No live browser visits; visual claims are limited to what text fetches revealed — see the palette caveat below.

**Scope:** 5 Quran academies + 2 best-in-class edtech marketplaces.

> **Palette caveat:** text-only fetches do not expose CSS colors, so per-site palettes below are described structurally (imagery treatment, visual language) rather than as hex values. The build team should do a 30-minute visual pass on the live sites (linked) to confirm exact colors before theming.

**Sites studied:**
- Simply Quran — https://simplyquran.com/
- Riwaq Al Quran — https://riwaqalquran.com/ (blog page + SEO pages fetched)
- Eaalim — https://eaalim.com/ (courses catalog + UK pages fetched)
- Noor Academy — https://nooracademy.com/ (programs + pricing pages fetched)
- Madinah Quran Academy — https://madinahquranacademy.com/
- Preply — https://preply.com/
- italki — https://www.italki.com/

---

## 1. Simply Quran (simplyquran.com) — the premium benchmark

The most polished Quran academy found. Minimal, editorial, calm — the anti-template. Closest in spirit to what QuranHub should feel like.

- **Palette/imagery (inferred):** typography-led, generous whitespace; Arabic calligraphy (e.g. وَرَتِّلِ ٱلْقُرْءَانَ تَرْتِيلًا) used as a design element rather than stock photography; single-letter Arabic glyphs (ق ت ح ا) as course icons. No clutter, no emoji-style decoration.
- **Hero:** headline "Online Quran lessons built around your goals." + subhead + inline trust line "✓ 30-minute one-to-one trial · Adults and children welcome · No long-term commitment". No hype.
- **"Alive" element:** an interactive "Your Quran journey / Today's focus" widget — verse calligraphy + chips (Accurate reading, Teacher-guided focus 70%, Read one page fluently…, Live online, Male or female, Focus changes with progress). It feels like a living dashboard, not a brochure.
- **Structure:** numbered editorial sections (01–04); a pain-point section ("A clearer way to learn": unsure what to focus on / struggling with consistency / fixed programme); "One personalised Quran learning plan."
- **Trust signals:** anti-commitment framing ("No long-term commitment", "Rolling monthly plans"); personalization as the promise.
- **Courses:** presented as three adaptive focuses (Improve your Quran reading / Apply Tajweed correctly / Memorise and retain the Quran) — NOT a course catalog; the pitch is "you don't need to choose, the teacher adapts."
- **Teachers:** male/female choice framed as "Suitable teacher — Male or female"; no bios/photos on homepage.
- **Pricing:** plans by FREQUENCY, not subject — £60/mo "Consistency" (2 lessons/wk), £85/mo "Momentum" (3/wk, Most popular), £180/mo (6/wk, "Intensive"). Every plan includes reading+Tajweed+memorization; "Choose the pace—not the subject." Named plans beat generic tiers.
- **Reviews:** none visible on homepage — a gap QuranHub can exploit.
- **CTA/copy:** "Book Your Free Trial Lesson", "Start With a Free Trial" per pricing tier; free trial reframed as a "3-step assessment and personalisation process — not merely a sample lesson" (Tell us about the learner → free one-to-one lesson → personalised recommendation).
- **Free funnel:** "Free Quran learning library" — free classes (Memorisation, Qaida Foundations 12-lesson series, Tajweed Book 1) with "Free class"/"Free" tags.
- **Premium feel:** restraint. Short sentences, numbered rhythm, Arabic letterforms as ornament, zero stock religiosity.
- **Steal:** plan-by-frequency pricing, named plans, "trial as personalization", journey widget, Arabic glyphs as iconography.

## 2. Riwaq Al Quran (riwaqalquran.com) — credential-led authority

Egyptian academy; competes on scholarly lineage. Strongest trust engineering in the niche.

- **Hero:** "Learn Quran Online With The Leading Online Quran Academy" + subhead ("For 9+ years, our Azhari tutors… have taught 1000+ students"); bullets (Flexible schedules, One-on-one sessions, Qualified Tutors); dual CTA "Get Started Now" / "Explore Courses".
- **Trust signals (the core):** every tutor holds an **Ijazah** (unbroken sanad to the Prophet ﷺ) and graduated from **Al-Azhar University**; "9+ years", "1000+ students", **2 Free Trial Classes**, **100% Money-Back Guarantee**, plans from $32/month (UK pages show £26/month, GBP pricing, 24/7 scheduling).
- **"Live" elements:** embedded **real live-session video clips** ("Experience Riwaq Al Quran Classes — Watch real moments from our live sessions"); testimonial section ("Why Students Love Learning with Riwaq Al Quran") also uses video embeds.
- **Imagery:** course imagery per program (Noorani Qaida, Tajweed, Hifz, Islamic Studies); heavy use of real-class stills.
- **Courses:** Noorani Qaida, Tajweed, Hifz, Qirat, Tafseer, Arabic, Ijazah, Islamic Studies — each with its own landing page + blog support.
- **Teachers:** "Al-Azhar certified, Ijazah-holding tutors"; country-localized pages; no public tutor directory.
- **Pricing:** from $32/month; money-back guarantee does the heavy lifting instead of complex tiers.
- **CTA/copy:** frequent, warm-urgent — "Enroll Your Kid in Riwaq's Quran Classes for Kids with a FREE trial", "Book Your Child's Free Trial Class Now →", "Start your Hifz journey with a Free Trial"; mid-article CTA cards inside every blog post.
- **Sessions made tangible:** publishes the exact session sequence (Opening revision → Error correction → New material → Active practice → Closing recap) and age-calibrated lengths (25–30 min for ages 4–7; 45–60 min for older). Specificity = believability.
- **Funnel:** dedicated enrollment portal (portal.riwaqalquran.com); deep SEO blog with localized pages (UK kids, women's Hifz, etc.).
- **Premium feel:** authority + proof density. Scholarly, structured, confident.
- **Steal:** Ijazah/Al-Azhar credential framing (if true for QuranHub tutors), real-session clips (click-to-play), published session structure, 100% money-back guarantee, mid-article trial CTAs.

## 3. Eaalim (eaalim.com) — UK-localized, catalog depth

London-based (297A W Green Rd, N15), modern Next.js build. Wins on specificity and niche positioning.

- **Hero (Learn page):** "Online Quran Classes With Tajweed via Al-Azhar Teachers in the UK"; subhead "Learn Quran with Confidence — Even If Arabic Is Not Your First Language".
- **Trust signals:** London address, **GBP pricing, GMT/BST scheduling**, DBS-aware safeguarding, "taught hundreds of London families since 2009", Al-Azhar certified native-Arabic teachers, weekly accountability.
- **Courses:** **filterable catalog** (All / Quran / Islamic Studies / Arabic) with ~25 courses; each card = custom illustration, SEO-rich title, 2-line description, "See More". Niche winners: "Learn Quran Online with Tajweed in 50 Hours", kids-with-ADHD course, Down syndrome course, "Recite like Al-Husary/Al-Minshawi/Al-Afasy", "Design Your Own Course", Ijazah with documented sanad.
- **Teachers:** "dedicated, highly qualified… Arabic native speaker Al-Azhar graduates"; teacher assigned within 24h of trial booking.
- **Pricing:** not on homepage; trial-led funnel ("Start 2 Free Trials", eaalim.com/free-trial): free 30-minute REAL lesson with a real teacher, "not a sales call".
- **Reviews:** not prominent — another gap.
- **How-it-works:** 3 steps — Book free trial → Try 2 free lessons → teacher assesses level and recommends a path through the colour-coded Aalim Book.
- **Imagery:** custom webp illustrations (not stock photos); clean, consistent illustration system.
- **CTA/copy:** "Start 2 Free Trials", "Start your journey with Eaalim today!"; hyper-local copy ("fits the school run and the Tube commute").
- **Premium feel:** modern stack + obsessive specificity (lesson lengths by age: 30 min, 15–20 for under-7s; outcomes with timelines, e.g. "Al-Fatihah memorized in 7–14 days"). Data beats adjectives.
- **Steal:** filterable course catalog, niche course angles, 3-step how-it-works, locality trust signals, free-real-lesson framing, custom illustration system over stock.

## 4. Noor Academy (nooracademy.com) — K-12 kids school

Friendly, illustration-driven children's platform (ages 5–18). Best kids-UX ideas; weakest "premium" feel.

- **Brand/imagery:** illustrated mascots **"Noor & Nora"** (SVG characters); bright, playful, emoji-adjacent (⭐🐝); multimedia curriculum (video/audio/text + interactive live lessons) built by Al-Azhar scholars; own textbooks.
- **Hero (K-12 page):** "Live Quran, Arabic, and Islamic Studies, taught year-round. Join anytime." + "ENROLL".
- **Programs:** "Choose your child's programs" — three cards: **Quran Classes** ("read Quran online with tajweed, memorize whole surahs"), **Arabic Language Classes**, **Islamic Studies** ("Learn about Islam with Noor & Nora (and your live teacher!)… fun videos, games"). Group model: live classes 5 days/week, 45 minutes.
- **Trust signals:** Expert Faculty (Al-Azhar certified), Live Interaction (real-time Q&A and feedback), **Progress Tracking** (regular evaluations & reports), Personal Support (dedicated academic supervisors); monthly assessments; **certificate on course completion**.
- **Pricing page (strongest pattern):** six tiers by classes/week with **strike-through anchors** ($49→$39 … $219→$168); "NO REGISTRATION FEE"; **"Most popular"** gold-highlighted tier; **"40% OFF Your First Month"** promo banner; "100% money-back guarantee within 7 days"; **Family Plans** (50% off each child after the first two, up to five children) + sibling discounts; emotional closer: "Yet, learning the Holy Quran is PRICELESS!"
- **Teachers:** "Qualified Arab and non-Arab Teachers. Students can select Teachers. Class timings available 24 hours."
- **Reviews:** "What Parents Are Saying" section with star ratings.
- **CTA/copy:** "ENROLL", "Learn More" per program; promo video on About (note: must be click-to-play, never autoplay).
- **Premium feel:** low — cheerful and kid-trustworthy, but reads "school", not "luxury". The PRICING page, however, is the best-converting pattern in the niche.
- **Steal:** pricing-page mechanics (anchors, most-popular highlight, family plans, no-fee + guarantee stacking), certificates, monthly assessments, progress tracking, mascot-free version of "friendly" for kids' sections.

## 5. Madinah Quran Academy (madinahquranacademy.com) — the cautionary tale

Dated, text-heavy site. Useful as a negative example and for urgency-copy analysis.

- **Design:** no modern hero; walls of text; hadith quote as the opener ("The best among you are those who learn the Quran and teach it"). Feels 2010.
- **Trust signals:** run by Islamic students of Madinah; scholar-supervised; "strict Shari guidelines".
- **Courses:** program tables with codes — Beginners (BP), Recitation (RP), Memorisation (MP): Part-Time 3/wk $49 / Full-Time 6/wk $98; Fast Track Tahfeez $98–$196; Arabic Language; Tafseer. Clear but clinical.
- **CTA/copy:** "Admissions are OPEN. Hurry up and Register Today! … Suitable time-slots have opened up. Apply immediately to avoid disappointment!" — heavy manufactured urgency.
- **Lesson for QuranHub:** urgency without polish cheapens the brand. Earn urgency from REAL constraints (limited tutor slots, trial calendar filling) and wrap it in premium design; never "Hurry up and Register Today!" energy.

## 6. Preply (preply.com) — marketplace benchmark

Product-led conversion machine. Structural patterns worth stealing wholesale.

- **Hero:** slogan banner "Learn languages with expert online tutors. Book your lesson today!"; localized variant: "Effektiver lernen mit dem besten Sprachunterricht."
- **Stat band directly under hero:** 100,000+ tutors · 300,000+ 5-star reviews · 4.8 App Store rating — trust before scrolling.
- **How-it-works (3 numbered steps)** with tutor profile cards embedded mid-explanation: photo, name, rating (4.9), languages spoken — social proof woven INTO the explainer.
- **Guarantee banner:** "Lessons you'll love. Guaranteed. Try a different tutor for free if you're not satisfied." (free replacement lesson — stronger than money-back for tutoring).
- **Funnel:** quiz-led matching — "answer a few questions and choose a tutor based on budget, goals, preferences." Interactive = alive.
- **Pricing:** tutors set own rates; trial lessons discounted; subscription model.
- **Trust:** AI-powered lesson insights (transcript analysis → personalized feedback), 800,000+ students, 180 countries.
- **Premium feel:** clean cards, real tutor photography, zero clutter; every section converts.
- **Steal:** stat band, tutor cards inside how-it-works, quiz funnel, replacement-guarantee phrasing, AI progress summaries (adapt: weekly parent progress reports).

## 7. italki (italki.com) — marketplace benchmark

Best "alive" mechanics: instant booking, free tools, community loops.

- **Tutor cards:** photo, name, "Professional teacher" badge, languages, rating, **lessons count** (e.g. 6,458 lessons), "Lessons start from USD 8.00" — lesson count is the killer social proof.
- **Flexibility:** "No subscriptions. Choose your own schedule"; pay-per-lesson; 30–90 min lessons; **Instant Lesson** (book and start NOW) — the "LIVE" mechanic QuranHub can echo with "Tutors online now".
- **Free lead magnets:** free language assessment ("Test your level") with live participant counts ("172,316 are participating"), podcasts, articles, quizzes, prompts.
- **Teacher tiers:** Professional Teacher (certified, experienced) vs Community Tutor — credential ladder builds trust cheaply.
- **Community:** posts + peer feedback loops; FAQ handling objections directly ("How does italki work?", "Is it worth it?").
- **Premium feel:** marketplace-clean, card-driven, data-dense without noise.
- **Steal:** free Tajweed self-assessment quiz, instant-availability mechanic, teacher credential tiers, lesson-count social proof, free content library as funnel, objection-handling FAQ.

---

## Design Decisions for QuranHub (18 directives)

Hard constraints baked in: **no decorative human imagery** (hands-only or no-people photography) · **no music / no autoplay** (all media click-to-play, muted-by-default) · **mobile-first** · **WCAG AA contrast** · **dark/light theme** via design tokens.

1. **Palette (tokens):** deep teal `#0B3B39` primary (from logo); warm sand `#FAF6EF` light background; gold `#D9A441` accent. Dark theme: near-black teal `#062220` surfaces, sand text. Contrast rule: gold is NEVER body text on light (fails AA) — use it for CTAs with dark-teal text, borders, icons, and highlights on dark surfaces only. White `#FFFFFF` cards on sand. Define every pair in tokens and AA-check both themes.
2. **Typography:** high-contrast serif display for headlines (premium editorial feel à la Simply Quran) + clean sans for body/UI. Arabic display face (Amiri or Scheherazade New) for Quranic callouts and single-letter course glyphs (ق ت ح) used as iconography — no generic icon-font clichés.
3. **Hero (full viewport, mobile-first):** cinematic macro photo of an open Quran on a rehal (no people, hands-only at most), dark-teal gradient overlay (left 85% → transparent right). Eyebrow pill: pulsing green dot + "Live 1-on-1 classes · tutors online now". Headline (short, urgent): e.g. "Your child reciting beautifully — within months." Dual CTA: solid gold "Claim My Child's Free Trial" + ghost "See How It Works". Three floating glass stat chips (4.9★ parent rating · students taught · countries) with slow parallax drift on scroll.
4. **Stat band directly under hero** (Preply pattern, animated counters on scroll into view): tutors · lessons delivered · avg rating · countries served. Real numbers only — never fabricate.
5. **How it works — 3 numbered steps** (Eaalim/Riwaq pattern): ① Book your free trial (30 seconds) → ② Meet your tutor on Zoom — we confirm on WhatsApp within 24 hours → ③ Start weekly classes with the SAME tutor. Publish the actual lesson structure (revision → correction → new material → practice → recap) to make the intangible concrete.
6. **Trial framing:** copy Simply Quran — the free trial is a "level assessment + personal plan", not a sample. Headline differentiator: **"3 full days free — most academies give you one lesson."** No credit card, WhatsApp signup.
7. **Pricing — plan by frequency, named plans** (Simply Quran + Noor mechanics): e.g. Foundation (2/wk) / Consistency (3/wk, "Most Popular" gold highlight) / Intensive (5/wk). Strike-through anchors, per-tier "Start Free Trial" CTA, "No registration fee" callout, 7-day money-back badge, family/sibling discount row. Prices in USD with a £/PKR toggle planned.
8. **Courses — filterable card grid** (Eaalim pattern): filter chips (All / Kids / Adults / Memorization / Language). Each card: Arabic-letter glyph art, course name, who it's for, duration/outcome line ("Noorani Qaida → reading fluently in ~3 months"), "View course →". Six courses: Noorani Qaida, Tajweed, Hifz, Tafseer, Arabic, Islamic Studies.
9. **Teachers — credential cards, no photos:** monogram avatar in teal/gold (respects no-people constraint), name, badges (Ijazah / Al-Azhar / Hafiz), years teaching, languages, specialty; filter by male/female; tier label "Certified Tutor". Click-to-play 20-sec voice intro (never autoplay). Same-tutor-every-class guarantee as a trust strip.
10. **"Live" availability widget:** "Tutors online now" indicator + next-available trial slots picker; booking completes via WhatsApp deep link (wa.me) — WhatsApp-first contact per owner. This is the italki "Instant Lesson" mechanic adapted.
11. **Reviews:** summary bar (4.9/5 + platform marks: Google, Trustpilot, Facebook) → auto-scrolling marquee of review cards (pause on hover/touch, full `prefers-reduced-motion` support) → each card: quote, parent name, country flag, course tag, star row. Written reviews only — no video-testimonial autoplay.
12. **Free-value funnel** (italki pattern): "Free Tajweed level check" — a 60-second self-assessment quiz as the lead magnet (email/WhatsApp capture at result); plus a small free library (Qaida starter lessons, Tajweed Book 1) feeding trial CTAs.
13. **Motion system ("alive" without autoplay):** scroll-reveal sections (IntersectionObserver), animated counters, floating-chip parallax, testimonial marquee, subtle shimmer on gold accents — all transform/opacity-based, GPU-cheap. Honor `prefers-reduced-motion` (disable all non-essential motion). Zero autoplay audio/video anywhere.
14. **CTA system:** sticky mobile bottom bar appearing after hero scroll ("Free Trial · WhatsApp Us" — WhatsApp green used ONLY for the WhatsApp action); hero dual CTA; per-section CTAs; owner-approved urgency voice ("Claim My Child's Free Trial", "Don't lose your child's slot"). Every CTA leads to trial booking or wa.me — no dead ends.
15. **Guarantee strip (5 badges, icons + one line each):** 3-Day Free Trial · No Card Required · Same Tutor Every Class · Weekly Parent Progress Reports · 7-Day Money-Back.
16. **Imagery rules:** no decorative people — hands-only or object photography (Quran, rehal, tasbih, calligraphy macro, prayer mat texture); consistent teal-duotone treatment for cohesion; custom 8-point-star geometric SVG pattern for section dividers and empty backgrounds. All images get descriptive alt text.
17. **Mobile-first + a11y build contract:** single-column flow, ≥44px touch targets, visible focus states, semantic headings, skip-to-content link, form labels on every input, AA contrast in BOTH themes, theme toggle persisted (light default per brand).
18. **Content/SEO engine** (Riwaq pattern, Simply Quran tone): course + audience landing pages (kids/adults/Hifz/Tajweed), FAQ schema markup, parent guides with mid-article trial CTAs. Editorial, specific, hype-free copy — data beats adjectives ("Al-Fatihah memorized in ~2 weeks with daily 15-min practice").

### Do NOT copy
- No competitor's text, headlines, testimonials, images, logos, or brand names — patterns only, never content.
- No autoplay of any audio/video (hard constraint); no background music.
- No decorative photos of people (hard constraint) — hands-only or no-people.
- No fake stats, fake reviews, or fake "slots left" counters — urgency must be real (actual tutor availability).
- No manufactured-scarcity copy ("Hurry up and Register Today!" energy) — earn urgency through design + real constraints.
- No WhatsApp-green theming of the whole site — reserve that green for the WhatsApp action only.
- No gold-on-white body text (fails WCAG AA) — gold is accent-only per directive #1.
