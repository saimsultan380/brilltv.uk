import { brandAssets, siteConfig } from "@/lib/site";

/** Non-www absolute URL with trailing slash (canonical format). */
export function canonicalUrl(path: string = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");

  if (!path || path === "/") {
    return `${base}/`;
  }

  const segment = path.replace(/^\/+|\/+$/g, "");
  return `${base}/${segment}/`;
}

/** Absolute URL for a static asset in /public. */
export function absoluteAssetUrl(assetPath: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${base}${normalized}`;
}

export function organizationLogoSchema() {
  const logoUrl = absoluteAssetUrl(brandAssets.logo512);

  return {
    "@type": "ImageObject",
    "@id": logoUrl,
    url: logoUrl,
    contentUrl: logoUrl,
    width: 512,
    height: 512,
    caption: siteConfig.name,
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

/** Routes included in sitemap.xml (indexable pages only). */
export const indexableRoutes = [
  "/",
  "/contact",
  "/reviews",
  "/installation-guide",
] as const;
