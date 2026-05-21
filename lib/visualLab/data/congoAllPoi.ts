// @ts-nocheck
// AUTO-GENERATED — congo osszes POI (V2 batch fajlokbol)
// Ne szerkeszd kezzel! Futtatsd ujra: npx tsx scripts/generateAfricaMaps.ts
import type { POI } from "./poi";
import { poiExtraCongoCitiesV2 } from "./poiExtraCongoCitiesV2";
import { poiExtraCongoEconomicV2 } from "./poiExtraCongoEconomicV2";
import { poiExtraCongoHistoryV2 } from "./poiExtraCongoHistoryV2";
import { poiExtraCongoLandmarksV2 } from "./poiExtraCongoLandmarksV2";
import { poiExtraCongoLifeV2 } from "./poiExtraCongoLifeV2";
import { poiExtraCongoNatureV2 } from "./poiExtraCongoNatureV2";
import { poiExtraCongoReliefV2 } from "./poiExtraCongoReliefV2";

export const congoAllPoi: POI[] = [
  ...poiExtraCongoCitiesV2,
  ...poiExtraCongoEconomicV2,
  ...poiExtraCongoHistoryV2,
  ...poiExtraCongoLandmarksV2,
  ...poiExtraCongoLifeV2,
  ...poiExtraCongoNatureV2,
  ...poiExtraCongoReliefV2,
];
