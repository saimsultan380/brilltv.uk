import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

export function ReviewsFinalCta() {
  return (
    <section
      className="telvis-section telvis-final-cta telvis-reviews-final"
      aria-labelledby="reviews-final-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <SectionHeader
              id="reviews-final-heading"
              eyebrow="Try it yourself"
              title={
                <>
                  Prefer to Test It <TitleAccent>Yourself</TitleAccent>?
                </>
              }
              lead="Reviews are helpful, but your device and home connection are the best test. Start the free 24-hour trial and follow the Installation Guide before choosing a longer plan."
              align="center"
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <Link href={routes.trial} className="telvis-cta-primary">
                Start a Free 24-Hour Trial
              </Link>
              <Link href={routes.plans} className="telvis-cta-outline">
                Compare Subscription Plans
              </Link>
            </div>
          </CardRevealPart>

          <CardRevealPart as="p" className="telvis-section-note is-center">
            <Link href={routes.home}>Homepage</Link>
            {" • "}
            <Link href={routes.installation}>Installation Guide</Link>
            {" • "}
            <Link href={routes.contact}>Contact Us</Link>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
