export const slovakiaViewBox = "519.91 381.2 91.97 44.47";

export const SLOVAKIA_PROJECTION = {
  minLon: 16.8,
  maxLon: 22.6,
  minLat: 47.7,
  maxLat: 49.6,
  width: 1000,
  height: 500,
};

export function projectCoordsSK(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface SlovakiaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const slovakiaMap: SlovakiaRegionPath[] = [
  {
    id: "SK",
    name: {"de":"Slowakei","hu":"Szlovákia","ro":"Slovacia","en":"Slovakia"},
    capital: "Bratislava",
    labelX: 529.4,
    labelY: 414.5,
    path: "M553.8,385.886L554.588,387.183L560.329,384.265L567.37,391.869L575.619,387.278L582.211,389.48L592.262,386.448L605.532,394.674L601.66,400.21L598.934,408.725L595.955,410.875L581.001,404.476L576.425,405.763L573.151,410.716L566.594,413.335L565.085,411.995L558.285,415.246L552.737,415.865L551.613,420.054L539.893,422.602L534.746,420.335L527.641,414.993L526.25,407.72L527.371,405.043L529.349,400.388L535.535,400.748L540.303,398.553L540.68,396.575L543.354,395.564L544.269,390.706L547.473,389.775L549.637,385.912Z"
  }
];
