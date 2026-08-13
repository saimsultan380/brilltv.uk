import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SitewideJsonLd } from "@/components/seo/SitewideJsonLd";
import { ButtonClickSound } from "@/components/ui/ButtonClickSound";
import { brandAssets, siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "IPTV UK",
    "IPTV subscription UK",
    "IPTV service UK",
    "IPTV plans UK",
    "UK IPTV subscription",
    "IPTV free trial",
    "IPTV installation",
  ],
  icons: {
    icon: [
      { url: brandAssets.favicon48, sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: {
      url: brandAssets.appleTouchIcon,
      sizes: "180x180",
      type: "image/png",
    },
    shortcut: "/favicon.ico",
  },
  manifest: brandAssets.manifest,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_GB",
    images: [
      {
        url: brandAssets.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} IPTV UK`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [brandAssets.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "Jt2OnqpJWhVGo23q5ZQmyhLU6La_C4ihXbDd4iWohuk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <head>
        <SitewideJsonLd />
      </head>
      <body className="min-h-full">
        <ButtonClickSound />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
