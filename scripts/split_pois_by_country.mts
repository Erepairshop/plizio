// Generates per-country POI JSON files for lazy-loading on map pages.
// Each /public/data/pois/{cc}.json contains POIs whose parent === cc or starts with cc + "-"
// Runs after prepare_v2_data.mjs (which writes _all_v2_pois_*.json chunks).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.resolve(__dirname, "..", "lib", "visualLab", "data");
const OUT = path.resolve(__dirname, "..", "public", "data", "pois");

fs.mkdirSync(OUT, { recursive: true });

// Load V2 chunks
const v2: any[] = [];
for (let i = 0; i < 16; i++) {
  const fp = path.join(DATA, `_all_v2_pois_${String(i).padStart(2, "0")}.json`);
  if (!fs.existsSync(fp)) continue;
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  for (const p of arr) v2.push(p);
}
console.log(`V2 POIs loaded: ${v2.length}`);

// Group by country code (extracted from parent)
const byCountry: Record<string, any[]> = {};
for (const p of v2) {
  if (!p?.parent) continue;
  const cc = p.parent.split("-")[0];
  if (!cc || cc.length > 4) continue;
  (byCountry[cc] = byCountry[cc] || []).push(p);
}

let totalBytes = 0;
const sizes: [string, number, number][] = [];
for (const [cc, arr] of Object.entries(byCountry)) {
  const fp = path.join(OUT, `${cc}.json`);
  const json = JSON.stringify(arr);
  fs.writeFileSync(fp, json, "utf8");
  totalBytes += json.length;
  sizes.push([cc, arr.length, json.length]);
}
sizes.sort((a, b) => b[2] - a[2]);
console.log(`Wrote ${sizes.length} country files to ${OUT}`);
console.log(`Total: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
console.log("Top 10 by size:");
for (const [cc, count, bytes] of sizes.slice(0, 10)) {
  console.log(`  ${cc}: ${count} POIs, ${(bytes / 1024).toFixed(0)} KB`);
}
