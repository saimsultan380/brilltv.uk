"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { ParticleNetworkOrb } from "@/components/home/ParticleNetworkOrb";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes, supportConfig } from "@/lib/site";

const whatWeProvide = [
  "20,000+ listed live channels",
  "80,000+ listed movies and series",
  "UK and international categories",
  "Live sports categories",
  "EPG where available",
  "Selected Catch-Up",
  "HD and Full HD options",
  "Selected 4K streams",
  "VPN access",
  "Dedicated application access",
  "Xtream Codes",
  "Installation guidance",
  "Email and WhatsApp support",
] as const;

const freeTrialTest = [
  "Device compatibility",
  "Application installation",
  "Content navigation",
  "General picture quality",
  "EPG availability",
  "Selected Catch-Up",
  "Performance on their connection",
  "Customer support",
] as const;

const popularDevices = [
  "Amazon Fire TV and Firestick",
  "Android TV and Google TV",
  "Samsung and LG Smart TVs",
  "Sony, TCL and Hisense televisions",
  "Apple TV",
  "iPhone and iPad",
  "Android phones and tablets",
  "Windows and Mac",
  "Formuler devices",
  "Selected portal boxes",
  "Kodi",
] as const;

const promises = [
  "Clear subscription prices",
  "Accurate plan information",
  "Appropriate account access",
  "Installation guidance",
  "Reasonable customer support",
  "A trial before payment",
  "A published refund procedure",
] as const;

const nonPromises = [
  "Permanent availability of every listing",
  "Universal 4K quality",
  "Zero buffering on every internet connection",
  "Continued availability of every third-party application",
  "Identical performance on every device or network",
] as const;

const supportQuestions = [
  "Is my device compatible?",
  "Which application should I install?",
  "Where do I enter my details?",
  "Why is my playlist not loading?",
  "How do I refresh the EPG?",
  "Which plan is suitable?",
  "How do I request a trial?",
  "How do I request a refund review?",
] as const;

