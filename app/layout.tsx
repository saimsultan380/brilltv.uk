import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ButtonClickSound } from "@/components/ui/ButtonClickSound";
import { canonicalUrl } from "@/lib/seo";
import { brandAssets, siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
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
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: brandAssets.appleTouchIcon,
    shortcut: brandAssets.favicon48,
  },
  manifest: brandAssets.manifest,
  openGraph: {
    type: "website",
    url: canonicalUrl("/"),
    title: siteConfig.title,
    description: siteConfig.description,
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
    title: siteConfig.title,
    description: siteConfig.description,
    images: [brandAssets.ogImage],
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-full">
        <ButtonClickSound />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
