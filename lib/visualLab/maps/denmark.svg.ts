export const denmarkViewBox = "0 0 1000 750";

export const DENMARK_PROJECTION = {
  minLon: 8.0,
  maxLon: 12.7,
  minLat: 54.5,
  maxLat: 57.8,
  width: 1000,
  height: 900,
};

export function projectCoordsDK(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface DenmarkRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const denmarkMap: DenmarkRegionPath[] = [
  {
    id: "DK",
    name: {"de":"Dänemark","hu":"Dánia","ro":"Danemarca","en":"Denmark"},
    capital: "Kopenhagen",
    labelX: 466,
    labelY: 243.6,
    path: "M467.746,245.196L459.369,265.015L444.757,251.236L442.808,240.985L463.291,232.72ZM442.923,223.986L439.511,233.472L435.353,230.75L425.3,248.65L429.096,260.57L420.162,264.268L409.609,261.065L403.941,247.474L403.518,221.927L405.844,215.066L409.849,207.382L422.151,205.785L427.053,198.653L438.285,191.305L437.812,204.66L433.677,213.022L435.353,220.153Z"
  }
];
