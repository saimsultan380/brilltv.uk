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
                  Ready to Check <TitleAccent>IPTV UK</TitleAccent> on Your Device?
                </>
              }
              lead="Start with the free 24-hour trial. Test your device, check your preferred content and ask support if you need help choosing an app or plan."
              align="center"
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <Link href={routes.trial} className="telvis-cta-primary">
                <Play size={16} fill="currentColor" aria-hidden="true" />
                <span>Start Your 24-Hour Trial</span>
              </Link>
              <Link href={routes.plans} className="telvis-cta-secondary">
                Compare Plans from £9.99
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </CardRevealPart>

          <CardRevealPart as="p" className="telvis-section-note is-center">
            Listed IPTV UK catalogue totals, programme information and individual
            sources may change. Device compatibility, EPG, Catch-Up, picture
            quality and performance vary. Third-party player fees are not
            included unless expressly stated. Refunds are subject to the
            published Refund Policy.
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
