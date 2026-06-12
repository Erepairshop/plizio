/**
 * Static HTML generator for POI pages.
 *
 * Why: Next.js `output:export` hits a V8 spread-arg limit (~65k) when
 * generateStaticParams returns >65K entries. Plizio has ~38K POIs × 4 langs =
 * ~152K target pages — too many for Next's built-in static export. Runtime
 * ISR migration was attempted and failed (POI page render hangs silently).
 *
 * This script bypasses Next entirely for POI detail pages: it walks the
 * dedup'd `pois` array, renders a plain HTML file per POI × lang, and writes
 * to `out/<lang>/<country>/<state>/<poi>/index.html`. Each file is 10-20 KB
 * (vs Next's 200-500 KB) because there is no React hydration payload.
 *
 * Usage:
 *   npx tsx scripts/generate-poi-html.mts            # generate ALL
 *   GEN_LIMIT=100 npx tsx scripts/generate-poi-html.mts   # only first N POIs (test)
 */

import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { createRequire } from "node:module";
const _tzRequire = createRequire(import.meta.url);
let _tzLookup: ((lat: number, lng: number) => string) | null = null;
try { _tzLookup = _tzRequire("tz-lookup"); } catch { _tzLookup = null; }
import * as _slugsNs from "../lib/seo/slugs";
import type { POI } from "../lib/visualLab/data/poi";
import * as _exploreNs from "../lib/explore/explore-block";
import type { HubLang } from "../lib/seo/sightsHubs";
import * as _hubsNs from "../lib/seo/sightsHubs";
const _expl: any = (_exploreNs as any).default ?? _exploreNs;
const _hubs: any = (_hubsNs as any).default ?? _hubsNs;
const sightsHubSlug: (countryId: string, lang: string) => string | null = _hubs.sightsHubSlug;
const SIGHTS_HUB_LABEL: Record<HubLang, string> = _hubs.SIGHTS_HUB_LABEL;
const renderExploreBlock = _expl.renderExploreBlock as (o: any) => string;
const EXPLORE_CSS = _expl.EXPLORE_CSS as string;
// timing-config loaded dynamically below to avoid Node 24 ESM static-resolver issue
let recomputeItineraryTimings: (itin: any, tier?: number) => void = () => {};
try {
  const tc = await import("../lib/itinerary/timing-config.ts");
  recomputeItineraryTimings = tc.recomputeItineraryTimings;
} catch {
  try {
    const tc2 = await import("../lib/itinerary/timing-config");
    recomputeItineraryTimings = tc2.recomputeItineraryTimings;
  } catch {}
}

// tsx ESM treats the TS module as CJS-wrapped → real exports on .default
const slugs: any = (_slugsNs as any).default ?? _slugsNs;
const {
  SUPPORTED_LANGS,
  buildCountryPath,
  buildStatePath,
  buildPoiPath,
  countrySlugFor,
  getCountryId,
  getUnknownParentWarnings,
  regions,
} = slugs;

// Load official links (POI id → {site, fb}) once at startup. Renders inline
// in each POI page next to the news block. Missing file → empty map.
let OFFICIAL_LINKS: Record<string, { site?: string; fb?: string }> = {};
try {
  const olPath = path.resolve(process.cwd(), "public", "data", "official-links.json");
  if (fs.existsSync(olPath)) {
    OFFICIAL_LINKS = JSON.parse(fs.readFileSync(olPath, "utf-8"));
  }
} catch {}

// Yearly highlights — AI-curated 1-3 top events of 2026 per city POI.
// Build-time loaded once. Rendered as a kiemelten visible section above news.
type YHEvent = {
  title: Partial<Record<string, string>>;
  summary: Partial<Record<string, string>>;
  source_url?: string;
  date?: string;
  image_url?: string;
  image_credit?: string;
  category?: Partial<Record<string, string>> | string;
  price?: Partial<Record<string, string>> | string;
  period?: { start_time?: string; end_time?: string; applies_on_day?: string; recurrent?: boolean } | string;
};
let YEARLY_HIGHLIGHTS: Record<string, YHEvent[]> = {};
try {
  const yhPath = path.resolve(process.cwd(), "public", "data", "poi-yearly-highlights.json");
  if (fs.existsSync(yhPath)) {
    YEARLY_HIGHLIGHTS = JSON.parse(fs.readFileSync(yhPath, "utf-8"));
  }
} catch {}

// DescAdv tier1-2 sidecar — 2227 POIs whose Pro-generated descriptionAdvanced
// lives outside the multi-line *Poi.ts files. Renderer falls back to this
// when the inline descAdv is missing or too short (<400 chars per lang).
let DESCADV_SIDECAR: Record<string, Record<string, string>> = {};
try {
  const daPath = path.resolve(process.cwd(), "public", "data", "pliziogo-descadv-tier12.json");
  if (fs.existsSync(daPath)) {
    DESCADV_SIDECAR = JSON.parse(fs.readFileSync(daPath, "utf-8"));
  }
} catch {}

// Image fallback index — many POI source files lack the `image` field even
// though a matching .webp lives on VPS under /poi-images/ or /geo-images/.
// Scan once at startup; if `poi.image` is empty, render-time fallback uses
// `/poi-images/<id>.webp` first, then `/geo-images/<id>.webp`, then a wider
// per-country pattern match (france-<id>-cities-v2.webp etc).
const IMG_SET = new Set<string>();
const IMG_BY_STEM = new Map<string, string>(); // normalized stem → "/poi-images/<file>" path
try {
  for (const dir of ["public/poi-images", "public/geo-images", "poi-images", "geo-images"]) {
    const abs = path.resolve(process.cwd(), dir);
    if (!fs.existsSync(abs)) continue;
    const urlPrefix = dir.startsWith("public/") ? "/" + dir.slice("public/".length) : "/" + dir;
    for (const f of fs.readdirSync(abs)) {
      if (!f.endsWith(".webp")) continue;
      IMG_SET.add(f);
      const stem = f.slice(0, -5); // strip .webp
      const url = `${urlPrefix}/${f}`;
      // Exact key
      if (!IMG_BY_STEM.has(stem)) IMG_BY_STEM.set(stem, url);
      // Pattern variants: strip `france-` / `<country>-` prefix and `-cities-v2` / `-bis-cities-v2` / `-extra` suffixes
      let core = stem;
      core = core.replace(/^(france|germany|hungary|romania|italy|spain|poland|austria|switzerland|netherlands|belgium|portugal|ireland|uk|greece|croatia|bulgaria|sweden|norway|denmark|finland|czech|slovakia|slovenia|estonia|latvia|lithuania)-/i, "");
      core = core.replace(/-(bis|south|north|east|west|alt|south2|north2)-(cities|history|landmarks|life|economic|nature|relief)-v\d+$/i, "");
      core = core.replace(/-(cities|history|landmarks|life|economic|nature|relief)-v\d+$/i, "");
      core = core.replace(/-(extra|poi|v\d+)$/i, "");
      if (core !== stem && !IMG_BY_STEM.has(core)) IMG_BY_STEM.set(core, url);
    }
  }
  if (IMG_SET.size > 0) {
    console.log(`[poi-html] image-index: ${IMG_SET.size} files, ${IMG_BY_STEM.size} lookup keys`);
  }
} catch (e) {
  console.log(`[poi-html] image-index init failed: ${(e as Error).message}`);
}
// `_image-manifest.json` = a VPS-en TÉNYLEGESEN létező képek listája (62K) —
// MINDIG merge-elni kell a lokális szkennel, mert lokálban csak ~24K kép van:
// a csak-VPS-en-élő képeket a dir-szken nem látja → a nearby-kártyák tévesen
// placeholdert kaptak, miközben a cél-oldalon ott a kép (sync-bug 2026-06-06).
try {
  const manifestPath = path.resolve(process.cwd(), "public", "data", "_image-manifest.json");
  if (fs.existsSync(manifestPath)) {
    const arr = JSON.parse(fs.readFileSync(manifestPath, "utf-8")) as string[];
    for (const f of arr) {
      if (!f.endsWith(".webp")) continue;
      IMG_SET.add(f);
      const stem = f.slice(0, -5);
      if (!IMG_BY_STEM.has(stem)) IMG_BY_STEM.set(stem, `/poi-images/${f}`);
      let core = stem;
      core = core.replace(/^(france|germany|hungary|romania|italy|spain|poland|austria|switzerland|netherlands|belgium|portugal|ireland|uk|greece|croatia|bulgaria|sweden|norway|denmark|finland|czech|slovakia|slovenia|estonia|latvia|lithuania)-/i, "");
      core = core.replace(/-(bis|south|north|east|west|alt|south2|north2)-(cities|history|landmarks|life|economic|nature|relief)-v\d+$/i, "");
      core = core.replace(/-(cities|history|landmarks|life|economic|nature|relief)-v\d+$/i, "");
      core = core.replace(/-(extra|poi|v\d+)$/i, "");
      if (core !== stem && !IMG_BY_STEM.has(core)) IMG_BY_STEM.set(core, `/poi-images/${f}`);
    }
    console.log(`[poi-html] image-index loaded from manifest fallback: ${IMG_SET.size} files`);
  }
} catch (e) {
  console.log(`[poi-html] manifest fallback failed: ${(e as Error).message}`);
}
function lookupFallbackImage(poiId: string): string | null {
  const tryName = (s: string): string | null => {
    if (IMG_SET.has(`${s}.webp`)) return `/poi-images/${s}.webp`;
    // umlaut transliteration: nuernberg ↔ nurnberg, koeln ↔ koln, etc.
    const stripped = s.replace(/ae/g, "a").replace(/oe/g, "o").replace(/ue/g, "u").replace(/ss/g, "s");
    if (stripped !== s && IMG_SET.has(`${stripped}.webp`)) return `/poi-images/${stripped}.webp`;
    const geo = IMG_BY_STEM.get(s);
    if (geo) return geo;
    return null;
  };
  const direct = tryName(poiId);
  if (direct) return direct;
  // Strip common ID prefixes/suffixes (city-X → X, X-extra/X-poi → X)
  let core = poiId;
  if (core.startsWith("city-")) core = core.slice(5);
  core = core.replace(/-(extra|poi)$/, "");
  if (core !== poiId) return tryName(core);
  return null;
}

// poi.image neha letoltetlen (404) fajlra mutat (pl. tz-ras-mkumbuu-history-v2.webp).
// Ha az image-index betoltott (local dir VAGY _image-manifest.json, >=1000 fajl),
// validaljuk a poi.image-et; ha a fajl nincs meg → fallback (lookup → null → placeholder).
// Ha az index ures (nem sikerult betolteni), bizalom a poi.image-ben (ne uritsunk mindent).
const IMG_INDEX_READY = IMG_SET.size >= 1000;
function imageExists(p?: string | null): boolean {
  if (!p) return false;
  if (!IMG_INDEX_READY) return true;
  return IMG_SET.has(p.split("/").pop() || "");
}
function resolveHeroImage(poi: POI): string | null {
  if (poi.image && imageExists(poi.image)) return poi.image;
  return lookupFallbackImage(poi.id);
}

// FAQ sidecar — 5 Q&A per POI in 4 langs (de/hu/ro/en), AI-generated.
// Loaded at startup. Renderer emits both a visible accordion AND a
// FAQPage JSON-LD schema for Google rich-snippet eligibility.
type FAQItem = { q: Partial<Record<string,string>>; a: Partial<Record<string,string>> };
let FAQS: Record<string, FAQItem[]> = {};
try {
  // Sharded: poi-faqs-0.json .. poi-faqs-N.json (a monolit 169MB tullepi a GitHub
  // 100MB limitet, ezert shardolva commitoljuk). Fallback a regi poi-faqs.json-ra.
  const dataDir = path.resolve(process.cwd(), "public", "data");
  const shards = fs.readdirSync(dataDir).filter((f) => /^poi-faqs-\d+\.json$/.test(f));
  if (shards.length) {
    for (const s of shards) Object.assign(FAQS, JSON.parse(fs.readFileSync(path.join(dataDir, s), "utf-8")));
  } else {
    const fp = path.join(dataDir, "poi-faqs.json");
    if (fs.existsSync(fp)) FAQS = JSON.parse(fs.readFileSync(fp, "utf-8"));
  }
} catch {}
// hr FAQ is a separate native set (different questions), populated from the
// poi-hr-native.json merge below; renderFAQ uses it for lang === "hr".
const HR_FAQS: Record<string, FAQItem[]> = {};

// Climate sidecar — 12-month normals (mean/max temp, precip mm) per 0.5° grid
// cell (NASA POWER climatology). SSR "best time to visit" block; non-duplicate,
// universal value even for tiny POIs. Keyed by rounded cell coords.
let CLIMATE: Record<string, { tmean: (number | null)[]; tmax: (number | null)[]; precip: (number | null)[] }> = {};
try {
  const fp = path.resolve(process.cwd(), "public", "data", "poi-climate.json");
  if (fs.existsSync(fp)) CLIMATE = JSON.parse(fs.readFileSync(fp, "utf-8"));
} catch {}

