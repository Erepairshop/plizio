// Italy subregions — mirrors bundeslandSubregions API for InteractiveMap compatibility
// Wraps italyAdmin2.svg.ts and exposes a Record<string, BundeslandDetail-compatible> shape.
// Also provides POI → province mapping via lat/lon point-in-bbox helper.

import {
  italyAdmin2,
  type ItalyRegionDetail,
  type ItalyRegionProjection,
  type ItalyProvinceSubRegion,
  projectInItalyRegion,
} from "./italyAdmin2.svg";

// Re-export types for consumers
export type { ItalyRegionDetail, ItalyRegionProjection, ItalyProvinceSubRegion };
export { projectInItalyRegion };

/**
 * italySubregions — drop-in replacement for bundeslandSubregions.
 * Key: ISO 3166-2 region code ("IT-25", "IT-52", …)
 * Value: { viewBox, type, projection, children[] }
 */
export const italySubregions: Record<string, ItalyRegionDetail> = italyAdmin2;

// ─── Province bounding-box registry ──────────────────────────────────────
// Used by poiToProvince() to map a lat/lon POI to its province code.
// Entries: [lonMin, lonMax, latMin, latMax]
const provinceBBox: Record<string, [number, number, number, number]> = {
  // Valle d'Aosta
  "IT-AO": [6.85, 7.95, 45.45, 45.9],
  // Piedmont
  "IT-AL": [8.1, 9.22, 44.55, 45.05],
  "IT-AT": [7.9, 8.5,  44.6,  45.05],
  "IT-BI": [7.9, 8.35, 45.5,  45.85],
  "IT-CN": [6.63, 8.0, 44.06, 44.7],
  "IT-NO": [8.2, 8.8,  45.3,  45.75],
  "IT-TO": [6.63, 8.1, 44.6,  45.5],
  "IT-VB": [7.9, 8.75, 45.8,  46.47],
  "IT-VC": [8.0, 8.75, 45.05, 45.65],
  // Lombardy
  "IT-BG": [9.5, 10.2, 45.5,  46.1],
  "IT-BS": [10.0, 10.8, 45.3, 46.2],
  "IT-CO": [9.0, 9.5,  45.75, 46.2],
  "IT-CR": [9.7, 10.5, 45.0,  45.5],
  "IT-LC": [9.2, 9.6,  45.8,  46.1],
  "IT-LO": [9.3, 9.75, 45.1,  45.4],
  "IT-MB": [9.15, 9.55, 45.55, 45.75],
  "IT-MI": [8.9, 9.45, 45.3,  45.65],
  "IT-MN": [10.4, 11.35, 44.9, 45.35],
  "IT-PV": [8.5, 9.35, 44.68, 45.3],
  "IT-SO": [9.4, 10.75, 46.0, 46.65],
  "IT-VA": [8.5, 9.1,  45.65, 46.1],
  // Liguria
  "IT-GE": [8.55, 9.55, 44.15, 44.6],
  "IT-IM": [7.5, 8.3,  43.78, 44.2],
  "IT-SP": [9.55, 10.05, 44.05, 44.4],
  "IT-SV": [8.05, 8.7, 44.0,  44.5],
  // Trentino-South Tyrol
  "IT-BZ": [10.45, 12.05, 46.35, 47.1],
  "IT-TN": [10.45, 12.45, 45.67, 46.5],
  // Veneto
  "IT-BL": [11.7, 12.6, 46.0,  46.65],
  "IT-PD": [11.55, 12.1, 45.1, 45.55],
  "IT-RO": [11.5, 12.35, 44.8, 45.15],
  "IT-TV": [11.9, 12.55, 45.5, 46.0],
  "IT-VE": [12.1, 13.1, 45.2,  45.65],
  "IT-VI": [11.1, 11.95, 45.3, 45.9],
  "IT-VR": [10.7, 11.5, 45.1,  45.75],
  // Friuli-Venezia Giulia
  "IT-GO": [13.4, 13.75, 45.8, 46.0],
  "IT-PN": [12.3, 12.95, 45.8, 46.45],
  "IT-TS": [13.65, 13.9, 45.6, 45.8],
  "IT-UD": [12.6, 13.6, 46.0,  46.65],
  // Emilia-Romagna
  "IT-BO": [10.8, 11.6, 44.15, 44.6],
  "IT-FE": [11.3, 12.05, 44.55, 45.0],
  "IT-FC": [11.7, 12.4, 43.9,  44.3],
  "IT-MO": [10.5, 11.2, 44.2,  44.75],
  "IT-PR": [9.8, 10.65, 44.3,  44.9],
  "IT-PC": [9.2, 10.05, 44.55, 45.08],
  "IT-RA": [11.75, 12.5, 44.25, 44.6],
  "IT-RE": [10.3, 10.85, 44.3, 44.85],
  "IT-RN": [12.3, 12.8, 43.75, 44.2],
  // Tuscany
  "IT-AR": [11.4, 12.37, 43.2,  43.9],
  "IT-FI": [10.9, 11.9, 43.5,  44.2],
  "IT-GR": [10.7, 11.85, 42.37, 43.2],
  "IT-LI": [9.68, 10.75, 42.8, 43.85],
  "IT-LU": [10.2, 10.85, 43.75, 44.3],
  "IT-MS": [9.88, 10.35, 44.0, 44.47],
  "IT-PI": [10.05, 10.85, 43.4, 43.9],
  "IT-PT": [10.65, 11.2, 43.8,  44.2],
  "IT-PO": [11.0, 11.35, 43.8,  44.1],
  "IT-SI": [10.9, 12.05, 42.9,  43.7],
  // Umbria
  "IT-PG": [11.9, 13.0, 42.7,  43.62],
  "IT-TR": [12.15, 13.25, 42.36, 42.85],
  // Marche
  "IT-AN": [12.9, 13.7, 43.3,  43.8],
  "IT-AP": [13.1, 13.95, 42.69, 43.15],
  "IT-FM": [13.2, 13.85, 43.1,  43.45],
  "IT-MC": [12.9, 13.8, 43.0,  43.5],
  "IT-PU": [12.35, 13.35, 43.5, 43.97],
  // Lazio
  "IT-FR": [13.0, 14.03, 41.45, 41.95],
  "IT-LT": [12.6, 13.45, 41.23, 41.7],
  "IT-RI": [12.65, 13.4, 42.1,  42.84],
  "IT-RM": [11.8, 13.1, 41.6,  42.45],
  "IT-VT": [11.45, 12.5, 42.25, 42.84],
  // Abruzzo
  "IT-AQ": [13.15, 14.05, 41.9, 42.9],
  "IT-CH": [14.05, 14.8, 41.95, 42.4],
  "IT-PE": [13.95, 14.5, 42.25, 42.6],
  "IT-TE": [13.6, 14.3, 42.5,  42.9],
  // Molise
  "IT-CB": [14.35, 15.15, 41.35, 41.85],
  "IT-IS": [13.95, 14.5, 41.55, 41.95],
  // Campania
  "IT-AV": [14.7, 15.35, 40.8,  41.2],
  "IT-BN": [14.5, 15.2, 41.05,  41.5],
  "IT-CE": [14.03, 14.65, 41.0, 41.5],
  "IT-NA": [14.1, 14.6, 40.65,  41.1],
  "IT-SA": [14.55, 15.85, 39.99, 40.85],
  // Puglia
  "IT-BA": [15.8, 16.9, 40.65,  41.3],
  "IT-BT": [15.85, 16.55, 41.1, 41.55],
  "IT-BR": [17.3, 18.0, 40.45,  40.95],
  "IT-FG": [15.0, 16.5, 41.2,   41.88],
  "IT-LE": [17.75, 18.52, 39.79, 40.55],
  "IT-TA": [16.8, 17.8, 40.2,   40.85],
  // Basilicata
  "IT-MT": [16.1, 16.85, 40.2,  40.9],
  "IT-PZ": [15.35, 16.3, 39.9,  41.15],
  // Calabria
  "IT-CS": [15.63, 16.63, 39.15, 40.15],
  "IT-CZ": [15.9, 16.55, 38.8,  39.2],
  "IT-KR": [16.4, 16.63, 38.9,  39.35],
  "IT-RC": [15.63, 16.2, 37.92, 38.45],
  "IT-VV": [15.8, 16.25, 38.45, 38.85],
  // Sicily
  "IT-AG": [12.9, 14.05, 37.0,  37.7],
  "IT-CL": [13.7, 14.4, 37.2,   37.7],
  "IT-CT": [14.7, 15.4, 37.25,  37.85],
  "IT-EN": [14.15, 14.85, 37.45, 37.9],
  "IT-ME": [14.95, 15.65, 37.85, 38.33],
  "IT-PA": [12.85, 13.9, 37.8,   38.3],
  "IT-RG": [14.35, 15.05, 36.65, 37.15],
  "IT-SR": [14.8, 15.65, 36.75,  37.35],
  "IT-TP": [12.43, 13.1, 37.5,   38.15],
  // Sardinia
  "IT-CA": [8.8, 9.55, 39.0,    39.55],
  "IT-CI": [8.13, 8.85, 38.86,  39.35],
  "IT-VS": [8.55, 9.1, 39.35,   39.8],
  "IT-NU": [8.9, 9.83, 39.85,   40.65],
  "IT-OG": [9.3, 9.83, 39.5,    40.1],
  "IT-OR": [8.4, 9.1, 39.65,    40.25],
  "IT-OT": [9.1, 9.83, 40.6,    41.26],
  "IT-SS": [8.13, 9.3, 40.4,    41.26],
};

