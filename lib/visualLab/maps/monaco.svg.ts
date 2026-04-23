// AUTO-GENERATED from ne_admin1_10m.geojson (admin-1 for MC)
import type { POI } from "../data/poi";

export const monacoViewBox = "0 0 1000 879";

export const MC_PROJECTION = {
  minLon: 7.3621648,
  maxLon: 7.4410392,
  minLat: 43.715692149999995,
  maxLat: 43.76578285,
  width: 1000,
  height: 879,
};

export function projectCoordsMC(lon: number, lat: number): [number, number] {
  const x = (lon - MC_PROJECTION.minLon) * (MC_PROJECTION.width / (MC_PROJECTION.maxLon - MC_PROJECTION.minLon));
  const y = (MC_PROJECTION.maxLat - lat) * (MC_PROJECTION.height / (MC_PROJECTION.maxLat - MC_PROJECTION.minLat));
  return [x, y];
}

export interface MonacoRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const monacoMap: MonacoRegionPath[] = [
  {
    "id": "MC-001",
    "name": {
      "de": "Monaco",
      "hu": "Monaco",
      "ro": "Monaco",
      "en": "Monaco"
    },
    "capital": "",
    "labelX": 486.76,
    "labelY": 431.35,
    "path": "M568.04,39.95L812.45,181.08L954.55,393.46L896.11,455.02L707.35,612.06L534.45,839.05L235.29,816.16L45.45,755.5L64.64,555.54L133,350.1L321.69,138.35L568.04,39.95Z"
  }
];