// Pick the first STRING among [lang, en, de] from a FAQ q/a object. Some Flash
// FAQ outputs emit a non-string (array/object) for a lang → guard, else .trim()
// throws and kills the whole 152K POI HTML gen (2026-06-09 build crash).
function pickFaqStr(o: Record<string, unknown> | undefined, lang: Lang): string {
  if (!o) return "";
  for (const k of [lang, "en", "de"]) {
    const v = o[k];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return "";
}
function renderFAQ(poi: POI, lang: Lang): string {
  const items = (lang === "hr" && HR_FAQS[poi.id]) ? HR_FAQS[poi.id] : FAQS[poi.id];
  if (!items || items.length === 0) return "";
  const heading: Record<string, string> = {
    de: "Häufige Fragen", hu: "Gyakori kérdések", ro: "Întrebări frecvente",
    en: "Frequently asked questions", fr: "Questions fréquentes", tr: "Sıkça sorulan sorular",
    hr: "Često postavljana pitanja",
  };
  const head = heading[lang] || heading.en!;
  const accordion = items.map((it, i) => {
    const q = pickFaqStr(it.q, lang);
    const a = pickFaqStr(it.a, lang);
    if (!q || !a) return "";
    return `<details class="plz-faq-item"${i === 0 ? " open" : ""}><summary><span class="plz-faq-q">${escapeHtml(q)}</span><svg class="plz-faq-chev" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></summary><div class="plz-faq-a">${escapeHtml(a)}</div></details>`;
  }).filter(Boolean).join("");
  if (!accordion) return "";
  // Schema.org FAQPage JSON-LD (lang-aware)
  const mainEntity = items.map((it) => {
    const q = pickFaqStr(it.q, lang);
    const a = pickFaqStr(it.a, lang);
    if (!q || !a) return null;
    return { "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } };
  }).filter(Boolean);
  const jsonld = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": mainEntity });
  return `<section class="plz-faq"><h2>${escapeHtml(head)}</h2>${accordion}</section>
<script type="application/ld+json">${jsonld.replace(/</g, "\\u003c")}</script>`;
}

// Street View availability sidecar — {"lat,lng"@4dp: 1 | "<pano_id>"} positives
// from the free SV metadata sweep (scripts/_dump_sight_coords.mts + VPS
// _sv_meta_fetch.py / _sv_pano_fetch.py). renderSightCard shows a pegman button
// ONLY for coords present here. String value = pano_id: the link uses
// pano=<id>, mert viewpoint-nal a Google csak ~50m-en belul old fel panoramat
// (a 300m-es sweep-talalatok viewpoint-linkje sima terkepre esett vissza).
let SV_OK: Record<string, 1 | string> = {};
try {
  const svp = path.resolve(process.cwd(), "public", "data", "sight-sv.json");
  if (fs.existsSync(svp)) SV_OK = JSON.parse(fs.readFileSync(svp, "utf-8"));
} catch {}
function svKey(lat: number, lng: number): string { return `${lat.toFixed(4)},${lng.toFixed(4)}`; }
// OSM hard-facts per sight coord (website / opening_hours / fee / wheelchair / ele),
// extracted LLM-free from the OSM dumps (_extract_osm_facts.py). Keyed identically to
// svKey ("lat,lng" @4dp) so renderSightCard can look up by the sight's own coords.
type SightFacts = { website?: string; opening_hours?: string; fee?: string; wheelchair?: string; ele?: number; phone?: string };
let SIGHT_FACTS: Record<string, SightFacts> = {};
try {
  const sfp = path.resolve(process.cwd(), "public", "data", "_sight_facts.json");
  if (fs.existsSync(sfp)) SIGHT_FACTS = JSON.parse(fs.readFileSync(sfp, "utf-8"));
} catch {}
// Pano-id-aware Street View URL — pano_id mindig a konkret panoramat nyitja.
function svHref(lat: number, lng: number): string {
  const v = SV_OK[svKey(lat, lng)];
  const vp = `viewpoint=${lat.toFixed(6)}%2C${lng.toFixed(6)}`;
  return typeof v === "string"
    ? `https://www.google.com/maps/@?api=1&map_action=pano&pano=${v}&${vp}`
    : `https://www.google.com/maps/@?api=1&map_action=pano&${vp}`;
}
// Inline pegman SVG (Street View figura) — orange badge, white figure.
const SV_PEGMAN_SVG = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true"><circle cx="12" cy="4.4" r="2.5" fill="currentColor"/><path d="M12 7.6c-2 0-3.3 1.2-3.3 3v3.6c0 .5.4 1 1 1h.3l.4 4.9c0 .5.5.9 1 .9h1.2c.5 0 1-.4 1-.9l.4-4.9h.3c.6 0 1-.5 1-1v-3.6c0-1.8-1.3-3-3.3-3z" fill="currentColor"/></svg>`;
// Maps pin SVG — sightokhoz, ahol NINCS Street View: direkt Google Maps
// hely-profil link (nev + viewport-bias /@lat,lng,17z -> a Maps a koord
// kornyeken keresi a nevet, a listing-oldalra old fel, nem csak pint dob).
const GMAPS_PIN_SVG = `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" aria-hidden="true"><path d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" fill="currentColor"/><circle cx="12" cy="9" r="2.6" fill="#fff"/></svg>`;
// Loaded once at startup. Used in renderSightCard to inject image when
// the sight itself doesn't have an explicit image URL.
let SIGHT_IMG_MAP: Record<string, string> = {};
try {
  const simPath = path.resolve(process.cwd(), "public", "data", "sight-image-map.json");
  if (fs.existsSync(simPath)) {
    SIGHT_IMG_MAP = JSON.parse(fs.readFileSync(simPath, "utf-8"));
  }
} catch {}
function slugifySight(s: string): string {
  return s.toLowerCase()
    .normalize("NFKD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function lookupSightImage(name: string, poiId: string): string | undefined {
  if (!name || !poiId) return undefined;
  const key = `${slugifySight(name)}-${poiId}`;
  return SIGHT_IMG_MAP[key];
}
// Images are keyed by ONE language's name-slug (usually EN, from the fetcher);
// the same sight on a de/hu/ro page has a different name → try every variant so
// one fetched image displays on all languages.
function lookupSightImageMulti(names: string[], poiId: string): string | undefined {
  for (const n of names) { const u = lookupSightImage(n, poiId); if (u) return u; }
  return undefined;
}
// All-language names of the sight at index `idx` (for cross-lang image lookup).
function sightNameVariantsAt(obj: any, idx: number, fallback: string): string[] {
  const out = new Set<string>(); if (fallback) out.add(fallback);
  if (obj) for (const l of ["en", "de", "hu", "ro"]) {
    const a = obj[l]; if (Array.isArray(a) && a[idx] && a[idx].name) out.add(a[idx].name);
  }
  return [...out];
}

// Sight → POI internal link map: same-country name matches only (350 entries).
// Key format: "<host_poi_id>|<sight_name>" → "<linked_poi_id>"
let SIGHT_POI_LINKS: Record<string, string> = {};
try {
  const splPath = path.resolve(process.cwd(), "public", "data", "sight-poi-links.json");
  if (fs.existsSync(splPath)) {
    SIGHT_POI_LINKS = JSON.parse(fs.readFileSync(splPath, "utf-8"));
  }
} catch {}
function lookupSightPoiLink(hostPoiId: string, sightName: string): string | undefined {
  if (!hostPoiId || !sightName) return undefined;
  return SIGHT_POI_LINKS[`${hostPoiId}|${sightName}`];
}

// Load FULL POI data (with description/facts/advanced) directly via TS imports
// in this standalone tsx process. slugs.ts can't import these heavy files because
// the Next.js build workers would OOM, but this script runs separately with a 16GB
// heap and only Node, so it tolerates the heavy graph.
// Duplicate-city blocklist: ids that are redundant duplicates of a richer POI
// (same place, ≤2km). Excluded everywhere so the kept (richest) POI owns the
// canonical sitemap slug — fixes dup pages + 404 map markers. See _dedup_final.json.
const DEDUP_BLOCK: Set<string> = new Set(
  JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "lib/visualLab/data/_dedup_blocklist.json"), "utf-8")),
);
async function loadFullPois(): Promise<POI[]> {
  const [
    { pois: dePois },
    { romaniaAllPois },
    { hungaryAllPoi },
    { vaticanPois, vaticanCountry },
    { ALL_COUNTRY_POIS, ALL_DE_EXTRA_POIS },
    { poiExtraDeV1 },
    { poiExtraRoV1 },
    { poiExtraHuV4 },
    { poiExtraFrV1 },
    { poiExtraUkV1 },
    { poiExtraUkMissingV1 },
    { poiExtraAtChMissingV1 },
    { poiExtraHrV1 },
    { poiExtraHrV2 },
    { poiExtraItalyV2 },
    { poiExtraEsV2 },
    { poiExtraHrV3 },
    { euNewV1 },
    { glNewV1 },
    { naNewV1 },
  ] = await Promise.all([
    import("../lib/visualLab/data/poi"),
    import("../lib/visualLab/data/romaniaPoi"),
    import("../lib/visualLab/data/hungaryPoi"),
    import("../lib/visualLab/data/vaticanPoi"),
    import("../lib/visualLab/data/allCountryPois"),
    import("../lib/visualLab/data/poiExtraDeV1"),
    import("../lib/visualLab/data/poiExtraRoV1"),
    import("../lib/visualLab/data/poiExtraHuV4"),
    import("../lib/visualLab/data/poiExtraFrV1"),
    import("../lib/visualLab/data/poiExtraUkV1"),
    import("../lib/visualLab/data/poiExtraUkMissingV1"),
    import("../lib/visualLab/data/poiExtraAtChMissingV1"),
    import("../lib/visualLab/data/poiExtraHrV1"),
    import("../lib/visualLab/data/poiExtraHrV2"),
    import("../lib/visualLab/data/poiExtraItalyV2"),
    import("../lib/visualLab/data/poiExtraEsV2"),
    import("../lib/visualLab/data/poiExtraHrV3"),
    import("../lib/visualLab/data/poiExtraEuNewV1"),
    import("../lib/visualLab/data/poiExtraGlNewV1"),
    import("../lib/visualLab/data/poiExtraNaNewV1"),
  ]);
  const all = ([] as POI[]).concat(
    dePois as POI[], ALL_DE_EXTRA_POIS as POI[], romaniaAllPois as POI[], hungaryAllPoi as POI[],
    [vaticanCountry as POI], vaticanPois as POI[], ALL_COUNTRY_POIS as POI[],
    poiExtraDeV1 as POI[], poiExtraRoV1 as POI[], poiExtraHuV4 as POI[], poiExtraFrV1 as POI[],
    poiExtraUkV1 as POI[], poiExtraUkMissingV1 as POI[], poiExtraAtChMissingV1 as POI[],
    poiExtraHrV1 as POI[], poiExtraHrV2 as POI[], poiExtraItalyV2 as POI[], poiExtraEsV2 as POI[],
    poiExtraHrV3 as POI[], euNewV1 as POI[], glNewV1 as POI[], naNewV1 as POI[],
  );
  // Dedup by id (richest wins — match slugs.ts pre-refactor behavior).
  const byId = new Map<string, POI>();
  function richness(p: POI): number {
    let n = 0;
    const da = (p as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced;
    const d = (p as { description?: Record<string, string> }).description;
    for (const obj of [d, da]) if (obj) for (const l of ["de", "hu", "ro", "en"]) n += (obj as any)[l]?.length || 0;
    return n;
  }
  for (const p of all) {
    if (!p?.id) continue;
    const prev = byId.get(p.id);
    if (!prev || richness(p) > richness(prev)) byId.set(p.id, p);
  }
  const out = Array.from(byId.values()).filter((p) => !DEDUP_BLOCK.has(p.id));
  console.log(`[generate-poi-html] loaded ${out.length} full POIs (dedup-block: ${DEDUP_BLOCK.size})`);
  return out;
}
const pois: POI[] = await loadFullPois();
// Build a global id→POI lookup for cross-referencing (e.g. sight name internal links).
const allById = new Map<string, POI>(pois.filter(p => p?.id).map(p => [p.id, p]));
type Lang = "de" | "hu" | "ro" | "en" | "fr" | "tr" | "hr";

// hr = native Croatian: merge the poi-hr-native.json sidecar INTO each POI's
// Record<Lang> fields (name/description/descriptionAdvanced/facts/sights) + faq, so
// the existing per-lang render picks up hr via v[lang]. Keeps the heavy TS files clean.
try {
  const hrPath = path.resolve(process.cwd(), "public", "data", "poi-hr-native.json");
  if (fs.existsSync(hrPath)) {
    const HR: Record<string, { name?: string; description?: string; descriptionAdvanced?: string; facts?: string[]; sights?: { name: string; desc?: string }[]; faq?: { q: string; a: string }[] }> = JSON.parse(fs.readFileSync(hrPath, "utf-8"));
    let merged = 0;
    for (const poi of pois) {
      const hr = HR[poi.id];
      if (!hr) continue;
      const p = poi as unknown as Record<string, any>;
      if (hr.name) { p.name = p.name || {}; p.name.hr = hr.name; }
      if (hr.description) { p.description = p.description || {}; p.description.hr = hr.description; }
      if (hr.descriptionAdvanced) { p.descriptionAdvanced = p.descriptionAdvanced || {}; p.descriptionAdvanced.hr = hr.descriptionAdvanced; }
      if (Array.isArray(hr.facts) && hr.facts.length) { p.facts = p.facts || {}; p.facts.hr = hr.facts; }
      if (Array.isArray(hr.sights) && hr.sights.length) {
        p.sights = p.sights || {};
        p.sights.hr = hr.sights.map((s) => ({ name: s.name, desc: s.desc, text: { hr: s.desc } }));
      }
      if (Array.isArray(hr.faq) && hr.faq.length) {
        HR_FAQS[poi.id] = hr.faq.map((f) => ({ q: { hr: f.q } as any, a: { hr: f.a } as any }));
      }
      p.hrLong = true;
      merged++;
    }
    console.log(`[generate-poi-html] hr-native merged into ${merged} POIs`);
  }
} catch (e: any) {
  console.log(`[generate-poi-html] hr-native merge skipped: ${e?.message?.slice(0, 80)}`);
}

const SITE_URL = "https://plizio.com";

// Type-aware keyword-forward title (mirrors lib/seo/routes.ts poiTitle, +fr).
const TITLE_KEYWORDS: Record<string, Partial<Record<Lang, string[]>>> = {
  city: {
    de: ["Sehenswürdigkeiten", "Karte", "Wetter", "Nachrichten", "Geschichte"],
    hu: ["Látnivalók", "Térkép", "Időjárás", "Hírek", "Történelem"],
    ro: ["Obiective turistice", "Hartă", "Vremea", "Știri", "Istorie"],
    en: ["Sights", "Map", "Weather", "News", "History"],
    fr: ["Sites touristiques", "Carte", "Météo", "Actualités", "Histoire"],
    tr: ["Gezilecek yerler", "Harita", "Hava durumu", "Haberler", "Tarih"],
    hr: ["Znamenitosti", "Karta", "Vrijeme", "Vijesti", "Povijest"],
  },
  castle: {
    de: ["Burg", "Geschichte", "Karte", "Fotos", "Wetter"],
    hu: ["Vár", "Történelem", "Térkép", "Fotók", "Időjárás"],
    ro: ["Castel", "Istorie", "Hartă", "Fotografii", "Vremea"],
    en: ["Castle", "History", "Map", "Photos", "Weather"],
    fr: ["Château", "Histoire", "Carte", "Photos", "Météo"],
    tr: ["Kale", "Tarih", "Harita", "Fotoğraflar", "Hava durumu"],
    hr: ["Dvorac", "Povijest", "Karta", "Fotografije", "Vrijeme"],
  },
  mountain: {
    de: ["Wandern", "Karte", "Wetter", "Fotos", "Höhe"],
    hu: ["Túrázás", "Térkép", "Időjárás", "Fotók", "Magasság"],
    ro: ["Drumeții", "Hartă", "Vremea", "Fotografii", "Altitudine"],
    en: ["Hiking", "Map", "Weather", "Photos", "Elevation"],
    fr: ["Randonnée", "Carte", "Météo", "Photos", "Altitude"],
    tr: ["Yürüyüş", "Harita", "Hava durumu", "Fotoğraflar", "Yükseklik"],
    hr: ["Planinarenje", "Karta", "Vrijeme", "Fotografije", "Visina"],
  },
  lake: {
    de: ["Strände", "Karte", "Wetter", "Sehenswürdigkeiten", "Fotos"],
    hu: ["Strandok", "Térkép", "Időjárás", "Látnivalók", "Fotók"],
    ro: ["Plaje", "Hartă", "Vremea", "Obiective", "Fotografii"],
    en: ["Beaches", "Map", "Weather", "Sights", "Photos"],
    fr: ["Plages", "Carte", "Météo", "Sites", "Photos"],
    tr: ["Plajlar", "Harita", "Hava durumu", "Gezilecek yerler", "Fotoğraflar"],
    hr: ["Plaže", "Karta", "Vrijeme", "Znamenitosti", "Fotografije"],
  },
  river: {
    de: ["Karte", "Verlauf", "Sehenswürdigkeiten", "Wetter", "Fotos"],
    hu: ["Térkép", "Folyamatos", "Látnivalók", "Időjárás", "Fotók"],
    ro: ["Hartă", "Curs", "Obiective", "Vremea", "Fotografii"],
    en: ["Map", "Course", "Sights", "Weather", "Photos"],
    fr: ["Carte", "Cours", "Sites", "Météo", "Photos"],
    tr: ["Harita", "Akış", "Gezilecek yerler", "Hava durumu", "Fotoğraflar"],
    hr: ["Karta", "Tok", "Znamenitosti", "Vrijeme", "Fotografije"],
  },
  historical: {
    de: ["Geschichte", "Karte", "Sehenswürdigkeiten", "Fotos", "Besuch"],
    hu: ["Történelem", "Térkép", "Látnivalók", "Fotók", "Látogatás"],
    ro: ["Istorie", "Hartă", "Obiective", "Fotografii", "Vizită"],
    en: ["History", "Map", "Sights", "Photos", "Visit"],
    fr: ["Histoire", "Carte", "Sites", "Photos", "Visite"],
    tr: ["Tarih", "Harita", "Gezilecek yerler", "Fotoğraflar", "Ziyaret"],
    hr: ["Povijest", "Karta", "Znamenitosti", "Fotografije", "Posjet"],
  },
  landmark: {
    de: ["Sehenswürdigkeiten", "Karte", "Fotos", "Geschichte", "Wetter"],
    hu: ["Látnivalók", "Térkép", "Fotók", "Történelem", "Időjárás"],
    ro: ["Obiective", "Hartă", "Fotografii", "Istorie", "Vremea"],
    en: ["Sights", "Map", "Photos", "History", "Weather"],
    fr: ["Sites touristiques", "Carte", "Photos", "Histoire", "Météo"],
    tr: ["Gezilecek yerler", "Harita", "Fotoğraflar", "Tarih", "Hava durumu"],
    hr: ["Znamenitosti", "Karta", "Fotografije", "Povijest", "Vrijeme"],
  },
  nature: {
    de: ["Karte", "Wetter", "Wandern", "Fotos", "Natur"],
    hu: ["Térkép", "Időjárás", "Túrázás", "Fotók", "Természet"],
    ro: ["Hartă", "Vremea", "Drumeții", "Fotografii", "Natură"],
    en: ["Map", "Weather", "Hiking", "Photos", "Nature"],
    fr: ["Carte", "Météo", "Randonnée", "Photos", "Nature"],
    tr: ["Harita", "Hava durumu", "Yürüyüş", "Fotoğraflar", "Doğa"],
    hr: ["Karta", "Vrijeme", "Planinarenje", "Fotografije", "Priroda"],
  },
};
const TYPE_ALIAS: Record<string, string> = {
  "state-capital": "city", town: "city", village: "city",
  fort: "castle", peak: "mountain", hill: "mountain",
  forest: "nature", island: "nature", sea: "nature", bay: "nature",
};

// PlizioGo POI ID set — these get "PlizioGo" branding instead of "Plizio Visual Lab".
const PLIZIOGO_SET: Set<string> = (() => {
  try {
    const p = path.resolve(process.cwd(), "scripts", "_pliziogo_slugs.json");
    return new Set(JSON.parse(fs.readFileSync(p, "utf-8")) as string[]);
  } catch { return new Set(); }
})();

function buildPoiTitle(name: string, poi: POI, lang: Lang): string {
  const bucket = TYPE_ALIAS[poi.type] || (TITLE_KEYWORDS[poi.type] ? poi.type : "landmark");
  const kw = TITLE_KEYWORDS[bucket]?.[lang] || TITLE_KEYWORDS.landmark[lang] || TITLE_KEYWORDS.landmark.en!;
  // State name: try region lookup; fall back to poi.parent
  let stateName = "";
  const parent = poi.parent || "";
  const r = (regions as POI[]).find((x) => x.id === parent);
  if (r) {
    stateName = (r.name as Record<string, string>)?.[lang]
      || (r.name as Record<string, string>)?.de
      || "";
  }
  const showState = stateName && stateName.toLowerCase() !== name.toLowerCase();
  const SUFFIX = PLIZIOGO_SET.has(poi.id) ? " | PlizioGo" : " | Plizio";
  const MAX = 70;
  const tryBuild = (withState: boolean, n: number): string => {
    const kws = kw.slice(0, n).join(", ");
    if (withState && showState) return `${name} (${stateName}): ${kws}${SUFFIX}`;
    return `${name}: ${kws}${SUFFIX}`;
  };
  for (const n of [4, 3]) { const t = tryBuild(true, n); if (t.length <= MAX) return t; }
  for (const n of [4, 3, 2]) { const t = tryBuild(false, n); if (t.length <= MAX) return t; }
  return `${name}: ${kw[0]}${SUFFIX}`;
}

function hasIndexableContent(poi: POI): boolean {
  const desc = poi.description as Record<string, string> | undefined;
  const facts = poi.facts as Record<string, string[]> | undefined;
  const descAdv = (poi as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced;
  const factsAdv = (poi as { factsAdvanced?: Record<string, string[]> }).factsAdvanced;
  for (const l of ["de", "hu", "ro", "en"] as const) {
    if ((desc?.[l]?.length ?? 0) > 0 || (descAdv?.[l]?.length ?? 0) > 0) return true;
    if ((facts?.[l]?.length ?? 0) > 0 || (factsAdv?.[l]?.length ?? 0) > 0) return true;
  }
  return false;
}

// AdSense eligibility: only show ads on pages with genuinely rich content.
// Criteria: PlizioGo POI OR (descriptionAdvanced ≥500 chars in current lang AND facts/factsAdvanced present).
function isAdSenseEligible(poi: POI, lang: Lang): boolean {
  if (PLIZIOGO_SET.has(poi.id)) return true;
  const descAdv = (poi as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced;
  const factsAdv = (poi as { factsAdvanced?: Record<string, string[]> }).factsAdvanced;
  const facts = poi.facts as Record<string, string[]> | undefined;
  const da = descAdv?.[lang] || "";
  if (da.length < 500) return false;
  const fa = factsAdv?.[lang] || facts?.[lang];
  if (!Array.isArray(fa) || fa.length < 4) return false;
  return true;
}
const ADSENSE_HEAD = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9658871334491770" crossorigin="anonymous"></script>
<meta name="google-adsense-account" content="ca-pub-9658871334491770">`;

// Content richness inspector — used to hide game-CTA + eyebrow + AdSense on thin pages
// and to mark truly empty pages noindex (kept crawlable via follow). PlizioGo POIs are
// always considered rich.
function pageRichness(poi: POI, lang: Lang): {
  descChars: number; factsCount: number;
  hasSights: boolean; hasYearly: boolean; hasNews: boolean; hasPlizioGo: boolean;
  isWeak: boolean; isEmpty: boolean;
} {
  const hasPlizioGo = PLIZIOGO_SET.has(poi.id);
  const descAdv = (poi as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced;
  const descShort = poi.description as Record<string, string> | undefined;
  const sidecarAdv = DESCADV_SIDECAR[poi.id];
  const inlineLen = (descAdv?.[lang] || "").length;
  const sideLen = (sidecarAdv?.[lang] || "").length;
  const descChars = Math.max(inlineLen, sideLen, (descShort?.[lang] || "").length);
  const facts = (poi as { factsAdvanced?: Record<string, string[]>; facts?: Record<string, string[]> });
  const factsCount = (facts.factsAdvanced?.[lang] || facts.facts?.[lang] || []).length;
  const sightsByLang = (poi as { sights?: Record<string, unknown[]> }).sights;
  const hasSights = !!(sightsByLang && Array.isArray(sightsByLang[lang]) && (sightsByLang[lang] as unknown[]).length > 0);
  // yearly highlights + news come from external JSON; richness check via fields existing on POI side
  // We approximate via descAdv presence + facts richness for the rendered output.
  const hasYearly = !!(poi as { yearly_highlights?: unknown }).yearly_highlights;
  const hasNews = !!(poi as { news_feed?: unknown }).news_feed;
  // Weak = no PlizioGo AND short desc AND few facts AND no sights
  const isWeak = !hasPlizioGo && descChars < 500 && factsCount < 4 && !hasSights;
  // Empty = weak AND no yearly AND no news (truly nothing distinguishing)
  const isEmpty = isWeak && !hasYearly && !hasNews && descChars < 250;
  return { descChars, factsCount, hasSights, hasYearly, hasNews, hasPlizioGo, isWeak, isEmpty };
}

// Smart meta-description truncation: cut at the last sentence boundary within 160 chars
// instead of mid-word. Avoids "Nepál " hanging-fragment shown in Google snippet.
function smartMetaDesc(text: unknown, fallback: unknown, max = 160): string {
  const s = (v: unknown): string => typeof v === "string" ? v : "";
  const src = (s(text) || s(fallback) || "").trim();
  if (src.length <= max) return src;
  const slice = src.slice(0, max);
  // Prefer sentence boundary (. ! ?) within last 60 chars; fall back to last space.
  const sentenceEnd = Math.max(slice.lastIndexOf(". "), slice.lastIndexOf("! "), slice.lastIndexOf("? "));
  if (sentenceEnd >= max - 80) return src.slice(0, sentenceEnd + 1).trim();
  const lastSpace = slice.lastIndexOf(" ");
  if (lastSpace > max - 30) return src.slice(0, lastSpace).trim() + "…";
  return slice.trim() + "…";
}

function getPoiAlternates(poi: POI): Record<string, string> {
  // FR POIs get an extra fr alternate; DE → tr (Turkish residents); HR → hr (native).
  const extra: Lang[] = [];
  if (poi.parent?.startsWith("FR")) extra.push("fr");
  if (poi.parent?.startsWith("DE")) extra.push("tr");
  if ((poi as unknown as { hrLong?: boolean }).hrLong) extra.push("hr");
  const langs: Lang[] = [...SUPPORTED_LANGS, ...extra];
  return Object.fromEntries(langs.map((l) => [l, `${SITE_URL}${buildPoiPath(l, poi)}`]));
}

// Pre-index POIs by parent ONCE (built lazily) so getRelatedPois is O(siblings)
// instead of scanning all ~48K POIs per page (which was O(n²) over the full build).
let _poisByParent: Map<string, POI[]> | null = null;
function getRelatedPois(poi: POI, limit = 6): POI[] {
  if (!poi.parent) return [];
  if (!_poisByParent) {
    _poisByParent = new Map();
    for (const p of pois) {
      if (!p || !p.parent || p.type === "region" || p.type === "country") continue;
      let arr = _poisByParent.get(p.parent);
      if (!arr) { arr = []; _poisByParent.set(p.parent, arr); }
      arr.push(p);
    }
  }
  return (_poisByParent.get(poi.parent) || [])
    .filter((p) => p.id !== poi.id)
    .sort((a, b) => Number(a.type !== poi.type) - Number(b.type !== poi.type))
    .slice(0, limit);
}

// Normalize a POI coords array to [lat, lon]. Plizio standard is [lon, lat],
// but a few early files used [lat, lon] — same heuristic as toLatLon() inside
// renderItinerary (Europe lon |a|<30, lat |b|>25 → [lon,lat]).
function coordLatLon(c: unknown): [number, number] | null {
  if (!Array.isArray(c) || c.length < 2) return null;
  const a = Number(c[0]), b = Number(c[1]);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  if (Math.abs(a) < 30 && Math.abs(b) > 25) return [b, a]; // [lon, lat]
  return [a, b]; // [lat, lon]
}

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371, toR = Math.PI / 180;
  const dLat = (lat2 - lat1) * toR, dLon = (lon2 - lon1) * toR;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * toR) * Math.cos(lat2 * toR) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

// Spatial grid index (1°×1° cells) built ONCE — avoids an O(n) scan of all
// ~50K POIs per page (which made the full build O(n²)). Each entry caches the
// normalized [lat,lon] so getNearbyPois only haversines a handful of candidates.
type GridEntry = { p: POI; lat: number; lon: number };
let _nearbyGrid: Map<string, GridEntry[]> | null = null;
function buildNearbyGrid(): Map<string, GridEntry[]> {
  const g = new Map<string, GridEntry[]>();
  for (const p of pois) {
    if (!p || p.type === "region" || p.type === "country") continue;
    const c = coordLatLon(p.coords);
    if (!c) continue;
    if (!hasIndexableContent(p)) continue;
    const key = Math.floor(c[0]) + "|" + Math.floor(c[1]);
    let arr = g.get(key);
    if (!arr) { arr = []; g.set(key, arr); }
    arr.push({ p, lat: c[0], lon: c[1] });
  }
  return g;
}

// Geographically nearest indexable POIs (haversine), deduped by name.
function getNearbyPois(poi: POI, limit = 8, maxKm = 150): { p: POI; km: number }[] {
  const c0 = coordLatLon(poi.coords);
  if (!c0) return [];
  const [lat0, lon0] = c0;
  if (!_nearbyGrid) _nearbyGrid = buildNearbyGrid();
  const cosLat = Math.max(0.2, Math.cos(lat0 * Math.PI / 180));
  const latR = Math.ceil(maxKm / 111) + 1;
  const lonR = Math.ceil(maxKm / (111 * cosLat)) + 1;
  const flat = Math.floor(lat0), flon = Math.floor(lon0);
  const found: { p: POI; km: number }[] = [];
  for (let dla = -latR; dla <= latR; dla++) {
    for (let dlo = -lonR; dlo <= lonR; dlo++) {
      const cell = _nearbyGrid.get((flat + dla) + "|" + (flon + dlo));
      if (!cell) continue;
      for (const e of cell) {
        if (e.p.id === poi.id) continue;
        const km = haversineKm(lat0, lon0, e.lat, e.lon);
        if (km <= 0.05 || km > maxKm) continue;
        found.push({ p: e.p, km });
      }
    }
  }
  found.sort((a, b) => a.km - b.km);
  const seen = new Set<string>();
  const out: { p: POI; km: number }[] = [];
  for (const e of found) {
    const nm = ((getLocalized(e.p.name, "en") as string) || e.p.id).toLowerCase();
    if (seen.has(nm)) continue;
    // skip near-duplicates (e.g. a city and its cathedral share coords → overlapping dots)
    const c = coordLatLon(e.p.coords)!;
    let tooClose = false;
    for (const o of out) {
      const oc = coordLatLon(o.p.coords)!;
      if (haversineKm(c[0], c[1], oc[0], oc[1]) < 1.5) { tooClose = true; break; }
    }
    if (tooClose) continue;
    seen.add(nm);
    out.push(e);
    if (out.length >= limit) break;
  }
  return out;
}

// Nearby CITIES (settlements only) for the PlizioGo "explore nearby" block:
// "go visit this city" suggestions that link to our own POI HTML so the user
// discovers an unfamiliar town from within our system. City-like types only —
// no streets/landmarks. Grid is already indexable-only (buildNearbyGrid).
const CITY_TYPES = new Set(["city", "capital", "town", "village", "municipality", "commune"]);
function getNearbyCities(poi: POI, limit = 6, maxKm = 90, minKm = 4): { p: POI; km: number }[] {
  const c0 = coordLatLon(poi.coords);
  if (!c0) return [];
  const [lat0, lon0] = c0;
  if (!_nearbyGrid) _nearbyGrid = buildNearbyGrid();
  const cosLat = Math.max(0.2, Math.cos(lat0 * Math.PI / 180));
  const latR = Math.ceil(maxKm / 111) + 1;
  const lonR = Math.ceil(maxKm / (111 * cosLat)) + 1;
  const flat = Math.floor(lat0), flon = Math.floor(lon0);
  const found: { p: POI; km: number }[] = [];
  for (let dla = -latR; dla <= latR; dla++) {
    for (let dlo = -lonR; dlo <= lonR; dlo++) {
      const cell = _nearbyGrid.get((flat + dla) + "|" + (flon + dlo));
      if (!cell) continue;
      for (const e of cell) {
        if (e.p.id === poi.id || !CITY_TYPES.has(e.p.type)) continue;
        // same country/region only — a day-trip suggestion, not across borders
        if (poi.parent && e.p.parent && poi.parent.split("-")[0] !== e.p.parent.split("-")[0]) continue;
        const km = haversineKm(lat0, lon0, e.lat, e.lon);
        if (km < minKm || km > maxKm) continue;
        found.push({ p: e.p, km });
      }
    }
  }
  found.sort((a, b) => a.km - b.km);
  const seen = new Set<string>();
  const out: { p: POI; km: number }[] = [];
  for (const e of found) {
    const nm = ((getLocalized(e.p.name, "en") as string) || e.p.id).toLowerCase();
    if (seen.has(nm)) continue;
    seen.add(nm);
    out.push(e);
    if (out.length >= limit) break;
  }
  return out;
}

// "Constellation" mini-map: a night-sky / flight-map style SVG with the current
// POI as a pulsing star at the center and nearby POIs placed at their TRUE
// relative bearing, sized/brightened by proximity. Arcs link them to the
// center; hovering/tapping a dot reveals a card (thumb + name + distance + dir).
// Pure SVG + CSS + ~10 lines JS, no external lib, static-export safe.
const CONSTEL_I18N: Record<string, { title: string; sub: string; lt1: string; go: string; dirs: string[]; comp: [string, string, string, string] }> = {
  de: { title: "Entdecke die Umgebung", sub: "Sehenswerte Orte in der Nähe", lt1: "<1 km", go: "Entdecken", dirs: ["N", "NO", "O", "SO", "S", "SW", "W", "NW"], comp: ["N", "O", "S", "W"] },
  hu: { title: "Fedezd fel a környéket", sub: "Közeli érdekes helyek", lt1: "<1 km", go: "Felfedezés", dirs: ["É", "ÉK", "K", "DK", "D", "DNy", "Ny", "ÉNy"], comp: ["É", "K", "D", "Ny"] },
  ro: { title: "Explorează împrejurimile", sub: "Locuri interesante în apropiere", lt1: "<1 km", go: "Explorează", dirs: ["N", "NE", "E", "SE", "S", "SV", "V", "NV"], comp: ["N", "E", "S", "V"] },
  en: { title: "Explore nearby", sub: "Notable places around", lt1: "<1 km", go: "Explore", dirs: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"], comp: ["N", "E", "S", "W"] },
  fr: { title: "Explorez les environs", sub: "Lieux remarquables à proximité", lt1: "<1 km", go: "Explorer", dirs: ["N", "NE", "E", "SE", "S", "SO", "O", "NO"], comp: ["N", "E", "S", "O"] },
  tr: { title: "Çevreyi keşfet", sub: "Yakındaki ilgi çekici yerler", lt1: "<1 km", go: "Keşfet", dirs: ["K", "KD", "D", "GD", "G", "GB", "B", "KB"], comp: ["K", "D", "G", "B"] },
  hr: { title: "Istražite okolicu", sub: "Zanimljiva mjesta u blizini", lt1: "<1 km", go: "Istraži", dirs: ["S", "SI", "I", "JI", "J", "JZ", "Z", "SZ"], comp: ["S", "I", "J", "Z"] },
};

function renderConstellation(poi: POI, lang: Lang): string {
  const c0 = coordLatLon(poi.coords);
  if (!c0) return "";
  const nodes = getNearbyPois(poi, 8, 150);
  if (nodes.length < 3) return ""; // not enough to be worth a map
  const [lat0, lon0] = c0;
  const cosLat = Math.cos(lat0 * Math.PI / 180);
  const raw = nodes.map(({ p, km }) => {
    const c = coordLatLon(p.coords)!;
    return { p, km, dx: (c[1] - lon0) * cosLat /* east */, dy: c[0] - lat0 /* north */ };
  });
  const maxR = Math.max(...raw.map((q) => Math.hypot(q.dx, q.dy))) || 1;
  const maxKm = Math.max(...raw.map((q) => q.km)) || 1;
  const t = CONSTEL_I18N[lang] || CONSTEL_I18N.en;

  const CX = 50, CY = 37.5, RAD = 0.40; // viewBox 100x75, fractional placement radius
  const placed = raw.map((q) => {
    const r = Math.hypot(q.dx, q.dy) || 1;
    // push very-close nodes out a touch so they don't overlap the star
    const f = Math.max(0.28, r / maxR);
    const fx = 0.5 + (q.dx / r) * f * RAD;
    const fy = 0.5 - (q.dy / r) * f * RAD; // north up
    const sx = fx * 100, sy = fy * 75;
    const dotPx = Math.round((14 - 6 * (q.km / maxKm)) * 10) / 10; // closer = bigger (8..14)
    let deg = Math.atan2(q.dx, q.dy) * 180 / Math.PI; if (deg < 0) deg += 360;
    const dir = t.dirs[Math.round(deg / 45) % 8];
    return { ...q, fx, fy, sx, sy, dotPx, dir };
  });

  const arcs = placed.map((q) => {
    const mx = (CX + q.sx) / 2, my = (CY + q.sy) / 2;
    let nx = q.sy - CY, ny = -(q.sx - CX); const nl = Math.hypot(nx, ny) || 1;
    const k = 5; const ax = mx + (nx / nl) * k, ay = my + (ny / nl) * k;
    return `<path class="plz-cst-arc" d="M${CX} ${CY} Q${ax.toFixed(1)} ${ay.toFixed(1)} ${q.sx.toFixed(1)} ${q.sy.toFixed(1)}"/>`;
  }).join("");

  const nodeHtml = placed.map((q) => {
    const nm = escapeHtml((getLocalized(q.p.name, lang) as string) || q.p.id);
    const href = poiPathSafe(lang, q.p);
    const img = (q.p as { image?: string }).image;
    const km = q.km < 1 ? t.lt1 : `${Math.round(q.km)} km`;
    const low = q.fy < 0.32 ? " plz-cst-node--low" : "";
    const thumb = img
      ? `<span class="plz-cst-thumb"><img src="${escapeHtml(img)}" alt="${nm}" loading="lazy" width="46" height="46"/></span>`
      : `<span class="plz-cst-thumb">📍</span>`;
    return `<div class="plz-cst-node${low}" style="left:${(q.fx * 100).toFixed(2)}%;top:${(q.fy * 100).toFixed(2)}%;--d:${q.dotPx}px">`
      + `<span class="plz-cst-dot" tabindex="0" role="button" aria-label="${nm}"></span>`
      + `<a class="plz-cst-card" href="${href}">${thumb}`
      + `<span class="plz-cst-info"><span class="plz-cst-name">${nm}</span>`
      + `<span class="plz-cst-dist">${km} · ${q.dir}</span>`
      + `<span class="plz-cst-go">${t.go} →</span></span></a></div>`;
  }).join("");

  return `<section class="plz-constel-sec"><h2>${escapeHtml(t.title)}</h2>`
    + `<p class="plz-constel-sub">${escapeHtml(t.sub)}</p>`
    + `<div class="plz-constel">`
    + `<div class="plz-cst-stage"><svg class="plz-cst-svg" viewBox="0 0 100 75" preserveAspectRatio="xMidYMid meet" aria-hidden="true">`
    + `<circle class="plz-cst-ring" cx="${CX}" cy="${CY}" r="13"/><circle class="plz-cst-ring" cx="${CX}" cy="${CY}" r="26"/>`
    + arcs
    + `<g class="plz-cst-star"><circle class="plz-cst-halo" cx="${CX}" cy="${CY}" r="5"/>`
    + `<path class="plz-cst-core" d="M${CX} ${CY - 6.5} L${CX + 1.7} ${CY - 1.6} L${CX + 6.5} ${CY} L${CX + 1.7} ${CY + 1.6} L${CX} ${CY + 6.5} L${CX - 1.7} ${CY + 1.6} L${CX - 6.5} ${CY} L${CX - 1.7} ${CY - 1.6} Z"/></g>`
    + `<text class="plz-cst-comp" x="${CX}" y="4.5">${t.comp[0]}</text>`
    + `<text class="plz-cst-comp" x="95.5" y="${CY}">${t.comp[1]}</text>`
    + `<text class="plz-cst-comp" x="${CX}" y="71.5">${t.comp[2]}</text>`
    + `<text class="plz-cst-comp" x="4.5" y="${CY}">${t.comp[3]}</text>`
    + `</svg></div>`
    + `<div class="plz-cst-nodes">${nodeHtml}</div>`
    + `</div>`
    + `<script>(function(){var ns=[].slice.call(document.querySelectorAll('.plz-cst-node'));if(!ns.length)return;var oAt=0;function close(){ns.forEach(function(m){m.classList.remove('open');});}ns.forEach(function(n){var d=n.querySelector('.plz-cst-dot');var card=n.querySelector('.plz-cst-card');function tog(e){e.preventDefault();e.stopPropagation();var was=n.classList.contains('open');close();if(!was){n.classList.add('open');oAt=Date.now();}}d.addEventListener('click',tog);d.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' ')tog(e);});if(card)card.addEventListener('click',function(e){if(Date.now()-oAt<450){e.preventDefault();e.stopPropagation();}});});document.addEventListener('click',close);})();</script>`
    + `</section>`;
}

const OUT_DIR = path.resolve(process.cwd(), process.env.OUT_DIR || "out");
const GEN_LIMIT = Number(process.env.GEN_LIMIT || 0);

// Build a set of all valid /{slug}-map/ routes from app/ so we can link
// "View on map" CTAs to a real page instead of /lang/country/state/ (which
// is not a route in output:"export" mode and 404s).
const MAP_SLUGS: Set<string> = (() => {
  const out = new Set<string>();
  // Static country/metro maps live in public/ (build-static-maps output), NOT app/.
  // (Reading from app/ left this empty, so every map CTA 404'd to a state path.)
  for (const dir of ["public", "app"]) {
    try {
      for (const f of fs.readdirSync(path.resolve(dir))) {
        if (f.endsWith("-map")) out.add(f);
      }
    } catch {}
  }
  return out;
})();
// Manual aliases where the map folder name does not match the English countryId
// with dashes stripped (UAE/DRC) or uses a native-language slug (de→deutschland,
// hu→magyarorszag — the two primary-language maps).
const COUNTRY_MAP_ALIASES: Record<string, string> = {
  "united-arab-emirates": "uae-map",
  "democratic-republic-of-congo": "drcongo-map",
  "germany": "deutschland-map",
  "hungary": "magyarorszag-map",
};
function countryMapUrl(countryId: string): string | null {
  const alias = COUNTRY_MAP_ALIASES[countryId];
  if (alias && MAP_SLUGS.has(alias)) return `/${alias}/`;
  const withDashes = `${countryId}-map`;
  if (MAP_SLUGS.has(withDashes)) return `/${withDashes}/`;
  const noDashes = `${countryId.replace(/-/g, "")}-map`;
  if (MAP_SLUGS.has(noDashes)) return `/${noDashes}/`;
  return null;
}

function escapeHtml(s: any): string {
  if (s == null) return "";
  if (typeof s !== "string") s = String(s);
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getLocalized<T>(obj: Partial<Record<string, T>> | undefined, lang: Lang, fallback?: T): T | undefined {
  if (!obj) return fallback;
  return (obj[lang] ?? obj.de ?? obj.en ?? fallback) as T | undefined;
}

const TYPE_LABEL: Record<string, Partial<Record<Lang, string>>> = {
  city: { de: "Stadt", hu: "Város", ro: "Oraș", en: "City", hr: "Grad" },
  "state-capital": { de: "Landeshauptstadt", hu: "Tartományi főváros", ro: "Capitală regiune", en: "State capital", hr: "Glavni grad regije" },
  mountain: { de: "Berg", hu: "Hegy", ro: "Munte", en: "Mountain", hr: "Planina" },
  river: { de: "Fluss", hu: "Folyó", ro: "Râu", en: "River", hr: "Rijeka" },
  lake: { de: "See", hu: "Tó", ro: "Lac", en: "Lake", hr: "Jezero" },
  island: { de: "Insel", hu: "Sziget", ro: "Insulă", en: "Island", hr: "Otok" },
  landmark: { de: "Sehenswürdigkeit", hu: "Nevezetesség", ro: "Punct de reper", en: "Landmark", hr: "Znamenitost" },
  historical: { de: "Historischer Ort", hu: "Történelmi hely", ro: "Sit istoric", en: "Historical site", hr: "Povijesno mjesto" },
  forest: { de: "Wald", hu: "Erdő", ro: "Pădure", en: "Forest", hr: "Šuma" },
  sea: { de: "Meer", hu: "Tenger", ro: "Mare", en: "Sea", hr: "More" },
  port: { de: "Hafen", hu: "Kikötő", ro: "Port", en: "Port", hr: "Luka" },
  industry: { de: "Industriegebiet", hu: "Ipari terület", ro: "Zonă industrială", en: "Industrial site", hr: "Industrijska zona" },
  agriculture: { de: "Landwirtschaft", hu: "Mezőgazdaság", ro: "Agricultură", en: "Agriculture", hr: "Poljoprivreda" },
  relief: { de: "Geländeform", hu: "Domborzat", ro: "Relief", en: "Relief", hr: "Reljef" },
  "animal-habitat": { de: "Tierlebensraum", hu: "Élőhely", ro: "Habitat animal", en: "Animal habitat", hr: "Stanište životinja" },
};

const I18N: Record<string, Partial<Record<Lang, string>>> = {
  facts: { de: "Fakten", hu: "Tények", ro: "Fapte", en: "Facts", hr: "Činjenice" },
  details: { de: "Details", hu: "Részletek", ro: "Detalii", en: "Details", hr: "Detalji" },
  geography: { de: "Geographie", hu: "Földrajz", ro: "Geografie", en: "Geography", hr: "Zemljopis" },
  elevation: { de: "Höhe", hu: "Magasság", ro: "Altitudine", en: "Elevation", hr: "Visina" },
  length: { de: "Länge", hu: "Hossz", ro: "Lungime", en: "Length", hr: "Duljina" },
  area: { de: "Fläche", hu: "Terület", ro: "Suprafață", en: "Area", hr: "Površina" },
  coordinates: { de: "Koordinaten", hu: "Koordináták", ro: "Coordonate", en: "Coordinates", hr: "Koordinate" },
  related: { de: "Verwandte Orte", hu: "Kapcsolódó helyek", ro: "Locuri conexe", en: "Related places", hr: "Povezana mjesta" },
  cities: { de: "Städte in der Nähe", hu: "Közeli városok", ro: "Orașe din apropiere", en: "Nearby cities", hr: "Gradovi u blizini" },
  history: { de: "Geschichte & Sehenswürdigkeiten", hu: "Történelem és látnivalók", ro: "Istorie și obiective", en: "History & landmarks", hr: "Povijest i znamenitosti" },
  nature: { de: "Natur", hu: "Természet", ro: "Natură", en: "Nature", hr: "Priroda" },
  more: { de: "Weitere Orte", hu: "További helyek", ro: "Mai multe locuri", en: "More places", hr: "Više mjesta" },
  didYouKnow: { de: "💡 Wusstest du?", hu: "💡 Tudtad?", ro: "💡 Știai că?", en: "💡 Did you know?", hr: "💡 Jeste li znali?" },
  gameTitle: { de: "Probiere es spielerisch aus", hu: "Próbáld ki játékos formában", ro: "Învață jucând", en: "Try it with games", hr: "Isprobaj kroz igru" },
  gameIntro: { de: "Lerne diesen Ort durch Spiele und Tests.", hu: "Ismerd meg ezt a helyet játékokon és teszteken keresztül.", ro: "Cunoaște acest loc prin jocuri și teste.", en: "Learn about this place through games and quizzes.", hr: "Upoznaj ovo mjesto kroz igre i kvizove." },
  gamePlay: { de: "🎮 Astro-Spiel starten", hu: "🎮 Indítsd az Astro játékot", ro: "🎮 Pornește jocul Astro", en: "🎮 Start astro game", hr: "🎮 Pokreni Astro igru" },
  gameTest: { de: "📝 Test machen", hu: "📝 Csinálj tesztet", ro: "📝 Fă un test", en: "📝 Take a quiz", hr: "📝 Riješi kviz" },
  viewMap: { de: "Auf der Karte ansehen", hu: "Megtekintés a térképen", ro: "Vezi pe hartă", en: "View on map", hr: "Pogledaj na karti" },
  viewOSM: { de: "OpenStreetMap", hu: "OpenStreetMap", ro: "OpenStreetMap", en: "OpenStreetMap", hr: "OpenStreetMap" },
  home: { de: "Startseite", hu: "Főoldal", ro: "Acasă", en: "Home", hr: "Početna" },
  langs: { de: "Sprachen", hu: "Nyelvek", ro: "Limbi", en: "Languages", hr: "Jezici" },
  sightsInTown: { de: "Sehenswürdigkeiten in der Stadt", hu: "Látnivalók a városban", ro: "Obiective turistice în oraș", en: "Sights in the town", hr: "Znamenitosti u gradu" },
  nearbySights: { de: "In der Umgebung", hu: "Környékbeli látnivalók", ro: "Obiective din împrejurimi", en: "Sights nearby", hr: "Znamenitosti u blizini" },
};

// Claude-Design per-type placeholder SVGs (public/placeholders/poi/) for the ~7k
// indexable POIs with no fetched photo — far better than an empty/pin hero.
const POI_PLACEHOLDER_TYPE: Record<string, string> = {
  city: "city", town: "village", village: "village", "state-capital": "state-capital", capital: "state-capital",
  region: "region", country: "country", mountain: "mountain", peak: "mountain", river: "river", lake: "river",
  sea: "river", waterfall: "river", island: "island", landmark: "landmark", historical: "historical",
  monument: "monument", castle: "castle", fortress: "castle", church: "church", cathedral: "church",
  museum: "museum", ruins: "ruins", forest: "forest", "national-park": "national-park", park: "national-park",
  nature: "national-park", valley: "valley", canyon: "valley", relief: "relief", port: "port", harbor: "port",
  industry: "industry", agriculture: "agriculture", "animal-habitat": "wildlife", wildlife: "wildlife",
  zoo: "wildlife", "kid-landmark": "kid-landmark",
};
function poiPlaceholderSvg(type?: string): string {
  return `/placeholders/poi/placeholder-${POI_PLACEHOLDER_TYPE[type || ""] || "landmark"}.svg`;
}

// Lang fallback: tr → de, fr → en (most strings only have 4 langs filled).
function _langFallback(lang: Lang): Lang { return lang === "tr" ? "de" : lang === "fr" ? "en" : lang; }
const I = (k: string, lang: Lang) => I18N[k]?.[lang] ?? I18N[k]?.[_langFallback(lang)] ?? k;
const T = (type: string, lang: Lang) => TYPE_LABEL[type]?.[lang] ?? TYPE_LABEL[type]?.[_langFallback(lang)] ?? type;

// Lokalizalt footer-linkek. A jogi oldalak lang-prefix nelkuliek (/privacy/, /impressum/,
// /about/ mind 200) — a regi /${lang}/datenschutz/ + /${lang}/ueber-uns/ 404 volt minden POI-n.
const FOOTER_COPY: Record<string, { privacy: string; about: string; imprint: string; europe: string }> = {
  de: { privacy: "Datenschutz", about: "Über uns", imprint: "Impressum", europe: "Europa" },
  hu: { privacy: "Adatvédelem", about: "Rólunk", imprint: "Impresszum", europe: "Európa" },
  ro: { privacy: "Confidențialitate", about: "Despre noi", imprint: "Impressum", europe: "Europa" },
  en: { privacy: "Privacy", about: "About", imprint: "Imprint", europe: "Europe" },
  fr: { privacy: "Confidentialité", about: "À propos", imprint: "Mentions légales", europe: "Europe" },
  tr: { privacy: "Gizlilik", about: "Hakkımızda", imprint: "Künye", europe: "Avrupa" },
  hr: { privacy: "Privatnost", about: "O nama", imprint: "Impressum", europe: "Europa" },
};
function footerHtml(lang: Lang): string {
  const f = FOOTER_COPY[lang] ?? FOOTER_COPY.en;
  // Globalis kep-fallback: ha egy poi-images/geo-images kep nem tolt be (404 — pl.
  // letoltetlen poi.image), csere placeholder SVG-re, hogy ne legyen torott kep.
  // Capture-fazis (img error nem bubble-ozik); a lazy-load kepek a footer-script
  // utan toltenek, igy elkapja oket.
  const imgFb = `<script>document.addEventListener('error',function(e){var t=e.target;if(t&&t.tagName==='IMG'&&!t.dataset.phf&&/\\/(poi-images|geo-images)\\//.test(t.getAttribute('src')||'')){t.dataset.phf=1;t.src='/placeholders/poi/placeholder-landmark.svg';}},true);</script>`;
  return `<div><a href="/${lang}/">Plizio</a> · <a href="/europe-map/">${f.europe}</a> · <a href="/privacy/">${f.privacy}</a> · <a href="/impressum/">${f.imprint}</a> · <a href="/about/">${f.about}</a></div>${imgFb}`;
}

// Belso POI-link a CELPOI altal tamogatott nyelven. A 4 alapnyelv (de/hu/ro/en)
// minden POI-ra generalodik, de fr CSAK France-ra, tr CSAK DE-re, hr csak hrLong-ra.
// Ha egy fr/tr/hr oldal egy olyan POI-ra linkelne, aminek nincs ilyen nyelvu oldala
// (pl. France fr-oldal -> hatarmenti spanyol POI), 404 lenne -> essunk vissza en-re.
function poiPathSafe(lang: Lang, target: POI): string {
  if (SUPPORTED_LANGS.includes(lang)) return buildPoiPath(lang, target);
  const targetExtras = slugs.extraLangsFor(target as unknown as { parent?: string; frLong?: boolean; trLong?: boolean; hrLong?: boolean }) as Lang[];
  return buildPoiPath(targetExtras.includes(lang) ? lang : ("en" as Lang), target);
}

// Wikipedia lang code for slugify lookup
const WIKI_LANG_FOR: Record<string, string> = { de: "de", hu: "hu", ro: "ro", en: "en", fr: "fr", tr: "tr" };

function wikipediaSameAs(poi: POI, lang: Lang): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const l of ["en", lang, "de"] as const) {
    const wikiLang = WIKI_LANG_FOR[l];
    if (!wikiLang) continue; // ismeretlen nyelv -> ne emittaljunk undefined.wikipedia.org-ot
    const name = (poi.name as Record<string, string>)?.[l];
    if (!name) continue;
    // Wikipedia titles use spaces (URL-encoded) and case-preserve, but simple slug works for most.
    const title = name.replace(/\s+/g, "_");
    const url = `https://${wikiLang}.wikipedia.org/wiki/${encodeURIComponent(title)}`;
    if (!seen.has(url)) { out.push(url); seen.add(url); }
    if (out.length >= 2) break;
  }
  return out;
}

function structuredData(
  poi: POI,
  lang: Lang,
  url: string,
  descText: string,
  countryId: string,
  countryName: string,
  faqItems: Array<{ q: string; a: string }>,
  breadcrumbCrumbs: Array<{ name: string; url: string }>,
): string {
  const schemas: any[] = [];

  // ----- Place schema (enriched with sameAs Wikipedia) -----
  const place: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: getLocalized(poi.name, lang) ?? poi.id,
    description: descText,
    url,
  };
  if (poi.coords && poi.coords.length >= 2) {
    place.geo = {
      "@type": "GeoCoordinates",
      latitude: poi.coords[1],
      longitude: poi.coords[0],
      // Schema.org: ISO-3166 alpha-2 kod, nem a lokalizalt slug/nev
      addressCountry: slugs.countryIso2(countryId) ?? countryName,
    };
  }
  const imgForSchema = resolveHeroImage(poi);
  if (imgForSchema) {
    place.image = `${SITE_URL}${imgForSchema}`;
  }
  const wiki = wikipediaSameAs(poi, lang);
  if (wiki.length > 0) place.sameAs = wiki;
  // Speakable hint for voice search / featured snippet
  place.speakable = {
    "@type": "SpeakableSpecification",
    cssSelector: [".poi-lead-paragraph", "h1"],
  };
  schemas.push(place);

  // ----- ItemList of Sights (TouristAttraction) -----
  const sightsObj = (poi as { sights?: Record<string, Array<{ name: string; text?: string; category?: string }>> }).sights
    || sidecarSightsFor(poi);
  const sightsForLang = sightsObj?.[lang] || sightsObj?.de || sightsObj?.en;
  if (sightsForLang && sightsForLang.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${getLocalized(poi.name, lang) ?? poi.id}`,
      numberOfItems: sightsForLang.length,
      itemListElement: sightsForLang.slice(0, 50).map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristAttraction",
          name: s.name,
          description: s.text || s.name,
          ...(s.category ? { additionalType: s.category } : {}),
          containedInPlace: { "@type": "Place", name: getLocalized(poi.name, lang) ?? poi.id },
        },
      })),
      inLanguage: lang,
    });
  }

  // ----- BreadcrumbList schema -----
  if (breadcrumbCrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbCrumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.url.startsWith("http") ? c.url : `${SITE_URL}${c.url}`,
      })),
    });
  }

  // ----- FAQPage schema -----
  if (faqItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, "\\u003c")}</script>`).join("\n");
}

// City-itinerary loader + renderer (4-mode day trip widget).
// Loads public/data/itinerary/<poi.id>.json if present, then recomputes
// all timings via central lib/itinerary/timing-config.ts (build-time refreshable).
// Import moved to top of file (ES modules require top-level imports).
const _itinCache = new Map<string, any>();
function loadItinerary(poiId: string, poiTier: number = 2): any | null {
  if (_itinCache.has(poiId)) return _itinCache.get(poiId);
  const p = path.resolve(process.cwd(), "public/data/itinerary", `${poiId}.json`);
  let data: any = null;
  try {
    if (fs.existsSync(p)) {
      data = JSON.parse(fs.readFileSync(p, "utf-8"));
      // Central recompute — stay_min, hop_min, arrive_at, end_estimate
      // all derive from lib/itinerary/timing-config.ts
      recomputeItineraryTimings(data, poiTier);
    }
  } catch {}
  _itinCache.set(poiId, data);
  return data;
}

// FR TOP100 sights sidecar — for top FR tier-1 POIs not in JSON-line TS files
// (poiExtraFrV1.ts uses multi-line object format, can't safely auto-merge).
let _frTop100Sights: Record<string, any> | null = null;
function loadFrTop100Sights(): Record<string, any> {
  if (_frTop100Sights !== null) return _frTop100Sights;
  const p = path.resolve(process.cwd(), "public/data/fr-top100-sights.json");
  try {
    _frTop100Sights = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf-8")) : {};
  } catch { _frTop100Sights = {}; }
  return _frTop100Sights!;
}
function sidecarSightsFor(poi: POI): any | null {
  const s = (poi as { sights?: any }).sights;
  if (s && typeof s === "object" && (s.de || s.en || s.hu || s.ro)) return null; // already has
  const sc = loadFrTop100Sights()[poi.id];
  return sc || null;
}

