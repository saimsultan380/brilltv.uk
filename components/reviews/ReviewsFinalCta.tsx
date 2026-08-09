import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

export function ReviewsFinalCta() {
  return (
    <section
      className="telvis-section telvis-final-cta telvis-reviews-final"
      aria-labelledby="reviews-final-heading"
    >
      <div className="telvis-section-inner">
        <ScrollReveal>
          <div className="telvis-glass telvis-final-panel">
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
            />

            <div className="telvis-actions telvis-final-actions">
              <Link href={routes.trial} className="telvis-cta-primary">
                Start a Free 24-Hour Trial
              </Link>
              <Link href={routes.plans} className="telvis-cta-outline">
                Compare Subscription Plans
              </Link>
            </div>

            <p className="telvis-section-note is-center">
              <Link href={routes.home}>Homepage</Link>
              {" • "}
              <Link href={routes.installation}>Installation Guide</Link>
              {" • "}
              <Link href={routes.contact}>Contact Us</Link>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
