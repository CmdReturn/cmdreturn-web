// Business details used across the site: footer, legal pages, JSON-LD.

export const SITE_URL = "https://cmdreturn.io";
export const COMPANY = "CmdReturn Inc.";
export const EMAIL = "dave@cmdreturn.io";
export const PHONE = "647-544-1775";
export const PHONE_E164 = "+16475441775";

// Full LinkedIn URL. Leave empty to hide the footer link and the JSON-LD sameAs.
export const LINKEDIN_URL = "";

// Booking page for "Prefer to talk? Book 20 minutes". Unset hides the link.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";

// Public pages, for the sitemap.
export const PUBLIC_PAGES = [
  "/",
  "/offers",
  "/work",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];
