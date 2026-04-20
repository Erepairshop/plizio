// Country map resolver — nyelv alapján választ térképet és POI-kat
// lang: "de" → Deutschland, "ro" → Romania, "hu" → Magyarország (stub), "en" → Deutschland (fallback)

import { deutschlandMap, deutschlandViewBox, projectCoords as projectCoordsDE, type BundeslandPath } from "./deutschland.svg";
import { romaniaMap, romaniaViewBox, projectCoordsRO } from "./romania.svg";
import { magyarorszagMap, magyarorszagViewBox, projectCoordsHU } from "./magyarorszag.svg";
import { franceMap, franceViewBox, projectCoordsFR } from "./france.svg";
import { italyMap, italyViewBox, projectCoordsIT } from "./italy.svg";
import { polandMap, polandViewBox, projectCoordsPL } from "./poland.svg";
import { bundeslandSubregions } from "./bundeslandSubregions";
import { romaniaJudetSubregions } from "./romaniaJudetSubregions";
import { hungarySubregions } from "./hungarySubregions";
import { pois as deutschlandPois } from "../data/poi";
import { romaniaAllPois } from "../data/romaniaPoi"; // Tartalmazza: romaniaCulture, romaniaTraditions, romaniaWildlife, romaniaFolk
import { hungaryAllPoi } from "../data/hungaryPoi";
import { franceAllPoi } from "../data/francePoi";
import { italyAllPoi } from "../data/italyPoi";
import { polandAllPoi } from "../data/polandPoi";
import { spainMap, spainViewBox, projectCoordsES } from "./spain.svg";
import { spainAllPoi } from "../data/spainPoi";
import { unitedkingdomMap, unitedkingdomViewBox, projectCoordsUK } from "./unitedkingdom.svg";
import { unitedkingdomAllPoi } from "../data/unitedkingdomPoi";
import { netherlandsMap, netherlandsViewBox, projectCoordsNL } from "./netherlands.svg";
import { netherlandsAllPoi } from "../data/netherlandsPoi";
import { austriaMap, austriaViewBox, projectCoordsAT } from "./austria.svg";
import { austriaAllPoi } from "../data/austriaPoi";
import { belgiumMap, belgiumViewBox, projectCoordsBE } from "./belgium.svg";
import { belgiumAllPoi } from "../data/belgiumPoi";
import { portugalMap, portugalViewBox, projectCoordsPT } from "./portugal.svg";
import { portugalAllPoi } from "../data/portugalPoi";
import { greeceMap, greeceViewBox, projectCoordsGR } from "./greece.svg";
import { greeceAllPoi } from "../data/greecePoi";
import { irelandMap, irelandViewBox, projectCoordsIE } from "./ireland.svg";
import { irelandAllPoi } from "../data/irelandPoi";
import { denmarkMap, denmarkViewBox, projectCoordsDK } from "./denmark.svg";
import { denmarkAllPoi } from "../data/denmarkPoi";
import { swedenMap, swedenViewBox, projectCoordsSE } from "./sweden.svg";
import { swedenAllPoi } from "../data/swedenPoi";
import { norwayMap, norwayViewBox, projectCoordsNO } from "./norway.svg";
import { norwayAllPoi } from "../data/norwayPoi";
import { finlandMap, finlandViewBox, projectCoordsFI } from "./finland.svg";
import { finlandAllPoi } from "../data/finlandPoi";
import { switzerlandMap, switzerlandViewBox, projectCoordsCH } from "./switzerland.svg";
import { switzerlandAllPoi } from "../data/switzerlandPoi";
import { czechRepublicMap, czechRepublicViewBox, projectCoordsCZ } from "./czechRepublic.svg";
import { czechRepublicAllPoi } from "../data/czechRepublicPoi";
import type { POI } from "../data/poi";

export type Lang = "de" | "hu" | "ro" | "en" | "fr" | "it" | "es" | "pl" | "gb" | "nl" | "at" | "be" | "pt" | "gr" | "ie" | "dk" | "se" | "no" | "fi" | "ch" | "cz";