/**
 * Map a POI lat/lon to the best-matching Italian province code.
 * Falls back to undefined if no province bbox contains the point.
 */
export function poiToItalyProvince(lon: number, lat: number): string | undefined {
  // Collect all matching provinces (point may lie in overlapping bboxes)
  const matches: string[] = [];
  for (const [code, [lonMin, lonMax, latMin, latMax]] of Object.entries(provinceBBox)) {
    if (lon >= lonMin && lon <= lonMax && lat >= latMin && lat <= latMax) {
      matches.push(code);
    }
  }
  if (matches.length === 0) return undefined;
  if (matches.length === 1) return matches[0];
  // If multiple bboxes match, pick the one with the smallest area (most specific)
  return matches.reduce((best, code) => {
    const [lo1, lo2, la1, la2] = provinceBBox[code];
    const [bl1, bl2, bla1, bla2] = provinceBBox[best];
    return (lo2 - lo1) * (la2 - la1) < (bl2 - bl1) * (bla2 - bla1) ? code : best;
  });
}

/**
 * Map a POI parent region-id (either "reg-*" or "IT-*" style) to ISO IT region code.
 * Used to look up italySubregions[regionCode].
 */
export function poiParentToRegionCode(parent: string): string | undefined {
  const legacyMap: Record<string, string> = {
    "reg-lombardia": "IT-25",
    "reg-toscana":   "IT-52",
    "reg-sicilia":   "IT-82",
    "reg-veneto":    "IT-34",
    "reg-lazio":     "IT-62",
    "reg-campania":  "IT-72",
    "reg-puglia":    "IT-75",
    "reg-sardegna":  "IT-88",
    "reg-piemonte":  "IT-21",
    "reg-calabria":  "IT-78",
    "reg-abruzzo":   "IT-65",
    "reg-marche":    "IT-57",
    "reg-umbria":    "IT-55",
    "reg-liguria":   "IT-42",
    "reg-friuli":    "IT-36",
    "reg-emilia":    "IT-45",
    "reg-basilicata":"IT-77",
    "reg-molise":    "IT-67",
    "reg-trentino":  "IT-32",
    "reg-aosta":     "IT-23",
  };
  if (parent.startsWith("IT-")) return parent;
  return legacyMap[parent];
}

/** All 107 province codes for external iteration */
export const italyProvinceCodes = Object.keys(provinceBBox);
