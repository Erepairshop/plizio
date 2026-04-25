// Poland Admin-2 (powiaty) drill-down subregions
// Mirrors the bundeslandSubregions.ts / romaniaJudetSubregions.ts pattern
// for InteractiveMap compatibility.
//
// Each voivodeship entry contains:
//   viewBox    – 1000×1200 canvas (same as DE/RO/HU)
//   type       – "powiat" (Poland-specific district type)
//   projection – pass-through (placeholder data uses pre-projected pixel coords)
//   children   – list of powiaty with id, name, labelX/Y, path

import { plAdmin2Map } from "./polandAdmin2.svg";

export interface PoiatSubregionFlat {
  id: string;
  name: string;
  labelX: number;
  labelY: number;
  path: string;
}

export interface VoivodeshipDetail {
  viewBox: string;
  type: "powiat";
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
  children: PoiatSubregionFlat[];
}

export const polandSubregions: Record<string, VoivodeshipDetail> = {};

// Build subregion entries from plAdmin2Map, flattening multilingual names to English
for (const [voivId, powiaty] of Object.entries(plAdmin2Map)) {
  polandSubregions[voivId] = {
    viewBox: "0 0 1000 1200",
    type: "powiat",
    // Pass-through projection — placeholder paths already use pixel coordinates
    projection: {
      minLon: 14.0,
      maxLon: 24.15,
      minLat: 49.0,
      maxLat: 54.9,
      latStretch: 0.63,
      scale: 170,
      offX: 40,
      offY: 40,
    },
    children: powiaty.map((p) => ({
      id: p.id,
      name: p.name.en,
      labelX: p.labelX,
      labelY: p.labelY,
      path: p.path,
    })),
  };
}
