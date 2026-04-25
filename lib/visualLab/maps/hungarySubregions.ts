import { huAdmin2Map } from "./hungaryAdmin2.svg";

// HUNGARY — SUBREGIONS (19 megye + Budapest) Admin-2 drill-down
export const hungarySubregions: Record<string, any> = {};

for (const [id, children] of Object.entries(huAdmin2Map)) {
  hungarySubregions[id] = {
    viewBox: "0 0 1000 1200", // Dummy viewbox, since we use dummy subregions
    type: "kreis", // Using kreis to show "Járások"
    projection: {
      minLon: 16.0,
      maxLon: 23.0,
      minLat: 45.0,
      maxLat: 49.0,
      latStretch: 1.0,
      scale: 1.0,
      offX: 0,
      offY: 0
    },
    children
  };
}
