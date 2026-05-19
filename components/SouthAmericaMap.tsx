"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { southamericaMap, southamericaViewBox, projectCoordsSA } from "@/lib/visualLab/maps/southamerica.svg";
import { SOUTH_AMERICA_CAPITALS } from "@/lib/visualLab/maps/southAmericaCapitals";
import type { Lang } from "@/lib/visualLab/maps/resolver";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Maximize2 } from "lucide-react";
import type { WheelEvent as RWheelEvent, PointerEvent as RPointerEvent } from "react";

interface SouthAmericaMapProps {
  lang: Lang;
}

const COUNTRY_BINDINGS: Record<string, string> = {
  argentina: '/argentina-map', bolivia: '/bolivia-map', brazil: '/brazil-map',
  chile: '/chile-map', colombia: '/colombia-map', ecuador: '/ecuador-map',
  guyana: '/guyana-map', paraguay: '/paraguay-map', peru: '/peru-map',
  suriname: '/suriname-map', uruguay: '/uruguay-map', venezuela: '/venezuela-map',
  frenchguiana: '/frenchguiana-map',
};

const COUNTRY_LABELS: Record<string, { de: string; hu: string; ro: string; en: string }> = {
  argentina: { de: "Argentinien", hu: "Argentína", ro: "Argentina", en: "Argentina" },
  bolivia: { de: "Bolivien", hu: "Bolívia", ro: "Bolivia", en: "Bolivia" },
  brazil: { de: "Brasilien", hu: "Brazília", ro: "Brazilia", en: "Brazil" },
  chile: { de: "Chile", hu: "Chile", ro: "Chile", en: "Chile" },
  colombia: { de: "Kolumbien", hu: "Kolumbia", ro: "Columbia", en: "Colombia" },
  ecuador: { de: "Ecuador", hu: "Ecuador", ro: "Ecuador", en: "Ecuador" },
  guyana: { de: "Guyana", hu: "Guyana", ro: "Guyana", en: "Guyana" },
  paraguay: { de: "Paraguay", hu: "Paraguay", ro: "Paraguay", en: "Paraguay" },
  peru: { de: "Peru", hu: "Peru", ro: "Peru", en: "Peru" },
  suriname: { de: "Suriname", hu: "Suriname", ro: "Suriname", en: "Suriname" },
  uruguay: { de: "Uruguay", hu: "Uruguay", ro: "Uruguay", en: "Uruguay" },
  venezuela: { de: "Venezuela", hu: "Venezuela", ro: "Venezuela", en: "Venezuela" },
  frenchguiana: { de: "Französisch-Guayana", hu: "Francia Guyana", ro: "Guyana Franceză", en: "French Guiana" },
};

const COMING_SOON: Partial<Record<Lang, string>> = {
  de: "Bald verfügbar", hu: "Hamarosan", ro: "În curând", en: "Coming soon",
  fr: "Bientôt disponible", it: "Prossimamente", es: "Próximamente",
  pl: "Wkrótce", nl: "Binnenkort", at: "Bald verfügbar", gb: "Coming soon",
};

const MIN_SCALE = 1;
const MAX_SCALE = 50;

// Aggregate paths by slug (multiple admin-1 features per country)
const countriesBySlug: Record<string, { id: string; path: string }[]> = {};
for (const f of southamericaMap) {
  if (!countriesBySlug[f.id]) countriesBySlug[f.id] = [];
  countriesBySlug[f.id].push(f);
}
const aggregated = Object.entries(countriesBySlug).map(([slug, parts]) => ({
  id: slug,
  path: parts.map((p) => p.path).join(""),
}));

