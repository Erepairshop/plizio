export const sanmarinoViewBox = "0 0 1000 1000";

export const SM_PROJECTION = {
  minLon: 12.41,
  maxLon: 12.53,
  minLat: 43.88,
  maxLat: 43.99
};

export function projectCoordsSM(lon: number, lat: number): [number, number] {
  const { minLon, maxLon, minLat, maxLat } = SM_PROJECTION;
  const x = ((lon - minLon) / (maxLon - minLon)) * 1000;
  const y = ((maxLat - lat) / (maxLat - minLat)) * 1000;
  return [x, y];
}

export const sanmarinoMap = [
  {
    id: "SM",
    d: "M 200 400 L 400 200 L 600 250 L 800 400 L 900 600 L 700 850 L 400 800 L 200 600 Z"
  }
];
