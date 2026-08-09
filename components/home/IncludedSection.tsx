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
    body: "Browse entertainment, news, sport, documentaries, family viewing and international categories. Individual listings can change as the catalogue is updated.",
    icon: Tv,
  },
  {
    title: "80,000+ Movies and Series",
    body: "Search the on-demand library for movies, complete series, seasons and episodes. New titles may be added and unavailable titles may be removed.",
    icon: Clapperboard,
  },
  {
    title: "EPG and Selected Catch-Up",
    body: "The EPG shows what is playing now and what comes next where guide data is available. Catch-Up works only on selected listings and is not included on every channel.",
    icon: ListVideo,
  },
  {
    title: "VPN Included",
    body: "VPN functionality is included on supported setups. If you already use another VPN, test with and without it because running two routing tools can sometimes cause problems.",
    icon: Shield,
  },
  {
    title: "Dedicated App and Flexible Player Support",
    body: "Use the dedicated IPTV UK app on supported Android-based devices. On many other devices, enter the supplied Xtream Codes details into a compatible player. Some third-party players charge their own app fee, which is separate unless checkout clearly says it is included.",
    icon: MonitorSmartphone,
  },
  {
    title: "24/7 Support",
    body: "Contact support by email or WhatsApp for trials, plans, installation, login problems, EPG refreshes and account questions. Help is available 24 hours a day, although response times can vary.",
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
              What Is <TitleAccent>Included</TitleAccent> with Your Subscription?
            </>
          }
          lead="Know what is included before you pay. Every active IPTV UK plan provides the same seven core features, although some listings and player functions can vary."
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
