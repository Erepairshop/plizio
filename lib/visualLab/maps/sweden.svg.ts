export const swedenViewBox = "0 0 1000 2200";

export const SWEDEN_PROJECTION = {
  minLon: 11.0,
  maxLon: 24.2,
  minLat: 55.3,
  maxLat: 69.1,
  width: 1000,
  height: 2200,
};

export function projectCoordsSE(lon: number, lat: number): [number, number] {
  const x = (lon - SWEDEN_PROJECTION.minLon) * (SWEDEN_PROJECTION.width / (SWEDEN_PROJECTION.maxLon - SWEDEN_PROJECTION.minLon));
  const y = (SWEDEN_PROJECTION.maxLat - lat) * (SWEDEN_PROJECTION.height / (SWEDEN_PROJECTION.maxLat - SWEDEN_PROJECTION.minLat));
  return [x, y];
}

export interface SwedenRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const swedenMap: SwedenRegionPath[] = [];
