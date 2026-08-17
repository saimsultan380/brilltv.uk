import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { reviewsPageProductSchema } from "@/lib/product-schema";
import { routes } from "@/lib/site";
import { buildBreadcrumbList, webPageSchema } from "@/lib/seo";

export function ReviewsSchema() {
  const webPage: Record<string, unknown> = webPageSchema({
    path: routes.reviews,
    name: "IPTV UK Reviews – Customer Feedback & User Experiences",
    description:
      "Read IPTV UK customer reviews covering setup, streaming quality, device compatibility, support and everyday viewing experience.",
  });

  const product = reviewsPageProductSchema();

  if (product) {
    webPage.mainEntity = { "@id": product["@id"] };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "IPTV UK Reviews", path: routes.reviews },
      ]),
      webPage,
      ...(product ? [product] : []),
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}
