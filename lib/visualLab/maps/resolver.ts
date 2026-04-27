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
import { polandSubregions } from "./polandSubregions";
import { austriaSubregions } from "./austriaSubregions";
import { spainSubregions } from "./spainSubregions";
import { franceSubregions } from "./franceSubregions";
import { italySubregions } from "./italySubregions";
import { pois as deutschlandPoisBase } from "../data/poi";
import { poiExtraDe1 } from "../data/poiExtraDe1";
import { poiExtraDe2 } from "../data/poiExtraDe2";
import { poiExtraDe3a } from "../data/poiExtraDe3a";
import { poiExtraDe3b } from "../data/poiExtraDe3b";
import { poiExtraDe4a } from "../data/poiExtraDe4a";
import { poiExtraDe4b } from "../data/poiExtraDe4b";
import { poiExtraDeCities } from "../data/poiExtraDeCities";
import { poiExtraDeLebenWirtschaft } from "../data/poiExtraDeLebenWirtschaft";

const deutschlandPois = [
  ...deutschlandPoisBase,
  ...poiExtraDeCities,
  ...poiExtraDe1,
  ...poiExtraDe2,
  ...poiExtraDe3a,
  ...poiExtraDe3b,
  ...poiExtraDe4a,
  ...poiExtraDe4b,
  ...poiExtraDeLebenWirtschaft,
];
import { romaniaAllPois } from "../data/romaniaPoi"; // Tartalmazza: romaniaCulture, romaniaTraditions, romaniaWildlife, romaniaFolk
import { poiExtraRo1 } from "../data/poiExtraRo1";
import { poiExtraRo2 } from "../data/poiExtraRo2";
import { hungaryAllPoi } from "../data/hungaryPoi";
import { poiExtraHu1 } from "../data/poiExtraHu1";
import { poiExtraHu2 } from "../data/poiExtraHu2";
import { poiExtraHu3 } from "../data/poiExtraHu3";
import { franceAllPoi } from "../data/francePoi";
import { poiExtraFranceCities } from "../data/poiExtraFranceCities";
import { italyAllPoi } from "../data/italyPoi";
import { polandAllPoi } from "../data/polandPoi";
import { poiExtraPolandCities } from "../data/poiExtraPolandCities";
import { spainMap, spainViewBox, projectCoordsES } from "./spain.svg";
import { spainAllPoi } from "../data/spainPoi";
import { unitedkingdomMap, unitedkingdomViewBox, projectCoordsUK } from "./unitedkingdom.svg";
import { unitedkingdomAllPoi } from "../data/unitedkingdomPoi";
import { netherlandsMap, netherlandsViewBox, projectCoordsNL } from "./netherlands.svg";
import { netherlandsAllPoi } from "../data/netherlandsPoi";
import { poiExtraNetherlandsCities } from "../data/poiExtraNetherlandsCities";
import { austriaMap, austriaViewBox, projectCoordsAT } from "./austria.svg";
import { austriaAllPoi } from "../data/austriaPoi";
import { poiExtraAustriaCities } from "../data/poiExtraAustriaCities";
import { poiExtraAustriaHistorical } from "../data/poiExtraAustriaHistorical";
import { poiExtraAustriaIndustry } from "../data/poiExtraAustriaIndustry";
import { poiExtraAustriaLife } from "../data/poiExtraAustriaLife";
import { poiExtraAustriaNature } from "../data/poiExtraAustriaNature";
import { belgiumMap, belgiumViewBox, projectCoordsBE } from "./belgium.svg";
import { belgiumAllPoi } from "../data/belgiumPoi";
import { portugalMap, portugalViewBox, projectCoordsPT } from "./portugal.svg";
import { portugalAllPoi } from "../data/portugalPoi";
import { greeceMap, greeceViewBox, projectCoordsGR } from "./greece.svg";
import { greeceAllPoi } from "../data/greecePoi";
import { poiExtraGreeceCities } from "../data/poiExtraGreeceCities";
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
import { switzerlandSubregions } from "./switzerlandSubregions";
import { switzerlandAllPoi } from "../data/switzerlandPoi";
import { czechRepublicMap, czechRepublicViewBox, projectCoordsCZ } from "./czechRepublic.svg";
import { czechRepublicAllPoi } from "../data/czechRepublicPoi";
import { poiExtraCzechRepublicCities } from "../data/poiExtraCzechRepublicCities";
import { slovakiaMap, slovakiaViewBox, projectCoordsSK } from "./slovakia.svg";
import { slovakiaAllPoi } from "../data/slovakiaPoi";
import { sloveniaMap, sloveniaViewBox, projectCoordsSI } from "./slovenia.svg";
import { sloveniaAllPoi } from "../data/sloveniaPoi";
import { sanmarinoMap, sanmarinoViewBox, projectCoordsSM } from "./sanmarino.svg";
import { sanmarinoAllPoi } from "../data/sanmarinoPoi";
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
import { moldovaMap, moldovaViewBox, projectCoordsMD } from "./moldova.svg";
import { moldovaAllPoi } from "../data/moldovaPoi";
import { ukraineMap, ukraineViewBox, projectCoordsUA } from "./ukraine.svg";
import { belarusMap, belarusViewBox, projectCoordsBY } from "./belarus.svg";
import { ukrainePois } from "../data/ukrainePoi";
import { belarusAllPoi } from "../data/belarusPoi";
import { andorraMap, andorraViewBox, projectCoordsAD } from "./andorra.svg";
import { andorraAllPoi } from "../data/andorraPoi";
import { monacoMap, monacoViewBox, projectCoordsMC } from "./monaco.svg";
import { monacoAllPoi } from "../data/monacoPoi";
import { vaticanMap, vaticanViewBox, projectCoordsVA } from "./vatican.svg";
import { vaticanPois } from "../data/vaticanPoi";
// ─── North America ────────────────────────────────────────────────────────
import { northamericaMap, northamericaViewBox, projectCoordsNA } from "./northamerica.svg";
import { usaMap, usaViewBox, projectCoordsUS } from "./usa.svg";
import { usaAllPoi } from "../data/usaPoi";
import { canadaMap, canadaViewBox, projectCoordsCA } from "./canada.svg";
import { canadaAllPoi } from "../data/canadaPoi";
import { mexicoMap, mexicoViewBox, projectCoordsMX } from "./mexico.svg";
import { mexicoAllPoi } from "../data/mexicoPoi";
import { guatemalaMap, guatemalaViewBox, projectCoordsGT } from "./guatemala.svg";
import { guatemalaAllPoi } from "../data/guatemalaPoi";
import { hondurasMap, hondurasViewBox, projectCoordsHN } from "./honduras.svg";
import { hondurasAllPoi } from "../data/hondurasPoi";
import { nicaraguaMap, nicaraguaViewBox, projectCoordsNI } from "./nicaragua.svg";
import { nicaraguaAllPoi } from "../data/nicaraguaPoi";
import { costaricaMap, costaricaViewBox, projectCoordsCR } from "./costarica.svg";
import { costaricaAllPoi } from "../data/costaricaPoi";
import { panamaMap, panamaViewBox, projectCoordsPA } from "./panama.svg";
import { panamaAllPoi } from "../data/panamaPoi";
import { cubaMap, cubaViewBox, projectCoordsCU } from "./cuba.svg";
import { cubaAllPoi } from "../data/cubaPoi";
import { dominicanrepublicMap, dominicanrepublicViewBox, projectCoordsDO } from "./dominicanrepublic.svg";
import { dominicanrepublicAllPoi } from "../data/dominicanrepublicPoi";
import { haitiMap, haitiViewBox, projectCoordsHT } from "./haiti.svg";
import { haitiAllPoi } from "../data/haitiPoi";
import { jamaicaMap, jamaicaViewBox, projectCoordsJM } from "./jamaica.svg";
import { jamaicaAllPoi } from "../data/jamaicaPoi";
import { bahamasMap, bahamasViewBox, projectCoordsBS } from "./bahamas.svg";
import { bahamasAllPoi } from "../data/bahamasPoi";
import { trinidadMap, trinidadViewBox, projectCoordsTT } from "./trinidad.svg";
import { trinidadAllPoi } from "../data/trinidadPoi";
import { belizeMap, belizeViewBox, projectCoordsBZ } from "./belize.svg";
import { belizeAllPoi } from "../data/belizePoi";
import { elsalvadorMap, elsalvadorViewBox, projectCoordsSV } from "./elsalvador.svg";
import { elsalvadorAllPoi } from "../data/elsalvadorPoi";
import type { POI } from "../data/poi";

