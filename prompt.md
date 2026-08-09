Below is the final Telvis developer handoff for the exact dark navy + blue/violet/purple look in your latest design. Use these values as the canonical implementation rather than sampling colours from the JPG.

1. app/globals.css
   /_ =========================================================
   TELVIS — MASTER DESIGN SYSTEM
   ========================================================= _/

:root {
/_ ---------- BASE ---------- _/

--telvis-bg-black: #01020d;
--telvis-bg-main: #020316;
--telvis-bg-navy: #02051d;
--telvis-bg-blue: #03082b;
--telvis-bg-card: #080a22;

/_ ---------- BRAND ---------- _/

--telvis-blue: #4d5cff;
--telvis-indigo: #6246ff;
--telvis-violet: #744eff;
--telvis-purple: #9450ff;
--telvis-bright-purple: #b64cff;
--telvis-pink-purple: #c14bff;

/_ ---------- TEXT ---------- _/

--telvis-white: #ffffff;
--telvis-heading: #fbfbff;
--telvis-body: rgba(229, 229, 240, 0.86);
--telvis-muted: rgba(198, 198, 216, 0.72);

/_ ---------- BORDERS ---------- _/

--telvis-border-soft: rgba(112, 89, 255, 0.25);
--telvis-border-purple: rgba(167, 72, 255, 0.72);
--telvis-border-white: rgba(255, 255, 255, 0.08);

/_ ---------- GLOWS ---------- _/

--telvis-glow-blue: rgba(35, 77, 255, 0.30);
--telvis-glow-indigo: rgba(80, 57, 255, 0.28);
--telvis-glow-purple: rgba(134, 34, 255, 0.27);
--telvis-glow-violet: rgba(181, 67, 255, 0.22);

/_ ---------- CTA ---------- _/

--telvis-cta-start: #4a4cff;
--telvis-cta-mid: #6946ff;
--telvis-cta-end: #a82bf1;

/_ ---------- RADII ---------- _/

--radius-navbar: 22px;
--radius-button: 14px;
--radius-card: 17px;
--radius-pill: 999px;
}

/_ =========================================================
RESET
========================================================= _/

- {
  box-sizing: border-box;
  }

html {
scroll-behavior: smooth;
}

body {
margin: 0;
background: var(--telvis-bg-main);

font-family:
Inter,
"SF Pro Display",
"SF Pro Text",
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
sans-serif;

color: var(--telvis-white);

-webkit-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
}

button,
a {
font: inherit;
}

/_ =========================================================
HERO
========================================================= _/

.telvis-hero {
position: relative;
isolation: isolate;

min-height: 100svh;

overflow: hidden;

color: var(--telvis-white);

background:
radial-gradient(
circle at 5% 63%,
rgba(35, 77, 255, 0.30) 0%,
rgba(25, 55, 220, 0.15) 18%,
transparent 40%
),

    radial-gradient(
      circle at 91% 50%,
      rgba(134, 34, 255, 0.27) 0%,
      rgba(91, 28, 214, 0.14) 23%,
      transparent 48%
    ),

    radial-gradient(
      circle at 52% 89%,
      rgba(78, 46, 255, 0.16) 0%,
      transparent 40%
    ),

    linear-gradient(
      180deg,
      #020316 0%,
      #02051d 37%,
      #03082b 68%,
      #010315 100%
    );

}

.telvis-hero::before {
content: "";

position: absolute;
inset: 0;
z-index: -2;

pointer-events: none;

background:
radial-gradient(
ellipse at 50% 31%,
rgba(112, 54, 255, 0.075),
transparent 50%
);
}

/_ subtle upper-right light _/

.telvis-hero::after {
content: "";

position: absolute;

width: 400px;
height: 400px;

top: 160px;
right: -260px;

z-index: -1;

pointer-events: none;

border-radius: 50%;

background: rgba(142, 45, 255, 0.12);

filter: blur(100px);
}

/_ =========================================================
HERO CONTAINER
========================================================= _/

.telvis-container {
position: relative;

width: min(calc(100% - 28px), 1180px);

margin-inline: auto;

padding-top: 12px;
padding-bottom: 48px;
}

