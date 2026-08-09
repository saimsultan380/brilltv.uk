import { StarRating } from "@/components/reviews/StarRating";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import {
  getPublishedReviewStats,
  publishedReviews,
  reviewsLastUpdated,
} from "@/lib/reviews-data";

export function ReviewsRating() {
  const stats = getPublishedReviewStats(publishedReviews);

  return (
    <section
      className="telvis-section telvis-reviews-rating"
      aria-labelledby="reviews-rating-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-review-rating-panel">
          <CardRevealPart>
            <SectionHeader
              id="reviews-rating-heading"
              eyebrow="Overall rating"
              title={
                <>
                  Overall Customer <TitleAccent>Rating</TitleAccent>
                </>
              }
              align="center"
              animate={false}
            />
          </CardRevealPart>

          {stats ? (
            <CardRevealPart>
              <div className="telvis-review-rating-summary">
                <StarRating
                  rating={stats.average}
                  label={`${stats.average} out of 5 stars`}
                />
                <p className="telvis-review-rating-score">
                  <strong>{stats.average}</strong> out of 5
                </p>
                <p className="telvis-review-rating-meta">
                  Based on {stats.count} published customer review
                  {stats.count === 1 ? "" : "s"}.
                  {reviewsLastUpdated ? (
                    <>
                      {" "}
                      Last updated: {reviewsLastUpdated}
                    </>
                  ) : null}
                </p>
              </div>
            </CardRevealPart>
          ) : (
            <CardRevealPart as="p" className="telvis-review-rating-placeholder">
              Verified customer ratings are published only when genuine reviews
              are visible on this page. The overall score and review count will
              appear here once approved reviews are available.
            </CardRevealPart>
          )}
        </CardReveal>
      </div>
    </section>
  );
}