export type Lang = "de" | "hu" | "ro" | "en" | "fr" | "it" | "es" | "pl" | "gb" | "nl" | "at" | "be" | "pt" | "gr" | "ie" | "dk" | "se" | "no" | "fi" | "ch" | "cz" | "sk" | "si" | "sm" | "hr" | "bg" | "lu" | "lt" | "lv" | "ee" | "is" | "mt" | "cy" | "al" | "ba" | "me" | "mk" | "xk" | "md" | "ua" | "by" | "ad" | "mc" | "va" | "rs" | "na" | "us" | "canada" | "mx" | "gt" | "hn" | "ni" | "cr" | "pa" | "cu" | "do" | "ht" | "jm" | "bs" | "tt" | "bz" | "sv";

// Közös reprezentáció: BundeslandPath strukturálisan megfelel a JudetPath-nak is
export interface CountryMapData {
  countryId: string;        // "DE" | "RO" | "HU" | "FR" | "IT" | "ES" | "PL" | "GB" | "NL" | "AT" | "BE" | "PT" | "GR" | "IE" | "DK" | "SE" | "NO" | "FI" | "CH" | "CZ" | "SK" | "SI" | "SM" | "HR" | "BG" | "LU" | "LT" | "IS" | "MT" | "CY" | "AL" | "BA" | "ME" | "MK" | "MD" | "BY" | "AD" | "MC" | "VA"
  map: BundeslandPath[];    // strukturálisan kompatibilis JudetPath-tal
  viewBox: string;
  projectCoords: (lon: number, lat: number) => [number, number];
  pois: POI[];
  subregions: Record<string, any> | any[]; // structurally compatible with bundeslandSubregions
}

