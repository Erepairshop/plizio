import type { POI } from "../data/poi";

export const kosovoViewBox = "0 0 1000 1000";

export const XK_PROJECTION = {
  minLon: 19.9,
  maxLon: 21.8,
  minLat: 41.8,
  maxLat: 43.3,
};

export function projectCoordsXK(lon: number, lat: number): [number, number] {
  const x = ((lon - XK_PROJECTION.minLon) / (XK_PROJECTION.maxLon - XK_PROJECTION.minLon)) * 1000;
  const y = (1 - (lat - XK_PROJECTION.minLat) / (XK_PROJECTION.maxLat - XK_PROJECTION.minLat)) * 1000;
  return [x, y];
}

export interface KosovoRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  path: string;
}

export const kosovoMap: KosovoRegionPath[] = [
  {
    id: "XK",
    name: { de: "Kosovo", hu: "Koszovó", ro: "Kosovo", en: "Kosovo" },
    capital: "Pristina",
    path: "M500,0 L800,300 L1000,600 L800,1000 L500,900 L200,800 L0,500 L200,200 Z"
  }
];
