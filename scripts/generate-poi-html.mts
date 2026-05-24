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
import * as _slugsNs from "../lib/seo/slugs";
import type { POI } from "../lib/visualLab/data/poi";

// tsx ESM treats the TS module as CJS-wrapped → real exports on .default
const slugs: any = (_slugsNs as any).default ?? _slugsNs;
const {
  SUPPORTED_LANGS,
  buildCountryPath,
  buildStatePath,
  buildPoiPath,
  countrySlugFor,
  getCountryId,
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
};
let YEARLY_HIGHLIGHTS: Record<string, YHEvent[]> = {};
try {
  const yhPath = path.resolve(process.cwd(), "public", "data", "poi-yearly-highlights.json");
  if (fs.existsSync(yhPath)) {
    YEARLY_HIGHLIGHTS = JSON.parse(fs.readFileSync(yhPath, "utf-8"));
  }
} catch {}

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
  ]);
  const all = ([] as POI[]).concat(
    dePois as POI[], ALL_DE_EXTRA_POIS as POI[], romaniaAllPois as POI[], hungaryAllPoi as POI[],
    [vaticanCountry as POI], vaticanPois as POI[], ALL_COUNTRY_POIS as POI[],
    poiExtraDeV1 as POI[], poiExtraRoV1 as POI[], poiExtraHuV4 as POI[], poiExtraFrV1 as POI[],
    poiExtraUkV1 as POI[], poiExtraUkMissingV1 as POI[], poiExtraAtChMissingV1 as POI[],
    poiExtraHrV1 as POI[],
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
  const SUFFIX = " | Plizio";
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

function getPoiAlternates(poi: POI): Record<string, string> {
  // FR POIs get an extra fr alternate; DE POIs get an extra tr (Turkish residents).
  const extra: Lang[] = poi.parent?.startsWith("FR") ? ["fr"]
                     : poi.parent?.startsWith("DE") ? ["tr"]
                     : [];
  const langs: Lang[] = [...SUPPORTED_LANGS, ...extra];
  return Object.fromEntries(langs.map((l) => [l, `${SITE_URL}${buildPoiPath(l, poi)}`]));
}

function getRelatedPois(poi: POI, limit = 6): POI[] {
  if (!poi.parent) return [];
  return pois
    .filter((p) => p && p.parent === poi.parent && p.id !== poi.id && p.type !== "region" && p.type !== "country")
    .sort((a, b) => Number(a.type !== poi.type) - Number(b.type !== poi.type))
    .slice(0, limit);
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
  if (poi.image) {
    place.image = `${SITE_URL}${poi.image}`;
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
  const sightsObj = (poi as { sights?: Record<string, Array<{ name: string; text?: string; category?: string }>> }).sights;
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

  return schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n");
}

// City-itinerary loader + renderer (4-mode day trip widget).
// Loads public/data/itinerary/<poi.id>.json if present.
const _itinCache = new Map<string, any>();
function loadItinerary(poiId: string): any | null {
  if (_itinCache.has(poiId)) return _itinCache.get(poiId);
  const p = path.resolve(process.cwd(), "public/data/itinerary", `${poiId}.json`);
  let data: any = null;
  try {
    if (fs.existsSync(p)) data = JSON.parse(fs.readFileSync(p, "utf-8"));
  } catch {}
  _itinCache.set(poiId, data);
  return data;
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
    const v = data[k];
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
  hu: { title: "Egy nap a városban", intro: "Válassz időjárást + közlekedési módot, kapj konkrét napi tervet.", modeWalk: "🚶 Gyalog", modeBike: "🚲 Bicikli", modeCar: "🚗 Autó", modeTransit: "🚌 Tömegközl.", unitWalk: "séta", unitBike: "tekerés", unitCar: "vezetés", unitTransit: "út", places: "hely", tipsHeading: "💡 Helyi tippek", moreTipsHeading: "⭐ További tippek", navHere: "Útvonal", navTo: "Odamenni", resTitle: "🧰 Eszközök kéznél", resIntro: "Minden, ami a látogatáshoz kellhet — egy kattintással.", bestTime: "📅 Mikor érdemes jönni", warnings: "⚠️ Hol legyél óvatos", langTips: "🗣️ Nyelvi gyorstipp", wSunny: "☀️ Jó idő", wRainy: "☔ Eső", wWinter: "❄️ Téli", goLabel: "Mehet" },
  de: { title: "Ein Tag in der Stadt", intro: "Wähle Wetter + Verkehrsmittel, erhalte einen konkreten Tagesplan.", modeWalk: "🚶 Zu Fuß", modeBike: "🚲 Fahrrad", modeCar: "🚗 Auto", modeTransit: "🚌 ÖPNV", unitWalk: "Strecke", unitBike: "Strecke", unitCar: "Strecke", unitTransit: "Weg", places: "Orte", tipsHeading: "💡 Lokale Tipps", moreTipsHeading: "⭐ Weitere Tipps", navHere: "Route", navTo: "Hingelangen", resTitle: "🧰 Werkzeuge zur Hand", resIntro: "Alles, was du für den Besuch brauchst — ein Klick entfernt.", bestTime: "📅 Beste Reisezeit", warnings: "⚠️ Wo Vorsicht geboten ist", langTips: "🗣️ Sprach-Schnelltipp", wSunny: "☀️ Sonnig", wRainy: "☔ Regen", wWinter: "❄️ Winter", goLabel: "Los geht's" },
  en: { title: "A day in the city", intro: "Pick weather + travel mode, get a concrete day plan.", modeWalk: "🚶 Walking", modeBike: "🚲 Bike", modeCar: "🚗 Car", modeTransit: "🚌 Transit", unitWalk: "walk", unitBike: "ride", unitCar: "drive", unitTransit: "trip", places: "places", tipsHeading: "💡 Local tips", moreTipsHeading: "⭐ More picks", navHere: "Route", navTo: "Go here", resTitle: "🧰 Tools at hand", resIntro: "Everything you need for the visit — one click away.", bestTime: "📅 Best time to visit", warnings: "⚠️ Where to be careful", langTips: "🗣️ Language quick-tip", wSunny: "☀️ Sunny", wRainy: "☔ Rainy", wWinter: "❄️ Winter", goLabel: "Let's go" },
  ro: { title: "O zi în oraș", intro: "Alege vremea + un mod de transport, primește un plan concret.", modeWalk: "🚶 Pe jos", modeBike: "🚲 Bicicletă", modeCar: "🚗 Mașină", modeTransit: "🚌 Transport public", unitWalk: "mers", unitBike: "ciclism", unitCar: "condus", unitTransit: "drum", places: "locuri", tipsHeading: "💡 Sfaturi locale", moreTipsHeading: "⭐ Sugestii suplimentare", navHere: "Traseu", navTo: "Du-te aici", resTitle: "🧰 Instrumente la îndemână", resIntro: "Tot ce ai nevoie pentru vizită — la un clic distanță.", bestTime: "📅 Când să vizitezi", warnings: "⚠️ Unde să fii atent", langTips: "🗣️ Sfaturi rapide de limbă", wSunny: "☀️ Vreme bună", wRainy: "☔ Ploaie", wWinter: "❄️ Iarnă", goLabel: "Hai" },
  fr: { title: "Une journée dans la ville", intro: "Choisis la météo + ton mode de transport, reçois un plan concret.", modeWalk: "🚶 À pied", modeBike: "🚲 Vélo", modeCar: "🚗 Voiture", modeTransit: "🚌 Transports", unitWalk: "marche", unitBike: "vélo", unitCar: "route", unitTransit: "trajet", places: "lieux", tipsHeading: "💡 Conseils locaux", moreTipsHeading: "⭐ Autres recommandations", navHere: "Itinéraire", navTo: "S'y rendre", resTitle: "🧰 Outils à portée de main", resIntro: "Tout ce qu'il faut pour la visite — en un clic.", bestTime: "📅 Quand y aller", warnings: "⚠️ Où faire attention", langTips: "🗣️ Astuce linguistique", wSunny: "☀️ Beau temps", wRainy: "☔ Pluie", wWinter: "❄️ Hiver", goLabel: "C'est parti" },
  tr: { title: "Şehirde bir gün", intro: "Hava + ulaşım modunu seç, somut bir günlük plan al.", modeWalk: "🚶 Yürüyerek", modeBike: "🚲 Bisiklet", modeCar: "🚗 Araba", modeTransit: "🚌 Toplu taşıma", unitWalk: "yürüyüş", unitBike: "sürüş", unitCar: "yolculuk", unitTransit: "yolculuk", places: "yer", tipsHeading: "💡 Yerel ipuçları", moreTipsHeading: "⭐ Daha fazla öneri", navHere: "Rota", navTo: "Buraya git", resTitle: "🧰 Elinizin altında", resIntro: "Ziyaret için gereken her şey — bir tık uzakta.", bestTime: "📅 Ne zaman gidilmeli", warnings: "⚠️ Nerede dikkatli olunmalı", langTips: "🗣️ Dil ipucu", wSunny: "☀️ Güneşli", wRainy: "☔ Yağmurlu", wWinter: "❄️ Kış", goLabel: "Haydi" },
};
const TRAVEL_MODE: Record<string, string> = { walk: "walking", bike: "bicycling", car: "driving", transit: "transit" };
const CAT_ICON: Record<string, string> = { square: "📍", historical: "🏛️", religious: "⛪", museum: "🎨", park: "🏞️", gastro: "🍽️", panorama: "🌅" };

function renderCityItinerary(poi: POI, lang: Lang): string {
  const data = loadItinerary(poi.id);
  if (!data || !data.modes) return "";
  const C = ITIN_COPY[lang] || ITIN_COPY.en;
  const modeKeys = ["walk", "bike", "car", "transit"] as const;
  const modeLabels: Record<string, string> = { walk: C.modeWalk, bike: C.modeBike, car: C.modeCar, transit: C.modeTransit };
  const unitLabels: Record<string, string> = { walk: C.unitWalk, bike: C.unitBike, car: C.unitCar, transit: C.unitTransit };

  function renderStopCard(s: any, i: number, prevCoords: [number, number] | null, mode: string): string {
    const tip = (s.tip_5lang || {})[lang] || "";
    const tm = TRAVEL_MODE[mode] || "driving";
    const [lat, lon] = s.coords;
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
    return `<div class="plz-itin-card" data-type="sight"><div class="plz-itin-cat">${icon}</div><div class="plz-itin-time">${escapeHtml(s.arrive_at)} · ${s.stay_min}'</div><h3>${escapeHtml(s.name)}</h3><div class="plz-itin-tip">${escapeHtml(tip)}</div><div class="plz-itin-links">${visibleBtns.join("")}${moreHtml}</div></div>`;
  }

  function renderExtras(picks: any, kind: string): string {
    const arr = (picks || {})[lang] || [];
    if (!arr.length) return "";
    return arr.map((it: any) => {
      const emoji = it.emoji || ({ gastro: "🍽️", shopping: "🛍️", quiet: "🧘" } as any)[kind] || "•";
      return `<div class="plz-itin-card" data-type="${kind}"><div class="plz-itin-cat">${emoji}</div><h3>${escapeHtml(it.name || "")}</h3><div class="plz-itin-tip">${escapeHtml(it.tip || "")}</div></div>`;
    }).join("");
  }

  // Weather variants helper: pick variant content + fallback to sunny if missing.
  function getVariantContent(md: any, wkey: string) {
    const variants = md.variants;
    if (variants && variants[wkey]) {
      const v = variants[wkey];
      const sunny = variants.sunny || {};
      // Per-field fallback to sunny if missing
      return {
        narrative_4lang: v.narrative_4lang || sunny.narrative_4lang,
        stop_tips_by_name: Object.fromEntries((v.stops || []).map((s: any) => [s.name, s.tip_5lang])),
        gastro_picks: v.gastro_picks || sunny.gastro_picks,
        quiet_picks: v.quiet_picks || sunny.quiet_picks,
        shopping_picks: v.shopping_picks || sunny.shopping_picks,
        tips: v.tips || sunny.tips,
      };
    }
    // No variants block - use top-level (backward-compat)
    return {
      narrative_4lang: md.narrative_4lang,
      stop_tips_by_name: Object.fromEntries((md.stops || []).map((s: any) => [s.name, s.tip_5lang])),
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
        const stopWithTip = { ...s, tip_5lang: v.stop_tips_by_name[s.name] || s.tip_5lang };
        const hopHtml = i > 0 && s.hop_from_prev_min ? `<div class="plz-itin-hop"><strong>${modeLabels[m].split(" ")[0]} ${s.hop_from_prev_min}'</strong>${s.hop_from_prev_km} km</div>` : "";
        const card = renderStopCard(stopWithTip, i, prev, m);
        prev = s.coords;
        return hopHtml + card;
      }).join("");
      const gastro = renderExtras(v.gastro_picks, "gastro");
      const quiet = renderExtras(v.quiet_picks, "quiet");
      const shopping = renderExtras(v.shopping_picks, "shopping");
      const extras = [gastro, quiet, shopping].filter(Boolean).join("");
      const tipsArr = (v.tips || {})[lang] || [];
      const tipsHtml = tipsArr.length ? `<div class="plz-itin-tips"><h3>${C.tipsHeading}</h3><ul>${tipsArr.map((t: string) => `<li>${escapeHtml(t)}</li>`).join("")}</ul></div>` : "";
      const extrasBlock = extras ? `<h3 style="margin-top:1.6rem">${C.moreTipsHeading}</h3><div class="plz-itin-cards plz-itin-extras">${extras}</div>` : "";
      const isActive = m === "walk" && w === "sunny";
      modeBlocks.push(`<div data-mw="${m}-${w}" class="${isActive ? "active" : ""}"><div class="plz-itin-summary"><span><strong>${md.start}→${md.end_estimate}</strong></span><span><strong>${md.total_km} km</strong> ${unitLabels[m]}</span><span><strong>${md.stop_count}</strong> ${C.places}</span></div><p class="plz-itin-narrative">${escapeHtml(nar)}</p><div class="plz-itin-cards">${stopCards}</div>${extrasBlock}${tipsHtml}</div>`);
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
    ["hotels", "🏨", "Booking", "sponsored"],
    ["flights", "✈️", "Flights", "sponsored"],
  ];
  const relAttr = (k: RelKind) =>
    k === "follow" ? "noopener"
    : k === "sponsored" ? "sponsored nofollow noopener"
    : "nofollow noopener";
  const resCells = resRows.map(([k, emoji, label, rk]) => {
    const u = er[k];
    if (!u || typeof u !== "string") return "";
    if (!/^https?:\/\//.test(u)) return "";
    if (u.length < 10) return "";
    return `<a class="plz-itin-res-cell" href="${escapeHtml(u)}" target="_blank" rel="${relAttr(rk)}"><span class="plz-itin-res-icon">${emoji}</span><span>${escapeHtml(label)}</span></a>`;
  }).filter(Boolean).join("");
  const resGrid = resCells ? `<div class="plz-itin-res-grid">${resCells}</div>` : "";
  const best = (er.best_time_to_visit || {})[lang] || "";
  const warn = (er.neighborhood_warnings || {})[lang] || "";
  const langT = (er.language_tips || {})[lang] || "";
  const infoBlocks: string[] = [];
  if (best) infoBlocks.push(`<div class="plz-itin-info"><h3>${C.bestTime}</h3><p>${escapeHtml(best)}</p></div>`);
  if (warn) infoBlocks.push(`<div class="plz-itin-info plz-itin-warn"><h3>${C.warnings}</h3><p>${escapeHtml(warn)}</p></div>`);
  if (langT) infoBlocks.push(`<div class="plz-itin-info"><h3>${C.langTips}</h3><p>${escapeHtml(langT)}</p></div>`);
  const resourcesHtml = (resGrid || infoBlocks.length) ? `<section class="plz-itin-resources"><h2>${C.resTitle}</h2><p style="color:var(--muted);font-size:.9rem;margin:0 0 .8rem">${C.resIntro}</p>${resGrid}<div class="plz-itin-info-grid">${infoBlocks.join("")}</div></section>` : "";

  const logoSvg = `<svg class="plz-go-logo" viewBox="0 0 220 48" xmlns="http://www.w3.org/2000/svg" aria-label="PlizioGo"><defs><linearGradient id="plzgoGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4cc6ff"/><stop offset="50%" stop-color="#7dd87a"/><stop offset="100%" stop-color="#ffae5c"/></linearGradient></defs><text x="0" y="36" font-family="ui-sans-serif,system-ui,'Segoe UI',Roboto,Inter" font-weight="800" font-size="36" fill="#e6ecf3" letter-spacing="-1">Plizio</text><text x="118" y="36" font-family="ui-sans-serif,system-ui,'Segoe UI',Roboto,Inter" font-weight="900" font-size="36" fill="url(#plzgoGrad)" letter-spacing="-1.5">Go</text><circle cx="200" cy="14" r="5" fill="#4cc6ff"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle></svg>`;
  const goBtn = `<button type="button" class="plz-itin-go" id="plz-itin-go" aria-expanded="false"><span class="plz-itin-go-label">${escapeHtml(C.goLabel || "Mehet")}</span><span class="plz-itin-go-arrow">▼</span></button>`;
  return `<section class="plz-itin" id="plz-itin"><div class="plz-itin-header">${logoSvg}<div class="plz-itin-sub"><div class="plz-itin-tagline">${escapeHtml(C.title)}</div><div class="plz-itin-intro">${escapeHtml(C.intro)}</div></div></div><div class="plz-itin-weathers" role="tablist">${weatherButtons}</div><div class="plz-itin-modes" role="tablist">${modeButtons}</div>${goBtn}<div class="plz-itin-body" id="plz-itin-body" hidden>${modeBlocksHtml}${resourcesHtml}</div></section>
<script>(function(){var r=document.getElementById('plz-itin');if(!r)return;var ws=r.querySelectorAll('[data-weather]'),bs=r.querySelectorAll('[data-mode]'),cs=r.querySelectorAll('[data-mw]'),go=document.getElementById('plz-itin-go'),body=document.getElementById('plz-itin-body');var curW='sunny',curM='walk',open=false;function apply(){ws.forEach(function(x){x.setAttribute('aria-selected',x.dataset.weather===curW?'true':'false')});bs.forEach(function(x){x.setAttribute('aria-selected',x.dataset.mode===curM?'true':'false')});cs.forEach(function(c){c.classList.toggle('active',c.dataset.mw===curM+'-'+curW)})}ws.forEach(function(w){w.addEventListener('click',function(){curW=w.dataset.weather;apply()})});bs.forEach(function(b){b.addEventListener('click',function(){curM=b.dataset.mode;apply()})});if(go){go.addEventListener('click',function(){open=!open;body.hidden=!open;go.setAttribute('aria-expanded',open?'true':'false');go.classList.toggle('open',open);if(open){body.scrollIntoView({behavior:'smooth',block:'nearest'})}})}apply()})();</script>`;
}

function renderHtml(poi: POI, lang: Lang): string | null {
  if (!poi.parent) return null;
  const name = getLocalized(poi.name, lang) ?? poi.id;
  const countryId = getCountryId(poi.parent);

  // Description: prefer advanced, fallback to short
  const descAdv = (poi as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced;
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
  const metaDesc = (descText || `${name} — ${T(poi.type, lang)}`).slice(0, 160);

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
      ? `<div class="plz-rcard-img"><img src="${escapeHtml(rimg)}" alt="${rname}" loading="lazy"/></div>`
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
    const lic = a.license ? ` (${escapeHtml(a.license)})` : "";
    const link = a.source
      ? `<a href="${escapeHtml(a.source)}" rel="nofollow noopener" target="_blank">${escapeHtml(a.author)}</a>`
      : escapeHtml(a.author);
    return `<span class="plz-sight-attr">📷 ${link}${lic}</span>`;
  };
  const renderSightCard = (s: SightItem, withDistance: boolean): string => {
    if (!s?.name) return "";
    // Inject image from sight-image-map.json if the sight itself lacks one.
    const imgUrl = s.image || lookupSightImage(s.name, poi.id);
    const img = imgUrl
      ? `<button type="button" class="plz-sight-img-btn" data-plzimg="${escapeHtml(imgUrl)}" data-plzalt="${escapeHtml(s.name)}" aria-label="${escapeHtml(s.name)}"><img class="plz-sight-img" src="${escapeHtml(imgUrl)}" alt="${escapeHtml(s.name)}" loading="lazy"/></button>`
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
  const sightsObj = (poi as { sights?: Record<string, SightItem[]> }).sights;
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
      const cards = yhItems.map((ev) => {
        const t = ev.title?.[lang] || ev.title?.en || ev.title?.de || "";
        const s = ev.summary?.[lang] || ev.summary?.en || ev.summary?.de || "";
        const d = (ev.date || "").slice(0, 10);
        // Skip link if source_url isn't a real URL (early extractor stored titles in this field).
        const isHttp = typeof ev.source_url === "string" && /^https?:\/\//i.test(ev.source_url);
        const linkOpen = isHttp ? `<a href="${escapeHtml(ev.source_url!)}" target="_blank" rel="noopener nofollow" class="plz-yh-link">` : "";
        const linkClose = isHttp ? "</a>" : "";
        return `<article class="plz-yh-card">${linkOpen}<div class="plz-yh-meta">${d ? `<time class="plz-yh-date" datetime="${escapeHtml(ev.date || "")}">${escapeHtml(d)}</time>` : ""}</div><h3 class="plz-yh-title">${escapeHtml(t)}</h3><p class="plz-yh-summary">${escapeHtml(s)}</p>${linkClose}</article>`;
      }).join("");
      yearlyHtml = `<section class="plz-yh"><h2>⭐ ${escapeHtml(heading[lang] || heading.en || "Highlights of 2026")}</h2>${cards}</section>`;
    }
  } catch {}

  let newsHtml = "";
  try {
    const newsFp = path.resolve(process.cwd(), "public", "data", "poi-news", `${poi.id}.json`);
    if (fs.existsSync(newsFp)) {
      const items = JSON.parse(fs.readFileSync(newsFp, "utf-8")) as Array<{ title: string; snippet: string; url: string; source: string; date: string; lang?: string }>;
      if (items.length > 0) {
        const top = items.slice(0, 6);
        const cards = top.map((it) => {
          const dateShort = (it.date || "").slice(0, 10);
          return `<li class="plz-news-card"><a href="${escapeHtml(it.url)}" target="_blank" rel="noopener nofollow"><div class="plz-news-meta"><span class="plz-news-source">${escapeHtml(it.source || "")}</span>${dateShort ? `<time class="plz-news-date" datetime="${escapeHtml(it.date)}">${escapeHtml(dateShort)}</time>` : ""}</div><h3 class="plz-news-title">${escapeHtml(it.title || "")}</h3>${it.snippet ? `<p class="plz-news-snippet">${escapeHtml(it.snippet)}</p>` : ""}</a></li>`;
        }).join("");
        const hasOfficial = items.some((it) => /\(hivatalos\)/i.test(it.source || ""));
        const sourcesLabel = hasOfficial ? "önkormányzati + RSS + Google News" : "Google News + RSS";
        newsHtml = `<section class="plz-news"><h2>${escapeHtml(nc.heading)} <span class="plz-news-count">${items.length}</span></h2><ul class="plz-news-grid">${cards}</ul><p class="plz-news-via">${escapeHtml(nc.via)} ${escapeHtml(sourcesLabel)}</p></section>`;
      }
    }
  } catch {}

  // Hero image
  const heroHtml = poi.image
    ? `<div class="plz-hero"><img src="${escapeHtml(poi.image)}" alt="${escapeHtml(name)}" loading="lazy"/></div>`
    : `<div class="plz-hero"><div class="plz-hero-placeholder">🗺️</div></div>`;

  // Coat of arms (city/region badge)
  const coa = (poi as { coa?: string }).coa;
  const coaHtml = coa ? `<img class="plz-coa" src="${escapeHtml(coa)}" alt="" loading="lazy"/>` : "";

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
<link rel="canonical" href="${url}"/>
${hreflangLinks}
<link rel="alternate" hreflang="x-default" href="${alternates.en}"/>
<meta property="og:title" content="${escapeHtml(name)}"/>
<meta property="og:description" content="${escapeHtml(metaDesc)}"/>
<meta property="og:url" content="${url}"/>
<meta property="og:type" content="website"/>
${poi.image ? `<meta property="og:image" content="${SITE_URL}${escapeHtml(poi.image)}"/>` : ""}
<link rel="stylesheet" href="/poi-static/poi.css?v=20260524h"/>
${structuredData(poi, lang, url, metaDesc, countryId, countrySlugFor(lang, countryId).replace(/-/g, " "), faqItems, [
  { name: I("home", lang), url: `/${lang}/` },
  { name: countrySlugFor(lang, countryId).replace(/-/g, " "), url: buildCountryPath(lang, countryId) },
  ...(poi.parent !== countryId ? [{ name: poi.parent, url: buildStatePath(lang, poi.parent) }] : []),
  { name, url: buildPoiPath(lang, poi) },
])}
</head>
<body>
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
  <div class="plz-title-row">${coaHtml}<div><p class="plz-eyebrow">Plizio Visual Lab</p><h1>${escapeHtml(name)}</h1></div></div>
  <span class="plz-type-tag">${escapeHtml(typeLabel)}</span>
  ${audioHtml}
  <div class="plz-hero-grid">
    <div class="plz-hero-grid-main">${heroHtml}</div>
    <div class="plz-hero-grid-side">${weatherHtml}${officialLinksHtml}${yearlyHtml}${newsHtml}</div>
  </div>
  ${descText ? `<section><p class="poi-lead-paragraph">${escapeHtml(descText)}</p></section>` : ""}
  ${renderPracticalInfo(poi, lang)}
  ${renderCityItinerary(poi, lang)}
  ${geoItems.length > 0 || historyHtml ? `<section class="plz-geo-history">${historyHtml}${geoItems.length > 0 ? `<div class="plz-geo-box"><h3>${I("geography", lang)}</h3><div class="plz-meta">${geoItems.join("")}</div></div>` : ""}</section>` : ""}
  ${factsArr.length > 0 ? `<section><h2>${I("facts", lang)}</h2><ul class="plz-facts">${factsArr.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul></section>` : ""}
  ${didYouKnowHtml}
  ${gameCtaHtml}
  ${faqHtml}
  ${sightsHtml}
  ${nearbyHtml}
  <section>
    <a class="plz-cta" href="${countryMapUrl(countryId) ?? (poi.parent === countryId ? buildCountryPath(lang, countryId) : buildStatePath(lang, poi.parent))}">${I("viewMap", lang)} →</a>
    ${osmLink}
  </section>
  ${relatedItems}
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
  const target = GEN_LIMIT > 0 ? eligible.slice(0, GEN_LIMIT) : eligible;
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
<link rel="stylesheet" href="/poi-static/poi.css?v=20260524h"/>
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
</head>
<body>
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
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</body>
</html>`;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
