import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
          title="Contact Options"
          lead="Support is available 24/7. Replies may take longer during busy periods or when a problem needs more checking."
        />

        <div className="telvis-contact-grid">
          <ScrollReveal>
            <article className="telvis-glass telvis-contact-card">
              <h3 className="telvis-info-title">WhatsApp Support</h3>
              <p className="telvis-info-body">
                Use WhatsApp for quick questions, screenshots and step-by-step
                setup help.
              </p>
              <p className="telvis-contact-detail">
                WhatsApp:{" "}
                <a href={supportConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Open chat
                </a>
              </p>
              <a
                href={supportConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="telvis-cta-primary telvis-contact-cta"
              >
                Message IPTV UK on WhatsApp
              </a>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <article className="telvis-glass telvis-contact-card">
              <h3 className="telvis-info-title">Email Support</h3>
              <p className="telvis-info-body">
                Use email for billing questions, refund requests or a problem that
                needs a longer explanation.
              </p>
              <p className="telvis-contact-detail">
                Email:{" "}
                <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>
              </p>
              <a
                href={`mailto:${supportConfig.email}`}
                className="telvis-cta-outline telvis-contact-cta"
              >
                Email Support
              </a>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
