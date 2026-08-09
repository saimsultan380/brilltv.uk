import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
  max?: number;
  label?: string;
};

export function StarRating({ rating, max = 5, label }: StarRatingProps) {
  return (
    <div
      className="telvis-review-stars"
      role="img"
      aria-label={label ?? `${rating} out of ${max} stars`}
    >
      {Array.from({ length: max }, (_, index) => {
        const filled = index < Math.round(rating);

        return (
          <Star
            key={index}
            size={16}
            className={filled ? "is-filled" : "is-empty"}
            fill={filled ? "currentColor" : "none"}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}
