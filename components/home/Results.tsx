import { Award, Repeat2, TrendingUp, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const results = [
  {
    icon: Award,
    stat: "300+",
    title: "Huffaz graduated",
    text: "Students who completed full Quran memorization with our Sabaq / Sabqi / Manzil revision system.",
  },
  {
    icon: TrendingUp,
    stat: "95%",
    title: "Student retention",
    text: "Families stay because classes are personal, teachers are consistent, and progress is visible every month.",
  },
  {
    icon: Users,
    stat: "Ages 4–70+",
    title: "Learning together",
    text: "Children, teens, busy parents and grandparents — everyone learns at their own pace, from any level.",
  },
  {
    icon: Repeat2,
    stat: "100%",
    title: "Live & personal",
    text: "No pre-recorded videos. Every minute is live with your tutor, correcting your recitation in real time.",
  },
];

export default function Results() {
  return (
    <section aria-labelledby="results-heading" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          id="results-heading"
          eyebrow="Student Results"
          title="Real progress, measured monthly"
          description="We track every student's recitation, memorization and Tajweed — and share a clear report with parents each month."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08} className="h-full">
              <article className="glass group h-full rounded-3xl p-7 shadow-card transition-shadow duration-300 hover:shadow-glow">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 transition-transform duration-300 group-hover:scale-110">
                  <r.icon className="h-6 w-6 text-gold-dark dark:text-gold-light" aria-hidden="true" />
                </span>
                <p className="text-gold-gradient mt-4 text-4xl font-extrabold">{r.stat}</p>
                <h3 className="mt-1 text-base font-bold text-slate-900 dark:text-white">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {r.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
