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
  title: "IPTV UK Reviews – Verified Customer Feedback & Support",
  description:
    "Read IPTV UK reviews covering installation, device compatibility, viewing and support. See what customers test before choosing a plan.",
  keywords: [
    "IPTV UK Reviews",
    "IPTV reviews UK",
    "IPTV customer reviews",
    "IPTV subscription reviews",
    "IPTV service feedback",
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
