import { buildBreadcrumbList, canonicalUrl, organizationLogoSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const homeUrl = canonicalUrl("/");

const organization = {
  "@type": "Organization",
  "@id": `${homeUrl}#organization`,
  name: siteConfig.name,
  url: homeUrl,
  logo: organizationLogoSchema(),
};

const website = {
  "@type": "WebSite",
  "@id": `${homeUrl}#website`,
  url: homeUrl,
  name: siteConfig.name,
  publisher: { "@id": `${homeUrl}#organization` },
  inLanguage: "en-GB",
};

const products = [
  {
    name: "Telvis IPTV UK 1-Month Plan",
    sku: "telvis-1-month",
    price: "9.99",
  },
  {
    name: "Telvis IPTV UK 3-Month Plan",
    sku: "telvis-3-month",
    price: "24.99",
  },
  {
    name: "Telvis IPTV UK 6-Month Plan",
    sku: "telvis-6-month",
    price: "39.99",
  },
  {
    name: "Telvis IPTV UK 12-Month Plan",
    sku: "telvis-12-month",
    price: "49.99",
  },
].map((plan) => ({
  "@type": "Product",
  name: plan.name,
  sku: plan.sku,
  brand: {
    "@type": "Brand",
    name: siteConfig.name,
  },
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    url: `${homeUrl}#plans`,
    priceCurrency: "GBP",
    price: plan.price,
    availability: "https://schema.org/InStock",
    seller: { "@id": `${homeUrl}#organization` },
  },
}));

const faqEntities = [
  {
    question: "What is IPTV?",
    answer:
      "IPTV means television delivered through an internet connection instead of an aerial, cable or satellite feed. A compatible app organises the live and on-demand content supplied through your account.",
  },
  {
    question: "How much does IPTV UK cost?",
    answer:
      "Plans cost £9.99 for one month, £24.99 for three months, £39.99 for six months and £49.99 for twelve months. You can test compatibility with the free 24-hour trial first.",
  },
  {
    question: "What do I receive after ordering?",
    answer:
      "You receive the username, password, server information and setup guidance needed for the dedicated app or a compatible Xtream Codes player.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Supported options include many Firestick, Fire TV, Android TV, Google TV, Smart TV, Apple, Android mobile, Windows and Mac devices. The correct app depends on your model and operating system.",
  },
  {
    question: "Is a player app included?",
    answer:
      "The dedicated app is available on supported devices. Some third-party players charge their own activation or licence fee, so check before installing one.",
  },
  {
    question: "Can I watch on more than one device?",
    answer:
      "You can install the account on compatible devices, but the number of screens playing at once depends on your plan. Confirm this before paying.",
  },
  {
    question: "Is every channel available in Catch-Up?",
    answer:
      "No. Catch-Up works only on selected listings and for a limited period. EPG information can also vary.",
  },
  {
    question: "Is 4K guaranteed?",
    answer:
      "No. Available quality depends on the listing, device, player, television and internet connection.",
  },
  {
    question: "What can cause buffering?",
    answer:
      "Common causes include weak Wi-Fi, busy home internet, low device storage, an outdated app or a temporary issue with one listing. Follow the Installation Guide before contacting support.",
  },
  {
    question: "How does the seven-day refund guarantee work?",
    answer:
      "Contact support within seven days and include your order details and reason. Eligibility depends on the conditions in the published Refund Policy.",
  },
  {
    question: "Is IPTV legal in the UK?",
    answer:
      "IPTV is a delivery technology. Legality depends on the rights and permissions held for the content. The service should offer only content it is authorised to distribute, and customers must follow applicable law.",
  },
].map((faq) => ({
  "@type": "Question",
  name: faq.question,
  acceptedAnswer: {
    "@type": "Answer",
    text: faq.answer,
  },
}));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbList([{ name: "Home", path: "/" }]),
    organization,
    website,
    ...products,
    {
      "@type": "FAQPage",
      "@id": `${homeUrl}#faq`,
      mainEntity: faqEntities,
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
