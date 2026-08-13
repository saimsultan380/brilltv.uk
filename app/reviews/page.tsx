import type { Metadata } from "next";
import { ReviewsCollection } from "@/components/reviews/ReviewsCollection";
import { ReviewsEvaluate } from "@/components/reviews/ReviewsEvaluate";
import { ReviewsFinalCta } from "@/components/reviews/ReviewsFinalCta";
import { ReviewsHero } from "@/components/reviews/ReviewsHero";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { ReviewsRating } from "@/components/reviews/ReviewsRating";
import { ReviewsResponse } from "@/components/reviews/ReviewsResponse";
import { ReviewsSchema } from "@/components/reviews/ReviewsSchema";
import { ReviewsSubmit } from "@/components/reviews/ReviewsSubmit";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: routes.reviews,
  title: "IPTV UK Reviews – Customer Feedback & User Experiences",
  description:
    "Read IPTV UK customer reviews covering setup, streaming quality, device compatibility, support and everyday viewing experience.",
  keywords: [
    "IPTV UK reviews",
    "IPTV customer reviews UK",
    "IPTV service feedback",
    "IPTV subscription reviews",
  ],
});

export default function ReviewsPage() {
  return (
    <>
      <ReviewsSchema />
      <main>
        <ReviewsHero />
        <ReviewsRating />
        <ReviewsList />
        <ReviewsEvaluate />
        <ReviewsCollection />
        <ReviewsResponse />
        <ReviewsSubmit />
        <ReviewsFinalCta />
      </main>
    </>
  );
}
