// @ts-nocheck
// AUTO-GENERATED — kenya osszes POI (V2 batch fajlokbol)
// Ne szerkeszd kezzel! Futtatsd ujra: npx tsx scripts/generateAfricaMaps.ts
import type { POI } from "./poi";
import { poiExtraKenyaCitiesV2 } from "./poiExtraKenyaCitiesV2";
import { poiExtraKenyaEconomicV2 } from "./poiExtraKenyaEconomicV2";
import { poiExtraKenyaHistoryV2 } from "./poiExtraKenyaHistoryV2";
import { poiExtraKenyaLandmarksV2 } from "./poiExtraKenyaLandmarksV2";
import { poiExtraKenyaLifeV2 } from "./poiExtraKenyaLifeV2";
import { poiExtraKenyaNatureV2 } from "./poiExtraKenyaNatureV2";
import { poiExtraKenyaReliefV2 } from "./poiExtraKenyaReliefV2";

export const kenyaAllPoi: POI[] = [
  ...poiExtraKenyaCitiesV2,
  ...poiExtraKenyaEconomicV2,
  ...poiExtraKenyaHistoryV2,
  ...poiExtraKenyaLandmarksV2,
  ...poiExtraKenyaLifeV2,
  ...poiExtraKenyaNatureV2,
  ...poiExtraKenyaReliefV2,
];
