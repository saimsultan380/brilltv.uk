import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { buildBreadcrumbList, canonicalUrl } from "@/lib/seo";
import { routes, siteConfig, supportConfig } from "@/lib/site";

export function InstallationGuideSchema() {
  const pageUrl = canonicalUrl(routes.installation);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "IPTV UK Installation Guide", path: routes.installation },
      ]),
      {
        "@type": "HowTo",
        name: "Firestick and Fire TV Setup with the Dedicated App",
        description:
          "Install the Telvis dedicated app on Firestick or Fire TV using Downloader and your account credentials.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Install Downloader",
            text: "From the Fire TV home screen, search for Downloader and install the recognised orange Downloader application.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Allow installation",
            text: "Open Fire TV settings and allow Downloader to install apps from unknown sources where required.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Enter the downloader code",
            text: `Open Downloader and enter code ${supportConfig.downloaderCode}, then confirm the download belongs to Telvis.`,
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Download and install",
            text: "Start the download, install the app and open it once installation completes.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Sign in",
            text: "Enter the username, password and server information from your welcome message exactly as supplied.",
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: "Allow the first load to finish",
            text: "Keep the app open until live, movie, series and EPG data finish loading on first sign-in.",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function InstallationGuideSupport() {
  return (
    <section
      className="telvis-section telvis-guide-support"
      aria-labelledby="installation-support-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-guide-support-card">
          <CardRevealPart as="h2" id="installation-support-heading" className="telvis-guide-panel-title">
            Still Need Help?
          </CardRevealPart>
          <CardRevealPart as="p">
            Support is available 24 hours a day for installation and account
            troubleshooting.
          </CardRevealPart>
          <CardRevealPart>
            <div className="telvis-guide-support-links">
              <a href={supportConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp support
              </a>
              <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>
            </div>
          </CardRevealPart>
          <CardRevealPart>
            <div className="telvis-actions telvis-guide-support-cta">
              <Link href={routes.contact} className="telvis-cta-primary">
                Contact Installation Support
              </Link>
            </div>
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-section-note">
            <Link href={routes.plans}>Compare IPTV UK plans</Link>
            {" • "}
            <Link href={routes.reviews}>Read customer reviews</Link>
            {" • "}
            <Link href={routes.contact}>Contact support</Link>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
