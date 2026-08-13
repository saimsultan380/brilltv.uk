import type { Metadata } from "next";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactTopicSections } from "@/components/contact/ContactTopicSections";
import { ContactOptions } from "@/components/contact/ContactOptions";
import {
  ContactFinalCta,
  ContactSchema,
} from "@/components/contact/ContactSchema";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: routes.contact,
  title: "Contact IPTV UK – Sales, Setup & Account Support",
  description:
    "Contact IPTV UK for trial access, plan questions, installation help, account support and troubleshooting by email or WhatsApp, 24 hours a day.",
  keywords: [
    "contact IPTV UK",
    "IPTV support UK",
    "IPTV installation help",
    "IPTV subscription support",
  ],
});

export default function ContactPage() {
  return (
    <>
      <ContactSchema />
      <main>
        <ContactHero />
        <ContactOptions />
        <ContactTopicSections />
        <ContactForm />
        <ContactFaq />
        <ContactFinalCta />
      </main>
    </>
  );
}
