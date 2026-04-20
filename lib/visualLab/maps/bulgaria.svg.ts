export const bulgariaViewBox = "0 0 1000 600";

export const BULGARIA_PROJECTION = {
  minLon: 22.3,
  maxLon: 28.7,
  minLat: 41.2,
  maxLat: 44.3,
  width: 1000,
  height: 600,
};

export function projectCoordsBG(lon: number, lat: number): [number, number] {
  const x = (lon - BULGARIA_PROJECTION.minLon) * (BULGARIA_PROJECTION.width / (BULGARIA_PROJECTION.maxLon - BULGARIA_PROJECTION.minLon));
  const y = (BULGARIA_PROJECTION.maxLat - lat) * (BULGARIA_PROJECTION.height / (BULGARIA_PROJECTION.maxLat - BULGARIA_PROJECTION.minLat));
  return [x, y];
}

export interface BulgariaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const bulgariaMap: BulgariaRegionPath[] = [];
