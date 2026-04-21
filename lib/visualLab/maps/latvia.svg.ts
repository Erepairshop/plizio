export const latviaViewBox = "576.6 180.2 115.34 69.68";

export const LATVIA_PROJECTION = {
  minLon: 20.9,
  maxLon: 28.2,
  minLat: 55.6,
  maxLat: 58.1,
  width: 1000,
  height: 700,
};

export function projectCoordsLV(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface LatviaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const latviaMap: LatviaRegionPath[] = [
  {
    id: "LV",
    name: {"de":"Lettland","hu":"Lettország","ro":"Letonia","en":"Latvia"},
    capital: "Riga",
    labelX: 627.1,
    labelY: 211.5,
    path: "M584.555,234.73L585.038,215.731L591.9,199.589L605.06,190.694L616.148,210.047L627.349,209.548L630.032,189.645L641.925,185.004L648.043,188.227L660.061,197.915L671.575,197.963L678.303,203.924L679.494,216.357L683.982,231.274L668.982,240.901L660.491,245.069L647.069,232.998L639.639,231.389L637.681,226.159L623.964,228.648L600.547,227.034Z"
  }
];
