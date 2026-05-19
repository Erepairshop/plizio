"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { africaMap, africaViewBox, projectCoordsAF } from "@/lib/visualLab/maps/africa.svg";
import { AFRICA_CAPITALS } from "@/lib/visualLab/maps/africaCapitals";
import type { Lang } from "@/lib/visualLab/maps/resolver";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Maximize2 } from "lucide-react";
import type { WheelEvent as RWheelEvent, PointerEvent as RPointerEvent } from "react";

interface AfricaMapProps {
  lang: Lang;
}

const COUNTRY_BINDINGS: Record<string, string> = {
  algeria: '/algeria-map', angola: '/angola-map', benin: '/benin-map',
  botswana: '/botswana-map', burkinafaso: '/burkinafaso-map', burundi: '/burundi-map',
  capeverde: '/capeverde-map', cameroon: '/cameroon-map', centralafricanrepublic: '/centralafricanrepublic-map',
  chad: '/chad-map', comoros: '/comoros-map', congo: '/congo-map',
  drcongo: '/drcongo-map', djibouti: '/djibouti-map', egypt: '/egypt-map',
  equatorialguinea: '/equatorialguinea-map', eritrea: '/eritrea-map', ethiopia: '/ethiopia-map',
  gabon: '/gabon-map', gambia: '/gambia-map', ghana: '/ghana-map',
  guinea: '/guinea-map', guineabissau: '/guineabissau-map', ivorycoast: '/ivorycoast-map',
  kenya: '/kenya-map', lesotho: '/lesotho-map', liberia: '/liberia-map',
  libya: '/libya-map', madagascar: '/madagascar-map', malawi: '/malawi-map',
  mali: '/mali-map', mauritania: '/mauritania-map', mauritius: '/mauritius-map',
  morocco: '/morocco-map', mozambique: '/mozambique-map', namibia: '/namibia-map',
  niger: '/niger-map', nigeria: '/nigeria-map', rwanda: '/rwanda-map',
  saotome: '/saotome-map', senegal: '/senegal-map', seychelles: '/seychelles-map',
  sierraleone: '/sierraleone-map', somalia: '/somalia-map', southafrica: '/southafrica-map',
  southsudan: '/southsudan-map', sudan: '/sudan-map', eswatini: '/eswatini-map',
  tanzania: '/tanzania-map', togo: '/togo-map', tunisia: '/tunisia-map',
  uganda: '/uganda-map', zambia: '/zambia-map', zimbabwe: '/zimbabwe-map',
};

