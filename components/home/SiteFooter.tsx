"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import {
  footerLegalLinks,
  footerQuickLinks,
  getWhatsAppLink,
  navLinks,
  routes,
  siteConfig,
  supportConfig,
} from "@/lib/site";

const trustHighlights = [
  "Free 24-Hour Trial",
  "VPN Included",
  "Guided Installation",
  "Support Monitored 24/7",
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="telvis-footer">
      <div className="telvis-footer-inner">
        <div className="telvis-footer-top">
          <ScrollReveal variant="text" className="telvis-footer-brand-col">
            <Link href="/" className="telvis-footer-brand">
              <Image
                src="/logo-new.PNG"
                alt="IPTV UK"
                width={80}
                height={80}
                className="telvis-footer-logo"
              />
            </Link>

            <p className="telvis-footer-about">{siteConfig.description}</p>
          </ScrollReveal>

          <div className="telvis-footer-columns">
            <ScrollReveal delay={0.06} variant="text" className="telvis-footer-col">
              <h2 className="telvis-footer-heading">Pages</h2>
              <nav className="telvis-footer-links" aria-label="Footer pages">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="telvis-footer-link">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </ScrollReveal>

            <ScrollReveal delay={0.12} variant="text" className="telvis-footer-col">
              <h2 className="telvis-footer-heading">Get Started</h2>
              <nav className="telvis-footer-links" aria-label="Footer quick links">
                {footerQuickLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="telvis-footer-link">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </ScrollReveal>

            <ScrollReveal delay={0.18} variant="text" className="telvis-footer-col">
              <h2 className="telvis-footer-heading">Support</h2>
              <nav className="telvis-footer-links" aria-label="Footer support">
                <Link href={routes.contact} className="telvis-footer-link">
                  Contact Us
                </Link>
                <a href={`mailto:${supportConfig.email}`} className="telvis-footer-link">
                  {supportConfig.email}
                </a>
                <a href={getWhatsAppLink("I need support help with Brill Tv Uk.")} className="telvis-footer-link inline-flex items-center gap-1.5" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={16} />
                  WhatsApp Support
                </a>
                <p className="telvis-footer-note">
                  Email or WhatsApp support for trials, plans, installation and
                  account questions. Monitored 24/7.
                </p>
              </nav>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.08} variant="text">
          <div className="telvis-footer-trust">
            {trustHighlights.map((item, index) => (
              <span key={item} className="telvis-footer-trust-item">
                {item}
                {index < trustHighlights.length - 1 ? (
                  <span className="telvis-footer-trust-sep" aria-hidden="true">
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} variant="text">
          <p className="telvis-footer-disclaimer">
            IPTV UK is intended for personal, lawful use only. Users must
            comply with all applicable laws and use only content they are
            legally entitled to access. Login details must not be resold,
            publicly shared or used beyond the permitted connection allowance.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12} variant="text">
          <div className="telvis-footer-bottom">
            <p className="telvis-footer-copy">
              © {year} {siteConfig.name}. All rights reserved.
            </p>

            <nav className="telvis-footer-legal" aria-label="Legal">
              {footerLegalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="telvis-footer-legal-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
