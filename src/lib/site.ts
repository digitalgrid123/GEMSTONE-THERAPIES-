/**
 * Canonical site origin for metadata, sitemap, robots, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL when you have a domain (e.g. https://www.example.com).
 * On Vercel, preview deployments fall back to https://VERCEL_URL automatically.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/+$/, "");
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/\/+$/, "");
    return host.startsWith("http") ? host : `https://${host}`;
  }
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