// Közös reprezentáció: BundeslandPath strukturálisan megfelel a JudetPath-nak is
export interface CountryMapData {
  countryId: string;        // "DE" | "RO" | "HU" | "FR" | "IT" | "ES" | "PL" | "GB" | "NL" | "AT" | "BE" | "PT" | "GR" | "IE" | "DK" | "SE" | "NO" | "FI" | "CH" | "CZ"
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
    case "pl":
      return {
        countryId: "PL",
        map: polandMap as unknown as BundeslandPath[],
        viewBox: polandViewBox,
        projectCoords: projectCoordsPL,
        pois: polandAllPoi,
        subregions: [],
      };
    case "es":
      return {
        countryId: "ES",
        map: spainMap as unknown as BundeslandPath[],
        viewBox: spainViewBox,
        projectCoords: projectCoordsES,
        pois: spainAllPoi,
        subregions: {}, // No specific subregions map for now
      };
    case "fr":
      return {
        countryId: "FR",
        map: franceMap as unknown as BundeslandPath[],
        viewBox: franceViewBox,
        projectCoords: projectCoordsFR,
        pois: franceAllPoi,
        subregions: {}, // No specific subregions map for now
      };
    case "it":
      return {
        countryId: "IT",
        map: italyMap as unknown as BundeslandPath[],
        viewBox: italyViewBox,
        projectCoords: projectCoordsIT,
        pois: italyAllPoi,
        subregions: [],
      };
    case "en":
    case "gb":
      return {
        countryId: "GB",
        map: unitedkingdomMap as unknown as BundeslandPath[],
        viewBox: unitedkingdomViewBox,
        projectCoords: projectCoordsUK,
        pois: unitedkingdomAllPoi,
        subregions: {}, // No specific subregions map for now
      };
    case "nl":
      return {
        countryId: "NL",
        map: netherlandsMap as unknown as BundeslandPath[],
        viewBox: netherlandsViewBox,
        projectCoords: projectCoordsNL,
        pois: netherlandsAllPoi,
        subregions: {}, // No specific subregions map for now
      };
    case "at":
      return {
        countryId: "AT",
        map: austriaMap as unknown as BundeslandPath[],
        viewBox: austriaViewBox,
        projectCoords: projectCoordsAT,
        pois: austriaAllPoi,
        subregions: {}, // No specific subregions map for now
      };
    case "be":
      return {
        countryId: "BE",
        map: belgiumMap as unknown as BundeslandPath[],
        viewBox: belgiumViewBox,
        projectCoords: projectCoordsBE,
        pois: belgiumAllPoi,
        subregions: {},
      };
    case "pt":
      return {
        countryId: "PT",
        map: portugalMap as unknown as BundeslandPath[],
        viewBox: portugalViewBox,
        projectCoords: projectCoordsPT,
        pois: portugalAllPoi,
        subregions: {},
      };
    case "gr":
      return {
        countryId: "GR",
        map: greeceMap as unknown as BundeslandPath[],
        viewBox: greeceViewBox,
        projectCoords: projectCoordsGR,
        pois: greeceAllPoi,
        subregions: {},
      };
    case "ie":
      return {
        countryId: "IE",
        map: irelandMap as unknown as BundeslandPath[],
        viewBox: irelandViewBox,
        projectCoords: projectCoordsIE,
        pois: irelandAllPoi,
        subregions: {},
      };
    case "dk":
      return {
        countryId: "DK",
        map: denmarkMap as unknown as BundeslandPath[],
        viewBox: denmarkViewBox,
        projectCoords: projectCoordsDK,
        pois: denmarkAllPoi,
        subregions: {},
      };
    case "se":
      return {
        countryId: "SE",
        map: swedenMap as unknown as BundeslandPath[],
        viewBox: swedenViewBox,
        projectCoords: projectCoordsSE,
        pois: swedenAllPoi,
        subregions: {},
      };
    case "no":
      return {
        countryId: "NO",
        map: norwayMap as unknown as BundeslandPath[],
        viewBox: norwayViewBox,
        projectCoords: projectCoordsNO,
        pois: norwayAllPoi,
        subregions: {},
      };
    case "fi":
      return {
        countryId: "FI",
        map: finlandMap as unknown as BundeslandPath[],
        viewBox: finlandViewBox,
        projectCoords: projectCoordsFI,
        pois: finlandAllPoi,
        subregions: {},
      };
    case "ch":
      return {
        countryId: "CH",
        map: switzerlandMap as unknown as BundeslandPath[],
        viewBox: switzerlandViewBox,
        projectCoords: projectCoordsCH,
        pois: switzerlandAllPoi,
        subregions: {},
      };
    case "cz":
      return {
        countryId: "CZ",
        map: czechRepublicMap as unknown as BundeslandPath[],
        viewBox: czechRepublicViewBox,
        projectCoords: projectCoordsCZ,
        pois: czechRepublicAllPoi,
        subregions: {},
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

