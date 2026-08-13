import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const home = canonicalUrl("/");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/",
          "/favicon.ico",
          "/favicon-48.png",
          "/favicon-96.png",
          "/logo-512.png",
          "/icon-192.png",
          "/icon-512.png",
          "/apple-touch-icon.png",
          "/og-image.png",
        ],
      },
    ],
    sitemap: `${home}sitemap.xml`,
    host: siteConfig.url.replace(/\/$/, ""),
  };
}
