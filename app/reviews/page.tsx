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
import { routes, siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}${routes.reviews}/`;

export const metadata: Metadata = {
  title: "IPTV UK Reviews – Genuine Customer Experiences",
  description:
    "Read genuine IPTV UK customer reviews covering setup, device compatibility, support and everyday viewing. Learn how feedback is collected.",
  alternates: {
    canonical: pageUrl,
  },
  keywords: [
    "IPTV UK reviews",
    "IPTV customer reviews UK",
    "IPTV service feedback",
    "IPTV subscription reviews",
  ],
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "IPTV UK Reviews – Genuine Customer Experiences",
    description:
      "Read genuine IPTV UK customer reviews covering setup, device compatibility, support and everyday viewing. Learn how feedback is collected.",
    siteName: siteConfig.name,
    locale: "en-GB",
  },
};

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
