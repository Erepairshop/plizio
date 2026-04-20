export const luxembourgViewBox = "0 0 600 900";

export const LUXEMBOURG_PROJECTION = {
  minLon: 5.7,
  maxLon: 6.6,
  minLat: 49.4,
  maxLat: 50.2,
  width: 600,
  height: 900,
};

export function projectCoordsLU(lon: number, lat: number): [number, number] {
  const x = (lon - LUXEMBOURG_PROJECTION.minLon) * (LUXEMBOURG_PROJECTION.width / (LUXEMBOURG_PROJECTION.maxLon - LUXEMBOURG_PROJECTION.minLon));
  const y = (LUXEMBOURG_PROJECTION.maxLat - lat) * (LUXEMBOURG_PROJECTION.height / (LUXEMBOURG_PROJECTION.maxLat - LUXEMBOURG_PROJECTION.minLat));
  return [x, y];
}

export interface LuxembourgRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const luxembourgMap: LuxembourgRegionPath[] = [];
