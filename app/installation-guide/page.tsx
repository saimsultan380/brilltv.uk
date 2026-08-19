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
import { routes } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: routes.installation,
  title: "IPTV Installation Guide – Setup on Any Supported Device",
  description:
    "Follow our IPTV installation guide for Fire TV, Smart TV, Android, Apple devices, Windows, Mac, Formuler and Kodi.",
  keywords: [
    "IPTV installation guide",
    "IPTV setup UK",
    "how to install IPTV",
    "IPTV Firestick setup",
    "IPTV Smart TV setup",
    "IPTV installation UK",
  ],
  ogType: "article",
});

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
