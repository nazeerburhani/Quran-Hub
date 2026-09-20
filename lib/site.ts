import {
  Award,
  BookA,
  BookMarked,
  BookOpen,
  Brain,
  Compass,
  Flower2,
  Languages,
  MoonStar,
  Smile,
  Sunrise,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Brand — change these values to rebrand the whole site               */
/* ------------------------------------------------------------------ */
export const SITE = {
  /** Academy name (also used in metadata, footer, JSON-LD). */
  name: "QuranHub",
  tagline: "Learn the Quran, live — one on one.",
  founder: "Nazeer Ahmad",
  whatsappDisplay: "+1 917 722 5120",
  /** Digits only, for wa.me links. */
  whatsappRaw: "19177225120",
  email: "info@quranhub.academy",
  defaultWhatsappMessage: "Assalamu Alaikum, I want to know about Quran classes.",
  url: "https://www.quranhub.academy",
  businessHours: "24/7 — teachers available in every timezone",
} as const;

/** Build a wa.me deep link with a pre-filled message. */
export function whatsappLink(message: string = SITE.defaultWhatsappMessage): string {
  return `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------------------------------------------ */
/* Courses (12)                                                        */
/* ------------------------------------------------------------------ */
export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  icon: LucideIcon;
}

export const COURSES: Course[] = [
  {
    id: "noorani-qaida",
    slug: "noorani-qaida",
    title: "Noorani Qaida",
    description:
      "Master the Arabic alphabet, pronunciation points (Makharij) and joining rules — the perfect foundation before reading the Quran.",
    level: "Beginner",
    duration: "3–4 months",
    icon: BookOpen,
  },
  {
    id: "quran-reading-tajweed",
    slug: "quran-reading-tajweed",
    title: "Quran Reading with Tajweed",
    description:
      "Read the Quran fluently and beautifully with correct Tajweed rules, guided live by a certified Qari or Qaria.",
    level: "All levels",
    duration: "6–12 months",
    icon: BookMarked,
  },
  {
    id: "hifz",
    slug: "hifz-memorization",
    title: "Hifz (Memorization)",
    description:
      "A proven Sabaq / Sabqi / Manzil system with daily revision tracking to help you memorize the entire Quran with retention.",
    level: "Intermediate",
    duration: "2–4 years",
    icon: Brain,
  },
  {
    id: "translation-tafseer",
    slug: "quran-translation-tafseer",
    title: "Quran Translation & Tafseer",
    description:
      "Understand what you recite — word-by-word translation and authentic Tafseer explained in simple, clear language.",
    level: "Intermediate+",
    duration: "12+ months",
    icon: Languages,
  },
  {
    id: "arabic-language",
    slug: "arabic-language",
    title: "Arabic Language",
    description:
      "From the alphabet to Quranic grammar (Sarf & Nahw) — learn the language of the Quran step by step.",
    level: "Beginner",
    duration: "6–12 months",
    icon: BookA,
  },
  {
    id: "islamic-studies",
    slug: "islamic-studies",
    title: "Islamic Studies",
    description:
      "Aqeedah, Fiqh, Seerah, Hadith and Akhlaq — a complete essentials program for kids, teens and adults.",
    level: "All levels",
    duration: "6–12 months",
    icon: MoonStar,
  },
  {
    id: "daily-duas-namaz",
    slug: "daily-duas-namaz",
    title: "Daily Duas & Namaz",
    description:
      "Learn Salah step by step with correct postures, plus essential daily duas and adhkar with meanings.",
    level: "Beginner",
    duration: "2–3 months",
    icon: Sunrise,
  },
  {
    id: "quran-for-kids",
    slug: "quran-for-kids",
    title: "Quran for Kids",
    description:
      "Fun, patient, activity-based classes designed for children ages 4+ — with progress reports for parents.",
    level: "Kids 4+",
    duration: "Ongoing",
    icon: Smile,
  },
  {
    id: "quran-for-adults",
    slug: "quran-for-adults",
    title: "Quran for Adults",
    description:
      "Flexible timings for busy professionals and homemakers — start from any level, even from zero.",
    level: "All levels",
    duration: "Ongoing",
    icon: Users,
  },
  {
    id: "quran-for-sisters",
    slug: "quran-for-sisters",
    title: "Quran for Sisters",
    description:
      "Learn comfortably with qualified female teachers — Tajweed, Hifz and Islamic studies for sisters of all ages.",
    level: "All levels",
    duration: "Ongoing",
    icon: Flower2,
  },
  {
    id: "quran-for-new-muslims",
    slug: "quran-for-new-muslims",
    title: "Quran for New Muslims",
    description:
      "A gentle, welcoming path: Shahada essentials, Salah, duas and first steps into Quran reading.",
    level: "Beginner",
    duration: "3–6 months",
    icon: Compass,
  },
  {
    id: "ijazah-program",
    slug: "ijazah-program",
    title: "Ijazah Program",
    description:
      "Earn an unbroken-chain Ijazah in Hafs (or other Qira'at) by reciting the full Quran to a certified Sheikh.",
    level: "Advanced",
    duration: "12–24 months",
    icon: Award,
  },
];

/* ------------------------------------------------------------------ */
/* Teachers (8 sample profiles — replace with real data later)         */
/* ------------------------------------------------------------------ */
export interface Teacher {
  id: string;
  name: string;
  country: string;
  languages: string[];
  qualification: string;
  experienceYears: number;
  rating: number;
  gender: "Male" | "Female";
  subjects: string[];
}

export const TEACHERS: Teacher[] = [
  {
    id: "t1",
    name: "Qari Muhammad Imran",
    country: "Pakistan",
    languages: ["Urdu", "English", "Arabic"],
    qualification: "Ijazah in Hafs, Wafaq-ul-Madaris",
    experienceYears: 12,
    rating: 4.9,
    gender: "Male",
    subjects: ["Tajweed", "Hifz", "Noorani Qaida"],
  },
  {
    id: "t2",
    name: "Ustadha Fatima Zahra",
    country: "Egypt",
    languages: ["Arabic", "English"],
    qualification: "Ijazah, Al-Azhar University graduate",
    experienceYears: 9,
    rating: 5.0,
    gender: "Female",
    subjects: ["Tajweed", "Kids Quran", "Arabic"],
  },
  {
    id: "t3",
    name: "Sheikh Abdullah Rahman",
    country: "USA",
    languages: ["English", "Arabic"],
    qualification: "Ijazah in Hafs & Shu'bah",
    experienceYears: 15,
    rating: 4.9,
    gender: "Male",
    subjects: ["Tafseer", "Ijazah", "New Muslims"],
  },
  {
    id: "t4",
    name: "Ustadha Aisha Khan",
    country: "UK",
    languages: ["English", "Urdu"],
    qualification: "Hafiza, Ijazah in Hafs",
    experienceYears: 7,
    rating: 4.8,
    gender: "Female",
    subjects: ["Sisters", "Kids Quran", "Duas & Namaz"],
  },
  {
    id: "t5",
    name: "Qari Bilal Ahmed",
    country: "Canada",
    languages: ["English", "Urdu", "Arabic"],
    qualification: "Ijazah in Hafs",
    experienceYears: 10,
    rating: 4.9,
    gender: "Male",
    subjects: ["Tajweed", "Hifz", "Arabic"],
  },
  {
    id: "t6",
    name: "Ustadha Maryam Siddiq",
    country: "Australia",
    languages: ["English", "Arabic"],
    qualification: "Hafiza, certified Tajweed instructor",
    experienceYears: 8,
    rating: 5.0,
    gender: "Female",
    subjects: ["Sisters", "Tajweed", "Islamic Studies"],
  },
  {
    id: "t7",
    name: "Sheikh Omar Farouk",
    country: "UAE",
    languages: ["Arabic", "English"],
    qualification: "Ijazah in Hafs & Warsh",
    experienceYears: 14,
    rating: 4.9,
    gender: "Male",
    subjects: ["Qira'at", "Ijazah", "Tafseer"],
  },
  {
    id: "t8",
    name: "Ustadha Zainab Ali",
    country: "Pakistan",
    languages: ["Urdu", "English"],
    qualification: "Hafiza, Ijazah in Hafs",
    experienceYears: 6,
    rating: 4.8,
    gender: "Female",
    subjects: ["Kids Quran", "Noorani Qaida", "Duas & Namaz"],
  },
];

/* ------------------------------------------------------------------ */
/* Pricing plans — PLACEHOLDER prices (replace with final pricing)      */
/* ------------------------------------------------------------------ */
export interface Plan {
  id: string;
  name: string;
  classesPerWeek: number;
  minutesPerClass: number;
  /** Placeholder USD price per month. Replace with real pricing. */
  monthlyUSD: number;
  tagline: string;
  popular?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    classesPerWeek: 2,
    minutesPerClass: 30,
    monthlyUSD: 49,
    tagline: "A gentle start for new learners",
  },
  {
    id: "regular",
    name: "Regular",
    classesPerWeek: 3,
    minutesPerClass: 30,
    monthlyUSD: 69,
    tagline: "Our most loved plan",
    popular: true,
  },
  {
    id: "intensive",
    name: "Intensive",
    classesPerWeek: 5,
    minutesPerClass: 30,
    monthlyUSD: 99,
    tagline: "Fast, steady progress",
  },
  {
    id: "dedicated",
    name: "Dedicated",
    classesPerWeek: 7,
    minutesPerClass: 30,
    monthlyUSD: 129,
    tagline: "Daily learning, maximum results",
  },
];

/** Placeholder currency conversion rates — replace with live rates. */
export const CURRENCIES = [
  { code: "USD", label: "USD — US Dollar", rate: 1 },
  { code: "GBP", label: "GBP — British Pound", rate: 0.79 },
  { code: "CAD", label: "CAD — Canadian Dollar", rate: 1.36 },
  { code: "AUD", label: "AUD — Australian Dollar", rate: 1.52 },
  { code: "AED", label: "AED — UAE Dirham", rate: 3.67 },
  { code: "PKR", label: "PKR — Pakistani Rupee", rate: 278 },
] as const;

/* ------------------------------------------------------------------ */
/* FAQs                                                               */
/* ------------------------------------------------------------------ */
export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "How do online Quran classes work?",
    a: "After booking your free trial, we assess your level and match you with a certified tutor. Classes are live, one-on-one video sessions (30 minutes each) at times you choose. Your teacher shares their screen, listens to your recitation, corrects you in real time, and assigns short homework after every class.",
  },
  {
    q: "Is the free trial really free? Do I need a credit card?",
    a: "Yes — the 3-day free trial is completely free and we never ask for your credit card. It includes a level assessment, a demo class with a real tutor, and a personalized learning plan. You only pay if you decide to continue.",
  },
  {
    q: "Are female teachers available?",
    a: "Absolutely. We have qualified, certified female tutors (Qariahs and Hafizas) from around the world. Many sisters and young children prefer learning with a female teacher — just mention your preference when booking and we will arrange it.",
  },
  {
    q: "What do I need to join a class?",
    a: "Just a phone, tablet or computer with a camera, microphone and a stable internet connection. We use simple video-call software — no technical skills needed, and our team helps you set everything up before your first class.",
  },
  {
    q: "What are the class timings?",
    a: "We teach 24/7. Because our tutors live in many different countries, we can match almost any timezone — USA, UK, Canada, Australia, UAE, Europe, Pakistan and beyond. You pick the days and times that suit your family.",
  },
  {
    q: "How much are the fees?",
    a: "Plans are based on classes per week: 2, 3, 5 or 7 days. Pricing shown on this site is currently a placeholder while we finalize rates — book a free trial or message us on WhatsApp and we will share the exact fee for your country, including sibling and family discounts.",
  },
  {
    q: "What if I am not satisfied? Is there a refund?",
    a: "Yes. We offer a money-back guarantee: if you are not happy after your first paid week, we refund you — no questions asked. You can also pause or cancel your plan at any time.",
  },
  {
    q: "Can I reschedule or pause classes?",
    a: "Yes. Life happens — you can reschedule any class with a few hours' notice from your student dashboard, and pause your plan during travel or Ramadan without losing your progress or your teacher.",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */
export interface Testimonial {
  name: string;
  country: string;
  rating: number;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    country: "United States",
    rating: 5,
    text: "My 7-year-old went from not knowing the alphabet to reading short surahs in four months. His teacher is so patient — he actually looks forward to class.",
  },
  {
    name: "Ahmed R.",
    country: "United Kingdom",
    rating: 5,
    text: "As a working father I thought I had missed my chance. The flexible timings and my Sheikh's corrections in Tajweed have transformed my recitation.",
  },
  {
    name: "Fatima K.",
    country: "Canada",
    rating: 5,
    text: "Learning with a female teacher made all the difference for me. The Hifz program's revision system is excellent — I have memorized 5 paras so far.",
  },
  {
    name: "Bilal S.",
    country: "Australia",
    rating: 5,
    text: "The free trial convinced us immediately. Two of my kids learn with the academy now, and the monthly parent report keeps us fully in the loop.",
  },
  {
    name: "Amina Y.",
    country: "UAE",
    rating: 5,
    text: "I reverted last year and the New Muslims course gave me confidence in Salah within weeks. The teachers are kind, never judgmental, always encouraging.",
  },
];

/* ------------------------------------------------------------------ */
/* Animated stats                                                      */
/* ------------------------------------------------------------------ */
export const STATS = [
  { value: 2500, suffix: "+", label: "Students learning worldwide" },
  { value: 120, suffix: "+", label: "Certified male & female teachers" },
  { value: 40, suffix: "+", label: "Countries served" },
  { value: 500000, suffix: "+", label: "Hours of classes taught" },
] as const;
