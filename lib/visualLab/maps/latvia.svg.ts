export const latviaViewBox = "0 0 1000 700";

export const LATVIA_PROJECTION = {
  minLon: 20.9,
  maxLon: 28.2,
  minLat: 55.6,
  maxLat: 58.1,
  width: 1000,
  height: 700,
};

export function projectCoordsLV(lon: number, lat: number): [number, number] {
  const x = (lon - LATVIA_PROJECTION.minLon) * (LATVIA_PROJECTION.width / (LATVIA_PROJECTION.maxLon - LATVIA_PROJECTION.minLon));
  const y = (LATVIA_PROJECTION.maxLat - lat) * (LATVIA_PROJECTION.height / (LATVIA_PROJECTION.maxLat - LATVIA_PROJECTION.minLat));
  return [x, y];
}

export interface LatviaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const latviaMap: LatviaRegionPath[] = [];
