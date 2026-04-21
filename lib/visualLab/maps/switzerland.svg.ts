export const switzerlandViewBox = "369.71 417.74 71.59 48.61";

export const SWITZERLAND_PROJECTION = {
  minLon: 5.9,
  maxLon: 10.5,
  minLat: 45.8,
  maxLat: 47.8,
  width: 1000,
  height: 700,
};

export function projectCoordsCH(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface SwitzerlandRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const switzerlandMap: SwitzerlandRegionPath[] = [
  {
    id: "CH",
    name: { de: "", hu: "", ro: "", en: "" },
    capital: "Bern",
    labelX: -9999,
    labelY: -9999,
    path: "M424.521,427.438L425.062,431.101L422.926,436.134L429.244,439.863L436.368,440.419L435.261,448.764L429.109,452.179L418.778,449.642L415.754,457.784L409.103,458.423L406.683,455.232L398.855,462.048L392.123,463.001L386.115,458.704L381.319,449.856L374.652,453.025L374.858,443.841L385.07,432.335L384.621,427.092L390.983,428.994L394.816,425.461L406.692,425.606L409.559,421.097Z"
  }
];
