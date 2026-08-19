import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { supportConfig } from "@/lib/site";

export function PrivacyContent() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headingId="privacy-heading"
        titleLines={[
          <>
            IPTV UK <span className="telvis-h1-accent">Privacy Policy</span>
          </>,
        ]}
      >
        <HeroReveal delay={0.22}>
          <div className="telvis-copy">
            <p className="telvis-meta-date">Last updated: 19 August 2026</p>
            <p>
              This Privacy Policy explains how information is collected, used, stored and shared when you visit the website, request a trial, place an order or contact IPTV UK.
            </p>
          </div>
        </HeroReveal>
      </PageHero>

      <section className="telvis-section" aria-labelledby="privacy-details-heading">
        <div className="telvis-section-inner telvis-policy-stack">
          <SectionHeader
            id="privacy-details-heading"
            eyebrow="Data Protection"
            title={
              <>
                How We Protect <TitleAccent>Your Data</TitleAccent>
              </>
            }
          />

          <CardReveal className="telvis-glass telvis-panel" delay={0.02}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              1. Who Controls Your Information?
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              The data controller is the legal seller identified at checkout and in the order confirmation, trading as IPTV UK.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Privacy contact: {supportConfig.email} — Subject: Privacy Request
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.04}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              2. Information We May Collect
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              Contact Information
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Name, Email address, Telephone or WhatsApp number, Country.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              Order Information
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Selected plan, Amount paid, Transaction reference, Activation date, Expiry date, Account status, Connection allowance. Complete card numbers, card security codes, banking passwords and one-time security codes are not stored by us.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              Device and Technical Information &amp; Communications
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Device type, Operating system, Application name, IP address, Browser information, Error messages, Basic connection information. We may retain emails, WhatsApp messages, contact-form submissions, screenshots and support history.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.06}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              3. Why We Use Personal Information &amp; 4. Lawful Bases
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              3. Why We Use Personal Information
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Information may be used to: Process and confirm orders; Activate trials and subscriptions; Deliver login and installation information; Provide customer support; Confirm device compatibility; Prevent fraud and account abuse; Process refund requests; Maintain accounting records; Improve website performance; Send service communications; Send optional marketing where permitted; Respond to legal requests; Protect our legal rights.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              4. Lawful Bases
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Personal information is processed because: It is necessary to perform a contract; It is required to take requested steps before a contract; It is necessary to comply with a legal obligation; We have a legitimate interest in operating and securing the service; or You have provided consent (which you can withdraw at any time).
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.08}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              5. Payments, 6. External Communication &amp; 7. Cookies
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              5. Payments
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Payments may be processed by an independent payment provider under its own privacy policy. We normally receive a transaction reference, payment status and limited billing information rather than complete card details.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              6. WhatsApp and External Communication Services
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              If you contact us through WhatsApp or another external platform, that provider may process profile, device and communication information under its own terms. Do not send sensitive payment credentials through messaging services.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              7. Cookies and Analytics
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Essential cookies support website security, contact forms, checkout, session management and core functions. Visitors can reject non-essential cookies as easily as they can accept them.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.1}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              8. Sharing, 9. Transfers &amp; 10. Data Retention
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              8. Who We May Share Information With
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Information may be shared with trusted providers involved in hosting, infrastructure, payments, email/messaging, support, security and legal compliance. We do not sell personal information.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              9. International Transfers &amp; 10. How Long We Keep Information
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Where data is transferred outside the UK, approved transfer mechanisms are used. Typical retention periods: Order and transaction records up to 6 years; Support communications up to 2 years; Abuse prevention records as reasonably necessary; Technical/security logs up to 12 months; Marketing data until consent is withdrawn.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.12}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              11. Security, 12. Your Rights &amp; 13-18. General Privacy Details
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              12. Your Privacy Rights &amp; Right to Object
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              You may have the right to request access, correction, deletion, restriction, or portability of your data, or to object to processing (including direct marketing).
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              14. Making a Privacy Request &amp; Contact
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Email {supportConfig.email} using the subject Privacy Request. UK residents may also complain to the Information Commissioner’s Office (ICO).
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>
    </>
  );
}