// Landmark practical-info loader (644 landmark POIs with opening hours, fees, etc.).
const _practicalCache = new Map<string, any>();
function loadPractical(poiId: string): any | null {
  if (_practicalCache.has(poiId)) return _practicalCache.get(poiId);
  const p = path.resolve(process.cwd(), "public/data/poi-practical", `${poiId}.json`);
  let data: any = null;
  try {
    if (fs.existsSync(p)) data = JSON.parse(fs.readFileSync(p, "utf-8"));
  } catch {}
  _practicalCache.set(poiId, data);
  return data;
}

const PRACTICAL_COPY: Record<string, Record<string, string>> = {
  hu: { title: "📋 Praktikus információk", address: "Cím", openingHours: "Nyitvatartás", entranceFee: "Belépő", website: "Hivatalos oldal", publicTransport: "Tömegközl.", parking: "Parkolás", accessibility: "Akadálymentes", photoRules: "Fotózás", bestTimeToVisit: "Legjobb idő", audioGuide: "Audio-vezető" },
  de: { title: "📋 Praktische Infos", address: "Adresse", openingHours: "Öffnungszeiten", entranceFee: "Eintritt", website: "Website", publicTransport: "ÖPNV", parking: "Parken", accessibility: "Barrierefreiheit", photoRules: "Fotos", bestTimeToVisit: "Beste Zeit", audioGuide: "Audioguide" },
  en: { title: "📋 Practical info", address: "Address", openingHours: "Hours", entranceFee: "Entry", website: "Website", publicTransport: "Transit", parking: "Parking", accessibility: "Accessibility", photoRules: "Photos", bestTimeToVisit: "Best time", audioGuide: "Audio guide" },
  ro: { title: "📋 Informații practice", address: "Adresă", openingHours: "Program", entranceFee: "Intrare", website: "Site oficial", publicTransport: "Transport public", parking: "Parcare", accessibility: "Accesibilitate", photoRules: "Fotografii", bestTimeToVisit: "Cel mai bun moment", audioGuide: "Audioghid" },
  fr: { title: "📋 Infos pratiques", address: "Adresse", openingHours: "Horaires", entranceFee: "Entrée", website: "Site officiel", publicTransport: "Transports", parking: "Stationnement", accessibility: "Accessibilité", photoRules: "Photos", bestTimeToVisit: "Meilleur moment", audioGuide: "Audioguide" },
  tr: { title: "📋 Pratik bilgiler", address: "Adres", openingHours: "Çalışma saatleri", entranceFee: "Giriş", website: "Resmi site", publicTransport: "Toplu taşıma", parking: "Otopark", accessibility: "Erişilebilirlik", photoRules: "Fotoğraf", bestTimeToVisit: "En iyi zaman", audioGuide: "Sesli rehber" },
  hr: { title: "📋 Praktične informacije", address: "Adresa", openingHours: "Radno vrijeme", entranceFee: "Ulaznica", website: "Službena stranica", publicTransport: "Javni prijevoz", parking: "Parking", accessibility: "Pristupačnost", photoRules: "Fotografiranje", bestTimeToVisit: "Najbolje vrijeme", audioGuide: "Audiovodič" },
};

// Pinfo v1: tipus-csaladonkenti mezok (lasd _build_pinfo_full.py)
const PINFO_FIELD_ORDER: Record<string, string[]> = {
  nature: ["access", "season", "terrain", "gear", "parking", "safety", "duration"],
  heritage: ["visiting", "hours_hint", "photo", "duration", "combine", "access", "tip"],
  wildlife: ["season", "time_of_day", "rules", "gear", "access", "patience_tip"],
  economic: ["what_role", "visitability", "viewpoint", "local_products", "when_active", "nearby_combo"],
};
const PINFO_ICON: Record<string, string> = {
  access: "🧭", season: "📅", terrain: "⛰️", gear: "🎒", parking: "🅿️", safety: "⚠️",
  duration: "⏱️", visiting: "🚪", hours_hint: "🕒", photo: "📷", combine: "➕", tip: "💡",
  time_of_day: "🌅", rules: "📜", patience_tip: "🦌", what_role: "🏭", visitability: "🚪",
  viewpoint: "👀", local_products: "🧺", when_active: "📆", nearby_combo: "➕",
};
const PINFO_LABELS: Record<string, Record<string, string>> = {
  de: { access: "Anfahrt & Zugang", season: "Beste Jahreszeit", terrain: "Gelände & Wege", gear: "Ausrüstung", parking: "Parken", safety: "Sicherheit", duration: "Zeitbedarf", visiting: "Besichtigung", hours_hint: "Übliche Zeiten", photo: "Fotografieren", combine: "Gut kombinierbar", tip: "Insider-Tipp", time_of_day: "Beste Tageszeit", rules: "Verhaltensregeln", patience_tip: "Realistische Erwartung", what_role: "Was ist das?", visitability: "Besichtigung", viewpoint: "Aussichtspunkt", local_products: "Lokale Produkte", when_active: "Aktive Saison", nearby_combo: "In der Nähe" },
  hu: { access: "Megközelítés", season: "Legjobb évszak", terrain: "Terep és utak", gear: "Felszerelés", parking: "Parkolás", safety: "Biztonság", duration: "Időigény", visiting: "Látogathatóság", hours_hint: "Szokásos nyitvatartás", photo: "Fotózás", combine: "Jól kombinálható", tip: "Helyi tipp", time_of_day: "Legjobb napszak", rules: "Viselkedési szabályok", patience_tip: "Reális elvárás", what_role: "Mi ez a hely?", visitability: "Látogathatóság", viewpoint: "Kilátópont", local_products: "Helyi termékek", when_active: "Aktív szezon", nearby_combo: "A közelben" },
  ro: { access: "Acces", season: "Cel mai bun sezon", terrain: "Teren și poteci", gear: "Echipament", parking: "Parcare", safety: "Siguranță", duration: "Timp necesar", visiting: "Vizitare", hours_hint: "Program obișnuit", photo: "Fotografiere", combine: "De combinat cu", tip: "Sfat local", time_of_day: "Cel mai bun moment", rules: "Reguli de comportament", patience_tip: "Așteptări realiste", what_role: "Ce este acest loc?", visitability: "Vizitare", viewpoint: "Punct de belvedere", local_products: "Produse locale", when_active: "Sezon activ", nearby_combo: "În apropiere" },
  en: { access: "Getting there", season: "Best season", terrain: "Terrain & paths", gear: "What to bring", parking: "Parking", safety: "Safety", duration: "Time needed", visiting: "Visiting", hours_hint: "Typical hours", photo: "Photography", combine: "Combine with", tip: "Insider tip", time_of_day: "Best time of day", rules: "Etiquette", patience_tip: "What to expect", what_role: "What is this place?", visitability: "Visiting", viewpoint: "Where to view it", local_products: "Local products", when_active: "Active season", nearby_combo: "Nearby" },
  fr: { access: "Accès", season: "Meilleure saison", terrain: "Terrain et sentiers", gear: "Équipement", parking: "Stationnement", safety: "Sécurité", duration: "Durée", visiting: "Visite", hours_hint: "Horaires habituels", photo: "Photographie", combine: "À combiner avec", tip: "Conseil local", time_of_day: "Meilleur moment", rules: "Règles de conduite", patience_tip: "À quoi s'attendre", what_role: "Qu'est-ce que c'est ?", visitability: "Visite", viewpoint: "Point de vue", local_products: "Produits locaux", when_active: "Saison active", nearby_combo: "À proximité" },
  tr: { access: "Ulaşım", season: "En iyi mevsim", terrain: "Arazi ve yollar", gear: "Ekipman", parking: "Otopark", safety: "Güvenlik", duration: "Gerekli süre", visiting: "Ziyaret", hours_hint: "Olağan saatler", photo: "Fotoğraf", combine: "Birlikte gezilebilir", tip: "Yerel ipucu", time_of_day: "En iyi zaman", rules: "Davranış kuralları", patience_tip: "Gerçekçi beklenti", what_role: "Burası nedir?", visitability: "Ziyaret", viewpoint: "Nereden izlenir", local_products: "Yerel ürünler", when_active: "Aktif sezon", nearby_combo: "Yakınında" },
  hr: { access: "Pristup", season: "Najbolja sezona", terrain: "Teren i staze", gear: "Oprema", parking: "Parking", safety: "Sigurnost", duration: "Potrebno vrijeme", visiting: "Posjet", hours_hint: "Uobičajeno radno vrijeme", photo: "Fotografiranje", combine: "Kombinirajte s", tip: "Lokalni savjet", time_of_day: "Najbolje doba dana", rules: "Pravila ponašanja", patience_tip: "Realna očekivanja", what_role: "Što je ovo mjesto?", visitability: "Posjet", viewpoint: "Odakle promatrati", local_products: "Lokalni proizvodi", when_active: "Aktivna sezona", nearby_combo: "U blizini" },
};

function renderPracticalInfo(poi: POI, lang: Lang): string {
  const data = loadPractical(poi.id);
  if (!data) return "";
  const C = PRACTICAL_COPY[lang] || PRACTICAL_COPY.en;
  // --- Pinfo v1 ag (2026-06): {kind, fields:{access:{de,hu,...},...}} alaku
  // sidecar a nem-city POI-kra (_apply_pinfo.py irja). Tipus-csaladonkenti
  // mezosorrend + cimkek; a regi landmark-sema lejjebb valtozatlan.
  if (data.kind && data.fields && typeof data.fields === "object") {
    const order = PINFO_FIELD_ORDER[data.kind] || Object.keys(data.fields);
    const L = PINFO_LABELS[lang] || PINFO_LABELS.en;
    const items = order.map((k) => {
      const raw = (data.fields as any)[k];
      if (!raw || typeof raw !== "object") return "";
      const v = (raw[lang] || raw.en || raw.de || raw.hu || raw.ro || "") as string;
      if (!v || typeof v !== "string" || v.length < 10) return "";
      return `<div class="plz-pract-item"><div class="plz-pract-icon">${PINFO_ICON[k] || "ℹ️"}</div><div class="plz-pract-body"><div class="plz-pract-label">${escapeHtml(L[k] || k)}</div><div class="plz-pract-value">${escapeHtml(v)}</div></div></div>`;
    }).filter(Boolean).join("");
    if (!items) return "";
    return `<section class="plz-pract"><h2>${C.title}</h2><div class="plz-pract-grid">${items}</div></section>`;
  }
  const fields: Array<[string, string]> = [
    ["address", "📍"], ["openingHours", "🕒"], ["entranceFee", "💶"],
    ["website", "🌐"], ["publicTransport", "🚌"], ["parking", "🅿️"],
    ["accessibility", "♿"], ["photoRules", "📷"], ["bestTimeToVisit", "⭐"],
    ["audioGuide", "🎧"],
  ];
  const items = fields.map(([k, emoji]) => {
    const raw = data[k];
    // Accept string (legacy) OR multi-lang object {de,hu,ro,en}
    let v: string | null = null;
    if (typeof raw === "string") v = raw;
    else if (raw && typeof raw === "object") {
      v = (raw[lang] || raw.en || raw.de || raw.hu || raw.ro || "") as string;
    }
    if (!v || typeof v !== "string" || v.length < 2) return "";
    const label = C[k] || k;
    let valHtml: string;
    if (k === "website" && /^https?:\/\//.test(v)) {
      valHtml = `<a href="${escapeHtml(v)}" target="_blank" rel="nofollow noopener">${escapeHtml(v.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))}</a>`;
    } else {
      valHtml = escapeHtml(v);
    }
    return `<div class="plz-pract-item"><div class="plz-pract-icon">${emoji}</div><div class="plz-pract-body"><div class="plz-pract-label">${escapeHtml(label)}</div><div class="plz-pract-value">${valHtml}</div></div></div>`;
  }).filter(Boolean).join("");
  if (!items) return "";
  return `<section class="plz-pract"><h2>${C.title}</h2><div class="plz-pract-grid">${items}</div></section>`;
}

const ITIN_COPY: Record<Lang, Record<string, string>> = {
  hu: { title: "Egy nap a városban", intro: "Válassz időjárást + közlekedési módot, kapj konkrét napi tervet.", modeWalk: "🚶 Gyalog", modeBike: "🚲 Bicikli", modeCar: "🚗 Autó", modeTransit: "🚌 Tömegközl.", unitWalk: "séta", unitBike: "tekerés", unitCar: "vezetés", unitTransit: "út", places: "hely", tipsHeading: "💡 Helyi tippek", moreTipsHeading: "⭐ További tippek", navHere: "Útvonal", navTo: "Odamenni", resTitle: "🧰 Eszközök kéznél", resIntro: "Minden, ami a látogatáshoz kellhet — egy kattintással.", bestTime: "📅 Mikor érdemes jönni", warnings: "⚠️ Hol legyél óvatos", langTips: "🗣️ Nyelvi gyorstipp", wSunny: "☀️ Jó idő", wRainy: "☔ Eső", wWinter: "❄️ Téli", goLabel: "Mehet", extrasLabel: "⭐ További tippek", toolsLabel: "🧰 Eszközök kéznél", swipeHint: "← csúsztass a többi helyért →" },
  de: { title: "Ein Tag in der Stadt", intro: "Wähle Wetter + Verkehrsmittel, erhalte einen konkreten Tagesplan.", modeWalk: "🚶 Zu Fuß", modeBike: "🚲 Fahrrad", modeCar: "🚗 Auto", modeTransit: "🚌 ÖPNV", unitWalk: "Strecke", unitBike: "Strecke", unitCar: "Strecke", unitTransit: "Weg", places: "Orte", tipsHeading: "💡 Lokale Tipps", moreTipsHeading: "⭐ Weitere Tipps", navHere: "Route", navTo: "Hingelangen", resTitle: "🧰 Werkzeuge zur Hand", resIntro: "Alles, was du für den Besuch brauchst — ein Klick entfernt.", bestTime: "📅 Beste Reisezeit", warnings: "⚠️ Wo Vorsicht geboten ist", langTips: "🗣️ Sprach-Schnelltipp", wSunny: "☀️ Sonnig", wRainy: "☔ Regen", wWinter: "❄️ Winter", goLabel: "Los geht's", extrasLabel: "⭐ Weitere Tipps", toolsLabel: "🧰 Werkzeuge zur Hand", swipeHint: "← wischen für weitere Orte →" },
  en: { title: "A day in the city", intro: "Pick weather + travel mode, get a concrete day plan.", modeWalk: "🚶 Walking", modeBike: "🚲 Bike", modeCar: "🚗 Car", modeTransit: "🚌 Transit", unitWalk: "walk", unitBike: "ride", unitCar: "drive", unitTransit: "trip", places: "places", tipsHeading: "💡 Local tips", moreTipsHeading: "⭐ More picks", navHere: "Route", navTo: "Go here", resTitle: "🧰 Tools at hand", resIntro: "Everything you need for the visit — one click away.", bestTime: "📅 Best time to visit", warnings: "⚠️ Where to be careful", langTips: "🗣️ Language quick-tip", wSunny: "☀️ Sunny", wRainy: "☔ Rainy", wWinter: "❄️ Winter", goLabel: "Let's go", extrasLabel: "⭐ More picks", toolsLabel: "🧰 Tools at hand", swipeHint: "← swipe for more places →" },
  ro: { title: "O zi în oraș", intro: "Alege vremea + un mod de transport, primește un plan concret.", modeWalk: "🚶 Pe jos", modeBike: "🚲 Bicicletă", modeCar: "🚗 Mașină", modeTransit: "🚌 Transport public", unitWalk: "mers", unitBike: "ciclism", unitCar: "condus", unitTransit: "drum", places: "locuri", tipsHeading: "💡 Sfaturi locale", moreTipsHeading: "⭐ Sugestii suplimentare", navHere: "Traseu", navTo: "Du-te aici", resTitle: "🧰 Instrumente la îndemână", resIntro: "Tot ce ai nevoie pentru vizită — la un clic distanță.", bestTime: "📅 Când să vizitezi", warnings: "⚠️ Unde să fii atent", langTips: "🗣️ Sfaturi rapide de limbă", wSunny: "☀️ Vreme bună", wRainy: "☔ Ploaie", wWinter: "❄️ Iarnă", goLabel: "Hai", extrasLabel: "⭐ Sugestii suplimentare", toolsLabel: "🧰 Instrumente la îndemână", swipeHint: "← glisează pentru mai multe →" },
  fr: { title: "Une journée dans la ville", intro: "Choisis la météo + ton mode de transport, reçois un plan concret.", modeWalk: "🚶 À pied", modeBike: "🚲 Vélo", modeCar: "🚗 Voiture", modeTransit: "🚌 Transports", unitWalk: "marche", unitBike: "vélo", unitCar: "route", unitTransit: "trajet", places: "lieux", tipsHeading: "💡 Conseils locaux", moreTipsHeading: "⭐ Autres recommandations", navHere: "Itinéraire", navTo: "S'y rendre", resTitle: "🧰 Outils à portée de main", resIntro: "Tout ce qu'il faut pour la visite — en un clic.", bestTime: "📅 Quand y aller", warnings: "⚠️ Où faire attention", langTips: "🗣️ Astuce linguistique", wSunny: "☀️ Beau temps", wRainy: "☔ Pluie", wWinter: "❄️ Hiver", goLabel: "C'est parti", extrasLabel: "⭐ Autres recommandations", toolsLabel: "🧰 Outils à portée de main", swipeHint: "← glisse pour plus →" },
  tr: { title: "Şehirde bir gün", intro: "Hava + ulaşım modunu seç, somut bir günlük plan al.", modeWalk: "🚶 Yürüyerek", modeBike: "🚲 Bisiklet", modeCar: "🚗 Araba", modeTransit: "🚌 Toplu taşıma", unitWalk: "yürüyüş", unitBike: "sürüş", unitCar: "yolculuk", unitTransit: "yolculuk", places: "yer", tipsHeading: "💡 Yerel ipuçları", moreTipsHeading: "⭐ Daha fazla öneri", navHere: "Rota", navTo: "Buraya git", resTitle: "🧰 Elinizin altında", resIntro: "Ziyaret için gereken her şey — bir tık uzakta.", bestTime: "📅 Ne zaman gidilmeli", warnings: "⚠️ Nerede dikkatli olunmalı", langTips: "🗣️ Dil ipucu", wSunny: "☀️ Güneşli", wRainy: "☔ Yağmurlu", wWinter: "❄️ Kış", goLabel: "Haydi", extrasLabel: "⭐ Daha fazla öneri", toolsLabel: "🧰 Elinizin altında", swipeHint: "← daha fazla yer için kaydır →" },
  hr: { title: "Jedan dan u gradu", intro: "Odaberi vrijeme + način prijevoza i dobij konkretan dnevni plan.", modeWalk: "🚶 Pješice", modeBike: "🚲 Bicikl", modeCar: "🚗 Auto", modeTransit: "🚌 Javni prijevoz", unitWalk: "hodanja", unitBike: "vožnje", unitCar: "vožnje", unitTransit: "puta", places: "mjesta", tipsHeading: "💡 Lokalni savjeti", moreTipsHeading: "⭐ Više preporuka", navHere: "Ruta", navTo: "Kreni ovamo", resTitle: "🧰 Alati pri ruci", resIntro: "Sve što ti treba za posjet — jedan klik daleko.", bestTime: "📅 Kada posjetiti", warnings: "⚠️ Gdje biti oprezan", langTips: "🗣️ Brzi jezični savjet", wSunny: "☀️ Sunčano", wRainy: "☔ Kiša", wWinter: "❄️ Zima", goLabel: "Idemo", extrasLabel: "⭐ Više preporuka", toolsLabel: "🧰 Alati pri ruci", swipeHint: "← klizni za više mjesta →" },
};
const TRAVEL_MODE: Record<string, string> = { walk: "walking", bike: "bicycling", car: "driving", transit: "transit" };
const CAT_ICON: Record<string, string> = { square: "📍", historical: "🏛️", religious: "⛪", museum: "🎨", park: "🏞️", gastro: "🍽️", panorama: "🌅" };

// P3: Cost estimator per mode — sums entry-fees by category + transport
function renderCostEstimate(stops: any[], mode: string, totalKm: number, lang: Lang): string {
  // Per-category typical entry fee EUR
  const FEE: Record<string, number> = {
    "museum": 12, "palace": 14, "fortress": 8, "castle": 10, "monument": 0,
    "church": 0, "cathedral": 3, "religious": 2, "monastery": 4,
    "square": 0, "park": 0, "garden": 3, "viewpoint": 0, "nature": 0,
    "market": 0, "harbor": 0, "theater": 18, "landmark": 5,
    "churches/cathedrals": 2, "tower": 8, "gallery": 9,
  };
  let entries = 0;
  for (const s of stops) entries += FEE[(s.category || "").toLowerCase()] ?? 4;
  let transport = 0;
  if (mode === "walk") transport = 0;
  else if (mode === "bike") transport = 12; // rental day
  else if (mode === "car") transport = Math.round(totalKm * 0.18); // fuel + minimal parking
  else if (mode === "transit") transport = 8; // day pass
  const lo = Math.max(0, Math.round((entries + transport) * 0.85));
  const hi = Math.round((entries + transport) * 1.15);
  if (lo === 0 && hi === 0) return "";
  const L: Partial<Record<Lang, Record<string, string>>> = {
    de: { cost: "Tagesbudget", entry: "Eintritte", trans: "Transport" },
    hu: { cost: "Napi költségvetés", entry: "Belépők", trans: "Közlekedés" },
    ro: { cost: "Buget zilnic", entry: "Intrări", trans: "Transport" },
    en: { cost: "Day budget", entry: "Entries", trans: "Transport" },
    fr: { cost: "Budget jour", entry: "Entrées", trans: "Transport" },
    tr: { cost: "Günlük bütçe", entry: "Giriş", trans: "Ulaşım" },
    hr: { cost: "Dnevni proračun", entry: "Ulaznice", trans: "Prijevoz" },
  };
  const t = L[lang] || L.en!;
  return `<div class="plz-itin-cost"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg><strong>${t.cost}: ≈ ${lo}–${hi} €</strong><span class="plz-itin-cost-detail">${t.entry} ${entries}€ · ${t.trans} ${transport}€</span></div>`;
}

// "Sights within N km" — client-side radius filter over the static sight-grid
// (public/data/sight-grid/<lang>/<cell>.json, built by scripts/build-sight-grid.mts).
// Lazy: nothing is fetched until the user taps a radius chip.
function renderSightRadius(poi: POI, lang: Lang): string {
  const pc = (poi as { coords?: unknown }).coords as number[] | undefined;
  if (!Array.isArray(pc) || pc.length !== 2 || typeof pc[0] !== "number" || typeof pc[1] !== "number") return "";
  const [plng, plat] = pc;
  const H: Partial<Record<Lang, string>> = {
    de: "Sehenswürdigkeiten im Umkreis", hu: "Látnivalók a környéken",
    ro: "Obiective în împrejurimi", en: "Sights nearby",
    fr: "À voir aux alentours", tr: "Çevredeki gezilecek yerler", hr: "Znamenitosti u okolici",
  };
  const NONE: Partial<Record<Lang, string>> = {
    de: "Keine Treffer in diesem Umkreis.", hu: "Nincs találat ebben a körzetben.",
    ro: "Niciun rezultat în această rază.", en: "No results in this radius.",
    fr: "Aucun résultat dans ce rayon.", tr: "Bu yarıçapta sonuç yok.", hr: "Nema rezultata u ovom krugu.",
  };
  // Label of the details-page link inside the expanded description block.
  const MORE: Partial<Record<Lang, string>> = {
    de: "Zur Detailseite", hu: "Részletes oldal", ro: "Pagina detaliată", en: "Details page",
    fr: "Page détaillée", tr: "Detay sayfası", hr: "Stranica s detaljima",
  };
  const radii = [5, 10, 20, 50];
  const chips = radii.map((r) => `<button type="button" class="plz-sgr-chip" data-r="${r}">${r} km</button>`).join("");
  // Category filter — icon-only buttons over the loaded radius result.
  // Buckets are regex-matched client-side over the raw grid category string
  // (the grid stores free-form categories; "kul" is the catch-all bucket).
  const CT: Partial<Record<Lang, Record<string, string>>> = {
    de: { all: "Alle", kul: "Kultur & Sehenswertes", nat: "Natur", rec: "Freizeit", fam: "Familie" },
    hu: { all: "Összes", kul: "Kultúra és látnivalók", nat: "Természet", rec: "Szabadidő", fam: "Családi" },
    ro: { all: "Toate", kul: "Cultură și obiective", nat: "Natură", rec: "Recreere", fam: "Familie" },
    en: { all: "All", kul: "Culture & landmarks", nat: "Nature", rec: "Leisure", fam: "Family" },
    fr: { all: "Tout", kul: "Culture et sites", nat: "Nature", rec: "Loisirs", fam: "Famille" },
    tr: { all: "Tümü", kul: "Kültür ve simgeler", nat: "Doğa", rec: "Eğlence", fam: "Aile" },
    hr: { all: "Sve", kul: "Kultura i znamenitosti", nat: "Priroda", rec: "Rekreacija", fam: "Obitelj" },
  };
  const ct = CT[lang] || CT.en!;
  const CAT_ICON: Record<string, string> = {
    all: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="7" cy="7" r="2.4"/><circle cx="17" cy="7" r="2.4"/><circle cx="7" cy="17" r="2.4"/><circle cx="17" cy="17" r="2.4"/></svg>`,
    kul: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M4 9h16M12 3l9 6H3l9-6M6 9v12M12 9v12M18 9v12"/></svg>`,
    nat: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13C4 8 8 4 20 4c0 12-4 16-9 16z"/><path d="M4 20c4-4 8-7 12-9"/></svg>`,
    rec: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="10" r="6"/><circle cx="12" cy="10" r="1.4"/><path d="M12 4v12M6.8 7l10.4 6M17.2 7L6.8 13M12 16l-4.2 6M12 16l4.2 6"/></svg>`,
    fam: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="6.5" r="2.6"/><path d="M4.5 21v-4.5a4.5 4.5 0 0 1 9 0V21"/><circle cx="17.5" cy="9.5" r="2"/><path d="M14.8 21v-3a3.2 3.2 0 0 1 5.7-2"/></svg>`,
  };
  const catBtns = ["all", "kul", "nat", "rec", "fam"].map((k) =>
    `<button type="button" class="plz-sgr-cat${k === "all" ? " on" : ""}" data-c="${k}" title="${escapeHtml(ct[k])}" aria-label="${escapeHtml(ct[k])}">${CAT_ICON[k]}</button>`).join("");
  return `<section class="plz-sgr" id="sec-sgr">
  <h2>${escapeHtml(H[lang] || H.en!)}</h2>
  <div class="plz-sgr-chips">${chips}<span class="plz-sgr-sep"></span>${catBtns}</div>
  <div class="plz-sgr-list" id="plzSgrList" hidden></div>
  <script>(function(){
  var LAT=${plat.toFixed(5)},LNG=${plng.toFixed(5)},LANG=${JSON.stringify(lang)};
  var CELL=.5,cache={},list=document.getElementById('plzSgrList');
  var PEG='<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true"><circle cx="12" cy="6" r="3.1"/><path d="M12 9.8c-2 0-3.4 1.1-3.4 2.6v3l1.5.6.5 5h2.8l.5-5 1.5-.6v-3c0-1.5-1.4-2.6-3.4-2.6z"/></svg>';
  var PIN='<svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true"><path d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" fill="currentColor"/><circle cx="12" cy="9" r="2.6" fill="#fff"/></svg>';
  function dist(a,b,c,d){var R=6371,x=(c-a)*Math.PI/180,y=(d-b)*Math.PI/180,s=Math.sin(x/2),t=Math.sin(y/2),h=s*s+Math.cos(a*Math.PI/180)*Math.cos(c*Math.PI/180)*t*t;return 2*R*Math.asin(Math.sqrt(h))}
  function cellsFor(r){var dl=r/111,dg=r/(111*Math.max(.2,Math.cos(LAT*Math.PI/180)));var out=[];
    for(var la=Math.floor((LAT-dl)/CELL);la<=Math.floor((LAT+dl)/CELL);la++)
      for(var lo=Math.floor((LNG-dg)/CELL);lo<=Math.floor((LNG+dg)/CELL);lo++)out.push(la+'_'+lo);
    return out}
  function getCell(k){if(cache[k])return cache[k];
    cache[k]=fetch('/data/sight-grid/'+LANG+'/'+k+'.json').then(function(r){return r.ok?r.json():[]}).catch(function(){return[]});
    return cache[k]}
  function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}
  var CUR=null,CAT='all',LOADED=false;
  function bucket(c){c=(c||'').toLowerCase();
    if(/family|playground|spielplatz|zoo|aquar|theme|adventure|funfair|amusement/.test(c))return'fam';
    if(/natur|park|lake|garden|beach|strand|cave|waterfall|island|promenad|forest|wald|botan|cliff|gorge|spring/.test(c))return'nat';
    if(/recreat|sport|freizeit|stadion|stadium|pool|bath|spa|therm|leisure|marina|golf/.test(c))return'rec';
    return'kul'}
  function render(){
    if(!CUR)return;
    var items=CAT==='all'?CUR:CUR.filter(function(x){return bucket(x.e[3])===CAT});
    if(!items.length){list.innerHTML='<div class="plz-sgr-load">${escapeHtml(NONE[lang] || NONE.en!)}</div>';return}
    var top=items.slice(0,120);
    list.innerHTML=top.map(function(x){var e=x.e;
      var sv=e[5]?'<a class="plz-sgr-sv" href="https://www.google.com/maps/@?api=1&map_action=pano&'+(typeof e[5]==='string'?'pano='+e[5]+'&':'')+'viewpoint='+e[1]+','+e[2]+'" target="_blank" rel="nofollow noopener" title="Street View">'+PEG+'</a>'
        :'<a class="plz-sgr-sv plz-sgr-gm" href="https://www.google.com/maps/search/?api=1&query='+e[1]+','+e[2]+'" target="_blank" rel="nofollow noopener" title="Google Maps">'+PIN+'</a>';
      var nm='<span class="plz-sgr-nm">'+esc(e[0])+'</span>';
      return '<div class="plz-sgr-it" data-ck="'+x.ck+'" data-ix="'+x.ix+'"'+(e[4]?' data-u="'+esc(e[4])+'"':'')+'><span class="plz-sgr-d">'+(x.d<10?x.d.toFixed(1):Math.round(x.d))+' km</span>'+nm+sv+'</div>';
    }).join('');
  }
  function show(r,btn){
    LOADED=true;
    var bs=document.querySelectorAll('.plz-sgr-chip');for(var i=0;i<bs.length;i++)bs[i].classList.toggle('on',bs[i]===btn);
    list.hidden=false;list.innerHTML='<div class="plz-sgr-load"><span class="plz-sgr-spin"></span></div>';
    try{if(window.umami&&window.umami.track)window.umami.track('nearby_radius',{r:r})}catch(e){}
    var cks=cellsFor(r);
    Promise.all(cks.map(getCell)).then(function(cells){
      var seen={},items=[];
      cells.forEach(function(arr,ci){arr.forEach(function(e,ei){
        var d=dist(LAT,LNG,e[1],e[2]);if(d>r)return;
        var k=e[0].toLowerCase()+'|'+e[1].toFixed(3)+','+e[2].toFixed(3);
        if(seen[k])return;seen[k]=1;items.push({e:e,d:d,ck:cks[ci],ix:ei});
      })});
      items.sort(function(a,b){return a.d-b.d});
      CUR=items;render();
    });
  }
  /* kattintasra kibomlo rovid leiras — a <cell>d.json desc-sidecarbol */
  var dcache={};
  function getDesc(ck){if(dcache[ck])return dcache[ck];
    dcache[ck]=fetch('/data/sight-grid/'+LANG+'/'+ck+'d.json').then(function(r){return r.ok?r.json():[]}).catch(function(){return[]});
    return dcache[ck]}
  list.addEventListener('click',function(ev){
    if(ev.target.closest('a'))return;
    var it=ev.target.closest('.plz-sgr-it');if(!it)return;
    var nx=it.nextElementSibling;
    if(nx&&nx.classList.contains('plz-sgr-desc')){nx.remove();it.classList.remove('open');return}
    var old=list.querySelector('.plz-sgr-desc');if(old){old.previousElementSibling.classList.remove('open');old.remove()}
    var ck=it.getAttribute('data-ck'),ix=+it.getAttribute('data-ix'),u=it.getAttribute('data-u');
    getDesc(ck).then(function(ds){
      var t=ds[ix];if(!t&&!u)return;
      var d=document.createElement('div');d.className='plz-sgr-desc';
      if(t){var p=document.createElement('div');p.textContent=t;d.appendChild(p)}
      if(u){var a=document.createElement('a');a.className='plz-sgr-more';a.href=u;a.textContent=${JSON.stringify((MORE[lang] || MORE.en!) + " →")};d.appendChild(a)}
      it.insertAdjacentElement('afterend',d);it.classList.add('open');
      try{if(window.umami&&window.umami.track)window.umami.track('nearby_desc',{})}catch(e){}
    });
  });
  document.querySelectorAll('.plz-sgr-chip').forEach(function(b){b.addEventListener('click',function(){show(+b.getAttribute('data-r'),b)})});
  document.querySelectorAll('.plz-sgr-cat').forEach(function(b){b.addEventListener('click',function(){
    CAT=b.getAttribute('data-c');
    var bs=document.querySelectorAll('.plz-sgr-cat');for(var i=0;i<bs.length;i++)bs[i].classList.toggle('on',bs[i]===b);
    try{if(window.umami&&window.umami.track)window.umami.track('nearby_cat',{c:CAT})}catch(e){}
    if(!LOADED){var d=document.querySelector('.plz-sgr-chip[data-r="10"]');if(d){show(10,d);return}}
    render();
  })});
  })();</script>
  </section>`;
}

