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

// Junk numbered-series filter (mirror of generate-poi-html): drop OSM bulk-import
// numbered sight series (Neckar-Enz-Stellung Bunker 301…, Mirador 5, Mound 60…).
function sightSeriesPrefix(name: unknown): string {
  if (typeof name !== "string") return "";
  const orig = name.trim().toLowerCase();
  if (!/\d/.test(orig)) return "";
  let n = orig.replace(/\s+(bunker|nr\.?|no\.?|abschnitt|werk|position|№|#)?\s*\d{1,4}[a-z]?\s*$/i, "");
  n = n.replace(/\s+(bunker|werk)\s*$/i, "");
  n = n.replace(/\s+[ivxlcdm]{1,4}\s*$/i, "");
  n = n.replace(/\s+/g, " ").trim();
  return (n && n !== orig) ? n : "";
}
function dropJunkSeries(byLang: any): any {
  if (!byLang || typeof byLang !== "object") return byLang;
  const out: Record<string, any> = {};
  for (const [lang, arr] of Object.entries(byLang)) {
    if (!Array.isArray(arr)) { out[lang] = arr; continue; }
    const c = new Map<string, number>();
    for (const x of arr as any[]) { const p = sightSeriesPrefix(x?.name); if (p) c.set(p, (c.get(p) || 0) + 1); }
    const junk = new Set<string>(); for (const [p, n] of c) if (n >= 4) junk.add(p);
    out[lang] = junk.size ? (arr as any[]).filter((x) => { const p = sightSeriesPrefix(x?.name); return !(p && junk.has(p)); }) : arr;
  }
  return out;
}

const DATA = path.resolve(__dirname, "..", "lib", "visualLab", "data");
const OUT = path.resolve(__dirname, "..", "public", "data", "pois");

fs.mkdirSync(OUT, { recursive: true });

// Population → 5-tier mapping for city POIs. T1>200K, T2>50K, T3>20K, T4>10K, T5<=10K.
// Map shows T1+T2 by default; user can enable T3-T5 via filter. Only "city" type
// POIs get a tier; landmarks/rivers/mountains/etc stay always-visible.
const HU_POP: Record<string, number> = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "..", "lib", "visualLab", "data", "hu_city_population.json"), "utf8")
);
function popToTier(pop: number): 1 | 2 | 3 | 4 | 5 {
  if (pop > 200000) return 1;
  if (pop > 50000) return 2;
  if (pop > 20000) return 3;
  if (pop > 10000) return 4;
  return 5;
}
// Returns the tier for a city POI.
// Priority order:
//   1) p.population field set directly on the POI (preferred, language-agnostic)
//   2) HU_POP lookup table (legacy HU coverage)
//   3) Default tier 4 if no data — small-town tier so villages without population
//      don't pollute the default T1+T2 view (Domnești was showing up at T1).
function cityTier(p: { id: string; population?: number }): 1 | 2 | 3 | 4 | 5 {
  if (typeof p.population === "number" && p.population > 0) return popToTier(p.population);
  const pop = HU_POP[p.id];
  return pop !== undefined ? popToTier(pop) : 4;
}

// Pull build helpers from slugs (lite — no heavy text).
import * as _slugs from "../lib/seo/slugs";
const s: any = (_slugs as any).default ?? _slugs;
const { buildPoiPath, buildStatePath, SUPPORTED_LANGS, getCountryId } = s;

// Load the FULL POI dataset (with description / facts / descriptionAdvanced
// fields) directly from the source TS files. slugs.ts exports only the lite
// shape now (#50 refactor) so the popup content would be missing if we used
// `pois` from there. Heavy import is fine here — this script runs as a
// standalone tsx process with 16 GB heap, no webpack worker constraints.
// Use the auto-generated manifest as single source of truth for all POI files.
const { ALL_POI_SOURCES } = await import("../lib/visualLab/data/_all_poi_sources.generated");
const { vaticanCountry } = await import("../lib/visualLab/data/vaticanPoi");