/_ =========================================================
NAVBAR
========================================================= _/

.telvis-navbar {
position: relative;

display: flex;
align-items: center;
justify-content: space-between;

width: 100%;

min-height: 58px;

padding: 8px 10px 8px 16px;

border: 1px solid rgba(112, 89, 255, 0.25);
border-radius: var(--radius-navbar);

background:
linear-gradient(
100deg,
rgba(5, 15, 58, 0.88),
rgba(13, 5, 43, 0.78)
);

backdrop-filter: blur(18px);
-webkit-backdrop-filter: blur(18px);

box-shadow:
0 12px 35px rgba(0, 0, 0, 0.22),
inset 0 1px 0 rgba(255, 255, 255, 0.025);
}

/_ =========================================================
LOGO
========================================================= _/

.telvis-brand {
display: flex;
align-items: center;

gap: 10px;
}

.telvis-logo {
display: block;

width: 42px;
height: 42px;

object-fit: contain;

filter:
drop-shadow(0 0 5px rgba(255, 255, 255, 0.25))
drop-shadow(0 0 8px rgba(144, 65, 255, 0.82))
drop-shadow(0 0 17px rgba(71, 70, 255, 0.48));
}

.telvis-wordmark {
color: #ffffff;

font-size: 27px;
line-height: 1;

font-weight: 750;
letter-spacing: -0.04em;
}

/_ =========================================================
MENU
========================================================= _/

.telvis-menu {
display: grid;
place-items: center;

width: 44px;
height: 44px;

padding: 0;

border-radius: 50%;

border: 1px solid rgba(127, 91, 255, 0.30);

background: rgba(25, 17, 72, 0.72);

color: #ffffff;

cursor: pointer;

box-shadow:
0 0 20px rgba(100, 52, 255, 0.12);

transition:
transform 180ms ease,
background 180ms ease;
}

.telvis-menu:hover {
transform: scale(1.04);

background: rgba(40, 26, 100, 0.82);
}

.telvis-menu-lines {
display: flex;
flex-direction: column;

gap: 5px;
}

.telvis-menu-lines span {
display: block;

width: 19px;
height: 2px;

border-radius: 10px;

background: #ffffff;
}

/_ =========================================================
HERO CONTENT
========================================================= _/

.telvis-content {
position: relative;

margin-top: 14px;
}

/_ =========================================================
EYEBROW
========================================================= _/

