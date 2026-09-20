import Link from "next/link";
import Image from "next/image";
import { Clock, Facebook, Mail, MessageCircle } from "lucide-react";
import { COURSES, SITE, whatsappLink } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "Courses", href: "#courses" },
  { label: "Teachers", href: "#teachers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Free Trial", href: "#trial" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white">
                <Image src="/images/logo.jpg" alt={`${SITE.name} logo`} width={44} height={44} className="h-11 w-11 object-cover" />
              </span>
              <span>
                <p className="text-lg font-bold text-white">{SITE.name}</p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-light">
                  Online Quran Academy
                </p>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Live one-on-one Quran classes for kids and adults with certified
              male and female tutors — serving families in the USA, UK, Canada,
              Australia, UAE, Europe, Pakistan and worldwide.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Founded by <span className="font-semibold text-slate-200">{SITE.founder}</span>
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <p className="text-sm font-semibold uppercase tracking-wider text-white">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-400 transition-colors hover:text-gold-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Courses */}
          <nav aria-label="Popular courses">
            <p className="text-sm font-semibold uppercase tracking-wider text-white">Popular courses</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {COURSES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <a href="#courses" className="text-slate-400 transition-colors hover:text-gold-light">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-gold-light"
                >
                  <MessageCircle className="h-4 w-4 text-[#25d366]" aria-hidden="true" />
                  WhatsApp: {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-gold-light"
                >
                  <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/19PWaieQST/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-gold-light"
                >
                  <Facebook className="h-4 w-4 text-gold" aria-hidden="true" />
                  Follow us on Facebook
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-slate-400">
                <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                {SITE.businessHours}
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2" aria-label="Accepted payment methods">
              {["Visa", "Mastercard", "Stripe", "PayPal"].map((p) => (
                <span
                  key={p}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-300"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-5">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
