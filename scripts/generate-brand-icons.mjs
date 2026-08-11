import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");
const source = path.join(publicDir, "logo-mark.png");

const BRAND_BG = { r: 255, g: 255, b: 255, alpha: 1 };

async function writeSquare(size, outPath, padding = 0.12) {
  const inner = Math.round(size * (1 - padding * 2));
  const logo = await sharp(source)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BRAND_BG,
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
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: BRAND_BG,
    },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);
}

await mkdir(publicDir, { recursive: true });

await Promise.all([
  writeSquare(16, path.join(publicDir, "favicon-16.png"), 0.1),
  writeSquare(32, path.join(publicDir, "favicon-32.png"), 0.1),
  writeSquare(48, path.join(publicDir, "favicon-48.png"), 0.1),
  writeSquare(96, path.join(publicDir, "favicon-96.png"), 0.1),
  writeSquare(180, path.join(publicDir, "apple-touch-icon.png"), 0.12),
  writeSquare(192, path.join(publicDir, "icon-192.png"), 0.12),
  writeSquare(512, path.join(publicDir, "icon-512.png"), 0.12),
  writeSquare(512, path.join(publicDir, "logo-512.png"), 0.12),
  writeOgImage(path.join(publicDir, "og-image.png")),
]);

await copyFile(path.join(publicDir, "favicon-48.png"), path.join(appDir, "icon.png"));
await copyFile(path.join(publicDir, "apple-touch-icon.png"), path.join(appDir, "apple-icon.png"));

console.log("Brand icons generated.");
