import type { Metadata } from "next";
import { PrivacyContent } from "@/components/legal/PrivacyContent";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbList, pageMetadata, webPageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: routes.privacy,
  title: "IPTV UK Privacy Policy – How We Protect Your Data",
  description:
    "Read the IPTV UK Privacy Policy to understand what information we collect, why it is used, how long it is retained and your rights.",
  keywords: [
    "IPTV UK Privacy Policy",
    "IPTV privacy",
    "data protection IPTV",
  ],
});

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: routes.privacy },
      ]),
      webPageSchema({
        type: "WebPage",
        path: routes.privacy,
        name: "IPTV UK Privacy Policy – How We Protect Your Data",
        description:
          "Read the IPTV UK Privacy Policy to understand what information we collect, why it is used, how long it is retained and your rights.",
      }),
    ],
  };

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <main>
        <PrivacyContent />
      </main>
    </>
  );
}
