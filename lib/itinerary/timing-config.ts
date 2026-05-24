// Központi PlizioGo idő-konfiguráció — bármikor módosítható egy helyen,
// minden city itinerary recompute-olódik a generate-poi-html.mts build-folyamatban.
// Nem kell LLM-újra-gen, csak build-rerun.

// Stop kategóriák → stay_min (perc, realisztikus turista-tempó)
// Tier-szorzó (hot city = popular = +20% sor-buffer) automatikusan rárakódik
export const STAY_MIN: Record<string, number> = {
  // Squares & open spaces
  square: 30,
  market: 40,
  // Religious
  religious: 50,
  cathedral: 75,
  church: 45,
  // Historical
  historical: 80,
  castle: 90,
  fortress: 80,
  ruins: 60,
  monument: 25,
  // Museum
  museum: 100,
  gallery: 80,
  // Nature
  park: 120,
  beach: 180,
  viewpoint: 30,
  panorama: 35,
  sunset: 40,
  natural: 60,
  garden: 60,
  // Gastro & shopping
  gastro: 80,
  cafe: 30,
  shopping: 40,
  // Transport / waypoints
  station: 10,
  port: 20,
  bridge: 15,
  // Default fallback
  default: 45,
};

// Hop sebesség (km/h, turista-tempó NEM atléta)
export const HOP_KMH: Record<string, number> = {
  walk: 3,      // korábban 4 - reálisabb foto-megállókkal
  bike: 10,     // korábban 12 - óvatos turista, GPS-ellenőrzés
  car: 18,      // korábban 22 - belváros, parkolás-keresés
  transit: 15,  // korábban 18 - várakozás + átszállás
};

// Tier-szorzó (popular city = sor + tömeg)
export const TIER_MULTIPLIER: Record<number, number> = {
  1: 1.2,  // Tier-1 hot — +20% sor-idő
  2: 1.05, // Tier-2 medium — minimális
  3: 1.0,  // Tier-3 kis falu — nincs sor
};

// Buffer-szabályok
export const FIRST_STOP_BUFFER_MIN = 10;   // érkezés, eligazodás
export const LAST_STOP_BUFFER_MIN = 30;     // búcsú, vacsora-utáni séta
export const INTER_STOP_BUFFER_MIN = 3;     // hop-min onnan az átállás-bizonytalanságra

// Start time
export const DEFAULT_START_HOUR = 9;
export const DEFAULT_START_MIN = 0;

export function getStayMinutes(category: string, tier: number = 2): number {
  const base = STAY_MIN[category] || STAY_MIN.default;
  const mult = TIER_MULTIPLIER[tier] || 1.0;
  return Math.round(base * mult);
}

export function getHopMinutes(distanceKm: number, mode: string): number {
  const kmh = HOP_KMH[mode] || HOP_KMH.walk;
  return Math.round((distanceKm / kmh) * 60 + INTER_STOP_BUFFER_MIN);
}

// Distance estimate without coords: returns a category-based proxy
// (use real Haversine if both stops have coords)
export function haversineKm(a: [number, number], b: [number, number]): number {
  const [lat1, lon1] = a; const [lat2, lon2] = b;
  const R = 6371.0;
  const p1 = lat1 * Math.PI / 180; const p2 = lat2 * Math.PI / 180;
  const dp = (lat2 - lat1) * Math.PI / 180;
  const dl = (lon2 - lon1) * Math.PI / 180;
  const x = Math.sin(dp/2)**2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl/2)**2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

// Format HH:MM from minutes-since-start
export function formatTime(minutesSinceStart: number): string {
  const h = DEFAULT_START_HOUR + Math.floor(minutesSinceStart / 60);
  const m = minutesSinceStart % 60;
  return `${h.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}`;
}

// Main: recompute timings for an itinerary mode (mutates the mode object)
export function recomputeModeTimings(mode: any, tier: number = 2): void {
  const stops = mode.stops || [];
  if (stops.length === 0) return;
  let cursor = 0;
  let totalKm = 0;
  const speed = HOP_KMH[mode.mode] || HOP_KMH.walk;
  let prevCoords: [number, number] | null = null;

  for (let i = 0; i < stops.length; i++) {
    const s = stops[i];
    // Hop time from prev
    if (i === 0) {
      cursor += FIRST_STOP_BUFFER_MIN;
      s.hop_from_prev_min = FIRST_STOP_BUFFER_MIN;
      s.hop_from_prev_km = 0;
    } else if (prevCoords && Array.isArray(s.coords) && s.coords.length === 2) {
      const km = haversineKm(prevCoords, s.coords);
      const hopMin = getHopMinutes(km, mode.mode);
      cursor += hopMin;
      totalKm += km;
      s.hop_from_prev_min = hopMin;
      s.hop_from_prev_km = Math.round(km * 100) / 100;
    } else {
      // No coords — assume Flash-supplied hop_from_prev_min stays, just scale by new speed
      const oldMin = s.hop_from_prev_min || 5;
      // Scale: assume Flash used old speed; convert to new
      // old_km = oldMin / 60 * old_speed (Flash assumed); new_min = old_km / new_speed * 60
      // Simpler: just keep the Flash value (we don't know its base)
      cursor += oldMin;
    }
    s.arrive_at = formatTime(cursor);
    // Stay
    const stay = getStayMinutes(s.category || "default", tier);
    s.stay_min = stay;
    cursor += stay;
    prevCoords = Array.isArray(s.coords) && s.coords.length === 2 ? s.coords as [number, number] : prevCoords;
  }

  // Last-stop buffer
  cursor += LAST_STOP_BUFFER_MIN;
  mode.end_estimate = formatTime(cursor);
  mode.total_km = Math.round(totalKm * 10) / 10;
  mode.stop_count = stops.length;
  mode.duration_h = Math.round(cursor / 6) / 10; // 1 decimal
}

export function recomputeItineraryTimings(itinerary: any, tier: number = 2): void {
  if (!itinerary?.modes) return;
  for (const mode of Object.values(itinerary.modes) as any[]) {
    recomputeModeTimings(mode, tier);
    // Also process weather variants
    if (mode.variants) {
      for (const variant of Object.values(mode.variants) as any[]) {
        if (variant.stops) recomputeModeTimings({ ...variant, mode: mode.mode }, tier);
      }
    }
  }
}
