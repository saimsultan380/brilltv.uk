import Link from "next/link";
import { routes, siteConfig, supportConfig } from "@/lib/site";

export function InstallationGuideSchema() {
  const pageUrl = `${siteConfig.url}${routes.installation}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "IPTV UK Installation Guide",
            item: pageUrl,
          },
        ],
      },
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
        <div className="telvis-glass telvis-guide-support-card">
          <h2 id="installation-support-heading" className="telvis-guide-panel-title">
            Still Need Help?
          </h2>
          <p>
            Support is available 24 hours a day for installation and account
            troubleshooting.
          </p>
          <div className="telvis-guide-support-links">
            <a href={supportConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp support
            </a>
            <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>
          </div>
          <div className="telvis-actions telvis-guide-support-cta">
            <Link href={routes.contact} className="telvis-cta-primary">
              Contact Installation Support
            </Link>
          </div>
          <p className="telvis-section-note">
            <Link href={routes.plans}>Compare IPTV UK plans</Link>
            {" • "}
            <Link href={routes.reviews}>Read customer reviews</Link>
            {" • "}
            <Link href={routes.contact}>Contact support</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
