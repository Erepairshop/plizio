export const estoniaViewBox = "611.09 136.2 77.61 66.34";

export const ESTONIA_PROJECTION = {
  minLon: 21.7,
  maxLon: 28.2,
  minLat: 57.5,
  maxLat: 59.7,
  width: 1000,
  height: 800,
};

export function projectCoordsEE(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface EstoniaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const estoniaMap: EstoniaRegionPath[] = [
  {
    id: "EE",
    name: { de: "", hu: "", ro: "", en: "" },
    capital: "Tallinn",
    labelX: -9999,
    labelY: -9999,
    path: "M630.032,189.645L631.653,174.061L626.518,177.412L617.657,167.933L616.446,152.403L634.1,144.777L651.693,140.777L666.841,145.328L681.251,144.515L683.353,149.302L673.418,164.93L677.558,189.685L671.575,197.963L660.061,197.915L648.043,188.227L641.925,185.004Z"
  }
];
