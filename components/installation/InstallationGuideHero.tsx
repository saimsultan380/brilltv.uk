"use client";

import Link from "next/link";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { ParticleNetworkOrb } from "@/components/home/ParticleNetworkOrb";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink, routes, supportConfig } from "@/lib/site";

export function InstallationGuideHero() {
  return (
    <PageHero
      eyebrow="Installation Guide"
      headingId="installation-guide-heading"
      titleLines={[
        <>IPTV UK Installation Guide for</>,
        <>
          <span className="telvis-h1-accent">Supported Devices</span>
        </>,
      ]}
      visual={
        <ScrollReveal delay={0.18} variant="media" className="telvis-visual-wrap">
          <ParticleNetworkOrb />
        </ScrollReveal>
      }
    >
      <HeroReveal delay={0.22}>
        <div className="telvis-copy">
          <p>
            Set up IPTV UK with the dedicated app or a compatible Xtream Codes
            player. Choose your device below, keep your welcome message nearby and
            enter every detail exactly as supplied.
          </p>
          <p>
            Most setup problems come from the wrong app, a typing mistake, an
            incomplete server address or a blocked installation setting. Follow one
            method at a time so you can see where the problem starts.
          </p>
          <p>
            Need help now? Contact 24/7 support by{" "}
            <a
              href={getWhatsAppLink("I need help installing Brill Tv Uk on my device.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#cc1f3c] hover:underline"
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>{" "}
            or email{" "}
            <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>.
          </p>
        </div>
      </HeroReveal>

      <HeroReveal delay={0.3} variant="cta">
        <div className="telvis-actions">
          <Link href={routes.contact} className="telvis-cta-primary">
            Get Installation Help
          </Link>
        </div>
      </HeroReveal>
    </PageHero>
  );
}
