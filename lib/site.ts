export const siteConfig = {
  name: "Telvis",
  url: "https://telvis.uk",
  primaryKeyword: "IPTV UK",
  title: "IPTV UK Subscription from £9.99 & Free Trial | Telvis",
  description:
    "Compare IPTV UK plans from £9.99 with 20,000+ listed live channels, 80,000+ movies and series, a free 24-hour trial and guided setup.",
  h1: "IPTV UK Subscription for Live TV, Movies and Series",
} as const;

export const routes = {
  home: "/",
  trial: "/free-trial",
  plans: "/#plans",
  installation: "/installation-guide",
  reviews: "/reviews",
  contact: "/contact",
  refund: "/refund-policy",
} as const;

export const supportConfig = {
  email: "support@telvis.uk",
  whatsappUrl: "https://wa.me/440000000000",
  downloaderCode: "TELVIS",
} as const;

export const navLinks = [
  { href: routes.home, label: "Home" },
  { href: routes.installation, label: "Installation Guide" },
  { href: routes.reviews, label: "Reviews" },
  { href: routes.contact, label: "Contact Us" },
] as const;

export const footerQuickLinks = [
  { href: routes.plans, label: "View Plans" },
  { href: routes.trial, label: "Start Free Trial" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const footerLegalLinks = [
  { href: routes.refund, label: "Refund Policy" },
] as const;
