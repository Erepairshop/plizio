export const portugalViewBox = "154.04 523.04 50.82 114.43";

export const PORTUGAL_PROJECTION = {
  minLon: -9.6,
  maxLon: -6.1,
  minLat: 36.9,
  maxLat: 42.2,
  width: 1000,
  height: 1300,
};

export function projectCoordsPT(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface PortugalRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

// TODO (reggel): path-ok generálása countries.geojson-ból
export const portugalMap: PortugalRegionPath[] = [
  {
    id: "PT",
    name: {"de":"Portugal","hu":"Portugália","ro":"Portugalia","en":"Portugal"},
    capital: "Lissabon",
    labelX: 163,
    labelY: 596.3,
    path: "M164.411,538.455L169.477,533.679L175.175,530.931L178.675,540.135L186.923,540.113L189.313,537.746L197.449,538.402L201.352,547.772L194.901,552.799L194.721,567.173L192.453,569.851L191.892,578.459L185.86,579.952L191.453,590.774L187.599,602.529L192.413,607.813L190.497,612.626L185.323,619.236L186.487,625.045L180.875,629.581L173.514,627.125L166.309,629.048L168.442,615.319L167.131,604.43L160.883,602.789L157.544,596.023L158.656,584.251L164.222,577.675L165.213,570.312L168.127,559.277L167.817,551.441L165.025,544.76Z"
  }
];
