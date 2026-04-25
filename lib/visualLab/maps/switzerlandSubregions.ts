import { chAdmin2Map } from "./switzerlandAdmin2.svg";

// SWITZERLAND — SUBREGIONS (26 Kantone → Bezirke) Admin-2 drill-down
// Mirrors the structure of bundeslandSubregions / hungarySubregions.
// Uses the CH projection bounds from switzerland.svg.ts.

export const switzerlandSubregions: Record<string, any> = {};

for (const [id, children] of Object.entries(chAdmin2Map)) {
  switzerlandSubregions[id] = {
    viewBox: "0 0 1000 641",
    type: "kreis", // Districts / Bezirke
    projection: {
      minLon: 5.95,
      maxLon: 10.47,
      minLat: 45.82,
      maxLat: 47.80,
      latStretch: 1.0,
      scale: 1.0,
      offX: 0,
      offY: 0,
    },
    children,
  };
}
