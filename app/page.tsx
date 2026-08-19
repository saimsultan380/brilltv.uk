import type { Metadata } from "next";
import { CatalogueSection } from "@/components/home/CatalogueSection";
import { ClaritySection } from "@/components/home/ClaritySection";
import { ConnectionsSection } from "@/components/home/ConnectionsSection";
import { DevicesSection } from "@/components/home/DevicesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeReviewsSection } from "@/components/home/HomeReviewsSection";
import { IncludedSection } from "@/components/home/IncludedSection";
import { PlansSection } from "@/components/home/PlansSection";
import { StepsSection } from "@/components/home/StepsSection";
import { TrialSection } from "@/components/home/TrialSection";
import { ViewersWantSection } from "@/components/home/ViewersWantSection";
import { ViewingTipsSection } from "@/components/home/ViewingTipsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: "IPTV UK – 20,000+ Channels, Plans from £9.99 & Free Trial",
  description:
    "Choose an IPTV UK subscription from £9.99 with 20,000+ listed live channels, 80,000+ movies and series, VPN, EPG, selected Catch-Up and setup support.",
  keywords: [
    "IPTV UK",
    "IPTV subscription UK",
    "IPTV service UK",
    "IPTV plans UK",
    "IPTV free trial UK",
    "IPTV provider UK",
    "UK IPTV subscription",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <main>
        <HeroSection />
        <PlansSection />
        <CatalogueSection />
        <TrialSection />
        <IncludedSection />
        <DevicesSection />
        <ConnectionsSection />
        <ViewingTipsSection />
        <ClaritySection />
        <StepsSection />
        <ViewersWantSection />
        <WhyChooseSection />
        <HomeReviewsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
    </>
  );
}
