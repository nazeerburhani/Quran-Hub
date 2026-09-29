/* i18n dictionaries for UI chrome (nav, buttons, headings, CTAs, forms).
   English is the default. Urdu and Arabic switch the page to RTL.
   Course catalog content (lib/site.ts) stays in English — it is data,
   translated by the owner when the catalog is finalized. */

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
  headerCta: "Free Trial",
  liveNow: "Tutors online now",

  heroEyebrow: "Live 1-on-1 classes · Tutors online now",
  heroTitle: "Your child reciting the Quran beautifully — within months.",
  heroSubtitle:
    "Live, personal Quran classes for kids and adults with certified male and female tutors — in every timezone.",
  heroCtaPrimary: "Claim My Child's Free Trial",
  heroCtaSecondary: "See How It Works",
  heroChipRating: "4.9★ parent rating",
  heroChipStudents: "2,500+ students",
  heroChipCountries: "40+ countries",

  guaranteeTrial: "3-Day Free Trial",
  guaranteeNoCard: "No Card Required",
  guaranteeSameTutor: "Same Tutor Every Class",
  guaranteeReports: "Weekly Parent Progress Reports",
  guaranteeMoneyBack: "7-Day Money-Back",

  statTutors: "Certified tutors",
  statLessons: "Lessons delivered",
  statRating: "Average rating",
  statCountries: "Countries served",

  coursesEyebrow: "Programs",
  coursesTitle: "A course for every learner",
  coursesDesc:
    "From the first letter to Ijazah — pick the path that fits your goal. Every course is live and one-on-one.",
  filterAll: "All",
  filterKids: "Kids",
  filterAdults: "Adults",
  filterMemorization: "Memorization",
  filterLanguage: "Language",
  whoFor: "Who it's for",
  chipOneOnOne: "One-on-one live",
  chipFlexible: "Flexible schedule",
  minShort: "min",
  daysPerWeekShort: "days/week",
  whatYouLearn: "What you'll learn",
  lessonFormatTitle: "Lesson format",
  timeToComplete: "Time to complete",
  claimFreeTrial: "Claim your free trial",
  bookInForm: "Book in the form below",
  watchEyebrow: "Watch",
  watchTitle: "See what a real QuranHub class feels like",
  watchDesc: "One minute — real tutors, real students, real progress. This is how your child learns to recite beautifully.",
  watchPlay: "Play",
  watchCta: "Claim My Child's Free Trial",
  enroll: "Enroll",

  howEyebrow: "How it works",
  howTitle: "Start in three simple steps",
  howDesc:
    "No portals, no confusion — a real teacher, confirmed on WhatsApp, usually within 24 hours.",
  step1Title: "Book your free trial",
  step1Desc: "Takes 30 seconds — fill the form or message us on WhatsApp.",
  step2Title: "Meet your tutor",
  step2Desc: "We confirm on WhatsApp within 24 hours and match a certified tutor to your level.",
  step3Title: "Same tutor, every week",
  step3Desc: "Weekly live classes with your own tutor, plus progress reports for parents.",
  lessonStructure: "Inside every lesson",
  lessonStep1: "Revision",
  lessonStep2: "Correction",
  lessonStep3: "New material",
  lessonStep4: "Practice",
  lessonStep5: "Recap",

  teachersEyebrow: "Our tutors",
  teachersTitle: "Certified teachers you'll trust",
  teachersDesc:
    "Huffaz, Qaris and Al-Azhar graduates — male and female tutors, matched to your family.",
  filterMale: "Male",
  filterFemale: "Female",
  yearsExp: "yrs experience",
  sameTutorStrip: "Our promise: the same tutor in every class. No rotations, no strangers.",

  pricingEyebrow: "Pricing",
  pricingTitle: "Choose your pace — not the subject",
  pricingDesc:
    "Every plan includes reading, Tajweed and memorization. Pick how many days a week you learn.",
  mostPopular: "Most Popular",
  noFee: "No registration fee",
  moneyBackBadge: "7-day money-back guarantee",
  siblingNote: "Sibling discount: extra children learn for less — ask us on WhatsApp.",
  startTrial: "Start Free Trial",
  perMonth: "/month",
  placeholderNote: "Prices are placeholders while we finalize rates",
  perWeek: "classes/week",

  resultsEyebrow: "Results",
  resultsTitle: "Progress you can hear",

  reviewsEyebrow: "Parent reviews",
  reviewsTitle: "Loved by families in 40+ countries",
  reviewsFrom: "from 300+ parent reviews",
  featuredReview: "Featured review",

  trialEyebrow: "Free 3-day trial",
  trialTitle: "Don't lose your child's slot",
  trialSub:
    "Three full days free — no credit card, no obligation. Tell us where to reach you and we'll confirm on WhatsApp.",
  formName: "Your name",
  formNamePh: "e.g. Fatima Ahmed",
  formContact: "WhatsApp number or email",
  formContactPh: "+1 555 000 1234 or you@email.com",
  formStudent: "Who is learning?",
  formStudentKid: "My child",
  formStudentAdult: "Me (adult)",
  formSubmit: "Claim My Free Trial",
  formNote: "Free 3-day trial · No credit card · Reply within hours",
  formSuccessTitle: "Request received!",
  formSuccessText:
    "JazakAllahu Khairan! Our team will message you on WhatsApp shortly to schedule your free trial.",

  faqEyebrow: "FAQ",
  faqTitle: "Questions, answered",

  finalTitle: "Give your child the Quran — starting free, today.",
  finalSub: "3 days free · No card · Same tutor every class",
  finalCta: "Claim My Child's Free Trial",

  stickyTrial: "Free 3-Day Trial",
  stickyWhatsapp: "WhatsApp Us",

  footerTagline: "Live one-on-one online Quran classes for kids and adults — certified male and female tutors, in every timezone.",
  footerCourses: "Courses",
  footerCompany: "Academy",
  footerContact: "Contact",
  footerRights: "All rights reserved.",
  footerAbout: "About",
  footerTrial: "Free Trial",
};

