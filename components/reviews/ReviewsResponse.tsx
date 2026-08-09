import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { exampleBusinessResponse } from "@/lib/reviews-data";

export function ReviewsResponse() {
  return (
    <section
      className="telvis-section telvis-reviews-response"
      aria-labelledby="reviews-response-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reviews-response-heading"
          eyebrow="Support response"
          title={
            <>
              Example Business Response to a{" "}
              <TitleAccent>Critical Review</TitleAccent>
            </>
          }
          lead="Telvis may reply publicly when a review explains a problem that support can help resolve."
        />

        <CardReveal className="telvis-glass telvis-review-response">
          <CardRevealPart>
            <blockquote cite="#reviews-response-heading">
              <p>&ldquo;{exampleBusinessResponse}&rdquo;</p>
            </blockquote>
          </CardRevealPart>
          <CardRevealPart>
            <figcaption>Example Telvis support reply</figcaption>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
