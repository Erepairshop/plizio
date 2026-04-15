import { pois, regions, type POI } from "@/lib/visualLab/data/poi";
import { slugify } from "@/lib/seo/slugify";

export type Lang = "de" | "hu" | "ro" | "en";

export const SUPPORTED_LANGS: Lang[] = ["de", "hu", "ro", "en"];

export const COUNTRY_SLUGS: Record<Lang, string> = {
  de: "deutschland",
  hu: "nemetorszag",
  ro: "germania",
  en: "germany",
};

export const STATE_SLUGS: Record<string, Record<Lang, string>> = {
  "DE-BW": { de: "baden-wuerttemberg", hu: "baden-wurttemberg", ro: "baden-wurttemberg", en: "baden-wurttemberg" },
  "DE-BY": { de: "bayern", hu: "bajororszag", ro: "bavaria", en: "bavaria" },
  "DE-BE": { de: "berlin", hu: "berlin", ro: "berlin", en: "berlin" },
  "DE-BB": { de: "brandenburg", hu: "brandenburg", ro: "brandenburg", en: "brandenburg" },
  "DE-HB": { de: "bremen", hu: "brema", ro: "bremen", en: "bremen" },
  "DE-HH": { de: "hamburg", hu: "hamburg", ro: "hamburg", en: "hamburg" },
  "DE-HE": { de: "hessen", hu: "hessen", ro: "hessa", en: "hesse" },
  "DE-MV": { de: "mecklenburg-vorpommern", hu: "mecklenburg-elo-pomerania", ro: "mecklenburg-pomerania-inferioara", en: "mecklenburg-western-pomerania" },
  "DE-NI": { de: "niedersachsen", hu: "also-szaszorszag", ro: "saxonia-inferioara", en: "lower-saxony" },
  "DE-NW": { de: "nordrhein-westfalen", hu: "eszak-rajna-vesztfalia", ro: "renania-de-nord-westfalia", en: "north-rhine-westphalia" },
  "DE-RP": { de: "rheinland-pfalz", hu: "rajna-videk-pfalz", ro: "renania-palatinat", en: "rhineland-palatinate" },
  "DE-SL": { de: "saarland", hu: "saar-videk", ro: "saarland", en: "saarland" },
  "DE-SN": { de: "sachsen", hu: "szaszorszag", ro: "saxonia", en: "saxony" },
  "DE-ST": { de: "sachsen-anhalt", hu: "szasz-anhalt", ro: "saxonia-anhalt", en: "saxony-anhalt" },
  "DE-SH": { de: "schleswig-holstein", hu: "schleswig-holstein", ro: "schleswig-holstein", en: "schleswig-holstein" },
  "DE-TH": { de: "thueringen", hu: "turingia", ro: "turingia", en: "thuringia" },
};

export const REGION_BY_ID = new Map(regions.map((region) => [region.id, region]));

const poisOnly = pois.filter((poi) => poi.type !== "region");
const poiIdByLangSlug = new Map<string, string>();

function slugKey(lang: Lang, slug: string) {
  return `${lang}:${slug}`;
}

function localizedPoiBaseSlug(poi: POI, lang: Lang) {
  return slugify(poi.name[lang] || poi.name.de || poi.id);
}

function disambiguatedPoiSlug(poi: POI, lang: Lang) {
  const base = localizedPoiBaseSlug(poi, lang);
  const key = slugKey(lang, base);
  const existing = poiIdByLangSlug.get(key);
  if (!existing || existing === poi.id) {
    poiIdByLangSlug.set(key, poi.id);
    return base;
  }

  const fallback = slugify(`${poi.type}-${poi.name[lang] || poi.name.de || poi.id}`);
  poiIdByLangSlug.set(slugKey(lang, fallback), poi.id);
  return fallback;
}

export const POI_SLUGS: Record<string, Record<Lang, string>> = Object.fromEntries(
  poisOnly.map((poi) => [
    poi.id,
    Object.fromEntries(
      SUPPORTED_LANGS.map((lang) => [lang, disambiguatedPoiSlug(poi, lang)]),
    ) as Record<Lang, string>,
  ]),
);

export function poiSlug(poi: POI, lang: Lang) {
  return POI_SLUGS[poi.id]?.[lang] ?? localizedPoiBaseSlug(poi, lang);
}

export function findRegionByStateSlug(lang: Lang, stateSlug: string) {
  return regions.find((region) => STATE_SLUGS[region.id]?.[lang] === stateSlug) ?? null;
}

export function findPoiBySlug(lang: Lang, poiSlugValue: string) {
  return poisOnly.find((poi) => POI_SLUGS[poi.id]?.[lang] === poiSlugValue) ?? null;
}

export function countrySlugFor(lang: Lang) {
  return COUNTRY_SLUGS[lang];
}

export function stateSlugFor(stateId: string, lang: Lang) {
  return STATE_SLUGS[stateId]?.[lang] ?? slugify(REGION_BY_ID.get(stateId)?.name[lang] || REGION_BY_ID.get(stateId)?.name.de || stateId);
}

export function getStateForPoi(poi: POI) {
  return REGION_BY_ID.get(poi.parent) ?? null;
}

export function localizedStateName(stateId: string, lang: Lang) {
  const state = REGION_BY_ID.get(stateId);
  return state?.name[lang] || state?.name.de || stateId;
}

export function buildCountryPath(lang: Lang) {
  return `/${lang}/${countrySlugFor(lang)}/`;
}

export function buildStatePath(lang: Lang, stateId: string) {
  return `${buildCountryPath(lang)}${stateSlugFor(stateId, lang)}/`;
}

export function buildPoiPath(lang: Lang, poi: POI) {
  return `${buildStatePath(lang, poi.parent)}${poiSlug(poi, lang)}/`;
}

export function buildPoiPathById(lang: Lang, poiId: string) {
  const poi = poisOnly.find((entry) => entry.id === poiId);
  return poi ? buildPoiPath(lang, poi) : null;
}