const ur: typeof en = {
  navHome: "ہوم",
  navCourses: "کورسز",
  navTeachers: "اساتذہ",
  navPricing: "فیس",
  navFaq: "سوالات",
  headerCta: "مفت ٹرائل",
  liveNow: "اساتذہ آن لائن ہیں",

  heroEyebrow: "براہِ راست انفرادی کلاسز · اساتذہ آن لائن",
  heroTitle: "آپ کا بچہ چند مہینوں میں خوبصورت تلاوت کرے گا۔",
  heroSubtitle:
    "بچوں اور بڑوں کے لیے مستند مرد و خواتین اساتذہ کے ساتھ براہِ راست قرآن کلاسز — ہر ٹائم زون میں۔",
  heroCtaPrimary: "میرے بچے کا مفت ٹرائل حاصل کریں",
  heroCtaSecondary: "طریقہ کار دیکھیں",
  heroChipRating: "والدین کی 4.9★ درجہ بندی",
  heroChipStudents: "2,500+ طلبہ",
  heroChipCountries: "40+ ممالک",

  guaranteeTrial: "3 دن کا مفت ٹرائل",
  guaranteeNoCard: "کارڈ کی ضرورت نہیں",
  guaranteeSameTutor: "ہر کلاس میں وہی استاد",
  guaranteeReports: "والدین کے لیے ہفتہ وار رپورٹس",
  guaranteeMoneyBack: "7 دن کی رقم واپسی",

  statTutors: "مستند اساتذہ",
  statLessons: "دیے گئے اسباق",
  statRating: "اوسط درجہ بندی",
  statCountries: "ممالک",

  coursesEyebrow: "پروگرامز",
  coursesTitle: "ہر سیکھنے والے کے لیے کورس",
  coursesDesc:
    "پہلے حرف سے اجازہ تک — اپنے مقصد کے مطابق راستہ منتخب کریں۔ ہر کورس براہِ راست اور انفرادی ہے۔",
  filterAll: "تمام",
  filterKids: "بچے",
  filterAdults: "بڑے",
  filterMemorization: "حفظ",
  filterLanguage: "زبان",
  whoFor: "کن کے لیے",
  chipOneOnOne: "لائیو ون آن ون",
  chipFlexible: "لچکدار شیڈول",
  minShort: "منٹ",
  daysPerWeekShort: "دن/ہفتہ",
  whatYouLearn: "آپ کیا سیکھیں گے",
  lessonFormatTitle: "سبق کی ترتیب",
  timeToComplete: "مکمل کرنے کا وقت",
  claimFreeTrial: "اپنا مفت ٹرائل حاصل کریں",
  bookInForm: "نیچے دیے گئے فارم میں بک کریں",
  watchEyebrow: "دیکھیں",
  watchTitle: "دیکھیں قرآن ہب کی اصل کلاس کیسی ہوتی ہے",
  watchDesc: "صرف ایک منٹ — حقیقی اساتذہ، حقیقی طلبہ، حقیقی ترقی۔ اسی طرح آپ کا بچہ خوبصورت تلاوت سیکھتا ہے۔",
  watchPlay: "چلائیں",
  watchCta: "میرے بچے کا مفت ٹرائل حاصل کریں",
  enroll: "داخلہ لیں",

  howEyebrow: "طریقہ کار",
  howTitle: "تین آسان مراحل میں شروع کریں",
  howDesc:
    "کوئی الجھن نہیں — ایک حقیقی استاد، واٹس ایپ پر تصدیق، عام طور پر 24 گھنٹوں میں۔",
  step1Title: "مفت ٹرائل بک کریں",
  step1Desc: "صرف 30 سیکنڈ — فارم بھریں یا واٹس ایپ پر پیغام بھیجیں۔",
  step2Title: "استاد سے ملیں",
  step2Desc: "24 گھنٹوں میں واٹس ایپ پر تصدیق — آپ کے معیار کے مطابق مستند استاد۔",
  step3Title: "وہی استاد، ہر ہفتہ",
  step3Desc: "اپنے استاد کے ساتھ ہفتہ وار براہِ راست کلاسز اور والدین کے لیے رپورٹس۔",
  lessonStructure: "ہر سبق کا خاکہ",
  lessonStep1: "اعادہ",
  lessonStep2: "تصحیح",
  lessonStep3: "نیا سبق",
  lessonStep4: "مشق",
  lessonStep5: "خلاصہ",

  teachersEyebrow: "اساتذہ",
  teachersTitle: "قابلِ اعتماد مستند اساتذہ",
  teachersDesc:
    "حفاظ، قراء اور جامعہ ازہر کے فارغ التحصیل — آپ کے خاندان کے لیے مرد و خواتین اساتذہ۔",
  filterMale: "مرد",
  filterFemale: "خواتین",
  yearsExp: "سال تجربہ",
  sameTutorStrip: "ہمارا وعدہ: ہر کلاس میں وہی استاد۔ کوئی تبدیلی نہیں۔",

  pricingEyebrow: "فیس",
  pricingTitle: "اپنی رفتار منتخب کریں",
  pricingDesc:
    "ہر پلان میں تلاوت، تجوید اور حفظ شامل ہے۔ منتخب کریں کہ ہفتے میں کتنے دن پڑھنا ہے۔",
  mostPopular: "سب سے مقبول",
  noFee: "کوئی رجسٹریشن فیس نہیں",
  moneyBackBadge: "7 دن کی رقم واپسی کی ضمانت",
  siblingNote: "بہن بھائیوں کے لیے رعایت — واٹس ایپ پر پوچھیں۔",
  startTrial: "مفت ٹرائل شروع کریں",
  perMonth: "/ماہ",
  placeholderNote: "قیمتیں عارضی ہیں",
  perWeek: "کلاسز/ہفتہ",

  resultsEyebrow: "نتائج",
  resultsTitle: "ایسی ترقی جو سنی جا سکے",

  reviewsEyebrow: "والدین کی آراء",
  reviewsTitle: "40+ ممالک کے خاندانوں کی پسند",
  reviewsFrom: "300+ والدین کی آراء سے",
  featuredReview: "نمایاں تبصرہ",

  trialEyebrow: "3 دن کا مفت ٹرائل",
  trialTitle: "اپنے بچے کی سیٹ ضائع نہ کریں",
  trialSub:
    "پورے تین دن مفت — نہ کریڈٹ کارڈ، نہ کوئی پابندی۔ بتائیں کہ آپ سے کہاں رابطہ کریں۔",
  formName: "آپ کا نام",
  formNamePh: "مثلاً فاطمہ احمد",
  formContact: "واٹس ایپ نمبر یا ای میل",
  formContactPh: "+1 555 000 1234 یا you@email.com",
  formStudent: "کون پڑھے گا؟",
  formStudentKid: "میرا بچہ",
  formStudentAdult: "میں (بالغ)",
  formSubmit: "میرا مفت ٹرائل حاصل کریں",
  formNote: "3 دن مفت ٹرائل · کارڈ نہیں · چند گھنٹوں میں جواب",
  formSuccessTitle: "درخواست موصول ہو گئی!",
  formSuccessText:
    "جزاک اللہ خیر! ہماری ٹیم جلد واٹس ایپ پر رابطہ کر کے آپ کا مفت ٹرائل طے کرے گی۔",

  faqEyebrow: "سوالات",
  faqTitle: "عام سوالات کے جوابات",

  finalTitle: "اپنے بچے کو قرآن دیں — آج سے، مفت شروع کریں۔",
  finalSub: "3 دن مفت · کوئی کارڈ نہیں · ہر کلاس میں وہی استاد",
  finalCta: "میرے بچے کا مفت ٹرائل حاصل کریں",

  stickyTrial: "3 دن کا مفت ٹرائل",
  stickyWhatsapp: "واٹس ایپ کریں",

  footerTagline: "بچوں اور بڑوں کے لیے براہِ راست انفرادی آن لائن قرآن کلاسز — مستند مرد و خواتین اساتذہ، ہر ٹائم زون میں۔",
  footerCourses: "کورسز",
  footerCompany: "ادارہ",
  footerContact: "رابطہ",
  footerRights: "جملہ حقوق محفوظ ہیں۔",
  footerAbout: "ہمارے بارے میں",
  footerTrial: "مفت ٹرائل",
};

