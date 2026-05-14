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
  stateSlugFor,
  localizedStateName,
  pois,
  regions,
  type Lang,
} from "@/lib/seo/slugs";
import type { POI } from "@/lib/visualLab/data/poi";

export const SITE_URL = "https://plizio.com";

function localizedValue(value: Partial<Record<Lang, string>> | undefined, lang: Lang) {
  return value?.[lang] || value?.de || "";
}

export const SEO_LOCALES: Record<Lang, string> = {
  de: "de_DE",
  hu: "hu_HU",
  ro: "ro_RO",
  en: "en_US",
};

// Lokalizált országnevek minden ország minden nyelven (4 lang × 50+ ország)
export const COUNTRY_NAMES: Record<string, Record<Lang, string>> = {
  germany: { de: "Deutschland", hu: "Németország", ro: "Germania", en: "Germany" },
  romania: { de: "Rumänien", hu: "Románia", ro: "România", en: "Romania" },
  hungary: { de: "Ungarn", hu: "Magyarország", ro: "Ungaria", en: "Hungary" },
  vatican: { de: "Vatikanstadt", hu: "Vatikán", ro: "Vatican", en: "Vatican" },
  austria: { de: "Österreich", hu: "Ausztria", ro: "Austria", en: "Austria" },
  switzerland: { de: "Schweiz", hu: "Svájc", ro: "Elveția", en: "Switzerland" },
  france: { de: "Frankreich", hu: "Franciaország", ro: "Franța", en: "France" },
  italy: { de: "Italien", hu: "Olaszország", ro: "Italia", en: "Italy" },
  spain: { de: "Spanien", hu: "Spanyolország", ro: "Spania", en: "Spain" },
  portugal: { de: "Portugal", hu: "Portugália", ro: "Portugalia", en: "Portugal" },
  netherlands: { de: "Niederlande", hu: "Hollandia", ro: "Olanda", en: "Netherlands" },
  belgium: { de: "Belgien", hu: "Belgium", ro: "Belgia", en: "Belgium" },
  luxembourg: { de: "Luxemburg", hu: "Luxemburg", ro: "Luxemburg", en: "Luxembourg" },
  "united-kingdom": { de: "Vereinigtes Königreich", hu: "Egyesült Királyság", ro: "Regatul Unit", en: "United Kingdom" },
  ireland: { de: "Irland", hu: "Írország", ro: "Irlanda", en: "Ireland" },
  poland: { de: "Polen", hu: "Lengyelország", ro: "Polonia", en: "Poland" },
  "czech-republic": { de: "Tschechien", hu: "Csehország", ro: "Cehia", en: "Czech Republic" },
  slovakia: { de: "Slowakei", hu: "Szlovákia", ro: "Slovacia", en: "Slovakia" },
  slovenia: { de: "Slowenien", hu: "Szlovénia", ro: "Slovenia", en: "Slovenia" },
  croatia: { de: "Kroatien", hu: "Horvátország", ro: "Croația", en: "Croatia" },
  serbia: { de: "Serbien", hu: "Szerbia", ro: "Serbia", en: "Serbia" },
  bosnia: { de: "Bosnien und Herzegowina", hu: "Bosznia-Hercegovina", ro: "Bosnia și Herțegovina", en: "Bosnia and Herzegovina" },
  montenegro: { de: "Montenegro", hu: "Montenegró", ro: "Muntenegru", en: "Montenegro" },
  "north-macedonia": { de: "Nordmazedonien", hu: "Észak-Macedónia", ro: "Macedonia de Nord", en: "North Macedonia" },
  albania: { de: "Albanien", hu: "Albánia", ro: "Albania", en: "Albania" },
  kosovo: { de: "Kosovo", hu: "Koszovó", ro: "Kosovo", en: "Kosovo" },
  bulgaria: { de: "Bulgarien", hu: "Bulgária", ro: "Bulgaria", en: "Bulgaria" },
  greece: { de: "Griechenland", hu: "Görögország", ro: "Grecia", en: "Greece" },
  turkey: { de: "Türkei", hu: "Törökország", ro: "Turcia", en: "Turkey" },
  cyprus: { de: "Zypern", hu: "Ciprus", ro: "Cipru", en: "Cyprus" },
  malta: { de: "Malta", hu: "Málta", ro: "Malta", en: "Malta" },
  denmark: { de: "Dänemark", hu: "Dánia", ro: "Danemarca", en: "Denmark" },
  norway: { de: "Norwegen", hu: "Norvégia", ro: "Norvegia", en: "Norway" },
  sweden: { de: "Schweden", hu: "Svédország", ro: "Suedia", en: "Sweden" },
  finland: { de: "Finnland", hu: "Finnország", ro: "Finlanda", en: "Finland" },
  iceland: { de: "Island", hu: "Izland", ro: "Islanda", en: "Iceland" },
  estonia: { de: "Estland", hu: "Észtország", ro: "Estonia", en: "Estonia" },
  latvia: { de: "Lettland", hu: "Lettország", ro: "Letonia", en: "Latvia" },
  lithuania: { de: "Litauen", hu: "Litvánia", ro: "Lituania", en: "Lithuania" },
  belarus: { de: "Belarus", hu: "Fehéroroszország", ro: "Belarus", en: "Belarus" },
  ukraine: { de: "Ukraine", hu: "Ukrajna", ro: "Ucraina", en: "Ukraine" },
  moldova: { de: "Moldau", hu: "Moldova", ro: "Moldova", en: "Moldova" },
  andorra: { de: "Andorra", hu: "Andorra", ro: "Andorra", en: "Andorra" },
  monaco: { de: "Monaco", hu: "Monaco", ro: "Monaco", en: "Monaco" },
  "san-marino": { de: "San Marino", hu: "San Marino", ro: "San Marino", en: "San Marino" },
  liechtenstein: { de: "Liechtenstein", hu: "Liechtenstein", ro: "Liechtenstein", en: "Liechtenstein" },
  usa: { de: "USA", hu: "Amerikai Egyesült Államok", ro: "Statele Unite", en: "United States" },
  canada: { de: "Kanada", hu: "Kanada", ro: "Canada", en: "Canada" },
  mexico: { de: "Mexiko", hu: "Mexikó", ro: "Mexic", en: "Mexico" },
  guatemala: { de: "Guatemala", hu: "Guatemala", ro: "Guatemala", en: "Guatemala" },
  honduras: { de: "Honduras", hu: "Honduras", ro: "Honduras", en: "Honduras" },
  nicaragua: { de: "Nicaragua", hu: "Nicaragua", ro: "Nicaragua", en: "Nicaragua" },
  "costa-rica": { de: "Costa Rica", hu: "Costa Rica", ro: "Costa Rica", en: "Costa Rica" },
  panama: { de: "Panama", hu: "Panama", ro: "Panama", en: "Panama" },
  cuba: { de: "Kuba", hu: "Kuba", ro: "Cuba", en: "Cuba" },
  "dominican-republic": { de: "Dominikanische Republik", hu: "Dominikai Köztársaság", ro: "Republica Dominicană", en: "Dominican Republic" },
  haiti: { de: "Haiti", hu: "Haiti", ro: "Haiti", en: "Haiti" },
  jamaica: { de: "Jamaika", hu: "Jamaica", ro: "Jamaica", en: "Jamaica" },
  bahamas: { de: "Bahamas", hu: "Bahama-szigetek", ro: "Bahamas", en: "Bahamas" },
  trinidad: { de: "Trinidad und Tobago", hu: "Trinidad és Tobago", ro: "Trinidad și Tobago", en: "Trinidad and Tobago" },
  belize: { de: "Belize", hu: "Belize", ro: "Belize", en: "Belize" },
  "el-salvador": { de: "El Salvador", hu: "El Salvador", ro: "El Salvador", en: "El Salvador" },
};

