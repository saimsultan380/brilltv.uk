import {
  getPublishedReviewStats,
  publishedReviews,
} from "@/lib/reviews-data";
import { routes } from "@/lib/site";
import { buildBreadcrumbList, canonicalUrl } from "@/lib/seo";

export function ReviewsSchema() {
  const pageUrl = canonicalUrl(routes.reviews);
  const stats = getPublishedReviewStats(publishedReviews);

  const webPage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "IPTV UK Reviews – Genuine Customer Experiences",
    description:
      "Read genuine IPTV UK customer reviews covering setup, device compatibility, support and everyday viewing. Learn how feedback is collected.",
    inLanguage: "en-GB",
    isPartOf: { "@id": `${canonicalUrl("/")}#website` },
  };

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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
