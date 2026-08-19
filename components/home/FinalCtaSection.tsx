import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

export function FinalCtaSection() {
  return (
    <section
      id="get-started"
      className="telvis-section telvis-final-cta"
      aria-labelledby="final-cta-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <SectionHeader
              id="final-cta-heading"
              eyebrow="Get Started"
              title={
                <>
                  Test Your Device Before Choosing a{" "}
                  <TitleAccent>Subscription</TitleAccent>
                </>
              }
              lead="Start with the 24-hour trial, check the categories that matter to you and confirm that your preferred device and internet connection are suitable."
              align="center"
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <Link href={routes.trial} className="telvis-cta-primary">
                <Play size={16} fill="currentColor" aria-hidden="true" />
                <span>Start Your Free 24-Hour Trial</span>
              </Link>
              <Link href={routes.plans} className="telvis-cta-secondary">
                Compare IPTV UK Plans
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </CardRevealPart>

          <CardRevealPart as="p" className="telvis-section-note is-center">
            Catalogue totals describe listed entries and can change as sources
            are added, updated or removed. Availability, Catch-Up, EPG
            information and picture quality vary by channel, programme, device,
            player and location. Third-party player fees are separate unless
            expressly stated. Refunds are subject to the published Refund Policy.
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
