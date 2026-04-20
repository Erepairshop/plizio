export const switzerlandViewBox = "0 0 1000 700";

export const SWITZERLAND_PROJECTION = {
  minLon: 5.9,
  maxLon: 10.5,
  minLat: 45.8,
  maxLat: 47.8,
  width: 1000,
  height: 700,
};

export function projectCoordsCH(lon: number, lat: number): [number, number] {
  const x = (lon - SWITZERLAND_PROJECTION.minLon) * (SWITZERLAND_PROJECTION.width / (SWITZERLAND_PROJECTION.maxLon - SWITZERLAND_PROJECTION.minLon));
  const y = (SWITZERLAND_PROJECTION.maxLat - lat) * (SWITZERLAND_PROJECTION.height / (SWITZERLAND_PROJECTION.maxLat - SWITZERLAND_PROJECTION.minLat));
  return [x, y];
}

export interface SwitzerlandRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const switzerlandMap: SwitzerlandRegionPath[] = [];
