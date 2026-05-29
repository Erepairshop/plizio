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
import * as _slugsNs from "../lib/seo/slugs";
import type { POI } from "../lib/visualLab/data/poi";
import * as _exploreNs from "../lib/explore/explore-block";
const _expl: any = (_exploreNs as any).default ?? _exploreNs;
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
// Fallback: ship `_image-manifest.json` (53K basenames) in repo so delta deploys
// running on a self-hosted runner without symlinked image dirs can still resolve
// hero-image fallbacks. Only used when the directory scan came up empty/short.
try {
  const manifestPath = path.resolve(process.cwd(), "public", "data", "_image-manifest.json");
  if (fs.existsSync(manifestPath) && IMG_SET.size < 1000) {
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

// FAQ sidecar — 5 Q&A per POI in 4 langs (de/hu/ro/en), AI-generated.
// Loaded at startup. Renderer emits both a visible accordion AND a
// FAQPage JSON-LD schema for Google rich-snippet eligibility.
type FAQItem = { q: Partial<Record<string,string>>; a: Partial<Record<string,string>> };
let FAQS: Record<string, FAQItem[]> = {};
try {
  const fp = path.resolve(process.cwd(), "public", "data", "poi-faqs.json");
  if (fs.existsSync(fp)) {
    FAQS = JSON.parse(fs.readFileSync(fp, "utf-8"));
  }
} catch {}

function renderFAQ(poi: POI, lang: Lang): string {
  const items = FAQS[poi.id];
  if (!items || items.length === 0) return "";
  const heading: Record<string, string> = {
    de: "Häufige Fragen", hu: "Gyakori kérdések", ro: "Întrebări frecvente",
    en: "Frequently asked questions", fr: "Questions fréquentes", tr: "Sıkça sorulan sorular",
  };
  const head = heading[lang] || heading.en!;
  const accordion = items.map((it, i) => {
    const q = (it.q?.[lang] || it.q?.en || it.q?.de || "").trim();
    const a = (it.a?.[lang] || it.a?.en || it.a?.de || "").trim();
    if (!q || !a) return "";
    return `<details class="plz-faq-item"${i === 0 ? " open" : ""}><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`;
  }).filter(Boolean).join("");
  if (!accordion) return "";
  // Schema.org FAQPage JSON-LD (lang-aware)
  const mainEntity = items.map((it) => {
    const q = (it.q?.[lang] || it.q?.en || it.q?.de || "").trim();
    const a = (it.a?.[lang] || it.a?.en || it.a?.de || "").trim();
    if (!q || !a) return null;
    return { "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } };
  }).filter(Boolean);
  const jsonld = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": mainEntity });
  return `<section class="plz-faq"><h2>${escapeHtml(head)}</h2>${accordion}</section>
<script type="application/ld+json">${jsonld.replace(/</g, "\\u003c")}</script>`;
}

// Sight image map (slugified-sight-name + poi-id → /sight-images/X.webp).
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
  ]);
  const all = ([] as POI[]).concat(
    dePois as POI[], ALL_DE_EXTRA_POIS as POI[], romaniaAllPois as POI[], hungaryAllPoi as POI[],
    [vaticanCountry as POI], vaticanPois as POI[], ALL_COUNTRY_POIS as POI[],
    poiExtraDeV1 as POI[], poiExtraRoV1 as POI[], poiExtraHuV4 as POI[], poiExtraFrV1 as POI[],
    poiExtraUkV1 as POI[], poiExtraUkMissingV1 as POI[], poiExtraAtChMissingV1 as POI[],
    poiExtraHrV1 as POI[], poiExtraHrV2 as POI[], poiExtraItalyV2 as POI[], poiExtraEsV2 as POI[],
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
  const out = Array.from(byId.values());
  console.log(`[generate-poi-html] loaded ${out.length} full POIs`);
  return out;
}
const pois: POI[] = await loadFullPois();
// Build a global id→POI lookup for cross-referencing (e.g. sight name internal links).
const allById = new Map<string, POI>(pois.filter(p => p?.id).map(p => [p.id, p]));
type Lang = "de" | "hu" | "ro" | "en" | "fr" | "tr";

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
  },
  castle: {
    de: ["Burg", "Geschichte", "Karte", "Fotos", "Wetter"],
    hu: ["Vár", "Történelem", "Térkép", "Fotók", "Időjárás"],
    ro: ["Castel", "Istorie", "Hartă", "Fotografii", "Vremea"],
    en: ["Castle", "History", "Map", "Photos", "Weather"],
    fr: ["Château", "Histoire", "Carte", "Photos", "Météo"],
    tr: ["Kale", "Tarih", "Harita", "Fotoğraflar", "Hava durumu"],
  },
  mountain: {
    de: ["Wandern", "Karte", "Wetter", "Fotos", "Höhe"],
    hu: ["Túrázás", "Térkép", "Időjárás", "Fotók", "Magasság"],
    ro: ["Drumeții", "Hartă", "Vremea", "Fotografii", "Altitudine"],
    en: ["Hiking", "Map", "Weather", "Photos", "Elevation"],
    fr: ["Randonnée", "Carte", "Météo", "Photos", "Altitude"],
    tr: ["Yürüyüş", "Harita", "Hava durumu", "Fotoğraflar", "Yükseklik"],
  },
  lake: {
    de: ["Strände", "Karte", "Wetter", "Sehenswürdigkeiten", "Fotos"],
    hu: ["Strandok", "Térkép", "Időjárás", "Látnivalók", "Fotók"],
    ro: ["Plaje", "Hartă", "Vremea", "Obiective", "Fotografii"],
    en: ["Beaches", "Map", "Weather", "Sights", "Photos"],
    fr: ["Plages", "Carte", "Météo", "Sites", "Photos"],
    tr: ["Plajlar", "Harita", "Hava durumu", "Gezilecek yerler", "Fotoğraflar"],
  },
  river: {
    de: ["Karte", "Verlauf", "Sehenswürdigkeiten", "Wetter", "Fotos"],
    hu: ["Térkép", "Folyamatos", "Látnivalók", "Időjárás", "Fotók"],
    ro: ["Hartă", "Curs", "Obiective", "Vremea", "Fotografii"],
    en: ["Map", "Course", "Sights", "Weather", "Photos"],
    fr: ["Carte", "Cours", "Sites", "Météo", "Photos"],
    tr: ["Harita", "Akış", "Gezilecek yerler", "Hava durumu", "Fotoğraflar"],
  },
  historical: {
    de: ["Geschichte", "Karte", "Sehenswürdigkeiten", "Fotos", "Besuch"],
    hu: ["Történelem", "Térkép", "Látnivalók", "Fotók", "Látogatás"],
    ro: ["Istorie", "Hartă", "Obiective", "Fotografii", "Vizită"],
    en: ["History", "Map", "Sights", "Photos", "Visit"],
    fr: ["Histoire", "Carte", "Sites", "Photos", "Visite"],
    tr: ["Tarih", "Harita", "Gezilecek yerler", "Fotoğraflar", "Ziyaret"],
  },
  landmark: {
    de: ["Sehenswürdigkeiten", "Karte", "Fotos", "Geschichte", "Wetter"],
    hu: ["Látnivalók", "Térkép", "Fotók", "Történelem", "Időjárás"],
    ro: ["Obiective", "Hartă", "Fotografii", "Istorie", "Vremea"],
    en: ["Sights", "Map", "Photos", "History", "Weather"],
    fr: ["Sites touristiques", "Carte", "Photos", "Histoire", "Météo"],
    tr: ["Gezilecek yerler", "Harita", "Fotoğraflar", "Tarih", "Hava durumu"],
  },
  nature: {
    de: ["Karte", "Wetter", "Wandern", "Fotos", "Natur"],
    hu: ["Térkép", "Időjárás", "Túrázás", "Fotók", "Természet"],
    ro: ["Hartă", "Vremea", "Drumeții", "Fotografii", "Natură"],
    en: ["Map", "Weather", "Hiking", "Photos", "Nature"],
    fr: ["Carte", "Météo", "Randonnée", "Photos", "Nature"],
    tr: ["Harita", "Hava durumu", "Yürüyüş", "Fotoğraflar", "Doğa"],
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
  // FR POIs get an extra fr alternate; DE POIs get an extra tr (Turkish residents).
  const extra: Lang[] = poi.parent?.startsWith("FR") ? ["fr"]
                     : poi.parent?.startsWith("DE") ? ["tr"]
                     : [];
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
    const href = buildPoiPath(lang, q.p);
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
    + `<script>(function(){var ns=[].slice.call(document.querySelectorAll('.plz-cst-node'));if(!ns.length)return;function close(){ns.forEach(function(m){m.classList.remove('open');});}ns.forEach(function(n){var d=n.querySelector('.plz-cst-dot');function tog(e){e.preventDefault();e.stopPropagation();var was=n.classList.contains('open');close();if(!was)n.classList.add('open');}d.addEventListener('click',tog);d.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' ')tog(e);});});document.addEventListener('click',close);})();</script>`
    + `</section>`;
}

