export const sloveniaViewBox = "478.62 439 46.43 32.74";

export const SLOVENIA_PROJECTION = {
  minLon: 13.4,
  maxLon: 16.6,
  minLat: 45.4,
  maxLat: 46.9,
  width: 1000,
  height: 600,
};

export function projectCoordsSI(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface SloveniaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const sloveniaMap: SloveniaRegionPath[] = [
  {
    id: "SI",
    name: { de: "", hu: "", ro: "", en: "" },
    capital: "Ljubljana",
    labelX: -9999,
    labelY: -9999,
    path: "M483.335,448.242L494.868,449.813L501.914,445.206L514.125,444.7L516.787,441.259L519.136,441.485L521.849,448.354L510.734,453.73L509.376,461.855L504.523,463.904L504.575,469.481L499.096,469.095L494.347,465.84L491.79,469.205L482.059,468.525L485.167,466.717L481.822,458.189Z"
  }
];
