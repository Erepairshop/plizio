import { BundeslandPath } from "./deutschland.svg";

export const monacoViewBox = "0 0 1000 800";

export const projectCoordsMC = (lon: number, lat: number): [number, number] => {
  const minLon = 7.408;
  const maxLon = 7.450;
  const minLat = 43.723;
  const maxLat = 43.753;

  const x = ((lon - minLon) / (maxLon - minLon)) * 1000;
  const y = (1 - (lat - minLat) / (maxLat - minLat)) * 800;
  return [x, y];
};

export const monacoMap: BundeslandPath[] = [
  {
    id: "MC",
    name: "Monaco",
    // Simplified outline of Monaco
    path: "M435,715 L360,680 L290,620 L230,540 L180,450 L150,350 L160,280 L200,220 L280,160 L380,120 L500,100 L620,110 L740,150 L840,220 L900,320 L920,450 L880,580 L800,680 L700,750 L580,780 Z"
  }
];
