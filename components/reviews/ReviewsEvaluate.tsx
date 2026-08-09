import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { reviewEvaluationTopics } from "@/lib/reviews-data";
import { staggerDelay } from "@/lib/motion";

export function ReviewsEvaluate() {
  return (
    <section
      className="telvis-section telvis-reviews-evaluate"
      aria-labelledby="reviews-evaluate-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reviews-evaluate-heading"
          eyebrow="What to look for"
          title={
            <>
              What Customers Commonly <TitleAccent>Evaluate</TitleAccent>
            </>
          }
          align="center"
        />

        <div className="telvis-review-evaluate-grid">
          {reviewEvaluationTopics.map((topic, index) => (
            <CardReveal
              key={topic.id}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-review-evaluate-card"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {topic.title}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {topic.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
