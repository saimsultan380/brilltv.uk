import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { reviewSubmitChecklist } from "@/lib/reviews-data";
import { routes, supportConfig } from "@/lib/site";

export function ReviewsSubmit() {
  return (
    <section
      className="telvis-section telvis-reviews-submit"
      aria-labelledby="reviews-submit-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-review-submit-panel">
          <CardRevealPart>
            <SectionHeader
              id="reviews-submit-heading"
              eyebrow="Share feedback"
              title={
                <>
                  Submit Your <TitleAccent>IPTV UK</TitleAccent> Review
                </>
              }
              lead="Already used the service? Send an honest review covering:"
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
            <ul className="telvis-contact-check-list">
              {reviewSubmitChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardRevealPart>

          <CardRevealPart>
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
                  {supportConfig.whatsapp}
                </a>
              </p>
            </div>
          </CardRevealPart>

          <CardRevealPart as="p" className="telvis-review-submit-note">
            Never include your password, full server address, payment
            information or other private account details in a review.
          </CardRevealPart>

          <CardRevealPart>
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
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
