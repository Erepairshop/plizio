export const magyarorszagViewBox = "0 0 500 350";

// Projection params Wikipedia magyar-térkép alapján kalibrálva (Gemini batch b3550a6019)
export const HUNGARY_PROJECTION = {
  minLon: 16.11,
  maxLon: 22.90,
  minLat: 45.74,
  maxLat: 48.58,
  latStretch: 0.68,
  scale: 130,
  offX: 0,
  offY: 0,
};

export function projectCoordsHU(lon: number, lat: number): [number, number] {
  const p = HUNGARY_PROJECTION;
  const x = p.offX + (lon - p.minLon) * p.latStretch * p.scale;
  const y = p.offY + (p.maxLat - lat) * p.scale;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

export const magyarorszagMap = [
  { id: "HU-BU", name: "Budapest", path: "M 245,155 L 255,155 L 255,165 L 245,165 Z" },
  { id: "HU-PE", name: "Pest", path: "M 220,100 L 280,100 L 320,200 L 260,250 L 200,200 Z" },
  { id: "HU-BE", name: "Békés", path: "M 420,220 L 520,220 L 540,300 L 460,340 L 400,280 Z" },
  { id: "HU-HE", name: "Heves", path: "M 320,80 L 400,80 L 420,150 L 340,180 Z" },
  { id: "HU-TO", name: "Tolna", path: "M 180,260 L 240,250 L 260,320 L 200,340 Z" },
  { id: "HU-VE", name: "Veszprém", path: "M 120,150 L 200,160 L 180,240 L 100,220 Z" }
  // Additional counties could be added here
];
