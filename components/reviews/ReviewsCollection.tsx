import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { reviewCollectionSteps } from "@/lib/reviews-data";

export function ReviewsCollection() {
  return (
    <section
      className="telvis-section telvis-reviews-collection"
      aria-labelledby="reviews-collection-heading"
    >
      <div className="telvis-section-inner">
        <div className="telvis-split">
          <div className="telvis-split-copy">
            <SectionHeader
              id="reviews-collection-heading"
              eyebrow="Our process"
              title="How Reviews Are Collected"
            />
          </div>

          <ScrollReveal>
            <div className="telvis-glass telvis-panel telvis-review-process-panel">
              <ol className="telvis-review-numbered-list">
                {reviewCollectionSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <p>
                We do not write reviews for customers, sell higher placement or
                turn criticism into praise. Telvis may reply to explain how a
                reported problem was handled.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
