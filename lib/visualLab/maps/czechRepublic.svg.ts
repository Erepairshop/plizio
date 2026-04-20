export const czechRepublicViewBox = "0 0 1000 600";

export const CZECH_REPUBLIC_PROJECTION = {
  minLon: 12.1,
  maxLon: 18.9,
  minLat: 48.5,
  maxLat: 51.1,
  width: 1000,
  height: 600,
};

export function projectCoordsCZ(lon: number, lat: number): [number, number] {
  const x = (lon - CZECH_REPUBLIC_PROJECTION.minLon) * (CZECH_REPUBLIC_PROJECTION.width / (CZECH_REPUBLIC_PROJECTION.maxLon - CZECH_REPUBLIC_PROJECTION.minLon));
  const y = (CZECH_REPUBLIC_PROJECTION.maxLat - lat) * (CZECH_REPUBLIC_PROJECTION.height / (CZECH_REPUBLIC_PROJECTION.maxLat - CZECH_REPUBLIC_PROJECTION.minLat));
  return [x, y];
}

export interface CzechRepublicRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const czechRepublicMap: CzechRepublicRegionPath[] = [];