export default function SouthAmericaMap({ lang }: SouthAmericaMapProps) {
  const router = useRouter();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const lastPinch = useRef<{ dist: number; cx: number; cy: number } | null>(null);
  const lastPan = useRef<{ x: number; y: number } | null>(null);
  const dragged = useRef(false);

  const [hovered, setHovered] = useState<string | null>(null);
  const [view, setView] = useState({ x: 0, y: 0, scale: 1 });
  const [toast, setToast] = useState<{ title: string; info: string } | null>(null);

  const [vbX, vbY, vbW, vbH] = southamericaViewBox.split(" ").map(Number);

  const clampView = (v: { x: number; y: number; scale: number }) => {
    const scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, v.scale));
    const maxX = Math.max(0, vbW * (scale - 1)) + vbW * 0.5;
    const maxY = Math.max(0, vbH * (scale - 1)) + vbH * 0.5;
    return { scale, x: Math.max(-maxX, Math.min(maxX, v.x)), y: Math.max(-maxY, Math.min(maxY, v.y)) };
  };

  const zoomAt = (factor: number, cx?: number, cy?: number) => {
    setView((v) => {
      const px = cx ?? vbW / 2;
      const py = cy ?? vbH / 2;
      const newScale = v.scale * factor;
      const clamped = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
      const k = clamped / v.scale;
      return clampView({ x: px - k * (px - v.x), y: py - k * (py - v.y), scale: clamped });
    });
  };

  const toSvg = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return [0, 0];
    const rect = svg.getBoundingClientRect();
    return [vbX + (clientX - rect.left) * (vbW / rect.width), vbY + (clientY - rect.top) * (vbH / rect.height)];
  };

  const onWheel = (e: RWheelEvent<SVGSVGElement>) => {
    e.preventDefault();
    const [sx, sy] = toSvg(e.clientX, e.clientY);
    zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, sx, sy);
  };

  const onPointerDown = (e: RPointerEvent<SVGSVGElement>) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    dragged.current = false;
    if (pointers.current.size === 1) lastPan.current = { x: e.clientX, y: e.clientY };
    else if (pointers.current.size === 2) {
      const pts = Array.from(pointers.current.values());
      lastPinch.current = {
        dist: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y),
        cx: (pts[0].x + pts[1].x) / 2, cy: (pts[0].y + pts[1].y) / 2,
      };
      lastPan.current = null;
    }
  };

  const onPointerMove = (e: RPointerEvent<SVGSVGElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2 && lastPinch.current) {
      const pts = Array.from(pointers.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const cx = (pts[0].x + pts[1].x) / 2, cy = (pts[0].y + pts[1].y) / 2;
      const [sx, sy] = toSvg(cx, cy);
      zoomAt(dist / lastPinch.current.dist, sx, sy);
      lastPinch.current = { dist, cx, cy };
      dragged.current = true;
    } else if (pointers.current.size === 1 && lastPan.current) {
      const dxPx = e.clientX - lastPan.current.x, dyPx = e.clientY - lastPan.current.y;
      if (Math.abs(dxPx) + Math.abs(dyPx) > 2) dragged.current = true;
      const svg = svgRef.current;
      if (svg) {
        const rect = svg.getBoundingClientRect();
        const dvx = dxPx * (vbW / rect.width), dvy = dyPx * (vbH / rect.height);
        setView((v) => (v.scale > 1.001 ? clampView({ ...v, x: v.x + dvx, y: v.y + dvy }) : v));
      }
      lastPan.current = { x: e.clientX, y: e.clientY };
    }
  };

  const onPointerUp = (e: RPointerEvent<SVGSVGElement>) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) lastPinch.current = null;
    if (pointers.current.size === 0) lastPan.current = null;
  };

  const resetView = () => setView({ x: 0, y: 0, scale: 1 });

  const handleCountryClick = (slug: string) => {
    if (dragged.current) return;
    const bind = COUNTRY_BINDINGS[slug];
    if (bind) router.push(bind);
    else {
      const labels = COUNTRY_LABELS[slug];
      const info = COMING_SOON[lang] ?? COMING_SOON.en ?? "Coming soon";
      setToast({
        title: labels ? labels[lang as keyof typeof labels] || labels.en : slug,
        info,
      });
      setTimeout(() => setToast(null), 2500);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto flex-1 min-h-[70vh] bg-slate-900 overflow-hidden shadow-2xl border border-white/10 lg:rounded-xl lg:my-4">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-sm border border-cyan-500/30 text-white px-5 py-2 rounded-full flex flex-col items-center shadow-lg pointer-events-none"
          >
            <span className="font-bold text-cyan-300 text-sm">{toast.title}</span>
            <span className="text-xs opacity-80">{toast.info}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute right-3 top-3 z-40 flex flex-col gap-2">
        <button onClick={() => zoomAt(1.4)} className="w-9 h-9 rounded-full bg-slate-800/80 backdrop-blur text-white/80 hover:text-white hover:bg-slate-700 border border-white/10 flex items-center justify-center transition" aria-label="Zoom in"><Plus size={16} /></button>
        <button onClick={() => zoomAt(1 / 1.4)} className="w-9 h-9 rounded-full bg-slate-800/80 backdrop-blur text-white/80 hover:text-white hover:bg-slate-700 border border-white/10 flex items-center justify-center transition" aria-label="Zoom out"><Minus size={16} /></button>
        <button onClick={resetView} className="w-9 h-9 rounded-full bg-slate-800/80 backdrop-blur text-white/80 hover:text-white hover:bg-slate-700 border border-white/10 flex items-center justify-center transition" aria-label="Reset zoom"><Maximize2 size={14} /></button>
      </div>

      <svg
        ref={svgRef} viewBox={southamericaViewBox}
        className="w-full h-[calc(100vh-90px)] lg:h-[70vh] lg:max-h-[720px] select-none"
        preserveAspectRatio="xMidYMid meet"
        style={{ touchAction: "none", cursor: view.scale > 1 ? "grab" : "default", filter: "drop-shadow(0 0 20px rgba(0,255,255,0.08))" }}
        onWheel={onWheel} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}
      >
        <g transform={`translate(${view.x} ${view.y}) scale(${view.scale})`}>
          {aggregated.map((country) => {
            const isHovered = hovered === country.id;
            const isWired = Boolean(COUNTRY_BINDINGS[country.id]);
            const labels = COUNTRY_LABELS[country.id];
            const labelText = labels ? labels[lang as keyof typeof labels] || labels.en : country.id;
            return (
              <path
                key={country.id} d={country.path}
                fill={isHovered ? "rgba(6, 182, 212, 0.45)" : isWired ? "rgba(6, 182, 212, 0.18)" : "rgba(30, 41, 59, 0.8)"}
                stroke={isHovered ? "rgba(34, 211, 238, 0.9)" : "rgba(148, 163, 184, 0.5)"}
                strokeWidth={(isHovered ? 1.5 : 0.6) / view.scale}
                style={{ cursor: "pointer", transition: "fill 200ms" }}
                onMouseEnter={() => setHovered(country.id)} onMouseLeave={() => setHovered(null)}
                onClick={() => handleCountryClick(country.id)}
              >
                <title>{labelText}</title>
              </path>
            );
          })}

          {/* Country name + capital labels — always visible */}
          <g pointerEvents="none">
            {SOUTH_AMERICA_CAPITALS.map((cap) => {
              const labels = COUNTRY_LABELS[cap.countryId];
              const countryLabel = labels ? labels[lang as keyof typeof labels] || labels.en : cap.countryId;
              const capitalName = cap.name[lang as keyof typeof cap.name] || cap.name.en;
              const [cx, cy] = projectCoordsSA(cap.lon, cap.lat);
              const dotR = 4 / view.scale;
              const countryFont = 18 / view.scale;
              const capitalFont = 13 / view.scale;
              const strokeW = 4 / view.scale;
              const dyCountry = -14 / view.scale;
              const dyCapital = 16 / view.scale;
              return (
                <g key={`lbl-${cap.countryId}`}>
                  <text
                    x={cx}
                    y={cy + dyCountry}
                    fill="#ffffff"
                    fontSize={countryFont}
                    fontWeight={700}
                    textAnchor="middle"
                    style={{
                      userSelect: "none",
                      paintOrder: "stroke",
                      stroke: "#020408",
                      strokeWidth: strokeW,
                      strokeOpacity: 0.85,
                      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.8))",
                    }}
                  >
                    {countryLabel}
                  </text>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={dotR}
                    fill="#FFD166"
                    stroke="#020408"
                    strokeWidth={0.4 / view.scale}
                    style={{ filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.8))" }}
                  />
                  <text
                    x={cx}
                    y={cy + dyCapital}
                    fill="#FFD166"
                    fontSize={capitalFont}
                    fontWeight={600}
                    textAnchor="middle"
                    style={{
                      userSelect: "none",
                      paintOrder: "stroke",
                      stroke: "#020408",
                      strokeWidth: strokeW,
                      strokeOpacity: 0.85,
                      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.8))",
                    }}
                  >
                    {capitalName}
                  </text>
                </g>
              );
            })}
          </g>
        </g>
      </svg>
    </div>
  );
}
