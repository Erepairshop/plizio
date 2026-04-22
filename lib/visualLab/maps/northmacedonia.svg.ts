// AUTO-GENERATED simplified map of North Macedonia
import type { POI } from "../data/poi";

export const northmacedoniaViewBox = "0 0 1000 700";

export const MK_PROJECTION = {
  minLon: 20.45,
  maxLon: 23.03,
  minLat: 40.85,
  maxLat: 42.37,
  width: 1000,
  height: 700,
};

export function projectCoordsMK(lon: number, lat: number): [number, number] {
  const x = (lon - MK_PROJECTION.minLon) * (MK_PROJECTION.width / (MK_PROJECTION.maxLon - MK_PROJECTION.minLon));
  const y = (MK_PROJECTION.maxLat - lat) * (MK_PROJECTION.height / (MK_PROJECTION.maxLat - MK_PROJECTION.minLat));
  return [x, y];
}

export interface NorthMacedoniaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const northmacedoniaMap: NorthMacedoniaRegionPath[] = [
  {
    id: "MK-ALL",
    name: { de: "Észak-Macedónia", hu: "Észak-Macedónia", ro: "Macedonia de Nord", en: "North Macedonia" },
    capital: "Skopje",
    labelX: 500,
    labelY: 350,
    // A simplified rough outline for North Macedonia (oval-ish bounding box)
    path: "M 200,300 C 300,100 700,100 800,250 C 950,400 800,600 500,650 C 200,600 50,450 200,300 Z"
  }
];