// Sablon-alapú ország-szintű meta (title, description) generálás —
// kerüli a duplicate content-et: minden ország saját lokalizált szöveget kap.
function templateCopy(countryId: string, lang: Lang): { title: string; description: string; name: string } {
  const name = COUNTRY_NAMES[countryId]?.[lang] ?? countryId;
  if (lang === "de") {
    return {
      title: `Interaktive ${name}-Karte`,
      description: `Statische Lernseiten zu Regionen, Städten, Natur, Geschichte und Sehenswürdigkeiten in ${name}.`,
      name,
    };
  }
  if (lang === "hu") {
    return {
      title: `${name} interaktív térképe`,
      description: `Statikus tanulóoldalak ${name} régióiról, városairól, természeti helyeiről, történelméről és nevezetességeiről.`,
      name,
    };
  }
  if (lang === "ro") {
    return {
      title: `Harta interactivă a ${name}`,
      description: `Pagini statice de studiu despre regiuni, orașe, natură, istorie și obiective turistice din ${name}.`,
      name,
    };
  }
  return {
    title: `Interactive ${name} Map`,
    description: `Static study pages about regions, cities, nature, history, and landmarks in ${name}.`,
    name,
  };
}

// Kézi (kurátorított) leírás germany/romania/hungary-hez. A többi ország
// automatikus templateCopy-t kap a getCountryCopy() helperen keresztül.
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

