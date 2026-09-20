-- ============================================================================
-- Noor Al-Quran Academy — Supabase database schema (scaffold)
-- ----------------------------------------------------------------------------
-- HOW TO APPLY (no coding needed):
--   1. Go to https://supabase.com and open your project.
--   2. Click "SQL Editor" in the left menu, then "New query".
--   3. Copy this whole file, paste it, and press "Run".
--   4. Check the "Table Editor" — you should see all tables listed.
--
-- Row Level Security (RLS) is enabled on every table. The starter policies
-- below are intentionally simple — TIGHTEN THEM BEFORE LAUNCH (see notes).
-- ============================================================================

-- UUID generator
create extension if not exists "pgcrypto";

-- Auto-update "updated_at" columns
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- ============================================================================
-- TABLES
-- ============================================================================

-- Every signed-in person (student, parent, teacher, admin)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'student'
    check (role in ('student', 'parent', 'teacher', 'admin')),
  full_name text not null,
  email text,
  phone text,
  country text,
  timezone text,
  locale text default 'en',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Tutor profiles shown on the website
create table public.teachers (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete set null,
  display_name text not null,
  country text,
  languages text[] not null default '{}',
  qualifications text,
  ijazah boolean not null default false,
  years_experience int not null default 0,
  rating numeric(2,1) not null default 5.0,
  subjects text[] not null default '{}',
  gender text check (gender in ('Male', 'Female')),
  intro_video_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Course catalogue (12 courses on the site)
create table public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  level text,
  duration_label text,
  is_active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Pricing plans (2 / 3 / 5 / 7 classes per week, one-on-one & group)
create table public.plans (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  classes_per_week int not null,
  minutes_per_class int not null default 30,
  price_usd_monthly numeric(10,2),
  is_group boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- A student's enrollment in a course + plan (+ assigned teacher)
create table public.enrollments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  course_id uuid not null references public.courses(id),
  plan_id uuid references public.plans(id),
  teacher_id uuid references public.teachers(id) on delete set null,
  status text not null default 'trial'
    check (status in ('trial', 'active', 'paused', 'cancelled', 'completed')),
  started_at timestamptz,
  created_at timestamptz not null default now()
);

-- Free-trial booking requests from the website form
create table public.trial_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  whatsapp text,
  country text,
  course_slug text,
  timezone text,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'scheduled', 'completed', 'dropped')),
  created_at timestamptz not null default now()
);

-- Scheduled live classes
create table public.classes (
  id uuid primary key default gen_random_uuid(),
  enrollment_id uuid references public.enrollments(id) on delete cascade,
  teacher_id uuid references public.teachers(id) on delete set null,
  student_id uuid references public.profiles(id) on delete cascade,
  starts_at timestamptz not null,
  ends_at timestamptz,
  meeting_url text,
  status text not null default 'scheduled'
    check (status in ('scheduled', 'completed', 'cancelled', 'rescheduled')),
  created_at timestamptz not null default now()
);

-- Attendance + teacher notes per class
create table public.attendance (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null unique references public.classes(id) on delete cascade,
  status text not null default 'present'
    check (status in ('present', 'absent', 'late', 'excused')),
  notes text,
  created_at timestamptz not null default now()
);

-- Homework assigned by teachers
create table public.homework (
  id uuid primary key default gen_random_uuid(),
  class_id uuid references public.classes(id) on delete set null,
  student_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  description text,
  due_at timestamptz,
  status text not null default 'assigned'
    check (status in ('assigned', 'submitted', 'reviewed')),
  created_at timestamptz not null default now()
);

-- Payments (Stripe / PayPal)
create table public.payments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  amount numeric(10,2) not null,
  currency text not null default 'USD',
  provider text check (provider in ('stripe', 'paypal')),
  provider_ref text,
  status text not null default 'pending'
    check (status in ('pending', 'succeeded', 'failed', 'refunded')),
  created_at timestamptz not null default now()
);

-- Invoices for the billing page
create table public.invoices (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  payment_id uuid references public.payments(id) on delete set null,
  amount numeric(10,2) not null,
  currency text not null default 'USD',
  period_start date,
  period_end date,
  status text not null default 'unpaid'
    check (status in ('unpaid', 'paid', 'void')),
  pdf_url text,
  created_at timestamptz not null default now()
);

