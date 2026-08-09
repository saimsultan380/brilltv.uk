import {
  Apple,
  Monitor,
  Smartphone,
  TabletSmartphone,
  Tv,
  TvMinimal,
} from "lucide-react";
import Link from "next/link";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const devices = [
  {
    title: "Amazon Firestick and Fire TV",
    body: "Install the dedicated app through Downloader using the verified code in the Installation Guide. Open the app and enter the details from your welcome message.",
    icon: TvMinimal,
  },
  {
    title: "Android TV and Google TV",
    body: "Use the dedicated app or a compatible player on supported Android TV, Google TV and Android box devices.",
    icon: Tv,
  },
  {
    title: "Samsung, LG and Other Smart TVs",
    body: "Install a compatible player from your television's official app store, then add the supplied Xtream Codes details. App availability varies by television model and operating system.",
    icon: Monitor,
  },
  {
    title: "iPhone, iPad and Apple TV",
    body: "Install a compatible player from the App Store and enter the supplied username, password and server address.",
    icon: Apple,
  },
  {
    title: "Android Phones and Tablets",
    body: "Use the dedicated Android app or a compatible player. A phone or tablet is also useful for checking whether your account is active.",
    icon: Smartphone,
  },
  {
    title: "Windows and Mac",
    body: "Install a reputable compatible player and add the supplied Xtream Codes details. Download software only from its official publisher or a recognised app store.",
    icon: TabletSmartphone,
  },
] as const;

export function DevicesSection() {
  return (
    <section
      id="devices"
      className="telvis-section telvis-section-devices"
      aria-labelledby="devices-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="devices-heading"
          eyebrow="Supported devices"
          title={
            <>
              Watch <TitleAccent>IPTV UK</TitleAccent> on the Devices You Already
              Use
            </>
          }
          lead="Use IPTV UK on many popular televisions, streaming devices, phones, tablets and computers. The correct app and setup method depend on your device."
        />

        <div className="telvis-device-grid">
          {devices.map((device, index) => (
            <CardReveal
              key={device.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-device-card"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={device.icon} className="is-large" />
              </CardRevealPart>
              <CardRevealPart variant="content">
                <h3 className="telvis-info-title">{device.title}</h3>
                <p className="telvis-info-body">{device.body}</p>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1} variant="cta">
          <div className="telvis-inline-actions">
          <Link href={routes.installation} className="telvis-cta-primary">
            Open the IPTV UK Installation Guide
          </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
