import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { TitleAccent } from "@/components/ui/SectionHeader";
import { contactTopics } from "@/lib/contact-topics";
import { staggerDelay } from "@/lib/motion";

const topicTitleAccents: Record<string, ReactNode> = {
  trial: (
    <>
      Request a Free <TitleAccent>24-Hour Trial</TitleAccent>
    </>
  ),
  plans: (
    <>
      Ask About a <TitleAccent>Subscription Plan</TitleAccent>
    </>
  ),
  installation: (
    <>
      Get <TitleAccent>Installation</TitleAccent> Help
    </>
  ),
  playback: (
    <>
      Report a <TitleAccent>Playback</TitleAccent> or Content Issue
    </>
  ),
  billing: (
    <>
      <TitleAccent>Billing</TitleAccent> and Refund Requests
    </>
  ),
};

export function ContactTopicSections() {
  return (
    <>
      {contactTopics.map((topic, index) => (
        <section
          key={topic.id}
          id={`contact-${topic.id}`}
          className={`telvis-section telvis-contact-topic${index % 2 === 1 ? " is-alt" : ""}`}
          aria-labelledby={`contact-topic-${topic.id}`}
        >
          <div className="telvis-section-inner">
            <CardReveal
              delay={staggerDelay(index)}
              as="article"
              className="telvis-glass telvis-contact-topic-panel"
            >
              <div className="telvis-contact-topic-layout">
                <CardRevealPart className="telvis-contact-topic-aside">
                  <p className="telvis-contact-topic-eyebrow">{topic.eyebrow}</p>
                    <h2
                      id={`contact-topic-${topic.id}`}
                      className="telvis-contact-topic-title"
                    >
                      {topicTitleAccents[topic.id] ?? topic.title}
                    </h2>
                </CardRevealPart>

                <CardRevealPart className="telvis-contact-topic-content">
                  {topic.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {topic.prices ? (
                    <ul className="telvis-contact-price-list">
                      {topic.list.map((item) => {
                        const [label, price] = item.split(" — ");
                        return (
                          <li key={item}>
                            <span>{label}</span>
                            <strong>{price}</strong>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <ul className="telvis-contact-check-list">
                      {topic.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {topic.closing ? <p>{topic.closing}</p> : null}

                  {topic.cta ? (
                    <Link href={topic.cta.href} className="telvis-contact-topic-link">
                      {topic.cta.label}
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  ) : null}
                </CardRevealPart>
              </div>
            </CardReveal>
          </div>
        </section>
      ))}
    </>
  );
}