// Collapsible "Praktische Infos" card for CITY POIs: live weather (on first
// open), Feiertag watch (Nager.Date), nearby-radius filter (moved in from the
// sights section) and the city-tips pack (public/data/city-tips/<id>.json).
// Where this card renders, the standalone weather widget + the sights-section
// radius filter are dropped (user decision 2026-06-05).
function renderInfoCard(poi: POI, lang: Lang, countryId: string): string {
  // Minden varos-szeru tipus kapja (Hannover=state-capital kimaradt, 2026-06-06).
  if (!CITY_TYPES.has((poi as any).type) && (poi as any).type !== "state-capital") return "";
  const pc = (poi as { coords?: unknown }).coords as number[] | undefined;
  if (!Array.isArray(pc) || pc.length !== 2 || typeof pc[0] !== "number" || typeof pc[1] !== "number") return "";
  const [plng, plat] = pc;
  const iso2 = slugs.countryIso2(countryId) || "";
  const T: Partial<Record<Lang, any>> = {
    de: { title: "Praktische Infos", wx: "Wetter — 5 Tage", near: "In der Umgebung", tips: "Tipps", gastro: "Gastro", shop: "Shopping", quiet: "Ruhige Orte", fei: "Feiertag", feiWarn: "Feiertag — viele Geschäfte können geschlossen sein!" },
    hu: { title: "Praktikus infók", wx: "Időjárás — 5 nap", near: "A környéken", tips: "Tippek", gastro: "Gasztro", shop: "Shopping", quiet: "Nyugis helyek", fei: "Ünnepnap", feiWarn: "ünnepnap — sok üzlet zárva lehet!" },
    ro: { title: "Informații practice", wx: "Vremea — 5 zile", near: "În împrejurimi", tips: "Sfaturi", gastro: "Gastro", shop: "Cumpărături", quiet: "Locuri liniștite", fei: "Sărbătoare", feiWarn: "sărbătoare legală — multe magazine pot fi închise!" },
    en: { title: "Practical info", wx: "Weather — 5 days", near: "Nearby", tips: "Tips", gastro: "Food", shop: "Shopping", quiet: "Quiet spots", fei: "Holiday", feiWarn: "public holiday — many shops may be closed!" },
    fr: { title: "Infos pratiques", wx: "Météo — 5 jours", near: "Aux alentours", tips: "Conseils", gastro: "Gastro", shop: "Shopping", quiet: "Coins calmes", fei: "Jour férié", feiWarn: "jour férié — de nombreux magasins peuvent être fermés !" },
    tr: { title: "Pratik bilgiler", wx: "Hava — 5 gün", near: "Çevrede", tips: "İpuçları", gastro: "Yeme-içme", shop: "Alışveriş", quiet: "Sakin yerler", fei: "Tatil", feiWarn: "resmî tatil — birçok dükkân kapalı olabilir!" },
    hr: { title: "Praktične informacije", wx: "Vrijeme — 5 dana", near: "U okolici", tips: "Savjeti", gastro: "Gastro", shop: "Kupovina", quiet: "Mirna mjesta", fei: "Blagdan", feiWarn: "blagdan — mnoge trgovine mogu biti zatvorene!" },
  };
  const t = T[lang] || T.en;
  // City-tips sidecar (build-time bake). Cities WITH itinerary already show
  // picks in the PlizioGo widget — the tips block here is the no-itinerary fill.
  let tipsHtml = "";
  try {
    const tp = path.resolve(process.cwd(), "public", "data", "city-tips", `${poi.id}.json`);
    // Itinerary-s varosokon a PlizioGo-widget mutatja a pickeket (a widget a
    // tervezo elkeszulteig marad) — ott a kartya tips-blokkja kimarad, ne duplikaljon.
    const hasItin = fs.existsSync(path.resolve(process.cwd(), "public", "data", "itinerary", `${poi.id}.json`));
    if (!hasItin && fs.existsSync(tp)) {
      const ct = JSON.parse(fs.readFileSync(tp, "utf-8"));
      const L = (o: any) => (o && (o[lang] || o.en)) || [];
      const tipLis = L(ct.tips).map((x: string) => `<li>${escapeHtml(x)}</li>`).join("");
      const picks = (arr: any[], emoji: string) => arr.map((p: any) =>
        `<div class="plz-ic-pick"><span>${emoji}</span><div><b>${escapeHtml(String(p.name || ""))}</b><p>${escapeHtml(String(p.tip || ""))}</p></div></div>`).join("");
      tipsHtml = `
  <div class="plz-ic-sec"><h4>💡 ${escapeHtml(t.tips)}</h4><ul class="plz-ic-tips">${tipLis}</ul></div>
  <div class="plz-ic-sec"><h4>🍽 ${escapeHtml(t.gastro)}</h4>${picks(L(ct.gastro_picks), "🍽")}</div>
  <div class="plz-ic-sec"><h4>🛍 ${escapeHtml(t.shop)} · 🧘 ${escapeHtml(t.quiet)}</h4>${picks(L(ct.shopping_picks), "🛍")}${picks(L(ct.quiet_picks), "🧘")}</div>`;
    }
  } catch {}
  const radiusHtml = renderSightRadius(poi, lang);
  // SEO: keyword-os, városneves cím (h2-ként a summary-ban); a baked tips-szöveg
  // a zárt details-ben is teljes értékűen indexelődik (DOM-ban van).
  const cityName = (poi.name as any)?.[lang] || (poi.name as any)?.en || poi.id;
  return `<details class="plz-icard" id="plzIcard" data-lat="${plat.toFixed(5)}" data-lng="${plng.toFixed(5)}" data-iso="${escapeHtml(iso2)}" data-lang="${lang}">
  <summary><span class="plz-ic-ico">ℹ️</span><h2 class="plz-ic-h">${escapeHtml(t.title)} — ${escapeHtml(cityName)}</h2><span class="plz-ic-arrow">▾</span></summary>
  <div class="plz-ic-body">
    <div class="plz-ic-sec"><h4>🌤 ${escapeHtml(t.wx)}</h4><div class="plz-ic-wx" id="plzIcWx"><span class="plz-sgr-spin"></span></div><div class="plz-ic-fei" id="plzIcFei" hidden></div></div>
    <div class="plz-ic-sec"><h4>📍 ${escapeHtml(t.near)}</h4>${radiusHtml}</div>
    ${tipsHtml}
  </div>
</details>
<script>(function(){var el=document.getElementById('plzIcard');if(!el)return;var loaded=false;
el.addEventListener('toggle',function(){if(!el.open||loaded)return;loaded=true;
var lat=el.dataset.lat,lng=el.dataset.lng,iso=el.dataset.iso,lang=el.dataset.lang;
var IC={0:"☀️",1:"🌤",2:"⛅",3:"☁️",45:"🌫",48:"🌫",51:"🌦",53:"🌦",55:"🌧",61:"🌦",63:"🌧",65:"🌧",71:"🌨",73:"🌨",75:"❄️",80:"🌦",81:"🌧",82:"⛈",95:"⛈",96:"⛈",99:"⛈"};
var DAYS={de:['So','Mo','Di','Mi','Do','Fr','Sa'],hu:['V','H','K','Sze','Cs','P','Szo'],ro:['Du','Lu','Ma','Mi','Jo','Vi','Sâ'],en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']};
var D=DAYS[lang]||DAYS.en;
fetch('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lng+'&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=5')
.then(function(r){return r.json()}).then(function(j){
  document.getElementById('plzIcWx').innerHTML=j.daily.time.map(function(tm,i){var d=new Date(tm);
    return '<div class="plz-ic-wd"><div class="d">'+D[d.getDay()]+' '+d.getDate()+'.</div><div class="i">'+(IC[j.daily.weather_code[i]]||'🌡')+'</div><div class="t">'+Math.round(j.daily.temperature_2m_max[i])+'° <small>'+Math.round(j.daily.temperature_2m_min[i])+'°</small></div></div>';
  }).join('');}).catch(function(){var w=document.getElementById('plzIcWx');if(w)w.innerHTML='';});
if(iso){fetch('https://date.nager.at/api/v3/PublicHolidays/'+(new Date()).getFullYear()+'/'+iso)
.then(function(r){return r.ok?r.json():[]}).then(function(hs){
  var now=new Date();var today=new Date(now.toDateString());var lim=new Date(now.getTime()+5*86400000);
  for(var i=0;i<hs.length;i++){var d=new Date(hs[i].date);
    if(d>=today&&d<=lim){var f=document.getElementById('plzIcFei');f.hidden=false;
      f.innerHTML='🎌 <b>'+hs[i].date.slice(5)+': '+hs[i].localName+'</b> — '+${JSON.stringify(t.feiWarn)};break;}}
}).catch(function(){});}
try{if(window.umami&&window.umami.track)window.umami.track('infocard_open',{});}catch(e){}
});})();</script>`;
}

// ── A→B útvonaltervező (autós + Wohnmobil), POI = cél előtöltve ──────────────
// TESZT: egyelőre csak ezekre a POI-kra rendereljük (1 éles teszt-route).
const ROUTE_PLANNER_TEST = new Set<string>(["lyon"]);
// Statikus címkék (HTML-ben) + dinamikus stringek (data-copy JSON, a route-planner.js olvassa).
const RP_COPY: Record<string, Record<string, string>> = {
  de: { h: "Routenplaner — Auto & Wohnmobil", sub: "Von wo startest du? Wir bauen die Route hierher, mit Stopps und Länder-Hinweisen unterwegs.", to: "Ziel", from: "Start", fromPh: "z.B. München", via: "Über (optional)", viaPh: "z.B. Zagreb", nights: "Übernachtungs-Stopps", vehicle: "Fahrzeug", car: "🚗 Auto", camper: "🚐 Wohnmobil", filter: "Nur Stopps mit (optional):", water: "💧 Wasser", dump: "♻️ Entsorgung", power: "🔌 Strom", wc: "🚻 WC", shower: "🚿 Dusche", tierAB: "Stellplätze + Camping", tierA: "Nur Stellplätze", tierB: "Nur Camping", tierABC: "Auch Natur-/Rastplätze", b10: "Umweg max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Route planen" },
  hu: { h: "Útvonaltervező — Autó & Lakóautó", sub: "Honnan indulsz? Megtervezzük az utat ide, útközbeni megállókkal és ország-tudnivalókkal.", to: "Cél", from: "Indulás", fromPh: "pl. Budapest", via: "Érintve (opcionális)", viaPh: "pl. Zagreb", nights: "Éjszakai megállók", vehicle: "Jármű", car: "🚗 Autó", camper: "🚐 Lakóautó", filter: "Csak megállók ezzel (opcionális):", water: "💧 Víz", dump: "♻️ Ürítő", power: "🔌 Áram", wc: "🚻 WC", shower: "🚿 Zuhany", tierAB: "Stellplatz + kemping", tierA: "Csak Stellplatz", tierB: "Csak kemping", tierABC: "Pihenő-/natúrhelyek is", b10: "Kitérő max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Útvonal tervezése" },
  en: { h: "Route planner — Car & Motorhome", sub: "Where do you start? We build the route here, with stops and country notes along the way.", to: "Destination", from: "Start", fromPh: "e.g. Munich", via: "Via (optional)", viaPh: "e.g. Zagreb", nights: "Overnight stops", vehicle: "Vehicle", car: "🚗 Car", camper: "🚐 Motorhome", filter: "Only stops with (optional):", water: "💧 Water", dump: "♻️ Disposal", power: "🔌 Power", wc: "🚻 Toilets", shower: "🚿 Shower", tierAB: "Aires + campsites", tierA: "Aires only", tierB: "Campsites only", tierABC: "Also rest/nature areas", b10: "Detour max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Plan route" },
  ro: { h: "Planificator traseu — Mașină & Rulotă", sub: "De unde pleci? Construim traseul până aici, cu opriri și informații pe țări.", to: "Destinație", from: "Plecare", fromPh: "ex. Cluj", via: "Prin (opțional)", viaPh: "ex. Zagreb", nights: "Opriri peste noapte", vehicle: "Vehicul", car: "🚗 Mașină", camper: "🚐 Rulotă", filter: "Doar opriri cu (opțional):", water: "💧 Apă", dump: "♻️ Golire", power: "🔌 Curent", wc: "🚻 Toaletă", shower: "🚿 Duș", tierAB: "Popasuri + camping", tierA: "Doar popasuri", tierB: "Doar camping", tierABC: "Și locuri de odihnă/natură", b10: "Ocol max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Planifică traseul" },
  fr: { h: "Planificateur d'itinéraire — Voiture & Camping-car", sub: "D'où partez-vous ? Nous construisons l'itinéraire jusqu'ici, avec des étapes et des infos par pays.", to: "Destination", from: "Départ", fromPh: "ex. Paris", via: "Via (optionnel)", viaPh: "ex. Zagreb", nights: "Étapes nuitées", vehicle: "Véhicule", car: "🚗 Voiture", camper: "🚐 Camping-car", filter: "Étapes avec (optionnel) :", water: "💧 Eau", dump: "♻️ Vidange", power: "🔌 Électricité", wc: "🚻 WC", shower: "🚿 Douche", tierAB: "Aires + campings", tierA: "Aires seulement", tierB: "Campings seulement", tierABC: "Aussi aires nature/repos", b10: "Détour max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Planifier l'itinéraire" },
};
const RP_DYN: Record<string, Record<string, string>> = {
  de: { notFound: "Ort nicht gefunden", needOrigin: "Bitte Startort eingeben.", searching: "📍 Ort wird gesucht…", routing: "🛣️ Route wird berechnet…", km: "km", hrs: "Std.", nights: "Übernachtungen", matchStops: "passende Stopps", mapsAll: "Ganze Route in Maps", advisory: "Länder-Hinweise", toll: "Maut", lez: "Umweltzone", overnight: "Übernachten", mandatory: "Pflicht", keepStop: "diesen Stopp behalten", day: "TAG", dest: "ZIEL", swipe: "← Karten wischen →", regen: "Neu generieren — behaltene Stopps fixieren", regenKept: "🔄 Route mit behaltenen Stopps…", regenNew: "🔄 Neue Variante…" },
  hu: { notFound: "A hely nem található", needOrigin: "Add meg az indulási helyet.", searching: "📍 Hely keresése…", routing: "🛣️ Útvonal számítása…", km: "km", hrs: "óra", nights: "éjszaka", matchStops: "találó megálló", mapsAll: "Teljes útvonal Mapsben", advisory: "Ország-tudnivalók", toll: "Útdíj", lez: "Környezeti zóna", overnight: "Éjszakázás", mandatory: "Kötelező", keepStop: "ezt a megállót megtartom", day: "NAP", dest: "CÉL", swipe: "← húzd a kártyákat →", regen: "Újragenerálás — megtartottak rögzítése", regenKept: "🔄 Útvonal a megtartottakkal…", regenNew: "🔄 Új variáció…" },
  en: { notFound: "Place not found", needOrigin: "Please enter a start point.", searching: "📍 Locating…", routing: "🛣️ Calculating route…", km: "km", hrs: "h", nights: "nights", matchStops: "matching stops", mapsAll: "Whole route in Maps", advisory: "Country notes", toll: "Toll", lez: "Low-emission zone", overnight: "Overnight", mandatory: "Required", keepStop: "keep this stop", day: "DAY", dest: "GOAL", swipe: "← swipe cards →", regen: "Regenerate — fix kept stops", regenKept: "🔄 Route with kept stops…", regenNew: "🔄 New variant…" },
  ro: { notFound: "Locul nu a fost găsit", needOrigin: "Introdu punctul de plecare.", searching: "📍 Se caută locul…", routing: "🛣️ Se calculează traseul…", km: "km", hrs: "ore", nights: "nopți", matchStops: "opriri potrivite", mapsAll: "Tot traseul în Maps", advisory: "Informații pe țări", toll: "Taxă drum", lez: "Zonă ecologică", overnight: "Înnoptare", mandatory: "Obligatoriu", keepStop: "păstrează această oprire", day: "ZIUA", dest: "ȚINTĂ", swipe: "← glisează cardurile →", regen: "Regenerează — fixează opririle păstrate", regenKept: "🔄 Traseu cu opririle păstrate…", regenNew: "🔄 Variantă nouă…" },
  fr: { notFound: "Lieu introuvable", needOrigin: "Entrez un point de départ.", searching: "📍 Recherche du lieu…", routing: "🛣️ Calcul de l'itinéraire…", km: "km", hrs: "h", nights: "nuitées", matchStops: "étapes correspondantes", mapsAll: "Tout l'itinéraire dans Maps", advisory: "Infos par pays", toll: "Péage", lez: "Zone à faibles émissions", overnight: "Nuitée", mandatory: "Obligatoire", keepStop: "garder cette étape", day: "JOUR", dest: "BUT", swipe: "← faites glisser →", regen: "Régénérer — fixer les étapes gardées", regenKept: "🔄 Itinéraire avec étapes gardées…", regenNew: "🔄 Nouvelle variante…" },
};
function renderRoutePlanner(poi: POI, lang: Lang, name: string): string {
  if (!ROUTE_PLANNER_TEST.has(poi.id)) return "";
  if (!Array.isArray(poi.coords) || poi.coords.length < 2) return "";
  const lng = Number(poi.coords[0]), lat = Number(poi.coords[1]);
  if (!isFinite(lng) || !isFinite(lat)) return "";
  const T = RP_COPY[lang] || RP_COPY.en;
  const dyn = RP_DYN[lang] || RP_DYN.en;
  const stopsOpts = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `<option${n === 2 ? " selected" : ""}>${n}</option>`).join("");
  const svc = [["water", T.water], ["dump", T.dump], ["power", T.power], ["toilets", T.wc], ["shower", T.shower]]
    .map(([v, l]) => `<label class="plz-rp-svcl"><input type="checkbox" class="plz-rp-svc" value="${v}"> ${escapeHtml(l)}</label>`).join("");
  const copyJson = escapeHtml(JSON.stringify(dyn));
  const css = `<style>
.plz-rp{margin:1.4rem 0;background:rgba(0,8,20,.55);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1rem 1.05rem 1.15rem}
.plz-rp-head h2{font-size:1.1rem;margin:0 0 .2rem;color:#e6ecf3;display:flex;align-items:center;gap:.4rem}
.plz-rp-head .plz-rp-to{font-size:.72rem;font-weight:700;color:#0a0f1c;background:#4cc6ff;border-radius:999px;padding:.12rem .55rem;margin-left:.2rem}
.plz-rp-head p{font-size:.84rem;color:rgba(230,236,243,.62);margin:.15rem 0 .8rem}
.plz-rp-row{display:flex;flex-wrap:wrap;gap:.6rem;margin-bottom:.6rem}
.plz-rp-row>label,.plz-rp-vehicle{flex:1 1 160px;display:flex;flex-direction:column;font-size:.74rem;color:rgba(230,236,243,.6);gap:.25rem}
.plz-rp input,.plz-rp select{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:9px;padding:.5rem .6rem;color:#e6ecf3;font-size:.9rem;color-scheme:dark}
.plz-rp input:focus,.plz-rp select:focus{outline:none;border-color:#4cc6ff}
.plz-rp-vehbtns{display:flex;border:1px solid rgba(255,255,255,.14);border-radius:9px;overflow:hidden}
.plz-rp-mode{flex:1;padding:.5rem;background:rgba(255,255,255,.04);color:rgba(230,236,243,.6);border:none;cursor:pointer;font-size:.85rem}
.plz-rp-mode[aria-selected="true"]{background:#4cc6ff;color:#0a0f1c;font-weight:700}
.plz-rp-filters{display:flex;flex-wrap:wrap;gap:.45rem;align-items:center;margin:.2rem 0 .7rem}
.plz-rp-flabel{flex:1 0 100%;font-size:.74rem;color:rgba(230,236,243,.6)}
.plz-rp-svcl{font-size:.8rem;color:#e6ecf3;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:.28rem .6rem;cursor:pointer;display:inline-flex;gap:.25rem;align-items:center}
.plz-rp-tier,.plz-rp-buffer{font-size:.82rem}
.plz-rp-go{width:100%;padding:.7rem;border:none;border-radius:999px;background:linear-gradient(135deg,#4cc6ff,#7dd87a);color:#06121f;font-weight:800;font-size:.98rem;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.4rem}
.plz-rp-go:hover{opacity:.92}
.plz-rp-status{text-align:center;font-size:.82rem;color:rgba(230,236,243,.6);min-height:1.1em;margin-top:.5rem}
.plz-rp-result{margin-top:1rem;display:flex;flex-direction:column;gap:.9rem}
.plz-rp-summary{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem 1.1rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:.7rem .9rem}
.plz-rp-stat b{font-size:1.35rem;color:#e6ecf3}.plz-rp-stat{font-size:.78rem;color:rgba(230,236,243,.6)}
.plz-rp-mapsall{margin-left:auto;background:linear-gradient(135deg,#4cc6ff,#7dd87a);color:#06121f;font-weight:700;font-size:.82rem;padding:.4rem .8rem;border-radius:999px;text-decoration:none}
.plz-rp-adv{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:.7rem .9rem}
.plz-rp-adv h3{font-size:.92rem;margin:0 0 .5rem;color:#e6ecf3}
.plz-rp-advc{background:rgba(255,255,255,.05);border-radius:9px;padding:.45rem .6rem;margin-bottom:.4rem}
.plz-rp-advc summary{cursor:pointer;font-weight:600;color:#e6ecf3;font-size:.86rem}
.plz-rp-advc summary span{color:rgba(230,236,243,.45);font-size:.76rem}
.plz-rp-advb{font-size:.82rem;color:rgba(230,236,243,.78);margin-top:.4rem;display:flex;flex-direction:column;gap:.2rem}
.plz-rp-muted{color:rgba(230,236,243,.45)}.plz-rp-advnote{font-size:.74rem;margin:.4rem 0 0}
.plz-rp-deck{display:flex;gap:.7rem;overflow-x:auto;scroll-snap-type:x mandatory;padding:.2rem .1rem .6rem;scrollbar-width:thin}
.plz-rp-card{flex:0 0 min(86%,330px);scroll-snap-align:center}
.plz-rp-cardfb{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:.8rem}
.plz-rp-cardfb h4{margin:.3rem 0;color:#e6ecf3;font-size:.95rem}.plz-rp-cardfb a{color:#4cc6ff;text-decoration:none;font-size:.84rem}
.plz-rp-badge{font-size:.72rem;font-weight:700;color:#4cc6ff;letter-spacing:.05em}
.plz-rp-keep{display:flex;align-items:center;gap:.35rem;font-size:.8rem;color:rgba(230,236,243,.65);margin-top:.5rem;cursor:pointer}
.plz-rp-swipe{text-align:center;font-size:.74rem;color:rgba(230,236,243,.4);margin:.1rem 0}
.plz-rp-regen{width:100%;padding:.6rem;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#e6ecf3;font-weight:600;cursor:pointer}
.plz-rp-regen:hover{background:rgba(255,255,255,.12)}
.plz-rp-credit{font-size:.7rem;color:rgba(230,236,243,.38);margin:.7rem 0 0;text-align:center}
@media(max-width:560px){.plz-rp-card{flex:0 0 calc(100% - .6rem)}}
</style>`;
  return `${css}<section class="plz-rp" id="plz-route-planner" data-lng="${lng}" data-lat="${lat}" data-dest="${escapeHtml(name)}" data-lang="${lang}" data-copy="${copyJson}">
  <div class="plz-rp-head"><h2>${escapeHtml(T.h)}<span class="plz-rp-to">${escapeHtml(T.to)}: ${escapeHtml(name)}</span></h2><p>${escapeHtml(T.sub)}</p></div>
  <div class="plz-rp-row">
    <label>${escapeHtml(T.from)}<input class="plz-rp-origin" type="text" placeholder="${escapeHtml(T.fromPh)}"></label>
    <label>${escapeHtml(T.via)}<input class="plz-rp-via" type="text" placeholder="${escapeHtml(T.viaPh)}"></label>
  </div>
  <div class="plz-rp-row">
    <label>${escapeHtml(T.nights)}<select class="plz-rp-stops">${stopsOpts}</select></label>
    <div class="plz-rp-vehicle">${escapeHtml(T.vehicle)}<div class="plz-rp-vehbtns"><button type="button" class="plz-rp-mode" data-mode="car" aria-selected="true">${escapeHtml(T.car)}</button><button type="button" class="plz-rp-mode" data-mode="camper" aria-selected="false">${escapeHtml(T.camper)}</button></div></div>
  </div>
  <div class="plz-rp-filters"><span class="plz-rp-flabel">${escapeHtml(T.filter)}</span>${svc}
    <select class="plz-rp-tier"><option value="AB">${escapeHtml(T.tierAB)}</option><option value="A">${escapeHtml(T.tierA)}</option><option value="B">${escapeHtml(T.tierB)}</option><option value="ABC">${escapeHtml(T.tierABC)}</option></select>
    <select class="plz-rp-buffer"><option value="10">${escapeHtml(T.b10)}</option><option value="20" selected>${escapeHtml(T.b20)}</option><option value="30">${escapeHtml(T.b30)}</option><option value="50">${escapeHtml(T.b50)}</option></select>
  </div>
  <button type="button" class="plz-rp-go">${escapeHtml(T.plan)}</button>
  <div class="plz-rp-status"></div>
  <div class="plz-rp-result" style="display:none"></div>
  <p class="plz-rp-credit">© OpenStreetMap contributors · OpenRouteService</p>
</section>
<script defer src="/js/stop-card.js"></script>
<script defer src="/js/route-planner.js"></script>`;
}

