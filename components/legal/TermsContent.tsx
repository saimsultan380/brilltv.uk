import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes, supportConfig } from "@/lib/site";

export function TermsContent() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headingId="terms-heading"
        titleLines={[
          <>
            IPTV UK <span className="telvis-h1-accent">Terms of Service</span>
          </>,
        ]}
      >
        <HeroReveal delay={0.22}>
          <div className="telvis-copy">
            <p className="telvis-meta-date">Last updated: 19 August 2026</p>
            <p>
              These Terms govern access to the website, free trials, paid subscriptions, applications, login details and customer support provided under the IPTV UK trading name.
            </p>
            <p>By ordering, activating or using the service, you agree to these Terms.</p>
          </div>
        </HeroReveal>
      </PageHero>

      <section className="telvis-section" aria-labelledby="terms-details-heading">
        <div className="telvis-section-inner telvis-policy-stack">
          <SectionHeader
            id="terms-details-heading"
            eyebrow="Terms &amp; Conditions"
            title={
              <>
                Subscription <TitleAccent>Conditions</TitleAccent>
              </>
            }
          />

          <CardReveal className="telvis-glass telvis-panel" delay={0.02}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              1. Service Provider
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              IPTV UK is the trading name used on this website. The legal seller’s full name and contact address must be displayed at checkout and within the customer’s order confirmation.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Customer support: {supportConfig.email}
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.04}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              2. Eligibility
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              You must be at least 18 years old and legally capable of entering into a contract. You are responsible for ensuring that your use of the service is lawful in your location.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.06}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              3. Service Description
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              The service provides time-limited access details for use through a compatible device and application. Depending on the selected plan and current availability, features can include:
            </CardRevealPart>
            <CardRevealPart>
              <ul className="telvis-check-list">
                <li>Live television categories</li>
                <li>Movies and series</li>
                <li>EPG information</li>
                <li>Selected Catch-Up</li>
                <li>VPN access</li>
                <li>Dedicated application access</li>
                <li>Xtream Codes or another supported format</li>
                <li>Installation guidance</li>
                <li>Customer support</li>
              </ul>
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Catalogue totals represent the listed service when published. They do not guarantee permanent availability of every listing.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.08}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              4. Orders and Activation
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              You must provide accurate contact, payment and device information. An order is accepted when payment has been confirmed and the account has been activated.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              The order confirmation should state: Plan duration, Price paid, Activation date, Expiry date, Login format, Connection allowance, and Relevant cancellation information.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              An order may be declined where payment cannot be verified, information appears fraudulent, the requested device is incompatible or fulfilling the order would breach a legal obligation.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.1}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              5. Immediate Digital Access &amp; 6. Prices and Payments
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              5. Immediate Digital Access
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Subscriptions are normally prepared for immediate activation. At checkout, you may be asked to request activation during an applicable cancellation period and acknowledge how immediate supply can affect cancellation rights. Nothing in these Terms removes consumer rights that cannot legally be excluded.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              6. Prices and Payments
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Prices are displayed in pounds sterling unless another currency is clearly shown. Payment can be handled by an independent processor under its own terms and privacy policy. We do not ask customers to send card passwords, online banking credentials or one-time security codes through email or WhatsApp.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.12}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              7. Subscription Duration and Renewal &amp; 8. Free Trials
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              7. Subscription Duration and Renewal
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              The subscription starts when the account is activated and ends on the expiry date shown in your account or confirmation. Plans do not renew automatically. Unused time does not transfer to another subscription.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              8. Free Trials
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              A free trial is intended for short-term compatibility testing. Trials may be limited to one per person, household, device or network. Repeated, false or abusive trial requests can be declined.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.14}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              9. Account Security and Acceptable Use
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              You are responsible for protecting your username, password, server address and playlist links. You must not:
            </CardRevealPart>
            <CardRevealPart>
              <ul className="telvis-check-list">
                <li>Publish or resell login details</li>
                <li>Share access beyond the permitted connection allowance</li>
                <li>Attempt to access another customer’s account</li>
                <li>Reverse-engineer or modify supplied applications</li>
                <li>Bypass security or connection restrictions</li>
                <li>Use automated tools to extract the catalogue</li>
                <li>Use the service for public exhibition</li>
                <li>Commercially redistribute access</li>
                <li>Use the service unlawfully</li>
              </ul>
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Contact support if you believe your credentials have been exposed.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.16}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              10. Devices and Third-Party Applications &amp; 11. Content, EPG and Catch-Up
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              10. Devices and Third-Party Applications
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Compatibility depends on the device, operating system and application. Third-party players are controlled by their developers. We are not responsible for their pricing, updates, removal from an app store, security practices or technical faults. Third-party player charges are separate unless your order specifically says they are included.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              11. Content, EPG and Catch-Up Availability
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Individual channels, categories, events, movies, series, EPG entries and Catch-Up programmes can change. Temporary interruptions can occur because of maintenance, upstream technical faults, network congestion, device problems, internet-provider routing, availability changes, or events outside reasonable control. Uninterrupted access and permanent availability of a particular listing are not guaranteed.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.18}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              12. Picture Quality, 13. VPN Functionality &amp; 14. Customer Support
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              12. Picture Quality
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              HD, Full HD and selected 4K sources are available where supplied. Actual quality depends on the source, device, television, application and internet connection. The presence of selected 4K options does not mean all content is provided in 4K.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              13. VPN Functionality
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              VPN access may be included on supported setups. A VPN does not guarantee anonymity, uninterrupted access or permission to view material restricted by law or third-party terms.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              14. Customer Support
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Support can assist with account access, compatible applications and basic troubleshooting. Support does not include repairing a customer’s device, router, internet service or independent application. Abusive or threatening communication may result in support restrictions.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.2}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              15. Suspension and Termination, 16. Refunds &amp; 17. Intellectual Property
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              15. Suspension and Termination
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Access may be suspended or terminated where: payment is fraudulently reversed, login details are resold or publicly shared, connection limits are repeatedly exceeded, the service is used unlawfully, security systems are attacked, or these Terms are seriously or repeatedly breached.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              16. Refunds
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              The seven-day guarantee is explained in the Refund Policy. Nothing in these Terms limits mandatory rights concerning digital content or services that are faulty, materially misdescribed or not supplied with reasonable care and skill.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              17. Intellectual Property
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Original website text, design, graphics and branding are protected by applicable intellectual-property laws. Third-party application and device names belong to their respective owners. Compatibility references do not imply affiliation, sponsorship or endorsement.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.22}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              18. Liability, 19. Personal &amp; Lawful Use, 20. Changes &amp; 21. Contact
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              18. Liability &amp; 19. Personal and Lawful Use
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Nothing excludes liability where exclusion is prohibited by law. To the extent permitted by law, we are not responsible for indirect losses or problems caused by an incompatible device, home network, internet provider or third-party application.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              The service is intended for personal use only. Access does not grant permission to copy, rebroadcast, publicly exhibit or commercially redistribute content. Users are responsible for complying with applicable laws and content rights.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              20. Changes to the Service or Terms
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              These Terms can be updated to reflect legal, technical or operational changes. The latest version will display its revision date.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              21. Contact
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Email: {supportConfig.email} — Subject: Terms of Service Enquiry
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>
    </>
  );
}
