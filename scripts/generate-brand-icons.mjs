import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");
const source = path.join(publicDir, "logo-mark.png");

const DARK_BG = { r: 11, g: 8, b: 40, alpha: 1 };

async function writeSquare(size, outPath, padding = 0.12, background = DARK_BG) {
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
      background,
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
      background: DARK_BG,
    },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);
}

function pngsToIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + 16 * count;
  let offset = headerSize;
  const entries = pngBuffers.map((buf) => {
    const entry = { buf, offset, size: buf.length };
    offset += buf.length;
    return entry;
  });

  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);

  let pointer = 6;
  const sizes = [16, 32, 48];
  entries.forEach((entry, index) => {
    const size = sizes[index] ?? 0;
    out.writeUInt8(size === 256 ? 0 : size, pointer);
    out.writeUInt8(size === 256 ? 0 : size, pointer + 1);
    out.writeUInt8(0, pointer + 2);
    out.writeUInt8(0, pointer + 3);
    out.writeUInt16LE(1, pointer + 4);
    out.writeUInt16LE(32, pointer + 6);
    out.writeUInt32LE(entry.size, pointer + 8);
    out.writeUInt32LE(entry.offset, pointer + 12);
    pointer += 16;
  });

  for (const entry of entries) {
    entry.buf.copy(out, entry.offset);
  }

  return out;
}

await mkdir(publicDir, { recursive: true });

await Promise.all([
  writeSquare(16, path.join(publicDir, "favicon-16.png"), 0.08),
  writeSquare(32, path.join(publicDir, "favicon-32.png"), 0.08),
  writeSquare(48, path.join(publicDir, "favicon-48.png"), 0.08),
  writeSquare(96, path.join(publicDir, "favicon-96.png"), 0.08),
  writeSquare(180, path.join(publicDir, "apple-touch-icon.png"), 0.12),
  writeSquare(192, path.join(publicDir, "icon-192.png"), 0.12),
  writeSquare(512, path.join(publicDir, "icon-512.png"), 0.12),
  writeSquare(512, path.join(publicDir, "logo-512.png"), 0.12),
  writeOgImage(path.join(publicDir, "og-image.png")),
]);

const icoPngs = await Promise.all(
  [16, 32, 48].map((size) =>
    sharp(path.join(publicDir, `favicon-${size}.png`)).png().toBuffer(),
  ),
);

await writeFile(path.join(publicDir, "favicon.ico"), pngsToIco(icoPngs));

console.log("Brand icons generated (dark background, stable /favicon.ico).");
