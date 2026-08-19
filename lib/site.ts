export const siteConfig = {
  name: "Brill TV UK",
  url: "https://brilltv.uk",
  primaryKeyword: "Brill TV UK",
  title:
    "Brill TV UK – 20,000+ Channels, Plans from £9.99 & Free Trial",
  description:
    "Choose a Brill TV UK subscription from £9.99 with 20,000+ listed live channels, 80,000+ movies and series, VPN, EPG, selected Catch-Up and setup support.",
  h1: "Brill TV UK – 20,000+ Live Channels, Sports, Movies & Series",
} as const;

export const routes = {
  home: "/",
  trial: "/free-trial",
  plans: "/iptv-subscription",
  installation: "/installation-guide",
  reviews: "/reviews",
  contact: "/free-trial",
  devices: "/supported-devices",
  about: "/about-us",
  terms: "/terms-of-service",
  privacy: "/privacy-policy",
  refund: "/refund-policy",
  dmca: "/dmca-policy",
} as const;

export const supportConfig = {
  email: "support@brilltv.uk",
  copyrightEmail: "copyright@brilltv.uk",
  whatsapp: "+44 7482 794475",
  whatsappUrl: "https://wa.me/447482794475",
  downloaderCode: "BRILLIPTV",
} as const;

export function getWhatsAppLink(customMessage?: string) {
  const websiteName = "Brill Tv Uk";
  const message = customMessage
    ? `Hello ${websiteName}! ${customMessage}`
    : `Hello ${websiteName}! I have a question regarding subscription support.`;
  return `https://wa.me/447482794475?text=${encodeURIComponent(message)}`;
}

/** Optimized brand assets served from /public. */
export const brandAssets = {
  logo512: "/logo-512.png",
  ogImage: "/og-image.png",
  favicon48: "/favicon-48.png",
  appleTouchIcon: "/apple-touch-icon.png",
  manifest: "/site.webmanifest",
} as const;

export const navLinks = [
  { href: routes.home, label: "Home" },
  { href: routes.plans, label: "Plans" },
  { href: routes.installation, label: "Installation Guide" },
  { href: routes.devices, label: "Supported Devices" },
  { href: routes.reviews, label: "Reviews" },
  { href: routes.contact, label: "Free Trial" },
] as const;

export const footerQuickLinks = [
  { href: routes.trial, label: "Start Free Trial" },
  { href: routes.plans, label: "View Plans" },
  { href: routes.devices, label: "Supported Devices" },
  { href: routes.about, label: "About Us" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const footerLegalLinks = [
  { href: routes.terms, label: "Terms of Service" },
  { href: routes.privacy, label: "Privacy Policy" },
  { href: routes.refund, label: "Refund Policy" },
  { href: routes.dmca, label: "DMCA Policy" },
] as const;
