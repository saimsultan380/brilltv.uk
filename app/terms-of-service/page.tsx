import type { Metadata } from "next";
import { TermsContent } from "@/components/legal/TermsContent";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbList, pageMetadata, webPageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: routes.terms,
  title: "IPTV UK Terms of Service – Subscription Conditions",
  description:
    "Read the IPTV UK Terms of Service covering subscriptions, payments, trials, acceptable use, account security and service availability.",
  keywords: [
    "IPTV UK Terms of Service",
    "IPTV subscription terms",
    "IPTV terms and conditions",
  ],
});

export default function TermsOfServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Terms of Service", path: routes.terms },
      ]),
      webPageSchema({
        type: "WebPage",
        path: routes.terms,
        name: "IPTV UK Terms of Service – Subscription Conditions",
        description:
          "Read the IPTV UK Terms of Service covering subscriptions, payments, trials, acceptable use, account security and service availability.",
      }),
    ],
  };

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <main>
        <TermsContent />
      </main>
    </>
  );
}
