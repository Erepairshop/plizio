export const irelandViewBox = "0 0 1000 1100";

export const IRELAND_PROJECTION = {
  minLon: -10.6,   // Ireland west
  maxLon: -5.3,
  minLat: 51.3,
  maxLat: 55.5,
  width: 1000,
  height: 1100,
};

export function projectCoordsIE(lon: number, lat: number): [number, number] {
  const x = (lon - IRELAND_PROJECTION.minLon) * (IRELAND_PROJECTION.width / (IRELAND_PROJECTION.maxLon - IRELAND_PROJECTION.minLon));
  const y = (IRELAND_PROJECTION.maxLat - lat) * (IRELAND_PROJECTION.height / (IRELAND_PROJECTION.maxLat - IRELAND_PROJECTION.minLat));
  return [x, y];
}

export interface IrelandRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

// TODO (reggel): régió path-ok countries.geojson-ból generálva
export const irelandMap: IrelandRegionPath[] = [];
