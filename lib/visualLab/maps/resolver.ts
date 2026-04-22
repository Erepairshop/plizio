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
import { slovakiaMap, slovakiaViewBox, projectCoordsSK } from "./slovakia.svg";
import { slovakiaAllPoi } from "../data/slovakiaPoi";
import { sloveniaMap, sloveniaViewBox, projectCoordsSI } from "./slovenia.svg";
import { sloveniaAllPoi } from "../data/sloveniaPoi";
import { croatiaMap, croatiaViewBox, projectCoordsHR } from "./croatia.svg";
import { croatiaAllPoi } from "../data/croatiaPoi";
import { bulgariaMap, bulgariaViewBox, projectCoordsBG } from "./bulgaria.svg";
import { bulgariaAllPoi } from "../data/bulgariaPoi";
import { luxembourgMap, luxembourgViewBox, projectCoordsLU } from "./luxembourg.svg";
import { luxembourgAllPoi } from "../data/luxembourgPoi";
import { lithuaniaMap, lithuaniaViewBox, projectCoordsLT } from "./lithuania.svg";
import { lithuaniaAllPoi } from "../data/lithuaniaPoi";
import { latviaMap, latviaViewBox, projectCoordsLV } from "./latvia.svg";
import { latviaAllPoi } from "../data/latviaPoi";
import { estoniaMap, estoniaViewBox, projectCoordsEE } from "./estonia.svg";
import { estoniaAllPoi } from "../data/estoniaPoi";
import { icelandMap, icelandViewBox, projectCoordsIS } from "./iceland.svg";
import { icelandPois } from "../data/icelandPoi";
import { maltaMap, maltaViewBox, projectCoordsMT } from "./malta.svg";
import { maltaPoi } from "../data/maltaPoi";
import { cyprusMap, cyprusViewBox, projectCoordsCY } from "./cyprus.svg";
import { cyprusAllPoi } from "../data/cyprusPoi";
import { albaniaMap, albaniaViewBox, projectCoordsAL } from "./albania.svg";
import { albaniaAllPoi } from "../data/albaniaPoi";
import { serbiaMap, serbiaViewBox, projectCoordsRS } from "./serbia.svg";
import { serbiaAllPoi } from "../data/serbiaPoi";
import { bosniaMap, bosniaViewBox, projectCoordsBA } from "./bosnia.svg";
import { bosniaAllPoi } from "../data/bosniaPoi";
import { montenegroMap, montenegroViewBox, projectCoordsME } from "./montenegro.svg";
import { montenegroAllPoi } from "../data/montenegroPoi";
import { northmacedoniaMap, northmacedoniaViewBox, projectCoordsMK } from "./northmacedonia.svg";
import { northmacedoniaPois } from "../data/northmacedoniaPoi";
import { kosovoMap, kosovoViewBox, projectCoordsXK } from "./kosovo.svg";
import { kosovoAllPoi } from "../data/kosovoPoi";
import type { POI } from "../data/poi";

export type Lang = "de" | "hu" | "ro" | "en" | "fr" | "it" | "es" | "pl" | "gb" | "nl" | "at" | "be" | "pt" | "gr" | "ie" | "dk" | "se" | "no" | "fi" | "ch" | "cz" | "sk" | "si" | "hr" | "bg" | "lu" | "lt" | "lv" | "ee" | "is" | "mt" | "cy" | "al" | "ba" | "me" | "mk" | "xk";

// Közös reprezentáció: BundeslandPath strukturálisan megfelel a JudetPath-nak is
export interface CountryMapData {
  countryId: string;        // "DE" | "RO" | "HU" | "FR" | "IT" | "ES" | "PL" | "GB" | "NL" | "AT" | "BE" | "PT" | "GR" | "IE" | "DK" | "SE" | "NO" | "FI" | "CH" | "CZ" | "SK" | "SI" | "HR" | "BG" | "LU" | "LT" | "IS" | "MT" | "CY" | "AL" | "BA" | "ME" | "MK"
  map: BundeslandPath[];    // strukturálisan kompatibilis JudetPath-tal
  viewBox: string;
  projectCoords: (lon: number, lat: number) => [number, number];
  pois: POI[];
  subregions: Record<string, any> | any[]; // structurally compatible with bundeslandSubregions
}

