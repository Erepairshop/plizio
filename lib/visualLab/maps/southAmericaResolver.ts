// AUTO-GENERATED — Del-Amerika orszag resolver (POI-aggregalt)
// Regenerate: python3 _regen_sa_resolver.py
import type { BundeslandPath } from "./deutschland.svg";
import type { CountryMapData } from "./resolver";
import { argentinaMap, argentinaViewBox, projectCoordsAR } from "./argentina.svg";
import { boliviaMap, boliviaViewBox, projectCoordsBO } from "./bolivia.svg";
import { brazilMap, brazilViewBox, projectCoordsBR } from "./brazil.svg";
import { chileMap, chileViewBox, projectCoordsCL } from "./chile.svg";
import { colombiaMap, colombiaViewBox, projectCoordsCO } from "./colombia.svg";
import { ecuadorMap, ecuadorViewBox, projectCoordsEC } from "./ecuador.svg";
import { guyanaMap, guyanaViewBox, projectCoordsGY } from "./guyana.svg";
import { paraguayMap, paraguayViewBox, projectCoordsPY } from "./paraguay.svg";
import { peruMap, peruViewBox, projectCoordsPE } from "./peru.svg";
import { surinameMap, surinameViewBox, projectCoordsSR } from "./suriname.svg";
import { uruguayMap, uruguayViewBox, projectCoordsUY } from "./uruguay.svg";
import { venezuelaMap, venezuelaViewBox, projectCoordsVE } from "./venezuela.svg";
import { poiExtraArgentinaCitiesV2 } from "../data/poiExtraArgentinaCitiesV2";
import { poiExtraArgentinaEconomicV2 } from "../data/poiExtraArgentinaEconomicV2";
import { poiExtraArgentinaHistoryV2 } from "../data/poiExtraArgentinaHistoryV2";
import { poiExtraArgentinaLandmarksV2 } from "../data/poiExtraArgentinaLandmarksV2";
import { poiExtraArgentinaLifeV2 } from "../data/poiExtraArgentinaLifeV2";
import { poiExtraArgentinaNatureV2 } from "../data/poiExtraArgentinaNatureV2";
import { poiExtraArgentinaReliefV2 } from "../data/poiExtraArgentinaReliefV2";
import { poiExtraBoliviaCitiesV2 } from "../data/poiExtraBoliviaCitiesV2";
import { poiExtraBoliviaHistoryV2 } from "../data/poiExtraBoliviaHistoryV2";
import { poiExtraBoliviaLandmarksV2 } from "../data/poiExtraBoliviaLandmarksV2";
import { poiExtraBoliviaLifeV2 } from "../data/poiExtraBoliviaLifeV2";
import { poiExtraBoliviaNatureV2 } from "../data/poiExtraBoliviaNatureV2";
import { poiExtraBoliviaReliefV2 } from "../data/poiExtraBoliviaReliefV2";
import { poiExtraBrazilCitiesV2 } from "../data/poiExtraBrazilCitiesV2";
import { poiExtraBrazilEconomicV2 } from "../data/poiExtraBrazilEconomicV2";
import { poiExtraBrazilHistoryV2 } from "../data/poiExtraBrazilHistoryV2";
import { poiExtraBrazilLandmarksV2 } from "../data/poiExtraBrazilLandmarksV2";
import { poiExtraBrazilLifeV2 } from "../data/poiExtraBrazilLifeV2";
import { poiExtraBrazilNatureV2 } from "../data/poiExtraBrazilNatureV2";
import { poiExtraBrazilReliefV2 } from "../data/poiExtraBrazilReliefV2";
import { poiExtraChileCitiesV2 } from "../data/poiExtraChileCitiesV2";
import { poiExtraChileEconomicV2 } from "../data/poiExtraChileEconomicV2";
import { poiExtraChileHistoryV2 } from "../data/poiExtraChileHistoryV2";
import { poiExtraChileLandmarksV2 } from "../data/poiExtraChileLandmarksV2";
import { poiExtraChileLifeV2 } from "../data/poiExtraChileLifeV2";
import { poiExtraChileNatureV2 } from "../data/poiExtraChileNatureV2";
import { poiExtraChileReliefV2 } from "../data/poiExtraChileReliefV2";
import { poiExtraColombiaCitiesV2 } from "../data/poiExtraColombiaCitiesV2";
import { poiExtraColombiaEconomicV2 } from "../data/poiExtraColombiaEconomicV2";
import { poiExtraColombiaHistoryV2 } from "../data/poiExtraColombiaHistoryV2";
import { poiExtraColombiaLandmarksV2 } from "../data/poiExtraColombiaLandmarksV2";
import { poiExtraColombiaLifeV2 } from "../data/poiExtraColombiaLifeV2";
import { poiExtraColombiaNatureV2 } from "../data/poiExtraColombiaNatureV2";
import { poiExtraColombiaReliefV2 } from "../data/poiExtraColombiaReliefV2";
import { poiExtraEcuadorCitiesV2 } from "../data/poiExtraEcuadorCitiesV2";
import { poiExtraEcuadorEconomicV2 } from "../data/poiExtraEcuadorEconomicV2";
import { poiExtraEcuadorHistoryV2 } from "../data/poiExtraEcuadorHistoryV2";
import { poiExtraEcuadorLandmarksV2 } from "../data/poiExtraEcuadorLandmarksV2";
import { poiExtraEcuadorLifeV2 } from "../data/poiExtraEcuadorLifeV2";
import { poiExtraEcuadorNatureV2 } from "../data/poiExtraEcuadorNatureV2";
import { poiExtraEcuadorReliefV2 } from "../data/poiExtraEcuadorReliefV2";
import { poiExtraGuyanaCitiesV2 } from "../data/poiExtraGuyanaCitiesV2";
import { poiExtraGuyanaEconomicV2 } from "../data/poiExtraGuyanaEconomicV2";
import { poiExtraGuyanaHistoryV2 } from "../data/poiExtraGuyanaHistoryV2";
import { poiExtraGuyanaLandmarksV2 } from "../data/poiExtraGuyanaLandmarksV2";
import { poiExtraGuyanaLifeV2 } from "../data/poiExtraGuyanaLifeV2";
import { poiExtraGuyanaNatureV2 } from "../data/poiExtraGuyanaNatureV2";
import { poiExtraGuyanaReliefV2 } from "../data/poiExtraGuyanaReliefV2";
import { poiExtraParaguayCitiesV2 } from "../data/poiExtraParaguayCitiesV2";
import { poiExtraParaguayEconomicV2 } from "../data/poiExtraParaguayEconomicV2";
import { poiExtraParaguayHistoryV2 } from "../data/poiExtraParaguayHistoryV2";
import { poiExtraParaguayLandmarksV2 } from "../data/poiExtraParaguayLandmarksV2";
import { poiExtraParaguayLifeV2 } from "../data/poiExtraParaguayLifeV2";
import { poiExtraParaguayNatureV2 } from "../data/poiExtraParaguayNatureV2";
import { poiExtraParaguayReliefV2 } from "../data/poiExtraParaguayReliefV2";
import { poiExtraPeruCitiesV2 } from "../data/poiExtraPeruCitiesV2";
import { poiExtraPeruEconomicV2 } from "../data/poiExtraPeruEconomicV2";
import { poiExtraPeruHistoryV2 } from "../data/poiExtraPeruHistoryV2";
import { poiExtraPeruLandmarksV2 } from "../data/poiExtraPeruLandmarksV2";
import { poiExtraPeruLifeV2 } from "../data/poiExtraPeruLifeV2";
import { poiExtraPeruNatureV2 } from "../data/poiExtraPeruNatureV2";
import { poiExtraPeruReliefV2 } from "../data/poiExtraPeruReliefV2";
import { poiExtraSurinameCitiesV2 } from "../data/poiExtraSurinameCitiesV2";
import { poiExtraSurinameEconomicV2 } from "../data/poiExtraSurinameEconomicV2";
import { poiExtraSurinameHistoryV2 } from "../data/poiExtraSurinameHistoryV2";
import { poiExtraSurinameLandmarksV2 } from "../data/poiExtraSurinameLandmarksV2";
import { poiExtraSurinameLifeV2 } from "../data/poiExtraSurinameLifeV2";
import { poiExtraSurinameNatureV2 } from "../data/poiExtraSurinameNatureV2";
import { poiExtraSurinameReliefV2 } from "../data/poiExtraSurinameReliefV2";
import { poiExtraUruguayCitiesV2 } from "../data/poiExtraUruguayCitiesV2";
import { poiExtraUruguayEconomicV2 } from "../data/poiExtraUruguayEconomicV2";
import { poiExtraUruguayHistoryV2 } from "../data/poiExtraUruguayHistoryV2";
import { poiExtraUruguayLandmarksV2 } from "../data/poiExtraUruguayLandmarksV2";
import { poiExtraUruguayLifeV2 } from "../data/poiExtraUruguayLifeV2";
import { poiExtraUruguayNatureV2 } from "../data/poiExtraUruguayNatureV2";
import { poiExtraUruguayReliefV2 } from "../data/poiExtraUruguayReliefV2";
import { poiExtraVenezuelaCitiesV2 } from "../data/poiExtraVenezuelaCitiesV2";
import { poiExtraVenezuelaEconomicV2 } from "../data/poiExtraVenezuelaEconomicV2";
import { poiExtraVenezuelaHistoryV2 } from "../data/poiExtraVenezuelaHistoryV2";
import { poiExtraVenezuelaLandmarksV2 } from "../data/poiExtraVenezuelaLandmarksV2";

