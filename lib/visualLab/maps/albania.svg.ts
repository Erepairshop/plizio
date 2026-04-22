export const albaniaViewBox = "0 0 1000 1000";

// Rough bounds for Albania
export const AL_PROJECTION = {
  minLon: 19.2,
  maxLon: 21.1,
  minLat: 39.6,
  maxLat: 42.7,
  width: 1000,
  height: 1000,
};

export function projectCoordsAL(lon: number, lat: number): [number, number] {
  const x = (lon - AL_PROJECTION.minLon) * (AL_PROJECTION.width / (AL_PROJECTION.maxLon - AL_PROJECTION.minLon));
  const y = (AL_PROJECTION.maxLat - lat) * (AL_PROJECTION.height / (AL_PROJECTION.maxLat - AL_PROJECTION.minLat));
  return [x, y];
}

export interface AlbaniaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const albaniaMap: AlbaniaRegionPath[] = [
  {
    id: "AL-MAIN",
    name: { de: "Albanien", hu: "Albánia", ro: "Albania", en: "Albania" },
    capital: "Tirana",
    labelX: 500,
    labelY: 500,
    path: "M 200 100 L 600 100 L 800 400 L 700 800 L 500 950 L 300 700 L 200 400 Z"
  }
];