const ar: typeof en = {
  navHome: "الرئيسية",
  navCourses: "الدورات",
  navTeachers: "المعلمون",
  navPricing: "الرسوم",
  navFaq: "الأسئلة الشائعة",
  headerCta: "تجربة مجانية",
  liveNow: "المعلمون متاحون الآن",

  heroEyebrow: "دروس مباشرة فردية · معلمون متاحون الآن",
  heroTitle: "طفلك يرتّل القرآن بجمال — خلال أشهر.",
  heroSubtitle:
    "دروس قرآن مباشرة للأطفال والكبار مع معلمين ومعلمات معتمدين — في جميع المناطق الزمنية.",
  heroCtaPrimary: "احجز التجربة المجانية لطفلي",
  heroCtaSecondary: "شاهد كيف نعمل",
  heroChipRating: "تقييم الأهالي 4.9★",
  heroChipStudents: "+2,500 طالب",
  heroChipCountries: "+40 دولة",

  guaranteeTrial: "تجربة مجانية ٣ أيام",
  guaranteeNoCard: "بدون بطاقة ائتمانية",
  guaranteeSameTutor: "نفس المعلم في كل درس",
  guaranteeReports: "تقارير أسبوعية للأهالي",
  guaranteeMoneyBack: "استرداد خلال ٧ أيام",

  statTutors: "معلمون معتمدون",
  statLessons: "درس مُقدَّم",
  statRating: "متوسط التقييم",
  statCountries: "دولة نخدمها",

  coursesEyebrow: "البرامج",
  coursesTitle: "دورة لكل متعلّم",
  coursesDesc:
    "من الحرف الأول إلى الإجازة — اختر المسار المناسب لهدفك. كل دورة مباشرة وفردية.",
  filterAll: "الكل",
  filterKids: "الأطفال",
  filterAdults: "الكبار",
  filterMemorization: "الحفظ",
  filterLanguage: "اللغة",
  whoFor: "لمن هذه الدورة",
  chipOneOnOne: "فردية مباشرة",
  chipFlexible: "جدول مرن",
  minShort: "دقيقة",
  daysPerWeekShort: "أيام/أسبوع",
  whatYouLearn: "ماذا ستتعلم",
  lessonFormatTitle: "تنسيق الدرس",
  timeToComplete: "المدة المتوقعة",
  claimFreeTrial: "احصل على درسك التجريبي المجاني",
  bookInForm: "احجز عبر النموذج أدناه",
  watchEyebrow: "شاهد",
  watchTitle: "شاهد كيف تبدو حصة حقيقية في قرآن هب",
  watchDesc: "دقيقة واحدة — معلمون حقيقيون وطلاب حقيقيون وتقدم حقيقي. هكذا يتعلم طفلك التلاوة الجميلة.",
  watchPlay: "تشغيل",
  watchCta: "احصل على الدرس التجريبي المجاني لطفلك",
  enroll: "سجّل الآن",

  howEyebrow: "كيف نعمل",
  howTitle: "ابدأ في ثلاث خطوات سهلة",
  howDesc:
    "بلا تعقيد — معلم حقيقي، وتأكيد عبر واتساب، عادة خلال ٢٤ ساعة.",
  step1Title: "احجز تجربتك المجانية",
  step1Desc: "يستغرق ٣٠ ثانية — املأ النموذج أو راسلنا عبر واتساب.",
  step2Title: "تعرّف على معلمك",
  step2Desc: "نؤكد عبر واتساب خلال ٢٤ ساعة ونطابقك مع معلم معتمد يناسب مستواك.",
  step3Title: "نفس المعلم كل أسبوع",
  step3Desc: "دروس أسبوعية مباشرة مع معلمك الخاص، وتقارير للأهالي.",
  lessonStructure: "داخل كل درس",
  lessonStep1: "مراجعة",
  lessonStep2: "تصحيح",
  lessonStep3: "درس جديد",
  lessonStep4: "تدريب",
  lessonStep5: "خلاصة",

  teachersEyebrow: "المعلمون",
  teachersTitle: "معلمون معتمدون تثق بهم",
  teachersDesc:
    "حفّاظ وقرّاء وخريجو الأزهر — معلمون ومعلمات يناسبون عائلتك.",
  filterMale: "معلمون",
  filterFemale: "معلمات",
  yearsExp: "سنوات خبرة",
  sameTutorStrip: "وعدنا: معلمك نفسه في كل درس. لا تبديل ولا غرباء.",

  pricingEyebrow: "الرسوم",
  pricingTitle: "اختر إيقاعك — لا الموضوع",
  pricingDesc:
    "كل خطة تشمل التلاوة والتجويد والحفظ. اختر عدد أيام الدراسة أسبوعيًا.",
  mostPopular: "الأكثر شعبية",
  noFee: "بدون رسوم تسجيل",
  moneyBackBadge: "ضمان استرداد لمدة ٧ أيام",
  siblingNote: "خصم للإخوة: يتعلم الإخوة بتكلفة أقل — اسألنا عبر واتساب.",
  startTrial: "ابدأ التجربة المجانية",
  perMonth: "/شهريًا",
  placeholderNote: "الأسعار مؤقتة حتى اعتماد الرسوم النهائية",
  perWeek: "دروس/أسبوع",

  resultsEyebrow: "النتائج",
  resultsTitle: "تقدّم يُسمَع",

  reviewsEyebrow: "آراء الأهالي",
  reviewsTitle: "محبوبون لدى العائلات في +40 دولة",
  reviewsFrom: "من أكثر من ٣٠٠ تقييم للأهالي",
  featuredReview: "تقييم مميّز",

  trialEyebrow: "تجربة مجانية ٣ أيام",
  trialTitle: "لا تفوّت مقعد طفلك",
  trialSub:
    "ثلاثة أيام كاملة مجانًا — بدون بطاقة ائتمانية وبدون التزام. أخبرنا كيف نتواصل معك وسنؤكد عبر واتساب.",
  formName: "الاسم",
  formNamePh: "مثال: فاطمة أحمد",
  formContact: "رقم واتساب أو البريد الإلكتروني",
  formContactPh: "+1 555 000 1234 أو you@email.com",
  formStudent: "من المتعلّم؟",
  formStudentKid: "طفلي",
  formStudentAdult: "أنا (بالغ)",
  formSubmit: "احصل على تجربتي المجانية",
  formNote: "تجربة ٣ أيام مجانًا · بدون بطاقة · نرد خلال ساعات",
  formSuccessTitle: "تم استلام طلبك!",
  formSuccessText:
    "جزاك الله خيرًا! سيتواصل معك فريقنا عبر واتساب قريبًا لتحديد موعد تجربتك المجانية.",

  faqEyebrow: "الأسئلة",
  faqTitle: "الأسئلة الشائعة",

  finalTitle: "امنح طفلك القرآن — ابدأ مجانًا اليوم.",
  finalSub: "٣ أيام مجانًا · بدون بطاقة · نفس المعلم في كل درس",
  finalCta: "احجز التجربة المجانية لطفلي",

  stickyTrial: "تجربة ٣ أيام مجانًا",
  stickyWhatsapp: "راسلنا واتساب",

  footerTagline: "دروس قرآن مباشرة فردية عبر الإنترنت للأطفال والكبار — معلمون ومعلمات معتمدون، في جميع المناطق الزمنية.",
  footerCourses: "الدورات",
  footerCompany: "الأكاديمية",
  footerContact: "تواصل معنا",
  footerRights: "جميع الحقوق محفوظة.",
  footerAbout: "من نحن",
  footerTrial: "تجربة مجانية",
};

export const dict = { en, ur, ar } as const;

export type DictKey = keyof typeof en;

export function t(locale: Locale, key: DictKey): string {
  return dict[locale][key];
}
