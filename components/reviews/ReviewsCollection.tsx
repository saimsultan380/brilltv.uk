import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
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
              title={
                <>
                  How <TitleAccent>Reviews</TitleAccent> Are Collected
                </>
              }
            />
          </div>

          <CardReveal className="telvis-glass telvis-panel telvis-review-process-panel">
            <CardRevealPart>
              <ol className="telvis-review-numbered-list">
                {reviewCollectionSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </CardRevealPart>

            <CardRevealPart as="p">
              We do not write reviews for customers, sell higher placement or
              turn criticism into praise. Telvis may reply to explain how a
              reported problem was handled.
            </CardRevealPart>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}
