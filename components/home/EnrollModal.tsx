"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { PLANS, SITE, whatsappLink, type Course } from "@/lib/site";
import { sendLeadEmail } from "@/lib/leads";

interface EnrollModalProps {
  course: Course | null;
  onClose: () => void;
}

export default function EnrollModal({ course, onClose }: EnrollModalProps) {
  const [sent, setSent] = useState(false);
  const [sentContact, setSentContact] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const planId = String(data.get("plan") || "");
    const plan = PLANS.find((p) => p.id === planId);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const msg =
      `Assalamu Alaikum! New enrollment request from the QuranHub website.\n\n` +
      `Course: ${course?.title ?? ""}\n` +
      `Plan: ${plan ? `${plan.name} — ${plan.classesPerWeek} classes/week` : planId}\n` +
      `Name: ${name}\nContact: ${contact}`;
    // Open WhatsApp chat with the academy — the enrollment details arrive as a message
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    // Also email the enrollment details to the academy inbox — this covers
    // visitors who don't have WhatsApp; their interest lands in the inbox.
    sendLeadEmail(`New enrollment request — ${course?.title ?? ""}`, {
      Course: course?.title ?? "",
      Plan: plan ? `${plan.name} — ${plan.classesPerWeek} classes/week` : planId,
      Name: name,
      Contact: contact,
    });
    setSentContact(contact);
    setSent(true);
  };

  /* Reset + lock scroll while open; close on Escape */
  useEffect(() => {
    if (!course) return;
    setSent(false);
    setSentContact("");
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [course, onClose]);

  return (
    <AnimatePresence>
      {course ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] grid place-items-center bg-night-deep/70 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Enroll in ${course.title}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-md rounded-3xl bg-white p-6 shadow-card dark:bg-night-soft sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700 dark:text-gold-300">
                  One-click enrollment
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink dark:text-sand-100">
                  {course.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close enrollment dialog"
                className="rounded-full p-1.5 text-ink-soft transition-colors hover:bg-black/5 dark:text-night-muted dark:hover:bg-white/10"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {sent ? (
              <div className="mt-6 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-brand-600 dark:text-gold-300" aria-hidden="true" />
                <p className="mt-4 text-lg font-semibold text-ink dark:text-sand-100">
                  Request received!
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-night-muted">
                  Your enrollment request for <strong>{course.title}</strong>{" "}
                  has been received — your details were also emailed to our
                  team, so your request is safe even without WhatsApp. We will
                  contact you shortly
                  {sentContact ? (
                    <>
                      {" "}at <strong>{sentContact}</strong>
                    </>
                  ) : null}{" "}
                  to schedule your free trial class. Want a faster reply?
                  Confirm on WhatsApp below.
                </p>
                <a
                  href={whatsappLink(`Assalamu Alaikum, I want to enroll in ${course.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-waDark px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-wa"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Confirm faster on WhatsApp
                </a>
                <p className="mt-2 text-[11px] text-ink-soft dark:text-night-muted">
                  {SITE.whatsappDisplay}
                </p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="enroll-plan" className="mb-1.5 block text-sm font-medium text-ink dark:text-sand-100">
                    Choose your plan
                  </label>
                  <select
                    id="enroll-plan"
                    name="plan"
                    required
                    defaultValue={PLANS[1].id}
                    className="h-12 w-full rounded-2xl border border-brand-800/15 bg-white/80 px-3 text-sm text-ink outline-none focus:border-gold-400 dark:border-white/15 dark:bg-white/[0.06] dark:text-sand-100"
                  >
                    {PLANS.map((p) => (
                      <option key={p.id} value={p.id} className="text-ink">
                        {p.name} — {p.classesPerWeek} classes/week
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="enroll-name" className="mb-1.5 block text-sm font-medium text-ink dark:text-sand-100">
                    Full name
                  </label>
                  <input
                    id="enroll-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="h-12 w-full rounded-2xl border border-brand-800/15 bg-white/80 px-3 text-sm text-ink outline-none placeholder:text-ink-soft/60 focus:border-gold-400 dark:border-white/15 dark:bg-white/[0.06] dark:text-sand-100 dark:placeholder:text-night-muted/60"
                  />
                </div>
                <div>
                  <label htmlFor="enroll-contact" className="mb-1.5 block text-sm font-medium text-ink dark:text-sand-100">
                    Email or WhatsApp number
                  </label>
                  <input
                    id="enroll-contact"
                    name="contact"
                    required
                    autoComplete="tel"
                    placeholder="you@example.com or +1 555 000 1234"
                    className="h-12 w-full rounded-2xl border border-brand-800/15 bg-white/80 px-3 text-sm text-ink outline-none placeholder:text-ink-soft/60 focus:border-gold-400 dark:border-white/15 dark:bg-white/[0.06] dark:text-sand-100 dark:placeholder:text-night-muted/60"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold w-full text-sm"
                >
                  Enroll Now — Start Free Trial
                </button>
                <p className="text-center text-xs text-ink-soft dark:text-night-muted">
                  Free 3-day trial included. No credit card required.
                </p>
                <p className="text-center text-xs font-semibold text-brand-700 dark:text-gold-300">
                  No WhatsApp? No problem — your details are emailed to our team too.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
