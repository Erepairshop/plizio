export const croatiaViewBox = "0 0 1000 800";

export const CROATIA_PROJECTION = {
  minLon: 13.4,
  maxLon: 19.5,
  minLat: 42.4,
  maxLat: 46.6,
  width: 1000,
  height: 800,
};

export function projectCoordsHR(lon: number, lat: number): [number, number] {
  const x = (lon - CROATIA_PROJECTION.minLon) * (CROATIA_PROJECTION.width / (CROATIA_PROJECTION.maxLon - CROATIA_PROJECTION.minLon));
  const y = (CROATIA_PROJECTION.maxLat - lat) * (CROATIA_PROJECTION.height / (CROATIA_PROJECTION.maxLat - CROATIA_PROJECTION.minLat));
  return [x, y];
}

export interface CroatiaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const croatiaMap: CroatiaRegionPath[] = [];
