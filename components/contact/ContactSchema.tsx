import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { buildBreadcrumbList, canonicalUrl, organizationLogoSchema } from "@/lib/seo";
import { routes, siteConfig, supportConfig } from "@/lib/site";

export function ContactSchema() {
  const pageUrl = canonicalUrl(routes.contact);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Contact IPTV UK Support", path: routes.contact },
      ]),
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#contactpage`,
        url: pageUrl,
        name: "Contact IPTV UK Support",
        description:
          "Contact IPTV UK for trial access, plan questions, installation help, account support and troubleshooting by email or WhatsApp, 24 hours a day.",
        inLanguage: "en-GB",
        isPartOf: { "@id": `${canonicalUrl("/")}#website` },
      },
      {
        "@type": "Organization",
        "@id": `${canonicalUrl("/")}#organization`,
        name: siteConfig.name,
        url: canonicalUrl("/"),
        logo: organizationLogoSchema(),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: supportConfig.email,
            telephone: supportConfig.whatsapp,
            url: supportConfig.whatsappUrl,
            availableLanguage: ["English"],
            areaServed: "GB",
            hoursAvailable: "24/7",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ContactFinalCta() {
  return (
    <section
      className="telvis-section telvis-final-cta telvis-contact-final"
      aria-labelledby="contact-final-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <h2 id="contact-final-heading" className="telvis-guide-panel-title is-center">
              We&apos;re Ready to Help
            </h2>
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-section-lead is-center">
            Contact us for a trial, plan advice or technical help. Include your
            device, app and a clear description in your first message for a faster
            answer.
          </CardRevealPart>

          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <a
                href={supportConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="telvis-cta-primary"
              >
                Message Support on WhatsApp
              </a>
              <a
                href={`mailto:${supportConfig.email}`}
                className="telvis-cta-outline"
              >
                Send an Email
              </a>
            </div>
          </CardRevealPart>

          <CardRevealPart as="p" className="telvis-section-note is-center">
            <Link href={routes.home}>IPTV UK Homepage</Link>
            {" • "}
            <Link href={routes.installation}>Installation Guide</Link>
            {" • "}
            <Link href={routes.reviews}>Customer Reviews</Link>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
