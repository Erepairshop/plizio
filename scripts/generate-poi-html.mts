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
import * as _poiImageOverridesNs from "../lib/seo/poiImageOverrides";
import * as _loaderNs from "./_load-full-pois";
import { renderPoiImageContribution } from "./lib/render-poi-image-contribution.mts";
import * as _poiHtmlUiNs from "../lib/seo/poi-html-ui";
const _poiHtmlUi: any = (_poiHtmlUiNs as any).default ?? _poiHtmlUiNs;
const poiHtmlUiText: typeof import("../lib/seo/poi-html-ui").poiHtmlUiText = (...args) => _poiHtmlUi.poiHtmlUiText(...args);
const poiHtmlUiSection: typeof import("../lib/seo/poi-html-ui").poiHtmlUiSection = (...args) => _poiHtmlUi.poiHtmlUiSection(...args);
const _loader: any = (_loaderNs as any).default ?? _loaderNs;
const _poiImageOverrides: any = (_poiImageOverridesNs as any).default ?? _poiImageOverridesNs;
const POI_IMAGE_OVERRIDES: Readonly<Record<string, string>> = _poiImageOverrides.POI_IMAGE_OVERRIDES;
const loadFullPois: () => Promise<POI[]> = _loader.loadFullPois;
const hasIndexableContent: (poi: POI) => boolean = _loader.hasIndexableContent;
import * as _exploreNs from "../lib/explore/explore-block";
import type { HubLang } from "../lib/seo/sightsHubs";
import * as _hubsNs from "../lib/seo/sightsHubs";
import * as _sightFilterNs from "../lib/seo/sightFilter";
import * as _deslopNs from "../lib/seo/deslop";
// Resolve via the namespace/default object and call at RUNTIME (mirror the
// _slugsNs pattern at line ~59). Capturing `_deslopNs.deSlop` at module-load
// time yielded `undefined` under the CI CJS-interop loader → "deSlop is not a
// function" (run 27836797807). A wrapper defers the property access to call time.
const _deslopMod: any = (_deslopNs as any).default ?? _deslopNs;
function deSlop(text: string, lang: string, id: string): string {
  return _deslopMod.deSlop(text, lang, id);
}
const _sf: any = (_sightFilterNs as any).default ?? _sightFilterNs;
const cleanSightsObject: (s: any, cap?: number) => { obj: any; removed: number } = _sf.cleanSightsObject;
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
  date_end?: string;
  end_date?: string;
  endDate?: string;
  image_url?: string;
  image_credit?: string;
  category?: Partial<Record<string, string>> | string;
  price?: Partial<Record<string, string>> | string;
  period?: { start_time?: string; end_time?: string; applies_on_day?: string; recurrent?: boolean; frequency?: "daily" | "weekly" | "monthly" | "yearly" } | string;
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
  const trustedOverride = POI_IMAGE_OVERRIDES[poi.id];
  if (trustedOverride) return trustedOverride;
  if (poi.image && imageExists(poi.image)) {
    const filename = poi.image.split("/").pop() || "";
    // The VPS manifest contains canonical shared/poi-images filenames. Some
    // older POIs still point at removed /geo-images/<country>/ paths; returning
    // that stale source produces a 404 and also suppresses the upload fallback.
    if (IMG_INDEX_READY && IMG_SET.has(filename)) return `/poi-images/${filename}`;
    return poi.image;
  }
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
const IT_FAQS: Record<string, FAQItem[]> = {};
const ES_FAQS: Record<string, FAQItem[]> = {};
const PT_FAQS: Record<string, FAQItem[]> = {};

// Climate sidecar — 12-month normals (mean/max temp, precip mm) per 0.5° grid
// cell (NASA POWER climatology). SSR "best time to visit" block; non-duplicate,
// universal value even for tiny POIs. Keyed by rounded cell coords.
let CLIMATE: Record<string, { tmean: (number | null)[]; tmax: (number | null)[]; precip: (number | null)[] }> = {};
try {
  const fp = path.resolve(process.cwd(), "public", "data", "poi-climate.json");
  if (fs.existsSync(fp)) CLIMATE = JSON.parse(fs.readFileSync(fp, "utf-8"));
} catch {}

// ---- Live webcams (Windy) ---------------------------------------------------
// Curated index for the "sure" tier (tourist cities, capitals, beaches): only
// POIs with an active Windy webcam within ~8 km. Embedded as a lazy self-
// refreshing player iframe (the free-tier image token expires after 10 min, so
// we must NOT bake an image URL). ToS: courtesy text + link to the webcam page.
let WEBCAMS: Record<string, { camId: number; title: string; dist_km: number; detailUrl: string }> = {};
try {
  const fp = path.resolve(process.cwd(), "public", "data", "poi-webcams.json");
  if (fs.existsSync(fp)) WEBCAMS = JSON.parse(fs.readFileSync(fp, "utf-8"));
} catch {}

// Romanization map for non-Latin sight names (Greek/Cyrillic/Georgian/CJK/…).
// Built offline with Unidecode; applied at load so de/hu/ro/en pages show a
// readable Latin form instead of raw native glyphs. Source data untouched.
let SIGHT_ROMANIZE: Record<string, string> = {};
try {
  const fp = path.resolve(process.cwd(), "public", "data", "_sight_romanize.json");
  if (fs.existsSync(fp)) SIGHT_ROMANIZE = JSON.parse(fs.readFileSync(fp, "utf-8"));
} catch {}

// City population + tier sidecar (GeoNames/Wikidata, built offline — see
// scripts/_fetch_city_population*.mts). id -> {pop, src, tier, year?}. Used for
// the visible "population" line AND tier-weighted nearby-city ordering.
let CITY_POP: Record<string, { pop: number; src: string; tier: number; year?: number | null }> = {};
try {
  const fp = path.resolve(process.cwd(), "public", "data", "_city-population.json");
  if (fs.existsSync(fp)) CITY_POP = JSON.parse(fs.readFileSync(fp, "utf-8"));
} catch {}
const popOf = (id: string): number => CITY_POP[id]?.pop ?? 0;

// Extra sights merged into THIN city POIs (OSM extraction, Vast). Record<poiId,
// Record<lang, [{name,text,category,coords}]>>. Merged at load, then the shared
// clean pass (romanize + junk + cap) runs on the combined set. Source untouched.
let SIGHTS_EXTRA: Record<string, Record<string, any[]>> = {};
try {
  const fp = path.resolve(process.cwd(), "public", "data", "_sights_extra.json");
  if (fs.existsSync(fp)) SIGHTS_EXTRA = JSON.parse(fs.readFileSync(fp, "utf-8"));
} catch {}

// ---- News index (perf) ------------------------------------------------------
// News rendering is currently disabled site-wide (SHOW_NEWS=false); only the
// stats-chip count uses it. Most POIs have NO news file, so a prebuilt id-Set
// avoids a per-page existsSync syscall, and a 1-entry cache avoids re-reading the
// same file across the 4 language renders of one POI (the main loop is poi→lang).
const SHOW_NEWS = false;
const NEWS_DIR = path.resolve(process.cwd(), "public", "data", "poi-news");
let NEWS_IDS: Set<string> = new Set();
try {
  if (fs.existsSync(NEWS_DIR)) NEWS_IDS = new Set(fs.readdirSync(NEWS_DIR).map((f) => f.replace(/\.json(\.gz)?$/, "")));
} catch {}
let _newsCacheId: string | null = null, _newsCacheCount = 0;
function newsCountFor(id: string): number {
  if (!NEWS_IDS.has(id)) return 0;
  if (_newsCacheId === id) return _newsCacheCount;
  let n = 0;
  try {
    const base = path.join(NEWS_DIR, id + ".json"), gz = base + ".gz";
    let raw: string | null = null;
    if (fs.existsSync(base)) raw = fs.readFileSync(base, "utf-8");
    else if (fs.existsSync(gz)) raw = zlib.gunzipSync(fs.readFileSync(gz)).toString("utf-8");
    if (raw) n = (JSON.parse(raw) as unknown[]).length;
  } catch {}
  _newsCacheId = id; _newsCacheCount = n;
  return n;
}
// Region lookup index (perf): O(1) instead of a linear `regions` scan 3× per page.
const REGION_BY_ID = new Map<string, POI>((regions as POI[]).map((r) => [r.id, r]));

// Pick the first STRING among [lang, en, de] from a FAQ q/a object. Some Flash
// FAQ outputs emit a non-string (array/object) for a lang → guard, else .trim()
// throws and kills the whole 152K POI HTML gen (2026-06-09 build crash).
const FAQ_HEAD: Record<string, string> = {
  de: "Häufige Fragen", hu: "Gyakori kérdések", ro: "Întrebări frecvente",
  en: "Frequently asked questions", fr: "Questions fréquentes", tr: "Sıkça sorulan sorular",
  hr: "Često postavljana pitanja", it: "Domande frequenti", es: "Preguntas frecuentes",
};
const FAQ_CHEV = `<svg class="plz-faq-chev" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;
function pickFaqStr(o: Record<string, unknown> | undefined, lang: Lang): string {
  if (!o) return "";
  for (const k of [lang, "en", "de"]) {
    const v = o[k];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return "";
}
function renderFAQ(poi: POI, lang: Lang): string {
  const items = lang === "pt" && PT_FAQS[poi.id]
    ? PT_FAQS[poi.id]
    : lang === "es" && ES_FAQS[poi.id]
    ? ES_FAQS[poi.id]
    : lang === "it" && IT_FAQS[poi.id]
      ? IT_FAQS[poi.id]
    : (lang === "hr" && HR_FAQS[poi.id]) ? HR_FAQS[poi.id] : FAQS[poi.id];
  if (!items || items.length === 0) return "";
  const heading: Record<string, string> = {
    de: "Häufige Fragen", hu: "Gyakori kérdések", ro: "Întrebări frecvente",
    en: "Frequently asked questions", fr: "Questions fréquentes", tr: "Sıkça sorulan sorular",
    hr: "Često postavljana pitanja", it: "Domande frequenti", es: "Preguntas frecuentes",
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
// A sidecar erteke lehet "<pano_id>@<heading>" (heading = a pano->cel irany
// fokban, 0-359), hogy a kamera a hely FELE nezzen (ne a parkolora/utra a
// hattal). A heading-et a distance-gate-elt re-sweep tolti (user 2026-06-15).
function svHref(lat: number, lng: number): string {
  const v = SV_OK[svKey(lat, lng)];
  const vp = `viewpoint=${lat.toFixed(6)}%2C${lng.toFixed(6)}`;
  if (typeof v === "string") {
    const at = v.lastIndexOf("@");
    const pano = at >= 0 ? v.slice(0, at) : v;
    const hdg = at >= 0 ? v.slice(at + 1) : "";
    const h = hdg && /^\d{1,3}(\.\d+)?$/.test(hdg) ? `&heading=${hdg}` : "";
    return `https://www.google.com/maps/@?api=1&map_action=pano&pano=${pano}&${vp}${h}`;
  }
  return `https://www.google.com/maps/@?api=1&map_action=pano&${vp}`;
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

