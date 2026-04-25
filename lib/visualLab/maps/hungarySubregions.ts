import { huAdmin2Map } from "./hungaryAdmin2.svg";

// HUNGARY — SUBREGIONS (19 megye + Budapest) Admin-2 drill-down
export const hungarySubregions: Record<string, any> = {};

for (const [id, children] of Object.entries(huAdmin2Map)) {
  hungarySubregions[id] = {
    viewBox: "0 0 1000 700", // Real NUTS-3 paths from Natural Earth ne_10m_admin_1
    type: "megye",
    projection: {
      minLon: 16.0,
      maxLon: 22.95,
      minLat: 45.7,
      maxLat: 48.6,
      latStretch: 1.0,
      scale: 1.0,
      offX: 0,
      offY: 0
    },
    children
  };
}
