import { GuideStandaloneSection, guideStandaloneIcons } from "@/components/installation/GuideStandaloneSection";
import {
  refreshEpgSection,
  xtreamCodesSection,
} from "@/lib/installation-guide-data";

export function InstallationGuideXtream() {
  return (
    <GuideStandaloneSection
      id="guide-xtream-heading"
      eyebrow="Login details"
      title={xtreamCodesSection.title}
      blocks={xtreamCodesSection.blocks}
      variant="fields"
      icon={guideStandaloneIcons.xtream}
    />
  );
}

export function InstallationGuideEpg() {
  return (
    <GuideStandaloneSection
      id="guide-epg-heading"
      eyebrow="Programme guide"
      title={refreshEpgSection.title}
      blocks={refreshEpgSection.blocks}
      variant="ordered"
      icon={guideStandaloneIcons.epg}
    />
  );
}
