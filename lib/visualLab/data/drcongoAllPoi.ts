// AUTO-GENERATED — drcongo osszes POI (V2 batch fajlokbol)
// Ne szerkeszd kezzel! Futtatsd ujra: npx tsx scripts/generateAfricaMaps.ts
import type { POI } from "./poi";
import { poiExtraDrcongoCitiesV2 } from "./poiExtraDrcongoCitiesV2";
import { poiExtraDrcongoEconomicV2 } from "./poiExtraDrcongoEconomicV2";
import { poiExtraDrcongoHistoryV2 } from "./poiExtraDrcongoHistoryV2";
import { poiExtraDrcongoLandmarksV2 } from "./poiExtraDrcongoLandmarksV2";
import { poiExtraDrcongoLifeV2 } from "./poiExtraDrcongoLifeV2";
import { poiExtraDrcongoNatureV2 } from "./poiExtraDrcongoNatureV2";
import { poiExtraDrcongoReliefV2 } from "./poiExtraDrcongoReliefV2";

export const drcongoAllPoi: POI[] = [
  ...poiExtraDrcongoCitiesV2,
  ...poiExtraDrcongoEconomicV2,
  ...poiExtraDrcongoHistoryV2,
  ...poiExtraDrcongoLandmarksV2,
  ...poiExtraDrcongoLifeV2,
  ...poiExtraDrcongoNatureV2,
  ...poiExtraDrcongoReliefV2,
];
