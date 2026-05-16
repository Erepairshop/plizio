// Generates per-country POI JSON files for lazy-loading on map pages.
// Each /public/data/pois/{cc}.json contains:
//   { pois: POI[],                       // POIs whose parent === cc or starts with cc + "-"
//     poiPaths: { id: {de,hu,ro,en} },   // pre-computed POI detail URL paths
//     statePaths: { stateId: {de,...} }  // pre-computed state map URL paths
//   }
// Runs after prepare_v2_data.mjs (which writes _all_v2_pois_*.json chunks).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.resolve(__dirname, "..", "lib", "visualLab", "data");
const OUT = path.resolve(__dirname, "..", "public", "data", "pois");

fs.mkdirSync(OUT, { recursive: true });

// Pull build helpers + the fully-deduped POI list (V1 + V2 combined).
import * as _slugs from "../lib/seo/slugs";
const s: any = (_slugs as any).default ?? _slugs;
const { buildPoiPath, buildStatePath, SUPPORTED_LANGS, pois: allPois, getCountryId } = s;
console.log(`Combined POIs (V1+V2 deduped): ${allPois.length}`);

// Map ISO2_TO_COUNTRY's countryId values back to ISO codes for cc bucketing.
const COUNTRY_TO_ISO2: Record<string, string> = {
  germany: "DE", hungary: "HU", romania: "RO", poland: "PL", austria: "AT",
  switzerland: "CH", liechtenstein: "LI", italy: "IT", france: "FR", spain: "ES",
  portugal: "PT", netherlands: "NL", belgium: "BE", luxembourg: "LU", denmark: "DK",
  sweden: "SE", norway: "NO", finland: "FI", iceland: "IS", ireland: "IE",
  uk: "GB", czechia: "CZ", slovakia: "SK", slovenia: "SI", croatia: "HR",
  serbia: "RS", bosnia: "BA", montenegro: "ME", northmacedonia: "MK",
  kosovo: "XK", albania: "AL", greece: "GR", bulgaria: "BG", moldova: "MD",
  ukraine: "UA", belarus: "BY", russia: "RU", estonia: "EE", latvia: "LV",
  lithuania: "LT", malta: "MT", cyprus: "CY", monaco: "MC", andorra: "AD",
  sanmarino: "SM", vatican: "VA",
};

function resolveCC(parent: string): string | null {
  // 1) Direct ISO2/3: "HU", "HU-CS", "USA", "USA-NY"
  const first = parent.split("-")[0];
  if (first && first.length >= 2 && first.length <= 3 && first === first.toUpperCase()) {
    return first;
  }
  // 2) Legacy lowercase parent ("csongrad-csanad", "budapest", "fejer"): try getCountryId
  try {
    const cid = getCountryId(parent);
    const iso = COUNTRY_TO_ISO2[cid];
    if (iso) return iso;
  } catch { /* ignore */ }
  return null;
}

const byCountry: Record<string, any[]> = {};
let skipped = 0;
for (const p of allPois) {
  if (!p?.parent) continue;
  if (p.type === "country" || p.type === "region") continue;
  const cc = resolveCC(p.parent);
  if (!cc) { skipped++; continue; }
  (byCountry[cc] = byCountry[cc] || []).push(p);
}
console.log(`Bucketed into ${Object.keys(byCountry).length} countries, ${skipped} skipped (unresolvable parent)`);

let totalBytes = 0;
const sizes: [string, number, number][] = [];
for (const [cc, arr] of Object.entries(byCountry)) {
  const poiPaths: Record<string, Record<string, string>> = {};
  const statePathsSet = new Set<string>();
  for (const p of arr) {
    if (!p?.id) continue;
    const langPaths: Record<string, string> = {};
    for (const lang of SUPPORTED_LANGS) {
      try { langPaths[lang] = buildPoiPath(lang, p); } catch { /* skip */ }
    }
    poiPaths[p.id] = langPaths;
    if (p.parent) statePathsSet.add(p.parent);
  }
  const statePaths: Record<string, Record<string, string>> = {};
  for (const sid of statePathsSet) {
    const langPaths: Record<string, string> = {};
    for (const lang of SUPPORTED_LANGS) {
      try { langPaths[lang] = buildStatePath(lang, sid); } catch { /* skip */ }
    }
    statePaths[sid] = langPaths;
  }
  const payload = { pois: arr, poiPaths, statePaths };
  const fp = path.join(OUT, `${cc}.json`);
  const json = JSON.stringify(payload);
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
