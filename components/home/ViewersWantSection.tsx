import {
  CircleHelp,
  MonitorCheck,
  Receipt,
  ShieldCheck,
  TvMinimalPlay,
  Wrench,
} from "lucide-react";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";

const questions = [
  { text: "Will it work on my device?", icon: MonitorCheck },
  { text: "Can I test it before paying?", icon: ShieldCheck },
  { text: "Are my preferred categories available?", icon: TvMinimalPlay },
  { text: "How many screens can watch at once?", icon: CircleHelp },
  { text: "Who helps me if setup fails?", icon: Wrench },
  { text: "What is the refund process?", icon: Receipt },
] as const;

export function ViewersWantSection() {
  return (
    <section
      id="viewers"
      className="telvis-section telvis-section-viewers"
      aria-labelledby="viewers-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="viewers-heading"
          eyebrow="Before you buy"
          title={
            <>
              What UK Viewers Usually Want to Know{" "}
              <TitleAccent>Before Buying</TitleAccent>
            </>
          }
          lead="Customers do not choose an IPTV UK subscription from catalogue numbers alone. They want quick answers:"
          align="center"
        />

        <ul className="telvis-question-cloud">
          {questions.map((question, index) => {
            const Icon = question.icon;
            return (
              <CardReveal
                key={question.text}
                as="li"
                delay={staggerDelay(index, 0.06)}
                className="telvis-glass telvis-question-chip"
              >
                <CardRevealPart variant="icon" as="span">
                  <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                </CardRevealPart>
                <CardRevealPart variant="content" as="span">
                  {question.text}
                </CardRevealPart>
              </CardReveal>
            );
          })}
        </ul>

        <ScrollReveal delay={0.1} variant="text">
          <p className="telvis-section-lead is-center">
          Telvis answers these questions before checkout through the free trial,
          plan details, Installation Guide and direct support.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
