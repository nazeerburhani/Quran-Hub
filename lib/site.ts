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
  /** Inbox where website lead notifications are emailed. */
  leadsEmail: "nazeerahmad.sbg@gmail.com",
  defaultWhatsappMessage: "Assalamu Alaikum, I want to know about Quran classes.",
  url: "https://quranhub.online",
  facebook: "https://www.facebook.com/share/19PWaieQST/",
  instagram: "https://www.instagram.com/quran_hub_online",
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
      "Read the Quran fluently and beautifully with correct Tajweed rules, guided live by a qualified Qari or Qaria.",
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
    outcome: "Learn comfortably with a qualified Qariah",
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
      "Earn an unbroken-chain Ijazah in Hafs (or other Qira'at) by reciting the full Quran to a qualified Sheikh.",
    level: "Advanced",
    duration: "12–24 months",
    glyph: "ج",
    categories: ["memorization", "adults"],
    whoFor: "Advanced reciters and Huffaz",
    outcome: "Authentic Ijazah with unbroken sanad",
    image: "/images/course-ijazah.jpg",
    imageAlt: "Ornate Quran binding with gold embellishment",
  },
];

/* ------------------------------------------------------------------ */
/* Teachers — tutor roster.
   t1–t8: original sample profiles (replace with real tutor data at launch).
   t9–t11: real names provided by the academy owner; details unconfirmed.
   t12–t15: placeholder names requested by the owner; details are placeholders.
   Never invent credentials, experience, or ratings for any tutor. */
/* ------------------------------------------------------------------ */
export interface Teacher {
  id: string;
  name: string;
  country: string;
  languages: string[];
  qualification: string;
  /** Optional — omitted for tutors whose public stats aren't confirmed yet. */
  experienceYears?: number;
  /** Optional — omitted for tutors whose public stats aren't confirmed yet. */
  rating?: number;
  gender: "Male" | "Female";
  subjects: string[];
}

