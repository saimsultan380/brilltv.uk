import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { ReviewsSlider } from "@/components/reviews/ReviewsSlider";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { publishedReviews } from "@/lib/reviews-data";

export function ReviewsList() {
  const hasReviews = publishedReviews.length > 0;

  return (
    <section
      className="telvis-section telvis-reviews-list"
      aria-labelledby="reviews-list-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reviews-list-heading"
          eyebrow="Verified feedback"
          title={
            <>
              Latest Verified <TitleAccent>IPTV UK</TitleAccent> Reviews
            </>
          }
          lead={
            hasReviews
              ? "Published reviews reflect genuine customer experiences on real devices and home connections."
              : "Verified customer reviews will appear here once they have been checked and approved for publication."
          }
        />

        {hasReviews ? (
          <ReviewsSlider reviews={publishedReviews} />
        ) : (
          <CardReveal className="telvis-glass telvis-review-empty">
            <CardRevealPart as="p">
              No verified customer reviews are published yet. When reviews are
              added, each card will show the star rating, a short title, the
              customer&apos;s own wording, and a shortened name with device or
              location details where permitted.
            </CardRevealPart>
          </CardReveal>
        )}
      </div>
    </section>
  );
}
