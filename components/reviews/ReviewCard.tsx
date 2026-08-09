import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { StarRating } from "@/components/reviews/StarRating";
import type { PublishedReview } from "@/lib/reviews-data";

type ReviewCardProps = {
  review: PublishedReview;
  className?: string;
};

export function ReviewCard({ review, className = "" }: ReviewCardProps) {
  const details = [
    review.location,
    review.device,
    review.subscriptionLength,
    review.verified ? "Verified customer" : null,
    review.date,
  ].filter(Boolean);

  return (
    <CardReveal
      as="article"
      className={`telvis-glass telvis-review-card${className ? ` ${className}` : ""}`}
    >
      <CardRevealPart>
        <div className="telvis-review-card-header">
          <StarRating rating={review.rating} />
          <h3 className="telvis-review-card-title">{review.title}</h3>
        </div>
      </CardRevealPart>

      <CardRevealPart>
        <blockquote className="telvis-review-card-quote">
          &ldquo;{review.body}&rdquo;
        </blockquote>
      </CardRevealPart>

      <CardRevealPart>
        <footer className="telvis-review-card-meta">
          <cite className="telvis-review-card-author">{review.author}</cite>
          <span>{details.join(" • ")}</span>
        </footer>
      </CardRevealPart>
    </CardReveal>
  );
}