export const TEACHERS: Teacher[] = [
  /* -- Tutors confirmed by the academy owner (Sep 2026) — listed first.
     All our tutors are qualified from Tanzeem-ul-Madaris and hold an
     M.A. in Arabic & Islamiyat. -- */
  {
    id: "t9",
    name: "Qari Ateeq Ur Rahman",
    country: "Pakistan",
    languages: ["Urdu", "English", "Arabic"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Male",
    subjects: ["Tajweed", "Hifz", "Quran Reading"],
  },
  {
    id: "t10",
    name: "Qari Sardar Ahmad",
    country: "Pakistan",
    languages: ["Urdu", "English", "Arabic"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Male",
    subjects: ["Noorani Qaida", "Nazra", "Kids Quran"],
  },
  {
    id: "t11",
    name: "Qari Muhammad Saqib",
    country: "Pakistan",
    languages: ["Urdu", "English", "Arabic"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Male",
    subjects: ["Tajweed", "Qira'at", "Hifz"],
  },
  /* -- Additional sample tutors so the roster feels complete.
     PLACEHOLDER NAMES — replace with real tutor details before launch.
     Credentials follow the academy standard: Tanzeem-ul-Madaris qualified,
     M.A. in Arabic & Islamiyat. -- */
  {
    id: "t1",
    name: "Qari Muhammad Imran",
    country: "Pakistan",
    languages: ["Urdu", "English", "Arabic"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Male",
    subjects: ["Tajweed", "Hifz", "Noorani Qaida"],
  },
  {
    id: "t2",
    name: "Ustadha Fatima Zahra",
    country: "Pakistan",
    languages: ["Arabic", "English", "Urdu"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Female",
    subjects: ["Tajweed", "Kids Quran", "Arabic"],
  },
  {
    id: "t3",
    name: "Qari Abdullah Rahman",
    country: "Pakistan",
    languages: ["English", "Urdu", "Arabic"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Male",
    subjects: ["Tafseer", "Ijazah", "New Muslims"],
  },
  {
    id: "t4",
    name: "Ustadha Aisha Khan",
    country: "Pakistan",
    languages: ["English", "Urdu"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Female",
    subjects: ["Sisters", "Kids Quran", "Duas & Namaz"],
  },
  {
    id: "t5",
    name: "Qari Bilal Ahmed",
    country: "Pakistan",
    languages: ["English", "Urdu", "Arabic"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Male",
    subjects: ["Tajweed", "Hifz", "Arabic"],
  },
  {
    id: "t6",
    name: "Ustadha Maryam Siddiq",
    country: "Pakistan",
    languages: ["English", "Urdu", "Arabic"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Female",
    subjects: ["Sisters", "Tajweed", "Islamic Studies"],
  },
  {
    id: "t7",
    name: "Qari Omar Farouk",
    country: "Pakistan",
    languages: ["Arabic", "English", "Urdu"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Male",
    subjects: ["Qira'at", "Ijazah", "Tafseer"],
  },
  {
    id: "t8",
    name: "Ustadha Zainab Ali",
    country: "Pakistan",
    languages: ["Urdu", "English"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Female",
    subjects: ["Kids Quran", "Noorani Qaida", "Duas & Namaz"],
  },
  {
    id: "t12",
    name: "Qari Daniyal Raza",
    country: "Pakistan",
    languages: ["Urdu", "English"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Male",
    subjects: ["Nazra", "Tajweed", "Kids Quran"],
  },
  {
    id: "t13",
    name: "Ustadha Iqra Naveed",
    country: "Pakistan",
    languages: ["Urdu", "English"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Female",
    subjects: ["Noorani Qaida", "Sisters", "Duas & Namaz"],
  },
  {
    id: "t14",
    name: "Qari Kamran Aziz",
    country: "Pakistan",
    languages: ["Urdu", "English", "Arabic"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Male",
    subjects: ["Hifz", "Tajweed", "Islamic Studies"],
  },
  {
    id: "t15",
    name: "Ustadha Sadia Farooq",
    country: "Pakistan",
    languages: ["Urdu", "English"],
    qualification: "Tanzeem-ul-Madaris qualified · M.A. Arabic & Islamiyat",
    gender: "Female",
    subjects: ["Kids Quran", "Tajweed", "Islamic Studies"],
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
    monthlyUSD: 35,
    anchorUSD: 45,
    tagline: "A gentle start for new learners",
  },
  {
    id: "consistency",
    name: "Consistency",
    classesPerWeek: 3,
    minutesPerClass: 30,
    monthlyUSD: 50,
    anchorUSD: 65,
    tagline: "Steady progress, every week",
    popular: true,
  },
  {
    id: "intensive",
    name: "Intensive",
    classesPerWeek: 5,
    minutesPerClass: 30,
    monthlyUSD: 80,
    anchorUSD: 99,
    tagline: "Fast, focused momentum",
  },
  {
    id: "dedicated",
    name: "Dedicated",
    classesPerWeek: 7,
    minutesPerClass: 30,
    monthlyUSD: 110,
    anchorUSD: 140,
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
    a: "After booking your free trial, we assess your level and match you with a qualified tutor. Classes are live, one-on-one video sessions (30 minutes each) at times you choose. Your teacher shares their screen, listens to your recitation, corrects you in real time, and assigns short homework after every class.",
  },
  {
    q: "Is the free trial really free? Do I need a credit card?",
    a: "Yes — the 3-day free trial is completely free and we never ask for your credit card. It includes a level assessment, a demo class with a real tutor, and a personalized learning plan. You only pay if you decide to continue.",
  },
  {
    q: "Are female teachers available?",
    a: "Absolutely. We have qualified female tutors (Qariahs and Hafizas) from around the world. Many sisters and young children prefer learning with a female teacher — just mention your preference when booking and we will arrange it.",
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
    q: "What if I am not satisfied?",
    a: "That is exactly what the free 3-day trial is for — you experience real classes before paying anything. If the tutor fit ever feels off, you can switch tutors free at any time, and you can pause or cancel your plan at any time with a WhatsApp message. No lock-in.",
  },
  {
    q: "Can my child learn Quran online with a female Quran teacher?",
    a: "Yes. Many parents choose a female Quran teacher online for their daughters and young children. Our qualified Qariahs and Hafizas teach Noorani Qaida, Nazra, Hifz and Tajweed in patient, kid-friendly one-on-one classes — just request a female tutor when you book your free trial.",
  },
  {
    q: "Do you offer online Quran classes for kids in the USA, UK and Canada?",
    a: "Yes — we are an online Quran academy built for families abroad. Our tutors cover every timezone, so kids in the USA, UK, Canada and Australia can learn Quran online after school at times that suit them. Adults and new Muslims are welcome too, with male and female teachers available.",
  },
  {
    q: "How long does it take to learn to read the Quran online?",
    a: "Most complete beginners read the Quran fluently within 6–12 months: 3–4 months for Noorani Qaida foundations, then guided Quran reading with Tajweed. Children in our Hifz (memorization) program typically memorize one Juz per 2–4 months with daily revision. Your free trial includes a level assessment and a personalized timeline.",
  },
  {
    q: "Can I reschedule or pause classes?",
    a: "Yes. Life happens — you can reschedule any class with a few hours' notice from your student dashboard, and pause your plan during travel or Ramadan without losing your progress or your teacher.",
  },
];

/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/* Reviews — GENUINE Facebook reviews                               */
/* Verbatim from the "QuranHub - Online Quran Academy" Facebook     */
/* Page Reviews tab (page header: "100% recommend"). Read 2026-09-29. */
/* Facebook reviews carry a "recommends" label, not star ratings —   */
/* never convert them into star scores. Text is never paraphrased.  */
/* ------------------------------------------------------------------ */
export interface Review {
  id: string;
  name: string;
  /** Date the review was posted on Facebook. */
  date: string;
  /** Verbatim review text, exactly as written by the reviewer. */
  text: string;
  /** Facebook's "recommends" label — the only rating Facebook reviews carry. */
  recommends: boolean;
  featured?: boolean;
}

export const REVIEWS: Review[] = [
  {
    id: "fb-osama-hassan",
    name: "Osama Hassan",
    date: "December 4, 2023",
    text: "QuranHub is great! The teachers are good, and the services they offer are top-notch. Perfect for anyone wanting to learn about the Quran.",
    recommends: true,
    featured: true,
  },
  {
    id: "fb-mounira-chettouh",
    name: "Mounira Chettouh",
    date: "December 3, 2023",
    text: "its very good. You will learn a lot from it. before this I didn't even know anything about the Quran but now I have learned a lot Mashallah. It was all because of this.",
    recommends: true,
  },
  {
    id: "fb-kamran-shinwaari",
    name: "Kamran ShinWaari",
    date: "December 2, 2023",
    text: "Absolutely recommend QuranHub! It's super easy and one of the best places to learn the Quran online. Whether you want to read, memorize, or understand, it's a top pick. Give it a go \u2013 you won't be disappointed!",
    recommends: true,
  },
  {
    id: "fb-muhammad-yahya-aziz",
    name: "Muhammad Yahya Aziz",
    date: "August 12, 2023",
    text: "Great Efforts, skilled Tutors \u2013May your efforts be accepted. QuranHub is the excellent way to learn Quran in correct way with Tajweed. the teacher is great in teaching and the admin act really efficiently I would recommend QuranHub.",
    recommends: true,
  },
  {
    id: "fb-amir-hashmi",
    name: "Amir Hashmi",
    date: "August 12, 2023",
    text: "\u2b50\u2b50\u2b50\u2b50\u2b50 (5 Stars) Definitely i would recommend QuranHub - Online Quran Academy. Top-notch instruction, interactive platform, and flexible learning. Ideal for all levels of learners seeking a convenient and enriching Quranic education.",
    recommends: true,
  },
];

/* ------------------------------------------------------------------ */
/* Animated stats                                                      */
/* ------------------------------------------------------------------ */
export interface Stat {
  /** Numeric stats count up on scroll; string stats (e.g. "24/7") render as-is. */
  value: number | string;
  suffix: string;
  label: string;
  decimals?: number;
}

export const STATS: Stat[] = [
  { value: 20, suffix: "+", label: "Qualified tutors" },
  { value: 1000, suffix: "+", label: "Lessons delivered" },
  { value: "24/7", suffix: "", label: "Live classes, every timezone" },
  { value: 10, suffix: "+", label: "Countries served" },
];
