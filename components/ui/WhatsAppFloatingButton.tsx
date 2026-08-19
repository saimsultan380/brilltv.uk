"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/site";

export function WhatsAppFloatingButton() {
  const whatsappUrl = getWhatsAppLink("I have a question about Brill Tv Uk subscription.");

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="telvis-whatsapp-float"
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
