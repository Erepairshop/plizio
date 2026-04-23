// AUTO-GENERATED from ne_admin1_10m.geojson (admin-1 for VA)
import type { POI } from "../data/poi";

export const vaticanViewBox = "0 0 1000 1183";

export const VA_PROJECTION = {
  minLon: 12.452647950000001,
  maxLon: 12.454101049999998,
  minLat: 41.90269385,
  maxLat: 41.90397315,
  width: 1000,
  height: 1183,
};

export function projectCoordsVA(lon: number, lat: number): [number, number] {
  const x = (lon - VA_PROJECTION.minLon) * (VA_PROJECTION.width / (VA_PROJECTION.maxLon - VA_PROJECTION.minLon));
  const y = (VA_PROJECTION.maxLat - lat) * (VA_PROJECTION.height / (VA_PROJECTION.maxLat - VA_PROJECTION.minLat));
  return [x, y];
}

export interface VaticanRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const vaticanMap: VaticanRegionPath[] = [
  {
    "id": "VA-001",
    "name": {
      "de": "Vatican",
      "hu": "Vatican",
      "ro": "Vatican",
      "en": "Vatican"
    },
    "capital": "",
    "labelX": 409.21,
    "labelY": 549.69,
    "path": "M263.61,53.77L918.76,102.78L954.55,1129.23L336.56,1129.23L45.45,885.1L81.93,493.94L263.61,53.77Z"
  }
];
