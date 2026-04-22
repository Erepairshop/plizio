import type { POI } from "../data/poi";

export const icelandViewBox = "0 0 1000 660";

export const IS_PROJECTION = {
  minLon: -24.53,
  maxLon: -13.50,
  minLat: 63.29,
  maxLat: 66.57,
  width: 1000,
  height: 660,
};

export function projectCoordsIS(lon: number, lat: number): [number, number] {
  const x = (lon - IS_PROJECTION.minLon) * (IS_PROJECTION.width / (IS_PROJECTION.maxLon - IS_PROJECTION.minLon));
  const y = (IS_PROJECTION.maxLat - lat) * (IS_PROJECTION.height / (IS_PROJECTION.maxLat - IS_PROJECTION.minLat));
  return [x, y];
}

export interface IcelandRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

// Simplified Iceland outline
export const icelandMap: IcelandRegionPath[] = [
  {
    id: "IS-0",
    name: { de: "Island", hu: "Izland", ro: "Islanda", en: "Iceland" },
    capital: "Reykjavík",
    labelX: 500,
    labelY: 330,
    path: "M243,598 L197,552 L150,545 L118,506 L89,515 L50,473 L74,424 L103,425 L129,380 L115,354 L165,302 L146,260 L146,211 L200,165 L260,195 L314,142 L347,152 L363,126 L400,140 L430,90 L480,95 L520,70 L570,85 L610,60 L650,80 L700,90 L750,110 L800,140 L850,180 L880,240 L910,290 L920,350 L910,410 L880,470 L840,510 L780,540 L720,560 L650,575 L580,585 L510,590 L440,600 L370,610 L300,615 Z"
  }
];
