import Link from "next/link";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { StarRating } from "@/components/reviews/StarRating";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import {
  getPublishedReviewStats,
  publishedReviews,
} from "@/lib/reviews-data";
import { routes } from "@/lib/site";

export function HomeReviewsSection() {
  const stats = getPublishedReviewStats(publishedReviews);

  if (!stats) {
    return null;
  }

  return (
    <section
      id="reviews"
      className="telvis-section telvis-home-reviews"
      aria-labelledby="home-reviews-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="home-reviews-heading"
          eyebrow="Customer reviews"
          title={
            <>
              Verified <TitleAccent>IPTV UK</TitleAccent> Customer Reviews
            </>
          }
          lead="Published reviews from verified customers covering setup, everyday viewing and support on real UK home connections."
        />

        <ScrollReveal variant="text">
          <div className="telvis-home-reviews-summary">
            <StarRating
              rating={stats.average}
              label={`${stats.average} out of 5 stars`}
            />
            <p className="telvis-home-reviews-score">
              <strong>{stats.average}</strong> out of 5
            </p>
            <p className="telvis-home-reviews-meta">
              Based on {stats.count} published customer review
              {stats.count === 1 ? "" : "s"}.
            </p>
          </div>
        </ScrollReveal>

        <div className="telvis-review-grid telvis-home-reviews-grid">
          {publishedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <ScrollReveal delay={0.08} variant="cta">
          <div className="telvis-inline-actions is-row">
            <Link href={routes.reviews} className="telvis-cta-primary">
              Read All IPTV UK Reviews
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
