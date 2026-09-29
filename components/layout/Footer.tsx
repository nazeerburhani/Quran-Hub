import Link from "next/link";
import Image from "next/image";
import { Clock, Facebook, Mail, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  const courses: { label: string; href: string }[] = [
    { label: "Quran Classes for Kids", href: "/courses/online-quran-classes-for-kids" },
    { label: "Female Quran Teacher", href: "/courses/female-quran-teacher-online" },
    { label: "Noorani Qaida Online", href: "/courses/noorani-qaida-online" },
    { label: "Tajweed Course Online", href: "/courses/online-tajweed-course" },
    { label: "Hifz Program Online", href: "/courses/online-hifz-program" },
    { label: "Quran for Adults", href: "/courses/learn-quran-online-for-adults" },
    { label: "Quran Classes for Sisters", href: "/courses/online-quran-classes-for-sisters" },
    { label: "Ijazah Course Online", href: "/courses/online-ijazah-course" },
  ];

  return (
    <footer className="geo-pattern-dark relative overflow-hidden bg-night-deep text-sand-100">
      <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 md:pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="#top" className="flex items-center gap-2.5" aria-label={`${SITE.name} — home`}>
              <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-white">
                <Image src="/images/logo.png" alt="" width={44} height={44} className="h-11 w-11 object-contain" />
              </span>
              <span className="leading-tight">
                <span className="block text-base font-bold tracking-tight text-white">
                  {SITE.name}
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                  Online Quran Academy
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-100/70">
              Live one-on-one online Quran classes for kids and adults — qualified
              male and female tutors, in every timezone.
            </p>
            <a
              href="#trial"
              className="btn-gold mt-6 px-6 py-3 text-sm"
            >
              Free Trial
            </a>
          </div>

          {/* Courses */}
          <nav aria-label="Footer courses">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">
              Courses
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {courses.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sand-100/75 transition-colors hover:text-gold-300">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Academy */}
          <nav aria-label="Footer academy">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">
              Academy
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#how" className="text-sand-100/75 transition-colors hover:text-gold-300">How it works</a></li>
              <li><a href="#teachers" className="text-sand-100/75 transition-colors hover:text-gold-300">Teachers</a></li>
              <li><Link href="/fees" className="text-sand-100/75 transition-colors hover:text-gold-300">Fees & Pricing</Link></li>
              <li><Link href="/free-trial" className="text-sand-100/75 transition-colors hover:text-gold-300">Free Trial</Link></li>
              <li><a href="#reviews" className="text-sand-100/75 transition-colors hover:text-gold-300">Reviews</a></li>
              <li><a href="#faq" className="text-sand-100/75 transition-colors hover:text-gold-300">FAQ</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sand-100/75 transition-colors hover:text-gold-300"
                >
                  <MessageCircle className="h-4 w-4 text-wa" aria-hidden="true" />
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sand-100/75 transition-colors hover:text-gold-300"
                >
                  <Mail className="h-4 w-4 text-gold-300" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sand-100/75">
                <Clock className="h-4 w-4 text-gold-300" aria-hidden="true" />
                {SITE.businessHours}
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/19PWaieQST/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.name} on Facebook`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sand-100/75 transition-colors hover:border-gold-400/60 hover:text-gold-300"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-sand-100/55 sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="font-arabic text-sm text-gold-300/80" aria-hidden="true">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </p>
        </div>
      </div>
    </footer>
  );
}
