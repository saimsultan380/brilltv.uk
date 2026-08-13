import pngToIco from "png-to-ico";
import sharp from "sharp";
import { copyFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");
const source = path.join(publicDir, "logo-mark.png");

const WHITE_BG = { r: 255, g: 255, b: 255, alpha: 1 };

async function writeSquare(size, outPath, padding = 0.12) {
  const inner = Math.round(size * (1 - padding * 2));
  const logo = await sharp(source)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: WHITE_BG,
    },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);
}

async function writeOgImage(outPath) {
  const width = 1200;
  const height = 630;
  const logoSize = 320;

  const logo = await sharp(source)
    .resize(logoSize, logoSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: WHITE_BG,
    },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);
}

await mkdir(publicDir, { recursive: true });
await mkdir(appDir, { recursive: true });

const favicon16 = path.join(publicDir, "favicon-16.png");
const favicon32 = path.join(publicDir, "favicon-32.png");
const favicon48 = path.join(publicDir, "favicon-48.png");
const favicon96 = path.join(publicDir, "favicon-96.png");
const appleTouch = path.join(publicDir, "apple-touch-icon.png");

await Promise.all([
  writeSquare(16, favicon16, 0.08),
  writeSquare(32, favicon32, 0.08),
  writeSquare(48, favicon48, 0.08),
  writeSquare(96, favicon96, 0.08),
  writeSquare(180, appleTouch, 0.12),
  writeSquare(192, path.join(publicDir, "icon-192.png"), 0.12),
  writeSquare(512, path.join(publicDir, "icon-512.png"), 0.12),
  writeSquare(512, path.join(publicDir, "logo-512.png"), 0.12),
  writeOgImage(path.join(publicDir, "og-image.png")),
]);

const ico = await pngToIco([favicon16, favicon32, favicon48]);
const publicIco = path.join(publicDir, "favicon.ico");
await writeFile(publicIco, ico);

await Promise.all([
  copyFile(favicon48, path.join(appDir, "icon.png")),
  copyFile(appleTouch, path.join(appDir, "apple-icon.png")),
  copyFile(publicIco, path.join(appDir, "favicon.ico")),
]);

console.log("Brand icons generated (white background, favicon.ico + app icons).");
