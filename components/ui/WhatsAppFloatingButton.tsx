"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/site";

export function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);
  const whatsappUrl = getWhatsAppLink("I have a question about Brill Tv Uk subscription.");

  useEffect(() => {
    const heroElement =
      document.querySelector("section.telvis-hero") ||
      document.querySelector(".telvis-hero") ||
      document.querySelector("section:first-of-type");

    if (!heroElement) {
      const handleScroll = () => {
        setVisible(window.scrollY > 400);
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(!entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`telvis-whatsapp-float${visible ? " is-visible" : ""}`}
      aria-label="Chat with Brill Tv Uk on WhatsApp"
    >
      <span className="telvis-whatsapp-float-pulse" aria-hidden="true" />
      <span className="telvis-whatsapp-float-tooltip">Chat with us</span>
      <div className="telvis-whatsapp-float-icon">
        <WhatsAppIcon size={28} />
      </div>
    </a>
  );
}
