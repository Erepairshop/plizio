export const denmarkViewBox = "0 0 1000 900";

export const DENMARK_PROJECTION = {
  minLon: 8.0,
  maxLon: 12.7,
  minLat: 54.5,
  maxLat: 57.8,
  width: 1000,
  height: 900,
};

export function projectCoordsDK(lon: number, lat: number): [number, number] {
  const x = (lon - DENMARK_PROJECTION.minLon) * (DENMARK_PROJECTION.width / (DENMARK_PROJECTION.maxLon - DENMARK_PROJECTION.minLon));
  const y = (DENMARK_PROJECTION.maxLat - lat) * (DENMARK_PROJECTION.height / (DENMARK_PROJECTION.maxLat - DENMARK_PROJECTION.minLat));
  return [x, y];
}

export interface DenmarkRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const denmarkMap: DenmarkRegionPath[] = [];
