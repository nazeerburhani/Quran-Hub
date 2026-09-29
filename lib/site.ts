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
export type CourseCategory = "kids" | "adults" | "memorization" | "language";

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  /** Single Arabic-letter glyph used as course iconography. */
  glyph: string;
  categories: CourseCategory[];
  whoFor: string;
  outcome: string;
  /** Optional scheduling hints used by CourseDetailModal chips. */
  classMinutes?: number;
  daysPerWeek?: number;
  /** Optional format blurb shown in CourseDetailModal. */
  lessonFormat?: string;
  image: string;
  imageAlt: string;
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
    glyph: "ا",
    categories: ["kids", "adults"],
    whoFor: "Ages 4+ and complete beginners",
    outcome: "Reading Arabic fluently in ~3 months",
    image: "/images/course-noorani.jpg",
    imageAlt: "Close-up of elegant Arabic calligraphy letters on paper",
  },
  {
    id: "quran-reading-tajweed",
    slug: "quran-reading-tajweed",
    title: "Quran Reading with Tajweed",
    description:
      "Read the Quran fluently and beautifully with correct Tajweed rules, guided live by a certified Qari or Qaria.",
    level: "All levels",
    duration: "6–12 months",
    glyph: "ت",
    categories: ["kids", "adults"],
    whoFor: "Anyone who can read Arabic script",
    outcome: "Beautiful, correct recitation with Tajweed",
    image: "/images/course-tajweed.jpg",
    imageAlt: "Open Quran showing Arabic verses in close-up",
  },
  {
    id: "hifz",
    slug: "hifz-memorization",
    title: "Hifz (Memorization)",
    description:
      "A proven Sabaq / Sabqi / Manzil system with daily revision tracking to help you memorize the entire Quran with retention.",
    level: "Intermediate",
    duration: "2–4 years",
    glyph: "ح",
    categories: ["memorization", "kids", "adults"],
    whoFor: "Serious students of all ages",
    outcome: "Full Quran memorized — and retained",
    image: "/images/course-hifz.jpg",
    imageAlt: "Quran with tasbih prayer beads resting on it",
  },
  {
    id: "translation-tafseer",
    slug: "quran-translation-tafseer",
    title: "Quran Translation & Tafseer",
    description:
      "Understand what you recite — word-by-word translation and authentic Tafseer explained in simple, clear language.",
    level: "Intermediate+",
    duration: "12+ months",
    glyph: "ف",
    categories: ["adults", "language"],
    whoFor: "Adults and advanced teens",
    outcome: "Understand what you recite",
    image: "/images/course-tafseer.jpg",
    imageAlt: "Stack of Islamic study books beside the Quran",
  },
  {
    id: "arabic-language",
    slug: "arabic-language",
    title: "Arabic Language",
    description:
      "From the alphabet to Quranic grammar (Sarf & Nahw) — learn the language of the Quran step by step.",
    level: "Beginner",
    duration: "6–12 months",
    glyph: "ض",
    categories: ["language", "adults", "kids"],
    whoFor: "Anyone wanting Quranic Arabic",
    outcome: "Read and understand Quranic Arabic",
    image: "/images/course-arabic.jpg",
    imageAlt: "Detailed Arabic calligraphy artwork in gold",
  },
  {
    id: "islamic-studies",
    slug: "islamic-studies",
    title: "Islamic Studies",
    description:
      "Aqeedah, Fiqh, Seerah, Hadith and Akhlaq — a complete essentials program for kids, teens and adults.",
    level: "All levels",
    duration: "6–12 months",
    glyph: "س",
    categories: ["kids", "adults"],
    whoFor: "Kids, teens and adults",
    outcome: "A complete foundation in Islamic essentials",
    image: "/images/course-islamic-studies.jpg",
    imageAlt: "Geometric arches of a mosque interior",
  },
  {
    id: "daily-duas-namaz",
    slug: "daily-duas-namaz",
    title: "Daily Duas & Namaz",
    description:
      "Learn Salah step by step with correct postures, plus essential daily duas and adhkar with meanings.",
    level: "Beginner",
    duration: "2–3 months",
    glyph: "د",
    categories: ["kids", "adults"],
    whoFor: "New learners of all ages",
    outcome: "Confident Salah within ~2 months",
    image: "/images/course-duas.jpg",
    imageAlt: "Open Quran on a rehal with prayer beads on a prayer rug in sunlight",
  },
  {
    id: "quran-for-kids",
    slug: "quran-for-kids",
    title: "Quran for Kids",
    description:
      "Fun, patient, activity-based classes designed for children ages 4+ — with progress reports for parents.",
    level: "Kids 4+",
    duration: "Ongoing",
    glyph: "ق",
    categories: ["kids"],
    whoFor: "Children ages 4–12",
    outcome: "A love for the Quran with steady progress",
    image: "/images/course-kids.jpg",
    imageAlt: "A child's hands resting on an open Quran",
  },
  {
    id: "quran-for-adults",
    slug: "quran-for-adults",
    title: "Quran for Adults",
    description:
      "Flexible timings for busy professionals and homemakers — start from any level, even from zero.",
    level: "All levels",
    duration: "Ongoing",
    glyph: "ب",
    categories: ["adults"],
    whoFor: "Professionals and homemakers",
    outcome: "Learn at your own pace, from any level",
    image: "/images/course-adults.jpg",
    imageAlt: "Quran on a wooden rehal at a quiet study desk",
  },
  {
    id: "quran-for-sisters",
    slug: "quran-for-sisters",
    title: "Quran for Sisters",
    description:
      "Learn comfortably with qualified female teachers — Tajweed, Hifz and Islamic studies for sisters of all ages.",
    level: "All levels",
    duration: "Ongoing",
    glyph: "ن",
    categories: ["adults", "kids"],
    whoFor: "Sisters of all ages",
    outcome: "Learn comfortably with a certified Qariah",
    image: "/images/course-sisters.jpg",
    imageAlt: "Elegant Quran still life with soft floral tones",
  },
  {
    id: "quran-for-new-muslims",
    slug: "quran-for-new-muslims",
    title: "Quran for New Muslims",
    description:
      "A gentle, welcoming path: Shahada essentials, Salah, duas and first steps into Quran reading.",
    level: "Beginner",
    duration: "3–6 months",
    glyph: "م",
    categories: ["adults"],
    whoFor: "New Muslims and reverts",
    outcome: "Salah and essentials within weeks",
    image: "/images/course-new-muslims.jpg",
    imageAlt: "Open Quran glowing in warm light",
  },
  {
    id: "ijazah-program",
    slug: "ijazah-program",
    title: "Ijazah Program",
    description:
      "Earn an unbroken-chain Ijazah in Hafs (or other Qira'at) by reciting the full Quran to a certified Sheikh.",
    level: "Advanced",
    duration: "12–24 months",
    glyph: "ج",
    categories: ["memorization", "adults"],
    whoFor: "Advanced reciters and Huffaz",
    outcome: "Certified Ijazah with unbroken sanad",
    image: "/images/course-ijazah.jpg",
    imageAlt: "Ornate Quran binding with gold embellishment",
  },
];

