// AUTO-GENERATED simplified shape
import type { POI } from "../data/poi";

export const serbiaViewBox = "0 0 1000 1000";

export const RS_PROJECTION = {
  minLon: 18.8,
  maxLon: 23.0,
  minLat: 42.2,
  maxLat: 46.2,
  width: 1000,
  height: 1000,
};

export function projectCoordsRS(lon: number, lat: number): [number, number] {
  const x = (lon - RS_PROJECTION.minLon) * (RS_PROJECTION.width / (RS_PROJECTION.maxLon - RS_PROJECTION.minLon));
  const y = (RS_PROJECTION.maxLat - lat) * (RS_PROJECTION.height / (RS_PROJECTION.maxLat - RS_PROJECTION.minLat));
  return [x, y];
}

export interface SerbiaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const serbiaMap: SerbiaRegionPath[] = [
  {
    id: "RS-MAIN",
    name: { de: "Serbien", hu: "Szerbia", ro: "Serbia", en: "Serbia" },
    capital: "Belgrade",
    labelX: 500,
    labelY: 500,
    // Simplified contour of Serbia
    path: "M400,50 L500,100 L600,80 L700,200 L800,300 L950,450 L900,600 L850,750 L750,900 L650,950 L550,900 L450,950 L350,850 L250,700 L150,600 L100,500 L50,400 L150,300 L250,200 L300,150 Z"
  }
];
