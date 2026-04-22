import type { POI } from "../data/poi";

export const ukraineViewBox = "0 0 1000 660";

export const UA_PROJECTION = {
  minLon: 22.1,
  maxLon: 40.3,
  minLat: 44.3,
  maxLat: 52.4,
  width: 1000,
  height: 660,
};

export function projectCoordsUA(lon: number, lat: number): [number, number] {
  const x = (lon - UA_PROJECTION.minLon) * (UA_PROJECTION.width / (UA_PROJECTION.maxLon - UA_PROJECTION.minLon));
  const y = (UA_PROJECTION.maxLat - lat) * (UA_PROJECTION.height / (UA_PROJECTION.maxLat - UA_PROJECTION.minLat));
  return [x, y];
}

export interface UkraineRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const ukraineMap: UkraineRegionPath[] = [
  {
    id: "ua-main",
    name: { de: "Ukraine", hu: "Ukrajna", ro: "Ucraina", en: "Ukraine" },
    capital: "Kyiv",
    labelX: 500,
    labelY: 330,
    // Placeholder path for the whole of Ukraine
    path: "M200,150 Q400,50 600,100 T800,200 Q950,250 900,400 T700,550 Q600,600 500,500 T300,550 Q150,500 100,400 T200,150 Z"
  }
];
