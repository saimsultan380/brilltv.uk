"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/site";

export function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);
  const whatsappUrl = getWhatsAppLink("I have a question about Brill Tv Uk subscription.");

  useEffect(() => {
    const handleScroll = () => {
      const threshold = Math.max(560, (window.innerHeight || 700) * 0.65);
      setVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
