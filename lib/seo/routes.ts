import type { Metadata } from "next";
import {
  SUPPORTED_LANGS,
  ALL_LANGS,
  extraLangsFor,
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
  localizedCountryName,
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
  it: "it_IT",
  es: "es_ES",
  pt: "pt_PT",
  nl: "nl_NL",
  cs: "cs_CZ",
  sk: "sk_SK",
  da: "da_DK",
  sv: "sv_SE",
  fi: "fi_FI",
  el: "el_GR",
  bg: "bg_BG",
};

// Sablon-alapú ország-szintű meta (title, description) generálás —
// kerüli a duplicate content-et: minden ország saját lokalizált szöveget kap.
// (COUNTRY_NAMES + localizedCountryName a lib/seo/slugs.ts-ben — single source,
//  hogy a generate-poi-html.mts is ugyanazt hasznalja.)
function templateCopy(countryId: string, lang: Lang): { title: string; description: string; name: string } {
  const name = localizedCountryName(countryId, lang);
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
    // Kettospontos forma: elkeruli a genitivus-egyeztetest ("a Austria" hibas lenne;
    // a kuratort COUNTRY_COPY-ban marad a helyes genitivus, pl. "a Germaniei").
    return {
      title: `Hartă interactivă: ${name}`,
      description: `Pagini statice de studiu despre regiuni, orașe, natură, istorie și obiective turistice din ${name}.`,
      name,
    };
  }
  if (lang === "it") {
    return {
      title: `Mappa interattiva dell'${name}`,
      description: `Pagine dedicate a regioni, città, natura, storia e luoghi d'interesse in ${name}.`,
      name,
    };
  }
  if (lang === "es") {
    return {
      title: `Mapa interactivo de ${name}`,
      description: `Páginas sobre regiones, ciudades, naturaleza, historia y lugares de interés de ${name}.`,
      name,
    };
  }
  if (lang === "nl") {
    return {
      title: `Interactieve kaart van ${name}`,
      description: `Statische leerpagina's over regio's, steden, natuur, geschiedenis en bezienswaardigheden in ${name}.`,
      name,
    };
  }
  if (lang === "cs") {
    return {
      title: `Interaktivní mapa ${name}`,
      description: `Stránky o regionech, městech, přírodě, historii a památkách v zemi ${name}.`,
      name,
    };
  }
  if (lang === "sk") {
    return {
      title: `Interaktívna mapa krajiny ${name}`,
      description: `Stránky o regiónoch, mestách, prírode, histórii a pamiatkach v krajine ${name}.`,
      name,
    };
  }
  if (lang === "da") {
    return {
      title: `Interaktivt kort over ${name}`,
      description: `Sider om regioner, byer, natur, historie og seværdigheder i ${name}.`,
      name,
    };
  }
  if (lang === "sv") {
    return {
      title: `Interaktiv karta över ${name}`,
      description: `Sidor om regioner, städer, natur, historia och sevärdheter i ${name}.`,
      name,
    };
  }
  if (lang === "fi") {
    return {
      title: `Interaktiivinen ${name}-kartta`,
      description: `Sivuja kohteista, kaupungeista, luonnosta, historiasta ja nähtävyyksistä maassa ${name}.`,
      name,
    };
  }
  if (lang === "el") {
    return {
      title: `Διαδραστικός χάρτης της ${name}`,
      description: `Σελίδες για περιοχές, πόλεις, φύση, ιστορία και αξιοθέατα της ${name}.`,
      name,
    };
  }
  if (lang === "bg") {
    return {
      title: `Интерактивна карта на ${name}`,
      description: `Страници за региони, градове, природа, история и забележителности в ${name}.`,
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
export const COUNTRY_COPY: Record<string, Partial<Record<Lang, { title: string; description: string; name: string }>>> = {
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
  it: {
    home: "Home",
    related: "Luoghi correlati",
    facts: "Informazioni",
    geography: "Dati geografici",
    openMap: "Apri in OpenStreetMap",
    backToMap: "Vedi sulla mappa",
    more: "Scopri di più",
    states: "Regioni",
    cities: "Città",
    nature: "Natura",
    history: "Storia",
    landmarks: "Luoghi d'interesse",
    capital: "Capitale",
  },
  es: {
    home: "Inicio",
    related: "Lugares relacionados",
    facts: "Datos",
    geography: "Datos geográficos",
    openMap: "Abrir en OpenStreetMap",
    backToMap: "Ver en el mapa",
    more: "Más información",
    states: "Regiones",
    cities: "Ciudades",
    nature: "Naturaleza",
    history: "Historia",
    landmarks: "Lugares de interés",
    capital: "Capital",
  },
  pt: {
    home: "Início",
    related: "Locais relacionados",
    facts: "Dados",
    geography: "Dados geográficos",
    openMap: "Abrir no OpenStreetMap",
    backToMap: "Ver no mapa",
    more: "Saber mais",
    states: "Regiões",
    cities: "Cidades",
    nature: "Natureza",
    history: "História",
    landmarks: "Locais de interesse",
    capital: "Capital",
  },
  nl: {
    home: "Startpagina",
    related: "Gerelateerde plaatsen",
    facts: "Feiten",
    geography: "Geografische gegevens",
    openMap: "Openen in OpenStreetMap",
    backToMap: "Op de kaart bekijken",
    more: "Meer informatie",
    states: "Regio's",
    cities: "Steden",
    nature: "Natuur",
    history: "Geschiedenis",
    landmarks: "Bezienswaardigheden",
    capital: "Hoofdstad",
  },
} as const;

export function isLang(value: string): value is Lang {
  return ALL_LANGS.includes(value as Lang);
}

export function truncateDescription(value: string, max = 160) {
  return value.length <= max ? value : `${value.slice(0, max - 1).trimEnd()}…`;
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function getCountryAlternates(countryId: string = "germany") {
  const native: Partial<Record<string, Lang>> = {
    france: "fr", croatia: "hr", italy: "it", spain: "es", portugal: "pt", poland: "pl",
    netherlands: "nl", "czech-republic": "cs",
    slovakia: "sk", denmark: "da", sweden: "sv", finland: "fi", greece: "el", bulgaria: "bg",
  };
  const langs: Lang[] = native[countryId]
    ? [...SUPPORTED_LANGS, native[countryId] as Lang]
    : SUPPORTED_LANGS;
  return Object.fromEntries(langs.map((lang) => [lang, absoluteUrl(buildCountryPath(lang, countryId))]));
}

export function getStateAlternates(stateId: string) {
  const countryId = getCountryId(stateId);
  const native: Partial<Record<string, Lang>> = {
    france: "fr", croatia: "hr", italy: "it", spain: "es", portugal: "pt", poland: "pl",
    netherlands: "nl", "czech-republic": "cs",
    slovakia: "sk", denmark: "da", sweden: "sv", finland: "fi", greece: "el", bulgaria: "bg",
  };
  const langs: Lang[] = native[countryId]
    ? [...SUPPORTED_LANGS, native[countryId] as Lang]
    : SUPPORTED_LANGS;
  return Object.fromEntries(langs.map((lang) => [lang, absoluteUrl(buildStatePath(lang, stateId))]));
}

export function getPoiAlternates(poi: POI) {
  const langs = [...SUPPORTED_LANGS, ...extraLangsFor(poi)];
  return Object.fromEntries(langs.map((lang) => [lang, absoluteUrl(buildPoiPath(lang, poi))]));
}

/**
 * SEO content quality check. Used by both:
 *   - sitemap.ts: skip empty POIs so Google doesn't waste crawl budget on Soft 404s
 *   - POI page metadata: emit robots:noindex for empty POIs
 *
 * Threshold: at least one description >= 200 chars AND at least 2 facts in any of 4 langs.
 */
export function hasIndexableContent(poi: POI): boolean {
  // Prefer the precomputed flag from the lite index (build-seo-index.mts).
  // Falls back to inspecting heavy fields when called on a full POI loaded
  // from per-country JSON (POI detail render path).
  const lite = poi as POI & { hasIndexable?: boolean };
  if (typeof lite.hasIndexable === "boolean") return lite.hasIndexable;

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

// Van-e a state-oldalnak legalabb 1 indexalhato POI-ja. Ha nincs (pl. RO
// "traditional region" overlay-oldalak: 0 POI-kartya), a state-oldal thin →
// noindex + kihagyas a sitemapbol (lasd app/sitemap.ts + [state]/page.tsx).
export function stateHasIndexablePois(stateId: string): boolean {
  return getPoisForState(stateId).some((poi) => hasIndexableContent(poi));
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

  let region = findRegionByStateSlug(lang, state, country);
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

// Type-aware, keyword-forward title generation.
// Format: "{Name} ({state}): {kw1}, {kw2}, {kw3} | Plizio"  — up to 70 chars.
// Keywords are type-specific and ordered by search volume (descending).
// Drops trailing keywords or state until fit.

const TYPE_KEYWORDS: Record<string, Partial<Record<Lang, string[]>>> = {
  city: {
    de: ["Sehenswürdigkeiten", "Karte", "Wetter", "Nachrichten", "Geschichte"],
    hu: ["Látnivalók", "Térkép", "Időjárás", "Hírek", "Történelem"],
    ro: ["Obiective turistice", "Hartă", "Vremea", "Știri", "Istorie"],
    en: ["Sights", "Map", "Weather", "News", "History"],
    pt: ["Pontos turísticos", "Mapa", "Tempo", "Notícias", "História"],
  },
  castle: {
    de: ["Burg", "Geschichte", "Karte", "Fotos", "Wetter"],
    hu: ["Vár", "Történelem", "Térkép", "Fotók", "Időjárás"],
    ro: ["Castel", "Istorie", "Hartă", "Fotografii", "Vremea"],
    en: ["Castle", "History", "Map", "Photos", "Weather"],
    pt: ["Castelo", "História", "Mapa", "Fotos", "Tempo"],
  },
  mountain: {
    de: ["Wandern", "Karte", "Wetter", "Fotos", "Höhe"],
    hu: ["Túrázás", "Térkép", "Időjárás", "Fotók", "Magasság"],
    ro: ["Drumeții", "Hartă", "Vremea", "Fotografii", "Altitudine"],
    en: ["Hiking", "Map", "Weather", "Photos", "Elevation"],
    pt: ["Caminhadas", "Mapa", "Tempo", "Fotos", "Altitude"],
  },
  lake: {
    de: ["Strände", "Karte", "Wetter", "Sehenswürdigkeiten", "Fotos"],
    hu: ["Strandok", "Térkép", "Időjárás", "Látnivalók", "Fotók"],
    ro: ["Plaje", "Hartă", "Vremea", "Obiective", "Fotografii"],
    en: ["Beaches", "Map", "Weather", "Sights", "Photos"],
    pt: ["Praias", "Mapa", "Tempo", "Pontos turísticos", "Fotos"],
  },
  river: {
    de: ["Karte", "Verlauf", "Sehenswürdigkeiten", "Wetter", "Fotos"],
    hu: ["Térkép", "Folyamatos", "Látnivalók", "Időjárás", "Fotók"],
    ro: ["Hartă", "Curs", "Obiective", "Vremea", "Fotografii"],
    en: ["Map", "Course", "Sights", "Weather", "Photos"],
    pt: ["Mapa", "Percurso", "Pontos turísticos", "Tempo", "Fotos"],
  },
  historical: {
    de: ["Geschichte", "Karte", "Sehenswürdigkeiten", "Fotos", "Besuch"],
    hu: ["Történelem", "Térkép", "Látnivalók", "Fotók", "Látogatás"],
    ro: ["Istorie", "Hartă", "Obiective", "Fotografii", "Vizită"],
    en: ["History", "Map", "Sights", "Photos", "Visit"],
    pt: ["História", "Mapa", "Pontos turísticos", "Fotos", "Visita"],
  },
  landmark: {
    de: ["Sehenswürdigkeiten", "Karte", "Fotos", "Geschichte", "Wetter"],
    hu: ["Látnivalók", "Térkép", "Fotók", "Történelem", "Időjárás"],
    ro: ["Obiective", "Hartă", "Fotografii", "Istorie", "Vremea"],
    en: ["Sights", "Map", "Photos", "History", "Weather"],
    pt: ["Pontos turísticos", "Mapa", "Fotos", "História", "Tempo"],
  },
  nature: {
    de: ["Karte", "Wetter", "Wandern", "Fotos", "Natur"],
    hu: ["Térkép", "Időjárás", "Túrázás", "Fotók", "Természet"],
    ro: ["Hartă", "Vremea", "Drumeții", "Fotografii", "Natură"],
    en: ["Map", "Weather", "Hiking", "Photos", "Nature"],
    pt: ["Mapa", "Tempo", "Caminhadas", "Fotos", "Natureza"],
  },
};

// Type aliases — POI.type → bucket key
const TYPE_ALIAS: Record<string, string> = {
  "state-capital": "city",
  town: "city",
  village: "city",
  fort: "castle",
  peak: "mountain",
  hill: "mountain",
  forest: "nature",
  island: "nature",
  sea: "nature",
  bay: "nature",
};

export function poiTitle(poi: POI, lang: Lang) {
  const state = getStateForPoi(poi);
  const name = localizedValue(poi.name, lang) || poi.id;
  const stateName = localizedStateName(state?.id ?? poi.parent ?? "", lang);
  const bucket = TYPE_ALIAS[poi.type] || (TYPE_KEYWORDS[poi.type] ? poi.type : "landmark");
  const keywords = TYPE_KEYWORDS[bucket]?.[lang] || TYPE_KEYWORDS.landmark[lang] || TYPE_KEYWORDS.landmark.en;
  const SUFFIX = " | Plizio";
  const MAX = 70;

  // Skip state if same as name (e.g. Berlin/Berlin city-state) to avoid "Berlin (Berlin)".
  const showState = stateName && stateName.toLowerCase() !== name.toLowerCase();
  const tryBuild = (withState: boolean, kwCount: number) => {
    const kws = keywords.slice(0, kwCount).join(", ");
    if (withState && showState) return `${name} (${stateName}): ${kws}${SUFFIX}`;
    return `${name}: ${kws}${SUFFIX}`;
  };

  for (const kwCount of [4, 3]) {
    const t = tryBuild(true, kwCount);
    if (t.length <= MAX) return t;
  }
  for (const kwCount of [4, 3, 2]) {
    const t = tryBuild(false, kwCount);
    if (t.length <= MAX) return t;
  }
  // Ultra-short fallback
  return `${name}: ${keywords[0]}${SUFFIX}`;
}

// Enhanced description: short desc + sights-count + facts-count signals to
// help Google rank the page on "sehenswürdigkeiten / látnivaló" queries.
export function poiDescription(poi: POI, lang: Lang) {
  const base = truncateDescription(localizedValue(poi.description, lang));
  const sightsArr = (poi as unknown as { sights?: Record<string, unknown[]> }).sights?.[lang];
  const sightsCount = Array.isArray(sightsArr) ? sightsArr.length : 0;
  if (sightsCount > 0) {
    const suffix: Partial<Record<Lang, string>> = {
      de: ` ${sightsCount} Sehenswürdigkeiten in der Übersicht.`,
      hu: ` ${sightsCount} látnivaló egy helyen.`,
      ro: ` ${sightsCount} obiective turistice listate.`,
      en: ` ${sightsCount} sights to discover.`,
      fr: ` ${sightsCount} sites à découvrir.`,
      tr: ` ${sightsCount} görülecek yer.`,
      hr: ` ${sightsCount} znamenitosti na jednom mjestu.`,
      it: ` ${sightsCount} luoghi da scoprire.`,
      es: ` ${sightsCount} lugares que descubrir.`,
      pt: ` ${sightsCount} locais a descobrir.`,
      nl: ` ${sightsCount} bezienswaardigheden om te ontdekken.`,
    };
    const withSights = base + suffix[lang];
    if (withSights.length <= 160) return withSights;
  }
  return base;
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