.telvis-eyebrow {
display: inline-flex;
align-items: center;

width: fit-content;

gap: 9px;

margin-bottom: 17px;

padding: 7px 13px;

border: 1px solid transparent;
border-radius: var(--radius-pill);

background:
linear-gradient(#080a22, #080a22) padding-box,

    linear-gradient(
      90deg,
      #8654ff,
      #b442ff,
      #4e5cff
    ) border-box;

color: #ecebf6;

font-size: 11px;
line-height: 1;

font-weight: 500;

letter-spacing: 0.14em;

text-transform: uppercase;

box-shadow:
0 0 18px rgba(129, 51, 255, 0.12);
}

.telvis-eyebrow-dot {
width: 7px;
height: 7px;

flex-shrink: 0;

border-radius: 50%;

background: #a855ff;

box-shadow:
0 0 6px #a855ff,
0 0 14px rgba(168, 85, 255, 0.72);
}

/_ =========================================================
H1
========================================================= _/

.telvis-h1 {
max-width: 690px;

margin: 0 0 16px;

color: #fbfbff;

font-size: clamp(2rem, 8.4vw, 2.55rem);

line-height: 1.08;

font-weight: 780;

letter-spacing: -0.045em;

text-wrap: balance;
}

/_ EXACT H1 ACCENT _/

.telvis-h1-accent {
display: inline;

background:
linear-gradient(
100deg,
#b64cff 0%,
#9450ff 25%,
#744eff 58%,
#5362ff 100%
);

background-clip: text;
-webkit-background-clip: text;

color: transparent;
-webkit-text-fill-color: transparent;

filter:
drop-shadow(
0 0 12px rgba(124, 66, 255, 0.10)
);
}

/_ =========================================================
BODY TEXT
========================================================= _/

.telvis-copy {
max-width: 660px;

color: rgba(229, 229, 240, 0.86);

font-size: clamp(14.5px, 4.05vw, 17px);

line-height: 1.5;

font-weight: 400;

letter-spacing: -0.015em;
}

.telvis-copy p {
margin: 0;
}

.telvis-copy p + p {
margin-top: 17px;
}

/_ =========================================================
CTA AREA
========================================================= _/

.telvis-actions {
display: grid;

grid-template-columns: 1fr 1fr;

gap: 11px;

width: 100%;

margin-top: 18px;
}

/_ =========================================================
PRIMARY CTA
========================================================= _/

.telvis-cta-primary {
position: relative;

display: inline-flex;
align-items: center;
justify-content: center;

gap: 10px;

min-height: 55px;

padding: 11px 15px;

overflow: hidden;

border: 1px solid rgba(207, 143, 255, 0.60);
border-radius: var(--radius-button);

background:
linear-gradient(
100deg,
#4a4cff 0%,
#6946ff 42%,
#a82bf1 100%
);

color: #ffffff;

text-align: center;
text-decoration: none;

font-size: 14.5px;

line-height: 1.15;

font-weight: 700;

box-shadow:
0 7px 24px rgba(91, 58, 255, 0.28),
0 0 18px rgba(153, 47, 255, 0.22),
inset 0 1px 0 rgba(255, 255, 255, 0.20);

transition:
transform 180ms ease,
box-shadow 180ms ease,
filter 180ms ease;
}

/_ button lighting _/

.telvis-cta-primary::before {
content: "";

position: absolute;

width: 130px;
height: 100px;

top: -68px;
left: 14%;

border-radius: 50%;

background: rgba(255, 255, 255, 0.22);

filter: blur(35px);

pointer-events: none;
}

.telvis-cta-primary:hover {
transform: translateY(-2px);

filter: brightness(1.07);

box-shadow:
0 10px 30px rgba(91, 58, 255, 0.36),
0 0 25px rgba(160, 48, 255, 0.27);
}

.telvis-cta-primary:active {
transform: scale(0.985);
}

/_ play icon _/

.telvis-play-icon {
width: 0;
height: 0;

flex-shrink: 0;

border-top: 8px solid transparent;
border-bottom: 8px solid transparent;
border-left: 13px solid #ffffff;

filter:
drop-shadow(0 0 5px rgba(255, 255, 255, 0.25));
}

/_ =========================================================
SECONDARY CTA
========================================================= _/

.telvis-cta-secondary {
display: inline-flex;

align-items: center;
justify-content: center;

min-height: 55px;

padding: 11px 14px;

border: 1px solid rgba(255, 255, 255, 0.88);
border-radius: var(--radius-button);

background:
linear-gradient(
180deg,
#ffffff 0%,
#f4f3fa 100%
);

color: #090a23;

text-align: center;

text-decoration: none;

font-size: 14.5px;

line-height: 1.15;

font-weight: 700;

box-shadow:
0 8px 24px rgba(0, 0, 0, 0.18),
inset 0 1px 0 #ffffff;

transition:
transform 180ms ease,
box-shadow 180ms ease;
}

.telvis-cta-secondary:hover {
transform: translateY(-2px);

box-shadow:
0 10px 30px rgba(0, 0, 0, 0.22),
0 0 18px rgba(102, 77, 255, 0.09);
}

/_ =========================================================
TRUST BAR
========================================================= _/

.telvis-trust {
display: flex;

align-items: center;
justify-content: center;

flex-wrap: wrap;

gap: 6px 9px;

width: 100%;

margin-top: 11px;

padding: 8px 11px;

border: 1px solid rgba(104, 82, 255, 0.28);
border-radius: var(--radius-pill);

background:
linear-gradient(
90deg,
rgba(7, 28, 83, 0.72),
rgba(15, 8, 50, 0.74)
);

color: rgba(244, 244, 252, 0.90);

font-size: 10px;

line-height: 1.25;

backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
}

.telvis-trust-dot {
width: 4px;
height: 4px;

flex: 0 0 4px;

border-radius: 50%;

background: #8750ff;

box-shadow:
0 0 7px rgba(135, 80, 255, 0.80);
}

/_ =========================================================
VISUAL / ORBIT
========================================================= _/

.telvis-visual {
position: relative;

width: min(100%, 390px);
aspect-ratio: 1 / 1;

margin: 20px auto 0;
}

/_ subtle visual glow _/

.telvis-visual::before {
content: "";

position: absolute;

width: 72%;
height: 72%;

top: 14%;
left: 14%;

border-radius: 50%;

background:
radial-gradient(
circle,
rgba(88, 54, 255, 0.13),
transparent 68%
);

filter: blur(25px);

pointer-events: none;
}

/_ =========================================================
CENTRAL EMBLEM
========================================================= _/

.telvis-orbit-logo {
position: absolute;

top: 50%;
left: 50%;

z-index: 5;

display: grid;
place-items: center;

width: 126px;
aspect-ratio: 1;

transform: translate(-50%, -50%);

border: 2px solid #8657ff;
border-radius: 50%;

background:
radial-gradient(
circle,
rgba(65, 30, 150, 0.30) 0%,
rgba(11, 7, 48, 0.86) 64%,
rgba(3, 5, 26, 0.96) 100%
);

box-shadow:
0 0 8px rgba(117, 83, 255, 0.95),
0 0 25px rgba(101, 63, 255, 0.60),
0 0 55px rgba(103, 46, 255, 0.26),
inset 0 0 25px rgba(107, 68, 255, 0.16);
}

.telvis-orbit-logo img {
width: 56%;

height: auto;

filter:
drop-shadow(0 0 6px rgba(255, 255, 255, 0.35))
drop-shadow(0 0 15px rgba(131, 55, 255, 0.76));
}

/_ =========================================================
ORBIT TRACK
========================================================= _/

.telvis-orbit-track {
position: absolute;

width: 77%;
aspect-ratio: 1;

top: 50%;
left: 50%;

z-index: 1;

transform: translate(-50%, -50%);

border: 1px solid rgba(115, 89, 255, 0.55);

border-radius: 50%;

box-shadow:
0 0 10px rgba(93, 74, 255, 0.08);

/_ only show sections of circle _/
mask:
linear-gradient(#000 0 0);

opacity: 0.78;
}

/_ =========================================================
ORBIT CARDS
========================================================= _/

.telvis-orbit-item {
--orbit-radius: 145px;

position: absolute;

top: 50%;
left: 50%;

z-index: 10;

width: max-content;

offset-path:
circle(
var(--orbit-radius)
at 0 0
);

offset-rotate: 0deg;

animation:
telvis-orbit 30s linear infinite;

animation-delay:
calc(var(--orbit-index) \* -6s);
}

/_ cards _/

.telvis-orbit-card {
display: flex;

align-items: center;

gap: 8px;

min-height: 47px;

padding: 8px 13px;

border: 1px solid rgba(167, 72, 255, 0.72);

border-radius: var(--radius-card);

background:
linear-gradient(
135deg,
rgba(7, 12, 41, 0.94),
rgba(15, 7, 45, 0.88)
);

color: rgba(255, 255, 255, 0.94);

white-space: nowrap;

backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);

box-shadow:
0 0 14px rgba(91, 65, 255, 0.12),
inset 0 1px 0 rgba(255, 255, 255, 0.035);
}

.telvis-orbit-card svg {
width: 25px;
height: 25px;

flex-shrink: 0;

fill: none;
stroke: #f5f3ff;

stroke-width: 1.6;
}

.telvis-orbit-card span {
font-size: 13px;

line-height: 1.1;

font-weight: 450;
}

/_ =========================================================
ORBIT ANIMATION
========================================================= _/

@keyframes telvis-orbit {
from {
offset-distance: 0%;
}

to {
offset-distance: 100%;
}
}

/_ =========================================================
GLOWING ORBIT POINTS
========================================================= _/

.telvis-orbit-point {
position: absolute;

width: 7px;
height: 7px;

z-index: 3;

border-radius: 50%;

background: #ffffff;

box-shadow:
0 0 5px #ffffff,
0 0 10px #7856ff,
0 0 18px rgba(106, 73, 255, 0.80);
}

/_ =========================================================
AMBIENT GLOW BLOBS
========================================================= _/

.telvis-glow {
position: absolute;

z-index: -1;

pointer-events: none;

border-radius: 999px;

filter: blur(85px);
}

.telvis-glow-blue {
width: 300px;
height: 360px;

left: -180px;
top: 560px;

background: rgba(23, 68, 255, 0.30);
}

.telvis-glow-purple {
width: 330px;
height: 430px;

right: -210px;
top: 390px;

background: rgba(123, 25, 255, 0.27);
}

/_ =========================================================
TABLET / DESKTOP
========================================================= _/

@media (min-width: 768px) {

.telvis-container {
padding-top: 24px;
}

.telvis-navbar {
min-height: 68px;

    padding-inline: 20px 12px;

}

.telvis-h1 {
max-width: 820px;

    font-size: clamp(3.5rem, 5.2vw, 5rem);

}

.telvis-copy {
max-width: 760px;

    font-size: 18px;

    line-height: 1.62;

}

.telvis-actions {
max-width: 650px;
}

.telvis-visual {
width: 560px;
}

.telvis-orbit-logo {
width: 170px;
}

.telvis-orbit-item {
--orbit-radius: 205px;
}

.telvis-orbit-card {
min-height: 54px;

    padding: 10px 17px;

}

.telvis-orbit-card span {
font-size: 15px;
}
}

/_ =========================================================
SMALL MOBILE
========================================================= _/

@media (max-width: 370px) {

.telvis-container {
width: calc(100% - 22px);
}

.telvis-h1 {
font-size: 1.9rem;
}

.telvis-copy {
font-size: 14px;
}

.telvis-actions {
gap: 8px;
}

.telvis-cta-primary,
.telvis-cta-secondary {
padding-inline: 10px;

    font-size: 13px;

}

.telvis-trust {
font-size: 9.5px;
}

.telvis-visual {
transform: scale(0.94);

    transform-origin: top center;

}
}

/_ =========================================================
VERY SMALL DEVICES
========================================================= _/

@media (max-width: 330px) {

.telvis-actions {
grid-template-columns: 1fr;
}
}

/_ =========================================================
ACCESSIBILITY — REDUCED MOTION
========================================================= _/

@media (prefers-reduced-motion: reduce) {

.telvis-orbit-item {
animation-play-state: paused;
}

.telvis-cta-primary,
.telvis-cta-secondary,
.telvis-menu {
transition: none;
}
} 2. TelvisHero.tsx
export default function TelvisHero() {
return (
<section className="telvis-hero">

      {/* Ambient background glows */}
      <div className="telvis-glow telvis-glow-blue" />
      <div className="telvis-glow telvis-glow-purple" />

      <div className="telvis-container">

        {/* NAVIGATION */}
        <nav className="telvis-navbar">

          <a href="/" className="telvis-brand">
            <img
              src="/telvis-logo.svg"
              alt="Telvis"
              className="telvis-logo"
            />

            <span className="telvis-wordmark">
              Telvis
            </span>
          </a>

          <button
            className="telvis-menu"
            aria-label="Open navigation menu"
          >
            <span className="telvis-menu-lines">
              <span />
              <span />
              <span />
            </span>
          </button>

        </nav>


        {/* HERO CONTENT */}
        <div className="telvis-content">

          <div className="telvis-eyebrow">
            <span className="telvis-eyebrow-dot" />

            PREMIUM IPTV STREAMING
          </div>


          <h1 className="telvis-h1">

            IPTV UK Subscription from{" "}

            <span className="telvis-h1-accent">
              £9.99
            </span>{" "}

            with a Free{" "}

            <span className="telvis-h1-accent">
              24-Hour Trial
            </span>

          </h1>


          <div className="telvis-copy">

            <p>
              Choose an IPTV UK subscription that lets you check
              compatibility before committing to a longer plan.
              Browse more than 20,000 listed live channels and over
              80,000 listed movies and series on supported
              internet-connected devices, with paid plans starting
              from £9.99.
            </p>

            <p>
              Start with a free 24-hour IPTV UK trial on the device
              and broadband connection you actually use. If you
              decide to continue, choose one, three, six or twelve
              months and receive the access details, installation
              instructions and support needed to get set up.
            </p>

          </div>


          {/* CTA */}
          <div className="telvis-actions">

            <a
              href="/free-trial"
              className="telvis-cta-primary"
            >
              <span className="telvis-play-icon" />

              <span>
                Start Your Free
                <br />
                24-Hour Trial
              </span>
            </a>


            <a
              href="/plans"
              className="telvis-cta-secondary"
            >
              View Plans from £9.99
            </a>

          </div>


          {/* TRUST BAR */}
          <div className="telvis-trust">

            <span>Free 24-Hour Trial</span>

            <span className="telvis-trust-dot" />

            <span>VPN Included</span>

            <span className="telvis-trust-dot" />

            <span>EPG and Selected Catch-Up</span>

            <span className="telvis-trust-dot" />

            <span>24/7 Support</span>

          </div>


          {/* ORBIT VISUAL */}
          <div className="telvis-visual">

            <div className="telvis-orbit-track" />


            {/* CENTRE LOGO */}
            <div className="telvis-orbit-logo">
              <img
                src="/telvis-symbol.svg"
                alt=""
              />
            </div>


            {/* LIVE TV */}
            <OrbitCard
              index={0}
              label="Live TV"
              icon={<TvIcon />}
            />


            {/* SERIES */}
            <OrbitCard
              index={1}
              label="Series"
              icon={<SeriesIcon />}
            />


            {/* CONTINUE WATCHING */}
            <OrbitCard
              index={2}
              label={
                <>
                  Continue
                  <br />
                  Watching
                </>
              }
              icon={<PlayIcon />}
            />


            {/* FAVOURITES */}
            <OrbitCard
              index={3}
              label="Favourites"
              icon={<FavouriteIcon />}
            />


            {/* MOVIES */}
            <OrbitCard
              index={4}
              label="Movies"
              icon={<MovieIcon />}
            />

          </div>

        </div>
      </div>
    </section>

);
} 3. Orbit component
function OrbitCard({
index,
icon,
label,
}: {
index: number;
icon: React.ReactNode;
label: React.ReactNode;
}) {
return (
<div
className="telvis-orbit-item"
style={
{
"--orbit-index": index,
} as React.CSSProperties
} >
<div className="telvis-orbit-card">
{icon}

        <span>
          {label}
        </span>
      </div>
    </div>

);
}

This gives you the behaviour you described earlier:

central Telvis emblem remains stationary while all five feature cards continuously orbit around it.

The animation name is:

telvis-orbit

Recommended speed:

animation-duration: 30s;

For slightly more movement:

24s

For a more premium/slower feel:

32s

I recommend 30 seconds.

4. Simple SVG icons

These use currentColor / CSS strokes, so the developer doesn't need external icon packages.

function TvIcon() {
return (
<svg viewBox="0 0 32 32">
<rect x="4" y="7" width="24" height="17" rx="2" />
<path d="M11 28h10" />
<path d="M16 24v4" />
<path d="M13 3l3 4 3-4" />
<path d="M14 12l6 4-6 4z" />
</svg>
);
}

function SeriesIcon() {
return (
<svg viewBox="0 0 32 32">
<rect x="5" y="8" width="17" height="17" rx="2" />
<rect x="10" y="4" width="17" height="17" rx="2" />
</svg>
);
}

function PlayIcon() {
return (
<svg viewBox="0 0 32 32">
<circle cx="16" cy="16" r="12" />
<path d="M13 11l8 5-8 5z" />
</svg>
);
}

function FavouriteIcon() {
return (
<svg viewBox="0 0 32 32">
<path d="M8 4h16v24l-8-5-8 5z" />
<path d="M16 12c-2-3-6-1-6 2 0 3 6 7 6 7s6-4 6-7c0-3-4-5-6-2z" />
</svg>
);
}

function MovieIcon() {
return (
<svg viewBox="0 0 32 32">
<circle cx="14" cy="15" r="10" />
<circle cx="14" cy="10" r="2" />
<circle cx="9" cy="15" r="2" />
<circle cx="18" cy="15" r="2" />
<circle cx="14" cy="20" r="2" />
<path d="M22 21l6 6" />
</svg>
);
} 5. Exact H1

The developer should not make the entire heading purple.

Use white for most of the H1:

#FBFBFF

Only these:

£9.99
24-Hour Trial

get:

linear-gradient(
100deg,
#B64CFF 0%,
#9450FF 25%,
#744EFF 58%,
#5362FF 100%
)

That is what creates this specific look:

IPTV UK Subscription from £9.99 with a Free 24-Hour Trial

6. Exact background recipe

This is the part your developer should copy without simplifying it:

background:
radial-gradient(
circle at 5% 63%,
rgba(35, 77, 255, 0.30) 0%,
rgba(25, 55, 220, 0.15) 18%,
transparent 40%
),

radial-gradient(
circle at 91% 50%,
rgba(134, 34, 255, 0.27) 0%,
rgba(91, 28, 214, 0.14) 23%,
transparent 48%
),

radial-gradient(
circle at 52% 89%,
rgba(78, 46, 255, 0.16) 0%,
transparent 40%
),

linear-gradient(
180deg,
#020316 0%,
#02051D 37%,
#03082B 68%,
#010315 100%
);

The result should be:

Left/lower area: blue glow
Right area: purple glow
Centre: extremely dark navy
Top: nearly black/navy
Bottom: navy-black

Not a flat purple background.

7. Exact CTA gradient

Primary:

linear-gradient(
100deg,
#4A4CFF 0%,
#6946FF 42%,
#A82BF1 100%
)

Border:

rgba(207, 143, 255, 0.60)

Glow:

box-shadow:
0 7px 24px rgba(91, 58, 255, 0.28),
0 0 18px rgba(153, 47, 255, 0.22),
inset 0 1px 0 rgba(255, 255, 255, 0.20);

Secondary:

background:
linear-gradient(
180deg,
#FFFFFF 0%,
#F4F3FA 100%
);

color: #090A23; 8. Tailwind usage

You don't actually need to duplicate every colour into Tailwind configuration. Because all master values are CSS variables, Tailwind can consume them directly:

<div className="bg-[var(--telvis-bg-main)]">
<div className="text-[var(--telvis-heading)]">
<div className="border-[var(--telvis-border-purple)]">
<div className="shadow-[0_0_25px_rgba(101,63,255,0.60)]">

For your H1 gradient:

<span
className="
bg-[linear-gradient(100deg,#B64CFF_0%,#9450FF_25%,#744EFF_58%,#5362FF_100%)]
bg-clip-text
text-transparent
"

> £9.99
> </span>

For the primary CTA:

className="
bg-[linear-gradient(100deg,#4A4CFF_0%,#6946FF_42%,#A82BF1_100%)]
text-white
" 9. Developer colour sheet

Give them these as the master colours:

TELVIS MASTER PALETTE

Page Black
#01020D

Main Navy
#020316

Mid Navy
#02051D

Blue Navy
#03082B

Electric Blue
#4D5CFF

Indigo
#6246FF

Main Violet
#744EFF

Purple
#9450FF

Bright Purple
#B64CFF

Pink Purple
#C14BFF

H1 White
#FBFBFF

Pure White
#FFFFFF

Paragraph
rgba(229,229,240,0.86)

Blue Glow
rgba(35,77,255,0.30)

Purple Glow
rgba(134,34,255,0.27)
H1 gradient
#B64CFF
→ #9450FF
→ #744EFF
→ #5362FF
CTA gradient
#4A4CFF
→ #6946FF
→ #A82BF1
Orbit gradient
#5262FF
→ #8250FF
→ #C14BFF
One important detail for the live website

The 9:41 / Dynamic Island / Wi-Fi / battery visible in the design should normally not be coded into the actual website. Those are device/status-bar elements and were useful for the mobile design presentation.

The actual production hero should begin with the Telvis navbar. On a real iPhone, iOS supplies its own status area.

Everything from the Telvis navbar downward should use the code above.

That will give your developer a much closer reproduction of the final Telvis concept than using one generic purple hex throughout.
