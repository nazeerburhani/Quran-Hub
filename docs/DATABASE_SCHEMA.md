# Database Schema — Plain-Language Guide

The database is like a set of filing cabinets. Each **table** is one cabinet, each **row** is one folder inside it. The full technical blueprint is in `supabase/schema.sql`.

## What each table is for

| Table | What it stores | Used by |
|---|---|---|
| `profiles` | Every signed-in person: name, role (student / parent / teacher / admin), country, timezone | Portals, admin |
| `teachers` | Tutor profiles shown on the site: country, languages, qualifications, Ijazah, experience, rating, subjects | Teachers page, matching |
| `courses` | The 12 courses: title, description, level, duration | Courses pages |
| `plans` | Pricing plans: classes per week, minutes, monthly price | Pricing page, billing |
| `enrollments` | Links a student → course → plan → teacher, with status (trial / active / paused / cancelled / completed) | Student & admin portals |
| `trial_requests` | Free-trial form submissions from the website (name, email, WhatsApp, country, course, timezone) | Admin follow-up |
| `classes` | Each scheduled live class: when, which teacher & student, meeting link, status | Dashboards, calendar |
| `attendance` | Was the student present, absent, late? + teacher notes | Progress tracking |
| `homework` | Assignments: title, due date, status (assigned / submitted / reviewed) | Student dashboard |
| `payments` | Money received via Stripe or PayPal: amount, currency, status | Billing, admin |
| `invoices` | Bills/receipts per student per period (PDF link) | Billing page |
| `testimonials` | Reviews shown on the site (only `is_approved = true` appear publicly) | Home, marketing |
| `blog_posts` | Articles (only `status = 'published'` appear publicly) | Blog, SEO |
| `faqs` | Questions & answers (editable without touching code) | FAQ sections |
| `referrals` | Referral program: who invited whom, reward status | Referral system |
| `certificates` | Certificates earned by students (downloadable PDF link) | Student dashboard |

## How to apply it in Supabase (5 minutes, no coding)

1. Go to [supabase.com](https://supabase.com) and open your project (create one free if needed).
2. In the left menu click **SQL Editor** → **New query**.
3. Open `supabase/schema.sql`, copy everything, paste it into the editor.
4. Press **Run** (or Ctrl+Enter). You should see "Success".
5. Open **Table Editor** in the left menu — all 16 tables are now there.

## About security (RLS)

Every table has **Row Level Security** switched on. Starter rules are included:

- **Public** (no login): can *read* courses, plans, active teachers, approved testimonials, published blog posts, active FAQs — and can *submit* trial requests.
- **Logged-in users**: can read only their *own* profile, enrollments, classes, homework, payments, invoices, certificates, referrals.

> ⚠️ **Before launch:** these starter rules are intentionally simple. Have your developer tighten them (e.g. only admins can edit courses; teachers see only their students) before real student data goes in.

## Next steps

- Fill `courses`, `plans`, `teachers`, `faqs` with real content via Table Editor (or the future admin panel).
- Connect the website forms (`FreeTrialForm`, `EnrollModal`) to insert into `trial_requests` and `enrollments` — currently they run in demo mode.
