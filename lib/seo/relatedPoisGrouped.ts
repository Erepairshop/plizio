import type { POI } from "@/lib/visualLab/data/poi";
import { pois } from "@/lib/seo/slugs";

/**
 * Split related POIs into "same region" and "same topic (country-wide)" groups.
 * Each capped at `limit` (default 6).
 * The center POI is always excluded.
 */
export function getRelatedPoisGrouped(
  poi: POI,
  limit = 6,
): { sameRegion: POI[]; sameTopic: POI[] } {
  const sameRegion: POI[] = [];
  const sameTopic: POI[] = [];
  const regionParent = poi.parent;
  const topic = poi.type;
  const countryPrefix = poi.id?.split("-")[0] || "";
  const seen = new Set<string>([poi.id]);
  for (const p of pois) {
    if (!p || !p.id || seen.has(p.id)) continue;
    if (p.type === "region" || p.type === "country") continue;
    // Same region: matching parent (state/region id)
    if (regionParent && p.parent === regionParent) {
      if (sameRegion.length < limit) {
        sameRegion.push(p);
        seen.add(p.id);
      }
      continue;
    }
    // Same topic country-wide: same starting slug + same type
    if (topic && p.type === topic && p.id.startsWith(countryPrefix + "-")) {
      if (sameTopic.length < limit) {
        sameTopic.push(p);
        seen.add(p.id);
      }
    }
  }
  return { sameRegion, sameTopic };
}

/** Get nearby POIs (within ~radiusKm) for PoiMiniMap. Independent of region/topic. */
export function getNearbyPois(
  poi: POI,
  radiusKm = 80,
  max = 24,
): POI[] {
  const c0 = poiLngLat(poi);
  if (!c0) return [];
  const [cLng, cLat] = c0;
  const latDelta = radiusKm / 111;
  const lngDelta = radiusKm / (111 * Math.max(0.1, Math.cos((cLat * Math.PI) / 180)));
  const out: { p: POI; d2: number }[] = [];
  for (const p of pois) {
    if (!p || p.id === poi.id) continue;
    if (p.type === "region" || p.type === "country") continue;
    const c = poiLngLat(p);
    if (!c) continue;
    const dx = c[0] - cLng;
    const dy = c[1] - cLat;
    if (Math.abs(dx) > lngDelta || Math.abs(dy) > latDelta) continue;
    out.push({ p, d2: dx * dx + dy * dy });
  }
  out.sort((a, b) => a.d2 - b.d2);
  return out.slice(0, max).map((x) => x.p);
}

function poiLngLat(p: POI): [number, number] | null {
  if (Array.isArray(p.coords) && p.coords.length >= 2) {
    return [Number(p.coords[0]), Number(p.coords[1])];
  }
  const c = (p as { coordinates?: { lat: number; lng: number } }).coordinates;
  if (c && typeof c.lat === "number" && typeof c.lng === "number") return [c.lng, c.lat];
  return null;
}
