// Country map resolver — nyelv alapján választ térképet és POI-kat
// lang: "de" → Deutschland, "ro" → Romania, "hu" → Magyarország (stub), "en" → Deutschland (fallback)

import { deutschlandMap, deutschlandViewBox, projectCoords as projectCoordsDE, type BundeslandPath } from "./deutschland.svg";
import { romaniaMap, romaniaViewBox, projectCoordsRO } from "./romania.svg";
import { pois as deutschlandPois } from "../data/poi";
import { romaniaAllPois } from "../data/romaniaPoi";
import type { POI } from "../data/poi";

export type Lang = "de" | "hu" | "ro" | "en";

// Közös reprezentáció: BundeslandPath strukturálisan megfelel a JudetPath-nak is
export interface CountryMapData {
  countryId: string;        // "DE" | "RO" | "HU"
  map: BundeslandPath[];    // strukturálisan kompatibilis JudetPath-tal
  viewBox: string;
  projectCoords: (lon: number, lat: number) => [number, number];
  pois: POI[];
}

export function getCountryMap(lang: Lang): CountryMapData {
  switch (lang) {
    case "ro":
      return {
        countryId: "RO",
        map: romaniaMap as BundeslandPath[],
        viewBox: romaniaViewBox,
        projectCoords: projectCoordsRO,
        pois: romaniaAllPois,
      };
    case "de":
    case "hu":
    case "en":
    default:
      return {
        countryId: "DE",
        map: deutschlandMap,
        viewBox: deutschlandViewBox,
        projectCoords: projectCoordsDE,
        pois: deutschlandPois,
      };
  }
}