/* ------------------------------------------------------------------ */
/* Teachers — SAMPLE profiles (replace with real tutor data at launch) */
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
/* Pricing plans — named by FREQUENCY.                                 */
/* NOTE: prices are PLACEHOLDERS. Replace with final pricing before    */
/* launch. Strike-through anchors are illustrative.                    */
/* ------------------------------------------------------------------ */
export interface Plan {
  id: string;
  name: string;
  classesPerWeek: number;
  minutesPerClass: number;
  /** Placeholder USD price per month. Replace with real pricing. */
  monthlyUSD: number;
  /** Illustrative strike-through anchor. Replace with real pricing. */
  anchorUSD: number;
  tagline: string;
  popular?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "foundation",
    name: "Foundation",
    classesPerWeek: 2,
    minutesPerClass: 30,
    monthlyUSD: 49,
    anchorUSD: 65,
    tagline: "A gentle start for new learners",
  },
  {
    id: "consistency",
    name: "Consistency",
    classesPerWeek: 3,
    minutesPerClass: 30,
    monthlyUSD: 69,
    anchorUSD: 89,
    tagline: "Steady progress, every week",
    popular: true,
  },
  {
    id: "intensive",
    name: "Intensive",
    classesPerWeek: 5,
    minutesPerClass: 30,
    monthlyUSD: 99,
    anchorUSD: 129,
    tagline: "Fast, focused momentum",
  },
  {
    id: "dedicated",
    name: "Dedicated",
    classesPerWeek: 7,
    minutesPerClass: 30,
    monthlyUSD: 129,
    anchorUSD: 169,
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
/* Reviews — !!! SAMPLE DATA !!!                                       */
/* Every review below is illustrative placeholder copy written for     */
/* design purposes. The owner MUST replace these with real, verified  */
/* parent reviews before launch. Never present them as genuine.        */
/* ------------------------------------------------------------------ */
export interface Review {
  id: string;
  name: string;
  country: string;
  /** Emoji flag for the reviewer's country. */
  flag: string;
  course: string;
  rating: number;
  text: string;
  featured?: boolean;
}

export const REVIEWS: Review[] = [
  // SAMPLE DATA — replace with a real verified parent review before launch.
  {
    id: "r1",
    name: "Sarah M.",
    country: "United States",
    flag: "🇺🇸",
    course: "Quran for Kids",
    rating: 5,
    text: "My 7-year-old went from not knowing the alphabet to reading short surahs in four months. His teacher is so patient — he actually reminds me when it's class time.",
    featured: true,
  },
  // SAMPLE DATA — replace with a real verified parent review before launch.
  {
    id: "r2",
    name: "Ahmed R.",
    country: "United Kingdom",
    flag: "🇬🇧",
    course: "Tajweed",
    rating: 5,
    text: "As a working father I thought I'd missed my chance. My Sheikh corrected years of Tajweed mistakes in weeks, and the evening slots fit around my job perfectly.",
  },
  // SAMPLE DATA — replace with a real verified parent review before launch.
  {
    id: "r3",
    name: "Fatima K.",
    country: "Canada",
    flag: "🇨🇦",
    course: "Hifz",
    rating: 5,
    text: "Learning with a female teacher made all the difference for me. The Sabaq–Sabqi–Manzil system keeps my memorization strong — five paras and counting, Alhamdulillah.",
  },
  // SAMPLE DATA — replace with a real verified parent review before launch.
  {
    id: "r4",
    name: "Bilal S.",
    country: "Australia",
    flag: "🇦🇺",
    course: "Quran for Kids",
    rating: 5,
    text: "The free trial convinced us on day one. Both my kids learn here now, and the weekly parent report means I always know exactly how they're progressing.",
  },
  // SAMPLE DATA — replace with a real verified parent review before launch.
  {
    id: "r5",
    name: "Amina Y.",
    country: "UAE",
    flag: "🇦🇪",
    course: "New Muslims",
    rating: 5,
    text: "I reverted last year and was nervous about starting. The New Muslims course had me praying confidently within weeks — kind teachers, never judgmental, always encouraging.",
  },
  // SAMPLE DATA — replace with a real verified parent review before launch.
  {
    id: "r6",
    name: "Hassan T.",
    country: "Germany",
    flag: "🇩🇪",
    course: "Noorani Qaida",
    rating: 5,
    text: "My 5-year-old daughter finished Noorani Qaida in three months and started reading the Quran. The teacher makes every lesson feel like play, but the progress is real.",
  },
  // SAMPLE DATA — replace with a real verified parent review before launch.
  {
    id: "r7",
    name: "Maryam A.",
    country: "Malaysia",
    flag: "🇲🇾",
    course: "Sisters",
    rating: 5,
    text: "As a sister I wanted a female teacher, and Ustadha's Tajweed corrections are precise and gentle. My recitation in Taraweeh this Ramadan was unrecognizable.",
  },
  // SAMPLE DATA — replace with a real verified parent review before launch.
  {
    id: "r8",
    name: "Omar F.",
    country: "South Africa",
    flag: "🇿🇦",
    course: "Ijazah",
    rating: 5,
    text: "I recited the full Quran to my Sheikh over eighteen months and earned my Ijazah in Hafs. The discipline of the program changed not just my recitation, but my life.",
  },
];

/* ------------------------------------------------------------------ */
/* Animated stats                                                      */
/* ------------------------------------------------------------------ */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export const STATS: Stat[] = [
  { value: 120, suffix: "+", label: "Certified tutors" },
  { value: 500000, suffix: "+", label: "Lessons delivered" },
  { value: 4.9, suffix: "/5", label: "Average rating", decimals: 1 },
  { value: 40, suffix: "+", label: "Countries served" },
];
