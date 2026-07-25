import sharp from "sharp";
import { statSync, readdirSync } from "fs";
import { join, parse } from "path";

const ASSETS_DIR = join(process.cwd(), "src", "assets");
const QUALITY = 78;

// Only the images actually imported by the app. maxWidth caps at the real
// display size (accounting for 2x DPR) so we don't ship oversized pixels.
const IMAGES = [
  // full-bleed / hero backgrounds
  { file: "hero-bg.jpg", maxWidth: 1920 },
  { file: "homebg.jpg", maxWidth: 1920 },
  { file: "about-hero.jpg", maxWidth: 1920 },

  // grid / card / contain images (max ~half a 1200px container at 2x DPR)
  { file: "difference.png", maxWidth: 1200 },
  { file: "deliver-bike.jpg", maxWidth: 1200 },
  { file: "founder2.png", maxWidth: 1200 },
  { file: "cycle2.png", maxWidth: 1200 },
  { file: "8.png", maxWidth: 1200 },
  { file: "Circuit Culturel.png", maxWidth: 1200 },
  { file: "Boucle des Canaux.png", maxWidth: 1200 },
  { file: "Forêt de Robertsau & Rhin.png", maxWidth: 1200 },
  { file: "Découverte Campagnarde.png", maxWidth: 1200 },
  { file: "petite-france.jpg", maxWidth: 1200 },
  { file: "cathedral.jpg", maxWidth: 1200 },
  { file: "Neustadt.jpeg", maxWidth: 1200 },
  { file: "marché-de-noël1.jpg", maxWidth: 1200 },
  { file: "barrage-vauban.jpg", maxWidth: 1200 },
  { file: "rhine1.jpeg", maxWidth: 1200 },
  { file: "7.png", maxWidth: 1200 },
  { file: "Strasbourg on an E-Bike.png", maxWidth: 1200 },
  { file: "Strasbourg with Kids.png", maxWidth: 1200 },
  { file: "The Alsace Wine Route by E-Bike.png", maxWidth: 1200 },
  { file: "Ride Into Germany.png", maxWidth: 1200 },
  { file: "resident.png", maxWidth: 1200 },
  { file: "approach.png", maxWidth: 1200 },
  { file: "smart-helmet.jpg", maxWidth: 1200 },
  { file: "tech&saftey.png", maxWidth: 1200 },
  { file: "abt1.jpeg", maxWidth: 1200 },

  // small UI assets
  { file: "logo.png", maxWidth: 400 },
];

const results = [];

for (const { file, maxWidth } of IMAGES) {
  const inputPath = join(ASSETS_DIR, file);
  const outName = parse(file).name + ".webp";
  const outputPath = join(ASSETS_DIR, outName);

  const beforeBytes = statSync(inputPath).size;

  const image = sharp(inputPath);
  const meta = await image.metadata();
  const willResize = meta.width && meta.width > maxWidth;

  let pipeline = image.rotate(); // auto-orient from EXIF, then strip
  if (willResize) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }
  const info = await pipeline
    .webp({ quality: QUALITY })
    .toFile(outputPath);

  const afterBytes = statSync(outputPath).size;
  results.push({
    file,
    outName,
    beforeKB: Math.round(beforeBytes / 1024),
    afterKB: Math.round(afterBytes / 1024),
    width: info.width,
    height: info.height,
  });
}

console.log("\nfile -> webp | before KB -> after KB | WxH");
let totalBefore = 0;
let totalAfter = 0;
for (const r of results) {
  totalBefore += r.beforeKB;
  totalAfter += r.afterKB;
  console.log(`${r.file} -> ${r.outName} | ${r.beforeKB}KB -> ${r.afterKB}KB | ${r.width}x${r.height}`);
}
console.log(`\nTotal: ${(totalBefore / 1024).toFixed(1)}MB -> ${(totalAfter / 1024).toFixed(1)}MB`);
