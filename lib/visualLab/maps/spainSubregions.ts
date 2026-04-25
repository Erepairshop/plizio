// Spain Admin-2 subregions — mirrors bundeslandSubregions API
// 17 autonomous communities → 50 provinces
// Placeholder projection (uniform viewBox); replace paths from real GeoJSON
// when internet access is available.

import { spainAdmin2Map } from "./spainAdmin2.svg";

export interface SpainProvinceDetail {
  viewBox: string;
  type: "provincia";
  projection: {
    minLon: number;
    maxLon: number;
    minLat: number;
    maxLat: number;
    latStretch: number;
    scale: number;
    offX: number;
    offY: number;
  };
  children: Array<{
    id: string;
    name: { de: string; hu: string; ro: string; en: string };
    labelX: number;
    labelY: number;
    path: string;
  }>;
}

// Approximate bounding boxes per autonomous community for the projection header.
const ccaaBounds: Record<string, { minLon: number; maxLon: number; minLat: number; maxLat: number }> = {
  "ES-AN": { minLon: -7.5, maxLon: -1.6, minLat: 36.0, maxLat: 38.8 },
  "ES-AR": { minLon: -2.2, maxLon:  0.7, minLat: 39.7, maxLat: 42.9 },
  "ES-AS": { minLon: -7.1, maxLon: -4.5, minLat: 43.0, maxLat: 43.7 },
  "ES-IB": { minLon:  1.0, maxLon:  4.4, minLat: 38.6, maxLat: 40.1 },
  "ES-CN": { minLon:-18.2, maxLon:-13.4, minLat: 27.6, maxLat: 29.4 },
  "ES-CB": { minLon: -4.9, maxLon: -3.0, minLat: 42.8, maxLat: 43.6 },
  "ES-CM": { minLon: -5.4, maxLon: -1.1, minLat: 38.1, maxLat: 41.4 },
  "ES-CL": { minLon: -7.0, maxLon: -2.0, minLat: 39.9, maxLat: 43.2 },
  "ES-CT": { minLon:  0.1, maxLon:  3.3, minLat: 40.5, maxLat: 42.9 },
  "ES-EX": { minLon: -7.5, maxLon: -4.7, minLat: 37.9, maxLat: 40.5 },
  "ES-GA": { minLon: -9.3, maxLon: -6.7, minLat: 41.8, maxLat: 43.8 },
  "ES-RI": { minLon: -3.1, maxLon: -1.6, minLat: 41.9, maxLat: 42.7 },
  "ES-MD": { minLon: -4.6, maxLon: -3.0, minLat: 40.0, maxLat: 41.2 },
  "ES-MU": { minLon: -2.3, maxLon: -0.6, minLat: 37.4, maxLat: 38.8 },
  "ES-NC": { minLon: -2.5, maxLon: -0.7, minLat: 41.9, maxLat: 43.5 },
  "ES-PV": { minLon: -3.5, maxLon: -1.7, minLat: 42.4, maxLat: 43.5 },
  "ES-VC": { minLon: -1.5, maxLon:  0.5, minLat: 37.8, maxLat: 40.8 },
};

export const spainSubregions: Record<string, SpainProvinceDetail> = {};

for (const [ccaaId, provinces] of Object.entries(spainAdmin2Map)) {
  const bounds = ccaaBounds[ccaaId] ?? {
    minLon: -9.5, maxLon: 4.5, minLat: 35.5, maxLat: 44.5,
  };

  spainSubregions[ccaaId] = {
    viewBox: "0 0 1000 1200",
    type: "provincia",
    projection: {
      minLon: bounds.minLon,
      maxLon: bounds.maxLon,
      minLat: bounds.minLat,
      maxLat: bounds.maxLat,
      latStretch: 1.0,
      scale: 1.0,
      offX: 40,
      offY: 40,
    },
    children: provinces.map((p) => ({
      id: p.id,
      name: p.name,
      labelX: p.labelX,
      labelY: p.labelY,
      path: p.path,
    })),
  };
}
