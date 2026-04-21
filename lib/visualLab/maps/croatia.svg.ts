export const croatiaViewBox = "0 0 1000 750";

export const CROATIA_PROJECTION = {
  minLon: 13.4,
  maxLon: 19.5,
  minLat: 42.4,
  maxLat: 46.6,
  width: 1000,
  height: 800,
};

export function projectCoordsHR(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface CroatiaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const croatiaMap: CroatiaRegionPath[] = [
  {
    id: "HR",
    name: {"de":"Kroatien","hu":"Horvátország","ro":"Croația","en":"Croatia"},
    capital: "Zagreb",
    labelX: 513.7,
    labelY: 462.2,
    path: "M553.475,460.356L556.867,468.103L561.303,473.768L555.927,481.204L549.612,476.835L539.958,477.109L527.955,473.822L521.432,474.261L518.405,478.366L513.395,473.822L510.472,482.022L517.309,491.188L520.336,497.224L526.755,504.456L532.077,508.722L537.349,516.729L549.707,523.937L548.171,527.16L535.046,520.134L526.948,513.258L514.177,507.55L502.436,493.294L505.253,491.837L498.887,483.6L498.626,476.945L489.65,473.822L485.371,482.348L481.248,475.741L481.561,468.847L482.059,468.525L491.79,469.205L494.347,465.84L499.096,469.095L504.575,469.481L504.523,463.904L509.376,461.855L510.734,453.73L521.849,448.354L526.285,450.849L536.723,459.495L548.256,463.35Z"
  }
];
