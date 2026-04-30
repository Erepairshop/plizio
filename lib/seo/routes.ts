import type { Metadata } from "next";
import {
  SUPPORTED_LANGS,
  buildCountryPath,
  buildPoiPath,
  buildStatePath,
  countrySlugFor,
  COUNTRY_SLUGS,
  findPoiBySlug,
  findRegionByStateSlug,
  getCountryId,
  getStateForPoi,
  localizedStateName,
  pois,
  regions,
  type Lang,
} from "@/lib/seo/slugs";
import type { POI } from "@/lib/visualLab/data/poi";

export const SITE_URL = "https://plizio.com";

function localizedValue(value: { de: string; hu: string; ro: string; en: string } | undefined, lang: Lang) {
  return value?.[lang] || value?.de || "";
}

export const SEO_LOCALES: Record<Lang, string> = {
  de: "de_DE",
  hu: "hu_HU",
  ro: "ro_RO",
  en: "en_US",
};

export const COUNTRY_COPY: Record<string, Record<Lang, { title: string; description: string; name: string }>> = {
  germany: {
    de: { title: "Interaktive Deutschlandkarte", description: "Statische Lernseiten zu Bundesländern, Städten, Natur, Geschichte und Sehenswürdigkeiten in Deutschland.", name: "Deutschland" },
    hu: { title: "Németország interaktív térképe", description: "Statikus tanulóoldalak a német tartományokról, városokról, természeti helyekről, történelemről és nevezetességekről.", name: "Németország" },
    ro: { title: "Harta interactivă a Germaniei", description: "Pagini statice de studiu despre landuri, orașe, natură, istorie și obiective turistice din Germania.", name: "Germania" },
    en: { title: "Interactive Germany Map", description: "Static study pages about German states, cities, nature, history, and landmarks.", name: "Germany" },
  },
  romania: {
    de: { title: "Interaktive Rumänienkarte", description: "Statische Lernseiten zu Kreisen, Städten, Natur, Geschichte und Sehenswürdigkeiten in Rumänien.", name: "Rumänien" },
    hu: { title: "Románia interaktív térképe", description: "Statikus tanulóoldalak a román megyékről, városokról, természeti helyekről, történelemről és nevezetességekről.", name: "Románia" },
    ro: { title: "Harta interactivă a României", description: "Pagini statice de studiu despre județe, orașe, natură, istorie și obiective turistice din România.", name: "România" },
    en: { title: "Interactive Romania Map", description: "Static study pages about Romanian counties, cities, nature, history, and landmarks.", name: "Romania" },
  },
  hungary: {
    de: { title: "Interaktive Ungarnkarte", description: "Statische Lernseiten zu Komitaten, Städten, Natur, Geschichte und Sehenswürdigkeiten in Ungarn.", name: "Ungarn" },
    hu: { title: "Magyarország interaktív térképe", description: "Statikus tanulóoldalak a magyar megyékről, városokról, természeti helyekről, történelemről és nevezetességekről.", name: "Magyarország" },
    ro: { title: "Harta interactivă a Ungariei", description: "Pagini statice de studiu despre județe, orașe, natură, istorie și obiective turistice din Ungaria.", name: "Ungaria" },
    en: { title: "Interactive Hungary Map", description: "Static study pages about Hungarian counties, cities, nature, history, and landmarks.", name: "Hungary" },
  },
};

export const SEO_COPY = {
  de: {
    home: "Start",
    related: "Verwandte Orte",
    facts: "Fakten",
    geography: "Geografische Daten",
    openMap: "Auf OpenStreetMap öffnen",
    backToMap: "Auf der Karte ansehen",
    more: "Mehr erfahren",
    states: "Regionen",
    cities: "Städte",
    nature: "Natur",
    history: "Geschichte",
    landmarks: "Sehenswürdigkeiten",
    capital: "Hauptstadt",
  },
  hu: {
    home: "Kezdőlap",
    related: "Kapcsolódó helyek",
    facts: "Tények",
    geography: "Földrajzi adatok",
    openMap: "Megnyitás OpenStreetMapen",
    backToMap: "Megnézem a térképen",
    more: "Bővebben",
    states: "Régiók",
    cities: "Városok",
    nature: "Természet",
    history: "Történelem",
    landmarks: "Nevezetességek",
    capital: "Főváros",
  },
  ro: {
    home: "Acasă",
    related: "Locuri similare",
    facts: "Informații",
    geography: "Date geografice",
    openMap: "Deschide în OpenStreetMap",
    backToMap: "Vezi pe hartă",
    more: "Detalii",
    states: "Regiuni",
    cities: "Orașe",
    nature: "Natură",
    history: "Istorie",
    landmarks: "Obiective",
    capital: "Capitală",
  },
  en: {
    home: "Home",
    related: "Related places",
    facts: "Facts",
    geography: "Geographic data",
    openMap: "Open in OpenStreetMap",
    backToMap: "View on the map",
    more: "Read more",
    states: "Regions",
    cities: "Cities",
    nature: "Nature",
    history: "History",
    landmarks: "Landmarks",
    capital: "Capital",
  },
} as const;

export function isLang(value: string): value is Lang {
  return SUPPORTED_LANGS.includes(value as Lang);
}

