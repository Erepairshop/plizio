export const greeceViewBox = "0 0 1000 900";

export const GREECE_PROJECTION = {
  minLon: 19.3,   // Greece west
  maxLon: 28.3,
  minLat: 34.8,
  maxLat: 41.8,
  width: 1000,
  height: 900,
};

export function projectCoordsGR(lon: number, lat: number): [number, number] {
  const x = (lon - GREECE_PROJECTION.minLon) * (GREECE_PROJECTION.width / (GREECE_PROJECTION.maxLon - GREECE_PROJECTION.minLon));
  const y = (GREECE_PROJECTION.maxLat - lat) * (GREECE_PROJECTION.height / (GREECE_PROJECTION.maxLat - GREECE_PROJECTION.minLat));
  return [x, y];
}

export interface GreeceRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

// TODO (reggel): régió path-ok countries.geojson-ból generálva
export const greeceMap: GreeceRegionPath[] = [];
