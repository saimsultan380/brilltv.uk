import type { Metadata } from "next";
import { DevicesPageContent } from "@/components/home/DevicesPageContent";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbList, pageMetadata, webPageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: routes.devices,
  title: "IPTV Supported Devices – Fire TV, Smart TV, Apple & More",
  description:
    "Check IPTV supported devices including Fire TV, Android TV, Smart TVs, Apple devices, Windows, Mac, Formuler and Kodi.",
  keywords: [
    "IPTV Supported Devices",
    "IPTV compatible devices",
    "IPTV for Smart TV",
    "IPTV for Firestick",
    "IPTV on Apple TV",
    "IPTV device compatibility",
  ],
});

export default function SupportedDevicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Supported Devices", path: routes.devices },
      ]),
      webPageSchema({
        type: "WebPage",
        path: routes.devices,
        name: "IPTV Supported Devices – Fire TV, Smart TV, Apple & More",
        description:
          "Check IPTV supported devices including Fire TV, Android TV, Smart TVs, Apple devices, Windows, Mac, Formuler and Kodi.",
      }),
    ],
  };

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <main>
        <DevicesPageContent />
      </main>
    </>
  );
}
