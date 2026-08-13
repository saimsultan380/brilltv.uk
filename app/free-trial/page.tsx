import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactOptions } from "@/components/contact/ContactOptions";
import { TrialChecklist, TrialHero } from "@/components/trial/TrialHero";
import { TrialSchema } from "@/components/trial/TrialSchema";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: routes.trial,
  title: "Free IPTV UK Trial – 24 Hours on Your Device",
  description:
    "Request a free 24-hour IPTV UK trial. Test live TV, movies and series on your Firestick, Smart TV or mobile before choosing a Telvis plan.",
  keywords: [
    "IPTV UK free trial",
    "24 hour IPTV trial",
    "IPTV trial UK",
    "try IPTV before buying",
  ],
});

export default function FreeTrialPage() {
  return (
    <>
      <TrialSchema />
      <main>
        <TrialHero />
        <TrialChecklist />
        <ContactOptions />
        <ContactForm />
      </main>
    </>
  );
}