export function getSouthAmericaCountryMap(countryId: string): CountryMapData | null {
  switch (countryId) {
    case "argentina":
      return {
        countryId: "AR",
        map: argentinaMap as unknown as BundeslandPath[],
        viewBox: argentinaViewBox,
        projectCoords: projectCoordsAR,
        pois: [
          ...poiExtraArgentinaCitiesV2,
          ...poiExtraArgentinaEconomicV2,
          ...poiExtraArgentinaHistoryV2,
          ...poiExtraArgentinaLandmarksV2,
          ...poiExtraArgentinaLifeV2,
          ...poiExtraArgentinaNatureV2,
          ...poiExtraArgentinaReliefV2
        ],
        subregions: [],
      };
    case "bolivia":
      return {
        countryId: "BO",
        map: boliviaMap as unknown as BundeslandPath[],
        viewBox: boliviaViewBox,
        projectCoords: projectCoordsBO,
        pois: [
          ...poiExtraBoliviaCitiesV2,
          ...poiExtraBoliviaHistoryV2,
          ...poiExtraBoliviaLandmarksV2,
          ...poiExtraBoliviaLifeV2,
          ...poiExtraBoliviaNatureV2,
          ...poiExtraBoliviaReliefV2
        ],
        subregions: [],
      };
    case "brazil":
      return {
        countryId: "BR",
        map: brazilMap as unknown as BundeslandPath[],
        viewBox: brazilViewBox,
        projectCoords: projectCoordsBR,
        pois: [
          ...poiExtraBrazilCitiesV2,
          ...poiExtraBrazilEconomicV2,
          ...poiExtraBrazilHistoryV2,
          ...poiExtraBrazilLandmarksV2,
          ...poiExtraBrazilLifeV2,
          ...poiExtraBrazilNatureV2,
          ...poiExtraBrazilReliefV2
        ],
        subregions: [],
      };
    case "chile":
      return {
        countryId: "CL",
        map: chileMap as unknown as BundeslandPath[],
        viewBox: chileViewBox,
        projectCoords: projectCoordsCL,
        pois: [
          ...poiExtraChileCitiesV2,
          ...poiExtraChileEconomicV2,
          ...poiExtraChileHistoryV2,
          ...poiExtraChileLandmarksV2,
          ...poiExtraChileLifeV2,
          ...poiExtraChileNatureV2,
          ...poiExtraChileReliefV2
        ],
        subregions: [],
      };
    case "colombia":
      return {
        countryId: "CO",
        map: colombiaMap as unknown as BundeslandPath[],
        viewBox: colombiaViewBox,
        projectCoords: projectCoordsCO,
        pois: [
          ...poiExtraColombiaCitiesV2,
          ...poiExtraColombiaEconomicV2,
          ...poiExtraColombiaHistoryV2,
          ...poiExtraColombiaLandmarksV2,
          ...poiExtraColombiaLifeV2,
          ...poiExtraColombiaNatureV2,
          ...poiExtraColombiaReliefV2
        ],
        subregions: [],
      };
    case "ecuador":
      return {
        countryId: "EC",
        map: ecuadorMap as unknown as BundeslandPath[],
        viewBox: ecuadorViewBox,
        projectCoords: projectCoordsEC,
        pois: [
          ...poiExtraEcuadorCitiesV2,
          ...poiExtraEcuadorEconomicV2,
          ...poiExtraEcuadorHistoryV2,
          ...poiExtraEcuadorLandmarksV2,
          ...poiExtraEcuadorLifeV2,
          ...poiExtraEcuadorNatureV2,
          ...poiExtraEcuadorReliefV2
        ],
        subregions: [],
      };
    case "guyana":
      return {
        countryId: "GY",
        map: guyanaMap as unknown as BundeslandPath[],
        viewBox: guyanaViewBox,
        projectCoords: projectCoordsGY,
        pois: [
          ...poiExtraGuyanaCitiesV2,
          ...poiExtraGuyanaEconomicV2,
          ...poiExtraGuyanaHistoryV2,
          ...poiExtraGuyanaLandmarksV2,
          ...poiExtraGuyanaLifeV2,
          ...poiExtraGuyanaNatureV2,
          ...poiExtraGuyanaReliefV2
        ],
        subregions: [],
      };
    case "paraguay":
      return {
        countryId: "PY",
        map: paraguayMap as unknown as BundeslandPath[],
        viewBox: paraguayViewBox,
        projectCoords: projectCoordsPY,
        pois: [
          ...poiExtraParaguayCitiesV2,
          ...poiExtraParaguayEconomicV2,
          ...poiExtraParaguayHistoryV2,
          ...poiExtraParaguayLandmarksV2,
          ...poiExtraParaguayLifeV2,
          ...poiExtraParaguayNatureV2,
          ...poiExtraParaguayReliefV2
        ],
        subregions: [],
      };
    case "peru":
      return {
        countryId: "PE",
        map: peruMap as unknown as BundeslandPath[],
        viewBox: peruViewBox,
        projectCoords: projectCoordsPE,
        pois: [
          ...poiExtraPeruCitiesV2,
          ...poiExtraPeruEconomicV2,
          ...poiExtraPeruHistoryV2,
          ...poiExtraPeruLandmarksV2,
          ...poiExtraPeruLifeV2,
          ...poiExtraPeruNatureV2,
          ...poiExtraPeruReliefV2
        ],
        subregions: [],
      };
    case "suriname":
      return {
        countryId: "SR",
        map: surinameMap as unknown as BundeslandPath[],
        viewBox: surinameViewBox,
        projectCoords: projectCoordsSR,
        pois: [
          ...poiExtraSurinameCitiesV2,
          ...poiExtraSurinameEconomicV2,
          ...poiExtraSurinameHistoryV2,
          ...poiExtraSurinameLandmarksV2,
          ...poiExtraSurinameLifeV2,
          ...poiExtraSurinameNatureV2,
          ...poiExtraSurinameReliefV2
        ],
        subregions: [],
      };
    case "uruguay":
      return {
        countryId: "UY",
        map: uruguayMap as unknown as BundeslandPath[],
        viewBox: uruguayViewBox,
        projectCoords: projectCoordsUY,
        pois: [
          ...poiExtraUruguayCitiesV2,
          ...poiExtraUruguayEconomicV2,
          ...poiExtraUruguayHistoryV2,
          ...poiExtraUruguayLandmarksV2,
          ...poiExtraUruguayLifeV2,
          ...poiExtraUruguayNatureV2,
          ...poiExtraUruguayReliefV2
        ],
        subregions: [],
      };
    case "venezuela":
      return {
        countryId: "VE",
        map: venezuelaMap as unknown as BundeslandPath[],
        viewBox: venezuelaViewBox,
        projectCoords: projectCoordsVE,
        pois: [
          ...poiExtraVenezuelaCitiesV2,
          ...poiExtraVenezuelaEconomicV2,
          ...poiExtraVenezuelaHistoryV2,
          ...poiExtraVenezuelaLandmarksV2
        ],
        subregions: [],
      };
    default:
      return null;
  }
}
