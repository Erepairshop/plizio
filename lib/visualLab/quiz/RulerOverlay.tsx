"use client";
import { useState, useCallback } from "react";
import { X, Ruler } from "lucide-react";
import type { POI } from "../data/poi";

type Lang = "de" | "hu" | "ro" | "en";

function haversineKm(a: [number, number], b: [number, number]): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const [lon1, lat1] = a;
  const [lon2, lat2] = b;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

const RULER_T: Record<Lang, Record<string, string>> = {
  de: {
    title: "Entfernungsmesser",
    hint1: "Klicke auf den ersten Ort",
    hint2: "Klicke auf den zweiten Ort",
    reset: "Zurücksetzen",
    distance: "Entfernung",
    km: "km",
    pointA: "Punkt A",
    pointB: "Punkt B",
  },
  hu: {
    title: "Távolságmérő",
    hint1: "Kattints az első helyre",
    hint2: "Kattints a második helyre",
    reset: "Visszaállítás",
    distance: "Távolság",
    km: "km",
    pointA: "A pont",
    pointB: "B pont",
  },
  ro: {
    title: "Riglă distanță",
    hint1: "Apasă pe primul loc",
    hint2: "Apasă pe al doilea loc",
    reset: "Resetează",
    distance: "Distanță",
    km: "km",
    pointA: "Punct A",
    pointB: "Punct B",
  },
  en: {
    title: "Distance Ruler",
    hint1: "Click the first location",
    hint2: "Click the second location",
    reset: "Reset",
    distance: "Distance",
    km: "km",
    pointA: "Point A",
    pointB: "Point B",
  },
};

export interface RulerState {
  poiA: POI | null;
  poiB: POI | null;
  distanceKm: number | null;
}

export interface RulerOverlayProps {
  lang: Lang;
  pois: POI[];
  projectCoords: (lon: number, lat: number) => [number, number];
  onClose: () => void;
  /** SVG overlay line props — rendered by parent inside the <svg> */
  overlayContent: React.ReactNode;
  /** Called when ruler state changes so parent can re-render SVG line */
  onStateChange: (state: RulerState) => void;
}

/** Hook to use ruler logic — returns state + poi click handler */
export function useRuler(onStateChange: (s: RulerState) => void) {
  const [poiA, setPoiA] = useState<POI | null>(null);
  const [poiB, setPoiB] = useState<POI | null>(null);
  const [distanceKm, setDistanceKm] = useState<number | null>(null);

  const handlePoiClick = useCallback(
    (poi: POI) => {
      setPoiA((prevA) => {
        if (!prevA) {
          const next: RulerState = { poiA: poi, poiB: null, distanceKm: null };
          onStateChange(next);
          setPoiB(null);
          setDistanceKm(null);
          return poi;
        }
        // second click
        if (prevA.id === poi.id) return prevA; // same poi, ignore
        const km = haversineKm(
          [prevA.coords[0], prevA.coords[1]],
          [poi.coords[0], poi.coords[1]]
        );
        const next: RulerState = { poiA: prevA, poiB: poi, distanceKm: km };
        onStateChange(next);
        setPoiB(poi);
        setDistanceKm(km);
        return prevA;
      });
    },
    [onStateChange]
  );

  const reset = useCallback(() => {
    setPoiA(null);
    setPoiB(null);
    setDistanceKm(null);
    onStateChange({ poiA: null, poiB: null, distanceKm: null });
  }, [onStateChange]);

  return { poiA, poiB, distanceKm, handlePoiClick, reset };
}

/** UI panel (header bar) for Ruler mode */
export function RulerPanel({
  lang,
  poiA,
  poiB,
  distanceKm,
  onReset,
  onClose,
}: {
  lang: Lang;
  poiA: POI | null;
  poiB: POI | null;
  distanceKm: number | null;
  onReset: () => void;
  onClose: () => void;
}) {
  const t = RULER_T[lang] ?? RULER_T.de;

  const getName = (p: POI) =>
    (p.name as Record<string, string>)[lang] ??
    p.name.de ??
    p.id;

  return (
    <div className="flex flex-col gap-2 mb-2 px-1">
      {/* Header row */}
      <div className="flex items-center gap-2 bg-[#0A1929]/90 border border-cyan-400/30 rounded-xl px-3 py-2 backdrop-blur-sm">
        <Ruler size={15} className="text-cyan-400 shrink-0" />
        <span className="text-cyan-200 text-xs font-semibold flex-1">{t.title}</span>
        <button
          onClick={onReset}
          className="text-white/50 hover:text-cyan-300 text-xs px-2 py-0.5 rounded hover:bg-cyan-500/10 transition"
        >
          {t.reset}
        </button>
        <button
          onClick={onClose}
          className="text-white/50 hover:text-white p-0.5 rounded transition"
        >
          <X size={14} />
        </button>
      </div>

      {/* Step hints / result */}
      <div className="flex items-center gap-2 flex-wrap px-1">
        {!poiA && (
          <span className="text-white/55 text-xs">{t.hint1}</span>
        )}
        {poiA && !poiB && (
          <>
            <span className="text-cyan-300 text-xs font-medium">
              {t.pointA}: {getName(poiA)}
            </span>
            <span className="text-white/40 text-xs mx-1">→</span>
            <span className="text-white/55 text-xs">{t.hint2}</span>
          </>
        )}
        {poiA && poiB && distanceKm !== null && (
          <>
            <span className="text-cyan-300 text-xs font-medium">
              {getName(poiA)}
            </span>
            <span className="text-white/40 text-xs mx-1">↔</span>
            <span className="text-cyan-300 text-xs font-medium">
              {getName(poiB)}
            </span>
            <span className="ml-2 bg-cyan-500/20 border border-cyan-400/30 text-cyan-100 text-xs font-bold px-3 py-1 rounded-full">
              {Math.round(distanceKm)} {t.km}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

/** SVG overlay elements to put inside the map <g> transform group */
export function RulerSvgOverlay({
  poiA,
  poiB,
  projectCoords,
  viewScale,
}: {
  poiA: POI | null;
  poiB: POI | null;
  projectCoords: (lon: number, lat: number) => [number, number];
  viewScale: number;
}) {
  if (!poiA) return null;
  const [ax, ay] = projectCoords(poiA.coords[0], poiA.coords[1]);

  return (
    <>
      {/* Point A ring */}
      <circle
        cx={ax}
        cy={ay}
        r={12 / viewScale}
        fill="none"
        stroke="#22D3EE"
        strokeWidth={2 / viewScale}
        opacity={0.9}
        style={{ pointerEvents: "none" }}
      />
      <circle cx={ax} cy={ay} r={4 / viewScale} fill="#22D3EE" style={{ pointerEvents: "none" }} />

      {poiB && (() => {
        const [bx, by] = projectCoords(poiB.coords[0], poiB.coords[1]);
        return (
          <>
            {/* Line */}
            <line
              x1={ax} y1={ay} x2={bx} y2={by}
              stroke="#22D3EE"
              strokeWidth={2 / viewScale}
              strokeDasharray={`${8 / viewScale},${4 / viewScale}`}
              opacity={0.85}
              style={{ pointerEvents: "none" }}
            />
            {/* Point B ring */}
            <circle
              cx={bx}
              cy={by}
              r={12 / viewScale}
              fill="none"
              stroke="#F97316"
              strokeWidth={2 / viewScale}
              opacity={0.9}
              style={{ pointerEvents: "none" }}
            />
            <circle cx={bx} cy={by} r={4 / viewScale} fill="#F97316" style={{ pointerEvents: "none" }} />
          </>
        );
      })()}
    </>
  );
}
