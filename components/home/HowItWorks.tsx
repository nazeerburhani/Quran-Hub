import { CalendarCheck, UserCheck, Video } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const steps = [
  {
    icon: CalendarCheck,
    step: "Step 1",
    title: "Book your free trial",
    text: "Fill the 1-minute form or message us on WhatsApp. We reply within a few hours with your trial slot.",
  },
  {
    icon: UserCheck,
    step: "Step 2",
    title: "Get assessed & matched",
    text: "A coordinator assesses your (or your child's) level and matches you with the ideal male or female tutor.",
  },
  {
    icon: Video,
    step: "Step 3",
    title: "Learn live, one-on-one",
    text: "Attend live 30-minute classes at your chosen times, track progress, and watch your recitation flourish.",
  },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="relative overflow-hidden bg-navy-950">
      <div className="geo-pattern absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          id="how-heading"
          eyebrow="How It Works"
          title="Start learning in three simple steps"
          description="No complicated setup, no long commitments. From booking to your first class in under 24 hours."
        />
        <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-gold/30 md:block"
          />
          {steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.12} className="h-full">
                <div className="relative flex h-full flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl">
                  <span className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-gold-dark via-gold to-gold-light shadow-glow">
                    <s.icon className="h-9 w-9 text-navy-950" aria-hidden="true" />
                    <span className="absolute -end-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                    {s.step}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-10 text-center">
          <Button href="#trial" size="lg">
            Book My Free Trial
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
