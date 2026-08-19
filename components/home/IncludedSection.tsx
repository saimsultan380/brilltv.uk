import {
  Clapperboard,
  Headphones,
  ListVideo,
  MonitorSmartphone,
  Shield,
  Tv,
} from "lucide-react";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const features = [
  {
    title: "20,000+ Listed Live Channels",
    body: "Browse available entertainment, news, sports, documentary, family and international categories. Individual listings can change as the catalogue is updated.",
    icon: Tv,
  },
  {
    title: "80,000+ Movies and Series",
    body: "Search the on-demand library for movies, complete series, seasons and individual episodes. New titles may be added, while outdated or unavailable titles may be removed.",
    icon: Clapperboard,
  },
  {
    title: "EPG and Selected Catch-Up",
    body: "The EPG shows what is playing now and what is scheduled next where guide information is available. Catch-Up works only on selected listings and is not included with every channel.",
    icon: ListVideo,
  },
  {
    title: "VPN Included",
    body: "VPN functionality is included on supported setups. If you already use another VPN, test with and without it. Running two routing or VPN tools at the same time can sometimes cause login or playback problems. A VPN does not guarantee anonymity or permission to access content restricted by law or another provider's terms.",
    icon: Shield,
  },
  {
    title: "Dedicated App and Flexible Player Support",
    body: "Use the dedicated application on supported Android-based devices. On many other devices, enter the supplied Xtream Codes details into a compatible player. Some third-party applications charge their own activation or licence fee. That charge is separate unless checkout clearly says it is included.",
    icon: MonitorSmartphone,
  },
  {
    title: "Customer Support",
    body: "Contact support by email or WhatsApp for trial requests, plan questions, device compatibility, installation, login problems, playlist loading, EPG refreshes and account and expiry questions. Support is monitored 24 hours a day, although exact response times can vary.",
    icon: Headphones,
  },
] as const;

export function IncludedSection() {
  return (
    <section
      id="included"
      className="telvis-section telvis-section-included"
      aria-labelledby="included-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="included-heading"
          eyebrow="Included"
          title={
            <>
              What Is <TitleAccent>Included</TitleAccent> with Your IPTV UK
              Subscription?
            </>
          }
          lead="Know what is included before you pay. Every active plan provides the same core features, although individual listings and application functions can vary."
          align="center"
        />

        <div className="telvis-feature-grid">
          {features.map((feature, index) => (
            <CardReveal
              key={feature.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={feature.icon} />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {feature.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {feature.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
