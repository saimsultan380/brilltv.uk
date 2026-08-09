import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StarRating } from "@/components/reviews/StarRating";
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
        <ScrollReveal>
          <div className="telvis-glass telvis-review-rating-panel">
            <SectionHeader
              id="reviews-rating-heading"
              eyebrow="Overall rating"
              title="Overall Customer Rating"
              align="center"
            />

            {stats ? (
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
            ) : (
              <p className="telvis-review-rating-placeholder">
                Verified customer ratings are published only when genuine reviews
                are visible on this page. The overall score and review count will
                appear here once approved reviews are available.
              </p>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
