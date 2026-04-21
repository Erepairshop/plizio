export const finlandViewBox = "566.68 -239.18 176.07 401.1";

export const FINLAND_PROJECTION = {
  minLon: 19.5,
  maxLon: 31.6,
  minLat: 59.8,
  maxLat: 70.1,
  width: 1000,
  height: 1700,
};

export function projectCoordsFI(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface FinlandRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const finlandMap: FinlandRegionPath[] = [
  {
    id: "FI",
    name: { de: "", hu: "", ro: "", en: "" },
    capital: "Helsinki",
    labelX: -9999,
    labelY: -9999,
    path: "M689.779,-167.436L687.741,-140.503L709.124,-115.632L696.239,-88.324L712.478,-48.656L703.079,-19.923L715.648,4.284L709.94,24.951L730.608,46.176L725.357,61.657L712.387,78.877L682.492,115.811L657.152,118.064L632.598,128.378L609.882,134.26L601.798,118.97L588.275,109.647L591.384,81.08L584.603,54.11L591.26,36.262L603.92,16.604L635.864,-18.396L645.184,-25.306L643.732,-39.45L624.315,-55.529L619.602,-68.994L619.234,-124.423L597.439,-150.108L578.827,-169.058L587.196,-179.464L602.712,-158.764L620.945,-160.681L635.936,-151.362L649.25,-168.505L656.097,-197.683L677.776,-211.515L695.694,-195.306Z"
  }
];
