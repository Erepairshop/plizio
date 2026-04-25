import { huAdmin2Map } from "./hungaryAdmin2.svg";

// HUNGARY — SUBREGIONS (19 megye + Budapest) Admin-2 drill-down
export const hungarySubregions: Record<string, any> = {};

for (const [id, children] of Object.entries(huAdmin2Map)) {
  hungarySubregions[id] = {
    viewBox: "0 0 1000 700", // Real NUTS-3 paths from Natural Earth ne_10m_admin_1
    type: "megye",
    // Matched to script: x=((lon-16)/6.95)*1000, y=((48.6-lat)/2.9)*700
    // projectInState: x=offX+(lon-minLon)*latStretch*scale, y=offY+(maxLat-lat)*scale
    // -> scale=700/2.9=241.38; latStretch=(1000/6.95)/241.38=0.596 (~cos 47deg)
    projection: {
      minLon: 16.0,
      maxLon: 22.95,
      minLat: 45.7,
      maxLat: 48.6,
      latStretch: 0.596,
      scale: 241.38,
      offX: 0,
      offY: 0
    },
    children
  };
}
