import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbList, webPageSchema } from "@/lib/seo";
import { routes, supportConfig } from "@/lib/site";

export function RefundPolicySchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Refund Policy", path: routes.refund },
      ]),
      webPageSchema({
        type: "WebPage",
        path: routes.refund,
        name: "IPTV UK Refund Policy – Seven-Day Guarantee",
        description:
          "Read the Telvis IPTV UK seven-day refund guarantee, how to request a refund, and what information support needs to review an eligible paid order.",
      }),
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export function RefundPolicyHero() {
  return (
    <PageHero
      eyebrow="Legal"
      headingId="refund-heading"
      titleLines={[
        <>
          IPTV UK <span className="telvis-h1-accent">Refund Policy</span>
        </>,
      ]}
    >
      <HeroReveal delay={0.22}>
        <div className="telvis-copy">
          <p>
            Eligible paid purchases include a seven-day refund guarantee. Read
            this page before you order, and contact support within seven days if
            you need to request a refund.
          </p>
        </div>
      </HeroReveal>
    </PageHero>
  );
}

type PolicySection = {
  title: string;
  body: string[];
  list?: string[];
};

const sections: PolicySection[] = [
  {
    title: "What the guarantee covers",
    body: [
      "Paid Telvis subscription plans include a seven-day refund guarantee from the purchase date, subject to the conditions on this page.",
      "The free 24-hour trial is provided at no charge, so it is not a paid purchase and is not refunded.",
    ],
  },
  {
    title: "How to request a refund",
    body: [
      "Contact support by email or WhatsApp within seven days of purchase. Include:",
    ],
    list: [
      "The name used on the order",
      "Order reference",
      "Purchase date",
      "Subscription duration",
      "The reason for the request",
      "Any troubleshooting already tried",
    ],
  },
  {
    title: "How we review a request",
    body: [
      "We may first suggest simple steps to fix a technical problem, such as checking the app, login details, device or home internet connection. Trying those steps does not remove any rights or eligibility given in this policy.",
      "We aim to confirm whether a request is eligible once the order details and reason have been checked.",
    ],
  },
  {
    title: "UK consumer rights",
    body: [
      "This policy does not affect your statutory rights under UK consumer law.",
    ],
  },
] as const;

export function RefundPolicyContent() {
  return (
    <section className="telvis-section" aria-labelledby="refund-details-heading">
      <div className="telvis-section-inner telvis-policy-stack">
        <SectionHeader
          id="refund-details-heading"
          eyebrow="Policy details"
          title={
            <>
              Seven-Day <TitleAccent>Refund Guarantee</TitleAccent>
            </>
          }
          lead="Use the trial first where possible. If a paid plan is not suitable, contact support within seven days with your order details."
        />

        {sections.map((section) => (
          <CardReveal
            key={section.title}
            className="telvis-glass telvis-panel"
            delay={0.04}
          >
            <CardRevealPart as="h2" className="telvis-panel-title">
              {section.title}
            </CardRevealPart>
            {section.body.map((paragraph) => (
              <CardRevealPart
                key={paragraph}
                as="p"
                className="telvis-info-body"
              >
                {paragraph}
              </CardRevealPart>
            ))}
            {"list" in section && section.list ? (
              <CardRevealPart>
                <ul className="telvis-check-list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardRevealPart>
            ) : null}
          </CardReveal>
        ))}

        <CardReveal className="telvis-glass telvis-panel" delay={0.08}>
          <CardRevealPart as="h2" className="telvis-panel-title">
            Contact support
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            Email{" "}
            <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>
            {" or WhatsApp "}
            <a href={supportConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
              {supportConfig.whatsapp}
            </a>
            . You can also use the contact page.
          </CardRevealPart>
          <CardRevealPart>
            <div className="telvis-actions">
              <Link href={routes.contact} className="telvis-cta-primary">
                Open Contact Page
              </Link>
            </div>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
