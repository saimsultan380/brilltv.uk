"use client";

import Link from "next/link";
import { OrbitVisual } from "@/components/home/OrbitVisual";
import { HeroTitleReveal } from "@/components/ui/HeroTitleReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { routes } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="telvis-hero" aria-labelledby="telvis-hero-heading">
      <div className="telvis-container">
        <div className="telvis-content">
          <div className="telvis-copy-col">
            <ScrollReveal delay={0.05}>
              <div className="telvis-eyebrow">
                <span className="telvis-eyebrow-dot" />
                PREMIUM IPTV STREAMING
              </div>
            </ScrollReveal>

            <HeroTitleReveal
              id="telvis-hero-heading"
              className="telvis-h1"
              lines={[
                <>
                  IPTV UK Subscription from{" "}
                  <span className="telvis-h1-accent">£9.99</span>
                </>,
                <>
                  with a Free{" "}
                  <span className="telvis-h1-accent">24-Hour Trial</span>
                </>,
              ]}
            />

            <ScrollReveal delay={0.22}>
              <div className="telvis-copy">
                <p>
                  Bring live television, movies and series together with one
                  flexible IPTV UK subscription from Telvis. Browse more than
                  20,000 listed live channels and over 80,000 listed movies and
                  series on supported internet-connected devices. Plans start from
                  £9.99.
                </p>
                <p>
                  Try the service free for 24 hours before choosing a plan. Check
                  your device, internet connection and preferred content at home.
                  Every subscription includes the dedicated Telvis app, Xtream
                  Codes support for compatible players, EPG where available,
                  selected Catch-Up, VPN functionality and help from our support
                  team.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="telvis-actions">
                <Link href={routes.trial} className="telvis-cta-primary">
                  <span className="telvis-play-icon" />
                  <span>Start Your 24-Hour Trial</span>
                </Link>

                <Link href={routes.plans} className="telvis-cta-secondary">
                  View Subscription Plans
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.38}>
              <div className="telvis-trust">
                <span className="telvis-trust-pill">24-Hour Trial</span>
                <span className="telvis-trust-pill">VPN Included</span>
                <span className="telvis-trust-pill">Guided Installation</span>
                <span className="telvis-trust-pill">24/7 Support</span>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.18} y={20} className="telvis-visual-wrap">
            <OrbitVisual />
          </ScrollReveal>
        </div>
      </div>
      <span className="telvis-section-end-line" aria-hidden="true" />
    </section>
  );
}
