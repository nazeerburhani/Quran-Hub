import { BadgeCheck, HeartHandshake, ShieldCheck, Users, Video, Wallet } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const badges = [
  { icon: BadgeCheck, title: "Certified Teachers", text: "Ijazah-holding male & female tutors" },
  { icon: Video, title: "Live 1-on-1 Classes", text: "Personal attention, every session" },
  { icon: Users, title: "Female Tutors Available", text: "Comfortable learning for sisters & kids" },
  { icon: ShieldCheck, title: "Money-Back Guarantee", text: "Full refund in your first paid week" },
  { icon: Wallet, title: "Secure Payments", text: "Cards, Stripe & PayPal accepted" },
  { icon: HeartHandshake, title: "Free 3-Day Trial", text: "No credit card required" },
];

export default function TrustBadges() {
  return (
    <section aria-label="Why families trust us" className="relative border-y border-white/10 bg-white/40 dark:bg-navy-900/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map((b, i) => (
            <li key={b.title}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="glass flex h-full flex-col items-center gap-2 rounded-2xl px-3 py-5 text-center">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15">
                    <b.icon className="h-5 w-5 text-gold-dark dark:text-gold-light" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{b.title}</p>
                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{b.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
