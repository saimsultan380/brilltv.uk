import {
  getPublishedReviewStats,
  publishedReviews,
} from "@/lib/reviews-data";
import { routes, siteConfig } from "@/lib/site";

export function ReviewsSchema() {
  const pageUrl = `${siteConfig.url}${routes.reviews}/`;
  const stats = getPublishedReviewStats(publishedReviews);

  const webPage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "IPTV UK Reviews – Genuine Customer Experiences",
    description:
      "Read genuine IPTV UK customer reviews covering setup, device compatibility, support and everyday viewing. Learn how feedback is collected.",
    inLanguage: "en-GB",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
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
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "IPTV UK Reviews",
            item: pageUrl,
          },
        ],
      },
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