export function getCountryMap(lang: Lang): CountryMapData {
  switch (lang) {
    case "va":
      return {
        countryId: "VA",
        map: vaticanMap as unknown as BundeslandPath[],
        viewBox: vaticanViewBox,
        projectCoords: projectCoordsVA,
        pois: vaticanPois,
        subregions: {},
      };
    case "ua":
      return {
        countryId: "UA",
        map: ukraineMap as unknown as BundeslandPath[],
        viewBox: ukraineViewBox,
        projectCoords: projectCoordsUA,
        pois: ukrainePois,
        subregions: {},
      };
    case "by":
      return {
        countryId: "BY",
        map: belarusMap as unknown as BundeslandPath[],
        viewBox: belarusViewBox,
        projectCoords: projectCoordsBY,
        pois: belarusAllPoi,
        subregions: {},
      };
    case "md":
      return {
        countryId: "MD",
        map: moldovaMap as unknown as BundeslandPath[],
        viewBox: moldovaViewBox,
        projectCoords: projectCoordsMD,
        pois: moldovaAllPoi,
        subregions: {},
      };
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
        pois: [...romaniaAllPois, ...poiExtraRo1, ...poiExtraRo2],
        subregions: romaniaJudetSubregions,
      };
    case "hu":
      return {
        countryId: "HU",
        map: magyarorszagMap as unknown as BundeslandPath[],
        viewBox: magyarorszagViewBox,
        projectCoords: projectCoordsHU,
        pois: [...hungaryAllPoi, ...poiExtraHu1, ...poiExtraHu2, ...poiExtraHu3],
        subregions: hungarySubregions,
      };
    case "pl":
      return {
        countryId: "PL",
        map: polandMap as unknown as BundeslandPath[],
        viewBox: polandViewBox,
        projectCoords: projectCoordsPL,
        pois: [...polandAllPoi, ...poiExtraPolandCities],
        subregions: polandSubregions,
      };
    case "es":
      return {
        countryId: "ES",
        map: spainMap as unknown as BundeslandPath[],
        viewBox: spainViewBox,
        projectCoords: projectCoordsES,
        pois: spainAllPoi,
        subregions: spainSubregions,
      };
    case "fr":
      return {
        countryId: "FR",
        map: franceMap as unknown as BundeslandPath[],
        viewBox: franceViewBox,
        projectCoords: projectCoordsFR,
        pois: [...franceAllPoi, ...poiExtraFranceCities],
        subregions: franceSubregions,
      };
    case "it":
      return {
        countryId: "IT",
        map: italyMap as unknown as BundeslandPath[],
        viewBox: italyViewBox,
        projectCoords: projectCoordsIT,
        pois: italyAllPoi,
        subregions: italySubregions,
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
        pois: [...netherlandsAllPoi, ...poiExtraNetherlandsCities],
        subregions: {}, // No specific subregions map for now
      };
    case "at":
      return {
        countryId: "AT",
        map: austriaMap as unknown as BundeslandPath[],
        viewBox: austriaViewBox,
        projectCoords: projectCoordsAT,
        pois: [...austriaAllPoi, ...poiExtraAustriaCities, ...poiExtraAustriaHistorical, ...poiExtraAustriaIndustry, ...poiExtraAustriaLife, ...poiExtraAustriaNature],
        subregions: austriaSubregions,
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
        pois: [...greeceAllPoi, ...poiExtraGreeceCities],
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
        subregions: switzerlandSubregions,
      };
    case "cz":
      return {
        countryId: "CZ",
        map: czechRepublicMap as unknown as BundeslandPath[],
        viewBox: czechRepublicViewBox,
        projectCoords: projectCoordsCZ,
        pois: [...czechRepublicAllPoi, ...poiExtraCzechRepublicCities],
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
    case "sm":
      return {
        countryId: "SM",
        map: sanmarinoMap as unknown as BundeslandPath[],
        viewBox: sanmarinoViewBox,
        projectCoords: projectCoordsSM,
        pois: sanmarinoAllPoi,
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
    case "ad":
      return {
        countryId: "AD",
        map: andorraMap as unknown as BundeslandPath[],
        viewBox: andorraViewBox,
        projectCoords: projectCoordsAD,
        pois: andorraAllPoi,
        subregions: {},
      };
    case "mc":
      return {
        countryId: "MC",
        map: monacoMap as unknown as BundeslandPath[],
        viewBox: monacoViewBox,
        projectCoords: projectCoordsMC,
        pois: monacoAllPoi,
        subregions: {},
      };
    // ─── North America ────────────────────────────────────────────────
    case "na":
      return { countryId: "NA", map: northamericaMap as unknown as BundeslandPath[], viewBox: northamericaViewBox, projectCoords: projectCoordsNA, pois: [...usaAllPoi, ...canadaAllPoi, ...mexicoAllPoi, ...cubaAllPoi, ...guatemalaAllPoi, ...hondurasAllPoi, ...nicaraguaAllPoi, ...costaricaAllPoi, ...panamaAllPoi, ...dominicanrepublicAllPoi, ...haitiAllPoi, ...jamaicaAllPoi, ...bahamasAllPoi, ...trinidadAllPoi, ...belizeAllPoi, ...elsalvadorAllPoi], subregions: {} };
    case "us":
      return { countryId: "US", map: usaMap as unknown as BundeslandPath[], viewBox: usaViewBox, projectCoords: projectCoordsUS, pois: usaAllPoi, subregions: {} };
    case "canada":
      return { countryId: "CA", map: canadaMap as unknown as BundeslandPath[], viewBox: canadaViewBox, projectCoords: projectCoordsCA, pois: canadaAllPoi, subregions: {} };
    case "mx":
      return { countryId: "MX", map: mexicoMap as unknown as BundeslandPath[], viewBox: mexicoViewBox, projectCoords: projectCoordsMX, pois: mexicoAllPoi, subregions: {} };
    case "gt":
      return { countryId: "GT", map: guatemalaMap as unknown as BundeslandPath[], viewBox: guatemalaViewBox, projectCoords: projectCoordsGT, pois: guatemalaAllPoi, subregions: {} };
    case "hn":
      return { countryId: "HN", map: hondurasMap as unknown as BundeslandPath[], viewBox: hondurasViewBox, projectCoords: projectCoordsHN, pois: hondurasAllPoi, subregions: {} };
    case "ni":
      return { countryId: "NI", map: nicaraguaMap as unknown as BundeslandPath[], viewBox: nicaraguaViewBox, projectCoords: projectCoordsNI, pois: nicaraguaAllPoi, subregions: {} };
    case "cr":
      return { countryId: "CR", map: costaricaMap as unknown as BundeslandPath[], viewBox: costaricaViewBox, projectCoords: projectCoordsCR, pois: costaricaAllPoi, subregions: {} };
    case "pa":
      return { countryId: "PA", map: panamaMap as unknown as BundeslandPath[], viewBox: panamaViewBox, projectCoords: projectCoordsPA, pois: panamaAllPoi, subregions: {} };
    case "cu":
      return { countryId: "CU", map: cubaMap as unknown as BundeslandPath[], viewBox: cubaViewBox, projectCoords: projectCoordsCU, pois: cubaAllPoi, subregions: {} };
    case "do":
      return { countryId: "DO", map: dominicanrepublicMap as unknown as BundeslandPath[], viewBox: dominicanrepublicViewBox, projectCoords: projectCoordsDO, pois: dominicanrepublicAllPoi, subregions: {} };
    case "ht":
      return { countryId: "HT", map: haitiMap as unknown as BundeslandPath[], viewBox: haitiViewBox, projectCoords: projectCoordsHT, pois: haitiAllPoi, subregions: {} };
    case "jm":
      return { countryId: "JM", map: jamaicaMap as unknown as BundeslandPath[], viewBox: jamaicaViewBox, projectCoords: projectCoordsJM, pois: jamaicaAllPoi, subregions: {} };
    case "bs":
      return { countryId: "BS", map: bahamasMap as unknown as BundeslandPath[], viewBox: bahamasViewBox, projectCoords: projectCoordsBS, pois: bahamasAllPoi, subregions: {} };
    case "tt":
      return { countryId: "TT", map: trinidadMap as unknown as BundeslandPath[], viewBox: trinidadViewBox, projectCoords: projectCoordsTT, pois: trinidadAllPoi, subregions: {} };
    case "bz":
      return { countryId: "BZ", map: belizeMap as unknown as BundeslandPath[], viewBox: belizeViewBox, projectCoords: projectCoordsBZ, pois: belizeAllPoi, subregions: {} };
    case "sv":
      return { countryId: "SV", map: elsalvadorMap as unknown as BundeslandPath[], viewBox: elsalvadorViewBox, projectCoords: projectCoordsSV, pois: elsalvadorAllPoi, subregions: {} };
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

