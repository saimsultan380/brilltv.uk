"use client";

import { CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { ParticleNetworkOrb } from "@/components/home/ParticleNetworkOrb";
import { PlansSection } from "@/components/home/PlansSection";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { routes } from "@/lib/site";

const trialTestItems = [
  "Device compatibility",
  "Application installation",
  "Account login",
  "Category organisation",
  "General picture quality",
  "EPG information",
  "Selected Catch-Up",
  "Movie and series navigation",
  "Performance on your internet connection",
  "Setup support",
] as const;

const orderSteps = [
  "Choose your preferred duration.",
  "Confirm your device and connection requirements.",
  "Complete the requested order information.",
  "Request immediate account activation.",
  "Receive your login details and Installation Guide.",
  "Install the recommended application.",
  "Contact support if you need assistance.",
] as const;

const planChoiceAdvice = [
  {
    title: "Choose one month",
    text: "if flexibility matters most.",
  },
  {
    title: "Choose three months",
    text: "for a balanced duration and cost.",
  },
  {
    title: "Choose six or twelve months",
    text: "after completing the trial and confirming your normal device, connection and preferred categories.",
  },
] as const;

const subscriptionFaqs = [
  {
    question: "Do longer plans include additional features?",
    answer:
      "No. The core service features remain the same. The main difference is duration and price.",
  },
  {
    question: "Can I install it on several devices?",
    answer:
      "You can install compatible applications on several devices, but simultaneous viewing depends on the connection allowance included with your order.",
  },
  {
    question: "Does the service renew automatically?",
    answer:
      "No. You must actively purchase another subscription.",
  },
  {
    question: "Is every listing available in 4K?",
    answer:
      "No. HD, Full HD and selected 4K are available where supplied.",
  },
  {
    question: "Can I request a refund?",
    answer:
      "Eligible requests submitted within seven days are reviewed under the Refund Policy. Statutory consumer rights remain unaffected.",
  },
] as const;

export function PlansPageContent() {
  return (
    <>
      <PageHero
        eyebrow="IPTV Subscription"
        headingId="plans-page-heading"
        titleLines={[
          <>
            IPTV Subscription Plans – <span className="telvis-h1-accent">Clear Options</span>
          </>,
          <>from £9.99</>,
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
              Choose an IPTV subscription based on duration, price and your household setup. Every plan provides access to the listed live channels, movies, series and support.
            </p>
            <p>
              Start with a free 24-hour trial if you want to test your device, app and internet connection before paying.
            </p>
          </div>
        </HeroReveal>

        <HeroReveal delay={0.3} variant="cta">
          <div className="telvis-actions">
            <Link href={routes.trial} className="telvis-cta-primary">
              Start Your Free Trial
            </Link>
            <a href="#plan-cards" className="telvis-cta-secondary">
              Choose Your Plan
            </a>
          </div>
        </HeroReveal>
      </PageHero>

      <div id="plan-cards">
        <PlansSection />
      </div>

      <section className="telvis-section" aria-labelledby="trial-test-heading">
        <div className="telvis-section-inner">
          <div className="telvis-split">
            <div className="telvis-split-copy">
              <SectionHeader
                id="trial-test-heading"
                eyebrow="Free Test"
                title={
                  <>
                    Try Before Choosing a <TitleAccent>Paid Subscription</TitleAccent>
                  </>
                }
                lead="The 24-hour free trial is intended for compatibility testing and does not guarantee permanent availability of a particular listing."
              />
            </div>

            <CardReveal delay={0.1} className="telvis-glass telvis-panel">
              <CardRevealPart variant="content" as="h3" className="telvis-panel-title">
                The 24-hour free trial allows you to test:
              </CardRevealPart>
              <ul className="telvis-check-list">
                {trialTestItems.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardReveal>
          </div>
        </div>
      </section>

      <section className="telvis-section" aria-labelledby="how-to-order-heading">
        <div className="telvis-section-inner">
          <SectionHeader
            id="how-to-order-heading"
            eyebrow="Ordering Guide"
            title={
              <>
                How to <TitleAccent>Order</TitleAccent>
              </>
            }
            lead="Follow these simple steps to activate your subscription."
          />

          <ol className="telvis-steps">
            {orderSteps.map((step, index) => (
              <CardReveal
                key={step}
                as="li"
                delay={staggerDelay(index)}
                className="telvis-glass telvis-step-card"
              >
                <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                  Step {index + 1}
                </CardRevealPart>
                <CardRevealPart variant="content" as="p" className="telvis-info-body">
                  {step}
                </CardRevealPart>
              </CardReveal>
            ))}
          </ol>

          <CardReveal className="telvis-glass telvis-panel" delay={0.1}>
            <CardRevealPart as="h3" className="telvis-panel-title">
              No Automatic Renewal
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Plans do not renew automatically. When your account reaches its expiry date, you decide whether you want to purchase another duration.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Your subscription period begins when the account is activated unless your confirmation states otherwise.
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>

      <section className="telvis-section" aria-labelledby="which-plan-heading">
        <div className="telvis-section-inner">
          <SectionHeader
            id="which-plan-heading"
            eyebrow="Guidance"
            title={
              <>
                Which Plan Should You <TitleAccent>Choose</TitleAccent>?
              </>
            }
          />

          <div className="telvis-feature-grid">
            {planChoiceAdvice.map((item, index) => (
              <CardReveal
                key={item.title}
                as="article"
                delay={staggerDelay(index)}
                className="telvis-glass telvis-feature-tile"
              >
                <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                  {item.title}
                </CardRevealPart>
                <CardRevealPart variant="content" as="p" className="telvis-info-body">
                  {item.text}
                </CardRevealPart>
              </CardReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="telvis-section telvis-section-faq" aria-labelledby="sub-faq-heading">
        <div className="telvis-section-inner telvis-faq-layout">
          <div className="telvis-faq-intro">
            <SectionHeader
              id="sub-faq-heading"
              eyebrow="Subscription FAQ"
              title={
                <>
                  IPTV Subscription <TitleAccent>Questions</TitleAccent>
                </>
              }
            />
          </div>

          <div className="telvis-faq-list">
            {subscriptionFaqs.map((faq, index) => (
              <CardReveal
                key={faq.question}
                as="details"
                delay={staggerDelay(index, 0.05)}
                className="telvis-glass telvis-faq-item"
              >
                <CardRevealPart as="summary" variant="content">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className="telvis-faq-chevron"
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </CardRevealPart>
                <CardRevealPart as="p" variant="content">
                  {faq.answer}
                </CardRevealPart>
              </CardReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="telvis-section telvis-final-cta">
        <div className="telvis-section-inner">
          <CardReveal className="telvis-glass telvis-final-panel">
            <CardRevealPart>
              <SectionHeader
                id="plans-cta-heading"
                eyebrow="Get Started"
                title={
                  <>
                    Ready to Start Your <TitleAccent>IPTV Subscription</TitleAccent>?
                  </>
                }
                lead="Test your setup with our 24-hour trial or select a subscription plan."
                align="center"
                animate={false}
              />
            </CardRevealPart>
            <CardRevealPart>
              <div className="telvis-actions telvis-final-actions">
                <Link href={routes.trial} className="telvis-cta-primary">
                  Start Your Free Trial
                </Link>
                <a href="#plan-cards" className="telvis-cta-secondary">
                  Choose Your Plan
                </a>
              </div>
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>
    </>
  );
}