// Dedup by id keeping the richest copy (matches slugs.ts dedup behaviour).
function richness(p: any): number {
  let n = 0;
  for (const l of ["de", "hu", "ro", "en"]) {
    n += (p?.description?.[l]?.length || 0);
    n += (p?.descriptionAdvanced?.[l]?.length || 0);
  }
  return n;
}
const rawAll: any[] = (ALL_POI_SOURCES as any[]).concat([vaticanCountry as any]);
const byId = new Map<string, any>();
for (const p of rawAll) {
  if (!p?.id) continue;
  const prev = byId.get(p.id);
  if (!prev || richness(p) > richness(prev)) byId.set(p.id, p);
}
const _DEDUP_BLOCK = new Set<string>(
  JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "lib/visualLab/data/_dedup_blocklist.json"), "utf-8")),
);
const allPois = Array.from(byId.values()).filter((p: any) => !_DEDUP_BLOCK.has(p.id));
console.log(`Combined POIs (V1+V2 deduped, with full text): ${allPois.length} (dedup-block: ${_DEDUP_BLOCK.size})`);

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

// Explicit Hungarian county parents → HU. getCountryId() was misclassifying
// these as "germany" (default fallback) which kept budapest-city + ~120
// county POIs out of the HU map.
const HU_PARENTS = new Set<string>([
  "budapest", "baranya", "bacs-kiskun", "bekes", "borsod-abauj-zemplen",
  "csongrad-csanad", "csongrad", "fejer", "gyor-moson-sopron", "hajdu-bihar",
  "heves", "jasz-nagykun-szolnok", "komarom-esztergom", "nograd", "pest",
  "somogy", "szabolcs-szatmar-bereg", "tolna", "vas", "veszprem", "zala",
]);

