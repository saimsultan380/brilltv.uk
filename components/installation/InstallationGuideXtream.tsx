import { GuideStandaloneSection, guideStandaloneIcons } from "@/components/installation/GuideStandaloneSection";
import { TitleAccent } from "@/components/ui/SectionHeader";
import {
  refreshEpgSection,
  xtreamCodesSection,
} from "@/lib/installation-guide-data";

export function InstallationGuideXtream() {
  return (
    <GuideStandaloneSection
      id="guide-xtream-heading"
      eyebrow="Login details"
      title={
        <>
          How to Enter <TitleAccent>Xtream Codes</TitleAccent> Correctly
        </>
      }
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
      title={
        <>
          Refresh the <TitleAccent>EPG</TitleAccent>
        </>
      }
      blocks={refreshEpgSection.blocks}
      variant="ordered"
      icon={guideStandaloneIcons.epg}
    />
  );
}
