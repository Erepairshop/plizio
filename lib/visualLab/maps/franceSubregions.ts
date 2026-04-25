// France departement subregions module
// Mirrors the bundeslandSubregions.ts API for InteractiveMap compatibility.
// Wraps franceAdmin2 data with a typed export.

import {
  franceAdmin2,
  type DepartementDetail,
  type DepartementSubRegion,
  type DepartementProjection,
  projectInDepartement,
  getDepartmentForCoords,
} from "./franceAdmin2.svg";

export type { DepartementDetail, DepartementSubRegion, DepartementProjection };
export { projectInDepartement, getDepartmentForCoords };

// Re-export as franceSubregions for resolver.ts compatibility
export const franceSubregions: Record<string, DepartementDetail> = franceAdmin2;
