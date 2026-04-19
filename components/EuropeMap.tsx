"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { europaMap, europaViewBox, EuropeCountry } from "@/lib/visualLab/maps/europa.svg";
import type { Lang } from "@/lib/visualLab/maps/resolver";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Maximize2 } from "lucide-react";
import type { WheelEvent as RWheelEvent, PointerEvent as RPointerEvent } from "react";

interface EuropeMapProps {
  lang: Lang;
}

const COUNTRY_BINDINGS: Record<string, string> = {
  DE: "/deutschland-map",
  HU: "/magyarorszag-map",
  RO: "/romania-map",
  FR: "/france-map",
  IT: "/italy-map",
  ES: "/spain-map",
  GB: "/unitedkingdom-map",
  NL: "/netherlands-map",
  PL: "/poland-map",
};

const COMING_SOON: Record<Lang, string> = {
  de: "Bald verfügbar",
  hu: "Hamarosan",
  ro: "În curând",
  en: "Coming soon",
  fr: "Bientôt disponible",
  it: "Prossimamente",
  es: "Próximamente",
  gb: "Coming soon",
};

const MIN_SCALE = 1;
const MAX_SCALE = 50;

export default function EuropeMap({ lang }: EuropeMapProps) {
  const router = useRouter();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const lastPinch = useRef<{ dist: number; cx: number; cy: number } | null>(null);
  const lastPan = useRef<{ x: number; y: number } | null>(null);
  const dragged = useRef(false);

  const [hovered, setHovered] = useState<string | null>(null);
  const [view, setView] = useState({ x: 0, y: 0, scale: 1 });
  const [toast, setToast] = useState<{ title: string; info: string } | null>(null);

  const [vbX, vbY, vbW, vbH] = europaViewBox.split(" ").map(Number);

  const clampView = (v: { x: number; y: number; scale: number }) => {
    const scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, v.scale));
    const maxX = Math.max(0, vbW * (scale - 1)) + vbW * 0.5;
    const maxY = Math.max(0, vbH * (scale - 1)) + vbH * 0.5;
    return {
      scale,
      x: Math.max(-maxX, Math.min(maxX, v.x)),
      y: Math.max(-maxY, Math.min(maxY, v.y)),
    };
  };

  const zoomAt = (factor: number, cx?: number, cy?: number) => {
    setView((v) => {
      const px = cx ?? vbW / 2;
      const py = cy ?? vbH / 2;
      const newScale = v.scale * factor;
      const clamped = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
      const k = clamped / v.scale;
      const nx = px - k * (px - v.x);
      const ny = py - k * (py - v.y);
      return clampView({ x: nx, y: ny, scale: clamped });
    });
  };

  const toSvg = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return [0, 0];
    const rect = svg.getBoundingClientRect();
    const sx = vbW / rect.width;
    const sy = vbH / rect.height;
    return [vbX + (clientX - rect.left) * sx, vbY + (clientY - rect.top) * sy];
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
    if (pointers.current.size === 1) {
      lastPan.current = { x: e.clientX, y: e.clientY };
    } else if (pointers.current.size === 2) {
      const pts = Array.from(pointers.current.values());
      const dx = pts[0].x - pts[1].x;
      const dy = pts[0].y - pts[1].y;
      lastPinch.current = {
        dist: Math.hypot(dx, dy),
        cx: (pts[0].x + pts[1].x) / 2,
        cy: (pts[0].y + pts[1].y) / 2,
      };
      lastPan.current = null;
    }
  };

  const onPointerMove = (e: RPointerEvent<SVGSVGElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2 && lastPinch.current) {
      const pts = Array.from(pointers.current.values());
      const dx = pts[0].x - pts[1].x;
      const dy = pts[0].y - pts[1].y;
      const dist = Math.hypot(dx, dy);
      const cx = (pts[0].x + pts[1].x) / 2;
      const cy = (pts[0].y + pts[1].y) / 2;
      const factor = dist / lastPinch.current.dist;
      const [sx, sy] = toSvg(cx, cy);
      zoomAt(factor, sx, sy);
      lastPinch.current = { dist, cx, cy };
      dragged.current = true;
    } else if (pointers.current.size === 1 && lastPan.current) {
      const dxPx = e.clientX - lastPan.current.x;
      const dyPx = e.clientY - lastPan.current.y;
      if (Math.abs(dxPx) + Math.abs(dyPx) > 2) dragged.current = true;
      const svg = svgRef.current;
      if (svg) {
        const rect = svg.getBoundingClientRect();
        const dvx = dxPx * (vbW / rect.width);
        const dvy = dyPx * (vbH / rect.height);
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

  const handleCountryClick = (country: EuropeCountry) => {
    if (dragged.current) return;
    const bind = COUNTRY_BINDINGS[country.id];
    if (bind) {
      router.push(bind);
    } else {
      setToast({
        title: country.names[lang as keyof typeof country.names] || country.names.en,
        info: COMING_SOON[lang] || COMING_SOON.en,
      });
      setTimeout(() => setToast(null), 2500);
    }
  };

  return (
    <div className="relative w-full flex-1 min-h-[70vh] bg-slate-900 overflow-hidden shadow-2xl border border-white/10">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-sm border border-cyan-500/30 text-white px-5 py-2 rounded-full flex flex-col items-center shadow-lg pointer-events-none"
          >
            <span className="font-bold text-cyan-300 text-sm">{toast.title}</span>
            <span className="text-xs opacity-80">{toast.info}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoom controls */}
      <div className="absolute right-3 top-3 z-40 flex flex-col gap-2">
        <button
          onClick={() => zoomAt(1.4)}
          className="w-9 h-9 rounded-full bg-slate-800/80 backdrop-blur text-white/80 hover:text-white hover:bg-slate-700 border border-white/10 flex items-center justify-center transition"
          aria-label="Zoom in"
        >
          <Plus size={16} />
        </button>
        <button
          onClick={() => zoomAt(1 / 1.4)}
          className="w-9 h-9 rounded-full bg-slate-800/80 backdrop-blur text-white/80 hover:text-white hover:bg-slate-700 border border-white/10 flex items-center justify-center transition"
          aria-label="Zoom out"
        >
          <Minus size={16} />
        </button>
        <button
          onClick={resetView}
          className="w-9 h-9 rounded-full bg-slate-800/80 backdrop-blur text-white/80 hover:text-white hover:bg-slate-700 border border-white/10 flex items-center justify-center transition"
          aria-label="Reset zoom"
        >
          <Maximize2 size={14} />
        </button>
      </div>

      <svg
        ref={svgRef}
        viewBox={europaViewBox}
        className="w-full h-[calc(100vh-90px)] select-none"
        preserveAspectRatio="xMidYMid meet"
        style={{
          touchAction: "none",
          cursor: view.scale > 1 ? "grab" : "default",
          filter: "drop-shadow(0 0 20px rgba(0,255,255,0.08))",
        }}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <g transform={`translate(${view.x} ${view.y}) scale(${view.scale})`}>
          {/* Country paths */}
          {europaMap.map((country) => {
            const isHovered = hovered === country.id;
            const isWired = Boolean(COUNTRY_BINDINGS[country.id]);
            return (
              <path
                key={`path-${country.id}`}
                d={country.path}
                fill={
                  isHovered
                    ? "rgba(6, 182, 212, 0.45)"
                    : isWired
                      ? "rgba(6, 182, 212, 0.18)"
                      : "rgba(30, 41, 59, 0.8)"
                }
                stroke={isHovered ? "rgba(34, 211, 238, 0.9)" : "rgba(148, 163, 184, 0.5)"}
                strokeWidth={(isHovered ? 1.5 : 0.6) / view.scale}
                style={{ cursor: "pointer", transition: "fill 200ms" }}
                onMouseEnter={() => setHovered(country.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleCountryClick(country)}
              >
                <title>{country.names[lang as keyof typeof country.names] || country.names.en}</title>
              </path>
            );
          })}

          {/* Country name labels + capital dot + capital name — always visible */}
          <g pointerEvents="none">
            {europaMap.map((country) => {
              if (!country.capital || !country.capital.coords) return null;
              const [cx, cy] = country.capital.coords;
              const countryLabel = country.names[lang as keyof typeof country.names] || country.names.en;
              const dotR = 4 / view.scale;
              const countryFont = 26 / view.scale;
              const capitalFont = 19 / view.scale;
              const strokeW = 5.5 / view.scale;
              const dyCountry = -20 / view.scale;
              const dyCapital = 20 / view.scale;
              return (
                <g key={`lbl-${country.id}`}>
                  {/* Country name — above capital */}
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
                  {/* Capital dot */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={dotR}
                    fill="#FFD166"
                    stroke="#020408"
                    strokeWidth={0.4 / view.scale}
                    style={{ filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.8))" }}
                  />
                  {/* Capital name — below dot */}
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
                    {country.capital.name}
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