export function truncateDescription(value: string, max = 160) {
  return value.length <= max ? value : `${value.slice(0, max - 1).trimEnd()}…`;
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function getCountryAlternates(countryId: string = "germany") {
  return Object.fromEntries(SUPPORTED_LANGS.map((lang) => [lang, absoluteUrl(buildCountryPath(lang, countryId))]));
}

export function getStateAlternates(stateId: string) {
  return Object.fromEntries(SUPPORTED_LANGS.map((lang) => [lang, absoluteUrl(buildStatePath(lang, stateId))]));
}

export function getPoiAlternates(poi: POI) {
  return Object.fromEntries(SUPPORTED_LANGS.map((lang) => [lang, absoluteUrl(buildPoiPath(lang, poi))]));
}

export function getVisualLabHref(poi: POI) {
  const grade = poi.grades?.[0] ?? 1;
  return `/astro-sachkunde/${grade}/?vlab=${poi.id}`;
}

export function osmHref(poi: POI) {
  return `https://www.openstreetmap.org/?mlat=${poi.coords[1]}&mlon=${poi.coords[0]}#map=9/${poi.coords[1]}/${poi.coords[0]}`;
}

export function getPoisForState(stateId: string) {
  return pois.filter((poi) => poi.type !== "region" && poi.parent === stateId);
}

export function getRelatedPois(poi: POI, limit = 6) {
  if (!poi.parent) return [];
  return getPoisForState(poi.parent)
    .filter((entry) => entry.id !== poi.id)
    .sort((a, b) => Number(a.type !== poi.type) - Number(b.type !== poi.type))
    .slice(0, limit);
}

export function groupPoisForState(stateId: string) {
  const statePois = getPoisForState(stateId);
  return {
    cities: statePois.filter((poi) => poi.type === "state-capital" || poi.type === "city"),
    nature: statePois.filter((poi) => ["river", "mountain", "lake", "island", "forest", "sea", "nature"].includes(poi.type)),
    history: statePois.filter((poi) => poi.type === "historical"),
    landmarks: statePois.filter((poi) => poi.type === "landmark"),
  };
}

export function getPoiByRouteParams(lang: Lang, country: string, state: string, poiSlugValue: string) {
  // Find country by matching localized slug across ALL known countries
  let countryId: string | null = null;
  for (const cid of Object.keys(COUNTRY_SLUGS)) {
    if (country === COUNTRY_SLUGS[cid][lang]) {
      countryId = cid;
      break;
    }
  }
  if (!countryId) return null;

  const region = findRegionByStateSlug(lang, state);
  if (!region || getCountryId(region.id) !== countryId) return null;

  const poi = findPoiBySlug(lang, poiSlugValue);
  // POI parent egyezhet region.id-vel (legacy slug pl "budapest") VAGY region.parent-tel (HU-BU ISO kod)
  if (!poi || (poi.parent !== region.id && poi.parent !== region.parent)) return null;
  return { poi, region };
}

export function getStateByRouteParams(lang: Lang, country: string, state: string) {
  // Find country by matching localized slug across ALL known countries
  let countryId: string | null = null;
  for (const cid of Object.keys(COUNTRY_SLUGS)) {
    if (country === COUNTRY_SLUGS[cid][lang]) {
      countryId = cid;
      break;
    }
  }
  if (!countryId) return null;

  const region = findRegionByStateSlug(lang, state);
  if (!region || getCountryId(region.id) !== countryId) return null;
  return region;
}

export function poiTitle(poi: POI, lang: Lang) {
  const state = getStateForPoi(poi);
  const name = localizedValue(poi.name, lang) || poi.id;
  return `${name} - ${localizedStateName(state?.id ?? poi.parent ?? "", lang)} | Plizio Visual Lab`;
}

export function poiDescription(poi: POI, lang: Lang) {
  return truncateDescription(localizedValue(poi.description, lang));
}

export function stateDescription(stateId: string, lang: Lang) {
  const state = regions.find((entry) => entry.id === stateId);
  const countryId = getCountryId(stateId);
  return truncateDescription(localizedValue(state?.description, lang) || COUNTRY_COPY[countryId][lang].description);
}

export function countryMetadata(lang: Lang, countryId: string = "germany"): Metadata {
  const copy = COUNTRY_COPY[countryId][lang];
  let imageUrl = "/geo-images/germany-full.jpg";
  if (countryId === "romania") imageUrl = "/geo-images/romania/RO.webp";
  else if (countryId === "hungary") imageUrl = "/geo-images/hungary/HU.webp";

  return {
    title: `${copy.title} | Plizio Visual Lab`,
    description: copy.description,
    alternates: {
      canonical: absoluteUrl(buildCountryPath(lang, countryId)),
      languages: { ...getCountryAlternates(countryId), "x-default": absoluteUrl(buildCountryPath("en", countryId)) },
    },
    openGraph: {
      title: `${copy.title} | Plizio Visual Lab`,
      description: copy.description,
      url: absoluteUrl(buildCountryPath(lang, countryId)),
      locale: SEO_LOCALES[lang],
      type: "website",
      images: [{ url: absoluteUrl(imageUrl) }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${copy.title} | Plizio Visual Lab`,
      description: copy.description,
      images: [absoluteUrl(imageUrl)],
    },
  };
}
