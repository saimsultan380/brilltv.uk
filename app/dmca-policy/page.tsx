import type { Metadata } from "next";
import { DmcaContent } from "@/components/legal/DmcaContent";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbList, pageMetadata, webPageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: routes.dmca,
  title: "IPTV UK DMCA Policy – Copyright Notice Procedure",
  description:
    "Read the IPTV UK DMCA Policy and learn how copyright owners can submit an infringement notice or counter-notification for review.",
  keywords: [
    "IPTV UK DMCA Policy",
    "IPTV copyright policy",
    "DMCA notice procedure",
  ],
});

export default function DmcaPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "DMCA Policy", path: routes.dmca },
      ]),
      webPageSchema({
        type: "WebPage",
        path: routes.dmca,
        name: "IPTV UK DMCA Policy – Copyright Notice Procedure",
        description:
          "Read the IPTV UK DMCA Policy and learn how copyright owners can submit an infringement notice or counter-notification for review.",
      }),
    ],
  };

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <main>
        <DmcaContent />
      </main>
    </>
  );
}
