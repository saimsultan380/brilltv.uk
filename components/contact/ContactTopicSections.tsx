import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { contactTopics } from "@/lib/contact-topics";

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
            <ScrollReveal delay={index * 0.04}>
              <article className="telvis-glass telvis-contact-topic-panel">
                <div className="telvis-contact-topic-layout">
                  <div className="telvis-contact-topic-aside">
                    <p className="telvis-contact-topic-eyebrow">{topic.eyebrow}</p>
                    <h2
                      id={`contact-topic-${topic.id}`}
                      className="telvis-contact-topic-title"
                    >
                      {topic.title}
                    </h2>
                  </div>

                  <div className="telvis-contact-topic-content">
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
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </>
  );
}