// Egyetlen lookup: kurátorált COUNTRY_COPY ha van, különben sablon.
export function getCountryCopy(countryId: string, lang: Lang) {
  return COUNTRY_COPY[countryId]?.[lang] ?? templateCopy(countryId, lang);
}

// Per-ország og:image URL — a generic fallback "/geo-images/${countryId}-full.jpg".
const COUNTRY_OG_IMAGE: Record<string, string> = {
  germany: "/geo-images/germany-full.jpg",
  romania: "/geo-images/romania/RO.webp",
  hungary: "/geo-images/hungary/HU.webp",
};
function getCountryOgImage(countryId: string) {
  return COUNTRY_OG_IMAGE[countryId] ?? `/geo-images/${countryId}-full.jpg`;
}

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

/**
 * SEO content quality check. Used by both:
 *   - sitemap.ts: skip empty POIs so Google doesn't waste crawl budget on Soft 404s
 *   - POI page metadata: emit robots:noindex for empty POIs
 *
 * Threshold: at least one description >= 200 chars AND at least 2 facts in any of 4 langs.
 */
export function hasIndexableContent(poi: POI): boolean {
  // Any POI with at least a name in some lang and a description (any length) or facts gets a page.
  // SEO richness varies per POI (adv content boosts ranking), but every POI MUST be reachable.
  const desc = poi.description as Record<string, string> | undefined;
  const facts = poi.facts as Record<string, string[]> | undefined;
  const descAdv = (poi as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced;
  const factsAdv = (poi as { factsAdvanced?: Record<string, string[]> }).factsAdvanced;
  const langs = ["de", "hu", "ro", "en"] as const;
  for (const l of langs) {
    if ((desc?.[l]?.length ?? 0) > 0 || (descAdv?.[l]?.length ?? 0) > 0) return true;
    if ((facts?.[l]?.length ?? 0) > 0 || (factsAdv?.[l]?.length ?? 0) > 0) return true;
  }
  return false;
}

export function getVisualLabHref(poi: POI) {
  const grade = poi.grades?.[0] ?? 1;
  return `/astro-sachkunde/${grade}/?vlab=${poi.id}`;
}

export function osmHref(poi: POI) {
  if (!poi.coords) return "https://www.openstreetmap.org/";
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

  const poi = findPoiBySlug(lang, poiSlugValue);
  if (!poi || !poi.parent) return null;

  const expectedStateSlug = stateSlugFor(poi.parent, lang);
  if (state !== expectedStateSlug && state !== poi.parent.toLowerCase()) return null;

  if (getCountryId(poi.parent) !== countryId) return null;

  const region = getStateForPoi(poi) ?? {
    id: poi.parent,
    type: "region",
    parent: countryId,
    name: { de: poi.parent, hu: poi.parent, ro: poi.parent, en: poi.parent },
  } as POI;

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

  let region = findRegionByStateSlug(lang, state);
  if (!region) {
    const poiInState = pois.find((p) => p.parent && (stateSlugFor(p.parent, lang) === state || p.parent.toLowerCase() === state));
    if (poiInState) {
      region = {
        id: poiInState.parent,
        type: "region",
        parent: countryId,
        name: { de: poiInState.parent, hu: poiInState.parent, ro: poiInState.parent, en: poiInState.parent },
      } as POI;
    }
  }

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
  const countryCopy = getCountryCopy(countryId, lang);
  return truncateDescription(localizedValue(state?.description, lang) || countryCopy.description);
}

export function countryMetadata(lang: Lang, countryId: string = "germany"): Metadata {
  const copy = getCountryCopy(countryId, lang);
  const imageUrl = getCountryOgImage(countryId);

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
