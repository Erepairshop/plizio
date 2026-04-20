export const lithuaniaViewBox = "0 0 1000 700";

export const LITHUANIA_PROJECTION = {
  minLon: 20.9,
  maxLon: 26.8,
  minLat: 53.9,
  maxLat: 56.5,
  width: 1000,
  height: 700,
};

export function projectCoordsLT(lon: number, lat: number): [number, number] {
  const x = (lon - LITHUANIA_PROJECTION.minLon) * (LITHUANIA_PROJECTION.width / (LITHUANIA_PROJECTION.maxLon - LITHUANIA_PROJECTION.minLon));
  const y = (LITHUANIA_PROJECTION.maxLat - lat) * (LITHUANIA_PROJECTION.height / (LITHUANIA_PROJECTION.maxLat - LITHUANIA_PROJECTION.minLat));
  return [x, y];
}

export interface LithuaniaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const lithuaniaMap: LithuaniaRegionPath[] = [];
