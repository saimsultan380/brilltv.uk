"use client";

import { ParticleNetworkOrb } from "@/components/home/ParticleNetworkOrb";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/site";

export function ContactHero() {
  return (
    <PageHero
      eyebrow="Contact Support"
      headingId="contact-heading"
      titleLines={[
        <>
          Contact <span className="telvis-h1-accent">IPTV UK</span>
        </>,
        <>Support</>,
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
            Need help before or after you order? Telvis support is available 24
            hours a day by WhatsApp and email.
          </p>
          <p>
            We can help with free trials, plans, compatible devices, installation,
            login problems, EPG, selected Catch-Up, billing and eligible refund
            requests. Tell us what device and app you use so we can help faster.
          </p>
        </div>
      </HeroReveal>

      <HeroReveal delay={0.3} variant="cta">
        <div className="telvis-actions">
          <a
            href={getWhatsAppLink("I would like to message support for Brill Tv Uk.")}
            target="_blank"
            rel="noopener noreferrer"
            className="telvis-cta-primary"
          >
            <WhatsAppIcon size={18} />
            Message Support on WhatsApp
          </a>
        </div>
      </HeroReveal>
    </PageHero>
  );
}