// Standalone SIGHT PAGES (top-1000): a sight that has its own dedicated page
// (built by build-sight-pages.mts) — link the sight name to it (takes priority
// over the sight→POI cross-link). Key = nkey(name)|round(lat,3)|round(lng,3).
const SIGHTPAGE_SLUG: Record<string, string> = { de: "sehenswuerdigkeiten", hu: "latnivalok", ro: "obiective-turistice", en: "attractions", it: "attrazioni" };
// Beach-hub link (build-beach-hub.mts): only the 17 countries with a beach hub.
// URL = /<navLang>/<countryKey>/<bslug>/ (key == countryId for these; all 4 langs exist).
const BEACH_HUB_KEYS = new Set(["croatia","spain","france","italy","portugal","united-kingdom","greece","denmark","germany","sweden","cyprus","norway","ireland","turkey","estonia","poland","finland"]);
// Only the langs build-beach-hub.mts actually emits. `it: "spiagge"` used to be
// here, but no such page is generated — the CTA linked a 404 on Italian pages.
const BEACH_HUB_BSLUG: Record<string, string> = { de: "straende", hu: "strandok", ro: "plaje", en: "beaches" };
const BEACH_HUB_LABEL: Record<string, string> = { de: "Schönste Strände", hu: "Legszebb strandok", ro: "Cele mai frumoase plaje", en: "Most beautiful beaches", fr: "Plus belles plages", tr: "En güzel plajlar", hr: "Najljepše plaže", it: "Spiagge più belle" };
// Cross-link index, grouped by PARENT POI: { parentPoi: [{slug,lat,lng,names[]}] }.
// Matching happens WITHIN the known parent (by normalized name for Latin sights,
// else nearest coord ≤400m for non-Latin names) — far more robust than the old
// global normName|lat|lng coord-cell key that broke ~50% of links on coord drift.
type SightPageEntry = { slug: string; lat: number | null; lng: number | null; names: string[] };
let SIGHT_PAGES_BY_PARENT: Record<string, SightPageEntry[]> = {};
try {
  const spp = path.resolve(process.cwd(), "public", "data", "_sight_to_sightpage.json");
  if (fs.existsSync(spp)) SIGHT_PAGES_BY_PARENT = JSON.parse(fs.readFileSync(spp, "utf-8"));
} catch {}
function _spHavKm(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const R = 6371, dLa = ((bLat - aLat) * Math.PI) / 180, dLo = ((bLng - aLng) * Math.PI) / 180;
  const s = Math.sin(dLa / 2) ** 2 + Math.cos((aLat * Math.PI) / 180) * Math.cos((bLat * Math.PI) / 180) * Math.sin(dLo / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
}
const _spNorm = (s: string) =>
  (s || "").normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase().match(/[a-z0-9]+/g)?.join(" ") || "";
// href to the standalone sight page, derived from the parent POI's country slug
// (same scheme build-sight-pages.mts uses) so it never 404s when the parent has a page.
function sightPageHref(lang: Lang, poiId: string, names: string[], coords: unknown): string | undefined {
  const list = SIGHT_PAGES_BY_PARENT[poiId];
  if (!list || !list.length) return undefined;
  let hit: SightPageEntry | undefined;
  // 1) name match within this parent's sight pages (Latin-ish names)
  const wanted = names.map((n) => _spNorm(n)).filter(Boolean);
  if (wanted.length) hit = list.find((e) => e.names.some((n) => wanted.includes(n)));
  // 2) else nearest coord within the parent (≤400m) — handles non-Latin names
  if (!hit && Array.isArray(coords) && coords.length === 2) {
    const lat = coords[1] as number, lng = coords[0] as number;
    let best: SightPageEntry | undefined, bestKm = Infinity;
    for (const e of list) {
      if (e.lat == null || e.lng == null) continue;
      const km = _spHavKm(lat, lng, e.lat, e.lng);
      if (km < bestKm) { bestKm = km; best = e; }
    }
    if (best && bestKm <= 0.4) hit = best;
  }
  if (!hit) return undefined;
  const pp = allById.get(poiId);
  if (!pp) return undefined;
  const ppath = poiPathSafe(lang, pp);
  if (!ppath) return undefined;
  const parts = ppath.split("/").filter(Boolean); // [lang, country, ...]
  if (parts.length < 2) return undefined;
  return `/${lang}/${parts[1]}/${SIGHTPAGE_SLUG[lang]}/${hit.slug}/`;
}

// Load FULL POI data (with description/facts/advanced) directly via TS imports
// in this standalone tsx process. slugs.ts can't import these heavy files because
// the Next.js build workers would OOM, but this script runs separately with a 16GB
// heap and only Node, so it tolerates the heavy graph.
// DEDUP_BLOCK + loadFullPois moved to ./_load-full-pois (shared with build-poi-url-index
// so the pages we write and the pre-build URL index can never diverge — 2026-06-13).
let pois: POI[] = await loadFullPois();
// Drop V1/V2 duplicate cities: 46 UK POIs exist both as bare V1 (richer text) and
// `-cities-v2` (sights). We keep V1 (sights merged into its sidecar) and skip the
// V2 here so there's no duplicate page/sitemap/nearby entry. The V2's old URL is
// 301-redirected to V1 in nginx (coord-gated list, homonyms untouched).
try {
  const fp = path.resolve(process.cwd(), "public", "data", "_v1v2_skip.json");
  if (fs.existsSync(fp)) {
    const skip = new Set<string>(JSON.parse(fs.readFileSync(fp, "utf-8")));
    const before = pois.length;
    pois = pois.filter((p) => !skip.has(p.id));
    console.log(`[generate-poi-html] V1/V2 dup skip: removed ${before - pois.length} V2 POIs`);
  }
} catch {}
// Build a global id→POI lookup for cross-referencing (e.g. sight name internal links).
const allById = new Map<string, POI>(pois.filter(p => p?.id).map(p => [p.id, p]));
type Lang = "de" | "hu" | "ro" | "en" | "fr" | "tr" | "hr" | "it" | "es" | "pt";

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
        p.sights.hr = hr.sights.map((s) => ({ name: s.name, desc: s.desc, text: s.desc || "" }));
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

// Italian is country-scoped. Sidecars keep the native corpus out of the heavy
// TypeScript POI modules while exposing it through the normal language renderer.
try {
  const itDir = path.resolve(process.cwd(), "public", "data", "i18n", "it");
  if (fs.existsSync(itDir)) {
    let merged = 0;
    for (const poi of pois) {
      if (!poi.parent || slugs.getCountryIdStrict(poi.parent) !== "italy") continue;
      const itPath = path.join(itDir, `${poi.id}.json`);
      if (!fs.existsSync(itPath)) continue;
      const it = JSON.parse(fs.readFileSync(itPath, "utf-8")) as {
        name?: string; description?: string; descAdv?: string;
        descriptionAdvanced?: string; facts?: string[];
        sights?: { sourceName?: string; name?: string; desc?: string }[];
        faq?: { q: string; a: string }[];
      };
      const p = poi as unknown as Record<string, any>;
      if (it.name) { p.name = p.name || {}; p.name.it = it.name; }
      if (it.description) { p.description = p.description || {}; p.description.it = it.description; }
      const advanced = it.descriptionAdvanced || it.descAdv;
      if (advanced) { p.descriptionAdvanced = p.descriptionAdvanced || {}; p.descriptionAdvanced.it = advanced; }
      if (Array.isArray(it.facts) && it.facts.length) { p.facts = p.facts || {}; p.facts.it = it.facts; }
      if (Array.isArray(it.faq) && it.faq.length) {
        IT_FAQS[poi.id] = it.faq.map((f) => ({ q: { it: f.q }, a: { it: f.a } }));
      }
      p.itLong = true;
      merged++;
    }
    console.log(`[generate-poi-html] it-native merged into ${merged} POIs`);
  }
} catch (e: any) {
  console.log(`[generate-poi-html] it-native merge skipped: ${e?.message?.slice(0, 80)}`);
}

// Spanish is country-scoped, using the same sidecar format as Italian.
try {
  const esDir = path.resolve(process.cwd(), "public", "data", "i18n", "es");
  if (fs.existsSync(esDir)) {
    let merged = 0;
    for (const poi of pois) {
      if (!poi.parent || slugs.getCountryIdStrict(poi.parent) !== "spain") continue;
      const esPath = path.join(esDir, `${poi.id}.json`);
      if (!fs.existsSync(esPath)) continue;
      const es = JSON.parse(fs.readFileSync(esPath, "utf-8")) as {
        name?: string; description?: string; descAdv?: string;
        descriptionAdvanced?: string; facts?: string[];
        sights?: { sourceName?: string; name?: string; desc?: string }[];
        faq?: { q: string; a: string }[];
      };
      const p = poi as unknown as Record<string, any>;
      if (es.name) { p.name = p.name || {}; p.name.es = es.name; }
      if (es.description) { p.description = p.description || {}; p.description.es = es.description; }
      const advanced = es.descriptionAdvanced || es.descAdv;
      if (advanced) { p.descriptionAdvanced = p.descriptionAdvanced || {}; p.descriptionAdvanced.es = advanced; }
      if (Array.isArray(es.facts) && es.facts.length) { p.facts = p.facts || {}; p.facts.es = es.facts; }
      if (Array.isArray(es.faq) && es.faq.length) {
        ES_FAQS[poi.id] = es.faq.map((f) => ({ q: { es: f.q }, a: { es: f.a } }));
      }
      p.esLong = true;
      merged++;
    }
    console.log(`[generate-poi-html] es-native merged into ${merged} POIs`);
  }
} catch (e: any) {
  console.log(`[generate-poi-html] es-native merge skipped: ${e?.message?.slice(0, 80)}`);
}

// Portuguese is country-scoped, using the same sidecar format as Italian/Spanish.
try {
  const ptDir = path.resolve(process.cwd(), "public", "data", "i18n", "pt");
  if (fs.existsSync(ptDir)) {
    let merged = 0;
    for (const poi of pois) {
      if (!poi.parent || slugs.getCountryIdStrict(poi.parent) !== "portugal") continue;
      const ptPath = path.join(ptDir, `${poi.id}.json`);
      if (!fs.existsSync(ptPath)) continue;
      const pt = JSON.parse(fs.readFileSync(ptPath, "utf-8")) as {
        name?: string; description?: string; descAdv?: string;
        descriptionAdvanced?: string; facts?: string[];
        sights?: { sourceName?: string; name?: string; desc?: string }[];
        faq?: { q: string; a: string }[];
      };
      const p = poi as unknown as Record<string, any>;
      if (pt.name) { p.name = p.name || {}; p.name.pt = pt.name; }
      if (pt.description) { p.description = p.description || {}; p.description.pt = pt.description; }
      const advanced = pt.descriptionAdvanced || pt.descAdv;
      if (advanced) { p.descriptionAdvanced = p.descriptionAdvanced || {}; p.descriptionAdvanced.pt = advanced; }
      if (Array.isArray(pt.facts) && pt.facts.length) { p.facts = p.facts || {}; p.facts.pt = pt.facts; }
      if (Array.isArray(pt.faq) && pt.faq.length) {
        PT_FAQS[poi.id] = pt.faq.map((f) => ({ q: { pt: f.q }, a: { pt: f.a } }));
      }
      p.ptLong = true;
      merged++;
    }
    console.log(`[generate-poi-html] pt-native merged into ${merged} POIs`);
  }
} catch (e: any) {
  console.log(`[generate-poi-html] pt-native merge skipped: ${e?.message?.slice(0, 80)}`);
}

// Merge OSM-extra sights (public/data/_sights_extra.json) into THIN POIs that
// have few/no sights. Existing sights first, then non-duplicate extras appended
// per lang. The clean pass below then romanizes + caps the combined set.
if (Object.keys(SIGHTS_EXTRA).length) {
  const _norm = (s: string) => (s || "").normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
  let filled = 0;
  for (const poi of pois) {
    const ex = SIGHTS_EXTRA[poi.id];
    if (!ex) continue;
    const p = poi as unknown as { sights?: Record<string, any[]> };
    p.sights = p.sights || {};
    let touched = false;
    for (const l of Object.keys(ex)) {
      const cur = Array.isArray(p.sights[l]) ? p.sights[l] : [];
      const seen = new Set(cur.map((s: any) => _norm(typeof s?.name === "string" ? s.name : "")));
      const add = ex[l].filter((s: any) => { const k = _norm(s?.name); return k && !seen.has(k); });
      if (add.length) { p.sights[l] = cur.concat(add); touched = true; }
    }
    if (touched) filled++;
  }
  console.log(`[generate-poi-html] OSM-extra sights merged into ${filled} thin POIs`);
}

// Clean sights at load time: drop junk (playgrounds, pools, reservoirs, parking,
// numbered series) AND cap each category to 3 per POI (variety over bloat). Done
// index-consistently across langs so name-variant alignment survives. Source data
// untouched; render-time filter only (see lib/seo/sightFilter.cleanSightsObject).
{
  const CAP = 3;
  let removed = 0, poisHit = 0, romanized = 0;
  const haveRoman = Object.keys(SIGHT_ROMANIZE).length > 0;
  for (const poi of pois) {
    const p = poi as unknown as { sights?: Record<string, any[]> };
    if (!p.sights || typeof p.sights !== "object") continue;
    // 1) romanize non-Latin sight names (in place) so de/hu/ro/en stay readable
    if (haveRoman) {
      for (const l of Object.keys(p.sights)) {
        const arr = p.sights[l];
        if (!Array.isArray(arr)) continue;
        for (const s of arr) {
          const r = s && typeof s.name === "string" ? SIGHT_ROMANIZE[s.name] : undefined;
          if (r) { s.name = r; romanized++; }
        }
      }
    }
    // 2) drop junk + cap categories
    const { obj, removed: rem } = cleanSightsObject(p.sights, CAP);
    if (rem > 0) { p.sights = obj; removed += rem; poisHit++; }
  }
  console.log(`[generate-poi-html] sight clean: romanized ${romanized} names; junk+cap${CAP} removed ${removed} across ${poisHit} POIs`);
}

// Native sight translations are extracted from the already-cleaned English HTML.
// Merge them after the common clean pass so translated cards retain coordinates,
// categories, Street View availability and internal-link metadata from the source.
for (const [lang, countryId] of [["it", "italy"], ["es", "spain"], ["pt", "portugal"]] as const) {
  const dir = path.resolve(process.cwd(), "public", "data", "i18n", lang);
  if (!fs.existsSync(dir)) continue;
  let merged = 0;
  const norm = (value: unknown) => String(value || "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
  for (const poi of pois) {
    // Country id, not an ISO prefix: PT POIs sit under `PT`, `portugal`,
    // `city-lisboa`, `reg-algarve`… so a prefix test dropped a third of them.
    if (!poi.parent || slugs.getCountryIdStrict(poi.parent) !== countryId) continue;
    const file = path.join(dir, `${poi.id}.json`);
    if (!fs.existsSync(file)) continue;
    const native = JSON.parse(fs.readFileSync(file, "utf-8")) as {
      sights?: { sourceName?: string; name?: string; desc?: string }[];
    };
    if (!Array.isArray(native.sights) || !native.sights.length) continue;
    const p = poi as unknown as { sights?: Record<string, any[]> };
    const source = p.sights?.en || p.sights?.de || [];
    const byName = new Map(source.map((s: any) => [norm(s?.name), s]));
    p.sights ||= {};
    p.sights[lang] = native.sights.map((translated, index) => {
      const base = byName.get(norm(translated.sourceName)) || source[index] || {};
      return {
        ...base,
        name: translated.name || base.name || translated.sourceName || "",
        text: translated.desc || base.text || "",
      };
    });
    merged++;
  }
  console.log(`[generate-poi-html] ${lang}-native sights merged into ${merged} POIs`);
}

// Fill only genuinely empty sight descriptions. The compact override is produced
// from a rendered-page audit, so core POI modules remain untouched and reruns are deterministic.
try {
  const overridePath = path.resolve(process.cwd(), "public", "data", "sight-description-overrides.json");
  if (fs.existsSync(overridePath)) {
    const overrides: Record<string, Array<{ sourceName?: string; text?: Record<string, string> }>> =
      JSON.parse(fs.readFileSync(overridePath, "utf-8"));
    const norm = (value: unknown) => String(value || "").normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
    let filled = 0;
    for (const poi of pois) {
      const additions = overrides[poi.id];
      const sightSets = (poi as unknown as { sights?: Record<string, any[]> }).sights;
      if (!additions?.length || !sightSets) continue;
      const source = sightSets.en || sightSets.de || [];
      for (const addition of additions) {
        const sourceIndex = source.findIndex((s: any) => norm(s?.name) === norm(addition.sourceName));
        if (sourceIndex < 0) continue;
        for (const [lang, description] of Object.entries(addition.text || {})) {
          const item = sightSets[lang]?.[sourceIndex];
          if (!item || item.text) continue;
          item.text = description;
          filled++;
        }
      }
    }
    console.log(`[generate-poi-html] filled ${filled} missing sight descriptions from overrides`);
  }
} catch (e: any) {
  console.log(`[generate-poi-html] sight description overrides skipped: ${e?.message?.slice(0, 100)}`);
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
    it: ["Attrazioni", "Mappa", "Meteo", "Notizie", "Storia"],
    es: ["Lugares de interés", "Mapa", "Tiempo", "Noticias", "Historia"],
  },
  castle: {
    de: ["Burg", "Geschichte", "Karte", "Fotos", "Wetter"],
    hu: ["Vár", "Történelem", "Térkép", "Fotók", "Időjárás"],
    ro: ["Castel", "Istorie", "Hartă", "Fotografii", "Vremea"],
    en: ["Castle", "History", "Map", "Photos", "Weather"],
    fr: ["Château", "Histoire", "Carte", "Photos", "Météo"],
    tr: ["Kale", "Tarih", "Harita", "Fotoğraflar", "Hava durumu"],
    hr: ["Dvorac", "Povijest", "Karta", "Fotografije", "Vrijeme"],
    it: ["Castello", "Storia", "Mappa", "Foto", "Meteo"],
    es: ["Castillo", "Historia", "Mapa", "Fotos", "Tiempo"],
  },
  mountain: {
    de: ["Wandern", "Karte", "Wetter", "Fotos", "Höhe"],
    hu: ["Túrázás", "Térkép", "Időjárás", "Fotók", "Magasság"],
    ro: ["Drumeții", "Hartă", "Vremea", "Fotografii", "Altitudine"],
    en: ["Hiking", "Map", "Weather", "Photos", "Elevation"],
    fr: ["Randonnée", "Carte", "Météo", "Photos", "Altitude"],
    tr: ["Yürüyüş", "Harita", "Hava durumu", "Fotoğraflar", "Yükseklik"],
    hr: ["Planinarenje", "Karta", "Vrijeme", "Fotografije", "Visina"],
    it: ["Escursioni", "Mappa", "Meteo", "Foto", "Altitudine"],
    es: ["Senderismo", "Mapa", "Tiempo", "Fotos", "Altitud"],
  },
  lake: {
    de: ["Strände", "Karte", "Wetter", "Sehenswürdigkeiten", "Fotos"],
    hu: ["Strandok", "Térkép", "Időjárás", "Látnivalók", "Fotók"],
    ro: ["Plaje", "Hartă", "Vremea", "Obiective", "Fotografii"],
    en: ["Beaches", "Map", "Weather", "Sights", "Photos"],
    fr: ["Plages", "Carte", "Météo", "Sites", "Photos"],
    tr: ["Plajlar", "Harita", "Hava durumu", "Gezilecek yerler", "Fotoğraflar"],
    hr: ["Plaže", "Karta", "Vrijeme", "Znamenitosti", "Fotografije"],
    it: ["Spiagge", "Mappa", "Meteo", "Attrazioni", "Foto"],
    es: ["Playas", "Mapa", "Tiempo", "Lugares de interés", "Fotos"],
  },
  river: {
    de: ["Karte", "Verlauf", "Sehenswürdigkeiten", "Wetter", "Fotos"],
    hu: ["Térkép", "Folyamatos", "Látnivalók", "Időjárás", "Fotók"],
    ro: ["Hartă", "Curs", "Obiective", "Vremea", "Fotografii"],
    en: ["Map", "Course", "Sights", "Weather", "Photos"],
    fr: ["Carte", "Cours", "Sites", "Météo", "Photos"],
    tr: ["Harita", "Akış", "Gezilecek yerler", "Hava durumu", "Fotoğraflar"],
    hr: ["Karta", "Tok", "Znamenitosti", "Vrijeme", "Fotografije"],
    it: ["Mappa", "Corso", "Attrazioni", "Meteo", "Foto"],
    es: ["Mapa", "Recorrido", "Lugares de interés", "Tiempo", "Fotos"],
  },
  historical: {
    de: ["Geschichte", "Karte", "Sehenswürdigkeiten", "Fotos", "Besuch"],
    hu: ["Történelem", "Térkép", "Látnivalók", "Fotók", "Látogatás"],
    ro: ["Istorie", "Hartă", "Obiective", "Fotografii", "Vizită"],
    en: ["History", "Map", "Sights", "Photos", "Visit"],
    fr: ["Histoire", "Carte", "Sites", "Photos", "Visite"],
    tr: ["Tarih", "Harita", "Gezilecek yerler", "Fotoğraflar", "Ziyaret"],
    hr: ["Povijest", "Karta", "Znamenitosti", "Fotografije", "Posjet"],
    it: ["Storia", "Mappa", "Attrazioni", "Foto", "Visita"],
    es: ["Historia", "Mapa", "Lugares de interés", "Fotos", "Visita"],
  },
  landmark: {
    de: ["Sehenswürdigkeiten", "Karte", "Fotos", "Geschichte", "Wetter"],
    hu: ["Látnivalók", "Térkép", "Fotók", "Történelem", "Időjárás"],
    ro: ["Obiective", "Hartă", "Fotografii", "Istorie", "Vremea"],
    en: ["Sights", "Map", "Photos", "History", "Weather"],
    fr: ["Sites touristiques", "Carte", "Photos", "Histoire", "Météo"],
    tr: ["Gezilecek yerler", "Harita", "Fotoğraflar", "Tarih", "Hava durumu"],
    hr: ["Znamenitosti", "Karta", "Fotografije", "Povijest", "Vrijeme"],
    it: ["Attrazioni", "Mappa", "Foto", "Storia", "Meteo"],
    es: ["Lugares de interés", "Mapa", "Fotos", "Historia", "Tiempo"],
  },
  nature: {
    de: ["Karte", "Wetter", "Wandern", "Fotos", "Natur"],
    hu: ["Térkép", "Időjárás", "Túrázás", "Fotók", "Természet"],
    ro: ["Hartă", "Vremea", "Drumeții", "Fotografii", "Natură"],
    en: ["Map", "Weather", "Hiking", "Photos", "Nature"],
    fr: ["Carte", "Météo", "Randonnée", "Photos", "Nature"],
    tr: ["Harita", "Hava durumu", "Yürüyüş", "Fotoğraflar", "Doğa"],
    hr: ["Karta", "Vrijeme", "Planinarenje", "Fotografije", "Priroda"],
    it: ["Mappa", "Meteo", "Escursioni", "Foto", "Natura"],
    es: ["Mapa", "Tiempo", "Senderismo", "Fotos", "Naturaleza"],
  },
};
const TYPE_ALIAS: Record<string, string> = {
  "state-capital": "city", town: "city", village: "city",
  fort: "castle", peak: "mountain", hill: "mountain",
  forest: "nature", island: "nature", sea: "nature", bay: "nature",
};

// Content-aware title keywords: drop a keyword from the title if the page does
// NOT actually have that feature (don't promise "Wetter"/"Nachrichten" on a page
// without them — hurts relevance + CTR), and surface "Events" only when there
// are dated events. Words match the curated TITLE_KEYWORDS entries per lang.
const FEATURE_KW: Record<"sights" | "weather" | "news" | "events", Partial<Record<Lang, string>>> = {
  sights: { de: "Sehenswürdigkeiten", hu: "Látnivalók", ro: "Obiective turistice", en: "Sights", fr: "Sites touristiques", tr: "Gezilecek yerler", hr: "Znamenitosti", it: "Attrazioni", es: "Lugares de interés" },
  weather: { de: "Wetter", hu: "Időjárás", ro: "Vremea", en: "Weather", fr: "Météo", tr: "Hava durumu", hr: "Vrijeme", it: "Meteo", es: "Tiempo" },
  news: { de: "Nachrichten", hu: "Hírek", ro: "Știri", en: "News", fr: "Actualités", tr: "Haberler", hr: "Vijesti", it: "Notizie", es: "Noticias" },
  events: { de: "Veranstaltungen", hu: "Programok", ro: "Evenimente", en: "Events", fr: "Événements", tr: "Etkinlikler", hr: "Događanja", it: "Eventi", es: "Eventos" },
};
type TitleFeats = { hasSights?: boolean; hasWeather?: boolean; hasNews?: boolean; hasEvents?: boolean };

// PlizioGo POI ID set — these get "PlizioGo" branding instead of "Plizio Visual Lab".
const PLIZIOGO_SET: Set<string> = (() => {
  try {
    const p = path.resolve(process.cwd(), "scripts", "_pliziogo_slugs.json");
    return new Set(JSON.parse(fs.readFileSync(p, "utf-8")) as string[]);
  } catch { return new Set(); }
})();

// Curated keyword list for a POI, filtered to what the page actually offers.
function titleKeywords(poi: POI, lang: Lang, feats?: TitleFeats): string[] {
  const bucket = TYPE_ALIAS[poi.type] || (TITLE_KEYWORDS[poi.type] ? poi.type : "landmark");
  let kw = (TITLE_KEYWORDS[bucket]?.[lang] || TITLE_KEYWORDS.landmark[lang] || TITLE_KEYWORDS.landmark.en!).slice();
  if (feats) {
    const drop = new Set<string>();
    if (feats.hasSights === false) { const w = FEATURE_KW.sights[lang]; if (w) drop.add(w); }
    if (!feats.hasWeather) { const w = FEATURE_KW.weather[lang]; if (w) drop.add(w); }
    if (!feats.hasNews) { const w = FEATURE_KW.news[lang]; if (w) drop.add(w); }
    if (drop.size) kw = kw.filter((k) => !drop.has(k));
    const evW = FEATURE_KW.events[lang];
    if (feats.hasEvents && evW && !kw.includes(evW)) kw = [kw[0], evW, ...kw.slice(1)].filter(Boolean) as string[];
    if (kw.length === 0) kw = (TITLE_KEYWORDS[bucket]?.[lang] || TITLE_KEYWORDS.landmark.en!).slice();
  }
  return kw;
}

function buildPoiTitle(name: string, poi: POI, lang: Lang, feats?: TitleFeats): string {
  const kw = titleKeywords(poi, lang, feats);
  // State name: try region lookup; fall back to poi.parent
  let stateName = "";
  const parent = poi.parent || "";
  const r = REGION_BY_ID.get(parent);
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

// hasIndexableContent moved to ./_load-full-pois (shared with build-poi-url-index).

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

// Keyword-optimized meta description. When real prose exists, front-load the
// entity name (primary keyword) so Google's snippet leads with it; otherwise
// fall back to a concise, content-aware keyword line (region + offered features)
// rather than a bare "Name — type". Lang-aware via titleKeywords/FEATURE_KW.
function buildMetaDesc(
  name: string, poi: POI, lang: Lang, descText: unknown, regionName: string, feats: TitleFeats,
): string {
  const text = typeof descText === "string" ? descText.trim() : "";
  if (text.length >= 60) {
    const head = text.slice(0, name.length + 1).toLowerCase();
    const lead = head.startsWith(name.toLowerCase()) ? text : `${name}: ${text}`;
    return smartMetaDesc(lead, lead);
  }
  // Thin/empty prose → keyword-rich templated line (only advertises real features).
  const kws = titleKeywords(poi, lang, feats).slice(0, 4).join(", ");
  const place = regionName && regionName.toLowerCase() !== name.toLowerCase() ? `${name}, ${regionName}` : name;
  return smartMetaDesc(`${place}: ${kws} — Plizio`, `${name} — ${T(poi.type, lang)}`);
}

// Data-grounded W-question FAQ (Wo/Was/Wann/Warum) — targets Google "People Also
// Ask" / featured snippets. Every Q is generated ONLY when its source data exists
// (region, ≥2 sights, climate cell, description), so no thin/empty answers. The
// "{Name}: <question>?" form sidesteps per-language case/grammar pitfalls.
const AUTO_FAQ: Record<string, {
  whereQ: (n: string) => string; whereA: (n: string, loc: string) => string;
  whatQ: (n: string) => string; whatA: (list: string) => string;
  whenQ: (n: string) => string; whenA: (best: string) => string;
  whyQ: (n: string) => string;
}> = {
  de: { whereQ: (n) => `${n}: Wo liegt es?`, whereA: (n, l) => `${n} liegt in ${l}.`, whatQ: (n) => `${n}: Was kann man sehen?`, whatA: (l) => `Zu den Sehenswürdigkeiten zählen ${l}.`, whenQ: (n) => `${n}: Wann ist die beste Reisezeit?`, whenA: (b) => `Am angenehmsten reist du im Zeitraum ${b}.`, whyQ: (n) => `${n}: Warum einen Besuch wert?` },
  hu: { whereQ: (n) => `${n}: hol található?`, whereA: (n, l) => `${n} itt található: ${l}.`, whatQ: (n) => `${n}: mit érdemes megnézni?`, whatA: (l) => `A fő látnivalók: ${l}.`, whenQ: (n) => `${n}: mikor a legjobb odautazni?`, whenA: (b) => `A legkellemesebb időszak: ${b}.`, whyQ: (n) => `${n}: miért érdemes meglátogatni?` },
  ro: { whereQ: (n) => `${n}: unde se află?`, whereA: (n, l) => `${n} se află în ${l}.`, whatQ: (n) => `${n}: ce poți vizita?`, whatA: (l) => `Printre obiective se numără ${l}.`, whenQ: (n) => `${n}: când este cea mai bună perioadă?`, whenA: (b) => `Cea mai plăcută perioadă este ${b}.`, whyQ: (n) => `${n}: de ce merită vizitat?` },
  en: { whereQ: (n) => `${n}: where is it located?`, whereA: (n, l) => `${n} is located in ${l}.`, whatQ: (n) => `${n}: what is there to see?`, whatA: (l) => `Highlights include ${l}.`, whenQ: (n) => `${n}: when is the best time to visit?`, whenA: (b) => `The most pleasant time to visit is ${b}.`, whyQ: (n) => `${n}: why is it worth visiting?` },
  fr: { whereQ: (n) => `${n} : où se situe-t-il ?`, whereA: (n, l) => `${n} se situe en ${l}.`, whatQ: (n) => `${n} : que voir ?`, whatA: (l) => `Parmi les sites : ${l}.`, whenQ: (n) => `${n} : quelle est la meilleure période ?`, whenA: (b) => `La période la plus agréable est ${b}.`, whyQ: (n) => `${n} : pourquoi visiter ?` },
  tr: { whereQ: (n) => `${n}: nerede yer alıyor?`, whereA: (n, l) => `${n}, ${l} bölgesinde yer alır.`, whatQ: (n) => `${n}: nereler gezilir?`, whatA: (l) => `Öne çıkanlar: ${l}.`, whenQ: (n) => `${n}: en iyi ziyaret zamanı nedir?`, whenA: (b) => `En keyifli dönem: ${b}.`, whyQ: (n) => `${n}: neden ziyaret edilmeli?` },
  hr: { whereQ: (n) => `${n}: gdje se nalazi?`, whereA: (n, l) => `${n} se nalazi u ${l}.`, whatQ: (n) => `${n}: što vidjeti?`, whatA: (l) => `Među znamenitostima su ${l}.`, whenQ: (n) => `${n}: kada je najbolje posjetiti?`, whenA: (b) => `Najugodnije je razdoblje ${b}.`, whyQ: (n) => `${n}: zašto posjetiti?` },
  it: { whereQ: (n) => `${n}: dove si trova?`, whereA: (n, l) => `${n} si trova in ${l}.`, whatQ: (n) => `${n}: cosa vedere?`, whatA: (l) => `Tra le attrazioni principali ci sono ${l}.`, whenQ: (n) => `${n}: qual è il periodo migliore?`, whenA: (b) => `Il periodo più piacevole per una visita è ${b}.`, whyQ: (n) => `${n}: perché vale la pena visitarlo?` },
  es: { whereQ: (n) => `${n}: ¿dónde está?`, whereA: (n, l) => `${n} se encuentra en ${l}.`, whatQ: (n) => `${n}: ¿qué se puede ver?`, whatA: (l) => `Entre los lugares destacados se encuentran ${l}.`, whenQ: (n) => `${n}: ¿cuál es la mejor época para visitarlo?`, whenA: (b) => `La época más agradable para visitarlo es ${b}.`, whyQ: (n) => `${n}: ¿por qué merece una visita?` },
};

function buildAutoFaq(
  poi: POI, lang: Lang, name: string, regionName: string, countryName: string,
  descText: unknown, sightNames: string[],
): Array<{ q: string; a: string }> {
  const fallback = AUTO_FAQ[lang] || AUTO_FAQ.en;
  const t = {
    whereQ: (n: string) => poiHtmlUiText(lang, "autoFaq.whereQ", fallback.whereQ(n), { name: n }),
    whereA: (n: string, loc: string) => poiHtmlUiText(lang, "autoFaq.whereA", fallback.whereA(n, loc), { name: n, location: loc }),
    whatQ: (n: string) => poiHtmlUiText(lang, "autoFaq.whatQ", fallback.whatQ(n), { name: n }),
    whatA: (list: string) => poiHtmlUiText(lang, "autoFaq.whatA", fallback.whatA(list), { list }),
    whenQ: (n: string) => poiHtmlUiText(lang, "autoFaq.whenQ", fallback.whenQ(n), { name: n }),
    whenA: (best: string) => poiHtmlUiText(lang, "autoFaq.whenA", fallback.whenA(best), { best }),
    whyQ: (n: string) => poiHtmlUiText(lang, "autoFaq.whyQ", fallback.whyQ(n), { name: n }),
  };
  const out: Array<{ q: string; a: string }> = [];
  const loc = (regionName && regionName.toLowerCase() !== name.toLowerCase()) ? `${regionName}, ${countryName}` : countryName;
  if (loc) out.push({ q: t.whereQ(name), a: t.whereA(name, loc) });
  const top = (sightNames || []).filter(Boolean).slice(0, 3);
  if (top.length >= 2) out.push({ q: t.whatQ(name), a: t.whatA(top.join(", ")) });
  const best = climateBestStr(poi, lang);
  if (best) out.push({ q: t.whenQ(name), a: t.whenA(best) });
  const ft = typeof descText === "string" ? descText.trim() : "";
  if (ft.length > 50) {
    const m = ft.match(/^.*?[.!?](\s|$)/);
    const sentence = smartMetaDesc((m ? m[0] : ft).trim(), "", 280);
    if (sentence.length > 40) out.push({ q: t.whyQ(name), a: sentence });
  }
  return out;
}

function getPoiAlternates(poi: POI): Record<string, string> {
  // Include every native/targeted language available for this POI.
  const langs: Lang[] = [
    ...SUPPORTED_LANGS,
    ...slugs.extraLangsFor(poi as any) as Lang[],
  ];
  return Object.fromEntries(langs.map((l) => [l, `${SITE_URL}${buildPoiPath(l, poi)}`]));
}

// Pre-index POIs by parent ONCE (built lazily) so getRelatedPois is O(siblings)
// instead of scanning all ~48K POIs per page (which was O(n²) over the full build).
let _poisByParent: Map<string, POI[]> | null = null;
let _relatedCachePoiId = "";
const _relatedCache = new Map<number, POI[]>();
function getRelatedPois(poi: POI, limit = 6): POI[] {
  if (!poi.parent) return [];
  if (_relatedCachePoiId !== poi.id) {
    _relatedCachePoiId = poi.id;
    _relatedCache.clear();
  }
  const cached = _relatedCache.get(limit);
  if (cached) return cached;
  if (!_poisByParent) {
    _poisByParent = new Map();
    for (const p of pois) {
      if (!p || !p.parent || p.type === "region" || p.type === "country") continue;
      let arr = _poisByParent.get(p.parent);
      if (!arr) { arr = []; _poisByParent.set(p.parent, arr); }
      arr.push(p);
    }
  }
  // Sort by PROXIMITY within the same-parent pool, so the "Städte in der Nähe"
  // related cards are genuinely the nearest region cities (Lauingen → Dillingen,
  // Gundelfingen …) rather than arbitrary big siblings (Nürnberg/Regensburg).
  // POIs without coords sink to the end (Infinity).
  const c0 = coordLatLon(poi.coords);
  const distOf = (p: POI) => {
    const c = coordLatLon(p.coords);
    if (!c0 || !c) return Infinity;
    return haversineKm(c0[0], c0[1], c[0], c[1]);
  };
  // Take the nearest siblings, then — if any of them carry a population — surface
  // the most significant ones first (a traveler cares more about the bigger nearby
  // city than the closest hamlet). Pure proximity is kept when no population data
  // exists in the pool (e.g. landmark-only regions). (city-population wiring 2026-06-17)
  const nearest = (_poisByParent.get(poi.parent) || [])
    .filter((p) => p.id !== poi.id)
    .sort((a, b) => distOf(a) - distOf(b))
    .slice(0, Math.max(limit * 4, 24));
  if (nearest.some((p) => popOf(p.id) > 0)) {
    nearest.sort((a, b) => (popOf(b.id) - popOf(a.id)) || (distOf(a) - distOf(b)));
  }
  const result = nearest.slice(0, limit);
  _relatedCache.set(limit, result);
  return result;
}

// Normalize generated POI GeoJSON coordinates from [lon, lat] to [lat, lon].
// A former Europe-shaped heuristic created false cross-continent neighbours.
function coordLatLon(c: unknown): [number, number] | null {
  if (!Array.isArray(c) || c.length < 2) return null;
  const a = Number(c[0]), b = Number(c[1]);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  if (Math.abs(a) > 180 || Math.abs(b) > 90) return null;
  return [b, a]; // generated POIs consistently use GeoJSON [lon, lat]
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
    // Arva-parent POI-t (ismeretlen parent -> germany-fallback path) NE ajanljon
    // nearby-kent: az oldala nem generalodik (lasd eligible filter), igy 404 lenne.
    if (!p.parent || slugs.getCountryIdStrict(p.parent) == null) continue;
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
// Junk numbered-series filter: OSM bulk imports drop dozens of near-identical
// numbered nodes as "sights" (Neckar-Enz-Stellung Bunker 301/302…, Mirador 5,
// Quizfrage 4, Mound 60…). Collapse by number-stripped prefix; a prefix with
// >=4 numbered members is a junk series → drop all its members. (user 2026-06-15)
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
function junkSeriesSet(arr: { name?: unknown }[]): Set<string> {
  const c = new Map<string, number>();
  for (const x of arr || []) { const p = sightSeriesPrefix(x?.name); if (p) c.set(p, (c.get(p) || 0) + 1); }
  const s = new Set<string>();
  for (const [p, n] of c) if (n >= 4) s.add(p);
  return s;
}

// Bare street-name junk: OSM dumps residential streets as "sights" (Berliner
// Straße, Krokusweg…). Only drop when a POI has a CLUSTER (>=5) of them — isolated
// ones may be famous boulevards. Keep named POIs on a street (Spielplatz X-Straße)
// and well-known tourist streets (Philosophenweg, Königsallee…). (user 2026-06-15)
const _STREET_SUF = /(stra(ß|ss)e|gasse|\w{2,}weg|allee)\s*$/i;
const _STREET_KEEP = /(spielplatz|bolzplatz|spielpark|spielwiese|liegewiese|grillplatz|bade(platz|stelle)|kinderspiel|kindergarten|kita|kindertage|schule|gymnasium|hochschule|kirche|kapelle|\bdom\b|kloster|synagoge|moschee|museum|galerie|\bbad\b|schwimmbad|freibad|hallenbad|therme|\bpark\b|garten|friedhof|sportplatz|stadion|\bhalle\b|bahnhof|haltestelle|\bmarkt|rathaus|brunnen|denkmal|mahnmal|\bturm|\bburg\b|schloss|theater|kino|bibliothek|b(ü|ue)cherei|zentrum|center|klinik|krankenhaus|apotheke|hotel|restaurant|gasthof|gasthaus|tierpark|\bzoo\b|minigolf|skatepark|jugend|feuerwehr|parkplatz|naturbade|aussicht)/i;
const _STREET_FAMOUS = /(philosophenweg|k(ö|oe)nigsallee|kurf(ü|ue)rstendamm|ku.?damm|maximilianstra(ß|ss)e|reeperbahn|jungfernstieg|m(ö|oe)nckebergstra(ß|ss)e|neuer wall|schlossallee|prachtstra(ß|ss)e|theatinerstra(ß|ss)e|residenzstra(ß|ss)e|k(ä|ae)rntner|mariahilfer|getreidegasse|schildergasse|hohe stra(ß|ss)e|leopoldstra(ß|ss)e|k(ö|oe)nigstra(ß|ss)e|kr(ä|ae)merbr(ü|ue)cke|deichstra(ß|ss)e|prinzregentenstra(ß|ss)e)/i;
function isBareStreet(name: unknown): boolean {
  if (typeof name !== "string") return false;
  const n = name.trim();
  if (!n || _STREET_KEEP.test(n) || _STREET_FAMOUS.test(n)) return false;
  return _STREET_SUF.test(n);
}
function hasStreetCluster(arr: { name?: unknown }[]): boolean {
  let c = 0;
  for (const x of arr || []) if (isBareStreet(x?.name)) { if (++c >= 5) return true; }
  return false;
}

// AI-citeable "key facts" strip (GEO): data-derived, deterministic snapshot the
// LLMs can lift to answer "what/where/what to see". Built from existing structured
// fields only (no generation). Missing fields are dropped gracefully. (user 2026-06-15)
const _KEYFACTS_LABELS: Record<string, { loc: string; sights: string; near: string; pop: string }> = {
  de: { loc: "Lage", sights: "Top-Sehenswürdigkeiten", near: "In der Nähe", pop: "Einwohner" },
  hu: { loc: "Elhelyezkedés", sights: "Fő látnivalók", near: "A közelben", pop: "Lakosság" },
  ro: { loc: "Locație", sights: "Atracții principale", near: "În apropiere", pop: "Populație" },
  en: { loc: "Location", sights: "Top sights", near: "Nearby", pop: "Population" },
  fr: { loc: "Situation", sights: "À voir", near: "À proximité", pop: "Population" },
  tr: { loc: "Konum", sights: "Başlıca yerler", near: "Yakında", pop: "Nüfus" },
  hr: { loc: "Lokacija", sights: "Znamenitosti", near: "U blizini", pop: "Stanovništvo" },
  it: { loc: "Posizione", sights: "Luoghi principali", near: "Nelle vicinanze", pop: "Popolazione" },
};
function renderKeyFacts(
  poi: POI, lang: Lang, countryName: string,
  topSights: string[], nearby: { name: string; km: number } | null,
): string {
  const L = poiHtmlUiSection(lang, "keyfacts", _KEYFACTS_LABELS[lang] || _KEYFACTS_LABELS.en);
  const rows: string[] = [];
  // Location: region (if a known region parent) + country
  const r = REGION_BY_ID.get(poi.parent || "");
  const regionName = r ? ((r.name as Record<string, string>)?.[lang] || (r.name as Record<string, string>)?.de || "") : "";
  const locParts = [regionName, countryName].filter(Boolean);
  if (locParts.length) rows.push(`<li><strong>${L.loc}:</strong> ${escapeHtml(locParts.join(", "))}</li>`);
  const ts = topSights.filter((s) => typeof s === "string" && s.trim()).slice(0, 3);
  if (ts.length >= 2) rows.push(`<li><strong>${L.sights}:</strong> ${escapeHtml(ts.join(" · "))}</li>`);
  if (nearby && nearby.name) rows.push(`<li><strong>${L.near}:</strong> ${escapeHtml(nearby.name)} (${Math.round(nearby.km)} km)</li>`);
  const popInline = (poi as { population?: unknown }).population;
  const cp = CITY_POP[poi.id];
  const popVal = (typeof popInline === "number" && popInline > 0) ? popInline : (cp?.pop || 0);
  if (popVal > 0) {
    // year shown only for sidecar-sourced figures (inline source carries no year)
    const yr = (typeof popInline === "number" && popInline > 0) ? null : (cp?.year || null);
    const yrTxt = yr ? ` <span style="opacity:.65;font-size:.85em">(${yr})</span>` : "";
    rows.push(`<li><strong>${L.pop}:</strong> ~${popVal.toLocaleString("de-DE")}${yrTxt}</li>`);
  }
  if (rows.length < 2) return ""; // not enough atoms to be worth a strip
  return `<section class="plz-keyfacts"><ul>${rows.join("")}</ul></section>`;
}

let _nearbyCachePoiId = "";
const _nearbyCache = new Map<string, { p: POI; km: number }[]>();
function getNearbyPois(poi: POI, limit = 8, maxKm = 150): { p: POI; km: number }[] {
  if (_nearbyCachePoiId !== poi.id) {
    _nearbyCachePoiId = poi.id;
    _nearbyCache.clear();
  }
  const cacheKey = `${limit}|${maxKm}`;
  const cached = _nearbyCache.get(cacheKey);
  if (cached) return cached;
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
  _nearbyCache.set(cacheKey, out);
  return out;
}

// Nearby CITIES (settlements only) for the PlizioGo "explore nearby" block:
// "go visit this city" suggestions that link to our own POI HTML so the user
// discovers an unfamiliar town from within our system. City-like types only —
// no streets/landmarks. Grid is already indexable-only (buildNearbyGrid).
const CITY_TYPES = new Set(["city", "capital", "town", "village", "municipality", "commune"]);
let _nearbyCitiesCachePoiId = "";
const _nearbyCitiesCache = new Map<string, { p: POI; km: number }[]>();
function getNearbyCities(poi: POI, limit = 6, maxKm = 90, minKm = 4): { p: POI; km: number }[] {
  if (_nearbyCitiesCachePoiId !== poi.id) {
    _nearbyCitiesCachePoiId = poi.id;
    _nearbyCitiesCache.clear();
  }
  const cacheKey = `${limit}|${maxKm}|${minKm}`;
  const cached = _nearbyCitiesCache.get(cacheKey);
  if (cached) return cached;
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
  _nearbyCitiesCache.set(cacheKey, out);
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
  it: { title: "Esplora i dintorni", sub: "Luoghi interessanti nelle vicinanze", lt1: "<1 km", go: "Esplora", dirs: ["N", "NE", "E", "SE", "S", "SO", "O", "NO"], comp: ["N", "E", "S", "O"] },
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
  const t = poiHtmlUiSection(lang, "constellation", CONSTEL_I18N[lang] || CONSTEL_I18N.en);

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
    + `<script>(function(){var ns=[].slice.call(document.querySelectorAll('.plz-cst-node'));if(!ns.length)return;var oAt=0;function close(){ns.forEach(function(m){m.classList.remove('open');});}ns.forEach(function(n){var d=n.querySelector('.plz-cst-dot');var card=n.querySelector('.plz-cst-card');function tog(e){e.preventDefault();e.stopPropagation();var was=n.classList.contains('open');close();if(!was){n.classList.add('open');oAt=Date.now();}}d.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse'){tog(e);oAt=Date.now();}});d.addEventListener('click',function(e){if(Date.now()-oAt<800){e.preventDefault();e.stopPropagation();return;}tog(e);});d.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' ')tog(e);});if(card)card.addEventListener('click',function(e){if(Date.now()-oAt<900){e.preventDefault();e.stopPropagation();}});});document.addEventListener('click',function(e){if(!e.target.closest('.plz-cst-node'))close();});})();</script>`
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

function localizedCountryMapUrl(countryId: string, lang: Lang): string | null {
  const mapUrl = countryMapUrl(countryId);
  if (!mapUrl) return null;
  const mapLang = lang === "it" && countryId === "italy"
    ? "it"
    : lang === "es" && countryId === "spain"
      ? "es"
      : lang === "de" || lang === "hu" || lang === "ro" || lang === "en"
        ? lang
        : "en";
  return mapLang === "hu" ? mapUrl : `${mapUrl}${mapLang}/`;
}

const MAP_QUIZ_AVAILABILITY = new Map<string, boolean>();
function countryMapQuizUrl(countryId: string, lang: Lang): string | null {
  const mapUrl = countryMapUrl(countryId);
  if (!mapUrl) return null;

  let available = MAP_QUIZ_AVAILABILITY.get(countryId);
  if (available == null) {
    const mapFolder = mapUrl.replace(/^\/|\/$/g, "");
    const mapHtml = path.resolve(process.cwd(), "public", mapFolder, "index.html");
    available = fs.existsSync(mapHtml)
      && fs.readFileSync(mapHtml, "utf-8").includes('id="quizLaunch"');
    MAP_QUIZ_AVAILABILITY.set(countryId, available);
  }
  if (!available) return null;

  return localizedCountryMapUrl(countryId, lang);
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

// ---- Curriculum-leak sanitizer ---------------------------------------------
// Some Gemini-generated POI texts (mostly non-EU V2 city descriptions + sights)
// have a trailing school-curriculum fragment glued to the end, e.g.
//   "...ideal für das Bonefishing. Geographie K7 — Inselökosysteme und ..."
//   "...comunității de generații. Geografie K7 — Utilizarea agricolă ..."
// It is always the final segment: a capitalized subject word + grade marker
// (K1–K9) + em/en dash + topic, right before the end of the string. This is a
// clear "mass-generated" tell to readers and AI evaluators. We strip it at
// render time (source untouched, reversible) — same philosophy as sightFilter.
const CURRICULUM_LEAK_RE = /\s*\b[\p{L}]+\s+K[1-9]\s*[—–-]\s*[^\n]*$/u;
function stripCurriculumLeak(s: any): string {
  if (typeof s !== "string" || !s) return typeof s === "string" ? s : "";
  return s.replace(CURRICULUM_LEAK_RE, "").trimEnd();
}

// Generic "X ist eine schöne Stadt" placeholder descriptions (all langs) carry
// zero information and read as auto-generated fill-in. Treat them as empty so
// the lead paragraph simply does not render when no real descAdv exists — the
// page still keeps sights, weather, geo etc. (Proper fix = regenerate; this
// just removes the tell at render time.)
const PLACEHOLDER_DESC_RE = /(ist eine schöne Stadt|egy szép város|este un ora[șş] frumos|is a beautiful city|g[üu]zel bir [şs]ehirdir)\.?\s*$/i;
function isPlaceholderDesc(s: any): boolean {
  return typeof s === "string" && PLACEHOLDER_DESC_RE.test(s.trim());
}

// ---- Trust strip (E-E-A-T) --------------------------------------------------
// External readers (and AI evaluators) flag pages with NO author, NO date and
// NO human voice as "auto-generated, untrustworthy". This adds an honest
// editorial byline + a "last updated" date + a link to our data-sources page —
// the human/freshness/provenance fingerprint. Date = build time (we regenerate).
const _BUILD = new Date();
const BUILD_ISO = _BUILD.toISOString().slice(0, 10);
const _BUILD_M = _BUILD.getUTCMonth();
const _BUILD_Y = _BUILD.getUTCFullYear();
const TRUST_T: Record<string, { team: string; updated: string }> = {
  de: { team: "Plizio Redaktion", updated: "Aktualisiert" },
  hu: { team: "Plizio szerkesztőség", updated: "Frissítve" },
  ro: { team: "Redacția Plizio", updated: "Actualizat" },
  en: { team: "Plizio editorial team", updated: "Updated" },
  fr: { team: "Rédaction Plizio", updated: "Mis à jour" },
  tr: { team: "Plizio editör ekibi", updated: "Güncellendi" },
  hr: { team: "Plizio uredništvo", updated: "Ažurirano" },
  it: { team: "Redazione Plizio", updated: "Aggiornato" },
};
// Theme-agnostic (opacity + color:inherit) so it adapts to the page's text color.
function renderPostcardCta(poi: POI, lang: Lang, countryId: string): string {
  const placeName = getLocalized(poi.name, lang) ?? poi.id;
  const countryName = slugs.localizedCountryName(countryId, lang);
  const COPY: Partial<Record<Lang, { eyebrow: string; title: string; body: string; button: string; stamp: string }>> = {
    de: { eyebrow: "Deine Reise, deine Erinnerung", title: `Eine Postkarte aus ${placeName}`, body: "Gestalte aus deinem eigenen Foto eine persönliche Postkarte mit Ortsstempel. Kostenlos und ohne Anmeldung.", button: "Postkarte gestalten", stamp: "Grüße aus" },
    hu: { eyebrow: "A te utazásod, a te emléked", title: `Képeslap innen: ${placeName}`, body: "Készíts saját fotódból személyes képeslapot helybélyegzővel. Ingyenes, és regisztráció sem kell hozzá.", button: "Képeslap készítése", stamp: "Üdvözlet innen" },
    ro: { eyebrow: "Călătoria ta, amintirea ta", title: `Carte poștală din ${placeName}`, body: "Transformă fotografia ta într-o carte poștală personală cu ștampila locului. Gratuit, fără înregistrare.", button: "Creează cartea poștală", stamp: "Salutări din" },
    en: { eyebrow: "Your journey, your memory", title: `A postcard from ${placeName}`, body: "Turn your own photo into a personal postcard with a local stamp. Free and no sign-up required.", button: "Create a postcard", stamp: "Greetings from" },
    fr: { eyebrow: "Votre voyage, votre souvenir", title: `Une carte postale de ${placeName}`, body: "Transformez votre photo en carte postale personnelle avec un cachet local. Gratuit, sans inscription.", button: "Créer une carte postale", stamp: "Souvenir de" },
    tr: { eyebrow: "Yolculuğun, hatıran", title: `${placeName} hatırası bir kartpostal`, body: "Kendi fotoğrafını yer damgalı kişisel bir kartpostala dönüştür. Ücretsiz ve kayıt gerektirmez.", button: "Kartpostal oluştur", stamp: "Sevgiler" },
    hr: { eyebrow: "Tvoje putovanje, tvoja uspomena", title: `Razglednica iz mjesta ${placeName}`, body: "Pretvori svoju fotografiju u osobnu razglednicu s pečatom mjesta. Besplatno i bez registracije.", button: "Izradi razglednicu", stamp: "Pozdrav iz" },
    it: { eyebrow: "Il tuo viaggio, il tuo ricordo", title: `Una cartolina da ${placeName}`, body: "Trasforma la tua foto in una cartolina personale con il timbro del luogo. Gratis e senza registrazione.", button: "Crea una cartolina", stamp: "Saluti da" },
  };
  const fallback = COPY[lang] || COPY.en!;
  const t = poiHtmlUiSection(lang, "postcard", fallback);
  t.title = poiHtmlUiText(lang, "postcard.title", fallback.title, { place: placeName });
  const params = new URLSearchParams({ place: String(placeName), country: countryName, lang });
  for (const postcardLang of SUPPORTED_LANGS) {
    params.set(`place_${postcardLang}`, String(getLocalized(poi.name, postcardLang) ?? placeName));
    params.set(`country_${postcardLang}`, slugs.localizedCountryName(countryId, postcardLang));
  }
  const href = `/postcard/?${params.toString()}`;
  return `<section class="plz-postcard-cta" aria-labelledby="plz-postcard-title">
  <div class="plz-postcard-copy">
    <p class="plz-postcard-eyebrow">${escapeHtml(t.eyebrow)}</p>
    <h2 id="plz-postcard-title">${escapeHtml(t.title)}</h2>
    <p>${escapeHtml(t.body)}</p>
    <a class="plz-postcard-button" href="${escapeHtml(href)}">${escapeHtml(t.button)} <span aria-hidden="true">→</span></a>
  </div>
  <div class="plz-postcard-paper" aria-hidden="true">
    <span class="plz-postcard-sun"></span>
    <strong>${escapeHtml(placeName)}</strong>
    <span class="plz-postcard-stamp">${escapeHtml(t.stamp)}<br>${escapeHtml(placeName)}</span>
  </div>
  </section>`;
}

function renderMapQuizCta(countryId: string, countryName: string, lang: Lang): string {
  const mapUrl = countryMapQuizUrl(countryId, lang);
  if (!mapUrl) return "";
  const href = `${mapUrl}?quiz=start`;

  const COPY: Partial<Record<Lang, { eyebrow: string; title: string; body: string; count: string; button: string }>> = {
    de: {
      eyebrow: "Auf der Karte entdecken",
      title: `Wie gut kennst du ${countryName}?`,
      body: "Finde Städte, Landschaften und Regionen in 10 abwechslungsreichen Aufgaben auf der interaktiven Karte.",
      count: "10 Aufgaben",
      button: "Kartenquiz starten",
    },
    hu: {
      eyebrow: "Felfedezés a térképen",
      title: `Mennyire ismered ezt az országot: ${countryName}?`,
      body: "Keress meg városokat, tájakat és régiókat 10 változatos feladatban az interaktív térképen.",
      count: "10 feladat",
      button: "Térképes kvíz indítása",
    },
    ro: {
      eyebrow: "Descoperă pe hartă",
      title: `Cât de bine cunoști ${countryName}?`,
      body: "Găsește orașe, peisaje și regiuni în 10 provocări variate pe harta interactivă.",
      count: "10 provocări",
      button: "Pornește quizul pe hartă",
    },
    en: {
      eyebrow: "Explore on the map",
      title: `How well do you know ${countryName}?`,
      body: "Find cities, landscapes and regions in 10 varied challenges on the interactive map.",
      count: "10 challenges",
      button: "Start the map quiz",
    },
    it: {
      eyebrow: "Esplora sulla mappa",
      title: `Quanto conosci ${countryName}?`,
      body: "Trova città, paesaggi e regioni in 10 sfide diverse sulla mappa interattiva.",
      count: "10 sfide",
      button: "Avvia il quiz sulla mappa",
    },
  };
  const fallback = COPY[lang] || COPY.en!;
  const t = poiHtmlUiSection(lang, "mapQuiz", fallback);
  t.title = poiHtmlUiText(lang, "mapQuiz.title", fallback.title, { country: countryName });

  return `<section class="plz-map-quiz-cta" aria-labelledby="plz-map-quiz-title">
  <div class="plz-map-quiz-copy">
    <p class="plz-map-quiz-eyebrow">${escapeHtml(t.eyebrow)}</p>
    <h2 id="plz-map-quiz-title">${escapeHtml(t.title)}</h2>
    <p>${escapeHtml(t.body)}</p>
    <div class="plz-map-quiz-actions">
      <a class="plz-map-quiz-button" href="${escapeHtml(href)}">${escapeHtml(t.button)} <span aria-hidden="true">→</span></a>
      <span class="plz-map-quiz-count">${escapeHtml(t.count)}</span>
    </div>
  </div>
  <div class="plz-map-quiz-art" aria-hidden="true">
    <svg viewBox="0 0 320 220">
      <path class="plz-map-quiz-hanger" d="M70 21 160 5l90 16"/>
      <rect class="plz-map-quiz-rail" x="42" y="18" width="236" height="14" rx="4"/>
      <path class="plz-map-quiz-paper" d="M50 32c20 3 38-2 58 0 21 2 39-2 58 0 21 3 39-2 58 0 19 2 32-1 46 0v150c-17-3-31 2-48 0-20-2-38 2-58 0-20-3-39 2-59 0-19-2-36 2-55 0Z"/>
      <g class="plz-map-quiz-grid">
        <path d="M94 34v146M138 33v148M182 33v148M226 33v147"/>
        <path d="M52 70h216M51 107h218M51 144h218"/>
      </g>
      <path class="plz-map-quiz-coast" d="M72 55c19 9 27 1 43 7 14 5 12 19 28 24 18 6 33-8 49-2 12 4 8 17 23 23 14 5 27-4 39 4v49c-16 7-29-2-44 4-18 7-32 2-45-9-14-12-29-2-45-6-17-5-17-20-30-27-9-5-20 2-28-5Z"/>
      <path class="plz-map-quiz-river" d="M79 62c31 21 15 42 48 52s39-13 69 4c19 11 29 27 57 28"/>
      <g class="plz-map-quiz-contours">
        <path d="M89 91c15-14 35-11 43 1s-4 25-19 26-30-13-24-27Z"/>
        <path d="M94 93c11-9 25-7 31 1s-3 17-14 18-21-10-17-19Z"/>
        <path d="M181 126c13-12 32-9 39 2s-5 23-18 23-27-13-21-25Z"/>
      </g>
      <g class="plz-map-quiz-mark plz-map-quiz-mark-one" transform="translate(105 74)"><circle r="11"/><text y="4">1</text></g>
      <g class="plz-map-quiz-mark plz-map-quiz-mark-two" transform="translate(163 119)"><circle r="11"/><text y="4">2</text></g>
      <g class="plz-map-quiz-mark plz-map-quiz-mark-three" transform="translate(229 92)"><circle r="11"/><text y="4">3</text></g>
      <text class="plz-map-quiz-question" x="224" y="158">?</text>
      <rect class="plz-map-quiz-rail plz-map-quiz-rail-bottom" x="38" y="178" width="244" height="14" rx="4"/>
      <g class="plz-map-quiz-pointer"><path d="m294 207-105-79"/><circle cx="188" cy="127" r="4"/><path d="m294 207 9 7"/></g>
    </svg>
    <strong>10</strong>
  </div>
  </section>`;
}

function renderTrustStrip(lang: Lang): string {
  const t = poiHtmlUiSection(lang, "trust", TRUST_T[lang] || TRUST_T.en);
  const mon = (CLIMATE_MON[lang] || CLIMATE_MON.en!)[_BUILD_M] || "";
  const src = poiHtmlUiText(lang, "footer.sources", (FOOTER_COPY[lang] || FOOTER_COPY.en).sources);
  const sep = `<span aria-hidden="true" style="opacity:.5">·</span>`;
  return `<div class="plz-trust" style="font-size:.8rem;opacity:.68;margin:.1rem 0 .7rem;display:flex;flex-wrap:wrap;gap:.4rem;align-items:center">`
    + `<span>${escapeHtml(t.team)}</span>${sep}`
    + `<time datetime="${BUILD_ISO}">${escapeHtml(t.updated)}: ${escapeHtml(mon)} ${_BUILD_Y}</time>${sep}`
    + `<a href="/data-sources/" style="color:inherit;text-decoration:underline">${escapeHtml(src)}</a></div>`;
}

// ---- "Plizio tip" editorial callout -----------------------------------------
// Breaks the encyclopedic/auto-generated tone with a human, recommendation voice,
// assembled ONLY from data we have (best season, a top sight, a day-trip town).
// Varies per POI, so it also reduces template uniformity. Renders only when there
// is at least one substantive clause about THIS place (no generic filler).
const TIP_T: Record<string, { head: string; best: (n: string, b: string) => string; sight: (s: string) => string; near: (c: string, km: number) => string }> = {
  de: { head: "Unser Reisetipp", best: (n, b) => `Am angenehmsten ist ${n} im Zeitraum ${b}.`, sight: (s) => `Lass dir ${s} nicht entgehen.`, near: (c, km) => `Für einen Tagesausflug bietet sich ${c} (rund ${km} km) an.` },
  hu: { head: "Plizio tippünk", best: (n, b) => `${n} a legkellemesebb ${b} környékén.`, sight: (s) => `Ne hagyd ki ${s} megtekintését.`, near: (c, km) => `Egynapos kirándulásnak ${c} (kb. ${km} km) is remek választás.` },
  ro: { head: "Sfatul Plizio", best: (n, b) => `${n} este cel mai plăcut în perioada ${b}.`, sight: (s) => `Nu rata ${s}.`, near: (c, km) => `Pentru o excursie de o zi, ${c} (cca. ${km} km) merită vizitat.` },
  en: { head: "Our travel tip", best: (n, b) => `${n} is most pleasant around ${b}.`, sight: (s) => `Don't miss ${s}.`, near: (c, km) => `For a day trip, ${c} (about ${km} km) is well worth it.` },
  fr: { head: "Notre conseil", best: (n, b) => `${n} est le plus agréable autour de ${b}.`, sight: (s) => `Ne manquez pas ${s}.`, near: (c, km) => `Pour une excursion d'une journée, ${c} (environ ${km} km) vaut le détour.` },
  tr: { head: "Plizio önerisi", best: (n, b) => `${n} en keyifli ${b} döneminde.`, sight: (s) => `${s} mutlaka görülmeli.`, near: (c, km) => `Bir günlük gezi için ${c} (yaklaşık ${km} km) ideal.` },
  hr: { head: "Naš savjet", best: (n, b) => `${n} je najugodniji u razdoblju ${b}.`, sight: (s) => `Ne propustite ${s}.`, near: (c, km) => `Za jednodnevni izlet, ${c} (oko ${km} km) je odličan izbor.` },
  it: { head: "Il consiglio di Plizio", best: (n, b) => `${n} è particolarmente piacevole nel periodo ${b}.`, sight: (s) => `Non perdere ${s}.`, near: (c, km) => `Per una gita in giornata, ${c} (circa ${km} km) merita una visita.` },
};
function renderPlizioTip(poi: POI, lang: Lang, name: string, sightNames: string[], nearbyCity: { name: string; km: number } | null): string {
  const fallback = TIP_T[lang] || TIP_T.en;
  const t = {
    head: poiHtmlUiText(lang, "tip.head", fallback.head),
    best: (n: string, b: string) => poiHtmlUiText(lang, "tip.best", fallback.best(n, b), { name: n, best: b }),
    sight: (s: string) => poiHtmlUiText(lang, "tip.sight", fallback.sight(s), { sight: s }),
    near: (c: string, km: number) => poiHtmlUiText(lang, "tip.near", fallback.near(c, km), { city: c, km }),
  };
  const best = climateBestStr(poi, lang);
  const topSight = (sightNames || []).find((s) => s && s.length > 1);
  const parts: string[] = [];
  if (best) parts.push(t.best(name, best));
  if (topSight) parts.push(t.sight(topSight));
  if (nearbyCity && nearbyCity.name) parts.push(t.near(nearbyCity.name, Math.round(nearbyCity.km)));
  // Require a place-specific clause (season or sight), not just a neighbour.
  if (!best && !topSight) return "";
  if (parts.length === 0) return "";
  return `<aside class="plz-tip" style="border-left:2px solid var(--accent);background:var(--accent-wash);color:var(--ink);padding:.55rem .85rem;margin:.85rem 0;border-radius:0 var(--r) var(--r) 0;font-size:.92rem"><strong>${escapeHtml(t.head)}:</strong> ${escapeHtml(parts.join(" "))}</aside>`;
}

function getLocalized<T>(obj: Partial<Record<string, T>> | undefined, lang: Lang, fallback?: T): T | undefined {
  if (!obj) return fallback;
  return (obj[lang] ?? obj.de ?? obj.en ?? fallback) as T | undefined;
}

const TYPE_LABEL: Record<string, Partial<Record<Lang, string>>> = {
  city: { de: "Stadt", hu: "Város", ro: "Oraș", en: "City", hr: "Grad", it: "Città" },
  "state-capital": { de: "Landeshauptstadt", hu: "Tartományi főváros", ro: "Capitală regiune", en: "State capital", hr: "Glavni grad regije", it: "Capoluogo regionale" },
  mountain: { de: "Berg", hu: "Hegy", ro: "Munte", en: "Mountain", hr: "Planina", it: "Montagna" },
  river: { de: "Fluss", hu: "Folyó", ro: "Râu", en: "River", hr: "Rijeka", it: "Fiume" },
  lake: { de: "See", hu: "Tó", ro: "Lac", en: "Lake", hr: "Jezero", it: "Lago" },
  island: { de: "Insel", hu: "Sziget", ro: "Insulă", en: "Island", hr: "Otok", it: "Isola" },
  landmark: { de: "Sehenswürdigkeit", hu: "Nevezetesség", ro: "Punct de reper", en: "Landmark", hr: "Znamenitost", it: "Luogo d'interesse" },
  historical: { de: "Historischer Ort", hu: "Történelmi hely", ro: "Sit istoric", en: "Historical site", hr: "Povijesno mjesto", it: "Sito storico" },
  forest: { de: "Wald", hu: "Erdő", ro: "Pădure", en: "Forest", hr: "Šuma", it: "Foresta" },
  sea: { de: "Meer", hu: "Tenger", ro: "Mare", en: "Sea", hr: "More", it: "Mare" },
  port: { de: "Hafen", hu: "Kikötő", ro: "Port", en: "Port", hr: "Luka", it: "Porto" },
  industry: { de: "Industriegebiet", hu: "Ipari terület", ro: "Zonă industrială", en: "Industrial site", hr: "Industrijska zona", it: "Sito industriale" },
  agriculture: { de: "Landwirtschaft", hu: "Mezőgazdaság", ro: "Agricultură", en: "Agriculture", hr: "Poljoprivreda", it: "Agricoltura" },
  relief: { de: "Geländeform", hu: "Domborzat", ro: "Relief", en: "Relief", hr: "Reljef", it: "Rilievo" },
  "animal-habitat": { de: "Tierlebensraum", hu: "Élőhely", ro: "Habitat animal", en: "Animal habitat", hr: "Stanište životinja", it: "Habitat animale" },
};

const I18N: Record<string, Partial<Record<Lang, string>>> = {
  facts: { de: "Fakten", hu: "Tények", ro: "Fapte", en: "Facts", hr: "Činjenice", it: "Informazioni" },
  details: { de: "Details", hu: "Részletek", ro: "Detalii", en: "Details", hr: "Detalji", it: "Dettagli" },
  geography: { de: "Geographie", hu: "Földrajz", ro: "Geografie", en: "Geography", hr: "Zemljopis", it: "Geografia" },
  elevation: { de: "Höhe", hu: "Magasság", ro: "Altitudine", en: "Elevation", hr: "Visina", it: "Altitudine" },
  population: { de: "Einwohner", hu: "Lakosság", ro: "Populație", en: "Population", hr: "Stanovništvo", fr: "Population", tr: "Nüfus", it: "Popolazione" },
  length: { de: "Länge", hu: "Hossz", ro: "Lungime", en: "Length", hr: "Duljina", it: "Lunghezza" },
  area: { de: "Fläche", hu: "Terület", ro: "Suprafață", en: "Area", hr: "Površina", it: "Superficie" },
  coordinates: { de: "Koordinaten", hu: "Koordináták", ro: "Coordonate", en: "Coordinates", hr: "Koordinate", it: "Coordinate" },
  related: { de: "Verwandte Orte", hu: "Kapcsolódó helyek", ro: "Locuri conexe", en: "Related places", hr: "Povezana mjesta", it: "Luoghi correlati" },
  cities: { de: "Städte in der Nähe", hu: "Közeli városok", ro: "Orașe din apropiere", en: "Nearby cities", hr: "Gradovi u blizini", it: "Città vicine" },
  history: { de: "Geschichte & Sehenswürdigkeiten", hu: "Történelem és látnivalók", ro: "Istorie și obiective", en: "History & landmarks", hr: "Povijest i znamenitosti", it: "Storia e attrazioni" },
  nature: { de: "Natur", hu: "Természet", ro: "Natură", en: "Nature", hr: "Priroda", it: "Natura" },
  more: { de: "Weitere Orte", hu: "További helyek", ro: "Mai multe locuri", en: "More places", hr: "Više mjesta", it: "Altri luoghi" },
  didYouKnow: { de: "💡 Wusstest du?", hu: "💡 Tudtad?", ro: "💡 Știai că?", en: "💡 Did you know?", hr: "💡 Jeste li znali?", it: "💡 Lo sapevi?" },
  gameTitle: { de: "Probiere es spielerisch aus", hu: "Próbáld ki játékos formában", ro: "Învață jucând", en: "Try it with games", hr: "Isprobaj kroz igru", it: "Scoprilo giocando" },
  gameIntro: { de: "Lerne diesen Ort durch Spiele und Tests.", hu: "Ismerd meg ezt a helyet játékokon és teszteken keresztül.", ro: "Cunoaște acest loc prin jocuri și teste.", en: "Learn about this place through games and quizzes.", hr: "Upoznaj ovo mjesto kroz igre i kvizove.", it: "Scopri questo luogo con giochi e quiz." },
  gamePlay: { de: "🎮 Astro-Spiel starten", hu: "🎮 Indítsd az Astro játékot", ro: "🎮 Pornește jocul Astro", en: "🎮 Start astro game", hr: "🎮 Pokreni Astro igru", it: "🎮 Avvia il gioco Astro" },
  gameTest: { de: "📝 Test machen", hu: "📝 Csinálj tesztet", ro: "📝 Fă un test", en: "📝 Take a quiz", hr: "📝 Riješi kviz", it: "📝 Inizia il quiz" },
  viewMap: { de: "Auf der Karte ansehen", hu: "Megtekintés a térképen", ro: "Vezi pe hartă", en: "View on map", hr: "Pogledaj na karti", it: "Vedi sulla mappa" },
  viewOSM: { de: "OpenStreetMap", hu: "OpenStreetMap", ro: "OpenStreetMap", en: "OpenStreetMap", hr: "OpenStreetMap", it: "OpenStreetMap" },
  home: { de: "Startseite", hu: "Főoldal", ro: "Acasă", en: "Home", hr: "Početna", it: "Home" },
  langs: { de: "Sprachen", hu: "Nyelvek", ro: "Limbi", en: "Languages", hr: "Jezici", it: "Lingue" },
  sightsInTown: { de: "Sehenswürdigkeiten in der Stadt", hu: "Látnivalók a városban", ro: "Obiective turistice în oraș", en: "Sights in the town", hr: "Znamenitosti u gradu", it: "Attrazioni in città" },
  nearbySights: { de: "In der Umgebung", hu: "Környékbeli látnivalók", ro: "Obiective din împrejurimi", en: "Sights nearby", hr: "Znamenitosti u blizini", it: "Attrazioni nei dintorni" },
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
function _langFallback(lang: Lang): Lang { return lang === "tr" ? "de" : lang === "fr" || lang === "it" ? "en" : lang; }
const I = (k: string, lang: Lang) => {
  const fallback = I18N[k]?.[lang] ?? I18N[k]?.[_langFallback(lang)] ?? k;
  return poiHtmlUiText(lang, `common.${k}`, fallback);
};
const T = (type: string, lang: Lang) => {
  const fallback = TYPE_LABEL[type]?.[lang] ?? TYPE_LABEL[type]?.[_langFallback(lang)] ?? type;
  return poiHtmlUiText(lang, `type.${type}`, fallback);
};

// Lokalizalt footer-linkek. A jogi oldalak lang-prefix nelkuliek (/privacy/, /impressum/,
// /about/ mind 200) — a regi /${lang}/datenschutz/ + /${lang}/ueber-uns/ 404 volt minden POI-n.
const FOOTER_COPY: Record<string, { privacy: string; about: string; imprint: string; europe: string; sources: string }> = {
  de: { privacy: "Datenschutz", about: "Über uns", imprint: "Impressum", europe: "Europa", sources: "Datenquellen" },
  hu: { privacy: "Adatvédelem", about: "Rólunk", imprint: "Impresszum", europe: "Európa", sources: "Adatforrások" },
  ro: { privacy: "Confidențialitate", about: "Despre noi", imprint: "Impressum", europe: "Europa", sources: "Surse de date" },
  en: { privacy: "Privacy", about: "About", imprint: "Imprint", europe: "Europe", sources: "Data Sources" },
  fr: { privacy: "Confidentialité", about: "À propos", imprint: "Mentions légales", europe: "Europe", sources: "Sources de données" },
  tr: { privacy: "Gizlilik", about: "Hakkımızda", imprint: "Künye", europe: "Avrupa", sources: "Veri Kaynakları" },
  hr: { privacy: "Privatnost", about: "O nama", imprint: "Impressum", europe: "Europa", sources: "Izvori podataka" },
  it: { privacy: "Privacy", about: "Chi siamo", imprint: "Note legali", europe: "Europa", sources: "Fonti dei dati" },
};
function footerHtml(lang: Lang): string {
  const f = poiHtmlUiSection(lang, "footer", FOOTER_COPY[lang] ?? FOOTER_COPY.en);
  // Home link must point to an existing landing page — extra langs (fr/tr/hr)
  // have no /<lang>/ home, fall back to en.
  const navLang: Lang = SUPPORTED_LANGS.includes(lang) ? lang : ("en" as Lang);
  // Globalis kep-fallback: ha egy poi-images/geo-images kep nem tolt be (404 — pl.
  // letoltetlen poi.image), csere placeholder SVG-re, hogy ne legyen torott kep.
  // Capture-fazis (img error nem bubble-ozik); a lazy-load kepek a footer-script
  // utan toltenek, igy elkapja oket.
  const imgFb = `<script>document.addEventListener('error',function(e){var t=e.target;if(t&&t.tagName==='IMG'&&!t.dataset.phf&&/\\/(poi-images|geo-images)\\//.test(t.getAttribute('src')||'')){t.dataset.phf=1;t.src='/placeholders/poi/placeholder-landmark.svg';}},true);</script>`;
  return `<div><a href="/${navLang}/">Plizio</a> · <a href="/europe-map/">${f.europe}</a> · <a href="/data-sources/">${f.sources}</a> · <a href="/privacy/">${f.privacy}</a> · <a href="/impressum/">${f.imprint}</a> · <a href="/about/">${f.about}</a></div>${imgFb}`;
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
const WIKI_LANG_FOR: Record<string, string> = { de: "de", hu: "hu", ro: "ro", en: "en", fr: "fr", tr: "tr", it: "it" };

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

// Data-provenance signal: tells AI crawlers + search engines that our travel
// data derives from authoritative open datasets (verifiable via sameAs/license),
// not scraped or invented. Emitted in the Place schema's isBasedOn.
const DATA_SOURCES_LD = [
  { "@type": "Dataset", name: "OpenStreetMap", description: "Open, collaboratively edited geographic database, used here for place locations and points of interest.", url: "https://www.openstreetmap.org", license: "https://opendatacommons.org/licenses/odbl/1-0/", creditText: "© OpenStreetMap contributors", creator: { "@type": "Organization", name: "OpenStreetMap Foundation", url: "https://osmfoundation.org" } },
  { "@type": "Dataset", name: "Wikidata", description: "Free collaborative knowledge base of structured data, used here for place facts and identifiers.", url: "https://www.wikidata.org", license: "https://creativecommons.org/publicdomain/zero/1.0/", creator: { "@type": "Organization", name: "Wikimedia Foundation", url: "https://wikimediafoundation.org" } },
  { "@type": "Dataset", name: "Wikipedia", description: "Free online encyclopedia maintained by volunteers, used here for descriptive context about places.", url: "https://www.wikipedia.org", license: "https://creativecommons.org/licenses/by-sa/4.0/", creator: { "@type": "Organization", name: "Wikimedia Foundation", url: "https://wikimediafoundation.org" } },
];

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
  // Data provenance: declare authoritative open-data sources + credit (AI/SEO trust signal)
  place.isBasedOn = DATA_SOURCES_LD;
  place.creditText = "© OpenStreetMap contributors · Wikidata · Wikipedia";
  // Authorship + freshness (E-E-A-T): a maintained page with a named publisher.
  place.dateModified = BUILD_ISO;
  place.author = { "@type": "Organization", name: "Plizio", url: SITE_URL };
  place.publisher = { "@type": "Organization", name: "Plizio", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` } };
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
          description: stripCurriculumLeak(s.text) || s.name,
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
  it: { title: "📋 Informazioni pratiche", address: "Indirizzo", openingHours: "Orari", entranceFee: "Ingresso", website: "Sito ufficiale", publicTransport: "Trasporto pubblico", parking: "Parcheggio", accessibility: "Accessibilità", photoRules: "Fotografie", bestTimeToVisit: "Periodo migliore", audioGuide: "Audioguida" },
  es: { title: "📋 Información práctica", address: "Dirección", openingHours: "Horario", entranceFee: "Entrada", website: "Sitio oficial", publicTransport: "Transporte público", parking: "Aparcamiento", accessibility: "Accesibilidad", photoRules: "Fotografía", bestTimeToVisit: "Mejor momento", audioGuide: "Audioguía" },
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
  it: { access: "Come arrivare", season: "Stagione migliore", terrain: "Terreno e sentieri", gear: "Cosa portare", parking: "Parcheggio", safety: "Sicurezza", duration: "Tempo necessario", visiting: "Visita", hours_hint: "Orari abituali", photo: "Fotografie", combine: "Da abbinare a", tip: "Consiglio locale", time_of_day: "Momento migliore", rules: "Regole di comportamento", patience_tip: "Cosa aspettarsi", what_role: "Che luogo è?", visitability: "Visita", viewpoint: "Punto panoramico", local_products: "Prodotti locali", when_active: "Stagione attiva", nearby_combo: "Nelle vicinanze" },
  es: { access: "Cómo llegar", season: "Mejor época", terrain: "Terreno y senderos", gear: "Qué llevar", parking: "Aparcamiento", safety: "Seguridad", duration: "Tiempo necesario", visiting: "Visita", hours_hint: "Horario habitual", photo: "Fotografía", combine: "Combínalo con", tip: "Consejo local", time_of_day: "Mejor momento del día", rules: "Normas de conducta", patience_tip: "Qué esperar", what_role: "¿Qué es este lugar?", visitability: "Visita", viewpoint: "Dónde contemplarlo", local_products: "Productos locales", when_active: "Temporada activa", nearby_combo: "En los alrededores" },
};

function renderPracticalInfo(poi: POI, lang: Lang): string {
  const data = loadPractical(poi.id);
  if (!data) return "";
  const C = poiHtmlUiSection(lang, "practical", PRACTICAL_COPY[lang] || PRACTICAL_COPY.en);
  // --- Pinfo v1 ag (2026-06): {kind, fields:{access:{de,hu,...},...}} alaku
  // sidecar a nem-city POI-kra (_apply_pinfo.py irja). Tipus-csaladonkenti
  // mezosorrend + cimkek; a regi landmark-sema lejjebb valtozatlan.
  if (data.kind && data.fields && typeof data.fields === "object") {
    const order = PINFO_FIELD_ORDER[data.kind] || Object.keys(data.fields);
    const L = poiHtmlUiSection(lang, "pinfo", PINFO_LABELS[lang] || PINFO_LABELS.en);
    const items = order.map((k) => {
      const raw = (data.fields as any)[k];
      if (!raw || typeof raw !== "object") return "";
      const v = (raw[lang] || raw.en || raw.de || raw.hu || raw.ro || "") as string;
      if (!v || typeof v !== "string" || v.length < 10) return "";
      const vClean = deSlop(stripCurriculumLeak(v), lang, poi.id + ":pinfo:" + k);
      return `<div class="plz-pract-item"><div class="plz-pract-icon">${PINFO_ICON[k] || "ℹ️"}</div><div class="plz-pract-body"><div class="plz-pract-label">${escapeHtml(L[k] || k)}</div><div class="plz-pract-value">${escapeHtml(vClean)}</div></div></div>`;
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
      valHtml = escapeHtml(deSlop(stripCurriculumLeak(v), lang, poi.id + ":pract:" + k));
    }
    return `<div class="plz-pract-item"><div class="plz-pract-icon">${emoji}</div><div class="plz-pract-body"><div class="plz-pract-label">${escapeHtml(label)}</div><div class="plz-pract-value">${valHtml}</div></div></div>`;
  }).filter(Boolean).join("");
  if (!items) return "";
  return `<section class="plz-pract"><h2>${C.title}</h2><div class="plz-pract-grid">${items}</div></section>`;
}

const ITIN_COPY: Partial<Record<Lang, Record<string, string>>> = {
  hu: { title: "Egy nap a városban", intro: "Válassz időjárást + közlekedési módot, kapj konkrét napi tervet.", modeWalk: "🚶 Gyalog", modeBike: "🚲 Bicikli", modeCar: "🚗 Autó", modeTransit: "🚌 Tömegközl.", unitWalk: "séta", unitBike: "tekerés", unitCar: "vezetés", unitTransit: "út", places: "hely", tipsHeading: "💡 Helyi tippek", moreTipsHeading: "⭐ További tippek", navHere: "Útvonal", navTo: "Odamenni", resTitle: "🧰 Eszközök kéznél", resIntro: "Minden, ami a látogatáshoz kellhet — egy kattintással.", bestTime: "📅 Mikor érdemes jönni", warnings: "⚠️ Hol legyél óvatos", langTips: "🗣️ Nyelvi gyorstipp", wSunny: "☀️ Jó idő", wRainy: "☔ Eső", wWinter: "❄️ Téli", goLabel: "Mehet", extrasLabel: "⭐ További tippek", toolsLabel: "🧰 Eszközök kéznél", swipeHint: "← csúsztass a többi helyért →" },
  de: { title: "Ein Tag in der Stadt", intro: "Wähle Wetter + Verkehrsmittel, erhalte einen konkreten Tagesplan.", modeWalk: "🚶 Zu Fuß", modeBike: "🚲 Fahrrad", modeCar: "🚗 Auto", modeTransit: "🚌 ÖPNV", unitWalk: "Strecke", unitBike: "Strecke", unitCar: "Strecke", unitTransit: "Weg", places: "Orte", tipsHeading: "💡 Lokale Tipps", moreTipsHeading: "⭐ Weitere Tipps", navHere: "Route", navTo: "Hingelangen", resTitle: "🧰 Werkzeuge zur Hand", resIntro: "Alles, was du für den Besuch brauchst — ein Klick entfernt.", bestTime: "📅 Beste Reisezeit", warnings: "⚠️ Wo Vorsicht geboten ist", langTips: "🗣️ Sprach-Schnelltipp", wSunny: "☀️ Sonnig", wRainy: "☔ Regen", wWinter: "❄️ Winter", goLabel: "Los geht's", extrasLabel: "⭐ Weitere Tipps", toolsLabel: "🧰 Werkzeuge zur Hand", swipeHint: "← wischen für weitere Orte →" },
  en: { title: "A day in the city", intro: "Pick weather + travel mode, get a concrete day plan.", modeWalk: "🚶 Walking", modeBike: "🚲 Bike", modeCar: "🚗 Car", modeTransit: "🚌 Transit", unitWalk: "walk", unitBike: "ride", unitCar: "drive", unitTransit: "trip", places: "places", tipsHeading: "💡 Local tips", moreTipsHeading: "⭐ More picks", navHere: "Route", navTo: "Go here", resTitle: "🧰 Tools at hand", resIntro: "Everything you need for the visit — one click away.", bestTime: "📅 Best time to visit", warnings: "⚠️ Where to be careful", langTips: "🗣️ Language quick-tip", wSunny: "☀️ Sunny", wRainy: "☔ Rainy", wWinter: "❄️ Winter", goLabel: "Let's go", extrasLabel: "⭐ More picks", toolsLabel: "🧰 Tools at hand", swipeHint: "← swipe for more places →" },
  ro: { title: "O zi în oraș", intro: "Alege vremea + un mod de transport, primește un plan concret.", modeWalk: "🚶 Pe jos", modeBike: "🚲 Bicicletă", modeCar: "🚗 Mașină", modeTransit: "🚌 Transport public", unitWalk: "mers", unitBike: "ciclism", unitCar: "condus", unitTransit: "drum", places: "locuri", tipsHeading: "💡 Sfaturi locale", moreTipsHeading: "⭐ Sugestii suplimentare", navHere: "Traseu", navTo: "Du-te aici", resTitle: "🧰 Instrumente la îndemână", resIntro: "Tot ce ai nevoie pentru vizită — la un clic distanță.", bestTime: "📅 Când să vizitezi", warnings: "⚠️ Unde să fii atent", langTips: "🗣️ Sfaturi rapide de limbă", wSunny: "☀️ Vreme bună", wRainy: "☔ Ploaie", wWinter: "❄️ Iarnă", goLabel: "Hai", extrasLabel: "⭐ Sugestii suplimentare", toolsLabel: "🧰 Instrumente la îndemână", swipeHint: "← glisează pentru mai multe →" },
  fr: { title: "Une journée dans la ville", intro: "Choisis la météo + ton mode de transport, reçois un plan concret.", modeWalk: "🚶 À pied", modeBike: "🚲 Vélo", modeCar: "🚗 Voiture", modeTransit: "🚌 Transports", unitWalk: "marche", unitBike: "vélo", unitCar: "route", unitTransit: "trajet", places: "lieux", tipsHeading: "💡 Conseils locaux", moreTipsHeading: "⭐ Autres recommandations", navHere: "Itinéraire", navTo: "S'y rendre", resTitle: "🧰 Outils à portée de main", resIntro: "Tout ce qu'il faut pour la visite — en un clic.", bestTime: "📅 Quand y aller", warnings: "⚠️ Où faire attention", langTips: "🗣️ Astuce linguistique", wSunny: "☀️ Beau temps", wRainy: "☔ Pluie", wWinter: "❄️ Hiver", goLabel: "C'est parti", extrasLabel: "⭐ Autres recommandations", toolsLabel: "🧰 Outils à portée de main", swipeHint: "← glisse pour plus →" },
  tr: { title: "Şehirde bir gün", intro: "Hava + ulaşım modunu seç, somut bir günlük plan al.", modeWalk: "🚶 Yürüyerek", modeBike: "🚲 Bisiklet", modeCar: "🚗 Araba", modeTransit: "🚌 Toplu taşıma", unitWalk: "yürüyüş", unitBike: "sürüş", unitCar: "yolculuk", unitTransit: "yolculuk", places: "yer", tipsHeading: "💡 Yerel ipuçları", moreTipsHeading: "⭐ Daha fazla öneri", navHere: "Rota", navTo: "Buraya git", resTitle: "🧰 Elinizin altında", resIntro: "Ziyaret için gereken her şey — bir tık uzakta.", bestTime: "📅 Ne zaman gidilmeli", warnings: "⚠️ Nerede dikkatli olunmalı", langTips: "🗣️ Dil ipucu", wSunny: "☀️ Güneşli", wRainy: "☔ Yağmurlu", wWinter: "❄️ Kış", goLabel: "Haydi", extrasLabel: "⭐ Daha fazla öneri", toolsLabel: "🧰 Elinizin altında", swipeHint: "← daha fazla yer için kaydır →" },
  hr: { title: "Jedan dan u gradu", intro: "Odaberi vrijeme + način prijevoza i dobij konkretan dnevni plan.", modeWalk: "🚶 Pješice", modeBike: "🚲 Bicikl", modeCar: "🚗 Auto", modeTransit: "🚌 Javni prijevoz", unitWalk: "hodanja", unitBike: "vožnje", unitCar: "vožnje", unitTransit: "puta", places: "mjesta", tipsHeading: "💡 Lokalni savjeti", moreTipsHeading: "⭐ Više preporuka", navHere: "Ruta", navTo: "Kreni ovamo", resTitle: "🧰 Alati pri ruci", resIntro: "Sve što ti treba za posjet — jedan klik daleko.", bestTime: "📅 Kada posjetiti", warnings: "⚠️ Gdje biti oprezan", langTips: "🗣️ Brzi jezični savjet", wSunny: "☀️ Sunčano", wRainy: "☔ Kiša", wWinter: "❄️ Zima", goLabel: "Idemo", extrasLabel: "⭐ Više preporuka", toolsLabel: "🧰 Alati pri ruci", swipeHint: "← klizni za više mjesta →" },
  it: { title: "Un giorno in città", intro: "Scegli il meteo e il mezzo di trasporto per ottenere un itinerario concreto.", modeWalk: "🚶 A piedi", modeBike: "🚲 Bicicletta", modeCar: "🚗 Auto", modeTransit: "🚌 Trasporto pubblico", unitWalk: "a piedi", unitBike: "in bici", unitCar: "in auto", unitTransit: "di viaggio", places: "luoghi", tipsHeading: "💡 Consigli locali", moreTipsHeading: "⭐ Altri consigli", navHere: "Itinerario", navTo: "Vai qui", resTitle: "🧰 Strumenti utili", resIntro: "Tutto ciò che serve per la visita, a portata di clic.", bestTime: "📅 Quando andare", warnings: "⚠️ Dove fare attenzione", langTips: "🗣️ Suggerimento linguistico", wSunny: "☀️ Bel tempo", wRainy: "☔ Pioggia", wWinter: "❄️ Inverno", goLabel: "Parti", extrasLabel: "⭐ Altri consigli", toolsLabel: "🧰 Strumenti utili", swipeHint: "← scorri per altri luoghi →" },
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
    it: { cost: "Budget giornaliero", entry: "Ingressi", trans: "Trasporto" },
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
    it: "Luoghi da vedere nei dintorni",
  };
  const NONE: Partial<Record<Lang, string>> = {
    de: "Keine Treffer in diesem Umkreis.", hu: "Nincs találat ebben a körzetben.",
    ro: "Niciun rezultat în această rază.", en: "No results in this radius.",
    fr: "Aucun résultat dans ce rayon.", tr: "Bu yarıçapta sonuç yok.", hr: "Nema rezultata u ovom krugu.",
    it: "Nessun risultato in questo raggio.",
  };
  // Label of the details-page link inside the expanded description block.
  const MORE: Partial<Record<Lang, string>> = {
    de: "Zur Detailseite", hu: "Részletes oldal", ro: "Pagina detaliată", en: "Details page",
    fr: "Page détaillée", tr: "Detay sayfası", hr: "Stranica s detaljima",
    it: "Pagina dettagliata",
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
    it: { all: "Tutti", kul: "Cultura e luoghi", nat: "Natura", rec: "Tempo libero", fam: "Famiglia" },
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
  var LAT=${plat.toFixed(5)},LNG=${plng.toFixed(5)},LANG=${JSON.stringify(lang === "it" ? "en" : lang)};
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
      var sv=(typeof e[5]==='string')?'<a class="plz-sgr-sv" href="https://www.google.com/maps/@?api=1&map_action=pano&pano='+e[5]+'&viewpoint='+e[1]+','+e[2]+'" target="_blank" rel="nofollow noopener" title="Street View">'+PEG+'</a>'
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
    de: { title: "Praktische Infos", wx: "Wetter — 5 Tage", near: "In der Umgebung", tips: "Tipps", gastro: "Gastro", shop: "Shopping", quiet: "Ruhige Orte", fei: "Feiertag", feiWarn: "Feiertag — viele Geschäfte können geschlossen sein!", feiNone: "Kein gesetzlicher Feiertag in den nächsten 5 Tagen." },
    hu: { title: "Praktikus infók", wx: "Időjárás — 5 nap", near: "A környéken", tips: "Tippek", gastro: "Gasztro", shop: "Shopping", quiet: "Nyugis helyek", fei: "Ünnepnap", feiWarn: "ünnepnap — sok üzlet zárva lehet!", feiNone: "A következő 5 napban nincs ünnepnap." },
    ro: { title: "Informații practice", wx: "Vremea — 5 zile", near: "În împrejurimi", tips: "Sfaturi", gastro: "Gastro", shop: "Cumpărături", quiet: "Locuri liniștite", fei: "Sărbătoare", feiWarn: "sărbătoare legală — multe magazine pot fi închise!", feiNone: "Nicio sărbătoare legală în următoarele 5 zile." },
    en: { title: "Practical info", wx: "Weather — 5 days", near: "Nearby", tips: "Tips", gastro: "Food", shop: "Shopping", quiet: "Quiet spots", fei: "Holiday", feiWarn: "public holiday — many shops may be closed!", feiNone: "No public holiday in the next 5 days." },
    fr: { title: "Infos pratiques", wx: "Météo — 5 jours", near: "Aux alentours", tips: "Conseils", gastro: "Gastro", shop: "Shopping", quiet: "Coins calmes", fei: "Jour férié", feiWarn: "jour férié — de nombreux magasins peuvent être fermés !", feiNone: "Aucun jour férié dans les 5 prochains jours." },
    tr: { title: "Pratik bilgiler", wx: "Hava — 5 gün", near: "Çevrede", tips: "İpuçları", gastro: "Yeme-içme", shop: "Alışveriş", quiet: "Sakin yerler", fei: "Tatil", feiWarn: "resmî tatil — birçok dükkân kapalı olabilir!", feiNone: "Önümüzdeki 5 günde resmi tatil yok." },
    hr: { title: "Praktične informacije", wx: "Vrijeme — 5 dana", near: "U okolici", tips: "Savjeti", gastro: "Gastro", shop: "Kupovina", quiet: "Mirna mjesta", fei: "Blagdan", feiWarn: "blagdan — mnoge trgovine mogu biti zatvorene!", feiNone: "Nema blagdana u sljedećih 5 dana." },
    it: { title: "Informazioni pratiche", wx: "Meteo — 5 giorni", near: "Nei dintorni", tips: "Consigli", gastro: "Gastronomia", shop: "Shopping", quiet: "Luoghi tranquilli", fei: "Festività", feiWarn: "giorno festivo — molti negozi potrebbero essere chiusi!", feiNone: "Nessuna festività nazionale nei prossimi 5 giorni." },
    es: { title: "Información práctica", wx: "Tiempo — 5 días", near: "En los alrededores", tips: "Consejos", gastro: "Comida", shop: "Compras", quiet: "Lugares tranquilos", fei: "Festivo", feiWarn: "festivo — muchas tiendas pueden estar cerradas", feiNone: "No hay festivos nacionales en los próximos 5 días." },
  };
  const t = T[lang] || T.en;
  // City-tips sidecar (build-time bake). Always render when present — the city-info
  // card must show tips/gastro/quiet on every city, including itinerary cities
  // (user 2026-06-12: itinerary cities were showing only weather+nearby, no city-info).
  let tipsHtml = "";
  try {
    const tp = path.resolve(process.cwd(), "public", "data", "city-tips", `${poi.id}.json`);
    if (fs.existsSync(tp)) {
      const ct = JSON.parse(fs.readFileSync(tp, "utf-8"));
      const L = (o: any) => (o && (o[lang] || o.en)) || [];
      const tipLis = L(ct.tips).map((x: string, _i: number) => `<li>${escapeHtml(deSlop(stripCurriculumLeak(String(x)), lang, poi.id + ":ctip" + _i))}</li>`).join("");
      const picks = (arr: any[], emoji: string) => arr.map((p: any, _i: number) =>
        `<div class="plz-ic-pick"><span>${emoji}</span><div><b>${escapeHtml(String(p.name || ""))}</b><p>${escapeHtml(deSlop(stripCurriculumLeak(String(p.tip || "")), lang, poi.id + ":cpick" + emoji + _i))}</p></div></div>`).join("");
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
  var f=document.getElementById('plzIcFei');var found=false;if(!f)return;
  for(var i=0;i<hs.length;i++){var d=new Date(hs[i].date);
    if(d>=today&&d<=lim){f.hidden=false;f.className='plz-ic-fei is-warn';
      f.innerHTML='🎌 <b>'+hs[i].date.slice(5)+': '+hs[i].localName+'</b> — '+${JSON.stringify(t.feiWarn)};found=true;break;}}
  if(!found){f.hidden=false;f.className='plz-ic-fei is-none';f.innerHTML='🗓️ '+${JSON.stringify(t.feiNone)};}
}).catch(function(){});}
try{if(window.umami&&window.umami.track)window.umami.track('infocard_open',{});}catch(e){}
});})();</script>`;
}

// ── A→B útvonaltervező (autós + Wohnmobil), POI = cél előtöltve ──────────────
// Minden POI-n megjelenik, amelynek van koordinátája (lásd hasRoutePlanner).
// Statikus címkék (HTML-ben) + dinamikus stringek (data-copy JSON, a route-planner.js olvassa).
const RP_COPY: Record<string, Record<string, string>> = {
  de: { h: "Routenplaner — Auto & Wohnmobil", sub: "Von wo startest du? Wir bauen die Route hierher, mit Stopps und Länder-Hinweisen unterwegs.", to: "Ziel", from: "Start", fromPh: "z.B. München", via: "Über (optional)", viaPh: "z.B. Zagreb", nights: "Übernachtungs-Stopps", vehicle: "Fahrzeug", car: "🚗 Auto", camper: "🚐 Wohnmobil", filter: "Nur Stopps mit (optional):", water: "💧 Wasser", dump: "♻️ Entsorgung", power: "🔌 Strom", wc: "🚻 WC", shower: "🚿 Dusche", tierAB: "Stellplätze + Camping", tierA: "Nur Stellplätze", tierB: "Nur Camping", tierABC: "Auch Natur-/Rastplätze", b10: "Umweg max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Route planen" },
  hu: { h: "Útvonaltervező — Autó & Lakóautó", sub: "Honnan indulsz? Megtervezzük az utat ide, útközbeni megállókkal és ország-tudnivalókkal.", to: "Cél", from: "Indulás", fromPh: "pl. Budapest", via: "Érintve (opcionális)", viaPh: "pl. Zagreb", nights: "Éjszakai megállók", vehicle: "Jármű", car: "🚗 Autó", camper: "🚐 Lakóautó", filter: "Csak megállók ezzel (opcionális):", water: "💧 Víz", dump: "♻️ Ürítő", power: "🔌 Áram", wc: "🚻 WC", shower: "🚿 Zuhany", tierAB: "Stellplatz + kemping", tierA: "Csak Stellplatz", tierB: "Csak kemping", tierABC: "Pihenő-/natúrhelyek is", b10: "Kitérő max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Útvonal tervezése" },
  en: { h: "Route planner — Car & Motorhome", sub: "Where do you start? We build the route here, with stops and country notes along the way.", to: "Destination", from: "Start", fromPh: "e.g. Munich", via: "Via (optional)", viaPh: "e.g. Zagreb", nights: "Overnight stops", vehicle: "Vehicle", car: "🚗 Car", camper: "🚐 Motorhome", filter: "Only stops with (optional):", water: "💧 Water", dump: "♻️ Disposal", power: "🔌 Power", wc: "🚻 Toilets", shower: "🚿 Shower", tierAB: "Aires + campsites", tierA: "Aires only", tierB: "Campsites only", tierABC: "Also rest/nature areas", b10: "Detour max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Plan route" },
  ro: { h: "Planificator traseu — Mașină & Rulotă", sub: "De unde pleci? Construim traseul până aici, cu opriri și informații pe țări.", to: "Destinație", from: "Plecare", fromPh: "ex. Cluj", via: "Prin (opțional)", viaPh: "ex. Zagreb", nights: "Opriri peste noapte", vehicle: "Vehicul", car: "🚗 Mașină", camper: "🚐 Rulotă", filter: "Doar opriri cu (opțional):", water: "💧 Apă", dump: "♻️ Golire", power: "🔌 Curent", wc: "🚻 Toaletă", shower: "🚿 Duș", tierAB: "Popasuri + camping", tierA: "Doar popasuri", tierB: "Doar camping", tierABC: "Și locuri de odihnă/natură", b10: "Ocol max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Planifică traseul" },
  fr: { h: "Planificateur d'itinéraire — Voiture & Camping-car", sub: "D'où partez-vous ? Nous construisons l'itinéraire jusqu'ici, avec des étapes et des infos par pays.", to: "Destination", from: "Départ", fromPh: "ex. Paris", via: "Via (optionnel)", viaPh: "ex. Zagreb", nights: "Étapes nuitées", vehicle: "Véhicule", car: "🚗 Voiture", camper: "🚐 Camping-car", filter: "Étapes avec (optionnel) :", water: "💧 Eau", dump: "♻️ Vidange", power: "🔌 Électricité", wc: "🚻 WC", shower: "🚿 Douche", tierAB: "Aires + campings", tierA: "Aires seulement", tierB: "Campings seulement", tierABC: "Aussi aires nature/repos", b10: "Détour max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Planifier l'itinéraire" },
  it: { h: "Pianificatore — Auto e camper", sub: "Da dove parti? Creiamo il percorso fino a qui con soste e informazioni sui paesi attraversati.", to: "Destinazione", from: "Partenza", fromPh: "es. Roma", via: "Via (opzionale)", viaPh: "es. Firenze", nights: "Soste notturne", vehicle: "Veicolo", car: "🚗 Auto", camper: "🚐 Camper", filter: "Solo soste con (opzionale):", water: "💧 Acqua", dump: "♻️ Scarico", power: "🔌 Elettricità", wc: "🚻 WC", shower: "🚿 Doccia", tierAB: "Aree sosta + campeggi", tierA: "Solo aree sosta", tierB: "Solo campeggi", tierABC: "Anche aree di riposo/natura", b10: "Deviazione max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Pianifica itinerario" },
};
const RP_VEHICLE_COPY: Record<string, Record<string, string>> = {
  de: { title: "Wohnmobil-Maße", compact: "Kompaktvan", standard: "Wohnmobil 3,5 t", large: "Großes Wohnmobil", custom: "Eigene Maße", length: "Länge", width: "Breite", height: "Höhe", weight: "Gewicht" },
  hu: { title: "Lakóautó méretei", compact: "Kompakt furgon", standard: "Lakóautó 3,5 t", large: "Nagy lakóautó", custom: "Saját méretek", length: "Hossz", width: "Szélesség", height: "Magasság", weight: "Tömeg" },
  en: { title: "Motorhome dimensions", compact: "Compact van", standard: "3.5 t motorhome", large: "Large motorhome", custom: "Custom dimensions", length: "Length", width: "Width", height: "Height", weight: "Weight" },
  ro: { title: "Dimensiuni autorulotă", compact: "Camper compact", standard: "Autorulotă 3,5 t", large: "Autorulotă mare", custom: "Dimensiuni proprii", length: "Lungime", width: "Lățime", height: "Înălțime", weight: "Greutate" },
  fr: { title: "Dimensions du camping-car", compact: "Fourgon compact", standard: "Camping-car 3,5 t", large: "Grand camping-car", custom: "Dimensions personnalisées", length: "Longueur", width: "Largeur", height: "Hauteur", weight: "Poids" },
  it: { title: "Dimensioni del camper", compact: "Furgone compatto", standard: "Camper 3,5 t", large: "Camper grande", custom: "Misure personalizzate", length: "Lunghezza", width: "Larghezza", height: "Altezza", weight: "Peso" },
};
const RP_DYN: Record<string, Record<string, string>> = {
  de: { notFound: "Ort nicht gefunden", needOrigin: "Bitte Startort eingeben.", searching: "📍 Ort wird gesucht…", routing: "🛣️ Route wird berechnet…", km: "km", hrs: "Std.", nights: "Übernachtungen", matchStops: "passende Stopps", mapsAll: "Ganze Route in Maps", advisory: "Länder-Hinweise", toll: "Maut", lez: "Umweltzone", overnight: "Übernachten", mandatory: "Pflicht", keepStop: "diesen Stopp behalten", day: "TAG", dest: "ZIEL", swipe: "← Karten wischen →", regen: "Neu generieren — behaltene Stopps fixieren", regenKept: "🔄 Route mit behaltenen Stopps…", regenNew: "🔄 Neue Variante…" },
  hu: { notFound: "A hely nem található", needOrigin: "Add meg az indulási helyet.", searching: "📍 Hely keresése…", routing: "🛣️ Útvonal számítása…", km: "km", hrs: "óra", nights: "éjszaka", matchStops: "találó megálló", mapsAll: "Teljes útvonal Mapsben", advisory: "Ország-tudnivalók", toll: "Útdíj", lez: "Környezeti zóna", overnight: "Éjszakázás", mandatory: "Kötelező", keepStop: "ezt a megállót megtartom", day: "NAP", dest: "CÉL", swipe: "← húzd a kártyákat →", regen: "Újragenerálás — megtartottak rögzítése", regenKept: "🔄 Útvonal a megtartottakkal…", regenNew: "🔄 Új variáció…" },
  en: { notFound: "Place not found", needOrigin: "Please enter a start point.", searching: "📍 Locating…", routing: "🛣️ Calculating route…", km: "km", hrs: "h", nights: "nights", matchStops: "matching stops", mapsAll: "Whole route in Maps", advisory: "Country notes", toll: "Toll", lez: "Low-emission zone", overnight: "Overnight", mandatory: "Required", keepStop: "keep this stop", day: "DAY", dest: "GOAL", swipe: "← swipe cards →", regen: "Regenerate — fix kept stops", regenKept: "🔄 Route with kept stops…", regenNew: "🔄 New variant…" },
  ro: { notFound: "Locul nu a fost găsit", needOrigin: "Introdu punctul de plecare.", searching: "📍 Se caută locul…", routing: "🛣️ Se calculează traseul…", km: "km", hrs: "ore", nights: "nopți", matchStops: "opriri potrivite", mapsAll: "Tot traseul în Maps", advisory: "Informații pe țări", toll: "Taxă drum", lez: "Zonă ecologică", overnight: "Înnoptare", mandatory: "Obligatoriu", keepStop: "păstrează această oprire", day: "ZIUA", dest: "ȚINTĂ", swipe: "← glisează cardurile →", regen: "Regenerează — fixează opririle păstrate", regenKept: "🔄 Traseu cu opririle păstrate…", regenNew: "🔄 Variantă nouă…" },
  fr: { notFound: "Lieu introuvable", needOrigin: "Entrez un point de départ.", searching: "📍 Recherche du lieu…", routing: "🛣️ Calcul de l'itinéraire…", km: "km", hrs: "h", nights: "nuitées", matchStops: "étapes correspondantes", mapsAll: "Tout l'itinéraire dans Maps", advisory: "Infos par pays", toll: "Péage", lez: "Zone à faibles émissions", overnight: "Nuitée", mandatory: "Obligatoire", keepStop: "garder cette étape", day: "JOUR", dest: "BUT", swipe: "← faites glisser →", regen: "Régénérer — fixer les étapes gardées", regenKept: "🔄 Itinéraire avec étapes gardées…", regenNew: "🔄 Nouvelle variante…" },
  it: { notFound: "Luogo non trovato", needOrigin: "Inserisci un punto di partenza.", searching: "📍 Ricerca del luogo…", routing: "🛣️ Calcolo dell'itinerario…", km: "km", hrs: "h", nights: "notti", matchStops: "soste adatte", mapsAll: "Intero itinerario in Maps", advisory: "Informazioni sui paesi", toll: "Pedaggio", lez: "Zona a basse emissioni", overnight: "Pernottamento", mandatory: "Obbligatorio", keepStop: "mantieni questa sosta", day: "GIORNO", dest: "ARRIVO", swipe: "← scorri le schede →", regen: "Rigenera mantenendo le soste selezionate", regenKept: "🔄 Itinerario con soste mantenute…", regenNew: "🔄 Nuova variante…" },
};
// Route planner shows on EVERY POI with usable coords (POI = prefilled destination).
function hasRoutePlanner(poi: POI): boolean {
  if (!Array.isArray(poi.coords) || poi.coords.length < 2) return false;
  return isFinite(Number(poi.coords[0])) && isFinite(Number(poi.coords[1]));
}
function renderRoutePlanner(poi: POI, lang: Lang, name: string): string {
  if (!hasRoutePlanner(poi)) return "";
  const lng = Number(poi.coords![0]), lat = Number(poi.coords![1]);
  // POI ISO2 country (strict — orphan parents stay empty so the client falls back to
  // reverse-geocode). Lets route-planner.js hide the Wohnmobil mode where we have no
  // camper data, without a per-page reverse-geocode round-trip.
  const _cid = slugs.getCountryIdStrict(poi.parent);
  const cc = (_cid && slugs.countryIso2(_cid)) || "";
  const T = poiHtmlUiSection(lang, "route", RP_COPY[lang] || RP_COPY.en);
  const V = poiHtmlUiSection(lang, "routeVehicle", RP_VEHICLE_COPY[lang] || RP_VEHICLE_COPY.en);
  const dyn = poiHtmlUiSection(lang, "routeDynamic", RP_DYN[lang] || RP_DYN.en);
  const stopsOpts = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `<option${n === 2 ? " selected" : ""}>${n}</option>`).join("");
  const svc = [["water", T.water], ["dump", T.dump], ["power", T.power], ["toilets", T.wc], ["shower", T.shower]]
    .map(([v, l]) => `<label class="plz-rp-svcl"><input type="checkbox" class="plz-rp-svc" value="${v}"> ${escapeHtml(l)}</label>`).join("");
  const copyJson = escapeHtml(JSON.stringify(dyn));
  const css = `<style>
.plz-rp{margin:1.4rem 0;background:var(--panel);border:1px solid var(--rule);border-radius:var(--r);padding:1rem 1.05rem 1.15rem}
.plz-rp-head h2{font-size:1.1rem;margin:0 0 .2rem;color:var(--ink);display:flex;align-items:center;gap:.4rem}
.plz-rp-head .plz-rp-to{font-size:.72rem;font-weight:700;color:#fff;background:var(--accent);border-radius:999px;padding:.12rem .55rem;margin-left:.2rem}
.plz-rp-head p{font-size:.84rem;color:var(--ink-soft);margin:.15rem 0 .8rem}
.plz-rp-row{display:flex;flex-wrap:wrap;gap:.6rem;margin-bottom:.6rem}
.plz-rp-row>label,.plz-rp-vehicle{flex:1 1 160px;display:flex;flex-direction:column;font-size:.74rem;color:var(--ink-soft);gap:.25rem}
.plz-rp input,.plz-rp select{background:var(--paper);border:1px solid var(--rule);border-radius:var(--r);padding:.5rem .6rem;color:var(--ink);font-size:.9rem}
.plz-rp input:focus,.plz-rp select:focus{outline:none;border-color:var(--accent)}
.plz-rp-vehbtns{display:flex;border:1px solid var(--rule);border-radius:var(--r);overflow:hidden}
.plz-rp-mode{flex:1;padding:.5rem;background:var(--paper-2);color:var(--ink-soft);border:none;cursor:pointer;font-size:.85rem}
.plz-rp-mode[aria-selected="true"]{background:var(--accent);color:#fff;font-weight:700}
.plz-rp-filters{display:flex;flex-wrap:wrap;gap:.45rem;align-items:center;margin:.2rem 0 .7rem}
.plz-rp-flabel{flex:1 0 100%;font-size:.74rem;color:var(--ink-soft)}
.plz-rp-svcl{font-size:.8rem;color:var(--ink);background:var(--paper);border:1px solid var(--rule);border-radius:999px;padding:.28rem .6rem;cursor:pointer;display:inline-flex;gap:.25rem;align-items:center}
.plz-rp-tier,.plz-rp-buffer{font-size:.82rem}
.plz-rp-camper-spec{flex:1 0 100%;display:flex;flex-wrap:wrap;align-items:end;gap:.45rem;padding-top:.35rem;border-top:1px solid var(--rule)}
.plz-rp-camper-spec>.plz-rp-flabel{flex:1 0 100%}.plz-rp-vehicle-preset{flex:1 1 180px}
.plz-rp-dimensions{display:grid;grid-template-columns:repeat(4,minmax(70px,1fr));gap:.4rem;flex:3 1 360px}
.plz-rp-dimensions label{position:relative;font-size:.68rem;color:var(--ink-soft)}.plz-rp-dimensions input{width:100%;padding-right:1.5rem}
.plz-rp-dimensions label span{position:absolute;right:.48rem;bottom:.52rem;font-size:.72rem;color:var(--ink-faint);pointer-events:none}
.plz-rp-go{width:100%;padding:.7rem;border:none;border-radius:999px;background:var(--accent);color:#fff;font-weight:800;font-size:.98rem;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.4rem}
.plz-rp-go:hover{background:var(--accent-deep)}
.plz-rp-status{text-align:center;font-size:.82rem;color:var(--ink-soft);min-height:1.1em;margin-top:.5rem}
.plz-rp-result{margin-top:1rem;display:flex;flex-direction:column;gap:.9rem}
.plz-rp-summary{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem 1.1rem;background:var(--paper-2);border:1px solid var(--rule);border-radius:var(--r);padding:.7rem .9rem}
.plz-rp-stat b{font-size:1.35rem;color:var(--ink)}.plz-rp-stat{font-size:.78rem;color:var(--ink-soft)}
.plz-rp-mapsall{margin-left:auto;background:var(--accent);color:#fff;font-weight:700;font-size:.82rem;padding:.4rem .8rem;border-radius:999px;text-decoration:none}
.plz-rp-adv{background:var(--paper-2);border:1px solid var(--rule);border-radius:var(--r);padding:.7rem .9rem}
.plz-rp-adv h3{font-size:.92rem;margin:0 0 .5rem;color:var(--ink)}
.plz-rp-advc{background:var(--panel);border-radius:var(--r);padding:.45rem .6rem;margin-bottom:.4rem}
.plz-rp-advc summary{cursor:pointer;font-weight:600;color:var(--ink);font-size:.86rem}
.plz-rp-advc summary span{color:var(--ink-faint);font-size:.76rem}
.plz-rp-advb{font-size:.82rem;color:var(--ink-soft);margin-top:.4rem;display:flex;flex-direction:column;gap:.2rem}
.plz-rp-muted{color:var(--ink-faint)}.plz-rp-advnote{font-size:.74rem;margin:.4rem 0 0}
.plz-rp-deck{display:flex;gap:.7rem;overflow-x:auto;scroll-snap-type:x mandatory;padding:.2rem .1rem .6rem;scrollbar-width:thin;-webkit-overflow-scrolling:touch}
.plz-rp-deck::-webkit-scrollbar{height:6px}
.plz-rp-deck::-webkit-scrollbar-thumb{background:var(--rule);border-radius:3px}
.plz-rp-card{flex:0 0 min(85%,300px);scroll-snap-align:start;scroll-snap-stop:always}
.plz-rp-card>.plzsc{background:var(--paper);border:1px solid var(--rule);border-left:2px solid var(--accent);border-radius:var(--r);padding:.85rem;height:100%;transition:transform .2s,border-color .2s}
.plz-rp-card>.plzsc:hover{border-color:var(--accent);transform:translateY(-2px)}
.plz-rp-cardfb{background:var(--paper);border:1px solid var(--rule);border-left:2px solid var(--accent);border-radius:var(--r);padding:.85rem;height:100%}
.plz-rp-cardfb h4{margin:.3rem 0;color:var(--ink);font-size:.95rem}.plz-rp-cardfb a{color:var(--accent);text-decoration:none;font-size:.84rem}
.plz-rp-badge{font-size:.72rem;font-weight:700;color:var(--accent);letter-spacing:.05em}
.plz-rp-keep{display:flex;align-items:center;gap:.35rem;font-size:.8rem;color:var(--ink-soft);margin-top:.5rem;cursor:pointer}
.plz-rp-dots{display:flex;justify-content:center;gap:.35rem;margin:.4rem 0 .15rem;flex-wrap:wrap}
.plz-rp-dot{width:7px;height:7px;border-radius:50%;background:var(--rule);transition:all .2s;border:none;padding:0;cursor:pointer}
.plz-rp-dot.active{background:var(--accent);transform:scale(1.3)}
.plz-rp-swipe{text-align:center;font-size:.78rem;color:var(--ink-faint);margin:.1rem 0;font-style:italic}
.plz-rp-regen{width:100%;padding:.6rem;border-radius:999px;border:1px solid var(--rule);background:var(--paper);color:var(--ink);font-weight:600;cursor:pointer}
.plz-rp-regen:hover{background:var(--paper-2)}
.plz-rp-credit{font-size:.7rem;color:var(--ink-faint);margin:.7rem 0 0;text-align:center}
@media(max-width:560px){.plz-rp-card{flex:0 0 calc(100% - .6rem)}.plz-rp-dimensions{grid-template-columns:repeat(2,1fr)}}
</style>`;
  return `${css}<section class="plz-rp" id="plz-route-planner" data-lng="${lng}" data-lat="${lat}" data-dest="${escapeHtml(name)}" data-lang="${lang}" data-cc="${cc}" data-copy="${copyJson}">
  <div class="plz-rp-head"><h2>${escapeHtml(T.h)}</h2><p>${escapeHtml(T.sub)}</p></div>
  <div class="plz-rp-row">
    <label>${escapeHtml(T.from)}<input class="plz-rp-origin" type="text" placeholder="${escapeHtml(T.fromPh)}"></label>
    <label>${escapeHtml(T.to)}<input class="plz-rp-dest" type="text" value="${escapeHtml(name)}"></label>
    <label>${escapeHtml(T.via)}<input class="plz-rp-via" type="text" placeholder="${escapeHtml(T.viaPh)}"></label>
  </div>
  <div class="plz-rp-row">
    <label>${escapeHtml(T.nights)}<select class="plz-rp-stops">${stopsOpts}</select></label>
    <div class="plz-rp-vehicle">${escapeHtml(T.vehicle)}<div class="plz-rp-vehbtns"><button type="button" class="plz-rp-mode" data-mode="car" aria-selected="true">${escapeHtml(T.car)}</button><button type="button" class="plz-rp-mode" data-mode="camper" aria-selected="false">${escapeHtml(T.camper)}</button></div></div>
  </div>
  <div class="plz-rp-filters"><span class="plz-rp-flabel">${escapeHtml(T.filter)}</span>${svc}
    <select class="plz-rp-tier"><option value="AB">${escapeHtml(T.tierAB)}</option><option value="A">${escapeHtml(T.tierA)}</option><option value="B">${escapeHtml(T.tierB)}</option><option value="ABC">${escapeHtml(T.tierABC)}</option></select>
    <select class="plz-rp-buffer"><option value="10">${escapeHtml(T.b10)}</option><option value="20" selected>${escapeHtml(T.b20)}</option><option value="30">${escapeHtml(T.b30)}</option><option value="50">${escapeHtml(T.b50)}</option></select>
    <div class="plz-rp-camper-spec"><span class="plz-rp-flabel">${escapeHtml(V.title)}</span>
      <select class="plz-rp-vehicle-preset"><option value="compact">${escapeHtml(V.compact)}</option><option value="standard" selected>${escapeHtml(V.standard)}</option><option value="large">${escapeHtml(V.large)}</option><option value="custom">${escapeHtml(V.custom)}</option></select>
      <div class="plz-rp-dimensions">
        <label>${escapeHtml(V.length)}<input class="plz-rp-dim" data-key="length" type="number" min="3" max="15" step="0.1" value="7"><span>m</span></label>
        <label>${escapeHtml(V.width)}<input class="plz-rp-dim" data-key="width" type="number" min="1.5" max="3.5" step="0.05" value="2.3"><span>m</span></label>
        <label>${escapeHtml(V.height)}<input class="plz-rp-dim" data-key="height" type="number" min="1.8" max="4.5" step="0.05" value="3.1"><span>m</span></label>
        <label>${escapeHtml(V.weight)}<input class="plz-rp-dim" data-key="weight" type="number" min="1" max="20" step="0.1" value="3.5"><span>t</span></label>
      </div>
    </div>
  </div>
  <button type="button" class="plz-rp-go">${escapeHtml(T.plan)}</button>
  <div class="plz-rp-status"></div>
  <div class="plz-rp-result" style="display:none"></div>
  <p class="plz-rp-credit">© OpenStreetMap contributors · OpenRouteService</p>
</section>
<script defer src="/js/stop-card.js?v=20260620ed1"></script>
<script defer src="/js/sights-nearby.js?v=20260620ed1"></script>
<script defer src="/js/route-planner.js?v=20260716vehicle1"></script>`;
}

function renderCityItinerary(poi: POI, lang: Lang): string {
  const tier = (poi as { tier?: number }).tier ?? 2;
  const data = loadItinerary(poi.id, tier);
  if (!data || !data.modes) return "";
  const C = poiHtmlUiSection(lang, "itinerary", ITIN_COPY[lang] || ITIN_COPY.en!);
  // "transit" hidden for now: the data is synthetic (15 km/h estimate over the
  // sight stops, no real public-transport lines/stops/schedules) → misleading,
  // especially for small towns with no PT. Re-enable once fed real OSM/GTFS
  // public-transport data. The transit block stays in the JSON, just not rendered.
  const modeKeys = ["walk", "bike", "car"] as const;
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
    const tip = deSlop(stripCurriculumLeak(pickStr((s.tip_5lang || {})[lang] || s.tip_5lang)), lang, poi.id + ":itin" + i);
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

  // Weather buttons only when the city ACTUALLY has rainy/winter variants
  // (existing itineraries do; the new sunny-only expansion does not). Otherwise
  // a rainy/winter button would just show the sunny plan (misleading fallback).
  const hasWeatherVariants = modeKeys.some((m) => {
    const md = (data.modes as Record<string, any>)?.[m];
    return md && md.variants && (md.variants.rainy || md.variants.winter);
  });
  const weatherKeys = (hasWeatherVariants ? ["sunny", "rainy", "winter"] : ["sunny"]) as readonly string[];
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
      // De-duped: gastro/quiet/shopping/tips live ONCE in the city-tips card
      // (renderCityInfo, public/data/city-tips/<id>.json). The itinerary used to
      // repeat them inside EVERY mode (×4) — removed; the itinerary now shows only
      // the route (stops + timing + narrative). Single source = city-tips.
      // Swipe-dots indicator (count = stops count)
      const dotCount = (md.stops || []).length;
      const dotsHtml = dotCount > 1 ? `<div class="plz-itin-dots" aria-hidden="true">${Array.from({length: dotCount}, (_, i) => `<span class="plz-itin-dot${i===0?" active":""}"></span>`).join("")}</div>` : "";
      const swipeHint = `<div class="plz-itin-swipe-hint">${escapeHtml(C.swipeHint || "← swipe →")}</div>`;
      const isActive = m === "walk" && w === "sunny";
      const progressBadge = `<span class="plz-itin-progress" data-mw-prog="${m}-${w}"><span class="plz-itin-progress-bar"><span class="plz-itin-progress-fill" data-fill></span></span><span data-prog-text>0/${md.stop_count}</span></span>`;
      const costEstimate = renderCostEstimate(stops, m, md.total_km || 0, lang);
      const icsBtn = `<button type="button" class="plz-itin-ics" data-ics="${m}-${w}" aria-label="Export calendar"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/></svg>.ics</button>`;
      modeBlocks.push(`<div data-mw="${m}-${w}" class="${isActive ? "active" : ""}"><div class="plz-itin-summary"><span><strong>${md.start}→${md.end_estimate}</strong></span><span><strong>${md.total_km} km</strong> ${unitLabels[m]}</span><span><strong>${md.stop_count}</strong> ${C.places}</span>${progressBadge}${icsBtn}</div>${costEstimate}<p class="plz-itin-narrative">${escapeHtml(nar)}</p>${swipeHint}<div class="plz-itin-cards">${stopCards}</div>${dotsHtml}</div>`);
    }
  }
  const modeBlocksHtml = modeBlocks.join("");

  const weatherButtons = weatherKeys.length > 1
    ? weatherKeys.map((w, i) => `<button data-weather="${w}" aria-selected="${i === 0}">${weatherLabels[w]}</button>`).join("")
    : "";
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

  // PlizioGo logo hoisted to module-level PG_LOGO_SVG (rendered once in the wrapper header).
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
        // resolveHeroImage (nem nyers .image): a fallback-indexbol is megtalalja a
        // kepet, igy a thumbnail szinkronban van a POI sajat hero-kepevel.
        const img = resolveHeroImage(p);
        const thumb = img
          ? `<img src="${escapeHtml(img)}" alt="${nm}" loading="lazy" width="56" height="56" style="width:56px;height:56px;border-radius:var(--r);object-fit:cover;flex-shrink:0"/>`
          : `<span style="width:56px;height:56px;border-radius:var(--r);display:flex;align-items:center;justify-content:center;background:var(--paper-2);font-size:24px;flex-shrink:0">🏙️</span>`;
        return `<a href="${href}" style="display:flex;flex-direction:column;align-items:center;gap:5px;min-width:84px;text-decoration:none;color:var(--ink)"><span style="display:flex;width:56px;height:56px">${thumb}</span><span style="font-size:12px;font-weight:600;text-align:center;line-height:1.2">${nm}</span><span style="font-size:11px;color:var(--ink-faint)">${Math.round(km)} km</span></a>`;
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

  return `${tripLd}<section class="plz-itin" id="plz-itin"><div class="plz-itin-header"><div class="plz-itin-sub"><div class="plz-itin-tagline">${escapeHtml(C.title)}</div><div class="plz-itin-intro">${escapeHtml(C.intro)}</div></div></div>${weatherButtons ? `<div class="plz-itin-weathers" role="tablist">${weatherButtons}</div>` : ""}<div class="plz-itin-modes" role="tablist">${modeButtons}</div>${goBtn}<div class="plz-itin-body" id="plz-itin-body">${modeBlocksHtml}${resourcesHtml}</div></section>`;
}

// PlizioGo wrapper — unifies the two travel widgets under a 2-tab header:
//   "Úticél" (Destination = route-planner, shown on EVERY POI) + "Egy nap a városban"
//   (the day-itinerary, only where itinerary data exists).
// Behaviour (tab switching) lives in the shared /js/pliziogo.js; styles in poi.css.
// Rolled out to all POIs (2026-06-13): tabs when both panels exist, else the single one bare.
// PlizioGo brand logo (shown once at the top of the wrapper, above the tabs). Static.
const PG_LOGO_SVG = `<svg class="plz-go-logo" viewBox="0 0 220 48" xmlns="http://www.w3.org/2000/svg" aria-label="PlizioGo"><defs><linearGradient id="plzgoGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4cc6ff"/><stop offset="50%" stop-color="#7dd87a"/><stop offset="100%" stop-color="#ffae5c"/></linearGradient></defs><text x="0" y="36" font-family="ui-sans-serif,system-ui,'Segoe UI',Roboto,Inter" font-weight="800" font-size="36" fill="#211d18" letter-spacing="-1">Plizio</text><text x="118" y="36" font-family="ui-sans-serif,system-ui,'Segoe UI',Roboto,Inter" font-weight="900" font-size="36" fill="url(#plzgoGrad)" letter-spacing="-1.5">Go</text><circle cx="200" cy="14" r="5" fill="#4cc6ff"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle></svg>`;
// Versioned ref so JS updates bust the 30-day browser cache (bump the ?v= on each change).
const PG_JS = `<script src="/js/pliziogo.js?v=20260620ed1" defer></script>`;
const PG_TABS: Record<string, { dest: string; day: string }> = {
  de: { dest: "Reiseziel", day: "Ein Tag in der Stadt" },
  hu: { dest: "Úticél", day: "Egy nap a városban" },
  en: { dest: "Destination", day: "A day in the city" },
  ro: { dest: "Destinație", day: "O zi în oraș" },
  fr: { dest: "Destination", day: "Une journée en ville" },
  it: { dest: "Destinazione", day: "Un giorno in città" },
};
// Tab icons (inline SVG, inherit currentColor) — compass = route/destination, calendar = a-day-in-the-city.
const PG_TAB_SVG = (p: string) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const PG_TAB_IC = {
  dest: PG_TAB_SVG('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>'),
  day: PG_TAB_SVG('<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 9.5h17"/><path d="M8 3v4"/><path d="M16 3v4"/>'),
};
function renderPlizioGo(poi: POI, lang: Lang, name: string): string {
  const day = renderCityItinerary(poi, lang);      // "" when no itinerary data ("Egy nap a városban")
  const dest = renderRoutePlanner(poi, lang, name); // "" when the POI has no coords
  if (!day && !dest) return "";
  const T = poiHtmlUiSection(lang, "plizioGo", PG_TABS[lang] || PG_TABS.en);
  const head = `<div class="plz-pg-head">${PG_LOGO_SVG}</div>`;
  // Only show the tab bar when BOTH panels exist; otherwise render the single one bare.
  if (!(day && dest)) {
    return `<section class="plz-pg" id="plz-pg">${head}${dest}${day}</section>${PG_JS}`;
  }
  const tabs = `<div class="plz-pg-tabs" role="tablist">`
    + `<button type="button" class="plz-pg-tab" data-pgtab="dest" role="tab" aria-selected="true">${PG_TAB_IC.dest}<span>${escapeHtml(T.dest)}</span></button>`
    + `<button type="button" class="plz-pg-tab" data-pgtab="day" role="tab" aria-selected="false">${PG_TAB_IC.day}<span>${escapeHtml(T.day)}</span></button>`
    + `</div>`;
  return `<section class="plz-pg" id="plz-pg">${head}${tabs}`
    + `<div class="plz-pg-panel" data-pgpanel="dest">${dest}</div>`
    + `<div class="plz-pg-panel" data-pgpanel="day" hidden>${day}</div>`
    + `</section>${PG_JS}`;
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
  it: ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],
};
// Universal climate block: monthly mini-table + "best time to visit" derived from
// the grid-cell normals. Coordinate-driven, no notability needed.
// Best-time-to-visit string from climate normals (shared by renderClimate + auto-FAQ).
// Returns "" when there's no climate cell (so the FAQ won't promise data we lack).
function climateBestStr(poi: POI, lang: Lang): string {
  if (!Array.isArray(poi.coords) || poi.coords.length < 2) return "";
  const c = CLIMATE[climateCellKey(poi.coords[1], poi.coords[0])];
  if (!c || !Array.isArray(c.tmean) || c.tmean.length !== 12) return "";
  const tmax = c.tmean, precip = c.precip || [];
  const scored = tmax.map((tx, i) => {
    if (tx == null) return { i, s: -1e9 };
    return { i, s: -Math.abs(tx - 21) - (precip[i] ?? 0) / 18 };
  }).filter((o) => o.s > -1e8);
  if (scored.length < 6) return "";
  const best = scored.slice().sort((a, b) => b.s - a.s).slice(0, 3).map((o) => o.i).sort((a, b) => a - b);
  const mon = CLIMATE_MON[lang] || CLIMATE_MON.en!;
  return (best.length === 3 && best[2] - best[0] === 2) ? `${mon[best[0]]}–${mon[best[2]]}` : best.map((i) => mon[i]).join(", ");
}

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
    it: { title: "Periodo migliore e clima", best: (m) => `Il periodo più piacevole è ${m}.`, t: "Media °C", p: "Pioggia mm" },
  };
  const t = L[lang] || L.en;
  const bset = new Set(best);
  const head = mon.map((m, i) => `<th${bset.has(i) ? ' class="b"' : ""}>${escapeHtml(m)}</th>`).join("");
  const trow = tmax.map((tx, i) => `<td${bset.has(i) ? ' class="b"' : ""}>${tx == null ? "–" : Math.round(tx)}</td>`).join("");
  const prow = tmax.map((_, i) => { const pr = precip[i]; return `<td${bset.has(i) ? ' class="b"' : ""}>${pr == null ? "–" : Math.round(pr)}</td>`; }).join("");
  return `<section class="plz-climate" id="sec-climate"><h2>${escapeHtml(t.title)}</h2><p class="plz-climate-best">${escapeHtml(t.best(bestStr))}</p><div class="plz-climate-wrap"><table class="plz-climate-tbl"><thead><tr><th></th>${head}</tr></thead><tbody><tr><td class="rl">${escapeHtml(t.t)}</td>${trow}</tr><tr><td class="rl">${escapeHtml(t.p)}</td>${prow}</tr></tbody></table></div></section>`;
}

// Live webcam block (Windy). Lazy iframe player + mandatory courtesy/link (ToS).
function renderWebcam(poi: POI, lang: Lang): string {
  const w = WEBCAMS[poi.id];
  if (!w || !w.camId) return "";
  const name = (getLocalized(poi.name, lang) as string) || poi.id;
  const L: Record<string, { title: (n: string) => string; lead: (n: string) => string; courtesy: string; open: string }> = {
    de: { title: (n) => `Live-Webcam – ${n}`, lead: (n) => `So sieht es gerade in der Nähe von ${n} aus.`, courtesy: "Webcams bereitgestellt von Windy.com", open: "Webcam auf Windy öffnen" },
    hu: { title: (n) => `Élő webkamera – ${n}`, lead: (n) => `Így néz ki most ${n} környéke.`, courtesy: "A webkamerákat a Windy.com biztosítja", open: "Webkamera megnyitása a Windy-n" },
    ro: { title: (n) => `Webcam live – ${n}`, lead: (n) => `Așa arată acum în apropiere de ${n}.`, courtesy: "Camere web oferite de Windy.com", open: "Deschide webcamul pe Windy" },
    en: { title: (n) => `Live webcam – ${n}`, lead: (n) => `See what it looks like near ${n} right now.`, courtesy: "Webcams provided by Windy.com", open: "Open webcam on Windy" },
    fr: { title: (n) => `Webcam en direct – ${n}`, lead: (n) => `Voyez à quoi ressemblent les environs de ${n} en ce moment.`, courtesy: "Webcams fournies par Windy.com", open: "Ouvrir la webcam sur Windy" },
    tr: { title: (n) => `Canlı webcam – ${n}`, lead: (n) => `${n} çevresinin şu anki görünümü.`, courtesy: "Web kameralar Windy.com tarafından sağlanmaktadır", open: "Webcam'i Windy'de aç" },
    hr: { title: (n) => `Webcam uživo – ${n}`, lead: (n) => `Pogledajte kako trenutno izgleda blizu ${n}.`, courtesy: "Web kamere omogućuje Windy.com", open: "Otvori web kameru na Windyju" },
    it: { title: (n) => `Webcam in diretta – ${n}`, lead: (n) => `Guarda com'è la situazione vicino a ${n} in questo momento.`, courtesy: "Webcam fornite da Windy.com", open: "Apri la webcam su Windy" },
  };
  const t = L[lang] || L.en;
  const detail = w.detailUrl || `https://www.windy.com/webcams/${w.camId}`;
  const embed = `https://webcams.windy.com/webcams/public/embed/player/${w.camId}/day`;
  const cap = w.title ? `${escapeHtml(w.title)} · ${w.dist_km} km` : `${w.dist_km} km`;
  return `<section class="plz-webcam" id="sec-webcam"><h2>${escapeHtml(t.title(name))}</h2>`
    + `<p class="plz-webcam-lead">${escapeHtml(t.lead(name))}</p>`
    + `<div class="plz-webcam-frame"><iframe loading="lazy" src="${embed}" title="${escapeHtml(t.title(name))}" allowfullscreen referrerpolicy="no-referrer" style="width:100%;aspect-ratio:16/9;border:0;border-radius:12px;background:rgba(0,0,0,.2)"></iframe></div>`
    + `<p class="plz-webcam-credit" style="font-size:.85em;opacity:.7">${escapeHtml(cap)} · <a href="${detail}" target="_blank" rel="noopener nofollow">${escapeHtml(t.open)}</a> · ${escapeHtml(t.courtesy)}</p>`
    + `</section>`;
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
    it: { title: (n) => `Come arrivare e itinerario – ${n}`, lead: (n, l) => `${n} si trova in ${l}. Pianifica il viaggio ed esplora i dintorni.`, nearest: "Nelle vicinanze", modes: (n) => `Pianifica il percorso verso ${n} in auto, camper o a piedi.`, mlead: "Avvia percorso", car: "Auto", camper: "Camper", hike: "A piedi" },
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
  const newsCount = newsCountFor(poi.id);
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
    it: { overview: "Panoramica", itin: "Itinerario", sights: "Luoghi", info: "Info" },
  };
  const t = poiHtmlUiSection(lang, "tabs", L[lang] || L.en!);
  const tabs: string[] = [`<a class="plz-tab" href="#sec-overview" data-tab="overview">${t.overview}</a>`];
  if (opts.hasItin) tabs.push(`<a class="plz-tab" href="#sec-itin" data-tab="itin">${t.itin}</a>`);
  if (opts.hasSights) tabs.push(`<a class="plz-tab" href="#sec-sights" data-tab="sights">${t.sights}</a>`);
  if (opts.hasInfo) tabs.push(`<a class="plz-tab" href="#sec-info" data-tab="info">${t.info}</a>`);
  if (tabs.length < 2) return "";
  return `<nav class="plz-tabnav" id="plz-tabnav">${tabs.join("")}</nav>
<script>(function(){var nav=document.getElementById('plz-tabnav');if(!nav)return;var tabs=nav.querySelectorAll('.plz-tab');var ids=Array.from(tabs).map(function(t){return t.getAttribute('href').slice(1);});function spy(){var y=window.scrollY+120;var active=ids[0];for(var i=0;i<ids.length;i++){var el=document.getElementById(ids[i]);if(el&&el.offsetTop<=y)active=ids[i];}tabs.forEach(function(t){t.classList.toggle('active',t.dataset.tab===active||t.getAttribute('href')==='#'+active);});}window.addEventListener('scroll',spy,{passive:true});spy();tabs.forEach(function(t){t.addEventListener('click',function(e){e.preventDefault();var id=t.getAttribute('href').slice(1);var el=document.getElementById(id);if(el){window.scrollTo({top:el.offsetTop-70,behavior:'smooth'});}});});})();</script>`;
}

