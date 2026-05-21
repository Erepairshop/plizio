// @ts-nocheck
// AUTO-GENERATED — mali osszes POI (V2 batch fajlokbol)
// Ne szerkeszd kezzel! Futtatsd ujra: npx tsx scripts/generateAfricaMaps.ts
import type { POI } from "./poi";
import { poiExtraMaliCitiesV2 } from "./poiExtraMaliCitiesV2";
import { poiExtraMaliEconomicV2 } from "./poiExtraMaliEconomicV2";
import { poiExtraMaliHistoryV2 } from "./poiExtraMaliHistoryV2";
import { poiExtraMaliLandmarksV2 } from "./poiExtraMaliLandmarksV2";
import { poiExtraMaliLifeV2 } from "./poiExtraMaliLifeV2";
import { poiExtraMaliNatureV2 } from "./poiExtraMaliNatureV2";
import { poiExtraMaliReliefV2 } from "./poiExtraMaliReliefV2";

export const maliAllPoi: POI[] = [
  ...poiExtraMaliCitiesV2,
  ...poiExtraMaliEconomicV2,
  ...poiExtraMaliHistoryV2,
  ...poiExtraMaliLandmarksV2,
  ...poiExtraMaliLifeV2,
  ...poiExtraMaliNatureV2,
  ...poiExtraMaliReliefV2,
];
