"use client";

import { OrbitVisual } from "@/components/home/OrbitVisual";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { supportConfig } from "@/lib/site";

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
        <ScrollReveal delay={0.18} y={20} className="telvis-visual-wrap">
          <OrbitVisual />
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

      <HeroReveal delay={0.3}>
        <div className="telvis-actions">
          <a
            href={supportConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="telvis-cta-primary"
          >
            Message Support on WhatsApp
          </a>
        </div>
      </HeroReveal>
    </PageHero>
  );
}
