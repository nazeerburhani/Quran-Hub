# Launch Checklist — Go-Live Without Surprises

Work through this top to bottom. Tick each box before announcing the site.

## 1. Content & brand
- [ ] Academy name in `lib/site.ts` is final
- [ ] Founder section written (Nazeer Ahmad story, photo optional — no decorative human imagery)
- [ ] All 12 course descriptions reviewed for accuracy
- [ ] Teacher profiles are real (replace the 8 sample profiles) with correct qualifications
- [ ] Testimonials are real and approved (or removed until you have them)
- [ ] FAQ answers reviewed by a scholar/teacher
- [ ] Contact email `info@quranhub.academy` actually exists and is monitored
- [ ] WhatsApp number +1 917 722 5120 tested from a real phone

## 2. Pricing & payments
- [ ] PLACEHOLDER prices in `lib/site.ts` replaced with final prices
- [ ] Placeholder currency rates replaced (or a live-rate API added)
- [ ] Sibling/family discounts confirmed and written on the pricing page
- [ ] Stripe account created, keys added to Vercel env vars, test payment succeeds
- [ ] PayPal business account connected, test payment succeeds
- [ ] Refund policy page published and matches actual practice

## 3. Trial & enrollment flow
- [ ] Free trial form saves to Supabase `trial_requests` (currently demo mode)
- [ ] Admin gets instant notification (email + WhatsApp) on every trial request
- [ ] "Enroll Now" modal saves to `enrollments` (currently demo mode)
- [ ] Confirmation email + WhatsApp message templates written and tested
- [ ] Trial → paid conversion process defined (who calls, within how many hours)

## 4. Legal
- [ ] Privacy Policy page published (`/privacy`)
- [ ] Terms of Service published (`/terms`)
- [ ] Refund Policy published (`/refund`)
- [ ] Cookie consent banner added (required once analytics runs)

## 5. Quality assurance (QA)
- [ ] Every button and link clicked — no dead ends
- [ ] Tested on: iPhone + Android phone, tablet, laptop (Chrome, Safari, Firefox)
- [ ] Mobile menu opens/closes; chat widget doesn't cover the WhatsApp button
- [ ] Language switcher: Urdu/Arabic switch layout to RTL correctly
- [ ] Dark/light toggle works; system preference respected on first visit
- [ ] Forms validate (empty submit shows errors; success state appears)
- [ ] Keyboard-only navigation works (Tab through the whole home page)
- [ ] Screen reader spot-check (headings, form labels, accordion)

## 6. Performance
- [ ] Lighthouse score 95+ on mobile (Performance, Accessibility, Best Practices, SEO)
- [ ] Core Web Vitals green in PageSpeed Insights
- [ ] Images are WebP/AVIF with width/height set (no layout shift)
- [ ] 3D hero disabled check: page still looks good with JavaScript off / reduced motion

## 7. Analytics & marketing
- [ ] Google Analytics 4 ID added (`NEXT_PUBLIC_GA_ID`)
- [ ] Meta Pixel ID added (`NEXT_PUBLIC_META_PIXEL_ID`)
- [ ] Google Search Console verified; sitemap submitted
- [ ] Heatmap tool installed (e.g. Microsoft Clarity — free)
- [ ] WhatsApp click tracking confirmed in analytics
- [ ] Welcome email series written (trial booked → reminder → trial ends → offer)
- [ ] Abandoned-enrollment follow-up defined

## 8. Security
- [ ] Supabase RLS policies tightened beyond the starter set
- [ ] `.env.local` never committed to GitHub; Vercel env vars set
- [ ] Admin/portal routes protected by login (when portals are built)

## 9. Go-live
- [ ] Final `git push` → Vercel production deploy green
- [ ] Custom domain connected with HTTPS
- [ ] `NEXT_PUBLIC_SITE_URL` matches the real domain
- [ ] Announce: WhatsApp broadcast, email list, social media, Google Business Profile
- [ ] First-week watch: check trial requests, chat messages and analytics daily
