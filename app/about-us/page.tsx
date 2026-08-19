import type { Metadata } from "next";
import { AboutContent } from "@/components/home/AboutContent";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbList, pageMetadata, webPageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: routes.about,
  title: "About IPTV UK – Plans, Devices, Free Trial & Support",
  description:
    "Learn about IPTV UK, our clear subscription plans, supported devices, free trial, guided installation and customer-support approach.",
  keywords: [
    "About IPTV UK",
    "IPTV service UK",
    "IPTV plans UK",
    "IPTV customer support",
    "UK IPTV provider",
  ],
});

export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "About Us", path: routes.about },
      ]),
      webPageSchema({
        type: "AboutPage",
        path: routes.about,
        name: "About IPTV UK – Plans, Devices, Free Trial & Support",
        description:
          "Learn about IPTV UK, our clear subscription plans, supported devices, free trial, guided installation and customer-support approach.",
      }),
    ],
  };

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <main>
        <AboutContent />
      </main>
    </>
  );
}
