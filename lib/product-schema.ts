import {
  getPublishedReviewStats,
  publishedReviews,
} from "@/lib/reviews-data";
import {
  absoluteAssetUrl,
  canonicalUrl,
} from "@/lib/seo";
import { brandAssets, routes, siteConfig } from "@/lib/site";

const homeUrl = canonicalUrl("/");
const refundUrl = canonicalUrl(routes.refund);
const reviewsUrl = canonicalUrl(routes.reviews);

export const productGroupId = `${homeUrl}#product-group`;
export const returnPolicyId = `${refundUrl}#return-policy`;
export const digitalDeliveryId = `${homeUrl}#digital-delivery`;

export const subscriptionPlans = [
  {
    id: "1-month",
    sku: "telvis-1-month",
    name: "Telvis IPTV UK 1-Month Plan",
    price: "9.99",
  },
  {
    id: "3-month",
    sku: "telvis-3-month",
    name: "Telvis IPTV UK 3-Month Plan",
    price: "24.99",
  },
  {
    id: "6-month",
    sku: "telvis-6-month",
    name: "Telvis IPTV UK 6-Month Plan",
    price: "39.99",
  },
  {
    id: "12-month",
    sku: "telvis-12-month",
    name: "Telvis IPTV UK 12-Month Plan",
    price: "49.99",
  },
] as const;

export type SubscriptionPlan = (typeof subscriptionPlans)[number];

export function productImageUrls() {
  return [
    absoluteAssetUrl(brandAssets.logo512),
    absoluteAssetUrl(brandAssets.ogImage),
  ];
}

/**
 * Seven-day refund guarantee published on /refund-policy.
 * @see https://developers.google.com/search/docs/appearance/structured-data/return-policy
 */
export function merchantReturnPolicySchema() {
  return {
    "@type": "MerchantReturnPolicy",
    "@id": returnPolicyId,
    applicableCountry: "GB",
    returnPolicyCountry: "GB",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 7,
    returnFees: "https://schema.org/FreeReturn",
    refundType: "https://schema.org/FullRefund",
    merchantReturnLink: refundUrl,
  };
}

/**
 * Instant digital activation: no physical parcel, no delivery charge.
 * Offer-level OfferShippingDetails is what Search Console validates on Product markup.
 * @see https://developers.google.com/search/docs/appearance/structured-data/merchant-listing
 */
export function digitalShippingDetailsSchema() {
  return {
    "@type": "OfferShippingDetails",
    shippingDestination: {
      "@type": "DefinedRegion",
      addressCountry: "GB",
    },
    shippingRate: {
      "@type": "MonetaryAmount",
      value: 0,
      currency: "GBP",
    },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 0,
        maxValue: 0,
        unitCode: "DAY",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 0,
        maxValue: 0,
        unitCode: "DAY",
      },
    },
  };
}

export function digitalShippingServiceSchema() {
  return {
    "@type": "ShippingService",
    "@id": digitalDeliveryId,
    name: "Instant digital activation",
    description:
      "Telvis IPTV UK plans are delivered digitally. Access details are issued after purchase, with no physical shipping and no delivery charge.",
    shippingConditions: [
      {
        "@type": "ShippingConditions",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "GB",
        },
        shippingRate: {
          "@type": "MonetaryAmount",
          value: 0,
          currency: "GBP",
        },
        transitTime: {
          "@type": "ServicePeriod",
          duration: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 0,
            unitCode: "DAY",
          },
        },
      },
    ],
  };
}

export function productReviewSchema() {
  return publishedReviews
    .filter((review) => review.verified)
    .map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: review.datePublished,
      name: review.title,
      reviewBody: review.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
    }));
}

export function productAggregateRatingSchema() {
  const stats = getPublishedReviewStats(publishedReviews);

  if (!stats) {
    return null;
  }

  return {
    "@type": "AggregateRating",
    ratingValue: stats.average,
    reviewCount: stats.count,
    bestRating: 5,
    worstRating: 1,
  };
}

function planProductId(sku: string) {
  return `${homeUrl}#product-${sku}`;
}

function planOfferUrl(planId: string) {
  return `${homeUrl}#plan-${planId}`;
}

function planOfferSchema(plan: SubscriptionPlan) {
  return {
    "@type": "Offer",
    url: planOfferUrl(plan.id),
    priceCurrency: "GBP",
    price: plan.price,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@id": `${homeUrl}#organization` },
    hasMerchantReturnPolicy: merchantReturnPolicySchema(),
    shippingDetails: digitalShippingDetailsSchema(),
  };
}

export function subscriptionProductSchema(plan: SubscriptionPlan) {
  const aggregateRating = productAggregateRatingSchema();
  const reviews = productReviewSchema();

  return {
    "@type": "Product",
    "@id": planProductId(plan.sku),
    name: plan.name,
    sku: plan.sku,
    mpn: plan.sku,
    url: planOfferUrl(plan.id),
    image: productImageUrls(),
    description: siteConfig.description,
    category: "Digital IPTV Subscription",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    isVariantOf: { "@id": productGroupId },
    inProductGroupWithID: "telvis-iptv-uk",
    offers: planOfferSchema(plan),
    ...(aggregateRating ? { aggregateRating } : {}),
    ...(reviews.length > 0 ? { review: reviews } : {}),
  };
}

export function subscriptionProductGroupSchema() {
  const aggregateRating = productAggregateRatingSchema();
  const reviews = productReviewSchema();

  return {
    "@type": "ProductGroup",
    "@id": productGroupId,
    name: "Telvis IPTV UK Subscription",
    description: siteConfig.description,
    image: productImageUrls(),
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    productGroupID: "telvis-iptv-uk",
    url: `${homeUrl}#plans`,
    hasVariant: subscriptionPlans.map((plan) => ({
      "@id": planProductId(plan.sku),
    })),
    ...(aggregateRating ? { aggregateRating } : {}),
    ...(reviews.length > 0 ? { review: reviews } : {}),
  };
}

export function homeProductGraph() {
  return [
    subscriptionProductGroupSchema(),
    ...subscriptionPlans.map(subscriptionProductSchema),
  ];
}

export function reviewsPageProductSchema() {
  const aggregateRating = productAggregateRatingSchema();
  const reviews = productReviewSchema();

  if (!aggregateRating || reviews.length === 0) {
    return null;
  }

  return {
    "@type": "Product",
    "@id": `${reviewsUrl}#product`,
    name: "Telvis IPTV UK Subscription",
    url: reviewsUrl,
    image: productImageUrls(),
    description:
      "Read IPTV UK customer reviews covering setup, streaming quality, device compatibility, support and everyday viewing experience.",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    isVariantOf: { "@id": productGroupId },
    aggregateRating,
    review: reviews,
  };
}
