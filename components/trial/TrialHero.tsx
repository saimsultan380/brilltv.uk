"use client";

import { CheckCircle2 } from "lucide-react";
import { OrbitVisual } from "@/components/home/OrbitVisual";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { supportConfig } from "@/lib/site";

export function TrialHero() {
  return (
    <PageHero
      eyebrow="Free 24-Hour Trial"
      headingId="trial-heading"
      titleLines={[
        <>
          Request an <span className="telvis-h1-accent">IPTV UK</span>
        </>,
        <>Free Trial</>,
      ]}
      visual={
        <ScrollReveal delay={0.18} variant="media" className="telvis-visual-wrap">
          <OrbitVisual />
        </ScrollReveal>
      }
    >
      <HeroReveal delay={0.22}>
        <div className="telvis-copy">
          <p>
            Test Telvis on the device and home internet connection you normally
            use before choosing a paid plan. The trial lasts 24 hours.
          </p>
          <p>
            Message support with your device type, country and preferred app.
            We will send trial access and setup guidance.
          </p>
        </div>
      </HeroReveal>

      <HeroReveal delay={0.3} variant="cta">
        <div className="telvis-actions">
          <a
            href={supportConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="telvis-cta-primary"
          >
            Request Trial on WhatsApp
          </a>
        </div>
      </HeroReveal>
    </PageHero>
  );
}

const checklist = [
  "The app installs and your login works",
  "Live, movie and series categories load correctly",
  "The channels and categories important to you are listed",
  "Picture and sound work well on your home connection",
  "Navigation, EPG and selected Catch-Up meet your needs",
  "Performance is suitable at the time you normally watch",
  "The plan includes enough screens for your household",
] as const;

export function TrialChecklist() {
  return (
    <section className="telvis-section" aria-labelledby="trial-check-heading">
      <div className="telvis-section-inner">
        <div className="telvis-glass telvis-panel">
          <h2 id="trial-check-heading" className="telvis-panel-title">
            During the IPTV UK trial, check:
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
            If something does not work, contact support during the trial. We can
            check your login, app, device and connection before you choose a
            paid plan.
          </p>
        </div>
      </div>
    </section>
  );
}
