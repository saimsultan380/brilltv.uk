import {
  Clapperboard,
  Globe2,
  MonitorPlay,
  Sparkles,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const categories = [
  {
    title: "UK Entertainment and Everyday Television",
    body: "Browse available entertainment, news, documentaries, lifestyle, music and family categories. Listings can change, so use the free trial to check the channels important to you.",
    icon: MonitorPlay,
    wide: true,
  },
  {
    title: "Live Sport and Event Categories",
    body: "Explore available football, cricket, rugby, motorsport, boxing, combat sport, tennis, golf and basketball categories. Events and listings vary, so check your preferred sport during the trial.",
    icon: Trophy,
    wide: false,
  },
  {
    title: "Movies, Series and Complete Seasons",
    body: "Search movies and series by title, genre, season or episode where that information is available. Categories include action, drama, comedy, crime, thriller, documentaries, family viewing and international entertainment.",
    icon: Clapperboard,
    wide: false,
  },
  {
    title: "International and Multi-Language Categories",
    body: "Browse available regional and language categories alongside the main UK selection. Ask support during the trial if you need a particular country or language.",
    icon: Globe2,
    wide: false,
  },
  {
    title: "HD, Full HD and Selected 4K Sources",
    body: "Available quality depends on the individual listing. Your television, device, player and internet connection also affect the picture you receive.",
    icon: Sparkles,
    wide: false,
  },
] as const;

export function CatalogueSection() {
  return (
    <section
      id="catalogue"
      className="telvis-section telvis-section-catalogue"
      aria-labelledby="catalogue-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="catalogue-heading"
          eyebrow="Browse the catalogue"
          title={
            <>
              UK Entertainment, <TitleAccent>Live Sport, Movies and Series</TitleAccent>{" "}
              in One Place
            </>
          }
          lead="Big catalogue numbers matter only when you can find what you enjoy. Telvis organises live and on-demand listings into clear categories, making the service easier to browse."
        />

        <div className="telvis-bento">
          {categories.map((item, index) => (
            <CardReveal
              key={item.title}
              as="article"
              delay={staggerDelay(index)}
              className={`telvis-glass telvis-bento-card${item.wide ? " is-wide" : ""}`}
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={item.icon} />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {item.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {item.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="telvis-inline-actions">
          <Link href={routes.trial} className="telvis-cta-primary">
            Start Your Free 24-Hour Trial
          </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
