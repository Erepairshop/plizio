export const belgiumViewBox = "0 0 1000 750";

export const BELGIUM_PROJECTION = {
  minLon: 2.5,   // Belgium west boundary
  maxLon: 6.5,
  minLat: 49.5,
  maxLat: 51.6,
  width: 1000,
  height: 800,
};

export function projectCoordsBE(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
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
export const belgiumMap: BelgiumRegionPath[] = [
  {
    id: "BE",
    name: {"de":"Belgien","hu":"Belgium","ro":"Belgia","en":"Belgium"},
    capital: "Brüssel",
    labelX: 351.3,
    labelY: 356.4,
    path: "M336.846,345.347L347.068,347.101L360.011,342.454L368.849,352.22L376.524,357.393L374.938,372.215L371.298,373.036L369.785,385.171L357.57,375.318L350.405,377.007L340.661,366.735L334.169,357.909L327.679,357.545L325.657,349.748Z"
  }
];
