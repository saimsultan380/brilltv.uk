"use client";

import { CheckCircle2 } from "lucide-react";
import { ParticleNetworkOrb } from "@/components/home/ParticleNetworkOrb";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/site";

export function TrialHero() {
  return (
    <PageHero
      eyebrow="24-Hour Free Trial"
      headingId="trial-heading"
      titleLines={[
        <>
          IPTV Free Trial UK – <span className="telvis-h1-accent">Test Your Device</span>
        </>,
        <>for 24 Hours</>,
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
            Request a 24-hour IPTV free trial before choosing a subscription.
          </p>
          <p>
            Use the trial to check your device, application, internet
            connection, category navigation and general picture quality.
          </p>
          <p>
            You can also contact support for help choosing a plan, checking
            compatibility or resolving an existing account problem.
          </p>
        </div>
      </HeroReveal>

      <HeroReveal delay={0.3} variant="cta">
        <div className="telvis-actions">
          <a href="#trial-form" className="telvis-cta-primary">
            Request Your Free Trial
          </a>
          <a
            href={getWhatsAppLink("I would like to request a 24-Hour Free Trial for Brill Tv Uk.")}
            target="_blank"
            rel="noopener noreferrer"
            className="telvis-cta-secondary"
          >
            <WhatsAppIcon size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </HeroReveal>
    </PageHero>
  );
}

const checklist = [
  "Device compatibility",
  "Application installation",
  "Login and playlist loading",
  "Live television categories",
  "Sports and entertainment sections",
  "Movie and series navigation",
  "EPG information where available",
  "Selected Catch-Up",
  "HD and Full HD playback",
  "Selected 4K where supported",
  "General stability on your home connection",
  "Setup support",
] as const;

export function TrialChecklist() {
  return (
    <section className="telvis-section" aria-labelledby="trial-check-heading">
      <div className="telvis-section-inner">
        <div className="telvis-glass telvis-panel">
          <h2 id="trial-check-heading" className="telvis-panel-title">
            What Can You Test During the Trial?
          </h2>
          <ul className="telvis-check-list">
            {checklist.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="telvis-info-body">
            A free trial is a compatibility test. It does not guarantee permanent
            availability of a particular channel, programme, event or title.
          </p>
        </div>
      </div>
    </section>
  );
}
