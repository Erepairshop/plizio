export const czechRepublicViewBox = "454.08 346 107.11 64.36";

export const CZECH_REPUBLIC_PROJECTION = {
  minLon: 12.1,
  maxLon: 18.9,
  minLat: 48.5,
  maxLat: 51.1,
  width: 1000,
  height: 600,
};

export function projectCoordsCZ(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface CzechRepublicRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const czechRepublicMap: CzechRepublicRegionPath[] = [
  {
    id: "CZ",
    name: {"de":"Tschechien","hu":"Csehország","ro":"Cehia","en":"Czechia"},
    capital: "Prag",
    labelX: 492.2,
    labelY: 373.4,
    path: "M527.371,405.043L520.934,401.049L514.377,402.149L503.538,395.668L498.624,397.258L490.769,405.923L480.396,399.111L472.512,389.945L465.387,384.785L463.909,375.671L461.465,369.198L471.612,364.431L476.796,358.95L486.822,354.668L490.324,350.443L494.006,352.996L500.237,350.678L506.855,357.813L517.294,359.732L516.424,365.779L524.008,370.303L526.093,364.653L535.668,367.104L536.993,373.934L547.374,375.247L553.8,385.886L549.637,385.912L547.473,389.775L544.269,390.706L543.354,395.564L540.68,396.575L540.303,398.553L535.535,400.748L529.349,400.388Z"
  }
];
