import type { Metadata } from "next";
import { pois, regions, type POI } from "@/lib/visualLab/data/poi";
import {
  SUPPORTED_LANGS,
  buildCountryPath,
  buildPoiPath,
  buildStatePath,
  countrySlugFor,
  findPoiBySlug,
  findRegionByStateSlug,
  getStateForPoi,
  localizedStateName,
  type Lang,
} from "@/lib/seo/slugs";

export const SITE_URL = "https://plizio.com";

export const SEO_LOCALES: Record<Lang, string> = {
  de: "de_DE",
  hu: "hu_HU",
  ro: "ro_RO",
  en: "en_US",
};

export const SEO_COPY = {
  de: {
    countryTitle: "Interaktive Deutschlandkarte",
    countryDescription: "Statische Lernseiten zu Bundesländern, Städten, Natur, Geschichte und Sehenswürdigkeiten in Deutschland.",
    home: "Start",
    country: "Deutschland",
    related: "Verwandte Orte",
    facts: "Fakten",
    geography: "Geografische Daten",
    openMap: "Auf OpenStreetMap öffnen",
    backToMap: "Auf der Karte ansehen",
    more: "Mehr erfahren",
    states: "Bundesländer",
    cities: "Städte",
    nature: "Natur",
    history: "Geschichte",
    landmarks: "Sehenswürdigkeiten",
    capital: "Hauptstadt",
  },
  hu: {
    countryTitle: "Németország interaktív térképe",
    countryDescription: "Statikus tanulóoldalak a német tartományokról, városokról, természeti helyekről, történelemről és nevezetességekről.",
    home: "Kezdőlap",
    country: "Németország",
    related: "Kapcsolódó helyek",
    facts: "Tények",
    geography: "Földrajzi adatok",
    openMap: "Megnyitás OpenStreetMapen",
    backToMap: "Megnézem a térképen",
    more: "Bővebben",
    states: "Tartományok",
    cities: "Városok",
    nature: "Természet",
    history: "Történelem",
    landmarks: "Nevezetességek",
    capital: "Főváros",
  },
  ro: {
    countryTitle: "Harta interactivă a Germaniei",
    countryDescription: "Pagini statice de studiu despre landuri, orașe, natură, istorie și obiective turistice din Germania.",
    home: "Acasă",
    country: "Germania",
    related: "Locuri similare",
    facts: "Informații",
    geography: "Date geografice",
    openMap: "Deschide în OpenStreetMap",
    backToMap: "Vezi pe hartă",
    more: "Detalii",
    states: "Landuri",
    cities: "Orașe",
    nature: "Natură",
    history: "Istorie",
    landmarks: "Obiective",
    capital: "Capitală",
  },
  en: {
    countryTitle: "Interactive Germany Map",
    countryDescription: "Static study pages about German states, cities, nature, history, and landmarks.",
    home: "Home",
    country: "Germany",
    related: "Related places",
    facts: "Facts",
    geography: "Geographic data",
    openMap: "Open in OpenStreetMap",
    backToMap: "View on the map",
    more: "Read more",
    states: "States",
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

export function getCountryAlternates() {
  return Object.fromEntries(SUPPORTED_LANGS.map((lang) => [lang, absoluteUrl(buildCountryPath(lang))]));
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
  return getPoisForState(poi.parent)
    .filter((entry) => entry.id !== poi.id)
    .sort((a, b) => Number(a.type !== poi.type) - Number(b.type !== poi.type))
    .slice(0, limit);
}

export function groupPoisForState(stateId: string) {
  const statePois = getPoisForState(stateId);
  return {
    cities: statePois.filter((poi) => poi.type === "state-capital" || poi.type === "city"),
    nature: statePois.filter((poi) => ["river", "mountain", "lake", "island", "forest", "sea"].includes(poi.type)),
    history: statePois.filter((poi) => poi.type === "historical"),
    landmarks: statePois.filter((poi) => poi.type === "landmark"),
  };
}

export function getPoiByRouteParams(lang: Lang, country: string, state: string, poiSlugValue: string) {
  if (country !== countrySlugFor(lang)) return null;
  const region = findRegionByStateSlug(lang, state);
  if (!region) return null;
  const poi = findPoiBySlug(lang, poiSlugValue);
  if (!poi || poi.parent !== region.id) return null;
  return { poi, region };
}

export function getStateByRouteParams(lang: Lang, country: string, state: string) {
  if (country !== countrySlugFor(lang)) return null;
  return findRegionByStateSlug(lang, state);
}

export function poiTitle(poi: POI, lang: Lang) {
  const state = getStateForPoi(poi);
  const name = poi.name[lang] || poi.name.de;
  return `${name} - ${localizedStateName(state?.id || poi.parent, lang)} | Plizio Visual Lab`;
}

export function poiDescription(poi: POI, lang: Lang) {
  return truncateDescription(poi.description[lang] || poi.description.de || "");
}

export function stateDescription(stateId: string, lang: Lang) {
  const state = regions.find((entry) => entry.id === stateId);
  return truncateDescription(state?.description[lang] || state?.description.de || SEO_COPY[lang].countryDescription);
}

export function countryMetadata(lang: Lang): Metadata {
  const copy = SEO_COPY[lang];
  return {
    title: `${copy.countryTitle} | Plizio Visual Lab`,
    description: copy.countryDescription,
    alternates: {
      canonical: absoluteUrl(buildCountryPath(lang)),
      languages: { ...getCountryAlternates(), "x-default": absoluteUrl(buildCountryPath("en")) },
    },
    openGraph: {
      title: `${copy.countryTitle} | Plizio Visual Lab`,
      description: copy.countryDescription,
      url: absoluteUrl(buildCountryPath(lang)),
      locale: SEO_LOCALES[lang],
      type: "website",
      images: [{ url: absoluteUrl("/geo-images/germany-full.jpg") }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${copy.countryTitle} | Plizio Visual Lab`,
      description: copy.countryDescription,
      images: [absoluteUrl("/geo-images/germany-full.jpg")],
    },
  };
}
