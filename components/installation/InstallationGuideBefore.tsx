import { GuideStandaloneSection, guideStandaloneIcons } from "@/components/installation/GuideStandaloneSection";
import { beforeYouBeginSection } from "@/lib/installation-guide-data";

export function InstallationGuideBefore() {
  return (
    <GuideStandaloneSection
      id="guide-before-heading"
      eyebrow="Getting ready"
      title={beforeYouBeginSection.title}
      blocks={beforeYouBeginSection.blocks}
      variant="checklist"
      icon={guideStandaloneIcons.before}
    />
  );
}
