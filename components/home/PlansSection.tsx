import {
  CalendarDays,
  Check,
  Clapperboard,
  Headphones,
  MonitorPlay,
  Shield,
  Sparkles,
  Tv,
} from "lucide-react";
import Link from "next/link";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const sharedFeatures = [
  { text: "20,000+ listed live channels", icon: Tv },
  { text: "80,000+ listed movies and series", icon: Clapperboard },
  { text: "Dedicated app and Xtream Codes support", icon: MonitorPlay },
  { text: "EPG where available", icon: CalendarDays },
  { text: "Selected Catch-Up", icon: Sparkles },
  { text: "VPN included", icon: Shield },
  { text: "24/7 customer support", icon: Headphones },
] as const;

const plans = [
  {
    id: "1-month",
    title: "1-Month Plan",
    price: "£9.99",
    perMonth: "£9.99 / mo",
    summary: "A simple starting option with the shortest paid commitment.",
    cta: "Choose 1 Month",
    href: "/checkout?plan=1-month",
    featured: false,
  },
  {
    id: "3-month",
    title: "3-Month Plan",
    price: "£24.99",
    perMonth: "~£8.33 / mo",
    summary: "A three-month option costing approximately £8.33 per month.",
    cta: "Choose 3 Months",
    href: "/checkout?plan=3-month",
    featured: false,
  },
  {
    id: "6-month",
    title: "6-Month Plan",
    price: "£39.99",
    perMonth: "~£6.67 / mo",
    summary:
      "A practical choice after completing the trial. The average cost is approximately £6.67 per month.",
    cta: "Choose 6 Months",
    href: "/checkout?plan=6-month",
    featured: true,
  },
  {
    id: "12-month",
    title: "12-Month Plan",
    price: "£49.99",
    perMonth: "~£4.17 / mo",
    summary:
      "The lowest average monthly cost at approximately £4.17. Choose this after testing the service and confirming your setup.",
    cta: "Choose 12 Months",
    href: "/checkout?plan=12-month",
    featured: false,
  },
] as const;

export function PlansSection() {
  return (
    <section
      id="plans"
      className="telvis-section telvis-section-plans"
      aria-labelledby="plans-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="plans-heading"
          eyebrow="IPTV UK Plans"
          title={
            <>
              Choose an <TitleAccent>IPTV UK</TitleAccent> Plan That Fits Your
              Viewing
            </>
          }
          lead="Choose the subscription length that suits you. Start with one month for flexibility or select a longer plan for a lower average monthly cost. Every IPTV UK plan includes the same catalogue, access options and support."
        />

        <div className="telvis-plan-grid">
          {plans.map((plan, index) => (
            <CardReveal
              key={plan.id}
              as="article"
              delay={staggerDelay(index)}
              className={`telvis-glass telvis-plan-card${plan.featured ? " is-featured" : ""}`}
            >
              <CardRevealPart variant="icon">
                <div className="telvis-plan-top">
                  <GlassIcon icon={CalendarDays} />
                  <p className="telvis-plan-duration">{plan.title}</p>
                </div>
              </CardRevealPart>
              <CardRevealPart variant="content">
                <h3 className="telvis-plan-title">
                  <span className="telvis-plan-price">{plan.price}</span>
                </h3>
                <p className="telvis-plan-meta">{plan.perMonth}</p>
                <p className="telvis-plan-summary">{plan.summary}</p>
              </CardRevealPart>
              <CardRevealList className="telvis-feature-list">
                {sharedFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <CardRevealListItem key={feature.text}>
                      <Icon size={16} strokeWidth={2} aria-hidden="true" />
                      <span>{feature.text}</span>
                    </CardRevealListItem>
                  );
                })}
              </CardRevealList>
              <CardRevealPart variant="content">
                <Link
                  href={plan.href}
                  className={
                    plan.featured
                      ? "telvis-cta-primary telvis-plan-cta"
                      : "telvis-cta-glass telvis-plan-cta"
                  }
                >
                  <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                  {plan.cta}
                </Link>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="telvis-section-note">
          Catalogue totals describe listed entries and can change as sources are
          added, updated or removed. Availability, Catch-Up, EPG and picture
          quality vary by channel, programme, device, player and location.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="telvis-inline-actions">
          <Link href={routes.trial} className="telvis-cta-secondary">
            Start Your 24-Hour Trial
          </Link>
          <Link href={routes.plans} className="telvis-text-link">
            Compare IPTV UK Plans
          </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