const OUT_DIR = path.resolve(process.cwd(), process.env.OUT_DIR || "out");
const GEN_LIMIT = Number(process.env.GEN_LIMIT || 0);

// Build a set of all valid /{slug}-map/ routes from app/ so we can link
// "View on map" CTAs to a real page instead of /lang/country/state/ (which
// is not a route in output:"export" mode and 404s).
const MAP_SLUGS: Set<string> = (() => {
  const out = new Set<string>();
  try {
    for (const f of fs.readdirSync(path.resolve("app"))) {
      if (f.endsWith("-map")) out.add(f);
    }
  } catch {}
  return out;
})();
// Manual aliases where the folder name does not match a countryId with dashes
// stripped (e.g. United Arab Emirates → "uae-map" not "unitedarabemirates-map").
const COUNTRY_MAP_ALIASES: Record<string, string> = {
  "united-arab-emirates": "uae-map",
  "democratic-republic-of-congo": "drcongo-map",
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
  city: { de: "Stadt", hu: "Város", ro: "Oraș", en: "City" },
  "state-capital": { de: "Landeshauptstadt", hu: "Tartományi főváros", ro: "Capitală regiune", en: "State capital" },
  mountain: { de: "Berg", hu: "Hegy", ro: "Munte", en: "Mountain" },
  river: { de: "Fluss", hu: "Folyó", ro: "Râu", en: "River" },
  lake: { de: "See", hu: "Tó", ro: "Lac", en: "Lake" },
  island: { de: "Insel", hu: "Sziget", ro: "Insulă", en: "Island" },
  landmark: { de: "Sehenswürdigkeit", hu: "Nevezetesség", ro: "Punct de reper", en: "Landmark" },
  historical: { de: "Historischer Ort", hu: "Történelmi hely", ro: "Sit istoric", en: "Historical site" },
  forest: { de: "Wald", hu: "Erdő", ro: "Pădure", en: "Forest" },
  sea: { de: "Meer", hu: "Tenger", ro: "Mare", en: "Sea" },
  port: { de: "Hafen", hu: "Kikötő", ro: "Port", en: "Port" },
  industry: { de: "Industriegebiet", hu: "Ipari terület", ro: "Zonă industrială", en: "Industrial site" },
  agriculture: { de: "Landwirtschaft", hu: "Mezőgazdaság", ro: "Agricultură", en: "Agriculture" },
  relief: { de: "Geländeform", hu: "Domborzat", ro: "Relief", en: "Relief" },
  "animal-habitat": { de: "Tierlebensraum", hu: "Élőhely", ro: "Habitat animal", en: "Animal habitat" },
};

