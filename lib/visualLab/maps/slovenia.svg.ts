export const sloveniaViewBox = "0 0 1000 600";

export const SLOVENIA_PROJECTION = {
  minLon: 13.4,
  maxLon: 16.6,
  minLat: 45.4,
  maxLat: 46.9,
  width: 1000,
  height: 600,
};

export function projectCoordsSI(lon: number, lat: number): [number, number] {
  const x = (lon - SLOVENIA_PROJECTION.minLon) * (SLOVENIA_PROJECTION.width / (SLOVENIA_PROJECTION.maxLon - SLOVENIA_PROJECTION.minLon));
  const y = (SLOVENIA_PROJECTION.maxLat - lat) * (SLOVENIA_PROJECTION.height / (SLOVENIA_PROJECTION.maxLat - SLOVENIA_PROJECTION.minLat));
  return [x, y];
}

export interface SloveniaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const sloveniaMap: SloveniaRegionPath[] = [];
