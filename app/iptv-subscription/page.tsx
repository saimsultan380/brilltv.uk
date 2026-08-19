import type { Metadata } from "next";
import { PlansPageContent } from "@/components/home/PlansPageContent";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbList, pageMetadata, webPageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: routes.plans,
  title: "IPTV Subscription Plans – 1, 3, 6 & 12 Months",
  description:
    "Compare IPTV subscription plans from £9.99 with 20,000+ channels, 80,000+ VOD titles, VPN, EPG, Catch-Up and 24/7 setup support.",
  keywords: [
    "IPTV Subscription",
    "IPTV subscription plans",
    "IPTV cost UK",
    "cheap IPTV UK",
    "best IPTV subscription UK",
  ],
});

export default function SubscriptionPlansPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "IPTV Subscription", path: routes.plans },
      ]),
      webPageSchema({
        type: "WebPage",
        path: routes.plans,
        name: "IPTV Subscription Plans – 1, 3, 6 & 12 Months",
        description:
          "Compare IPTV subscription plans from £9.99 with 20,000+ channels, 80,000+ VOD titles, VPN, EPG, Catch-Up and 24/7 setup support.",
      }),
    ],
  };

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <main>
        <PlansPageContent />
      </main>
    </>
  );
}
