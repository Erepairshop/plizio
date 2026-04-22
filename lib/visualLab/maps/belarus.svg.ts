// SIMPLIFIED Belarus country outline
import type { POI } from "../data/poi";

export const belarusViewBox = "0 0 1000 874";

export const BY_PROJECTION = {
  minLon: 23.1,
  maxLon: 32.8,
  minLat: 51.2,
  maxLat: 56.2,
  width: 1000,
  height: 874,
};

export function projectCoordsBY(lon: number, lat: number): [number, number] {
  const x = (lon - BY_PROJECTION.minLon) * (BY_PROJECTION.width / (BY_PROJECTION.maxLon - BY_PROJECTION.minLon));
  const y = (BY_PROJECTION.maxLat - lat) * (BY_PROJECTION.height / (BY_PROJECTION.maxLat - BY_PROJECTION.minLat));
  return [x, y];
}

export interface BelarusRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

// Single path for the whole country as per instructions
export const belarusMap: BelarusRegionPath[] = [
  {
    id: "BY",
    name: { de: "Belarus", hu: "Fehéroroszország", ro: "Belarus", en: "Belarus" },
    capital: "Minsk",
    labelX: 500,
    labelY: 437,
    path: "M43,733 L6,670 L53,535 L88,405 L170,384 L259,321 L274,240 L333,86 L362,5 L521,7 L632,49 L723,40 L797,179 L861,289 L936,384 L923,482 L997,577 L908,685 L863,868 L768,864 L761,734 L675,773 L521,811 L440,852 L314,794 L211,822 Z"
  }
];
