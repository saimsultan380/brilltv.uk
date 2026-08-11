import type { MetadataRoute } from "next";
import { canonicalUrl, indexableRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((path) => ({
    url: canonicalUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
