import { BadgeCheck, Scale } from "lucide-react";
import Link from "next/link";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const rows = [
  {
    matter: "Try before paying",
    provides: "A free 24-hour trial on your own supported device",
  },
  {
    matter: "Clear prices",
    provides: "Four plans starting from £9.99",
  },
  {
    matter: "Live and on-demand choice",
    provides:
      "20,000+ listed live channels and 80,000+ listed movies and series",
  },
  {
    matter: "Two ways to sign in",
    provides: "Dedicated app and Xtream Codes for compatible players",
  },
  {
    matter: "Useful viewing features",
    provides: "EPG where available, selected Catch-Up and VPN functionality",
  },
  {
    matter: "Setup help",
    provides: "Installation Guide plus email and WhatsApp support",
  },
  {
    matter: "Screen information",
    provides: "The number of active screens is confirmed before payment",
  },
  {
    matter: "Refund protection",
    provides: "A seven-day guarantee under the published Refund Policy",
  },
] as const;

export function ClaritySection() {
  return (
    <section
      id="clarity"
      className="telvis-section telvis-section-clarity"
      aria-labelledby="clarity-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="clarity-heading"
          eyebrow="Clear details"
          title={
            <>
              Know What You Get <TitleAccent>Before You Pay</TitleAccent>
            </>
          }
          lead="Telvis keeps the main details clear so you can choose without guessing."
        />

        <CardReveal className="telvis-glass telvis-table-wrap">
          <table className="telvis-table">
            <thead>
              <tr>
                <th scope="col">
                  <span className="telvis-table-head">
                    <Scale size={16} aria-hidden="true" />
                    What matters
                  </span>
                </th>
                <th scope="col">
                  <span className="telvis-table-head">
                    <BadgeCheck size={16} aria-hidden="true" />
                    What Telvis provides
                  </span>
                </th>
              </tr>
            </thead>
            <CardRevealList as="tbody">
              {rows.map((row) => (
                <CardRevealListItem as="tr" key={row.matter}>
                  <th scope="row">{row.matter}</th>
                  <td>{row.provides}</td>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </table>
        </CardReveal>

        <CardReveal
          delay={0.1}
          className="telvis-glass telvis-panel telvis-why-panel"
        >
          <CardRevealPart variant="icon">
            <div className="telvis-panel-head">
              <GlassIcon icon={BadgeCheck} />
              <h3 className="telvis-panel-title">Why This Matters</h3>
            </div>
          </CardRevealPart>
          <CardRevealPart variant="content" as="p" className="telvis-info-body">
            You should know the price, supported devices, screen allowance and
            refund conditions before ordering. Test the service first, choose the
            right plan and ask support if anything is unclear.
          </CardRevealPart>
          <CardRevealPart variant="content">
            <Link href={routes.plans} className="telvis-cta-primary">
              Compare Plans and Start with a Trial
            </Link>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
