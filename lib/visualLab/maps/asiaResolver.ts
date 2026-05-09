// Azsia orszag resolver — ISO-2 ↔ slug mapping + per-country resolver.
// MEGJEGYZES: A legtobb azsiai per-country `<slug>.svg.ts` fajl jelenleg MEG NEM letrehozva.
// Ahol megvan (cyprus), ott teljes CountryMapData visszaadas, egyebkent null
// (a hivo InteractiveMap a continent / lang-alapu terkepre fog visszaesni).
import type { BundeslandPath } from "./deutschland.svg";
import type { CountryMapData } from "./resolver";
import { cyprusMap, cyprusViewBox, projectCoordsCY } from "./cyprus.svg";

export const ASIA_ISO_TO_SLUG: Record<string, string> = {
  CN: "china",
  JP: "japan",
  KR: "southkorea",
  KP: "northkorea",
  MN: "mongolia",
  VN: "vietnam",
  LA: "laos",
  KH: "cambodia",
  TH: "thailand",
  MM: "myanmar",
  MY: "malaysia",
  SG: "singapore",
  ID: "indonesia",
  PH: "philippines",
  BN: "brunei",
  IN: "india",
  PK: "pakistan",
  BD: "bangladesh",
  LK: "srilanka",
  NP: "nepal",
  BT: "bhutan",
  MV: "maldives",
  AF: "afghanistan",
  IR: "iran",
  IQ: "iraq",
  SY: "syria",
  LB: "lebanon",
  JO: "jordan",
  IL: "israel",
  PS: "palestine",
  SA: "saudiarabia",
  YE: "yemen",
  OM: "oman",
  AE: "uae",
  QA: "qatar",
  BH: "bahrain",
  KW: "kuwait",
  TR: "turkey",
  CY: "cyprus",
  GE: "georgia",
  AM: "armenia",
  AZ: "azerbaijan",
  KZ: "kazakhstan",
  UZ: "uzbekistan",
  TM: "turkmenistan",
  KG: "kyrgyzstan",
  TJ: "tajikistan",
  TW: "taiwan",
  TL: "timorleste",
};

export const ASIA_SLUG_TO_ISO: Record<string, string> = Object.fromEntries(
  Object.entries(ASIA_ISO_TO_SLUG).map(([iso, slug]) => [slug, iso]),
);

/**
 * getAsiaCountryMap — Per-country azsiai terkep visszaadasa, vagy null.
 * Ahol meg nincs `<slug>.svg.ts`, null -> a hivo continent / lang-alapu fallback-re esik.
 */
export function getAsiaCountryMap(countryId: string): CountryMapData | null {
  switch (countryId) {
    case "cyprus":
      return {
        countryId: "CY",
        map: cyprusMap as unknown as BundeslandPath[],
        viewBox: cyprusViewBox,
        projectCoords: projectCoordsCY,
        pois: [],
        subregions: [],
      };
    default:
      return null;
  }
}
