import type { MetadataRoute } from "next";
import { getSiteUrl, isNoIndex } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();

  if (isNoIndex()) {
    return {
      rules: { userAgent: "*", disallow: ["/"] },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base.replace(/\/+$/, "")}/sitemap.xml`,
  };
}
