import { CheckCircle2 } from "lucide-react";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const checks = [
  "How many screens will play at the same time",
  "Which device you will use most often",
  "Whether each device supports the required app",
  "Whether a third-party app charges separately",
] as const;

export function ConnectionsSection() {
  return (
    <section
      id="connections"
      className="telvis-section telvis-section-connections"
      aria-labelledby="connections-heading"
    >
      <div className="telvis-section-inner">
        <div className="telvis-split">
          <div className="telvis-split-copy">
            <SectionHeader
              id="connections-heading"
              eyebrow="Connections"
              title={
                <>
                  Understand Devices and{" "}
                  <TitleAccent>Connections</TitleAccent> Before Ordering
                </>
              }
              lead="Installing the service on several devices does not always mean every screen can play at the same time. Your plan includes a stated number of active connections."
            />
          </div>

          <CardReveal delay={0.1} className="telvis-glass telvis-panel">
            <CardRevealPart variant="content" as="h3" className="telvis-panel-title">
              Before ordering IPTV UK for your household, check:
            </CardRevealPart>
            <CardRevealList className="telvis-check-list">
              {checks.map((item) => (
                <CardRevealListItem key={item}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </CardRevealListItem>
              ))}
            </CardRevealList>
            <CardRevealPart variant="content" as="p" className="telvis-info-body">
              Check the screen allowance at checkout or ask support before
              payment. Using more active screens than your plan allows can stop
              playback.
            </CardRevealPart>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}
