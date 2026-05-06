// @ts-nocheck
// AUTO-GENERATED
import type { POI } from "./poi";
import { poiExtraUsaCitiesV2 } from "./poiExtraUsaCitiesV2";
import { poiExtraUsaEconomicV2 } from "./poiExtraUsaEconomicV2";
import { poiExtraUsaHistoryV2 } from "./poiExtraUsaHistoryV2";
import { poiExtraUsaLandmarksV2 } from "./poiExtraUsaLandmarksV2";
import { poiExtraUsaLifeV2 } from "./poiExtraUsaLifeV2";
import { poiExtraUsaNatureV2 } from "./poiExtraUsaNatureV2";
import { poiExtraUsaReliefV2 } from "./poiExtraUsaReliefV2";

export const usaCountry: POI[] = [];
export const usaRegions: POI[] = [];
export const usaGeography: POI[] = [];
export const usaHistory: POI[] = [];
export const usaLandmarks: POI[] = [];

export const usaCities: POI[] = [];

export const usaAllPoi: POI[] = [...usaCountry, ...usaRegions, ...usaCities, ...usaGeography, ...usaHistory, ...usaLandmarks, ...poiExtraUsaCitiesV2, ...poiExtraUsaEconomicV2, ...poiExtraUsaHistoryV2, ...poiExtraUsaLandmarksV2, ...poiExtraUsaLifeV2, ...poiExtraUsaNatureV2, ...poiExtraUsaReliefV2];

