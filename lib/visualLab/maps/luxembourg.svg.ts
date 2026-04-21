export const luxembourgViewBox = "0 0 1000 750";

export const LUXEMBOURG_PROJECTION = {
  minLon: 5.7,
  maxLon: 6.6,
  minLat: 49.4,
  maxLat: 50.2,
  width: 600,
  height: 900,
};

export function projectCoordsLU(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface LuxembourgRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const luxembourgMap: LuxembourgRegionPath[] = [
  {
    id: "LU",
    name: {"de":"Luxemburg","hu":"Luxemburg","ro":"Luxemburg","en":"Luxembourg"},
    capital: "Luxemburg",
    labelX: 376.2,
    labelY: 383.4,
    path: "M374.938,372.215L377.726,377.122L376.938,386.583L372.909,387.037L369.785,385.171L371.298,373.036Z"
  }
];
