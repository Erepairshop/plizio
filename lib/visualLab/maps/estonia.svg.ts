export const estoniaViewBox = "0 0 1000 800";

export const ESTONIA_PROJECTION = {
  minLon: 21.7,
  maxLon: 28.2,
  minLat: 57.5,
  maxLat: 59.7,
  width: 1000,
  height: 800,
};

export function projectCoordsEE(lon: number, lat: number): [number, number] {
  const x = (lon - ESTONIA_PROJECTION.minLon) * (ESTONIA_PROJECTION.width / (ESTONIA_PROJECTION.maxLon - ESTONIA_PROJECTION.minLon));
  const y = (ESTONIA_PROJECTION.maxLat - lat) * (ESTONIA_PROJECTION.height / (ESTONIA_PROJECTION.maxLat - ESTONIA_PROJECTION.minLat));
  return [x, y];
}

export interface EstoniaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const estoniaMap: EstoniaRegionPath[] = [];
