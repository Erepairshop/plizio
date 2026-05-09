// Ázsia ország resolver — ISO-2 ↔ slug mapping.
// MEGJEGYZES: A per-country `<slug>.svg.ts` fájlok jelenleg MÉG NEM létrehozva.
// Amint elkészültek, ide kerül egy `getAsiaCountryMap(slug)` függvény,
// hasonló struktúrában mint az `africaResolver.ts` (CountryMapData visszaadás).
import type { CountryMapData } from "./resolver";

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
 * getAsiaCountryMap — Stub. A per-country svg.ts fájlok hiányában jelenleg `null`.
 * Külön sonnet feladat lesz a country mappa-fájlok generálása + ennek a kibővítése
 * az `africaResolver.getAfricaCountryMap` mintájára.
 */
export function getAsiaCountryMap(_countryId: string): CountryMapData | null {
  return null;
}
