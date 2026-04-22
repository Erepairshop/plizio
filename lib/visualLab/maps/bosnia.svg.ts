// AUTO-GENERATED from ne_50m_admin_1_states_provinces.geojson or simplified
import type { POI } from "../data/poi";

export const bosniaViewBox = "0 0 1000 1000";

export const BA_PROJECTION = {
  minLon: 15.7,
  maxLon: 19.7,
  minLat: 42.5,
  maxLat: 45.3,
  width: 1000,
  height: 1000,
};

export function projectCoordsBA(lon: number, lat: number): [number, number] {
  const x = (lon - BA_PROJECTION.minLon) * (BA_PROJECTION.width / (BA_PROJECTION.maxLon - BA_PROJECTION.minLon));
  const y = (BA_PROJECTION.maxLat - lat) * (BA_PROJECTION.height / (BA_PROJECTION.maxLat - BA_PROJECTION.minLat));
  return [x, y];
}

export interface BosniaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const bosniaMap: BosniaRegionPath[] = [
  {
    id: "BA-ALL",
    name: { de: "Bosnien und Herzegowina", hu: "Bosznia-Hercegovina", ro: "Bosnia și Herțegovina", en: "Bosnia and Herzegovina" },
    capital: "Sarajevo",
    labelX: 500,
    labelY: 500,
    path: "M 150 200 L 700 250 L 900 600 L 500 900 L 200 650 Z" // Simplified placeholder polygon
  }
];