const I18N: Record<string, Partial<Record<Lang, string>>> = {
  facts: { de: "Fakten", hu: "Tények", ro: "Fapte", en: "Facts" },
  details: { de: "Details", hu: "Részletek", ro: "Detalii", en: "Details" },
  geography: { de: "Geographie", hu: "Földrajz", ro: "Geografie", en: "Geography" },
  elevation: { de: "Höhe", hu: "Magasság", ro: "Altitudine", en: "Elevation" },
  length: { de: "Länge", hu: "Hossz", ro: "Lungime", en: "Length" },
  area: { de: "Fläche", hu: "Terület", ro: "Suprafață", en: "Area" },
  coordinates: { de: "Koordinaten", hu: "Koordináták", ro: "Coordonate", en: "Coordinates" },
  related: { de: "Verwandte Orte", hu: "Kapcsolódó helyek", ro: "Locuri conexe", en: "Related places" },
  cities: { de: "Städte in der Nähe", hu: "Közeli városok", ro: "Orașe din apropiere", en: "Nearby cities" },
  history: { de: "Geschichte & Sehenswürdigkeiten", hu: "Történelem és látnivalók", ro: "Istorie și obiective", en: "History & landmarks" },
  nature: { de: "Natur", hu: "Természet", ro: "Natură", en: "Nature" },
  more: { de: "Weitere Orte", hu: "További helyek", ro: "Mai multe locuri", en: "More places" },
  didYouKnow: { de: "💡 Wusstest du?", hu: "💡 Tudtad?", ro: "💡 Știai că?", en: "💡 Did you know?" },
  gameTitle: { de: "Probiere es spielerisch aus", hu: "Próbáld ki játékos formában", ro: "Învață jucând", en: "Try it with games" },
  gameIntro: { de: "Lerne diesen Ort durch Spiele und Tests.", hu: "Ismerd meg ezt a helyet játékokon és teszteken keresztül.", ro: "Cunoaște acest loc prin jocuri și teste.", en: "Learn about this place through games and quizzes." },
  gamePlay: { de: "🎮 Astro-Spiel starten", hu: "🎮 Indítsd az Astro játékot", ro: "🎮 Pornește jocul Astro", en: "🎮 Start astro game" },
  gameTest: { de: "📝 Test machen", hu: "📝 Csinálj tesztet", ro: "📝 Fă un test", en: "📝 Take a quiz" },
  viewMap: { de: "Auf der Karte ansehen", hu: "Megtekintés a térképen", ro: "Vezi pe hartă", en: "View on map" },
  viewOSM: { de: "OpenStreetMap", hu: "OpenStreetMap", ro: "OpenStreetMap", en: "OpenStreetMap" },
  home: { de: "Startseite", hu: "Főoldal", ro: "Acasă", en: "Home" },
  langs: { de: "Sprachen", hu: "Nyelvek", ro: "Limbi", en: "Languages" },
  sightsInTown: { de: "Sehenswürdigkeiten in der Stadt", hu: "Látnivalók a városban", ro: "Obiective turistice în oraș", en: "Sights in the town" },
  nearbySights: { de: "In der Umgebung", hu: "Környékbeli látnivalók", ro: "Obiective din împrejurimi", en: "Sights nearby" },
};

// Lang fallback: tr → de, fr → en (most strings only have 4 langs filled).
function _langFallback(lang: Lang): Lang { return lang === "tr" ? "de" : lang === "fr" ? "en" : lang; }
const I = (k: string, lang: Lang) => I18N[k]?.[lang] ?? I18N[k]?.[_langFallback(lang)] ?? k;
const T = (type: string, lang: Lang) => TYPE_LABEL[type]?.[lang] ?? TYPE_LABEL[type]?.[_langFallback(lang)] ?? type;

// Wikipedia lang code for slugify lookup
const WIKI_LANG_FOR: Record<string, string> = { de: "de", hu: "hu", ro: "ro", en: "en" };

