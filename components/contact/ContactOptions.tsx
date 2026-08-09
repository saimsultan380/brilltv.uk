import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { supportConfig } from "@/lib/site";

export function ContactOptions() {
  return (
    <section
      className="telvis-section telvis-contact-options"
      aria-labelledby="contact-options-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="contact-options-heading"
          eyebrow="Get in touch"
          title={
            <>
              Contact <TitleAccent>Options</TitleAccent>
            </>
          }
          lead="Support is available 24/7. Replies may take longer during busy periods or when a problem needs more checking."
        />

        <div className="telvis-contact-grid">
          <CardReveal as="article" className="telvis-glass telvis-contact-card">
            <CardRevealPart as="h3" className="telvis-info-title">
              WhatsApp Support
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Use WhatsApp for quick questions, screenshots and step-by-step
              setup help.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-contact-detail">
              WhatsApp:{" "}
              <a href={supportConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Open chat
              </a>
            </CardRevealPart>
            <CardRevealPart>
              <a
                href={supportConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="telvis-cta-primary telvis-contact-cta"
              >
                Message IPTV UK on WhatsApp
              </a>
            </CardRevealPart>
          </CardReveal>

          <CardReveal delay={0.08} as="article" className="telvis-glass telvis-contact-card">
            <CardRevealPart as="h3" className="telvis-info-title">
              Email Support
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Use email for billing questions, refund requests or a problem that
              needs a longer explanation.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-contact-detail">
              Email:{" "}
              <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>
            </CardRevealPart>
            <CardRevealPart>
              <a
                href={`mailto:${supportConfig.email}`}
                className="telvis-cta-outline telvis-contact-cta"
              >
                Email Support
              </a>
            </CardRevealPart>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}
