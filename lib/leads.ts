import { SITE } from "./site";

/**
 * Sends a lead notification email to the academy's inbox.
 * Fire-and-forget: failures never block the user experience.
 *
 * Uses the free formsubmit.co AJAX endpoint — no backend or API key needed.
 * NOTE: the inbox owner must confirm the one-time activation email that
 * formsubmit sends on the first submission, otherwise emails are held.
 *
 * Also fires a Meta Pixel "Lead" event when the Pixel is configured, so
 * Facebook can attribute trial requests to ads/organic traffic later.
 */
export function sendLeadEmail(
  subject: string,
  fields: Record<string, string>
): void {
  try {
    const w = window as unknown as { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === "function") {
      w.fbq("track", "Lead");
    }
  } catch {
    /* analytics is optional — never break the form UX */
  }
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
