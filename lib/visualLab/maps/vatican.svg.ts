import type { POI } from "../data/poi";

export const vaticanViewBox = "0 0 1000 1000";

export const VA_PROJECTION = {
  minLon: 12.445,
  maxLon: 12.459,
  minLat: 41.899,
  maxLat: 41.908,
  width: 1000,
  height: 1000,
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

// Simplified Vatican City outline
export const vaticanMap: VaticanRegionPath[] = [
  {
    id: "VA",
    name: { de: "Vatikanstadt", hu: "Vatikán", ro: "Vatican", en: "Vatican City" },
    capital: "Vatican City",
    labelX: 500,
    labelY: 500,
    path: "M434,957 L216,913 L135,765 L76,647 L43,456 L65,302 L147,156 L289,65 L500,43 L711,65 L853,156 L935,302 L957,456 L924,647 L865,765 L784,913 Z"
  }
];