function renderCityItinerary(poi: POI, lang: Lang): string {
  const tier = (poi as { tier?: number }).tier ?? 2;
  const data = loadItinerary(poi.id, tier);
  if (!data || !data.modes) return "";
  const C = ITIN_COPY[lang] || ITIN_COPY.en;
  const modeKeys = ["walk", "bike", "car", "transit"] as const;
  const modeLabels: Record<string, string> = { walk: C.modeWalk, bike: C.modeBike, car: C.modeCar, transit: C.modeTransit };
  const unitLabels: Record<string, string> = { walk: C.unitWalk, bike: C.unitBike, car: C.unitCar, transit: C.unitTransit };

  // Normalize [lat, lon] from coords — auto-detect [lon, lat] vs [lat, lon] heuristically.
  // Europe: lat 30-72, lon -25..45 → if coords[0] < coords[1] and coords[0] < 30, swap.
  // Plizio standard is [lon, lat]; Lyon early JSON was [lat, lon]; auto-detect handles both.
  function toLatLon(c: any): [number, number] {
    if (!Array.isArray(c) || c.length !== 2) return [0, 0];
    let [a, b] = c as [number, number];
    // If first value looks like lon (|a| < 30 or smaller than b), assume [lon, lat]
    if (Math.abs(a) < 30 && Math.abs(b) > 25) return [b, a];
    // Else assume [lat, lon]
    return [a, b];
  }

  function pickStr(v: any): string {
    if (typeof v === "string") return v;
    if (v && typeof v === "object") {
      return v[lang] || v.en || v.de || v.hu || v.ro || Object.values(v).find((x) => typeof x === "string") as string || "";
    }
    return "";
  }
  // Itinerary stop image: photos were fetched per stop (name + city_id coords)
  // into sight-image-map.json. The key was built from the stop name in some
  // language (often EN), so try every name variant to find the matching image.
  function resolveImg(rawName: any): string | undefined {
    const variants = typeof rawName === "string"
      ? [rawName]
      : (rawName && typeof rawName === "object" ? Object.values(rawName).filter((v) => typeof v === "string") : []);
    for (const n of variants) { const u = lookupSightImage(n as string, poi.id); if (u) return u; }
    return undefined;
  }
  // Distinguish itinerary from the sights gallery: reserve every image already
  // shown as a sight card, so itinerary stops don't repeat them (route stays
  // text-focused). Also dedup images within the itinerary itself.
  const sightImgSet = new Set<string>();
  {
    const sObj: any = (poi as any).sights;
    if (sObj && typeof sObj === "object") {
      for (const L of ["de", "hu", "ro", "en"]) {
        for (const it of (sObj[L] || [])) {
          const u = (it && it.image) || resolveImg(it && it.name);
          if (u) sightImgSet.add(u);
        }
      }
    }
  }
  const usedItinImgs = new Set<string>();
  function stopImg(rawName: any): string | undefined {
    const u = resolveImg(rawName);
    if (!u || sightImgSet.has(u) || usedItinImgs.has(u)) return undefined;
    usedItinImgs.add(u);
    return u;
  }
  function renderStopCard(s: any, i: number, prevCoords: [number, number] | null, mode: string): string {
    const name = pickStr(s.name);
    const tip = pickStr((s.tip_5lang || {})[lang] || s.tip_5lang);
    const tm = TRAVEL_MODE[mode] || "driving";
    const [lat, lon] = toLatLon(s.coords);
    const gmaps = prevCoords
      ? `https://www.google.com/maps/dir/?api=1&origin=${prevCoords[0]},${prevCoords[1]}&destination=${lat},${lon}&travelmode=${tm}`
      : `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}&travelmode=${tm}`;
    const navLabel = i === 0 ? C.navTo : C.navHere;
    const links = s.links || {};
    const wiki = (links.wikipedia || {})[lang] || (links.wikipedia || {}).en;
    const icon = CAT_ICON[s.category] || "📍";
    // Visible (3 fő link): GMaps Directions [nofollow], Wikipedia [dofollow], Street View [nofollow]
    const visibleBtns: string[] = [`<a class="plz-itin-nav" href="${gmaps}" target="_blank" rel="nofollow noopener">🧭 ${navLabel}</a>`];
    if (wiki) visibleBtns.push(`<a class="plz-itin-link" href="${wiki}" target="_blank" rel="noopener" title="Wikipedia">📚</a>`);
    if (links.street_view) visibleBtns.push(`<a class="plz-itin-link" href="${links.street_view}" target="_blank" rel="nofollow noopener" title="Street View">👁️</a>`);
    else if (typeof lat === "number" && typeof lon === "number" && SV_OK[svKey(lat, lon)]) visibleBtns.push(`<a class="plz-itin-link plz-itin-sv" href="${svHref(lat, lon)}" target="_blank" rel="nofollow noopener" title="Street View" aria-label="Street View">${SV_PEGMAN_SVG}</a>`);
    // Hidden behind <details>: Place [nofollow], OSM [dofollow], Tickets [sponsored], TripAdvisor [sponsored]
    const moreBtns: string[] = [];
    if (links.gmaps_place) moreBtns.push(`<a class="plz-itin-link" href="${links.gmaps_place}" target="_blank" rel="nofollow noopener" title="GMaps Place">📍</a>`);
    if (links.osm) moreBtns.push(`<a class="plz-itin-link" href="${links.osm}" target="_blank" rel="noopener" title="OpenStreetMap">🗺️</a>`);
    if (links.getyourguide) moreBtns.push(`<a class="plz-itin-link" href="${links.getyourguide}" target="_blank" rel="sponsored nofollow noopener" title="Tickets">🎟️</a>`);
    if (links.tripadvisor) moreBtns.push(`<a class="plz-itin-link" href="${links.tripadvisor}" target="_blank" rel="sponsored nofollow noopener" title="TripAdvisor">⭐</a>`);
    const moreHtml = moreBtns.length ? `<details class="plz-itin-more"><summary>🔗</summary>${moreBtns.join("")}</details>` : "";
    const stopKey = `${poi.id}::${mode}::${i}::${name}`;
    const checkBtn = `<button class="plz-itin-check" type="button" data-stop="${escapeHtml(stopKey)}" aria-label="mark visited" title="✓"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></button>`;
    // Itinerary-kép KIVÉVE: a legtöbb nem passzol; a Street View link (👁️) ott marad
    // a visibleBtns-ben, ahol van koordináta/pano.
    const imgHtml = "";
    return `<div class="plz-itin-card" data-type="sight" data-stop-card="${escapeHtml(stopKey)}">${checkBtn}<div class="plz-itin-cat">${icon}</div><div class="plz-itin-time">${escapeHtml(s.arrive_at)} · ${s.stay_min}'</div><h3>${escapeHtml(name)}</h3>${imgHtml}<div class="plz-itin-tip">${escapeHtml(tip)}</div><div class="plz-itin-links">${visibleBtns.join("")}${moreHtml}</div></div>`;
  }

  function renderExtras(picks: any, kind: string): string {
    const arr = (picks || {})[lang] || [];
    if (!arr.length) return "";
    return arr.map((it: any) => {
      const emoji = it.emoji || ({ gastro: "🍽️", shopping: "🛍️", quiet: "🧘" } as any)[kind] || "•";
      return `<div class="plz-itin-card" data-type="${kind}"><div class="plz-itin-cat">${emoji}</div><h3>${escapeHtml(pickStr(it.name))}</h3><div class="plz-itin-tip">${escapeHtml(pickStr(it.tip))}</div></div>`;
    }).join("");
  }

  // Weather variants helper: pick variant content + fallback to sunny if missing.
  // Stop tips: prefer name-match (lang-agnostic), then INDEX-match as fallback
  // (Flash sometimes returns rainy/winter stops in English while top-level stops
  // are localized → name-match misses; index aligns 1:1 with sunny stops).
  function getVariantContent(md: any, wkey: string) {
    const variants = md.variants;
    function tipsLookup(variantStops: any[]) {
      // s.name may be multilang object {de,hu,ro,en} — pick first string for stable key
      function nameKey(n: any): string {
        if (typeof n === "string") return n;
        if (n && typeof n === "object") return n.de || n.en || n.hu || n.ro || "";
        return "";
      }
      const byName: Record<string, any> = {};
      for (const s of variantStops || []) {
        const k = nameKey(s.name);
        if (k && !(k in byName)) byName[k] = s.tip_5lang;
      }
      const byIdx = (variantStops || []).map((s: any) => s.tip_5lang);
      return { byName, byIdx };
    }
    if (variants && variants[wkey]) {
      const v = variants[wkey];
      const sunny = variants.sunny || {};
      return {
        narrative_4lang: v.narrative_4lang || sunny.narrative_4lang,
        stop_tips_lookup: tipsLookup(v.stops || []),
        gastro_picks: v.gastro_picks || sunny.gastro_picks,
        quiet_picks: v.quiet_picks || sunny.quiet_picks,
        shopping_picks: v.shopping_picks || sunny.shopping_picks,
        tips: v.tips || sunny.tips,
      };
    }
    return {
      narrative_4lang: md.narrative_4lang,
      stop_tips_lookup: tipsLookup(md.stops || []),
      gastro_picks: md.gastro_picks,
      quiet_picks: md.quiet_picks,
      shopping_picks: md.shopping_picks,
      tips: md.tips,
    };
  }

  const weatherKeys = ["sunny", "rainy", "winter"] as const;
  const weatherLabels: Record<string, string> = { sunny: C.wSunny, rainy: C.wRainy, winter: C.wWinter };

  // Build mode×weather blocks (12 cells, only one active at a time via data-mw="mode-weather")
  const modeBlocks: string[] = [];
  for (const m of modeKeys) {
    const md = data.modes[m]; if (!md) continue;
    const stops = md.stops || [];
    for (const w of weatherKeys) {
      const v = getVariantContent(md, w);
      const nar = (v.narrative_4lang || {})[lang] || "";
      let prev: [number, number] | null = null;
      const stopCards = stops.map((s: any, i: number) => {
        const lk = v.stop_tips_lookup;
        // s.name may be multilang object — derive a string key
        const nameKey = typeof s.name === "string" ? s.name : (s.name && (s.name.de || s.name.en || s.name.hu || s.name.ro)) || "";
        const variantTip = (nameKey && lk.byName[nameKey]) || lk.byIdx[i];
        const stopWithTip = { ...s, tip_5lang: variantTip || s.tip_5lang };
        const hopHtml = i > 0 && s.hop_from_prev_min ? `<div class="plz-itin-hop"><strong>${modeLabels[m].split(" ")[0]} ${s.hop_from_prev_min}'</strong>${s.hop_from_prev_km} km</div>` : "";
        const card = renderStopCard(stopWithTip, i, prev, m);
        prev = toLatLon(s.coords);
        return hopHtml + card;
      }).join("");
      const gastro = renderExtras(v.gastro_picks, "gastro");
      const quiet = renderExtras(v.quiet_picks, "quiet");
      const shopping = renderExtras(v.shopping_picks, "shopping");
      const extras = [gastro, quiet, shopping].filter(Boolean).join("");
      const tipsArr = (v.tips || {})[lang] || [];
      const tipsHtml = tipsArr.length ? `<div class="plz-itin-tips"><h3>${C.tipsHeading}</h3><ul>${tipsArr.map((t: string) => `<li>${escapeHtml(t)}</li>`).join("")}</ul></div>` : "";
      const extrasBlock = extras ? `<details class="plz-itin-collapse"><summary><span class="plz-itin-collapse-label">${C.extrasLabel || "⭐"}</span><span class="plz-itin-collapse-arrow">▼</span></summary><div class="plz-itin-cards plz-itin-extras">${extras}</div></details>` : "";
      // Swipe-dots indicator (count = stops count)
      const dotCount = (md.stops || []).length;
      const dotsHtml = dotCount > 1 ? `<div class="plz-itin-dots" aria-hidden="true">${Array.from({length: dotCount}, (_, i) => `<span class="plz-itin-dot${i===0?" active":""}"></span>`).join("")}</div>` : "";
      const swipeHint = `<div class="plz-itin-swipe-hint">${escapeHtml(C.swipeHint || "← swipe →")}</div>`;
      const isActive = m === "walk" && w === "sunny";
      const progressBadge = `<span class="plz-itin-progress" data-mw-prog="${m}-${w}"><span class="plz-itin-progress-bar"><span class="plz-itin-progress-fill" data-fill></span></span><span data-prog-text>0/${md.stop_count}</span></span>`;
      const costEstimate = renderCostEstimate(stops, m, md.total_km || 0, lang);
      const icsBtn = `<button type="button" class="plz-itin-ics" data-ics="${m}-${w}" aria-label="Export calendar"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/></svg>.ics</button>`;
      modeBlocks.push(`<div data-mw="${m}-${w}" class="${isActive ? "active" : ""}"><div class="plz-itin-summary"><span><strong>${md.start}→${md.end_estimate}</strong></span><span><strong>${md.total_km} km</strong> ${unitLabels[m]}</span><span><strong>${md.stop_count}</strong> ${C.places}</span>${progressBadge}${icsBtn}</div>${costEstimate}<p class="plz-itin-narrative">${escapeHtml(nar)}</p>${swipeHint}<div class="plz-itin-cards">${stopCards}</div>${dotsHtml}${extrasBlock}${tipsHtml}</div>`);
    }
  }
  const modeBlocksHtml = modeBlocks.join("");

  const weatherButtons = weatherKeys.map((w, i) => `<button data-weather="${w}" aria-selected="${i === 0}">${weatherLabels[w]}</button>`).join("");
  const modeButtons = modeKeys.map((m, i) => `<button data-mode="${m}" aria-selected="${i === 0}">${modeLabels[m]}</button>`).join("");

  // Resources block
  const er = data.external_resources || {};
  // rel-policy per resource type:
  //   "follow"    = topic-relevant, valuable (Wikipedia/OSM/tourism office/city card/events)
  //   "nofollow"  = utility, not commercial-juice (transit menetrend, parking-map, webcam)
  //   "sponsored" = commercial affiliate (Booking/Skyscanner/GYG/TheFork/Tiqets)
  type RelKind = "follow" | "nofollow" | "sponsored";
  const resRows: Array<[string, string, string, RelKind]> = [
    ["transit_official", "🚇", "Transit", "nofollow"],
    ["transit_app", "🗺️", "Citymapper", "nofollow"],
    ["bike_share", "🚲", "Bike share", "nofollow"],
    ["parking_real_time", "🅿️", "Parking", "nofollow"],
    ["parking_map", "🅿️", "Parkopedia", "nofollow"],
    ["city_card", "🎫", "City Card", "follow"],
    ["museum_tickets", "🎟️", "Tickets", "sponsored"],
    ["restaurants_booking", "🍽️", "TheFork", "sponsored"],
    ["tourism_office", "ℹ️", "Tourism office", "follow"],
    ["events", "🎉", "Events", "follow"],
    ["webcam", "📹", "Webcam", "nofollow"],
    ["flights", "✈️", "Flights", "sponsored"],
  ];
  const relAttr = (k: RelKind) =>
    k === "follow" ? "noopener"
    : k === "sponsored" ? "sponsored nofollow noopener"
    : "nofollow noopener";
  // Pick first valid URL from value (string OR object whose values are URLs).
  function firstUrl(v: any): string | null {
    if (typeof v === "string" && /^https?:\/\//.test(v) && v.length >= 10) return v;
    if (v && typeof v === "object") {
      for (const x of Object.values(v)) {
        if (typeof x === "string" && /^https?:\/\//.test(x) && x.length >= 10) return x;
      }
    }
    return null;
  }
  const resCells = resRows.map(([k, emoji, label, rk]) => {
    const u = firstUrl(er[k]);
    if (!u) return "";
    return `<a class="plz-itin-res-cell" href="${escapeHtml(u)}" target="_blank" rel="${relAttr(rk)}"><span class="plz-itin-res-icon">${emoji}</span><span>${escapeHtml(label)}</span></a>`;
  }).filter(Boolean).join("");
  const resGrid = resCells ? `<div class="plz-itin-res-grid">${resCells}</div>` : "";
  const best = (er.best_time_to_visit || {})[lang] || "";
  const warn = (er.neighborhood_warnings || {})[lang] || "";
  // language_tips must be a real sentence (not just a 1-word language name like "Horvát").
  const rawLangT = (er.language_tips || {})[lang] || "";
  const langT = rawLangT.length >= 25 ? rawLangT : "";
  const infoBlocks: string[] = [];
  if (best) infoBlocks.push(`<div class="plz-itin-info"><h3>${C.bestTime}</h3><p>${escapeHtml(best)}</p></div>`);
  if (warn) infoBlocks.push(`<div class="plz-itin-info plz-itin-warn"><h3>${C.warnings}</h3><p>${escapeHtml(warn)}</p></div>`);
  if (langT) infoBlocks.push(`<div class="plz-itin-info"><h3>${C.langTips}</h3><p>${escapeHtml(langT)}</p></div>`);
  const resourcesHtml = (resGrid || infoBlocks.length) ? `<details class="plz-itin-collapse plz-itin-resources-collapse"><summary><span class="plz-itin-collapse-label">${C.toolsLabel || C.resTitle}</span><span class="plz-itin-collapse-arrow">▼</span></summary><div class="plz-itin-resources-body">${resGrid}<div class="plz-itin-info-grid">${infoBlocks.join("")}</div></div></details>` : "";

  const logoSvg = `<svg class="plz-go-logo" viewBox="0 0 220 48" xmlns="http://www.w3.org/2000/svg" aria-label="PlizioGo"><defs><linearGradient id="plzgoGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4cc6ff"/><stop offset="50%" stop-color="#7dd87a"/><stop offset="100%" stop-color="#ffae5c"/></linearGradient></defs><text x="0" y="36" font-family="ui-sans-serif,system-ui,'Segoe UI',Roboto,Inter" font-weight="800" font-size="36" fill="#e6ecf3" letter-spacing="-1">Plizio</text><text x="118" y="36" font-family="ui-sans-serif,system-ui,'Segoe UI',Roboto,Inter" font-weight="900" font-size="36" fill="url(#plzgoGrad)" letter-spacing="-1.5">Go</text><circle cx="200" cy="14" r="5" fill="#4cc6ff"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle></svg>`;
  const goBtn = `<button type="button" class="plz-itin-go" id="plz-itin-go" aria-expanded="true"><span class="plz-itin-go-label">${escapeHtml(C.goLabel || "Mehet")}</span><span class="plz-itin-go-arrow">▼</span></button>`;

  // PlizioGo "explore nearby cities": link unfamiliar nearby towns to our own POI
  // pages so the user discovers them from within our system. City-like POIs only.
  const _nc = getNearbyCities(poi, 6, 90, 4);
  const _ncLabel = ({ de: "Entdecke Städte in der Nähe", hu: "Fedezd fel a közeli városokat", ro: "Descoperă orașe din apropiere", en: "Discover nearby cities", fr: "Découvrez les villes proches", tr: "Yakındaki şehirleri keşfet", hr: "Otkrijte gradove u blizini" } as Record<string, string>)[lang] || "Discover nearby cities";
  const nearbyCitiesHtml = _nc.length >= 3
    ? `<section style="margin-top:14px;padding:14px;background:linear-gradient(135deg,#0e1633,#0a0f24);border:1px solid #2a3a66;border-radius:14px"><h3 style="margin:0 0 10px;font-size:15px;color:#cfe3ff">🧭 ${escapeHtml(_ncLabel)}</h3><div style="display:flex;gap:10px;overflow-x:auto;padding-bottom:4px">`
      + _nc.map(({ p, km }) => {
        const nm = escapeHtml((getLocalized(p.name, lang) as string) || p.id);
        const href = poiPathSafe(lang, p);
        const img = (p as { image?: string }).image;
        const thumb = img
          ? `<img src="${escapeHtml(img)}" alt="${nm}" loading="lazy" width="56" height="56" style="width:56px;height:56px;border-radius:10px;object-fit:cover;flex-shrink:0"/>`
          : `<span style="width:56px;height:56px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#1a2238;font-size:24px;flex-shrink:0">🏙️</span>`;
        return `<a href="${href}" style="display:flex;flex-direction:column;align-items:center;gap:5px;min-width:84px;text-decoration:none;color:#e6ecf3"><span style="display:flex;width:56px;height:56px">${thumb}</span><span style="font-size:12px;font-weight:600;text-align:center;line-height:1.2">${nm}</span><span style="font-size:11px;color:#8fa3c8">${Math.round(km)} km</span></a>`;
      }).join("")
      + `</div></section>`
    : "";

  // ---- SEO: TouristTrip JSON-LD for the default mode (walk + sunny) ----
  // Google "Things to do" rich result eligibility. The itinerary body is now
  // also shown by default (no `hidden` attr) so the full content is indexed
  // with full weight; the button just scrolls into view.
  const defaultMd = data.modes.walk;
  let tripLd = "";
  if (defaultMd && Array.isArray(defaultMd.stops) && defaultMd.stops.length > 0) {
    const tripName = `${C.title} — ${getLocalized((poi as any).name, lang) ?? poi.id}`;
    const tripDesc = (() => {
      const v = getVariantContent(defaultMd, "sunny");
      const nar = (v.narrative_4lang || {})[lang] || "";
      return nar || C.intro || "";
    })();
    const itineraryItems = defaultMd.stops.map((s: any, i: number) => {
      const name = pickStr(s.name);
      const [lat, lon] = toLatLon(s.coords);
      return {
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": name,
          "geo": { "@type": "GeoCoordinates", "latitude": lat, "longitude": lon },
        },
      };
    });
    const tripObj: any = {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": tripName,
      "description": tripDesc,
      "touristType": ["Sightseer"],
      "subjectOf": { "@type": "Place", "name": getLocalized((poi as any).name, lang) ?? poi.id },
      "itinerary": {
        "@type": "ItemList",
        "numberOfItems": itineraryItems.length,
        "itemListElement": itineraryItems,
      },
    };
    if (defaultMd.start && defaultMd.end_estimate) {
      tripObj.estimatedDuration = `${defaultMd.start} - ${defaultMd.end_estimate}`;
    }
    if (defaultMd.total_km) {
      tripObj.distance = `${defaultMd.total_km} km`;
    }
    tripLd = `<script type="application/ld+json">${JSON.stringify(tripObj).replace(/</g, "\\u003c")}</script>`;
  }

  return `${tripLd}<section class="plz-itin" id="plz-itin"><div class="plz-itin-header">${logoSvg}<div class="plz-itin-sub"><div class="plz-itin-tagline">${escapeHtml(C.title)}</div><div class="plz-itin-intro">${escapeHtml(C.intro)}</div></div></div><div class="plz-itin-weathers" role="tablist">${weatherButtons}</div><div class="plz-itin-modes" role="tablist">${modeButtons}</div>${goBtn}<div class="plz-itin-body" id="plz-itin-body">${modeBlocksHtml}${resourcesHtml}</div></section>
<script>(function(){var r=document.getElementById('plz-itin');if(!r)return;var ws=r.querySelectorAll('[data-weather]'),bs=r.querySelectorAll('[data-mode]'),cs=r.querySelectorAll('[data-mw]'),go=document.getElementById('plz-itin-go'),body=document.getElementById('plz-itin-body');var curW='sunny',curM='walk';function apply(){ws.forEach(function(x){x.setAttribute('aria-selected',x.dataset.weather===curW?'true':'false')});bs.forEach(function(x){x.setAttribute('aria-selected',x.dataset.mode===curM?'true':'false')});cs.forEach(function(c){c.classList.toggle('active',c.dataset.mw===curM+'-'+curW)})}ws.forEach(function(w){w.addEventListener('click',function(){curW=w.dataset.weather;apply()})});bs.forEach(function(b){b.addEventListener('click',function(){curM=b.dataset.mode;apply()})});if(go){go.addEventListener('click',function(){body.scrollIntoView({behavior:'smooth',block:'start'})})}apply();
// Swipe-dots scroll-sync: per active mw-block, update dots based on current scroll position
function syncDots(track){var dots=track.parentElement.querySelectorAll('.plz-itin-dot');if(!dots.length)return;var w=track.clientWidth;var idx=Math.round(track.scrollLeft/(w*0.85));dots.forEach(function(d,i){d.classList.toggle('active',i===idx)})}
r.querySelectorAll('.plz-itin-cards').forEach(function(tr){tr.addEventListener('scroll',function(){syncDots(tr)},{passive:true})});
// P1: stop-progress checkboxes + counter per mode-block
var PKEY='plz_stop_progress';var pset={};try{pset=JSON.parse(localStorage.getItem(PKEY)||'{}');}catch(e){}
function updProg(mb){var prog=mb.querySelector('.plz-itin-progress');if(!prog)return;var cards=mb.querySelectorAll('.plz-itin-card[data-stop-card]');var total=cards.length;var done=0;cards.forEach(function(c){if(pset[c.dataset.stopCard])done++;});var pct=total?Math.round(done/total*100):0;var fill=prog.querySelector('[data-fill]');if(fill)fill.style.width=pct+'%';var txt=prog.querySelector('[data-prog-text]');if(txt)txt.textContent=done+'/'+total;}
r.querySelectorAll('.plz-itin-card[data-stop-card]').forEach(function(card){var key=card.dataset.stopCard;if(pset[key])card.classList.add('plz-itin-card-done');var btn=card.querySelector('.plz-itin-check');if(!btn)return;btn.addEventListener('click',function(e){e.stopPropagation();if(pset[key]){delete pset[key];card.classList.remove('plz-itin-card-done');}else{pset[key]=Date.now();card.classList.add('plz-itin-card-done');}try{localStorage.setItem(PKEY,JSON.stringify(pset));}catch(e){}var mb=card.closest('[data-mw]');if(mb)updProg(mb);});});
r.querySelectorAll('[data-mw]').forEach(updProg);
// P2: ICS calendar export per mode-block
function pad(n){return n<10?'0'+n:''+n;}
function buildICS(mb,city){var cards=mb.querySelectorAll('.plz-itin-card[data-stop-card]');var d=new Date();var y=d.getFullYear(),mo=pad(d.getMonth()+1),da=pad(d.getDate());var lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Plizio//PlizioGo//EN','CALSCALE:GREGORIAN'];cards.forEach(function(c,idx){var tt=(c.querySelector('.plz-itin-time')||{}).textContent||'';var name=(c.querySelector('h3')||{}).textContent||'';var m=tt.match(/(\\d+):(\\d+)\\s*·?\\s*(\\d+)/);if(!m)return;var sh=parseInt(m[1],10),sm=parseInt(m[2],10),dur=parseInt(m[3],10);var s=y+mo+da+'T'+pad(sh)+pad(sm)+'00';var eh=sh,em=sm+dur;while(em>=60){em-=60;eh++;}var e=y+mo+da+'T'+pad(eh)+pad(em)+'00';lines.push('BEGIN:VEVENT','UID:pliziogo-'+y+mo+da+'-'+idx+'-'+Math.random().toString(36).slice(2,8)+'@plizio.com','DTSTART:'+s,'DTEND:'+e,'SUMMARY:'+name.replace(/[\\r\\n,;]/g,' '),'LOCATION:'+city.replace(/[\\r\\n,;]/g,' '),'END:VEVENT');});lines.push('END:VCALENDAR');return lines.join('\\r\\n');}
r.querySelectorAll('.plz-itin-ics').forEach(function(b){b.addEventListener('click',function(){var mb=b.closest('[data-mw]');if(!mb)return;var city=document.querySelector('h1')?document.querySelector('h1').textContent:'PlizioGo';var ics=buildICS(mb,city);var blob=new Blob([ics],{type:'text/calendar;charset=utf-8'});var url=URL.createObjectURL(blob);var a=document.createElement('a');a.href=url;a.download=city.replace(/[^a-z0-9]+/gi,'-').toLowerCase()+'-pliziogo.ics';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url);},1000);});});
})();</script>`;
}

// Visit-info strip: sun/daylight/golden-hour/season computed CLIENT-SIDE from
// the POI coordinates (shared cached /js/visit-info.js). Universal, dynamic,
// unique per location, zero content cost — works on every POI type.
function renderVisitInfo(poi: POI, lang: Lang): string {
  if (!Array.isArray(poi.coords) || poi.coords.length < 2) return "";
  const lng = Number(poi.coords[0]), lat = Number(poi.coords[1]);
  if (!isFinite(lat) || !isFinite(lng)) return "";
  let tz = "";
  if (_tzLookup) { try { tz = _tzLookup(lat, lng) || ""; } catch { tz = ""; } }
  return `<section class="plz-visit" data-lat="${lat}" data-lng="${lng}" data-lang="${lang}"${tz ? ` data-tz="${tz}"` : ""}></section><script src="/js/visit-info.js" defer></script>`;
}

// Visit planner: interactive "build your visit" route from the real nearby-POI
// graph (list + walk times, no map). Skipped on PlizioGo POIs (they already have
// the full day itinerary) and where there are too few nearby visitable places.
// Logic + 7-lang labels live in the shared cached /js/visit-planner.js.
const PLANNER_VISITABLE = new Set(["cathedral", "church", "historical", "monument", "memorial", "landmark", "museum", "castle", "fortress", "palace", "tower", "ruins", "theatre", "square", "park", "garden", "river", "lake", "waterfall", "viewpoint", "mountain", "forest", "beach", "nature", "kid-landmark", "zoo", "aquarium", "market"]);
function renderVisitPlanner(poi: POI, lang: Lang, hasPlizioGo: boolean): string {
  if (hasPlizioGo) return "";
  if (!Array.isArray(poi.coords) || poi.coords.length < 2) return "";
  const near = getNearbyPois(poi, 20, 10).filter((e) => PLANNER_VISITABLE.has(e.p.type));
  if (near.length < 4) return "";
  const stops = near.map((e) => {
    const nm = (getLocalized(e.p.name, lang) as string) || e.p.id;
    const c = e.p.coords as number[];
    return { t: e.p.type, n: nm, d: Math.round(e.km * 10) / 10, x: [c[0], c[1]], u: poiPathSafe(lang, e.p) };
  });
  const data = { id: poi.id, lang, center: [poi.coords[0], poi.coords[1]], stops };
  const json = JSON.stringify(data).replace(/<\//g, "<\\/");
  return `<section class="plz-planner"><script type="application/json" class="plz-pl-data">${json}</script></section><script src="/js/visit-planner.js" defer></script>`;
}

// SERVER-rendered, per-POI UNIQUE route/getting-there TEXT block. The visit-planner above is
// JS-rendered (invisible to crawlers); THIS gives Google unique, keyword-rich, page-specific text
// built from the POI's own data (region + country + nearest notable places + distances) + internal
// links. NOT a Mad-Libs template: region/cities/distances differ per page -> genuinely unique.
const ROUTE_NOTABLE = new Set(["city", "town", "state-capital", "capital", "landmark", "historical", "monument", "castle", "cathedral", "museum", "mountain", "lake", "island", "beach", "fortress", "palace"]);
// Cell key must match the Python fetcher: f"{round(lat*2)/2:.1f}_{round(lon*2)/2:.1f}"
function climateCellKey(lat: number, lon: number): string {
  let cl = Math.round(lat * 2) / 2; if (cl === 0) cl = 0;
  let co = Math.round(lon * 2) / 2; if (co === 0) co = 0;
  return `${cl.toFixed(1)}_${co.toFixed(1)}`;
}
const CLIMATE_MON: Partial<Record<Lang, string[]>> = {
  de: ["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],
  hu: ["Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Sze","Okt","Nov","Dec"],
  ro: ["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Noi","Dec"],
  en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  fr: ["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Aoû","Sep","Oct","Nov","Déc"],
  tr: ["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],
  hr: ["Sij","Velj","Ožu","Tra","Svi","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"],
};
// Universal climate block: monthly mini-table + "best time to visit" derived from
// the grid-cell normals. Coordinate-driven, no notability needed.
function renderClimate(poi: POI, lang: Lang): string {
  if (!Array.isArray(poi.coords) || poi.coords.length < 2) return "";
  const c = CLIMATE[climateCellKey(poi.coords[1], poi.coords[0])];
  if (!c || !Array.isArray(c.tmean) || c.tmean.length !== 12) return "";
  const tmax = c.tmean, precip = c.precip || [];  // mean temp (T2M) — typical, not extreme
  // best months: pleasant mean temperature (~ideal 21°C) + low rainfall
  const scored = tmax.map((tx, i) => {
    if (tx == null) return { i, s: -1e9 };
    const pr = precip[i] ?? 0;
    return { i, s: -Math.abs(tx - 21) - pr / 18 };
  }).filter((o) => o.s > -1e8);
  if (scored.length < 6) return "";
  const best = scored.slice().sort((a, b) => b.s - a.s).slice(0, 3).map((o) => o.i).sort((a, b) => a - b);
  const mon = CLIMATE_MON[lang] || CLIMATE_MON.en!;
  const bestStr = (best.length === 3 && best[2] - best[0] === 2) ? `${mon[best[0]]}–${mon[best[2]]}` : best.map((i) => mon[i]).join(", ");
  const L: Record<string, { title: string; best: (m: string) => string; t: string; p: string }> = {
    de: { title: "Beste Reisezeit & Klima", best: (m) => `Am angenehmsten reist du im Zeitraum ${m}.`, t: "Ø °C", p: "Regen mm" },
    hu: { title: "Mikor érdemes menni – éghajlat", best: (m) => `A legkellemesebb időszak: ${m}.`, t: "Átlag °C", p: "Csap. mm" },
    ro: { title: "Cea mai bună perioadă & climă", best: (m) => `Cea mai plăcută perioadă este ${m}.`, t: "Medie °C", p: "Ploaie mm" },
    en: { title: "Best time to visit & climate", best: (m) => `The most pleasant time to visit is ${m}.`, t: "Avg °C", p: "Rain mm" },
    fr: { title: "Meilleure période & climat", best: (m) => `La période la plus agréable est ${m}.`, t: "Moy. °C", p: "Pluie mm" },
    tr: { title: "En iyi ziyaret zamanı & iklim", best: (m) => `En keyifli dönem: ${m}.`, t: "Ort. °C", p: "Yağmur mm" },
    hr: { title: "Najbolje vrijeme za posjet & klima", best: (m) => `Najugodnije je razdoblje ${m}.`, t: "Pros. °C", p: "Kiša mm" },
  };
  const t = L[lang] || L.en;
  const bset = new Set(best);
  const head = mon.map((m, i) => `<th${bset.has(i) ? ' class="b"' : ""}>${escapeHtml(m)}</th>`).join("");
  const trow = tmax.map((tx, i) => `<td${bset.has(i) ? ' class="b"' : ""}>${tx == null ? "–" : Math.round(tx)}</td>`).join("");
  const prow = tmax.map((_, i) => { const pr = precip[i]; return `<td${bset.has(i) ? ' class="b"' : ""}>${pr == null ? "–" : Math.round(pr)}</td>`; }).join("");
  return `<section class="plz-climate" id="sec-climate"><h2>${escapeHtml(t.title)}</h2><p class="plz-climate-best">${escapeHtml(t.best(bestStr))}</p><div class="plz-climate-wrap"><table class="plz-climate-tbl"><thead><tr><th></th>${head}</tr></thead><tbody><tr><td class="rl">${escapeHtml(t.t)}</td>${trow}</tr><tr><td class="rl">${escapeHtml(t.p)}</td>${prow}</tr></tbody></table></div></section>`;
}

function renderRouteInfo(poi: POI, lang: Lang, countryName: string, regionName: string): string {
  if (!Array.isArray(poi.coords) || poi.coords.length < 2) return "";
  const name = (getLocalized(poi.name, lang) as string) || poi.id;
  const near = getNearbyPois(poi, 14, 130).filter((e) => ROUTE_NOTABLE.has(e.p.type)).slice(0, 4);
  const loc = regionName ? `${regionName}, ${countryName}` : countryName;
  const L: Record<string, { title: (n: string) => string; lead: (n: string, l: string) => string; nearest: string; modes: (n: string) => string; mlead: string; car: string; camper: string; hike: string }> = {
    de: { title: (n) => `Anfahrt & Routenplanung – ${n}`, lead: (n, l) => `${n} liegt in ${l}. Plane deine Anreise und entdecke die Umgebung.`, nearest: "In der Nähe", modes: (n) => `Route nach ${n} planen – mit dem Auto, dem Wohnmobil oder als Wanderung.`, mlead: "Route starten", car: "Auto", camper: "Wohnmobil", hike: "Wanderung" },
    hu: { title: (n) => `Útvonaltervezés és megközelítés – ${n}`, lead: (n, l) => `${n} itt található: ${l}. Tervezd meg az utadat és fedezd fel a környéket.`, nearest: "Közeli helyek", modes: (n) => `Tervezz útvonalat ${n} felé – autóval, lakókocsival vagy gyalogos túraként.`, mlead: "Útvonal indítása", car: "Autó", camper: "Lakókocsi", hike: "Gyalogtúra" },
    ro: { title: (n) => `Cum ajungi & planificarea rutei – ${n}`, lead: (n, l) => `${n} se află în ${l}. Planifică-ți călătoria și explorează împrejurimile.`, nearest: "În apropiere", modes: (n) => `Planifică ruta spre ${n} – cu mașina, cu rulota sau pe jos.`, mlead: "Pornește ruta", car: "Mașină", camper: "Rulotă", hike: "Drumeție" },
    en: { title: (n) => `Getting there & route planning – ${n}`, lead: (n, l) => `${n} is located in ${l}. Plan your trip and explore the surroundings.`, nearest: "Nearby", modes: (n) => `Plan your route to ${n} – by car, by motorhome or as a hike.`, mlead: "Start route", car: "Car", camper: "Motorhome", hike: "Hike" },
    fr: { title: (n) => `Accès & itinéraire – ${n}`, lead: (n, l) => `${n} se situe en ${l}. Planifiez votre trajet et explorez les environs.`, nearest: "À proximité", modes: (n) => `Planifiez votre itinéraire vers ${n} – en voiture, en camping-car ou à pied.`, mlead: "Lancer l'itinéraire", car: "Voiture", camper: "Camping-car", hike: "Randonnée" },
    tr: { title: (n) => `Ulaşım & rota planlama – ${n}`, lead: (n, l) => `${n}, ${l} bölgesinde yer alır. Yolculuğunu planla ve çevreyi keşfet.`, nearest: "Yakında", modes: (n) => `${n} için rota planla – araba, karavan veya yürüyüş ile.`, mlead: "Rotayı başlat", car: "Araba", camper: "Karavan", hike: "Yürüyüş" },
    hr: { title: (n) => `Kako doći & planiranje rute – ${n}`, lead: (n, l) => `${n} se nalazi u ${l}. Isplaniraj put i istraži okolicu.`, nearest: "U blizini", modes: (n) => `Isplaniraj rutu do ${n} – automobilom, kamperom ili pješice.`, mlead: "Pokreni rutu", car: "Auto", camper: "Kamper", hike: "Planinarenje" },
  };
  const t = L[lang] || L.en;
  const nearHtml = near.length
    ? `<p class="plz-route-near"><b>${t.nearest}:</b> ${near.map((e) => `<a href="${poiPathSafe(lang, e.p)}">${escapeHtml((getLocalized(e.p.name, lang) as string) || e.p.id)}</a> (${Math.round(e.km)} km)`).join(", ")}</p>`
    : "";
  const rlat = poi.coords[1], rlon = poi.coords[0];
  const dir = (tm: string) => `https://www.google.com/maps/dir/?api=1&destination=${rlat},${rlon}&travelmode=${tm}`;
  const btns = `<div class="plz-route-btns" role="group" aria-label="${escapeHtml(t.mlead)}">`
    + `<a class="plz-route-btn" href="${dir("driving")}" target="_blank" rel="noopener nofollow">🚗 ${escapeHtml(t.car)}</a>`
    + `<a class="plz-route-btn" href="${dir("driving")}" target="_blank" rel="noopener nofollow">🚐 ${escapeHtml(t.camper)}</a>`
    + `<a class="plz-route-btn" href="${dir("walking")}" target="_blank" rel="noopener nofollow">🥾 ${escapeHtml(t.hike)}</a>`
    + `</div>`;
  return `<section class="plz-route" id="sec-route"><h2>${escapeHtml(t.title(name))}</h2><p class="plz-route-lead">${escapeHtml(t.lead(name, loc))}</p>${nearHtml}<p class="plz-route-modes">${escapeHtml(t.modes(name))}</p>${btns}</section>`;
}

// Stats-chip row: compact data summary under the title (mobile-first)
function renderStatsChips(poi: POI, lang: Lang, richness: ReturnType<typeof pageRichness>, sightsCount: number, nearbyCount: number): string {
  const yhCount = (YEARLY_HIGHLIGHTS[poi.id] || []).length;
  const newsPath = path.resolve(process.cwd(), "public", "data", "poi-news", `${poi.id}.json`);
  let newsCount = 0;
  try { if (fs.existsSync(newsPath)) newsCount = (JSON.parse(fs.readFileSync(newsPath, "utf-8")) as unknown[]).length; } catch {}
  const chips: string[] = [];
  if (richness.hasPlizioGo) chips.push(`<a class="plz-chip plz-chip-go" href="#sec-itin"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L4 7l8 5 8-5-8-5z"/><path d="M4 17l8 5 8-5M4 12l8 5 8-5"/></svg>PlizioGo</a>`);
  if (poi.coords) chips.push(`<a class="plz-chip" href="#sec-overview"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M2 12h4M22 12h-4M12 22v-4"/><circle cx="12" cy="12" r="4"/></svg><span data-temp>—°</span></a>`);
  if (yhCount > 0) chips.push(`<a class="plz-chip plz-chip-yh" href="#sec-overview"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>${yhCount}</a>`);
  if (sightsCount + nearbyCount > 0) chips.push(`<a class="plz-chip" href="#sec-sights"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21V12h6v9"/></svg>${sightsCount + nearbyCount}</a>`);
  if (newsCount > 0) chips.push(`<a class="plz-chip" href="#sec-overview"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>${newsCount}</a>`);
  if (!chips.length) return "";
  const TEMP_SCRIPT = poi.coords ? `<script>(function(){var n=document.querySelector('[data-temp]');if(!n)return;fetch('https://api.open-meteo.com/v1/forecast?latitude=${poi.coords[1]}&longitude=${poi.coords[0]}&current=temperature_2m').then(function(r){return r.json();}).then(function(j){if(j&&j.current){n.textContent=Math.round(j.current.temperature_2m)+'°';}}).catch(function(){});})();</script>` : "";
  return `<div class="plz-chips">${chips.join("")}</div>${TEMP_SCRIPT}`;
}

// Sticky pill-tab nav: jumps to id'd sections with scrollspy
function renderTabNav(lang: Lang, opts: { hasItin: boolean; hasSights: boolean; hasNews: boolean; hasInfo: boolean }): string {
  const L: Partial<Record<Lang, Record<string, string>>> = {
    de: { overview: "Überblick", itin: "Tagesplan", sights: "Sehenswertes", info: "Info" },
    hu: { overview: "Áttekintés", itin: "Útiterv", sights: "Látnivalók", info: "Infó" },
    ro: { overview: "Prezentare", itin: "Itinerar", sights: "Atracții", info: "Info" },
    en: { overview: "Overview", itin: "Itinerary", sights: "Sights", info: "Info" },
    fr: { overview: "Aperçu", itin: "Itinéraire", sights: "Sites", info: "Info" },
    tr: { overview: "Genel", itin: "Plan", sights: "Yerler", info: "Bilgi" },
    hr: { overview: "Pregled", itin: "Plan puta", sights: "Znamenitosti", info: "Info" },
  };
  const t = L[lang] || L.en!;
  const tabs: string[] = [`<a class="plz-tab" href="#sec-overview" data-tab="overview">${t.overview}</a>`];
  if (opts.hasItin) tabs.push(`<a class="plz-tab" href="#sec-itin" data-tab="itin">${t.itin}</a>`);
  if (opts.hasSights) tabs.push(`<a class="plz-tab" href="#sec-sights" data-tab="sights">${t.sights}</a>`);
  if (opts.hasInfo) tabs.push(`<a class="plz-tab" href="#sec-info" data-tab="info">${t.info}</a>`);
  if (tabs.length < 2) return "";
  return `<nav class="plz-tabnav" id="plz-tabnav">${tabs.join("")}</nav>
<script>(function(){var nav=document.getElementById('plz-tabnav');if(!nav)return;var tabs=nav.querySelectorAll('.plz-tab');var ids=Array.from(tabs).map(function(t){return t.getAttribute('href').slice(1);});function spy(){var y=window.scrollY+120;var active=ids[0];for(var i=0;i<ids.length;i++){var el=document.getElementById(ids[i]);if(el&&el.offsetTop<=y)active=ids[i];}tabs.forEach(function(t){t.classList.toggle('active',t.dataset.tab===active||t.getAttribute('href')==='#'+active);});}window.addEventListener('scroll',spy,{passive:true});spy();tabs.forEach(function(t){t.addEventListener('click',function(e){e.preventDefault();var id=t.getAttribute('href').slice(1);var el=document.getElementById(id);if(el){window.scrollTo({top:el.offsetTop-70,behavior:'smooth'});}});});})();</script>`;
}

// Bottom sticky FAB action bar (mobile-only)
function renderMobileFab(poi: POI, lang: Lang, name: string): string {
  if (!poi.coords) return "";
  const gmaps = `https://www.google.com/maps/search/?api=1&query=${poi.coords[1]},${poi.coords[0]}`;
  const L: Partial<Record<Lang, Record<string, string>>> = {
    de: { nav: "Navigieren", save: "Merken", share: "Teilen", saved: "Gemerkt", copy: "Link kopiert" },
    hu: { nav: "Navigál", save: "Ment", share: "Megoszt", saved: "Mentve", copy: "Link másolva" },
    ro: { nav: "Navighează", save: "Salvează", share: "Distribuie", saved: "Salvat", copy: "Link copiat" },
    en: { nav: "Navigate", save: "Save", share: "Share", saved: "Saved", copy: "Link copied" },
    fr: { nav: "Naviguer", save: "Enregistrer", share: "Partager", saved: "Enregistré", copy: "Lien copié" },
    tr: { nav: "Yönlendir", save: "Kaydet", share: "Paylaş", saved: "Kaydedildi", copy: "Bağlantı kopyalandı" },
    hr: { nav: "Navigiraj", save: "Spremi", share: "Podijeli", saved: "Spremljeno", copy: "Poveznica kopirana" },
  };
  const t = L[lang] || L.en!;
  return `<aside class="plz-fab" role="toolbar" aria-label="${escapeHtml(name)} actions">
  <a class="plz-fab-btn" href="${gmaps}" target="_blank" rel="noopener nofollow"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg><span>${escapeHtml(t.nav)}</span></a>
  <button class="plz-fab-btn" type="button" id="plz-fab-save" data-pid="${escapeHtml(poi.id)}" data-saved-label="${escapeHtml(t.saved)}" data-save-label="${escapeHtml(t.save)}"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg><span>${escapeHtml(t.save)}</span></button>
  <button class="plz-fab-btn" type="button" id="plz-fab-share" data-copy-label="${escapeHtml(t.copy)}"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/><line x1="15.4" y1="6.5" x2="8.6" y2="10.5"/></svg><span>${escapeHtml(t.share)}</span></button>
</aside>
<script>(function(){var s=document.getElementById('plz-fab-save');var sh=document.getElementById('plz-fab-share');if(s){var pid=s.dataset.pid;var KEY='plz_saved';var arr=[];try{arr=JSON.parse(localStorage.getItem(KEY)||'[]');}catch(e){}function upd(){var on=arr.indexOf(pid)>=0;s.classList.toggle('active',on);s.querySelector('span').textContent=on?s.dataset.savedLabel:s.dataset.saveLabel;}upd();s.addEventListener('click',function(){var i=arr.indexOf(pid);if(i>=0)arr.splice(i,1);else arr.push(pid);try{localStorage.setItem(KEY,JSON.stringify(arr));}catch(e){}upd();});}if(sh){sh.addEventListener('click',function(){var d={title:document.title,url:location.href};if(navigator.share){navigator.share(d).catch(function(){});}else if(navigator.clipboard){navigator.clipboard.writeText(location.href).then(function(){var l=sh.querySelector('span');var old=l.textContent;l.textContent=sh.dataset.copyLabel;setTimeout(function(){l.textContent=old;},1800);});}});}})();</script>`;
}

function renderHtml(poi: POI, lang: Lang): string | null {
  if (!poi.parent) return null;
  const name = getLocalized(poi.name, lang) ?? poi.id;
  const countryId = getCountryId(poi.parent);
  // Lokalizalt, helyesen irt orszagnev (nem nyers slug) — SEO title/h1/breadcrumb/alt
  const countryName = slugs.localizedCountryName(countryId, lang);
  // Belso link a "Top 50 Sehenswuerdigkeiten" hubra (reciprok: a hub linkel a POI-kra,
  // a POI vissza a hubra -> topikus-szulo link + a hub authority-jat erositi).
  const _hubSlug = sightsHubSlug(countryId, lang);
  const hubLinkHtml = _hubSlug
    ? `<a class="plz-cta plz-cta-hub" href="/${_hubSlug}/">${SIGHTS_HUB_LABEL[lang as HubLang] ?? SIGHTS_HUB_LABEL.en} →</a>`
    : "";
  const ccap = countryName;
  // SEO alt-text helper. Builds "Subject in POI (Country)" patterns.
  const buildAlt = (subject: string, ctx?: string) =>
    `${subject}${ctx ? " — " + ctx : ""} (${ccap})`;

  // Description: prefer advanced, fallback to short
  let descAdv = (poi as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced;
  const sidecarDescAdv = DESCADV_SIDECAR[poi.id];
  if (sidecarDescAdv) {
    const inlineLen = (descAdv?.[lang] || "").length;
    const sideLen = (sidecarDescAdv[lang] || "").length;
    if (sideLen > inlineLen) {
      descAdv = { ...(descAdv || {}), ...sidecarDescAdv };
    }
  }
  const descShort = poi.description as Record<string, string> | undefined;
  const descText = getLocalized(descAdv as Partial<Record<string, string>>, lang)
    || getLocalized(descShort as Partial<Record<string, string>>, lang)
    || "";

  // Facts: prefer advanced
  const factsAdv = (poi as { factsAdvanced?: Record<string, string[]> }).factsAdvanced;
  const factsShort = poi.facts as Record<string, string[]> | undefined;
  const factsArr = (getLocalized(factsAdv as Partial<Record<string, string[]>>, lang)
    || getLocalized(factsShort as Partial<Record<string, string[]>>, lang)
    || []) as string[];

  const url = `${SITE_URL}${buildPoiPath(lang, poi)}`;
  const title = buildPoiTitle(name, poi, lang);
  const metaDesc = smartMetaDesc(descText, `${name} — ${T(poi.type, lang)}`);
  const richness = pageRichness(poi, lang);

  const breadcrumbHome = `<a href="/${lang}/">${I("home", lang)}</a>`;
  const breadcrumbCountry = `<a href="${buildCountryPath(lang, countryId)}">${countryName}</a>`;
  // State-crumb CSAK ha valoban letezik state-index oldal (regions-ben van a parent).
  // Kulonben 404-re linkelne (pl. /hu/finnorszag/fi/). Szoveg = lokalizalt regio-nev.
  const stateRegion = slugs.getStateForPoi(poi);
  const breadcrumbState = (poi.parent === countryId || !stateRegion)
    ? "" // country-level POI vagy nincs state-index oldal: skip crumb
    : `<a href="${buildStatePath(lang, poi.parent)}">${slugs.localizedStateName(poi.parent, lang)}</a>`;

  // hreflang alternates
  const alternates = getPoiAlternates(poi);

  // Type tag (capitalize)
  const typeLabel = T(poi.type, lang);

  // Geographic facts
  const geoItems: string[] = [];
  if (poi.elevation) geoItems.push(`<div class="plz-meta-item"><div class="label">${I("elevation", lang)}</div><div class="value">${poi.elevation} m</div></div>`);
  if (poi.length) geoItems.push(`<div class="plz-meta-item"><div class="label">${I("length", lang)}</div><div class="value">${poi.length} km</div></div>`);
  if (poi.area) geoItems.push(`<div class="plz-meta-item"><div class="label">${I("area", lang)}</div><div class="value">${poi.area} km²</div></div>`);
  if (poi.coords && poi.coords.length >= 2) {
    geoItems.push(`<div class="plz-meta-item"><div class="label">${I("coordinates", lang)}</div><div class="value">${poi.coords[1].toFixed(5)}, ${poi.coords[0].toFixed(5)}</div></div>`);
  }

  // OSM link
  let osmLink = "";
  if (poi.coords && poi.coords.length >= 2) {
    const osmUrl = `https://www.openstreetmap.org/?mlat=${poi.coords[1]}&mlon=${poi.coords[0]}#map=12/${poi.coords[1]}/${poi.coords[0]}`;
    osmLink = `<a class="plz-cta plz-cta-secondary" href="${osmUrl}" target="_blank" rel="noopener noreferrer">${I("viewOSM", lang)} →</a>`;
  }

  // Related POIs grouped by type (max 24 total)
  // Parent-alapu related; ha keves (a POI parentje nem egyezik a szomszedaival —
  // data-inkonzisztens parent slug, pl. HU district POI-k: josa parent="debrecen"
  // de a szomszedok parentje "debrecen-district"/"hajdu-bihar"), kiegeszitjuk
  // koord-kozeli szomszedokkal, kulonben eltunik a teljes "Kapcsolodo/related" szekcio.
  let related = getRelatedPois(poi, 24);
  if (related.length < 6) {
    const have = new Set(related.map((rp) => rp.id)); have.add(poi.id);
    for (const e of getNearbyPois(poi, 24, 80)) {
      if (have.has(e.p.id)) continue;
      related.push(e.p); have.add(e.p.id);
      if (related.length >= 24) break;
    }
  }
  const TYPE_GROUPS: Record<string, string[]> = {
    city: ["city", "capital", "state-capital", "town", "village"],
    history: ["castle", "fort", "fortress", "fortification", "monastery", "history", "geschichte", "landmark", "icon"],
    nature: ["peak", "mountain-range", "lake", "river", "waterfall", "coast", "wildlife", "nature", "landscape", "geo"],
  };
  function groupOf(t: string | undefined): string {
    for (const [g, list] of Object.entries(TYPE_GROUPS)) if (t && list.includes(t)) return g;
    return "other";
  }
  function relatedDescSnippet(r: POI): string {
    const desc = (r as { description?: Record<string, string> }).description;
    const descAdv = (r as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced;
    const txt = (getLocalized(desc as Partial<Record<string, string>>, lang)
      || getLocalized(descAdv as Partial<Record<string, string>>, lang) || "") as string;
    if (!txt) return "";
    const first = txt.split(/(?<=[.!?])\s/)[0] || txt;
    return first.length > 140 ? first.slice(0, 137) + "…" : first;
  }
  function relatedCard(r: POI): string {
    const rname = escapeHtml(getLocalized(r.name, lang) ?? r.id);
    const rimg = (r as { image?: string }).image;
    const snippet = relatedDescSnippet(r);
    const imgHtml = rimg
      ? `<div class="plz-rcard-img"><img src="${escapeHtml(rimg)}" alt="${escapeHtml(buildAlt(rname, name))}" loading="lazy"/></div>`
      : `<div class="plz-rcard-img plz-rcard-ph">🗺️</div>`;
    return `<a class="plz-rcard" href="${poiPathSafe(lang, r)}">${imgHtml}<div class="plz-rcard-body"><div class="plz-rcard-title">${rname}</div>${snippet ? `<div class="plz-rcard-snip">${escapeHtml(snippet)}</div>` : ""}</div></a>`;
  }
  const grouped: Record<string, POI[]> = { city: [], history: [], nature: [], other: [] };
  for (const r of related) grouped[groupOf(r.type)].push(r);
  const GROUP_LABEL_KEYS: Record<string, string> = { city: "cities", history: "history", nature: "nature", other: "more" };
  const relatedItems = (["city", "history", "nature", "other"] as const)
    .filter((g) => grouped[g].length > 0)
    .map((g) => `<section><h2>${I(GROUP_LABEL_KEYS[g], lang)}</h2><div class="plz-related">${grouped[g].slice(0, 8).map(relatedCard).join("")}</div></section>`)
    .join("");

  const constellationHtml = renderConstellation(poi, lang);

  // Did-you-know — deterministic fact pick by POI id char-sum
  let didYouKnowHtml = "";
  {
    const advFacts = (poi as { factsAdvanced?: Record<string, string[]> }).factsAdvanced;
    const baseFacts = poi.facts as Record<string, string[]> | undefined;
    // Pick from user-lang only; fall back to DE ONLY if user-lang has nothing.
    let pool: string[] = [
      ...((advFacts?.[lang] as string[] | undefined) ?? []),
      ...((baseFacts?.[lang] as string[] | undefined) ?? []),
    ].filter((s) => typeof s === "string" && s.length > 20);
    if (pool.length === 0) {
      pool = [
        ...((advFacts?.de as string[] | undefined) ?? []),
        ...((baseFacts?.de as string[] | undefined) ?? []),
      ].filter((s) => typeof s === "string" && s.length > 20);
    }
    if (pool.length > 0) {
      const idx = Array.from(poi.id).reduce((a, c) => a + c.charCodeAt(0), 0) % pool.length;
      didYouKnowHtml = `<aside class="plz-dyk"><h3>${I("didYouKnow", lang)}</h3><p>${escapeHtml(pool[idx])}</p></aside>`;
    }
  }

  // Game CTA — subject/grade-aware links to astro game + test
  const SUBJECT_FOR_TYPE: Record<string, string> = {
    city: "geographie", town: "geographie", village: "geographie", capital: "geographie", "state-capital": "geographie", metropolis: "geographie",
    mountain: "geographie", river: "geographie", lake: "geographie", island: "geographie", forest: "geographie", peak: "geographie", coast: "geographie",
    historical: "geschichte", ruins: "geschichte", battlefield: "geschichte", ancient: "geschichte", medieval: "geschichte",
    castle: "geschichte", palace: "geschichte", fortress: "geschichte", monastery: "geschichte", abbey: "geschichte",
  };
  const gameSubject = SUBJECT_FOR_TYPE[(poi.type ?? "").toLowerCase()] ?? "geographie";
  const gameGrade = (poi as { grades?: number[] }).grades?.[0];
  const gameGradeN = typeof gameGrade === "number" && gameGrade >= 1 && gameGrade <= 8 ? gameGrade : 5;
  const gameCtaHtml = `<section class="plz-game-cta"><h2>${I("gameTitle", lang)}</h2><p>${I("gameIntro", lang)}</p><div class="plz-game-btns"><a class="plz-cta" rel="nofollow" href="/astro-${gameSubject}/?vlab=${encodeURIComponent(poi.id)}">${I("gamePlay", lang)}</a><a class="plz-cta plz-cta-secondary" rel="nofollow" href="/${gameSubject}test/?focus=${encodeURIComponent(poi.id)}">${I("gameTest", lang)}</a></div></section>`;

  // FAQ — emit HTML + collect items for JSON-LD FAQPage schema
  let faqHtml = "";
  const faqItems: Array<{ q: string; a: string }> = [];
  if (Array.isArray(poi.faq)) {
    const items = poi.faq
      .map((f: any) => {
        const q = getLocalized(f.question || f.q, lang);
        const a = getLocalized(f.answer || f.a, lang);
        if (!q || !a) return "";
        faqItems.push({ q, a });
        return `<details class="plz-faq-item"><summary><span class="plz-faq-q">${escapeHtml(q)}</span><svg class="plz-faq-chev" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></summary><div class="plz-faq-a">${escapeHtml(a)}</div></details>`;
      })
      .filter(Boolean)
      .join("");
    if (items) faqHtml = `<section class="plz-faq"><h2>FAQ</h2>${items}</section>`;
  }

  // Sights — per-city landmarks rendered as cards with thumbnail + text.
  // Schema.org TouristAttraction JSON-LD added for each so Google can pick
  // them up as discrete entities.
  type SightAttr = { author?: string; source?: string; license?: string; platform?: string };
  type SightItem = { name?: string; text?: string; image?: string; distance?: string; image_attribution?: SightAttr };
  const renderAttribution = (a?: SightAttr): string => {
    if (!a || !a.author) return "";
    // Compact license label: long "Google Places API" stretches mobile cards,
    // so collapse to just "/ Google" (or skip for Commons/Wikipedia).
    let licShort = "";
    if (a.license) {
      const l = a.license.toLowerCase();
      if (l.includes("google")) licShort = " / Google";
      else if (l.includes("wikimedia") || l.includes("commons")) licShort = " / Wiki";
      else if (l.length <= 16) licShort = " / " + escapeHtml(a.license);
      // else: long license string omitted to keep card width tight
    }
    const link = a.source
      ? `<a href="${escapeHtml(a.source)}" rel="nofollow noopener" target="_blank">${escapeHtml(a.author)}</a>`
      : escapeHtml(a.author);
    return `<span class="plz-sight-attr">📷 ${link}${licShort}</span>`;
  };
  // Sight category badge — localized label + emoji for the common categories.
  // Unknown/rare categories render no badge (avoids leaking raw slugs).
  const SIGHT_CAT: Record<string, { e: string; l: Partial<Record<Lang, string>> }> = {
    museum:       { e: "🏛", l: { de: "Museum", hu: "múzeum", ro: "muzeu", en: "museum", fr: "musée", tr: "müze", hr: "muzej" } },
    religious:    { e: "⛪", l: { de: "Sakralbau", hu: "templom", ro: "lăcaș de cult", en: "religious", fr: "édifice religieux", tr: "ibadethane", hr: "sakralno" } },
    historical:   { e: "🏺", l: { de: "Historisch", hu: "történelmi", ro: "istoric", en: "historical", fr: "historique", tr: "tarihî", hr: "povijesno" } },
    castle:       { e: "🏰", l: { de: "Burg/Schloss", hu: "vár/kastély", ro: "castel", en: "castle", fr: "château", tr: "kale", hr: "dvorac" } },
    fortress:     { e: "🛡️", l: { de: "Festung", hu: "erőd", ro: "fortăreață", en: "fortress", fr: "forteresse", tr: "hisar", hr: "utvrda" } },
    tower:        { e: "🗼", l: { de: "Turm", hu: "torony", ro: "turn", en: "tower", fr: "tour", tr: "kule", hr: "toranj" } },
    cultural:     { e: "🎭", l: { de: "Kultur", hu: "kultúra", ro: "cultură", en: "culture", fr: "culture", tr: "kültür", hr: "kultura" } },
    landmark:     { e: "📍", l: { de: "Sehenswert", hu: "látnivaló", ro: "obiectiv", en: "landmark", fr: "site", tr: "simge", hr: "znamenitost" } },
    natural:      { e: "🌿", l: { de: "Natur", hu: "natúra", ro: "natură", en: "nature", fr: "nature", tr: "doğa", hr: "priroda" } },
    park:         { e: "🌳", l: { de: "Park", hu: "park", ro: "parc", en: "park", fr: "parc", tr: "park", hr: "park" } },
    recreational: { e: "🎡", l: { de: "Freizeit", hu: "szabadidő", ro: "recreere", en: "recreation", fr: "loisirs", tr: "eğlence", hr: "rekreacija" } },
    family:       { e: "👨‍👩‍👧", l: { de: "Familie", hu: "családi", ro: "familie", en: "family", fr: "famille", tr: "aile", hr: "obitelj" } },
    civic:        { e: "🏙", l: { de: "Stadtbild", hu: "városkép", ro: "civic", en: "civic", fr: "civique", tr: "kent", hr: "gradsko" } },
    church:       { e: "⛪", l: { de: "Kirche", hu: "templom", ro: "biserică", en: "church", fr: "église", tr: "kilise", hr: "crkva" } },
    monastery:    { e: "⛪", l: { de: "Kloster", hu: "kolostor", ro: "mănăstire", en: "monastery", fr: "monastère", tr: "manastır", hr: "samostan" } },
    lake:         { e: "🌊", l: { de: "See", hu: "tó", ro: "lac", en: "lake", fr: "lac", tr: "göl", hr: "jezero" } },
    culinary:     { e: "🍽", l: { de: "Kulinarik", hu: "gasztro", ro: "culinar", en: "culinary", fr: "gastronomie", tr: "mutfak", hr: "gastro" } },
  };
  const sightCatBadge = (s: SightItem): string => {
    const c = (s as any).category;
    const m = typeof c === "string" ? SIGHT_CAT[c] : undefined;
    if (!m) return "";
    return `<span class="plz-sight-cat">${m.e} ${escapeHtml(m.l[lang] || m.l.en || c)}</span>`;
  };
  const renderSightCard = (s: SightItem, withDistance: boolean, nameVariants?: string[]): string => {
    if (!s?.name) return "";
    // Inject image from sight-image-map.json if the sight itself lacks one.
    // Try all language name variants so an EN-keyed image shows on de/hu/ro too.
    // Sight-képek KIVÉVE: a legtöbb nem passzol a konkrét látnivalóhoz; később
    // Street View kerül ide, ahol van. (A kép-attribúció is elmarad kép nélkül.)
    const img = "";
    const dist = withDistance && s.distance ? `<span class="plz-sight-dist">${escapeHtml(s.distance)}</span>` : "";
    const txt = s.text ? `<p>${escapeHtml(s.text)}</p>` : "";
    const attr = "";
    // Internal link: if this sight name matches a same-country POI, link it.
    const linkedPoiId = lookupSightPoiLink(poi.id, s.name);
    const linkedPoi = linkedPoiId ? allById.get(linkedPoiId) : undefined;
    const nameHtml = linkedPoi
      ? `<a href="${poiPathSafe(lang, linkedPoi)}" class="plz-sight-name-link">${escapeHtml(s.name)}</a>`
      : escapeHtml(s.name);
    // Street View pegman — only when the availability sweep confirmed imagery.
    // Sight coords convention: [lng, lat].
    let svBtn = "";
    let factsHtml = "";
    const sc = (s as any).coords;
    if (Array.isArray(sc) && sc.length === 2 && typeof sc[0] === "number" && typeof sc[1] === "number") {
      const [slng, slat] = sc;
      if (SV_OK[svKey(slat, slng)]) {
        const svUrl = svHref(slat, slng);
        svBtn = `<a class="plz-sight-sv" href="${svUrl}" target="_blank" rel="nofollow noopener" title="Street View" aria-label="Street View">${SV_PEGMAN_SVG}</a>`;
      } else {
        // Nincs SV: Maps-pin ikon. Nev + viewport-bias path-form (/@lat,lng,17z):
        // a Google a koord kornyeken keresi a nevet -> a tenyleges hely listing-
        // oldalara (kep/nyitvatartas) old fel. ß->ss: a Google a nemet helyeket
        // gyakran ss-sel listazza (Spaßinsel -> Spassinsel), kulonben nincs nev-
        // match es nem ismeri fel (user 2026-06-09).
        const nm = encodeURIComponent(s.name.replace(/ß/g, "ss").replace(/\s+/g, " ").trim());
        // KOORD-alapu query (NEM nev): a nev-keresest a Google a hires azonos-nevu
        // helyre vinne (pl. pagi "Sveti Jure" -> Biokovo-csucs Zagvozdnal). 2026-06-11.
        svBtn = `<a class="plz-sight-sv plz-sight-gm" href="https://www.google.com/maps/search/?api=1&query=${slat.toFixed(6)},${slng.toFixed(6)}" target="_blank" rel="nofollow noopener" title="Google Maps" aria-label="Google Maps">${GMAPS_PIN_SVG}</a>`;
      }
      // OSM hard-facts (LLM-free): hivatalos oldal / nyitvatartas / magassag / akadalymentes / belepo
      const fct = SIGHT_FACTS[svKey(slat, slng)];
      if (fct) {
        const PC = PRACTICAL_COPY[lang] || PRACTICAL_COPY.en;
        const parts: string[] = [];
        if (fct.website && /^https?:\/\//.test(fct.website)) {
          const dom = fct.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");
          parts.push(`<a class="plz-sf-web" itemprop="url" href="${escapeHtml(fct.website)}" target="_blank" rel="nofollow noopener">🌐 ${escapeHtml(dom)}</a>`);
        }
        if (fct.opening_hours) parts.push(`<span itemprop="openingHours" content="${escapeHtml(fct.opening_hours)}">🕒 ${escapeHtml(fct.opening_hours.slice(0, 60))}</span>`);
        if (typeof fct.ele === "number") parts.push(`<span>⛰ ${fct.ele} m</span>`);
        if (fct.wheelchair === "yes") parts.push(`<span title="${escapeHtml(PC.accessibility)}">♿</span>`);
        if (fct.fee === "no") parts.push(`<span>🆓</span>`); else if (fct.fee === "yes") parts.push(`<span title="${escapeHtml(PC.entranceFee)}">💶</span>`);
        if (parts.length) factsHtml = `<div class="plz-sight-facts">${parts.join("")}</div>`;
      }
    }
    return `<article class="plz-sight" itemscope itemtype="https://schema.org/TouristAttraction"><div class="plz-sight-body">${img}<div><h3 itemprop="name">${nameHtml}${svBtn}${sightCatBadge(s)}</h3>${dist}<div itemprop="description">${txt}</div>${factsHtml}${attr}</div></div></article>`;
  };
  const sightsObj = (poi as { sights?: Record<string, SightItem[]> }).sights
    || (sidecarSightsFor(poi) as Record<string, SightItem[]> | null);
  const sightsArr = (getLocalized(sightsObj as Partial<Record<string, SightItem[]>>, lang) || []) as SightItem[];
  // Only trust cross-lang index alignment when present lang arrays share length.
  const sAligned = !!sightsObj && ["en", "de", "hu", "ro"].every((l) => {
    const a = (sightsObj as any)[l]; return !Array.isArray(a) || a.length === sightsArr.length;
  });
  // Dedup the gallery by sight name (data sometimes repeats the same sight),
  // keeping the original index so cross-lang variant alignment stays correct.
  const _seenSight = new Set<string>();
  const sightsItems: { s: SightItem; i: number }[] = [];
  sightsArr.forEach((s, i) => {
    const k = slugifySight(typeof s.name === "string" ? s.name : "");
    if (k && _seenSight.has(k)) return;
    if (k) _seenSight.add(k);
    sightsItems.push({ s, i });
  });
  const sightsHtml = sightsItems.length > 0
    ? `<section class="plz-sights"><h2>${I("sightsInTown", lang)} ${name} (${sightsItems.length})</h2>${sightsItems.map(({ s, i }) => renderSightCard(s, false, sAligned ? sightNameVariantsAt(sightsObj, i, s.name as string) : undefined)).join("")}</section>`
    : "";
  const nearbyObj = (poi as { nearbySights?: Record<string, SightItem[]> }).nearbySights;
  const nearbyArr = (getLocalized(nearbyObj as Partial<Record<string, SightItem[]>>, lang) || []) as SightItem[];
  const nAligned = !!nearbyObj && ["en", "de", "hu", "ro"].every((l) => {
    const a = (nearbyObj as any)[l]; return !Array.isArray(a) || a.length === nearbyArr.length;
  });
  const nearbyHtml = nearbyArr.length > 0
    ? `<section class="plz-sights plz-sights-nearby"><h2>${I("nearbySights", lang)} (${nearbyArr.length})</h2>${nearbyArr.map((s, i) => renderSightCard(s, true, nAligned ? sightNameVariantsAt(nearbyObj, i, s.name as string) : undefined)).join("")}</section>`
    : "";

  // Weather widget HTML + JS (client-side fetch of Open-Meteo)
  const weatherCopy: Partial<Record<Lang, { now: string; forecast: string; loading: string }>> = {
    de: { now: "Aktuell", forecast: "5-Tage-Vorhersage", loading: "Wetter…" },
    hu: { now: "Most", forecast: "5 napos előrejelzés", loading: "Időjárás…" },
    ro: { now: "Acum", forecast: "Prognoză 5 zile", loading: "Vremea…" },
    en: { now: "Now", forecast: "5-day forecast", loading: "Weather…" },
    fr: { now: "Maintenant", forecast: "Prévisions sur 5 jours", loading: "Météo…" },
    tr: { now: "Şimdi", forecast: "5 günlük tahmin", loading: "Hava durumu…" },
    hr: { now: "Sada", forecast: "Prognoza za 5 dana", loading: "Vrijeme…" },
  };
  const wc = weatherCopy[lang] || weatherCopy.en;
  const weatherHtml = (poi.coords && poi.coords.length >= 2)
    ? `<section class="plz-weather" id="plz-weather" data-lat="${poi.coords[1]}" data-lon="${poi.coords[0]}" data-lang="${lang}"><p class="plz-weather-loading">${escapeHtml(wc.loading)}</p></section>
<script>(function(){var el=document.getElementById('plz-weather');if(!el)return;var lat=el.dataset.lat,lon=el.dataset.lon,lang=el.dataset.lang;var ICON=function(c){if(c===0)return'☀️';if(c<=2)return'🌤️';if(c===3)return'☁️';if(c>=45&&c<=48)return'🌫️';if(c>=51&&c<=57)return'🌦️';if(c>=61&&c<=67)return'🌧️';if(c>=71&&c<=77)return'🌨️';if(c>=80&&c<=82)return'🌧️';if(c>=85&&c<=86)return'🌨️';if(c>=95)return'⛈️';return'🌡️';};var DAYS={de:['So','Mo','Di','Mi','Do','Fr','Sa'],hu:['V','H','K','Sze','Cs','P','Szo'],ro:['Du','Lu','Ma','Mi','Jo','Vi','Sâ'],en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']};var CP={de:{now:'Aktuell',forecast:'5-Tage-Vorhersage'},hu:{now:'Most',forecast:'5 napos előrejelzés'},ro:{now:'Acum',forecast:'Prognoză 5 zile'},en:{now:'Now',forecast:'5-day forecast'}};var c=CP[lang]||CP.en;var d=DAYS[lang]||DAYS.en;fetch('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+'&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=5&timezone=auto').then(function(r){return r.json();}).then(function(j){var html='';if(j.current){html+='<div class="plz-weather-now"><span class="plz-weather-icon">'+ICON(j.current.weather_code)+'</span><div><span class="plz-weather-label">'+c.now+'</span><strong>'+Math.round(j.current.temperature_2m)+'°C</strong></div></div>';}if(j.daily){html+='<div class="plz-weather-forecast"><span class="plz-weather-label">'+c.forecast+'</span><ul>';for(var i=0;i<j.daily.time.length;i++){var dt=new Date(j.daily.time[i]);html+='<li><span>'+d[dt.getDay()]+'</span><span>'+ICON(j.daily.weather_code[i])+'</span><strong>'+Math.round(j.daily.temperature_2m_max[i])+'°</strong><span class="plz-tmin">'+Math.round(j.daily.temperature_2m_min[i])+'°</span></li>';}html+='</ul></div>';}el.innerHTML=html;}).catch(function(){el.style.display='none';});})();</script>`
    : "";

  // City info-card: replaces the weather widget + the sights-section radius
  // filter on city POIs (everything moves into the collapsible card).
  const infoCardHtml = renderInfoCard(poi, lang, countryId);

  // Water-temperature widget (Open-Meteo Marine API, client-side fetch — auto-hides if inland).
  // Same lat/lon as weather. Marine API returns null SST for inland coords → script hides element.
  const marineCopy: Partial<Record<Lang, { now: string; forecast: string; loading: string }>> = {
    de: { now: "Wassertemperatur", forecast: "7-Tage-Trend", loading: "Wassertemperatur…" },
    hu: { now: "Víz hőmérséklet", forecast: "7 napos trend", loading: "Víz hőmérséklet…" },
    ro: { now: "Temperatura apei", forecast: "Tendință 7 zile", loading: "Temperatura apei…" },
    en: { now: "Water temperature", forecast: "7-day trend", loading: "Water temperature…" },
    fr: { now: "Température de l'eau", forecast: "Tendance 7 jours", loading: "Température de l'eau…" },
    tr: { now: "Su sıcaklığı", forecast: "7 günlük trend", loading: "Su sıcaklığı…" },
    hr: { now: "Temperatura mora", forecast: "Trend za 7 dana", loading: "Temperatura mora…" },
  };
  const mc = marineCopy[lang] || marineCopy.en;
  const marineHtml = (poi.coords && poi.coords.length >= 2)
    ? `<section class="plz-marine" id="plz-marine" data-lat="${poi.coords[1]}" data-lon="${poi.coords[0]}" data-lang="${lang}" hidden><p class="plz-marine-loading">${escapeHtml(mc.loading)}</p></section>
<script>(function(){var el=document.getElementById('plz-marine');if(!el)return;var lat=el.dataset.lat,lon=el.dataset.lon,lang=el.dataset.lang;var CP={de:{now:'Wassertemperatur',forecast:'7-Tage-Trend'},hu:{now:'Víz hőmérséklet',forecast:'7 napos trend'},ro:{now:'Temperatura apei',forecast:'Tendință 7 zile'},en:{now:'Water temperature',forecast:'7-day trend'}};var c=CP[lang]||CP.en;fetch('https://marine-api.open-meteo.com/v1/marine?latitude='+lat+'&longitude='+lon+'&current=sea_surface_temperature&daily=sea_surface_temperature_max,sea_surface_temperature_min&forecast_days=7&timezone=auto').then(function(r){return r.json();}).then(function(j){var sst=j.current&&j.current.sea_surface_temperature;var dmax=j.daily&&j.daily.sea_surface_temperature_max||[];var dmin=j.daily&&j.daily.sea_surface_temperature_min||[];var hasData=sst!=null||dmax.some(function(v){return v!=null;});if(!hasData){el.parentNode&&el.parentNode.removeChild(el);return;}var html='<div class="plz-marine-now"><span class="plz-marine-icon">🌊</span><div><span class="plz-marine-label">'+c.now+'</span><strong>'+(sst!=null?Math.round(sst*10)/10+'°C':'—')+'</strong></div></div>';if(dmax.length){html+='<div class="plz-marine-forecast"><span class="plz-marine-label">'+c.forecast+'</span><div class="plz-marine-bars">';for(var i=0;i<dmax.length;i++){var v=dmax[i];var pct=v!=null?Math.max(10,Math.min(100,(v-5)*4)):0;html+='<div class="plz-marine-bar" title="Day '+(i+1)+': '+(v!=null?Math.round(v*10)/10+'°C':'—')+'"><div class="plz-marine-bar-fill" style="height:'+pct+'%"></div></div>';}html+='</div></div>';}el.innerHTML=html;el.hidden=false;}).catch(function(){el.parentNode&&el.parentNode.removeChild(el);});})();</script>`
    : "";

  // Recent news HTML (build-time read from public/data/poi-news/<id>.json)
  const newsCopy: Partial<Record<Lang, { heading: string; via: string }>> = {
    de: { heading: "Aktuelle Nachrichten", via: "via" },
    hu: { heading: "Friss hírek", via: "innen:" },
    ro: { heading: "Știri recente", via: "via" },
    en: { heading: "Recent News", via: "via" },
    fr: { heading: "Actualités récentes", via: "via" },
    tr: { heading: "Son haberler", via: "kaynak" },
    hr: { heading: "Najnovije vijesti", via: "izvor" },
  };
  const nc = newsCopy[lang] || newsCopy.en;

  // Official links (site + Facebook) — emitted next to the news block so users
  // can jump straight to municipal channels. Build-time read.
  let officialLinksHtml = "";
  try {
    const links = (OFFICIAL_LINKS as Record<string, { site?: string; fb?: string }>)[poi.id];
    if (links?.site || links?.fb) {
      const siteLabel: Partial<Record<Lang, string>> = { de: "Webseite", hu: "Honlap", ro: "Site", en: "Website", fr: "Site web", tr: "Web sitesi", hr: "Web stranica" };
      const buttons: string[] = [];
      if (links.site) buttons.push(`<a href="${escapeHtml(links.site)}" target="_blank" rel="noopener noreferrer" class="plz-official-link plz-official-site">🌐 ${escapeHtml(siteLabel[lang] || siteLabel.en)}</a>`);
      if (links.fb) buttons.push(`<a href="${escapeHtml(links.fb)}" target="_blank" rel="noopener noreferrer" class="plz-official-link plz-official-fb">📘 Facebook</a>`);
      officialLinksHtml = `<div class="plz-official-links">${buttons.join("")}</div>`;
    }
  } catch {}

  // Yearly highlights — AI-curated top 2026 events for this POI.
  // Rendered ABOVE the regular news block as a kiemelt section.
  let yearlyHtml = "";
  try {
    const yhItems = YEARLY_HIGHLIGHTS[poi.id];
    if (Array.isArray(yhItems) && yhItems.length > 0) {
      const heading: Partial<Record<Lang, string>> = {
        de: "Top-Ereignisse 2026",
        hu: "Az év eseményei 2026",
        ro: "Evenimentele anului 2026",
        en: "Highlights of 2026",
        fr: "Faits marquants de 2026",
        tr: "2026'nın öne çıkan olayları",
        hr: "Najvažniji događaji 2026.",
      };
      // For FR POIs (DATAtourisme upcoming events), sort ASC so the next-up event
      // appears first. For other POIs (Opus-curated yearly recap), keep DESC
      // (newest-first) so "things that just happened" stays at the top.
      const isUpcomingFeed = yhItems.some((it: any) =>
        typeof it.source_url === "string" && it.source_url.includes("datatourisme"),
      );
      const sorted = [...yhItems].sort((a: any, b: any) =>
        isUpcomingFeed
          ? String(a.date || "").localeCompare(String(b.date || ""))
          : String(b.date || "").localeCompare(String(a.date || "")),
      );
      const renderCard = (ev: any) => {
        const t = ev.title?.[lang] || ev.title?.en || ev.title?.de || "";
        const s = ev.summary?.[lang] || ev.summary?.en || ev.summary?.de || "";
        const d = (ev.date || "").slice(0, 10);
        const isHttp = typeof ev.source_url === "string" && /^https?:\/\//i.test(ev.source_url);
        const linkOpen = isHttp ? `<a href="${escapeHtml(ev.source_url!)}" target="_blank" rel="noopener nofollow" class="plz-yh-link">` : "";
        const linkClose = isHttp ? "</a>" : "";
        // Optional thumbnail. Use loading="lazy" so the list doesn't block render.
        const evTitle = ev.title?.[lang] || ev.title?.en || ev.title?.de || "";
        const evAlt = evTitle ? buildAlt(evTitle, name) : buildAlt(name);
        // Clickable thumbnail → reuses the global lightbox (.plz-sight-img-btn handler).
        const imgHtml = (typeof ev.image_url === "string" && /^https?:\/\//.test(ev.image_url))
          ? `<button type="button" class="plz-sight-img-btn plz-yh-img-btn" data-plzimg="${escapeHtml(ev.image_url)}" data-plzalt="${escapeHtml(evAlt)}" aria-label="${escapeHtml(evTitle || name)}"><img class="plz-yh-img" src="${escapeHtml(ev.image_url)}" alt="${escapeHtml(evAlt)}" loading="lazy" decoding="async"/></button>` : "";
        // Optional badges in the meta row: category, price, period
        const pickL = (v: any): string => {
          if (!v) return "";
          if (typeof v === "string") return v;
          if (typeof v === "object") return v[lang] || v.en || v.de || v.fr || Object.values(v)[0] as string || "";
          return "";
        };
        const cat = pickL(ev.category);
        const price = pickL(ev.price);
        // Recurrent events: the `date` is just the next occurrence from when the
        // feed was scraped, not the canonical event date — hide it and render
        // a "every <weekday> <time>" string instead.
        const isRecurrent = !!(ev.period && typeof ev.period === "object" && ev.period.recurrent);
        const DAY_I18N: Record<string, Partial<Record<Lang, string>>> = {
          Monday:    { de: "montags",     hu: "hétfőnként",   ro: "lunea",    en: "Mondays",    fr: "le lundi",    tr: "Pazartesi", hr: "ponedjeljkom" },
          Tuesday:   { de: "dienstags",   hu: "keddenként",   ro: "marțea",   en: "Tuesdays",   fr: "le mardi",    tr: "Salı", hr: "utorkom" },
          Wednesday: { de: "mittwochs",   hu: "szerdánként",  ro: "miercurea",en: "Wednesdays", fr: "le mercredi", tr: "Çarşamba", hr: "srijedom" },
          Thursday:  { de: "donnerstags", hu: "csütörtökönként", ro: "joia", en: "Thursdays",  fr: "le jeudi",    tr: "Perşembe", hr: "četvrtkom" },
          Friday:    { de: "freitags",    hu: "péntekenként", ro: "vinerea",  en: "Fridays",    fr: "le vendredi", tr: "Cuma", hr: "petkom" },
          Saturday:  { de: "samstags",    hu: "szombatonként",ro: "sâmbăta",  en: "Saturdays",  fr: "le samedi",   tr: "Cumartesi", hr: "subotom" },
          Sunday:    { de: "sonntags",    hu: "vasárnaponként",ro: "duminica",en: "Sundays",    fr: "le dimanche", tr: "Pazar", hr: "nedjeljom" },
        };
        let periodTxt = "";
        if (ev.period) {
          if (typeof ev.period === "string") periodTxt = ev.period;
          else if (ev.period.applies_on_day || ev.period.start_time) {
            const dayRaw = ev.period.applies_on_day as string | undefined;
            const dayTxt = dayRaw ? (DAY_I18N[dayRaw]?.[lang] || DAY_I18N[dayRaw]?.en || dayRaw) : "";
            periodTxt = [dayTxt, ev.period.start_time?.slice(0,5)].filter(Boolean).join(" ");
          }
        }
        const showDate = !isRecurrent && d;
        const badges = [
          cat   ? `<span class="plz-yh-badge plz-yh-cat">${escapeHtml(cat)}</span>` : "",
          price ? `<span class="plz-yh-badge plz-yh-price">${escapeHtml(price)}</span>` : "",
          periodTxt ? `<span class="plz-yh-badge plz-yh-period">${escapeHtml(periodTxt)}</span>` : "",
        ].filter(Boolean).join("");
        const meta = (showDate || badges)
          ? `<div class="plz-yh-meta">${showDate ? `<time class="plz-yh-date" datetime="${escapeHtml(ev.date || "")}">${escapeHtml(d)}</time>` : ""}${badges}</div>`
          : "";
        return `<article class="plz-yh-card${imgHtml ? " plz-yh-has-img" : ""}">${imgHtml}${linkOpen}<div class="plz-yh-body-card">${meta}<h3 class="plz-yh-title">${escapeHtml(t)}</h3><p class="plz-yh-summary">${escapeHtml(s)}</p></div>${linkClose}</article>`;
      };
      const VISIBLE = 6;
      const visible = sorted.slice(0, VISIBLE).map(renderCard).join("");
      const hidden = sorted.slice(VISIBLE).map(renderCard).join("");
      const moreLabel: Partial<Record<Lang, string>> = { de: "Mehr anzeigen", hu: "Tovább", ro: "Mai mult", en: "Show more", fr: "Voir plus", tr: "Daha fazla", hr: "Prikaži više" };
      const lessLabel: Partial<Record<Lang, string>> = { de: "Weniger", hu: "Kevesebb", ro: "Mai puțin", en: "Show less", fr: "Voir moins", tr: "Daha az", hr: "Prikaži manje" };
      const moreBtn = hidden ? `<button class="plz-yh-more" type="button" aria-expanded="false" data-more="${escapeHtml(moreLabel[lang] || moreLabel.en!)}" data-less="${escapeHtml(lessLabel[lang] || lessLabel.en!)}">${escapeHtml(moreLabel[lang] || moreLabel.en!)} (+${sorted.length - VISIBLE}) ▼</button>` : "";
      const hiddenBlock = hidden ? `<div class="plz-yh-hidden" hidden>${hidden}</div>` : "";
      const headTxt = escapeHtml(heading[lang] || heading.en || "Highlights of 2026");
      const SPARK_SVG = `<svg class="plz-yh-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3"/></svg>`;
      // Schema.org Event JSON-LD (ItemList of Event/MusicEvent/Festival/ExhibitionEvent).
      // Google requires startDate + name + location.address; we add image, url, description
      // and endDate (for recurrent events spanning multiple dates) when available.
      const eventTypeFor = (ev: any): string => {
        const seg = (typeof ev.category === "string" ? ev.category : (ev.category?.en || ev.segment || "")).toString().toLowerCase();
        if (seg.includes("music") || seg.includes("concert")) return "MusicEvent";
        if (seg.includes("theatre") || seg.includes("theater") || seg.includes("arts")) return "TheaterEvent";
        if (seg.includes("festival") || seg.includes("fiesta")) return "Festival";
        if (seg.includes("exhib") || seg.includes("museum") || seg.includes("cultural")) return "ExhibitionEvent";
        if (seg.includes("sport")) return "SportsEvent";
        if (seg.includes("family") || seg.includes("kid")) return "ChildrensEvent";
        return "Event";
      };
      const pickL = (v: any): string => {
        if (!v) return ""; if (typeof v === "string") return v;
        if (typeof v === "object") return v[lang] || v.en || v.de || v.fr || (Object.values(v)[0] as string) || "";
        return "";
      };
      const eventItems = sorted.map((ev: any, i: number) => {
        const name = pickL(ev.title);
        const desc = pickL(ev.summary);
        if (!name || !ev.date) return null;
        const startDate = String(ev.date).slice(0, 10);
        const obj: any = {
          "@type": eventTypeFor(ev),
          "position": i + 1,
          "name": name,
          "startDate": startDate,
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": (poi as any).name?.[lang] || (poi as any).name?.en || poi.id,
            "address": (poi as any).name?.[lang] || (poi as any).name?.en || poi.id,
            "geo": Array.isArray(poi.coords) ? {
              "@type": "GeoCoordinates",
              "latitude": poi.coords[1],
              "longitude": poi.coords[0],
            } : undefined,
          },
        };
        if (desc) obj.description = desc;
        // endDate: real end when present, else single-day (= startDate) so the field is never missing.
        obj.endDate = String((ev as any).date_end || (ev as any).end_date || (ev as any).endDate || ev.date).slice(0, 10);
        // image: event image, else fall back to the POI hero photo (absolute URL).
        if (typeof ev.image_url === "string" && /^https?:\/\//.test(ev.image_url)) obj.image = ev.image_url;
        else { const _fb = resolveHeroImage(poi); if (_fb) obj.image = `${SITE_URL}${_fb}`; }
        if (typeof ev.source_url === "string" && /^https?:\/\//.test(ev.source_url)) obj.url = ev.source_url;
        // Organizer with url (recommended field).
        obj.organizer = { "@type": "Organization", "name": "Plizio", "url": SITE_URL };
        return obj;
      }).filter(Boolean);
      const eventListLd = eventItems.length > 0 ? `<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": heading[lang] || heading.en,
        "numberOfItems": eventItems.length,
        "itemListElement": eventItems.map((it: any, i: number) => ({
          "@type": "ListItem",
          "position": i + 1,
          "item": (() => { const { position, ...rest } = it; return rest; })(),
        })),
      }).replace(/</g, "\\u003c")}</script>` : "";
      yearlyHtml = `${eventListLd}<details class="plz-yh plz-yh-collapse"><summary class="plz-yh-summary-row">${SPARK_SVG}<h3 class="plz-yh-head">${headTxt}</h3><span class="plz-yh-count">${sorted.length}</span><span class="plz-yh-arrow" aria-hidden="true">›</span></summary><div class="plz-yh-body">${visible}${hiddenBlock}${moreBtn}</div></details>
<script>(function(){var bs=document.querySelectorAll('.plz-yh-more');bs.forEach(function(b){b.addEventListener('click',function(){var p=b.parentElement,h=p.querySelector('.plz-yh-hidden');if(!h)return;var o=h.hasAttribute('hidden');if(o){h.removeAttribute('hidden');b.textContent=b.dataset.less+' ▲';b.setAttribute('aria-expanded','true')}else{h.setAttribute('hidden','');b.textContent=b.dataset.more+' (+${sorted.length - VISIBLE}) ▼';b.setAttribute('aria-expanded','false')}})})})();</script>`;
    }
  } catch {}

  let newsHtml = "";
  // RSS hír-blokk FELFÜGGESZTVE 2026-06-03: SSR aggregátor-címlista (mások headline-jai +
  // nofollow kimenő linkek) thin/aggregátor-jel a Google-nek -> kockázat az AdSense újra-beadásnál.
  // Helyette events (Ereignisse) bővítés (strukturált, eredeti, Schema.org Event). Vissza: true.
  const SHOW_NEWS = false;
  try {
    const newsBase = path.resolve(process.cwd(), "public", "data", "poi-news", `${poi.id}.json`);
    const newsGz = newsBase + ".gz";
    let raw: string | null = null;
    if (fs.existsSync(newsBase)) raw = fs.readFileSync(newsBase, "utf-8");
    else if (fs.existsSync(newsGz)) raw = zlib.gunzipSync(fs.readFileSync(newsGz)).toString("utf-8");
    if (raw && SHOW_NEWS) {
      const items = JSON.parse(raw) as Array<{ title: string; snippet: string; url: string; source: string; date: string; lang?: string }>;
      if (items.length > 0) {
        const top = items.slice(0, 6);
        const cards = top.map((it) => {
          const dateShort = (it.date || "").slice(0, 10);
          return `<li class="plz-news-card"><a href="${escapeHtml(it.url)}" target="_blank" rel="noopener nofollow"><div class="plz-news-meta"><span class="plz-news-source">${escapeHtml(it.source || "")}</span>${dateShort ? `<time class="plz-news-date" datetime="${escapeHtml(it.date)}">${escapeHtml(dateShort)}</time>` : ""}</div><h3 class="plz-news-title" data-orig="${escapeHtml(it.title || "")}">${escapeHtml(it.title || "")}</h3>${it.snippet ? `<p class="plz-news-snippet">${escapeHtml(it.snippet)}</p>` : ""}</a></li>`;
        }).join("");
        const hasOfficial = items.some((it) => /\(hivatalos\)/i.test(it.source || ""));
        const sourcesLabel = hasOfficial ? "önkormányzati + RSS + Google News" : "Google News + RSS";
        const trLabels: Partial<Record<Lang, { btn: string; orig: string; loading: string }>> = {
          de: { btn: "Übersetzen", orig: "Original", loading: "…" },
          hu: { btn: "Fordítás", orig: "Eredeti", loading: "…" },
          ro: { btn: "Traducere", orig: "Original", loading: "…" },
          en: { btn: "Translate", orig: "Original", loading: "…" },
          fr: { btn: "Traduire", orig: "Original", loading: "…" },
          tr: { btn: "Çevir", orig: "Orijinal", loading: "…" },
          hr: { btn: "Prevedi", orig: "Izvornik", loading: "…" },
        };
        const tL = trLabels[lang] || trLabels.en!;
        const translateBtn = `<button type="button" class="plz-news-translate" data-lang="${lang}" data-btn-label="${escapeHtml(tL.btn)}" data-orig-label="${escapeHtml(tL.orig)}" data-loading="${escapeHtml(tL.loading)}"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/></svg>${escapeHtml(tL.btn)}</button>`;
        const translateScript = `<script>(function(){var sec=document.currentScript&&document.currentScript.parentElement;if(!sec)sec=document.querySelector('.plz-news');if(!sec)return;var btn=sec.querySelector('.plz-news-translate');if(!btn)return;var titles=sec.querySelectorAll('.plz-news-title');var lang=btn.dataset.lang;var SHOW_ORIG=false;var transCache={};btn.addEventListener('click',function(){if(SHOW_ORIG){titles.forEach(function(t){t.textContent=transCache[t.dataset.orig]||t.dataset.orig;});btn.lastChild.nodeValue=btn.dataset.btnLabel;SHOW_ORIG=false;return;}if(Object.keys(transCache).length){titles.forEach(function(t){t.textContent=transCache[t.dataset.orig]||t.dataset.orig;});return;}btn.disabled=true;var prevTxt=btn.lastChild.nodeValue;btn.lastChild.nodeValue=btn.dataset.loading;var lsKey='plz_tr:'+lang+':';var origArr=[],cached={};titles.forEach(function(t){var o=t.dataset.orig;var c;try{c=localStorage.getItem(lsKey+o);}catch(e){}if(c){cached[o]=c;}else{origArr.push(o);}});function applyAll(){titles.forEach(function(t){var v=cached[t.dataset.orig]||transCache[t.dataset.orig]||t.dataset.orig;t.textContent=v;});btn.disabled=false;btn.lastChild.nodeValue=btn.dataset.origLabel;SHOW_ORIG=true;}if(origArr.length===0){Object.assign(transCache,cached);applyAll();return;}var u='https://plizio-translate.plizio.workers.dev/?to='+encodeURIComponent(lang);origArr.forEach(function(o){u+='&text='+encodeURIComponent(o);});fetch(u).then(function(r){return r.json();}).then(function(j){if(j&&j.translations){for(var i=0;i<origArr.length;i++){var tr=j.translations[i]||origArr[i];cached[origArr[i]]=tr;try{localStorage.setItem(lsKey+origArr[i],tr);}catch(e){}}Object.assign(transCache,cached);applyAll();}else{btn.disabled=false;btn.lastChild.nodeValue=prevTxt;}}).catch(function(){btn.disabled=false;btn.lastChild.nodeValue=prevTxt;});});})();</script>`;
        newsHtml = `<section class="plz-news"><div class="plz-news-head"><h2>${escapeHtml(nc.heading)} <span class="plz-news-count">${items.length}</span></h2>${translateBtn}</div><ul class="plz-news-grid">${cards}</ul><p class="plz-news-via">${escapeHtml(nc.via)} ${escapeHtml(sourcesLabel)}</p>${translateScript}</section>`;
      }
    }
  } catch {}

  // Hero — CSAK a POI saját hero-képe. A sight-képeket szándékosan NEM húzzuk be
  // (a legtöbb nem passzol); ha nincs hero, placeholder. Street View később.
  const heroImages: { src: string; alt: string }[] = [];
  const heroImg = resolveHeroImage(poi);
  if (heroImg) heroImages.push({ src: heroImg, alt: buildAlt(name) });
  let heroHtml: string;
  if (heroImages.length === 0) {
    // No fetched photo → Claude-Design type placeholder SVG (not an empty/pin hero).
    heroHtml = `<div class="plz-hero plz-hero-ph"><img src="${poiPlaceholderSvg(poi.type)}" alt="${escapeHtml(buildAlt(name))}" loading="lazy"/></div>`;
  } else if (heroImages.length === 1) {
    heroHtml = `<div class="plz-hero"><img src="${escapeHtml(heroImages[0].src)}" alt="${escapeHtml(heroImages[0].alt)}" loading="lazy"/></div>`;
  } else {
    const slides = heroImages.map((h, i) => `<div class="plz-hero-slide" data-slide="${i}"><img src="${escapeHtml(h.src)}" alt="${escapeHtml(h.alt)}" loading="${i === 0 ? "eager" : "lazy"}"/></div>`).join("");
    const dots = heroImages.map((_, i) => `<span class="plz-hero-dot${i === 0 ? " active" : ""}" data-dot="${i}"></span>`).join("");
    heroHtml = `<div class="plz-hero plz-hero-swiper"><div class="plz-hero-track" id="plz-hero-track">${slides}</div><div class="plz-hero-dots">${dots}</div></div>
<script>(function(){var tr=document.getElementById('plz-hero-track');if(!tr)return;var dots=tr.parentElement.querySelectorAll('.plz-hero-dot');function sync(){var w=tr.clientWidth;var i=Math.round(tr.scrollLeft/w);dots.forEach(function(d,j){d.classList.toggle('active',i===j);});}tr.addEventListener('scroll',function(){sync();},{passive:true});dots.forEach(function(d,i){d.addEventListener('click',function(){tr.scrollTo({left:i*tr.clientWidth,behavior:'smooth'});});});})();</script>`;
  }

  // Admin-only "bad image" flag button (gated by ?flag=1 → localStorage).
  // Fires an Umami `bad_image` event so we can later list POIs needing image swap.
  const flagBtnHtml = heroImages.length > 0
    ? `<button type="button" class="plz-imgflag" data-poi="${escapeHtml(poi.id)}" data-img="hero" aria-label="Rossz kép jelölése" hidden>⚑</button>`
      + `<script>(function(){try{var s=location.search;if(s.indexOf('flag=1')>=0)localStorage.setItem('plzflag','1');if(s.indexOf('flag=0')>=0)localStorage.removeItem('plzflag');if(localStorage.getItem('plzflag')!=='1')return;}catch(e){return;}var POI=${JSON.stringify(poi.id)},LANG=${JSON.stringify(lang)};document.body.classList.add('plz-flagmode');function flag(img,el){try{if(window.umami&&window.umami.track)window.umami.track('bad_image',{poi:POI,img:img||'',lang:LANG});}catch(e){}if(el){el.classList.add('plz-flagged');}}var b=document.querySelector('.plz-imgflag');if(b){b.hidden=false;b.addEventListener('click',function(){flag('hero',null);b.textContent='\\u2713';b.disabled=true;b.classList.add('done');});}document.addEventListener('click',function(e){var t=e.target&&e.target.closest?e.target.closest('.plz-sight-img-btn'):null;if(!t)return;e.preventDefault();e.stopPropagation();flag(t.getAttribute('data-plzimg'),t);},true);})();</script>`
    : "";

  // Hero Street View button — POI center coords (same [lng,lat] convention),
  // gated by the SV metadata sidecar. Overlay badge on the hero's corner.
  let heroSvHtml = "";
  {
    const pc = (poi as { coords?: unknown }).coords as number[] | undefined;
    if (Array.isArray(pc) && pc.length === 2 && typeof pc[0] === "number" && typeof pc[1] === "number") {
      const [plng, plat] = pc;
      if (SV_OK[svKey(plat, plng)]) {
        const u = svHref(plat, plng);
        heroSvHtml = `<a class="plz-hero-sv" href="${u}" target="_blank" rel="nofollow noopener" title="Street View" aria-label="Street View">${SV_PEGMAN_SVG}</a>`;
      }
    }
  }

  // Coat of arms (city/region badge)
  const coa = (poi as { coa?: string }).coa;
  const coaLabel: Partial<Record<Lang, string>> = { de: "Wappen", hu: "címer", ro: "stema", en: "coat of arms", fr: "blason", tr: "arması", hr: "grb" };
  const coaHtml = coa ? `<img class="plz-coa" src="${escapeHtml(coa)}" alt="${escapeHtml(`${name} ${coaLabel[lang] || coaLabel.en}`)}" loading="lazy"/>` : "";

  // Audio pronunciation
  const audio = (poi as { audio?: string }).audio;
  const audioHtml = audio
    ? `<audio class="plz-audio" controls preload="none" aria-label="${escapeHtml(name)} pronunciation"><source src="${escapeHtml(audio)}"/></audio>`
    : "";

  // History period/year box
  const histPeriod = (poi as { historyPeriod?: string }).historyPeriod;
  const histYear = (poi as { historyYear?: number | [number, number] }).historyYear;
  let historyHtml = "";
  if (histPeriod || histYear) {
    const yearStr = Array.isArray(histYear) ? `${histYear[0]}–${histYear[1]}` : (histYear ?? "");
    historyHtml = `<div class="plz-history-box"><h3>${I("history", lang)}</h3>${histPeriod ? `<p>${escapeHtml(String(histPeriod))}</p>` : ""}${yearStr ? `<p class="plz-history-year">${escapeHtml(String(yearStr))}</p>` : ""}</div>`;
  }

  // hreflang link tags
  const hreflangLinks = Object.entries(alternates)
    .map(([l, href]) => `<link rel="alternate" hreflang="${l}" href="${href}"/>`)
    .join("\n  ");

  // Language switcher — fr only for FR POIs, tr only for DE POIs, hr only for HR POIs.
  const extraSwitcher: Lang[] = [];
  if (poi.parent?.startsWith("FR")) extraSwitcher.push("fr");
  if (poi.parent?.startsWith("DE")) extraSwitcher.push("tr");
  if ((poi as unknown as { hrLong?: boolean }).hrLong) extraSwitcher.push("hr");
  const switcherLangs: Lang[] = [...SUPPORTED_LANGS, ...extraSwitcher];
  const langSwitcher = switcherLangs.map((l) => {
    const cls = l === lang ? ' class="active"' : "";
    const href = alternates[l] || buildPoiPath(l, poi);
    return `<a href="${href}"${cls}>${l.toUpperCase()}</a>`;
  }).join("");

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(metaDesc)}"/>
${richness.isEmpty ? `<meta name="robots" content="noindex,follow"/>` : ""}
<link rel="canonical" href="${url}"/>
${hreflangLinks}
<link rel="alternate" hreflang="x-default" href="${alternates.en}"/>
<meta property="og:title" content="${escapeHtml(name)}"/>
<meta property="og:description" content="${escapeHtml(metaDesc)}"/>
<meta property="og:url" content="${url}"/>
<meta property="og:type" content="website"/>
${heroImg ? `<meta property="og:image" content="${SITE_URL}${escapeHtml(heroImg)}"/>` : ""}
${isAdSenseEligible(poi, lang) && !richness.isWeak ? ADSENSE_HEAD : ""}
<link rel="stylesheet" href="/poi-static/poi.css?v=20260526h"/>
${structuredData(poi, lang, url, metaDesc, countryId, countryName, faqItems, [
  { name: I("home", lang), url: `/${lang}/` },
  { name: countryName, url: buildCountryPath(lang, countryId) },
  ...((poi.parent !== countryId && stateRegion) ? [{ name: slugs.localizedStateName(poi.parent, lang), url: buildStatePath(lang, poi.parent) }] : []),
  { name, url: buildPoiPath(lang, poi) },
])}
<script defer src="https://stats.plizio.com/script.js" data-website-id="b718db4e-ee1b-43db-a89a-af4ecc5435bf"></script>
</head>
<body>
<div class="plz-progress" id="plz-progress" aria-hidden="true"></div>
<script>(function(){var b=document.getElementById('plz-progress');if(!b)return;function u(){var s=document.documentElement;var p=s.scrollTop/(s.scrollHeight-s.clientHeight)||0;b.style.transform='scaleX('+Math.min(1,Math.max(0,p))+')';}window.addEventListener('scroll',u,{passive:true});u();})();</script>
<script>(function(){function t(n,d){if(window.umami&&window.umami.track){try{window.umami.track(n,d||{});}catch(e){}}}
// Wait for umami script to load
function ready(){if(!window.umami||!window.umami.track){setTimeout(ready,300);return;}init();}
function init(){
// Scroll depth: 25/50/75/100
var sd={25:0,50:0,75:0,100:0};window.addEventListener('scroll',function(){var s=document.documentElement;var p=Math.round(s.scrollTop/(s.scrollHeight-s.clientHeight)*100);for(var k in sd){if(p>=k&&!sd[k]){sd[k]=1;t('scroll',{depth:Number(k)});}}},{passive:true});
// Time on page (15s, 30s, 60s, 180s)
[15000,30000,60000,180000].forEach(function(ms){setTimeout(function(){t('engaged',{seconds:ms/1000});},ms);});
// Click handlers
document.addEventListener('click',function(e){
  var a=e.target.closest('a[href]');
  if(a){
    var h=a.getAttribute('href')||'';
    var ext=/^https?:[/][/]/.test(h)&&!h.includes(location.host);
    if(ext){
      var rel=(a.getAttribute('rel')||'').toLowerCase();
      var kind=rel.includes('sponsored')?'affiliate':(/wikipedia\.org/.test(h)?'wiki':(/google\.[a-z.]+[/]maps/.test(h)?'gmaps':(/openstreetmap\.org/.test(h)?'osm':(/ticketmaster|datatourisme/.test(h)?'event':'external'))));
      t('outbound',{kind:kind,url:h.slice(0,200)});
    }
  }
  var go=e.target.closest('.plz-itin-go');if(go){t('itinerary_open',{});}
  var md=e.target.closest('[data-mode]');if(md){t('itinerary_mode',{mode:md.dataset.mode});}
  var wt=e.target.closest('[data-weather]');if(wt){t('itinerary_weather',{weather:wt.dataset.weather});}
  var ics=e.target.closest('.plz-itin-ics');if(ics){t('itinerary_ics_export',{mw:ics.dataset.ics});}
  var chk=e.target.closest('.plz-itin-check');if(chk){t('stop_check',{});}
  var yh=e.target.closest('.plz-yh-card');if(yh){t('highlight_click',{});}
  var ymore=e.target.closest('.plz-yh-more');if(ymore){t('highlight_expand',{});}
  var sight=e.target.closest('.plz-sight');if(sight){t('sight_click',{});}
  var lang=e.target.closest('[data-lang-switch]');if(lang){t('lang_switch',{to:lang.dataset.langSwitch});}
});
// FAQ open (details element)
document.querySelectorAll('.plz-faq-item summary,.plz-yh-collapse summary').forEach(function(s){s.addEventListener('click',function(){var d=s.parentElement;if(!d.hasAttribute('open')){t('faq_open',{q:(s.textContent||'').slice(0,80)});}});});
}
ready();})();</script>
<header class="plz-header">
  <div class="plz-header-inner">
    <a href="/${lang}/" class="plz-logo">Plizio</a>
    <nav class="plz-nav">
      <a href="/${lang}/">${I("home", lang)}</a>
      <a href="/europe-map/">Europa</a>
    </nav>
    <div class="plz-langs">${langSwitcher}</div>
  </div>
</header>
<main>
  <nav class="plz-breadcrumb">
    ${breadcrumbHome}<span>›</span>${breadcrumbCountry}${breadcrumbState ? `<span>›</span>${breadcrumbState}` : ""}<span>›</span><span>${escapeHtml(name)}</span>
  </nav>
  <div class="plz-title-row">${coaHtml}<div>${richness.hasPlizioGo ? `<p class="plz-eyebrow">PlizioGo</p>` : (!richness.isWeak ? `<p class="plz-eyebrow">Plizio Visual Lab</p>` : "")}<h1>${escapeHtml(name)}</h1></div></div>
  <span class="plz-type-tag">${escapeHtml(typeLabel)}</span>
  ${audioHtml}
  ${renderStatsChips(poi, lang, richness, sightsArr.length, nearbyArr.length)}
  ${renderTabNav(lang, { hasItin: true, hasSights: sightsArr.length > 0 || nearbyArr.length > 0, hasNews: !!newsHtml, hasInfo: factsArr.length > 0 || geoItems.length > 0 || historyHtml })}
  <div class="plz-hero-grid" id="sec-overview">
    <div class="plz-hero-grid-main">${heroHtml}${heroSvHtml}${flagBtnHtml}</div>
    <div class="plz-hero-grid-side">${infoCardHtml || weatherHtml}${marineHtml}${officialLinksHtml}${yearlyHtml}${newsHtml}</div>
  </div>
  ${renderVisitInfo(poi, lang)}
  ${descText ? `<section><p class="poi-lead-paragraph">${escapeHtml(descText)}</p></section>` : ""}
  ${renderClimate(poi, lang)}
  <div id="sec-info">
  ${renderPracticalInfo(poi, lang)}
  ${geoItems.length > 0 || historyHtml ? `<section class="plz-geo-history">${historyHtml}${geoItems.length > 0 ? `<div class="plz-geo-box"><h3>${I("geography", lang)}</h3><div class="plz-meta">${geoItems.join("")}</div></div>` : ""}</section>` : ""}
  ${factsArr.length > 0 ? `<section><h2>${I("facts", lang)}</h2><ul class="plz-facts">${factsArr.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul></section>` : ""}
  ${didYouKnowHtml}
  </div>
  ${constellationHtml}
  ${"" /* renderRouteInfo: kivéve amíg a SAJÁT camper/gyalogos útvonal-tervező el nem készül — addig csak GMaps-re tudott linkelni + a közeli-helyek duplikálták a csillagtérképet (user 2026-06-04) */}
  ${renderVisitPlanner(poi, lang, richness.hasPlizioGo)}
  <div id="sec-itin">${renderCityItinerary(poi, lang)}</div>
  ${renderRoutePlanner(poi, lang, name)}
  <div id="sec-sights">
  ${sightsHtml}
  ${infoCardHtml ? "" : renderSightRadius(poi, lang)}
  ${nearbyHtml}
  </div>
  ${renderFAQ(poi, lang) || faqHtml}
  <section>
    <a class="plz-cta" href="${countryMapUrl(countryId) ?? (poi.parent === countryId ? buildCountryPath(lang, countryId) : buildStatePath(lang, poi.parent))}">${I("viewMap", lang)} →</a>
    ${hubLinkHtml}
    ${osmLink}
  </section>
  ${renderExploreBlock({ poiId: poi.id, countryId, countryName: countryName, countryMapUrl: countryMapUrl(countryId), lang: lang as any })}
  ${relatedItems}
  ${renderMobileFab(poi, lang, name)}
</main>
<div id="plz-lightbox" class="plz-lightbox" role="dialog" aria-modal="true" aria-hidden="true"><button type="button" class="plz-lightbox-close" aria-label="Close">×</button><img alt="" /></div>
<style>
.plz-sight-img-btn{padding:0;border:0;background:none;cursor:zoom-in;display:block}
.plz-sight-img-btn:focus-visible{outline:2px solid #4cc;outline-offset:2px}
.plz-sight-sv{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;margin-left:8px;vertical-align:-5px;border-radius:50%;background:#fbbc04;color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.35);transition:transform .15s,box-shadow .15s}
.plz-sight-sv:hover{transform:scale(1.18);box-shadow:0 2px 8px rgba(251,188,4,.6);background:#f9ab00}
.plz-sight-sv svg{display:block}
.plz-sight-gm{background:#ea4335}
.plz-sight-gm:hover{background:#d33426;box-shadow:0 2px 8px rgba(234,67,53,.6)}
.plz-sight-facts{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:6px;font-size:.82rem;color:rgba(255,255,255,.62)}
.plz-sight-facts a.plz-sf-web{color:#7fd6e6;text-decoration:none}
.plz-sight-facts a.plz-sf-web:hover{text-decoration:underline}
.plz-sight-cat{display:inline-block;margin-left:8px;vertical-align:2px;background:#ffffff10;border:1px solid #ffffff22;border-radius:999px;padding:2px 9px;font-size:.62rem;font-weight:700;color:#9fc4ff;text-transform:uppercase;letter-spacing:.04em;white-space:nowrap}
.plz-hero-sv{position:absolute;right:10px;bottom:10px;z-index:5;display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:#fbbc04;color:#fff;box-shadow:0 2px 6px rgba(0,0,0,.45);transition:transform .15s,box-shadow .15s}
.plz-hero-sv:hover{transform:scale(1.12);box-shadow:0 3px 10px rgba(251,188,4,.65);background:#f9ab00}
.plz-hero-sv svg{display:block;width:22px;height:22px}
.plz-itin-sv{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#fbbc04;color:#fff}
.plz-itin-sv svg{display:block;width:13px;height:13px}
.plz-sgr{margin-top:1.2rem}
.plz-sgr-chips{display:flex;gap:.5rem;flex-wrap:wrap;margin:.4rem 0 .7rem}
.plz-sgr-chip{background:#ffffff12;border:1px solid #ffffff2a;color:#dfe9ff;border-radius:999px;padding:.4rem .95rem;font-size:.85rem;font-weight:700;cursor:pointer;transition:background .15s,border-color .15s}
.plz-sgr-chip:hover{background:#ffffff20}
.plz-sgr-chip.on{background:linear-gradient(135deg,#3b82f6,#2563eb);border-color:#3b82f6;color:#fff}
.plz-sgr-sep{width:1px;align-self:stretch;background:#ffffff22;margin:0 .15rem}
.plz-sgr-cat{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;background:#ffffff12;border:1px solid #ffffff2a;color:#aebadb;border-radius:999px;cursor:pointer;transition:background .15s,border-color .15s,color .15s}
.plz-sgr-cat:hover{background:#ffffff20;color:#dfe9ff}
.plz-sgr-cat.on{background:linear-gradient(135deg,#10b981,#059669);border-color:#10b981;color:#fff}
.plz-sgr-it{cursor:pointer}
.plz-sgr-it.open{background:#ffffff14;border-radius:8px 8px 0 0}
.plz-sgr-desc{background:#ffffff0d;border-left:3px solid #3b82f6;border-radius:0 0 8px 8px;padding:.55rem .8rem;margin:0 0 .35rem;font-size:.83rem;line-height:1.5;color:#c9d6f2}
.plz-sgr-more{display:inline-block;margin-top:.4rem;color:#7fb0ff;font-weight:700;font-size:.78rem;text-decoration:none}
.plz-sgr-more:hover{text-decoration:underline}
.plz-sgr-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:.35rem .8rem;max-height:420px;overflow-y:auto;padding-right:.3rem}
.plz-sgr-it{display:flex;align-items:center;gap:.5rem;padding:.32rem .45rem;border-radius:8px;background:#ffffff08;font-size:.85rem;min-width:0}
.plz-sgr-d{flex-shrink:0;font-size:.7rem;font-weight:800;color:#7fb0ff;min-width:46px}
.plz-sgr-nm{color:#e9f1ff;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0}
a.plz-sgr-nm:hover{text-decoration:underline}
.plz-sgr-sv{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:#fbbc04;color:#fff}
.plz-sgr-gm{background:#ea4335}
.plz-sgr-gm:hover{background:#d33426}
.plz-sgr-load{padding:1.2rem;text-align:center;color:#ffffff90;grid-column:1/-1}
.plz-sgr-spin{display:inline-block;width:26px;height:26px;border-radius:50%;border:3px solid #ffffff25;border-top-color:#3b82f6;animation:plzsgrspin .8s linear infinite}
@keyframes plzsgrspin{to{transform:rotate(360deg)}}
.plz-icard{background:linear-gradient(170deg,#101b33,#0c1426);border:1px solid rgba(120,180,255,.28);border-radius:14px;overflow:hidden;margin-bottom:12px}
.plz-icard summary{display:flex;align-items:center;gap:8px;padding:11px 14px;cursor:pointer;list-style:none;font-weight:800;font-size:.95rem;-webkit-tap-highlight-color:transparent}
.plz-icard summary::-webkit-details-marker{display:none}
.plz-ic-h{margin:0;font-size:.95rem;font-weight:800;display:inline}
.plz-ic-ico{font-size:1.05rem}
.plz-ic-arrow{margin-left:auto;color:#7fb0ff;transition:transform .2s}
.plz-icard[open] .plz-ic-arrow{transform:rotate(180deg)}
.plz-ic-body{padding:0 14px 12px}
.plz-ic-sec{padding:8px 0;border-top:1px solid #ffffff0d}
.plz-ic-sec h4{margin:0 0 6px;font-size:.7rem;text-transform:uppercase;letter-spacing:.07em;color:#7fb0ff}
.plz-ic-wx{display:flex;gap:5px;overflow-x:auto}
.plz-ic-wd{flex:1;min-width:50px;background:#ffffff0a;border-radius:9px;padding:6px 3px;text-align:center}
.plz-ic-wd .d{font-size:.6rem;color:#9fc4ff}.plz-ic-wd .i{font-size:1.05rem;margin:2px 0}
.plz-ic-wd .t{font-size:.72rem;font-weight:700}.plz-ic-wd .t small{color:#9fb4d8;font-weight:400}
.plz-ic-fei{background:#3b2407;border:1px solid #b4690e88;border-radius:9px;padding:7px 9px;font-size:.78rem;margin-top:8px}
.plz-ic-fei b{color:#fbbf24}
.plz-ic-tips{margin:0;padding-left:17px;font-size:.8rem;color:#d7e4fb}.plz-ic-tips li{margin:3px 0}
.plz-ic-pick{display:flex;gap:7px;padding:4px 0;font-size:.81rem}
.plz-ic-pick p{margin:1px 0 0;color:#bcd0ee;font-size:.74rem}
.plz-icard .plz-sgr{margin-top:0}.plz-icard .plz-sgr h2{display:none}
.plz-icard .plz-sgr-list{max-height:300px}
.plz-lightbox{position:fixed;inset:0;background:rgba(2,6,12,.92);display:none;align-items:center;justify-content:center;z-index:9999;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);-webkit-tap-highlight-color:transparent}
.plz-lightbox.open{display:flex}
.plz-lightbox img{max-width:min(95vw,1400px);max-height:min(90vh,1400px);width:auto;height:auto;object-fit:contain;border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,.6)}
.plz-lightbox-close{position:absolute;top:max(12px,env(safe-area-inset-top));right:max(12px,env(safe-area-inset-right));width:44px;height:44px;border-radius:50%;background:rgba(0,0,0,.6);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:1.6rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}
.plz-lightbox-close:hover{background:rgba(0,0,0,.8)}
@media (max-width:640px){.plz-lightbox img{max-width:95vw;max-height:80vh}}
.plz-planner{display:block;margin:1.6rem 0;border:1px solid rgba(120,150,200,.18);border-radius:18px;background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,0));padding:1.1rem 1.1rem 1.2rem}
.plz-pl-h{font-size:1.12rem;font-weight:700;color:#eaf2ff;margin:0 0 .3rem}
.plz-pl-sub{color:rgba(180,200,235,.72);font-size:.9rem;margin:0 0 1rem}
.plz-pl-lbl{font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;color:rgba(180,200,235,.7);margin:.2rem 0 .5rem}
.plz-pl-opts{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:.9rem}
.plz-pl-opt{appearance:none;border:1px solid rgba(120,150,200,.2);background:rgba(255,255,255,.03);color:#eaf2ff;padding:.5rem .9rem;border-radius:11px;font-size:.9rem;font-weight:600;cursor:pointer;transition:.15s}
.plz-pl-opt:hover{border-color:rgba(120,180,255,.45)}
.plz-pl-opt[aria-pressed="true"]{background:linear-gradient(180deg,rgba(127,180,255,.22),rgba(127,180,255,.08));border-color:rgba(120,180,255,.45);color:#fff}
.plz-pl-go{margin-top:.2rem;width:100%;padding:.8rem;border:0;border-radius:13px;background:linear-gradient(180deg,#3b82f6,#2563eb);color:#fff;font-size:.98rem;font-weight:700;cursor:pointer}
.plz-pl-go:hover{filter:brightness(1.08)}
.plz-pl-rhead{margin:1.1rem 0 .9rem}
.plz-pl-meta{color:rgba(180,200,235,.72);font-size:.9rem}
.plz-pl-meta b{color:#eaf2ff}
.plz-pl-list{list-style:none;margin:0;padding:0}
.plz-pl-stop{display:flex;gap:.85rem}
.plz-pl-rail{flex:none;display:flex;flex-direction:column;align-items:center;width:28px}
.plz-pl-num{width:28px;height:28px;border-radius:50%;background:linear-gradient(180deg,#3b82f6,#2563eb);color:#fff;font-weight:700;font-size:.85rem;display:flex;align-items:center;justify-content:center;flex:none}
.plz-pl-line{flex:1;width:2px;background:linear-gradient(180deg,rgba(120,180,255,.45),rgba(120,150,200,.18));margin:.2rem 0}
.plz-pl-body{flex:1;padding-bottom:1rem;min-width:0}
.plz-pl-card{border:1px solid rgba(120,150,200,.18);border-radius:13px;background:rgba(255,255,255,.03);padding:.7rem .85rem}
.plz-pl-card h3{margin:0;font-size:1rem}
.plz-pl-card h3 a{color:#eaf2ff;text-decoration:none}
.plz-pl-card h3 a:hover{color:#7fb4ff}
.plz-pl-tags{display:flex;gap:.45rem;flex-wrap:wrap;margin-top:.4rem}
.plz-pl-tag{font-size:.72rem;padding:.16rem .48rem;border-radius:7px;background:rgba(127,180,255,.12);color:#bcd6ff;border:1px solid rgba(127,180,255,.2)}
.plz-pl-tag.g{background:rgba(120,200,140,.12);color:#bfe9c8;border-color:rgba(120,200,140,.22)}
.plz-pl-walk{display:flex;align-items:center;gap:.4rem;color:rgba(180,200,235,.72);font-size:.8rem;margin:.05rem 0 .55rem 5px}
.plz-pl-walk svg{opacity:.7}
.plz-pl-empty{color:rgba(180,200,235,.72);text-align:center;padding:1.2rem 0;list-style:none}
.plz-pl-acts{display:flex;gap:.55rem;margin-top:.9rem;flex-wrap:wrap}
.plz-pl-act{border:1px solid rgba(120,150,200,.2);background:rgba(255,255,255,.03);color:#eaf2ff;padding:.55rem .95rem;border-radius:11px;font-size:.88rem;font-weight:600;cursor:pointer}
.plz-pl-act:hover{border-color:rgba(120,180,255,.45)}
.plz-pl-note{color:#bfe9c8;font-size:.84rem;margin-top:.5rem;min-height:1em}
.plz-route{margin:1.4rem 0}
.plz-route h2{font-size:1.12rem;color:#eaf2ff;margin:0 0 .5rem}
.plz-route-lead{color:rgba(200,215,240,.9);margin:0 0 .55rem}
.plz-route-near{color:rgba(180,200,235,.8);font-size:.92rem;margin:.2rem 0 .55rem}
.plz-route-near b{color:#eaf2ff}
.plz-route-near a{color:#7fb4ff;text-decoration:none}
.plz-route-near a:hover{text-decoration:underline}
.plz-route-modes{color:rgba(180,200,235,.78);font-size:.92rem;margin:.2rem 0 .6rem}
.plz-route-btns{display:flex;flex-wrap:wrap;gap:.5rem}
.plz-route-btn{display:inline-flex;align-items:center;gap:.35rem;padding:.5rem .85rem;border-radius:.6rem;background:rgba(40,70,120,.45);border:1px solid rgba(120,170,255,.3);color:#eaf2ff;font-size:.92rem;font-weight:600;text-decoration:none;transition:background .15s,border-color .15s}
.plz-route-btn:hover{background:rgba(60,100,165,.6);border-color:rgba(150,190,255,.55)}
.plz-climate{margin:1.4rem 0}
.plz-climate h2{font-size:1.12rem;color:#eaf2ff;margin:0 0 .4rem}
.plz-climate-best{color:rgba(200,215,240,.9);margin:0 0 .55rem}
.plz-climate-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch}
.plz-climate-tbl{border-collapse:collapse;font-size:.82rem;min-width:100%}
.plz-climate-tbl th,.plz-climate-tbl td{padding:.32rem .42rem;text-align:center;color:rgba(205,218,240,.85);border-bottom:1px solid rgba(120,150,210,.12);white-space:nowrap}
.plz-climate-tbl td.rl{text-align:left;color:rgba(170,190,225,.7);font-size:.78rem}
.plz-climate-tbl th.b,.plz-climate-tbl td.b{background:rgba(80,155,95,.22);color:#d8f5dd;font-weight:600}
.plz-visit{margin:1.4rem 0}
.plz-vi-h{font-size:1.05rem;font-weight:700;color:#eaf2ff;margin:0 0 .7rem}
.plz-vi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.6rem}
.plz-vi-chip{display:flex;align-items:center;gap:.6rem;padding:.6rem .8rem;border:1px solid rgba(120,150,200,.18);border-radius:13px;background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,0))}
.plz-vi-chip svg{flex:none;color:#7fb4ff;opacity:.9}
.plz-vi-chip>div{display:flex;flex-direction:column;line-height:1.25;min-width:0}
.plz-vi-k{font-size:.72rem;text-transform:uppercase;letter-spacing:.04em;color:rgba(180,200,235,.7)}
.plz-vi-v{font-size:.96rem;font-weight:600;color:#eaf2ff}
.plz-vi-v em{font-style:normal;font-weight:400;font-size:.8rem;color:rgba(180,200,235,.75)}
.plz-faq{margin:1.8rem 0}
.plz-faq-item{border:1px solid rgba(120,150,200,.18);border-radius:14px;margin:.55rem 0;background:linear-gradient(180deg,rgba(255,255,255,.025),rgba(255,255,255,0));overflow:hidden;transition:border-color .2s,background .2s}
.plz-faq-item[open]{border-color:rgba(120,180,255,.42);background:rgba(120,180,255,.06)}
.plz-faq-item summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:.85rem;padding:.9rem 1.05rem;font-weight:600;font-size:.98rem;color:#eaf2ff}
.plz-faq-item summary::-webkit-details-marker{display:none}
.plz-faq-item summary:hover{color:#fff}
.plz-faq-q{flex:1}
.plz-faq-chev{flex:none;transition:transform .25s ease;opacity:.65;color:#7fb4ff}
.plz-faq-item[open] .plz-faq-chev{transform:rotate(180deg);opacity:1}
.plz-faq-a{padding:0 1.05rem 1rem;line-height:1.62;color:rgba(255,255,255,.82);font-size:.94rem}
.plz-constel-sec{margin:1.6rem 0}
.plz-constel-sub{margin:.15rem 0 .8rem;opacity:.65;font-size:.9rem}
.plz-constel{position:relative;width:100%;max-width:560px;margin:0 auto;aspect-ratio:4/3}
.plz-cst-stage{position:absolute;inset:0;border-radius:16px;overflow:hidden;background:radial-gradient(120% 100% at 50% 38%,#1a2c4d 0%,#0d1730 52%,#070b18 100%);box-shadow:inset 0 0 70px rgba(0,0,0,.55),0 6px 26px rgba(0,0,0,.4)}
.plz-cst-svg{position:absolute;inset:0;width:100%;height:100%}
.plz-cst-ring{fill:none;stroke:rgba(120,170,255,.09);stroke-width:.25}
.plz-cst-arc{fill:none;stroke:rgba(120,185,255,.32);stroke-width:.45;stroke-linecap:round}
.plz-cst-halo{fill:rgba(90,200,255,.30);transform-box:fill-box;transform-origin:center;animation:plzCstPulse 3.4s ease-in-out infinite}
.plz-cst-core{fill:#cdeeff;filter:drop-shadow(0 0 1.6px rgba(120,210,255,.95))}
.plz-cst-comp{fill:rgba(150,185,235,.5);font-size:3.6px;font-family:system-ui,-apple-system,sans-serif;font-weight:700;text-anchor:middle;dominant-baseline:middle;letter-spacing:.3px}
@keyframes plzCstPulse{0%,100%{opacity:.34;transform:scale(1)}50%{opacity:.72;transform:scale(1.22)}}
@media (prefers-reduced-motion:reduce){.plz-cst-halo{animation:none}}
.plz-cst-nodes{position:absolute;inset:0}
.plz-cst-node{position:absolute;transform:translate(-50%,-50%);z-index:1}
.plz-cst-node:hover,.plz-cst-node.open{z-index:6}
.plz-cst-dot{display:block;width:var(--d,10px);height:var(--d,10px);border-radius:50%;cursor:pointer;background:radial-gradient(circle at 34% 30%,#f0f9ff,#5cc7ff 58%,#2a7fd0);box-shadow:0 0 0 2px rgba(8,16,34,.65),0 0 9px rgba(90,200,255,.85);transition:transform .15s;-webkit-tap-highlight-color:transparent}
.plz-cst-dot:focus-visible{outline:2px solid #9fe0ff;outline-offset:2px}
.plz-cst-node:hover .plz-cst-dot,.plz-cst-node.open .plz-cst-dot{transform:scale(1.28)}
.plz-cst-card{position:absolute;left:50%;bottom:calc(100% + 7px);transform:translateX(-50%) scale(.92);transform-origin:bottom center;width:max-content;max-width:172px;background:rgba(11,19,35,.97);border:1px solid rgba(120,180,255,.28);border-radius:12px;padding:7px;display:flex;gap:8px;align-items:flex-start;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .15s,transform .15s;box-shadow:0 10px 30px rgba(0,0,0,.55);text-decoration:none}
.plz-cst-card::after{content:"";position:absolute;left:0;right:0;top:100%;height:9px}
.plz-cst-node--low .plz-cst-card{bottom:auto;top:calc(100% + 7px);transform-origin:top center}
.plz-cst-node--low .plz-cst-card::after{top:auto;bottom:100%}
.plz-cst-node:hover .plz-cst-card,.plz-cst-node.open .plz-cst-card{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) scale(1)}
.plz-cst-thumb{width:46px;height:46px;border-radius:8px;overflow:hidden;flex:0 0 auto;background:#1b2942;display:flex;align-items:center;justify-content:center;font-size:1.2rem}
.plz-cst-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.plz-cst-info{display:flex;flex-direction:column;gap:1px;min-width:0}
.plz-cst-name{font-size:.82rem;font-weight:700;color:#eef4ff;line-height:1.18}
.plz-cst-dist{font-size:.72rem;color:#9fc4ff}
.plz-cst-go{font-size:.72rem;font-weight:700;color:#7fd0ff;margin-top:3px}
@media (max-width:640px){.plz-constel{max-width:none}.plz-cst-card{max-width:150px}.plz-cst-name{font-size:.76rem}}
.plz-hero-grid-main{position:relative}
.plz-imgflag{position:absolute;top:8px;right:8px;z-index:6;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.45);background:rgba(190,32,32,.82);color:#fff;font-size:1rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;box-shadow:0 2px 8px rgba(0,0,0,.45)}
.plz-imgflag:hover{background:rgba(210,40,40,.95)}
.plz-imgflag.done{background:rgba(30,140,60,.88);cursor:default;border-color:rgba(255,255,255,.6)}
.plz-flagmode .plz-sight-img-btn{outline:2px dashed rgba(255,90,90,.92);outline-offset:-2px}
.plz-sight-img-btn.plz-flagged{outline:3px solid #2ecc71!important;outline-offset:-2px}
${EXPLORE_CSS}
</style>
<script>(function(){var box=document.getElementById('plz-lightbox');if(!box)return;var img=box.querySelector('img');var btn=box.querySelector('.plz-lightbox-close');function open(src,alt){img.src=src;img.alt=alt||'';box.classList.add('open');box.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}function close(){box.classList.remove('open');box.setAttribute('aria-hidden','true');img.src='';document.body.style.overflow='';}document.addEventListener('click',function(e){var t=e.target.closest('.plz-sight-img-btn');if(t){e.preventDefault();open(t.dataset.plzimg,t.dataset.plzalt);}});btn.addEventListener('click',close);box.addEventListener('click',function(e){if(e.target===box)close();});document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});})();</script>
<footer>
  ${footerHtml(lang)}
  <div style="margin-top:.4rem;font-size:.85em;opacity:.7;">Weitere Projekte: <a href="https://punktepass.de" rel="me">PunktePass</a> · <a href="https://erepairshop.de" rel="me">Erepairshop</a> · <a href="https://diginachrichten.de" rel="me">Diginachrichten</a></div>
</footer>
</body>
</html>`;
}

async function main() {
  const start = Date.now();
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  // Filter POIs eligible for HTML generation
  const eligible = pois.filter(
    (p) => p && p.parent && p.type !== "region" && p.type !== "country" && hasIndexableContent(p)
  );
  console.log(`Eligible POIs: ${eligible.length}`);
  // POI_IDS_FILE: path to a text file (one POI id per line) → generate ONLY those POIs.
  // POI_IDS: comma-separated list of POI ids → same effect.
  // Used by the delta-deploy pipeline (scripts/deploy-poi-delta.sh) so a content
  // change (descAdv/sights/facts) regenerates only the affected pages, not all ~48K.
  let target = GEN_LIMIT > 0 ? eligible.slice(0, GEN_LIMIT) : eligible;
  const POI_IDS_FILE = process.env.POI_IDS_FILE;
  const POI_IDS_INLINE = process.env.POI_IDS;
  if (POI_IDS_FILE || POI_IDS_INLINE) {
    const idSet = new Set<string>();
    if (POI_IDS_FILE && fs.existsSync(POI_IDS_FILE)) {
      for (const line of fs.readFileSync(POI_IDS_FILE, "utf-8").split("\n")) {
        const s = line.trim();
        if (s) idSet.add(s);
      }
    }
    if (POI_IDS_INLINE) {
      for (const s of POI_IDS_INLINE.split(",")) {
        const t = s.trim();
        if (t) idSet.add(t);
      }
    }
    const before = target.length;
    target = target.filter((p) => idSet.has(p.id));
    console.log(`POI_IDS filter: ${before} → ${target.length} POIs (filter set size: ${idSet.size})`);
  }
  console.log(`Generating: ${target.length} POIs × ${SUPPORTED_LANGS.length} langs = ${target.length * SUPPORTED_LANGS.length} HTML files`);

  let written = 0;
  let skipped = 0;
  const dirsMade = new Set<string>();

  for (const poi of target) {
    // FR POIs get an additional `fr` page; DE → `tr`; HR (hr-native) → `hr`.
    const extraPoi: Lang[] = [];
    if (poi.parent?.startsWith("FR")) extraPoi.push("fr");
    if (poi.parent?.startsWith("DE")) extraPoi.push("tr");
    if ((poi as unknown as { hrLong?: boolean }).hrLong) extraPoi.push("hr");
    const poiLangs: Lang[] = [...SUPPORTED_LANGS, ...extraPoi];
    for (const lang of poiLangs) {
      const url = buildPoiPath(lang, poi);
      // URL like /de/oesterreich/wien/foo/ → relative path de/oesterreich/wien/foo
      const rel = url.replace(/^\/+/, "").replace(/\/+$/, "");
      if (!rel) { skipped++; continue; }
      const dir = path.join(OUT_DIR, rel);
      const file = path.join(dir, "index.html");
      if (!dirsMade.has(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        dirsMade.add(dir);
      }
      const html = renderHtml(poi, lang);
      if (!html) { skipped++; continue; }
      fs.writeFileSync(file, html, "utf8");
      written++;
      if (written % 5000 === 0) {
        const elapsed = (Date.now() - start) / 1000;
        console.log(`  ${written} files in ${elapsed.toFixed(1)}s (${(written / elapsed).toFixed(0)}/s)`);
      }
    }
  }

  // ---- Tier 1 sight pages (de-sight-page-v1 output) ----
  const sightPagesDir = path.resolve(process.cwd(), "public", "data", "sight-pages");
  const sightIdxFp = path.join(sightPagesDir, "_index.json");
  let sightPagesWritten = 0;
  if (fs.existsSync(sightIdxFp)) {
    const sightIdx: { host_id: string; sight_name: string; slug: string }[] = JSON.parse(fs.readFileSync(sightIdxFp, "utf-8"));
    console.log(`\nGenerating ${sightIdx.length} sight pages × langs...`);
    for (const entry of sightIdx) {
      const host = allById.get(entry.host_id);
      if (!host || !host.parent) continue;
      const dataFp = path.join(sightPagesDir, entry.host_id, entry.slug + ".json");
      if (!fs.existsSync(dataFp)) continue;
      const sightData = JSON.parse(fs.readFileSync(dataFp, "utf-8"));
      for (const lang of SUPPORTED_LANGS) {
        const url = buildPoiPath(lang, host).replace(/\/$/, "") + "/sight/" + entry.slug + "/";
        const rel = url.replace(/^\/+/, "").replace(/\/+$/, "");
        if (!rel) continue;
        const dir = path.join(OUT_DIR, rel);
        fs.mkdirSync(dir, { recursive: true });
        const html = renderSightHtml(host, sightData, lang);
        fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
        sightPagesWritten++;
      }
    }
    console.log(`Sight pages: ${sightPagesWritten} written`);
  }

  const elapsed = (Date.now() - start) / 1000;
  console.log(`\nDone: ${written + sightPagesWritten} written (POI ${written} + sight ${sightPagesWritten}), ${skipped} skipped in ${elapsed.toFixed(1)}s`);
  console.log(`Unique dirs: ${dirsMade.size}`);

  // Persist unknown-parent audit log so it's accessible after deploy
  // (served at https://plizio.com/_audit/build_warnings.json).
  try {
    const warnings: string[] = (typeof getUnknownParentWarnings === "function")
      ? (getUnknownParentWarnings() as string[])
      : [];
    const auditDir = path.join(OUT_DIR, "_audit");
    fs.mkdirSync(auditDir, { recursive: true });
    const audit = {
      generated_at: new Date().toISOString(),
      build_id: process.env.GITHUB_RUN_ID || "local",
      commit: process.env.GITHUB_SHA || "unknown",
      unknown_parents_count: warnings.length,
      unknown_parents: warnings,
    };
    fs.writeFileSync(path.join(auditDir, "build_warnings.json"), JSON.stringify(audit, null, 2), "utf8");
    console.log(`Audit: ${warnings.length} unknown parents → out/_audit/build_warnings.json`);
  } catch (e) {
    console.warn(`Audit write failed: ${(e as Error).message}`);
  }
}

// ---- Sight page renderer (Tier 1: same chrome as POI page, modern compact body) ----
function renderSightHtml(host: POI, data: any, lang: Lang): string {
  const sightName = data.sight_name || "";
  const desc = (data.descriptionAdvanced && data.descriptionAdvanced[lang]) || data.descriptionAdvanced?.de || "";
  const facts = (data.factsAdvanced && data.factsAdvanced[lang]) || data.factsAdvanced?.de || [];
  const p = data.practical || {};
  const hostName = (host.name as any)?.[lang] || (host.name as any)?.de || host.id;
  const hostUrl = buildPoiPath(lang, host);
  const countryId = getCountryId(host.parent!);
  const sightRelUrl = hostUrl.replace(/\/$/, "") + "/sight/" + data.slug + "/";
  const sightUrl = `${SITE_URL}${sightRelUrl}`;
  // Per-lang sight URL alternates (use buildPoiPath for each lang)
  const sightAlternates: Record<string, string> = Object.fromEntries(
    SUPPORTED_LANGS.map((l) => [l, `${SITE_URL}${buildPoiPath(l, host).replace(/\/$/, "")}/sight/${data.slug}/`])
  );
  const hreflangLinks = Object.entries(sightAlternates)
    .map(([l, href]) => `<link rel="alternate" hreflang="${l}" href="${href}"/>`)
    .join("\n  ");
  // Lang switcher (4 langs only, no fr/tr for now)
  const langSwitcher = SUPPORTED_LANGS.map((l) => {
    const cls = l === lang ? ' class="active"' : "";
    const href = sightAlternates[l];
    return `<a href="${href}"${cls}>${l.toUpperCase()}</a>`;
  }).join("");
  const countrySlug = countrySlugFor(lang, countryId);
  const countryName = slugs.localizedCountryName(countryId, lang);
  const ICON_COPY: Partial<Record<Lang, Record<string, string>>> = {
    de: { address: "Adresse", openingHours: "Öffnungszeiten", entranceFee: "Eintritt", website: "Webseite",
          publicTransport: "ÖPNV", parking: "Parken", accessibility: "Barrierefreiheit",
          photoRules: "Fotos", bestTimeToVisit: "Beste Zeit", audioGuide: "Audioguide",
          practical: "Praktische Informationen", facts: "Wissenswert", backToCity: "← Zurück zur Stadt" },
    hu: { address: "Cím", openingHours: "Nyitvatartás", entranceFee: "Belépő", website: "Honlap",
          publicTransport: "Tömegközlekedés", parking: "Parkolás", accessibility: "Akadálymentesség",
          photoRules: "Fotózás", bestTimeToVisit: "Legjobb idő", audioGuide: "Audioguide",
          practical: "Gyakorlati információk", facts: "Érdekességek", backToCity: "← Vissza a városhoz" },
    ro: { address: "Adresă", openingHours: "Orar", entranceFee: "Intrare", website: "Site web",
          publicTransport: "Transport public", parking: "Parcare", accessibility: "Accesibilitate",
          photoRules: "Fotografii", bestTimeToVisit: "Cel mai bun moment", audioGuide: "Ghid audio",
          practical: "Informații practice", facts: "Curiozități", backToCity: "← Înapoi la oraș" },
    en: { address: "Address", openingHours: "Opening hours", entranceFee: "Entrance fee", website: "Website",
          publicTransport: "Public transport", parking: "Parking", accessibility: "Accessibility",
          photoRules: "Photography", bestTimeToVisit: "Best time", audioGuide: "Audio guide",
          practical: "Practical info", facts: "Did you know", backToCity: "← Back to city" },
    hr: { address: "Adresa", openingHours: "Radno vrijeme", entranceFee: "Ulaznica", website: "Web stranica",
          publicTransport: "Javni prijevoz", parking: "Parking", accessibility: "Pristupačnost",
          photoRules: "Fotografiranje", bestTimeToVisit: "Najbolje vrijeme", audioGuide: "Audiovodič",
          practical: "Praktične informacije", facts: "Jeste li znali", backToCity: "← Natrag na grad" },
  };
  const c = ICON_COPY[lang] || ICON_COPY.en!;

  const ICONS: Record<string, string> = {
    address: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
    openingHours: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
    entranceFee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h18v8H3z"/><path d="M3 12h18M7 8v8M17 8v8"/></svg>`,
    website: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>`,
    publicTransport: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="14" rx="2"/><circle cx="9" cy="15" r="1.5"/><circle cx="15" cy="15" r="1.5"/><path d="M5 11h14M9 3v3M15 3v3"/></svg>`,
    parking: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M10 8h3a2.5 2.5 0 010 5h-3v3M10 8v5"/></svg>`,
    accessibility: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="1.8"/><path d="M12 7v6h4l2 4M12 13l-3 6h6"/></svg>`,
    photoRules: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="12" cy="12.5" r="3.5"/><path d="M8 6l2-2h4l2 2"/></svg>`,
    bestTimeToVisit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>`,
    audioGuide: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 11v3a8 8 0 0016 0v-3M8 11v5a2 2 0 11-4 0v-3a8 8 0 0116 0v3a2 2 0 11-4 0v-5"/></svg>`,
  };

  const renderRow = (key: string, value: string, isUrl = false) => {
    if (!value || value.trim() === "") return "";
    const icon = ICONS[key] || "";
    const valHtml = isUrl
      ? `<a href="${escapeHtml(value)}" target="_blank" rel="noopener nofollow" class="plz-sp-link">${escapeHtml(value.replace(/^https?:\/\//, ""))}</a>`
      : escapeHtml(value);
    return `<div class="plz-sp-row"><span class="plz-sp-icon" aria-hidden="true">${icon}</span><div class="plz-sp-row-body"><span class="plz-sp-row-label">${escapeHtml((c as any)[key])}</span><span class="plz-sp-row-val">${valHtml}</span></div></div>`;
  };

  const practical = [
    renderRow("address", p.address || ""),
    renderRow("openingHours", p.openingHours || ""),
    renderRow("entranceFee", p.entranceFee || ""),
    renderRow("website", p.website || "", true),
    renderRow("publicTransport", p.publicTransport || ""),
    renderRow("parking", p.parking || ""),
    renderRow("accessibility", p.accessibility || ""),
    renderRow("photoRules", p.photoRules || ""),
    renderRow("bestTimeToVisit", p.bestTimeToVisit || ""),
    renderRow("audioGuide", p.audioGuide || ""),
  ].filter(Boolean).join("");

  const factsHtml = facts && facts.length
    ? `<section class="plz-sp-facts"><h2>${escapeHtml(c.facts)}</h2><ul>${facts.map((f: string) => `<li>${escapeHtml(f)}</li>`).join("")}</ul></section>`
    : "";

  const title = `${sightName} (${hostName}) | Plizio`;
  const metaDesc = (desc || `${sightName} in ${hostName}.`).slice(0, 160);

  // Schema.org TouristAttraction with structured opening hours / address
  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: sightName,
    description: desc.slice(0, 500),
    url: sightUrl,
    containedInPlace: { "@type": "City", name: hostName, sameAs: `${SITE_URL}${hostUrl}` },
  };
  if (p.address) jsonLd.address = { "@type": "PostalAddress", streetAddress: p.address };
  if (p.openingHours) jsonLd.openingHours = p.openingHours;
  if (p.website) jsonLd.sameAs = p.website;
  if (p.entranceFee && /^free$/i.test(p.entranceFee)) jsonLd.isAccessibleForFree = true;

  // Weather widget (reuse same pattern as POI page)
  const weatherCopy: Partial<Record<Lang, { now: string; forecast: string; loading: string }>> = {
    de: { now: "Aktuell", forecast: "5-Tage-Vorhersage", loading: "Wetter…" },
    hu: { now: "Most", forecast: "5 napos előrejelzés", loading: "Időjárás…" },
    ro: { now: "Acum", forecast: "Prognoză 5 zile", loading: "Vremea…" },
    en: { now: "Now", forecast: "5-day forecast", loading: "Weather…" },
    hr: { now: "Sada", forecast: "Prognoza za 5 dana", loading: "Vrijeme…" },
  };
  const wc = weatherCopy[lang] || weatherCopy.en!;
  const weatherHtml = (host.coords && host.coords.length >= 2)
    ? `<section class="plz-weather" id="plz-weather" data-lat="${host.coords[1]}" data-lon="${host.coords[0]}" data-lang="${lang}"><p class="plz-weather-loading">${escapeHtml(wc.loading)}</p></section>
<script>(function(){var el=document.getElementById('plz-weather');if(!el)return;var lat=el.dataset.lat,lon=el.dataset.lon,lang=el.dataset.lang;var ICON=function(c){if(c===0)return'☀️';if(c<=2)return'🌤️';if(c===3)return'☁️';if(c>=45&&c<=48)return'🌫️';if(c>=51&&c<=57)return'🌦️';if(c>=61&&c<=67)return'🌧️';if(c>=71&&c<=77)return'🌨️';if(c>=80&&c<=82)return'🌧️';if(c>=85&&c<=86)return'🌨️';if(c>=95)return'⛈️';return'🌡️';};var DAYS={de:['So','Mo','Di','Mi','Do','Fr','Sa'],hu:['V','H','K','Sze','Cs','P','Szo'],ro:['Du','Lu','Ma','Mi','Jo','Vi','Sâ'],en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']};var CP={de:{now:'Aktuell',forecast:'5-Tage-Vorhersage'},hu:{now:'Most',forecast:'5 napos előrejelzés'},ro:{now:'Acum',forecast:'Prognoză 5 zile'},en:{now:'Now',forecast:'5-day forecast'}};var c=CP[lang]||CP.en;var d=DAYS[lang]||DAYS.en;fetch('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+'&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=5&timezone=auto').then(function(r){return r.json();}).then(function(j){var html='';if(j.current){html+='<div class="plz-weather-now"><span class="plz-weather-icon">'+ICON(j.current.weather_code)+'</span><div><span class="plz-weather-label">'+c.now+'</span><strong>'+Math.round(j.current.temperature_2m)+'°C</strong></div></div>';}if(j.daily){html+='<div class="plz-weather-forecast"><span class="plz-weather-label">'+c.forecast+'</span><ul>';for(var i=0;i<j.daily.time.length;i++){var dt=new Date(j.daily.time[i]);html+='<li><span>'+d[dt.getDay()]+'</span><span>'+ICON(j.daily.weather_code[i])+'</span><strong>'+Math.round(j.daily.temperature_2m_max[i])+'°</strong><span class="plz-tmin">'+Math.round(j.daily.temperature_2m_min[i])+'°</span></li>';}html+='</ul></div>';}el.innerHTML=html;}).catch(function(){el.style.display='none';});})();</script>`
    : "";

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(metaDesc)}"/>
<link rel="canonical" href="${sightUrl}"/>
${hreflangLinks}
<link rel="alternate" hreflang="x-default" href="${sightAlternates.en}"/>
<meta property="og:title" content="${escapeHtml(sightName)}"/>
<meta property="og:description" content="${escapeHtml(metaDesc)}"/>
<meta property="og:url" content="${sightUrl}"/>
<meta property="og:type" content="article"/>
${isAdSenseEligible(host, lang) ? ADSENSE_HEAD : ""}
<link rel="stylesheet" href="/poi-static/poi.css?v=20260526h"/>
<style>
.plz-sp-back{display:inline-flex;align-items:center;gap:.4rem;color:#4cc;text-decoration:none;font-size:.85rem;margin-bottom:.5rem}
.plz-sp-back:hover{color:#7df}
.plz-sp-desc{margin:1rem 0 1.2rem 0;font-size:.95rem;line-height:1.65;color:rgba(255,255,255,.85)}
.plz-sp-practical{background:linear-gradient(135deg,rgba(34,211,238,.05),rgba(34,211,238,.02));border:1px solid rgba(34,211,238,.18);border-radius:.75rem;padding:.9rem 1rem;margin:1.2rem 0}
.plz-sp-practical h2{margin:0 0 .8rem 0;font-size:.95rem;color:#4cc;text-transform:uppercase;letter-spacing:.05em;font-weight:600}
.plz-sp-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.4rem .9rem}
.plz-sp-row{display:flex;align-items:flex-start;gap:.6rem;padding:.35rem 0}
.plz-sp-icon{flex:0 0 18px;width:18px;height:18px;color:#4cc;margin-top:2px}
.plz-sp-icon svg{width:100%;height:100%;display:block}
.plz-sp-row-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
.plz-sp-row-label{font-size:.7rem;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.03em}
.plz-sp-row-val{font-size:.85rem;color:rgba(255,255,255,.92);line-height:1.4;word-break:break-word}
.plz-sp-link{color:#7df;text-decoration:none}
.plz-sp-link:hover{text-decoration:underline}
.plz-sp-facts{margin:1.2rem 0}
.plz-sp-facts h2{font-size:1rem;color:rgba(255,255,255,.9);margin:0 0 .5rem 0;font-weight:600}
.plz-sp-facts ul{margin:0;padding-left:1.2rem;color:rgba(255,255,255,.78);font-size:.88rem;line-height:1.6}
.plz-sp-facts li{margin-bottom:.3rem}
@media(max-width:640px){.plz-sp-grid{grid-template-columns:1fr}}
</style>
<script defer src="https://stats.plizio.com/script.js" data-website-id="b718db4e-ee1b-43db-a89a-af4ecc5435bf"></script>
</head>
<body>
<div class="plz-progress" id="plz-progress" aria-hidden="true"></div>
<script>(function(){var b=document.getElementById('plz-progress');if(!b)return;function u(){var s=document.documentElement;var p=s.scrollTop/(s.scrollHeight-s.clientHeight)||0;b.style.transform='scaleX('+Math.min(1,Math.max(0,p))+')';}window.addEventListener('scroll',u,{passive:true});u();})();</script>
<script>(function(){function t(n,d){if(window.umami&&window.umami.track){try{window.umami.track(n,d||{});}catch(e){}}}
// Wait for umami script to load
function ready(){if(!window.umami||!window.umami.track){setTimeout(ready,300);return;}init();}
function init(){
// Scroll depth: 25/50/75/100
var sd={25:0,50:0,75:0,100:0};window.addEventListener('scroll',function(){var s=document.documentElement;var p=Math.round(s.scrollTop/(s.scrollHeight-s.clientHeight)*100);for(var k in sd){if(p>=k&&!sd[k]){sd[k]=1;t('scroll',{depth:Number(k)});}}},{passive:true});
// Time on page (15s, 30s, 60s, 180s)
[15000,30000,60000,180000].forEach(function(ms){setTimeout(function(){t('engaged',{seconds:ms/1000});},ms);});
// Click handlers
document.addEventListener('click',function(e){
  var a=e.target.closest('a[href]');
  if(a){
    var h=a.getAttribute('href')||'';
    var ext=/^https?:[/][/]/.test(h)&&!h.includes(location.host);
    if(ext){
      var rel=(a.getAttribute('rel')||'').toLowerCase();
      var kind=rel.includes('sponsored')?'affiliate':(/wikipedia\.org/.test(h)?'wiki':(/google\.[a-z.]+[/]maps/.test(h)?'gmaps':(/openstreetmap\.org/.test(h)?'osm':(/ticketmaster|datatourisme/.test(h)?'event':'external'))));
      t('outbound',{kind:kind,url:h.slice(0,200)});
    }
  }
  var go=e.target.closest('.plz-itin-go');if(go){t('itinerary_open',{});}
  var md=e.target.closest('[data-mode]');if(md){t('itinerary_mode',{mode:md.dataset.mode});}
  var wt=e.target.closest('[data-weather]');if(wt){t('itinerary_weather',{weather:wt.dataset.weather});}
  var ics=e.target.closest('.plz-itin-ics');if(ics){t('itinerary_ics_export',{mw:ics.dataset.ics});}
  var chk=e.target.closest('.plz-itin-check');if(chk){t('stop_check',{});}
  var yh=e.target.closest('.plz-yh-card');if(yh){t('highlight_click',{});}
  var ymore=e.target.closest('.plz-yh-more');if(ymore){t('highlight_expand',{});}
  var sight=e.target.closest('.plz-sight');if(sight){t('sight_click',{});}
  var lang=e.target.closest('[data-lang-switch]');if(lang){t('lang_switch',{to:lang.dataset.langSwitch});}
});
// FAQ open (details element)
document.querySelectorAll('.plz-faq-item summary,.plz-yh-collapse summary').forEach(function(s){s.addEventListener('click',function(){var d=s.parentElement;if(!d.hasAttribute('open')){t('faq_open',{q:(s.textContent||'').slice(0,80)});}});});
}
ready();})();</script>
<header class="plz-header">
  <div class="plz-header-inner">
    <a href="/${lang}/" class="plz-logo">Plizio</a>
    <nav class="plz-nav">
      <a href="/${lang}/">${I("home", lang)}</a>
      <a href="/europe-map/">Europa</a>
    </nav>
    <div class="plz-langs">${langSwitcher}</div>
  </div>
</header>
<main>
  <nav class="plz-breadcrumb">
    <a href="/${lang}/">${I("home", lang)}</a><span>›</span>
    <a href="${buildCountryPath(lang, countryId)}">${escapeHtml(countryName)}</a><span>›</span>
    <a href="${buildStatePath(lang, host.parent!)}">${escapeHtml(host.parent!)}</a><span>›</span>
    <a href="${hostUrl}">${escapeHtml(hostName)}</a><span>›</span>
    <span>${escapeHtml(sightName)}</span>
  </nav>
  <div class="plz-title-row"><div><p class="plz-eyebrow">${escapeHtml(hostName)}</p><h1>${escapeHtml(sightName)}</h1></div></div>
  ${weatherHtml}
  ${practical ? `<section class="plz-sp-practical"><h2>${escapeHtml(c.practical)}</h2><div class="plz-sp-grid">${practical}</div></section>` : ""}
  ${desc ? `<p class="plz-sp-desc">${escapeHtml(desc)}</p>` : ""}
  ${factsHtml}
  <p><a class="plz-sp-back" href="${hostUrl}">${escapeHtml(c.backToCity)} ${escapeHtml(hostName)}</a></p>
</main>
<footer>
  ${footerHtml(lang)}
  <div style="margin-top:.4rem;font-size:.85em;opacity:.7;">Weitere Projekte: <a href="https://punktepass.de" rel="me">PunktePass</a> · <a href="https://erepairshop.de" rel="me">Erepairshop</a> · <a href="https://diginachrichten.de" rel="me">Diginachrichten</a></div>
</footer>
<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>
</body>
</html>`;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
