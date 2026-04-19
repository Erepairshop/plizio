import { pois as dePois, regions as deRegions, type POI } from "@/lib/visualLab/data/poi";
import { romaniaAllPois, romaniaRegions } from "@/lib/visualLab/data/romaniaPoi";
import { slugify } from "@/lib/seo/slugify";

export type Lang = "de" | "hu" | "ro" | "en";

export const SUPPORTED_LANGS: Lang[] = ["de", "hu", "ro", "en"];

export const pois = [...dePois, ...romaniaAllPois];
export const regions = [...deRegions, ...romaniaRegions];

export const COUNTRY_SLUGS: Record<string, Record<Lang, string>> = {
  germany: {
    de: "deutschland",
    hu: "nemetorszag",
    ro: "germania",
    en: "germany",
  },
  romania: {
    de: "rumaenien",
    hu: "romania",
    ro: "romania",
    en: "romania",
  },
};

export const STATE_SLUGS: Record<string, Record<Lang, string>> = {
  // Germany
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
  // Romania - Using IDs as slugs as requested
  "RO-AB": { de: "ro-ab", hu: "ro-ab", ro: "ro-ab", en: "ro-ab" },
  "RO-AG": { de: "ro-ag", hu: "ro-ag", ro: "ro-ag", en: "ro-ag" },
  "RO-AR": { de: "ro-ar", hu: "ro-ar", ro: "ro-ar", en: "ro-ar" },
  "RO-B": { de: "ro-b", hu: "ro-b", ro: "ro-b", en: "ro-b" },
  "RO-BC": { de: "ro-bc", hu: "ro-bc", ro: "ro-bc", en: "ro-bc" },
  "RO-BH": { de: "ro-bh", hu: "ro-bh", ro: "ro-bh", en: "ro-bh" },
  "RO-BN": { de: "ro-bn", hu: "ro-bn", ro: "ro-bn", en: "ro-bn" },
  "RO-BR": { de: "ro-br", hu: "ro-br", ro: "ro-br", en: "ro-br" },
  "RO-BT": { de: "ro-bt", hu: "ro-bt", ro: "ro-bt", en: "ro-bt" },
  "RO-BV": { de: "ro-bv", hu: "ro-bv", ro: "ro-bv", en: "ro-bv" },
  "RO-BZ": { de: "ro-bz", hu: "ro-bz", ro: "ro-bz", en: "ro-bz" },
  "RO-CJ": { de: "ro-cj", hu: "ro-cj", ro: "ro-cj", en: "ro-cj" },
  "RO-CL": { de: "ro-cl", hu: "ro-cl", ro: "ro-cl", en: "ro-cl" },
  "RO-CS": { de: "ro-cs", hu: "ro-cs", ro: "ro-cs", en: "ro-cs" },
  "RO-CT": { de: "ro-ct", hu: "ro-ct", ro: "ro-ct", en: "ro-ct" },
  "RO-CV": { de: "ro-cv", hu: "ro-cv", ro: "ro-cv", en: "ro-cv" },
  "RO-DB": { de: "ro-db", hu: "ro-db", ro: "ro-db", en: "ro-db" },
  "RO-DJ": { de: "ro-dj", hu: "ro-dj", ro: "ro-dj", en: "ro-dj" },
  "RO-GJ": { de: "ro-gj", hu: "ro-gj", ro: "ro-gj", en: "ro-gj" },
  "RO-GL": { de: "ro-gl", hu: "ro-gl", ro: "ro-gl", en: "ro-gl" },
  "RO-GR": { de: "ro-gr", hu: "ro-gr", ro: "ro-gr", en: "ro-gr" },
  "RO-HD": { de: "ro-hd", hu: "ro-hd", ro: "ro-hd", en: "ro-hd" },
  "RO-HR": { de: "ro-hr", hu: "ro-hr", ro: "ro-hr", en: "ro-hr" },
  "RO-IF": { de: "ro-if", hu: "ro-if", ro: "ro-if", en: "ro-if" },
  "RO-IL": { de: "ro-il", hu: "ro-il", ro: "ro-il", en: "ro-il" },
  "RO-IS": { de: "ro-is", hu: "ro-is", ro: "ro-is", en: "ro-is" },
  "RO-MH": { de: "ro-mh", hu: "ro-mh", ro: "ro-mh", en: "ro-mh" },
  "RO-MM": { de: "ro-mm", hu: "ro-mm", ro: "ro-mm", en: "ro-mm" },
  "RO-MS": { de: "ro-ms", hu: "ro-ms", ro: "ro-ms", en: "ro-ms" },
  "RO-NT": { de: "ro-nt", hu: "ro-nt", ro: "ro-nt", en: "ro-nt" },
  "RO-OT": { de: "ro-ot", hu: "ro-ot", ro: "ro-ot", en: "ro-ot" },
  "RO-PH": { de: "ro-ph", hu: "ro-ph", ro: "ro-ph", en: "ro-ph" },
  "RO-SB": { de: "ro-sb", hu: "ro-sb", ro: "ro-sb", en: "ro-sb" },
  "RO-SJ": { de: "ro-sj", hu: "ro-sj", ro: "ro-sj", en: "ro-sj" },
  "RO-SM": { de: "ro-sm", hu: "ro-sm", ro: "ro-sm", en: "ro-sm" },
  "RO-SV": { de: "ro-sv", hu: "ro-sv", ro: "ro-sv", en: "ro-sv" },
  "RO-TL": { de: "ro-tl", hu: "ro-tl", ro: "ro-tl", en: "ro-tl" },
  "RO-TM": { de: "ro-tm", hu: "ro-tm", ro: "ro-tm", en: "ro-tm" },
  "RO-TR": { de: "ro-tr", hu: "ro-tr", ro: "ro-tr", en: "ro-tr" },
  "RO-VL": { de: "ro-vl", hu: "ro-vl", ro: "ro-vl", en: "ro-vl" },
  "RO-VN": { de: "ro-vn", hu: "ro-vn", ro: "ro-vn", en: "ro-vn" },
  "RO-VS": { de: "ro-vs", hu: "ro-vs", ro: "ro-vs", en: "ro-vs" },
};

export const REGION_BY_ID = new Map(regions.map((region) => [region.id, region]));

const poisOnly = pois.filter((poi) => poi.type !== "region" && poi.type !== "country");
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

export function getCountryId(id: string) {
  if (id.startsWith("DE-") || id === "DE") return "germany";
  if (id.startsWith("RO-") || id === "RO") return "romania";
  return "germany";
}

export function countrySlugFor(lang: Lang, countryId: string = "germany") {
  return COUNTRY_SLUGS[countryId]?.[lang] ?? COUNTRY_SLUGS.germany[lang];
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

export function buildCountryPath(lang: Lang, countryId: string = "germany") {
  return `/${lang}/${countrySlugFor(lang, countryId)}/`;
}

export function buildStatePath(lang: Lang, stateId: string) {
  const countryId = getCountryId(stateId);
  return `${buildCountryPath(lang, countryId)}${stateSlugFor(stateId, lang)}/`;
}

export function buildPoiPath(lang: Lang, poi: POI) {
  return `${buildStatePath(lang, poi.parent)}${poiSlug(poi, lang)}/`;
}

export function buildPoiPathById(lang: Lang, poiId: string) {
  const poi = poisOnly.find((entry) => entry.id === poiId);
  return poi ? buildPoiPath(lang, poi) : null;
}
