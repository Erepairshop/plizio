// POI type → color mapping. Shared by the client InteractiveMap and the
// server SsrCountryMap so both render identical-looking markers.
//
// Loosely-typed `type: string` rather than POI["type"] so callers don't have
// to import the heavy POI type tree just to colour a dot.

export function poiColor(type: string | undefined | null): string {
  switch (type) {
    case "state-capital":  return "#FBBF24";
    case "city":
    case "town":
    case "village":
    case "metropolis":     return "#38BDF8";
    case "river":          return "#22D3EE";
    case "mountain":
    case "peak":
    case "summit":         return "#A78BFA";
    case "lake":           return "#60A5FA";
    case "island":         return "#34D399";
    case "forest":         return "#10B981";
    case "sea":
    case "coast":
    case "beach":          return "#06B6D4";
    case "valley":
    case "highland":
    case "plateau":
    case "hill":
    case "range":          return "#A8A29E";
    case "waterfall":
    case "cave":
    case "wetland":        return "#22D3EE";
    case "historical":
    case "ruins":
    case "battlefield":
    case "ancient":
    case "medieval":       return "#F472B6";
    case "landmark":
    case "castle":
    case "palace":
    case "museum":
    case "tower":
    case "bridge":
    case "statue":
    case "fortress":
    case "cathedral":
    case "church":
    case "monastery":
    case "abbey":
    case "monument":       return "#F97316";
    case "animal-habitat":
    case "wildlife":
    case "fauna":          return "#4ADE80";
    case "park":
    case "zoo":
    case "national-park":
    case "garden":         return "#86EFAC";
    case "agriculture":
    case "vineyard":       return "#FCD34D";
    case "kid-landmark":   return "#FB7185";
    case "industry":
    case "factory":
    case "mine":           return "#94A3B8";
    case "port":
    case "harbor":
    case "harbour":        return "#0EA5E9";
    case "relief":         return "#A8A29E";
    default:               return "#94A3B8";
  }
}
