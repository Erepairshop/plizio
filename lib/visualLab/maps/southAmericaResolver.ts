// AUTO-GENERATED — Del-Amerika orszag resolver
// Mintara africaResolver.ts. POI lista ures (V2 batch fajlok kulonalloak),
// frenchguiana per-country svg hianyzik -> null fallback.
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

/**
 * getSouthAmericaCountryMap — visszaadja az adott DA orszag terkep adatait.
 * @param countryId - Az orszag slug (pl. "brazil", "argentina")
 */
export function getSouthAmericaCountryMap(countryId: string): CountryMapData | null {
  switch (countryId) {
    case "argentina":
      return {
        countryId: "AR",
        map: argentinaMap as unknown as BundeslandPath[],
        viewBox: argentinaViewBox,
        projectCoords: projectCoordsAR,
        pois: [],
        subregions: [],
      };
    case "bolivia":
      return {
        countryId: "BO",
        map: boliviaMap as unknown as BundeslandPath[],
        viewBox: boliviaViewBox,
        projectCoords: projectCoordsBO,
        pois: [],
        subregions: [],
      };
    case "brazil":
      return {
        countryId: "BR",
        map: brazilMap as unknown as BundeslandPath[],
        viewBox: brazilViewBox,
        projectCoords: projectCoordsBR,
        pois: [],
        subregions: [],
      };
    case "chile":
      return {
        countryId: "CL",
        map: chileMap as unknown as BundeslandPath[],
        viewBox: chileViewBox,
        projectCoords: projectCoordsCL,
        pois: [],
        subregions: [],
      };
    case "colombia":
      return {
        countryId: "CO",
        map: colombiaMap as unknown as BundeslandPath[],
        viewBox: colombiaViewBox,
        projectCoords: projectCoordsCO,
        pois: [],
        subregions: [],
      };
    case "ecuador":
      return {
        countryId: "EC",
        map: ecuadorMap as unknown as BundeslandPath[],
        viewBox: ecuadorViewBox,
        projectCoords: projectCoordsEC,
        pois: [],
        subregions: [],
      };
    case "guyana":
      return {
        countryId: "GY",
        map: guyanaMap as unknown as BundeslandPath[],
        viewBox: guyanaViewBox,
        projectCoords: projectCoordsGY,
        pois: [],
        subregions: [],
      };
    case "paraguay":
      return {
        countryId: "PY",
        map: paraguayMap as unknown as BundeslandPath[],
        viewBox: paraguayViewBox,
        projectCoords: projectCoordsPY,
        pois: [],
        subregions: [],
      };
    case "peru":
      return {
        countryId: "PE",
        map: peruMap as unknown as BundeslandPath[],
        viewBox: peruViewBox,
        projectCoords: projectCoordsPE,
        pois: [],
        subregions: [],
      };
    case "suriname":
      return {
        countryId: "SR",
        map: surinameMap as unknown as BundeslandPath[],
        viewBox: surinameViewBox,
        projectCoords: projectCoordsSR,
        pois: [],
        subregions: [],
      };
    case "uruguay":
      return {
        countryId: "UY",
        map: uruguayMap as unknown as BundeslandPath[],
        viewBox: uruguayViewBox,
        projectCoords: projectCoordsUY,
        pois: [],
        subregions: [],
      };
    case "venezuela":
      return {
        countryId: "VE",
        map: venezuelaMap as unknown as BundeslandPath[],
        viewBox: venezuelaViewBox,
        projectCoords: projectCoordsVE,
        pois: [],
        subregions: [],
      };
    // frenchguiana: per-country svg hianyzik -> null (continent fallback)
    default:
      return null;
  }
}