export function getCountryMap(lang: Lang): CountryMapData {
  switch (lang) {
    case "xk":
      return {
        countryId: "XK",
        map: kosovoMap as unknown as BundeslandPath[],
        viewBox: kosovoViewBox,
        projectCoords: projectCoordsXK,
        pois: kosovoAllPoi,
        subregions: {},
      };
    case "mk":
      return {
        countryId: "MK",
        map: northmacedoniaMap as unknown as BundeslandPath[],
        viewBox: northmacedoniaViewBox,
        projectCoords: projectCoordsMK,
        pois: northmacedoniaPois,
        subregions: {},
      };
    case "me":
      return {
        countryId: "ME",
        map: montenegroMap as unknown as BundeslandPath[],
        viewBox: montenegroViewBox,
        projectCoords: projectCoordsME,
        pois: montenegroAllPoi,
        subregions: {},
      };
    case "ba":
      return {
        countryId: "BA",
        map: bosniaMap as unknown as BundeslandPath[],
        viewBox: bosniaViewBox,
        projectCoords: projectCoordsBA,
        pois: bosniaAllPoi,
        subregions: {},
      };
    case "al":
      return {
        countryId: "AL",
        map: albaniaMap as unknown as BundeslandPath[],
        viewBox: albaniaViewBox,
        projectCoords: projectCoordsAL,
        pois: albaniaAllPoi,
        subregions: {},
      };
    case "rs":
      return {
        countryId: "RS",
        map: serbiaMap as unknown as BundeslandPath[],
        viewBox: serbiaViewBox,
        projectCoords: projectCoordsRS,
        pois: serbiaAllPoi,
        subregions: {},
      };
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
    case "sk":
      return {
        countryId: "SK",
        map: slovakiaMap as unknown as BundeslandPath[],
        viewBox: slovakiaViewBox,
        projectCoords: projectCoordsSK,
        pois: slovakiaAllPoi,
        subregions: {},
      };
    case "si":
      return {
        countryId: "SI",
        map: sloveniaMap as unknown as BundeslandPath[],
        viewBox: sloveniaViewBox,
        projectCoords: projectCoordsSI,
        pois: sloveniaAllPoi,
        subregions: {},
      };
    case "hr":
      return {
        countryId: "HR",
        map: croatiaMap as unknown as BundeslandPath[],
        viewBox: croatiaViewBox,
        projectCoords: projectCoordsHR,
        pois: croatiaAllPoi,
        subregions: {},
      };
    case "bg":
      return {
        countryId: "BG",
        map: bulgariaMap as unknown as BundeslandPath[],
        viewBox: bulgariaViewBox,
        projectCoords: projectCoordsBG,
        pois: bulgariaAllPoi,
        subregions: {},
      };
    case "lu":
      return {
        countryId: "LU",
        map: luxembourgMap as unknown as BundeslandPath[],
        viewBox: luxembourgViewBox,
        projectCoords: projectCoordsLU,
        pois: luxembourgAllPoi,
        subregions: {},
      };
    case "lt":
      return {
        countryId: "LT",
        map: lithuaniaMap as unknown as BundeslandPath[],
        viewBox: lithuaniaViewBox,
        projectCoords: projectCoordsLT,
        pois: lithuaniaAllPoi,
        subregions: {},
      };
    case "lv":
      return {
        countryId: "LV",
        map: latviaMap as unknown as BundeslandPath[],
        viewBox: latviaViewBox,
        projectCoords: projectCoordsLV,
        pois: latviaAllPoi,
        subregions: {},
      };
    case "ee":
      return {
        countryId: "EE",
        map: estoniaMap as unknown as BundeslandPath[],
        viewBox: estoniaViewBox,
        projectCoords: projectCoordsEE,
        pois: estoniaAllPoi,
        subregions: {},
      };
    case "is":
      return {
        countryId: "IS",
        map: icelandMap as unknown as BundeslandPath[],
        viewBox: icelandViewBox,
        projectCoords: projectCoordsIS,
        pois: icelandPois,
        subregions: {},
      };
    case "mt":
      return {
        countryId: "MT",
        map: maltaMap as unknown as BundeslandPath[],
        viewBox: maltaViewBox,
        projectCoords: projectCoordsMT,
        pois: maltaPoi,
        subregions: {},
      };
    case "cy":
      return {
        countryId: "CY",
        map: cyprusMap as unknown as BundeslandPath[],
        viewBox: cyprusViewBox,
        projectCoords: projectCoordsCY,
        pois: cyprusAllPoi,
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

