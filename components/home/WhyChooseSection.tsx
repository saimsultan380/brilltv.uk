import {
  BadgePoundSterling,
  FlaskConical,
  Headphones,
  ScrollText,
  Waypoints,
} from "lucide-react";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const reasons = [
  {
    title: "Clear Pricing from £9.99",
    body: "See the full price and duration before ordering. Choose one month for flexibility or a longer plan for better monthly value.",
    icon: BadgePoundSterling,
  },
  {
    title: "Test Before a Longer Purchase",
    body: "Use the free trial on your own device and home connection before choosing a paid plan.",
    icon: FlaskConical,
  },
  {
    title: "Two Practical Access Methods",
    body: "Use the dedicated app where supported or a compatible Xtream Codes player. This gives IPTV UK customers a clear setup option across different devices.",
    icon: Waypoints,
  },
  {
    title: "Support Beyond the Sale",
    body: "Get help with installation, login details, EPG, loading and account questions throughout your active subscription.",
    icon: Headphones,
  },
  {
    title: "A Published Refund Process",
    body: "Eligible purchases have a seven-day refund guarantee under the published Refund Policy. Read the conditions before ordering.",
    icon: ScrollText,
  },
] as const;

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="telvis-section telvis-section-why"
      aria-labelledby="why-choose-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="why-choose-heading"
          eyebrow="Why Choose"
          title={
            <>
              Why Choose <TitleAccent>IPTV UK</TitleAccent>?
            </>
          }
          align="center"
        />

        <div className="telvis-why-grid">
          {reasons.map((reason, index) => (
            <CardReveal
              key={reason.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-why-card"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={reason.icon} className="is-large" />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {reason.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {reason.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