const COUNTRY_LABELS: Record<string, { de: string; hu: string; ro: string; en: string }> = {
  algeria: { de: "Algerien", hu: "Algéria", ro: "Algeria", en: "Algeria" },
  angola: { de: "Angola", hu: "Angola", ro: "Angola", en: "Angola" },
  benin: { de: "Benin", hu: "Benin", ro: "Benin", en: "Benin" },
  botswana: { de: "Botsuana", hu: "Botswana", ro: "Botswana", en: "Botswana" },
  burkinafaso: { de: "Burkina Faso", hu: "Burkina Faso", ro: "Burkina Faso", en: "Burkina Faso" },
  burundi: { de: "Burundi", hu: "Burundi", ro: "Burundi", en: "Burundi" },
  capeverde: { de: "Kap Verde", hu: "Zöld-foki Köztársaság", ro: "Capul Verde", en: "Cape Verde" },
  cameroon: { de: "Kamerun", hu: "Kamerun", ro: "Camerun", en: "Cameroon" },
  centralafricanrepublic: { de: "Zentralafr. Rep.", hu: "Közép-afrikai Közt.", ro: "Rep. Centrafricană", en: "Central African Rep." },
  chad: { de: "Tschad", hu: "Csád", ro: "Ciad", en: "Chad" },
  comoros: { de: "Komoren", hu: "Comore-szigetek", ro: "Comore", en: "Comoros" },
  congo: { de: "Kongo", hu: "Kongó", ro: "Congo", en: "Congo" },
  drcongo: { de: "DR Kongo", hu: "Kongói Dem. Közt.", ro: "RD Congo", en: "DR Congo" },
  djibouti: { de: "Dschibuti", hu: "Dzsibuti", ro: "Djibouti", en: "Djibouti" },
  egypt: { de: "Ägypten", hu: "Egyiptom", ro: "Egipt", en: "Egypt" },
  equatorialguinea: { de: "Äquatorialguinea", hu: "Egyenlítői-Guinea", ro: "Guineea Ecuatorială", en: "Equatorial Guinea" },
  eritrea: { de: "Eritrea", hu: "Eritrea", ro: "Eritreea", en: "Eritrea" },
  ethiopia: { de: "Äthiopien", hu: "Etiópia", ro: "Etiopia", en: "Ethiopia" },
  gabon: { de: "Gabun", hu: "Gabon", ro: "Gabon", en: "Gabon" },
  gambia: { de: "Gambia", hu: "Gambia", ro: "Gambia", en: "Gambia" },
  ghana: { de: "Ghana", hu: "Ghána", ro: "Ghana", en: "Ghana" },
  guinea: { de: "Guinea", hu: "Guinea", ro: "Guineea", en: "Guinea" },
  guineabissau: { de: "Guinea-Bissau", hu: "Bissau-Guinea", ro: "Guineea-Bissau", en: "Guinea-Bissau" },
  ivorycoast: { de: "Elfenbeinküste", hu: "Elefántcsontpart", ro: "Coasta de Fildeș", en: "Ivory Coast" },
  kenya: { de: "Kenia", hu: "Kenya", ro: "Kenya", en: "Kenya" },
  lesotho: { de: "Lesotho", hu: "Lesotho", ro: "Lesotho", en: "Lesotho" },
  liberia: { de: "Liberia", hu: "Libéria", ro: "Liberia", en: "Liberia" },
  libya: { de: "Libyen", hu: "Líbia", ro: "Libia", en: "Libya" },
  madagascar: { de: "Madagaskar", hu: "Madagaszkár", ro: "Madagascar", en: "Madagascar" },
  malawi: { de: "Malawi", hu: "Malawi", ro: "Malawi", en: "Malawi" },
  mali: { de: "Mali", hu: "Mali", ro: "Mali", en: "Mali" },
  mauritania: { de: "Mauretanien", hu: "Mauritánia", ro: "Mauritania", en: "Mauritania" },
  mauritius: { de: "Mauritius", hu: "Mauritius", ro: "Mauritius", en: "Mauritius" },
  morocco: { de: "Marokko", hu: "Marokkó", ro: "Maroc", en: "Morocco" },
  mozambique: { de: "Mosambik", hu: "Mozambik", ro: "Mozambic", en: "Mozambique" },
  namibia: { de: "Namibia", hu: "Namíbia", ro: "Namibia", en: "Namibia" },
  niger: { de: "Niger", hu: "Niger", ro: "Niger", en: "Niger" },
  nigeria: { de: "Nigeria", hu: "Nigéria", ro: "Nigeria", en: "Nigeria" },
  rwanda: { de: "Ruanda", hu: "Ruanda", ro: "Rwanda", en: "Rwanda" },
  saotome: { de: "São Tomé", hu: "São Tomé", ro: "São Tomé", en: "São Tomé" },
  senegal: { de: "Senegal", hu: "Szenegál", ro: "Senegal", en: "Senegal" },
  seychelles: { de: "Seychellen", hu: "Seychelle-szigetek", ro: "Seychelles", en: "Seychelles" },
  sierraleone: { de: "Sierra Leone", hu: "Sierra Leone", ro: "Sierra Leone", en: "Sierra Leone" },
  somalia: { de: "Somalia", hu: "Szomália", ro: "Somalia", en: "Somalia" },
  southafrica: { de: "Südafrika", hu: "Dél-Afrika", ro: "Africa de Sud", en: "South Africa" },
  southsudan: { de: "Südsudan", hu: "Dél-Szudán", ro: "Sudanul de Sud", en: "South Sudan" },
  sudan: { de: "Sudan", hu: "Szudán", ro: "Sudan", en: "Sudan" },
  eswatini: { de: "Eswatini", hu: "Eswatini", ro: "Eswatini", en: "Eswatini" },
  tanzania: { de: "Tansania", hu: "Tanzánia", ro: "Tanzania", en: "Tanzania" },
  togo: { de: "Togo", hu: "Togo", ro: "Togo", en: "Togo" },
  tunisia: { de: "Tunesien", hu: "Tunézia", ro: "Tunisia", en: "Tunisia" },
  uganda: { de: "Uganda", hu: "Uganda", ro: "Uganda", en: "Uganda" },
  zambia: { de: "Sambia", hu: "Zambia", ro: "Zambia", en: "Zambia" },
  zimbabwe: { de: "Simbabwe", hu: "Zimbabwe", ro: "Zimbabwe", en: "Zimbabwe" },
};

const COMING_SOON: Partial<Record<Lang, string>> = {
  de: "Bald verfügbar", hu: "Hamarosan", ro: "În curând", en: "Coming soon",
  fr: "Bientôt disponible", it: "Prossimamente", es: "Próximamente",
  pl: "Wkrótce", nl: "Binnenkort", at: "Bald verfügbar", gb: "Coming soon",
};

const MIN_SCALE = 1;
const MAX_SCALE = 50;

const countriesBySlug: Record<string, { id: string; path: string }[]> = {};
for (const f of africaMap) {
  if (!countriesBySlug[f.id]) countriesBySlug[f.id] = [];
  countriesBySlug[f.id].push(f);
}
const aggregated = Object.entries(countriesBySlug).map(([slug, parts]) => ({
  id: slug,
  path: parts.map((p) => p.path).join(""),
}));

export default function AfricaMap({ lang }: AfricaMapProps) {
  const router = useRouter();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const lastPinch = useRef<{ dist: number; cx: number; cy: number } | null>(null);
  const lastPan = useRef<{ x: number; y: number } | null>(null);
  const dragged = useRef(false);

  const [hovered, setHovered] = useState<string | null>(null);
  const [view, setView] = useState({ x: 0, y: 0, scale: 1 });
  const [toast, setToast] = useState<{ title: string; info: string } | null>(null);

  const [vbX, vbY, vbW, vbH] = africaViewBox.split(" ").map(Number);

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
        ref={svgRef} viewBox={africaViewBox}
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
            {AFRICA_CAPITALS.map((cap) => {
              const labels = COUNTRY_LABELS[cap.countryId];
              const countryLabel = labels ? labels[lang as keyof typeof labels] || labels.en : cap.countryId;
              const capitalName = cap.name[lang as keyof typeof cap.name] || cap.name.en;
              const [cx, cy] = projectCoordsAF(cap.lon, cap.lat);
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
