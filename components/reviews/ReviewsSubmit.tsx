import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { reviewSubmitChecklist } from "@/lib/reviews-data";
import { routes, supportConfig } from "@/lib/site";

export function ReviewsSubmit() {
  return (
    <section
      className="telvis-section telvis-reviews-submit"
      aria-labelledby="reviews-submit-heading"
    >
      <div className="telvis-section-inner">
        <ScrollReveal>
          <div className="telvis-glass telvis-review-submit-panel">
            <SectionHeader
              id="reviews-submit-heading"
              eyebrow="Share feedback"
              title="Submit Your IPTV UK Review"
              lead="Already used the service? Send an honest review covering:"
            />

            <ul className="telvis-contact-check-list">
              {reviewSubmitChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="telvis-review-submit-contact">
              <p>
                Email:{" "}
                <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href={supportConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open chat
                </a>
              </p>
            </div>

            <p className="telvis-review-submit-note">
              Never include your password, full server address, payment
              information or other private account details in a review.
            </p>

            <div className="telvis-actions">
              <a
                href={`mailto:${supportConfig.email}?subject=IPTV%20UK%20Customer%20Review`}
                className="telvis-cta-primary"
              >
                Email Your Review
              </a>
              <Link href={routes.contact} className="telvis-cta-outline">
                Contact Support
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