function wikipediaSameAs(poi: POI, lang: Lang): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const l of ["en", lang, "de"] as const) {
    const name = (poi.name as Record<string, string>)?.[l];
    if (!name) continue;
    // Wikipedia titles use spaces (URL-encoded) and case-preserve, but simple slug works for most.
    const title = name.replace(/\s+/g, "_");
    const url = `https://${WIKI_LANG_FOR[l]}.wikipedia.org/wiki/${encodeURIComponent(title)}`;
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
      addressCountry: countryName,
    };
  }
  const imgForSchema = poi.image || lookupFallbackImage(poi.id);
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
};

function renderPracticalInfo(poi: POI, lang: Lang): string {
  const data = loadPractical(poi.id);
  if (!data) return "";
  const C = PRACTICAL_COPY[lang] || PRACTICAL_COPY.en;
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
  };
  const t = L[lang] || L.en!;
  return `<div class="plz-itin-cost"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg><strong>${t.cost}: ≈ ${lo}–${hi} €</strong><span class="plz-itin-cost-detail">${t.entry} ${entries}€ · ${t.trans} ${transport}€</span></div>`;
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
    // Hidden behind <details>: Place [nofollow], OSM [dofollow], Tickets [sponsored], TripAdvisor [sponsored]
    const moreBtns: string[] = [];
    if (links.gmaps_place) moreBtns.push(`<a class="plz-itin-link" href="${links.gmaps_place}" target="_blank" rel="nofollow noopener" title="GMaps Place">📍</a>`);
    if (links.osm) moreBtns.push(`<a class="plz-itin-link" href="${links.osm}" target="_blank" rel="noopener" title="OpenStreetMap">🗺️</a>`);
    if (links.getyourguide) moreBtns.push(`<a class="plz-itin-link" href="${links.getyourguide}" target="_blank" rel="sponsored nofollow noopener" title="Tickets">🎟️</a>`);
    if (links.tripadvisor) moreBtns.push(`<a class="plz-itin-link" href="${links.tripadvisor}" target="_blank" rel="sponsored nofollow noopener" title="TripAdvisor">⭐</a>`);
    const moreHtml = moreBtns.length ? `<details class="plz-itin-more"><summary>🔗</summary>${moreBtns.join("")}</details>` : "";
    const stopKey = `${poi.id}::${mode}::${i}::${name}`;
    const checkBtn = `<button class="plz-itin-check" type="button" data-stop="${escapeHtml(stopKey)}" aria-label="mark visited" title="✓"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></button>`;
    return `<div class="plz-itin-card" data-type="sight" data-stop-card="${escapeHtml(stopKey)}">${checkBtn}<div class="plz-itin-cat">${icon}</div><div class="plz-itin-time">${escapeHtml(s.arrive_at)} · ${s.stay_min}'</div><h3>${escapeHtml(name)}</h3><div class="plz-itin-tip">${escapeHtml(tip)}</div><div class="plz-itin-links">${visibleBtns.join("")}${moreHtml}</div></div>`;
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
  const countryName = countrySlugFor(lang, countryId).replace(/-/g, " ");
  const ccap = countryName.charAt(0).toUpperCase() + countryName.slice(1);
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
  const breadcrumbCountry = `<a href="${buildCountryPath(lang, countryId)}">${countrySlugFor(lang, countryId).replace(/-/g, " ")}</a>`;
  const breadcrumbState = poi.parent === countryId
    ? "" // country-level POI: skip state crumb (no valid state page)
    : `<a href="${buildStatePath(lang, poi.parent)}">${poi.parent}</a>`;

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
    geoItems.push(`<div class="plz-meta-item"><div class="label">${I("coordinates", lang)}</div><div class="value">${poi.coords[1].toFixed(3)}, ${poi.coords[0].toFixed(3)}</div></div>`);
  }

  // OSM link
  let osmLink = "";
  if (poi.coords && poi.coords.length >= 2) {
    const osmUrl = `https://www.openstreetmap.org/?mlat=${poi.coords[1]}&mlon=${poi.coords[0]}#map=12/${poi.coords[1]}/${poi.coords[0]}`;
    osmLink = `<a class="plz-cta plz-cta-secondary" href="${osmUrl}" target="_blank" rel="noopener noreferrer">${I("viewOSM", lang)} →</a>`;
  }

  // Related POIs grouped by type (max 24 total)
  const related = getRelatedPois(poi, 24);
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
    return `<a class="plz-rcard" href="${buildPoiPath(lang, r)}">${imgHtml}<div class="plz-rcard-body"><div class="plz-rcard-title">${rname}</div>${snippet ? `<div class="plz-rcard-snip">${escapeHtml(snippet)}</div>` : ""}</div></a>`;
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
        return `<details class="plz-faq"><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`;
      })
      .filter(Boolean)
      .join("");
    if (items) faqHtml = `<section><h2>FAQ</h2>${items}</section>`;
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
  const renderSightCard = (s: SightItem, withDistance: boolean): string => {
    if (!s?.name) return "";
    // Inject image from sight-image-map.json if the sight itself lacks one.
    const imgUrl = s.image || lookupSightImage(s.name, poi.id);
    const img = imgUrl
      ? `<button type="button" class="plz-sight-img-btn" data-plzimg="${escapeHtml(imgUrl)}" data-plzalt="${escapeHtml(buildAlt(s.name, name))}" aria-label="${escapeHtml(s.name)}"><img class="plz-sight-img" src="${escapeHtml(imgUrl)}" alt="${escapeHtml(buildAlt(s.name, name))}" loading="lazy"/></button>`
      : "";
    const dist = withDistance && s.distance ? `<span class="plz-sight-dist">${escapeHtml(s.distance)}</span>` : "";
    const txt = s.text ? `<p>${escapeHtml(s.text)}</p>` : "";
    const attr = renderAttribution(s.image_attribution);
    // Internal link: if this sight name matches a same-country POI, link it.
    const linkedPoiId = lookupSightPoiLink(poi.id, s.name);
    const linkedPoi = linkedPoiId ? allById.get(linkedPoiId) : undefined;
    const nameHtml = linkedPoi
      ? `<a href="${buildPoiPath(lang, linkedPoi)}" class="plz-sight-name-link">${escapeHtml(s.name)}</a>`
      : escapeHtml(s.name);
    return `<article class="plz-sight" itemscope itemtype="https://schema.org/TouristAttraction"><div class="plz-sight-body">${img}<div><h3 itemprop="name">${nameHtml}</h3>${dist}<div itemprop="description">${txt}</div>${attr}</div></div></article>`;
  };
  const sightsObj = (poi as { sights?: Record<string, SightItem[]> }).sights
    || (sidecarSightsFor(poi) as Record<string, SightItem[]> | null);
  const sightsArr = (getLocalized(sightsObj as Partial<Record<string, SightItem[]>>, lang) || []) as SightItem[];
  const sightsHtml = sightsArr.length > 0
    ? `<section class="plz-sights"><h2>${I("sightsInTown", lang)} ${name} (${sightsArr.length})</h2>${sightsArr.map((s) => renderSightCard(s, false)).join("")}</section>`
    : "";
  const nearbyObj = (poi as { nearbySights?: Record<string, SightItem[]> }).nearbySights;
  const nearbyArr = (getLocalized(nearbyObj as Partial<Record<string, SightItem[]>>, lang) || []) as SightItem[];
  const nearbyHtml = nearbyArr.length > 0
    ? `<section class="plz-sights plz-sights-nearby"><h2>${I("nearbySights", lang)} (${nearbyArr.length})</h2>${nearbyArr.map((s) => renderSightCard(s, true)).join("")}</section>`
    : "";

  // Weather widget HTML + JS (client-side fetch of Open-Meteo)
  const weatherCopy: Partial<Record<Lang, { now: string; forecast: string; loading: string }>> = {
    de: { now: "Aktuell", forecast: "5-Tage-Vorhersage", loading: "Wetter…" },
    hu: { now: "Most", forecast: "5 napos előrejelzés", loading: "Időjárás…" },
    ro: { now: "Acum", forecast: "Prognoză 5 zile", loading: "Vremea…" },
    en: { now: "Now", forecast: "5-day forecast", loading: "Weather…" },
    fr: { now: "Maintenant", forecast: "Prévisions sur 5 jours", loading: "Météo…" },
    tr: { now: "Şimdi", forecast: "5 günlük tahmin", loading: "Hava durumu…" },
  };
  const wc = weatherCopy[lang] || weatherCopy.en;
  const weatherHtml = (poi.coords && poi.coords.length >= 2)
    ? `<section class="plz-weather" id="plz-weather" data-lat="${poi.coords[1]}" data-lon="${poi.coords[0]}" data-lang="${lang}"><p class="plz-weather-loading">${escapeHtml(wc.loading)}</p></section>
<script>(function(){var el=document.getElementById('plz-weather');if(!el)return;var lat=el.dataset.lat,lon=el.dataset.lon,lang=el.dataset.lang;var ICON=function(c){if(c===0)return'☀️';if(c<=2)return'🌤️';if(c===3)return'☁️';if(c>=45&&c<=48)return'🌫️';if(c>=51&&c<=57)return'🌦️';if(c>=61&&c<=67)return'🌧️';if(c>=71&&c<=77)return'🌨️';if(c>=80&&c<=82)return'🌧️';if(c>=85&&c<=86)return'🌨️';if(c>=95)return'⛈️';return'🌡️';};var DAYS={de:['So','Mo','Di','Mi','Do','Fr','Sa'],hu:['V','H','K','Sze','Cs','P','Szo'],ro:['Du','Lu','Ma','Mi','Jo','Vi','Sâ'],en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']};var CP={de:{now:'Aktuell',forecast:'5-Tage-Vorhersage'},hu:{now:'Most',forecast:'5 napos előrejelzés'},ro:{now:'Acum',forecast:'Prognoză 5 zile'},en:{now:'Now',forecast:'5-day forecast'}};var c=CP[lang]||CP.en;var d=DAYS[lang]||DAYS.en;fetch('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+'&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=5&timezone=auto').then(function(r){return r.json();}).then(function(j){var html='';if(j.current){html+='<div class="plz-weather-now"><span class="plz-weather-icon">'+ICON(j.current.weather_code)+'</span><div><span class="plz-weather-label">'+c.now+'</span><strong>'+Math.round(j.current.temperature_2m)+'°C</strong></div></div>';}if(j.daily){html+='<div class="plz-weather-forecast"><span class="plz-weather-label">'+c.forecast+'</span><ul>';for(var i=0;i<j.daily.time.length;i++){var dt=new Date(j.daily.time[i]);html+='<li><span>'+d[dt.getDay()]+'</span><span>'+ICON(j.daily.weather_code[i])+'</span><strong>'+Math.round(j.daily.temperature_2m_max[i])+'°</strong><span class="plz-tmin">'+Math.round(j.daily.temperature_2m_min[i])+'°</span></li>';}html+='</ul></div>';}el.innerHTML=html;}).catch(function(){el.style.display='none';});})();</script>`
    : "";

  // Water-temperature widget (Open-Meteo Marine API, client-side fetch — auto-hides if inland).
  // Same lat/lon as weather. Marine API returns null SST for inland coords → script hides element.
  const marineCopy: Partial<Record<Lang, { now: string; forecast: string; loading: string }>> = {
    de: { now: "Wassertemperatur", forecast: "7-Tage-Trend", loading: "Wassertemperatur…" },
    hu: { now: "Víz hőmérséklet", forecast: "7 napos trend", loading: "Víz hőmérséklet…" },
    ro: { now: "Temperatura apei", forecast: "Tendință 7 zile", loading: "Temperatura apei…" },
    en: { now: "Water temperature", forecast: "7-day trend", loading: "Water temperature…" },
    fr: { now: "Température de l'eau", forecast: "Tendance 7 jours", loading: "Température de l'eau…" },
    tr: { now: "Su sıcaklığı", forecast: "7 günlük trend", loading: "Su sıcaklığı…" },
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
  };
  const nc = newsCopy[lang] || newsCopy.en;

  // Official links (site + Facebook) — emitted next to the news block so users
  // can jump straight to municipal channels. Build-time read.
  let officialLinksHtml = "";
  try {
    const links = (OFFICIAL_LINKS as Record<string, { site?: string; fb?: string }>)[poi.id];
    if (links?.site || links?.fb) {
      const siteLabel: Partial<Record<Lang, string>> = { de: "Webseite", hu: "Honlap", ro: "Site", en: "Website", fr: "Site web", tr: "Web sitesi" };
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
          Monday:    { de: "montags",     hu: "hétfőnként",   ro: "lunea",    en: "Mondays",    fr: "le lundi",    tr: "Pazartesi" },
          Tuesday:   { de: "dienstags",   hu: "keddenként",   ro: "marțea",   en: "Tuesdays",   fr: "le mardi",    tr: "Salı" },
          Wednesday: { de: "mittwochs",   hu: "szerdánként",  ro: "miercurea",en: "Wednesdays", fr: "le mercredi", tr: "Çarşamba" },
          Thursday:  { de: "donnerstags", hu: "csütörtökönként", ro: "joia", en: "Thursdays",  fr: "le jeudi",    tr: "Perşembe" },
          Friday:    { de: "freitags",    hu: "péntekenként", ro: "vinerea",  en: "Fridays",    fr: "le vendredi", tr: "Cuma" },
          Saturday:  { de: "samstags",    hu: "szombatonként",ro: "sâmbăta",  en: "Saturdays",  fr: "le samedi",   tr: "Cumartesi" },
          Sunday:    { de: "sonntags",    hu: "vasárnaponként",ro: "duminica",en: "Sundays",    fr: "le dimanche", tr: "Pazar" },
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
      const moreLabel: Partial<Record<Lang, string>> = { de: "Mehr anzeigen", hu: "Tovább", ro: "Mai mult", en: "Show more", fr: "Voir plus", tr: "Daha fazla" };
      const lessLabel: Partial<Record<Lang, string>> = { de: "Weniger", hu: "Kevesebb", ro: "Mai puțin", en: "Show less", fr: "Voir moins", tr: "Daha az" };
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
        if (typeof ev.image_url === "string" && /^https?:\/\//.test(ev.image_url)) obj.image = ev.image_url;
        if (typeof ev.source_url === "string" && /^https?:\/\//.test(ev.source_url)) obj.url = ev.source_url;
        // Organizer fallback so Google has a complete record
        obj.organizer = { "@type": "Organization", "name": "Plizio" };
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
  try {
    const newsBase = path.resolve(process.cwd(), "public", "data", "poi-news", `${poi.id}.json`);
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
        };
        const tL = trLabels[lang] || trLabels.en!;
        const translateBtn = `<button type="button" class="plz-news-translate" data-lang="${lang}" data-btn-label="${escapeHtml(tL.btn)}" data-orig-label="${escapeHtml(tL.orig)}" data-loading="${escapeHtml(tL.loading)}"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/></svg>${escapeHtml(tL.btn)}</button>`;
        const translateScript = `<script>(function(){var sec=document.currentScript&&document.currentScript.parentElement;if(!sec)sec=document.querySelector('.plz-news');if(!sec)return;var btn=sec.querySelector('.plz-news-translate');if(!btn)return;var titles=sec.querySelectorAll('.plz-news-title');var lang=btn.dataset.lang;var SHOW_ORIG=false;var transCache={};btn.addEventListener('click',function(){if(SHOW_ORIG){titles.forEach(function(t){t.textContent=transCache[t.dataset.orig]||t.dataset.orig;});btn.lastChild.nodeValue=btn.dataset.btnLabel;SHOW_ORIG=false;return;}if(Object.keys(transCache).length){titles.forEach(function(t){t.textContent=transCache[t.dataset.orig]||t.dataset.orig;});return;}btn.disabled=true;var prevTxt=btn.lastChild.nodeValue;btn.lastChild.nodeValue=btn.dataset.loading;var lsKey='plz_tr:'+lang+':';var origArr=[],cached={};titles.forEach(function(t){var o=t.dataset.orig;var c;try{c=localStorage.getItem(lsKey+o);}catch(e){}if(c){cached[o]=c;}else{origArr.push(o);}});function applyAll(){titles.forEach(function(t){var v=cached[t.dataset.orig]||transCache[t.dataset.orig]||t.dataset.orig;t.textContent=v;});btn.disabled=false;btn.lastChild.nodeValue=btn.dataset.origLabel;SHOW_ORIG=true;}if(origArr.length===0){Object.assign(transCache,cached);applyAll();return;}var u='https://plizio-translate.plizio.workers.dev/?to='+encodeURIComponent(lang);origArr.forEach(function(o){u+='&text='+encodeURIComponent(o);});fetch(u).then(function(r){return r.json();}).then(function(j){if(j&&j.translations){for(var i=0;i<origArr.length;i++){var tr=j.translations[i]||origArr[i];cached[origArr[i]]=tr;try{localStorage.setItem(lsKey+origArr[i],tr);}catch(e){}}Object.assign(transCache,cached);applyAll();}else{btn.disabled=false;btn.lastChild.nodeValue=prevTxt;}}).catch(function(){btn.disabled=false;btn.lastChild.nodeValue=prevTxt;});});})();</script>`;
        newsHtml = `<section class="plz-news"><div class="plz-news-head"><h2>${escapeHtml(nc.heading)} <span class="plz-news-count">${items.length}</span></h2>${translateBtn}</div><ul class="plz-news-grid">${cards}</ul><p class="plz-news-via">${escapeHtml(nc.via)} ${escapeHtml(sourcesLabel)}</p>${translateScript}</section>`;
      }
    }
  } catch {}

  // Hero swiper — primary image + up to 4 sight images, swipeable with snap + dots
  const heroImages: { src: string; alt: string }[] = [];
  const heroImg = poi.image || lookupFallbackImage(poi.id);
  if (heroImg) heroImages.push({ src: heroImg, alt: buildAlt(name) });
  for (const s of sightsArr.slice(0, 6)) {
    const sImg = (s as { image?: string }).image;
    if (sImg && heroImages.length < 5 && !heroImages.some(h => h.src === sImg)) {
      const sName = (s as { name?: string }).name || name;
      heroImages.push({ src: sImg, alt: buildAlt(sName, name) });
    }
  }
  let heroHtml: string;
  if (heroImages.length === 0) {
    heroHtml = `<div class="plz-hero"><div class="plz-hero-placeholder"><svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div></div>`;
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
    ? `<button type="button" class="plz-imgflag" data-poi="${escapeHtml(poi.id)}" aria-label="Rossz kép jelölése" hidden>⚑</button>`
      + `<script>(function(){try{var s=location.search;if(s.indexOf('flag=1')>=0)localStorage.setItem('plzflag','1');if(s.indexOf('flag=0')>=0)localStorage.removeItem('plzflag');if(localStorage.getItem('plzflag')!=='1')return;}catch(e){return;}var b=document.querySelector('.plz-imgflag');if(!b)return;b.hidden=false;b.addEventListener('click',function(){var id=b.getAttribute('data-poi');try{if(window.umami&&window.umami.track)window.umami.track('bad_image',{poi:id,lang:${JSON.stringify(lang)}});}catch(e){}b.textContent='\\u2713';b.disabled=true;b.classList.add('done');});})();</script>`
    : "";

  // Coat of arms (city/region badge)
  const coa = (poi as { coa?: string }).coa;
  const coaLabel: Partial<Record<Lang, string>> = { de: "Wappen", hu: "címer", ro: "stema", en: "coat of arms", fr: "blason", tr: "arması" };
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

  // Language switcher — show fr only for FR POIs, tr only for DE POIs.
  const extraSwitcher: Lang[] = poi.parent?.startsWith("FR") ? ["fr"]
                              : poi.parent?.startsWith("DE") ? ["tr"]
                              : [];
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
${(poi.image || heroImg) ? `<meta property="og:image" content="${SITE_URL}${escapeHtml(poi.image || heroImg || "")}"/>` : ""}
${isAdSenseEligible(poi, lang) && !richness.isWeak ? ADSENSE_HEAD : ""}
<link rel="stylesheet" href="/poi-static/poi.css?v=20260526h"/>
${structuredData(poi, lang, url, metaDesc, countryId, countrySlugFor(lang, countryId).replace(/-/g, " "), faqItems, [
  { name: I("home", lang), url: `/${lang}/` },
  { name: countrySlugFor(lang, countryId).replace(/-/g, " "), url: buildCountryPath(lang, countryId) },
  ...(poi.parent !== countryId ? [{ name: poi.parent, url: buildStatePath(lang, poi.parent) }] : []),
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
    var ext=/^https?:\/\//.test(h)&&!h.includes(location.host);
    if(ext){
      var rel=(a.getAttribute('rel')||'').toLowerCase();
      var kind=rel.includes('sponsored')?'affiliate':(/wikipedia\.org/.test(h)?'wiki':(/google\.[a-z.]+\/maps/.test(h)?'gmaps':(/openstreetmap\.org/.test(h)?'osm':(/ticketmaster|datatourisme/.test(h)?'event':'external'))));
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
    <div class="plz-hero-grid-main">${heroHtml}${flagBtnHtml}</div>
    <div class="plz-hero-grid-side">${weatherHtml}${marineHtml}${officialLinksHtml}${yearlyHtml}${newsHtml}</div>
  </div>
  ${descText ? `<section><p class="poi-lead-paragraph">${escapeHtml(descText)}</p></section>` : ""}
  <div id="sec-itin">${renderCityItinerary(poi, lang)}</div>
  <div id="sec-info">
  ${renderPracticalInfo(poi, lang)}
  ${geoItems.length > 0 || historyHtml ? `<section class="plz-geo-history">${historyHtml}${geoItems.length > 0 ? `<div class="plz-geo-box"><h3>${I("geography", lang)}</h3><div class="plz-meta">${geoItems.join("")}</div></div>` : ""}</section>` : ""}
  ${factsArr.length > 0 ? `<section><h2>${I("facts", lang)}</h2><ul class="plz-facts">${factsArr.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul></section>` : ""}
  ${didYouKnowHtml}
  </div>
  ${constellationHtml}
  ${renderFAQ(poi, lang) || faqHtml}
  <div id="sec-sights">
  ${sightsHtml}
  ${nearbyHtml}
  </div>
  <section>
    <a class="plz-cta" href="${countryMapUrl(countryId) ?? (poi.parent === countryId ? buildCountryPath(lang, countryId) : buildStatePath(lang, poi.parent))}">${I("viewMap", lang)} →</a>
    ${osmLink}
  </section>
  ${renderExploreBlock({ poiId: poi.id, countryId, countryName: countrySlugFor(lang, countryId).replace(/-/g, " "), countryMapUrl: countryMapUrl(countryId), lang: lang as any })}
  ${relatedItems}
  ${renderMobileFab(poi, lang, name)}
</main>
<div id="plz-lightbox" class="plz-lightbox" role="dialog" aria-modal="true" aria-hidden="true"><button type="button" class="plz-lightbox-close" aria-label="Close">×</button><img alt="" /></div>
<style>
.plz-sight-img-btn{padding:0;border:0;background:none;cursor:zoom-in;display:block}
.plz-sight-img-btn:focus-visible{outline:2px solid #4cc;outline-offset:2px}
.plz-lightbox{position:fixed;inset:0;background:rgba(2,6,12,.92);display:none;align-items:center;justify-content:center;z-index:9999;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);-webkit-tap-highlight-color:transparent}
.plz-lightbox.open{display:flex}
.plz-lightbox img{max-width:min(95vw,1400px);max-height:min(90vh,1400px);width:auto;height:auto;object-fit:contain;border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,.6)}
.plz-lightbox-close{position:absolute;top:max(12px,env(safe-area-inset-top));right:max(12px,env(safe-area-inset-right));width:44px;height:44px;border-radius:50%;background:rgba(0,0,0,.6);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:1.6rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}
.plz-lightbox-close:hover{background:rgba(0,0,0,.8)}
@media (max-width:640px){.plz-lightbox img{max-width:95vw;max-height:80vh}}
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
${EXPLORE_CSS}
</style>
<script>(function(){var box=document.getElementById('plz-lightbox');if(!box)return;var img=box.querySelector('img');var btn=box.querySelector('.plz-lightbox-close');function open(src,alt){img.src=src;img.alt=alt||'';box.classList.add('open');box.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}function close(){box.classList.remove('open');box.setAttribute('aria-hidden','true');img.src='';document.body.style.overflow='';}document.addEventListener('click',function(e){var t=e.target.closest('.plz-sight-img-btn');if(t){e.preventDefault();open(t.dataset.plzimg,t.dataset.plzalt);}});btn.addEventListener('click',close);box.addEventListener('click',function(e){if(e.target===box)close();});document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});})();</script>
<footer>
  <div><a href="/${lang}/">Plizio</a> · <a href="/europe-map/">Europa</a> · <a href="/${lang}/datenschutz/">Datenschutz</a> · <a href="/${lang}/ueber-uns/">Über uns</a></div>
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
    // FR POIs get an additional `fr` page; DE POIs get an additional `tr` page.
    const extraPoi: Lang[] = poi.parent?.startsWith("FR") ? ["fr"]
                          : poi.parent?.startsWith("DE") ? ["tr"]
                          : [];
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
  const countryName = countrySlug.replace(/-/g, " ");
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
    var ext=/^https?:\/\//.test(h)&&!h.includes(location.host);
    if(ext){
      var rel=(a.getAttribute('rel')||'').toLowerCase();
      var kind=rel.includes('sponsored')?'affiliate':(/wikipedia\.org/.test(h)?'wiki':(/google\.[a-z.]+\/maps/.test(h)?'gmaps':(/openstreetmap\.org/.test(h)?'osm':(/ticketmaster|datatourisme/.test(h)?'event':'external'))));
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
  <div><a href="/${lang}/">Plizio</a> · <a href="/europe-map/">Europa</a> · <a href="/${lang}/datenschutz/">Datenschutz</a> · <a href="/${lang}/ueber-uns/">Über uns</a></div>
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
