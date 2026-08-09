import { ChevronDown } from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";

const contactFaqs = [
  {
    question: "Is Support Available Outside Normal UK Business Hours?",
    answer:
      "Yes. Support is available 24 hours a day by email and WhatsApp, although response times can vary.",
  },
  {
    question: "Can Support Install the App for Me?",
    answer:
      "Yes. Support can guide you through installation and login. Keep control of your device and do not share unnecessary passwords or payment details.",
  },
  {
    question: "Where Do I Find My Order Reference?",
    answer:
      "Check the confirmation message sent after your order. If it is missing, contact us using the same email address or WhatsApp number you used to buy.",
  },
  {
    question: "Can I Ask Whether a Particular Device Is Compatible Before Paying?",
    answer:
      "Yes. Send the brand, model and operating system if you know it. Use the free 24-hour trial to check the device before buying.",
  },
  {
    question: "How Should I Report a Missing Listing?",
    answer:
      "Send the exact name, category and time you checked. The catalogue can change, and we cannot promise that a source will be added or restored.",
  },
] as const;

export function ContactFaq() {
  return (
    <section
      className="telvis-section telvis-section-faq"
      aria-labelledby="contact-faq-heading"
    >
      <div className="telvis-section-inner telvis-faq-layout">
        <div className="telvis-faq-intro">
          <SectionHeader
            id="contact-faq-heading"
            eyebrow="FAQ"
            title="Frequently Asked Contact Questions"
          />
        </div>

        <div className="telvis-faq-list">
          {contactFaqs.map((faq, index) => (
            <CardReveal
              key={faq.question}
              as="details"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-faq-item"
            >
              <CardRevealPart as="summary">
                {faq.question}
                <ChevronDown size={18} aria-hidden="true" />
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-faq-answer">
                {faq.answer}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
