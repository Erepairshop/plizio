export const cyprusViewBox = "0 0 1000 600";

export const CY_PROJECTION = {
  minLon: 32.0,
  maxLon: 34.8,
  minLat: 34.5,
  maxLat: 35.8,
  width: 1000,
  height: 600,
};

export function projectCoordsCY(lon: number, lat: number): [number, number] {
  const x = (lon - CY_PROJECTION.minLon) * (CY_PROJECTION.width / (CY_PROJECTION.maxLon - CY_PROJECTION.minLon));
  const y = (CY_PROJECTION.maxLat - lat) * (CY_PROJECTION.height / (CY_PROJECTION.maxLat - CY_PROJECTION.minLat));
  return [x, y];
}

export interface CyprusRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const cyprusMap: CyprusRegionPath[] = [
  {
    id: "CY-ALL",
    name: { de: "Zypern", hu: "Ciprus", ro: "Cipru", en: "Cyprus" },
    capital: "Nikosia",
    labelX: 500,
    labelY: 300,
    path: "M150,300 Q 250,150 450,200 T 750,180 Q 950,250 850,350 T 450,450 Q 200,400 150,300 Z"
  }
];
