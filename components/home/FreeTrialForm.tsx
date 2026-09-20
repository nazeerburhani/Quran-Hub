"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Clock3, Globe2, MessageCircle } from "lucide-react";
import { COURSES, SITE, whatsappLink } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const inputCls =
  "h-12 w-full rounded-xl border border-white/10 bg-white/70 px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-gold/60 dark:bg-white/5 dark:text-white";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function FreeTrialForm() {
  const [timezone, setTimezone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  /* Auto-detect the visitor's timezone */
  useEffect(() => {
    try {
      setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || "");
    } catch {
      setTimezone("");
    }
  }, []);

  return (
    <section id="trial" aria-labelledby="trial-heading" className="relative scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.04] to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          id="trial-heading"
          eyebrow="Free 3-Day Trial"
          title="Book your free trial class"
          description="No credit card. No commitment. Just three days of live classes with a certified tutor — and a personal learning plan for you or your child."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="glass rounded-3xl p-6 shadow-card sm:p-8">
              {status === "done" ? (
                <div className="py-8 text-center" role="status">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-500" aria-hidden="true" />
                  <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                    Request received!
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    JazakAllahu Khairan! Our admissions team will contact you
                    within a few hours to confirm your trial slot
                    {timezone ? ` (we detected your timezone as ${timezone})` : ""}.
                    You will also receive confirmation by email and WhatsApp once connected.
                  </p>
                  <a
                    href={whatsappLink("Assalamu Alaikum, I just booked a free trial on the website.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1faa53] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#25d366]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Get instant confirmation on WhatsApp
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStatus("sending");
                    /* Demo mode: simulate a network request. At launch this
                       POSTs to Supabase (trial_requests table). */
                    window.setTimeout(() => setStatus("done"), 900);
                  }}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <Field id="trial-name" label="Full name">
                    <input id="trial-name" required placeholder="Your name" autoComplete="name" className={inputCls} />
                  </Field>
                  <Field id="trial-email" label="Email address">
                    <input id="trial-email" type="email" required placeholder="you@example.com" autoComplete="email" className={inputCls} />
                  </Field>
                  <Field id="trial-whatsapp" label="WhatsApp number">
                    <input id="trial-whatsapp" type="tel" required placeholder="+1 555 000 1234" autoComplete="tel" className={inputCls} />
                  </Field>
                  <Field id="trial-country" label="Country">
                    <input id="trial-country" required placeholder="e.g. United States" autoComplete="country-name" className={inputCls} />
                  </Field>
                  <Field id="trial-course" label="Course of interest">
                    <select id="trial-course" required defaultValue="" className={`${inputCls} [&>option]:text-slate-900`}>
                      <option value="" disabled>
                        Select a course…
                      </option>
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.slug}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="trial-timezone" label="Your timezone (auto-detected)">
                    <input
                      id="trial-timezone"
                      value={timezone || "Detecting…"}
                      readOnly
                      aria-readonly="true"
                      className={`${inputCls} opacity-70`}
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-gold w-full text-base disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending…" : "Book My Free Trial"}
                    </button>
                    <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
                      By submitting, you agree to be contacted about your trial. We never share your details.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* What happens next */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="glass rounded-3xl p-6">
                <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
                  <Clock3 className="h-5 w-5 text-gold" aria-hidden="true" />
                  What happens next?
                </h3>
                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <li className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-xs font-bold text-gold-dark dark:text-gold-light">1</span>
                    We call or message you within a few hours to fix your trial time.
                  </li>
                  <li className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-xs font-bold text-gold-dark dark:text-gold-light">2</span>
                    You meet your tutor live and get a free level assessment.
                  </li>
                  <li className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-xs font-bold text-gold-dark dark:text-gold-light">3</span>
                    You receive a personal learning plan — continue only if you love it.
                  </li>
                </ol>
              </div>
              <div className="glass rounded-3xl p-6">
                <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
                  <Globe2 className="h-5 w-5 text-gold" aria-hidden="true" />
                  Prefer to talk first?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Message our admin directly — we usually reply within minutes,
                  any time of day.
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1faa53] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#25d366]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {SITE.whatsappDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
