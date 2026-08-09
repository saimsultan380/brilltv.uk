import { ChevronDown } from "lucide-react";
import { GuideContent } from "@/components/installation/GuideContent";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
          title="IPTV UK Troubleshooting Checklist"
          lead="Work through the relevant topic below before contacting support. Include the details listed in the final item if you still need help."
        />

        <div className="telvis-guide-troubleshooting-list">
          {troubleshootingTopics.map((topic) => (
            <details
              key={topic.id}
              className="telvis-glass telvis-guide-troubleshooting-item"
            >
              <summary>
                <span>{topic.title}</span>
                <ChevronDown
                  className="telvis-guide-troubleshooting-chevron"
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </summary>
              <div className="telvis-guide-troubleshooting-body">
                <GuideContent blocks={topic.blocks} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
