import { JsonLdScript } from "@/components/seo/JsonLdScript";
import {
  digitalShippingServiceSchema,
  merchantReturnPolicySchema,
} from "@/lib/product-schema";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...organizationSchema(),
      hasMerchantReturnPolicy: merchantReturnPolicySchema(),
      hasShippingService: digitalShippingServiceSchema(),
    },
    websiteSchema(),
  ],
};

export function SitewideJsonLd() {
  return <JsonLdScript data={jsonLd} />;
}
