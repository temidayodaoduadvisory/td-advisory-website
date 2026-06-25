/**
 * Formspree configuration.
 *
 * The contact form posts to Formspree (https://formspree.io) instead of a
 * backend server, which keeps the site fully static. The form ID is injected
 * at build time from the `VITE_FORMSPREE_FORM_ID` environment variable
 * (set locally in `.env.local` and in the Vercel project settings).
 */
export const FORMSPREE_FORM_ID: string = import.meta.env.VITE_FORMSPREE_FORM_ID ?? "";

/** Subject line used for the notification email Formspree sends. */
export const FORMSPREE_EMAIL_SUBJECT = "New enquiry — TD Advisory website";
