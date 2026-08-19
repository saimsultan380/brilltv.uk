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
  title: "IPTV Refund Policy UK – 7-Day Money-Back Guarantee",
  description:
    "Read our IPTV refund policy covering the seven-day guarantee, eligibility requirements, exclusions and information needed to request a refund.",
  keywords: [
    "IPTV Refund Policy UK",
    "IPTV refund guarantee",
    "IPTV 7 day refund",
    "IPTV subscription refund",
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
