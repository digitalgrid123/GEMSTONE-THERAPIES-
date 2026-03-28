import type { MetadataRoute } from "next";
import { getSiteUrl, isNoIndex } from "@/lib/site";

/**
 * Single-page marketing site: list only real paths (no #hash — crawlers ignore fragments).
 * Add entries here when you add new routes (e.g. /blog, /contact).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (isNoIndex()) {
    return [];
  }

  const base = getSiteUrl().trim().replace(/\/+$/, "");
  const lastModified = new Date();

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
