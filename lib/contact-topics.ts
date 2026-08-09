import { routes } from "@/lib/site";

export type ContactTopic = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  list: string[];
  closing?: string;
  cta?: { href: string; label: string };
  prices?: boolean;
};

export const contactTopics: ContactTopic[] = [
  {
    id: "trial",
    eyebrow: "Free trial",
    title: "Request a Free 24-Hour Trial",
    paragraphs: ["Want to test the service first? Send us:"],
    list: [
      "Your device type and model",
      "The country where you will use the service",
      "Whether you prefer the dedicated app or an Xtream Codes player",
      "The approximate time you plan to test",
      "How many screens you want to test",
    ],
    closing:
      "Use the trial on your normal internet connection and main viewing device. This is the easiest way to check compatibility and everyday performance before buying.",
  },
  {
    id: "plans",
    eyebrow: "Plans",
    title: "Ask About a Subscription Plan",
    paragraphs: ["Current plan prices are:"],
    list: [
      "1 month — £9.99",
      "3 months — £24.99",
      "6 months — £39.99",
      "12 months — £49.99",
    ],
    closing:
      "Not sure which plan to choose? Tell us whether you have used the trial and how many screens you need. We will confirm the available connection allowance before you pay.",
    prices: true,
  },
  {
    id: "installation",
    eyebrow: "Setup help",
    title: "Get Installation Help",
    paragraphs: ["If you are stuck during setup, send:"],
    list: [
      "Device brand and model",
      "App or player name",
      "The step where you got stuck",
      "Exact error message",
      "Screenshot where helpful",
      "Whether the trial or account works on another device",
    ],
    closing:
      "Never send full card details. Do not share your password in a public post or group chat.",
    cta: { href: routes.installation, label: "Open the Installation Guide" },
  },
  {
    id: "playback",
    eyebrow: "Playback",
    title: "Report a Playback or Content Issue",
    paragraphs: [
      "Tell us whether the problem affects one listing, one category or everything. Include the listing name, the time, your device and whether other content still works.",
      "For buffering, also tell us:",
    ],
    list: [
      "Whether you use Ethernet or Wi-Fi",
      "The internet speed shown on the affected device",
      "Whether other downloads or streams were active",
      "Whether restarting the router and device changed anything",
    ],
    closing:
      "These details help us see whether the issue is with one source, your device or your home network.",
  },
  {
    id: "billing",
    eyebrow: "Billing",
    title: "Billing and Refund Requests",
    paragraphs: [
      "Eligible purchases have a seven-day refund guarantee under the published Refund Policy. Contact support within the stated period and send:",
    ],
    list: [
      "Customer name used for the order",
      "Order reference",
      "Purchase date",
      "Subscription duration",
      "Reason for the request",
      "Any troubleshooting already tried",
    ],
    closing:
      "We may first suggest simple steps to fix a technical problem. This does not remove any rights or eligibility given in the Refund Policy.",
    cta: { href: routes.refund, label: "Read the Refund Policy" },
  },
];
