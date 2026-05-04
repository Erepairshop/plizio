// AUTO-GENERATED — capeverde osszes POI (V2 batch fajlokbol)
// Ne szerkeszd kezzel! Futtatsd ujra: npx tsx scripts/generateAfricaMaps.ts
import type { POI } from "./poi";
import { poiExtraCapeverdeCitiesV2 } from "./poiExtraCapeverdeCitiesV2";
import { poiExtraCapeverdeEconomicV2 } from "./poiExtraCapeverdeEconomicV2";
import { poiExtraCapeverdeHistoryV2 } from "./poiExtraCapeverdeHistoryV2";
import { poiExtraCapeverdeLandmarksV2 } from "./poiExtraCapeverdeLandmarksV2";
import { poiExtraCapeverdeLifeV2 } from "./poiExtraCapeverdeLifeV2";
import { poiExtraCapeverdeNatureV2 } from "./poiExtraCapeverdeNatureV2";
import { poiExtraCapeverdeReliefV2 } from "./poiExtraCapeverdeReliefV2";

export const capeverdeAllPoi: POI[] = [
  ...poiExtraCapeverdeCitiesV2,
  ...poiExtraCapeverdeEconomicV2,
  ...poiExtraCapeverdeHistoryV2,
  ...poiExtraCapeverdeLandmarksV2,
  ...poiExtraCapeverdeLifeV2,
  ...poiExtraCapeverdeNatureV2,
  ...poiExtraCapeverdeReliefV2,
];
