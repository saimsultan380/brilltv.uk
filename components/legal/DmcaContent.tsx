import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { supportConfig } from "@/lib/site";

export function DmcaContent() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headingId="dmca-heading"
        titleLines={[
          <>
            IPTV UK <span className="telvis-h1-accent">DMCA and Copyright Policy</span>
          </>,
        ]}
      >
        <HeroReveal delay={0.22}>
          <div className="telvis-copy">
            <p className="telvis-meta-date">Last updated: 19 August 2026</p>
            <p>
              We respect copyright and other intellectual-property rights.
            </p>
            <p>
              Rights owners and authorised representatives can use this procedure to report website material they believe infringes their rights.
            </p>
          </div>
        </HeroReveal>
      </PageHero>

      <section className="telvis-section" aria-labelledby="dmca-details-heading">
        <div className="telvis-section-inner telvis-policy-stack">
          <SectionHeader
            id="dmca-details-heading"
            eyebrow="Copyright Policy"
            title={
              <>
                Copyright <TitleAccent>Notice Procedure</TitleAccent>
              </>
            }
          />

          <CardReveal className="telvis-glass telvis-panel" delay={0.02}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              Submitting a Copyright Notice
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              A complete notice should include:
            </CardRevealPart>
            <CardRevealPart>
              <ul className="telvis-check-list">
                <li>The physical or electronic signature of the copyright owner or authorised representative.</li>
                <li>Identification of the copyrighted work claimed to have been infringed.</li>
                <li>The exact URL or precise location of the material in question.</li>
                <li>Information reasonably sufficient to identify and locate the material.</li>
                <li>The complainant’s full name, organisation, postal address, telephone number and email address.</li>
                <li>A statement that the complainant has a good-faith belief that the disputed use is not authorised.</li>
                <li>A statement that the information is accurate.</li>
                <li>Confirmation that the complainant owns the rights or is authorised to act.</li>
                <li>Any legally required declaration.</li>
              </ul>
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Send notices to: Email: {supportConfig.copyrightEmail} — Subject: Copyright or DMCA Notice
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              A general reference to the homepage or complete website may not provide enough information to locate the material.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.04}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              What Happens After a Notice Is Received?
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              We may: Confirm receipt; Check whether the notice contains sufficient information; Request missing details; Investigate the identified material; Remove or restrict access where appropriate; Notify the affected party; Preserve relevant records; Take further action required by law.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Removing or restricting material does not necessarily constitute an admission of infringement.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.06}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              Counter-Notification
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              A person who believes material was removed because of mistake or misidentification may submit a counter-notification containing:
            </CardRevealPart>
            <CardRevealPart>
              <ul className="telvis-check-list">
                <li>A physical or electronic signature.</li>
                <li>Identification of the removed material.</li>
                <li>Its previous location.</li>
                <li>An explanation of the mistake or misidentification.</li>
                <li>Full contact information.</li>
                <li>Any consent-to-jurisdiction or service-of-process statements required by applicable law.</li>
              </ul>
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Send the counter-notification to {supportConfig.copyrightEmail} with the subject Copyright Counter-Notification.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.08}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              Repeated Infringement, False Notices &amp; Trademarks
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              Repeated Infringement
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Accounts or suppliers associated with repeated or serious infringement may be suspended or terminated where appropriate.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              False or Misleading Notices
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Knowingly submitting false information may create legal liability. Only submit a complaint if you own the relevant rights, are authorised to act for the owner or have another valid legal basis.
            </CardRevealPart>
            <CardRevealPart as="h3" className="telvis-info-title">
              Third-Party Trademarks
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Application, device and company names belong to their respective owners. Compatibility references do not imply affiliation, sponsorship or endorsement.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.1}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              General Customer Support
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              The copyright address should not be used for installation, billing or account questions. Send general support requests to {supportConfig.email}.
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>
    </>
  );
}
