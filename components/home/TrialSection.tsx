import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const checklist = [
  "The app installs and your login works",
  "Live, movie and series categories load correctly",
  "The channels and categories important to you are listed",
  "Picture and sound work well on your home connection",
  "Navigation, EPG and selected Catch-Up meet your needs",
  "Performance is suitable at the time you normally watch",
  "The plan includes enough screens for your household",
] as const;

export function TrialSection() {
  return (
    <section
      id="trial"
      className="telvis-section telvis-section-trial"
      aria-labelledby="trial-heading"
    >
      <div className="telvis-section-inner">
        <div className="telvis-split">
          <div className="telvis-split-copy">
            <SectionHeader
              id="trial-heading"
              eyebrow="Free Trial"
              title={
                <>
                  Try <TitleAccent>IPTV UK</TitleAccent> Free for{" "}
                  <TitleAccent>24 Hours</TitleAccent> Before Choosing a Plan
                </>
              }
              lead="A useful trial should answer your main questions before you pay. Test the 24-hour IPTV UK trial on the device and internet connection you normally use."
            />
          </div>

          <CardReveal delay={0.1} className="telvis-glass telvis-panel">
            <CardRevealPart variant="content" as="h3" className="telvis-panel-title">
              During the IPTV UK trial, check:
            </CardRevealPart>
            <CardRevealList className="telvis-check-list">
              {checklist.map((item) => (
                <CardRevealListItem key={item}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </CardRevealListItem>
              ))}
            </CardRevealList>
            <CardRevealPart variant="content" as="p" className="telvis-info-body">
              If something does not work, contact support during the trial. We
              can check your login, app, device and connection before you choose
              a paid plan.
            </CardRevealPart>
            <CardRevealPart variant="content">
              <Link href={routes.trial} className="telvis-cta-primary">
                Request a 24-Hour Trial
              </Link>
            </CardRevealPart>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}
