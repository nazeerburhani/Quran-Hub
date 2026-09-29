import { SITE } from "./site";

/**
 * Sends a lead notification email to the academy's inbox.
 * Fire-and-forget: failures never block the user experience.
 *
 * Uses the free formsubmit.co AJAX endpoint — no backend or API key needed.
 * NOTE: the inbox owner must confirm the one-time activation email that
 * formsubmit sends on the first submission, otherwise emails are held.
 */
export function sendLeadEmail(
  subject: string,
  fields: Record<string, string>
): void {
  try {
    const payload = {
      _subject: `[QuranHub Website] ${subject}`,
      _template: "table",
      ...fields,
    };
    fetch(`https://formsubmit.co/ajax/${SITE.leadsEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    }).catch(() => {
      /* email is a backup channel — WhatsApp is primary */
    });
  } catch {
    /* never break the form UX */
  }
}
