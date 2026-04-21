export const bulgariaViewBox = "596.15 488.89 100.06 66.18";

export const BULGARIA_PROJECTION = {
  minLon: 22.3,
  maxLon: 28.7,
  minLat: 41.2,
  maxLat: 44.3,
  width: 1000,
  height: 600,
};

export function projectCoordsBG(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface BulgariaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const bulgariaMap: BulgariaRegionPath[] = [
  {
    id: "BG",
    name: {"de":"Bulgarien","hu":"Bulgária","ro":"Bulgaria","en":"Bulgaria"},
    capital: "Sofia",
    labelX: 616.2,
    labelY: 523,
    path: "M606.914,493.455L610.931,501.44L616.341,500.022L627.069,503.04L647.575,504.056L654.499,499.121L670.936,494.603L681.097,501.659L689.307,503.689L682.06,511.664L676.961,525.305L681.468,536.074L669.447,533.552L655.223,539.461L655.071,548.756L642.38,550.51L632.542,544.005L621.364,549.124L611.036,548.587L610.045,536.226L603.052,530.18L605.348,527.513L603.834,525.259L606.183,519.21L611.506,513.236L604.722,504.937L603.469,497.868Z"
  }
];
