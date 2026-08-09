import { GuideStandaloneSection, guideStandaloneIcons } from "@/components/installation/GuideStandaloneSection";
import { TitleAccent } from "@/components/ui/SectionHeader";
import { firestickSection } from "@/lib/installation-guide-data";

export function InstallationGuideFirestick() {
  return (
    <GuideStandaloneSection
      id="guide-firestick-heading"
      eyebrow="Amazon devices"
      title={
        <>
          Firestick and Fire TV Setup with the{" "}
          <TitleAccent>Dedicated App</TitleAccent>
        </>
      }
      blocks={firestickSection.blocks}
      variant="steps"
      icon={guideStandaloneIcons.firestick}
    />
  );
}
