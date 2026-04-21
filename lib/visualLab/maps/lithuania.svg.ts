export const lithuaniaViewBox = "0 0 1000 750";

export const LITHUANIA_PROJECTION = {
  minLon: 20.9,
  maxLon: 26.8,
  minLat: 53.9,
  maxLat: 56.5,
  width: 1000,
  height: 700,
};

export function projectCoordsLT(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface LithuaniaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const lithuaniaMap: LithuaniaRegionPath[] = [
  {
    id: "LT",
    name: {"de":"Litauen","hu":"Litvánia","ro":"Lituania","en":"Lithuania"},
    capital: "Vilnius",
    labelX: 643.5,
    labelY: 267.7,
    path: "M607.947,276.393L606.829,270.264L608.319,263.644L602.147,259.786L587.524,255.511L584.555,234.73L600.547,227.034L623.964,228.648L637.681,226.159L639.639,231.389L647.069,232.998L660.491,245.069L661.803,256.081L650.356,263.877L647.115,277.473L631.956,286.442L618.461,286.281L615.108,278.951Z"
  }
];
