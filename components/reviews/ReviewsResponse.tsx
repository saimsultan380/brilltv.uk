import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
          title="Example Business Response to a Critical Review"
          lead="Telvis may reply publicly when a review explains a problem that support can help resolve."
        />

        <ScrollReveal>
          <figure className="telvis-glass telvis-review-response">
            <blockquote cite="#reviews-response-heading">
              <p>&ldquo;{exampleBusinessResponse}&rdquo;</p>
            </blockquote>
            <figcaption>Example Telvis support reply</figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
