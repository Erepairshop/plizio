export const CONTINENTS_GEOJSON: { type: string; features: any[] } = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Europe", route: "/europe-map", color: "#22d3ee" },
      geometry: { type: "Polygon", coordinates: [[ [-25, 35], [-25, 72], [45, 72], [45, 35], [-25, 35] ]] }
    },
    {
      type: "Feature",
      properties: { name: "North America", route: "/na-map", color: "#f87171" },
      geometry: { type: "Polygon", coordinates: [[ [-170, 15], [-170, 75], [-55, 75], [-55, 15], [-170, 15] ]] }
    },
    {
      type: "Feature",
      properties: { name: "South America", route: "/sa-map", color: "#4ade80" },
      geometry: { type: "Polygon", coordinates: [[ [-85, -55], [-85, 15], [-35, 15], [-35, -55], [-85, -55] ]] }
    },
    {
      type: "Feature",
      properties: { name: "Africa", route: "/africa-map", color: "#fbbf24" },
      geometry: { type: "Polygon", coordinates: [[ [-20, -35], [-20, 37], [55, 37], [55, -35], [-20, -35] ]] }
    },
    {
      type: "Feature",
      properties: { name: "Asia", route: "/asia-map", color: "#a78bfa" },
      geometry: { type: "Polygon", coordinates: [[ [45, 5], [45, 75], [180, 75], [180, 5], [45, 5] ]] }
    },
    {
      type: "Feature",
      properties: { name: "Oceania", route: "/oceania-map", color: "#f472b6" },
      geometry: { type: "Polygon", coordinates: [[ [110, -50], [110, -10], [180, -10], [180, -50], [110, -50] ]] }
    },
    {
      type: "Feature",
      properties: { name: "Antarctica", route: "", color: "#94a3b8" },
      geometry: { type: "Polygon", coordinates: [[ [-180, -90], [-180, -60], [180, -60], [180, -90], [-180, -90] ]] }
    }
  ]
};
