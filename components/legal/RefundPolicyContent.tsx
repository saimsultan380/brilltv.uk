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
        name: "IPTV Refund Policy UK – 7-Day Money-Back Guarantee",
        description:
          "Read our IPTV refund policy covering the seven-day guarantee, eligibility requirements, exclusions and information needed to request a refund.",
      }),
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export function RefundPolicyHero() {
  return (
    <PageHero
      eyebrow="Refund Policy"
      headingId="refund-heading"
      titleLines={[
        <>
          IPTV Refund Policy UK – <span className="telvis-h1-accent">Our 7-Day Refund Guarantee</span>
        </>,
      ]}
    >
      <HeroReveal delay={0.22}>
        <div className="telvis-copy">
          <p className="telvis-meta-date">Last updated: 19 August 2026</p>
          <p>
            This Refund Policy explains the seven-day guarantee, how to request
            a review and which situations may or may not qualify.
          </p>
          <p>Nothing in this policy restricts mandatory consumer rights.</p>
        </div>
      </HeroReveal>
    </PageHero>
  );
}

export function RefundPolicyContent() {
  return (
    <section className="telvis-section" aria-labelledby="refund-details-heading">
      <div className="telvis-section-inner telvis-policy-stack">
        <SectionHeader
          id="refund-details-heading"
          eyebrow="Policy details"
          title={
            <>
              7-Day <TitleAccent>Money-Back Guarantee</TitleAccent> Terms
            </>
          }
        />

        <CardReveal className="telvis-glass telvis-panel" delay={0.04}>
          <CardRevealPart as="h2" className="telvis-panel-title">
            When Does the Seven-Day Period Begin?
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            The seven-day period begins when the paid account is activated and the
            login details are delivered, unless the order confirmation states a
            later start date.
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            You must contact support within this period to request consideration
            under the guarantee.
          </CardRevealPart>
        </CardReveal>

        <CardReveal className="telvis-glass telvis-panel" delay={0.06}>
          <CardRevealPart as="h2" className="telvis-panel-title">
            When a Refund May Be Approved
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            A full or appropriate refund may be approved when:
          </CardRevealPart>
          <CardRevealPart>
            <ul className="telvis-check-list">
              <li>Valid login details were not supplied</li>
              <li>The paid account cannot be accessed</li>
              <li>A material technical problem within our control cannot be resolved</li>
              <li>The supplied service materially differs from the order description</li>
              <li>The same order was charged more than once</li>
              <li>Applicable consumer law provides another right to a remedy</li>
            </ul>
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            Where appropriate, support may first offer replacement credentials,
            corrected instructions or another compatible setup method.
          </CardRevealPart>
        </CardReveal>

        <CardReveal className="telvis-glass telvis-panel" delay={0.08}>
          <CardRevealPart as="h2" className="telvis-panel-title">
            Situations Not Normally Covered
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            A discretionary refund may be declined when:
          </CardRevealPart>
          <CardRevealPart>
            <ul className="telvis-check-list">
              <li>The request is made after seven days</li>
              <li>The customer changes their mind after using immediate digital access</li>
              <li>The device or application is incompatible despite compatibility information being available</li>
              <li>The customer refuses reasonable setup assistance</li>
              <li>The problem is caused by the customer’s device, router or internet connection</li>
              <li>A third-party application stops working</li>
              <li>A third-party player requires a separate licence</li>
              <li>A particular channel, event, programme or title changes</li>
              <li>The customer expected every stream to be available in 4K</li>
              <li>Login details were shared, resold or published</li>
              <li>Connection limits were exceeded</li>
              <li>The account was suspended for serious misuse</li>
              <li>The request concerns a free trial rather than a paid order</li>
              <li>The customer separately purchased a third-party player licence</li>
            </ul>
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            These exclusions do not override statutory rights concerning faulty,
            misdescribed or improperly supplied digital content or services.
          </CardRevealPart>
        </CardReveal>

        <CardReveal className="telvis-glass telvis-panel" delay={0.1}>
          <CardRevealPart as="h2" className="telvis-panel-title">
            How to Request a Refund
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            Email {supportConfig.email} with the subject Refund Request and include:
          </CardRevealPart>
          <CardRevealPart>
            <ul className="telvis-check-list">
              <li>Full name</li>
              <li>Order email</li>
              <li>Transaction or order reference</li>
              <li>Plan purchased</li>
              <li>Activation date</li>
              <li>Device and application</li>
              <li>Clear description of the problem</li>
              <li>Screenshot or error message</li>
              <li>Troubleshooting already completed</li>
            </ul>
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            Do not include card passwords, banking credentials or one-time
            security codes.
          </CardRevealPart>
        </CardReveal>

        <CardReveal className="telvis-glass telvis-panel" delay={0.12}>
          <CardRevealPart as="h2" className="telvis-panel-title">
            Technical Review
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            For a technical refund request, support may ask you to:
          </CardRevealPart>
          <CardRevealPart>
            <ul className="telvis-check-list">
              <li>Confirm the login details</li>
              <li>Restart the application and device</li>
              <li>Test another compatible application</li>
              <li>Test another network</li>
              <li>Provide a screenshot</li>
              <li>Confirm the exact device model</li>
              <li>Test replacement credentials</li>
            </ul>
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            This helps determine whether the issue relates to the account,
            application, device or internet connection.
          </CardRevealPart>
        </CardReveal>

        <CardReveal className="telvis-glass telvis-panel" delay={0.14}>
          <CardRevealPart as="h2" className="telvis-panel-title">
            Refund Method &amp; Subscription Cancellation
          </CardRevealPart>
          <CardRevealPart as="h3" className="telvis-info-title">
            Refund Method
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            Approved refunds are normally returned through the original payment
            method where possible. The time required for the funds to appear
            depends on the payment processor and customer’s bank.
          </CardRevealPart>
          <CardRevealPart as="h3" className="telvis-info-title">
            Subscription Cancellation
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            Subscriptions do not renew automatically. If you no longer want
            access, allow the plan to expire and do not purchase another
            duration.
          </CardRevealPart>
          <CardRevealPart as="h3" className="telvis-info-title">
            Payment Disputes
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            Contact support before opening a payment dispute so the order can be
            reviewed. This does not restrict your right to contact your bank or
            payment provider.
          </CardRevealPart>
        </CardReveal>

        <CardReveal className="telvis-glass telvis-panel" delay={0.16}>
          <CardRevealPart as="h2" className="telvis-panel-title">
            Contact Support
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            Email <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>
            {" for refund enquiries."}
          </CardRevealPart>
          <CardRevealPart>
            <div className="telvis-actions">
              <Link href={routes.contact} className="telvis-cta-primary">
                Contact Customer Support
              </Link>
            </div>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
