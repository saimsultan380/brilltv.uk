import { JsonLdScript } from "@/components/seo/JsonLdScript";
import {
  getPublishedReviewStats,
  publishedReviews,
} from "@/lib/reviews-data";
import { routes } from "@/lib/site";
import { buildBreadcrumbList, webPageSchema } from "@/lib/seo";

export function ReviewsSchema() {
  const stats = getPublishedReviewStats(publishedReviews);

  const webPage: Record<string, unknown> = webPageSchema({
    path: routes.reviews,
    name: "IPTV UK Reviews – Customer Feedback & User Experiences",
    description:
      "Read IPTV UK customer reviews covering setup, streaming quality, device compatibility, support and everyday viewing experience.",
  });

  if (stats) {
    webPage.mainEntity = {
      "@type": "Product",
      name: "IPTV UK Subscription",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: stats.average,
        reviewCount: stats.count,
        bestRating: 5,
        worstRating: 1,
      },
      review: publishedReviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author,
        },
        datePublished: review.date,
        name: review.title,
        reviewBody: review.body,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: 5,
          worstRating: 1,
        },
      })),
    };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "IPTV UK Reviews", path: routes.reviews },
      ]),
      webPage,
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}
