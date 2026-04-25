// Austria — Admin-2 (Bezirke) subregions drill-down
// Wraps atAdmin2Map into the bundeslandSubregions-compatible shape.

import { atAdmin2Map } from "./austriaAdmin2.svg";

// Per-Bundesland projection parameters (fit to 1000x1200 viewBox)
// Bounding boxes derived from real geographic extents of each Bundesland.
const projections: Record<string, { minLon: number; maxLon: number; minLat: number; maxLat: number; latStretch: number; scale: number; offX: number; offY: number }> = {
  "AT-1": { minLon: 16.05, maxLon: 17.17, minLat: 46.75, maxLat: 48.1,  latStretch: 0.72, scale: 770, offX: 40, offY: 60 },
  "AT-2": { minLon: 12.63, maxLon: 15.06, minLat: 46.38, maxLat: 47.07, latStretch: 0.72, scale: 440, offX: 40, offY: 80 },
  "AT-3": { minLon: 14.45, maxLon: 17.2,  minLat: 47.47, maxLat: 49.02, latStretch: 0.68, scale: 640, offX: 40, offY: 60 },
  "AT-4": { minLon: 12.75, maxLon: 15.03, minLat: 47.45, maxLat: 48.78, latStretch: 0.69, scale: 720, offX: 40, offY: 80 },
  "AT-5": { minLon: 12.17, maxLon: 13.99, minLat: 46.96, maxLat: 47.91, latStretch: 0.70, scale: 860, offX: 40, offY: 80 },
  "AT-6": { minLon: 13.56, maxLon: 16.2,  minLat: 46.6,  maxLat: 47.77, latStretch: 0.70, scale: 730, offX: 40, offY: 80 },
  "AT-7": { minLon: 10.12, maxLon: 13.0,  minLat: 46.67, maxLat: 47.74, latStretch: 0.71, scale: 660, offX: 40, offY: 80 },
  "AT-8": { minLon: 9.53,  maxLon: 10.24, minLat: 47.0,  maxLat: 47.6,  latStretch: 0.72, scale: 1400, offX: 60, offY: 80 },
  "AT-9": { minLon: 16.17, maxLon: 16.58, minLat: 48.11, maxLat: 48.33, latStretch: 0.72, scale: 2800, offX: 40, offY: 60 },
};

export const austriaSubregions: Record<string, {
  viewBox: string;
  type: "regierungsbezirk" | "kreis";
  projection: typeof projections[string];
  children: typeof atAdmin2Map[string];
}> = {};

for (const [id, children] of Object.entries(atAdmin2Map)) {
  austriaSubregions[id] = {
    viewBox: "0 0 1000 1200",
    type: "kreis",
    projection: projections[id] ?? {
      minLon: 9.5, maxLon: 17.2, minLat: 46.3, maxLat: 49.1,
      latStretch: 0.70, scale: 450, offX: 40, offY: 80,
    },
    children,
  };
}
