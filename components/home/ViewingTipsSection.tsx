import {
  HardDrive,
  RefreshCw,
  Router,
  Signal,
  Wifi,
  WifiOff,
} from "lucide-react";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const tips = [
  { text: "Use Ethernet where practical", icon: Router },
  { text: "Keep Wi-Fi devices close to the router", icon: Wifi },
  { text: "Pause large downloads and game updates", icon: WifiOff },
  { text: "Close unused apps on older devices", icon: HardDrive },
  { text: "Keep enough free storage for updates", icon: HardDrive },
  { text: "Restart the app, device and router if viewing changes", icon: RefreshCw },
  {
    text: "Try another listing to see whether the issue affects one source or the whole account",
    icon: Signal,
  },
  {
    text: "Choose a lower-quality option if your connection cannot handle a higher-quality source",
    icon: Signal,
  },
] as const;

export function ViewingTipsSection() {
  return (
    <section
      id="viewing-tips"
      className="telvis-section telvis-section-tips"
      aria-labelledby="viewing-tips-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="viewing-tips-heading"
          eyebrow="Reliable viewing"
          title={
            <>
              A Better <TitleAccent>Viewing Experience</TitleAccent> Starts with
              the Right Setup
            </>
          }
          lead="Smooth viewing depends on your internet connection, Wi-Fi, router, device, app and the individual listing you choose."
        />

        <CardReveal className="telvis-glass telvis-tips-shell">
          <CardRevealPart variant="content" as="h3" className="telvis-panel-title">
            For more reliable IPTV UK viewing:
          </CardRevealPart>
          <div className="telvis-tips-grid">
            {tips.map((tip, index) => (
              <CardReveal
                key={tip.text}
                as="div"
                delay={index * 0.04}
                className="telvis-tip-item"
              >
                <CardRevealPart variant="icon">
                  <GlassIcon icon={tip.icon} />
                </CardRevealPart>
                <CardRevealPart variant="content" as="p">
                  {tip.text}
                </CardRevealPart>
              </CardReveal>
            ))}
          </div>
          <CardRevealPart
            variant="content"
            as="p"
            className="telvis-info-body telvis-tips-note"
          >
            No service can promise perfect playback on every channel, device and
            home network. The useful difference is clear troubleshooting and
            support that helps find the cause.
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
