"use client";

import Link from "next/link";
import { ParticleNetworkOrb } from "@/components/home/ParticleNetworkOrb";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { routes } from "@/lib/site";

export function ReviewsHero() {
  return (
    <PageHero
      eyebrow="Customer Reviews"
      headingId="reviews-heading"
      titleLines={[
        <>
          IPTV UK Reviews from{" "}
          <span className="telvis-h1-accent">Verified Customers</span>
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
            Read feedback from Telvis customers using real devices and home
            internet connections. Useful reviews explain setup, everyday viewing
            and support. They should not promise the same result for every
            household.
          </p>
          <p>
            With permission, reviews show the date, rating, device and
            verified-customer status. Personal details may be shortened for
            privacy, but the customer&apos;s meaning is not changed.
          </p>
        </div>
      </HeroReveal>

      <HeroReveal delay={0.3} variant="cta">
        <div className="telvis-actions">
          <Link href={routes.trial} className="telvis-cta-primary">
            Start a Free 24-Hour Trial
          </Link>
        </div>
      </HeroReveal>
    </PageHero>
  );
}
