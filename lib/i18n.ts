/* Minimal i18n dictionaries for header + hero strings.
   English is the default. Urdu and Arabic switch the page to RTL. */

export type Locale = "en" | "ur" | "ar";

export const LOCALES: { code: Locale; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ur", label: "اردو", dir: "rtl" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

const en = {
  navHome: "Home",
  navCourses: "Courses",
  navTeachers: "Teachers",
  navPricing: "Pricing",
  navFaq: "FAQ",
  bookTrial: "Book Free Trial",
  heroBadge: "Admissions open — free 3-day trial",
  heroTitle: "Learn the Quran Online with Certified Tutors",
  heroSubtitle:
    "Live one-on-one Quran classes for kids and adults — with qualified male and female teachers, in every timezone.",
  heroCtaTrial: "Book Free Trial",
  heroCtaWhatsapp: "Chat on WhatsApp",
  heroHadith: "The best of you are those who learn the Quran and teach it.",
  heroHadithSource: "Sahih al-Bukhari",
};

const ur: typeof en = {
  navHome: "ہوم",
  navCourses: "کورسز",
  navTeachers: "اساتذہ",
  navPricing: "فیس",
  navFaq: "سوالات",
  bookTrial: "مفت ٹرائل بک کریں",
  heroBadge: "داخلے جاری ہیں — 3 دن کا مفت ٹرائل",
  heroTitle: "مستند اساتذہ سے آن لائن قرآن سیکھیں",
  heroSubtitle:
    "بچوں اور بڑوں کے لیے براہِ راست انفرادی قرآن کلاسز — اہل مرد و خواتین اساتذہ کے ساتھ، ہر ٹائم زون میں۔",
  heroCtaTrial: "مفت ٹرائل بک کریں",
  heroCtaWhatsapp: "واٹس ایپ پر بات کریں",
  heroHadith: "تم میں سے بہترین وہ ہے جو قرآن سیکھے اور سکھائے۔",
  heroHadithSource: "صحیح بخاری",
};

const ar: typeof en = {
  navHome: "الرئيسية",
  navCourses: "الدورات",
  navTeachers: "المعلمون",
  navPricing: "الرسوم",
  navFaq: "الأسئلة الشائعة",
  bookTrial: "احجز تجربة مجانية",
  heroBadge: "التسجيل مفتوح — تجربة مجانية لمدة ٣ أيام",
  heroTitle: "تعلّم القرآن الكريم عبر الإنترنت مع معلّمين معتمدين",
  heroSubtitle:
    "دروس قرآن مباشرة فردية للأطفال والكبار — مع معلمين ومعلمات مؤهلين، في جميع المناطق الزمنية.",
  heroCtaTrial: "احجز تجربة مجانية",
  heroCtaWhatsapp: "تحدث عبر واتساب",
  heroHadith: "خيركم من تعلم القرآن وعلمه.",
  heroHadithSource: "صحيح البخاري",
};

export const dict = { en, ur, ar } as const;

export type DictKey = keyof typeof en;

export function t(locale: Locale, key: DictKey): string {
  return dict[locale][key];
}
