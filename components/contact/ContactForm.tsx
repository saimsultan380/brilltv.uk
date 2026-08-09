"use client";

import { FormEvent, useState } from "react";
import { supportConfig } from "@/lib/site";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const helpTopics = [
  "24-hour trial",
  "Plan selection",
  "Device compatibility",
  "Installation",
  "Login or account",
  "EPG or Catch-Up",
  "Playback issue",
  "Billing or refund",
  "Renewal",
  "Other",
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const whatsapp = String(data.get("whatsapp") ?? "");
    const topic = String(data.get("topic") ?? "");
    const orderRef = String(data.get("orderRef") ?? "");
    const device = String(data.get("device") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      whatsapp ? `WhatsApp: ${whatsapp}` : null,
      `Help topic: ${topic}`,
      orderRef ? `Order reference: ${orderRef}` : null,
      device ? `Device and app: ${device}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${supportConfig.email}?subject=${encodeURIComponent(
      `IPTV UK Support — ${topic}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section
      id="contact-form"
      className="telvis-section telvis-contact-form-section"
      aria-labelledby="contact-form-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-contact-form-panel">
          <CardRevealPart>
            <SectionHeader
              id="contact-form-heading"
              eyebrow="Send a message"
              title={
                <>
                  <TitleAccent>Contact</TitleAccent> Form
                </>
              }
              lead="Include your device, app and a clear description so support can help faster."
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
          <form className="telvis-contact-form" onSubmit={handleSubmit}>
            <div className="telvis-form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
              />
              <span className="telvis-form-hint">
                Use the name on your order, if you have one.
              </span>
            </div>

            <div className="telvis-form-field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
              <span className="telvis-form-hint">
                Enter an email address you can access.
              </span>
            </div>

            <div className="telvis-form-field">
              <label htmlFor="contact-whatsapp">WhatsApp number — optional</label>
              <input
                id="contact-whatsapp"
                name="whatsapp"
                type="tel"
                autoComplete="tel"
                placeholder="+44..."
              />
              <span className="telvis-form-hint">Include the full country code.</span>
            </div>

            <div className="telvis-form-field">
              <label htmlFor="contact-topic">What do you need help with?</label>
              <select id="contact-topic" name="topic" required defaultValue="">
                <option value="" disabled>
                  Select a topic
                </option>
                {helpTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            <div className="telvis-form-field">
              <label htmlFor="contact-order">Order reference — optional</label>
              <input
                id="contact-order"
                name="orderRef"
                type="text"
                placeholder="Order reference"
              />
              <span className="telvis-form-hint">
                Do not enter payment-card information.
              </span>
            </div>

            <div className="telvis-form-field">
              <label htmlFor="contact-device">Device and app</label>
              <input
                id="contact-device"
                name="device"
                type="text"
                placeholder="Firestick 4K using the dedicated app"
              />
              <span className="telvis-form-hint">
                Example: Firestick 4K using the dedicated app.
              </span>
            </div>

            <div className="telvis-form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                placeholder="Describe the problem, exact error and anything you have already tried."
              />
            </div>

            <button type="submit" className="telvis-cta-primary telvis-contact-form-submit">
              Send Support Request
            </button>

            {submitted ? (
              <p className="telvis-form-success" role="status">
                Your email app should open with the support request ready to send.
              </p>
            ) : null}
          </form>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
