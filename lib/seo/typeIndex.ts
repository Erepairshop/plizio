import type { Lang } from "@/lib/seo/slugs";
import { pois, getCountryId } from "@/lib/seo/slugs";
import type { POI } from "@/lib/visualLab/data/poi";

// Type-bucket → POI type whitelist
export const TYPE_BUCKETS: Record<string, string[]> = {
  cities: ["state-capital", "city", "town"],
  villages: ["village"],
  castles: ["castle", "fort"],
  mountains: ["mountain", "peak"],
  lakes: ["lake"],
  rivers: ["river"],
  historical: ["historical"],
  landmarks: ["landmark"],
  nature: ["forest", "island", "sea", "nature"],
};

// Keep legacy category URLs buildable from 4 items so previously published links
// do not turn into 404s. Only stronger hubs enter sitemap/hreflang/indexing.
export const MIN_BUILT_CATEGORY_ITEMS = 4;
export const MIN_INDEXABLE_CATEGORY_ITEMS = 20;

// Type-bucket slug per language
export const TYPE_SLUGS: Record<string, Partial<Record<Lang, string>>> = {
  cities:     { de: "staedte",            hu: "varosok",           ro: "orase",                en: "cities", it: "citta", es: "ciudades", pt: "cidades" },
  villages:   { de: "doerfer",            hu: "falvak",            ro: "sate",                 en: "villages", it: "borghi", es: "pueblos", pt: "aldeias" },
  castles:    { de: "burgen",             hu: "varak",             ro: "castele",              en: "castles", it: "castelli", es: "castillos", pt: "castelos" },
  mountains:  { de: "berge",              hu: "hegyek",            ro: "munti",                en: "mountains", it: "montagne", es: "montanas", pt: "montanhas" },
  lakes:      { de: "seen",               hu: "tavak",             ro: "lacuri",               en: "lakes", it: "laghi", es: "lagos", pt: "lagos" },
  rivers:     { de: "fluesse",            hu: "folyok",            ro: "rauri",                en: "rivers", it: "fiumi", es: "rios", pt: "rios" },
  historical: { de: "historische-orte",   hu: "tortenelmi-helyek", ro: "locuri-istorice",      en: "historical-sites", it: "luoghi-storici", es: "lugares-historicos", pt: "locais-historicos" },
  landmarks:  { de: "sehenswuerdigkeiten", hu: "latnivalok",       ro: "obiective-turistice",  en: "landmarks", it: "luoghi-interesse", es: "lugares-de-interes", pt: "locais-de-interesse" },
  nature:     { de: "naturwunder",        hu: "termeszet",         ro: "natura",               en: "nature", it: "natura", es: "naturaleza", pt: "natureza" },
};

// Display heading per bucket × lang
export const TYPE_HEADINGS: Record<string, Partial<Record<Lang, string>>> = {
  cities:     { de: "Städte",              hu: "Városok",          ro: "Orașe",                en: "Cities", it: "Città", es: "Ciudades", pt: "Cidades" },
  villages:   { de: "Dörfer",              hu: "Falvak",           ro: "Sate",                 en: "Villages", it: "Borghi", es: "Pueblos", pt: "Aldeias" },
  castles:    { de: "Burgen und Festungen", hu: "Várak és erődök", ro: "Castele și fortărețe", en: "Castles & Forts", it: "Castelli e fortezze", es: "Castillos y fortalezas", pt: "Castelos e fortalezas" },
  mountains:  { de: "Berge",               hu: "Hegyek",           ro: "Munți",                en: "Mountains", it: "Montagne", es: "Montañas", pt: "Montanhas" },
  lakes:      { de: "Seen",                hu: "Tavak",            ro: "Lacuri",               en: "Lakes", it: "Laghi", es: "Lagos", pt: "Lagos" },
  rivers:     { de: "Flüsse",              hu: "Folyók",           ro: "Râuri",                en: "Rivers", it: "Fiumi", es: "Ríos", pt: "Rios" },
  historical: { de: "Historische Orte",    hu: "Történelmi helyek", ro: "Locuri istorice",     en: "Historical Sites", it: "Luoghi storici", es: "Lugares históricos", pt: "Locais históricos" },
  landmarks:  { de: "Sehenswürdigkeiten",  hu: "Látnivalók",       ro: "Obiective turistice",  en: "Landmarks", it: "Luoghi d'interesse", es: "Lugares de interés", pt: "Locais de interesse" },
  nature:     { de: "Naturwunder",         hu: "Természeti helyek", ro: "Locuri naturale",     en: "Nature", it: "Natura", es: "Naturaleza", pt: "Natureza" },
};

export function typeSlugFor(bucket: string, lang: Lang): string {
  return TYPE_SLUGS[bucket]?.[lang] || TYPE_SLUGS[bucket]?.en || bucket;
}

export function bucketFromSlug(lang: Lang, slug: string): string | null {
  for (const bucket of Object.keys(TYPE_SLUGS)) {
    if (TYPE_SLUGS[bucket][lang] === slug) return bucket;
  }
  return null;
}

export function getPoisForCountryBucket(countryId: string, bucket: string): POI[] {
  const types = TYPE_BUCKETS[bucket];
  if (!types) return [];
  const out: POI[] = [];
  for (const p of pois) {
    if (!p || !p.id || !p.parent) continue;
    if (!types.includes(p.type)) continue;
    if (getCountryId(p.parent) !== countryId) continue;
    out.push(p);
  }
  // Sort by name (lang-agnostic, use de fallback)
  out.sort((a, b) => {
    const na = (a.name?.de || a.name?.en || a.id).toLowerCase();
    const nb = (b.name?.de || b.name?.en || b.id).toLowerCase();
    return na.localeCompare(nb);
  });
  return out;
}

export function isIndexableCategory(countryId: string, bucket: string): boolean {
  return getPoisForCountryBucket(countryId, bucket).length >= MIN_INDEXABLE_CATEGORY_ITEMS;
}

// Country IDs eligible for type-index pages (matches COUNTRY_SLUGS keys)
export const TYPE_INDEX_COUNTRIES = [
  "germany", "hungary", "romania", "france", "united-kingdom", "austria", "switzerland",
  "italy", "spain", "portugal", "poland", "netherlands", "belgium",
];
