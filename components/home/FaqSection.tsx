import { ChevronDown } from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";

const faqs = [
  {
    question: "What is IPTV UK?",
    answer:
      "IPTV uses an internet connection and compatible application to provide access to listed live television and on-demand categories.",
  },
  {
    question: "How many live channels are included?",
    answer:
      "The catalogue contains more than 20,000 listed live channels across UK and international categories. Individual listings can change.",
  },
  {
    question: "How many movies and series are available?",
    answer:
      "The on-demand catalogue contains more than 80,000 listed movies and series.",
  },
  {
    question: "Can I test the service before buying?",
    answer:
      "Yes. Request a free 24-hour trial and test it on the device and connection you normally use.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Compatible devices include Fire TV, Android TV, Google TV, Smart TVs, Apple devices, Android mobile devices, Windows, Mac, Formuler and selected portal boxes.",
  },
  {
    question: "Does every listing include EPG and Catch-Up?",
    answer:
      "No. EPG information and Catch-Up are available only where supported.",
  },
  {
    question: "Is everything available in 4K?",
    answer:
      "No. HD, Full HD and selected 4K sources are available depending on the individual listing.",
  },
  {
    question: "Does my subscription renew automatically?",
    answer:
      "No. You choose whether to purchase another duration after your current plan expires.",
  },
  {
    question: "Can I use my existing IPTV player?",
    answer:
      "Yes, if the application supports the login format supplied with your account.",
  },
  {
    question: "What if I need help installing it?",
    answer:
      "Follow the Installation Guide or contact support with your device model, application name and exact error.",
  },
] as const;

export function FaqSection() {
  return (
    <section
      id="faq"
      className="telvis-section telvis-section-faq"
      aria-labelledby="faq-heading"
    >
      <div className="telvis-section-inner telvis-faq-layout">
        <div className="telvis-faq-intro">
          <SectionHeader
            id="faq-heading"
            eyebrow="FAQ"
            title={
              <>
                Frequently Asked Questions About{" "}
                <TitleAccent>IPTV UK</TitleAccent>
              </>
            }
          />
        </div>

        <div className="telvis-faq-list">
          {faqs.map((faq, index) => (
            <CardReveal
              key={faq.question}
              as="details"
              delay={staggerDelay(index, 0.05)}
              className="telvis-glass telvis-faq-item"
            >
              <CardRevealPart as="summary" variant="content">
                <span>{faq.question}</span>
                <ChevronDown
                  className="telvis-faq-chevron"
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </CardRevealPart>
              <CardRevealPart as="p" variant="content">
                {faq.answer}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
