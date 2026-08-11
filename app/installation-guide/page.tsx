import type { Metadata } from "next";
import { InstallationGuideBefore } from "@/components/installation/InstallationGuideBefore";
import { InstallationGuideHero } from "@/components/installation/InstallationGuideHero";
import {
  InstallationGuideSchema,
  InstallationGuideSupport,
} from "@/components/installation/InstallationGuideSchema";
import { InstallationGuideTabs } from "@/components/installation/InstallationGuideTabs";
import { InstallationGuideTroubleshooting } from "@/components/installation/InstallationGuideTroubleshooting";
import {
  InstallationGuideEpg,
  InstallationGuideXtream,
} from "@/components/installation/InstallationGuideXtream";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes, siteConfig } from "@/lib/site";
import { canonicalUrl } from "@/lib/seo";

const pageUrl = canonicalUrl(routes.installation);

export const metadata: Metadata = {
  title: "IPTV UK Installation Guide – Firestick, TV & Mobile",
  description:
    "Install IPTV UK on Firestick, Android TV, Smart TV, Apple devices, Windows or Mac. Follow dedicated-app and Xtream Codes setup steps.",
  alternates: {
    canonical: pageUrl,
  },
  keywords: [
    "IPTV UK installation guide",
    "install IPTV on Firestick",
    "IPTV setup UK",
    "IPTV on Smart TV",
    "Xtream Codes setup",
    "IPTV player installation",
  ],
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "IPTV UK Installation Guide – Firestick, TV & Mobile",
    description:
      "Install IPTV UK on Firestick, Android TV, Smart TV, Apple devices, Windows or Mac. Follow dedicated-app and Xtream Codes setup steps.",
    siteName: siteConfig.name,
    locale: "en-GB",
  },
};

export default function InstallationGuidePage() {
  return (
    <>
      <InstallationGuideSchema />
      <main>
        <InstallationGuideHero />
        <InstallationGuideBefore />

        <section
          className="telvis-section telvis-guide-section"
          aria-labelledby="guide-devices-heading"
        >
          <div className="telvis-section-inner">
            <SectionHeader
              id="guide-devices-heading"
              eyebrow="Device setup"
              title={
                <>
                  Set Up <TitleAccent>IPTV UK</TitleAccent> on Firestick, Smart TV,
                  Mobile and More
                </>
              }
              lead="Choose your device from the list below. Tabs run from Firestick setup through to Kodi. Follow one method at a time and keep your welcome message nearby."
            />
            <InstallationGuideTabs />
          </div>
        </section>

        <InstallationGuideXtream />
        <InstallationGuideEpg />
        <InstallationGuideTroubleshooting />
        <InstallationGuideSupport />
      </main>
    </>
  );
}
