"use client";

import { useState } from "react";
import { CheckCircle2, MessageCircle, Timer } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { sendLeadEmail } from "@/lib/leads";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";

export default function FreeTrialForm() {
  const { locale } = useLocale();
  const d = dict[locale];
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const student =
      String(data.get("student") || "kid") === "adult" ? "Adult" : "Kid";
    const msg =
      `Assalamu Alaikum! New FREE trial request from the QuranHub website.\n\n` +
      `Name: ${name}\nContact: ${contact}\nStudent: ${student}`;
    // Open WhatsApp chat with the academy — the lead details arrive as a message
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    // Also email the lead details to the academy inbox (backup channel)
    sendLeadEmail("New FREE trial request", {
      Name: name,
      Contact: contact,
      Student: student,
    });
    setSent(true);
  };

  const inputCls =
    "h-12 w-full rounded-2xl border border-brand-800/15 bg-white/80 px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-gold-400 dark:border-white/15 dark:bg-white/[0.06] dark:text-sand-100 dark:placeholder:text-night-muted/60";

  return (
    <section
      id="trial"
      aria-labelledby="trial-heading"
      className="relative scroll-mt-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-800 via-brand-900 to-night-deep shadow-card">
          {/* geo texture */}
          <div className="geo-pattern-dark absolute inset-0 opacity-60" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -end-24 -top-24 h-80 w-80 rounded-full bg-gold-400/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-14">
            {/* Copy */}
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-300">
                <Timer className="h-4 w-4" aria-hidden="true" />
                {d.trialEyebrow}
              </p>
              <h2
                id="trial-heading"
                className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]"
              >
                {d.trialTitle}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-sand-100/80">
                {d.trialSub}
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-sand-100/85">
                {[d.guaranteeTrial, d.guaranteeNoCard, d.guaranteeSameTutor].map((g) => (
                  <li key={g} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-300" aria-hidden="true" />
                    {g}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Form card */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-white/95 p-6 shadow-card backdrop-blur-xl dark:bg-night-soft/95 sm:p-8">
                {sent ? (
                  <div className="py-8 text-center">
                    <CheckCircle2 className="mx-auto h-14 w-14 text-brand-600 dark:text-gold-300" aria-hidden="true" />
                    <p className="mt-4 font-display text-2xl font-semibold text-ink dark:text-sand-100">
                      {d.formSuccessTitle}
                    </p>
                    <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-soft dark:text-night-muted">
                      {d.formSuccessText}
                    </p>
                    <a
                      href={whatsappLink("Assalamu Alaikum, I just requested a free trial on the website.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-waDark px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-wa"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      {d.stickyWhatsapp}
                    </a>
                    <p className="mt-2 text-[11px] text-ink-soft dark:text-night-muted">
                      {SITE.whatsappDisplay}
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="trial-name" className="mb-1.5 block text-sm font-semibold text-ink dark:text-sand-100">
                        {d.formName}
                      </label>
                      <input
                        id="trial-name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder={d.formNamePh}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="trial-contact" className="mb-1.5 block text-sm font-semibold text-ink dark:text-sand-100">
                        {d.formContact}
                      </label>
                      <input
                        id="trial-contact"
                        name="contact"
                        required
                        autoComplete="tel"
                        placeholder={d.formContactPh}
                        className={inputCls}
                      />
                    </div>
                    <fieldset>
                      <legend className="mb-1.5 text-sm font-semibold text-ink dark:text-sand-100">
                        {d.formStudent}
                      </legend>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: "kid", label: d.formStudentKid },
                          { id: "adult", label: d.formStudentAdult },
                        ].map((o) => (
                          <label
                            key={o.id}
                            className="flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-2xl border border-brand-800/15 px-3 text-sm font-semibold text-ink-soft transition-colors has-[:checked]:border-gold-400 has-[:checked]:bg-gold-400/15 has-[:checked]:text-ink dark:border-white/15 dark:text-night-muted dark:has-[:checked]:text-sand-100"
                          >
                            <input
                              type="radio"
                              name="student"
                              value={o.id}
                              defaultChecked={o.id === "kid"}
                              className="sr-only"
                            />
                            {o.label}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                    <button type="submit" className="btn-gold w-full text-base">
                      {d.formSubmit}
                    </button>
                    <p className="text-center text-xs text-ink-soft dark:text-night-muted">
                      {d.formNote}
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
