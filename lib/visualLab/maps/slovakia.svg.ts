export const slovakiaViewBox = "0 0 1000 500";

export const SLOVAKIA_PROJECTION = {
  minLon: 16.8,
  maxLon: 22.6,
  minLat: 47.7,
  maxLat: 49.6,
  width: 1000,
  height: 500,
};

export function projectCoordsSK(lon: number, lat: number): [number, number] {
  const x = (lon - SLOVAKIA_PROJECTION.minLon) * (SLOVAKIA_PROJECTION.width / (SLOVAKIA_PROJECTION.maxLon - SLOVAKIA_PROJECTION.minLon));
  const y = (SLOVAKIA_PROJECTION.maxLat - lat) * (SLOVAKIA_PROJECTION.height / (SLOVAKIA_PROJECTION.maxLat - SLOVAKIA_PROJECTION.minLat));
  return [x, y];
}

export interface SlovakiaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const slovakiaMap: SlovakiaRegionPath[] = [];
