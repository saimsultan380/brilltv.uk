import type { Metadata } from "next";
import Link from "next/link";
import { navLinks, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found | Telvis",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="telvis-section telvis-not-found">
      <div className="telvis-section-inner">
        <div className="telvis-glass telvis-not-found-panel">
          <p className="telvis-not-found-eyebrow">404</p>
          <h1 className="telvis-not-found-title">Page Not Found</h1>
          <p className="telvis-not-found-lead">
            The page you requested does not exist or may have moved. Use the links
            below to return to a working section of the site.
          </p>

          <div className="telvis-actions telvis-not-found-actions">
            <Link href={routes.home} className="telvis-cta-primary">
              Back to Homepage
            </Link>
            <Link href={routes.contact} className="telvis-cta-outline">
              Contact Support
            </Link>
          </div>

          <nav className="telvis-not-found-links" aria-label="Helpful links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="telvis-footer-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
}
