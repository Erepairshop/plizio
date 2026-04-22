// AUTO-GENERATED simplified SVG for Liechtenstein
export const liechtensteinViewBox = "0 0 400 400";

export const LI_PROJECTION = {
  minLon: 9.46,
  maxLon: 9.64,
  minLat: 47.04,
  maxLat: 47.28,
  width: 400,
  height: 400,
};

export function projectCoordsLI(lon: number, lat: number): [number, number] {
  const x = (lon - LI_PROJECTION.minLon) * (LI_PROJECTION.width / (LI_PROJECTION.maxLon - LI_PROJECTION.minLon));
  const y = (LI_PROJECTION.maxLat - lat) * (LI_PROJECTION.height / (LI_PROJECTION.maxLat - LI_PROJECTION.minLat));
  return [x, y];
}

export interface LiechtensteinRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const liechtensteinMap: LiechtensteinRegionPath[] = [
  {
    id: "LI-ALL",
    name: { de: "Liechtenstein", hu: "Liechtenstein", ro: "Liechtenstein", en: "Liechtenstein" },
    capital: "Vaduz",
    labelX: 200,
    labelY: 200,
    // Simplified outline roughly representing Liechtenstein's shape (narrow along the Rhine, wider in the south)
    path: "M100,50 L180,20 L250,50 L320,120 L350,200 L380,300 L250,380 L150,360 L120,250 L80,150 Z"
  }
];
