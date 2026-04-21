export const irelandViewBox = "0 0 1000 750";

export const IRELAND_PROJECTION = {
  minLon: -10.6,   // Ireland west
  maxLon: -5.3,
  minLat: 51.3,
  maxLat: 55.5,
  width: 1000,
  height: 1100,
};

export function projectCoordsIE(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface IrelandRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

// TODO (reggel): régió path-ok countries.geojson-ból generálva
export const irelandMap: IrelandRegionPath[] = [
  {
    id: "IE",
    name: {"de":"Irland","hu":"Írország","ro":"Irlanda","en":"Ireland"},
    capital: "Dublin",
    labelX: 203.2,
    labelY: 299.5,
    path: "M204.022,287.346L206.324,304.12L195.77,324.701L171.018,338.09L151.254,334.681L162.575,310.816L155.283,287.019L174.28,268.292L184.833,256.95L187.711,269.948L184.833,282.78L193.468,282.452Z"
  }
];
