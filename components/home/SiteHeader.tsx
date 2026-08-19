"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, routes } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="telvis-header-sticky">
      <div className="telvis-header-inner">
      <nav
        className={`telvis-navbar${open ? " is-menu-open" : ""}`}
        aria-label="Primary"
      >
        <div className="telvis-navbar-bar">
          <Link href="/" className="telvis-brand" onClick={() => setOpen(false)}>
            <Image
              src="/logo-new.PNG"
              alt="IPTV UK"
              width={62}
              height={62}
              className="telvis-logo"
              priority
            />
          </Link>

          <div className="telvis-nav-center" aria-label="Desktop navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="telvis-nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="telvis-nav-actions">
            <Link href={routes.trial} className="telvis-nav-cta telvis-nav-cta-desktop">
              Start Free Trial
            </Link>

            <button
              type="button"
              className="telvis-menu"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="telvis-mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="telvis-menu-lines">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        {open ? (
          <div id="telvis-mobile-menu" className="telvis-mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="telvis-mobile-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={routes.trial}
              className="telvis-nav-cta telvis-nav-cta-menu"
              onClick={() => setOpen(false)}
            >
              Start Free Trial
            </Link>
          </div>
        ) : null}
      </nav>
      </div>
    </header>
  );
}
