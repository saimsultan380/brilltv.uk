import {
  KeyRound,
  MousePointerClick,
  PlayCircle,
  Smartphone,
} from "lucide-react";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "1",
    title: "Choose Your Plan or Free Trial",
    body: "Start with the free trial or choose one, three, six or twelve months. Longer plans have a lower average monthly cost.",
    icon: MousePointerClick,
  },
  {
    number: "2",
    title: "Tell Us Your Device",
    body: "Let us know whether you use a Firestick, Smart TV, Android device, Apple device, phone, tablet or computer. This helps us give you the correct setup method.",
    icon: Smartphone,
  },
  {
    number: "3",
    title: "Receive Your Login and Instructions",
    body: "After your IPTV UK order is confirmed, you receive the account details and installation instructions needed for the dedicated app or a compatible player. Keep your login private.",
    icon: KeyRound,
  },
  {
    number: "4",
    title: "Install, Sign In and Start Watching",
    body: "Follow the guide, enter your details and allow the categories to load. If you become stuck, send support your device model, app name and exact error.",
    icon: PlayCircle,
  },
] as const;

export function StepsSection() {
  return (
    <section
      id="steps"
      className="telvis-section telvis-section-steps"
      aria-labelledby="steps-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="steps-heading"
          eyebrow="Getting started"
          title={
            <>
              How to Start Your <TitleAccent>IPTV UK</TitleAccent> Subscription in
              Four Simple Steps
            </>
          }
          align="center"
        />

        <ol className="telvis-steps">
          {steps.map((step, index) => (
            <CardReveal
              key={step.number}
              as="li"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-step-card"
            >
              <CardRevealPart variant="icon">
                <div className="telvis-step-top">
                  <GlassIcon icon={step.icon} />
                  <span className="telvis-step-number" aria-hidden="true">
                    {step.number}
                  </span>
                </div>
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {step.number}. {step.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {step.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
