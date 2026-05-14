"use client";

import type { POI } from "@/lib/visualLab/data/poi";
import type { Lang } from "@/lib/seo/slugs";
import { buildPoiPath } from "@/lib/seo/slugs";

const COPY: Record<Lang, { title: string; tip: string }> = {
  de: { title: "🗺️ In der Nähe", tip: "Klicke auf einen Punkt, um zu diesem Ort zu wechseln." },
  hu: { title: "🗺️ A közelben", tip: "Kattints egy pontra, hogy átmenj a helyhez." },
  ro: { title: "🗺️ În apropiere", tip: "Apasă un punct pentru a vizita locul." },
  en: { title: "🗺️ Nearby places", tip: "Tap a dot to jump to that place." },
};

function poiLngLat(p: POI): [number, number] | null {
  if (Array.isArray(p.coords) && p.coords.length >= 2) {
    return [Number(p.coords[0]), Number(p.coords[1])];
  }
  const c = (p as { coordinates?: { lat: number; lng: number } }).coordinates;
  if (c && typeof c.lat === "number" && typeof c.lng === "number") return [c.lng, c.lat];
  return null;
}

// Static SVG-based mini-map of up to N nearby POIs (no JS runtime needed).
export default function PoiMiniMap({
  poi,
  lang,
  candidates,
  radiusKm = 80,
  max = 12,
}: {
  poi: POI;
  lang: Lang;
  candidates: POI[];
  radiusKm?: number;
  max?: number;
}) {
  const copy = COPY[lang] ?? COPY.de;
  const center = poiLngLat(poi);
  if (!center) return null;
  const [cLng, cLat] = center;
  // ~1 deg lat = 111km. lng correction by cos(lat).
  const latDelta = radiusKm / 111;
  const lngDelta = radiusKm / (111 * Math.max(0.1, Math.cos((cLat * Math.PI) / 180)));

  type Pt = { poi: POI; x: number; y: number };
  const points: Pt[] = [];
  for (const c of candidates) {
    if (c.id === poi.id) continue;
    const ll = poiLngLat(c);
    if (!ll) continue;
    const [lng, lat] = ll;
    const dx = lng - cLng;
    const dy = lat - cLat;
    if (Math.abs(dx) > lngDelta || Math.abs(dy) > latDelta) continue;
    const x = 50 + (dx / lngDelta) * 45; // SVG x in 5..95
    const y = 50 - (dy / latDelta) * 45; // y inverted, top is north
    points.push({ poi: c, x, y });
    if (points.length >= max) break;
  }
  if (points.length === 0) return null;

  return (
    <section className="mt-10 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.06] to-cyan-700/[0.04] p-5 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">{copy.title}</h2>
      <p className="mt-1 text-sm text-white/65">{copy.tip}</p>
      <div className="mt-4 grid gap-5 sm:grid-cols-[1fr_1.1fr] items-start">
        <svg viewBox="0 0 100 100" className="w-full max-w-md aspect-square rounded-2xl bg-[#04161a] border border-white/10">
          {/* radius rings (decorative) */}
          {[15, 30, 45].map((r) => (
            <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.3" />
          ))}
          {/* axis crosshair */}
          <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
          {/* center POI (red star) */}
          <circle cx="50" cy="50" r="2.8" fill="#f43f5e" stroke="#fff" strokeWidth="0.6" />
          {/* nearby POIs (cyan dots, clickable) */}
          {points.map((p, i) => (
            <a key={p.poi.id} href={buildPoiPath(lang, p.poi)}>
              <circle cx={p.x} cy={p.y} r="2" fill="#22d3ee" opacity="0.9" />
              <title>{p.poi.name?.[lang] || p.poi.name?.de || p.poi.id}</title>
              <text x={p.x} y={p.y - 3} fontSize="2" textAnchor="middle" fill="rgba(255,255,255,0.6)">{i + 1}</text>
            </a>
          ))}
        </svg>
        <ul className="space-y-2 text-sm">
          {points.map((p, i) => {
            const name = p.poi.name?.[lang] || p.poi.name?.de || p.poi.id;
            return (
              <li key={p.poi.id}>
                <a
                  href={buildPoiPath(lang, p.poi)}
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-white/5 transition text-white/85"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">{i + 1}</span>
                  <span className="truncate">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
