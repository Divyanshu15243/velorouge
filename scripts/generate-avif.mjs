import sharp from "sharp";
import { statSync, readdirSync } from "fs";
import { join, parse, extname } from "path";

// Generates AVIF siblings (same pixel dimensions) for every WebP actually
// used by the app, so components can offer <source type="image/avif">
// with the existing .webp as fallback. Auto-discovers files instead of a
// hardcoded list so it can't silently drift out of date.
//
// Additionally generates a small set of narrower width variants (for
// srcset) for the true above-the-fold / LCP images passed via RESPONSIVE.

const ASSETS_DIR = join(process.cwd(), "src", "assets");
const AVIF_QUALITY = 55; // visually ~equivalent to webp q78 at much smaller size

// [file relative to src/assets, widths to additionally generate for srcset]
const RESPONSIVE = {
  "hero-bg.webp": [640, 1024, 1600],
  "about-hero.webp": [640, 1024, 1600],
};

function listWebpFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      out.push(...listWebpFiles(join(dir, entry.name)));
    } else if (extname(entry.name) === ".webp") {
      out.push(join(dir, entry.name));
    }
  }
  return out;
}

const files = listWebpFiles(ASSETS_DIR);
const results = [];

for (const inputPath of files) {
  const { dir, name } = parse(inputPath);
  const relName = name + ".webp";
  const beforeBytes = statSync(inputPath).size;
  const meta = await sharp(inputPath).metadata();

  // Full-size AVIF sibling (same dimensions as the existing webp)
  const avifPath = join(dir, name + ".avif");
  await sharp(inputPath).avif({ quality: AVIF_QUALITY }).toFile(avifPath);
  const avifBytes = statSync(avifPath).size;
  results.push({ file: relName, variant: `${meta.width}w.avif`, beforeKB: Math.round(beforeBytes / 1024), afterKB: Math.round(avifBytes / 1024) });

  const widths = RESPONSIVE[relName];
  if (!widths) continue;

  for (const w of widths) {
    if (w >= meta.width) continue;
    const webpOut = join(dir, `${name}-${w}w.webp`);
    const avifOut = join(dir, `${name}-${w}w.avif`);
    const webpInfo = await sharp(inputPath).resize({ width: w }).webp({ quality: 78 }).toFile(webpOut);
    const avifInfo = await sharp(inputPath).resize({ width: w }).avif({ quality: AVIF_QUALITY }).toFile(avifOut);
    results.push({ file: relName, variant: `${w}w.webp`, beforeKB: Math.round(beforeBytes / 1024), afterKB: Math.round(statSync(webpOut).size / 1024) });
    results.push({ file: relName, variant: `${w}w.avif`, beforeKB: Math.round(beforeBytes / 1024), afterKB: Math.round(statSync(avifOut).size / 1024) });
  }
}

console.log("\nsource webp -> variant | source KB -> variant KB");
let totalAfter = 0;
for (const r of results) {
  totalAfter += r.afterKB;
  console.log(`${r.file} -> ${r.variant} | ${r.beforeKB}KB -> ${r.afterKB}KB`);
}
console.log(`\nGenerated ${results.length} files, ${(totalAfter / 1024).toFixed(1)}MB total`);
