import { ChevronDown } from "lucide-react";
import { GuideContent } from "@/components/installation/GuideContent";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { troubleshootingTopics } from "@/lib/installation-guide-data";

export function InstallationGuideTroubleshooting() {
  return (
    <section
      className="telvis-section telvis-guide-troubleshooting"
      aria-labelledby="guide-troubleshooting-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="guide-troubleshooting-heading"
          eyebrow="Troubleshooting"
          title={
            <>
              <TitleAccent>IPTV UK</TitleAccent> Troubleshooting Checklist
            </>
          }
          lead="Work through the relevant topic below before contacting support. Include the details listed in the final item if you still need help."
        />

        <div className="telvis-guide-troubleshooting-list">
          {troubleshootingTopics.map((topic, index) => (
            <CardReveal
              key={topic.id}
              as="details"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-guide-troubleshooting-item"
            >
              <CardRevealPart as="summary">
                <span>{topic.title}</span>
                <ChevronDown
                  className="telvis-guide-troubleshooting-chevron"
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </CardRevealPart>
              <CardRevealPart className="telvis-guide-troubleshooting-body">
                <GuideContent blocks={topic.blocks} />
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
