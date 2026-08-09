import { GuideStandaloneSection, guideStandaloneIcons } from "@/components/installation/GuideStandaloneSection";
import { firestickSection } from "@/lib/installation-guide-data";

export function InstallationGuideFirestick() {
  return (
    <GuideStandaloneSection
      id="guide-firestick-heading"
      eyebrow="Amazon devices"
      title={firestickSection.title}
      blocks={firestickSection.blocks}
      variant="steps"
      icon={guideStandaloneIcons.firestick}
    />
  );
}