// Bottom sticky FAB action bar (mobile-only)
// Visitor error-report widget: floating button + modal, POST-ol a /report.php
// VPS endpointra (-> ntfy a telefonra + logfile). Oneloszerlt, inline CSS+JS,
// honeypot mezovel a botok ellen. (user 2026-06-15)
const _REP_T: Record<string, { btn: string; title: string; ph: string; email: string; send: string; cancel: string; thanks: string; err: string }> = {
  de: { btn: "Fehler melden", title: "Fehler auf dieser Seite melden", ph: "Was stimmt nicht? (falsche Daten, Bild, Übersetzung, Link …)", email: "E-Mail (optional, für Rückfragen)", send: "Senden", cancel: "Abbrechen", thanks: "Danke für deine Meldung!", err: "Senden fehlgeschlagen, bitte später erneut." },
  hu: { btn: "Hiba jelentése", title: "Hiba jelentése ezen az oldalon", ph: "Mit tapasztaltál? (hibás adat, kép, fordítás, link …)", email: "E-mail (opcionális, ha választ kérsz)", send: "Küldés", cancel: "Mégse", thanks: "Köszönjük a jelzést!", err: "A küldés nem sikerült, próbáld később." },
  ro: { btn: "Raportează o eroare", title: "Raportează o eroare pe această pagină", ph: "Ce nu este în regulă? (date, imagine, traducere, link …)", email: "E-mail (opțional, pentru răspuns)", send: "Trimite", cancel: "Anulează", thanks: "Mulțumim pentru sesizare!", err: "Trimiterea a eșuat, încearcă mai târziu." },
  en: { btn: "Report an issue", title: "Report an issue on this page", ph: "What's wrong? (incorrect data, image, translation, link …)", email: "Email (optional, if you want a reply)", send: "Send", cancel: "Cancel", thanks: "Thanks for letting us know!", err: "Sending failed, please try again later." },
  fr: { btn: "Signaler une erreur", title: "Signaler une erreur sur cette page", ph: "Quel est le problème ? (données, image, traduction, lien …)", email: "E-mail (facultatif, pour une réponse)", send: "Envoyer", cancel: "Annuler", thanks: "Merci pour votre signalement !", err: "Échec de l'envoi, réessayez plus tard." },
  tr: { btn: "Hata bildir", title: "Bu sayfadaki bir hatayı bildir", ph: "Sorun nedir? (yanlış veri, görsel, çeviri, bağlantı …)", email: "E-posta (isteğe bağlı, yanıt için)", send: "Gönder", cancel: "İptal", thanks: "Bildirdiğiniz için teşekkürler!", err: "Gönderim başarısız, lütfen sonra tekrar deneyin." },
  hr: { btn: "Prijavi grešku", title: "Prijavi grešku na ovoj stranici", ph: "Što nije u redu? (podaci, slika, prijevod, poveznica …)", email: "E-pošta (neobavezno, za odgovor)", send: "Pošalji", cancel: "Odustani", thanks: "Hvala na prijavi!", err: "Slanje nije uspjelo, pokušajte kasnije." },
  it: { btn: "Segnala un errore", title: "Segnala un errore in questa pagina", ph: "Cosa non va? (dati, immagine, traduzione, link…)", email: "Email (opzionale, per una risposta)", send: "Invia", cancel: "Annulla", thanks: "Grazie per la segnalazione!", err: "Invio non riuscito, riprova più tardi." },
};
function renderReportWidget(lang: Lang): string {
  const t = poiHtmlUiSection(lang, "report", _REP_T[lang] || _REP_T.en);
  const e = escapeHtml;
  return `<button type="button" class="plz-rep-open" aria-label="${e(t.btn)}" title="${e(t.btn)}"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><span>${e(t.btn)}</span></button>
<div class="plz-rep-modal" id="plz-rep-modal" role="dialog" aria-modal="true" aria-hidden="true" aria-label="${e(t.title)}">
  <div class="plz-rep-card">
    <button type="button" class="plz-rep-x" aria-label="${e(t.cancel)}">×</button>
    <h3>${e(t.title)}</h3>
    <textarea class="plz-rep-msg" rows="4" placeholder="${e(t.ph)}" maxlength="4000"></textarea>
    <input type="email" class="plz-rep-email" placeholder="${e(t.email)}" maxlength="200" autocomplete="email">
    <input type="text" class="plz-rep-hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0">
    <div class="plz-rep-row"><button type="button" class="plz-rep-cancel">${e(t.cancel)}</button><button type="button" class="plz-rep-send">${e(t.send)}</button></div>
    <p class="plz-rep-status" aria-live="polite"></p>
  </div>
</div>
<style>
.plz-rep-open{position:fixed;left:12px;bottom:calc(12px + env(safe-area-inset-bottom));z-index:9998;display:inline-flex;align-items:center;gap:6px;padding:7px 11px;border:0;border-radius:999px;background:var(--accent);color:#fff;font:600 12px/1 system-ui,sans-serif;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.18);backdrop-filter:blur(4px);opacity:.85;transition:opacity .15s}
.plz-rep-open:hover{opacity:1}
.plz-rep-open svg{flex:none}
@media(max-width:640px){.plz-rep-open span{display:none}.plz-rep-open{padding:9px}}
.plz-rep-modal{position:fixed;inset:0;z-index:10001;display:none;align-items:center;justify-content:center;background:rgba(33,29,24,.45);padding:16px}
.plz-rep-modal.open{display:flex}
.plz-rep-card{position:relative;width:100%;max-width:440px;background:var(--panel);color:var(--ink);border:1px solid var(--rule);border-radius:var(--r);padding:20px 18px 16px;box-shadow:0 12px 40px rgba(0,0,0,.18)}
.plz-rep-card h3{margin:0 0 12px;font-size:1.05rem;padding-right:24px}
.plz-rep-x{position:absolute;top:8px;right:10px;border:0;background:none;font-size:1.6rem;line-height:1;color:var(--ink-faint);cursor:pointer}
.plz-rep-msg,.plz-rep-email{width:100%;box-sizing:border-box;border:1px solid var(--rule);border-radius:var(--r);padding:9px 11px;font:400 .95rem system-ui,sans-serif;margin-bottom:9px;resize:vertical}
.plz-rep-msg:focus,.plz-rep-email:focus{outline:none;border-color:var(--accent)}
.plz-rep-row{display:flex;gap:9px;justify-content:flex-end}
.plz-rep-row button{border:0;border-radius:var(--r);padding:9px 16px;font:600 .9rem system-ui,sans-serif;cursor:pointer}
.plz-rep-cancel{background:var(--paper-2);color:var(--ink-soft)}
.plz-rep-send{background:var(--accent);color:#fff}
.plz-rep-send:hover{background:var(--accent-deep)}
.plz-rep-send[disabled]{opacity:.5;cursor:default}
.plz-rep-status{margin:10px 0 0;font-size:.9rem;min-height:1.1em}
.plz-rep-status.ok{color:#1d8a45}.plz-rep-status.bad{color:#c0392b}
</style>
<script>(function(){var o=document.querySelector('.plz-rep-open'),m=document.getElementById('plz-rep-modal');if(!o||!m)return;var msg=m.querySelector('.plz-rep-msg'),em=m.querySelector('.plz-rep-email'),hp=m.querySelector('.plz-rep-hp'),send=m.querySelector('.plz-rep-send'),st=m.querySelector('.plz-rep-status');function open(){m.classList.add('open');m.setAttribute('aria-hidden','false');setTimeout(function(){msg.focus();},50);}function close(){m.classList.remove('open');m.setAttribute('aria-hidden','true');}o.addEventListener('click',open);m.querySelector('.plz-rep-x').addEventListener('click',close);m.querySelector('.plz-rep-cancel').addEventListener('click',close);m.addEventListener('click',function(e){if(e.target===m)close();});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open'))close();});send.addEventListener('click',function(){var v=(msg.value||'').trim();if(v.length<3){msg.focus();return;}send.disabled=true;st.className='plz-rep-status';st.textContent='…';fetch('/report.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({msg:v,email:(em.value||'').trim(),url:location.href,title:document.title,hp:(hp.value||'')})}).then(function(r){return r.ok?r.json():Promise.reject();}).then(function(){st.className='plz-rep-status ok';st.textContent=${JSON.stringify(t.thanks)};msg.value='';em.value='';setTimeout(close,1600);setTimeout(function(){send.disabled=false;st.textContent='';},1900);}).catch(function(){st.className='plz-rep-status bad';st.textContent=${JSON.stringify(t.err)};send.disabled=false;});});})();</script>`;
}
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
  const _descShortLocal = getLocalized(descShort as Partial<Record<string, string>>, lang);
  const descText = deSlop(stripCurriculumLeak(
    getLocalized(descAdv as Partial<Record<string, string>>, lang)
    || (isPlaceholderDesc(_descShortLocal) ? "" : _descShortLocal)
    || ""), lang, poi.id);

  // Facts: prefer advanced
  const factsAdv = (poi as { factsAdvanced?: Record<string, string[]> }).factsAdvanced;
  const factsShort = poi.facts as Record<string, string[]> | undefined;
  const factsArr = (getLocalized(factsAdv as Partial<Record<string, string[]>>, lang)
    || getLocalized(factsShort as Partial<Record<string, string[]>>, lang)
    || []) as string[];

  const url = `${SITE_URL}${buildPoiPath(lang, poi)}`;
  const richness = pageRichness(poi, lang);
  // Content-aware SEO signals: only advertise features the page actually has.
  const _clat = poi.coords?.[1], _clon = poi.coords?.[0];
  const hasWeather = (typeof _clat === "number" && typeof _clon === "number") ? !!CLIMATE[climateCellKey(_clat, _clon)] : false;
  // events live in the YEARLY_HIGHLIGHTS sidecar (not on the POI object). News is
  // disabled site-wide (SHOW_NEWS=false) → never advertise it in the title.
  const hasEventsReal = (YEARLY_HIGHLIGHTS[poi.id] || []).length > 0;
  const titleFeats: TitleFeats = { hasSights: richness.hasSights, hasWeather, hasNews: SHOW_NEWS && NEWS_IDS.has(poi.id), hasEvents: hasEventsReal };
  const _regForMeta = REGION_BY_ID.get(poi.parent || "");
  const _regName = _regForMeta ? ((_regForMeta.name as Record<string, string>)?.[lang] || (_regForMeta.name as Record<string, string>)?.de || "") : "";
  const title = buildPoiTitle(name, poi, lang, titleFeats);
  const metaDesc = buildMetaDesc(name, poi, lang, descText, _regName, titleFeats);

  // Landing pages (home / country / state) exist ONLY for the 4 supported langs.
  // On extra-lang pages (fr/tr/hr) those landing URLs 404 → link them to `en`
  // (which exists) instead. The POI page itself stays in `lang`. (2026-06-12:
  // ~40k broken internal links came from extra-lang breadcrumb/home/footer.)
  const hasNativeLanding = (lang === "it" && countryId === "italy") || (lang === "es" && countryId === "spain") || (lang === "pt" && countryId === "portugal");
  const navLang: Lang = SUPPORTED_LANGS.includes(lang) || hasNativeLanding ? lang : ("en" as Lang);
  // Beach-hub CTA (reciprocal internal link) for countries that have a beach hub.
  // Beach hubs are built for the 4 core langs only (it/es/pt landing pages keep
  // navLang), so skip the CTA when that lang has no hub instead of linking a 404.
  const beachHubLinkHtml = BEACH_HUB_KEYS.has(countryId) && BEACH_HUB_BSLUG[navLang]
    ? `<a class="plz-cta plz-cta-hub" href="/${navLang}/${countryId}/${BEACH_HUB_BSLUG[navLang]}/">${BEACH_HUB_LABEL[lang] || BEACH_HUB_LABEL.en} →</a>`
    : "";
  const breadcrumbHome = `<a href="/${navLang}/">${I("home", lang)}</a>`;
  const breadcrumbCountry = `<a href="${buildCountryPath(navLang, countryId)}">${countryName}</a>`;
  // State-crumb CSAK ha valoban letezik state-index oldal (regions-ben van a parent).
  // Kulonben 404-re linkelne (pl. /hu/finnorszag/fi/). Szoveg = lokalizalt regio-nev.
  const stateRegion = slugs.getStateForPoi(poi);
  const breadcrumbState = (poi.parent === countryId || !stateRegion)
    ? "" // country-level POI vagy nincs state-index oldal: skip crumb
    : `<a href="${buildStatePath(navLang, poi.parent)}">${slugs.localizedStateName(poi.parent, lang)}</a>`;

  // hreflang alternates
  const alternates = getPoiAlternates(poi);

  // Type tag (capitalize)
  const typeLabel = T(poi.type, lang);

  // Geographic facts
  const geoItems: string[] = [];
  // Population (GeoNames/Wikidata sidecar) — only for settlement POIs. Thousands
  // separator per locale; Wikidata point-in-time year appended where available.
  const popRec = CITY_POP[poi.id];
  if (popRec && popRec.pop > 0) {
    const popStr = popRec.pop.toLocaleString(lang === "en" ? "en-US" : lang === "hu" ? "hu-HU" : lang === "ro" ? "ro-RO" : "de-DE");
    const yr = popRec.year ? ` (${popRec.year})` : "";
    geoItems.push(`<div class="plz-meta-item"><div class="label">${I("population", lang)}</div><div class="value">${popStr}${yr}</div></div>`);
  }
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
  let related = getRelatedPois(poi, 40);
  if (related.length < 15) {
    const have = new Set(related.map((rp) => rp.id)); have.add(poi.id);
    for (const e of getNearbyPois(poi, 40, 80)) {
      if (have.has(e.p.id)) continue;
      related.push(e.p); have.add(e.p.id);
      if (related.length >= 40) break;
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
    // resolveHeroImage (nem nyers .image): fallback-indexbol is, szinkron a hero-keppel.
    const rimg = resolveHeroImage(r);
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
    .map((g) => `<section><h2>${I(GROUP_LABEL_KEYS[g], lang)}</h2><div class="plz-related">${grouped[g].slice(0, g === "city" ? 15 : 8).map(relatedCard).join("")}</div></section>`)
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
  // Unified FAQ: sharded FAQS + inline poi.faq + data-grounded auto W-questions,
  // deduped by normalized question. Rendered ONCE as the visible accordion AND fed
  // to a single FAQPage JSON-LD (via structuredData) — keeps structured data in sync
  // with visible content (Google's FAQ rich-result policy requires visibility).
  let faqHtml = "";
  const faqItems: Array<{ q: string; a: string }> = [];
  const _normQ = (s: string) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  const _seenQ = new Set<string>();
  const _pushFaq = (q: string, a: string) => {
    if (q && a && !_seenQ.has(_normQ(q))) {
      _seenQ.add(_normQ(q));
      // De-slop the answer (cliche rotation + em-dash); per-item salt so the
      // same cliche varies across answers within one page too.
      a = deSlop(stripCurriculumLeak(a), lang, poi.id + ":faq" + faqItems.length);
      faqItems.push({ q, a });
    }
  };
  // 1) sharded FAQS (primary, LLM-authored) — same source renderFAQ used.
  const _shardFaqs = lang === "pt" && PT_FAQS[poi.id]
    ? PT_FAQS[poi.id]
    : lang === "es" && ES_FAQS[poi.id]
    ? ES_FAQS[poi.id]
    : lang === "it" && IT_FAQS[poi.id]
      ? IT_FAQS[poi.id]
    : (lang === "hr" && HR_FAQS[poi.id]) ? HR_FAQS[poi.id] : FAQS[poi.id];
  if (Array.isArray(_shardFaqs)) for (const it of _shardFaqs) _pushFaq(pickFaqStr(it.q, lang), pickFaqStr(it.a, lang));
  // 2) inline poi.faq (legacy/embedded).
  if (Array.isArray(poi.faq)) {
    for (const f of poi.faq as Array<Record<string, unknown>>) {
      _pushFaq((getLocalized(f.question || f.q, lang) as string) || "", (getLocalized(f.answer || f.a, lang) as string) || "");
    }
  }
  // 3) data-grounded auto W-questions (Wo/Was/Wann/Warum) — only where data exists.
  {
    const _afObj = (poi as { sights?: Record<string, Array<{ name?: string }>> }).sights || sidecarSightsFor(poi);
    const _afSights = ((_afObj?.[lang] || _afObj?.de || _afObj?.en || []) as Array<{ name?: string }>)
      .map((s) => s?.name || "").filter(Boolean) as string[];
    for (const it of buildAutoFaq(poi, lang, name, _regName, countryName, descText, _afSights)) _pushFaq(it.q, it.a);
  }
  if (faqItems.length > 0) {
    const head = FAQ_HEAD[lang] || FAQ_HEAD.en;
    const items = faqItems.map(({ q, a }, i) =>
      `<details class="plz-faq-item"${i === 0 ? " open" : ""}><summary><span class="plz-faq-q">${escapeHtml(q)}</span>${FAQ_CHEV}</summary><div class="plz-faq-a">${escapeHtml(a)}</div></details>`,
    ).join("");
    faqHtml = `<section class="plz-faq"><h2>${escapeHtml(head)}</h2>${items}</section>`;
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
    const txt = s.text ? `<p>${escapeHtml(deSlop(stripCurriculumLeak(s.text), lang, poi.id + ":sight:" + s.name))}</p>` : "";
    const attr = "";
    // Internal link priority: (1) dedicated standalone sight page if this sight has one,
    // (2) else a same-country POI cross-link, (3) else plain text.
    const spHref = sightPageHref(lang, poi.id, [s.name as string, ...(nameVariants || [])], (s as any).coords);
    const linkedPoiId = lookupSightPoiLink(poi.id, s.name);
    const linkedPoi = linkedPoiId ? allById.get(linkedPoiId) : undefined;
    const nameHtml = spHref
      ? `<a href="${spHref}" class="plz-sight-name-link">${escapeHtml(s.name)}</a>`
      : linkedPoi
      ? `<a href="${poiPathSafe(lang, linkedPoi)}" class="plz-sight-name-link">${escapeHtml(s.name)}</a>`
      : escapeHtml(s.name);
    // Street View pegman — only when the availability sweep confirmed imagery.
    // Sight coords convention: [lng, lat].
    let svBtn = "";
    let factsHtml = "";
    const sc = (s as any).coords;
    if (Array.isArray(sc) && sc.length === 2 && typeof sc[0] === "number" && typeof sc[1] === "number") {
      const [slng, slat] = sc;
      // Pegman ONLY for a concrete pano_id (string value). A bare `1` (viewpoint-
      // only positive) opens Google at the coord, which for obscure features sits
      // on the nearest road and shows the wrong place — fall to the Maps pin then.
      if (typeof SV_OK[svKey(slat, slng)] === "string") {
        const svUrl = svHref(slat, slng);
        // Street View pegman + Google Maps pin egymas mellett (user 2026-06-15):
        // ahol van SV, ott is jelenjen meg a GM-link a sight valos listing-jere.
        const gmUrl = `https://www.google.com/maps/search/?api=1&query=${slat.toFixed(6)},${slng.toFixed(6)}`;
        svBtn = `<a class="plz-sight-sv" href="${svUrl}" target="_blank" rel="nofollow noopener" title="Street View" aria-label="Street View">${SV_PEGMAN_SVG}</a>`
          + `<a class="plz-sight-sv plz-sight-gm" href="${gmUrl}" target="_blank" rel="nofollow noopener" title="Google Maps" aria-label="Google Maps">${GMAPS_PIN_SVG}</a>`;
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
  const _junkSeries = junkSeriesSet(sightsArr as { name?: unknown }[]);
  const _streetCluster = hasStreetCluster(sightsArr as { name?: unknown }[]);
  const sightsItems: { s: SightItem; i: number }[] = [];
  sightsArr.forEach((s, i) => {
    const pre = sightSeriesPrefix(s.name);
    if (pre && _junkSeries.has(pre)) return; // drop junk numbered-series member
    if (_streetCluster && isBareStreet(s.name)) return; // drop residential street dump
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
  const _nJunk = junkSeriesSet(nearbyArr as { name?: unknown }[]);
  const _nStreet = hasStreetCluster(nearbyArr as { name?: unknown }[]);
  const nearbyItems: { s: SightItem; i: number }[] = [];
  nearbyArr.forEach((s, i) => {
    const pre = sightSeriesPrefix(s.name);
    if (pre && _nJunk.has(pre)) return; // drop junk numbered-series member
    if (_nStreet && isBareStreet(s.name)) return; // drop residential street dump
    nearbyItems.push({ s, i });
  });
  const nearbyHtml = nearbyItems.length > 0
    ? `<section class="plz-sights plz-sights-nearby"><h2>${I("nearbySights", lang)} (${nearbyItems.length})</h2>${nearbyItems.map(({ s, i }) => renderSightCard(s, true, nAligned ? sightNameVariantsAt(nearbyObj, i, s.name as string) : undefined)).join("")}</section>`
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
    it: { now: "Ora", forecast: "Previsioni a 5 giorni", loading: "Meteo…" },
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
    it: { now: "Temperatura dell'acqua", forecast: "Tendenza a 7 giorni", loading: "Temperatura dell'acqua…" },
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
    it: { heading: "Notizie recenti", via: "fonte" },
  };
  const nc = newsCopy[lang] || newsCopy.en;

  // Official links (site + Facebook) — emitted next to the news block so users
  // can jump straight to municipal channels. Build-time read.
  let officialLinksHtml = "";
  try {
    const links = (OFFICIAL_LINKS as Record<string, { site?: string; fb?: string }>)[poi.id];
    if (links?.site || links?.fb) {
      const siteLabel: Partial<Record<Lang, string>> = { de: "Webseite", hu: "Honlap", ro: "Site", en: "Website", fr: "Site web", tr: "Web sitesi", hr: "Web stranica", it: "Sito web" };
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
        it: "Eventi principali del 2026",
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
        const dateEnd = (ev.date_end || ev.end_date || ev.endDate || "").slice(0, 10);
        const dateLabel = dateEnd && dateEnd !== d ? `${d} – ${dateEnd}` : d;
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
          else {
            const frequencyLabels: Record<string, Partial<Record<Lang, string>>> = {
              daily: { de: "täglich", hu: "naponta", ro: "zilnic", en: "daily", fr: "chaque jour", tr: "günlük", hr: "svakodnevno" },
              weekly: { de: "wöchentlich", hu: "hetente", ro: "săptămânal", en: "weekly", fr: "chaque semaine", tr: "haftalık", hr: "tjedno" },
              monthly: { de: "monatlich", hu: "havonta", ro: "lunar", en: "monthly", fr: "chaque mois", tr: "aylık", hr: "mjesečno" },
              yearly: { de: "jährlich", hu: "évente", ro: "anual", en: "yearly", fr: "chaque année", tr: "yıllık", hr: "godišnje" },
            };
            const frequency = ev.period.frequency
              ? (frequencyLabels[ev.period.frequency]?.[lang] || frequencyLabels[ev.period.frequency]?.en || ev.period.frequency)
              : "";
            const dayRaw = ev.period.applies_on_day as string | undefined;
            const dayTxt = dayRaw ? (DAY_I18N[dayRaw]?.[lang] || DAY_I18N[dayRaw]?.en || dayRaw) : "";
            periodTxt = [frequency, dayTxt, ev.period.start_time?.slice(0,5)].filter(Boolean).join(" · ");
          }
        }
        if (isRecurrent && !periodTxt) {
          const recurrentLabel: Partial<Record<Lang, string>> = {
            de: "wiederkehrend", hu: "ismétlődő", ro: "recurent", en: "recurring",
            fr: "récurrent", tr: "tekrarlanan", hr: "ponavljajuće",
          };
          periodTxt = recurrentLabel[lang] || recurrentLabel.en!;
        }
        const showDate = !!d && (!isRecurrent || !!dateEnd);
        const badges = [
          cat   ? `<span class="plz-yh-badge plz-yh-cat">${escapeHtml(cat)}</span>` : "",
          price ? `<span class="plz-yh-badge plz-yh-price">${escapeHtml(price)}</span>` : "",
          periodTxt ? `<span class="plz-yh-badge plz-yh-period">${escapeHtml(periodTxt)}</span>` : "",
        ].filter(Boolean).join("");
        const meta = (showDate || badges)
          ? `<div class="plz-yh-meta">${showDate ? `<time class="plz-yh-date" datetime="${escapeHtml(ev.date || "")}">${escapeHtml(dateLabel)}</time>` : ""}${badges}</div>`
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
  // SHOW_NEWS is a module-level const (currently false) → skip ALL news file I/O
  // when disabled; gate on NEWS_IDS so non-news POIs never hit the disk either.
  if (SHOW_NEWS && NEWS_IDS.has(poi.id)) try {
    const newsBase = path.join(NEWS_DIR, `${poi.id}.json`);
    const newsGz = newsBase + ".gz";
    let raw: string | null = null;
    if (fs.existsSync(newsBase)) raw = fs.readFileSync(newsBase, "utf-8");
    else if (fs.existsSync(newsGz)) raw = zlib.gunzipSync(fs.readFileSync(newsGz)).toString("utf-8");
    if (raw) {
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
  const heroFallback = poiPlaceholderSvg(poi.type);
  const heroOnError = `onerror="this.onerror=null;this.dataset.phf='1';this.src='${heroFallback}'"`;
  let heroHtml: string;
  if (heroImages.length === 0) {
    // Approved community images use a stable URL and become visible without a rebuild.
    heroHtml = `<div class="plz-hero plz-hero-ph"><img id="plz-user-hero" src="/poi-user-images/${encodeURIComponent(poi.id)}.webp" alt="${escapeHtml(buildAlt(name))}" loading="eager" fetchpriority="high" decoding="async" onload="if(this.currentSrc.indexOf('/poi-user-images/')>=0)this.dataset.userImageLoaded='1'" ${heroOnError}/></div>`;
  } else if (heroImages.length === 1) {
    heroHtml = `<div class="plz-hero"><img src="${escapeHtml(heroImages[0].src)}" alt="${escapeHtml(heroImages[0].alt)}" loading="eager" fetchpriority="high" decoding="async" ${heroOnError}/></div>`;
  } else {
    const slides = heroImages.map((h, i) => `<div class="plz-hero-slide" data-slide="${i}"><img src="${escapeHtml(h.src)}" alt="${escapeHtml(h.alt)}" loading="${i === 0 ? "eager" : "lazy"}"${i === 0 ? ' fetchpriority="high"' : ""} decoding="async" ${heroOnError}/></div>`).join("");
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

  // Keep the visible switcher aligned with generated pages and hreflang alternates.
  const switcherLangs: Lang[] = [
    ...SUPPORTED_LANGS,
    ...slugs.extraLangsFor(poi as any) as Lang[],
  ];
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
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="/poi-static/poi.css?v=20260801hero1"/>
${structuredData(poi, lang, url, metaDesc, countryId, countryName, faqItems, [
  { name: I("home", lang), url: `/${navLang}/` },
  { name: countryName, url: buildCountryPath(navLang, countryId) },
  ...((poi.parent !== countryId && stateRegion) ? [{ name: slugs.localizedStateName(poi.parent, lang), url: buildStatePath(navLang, poi.parent) }] : []),
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
  var mapQuiz=e.target.closest('.plz-map-quiz-button');if(mapQuiz){t('map_quiz_open',{country:${JSON.stringify(countryId)}});}
  var postcard=e.target.closest('.plz-postcard-button');if(postcard){t('postcard_open',{place:${JSON.stringify(name)}});}
  var lang=e.target.closest('[data-lang-switch]');if(lang){t('lang_switch',{to:lang.dataset.langSwitch});}
});
// FAQ open (details element)
document.querySelectorAll('.plz-faq-item summary,.plz-yh-collapse summary').forEach(function(s){s.addEventListener('click',function(){var d=s.parentElement;if(!d.hasAttribute('open')){t('faq_open',{q:(s.textContent||'').slice(0,80)});}});});
}
ready();})();</script>
<header class="plz-header">
  <div class="plz-header-inner">
    <a href="/${navLang}/" class="plz-logo">Plizio</a>
    <nav class="plz-nav">
      <a href="/${navLang}/">${I("home", lang)}</a>
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
  ${renderTrustStrip(lang)}
  <span class="plz-type-tag">${escapeHtml(typeLabel)}</span>
  ${audioHtml}
  ${renderStatsChips(poi, lang, richness, sightsArr.length, nearbyArr.length)}
  ${renderTabNav(lang, { hasItin: true, hasSights: sightsArr.length > 0 || nearbyArr.length > 0, hasNews: !!newsHtml, hasInfo: factsArr.length > 0 || geoItems.length > 0 || historyHtml })}
  <div class="plz-hero-grid" id="sec-overview">
    <div class="plz-hero-grid-main">${heroHtml}${heroImages.length === 0 ? renderPoiImageContribution(poi.id, name, lang) : ""}${heroSvHtml}${flagBtnHtml}</div>
    <div class="plz-hero-grid-side">${infoCardHtml || weatherHtml}${marineHtml}${officialLinksHtml}${yearlyHtml}${newsHtml}</div>
  </div>
  ${renderVisitInfo(poi, lang)}
  ${descText ? `<section><p class="poi-lead-paragraph">${escapeHtml(descText)}</p></section>` : ""}
  ${renderMapQuizCta(countryId, countryName, lang)}
  ${renderPostcardCta(poi, lang, countryId)}
  ${renderPlizioTip(poi, lang, name, sightsItems.slice(0, 3).map((x) => (typeof x.s.name === "string" ? x.s.name : "")), ((): { name: string; km: number } | null => { const nc = getNearbyCities(poi, 1, 90, 4)[0]; return nc ? { name: (getLocalized(nc.p.name as Partial<Record<string, string>>, lang) as string) || nc.p.id, km: nc.km } : null; })())}
  ${renderKeyFacts(poi, lang, countryName, sightsItems.slice(0, 3).map((x) => (typeof x.s.name === "string" ? x.s.name : "")), ((): { name: string; km: number } | null => { const nc = getNearbyCities(poi, 1, 90, 4)[0]; return nc ? { name: (getLocalized(nc.p.name as Partial<Record<string, string>>, lang) as string) || nc.p.id, km: nc.km } : null; })())}
  ${renderClimate(poi, lang)}
  ${renderWebcam(poi, lang)}
  <div id="sec-info">
  ${renderPracticalInfo(poi, lang)}
  ${geoItems.length > 0 || historyHtml ? `<section class="plz-geo-history">${historyHtml}${geoItems.length > 0 ? `<div class="plz-geo-box"><h3>${I("geography", lang)}</h3><div class="plz-meta">${geoItems.join("")}</div></div>` : ""}</section>` : ""}
  ${factsArr.length > 0 ? `<section><h2>${I("facts", lang)}</h2><ul class="plz-facts">${factsArr.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul></section>` : ""}
  ${didYouKnowHtml}
  </div>
  ${constellationHtml}
  ${"" /* renderRouteInfo: kivéve amíg a SAJÁT camper/gyalogos útvonal-tervező el nem készül — addig csak GMaps-re tudott linkelni + a közeli-helyek duplikálták a csillagtérképet (user 2026-06-04) */}
  ${renderVisitPlanner(poi, lang, richness.hasPlizioGo || hasRoutePlanner(poi))}
  <div id="sec-itin">${renderPlizioGo(poi, lang, name)}</div>
  <div id="sec-sights">
  ${sightsHtml}
  ${infoCardHtml ? "" : renderSightRadius(poi, lang)}
  ${nearbyHtml}
  </div>
  ${faqHtml}
  <section>
    <a class="plz-cta" href="${localizedCountryMapUrl(countryId, lang) ?? ((poi.parent !== countryId && stateRegion) ? buildStatePath(navLang, poi.parent) : buildCountryPath(navLang, countryId))}">${I("viewMap", lang)} →</a>
    ${hubLinkHtml}
    ${beachHubLinkHtml}
    ${osmLink}
  </section>
  ${renderExploreBlock({ poiId: poi.id, countryId, countryName: countryName, countryMapUrl: localizedCountryMapUrl(countryId, lang), lang: lang as any })}
  ${relatedItems}
  ${renderMobileFab(poi, lang, name)}
</main>
<div id="plz-lightbox" class="plz-lightbox" role="dialog" aria-modal="true" aria-hidden="true"><button type="button" class="plz-lightbox-close" aria-label="Close">×</button><img alt="" /></div>
<style>
.plz-map-quiz-cta{position:relative;isolation:isolate;display:grid;grid-template-columns:minmax(0,1fr) minmax(210px,34%);align-items:stretch;overflow:hidden;margin:1.5rem 0;border:1px solid rgba(91,68,40,.2);border-radius:22px;background:linear-gradient(125deg,#fffaf0 0%,#f5ead5 58%,#e7d1aa 100%);box-shadow:0 14px 36px rgba(77,53,28,.12);color:#30271e}
.plz-map-quiz-cta:before{content:"";position:absolute;inset:0;z-index:-1;opacity:.22;background-image:repeating-linear-gradient(0deg,transparent 0 27px,rgba(103,75,38,.16) 28px),repeating-linear-gradient(90deg,transparent 0 27px,rgba(103,75,38,.12) 28px)}
.plz-map-quiz-copy{padding:clamp(1.35rem,3vw,2.35rem)}
.plz-map-quiz-copy h2{max-width:23ch;margin:.15rem 0 .65rem;font-family:Georgia,"Times New Roman",serif;font-size:clamp(1.55rem,3vw,2.35rem);line-height:1.08;color:#30271e}
.plz-map-quiz-copy>p:not(.plz-map-quiz-eyebrow){max-width:58ch;margin:0;color:#5d4a37;line-height:1.6}
.plz-map-quiz-eyebrow{margin:0;color:#9a4f25;font-size:.76rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase}
.plz-map-quiz-actions{display:flex;flex-wrap:wrap;align-items:center;gap:.8rem;margin-top:1.15rem}
.plz-map-quiz-button{display:inline-flex;align-items:center;gap:.55rem;border-radius:999px;padding:.78rem 1.1rem;background:#9a4f25;color:#fff!important;font-weight:800;text-decoration:none;box-shadow:0 6px 15px rgba(110,52,22,.22);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.plz-map-quiz-button:hover{transform:translateY(-2px);background:#793b1b;box-shadow:0 9px 20px rgba(110,52,22,.28)}
.plz-map-quiz-button:focus-visible{outline:3px solid #30271e;outline-offset:3px}
.plz-map-quiz-count{padding:.46rem .7rem;border:1px solid rgba(91,68,40,.25);border-radius:999px;background:rgba(255,255,255,.48);font-size:.8rem;font-weight:800;color:#5d4a37}
.plz-map-quiz-art{position:relative;display:grid;place-items:center;min-height:220px;padding:1rem;background:linear-gradient(145deg,rgba(121,79,38,.08),rgba(255,255,255,.35))}
.plz-map-quiz-art svg{width:min(100%,320px);height:auto;overflow:visible;filter:drop-shadow(0 10px 10px rgba(80,49,24,.14))}
.plz-map-quiz-hanger{fill:none;stroke:#6b533a;stroke-width:2;stroke-linecap:round}
.plz-map-quiz-rail{fill:#76502f;stroke:#4f3521;stroke-width:2}
.plz-map-quiz-rail-bottom{fill:#68452a}
.plz-map-quiz-paper{fill:#e8d5a9;stroke:#6d5b3d;stroke-width:2}
.plz-map-quiz-grid path{fill:none;stroke:#8d7956;stroke-width:.8;opacity:.38}
.plz-map-quiz-coast{fill:#99aa87;stroke:#53634d;stroke-width:2.4;stroke-linejoin:round}
.plz-map-quiz-river{fill:none;stroke:#6d8f9b;stroke-width:3;stroke-linecap:round}
.plz-map-quiz-contours path{fill:none;stroke:#65745c;stroke-width:1;opacity:.72}
.plz-map-quiz-mark circle{fill:#f7efd9;stroke:#9a4f25;stroke-width:2.5}
.plz-map-quiz-mark text{fill:#74391c;font:800 12px Georgia,serif;text-anchor:middle}
.plz-map-quiz-question{fill:#f6efdc;stroke:#f6efdc;stroke-width:.6;paint-order:stroke;font:italic 700 48px Georgia,serif;transform:rotate(-7deg);transform-origin:224px 158px;filter:drop-shadow(1px 1px 0 rgba(75,57,36,.28))}
.plz-map-quiz-pointer{fill:none;stroke:#68452a;stroke-width:5;stroke-linecap:round;transform-origin:298px 210px;transition:transform .35s ease}
.plz-map-quiz-pointer circle{fill:#9a4f25;stroke:#f7efd9;stroke-width:2}
.plz-map-quiz-cta:hover .plz-map-quiz-pointer{transform:rotate(-5deg)}
.plz-map-quiz-mark{transition:transform .22s ease}
.plz-map-quiz-cta:hover .plz-map-quiz-mark-one{transform:translate(105px,70px)}
.plz-map-quiz-cta:hover .plz-map-quiz-mark-two{transform:translate(163px,115px);transition-delay:.06s}
.plz-map-quiz-cta:hover .plz-map-quiz-mark-three{transform:translate(229px,88px);transition-delay:.12s}
.plz-map-quiz-art strong{position:absolute;right:10%;bottom:9%;display:grid;place-items:center;width:56px;height:56px;border:3px double #9a4f25;border-radius:50%;background:#f7efd9;color:#9a4f25;font:800 1.45rem/1 Georgia,serif;transform:rotate(6deg);box-shadow:0 4px 10px rgba(80,49,24,.16)}
@media(max-width:700px){.plz-map-quiz-cta{grid-template-columns:1fr}.plz-map-quiz-art{min-height:155px;border-top:1px dashed rgba(91,68,40,.28)}.plz-map-quiz-art svg{max-height:145px}.plz-map-quiz-copy{padding:1.3rem}.plz-map-quiz-copy h2{font-size:1.65rem}}
.plz-sight-img-btn{padding:0;border:0;background:none;cursor:zoom-in;display:block}
.plz-sight-img-btn:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.plz-sight-sv{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;margin-left:8px;vertical-align:-5px;border-radius:50%;background:#fbbc04;color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.35);transition:transform .15s,box-shadow .15s}
.plz-sight-sv:hover{transform:scale(1.18);box-shadow:0 2px 8px rgba(251,188,4,.6);background:#f9ab00}
.plz-sight-sv svg{display:block}
.plz-sight-gm{background:#ea4335}
.plz-sight-gm:hover{background:#d33426;box-shadow:0 2px 8px rgba(234,67,53,.6)}
.plz-sight-facts{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:6px;font-size:.82rem;color:var(--ink-soft)}
.plz-sight-facts a.plz-sf-web{color:var(--accent);text-decoration:none}
.plz-sight-facts a.plz-sf-web:hover{text-decoration:underline}
.plz-sight-cat{display:inline-block;margin-left:8px;vertical-align:2px;background:var(--accent-wash);border:1px solid var(--rule);border-radius:999px;padding:2px 9px;font-size:.62rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.04em;white-space:nowrap}
.plz-hero-sv{position:absolute;right:10px;bottom:10px;z-index:5;display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:#fbbc04;color:#fff;box-shadow:0 2px 6px rgba(0,0,0,.45);transition:transform .15s,box-shadow .15s}
.plz-hero-sv:hover{transform:scale(1.12);box-shadow:0 3px 10px rgba(251,188,4,.65);background:#f9ab00}
.plz-hero-sv svg{display:block;width:22px;height:22px}
.plz-itin-sv{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#fbbc04;color:#fff}
.plz-itin-sv svg{display:block;width:13px;height:13px}
.plz-sgr{margin-top:1.2rem}
.plz-sgr-chips{display:flex;gap:.5rem;flex-wrap:wrap;margin:.4rem 0 .7rem}
.plz-sgr-chip{background:var(--panel);border:1px solid var(--rule);color:var(--ink-soft);border-radius:999px;padding:.4rem .95rem;font-size:.85rem;font-weight:700;cursor:pointer;transition:background .15s,border-color .15s}
.plz-sgr-chip:hover{background:var(--paper-2)}
.plz-sgr-chip.on{background:var(--accent);border-color:var(--accent);color:#fff}
.plz-sgr-sep{width:1px;align-self:stretch;background:var(--rule);margin:0 .15rem}
.plz-sgr-cat{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;background:var(--panel);border:1px solid var(--rule);color:var(--ink-soft);border-radius:999px;cursor:pointer;transition:background .15s,border-color .15s,color .15s}
.plz-sgr-cat:hover{background:var(--paper-2);color:var(--ink)}
.plz-sgr-cat.on{background:var(--accent);border-color:var(--accent);color:#fff}
.plz-sgr-it{cursor:pointer}
.plz-sgr-it.open{background:var(--paper-2);border-radius:var(--r) var(--r) 0 0}
.plz-sgr-desc{background:var(--accent-wash);border-left:3px solid var(--accent);border-radius:0 0 var(--r) var(--r);padding:.55rem .8rem;margin:0 0 .35rem;font-size:.83rem;line-height:1.5;color:var(--ink-soft)}
.plz-sgr-more{display:inline-block;margin-top:.4rem;color:var(--accent);font-weight:700;font-size:.78rem;text-decoration:none}
.plz-sgr-more:hover{text-decoration:underline}
.plz-sgr-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:.35rem .8rem;max-height:420px;overflow-y:auto;padding-right:.3rem}
.plz-sgr-it{display:flex;align-items:center;gap:.5rem;padding:.32rem .45rem;border-radius:var(--r);background:var(--panel);font-size:.85rem;min-width:0}
.plz-sgr-d{flex-shrink:0;font-size:.7rem;font-weight:800;color:var(--accent);min-width:46px}
.plz-sgr-nm{color:var(--ink);text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0}
a.plz-sgr-nm:hover{text-decoration:underline}
.plz-sgr-sv{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:#fbbc04;color:#fff}
.plz-sgr-gm{background:#ea4335}
.plz-sgr-gm:hover{background:#d33426}
.plz-sgr-load{padding:1.2rem;text-align:center;color:var(--ink-soft);grid-column:1/-1}
.plz-sgr-spin{display:inline-block;width:26px;height:26px;border-radius:50%;border:3px solid var(--rule);border-top-color:var(--accent);animation:plzsgrspin .8s linear infinite}
@keyframes plzsgrspin{to{transform:rotate(360deg)}}
.plz-icard{background:var(--panel);border:1px solid var(--rule);border-radius:var(--r);overflow:hidden;margin-bottom:12px}
.plz-icard summary{display:flex;align-items:center;gap:8px;padding:11px 14px;cursor:pointer;list-style:none;font-weight:800;font-size:.95rem;-webkit-tap-highlight-color:transparent}
.plz-icard summary::-webkit-details-marker{display:none}
.plz-ic-h{margin:0;font-size:.95rem;font-weight:800;display:inline}
.plz-ic-ico{font-size:1.05rem}
.plz-ic-arrow{margin-left:auto;color:var(--accent);transition:transform .2s}
.plz-icard[open] .plz-ic-arrow{transform:rotate(180deg)}
.plz-ic-body{padding:0 14px 12px}
.plz-ic-sec{padding:8px 0;border-top:1px solid var(--rule-soft)}
.plz-ic-sec h4{margin:0 0 6px;font-size:.7rem;text-transform:uppercase;letter-spacing:.07em;color:var(--accent)}
.plz-ic-wx{display:flex;gap:5px;overflow-x:auto}
.plz-ic-wd{flex:1;min-width:50px;background:var(--paper-2);border-radius:var(--r);padding:6px 3px;text-align:center}
.plz-ic-wd .d{font-size:.6rem;color:var(--ink-soft)}.plz-ic-wd .i{font-size:1.05rem;margin:2px 0}
.plz-ic-wd .t{font-size:.72rem;font-weight:700}.plz-ic-wd .t small{color:var(--ink-faint);font-weight:400}
.plz-ic-fei{background:var(--accent-wash);border:1px solid var(--rule);border-radius:var(--r);padding:7px 9px;font-size:.78rem;margin-top:8px}
.plz-ic-fei b{color:var(--accent-deep)}
.plz-ic-fei.is-none{background:var(--panel);color:var(--ink-soft)}
.plz-ic-tips{margin:0;padding-left:17px;font-size:.8rem;color:var(--ink-soft)}.plz-ic-tips li{margin:3px 0}
.plz-ic-pick{display:flex;gap:7px;padding:4px 0;font-size:.81rem}
.plz-ic-pick p{margin:1px 0 0;color:var(--ink-faint);font-size:.74rem}
.plz-icard .plz-sgr{margin-top:0}.plz-icard .plz-sgr h2{display:none}
.plz-icard .plz-sgr-list{max-height:300px}
.plz-lightbox{position:fixed;inset:0;background:rgba(2,6,12,.92);display:none;align-items:center;justify-content:center;z-index:9999;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);-webkit-tap-highlight-color:transparent}
.plz-lightbox.open{display:flex}
.plz-lightbox img{max-width:min(95vw,1400px);max-height:min(90vh,1400px);width:auto;height:auto;object-fit:contain;border-radius:var(--r);box-shadow:0 8px 40px rgba(0,0,0,.6)}
.plz-lightbox-close{position:absolute;top:max(12px,env(safe-area-inset-top));right:max(12px,env(safe-area-inset-right));width:44px;height:44px;border-radius:50%;background:rgba(0,0,0,.6);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:1.6rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}
.plz-lightbox-close:hover{background:rgba(0,0,0,.8)}
@media (max-width:640px){.plz-lightbox img{max-width:95vw;max-height:80vh}}
.plz-planner{display:block;margin:1.6rem 0;border:1px solid var(--rule);border-radius:var(--r);background:var(--panel);padding:1.1rem 1.1rem 1.2rem}
.plz-pl-h{font-size:1.12rem;font-weight:700;color:var(--ink);margin:0 0 .3rem}
.plz-pl-sub{color:var(--ink-soft);font-size:.9rem;margin:0 0 1rem}
.plz-pl-lbl{font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;color:var(--ink-soft);margin:.2rem 0 .5rem}
.plz-pl-opts{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:.9rem}
.plz-pl-opt{appearance:none;border:1px solid var(--rule);background:var(--paper-2);color:var(--ink);padding:.5rem .9rem;border-radius:var(--r);font-size:.9rem;font-weight:600;cursor:pointer;transition:.15s}
.plz-pl-opt:hover{border-color:var(--accent)}
.plz-pl-opt[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:#fff}
.plz-pl-go{margin-top:.2rem;width:100%;padding:.8rem;border:0;border-radius:var(--r);background:var(--accent);color:#fff;font-size:.98rem;font-weight:700;cursor:pointer}
.plz-pl-go:hover{background:var(--accent-deep)}
.plz-pl-rhead{margin:1.1rem 0 .9rem}
.plz-pl-meta{color:var(--ink-soft);font-size:.9rem}
.plz-pl-meta b{color:var(--ink)}
.plz-pl-list{list-style:none;margin:0;padding:0}
.plz-pl-stop{display:flex;gap:.85rem}
.plz-pl-rail{flex:none;display:flex;flex-direction:column;align-items:center;width:28px}
.plz-pl-num{width:28px;height:28px;border-radius:50%;background:var(--accent);color:#fff;font-weight:700;font-size:.85rem;display:flex;align-items:center;justify-content:center;flex:none}
.plz-pl-line{flex:1;width:2px;background:var(--rule);margin:.2rem 0}
.plz-pl-body{flex:1;padding-bottom:1rem;min-width:0}
.plz-pl-card{border:1px solid var(--rule);border-radius:var(--r);background:var(--paper-2);padding:.7rem .85rem}
.plz-pl-card h3{margin:0;font-size:1rem}
.plz-pl-card h3 a{color:var(--ink);text-decoration:none}
.plz-pl-card h3 a:hover{color:var(--accent)}
.plz-pl-tags{display:flex;gap:.45rem;flex-wrap:wrap;margin-top:.4rem}
.plz-pl-tag{font-size:.72rem;padding:.16rem .48rem;border-radius:var(--r);background:var(--accent-wash);color:var(--accent-deep);border:1px solid var(--rule)}
.plz-pl-tag.g{background:var(--accent-wash);color:var(--accent-deep);border-color:var(--rule)}
.plz-pl-walk{display:flex;align-items:center;gap:.4rem;color:var(--ink-soft);font-size:.8rem;margin:.05rem 0 .55rem 5px}
.plz-pl-walk svg{opacity:.7}
.plz-pl-empty{color:var(--ink-soft);text-align:center;padding:1.2rem 0;list-style:none}
.plz-pl-acts{display:flex;gap:.55rem;margin-top:.9rem;flex-wrap:wrap}
.plz-pl-act{border:1px solid var(--rule);background:var(--paper-2);color:var(--ink);padding:.55rem .95rem;border-radius:var(--r);font-size:.88rem;font-weight:600;cursor:pointer}
.plz-pl-act:hover{border-color:var(--accent)}
.plz-pl-note{color:var(--accent-deep);font-size:.84rem;margin-top:.5rem;min-height:1em}
.plz-route{margin:1.4rem 0}
.plz-route h2{font-size:1.12rem;color:var(--ink);margin:0 0 .5rem}
.plz-route-lead{color:var(--ink-soft);margin:0 0 .55rem}
.plz-route-near{color:var(--ink-soft);font-size:.92rem;margin:.2rem 0 .55rem}
.plz-route-near b{color:var(--ink)}
.plz-route-near a{color:var(--accent);text-decoration:none}
.plz-route-near a:hover{text-decoration:underline}
.plz-route-modes{color:var(--ink-soft);font-size:.92rem;margin:.2rem 0 .6rem}
.plz-route-btns{display:flex;flex-wrap:wrap;gap:.5rem}
.plz-route-btn{display:inline-flex;align-items:center;gap:.35rem;padding:.5rem .85rem;border-radius:var(--r);background:var(--paper-2);border:1px solid var(--rule);color:var(--ink);font-size:.92rem;font-weight:600;text-decoration:none;transition:background .15s,border-color .15s}
.plz-route-btn:hover{background:var(--accent-wash);border-color:var(--accent)}
.plz-climate{margin:1.4rem 0}
.plz-climate h2{font-size:1.12rem;color:var(--ink);margin:0 0 .4rem}
.plz-climate-best{color:var(--ink-soft);margin:0 0 .55rem}
.plz-climate-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch}
.plz-climate-tbl{border-collapse:collapse;font-size:.82rem;min-width:100%}
.plz-climate-tbl th,.plz-climate-tbl td{padding:.32rem .42rem;text-align:center;color:var(--ink-soft);border-bottom:1px solid var(--rule-soft);white-space:nowrap}
.plz-climate-tbl td.rl{text-align:left;color:var(--ink-faint);font-size:.78rem}
.plz-climate-tbl th.b,.plz-climate-tbl td.b{background:var(--accent-wash);color:var(--accent-deep);font-weight:600}
.plz-visit{margin:1.4rem 0}
.plz-vi-h{font-size:1.05rem;font-weight:700;color:var(--ink);margin:0 0 .7rem}
.plz-vi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.6rem}
.plz-vi-chip{display:flex;align-items:center;gap:.6rem;padding:.6rem .8rem;border:1px solid var(--rule);border-radius:var(--r);background:var(--panel)}
.plz-vi-chip svg{flex:none;color:var(--accent);opacity:.9}
.plz-vi-chip>div{display:flex;flex-direction:column;line-height:1.25;min-width:0}
.plz-vi-k{font-size:.72rem;text-transform:uppercase;letter-spacing:.04em;color:var(--ink-soft)}
.plz-vi-v{font-size:.96rem;font-weight:600;color:var(--ink)}
.plz-vi-v em{font-style:normal;font-weight:400;font-size:.8rem;color:var(--ink-soft)}
.plz-faq{margin:1.8rem 0}
.plz-faq-item{border:1px solid var(--rule);border-radius:var(--r);margin:.55rem 0;background:var(--panel);overflow:hidden;transition:border-color .2s,background .2s}
.plz-faq-item[open]{border-color:var(--accent);background:var(--accent-wash)}
.plz-faq-item summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:.85rem;padding:.9rem 1.05rem;font-weight:600;font-size:.98rem;color:var(--ink)}
.plz-faq-item summary::-webkit-details-marker{display:none}
.plz-faq-item summary:hover{color:var(--accent)}
.plz-faq-q{flex:1}
.plz-faq-chev{flex:none;transition:transform .25s ease;opacity:.65;color:var(--accent)}
.plz-faq-item[open] .plz-faq-chev{transform:rotate(180deg);opacity:1}
.plz-faq-a{padding:0 1.05rem 1rem;line-height:1.62;color:var(--ink-soft);font-size:.94rem}
.plz-constel-sec{margin:1.6rem 0}
.plz-constel-sub{margin:.15rem 0 .8rem;opacity:.65;font-size:.9rem}
.plz-constel{position:relative;width:100%;max-width:560px;margin:0 auto;aspect-ratio:4/3}
.plz-cst-stage{position:absolute;inset:0;border:1px solid var(--rule);border-radius:var(--r);overflow:hidden;background:radial-gradient(120% 100% at 50% 38%,var(--paper) 0%,var(--paper-2) 65%,var(--accent-wash) 100%);box-shadow:inset 0 0 55px rgba(94,65,38,.08),0 6px 22px rgba(64,45,27,.12)}
.plz-cst-svg{position:absolute;inset:0;width:100%;height:100%}
.plz-cst-ring{fill:none;stroke:var(--rule);stroke-width:.3}
.plz-cst-arc{fill:none;stroke:var(--accent);stroke-width:.42;stroke-linecap:round;opacity:.42}
.plz-cst-halo{fill:var(--accent-wash);transform-box:fill-box;transform-origin:center;animation:plzCstPulse 3.4s ease-in-out infinite}
.plz-cst-core{fill:var(--accent);filter:drop-shadow(0 0 1.5px rgba(151,94,47,.45))}
.plz-cst-comp{fill:var(--ink-faint);font-size:3.6px;font-family:system-ui,-apple-system,sans-serif;font-weight:700;text-anchor:middle;dominant-baseline:middle;letter-spacing:.3px}
@keyframes plzCstPulse{0%,100%{opacity:.34;transform:scale(1)}50%{opacity:.72;transform:scale(1.22)}}
@media (prefers-reduced-motion:reduce){.plz-cst-halo{animation:none}}
.plz-cst-nodes{position:absolute;inset:0}
.plz-cst-node{position:absolute;transform:translate(-50%,-50%);z-index:1}
.plz-cst-node.open{z-index:6}
.plz-cst-dot{display:block;width:var(--d,10px);height:var(--d,10px);border-radius:50%;cursor:pointer;background:radial-gradient(circle at 34% 30%,var(--paper),var(--accent) 62%,var(--accent-deep));box-shadow:0 0 0 2px var(--paper),0 0 8px rgba(151,94,47,.5);transition:transform .15s;-webkit-tap-highlight-color:transparent;touch-action:manipulation}
.plz-cst-dot:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
.plz-cst-node.open .plz-cst-dot{transform:scale(1.28)}
.plz-cst-card{position:absolute;left:50%;bottom:calc(100% + 7px);transform:translateX(-50%) scale(.92);transform-origin:bottom center;width:max-content;max-width:172px;background:var(--paper);border:1px solid var(--rule);border-radius:var(--r);padding:7px;display:flex;gap:8px;align-items:flex-start;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .15s,transform .15s;box-shadow:0 10px 28px rgba(64,45,27,.2);text-decoration:none;color:var(--ink)}
.plz-cst-card::after{content:"";position:absolute;left:0;right:0;top:100%;height:9px}
.plz-cst-node--low .plz-cst-card{bottom:auto;top:calc(100% + 7px);transform-origin:top center}
.plz-cst-node--low .plz-cst-card::after{top:auto;bottom:100%}
.plz-cst-node.open .plz-cst-card{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) scale(1)}
.plz-cst-thumb{width:46px;height:46px;border-radius:var(--r);overflow:hidden;flex:0 0 auto;background:var(--paper-2);display:flex;align-items:center;justify-content:center;font-size:1.2rem}
.plz-cst-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.plz-cst-info{display:flex;flex-direction:column;gap:1px;min-width:0}
.plz-cst-name{font-size:.82rem;font-weight:700;color:var(--ink);line-height:1.18}
.plz-cst-dist{font-size:.72rem;color:var(--ink-soft)}
.plz-cst-go{font-size:.72rem;font-weight:700;color:var(--accent);margin-top:3px}
@media (hover:hover) and (pointer:fine){.plz-cst-node:hover{z-index:6}.plz-cst-node:hover .plz-cst-dot{transform:scale(1.28)}.plz-cst-node:hover .plz-cst-card{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) scale(1)}}
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
${renderReportWidget(lang)}
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
      // Skip orphan-parent POIs: getCountryId would fall back to "germany" and route
      // them to /de/deutschland/ort/<slug>/ (a non-existent state) — 404. Excluding them
      // from generation keeps sitemap/url-index/pages consistent (no broken pages/links).
      // (Real fix later: give these POIs a recognized parent. 2026-06-12.)
      && slugs.getCountryIdStrict(p.parent) != null
  );
  console.log(`Eligible POIs: ${eligible.length}`);
  // RICHNESS_REPORT=1 → print per-bucket content-quality distribution (de lang) and
  // exit, without writing files. Used to decide index-discipline thresholds.
  if (process.env.RICHNESS_REPORT === "1") {
    const b = { empty: 0, weak: 0, ok: 0, rich: 0, pliziogo: 0, withSights: 0, withEvents: 0 };
    const descBuckets = { "<250": 0, "250-500": 0, "500-1000": 0, "1000+": 0 };
    for (const p of eligible) {
      const r = pageRichness(p, "de" as Lang);
      if (r.hasPlizioGo) b.pliziogo++;
      if (r.hasSights) b.withSights++;
      if ((YEARLY_HIGHLIGHTS[p.id] || []).length > 0) b.withEvents++;
      if (r.isEmpty) b.empty++; else if (r.isWeak) b.weak++; else if (r.descChars >= 1000 || (r.hasSights && r.factsCount >= 4)) b.rich++; else b.ok++;
      const d = r.descChars;
      if (d < 250) descBuckets["<250"]++; else if (d < 500) descBuckets["250-500"]++; else if (d < 1000) descBuckets["500-1000"]++; else descBuckets["1000+"]++;
    }
    console.log("=== RICHNESS REPORT (de, eligible=" + eligible.length + ") ===");
    console.log("buckets:", JSON.stringify(b, null, 0));
    console.log("descChars:", JSON.stringify(descBuckets, null, 0));
    console.log("currently noindexed (isEmpty):", b.empty, "| indexed-but-weak (isWeak, not empty):", b.weak);
    return;
  }
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
  // Authoritative url-index: id → {lang: actual written path}. This is the SINGLE
  // SOURCE OF TRUTH for internal links (hubs/nearby/sights) and the sitemap, because
  // it reflects EXACTLY the pages we write — unlike build-poi-url-index (poisLite),
  // which diverged from the generator's parent resolution (donana → /spanien/spanien/
  // vs the real /spanien/galicien/) and routed orphans to /deutschland/ort/. 2026-06-12.
  const URL_INDEX_OUT: Record<string, Record<string, string>> = {};

  for (const poi of target) {
    // FR POIs get an additional `fr` page; DE → `tr`; HR (hr-native) → `hr`.
    const extraPoi = slugs.extraLangsFor(poi as any) as Lang[];
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
      (URL_INDEX_OUT[poi.id] ||= {})[lang] = url; // authoritative: id → actually-written path
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
  if (fs.existsSync(sightIdxFp) && process.env.SKIP_SIGHT_PAGES !== "1") {
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

  // Write the AUTHORITATIVE url-index from the pages we actually generated.
  // FULL run → overwrite; DELTA run (POI_IDS filter) → merge into the existing
  // index so unchanged POIs keep their entries. Internal-link builders (hubs,
  // nearby, sitemap) consuming this file can never point at a non-existent page.
  if (process.env.SKIP_INDEX_WRITE !== "1") try {
    const idxPath = path.resolve(process.cwd(), "public", "data", "_poi-url-index.json");
    const isDelta = !!(POI_IDS_FILE || POI_IDS_INLINE);
    let merged: Record<string, Record<string, string>> = URL_INDEX_OUT;
    if (isDelta && fs.existsSync(idxPath)) {
      try {
        const existing = JSON.parse(fs.readFileSync(idxPath, "utf-8"));
        merged = { ...existing, ...URL_INDEX_OUT };
      } catch { /* keep URL_INDEX_OUT */ }
    }
    fs.writeFileSync(idxPath, JSON.stringify(merged), "utf8");
    console.log(`Authoritative url-index: ${Object.keys(URL_INDEX_OUT).length} POIs written${isDelta ? ` (delta merge → ${Object.keys(merged).length} total)` : ""} → _poi-url-index.json`);
  } catch (e) {
    console.warn("url-index write failed:", e);
  }

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
  const _descRaw = (data.descriptionAdvanced && data.descriptionAdvanced[lang]) || "";
  // noindex this sight page in langs where its own content is missing/thin
  // (was falling back to .de and getting indexed as wrong-language duplicate).
  const sightDescEmpty = !_descRaw || _descRaw.trim().length < 80;
  const desc = deSlop(stripCurriculumLeak(_descRaw || data.descriptionAdvanced?.de || ""), lang, host.id + ":sp:" + (data.slug || sightName));
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
    es: { address: "Dirección", openingHours: "Horario", entranceFee: "Entrada", website: "Sitio web",
          publicTransport: "Transporte público", parking: "Aparcamiento", accessibility: "Accesibilidad",
          photoRules: "Fotografía", bestTimeToVisit: "Mejor momento", audioGuide: "Audioguía",
          practical: "Información práctica", facts: "¿Sabías que...?", backToCity: "← Volver a la ciudad" },
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
  const metaDesc = smartMetaDesc(desc, `${sightName} in ${hostName}.`);

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
${sightDescEmpty ? `<meta name="robots" content="noindex,follow"/>` : ""}
<link rel="canonical" href="${sightUrl}"/>
${hreflangLinks}
<link rel="alternate" hreflang="x-default" href="${sightAlternates.en}"/>
<meta property="og:title" content="${escapeHtml(sightName)}"/>
<meta property="og:description" content="${escapeHtml(metaDesc)}"/>
<meta property="og:url" content="${sightUrl}"/>
<meta property="og:type" content="article"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="/poi-static/poi.css?v=20260712pc1"/>
<style>
.plz-sp-back{display:inline-flex;align-items:center;gap:.4rem;color:var(--accent);text-decoration:none;font-size:.85rem;margin-bottom:.5rem}
.plz-sp-back:hover{color:var(--accent-deep)}
.plz-sp-desc{margin:1rem 0 1.2rem 0;font-size:.95rem;line-height:1.65;color:var(--ink-soft)}
.plz-sp-practical{background:var(--accent-wash);border:1px solid var(--rule);border-radius:var(--r);padding:.9rem 1rem;margin:1.2rem 0}
.plz-sp-practical h2{margin:0 0 .8rem 0;font-size:.95rem;color:var(--accent);text-transform:uppercase;letter-spacing:.05em;font-weight:600}
.plz-sp-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.4rem .9rem}
.plz-sp-row{display:flex;align-items:flex-start;gap:.6rem;padding:.35rem 0}
.plz-sp-icon{flex:0 0 18px;width:18px;height:18px;color:var(--accent);margin-top:2px}
.plz-sp-icon svg{width:100%;height:100%;display:block}
.plz-sp-row-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
.plz-sp-row-label{font-size:.7rem;color:var(--ink-faint);text-transform:uppercase;letter-spacing:.03em}
.plz-sp-row-val{font-size:.85rem;color:var(--ink);line-height:1.4;word-break:break-word}
.plz-sp-link{color:var(--accent);text-decoration:none}
.plz-sp-link:hover{text-decoration:underline}
.plz-sp-facts{margin:1.2rem 0}
.plz-sp-facts h2{font-size:1rem;color:var(--ink);margin:0 0 .5rem 0;font-weight:600}
.plz-sp-facts ul{margin:0;padding-left:1.2rem;color:var(--ink-soft);font-size:.88rem;line-height:1.6}
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
    ${(host.parent && host.parent !== countryId && slugs.getStateForPoi(host)) ? `<a href="${buildStatePath(lang, host.parent)}">${escapeHtml(slugs.localizedStateName(host.parent, lang))}</a><span>›</span>` : ""}
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
