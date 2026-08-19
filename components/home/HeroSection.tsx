"use client";

import Link from "next/link";
import { ParticleNetworkOrb } from "@/components/home/ParticleNetworkOrb";
import { HeroTitleReveal } from "@/components/ui/HeroTitleReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { routes } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="telvis-hero" aria-labelledby="telvis-hero-heading">
      <div className="telvis-container">
        <div className="telvis-content">
          <div className="telvis-copy-col">
            <ScrollReveal delay={0.05} variant="text">
              <div className="telvis-eyebrow">
                <span className="telvis-eyebrow-dot" />
                PREMIUM IPTV STREAMING · UK
              </div>
            </ScrollReveal>

            <HeroTitleReveal
              id="telvis-hero-heading"
              className="telvis-h1"
              lines={[
                <>
                  IPTV UK – <span className="telvis-h1-accent">20,000+</span>
                </>,
                <>
                  <span className="telvis-h1-accent">Live Channels</span>,
                  Sports,
                </>,
                <>Movies &amp; Series</>,
              ]}
            />

            <ScrollReveal delay={0.22} variant="text">
              <div className="telvis-copy">
                <p>
                  Choose an IPTV UK subscription that lets you check
                  compatibility before committing to a longer plan. Browse more
                  than 20,000 listed live channels and over 80,000 listed movies
                  and series on supported internet-connected devices, with paid
                  plans starting from £9.99.
                </p>
                <p>
                  Start with a free 24-hour trial on the device and broadband
                  connection you actually use. If you decide to continue, choose
                  one, three, six or twelve months and receive the access
                  details, installation instructions and support needed to get
                  set up.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} variant="cta">
              <div className="telvis-actions">
                <Link href={routes.trial} className="telvis-cta-primary">
                  <span className="telvis-play-icon" />
                  <span>Start Your Free 24-Hour Trial</span>
                </Link>

                <Link href={routes.plans} className="telvis-cta-secondary">
                  View Plans from £9.99
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.38} variant="text">
              <p className="telvis-hero-trust-line">
                Free 24-Hour Trial
                <span className="telvis-hero-trust-sep" aria-hidden="true">
                  ·
                </span>
                VPN Included
                <span className="telvis-hero-trust-sep" aria-hidden="true">
                  ·
                </span>
                EPG and Selected Catch-Up
                <span className="telvis-hero-trust-sep" aria-hidden="true">
                  ·
                </span>
                Support Monitored 24/7
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.18} variant="media" className="telvis-visual-wrap">
            <ParticleNetworkOrb />
          </ScrollReveal>
        </div>
      </div>
      <span className="telvis-section-end-line" aria-hidden="true" />
    </section>
  );
}
