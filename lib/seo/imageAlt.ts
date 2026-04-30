import type { POI } from "@/lib/visualLab/data/poi";

type Lang = "de" | "hu" | "ro" | "en";

function localizedValue(value: { de: string; hu: string; ro: string; en: string } | undefined, lang: Lang) {
  return value?.[lang] || value?.de || "";
}

const TYPE_LABEL: Record<string, Record<Lang, string>> = {
  "state-capital": { de: "Hauptstadt", hu: "főváros", ro: "capitală", en: "capital city" },
  city:            { de: "Stadt",      hu: "város",    ro: "oraș",      en: "city" },
  mountain:        { de: "Berg",       hu: "hegy",     ro: "munte",     en: "mountain" },
  river:           { de: "Fluss",      hu: "folyó",    ro: "râu",       en: "river" },
  lake:            { de: "See",        hu: "tó",       ro: "lac",       en: "lake" },
  sea:             { de: "Meer",       hu: "tenger",   ro: "mare",      en: "sea" },
  island:          { de: "Insel",      hu: "sziget",   ro: "insulă",    en: "island" },
  forest:          { de: "Wald",       hu: "erdő",     ro: "pădure",    en: "forest" },
  historical:      { de: "historischer Ort",     hu: "történelmi hely", ro: "loc istoric",   en: "historical site" },
  landmark:        { de: "Sehenswürdigkeit",     hu: "látnivaló",       ro: "obiectiv turistic", en: "landmark" },
  "animal-habitat":{ de: "Tierlebensraum",       hu: "állatélőhely",    ro: "habitat animal",    en: "animal habitat" },
  agriculture:     { de: "Landwirtschaftsgebiet", hu: "mezőgazdasági terület", ro: "zonă agricolă", en: "agricultural area" },
  "kid-landmark":  { de: "Kinderattraktion",     hu: "gyerekbarát látnivaló",  ro: "atracție pentru copii", en: "kid-friendly attraction" },
  industry:        { de: "Industriezentrum",     hu: "iparterület",     ro: "zonă industrială",   en: "industrial area" },
  port:            { de: "Hafen",                hu: "kikötő",          ro: "port",               en: "port" },
};

/**
 * Generates a rich, SEO-friendly alt-tag for a POI image.
 * Format: "{POI name} – {type}{, in country/region}. {first ~60 chars of description}"
 */
export function poiImageAlt(poi: POI, lang: Lang, regionName?: string, countryName?: string): string {
  const name = localizedValue(poi.name, lang) || poi.id;
  const typeLabel = poi.type && TYPE_LABEL[poi.type]?.[lang];
  const desc = localizedValue(poi.description, lang);

  let base = name;
  if (typeLabel) base += ` – ${typeLabel}`;

  if (regionName && countryName) base += lang === "en" ? ` in ${regionName}, ${countryName}` : lang === "de" ? ` in ${regionName}, ${countryName}` : `, ${regionName}, ${countryName}`;
  else if (countryName) base += lang === "en" ? ` in ${countryName}` : lang === "de" ? ` in ${countryName}` : `, ${countryName}`;

  if (desc) {
    const short = desc.length > 80 ? desc.slice(0, 77).trim() + "…" : desc;
    base += `. ${short}`;
  }

  // Cap at ~160 chars (Google truncates longer)
  if (base.length > 160) base = base.slice(0, 157).trim() + "…";
  return base;
}
