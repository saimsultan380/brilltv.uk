import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbList, webPageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

export function TrialSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Free IPTV UK Trial", path: routes.trial },
      ]),
      webPageSchema({
        path: routes.trial,
        name: "Free IPTV UK Trial – 24 Hours on Your Device",
        description:
          "Request a free 24-hour IPTV UK trial. Test live TV, movies and series on your Firestick, Smart TV or mobile before choosing a Telvis plan.",
      }),
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}
