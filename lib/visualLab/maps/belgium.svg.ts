export const belgiumViewBox = "0 0 1000 800";

export const BELGIUM_PROJECTION = {
  minLon: 2.5,   // Belgium west boundary
  maxLon: 6.5,
  minLat: 49.5,
  maxLat: 51.6,
  width: 1000,
  height: 800,
};

export function projectCoordsBE(lon: number, lat: number): [number, number] {
  const x = (lon - BELGIUM_PROJECTION.minLon) * (BELGIUM_PROJECTION.width / (BELGIUM_PROJECTION.maxLon - BELGIUM_PROJECTION.minLon));
  const y = (BELGIUM_PROJECTION.maxLat - lat) * (BELGIUM_PROJECTION.height / (BELGIUM_PROJECTION.maxLat - BELGIUM_PROJECTION.minLat));
  return [x, y];
}

export interface BelgiumRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

// TODO (reggel): path-ok generálása countries.geojson-ból (3-as belga régiók: Flandria, Vallónia, Brüsszel)
// Addig ÜRES tömb hogy a bekötés ne törjön
export const belgiumMap: BelgiumRegionPath[] = [];
