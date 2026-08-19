import type { Metadata } from "next";
import { brandAssets, siteConfig, supportConfig } from "@/lib/site";

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
    "@id": `${canonicalUrl("/")}#logo`,
    url: logoUrl,
    contentUrl: logoUrl,
    width: 512,
    height: 512,
    caption: siteConfig.name,
  };
}

export function organizationSchema() {
  const homeUrl = canonicalUrl("/");

  return {
    "@type": "Organization",
    "@id": `${homeUrl}#organization`,
    name: siteConfig.name,
    url: homeUrl,
    logo: organizationLogoSchema(),
    image: absoluteAssetUrl(brandAssets.logo512),
    email: supportConfig.email,
    telephone: supportConfig.whatsapp,
    areaServed: "GB",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: supportConfig.email,
        telephone: supportConfig.whatsapp,
        url: supportConfig.whatsappUrl,
        availableLanguage: ["English"],
        areaServed: "GB",
        hoursAvailable: "24/7",
      },
    ],
  };
}

export function websiteSchema() {
  const homeUrl = canonicalUrl("/");

  return {
    "@type": "WebSite",
    "@id": `${homeUrl}#website`,
    url: homeUrl,
    name: siteConfig.name,
    alternateName: ["IPTV UK", "brilltv.uk", "Brill TV"],
    publisher: { "@id": `${homeUrl}#organization` },
    inLanguage: "en-GB",
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

/**
 * Google BreadcrumbList: at least two items on inner pages.
 * Last item omits `item` so Google uses the crawled page URL.
 * @see https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 */
export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  const lastIndex = items.length - 1;
  const pageUrl = canonicalUrl(items[lastIndex]?.path ?? "/");

  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => {
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
      };

      if (index !== lastIndex) {
        entry.item = canonicalUrl(item.path);
      }

      return entry;
    }),
  };
}

export function webPageSchema({
  type = "WebPage",
  path,
  name,
  description,
}: {
  type?: string;
  path: string;
  name: string;
  description: string;
}) {
  const url = canonicalUrl(path);

  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${canonicalUrl("/")}#website` },
    about: { "@id": `${canonicalUrl("/")}#organization` },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    publisher: { "@id": `${canonicalUrl("/")}#organization` },
  };
}

export function pageMetadata({
  path,
  title,
  description,
  keywords,
  ogType = "website",
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogType?: "website" | "article";
}): Metadata {
  const url = canonicalUrl(path);

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: ogType,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: "en_GB",
      images: [
        {
          url: brandAssets.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} IPTV UK`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [brandAssets.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/** Routes included in sitemap.xml (indexable pages only). */
export const indexableRoutes = [
  "/",
  "/free-trial",
  "/reviews",
  "/installation-guide",
  "/iptv-subscription",
  "/supported-devices",
  "/about-us",
  "/terms-of-service",
  "/privacy-policy",
  "/refund-policy",
  "/dmca-policy",
] as const;
