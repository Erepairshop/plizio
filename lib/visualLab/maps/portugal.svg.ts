export const portugalViewBox = "0 0 1000 1300";

export const PORTUGAL_PROJECTION = {
  minLon: -9.6,
  maxLon: -6.1,
  minLat: 36.9,
  maxLat: 42.2,
  width: 1000,
  height: 1300,
};

export function projectCoordsPT(lon: number, lat: number): [number, number] {
  const x = (lon - PORTUGAL_PROJECTION.minLon) * (PORTUGAL_PROJECTION.width / (PORTUGAL_PROJECTION.maxLon - PORTUGAL_PROJECTION.minLon));
  const y = (PORTUGAL_PROJECTION.maxLat - lat) * (PORTUGAL_PROJECTION.height / (PORTUGAL_PROJECTION.maxLat - PORTUGAL_PROJECTION.minLat));
  return [x, y];
}

export interface PortugalRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

// TODO (reggel): path-ok generálása countries.geojson-ból
export const portugalMap: PortugalRegionPath[] = [];
