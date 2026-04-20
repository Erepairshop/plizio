export const norwayViewBox = "0 0 1000 2000";

export const NORWAY_PROJECTION = {
  minLon: 4.0,
  maxLon: 31.5,
  minLat: 57.9,
  maxLat: 71.2,
  width: 1000,
  height: 2000,
};

export function projectCoordsNO(lon: number, lat: number): [number, number] {
  const x = (lon - NORWAY_PROJECTION.minLon) * (NORWAY_PROJECTION.width / (NORWAY_PROJECTION.maxLon - NORWAY_PROJECTION.minLon));
  const y = (NORWAY_PROJECTION.maxLat - lat) * (NORWAY_PROJECTION.height / (NORWAY_PROJECTION.maxLat - NORWAY_PROJECTION.minLat));
  return [x, y];
}

export interface NorwayRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const norwayMap: NorwayRegionPath[] = [];