export function AboutContent() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        headingId="about-heading"
        titleLines={[
          <>
            About IPTV UK – <span className="telvis-h1-accent">Clear Plans, Simple Setup</span>
          </>,
          <>and Helpful Support</>,
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
              IPTV UK was created for customers who want to understand what they are ordering before they pay.
            </p>
            <p>
              Our approach is straightforward: display clear subscription prices, explain device compatibility, provide a 24-hour trial and help customers complete installation without unnecessary technical language.
            </p>
          </div>
        </HeroReveal>

        <HeroReveal delay={0.3} variant="cta">
          <div className="telvis-actions">
            <Link href={routes.trial} className="telvis-cta-primary">
              Start Your Free Trial
            </Link>
            <Link href={routes.plans} className="telvis-cta-secondary">
              Compare IPTV Subscription Plans
            </Link>
          </div>
        </HeroReveal>
      </PageHero>

      <section className="telvis-section" aria-labelledby="what-we-provide-heading">
        <div className="telvis-section-inner">
          <SectionHeader
            id="what-we-provide-heading"
            eyebrow="Features"
            title={
              <>
                What We <TitleAccent>Provide</TitleAccent>
              </>
            }
          />

          <CardReveal className="telvis-glass telvis-panel">
            <ul className="telvis-check-list">
              {whatWeProvide.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardReveal>
        </div>
      </section>

      <section className="telvis-section" aria-labelledby="prices-heading">
        <div className="telvis-section-inner">
          <SectionHeader
            id="prices-heading"
            eyebrow="Pricing"
            title={
              <>
                Straightforward <TitleAccent>Subscription Prices</TitleAccent>
              </>
            }
            lead="Our standard plans are: 1 month for £9.99, 3 months for £24.99, 6 months for £39.99, and 12 months for £49.99."
          />

          <CardReveal className="telvis-glass telvis-panel">
            <CardRevealPart as="p" className="telvis-info-body">
              The core features remain consistent between durations. Longer plans reduce the equivalent monthly cost. Subscriptions do not renew automatically.
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>

      <section className="telvis-section" aria-labelledby="why-trial-heading">
        <div className="telvis-section-inner">
          <div className="telvis-split">
            <div className="telvis-split-copy">
              <SectionHeader
                id="why-trial-heading"
                eyebrow="Testing"
                title={
                  <>
                    Why We Offer a <TitleAccent>Free Trial</TitleAccent>
                  </>
                }
                lead="A list of features cannot show exactly how a service will perform on every device and home network."
              />
            </div>

            <CardReveal delay={0.1} className="telvis-glass telvis-panel">
              <CardRevealPart variant="content" as="h3" className="telvis-panel-title">
                The 24-hour free trial allows customers to test:
              </CardRevealPart>
              <ul className="telvis-check-list">
                {freeTrialTest.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                This allows customers to make a decision based on their own setup rather than marketing claims alone.
              </CardRevealPart>
            </CardReveal>
          </div>
        </div>
      </section>

      <section className="telvis-section" aria-labelledby="devices-about-heading">
        <div className="telvis-section-inner">
          <SectionHeader
            id="devices-about-heading"
            eyebrow="Compatibility"
            title={
              <>
                Support for <TitleAccent>Popular Devices</TitleAccent>
              </>
            }
          />

          <CardReveal className="telvis-glass telvis-panel">
            <ul className="telvis-check-list">
              {popularDevices.map((device) => (
                <li key={device}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{device}</span>
                </li>
              ))}
            </ul>
            <CardRevealPart as="p" className="telvis-info-body">
              Compatibility depends on the device model, operating system and application.
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>

      <section className="telvis-section" aria-labelledby="promises-heading">
        <div className="telvis-section-inner">
          <SectionHeader
            id="promises-heading"
            eyebrow="Honesty &amp; Transparency"
            title={
              <>
                What We Promise — <TitleAccent>and What We Do Not</TitleAccent>
              </>
            }
          />

          <div className="telvis-split">
            <CardReveal className="telvis-glass telvis-panel">
              <CardRevealPart as="h3" className="telvis-panel-title">
                We aim to provide:
              </CardRevealPart>
              <ul className="telvis-check-list">
                {promises.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardReveal>

            <CardReveal className="telvis-glass telvis-panel" delay={0.08}>
              <CardRevealPart as="h3" className="telvis-panel-title">
                We do not promise:
              </CardRevealPart>
              <ul className="telvis-check-list">
                {nonPromises.map((item) => (
                  <li key={item}>
                    <XCircle size={18} strokeWidth={2} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardReveal>
          </div>

          <CardReveal className="telvis-glass telvis-panel" delay={0.1}>
            <CardRevealPart as="p" className="telvis-info-body">
              Clear limitations help customers make an informed decision.
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>

      <section className="telvis-section" aria-labelledby="support-about-heading">
        <div className="telvis-section-inner">
          <SectionHeader
            id="support-about-heading"
            eyebrow="Helpdesk"
            title={
              <>
                Our <TitleAccent>Customer-Support Approach</TitleAccent>
              </>
            }
            lead="Support focuses on practical questions:"
          />

          <CardReveal className="telvis-glass telvis-panel">
            <ul className="telvis-check-list">
              {supportQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <CardRevealPart as="p" className="telvis-info-body">
              Support is monitored through email ({supportConfig.email}) and WhatsApp 24/7, although exact response times depend on demand.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.08}>
            <CardRevealPart as="h3" className="telvis-panel-title">
              Responsible and Personal Use
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              The service is intended for personal use. Customers are responsible for complying with applicable laws, content rights and the terms of any device or third-party application they use. Login details must not be resold, publicly shared or used beyond the permitted connection allowance.
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>

      <section className="telvis-section telvis-final-cta">
        <div className="telvis-section-inner">
          <CardReveal className="telvis-glass telvis-final-panel">
            <CardRevealPart>
              <SectionHeader
                id="about-cta-heading"
                eyebrow="Get Started"
                title={
                  <>
                    Start with a <TitleAccent>24-Hour Free Trial</TitleAccent>
                  </>
                }
                lead="If you are uncertain about compatibility, test your device and normal internet connection before selecting a paid subscription."
                align="center"
                animate={false}
              />
            </CardRevealPart>
            <CardRevealPart>
              <div className="telvis-actions telvis-final-actions">
                <Link href={routes.trial} className="telvis-cta-primary">
                  Start Your Free Trial
                </Link>
                <Link href={routes.plans} className="telvis-cta-secondary">
                  Compare IPTV Subscription Plans
                </Link>
              </div>
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>
    </>
  );
}
