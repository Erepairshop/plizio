export const montenegroViewBox = "0 0 1000 1000";

export const ME_PROJECTION = {
  minLon: 18.4,
  maxLon: 20.4,
  minLat: 41.8,
  maxLat: 43.6,
  width: 1000,
  height: 1000,
};

export function projectCoordsME(lon: number, lat: number): [number, number] {
  const x = (lon - ME_PROJECTION.minLon) * (ME_PROJECTION.width / (ME_PROJECTION.maxLon - ME_PROJECTION.minLon));
  const y = (ME_PROJECTION.maxLat - lat) * (ME_PROJECTION.height / (ME_PROJECTION.maxLat - ME_PROJECTION.minLat));
  return [x, y];
}

export interface MontenegroRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const montenegroMap: MontenegroRegionPath[] = [
  {
    id: "ME-ALL",
    name: { de: "Montenegro", hu: "Montenegró", ro: "Muntenegru", en: "Montenegro" },
    capital: "Podgorica",
    labelX: 500,
    labelY: 500,
    // Egyszerűsített poligon (kontúr), amíg nincs részletes SVG
    path: "M100,200 L400,50 L800,100 L950,400 L800,800 L400,950 L50,700 Z"
  }
];
