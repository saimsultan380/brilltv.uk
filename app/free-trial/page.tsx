import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactOptions } from "@/components/contact/ContactOptions";
import { TrialChecklist, TrialHero } from "@/components/trial/TrialHero";
import { TrialSchema } from "@/components/trial/TrialSchema";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: routes.trial,
  title: "IPTV Free Trial UK – 24-Hour Test & Setup Support",
  description:
    "Request a 24-hour IPTV free trial in the UK or contact support for plan, device, installation, refund and account assistance.",
  keywords: [
    "IPTV Free Trial UK",
    "24-hour IPTV trial",
    "free IPTV test UK",
    "IPTV customer support",
    "IPTV contact UK",
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
