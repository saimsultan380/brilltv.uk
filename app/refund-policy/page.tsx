import type { Metadata } from "next";
import {
  RefundPolicyContent,
  RefundPolicyHero,
  RefundPolicySchema,
} from "@/components/legal/RefundPolicyContent";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: routes.refund,
  title: "IPTV UK Refund Policy – Seven-Day Guarantee",
  description:
    "Read the Telvis IPTV UK seven-day refund guarantee, how to request a refund, and what information support needs to review an eligible paid order.",
  keywords: [
    "IPTV UK refund policy",
    "Telvis refund",
    "IPTV subscription refund UK",
  ],
});

export default function RefundPolicyPage() {
  return (
    <>
      <RefundPolicySchema />
      <main>
        <RefundPolicyHero />
        <RefundPolicyContent />
      </main>
    </>
  );
}
