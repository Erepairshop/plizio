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

// Type-bucket slug per language
export const TYPE_SLUGS: Record<string, Record<Lang, string>> = {
  cities:     { de: "staedte",            hu: "varosok",           ro: "orase",                en: "cities" },
  villages:   { de: "doerfer",            hu: "falvak",            ro: "sate",                 en: "villages" },
  castles:    { de: "burgen",             hu: "varak",             ro: "castele",              en: "castles" },
  mountains:  { de: "berge",              hu: "hegyek",            ro: "munti",                en: "mountains" },
  lakes:      { de: "seen",               hu: "tavak",             ro: "lacuri",               en: "lakes" },
  rivers:     { de: "fluesse",            hu: "folyok",            ro: "rauri",                en: "rivers" },
  historical: { de: "historische-orte",   hu: "tortenelmi-helyek", ro: "locuri-istorice",      en: "historical-sites" },
  landmarks:  { de: "sehenswuerdigkeiten", hu: "latnivalok",       ro: "obiective-turistice",  en: "landmarks" },
  nature:     { de: "naturwunder",        hu: "termeszet",         ro: "natura",               en: "nature" },
};

// Display heading per bucket × lang
export const TYPE_HEADINGS: Record<string, Record<Lang, string>> = {
  cities:     { de: "Städte",              hu: "Városok",          ro: "Orașe",                en: "Cities" },
  villages:   { de: "Dörfer",              hu: "Falvak",           ro: "Sate",                 en: "Villages" },
  castles:    { de: "Burgen und Festungen", hu: "Várak és erődök", ro: "Castele și fortărețe", en: "Castles & Forts" },
  mountains:  { de: "Berge",               hu: "Hegyek",           ro: "Munți",                en: "Mountains" },
  lakes:      { de: "Seen",                hu: "Tavak",            ro: "Lacuri",               en: "Lakes" },
  rivers:     { de: "Flüsse",              hu: "Folyók",           ro: "Râuri",                en: "Rivers" },
  historical: { de: "Historische Orte",    hu: "Történelmi helyek", ro: "Locuri istorice",     en: "Historical Sites" },
  landmarks:  { de: "Sehenswürdigkeiten",  hu: "Látnivalók",       ro: "Obiective turistice",  en: "Landmarks" },
  nature:     { de: "Naturwunder",         hu: "Természeti helyek", ro: "Locuri naturale",     en: "Nature" },
};

export function typeSlugFor(bucket: string, lang: Lang): string {
  return TYPE_SLUGS[bucket]?.[lang] || bucket;
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

// Country IDs eligible for type-index pages (priority countries first)
export const TYPE_INDEX_COUNTRIES = ["DE", "HU", "RO", "FR", "UK", "AT", "CH", "IT", "ES", "PL", "NL", "BE"];
