import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema(), websiteSchema()],
};

export function SitewideJsonLd() {
  return <JsonLdScript data={jsonLd} />;
}
