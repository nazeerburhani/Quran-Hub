import { MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-14 text-center shadow-card sm:px-12 sm:py-20">
            <div className="geo-pattern absolute inset-0 opacity-70" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold/20 blur-[100px]"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-arabic text-3xl text-gold-light" lang="ar" dir="rtl">
                ﴿ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴾
              </p>
              <p className="mt-2 text-sm text-slate-400">
                “And recite the Quran with measured recitation.” — Surah Al-Muzzammil 73:4
              </p>
              <h2
                id="cta-heading"
                className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl"
              >
                Begin your Quran journey{" "}
                <span className="text-gold-gradient">today</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
                Join 2,500+ students learning with {SITE.name}. Your first 3 days
                are completely free — no credit card, no risk, just the Quran.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href="#trial" size="lg">
                  Book Free Trial
                </Button>
                <Button href={whatsappLink()} external size="lg" variant="whatsapp">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  {SITE.whatsappDisplay}
                </Button>
              </div>
              <p className="mt-6 text-xs text-slate-500">
                Founded by {SITE.founder} · Certified male & female tutors · 40+ countries served
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
