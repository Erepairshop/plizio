import type { POI } from "../data/poi";

export const moldovaViewBox = "0 0 1000 1000";

export const MD_PROJECTION = {
  minLon: 26.5,
  maxLon: 30.2,
  minLat: 45.4,
  maxLat: 48.5,
  width: 1000,
  height: 1000,
};

export function projectCoordsMD(lon: number, lat: number): [number, number] {
  const x = (lon - MD_PROJECTION.minLon) * (MD_PROJECTION.width / (MD_PROJECTION.maxLon - MD_PROJECTION.minLon));
  const y = (MD_PROJECTION.maxLat - lat) * (MD_PROJECTION.height / (MD_PROJECTION.maxLat - MD_PROJECTION.minLat));
  return [x, y];
}

export interface MoldovaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const moldovaMap: MoldovaRegionPath[] = [
  {
    id: "MD-ALL",
    name: { de: "Republik Moldau", hu: "Moldova", ro: "Moldova", en: "Moldova" },
    capital: "Chișinău",
    labelX: 500,
    labelY: 500,
    // Simplified outline of Moldova
    path: "M270,32 L350,64 L945,483 L972,644 L459,966 L405,805 L135,483 L81,161 Z"
  }
];
