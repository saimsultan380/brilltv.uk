import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { routes, siteConfig, supportConfig } from "@/lib/site";

export function ContactSchema() {
  const pageUrl = `${siteConfig.url}${routes.contact}`;

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
            name: "Contact IPTV UK Support",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#contactpage`,
        url: pageUrl,
        name: "Contact IPTV UK Support",
        description:
          "Contact IPTV UK for trial access, plan questions, installation help, account support and troubleshooting by email or WhatsApp, 24 hours a day.",
        inLanguage: "en-GB",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: supportConfig.email,
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
