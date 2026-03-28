/**
 * Canonical site origin for metadata, sitemap, robots, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL when you have a domain (e.g. https://www.example.com).
 * On Vercel, preview deployments fall back to https://VERCEL_URL automatically.
 */
export function getSiteUrl(): string {
  // 1. Explicitly set URL (e.g. from environment variables)
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit && explicit !== "undefined" && explicit !== "") {
    return explicit.replace(/\/+$/, "");
  }

  // 2. Default production URL
  return "https://gemstonetherapies.store";
}

export function getAbsoluteUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/** When true, pages send noindex and robots disallow (staging). */
export function isNoIndex(): boolean {
  return process.env.NEXT_PUBLIC_NO_INDEX === "true";
}

export const SITE_BRAND = {
  name: "Gemstone Therapies Clinic",
  shortName: "Gemstone Therapies",
  tagline:
    "Stone therapy & homoeopathic pain care in Lahore — Dr. Shahid Aqeel Rana.",
} as const;
