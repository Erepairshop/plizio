export const finlandViewBox = "0 0 1000 1700";

export const FINLAND_PROJECTION = {
  minLon: 19.5,
  maxLon: 31.6,
  minLat: 59.8,
  maxLat: 70.1,
  width: 1000,
  height: 1700,
};

export function projectCoordsFI(lon: number, lat: number): [number, number] {
  const x = (lon - FINLAND_PROJECTION.minLon) * (FINLAND_PROJECTION.width / (FINLAND_PROJECTION.maxLon - FINLAND_PROJECTION.minLon));
  const y = (FINLAND_PROJECTION.maxLat - lat) * (FINLAND_PROJECTION.height / (FINLAND_PROJECTION.maxLat - FINLAND_PROJECTION.minLat));
  return [x, y];
}

export interface FinlandRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const finlandMap: FinlandRegionPath[] = [];
