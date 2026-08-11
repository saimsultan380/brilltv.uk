import type { Metadata } from "next";
import { CatalogueSection } from "@/components/home/CatalogueSection";
import { ClaritySection } from "@/components/home/ClaritySection";
import { ConnectionsSection } from "@/components/home/ConnectionsSection";
import { DevicesSection } from "@/components/home/DevicesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { IncludedSection } from "@/components/home/IncludedSection";
import { PlansSection } from "@/components/home/PlansSection";
import { StepsSection } from "@/components/home/StepsSection";
import { TrialSection } from "@/components/home/TrialSection";
import { ViewersWantSection } from "@/components/home/ViewersWantSection";
import { ViewingTipsSection } from "@/components/home/ViewingTipsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: {
    canonical: canonicalUrl("/"),
  },
};

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
        <FaqSection />
        <FinalCtaSection />
      </main>
    </>
  );
}
