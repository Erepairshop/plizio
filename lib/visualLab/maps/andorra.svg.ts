import type { POI } from "../data/poi";

export const andorraViewBox = "0 0 1000 660";

export const AD_PROJECTION = {
  minLon: 1.40,
  maxLon: 1.80,
  minLat: 42.40,
  maxLat: 42.66,
  width: 1000,
  height: 660,
};

export function projectCoordsAD(lon: number, lat: number): [number, number] {
  const x = (lon - AD_PROJECTION.minLon) * (AD_PROJECTION.width / (AD_PROJECTION.maxLon - AD_PROJECTION.minLon));
  const y = (AD_PROJECTION.maxLat - lat) * (AD_PROJECTION.height / (AD_PROJECTION.maxLat - AD_PROJECTION.minLat));
  return [x, y];
}

export interface AndorraRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const andorraMap: AndorraRegionPath[] = [
  {
    id: "AD-ALL",
    name: { de: "Andorra", hu: "Andorra", ro: "Andorra", en: "Andorra" },
    capital: "Andorra la Vella",
    labelX: 500,
    labelY: 330,
    path: "M100,500 L900,500 L500,100 Z"
  }
];