-- Testimonials shown on the site
create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  student_name text not null,
  country text,
  rating int not null default 5 check (rating between 1 and 5),
  text text not null,
  video_url text,
  is_featured boolean not null default false,
  is_approved boolean not null default false,
  created_at timestamptz not null default now()
);

-- Blog posts
create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  content text,
  cover_url text,
  locale text not null default 'en',
  status text not null default 'draft'
    check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- FAQs (editable without code changes)
create table public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  locale text not null default 'en',
  sort_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Referral program
create table public.referrals (
  id uuid primary key default gen_random_uuid(),
  referrer_id uuid not null references public.profiles(id) on delete cascade,
  referee_email text,
  code text unique not null,
  status text not null default 'sent'
    check (status in ('sent', 'signed_up', 'rewarded')),
  reward text,
  created_at timestamptz not null default now()
);

-- Certificates awarded to students (downloadable PDFs)
create table public.certificates (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  course_id uuid references public.courses(id) on delete set null,
  title text not null,
  pdf_url text,
  issued_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

-- updated_at triggers
create trigger trg_profiles_updated
  before update on public.profiles
  for each row execute function public.set_updated_at();
create trigger trg_teachers_updated
  before update on public.teachers
  for each row execute function public.set_updated_at();
create trigger trg_blog_posts_updated
  before update on public.blog_posts
  for each row execute function public.set_updated_at();

-- ============================================================================
-- ROW LEVEL SECURITY — STARTER POLICIES (tighten before launch!)
-- ============================================================================
-- "Tighten before launch" means: replace the broad policies below with ones
-- that check exact roles (e.g. only admins can write courses) and that users
-- can only read their OWN rows. Ask your developer before going live.

alter table public.profiles       enable row level security;
alter table public.teachers       enable row level security;
alter table public.courses        enable row level security;
alter table public.plans          enable row level security;
alter table public.enrollments    enable row level security;
alter table public.trial_requests enable row level security;
alter table public.classes        enable row level security;
alter table public.attendance     enable row level security;
alter table public.homework       enable row level security;
alter table public.payments       enable row level security;
alter table public.invoices       enable row level security;
alter table public.testimonials   enable row level security;
alter table public.blog_posts     enable row level security;
alter table public.faqs           enable row level security;
alter table public.referrals      enable row level security;
alter table public.certificates   enable row level security;

-- Public read-only content (website pages)
create policy "Public can read active courses"
  on public.courses for select using (is_active = true);
create policy "Public can read active plans"
  on public.plans for select using (is_active = true);
create policy "Public can read active teachers"
  on public.teachers for select using (is_active = true);
create policy "Public can read approved testimonials"
  on public.testimonials for select using (is_approved = true);
create policy "Public can read published posts"
  on public.blog_posts for select using (status = 'published');
create policy "Public can read active FAQs"
  on public.faqs for select using (is_active = true);

-- Anyone can submit a trial request (website form) — tighten rate limits later
create policy "Anyone can request a trial"
  on public.trial_requests for insert
  to anon, authenticated
  with check (true);

-- Signed-in users: read their own rows (STARTER — tighten before launch)
create policy "Users read own profile"
  on public.profiles for select to authenticated
  using (auth.uid() = id);
create policy "Users read own enrollments"
  on public.enrollments for select to authenticated
  using (auth.uid() = student_id);
create policy "Users read own classes"
  on public.classes for select to authenticated
  using (auth.uid() = student_id);
create policy "Users read own homework"
  on public.homework for select to authenticated
  using (auth.uid() = student_id);
create policy "Users read own payments"
  on public.payments for select to authenticated
  using (auth.uid() = student_id);
create policy "Users read own invoices"
  on public.invoices for select to authenticated
  using (auth.uid() = student_id);
create policy "Users read own certificates"
  on public.certificates for select to authenticated
  using (auth.uid() = student_id);
create policy "Users read own referrals"
  on public.referrals for select to authenticated
  using (auth.uid() = referrer_id);

-- NOTE: service_role key bypasses RLS — use it ONLY in server-side code.
