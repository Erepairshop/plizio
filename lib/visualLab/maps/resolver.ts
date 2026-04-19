// Country map resolver — nyelv alapján választ térképet és POI-kat
// lang: "de" → Deutschland, "ro" → Romania, "hu" → Magyarország (stub), "en" → Deutschland (fallback)

import { deutschlandMap, deutschlandViewBox, projectCoords as projectCoordsDE, type BundeslandPath } from "./deutschland.svg";
import { romaniaMap, romaniaViewBox, projectCoordsRO } from "./romania.svg";
import { magyarorszagMap, magyarorszagViewBox, projectCoordsHU } from "./magyarorszag.svg";
import { franceMap, franceViewBox, projectCoordsFR } from "./france.svg";
import { bundeslandSubregions } from "./bundeslandSubregions";
import { romaniaJudetSubregions } from "./romaniaJudetSubregions";
import { hungarySubregions } from "./hungarySubregions";
import { pois as deutschlandPois } from "../data/poi";
import { romaniaAllPois } from "../data/romaniaPoi"; // Tartalmazza: romaniaCulture, romaniaTraditions, romaniaWildlife, romaniaFolk
import { hungaryAllPoi } from "../data/hungaryPoi";
import { franceAllPoi } from "../data/francePoi";
import type { POI } from "../data/poi";

export type Lang = "de" | "hu" | "ro" | "en" | "fr";

// Közös reprezentáció: BundeslandPath strukturálisan megfelel a JudetPath-nak is
export interface CountryMapData {
  countryId: string;        // "DE" | "RO" | "HU" | "FR"
  map: BundeslandPath[];    // strukturálisan kompatibilis JudetPath-tal
  viewBox: string;
  projectCoords: (lon: number, lat: number) => [number, number];
  pois: POI[];
  subregions: Record<string, any> | any[]; // structurally compatible with bundeslandSubregions
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
        subregions: romaniaJudetSubregions,
      };
    case "hu":
      return {
        countryId: "HU",
        map: magyarorszagMap as unknown as BundeslandPath[],
        viewBox: magyarorszagViewBox,
        projectCoords: projectCoordsHU,
        pois: hungaryAllPoi,
        subregions: hungarySubregions,
      };
    case "fr":
    case "en": // Oportunistic mapping of en to FR based on prompt request
      return {
        countryId: "FR",
        map: franceMap as unknown as BundeslandPath[],
        viewBox: franceViewBox,
        projectCoords: projectCoordsFR,
        pois: franceAllPoi,
        subregions: {}, // No specific subregions map for now
      };
    case "de":
    default:
      return {
        countryId: "DE",
        map: deutschlandMap,
        viewBox: deutschlandViewBox,
        projectCoords: projectCoordsDE,
        pois: deutschlandPois,
        subregions: bundeslandSubregions,
      };
  }
}
