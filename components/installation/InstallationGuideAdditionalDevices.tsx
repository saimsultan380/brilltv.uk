import {
  GuideStandaloneSection,
  guideStandaloneIcons,
} from "@/components/installation/GuideStandaloneSection";
import { TitleAccent } from "@/components/ui/SectionHeader";
import { additionalDeviceSections } from "@/lib/installation-guide-data";

const sectionConfig = {
  "iphone-ipad": {
    eyebrow: "Apple mobile",
    icon: guideStandaloneIcons.iphone,
    title: (
      <>
        iPhone and <TitleAccent>iPad</TitleAccent> Setup
      </>
    ),
    variant: "ordered" as const,
  },
  "apple-tv": {
    eyebrow: "Apple TV",
    icon: guideStandaloneIcons.appleTv,
    title: (
      <>
        <TitleAccent>Apple TV</TitleAccent> Setup
      </>
    ),
    variant: "ordered" as const,
  },
  "android-mobile": {
    eyebrow: "Android mobile",
    icon: guideStandaloneIcons.androidMobile,
    title: (
      <>
        Android Phone and <TitleAccent>Tablet</TitleAccent> Setup
      </>
    ),
    variant: "content" as const,
  },
};

export function InstallationGuideAdditionalDevices() {
  return (
    <>
      {additionalDeviceSections.map((section) => {
        const config = sectionConfig[section.id as keyof typeof sectionConfig];

        return (
          <GuideStandaloneSection
            key={section.id}
            id={`guide-${section.id}-heading`}
            eyebrow={config.eyebrow}
            title={config.title}
            blocks={section.blocks}
            variant={config.variant}
            icon={config.icon}
          />
        );
      })}
    </>
  );
}