function resolveCC(parent: string): string | null {
  // 1) Direct ISO2/3: "HU", "HU-CS", "USA", "USA-NY"
  const first = parent.split("-")[0];
  if (first && first.length >= 2 && first.length <= 3 && first === first.toUpperCase()) {
    return first;
  }
  // 2) Hungarian county slugs (explicit allow-list — getCountryId misclassifies these)
  const head = parent.split("-").slice(0, 3).join("-");
  if (HU_PARENTS.has(parent) || HU_PARENTS.has(head)) return "HU";
  // 3) Legacy lowercase parent ("csongrad-csanad", "budapest", "fejer"): try getCountryId
  try {
    const cid = getCountryId(parent);
    // getCountryId emits hyphenated ids ("san-marino", "north-macedonia") while
    // COUNTRY_TO_ISO2 keys are unhyphenated ("sanmarino", "northmacedonia").
    // Try both so e.g. parent "sm-sm" / "country-mk" still bucket — otherwise the
    // San Marino landmarks and Skopje (MK capital) drop off their country maps.
    const iso = COUNTRY_TO_ISO2[cid] || COUNTRY_TO_ISO2[(cid || "").replace(/-/g, "")];
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

// Slim down each POI to the fields the map actually needs.
// Strips description / facts / descriptionAdvanced / factsAdvanced / faq /
// plizioChallenge — those are only used on POI detail pages, never on the map.
// Result: typical country JSON shrinks from ~2-6 MB to ~0.2-0.6 MB.
function firstSentence(s: string, maxLen = 220): string {
  if (!s) return "";
  const t = s.trim();
  // Take up to the first period, exclamation or question mark; cap at maxLen.
  const m = t.match(/^[^.!?]+[.!?]/);
  let out = m ? m[0].trim() : t;
  if (out.length > maxLen) out = out.slice(0, maxLen).replace(/\s+\S*$/, "") + "…";
  return out;
}
// Synthesise a popup-sized description from descriptionAdvanced when the
// source POI has no explicit short `description` field (common on V2 POIs).
function popupDescription(p: any): Record<string, string> | undefined {
  if (p.description) return p.description;
  const da = p.descriptionAdvanced;
  if (!da || typeof da !== "object") return undefined;
  const out: Record<string, string> = {};
  for (const lang of ["de", "hu", "ro", "en"]) {
    const v = da[lang];
    if (typeof v === "string" && v.trim().length > 0) out[lang] = firstSentence(v);
  }
  return Object.keys(out).length > 0 ? out : undefined;
}
// Same idea for facts: prefer the explicit short list; otherwise use factsAdvanced
// (already a 3-6 item array per lang).
function popupFacts(p: any): Record<string, string[]> | undefined {
  if (p.facts) return p.facts;
  const fa = p.factsAdvanced;
  if (!fa || typeof fa !== "object") return undefined;
  const out: Record<string, string[]> = {};
  for (const lang of ["de", "hu", "ro", "en"]) {
    const arr = fa[lang];
    if (Array.isArray(arr) && arr.length > 0) out[lang] = arr.slice(0, 6);
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

// Explicit allow-list: only fields needed for map marker + popup head + summary.
// Heavy fields (sights, nearbySights, descriptionAdvanced, factsAdvanced, faq,
// plizioChallenge) are stripped — sights/nearbySights are split to
// /data/sights/{id}.json for lazy-fetch; the rest live on per-POI detail pages.
const slim = (p: any) => {
  const popDesc = popupDescription(p);
  const popFacts = popupFacts(p);
  return {
    id: p.id,
    type: p.type,
    parent: p.parent,
    coords: p.coords,
    name: p.name,
    image: p.image,
    coa: p.coa,
    audio: p.audio,
    subjects: p.subjects,
    grades: p.grades,
    ...(p.imageHint ? { imageHint: p.imageHint } : {}),
    ...(p.image_hint ? { image_hint: p.image_hint } : {}),
    ...(p.coordinates ? { coordinates: p.coordinates } : {}),
    ...(p.historyPeriod ? { historyPeriod: p.historyPeriod } : {}),
    ...(p.historyYear !== undefined ? { historyYear: p.historyYear } : {}),
    ...(p.elevation !== undefined ? { elevation: p.elevation } : {}),
    ...(p.length !== undefined ? { length: p.length } : {}),
    ...(p.area !== undefined ? { area: p.area } : {}),
    ...(p.region ? { region: p.region } : {}),
    ...(p.altNames ? { altNames: p.altNames } : {}),
    ...(popDesc ? { description: popDesc } : {}),
    ...(popFacts ? { facts: popFacts } : {}),
    // population stays in slim payload — used by per-tier cap in InteractiveMap.tsx
    // (sort by population desc within tier so the top-100 picked are real big cities).
    ...(typeof p.population === "number" && p.population > 0 ? { population: p.population } : {}),
    ...((p.sights || p.nearbySights || p.descriptionAdvanced || p.factsAdvanced || p.faq || p.plizioChallenge) ? { hasSights: true as const } : {}),
    ...((p.type === "city" || p.type === "state-capital") ? { tier: cityTier(p) } : {}),
  };
};

// Per-POI heavy data (sights + nearbySights) is split into /data/sights/{poi-id}.json
// for lazy-fetch by the popup. Build the index here so the country loop can also
// write the JSON files alongside.
const SIGHTS_OUT = path.resolve(__dirname, "..", "public", "data", "sights");
fs.mkdirSync(SIGHTS_OUT, { recursive: true });
let sightFilesWritten = 0;

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
  const slimPois = arr.map(slim);
  const payload = { pois: slimPois, poiPaths, statePaths };
  const fp = path.join(OUT, `${cc}.json`);
  const json = JSON.stringify(payload);
  fs.writeFileSync(fp, json, "utf8");
  totalBytes += json.length;
  sizes.push([cc, arr.length, json.length]);

  // Write per-POI heavy data (sights + nearbySights + advanced text + faq) for
  // lazy-fetch by the popup. Only emitted if at least one heavy field exists.
  for (const p of arr) {
    if (!p?.id) continue;
    const heavy: Record<string, unknown> = {};
    if (p.sights) heavy.sights = dropJunkSeries(p.sights);
    if (p.nearbySights) heavy.nearbySights = dropJunkSeries(p.nearbySights);
    if (p.descriptionAdvanced) heavy.descriptionAdvanced = p.descriptionAdvanced;
    if (p.factsAdvanced) heavy.factsAdvanced = p.factsAdvanced;
    if (p.faq) heavy.faq = p.faq;
    if (p.plizioChallenge) heavy.plizioChallenge = p.plizioChallenge;
    if (Object.keys(heavy).length === 0) continue;
    const sfp = path.join(SIGHTS_OUT, `${p.id}.json`);
    fs.writeFileSync(sfp, JSON.stringify(heavy), "utf8");
    sightFilesWritten += 1;
  }
}
console.log(`Sights split: wrote ${sightFilesWritten} per-POI sights JSON files to ${SIGHTS_OUT}`);
sizes.sort((a, b) => b[2] - a[2]);
console.log(`Wrote ${sizes.length} country files to ${OUT}`);
console.log(`Total: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
console.log("Top 10 by size:");
for (const [cc, count, bytes] of sizes.slice(0, 10)) {
  console.log(`  ${cc}: ${count} POIs, ${(bytes / 1024).toFixed(0)} KB`);
}
