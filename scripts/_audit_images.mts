import * as fs from "node:fs";
import * as path from "node:path";
import * as _slugs from "../lib/seo/slugs";
const s: any = (_slugs as any).default ?? _slugs;
const pois = s.pois as any[];

const PUBLIC = path.resolve(process.cwd(), "public");

let total = 0;
let withImg = 0;
let imgMissing = 0;
let noImg = 0;
const samplesMissing: string[] = [];
const samplesNoImg: string[] = [];

for (const p of pois) {
  if (!p || p.type === "region" || p.type === "country" || !p.parent) continue;
  total++;
  const img = p.image as string | undefined;
  if (!img) {
    noImg++;
    if (samplesNoImg.length < 5) samplesNoImg.push(p.id);
    continue;
  }
  withImg++;
  const fp = path.join(PUBLIC, img.startsWith("/") ? img.slice(1) : img);
  if (!fs.existsSync(fp)) {
    imgMissing++;
    if (samplesMissing.length < 5) samplesMissing.push(`${p.id}: ${img}`);
  }
}

console.log("=== POI image audit ===");
console.log("Total POIs (non-region/country):", total);
console.log("With image field set:          ", withImg);
console.log("  └─ file exists:              ", withImg - imgMissing);
console.log("  └─ file MISSING:             ", imgMissing);
console.log("No image field:                ", noImg);
console.log("");
console.log("Sample missing-file POIs:");
for (const s of samplesMissing) console.log("  ", s);
console.log("");
console.log("Sample no-image-field POIs:");
for (const s of samplesNoImg) console.log("  ", s);
