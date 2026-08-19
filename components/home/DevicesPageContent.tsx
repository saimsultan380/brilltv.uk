"use client";

import { CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { ParticleNetworkOrb } from "@/components/home/ParticleNetworkOrb";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { routes } from "@/lib/site";

const devicesTable = [
  { device: "Amazon Fire TV and Firestick", setup: "Dedicated app or Xtream player", info: "External installation depends on device and operating system" },
  { device: "Android TV and Google TV", setup: "Dedicated app or Play Store player", info: "Usually provides broad player compatibility" },
  { device: "Android phones and tablets", setup: "Compatible Android app", info: "Mobile data use can be high" },
  { device: "Samsung Smart TV", setup: "Compatible television player", info: "Availability varies by model and country" },
  { device: "LG Smart TV", setup: "Compatible television player", info: "Separate app activation may apply" },
  { device: "Sony, TCL and Hisense TV", setup: "Android, Google TV or native player", info: "Check the television operating system" },
  { device: "Apple TV", setup: "IBO Player Pro or compatible player", info: "App payment may be separate" },
  { device: "iPhone and iPad", setup: "IBO Player Pro or iPlayTV AIO", info: "Install through the App Store" },
  { device: "Windows", setup: "IBO Player, Smarters Expert or compatible player", info: "Use the official developer" },
  { device: "Mac", setup: "Compatible Xtream Codes or M3U player", info: "Features vary by application" },
  { device: "Formuler", setup: "MyTVOnline", info: "Portal or Xtream Codes" },
  { device: "MAG and portal boxes", setup: "Portal login where supported", info: "Confirm the required format before ordering" },
  { device: "Kodi", setup: "PVR IPTV Simple Client", info: "M3U and EPG URLs may be required" },
] as const;

const suitableDeviceCriteria = [
  "A supported application",
  "Stable operating system",
  "Enough free storage",
  "Current system updates",
  "Reliable Wi-Fi or Ethernet",
  "Support for your preferred resolution",
  "An interface and remote you find easy to use",
] as const;

const speedGuide = [
  "HD viewing commonly performs better with at least 10–15 Mbps available to the device.",
  "Full HD and selected 4K may require 25 Mbps or more.",
  "Multiple simultaneous streams require additional available bandwidth.",
  "Ethernet normally provides the most reliable connection.",
  "Strong 5 GHz Wi-Fi is preferable when Ethernet is unavailable.",
  "Connection stability is just as important as advertised download speed.",
] as const;

const infoToSendSupport = [
  "Device brand",
  "Exact model",
  "Operating system",
  "Country or app-store region",
  "Application already installed",
  "Required number of connections",
] as const;

const deviceFaqs = [
  {
    question: "Which device is easiest to configure?",
    answer: "Android TV, Google TV and compatible Fire TV devices normally provide straightforward options.",
  },
  {
    question: "Can I use an existing IPTV player?",
    answer: "Yes, if it accepts the account format supplied.",
  },
  {
    question: "Are third-party player fees included?",
    answer: "Not unless the checkout or plan specifically states otherwise.",
  },
  {
    question: "Can I use one account on two screens simultaneously?",
    answer: "Only when your plan includes the required number of active connections.",
  },
] as const;

export function DevicesPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Supported Devices"
        headingId="devices-page-heading"
        titleLines={[
          <>
            IPTV Supported Devices – <span className="telvis-h1-accent">Find the Right Setup</span>
          </>,
          <>for Your Screen</>,
        ]}
        visual={
          <ScrollReveal delay={0.18} variant="media" className="telvis-visual-wrap">
            <ParticleNetworkOrb />
          </ScrollReveal>
        }
      >
        <HeroReveal delay={0.22}>
          <div className="telvis-copy">
            <p>
              Use your subscription on a wide range of televisions, streaming devices, phones, tablets and computers.
            </p>
            <p>
              The correct setup depends on the device’s operating system and whether it accepts the dedicated application, Xtream Codes, an M3U playlist or a portal login.
            </p>
            <p>
              Use the 24-hour free trial if you need to confirm compatibility before choosing a plan.
            </p>
          </div>
        </HeroReveal>

        <HeroReveal delay={0.3} variant="cta">
          <div className="telvis-actions">
            <Link href={routes.trial} className="telvis-cta-primary">
              Start a Compatibility Trial
            </Link>
            <Link href={routes.installation} className="telvis-cta-secondary">
              Open the Installation Guide
            </Link>
          </div>
        </HeroReveal>
      </PageHero>

      <section className="telvis-section" aria-labelledby="overview-table-heading">
        <div className="telvis-section-inner">
          <SectionHeader
            id="overview-table-heading"
            eyebrow="Overview"
            title={
              <>
                Supported Devices at a <TitleAccent>Glance</TitleAccent>
              </>
            }
          />

          <CardReveal className="telvis-glass telvis-table-wrap">
            <table className="telvis-table">
              <thead>
                <tr>
                  <th scope="col">Device</th>
                  <th scope="col">Recommended Setup</th>
                  <th scope="col">Important Information</th>
                </tr>
              </thead>
              <tbody>
                {devicesTable.map((row) => (
                  <tr key={row.device}>
                    <th scope="row">{row.device}</th>
                    <td>{row.setup}</td>
                    <td>{row.info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardReveal>
        </div>
      </section>

      <section className="telvis-section" aria-labelledby="detailed-devices-heading">
        <div className="telvis-section-inner telvis-policy-stack">
          <SectionHeader
            id="detailed-devices-heading"
            eyebrow="Device Guides"
            title={
              <>
                Detailed <TitleAccent>Device Compatibility</TitleAccent>
              </>
            }
          />

          <CardReveal className="telvis-glass telvis-panel" delay={0.04}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              IPTV for Amazon Fire TV and Firestick
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Compatible Fire TV devices provide a television-based setup through the dedicated application or an approved Xtream Codes player.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Before purchasing a new device, check that its operating system supports the installation method you intend to use.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              If Downloader or external installation is unavailable, use a compatible app-store player instead of trying to bypass device restrictions.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.06}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              IPTV for Android TV and Google TV
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Android TV and Google TV devices generally provide flexible installation through the Google Play Store or a secure direct application link.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Compatible device types can include: Android televisions, Google TV streaming devices, Android TV boxes, NVIDIA Shield, Xiaomi television boxes, and compatible Sony, TCL and Hisense televisions.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              A newer device with sufficient storage will usually manage a large catalogue more effectively than older entry-level hardware.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.08}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              IPTV for Samsung and LG Smart TVs
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Samsung and LG televisions can use compatible players from their official application stores, such as CR7 Player, IBO Player, SmartOne, and Hot IPTV.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Availability depends on television model, year, operating system and app-store region. Some Smart TV players charge a separate activation fee paid directly to the developer.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.1}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              IPTV for iPhone, iPad and Apple TV
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Compatible applications can include IBO Player Pro and iPlayTV AIO. Install the player through the App Store and enter the supplied Xtream Codes details.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Apple TV offers a direct television-based experience. Install the player from the App Store and enter your account details. Any player licence is separate unless stated otherwise.
            </CardRevealPart>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.12}>
            <CardRevealPart as="h2" className="telvis-panel-title">
              IPTV for Windows, Mac, Formuler, Portal Devices and Kodi
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Computers are useful for normal viewing, account testing and troubleshooting. Use a recognised player that accepts Xtream Codes or M3U. Download software only from official publishers.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Formuler devices can use MyTVOnline with Xtream Codes or portal-based connection. MAG devices require a registered MAC address and portal URL. Kodi can use PVR IPTV Simple Client with M3U playlists.
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>

      <section className="telvis-section" aria-labelledby="suitability-heading">
        <div className="telvis-section-inner">
          <div className="telvis-split">
            <div className="telvis-split-copy">
              <SectionHeader
                id="suitability-heading"
                eyebrow="Requirements"
                title={
                  <>
                    What Makes a Device <TitleAccent>Suitable</TitleAccent>?
                  </>
                }
                lead="An expensive device is not always required, but older devices with limited memory can struggle with large channel and on-demand libraries."
              />
            </div>

            <CardReveal delay={0.1} className="telvis-glass telvis-panel">
              <CardRevealPart variant="content" as="h3" className="telvis-panel-title">
                A suitable device should have:
              </CardRevealPart>
              <ul className="telvis-check-list">
                {suitableDeviceCriteria.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardReveal>
          </div>
        </div>
      </section>

      <section className="telvis-section" aria-labelledby="connection-rec-heading">
        <div className="telvis-section-inner">
          <SectionHeader
            id="connection-rec-heading"
            eyebrow="Broadband"
            title={
              <>
                Recommended <TitleAccent>Internet Connection</TitleAccent>
              </>
            }
          />

          <CardReveal className="telvis-glass telvis-panel">
            <ul className="telvis-check-list">
              {speedGuide.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardReveal>

          <CardReveal className="telvis-glass telvis-panel" delay={0.08}>
            <CardRevealPart as="h3" className="telvis-panel-title">
              Devices We Do Not Recommend
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Roku and games consoles are not recommended as primary devices because direct player support can be limited or inconsistent.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Screen mirroring may work in some situations, but it is generally less reliable than running a compatible application directly.
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>

      <section className="telvis-section" aria-labelledby="check-compat-heading">
        <div className="telvis-section-inner">
          <SectionHeader
            id="check-compat-heading"
            eyebrow="Check First"
            title={
              <>
                Check Compatibility <TitleAccent>Before Ordering</TitleAccent>
              </>
            }
            lead="Send support your device info so we can recommend an appropriate setup method."
          />

          <CardReveal className="telvis-glass telvis-panel">
            <CardRevealPart as="h3" className="telvis-panel-title">
              Send support:
            </CardRevealPart>
            <ul className="telvis-check-list">
              {infoToSendSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <CardRevealPart as="p" className="telvis-info-body">
              Support can recommend an appropriate setup method. You can then request a free trial.
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>

      <section className="telvis-section telvis-section-faq" aria-labelledby="device-faq-heading">
        <div className="telvis-section-inner telvis-faq-layout">
          <div className="telvis-faq-intro">
            <SectionHeader
              id="device-faq-heading"
              eyebrow="Device FAQ"
              title={
                <>
                  Device Compatibility <TitleAccent>Questions</TitleAccent>
                </>
              }
            />
          </div>

          <div className="telvis-faq-list">
            {deviceFaqs.map((faq, index) => (
              <CardReveal
                key={faq.question}
                as="details"
                delay={staggerDelay(index, 0.05)}
                className="telvis-glass telvis-faq-item"
              >
                <CardRevealPart as="summary" variant="content">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className="telvis-faq-chevron"
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </CardRevealPart>
                <CardRevealPart as="p" variant="content">
                  {faq.answer}
                </CardRevealPart>
              </CardReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="telvis-section telvis-final-cta">
        <div className="telvis-section-inner">
          <CardReveal className="telvis-glass telvis-final-panel">
            <CardRevealPart>
              <SectionHeader
                id="dev-cta-heading"
                eyebrow="Get Started"
                title={
                  <>
                    Test Compatibility on Your <TitleAccent>Screen Today</TitleAccent>
                  </>
                }
                lead="Request a 24-hour trial or open the Installation Guide for setup steps."
                align="center"
                animate={false}
              />
            </CardRevealPart>
            <CardRevealPart>
              <div className="telvis-actions telvis-final-actions">
                <Link href={routes.trial} className="telvis-cta-primary">
                  Start a Compatibility Trial
                </Link>
                <Link href={routes.installation} className="telvis-cta-secondary">
                  Open the Installation Guide
                </Link>
              </div>
            </CardRevealPart>
          </CardReveal>
        </div>
      </section>
    </>
  );
}
