"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { asiaMap, asiaViewBox, projectCoordsAS } from "@/lib/visualLab/maps/asia.svg";
import { ASIA_CAPITALS } from "@/lib/visualLab/maps/asiaCapitals";
import type { Lang } from "@/lib/visualLab/maps/resolver";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Maximize2 } from "lucide-react";
import type { WheelEvent as RWheelEvent, PointerEvent as RPointerEvent } from "react";

interface AsiaMapProps {
  lang: Lang;
}

const COUNTRY_BINDINGS: Record<string, string> = {
  china: "/china-map", japan: "/japan-map", southkorea: "/southkorea-map",
  northkorea: "/northkorea-map", mongolia: "/mongolia-map", vietnam: "/vietnam-map",
  laos: "/laos-map", cambodia: "/cambodia-map", thailand: "/thailand-map",
  myanmar: "/myanmar-map", malaysia: "/malaysia-map", singapore: "/singapore-map",
  indonesia: "/indonesia-map", philippines: "/philippines-map", brunei: "/brunei-map",
  india: "/india-map", pakistan: "/pakistan-map", bangladesh: "/bangladesh-map",
  srilanka: "/srilanka-map", nepal: "/nepal-map", bhutan: "/bhutan-map",
  maldives: "/maldives-map", afghanistan: "/afghanistan-map", iran: "/iran-map",
  iraq: "/iraq-map", syria: "/syria-map", lebanon: "/lebanon-map",
  jordan: "/jordan-map", israel: "/israel-map", palestine: "/palestine-map",
  saudiarabia: "/saudiarabia-map", yemen: "/yemen-map", oman: "/oman-map",
  uae: "/uae-map", qatar: "/qatar-map", bahrain: "/bahrain-map",
  kuwait: "/kuwait-map", turkey: "/turkey-map", cyprus: "/cyprus-map",
  georgia: "/georgia-map", armenia: "/armenia-map", azerbaijan: "/azerbaijan-map",
  kazakhstan: "/kazakhstan-map", uzbekistan: "/uzbekistan-map", turkmenistan: "/turkmenistan-map",
  kyrgyzstan: "/kyrgyzstan-map", tajikistan: "/tajikistan-map", taiwan: "/taiwan-map",
  timorleste: "/timorleste-map",
};

const COUNTRY_LABELS: Record<string, { de: string; hu: string; ro: string; en: string }> = {
  china:        { de: "China",          hu: "Kína",            ro: "China",          en: "China" },
  japan:        { de: "Japan",          hu: "Japán",           ro: "Japonia",        en: "Japan" },
  southkorea:   { de: "Südkorea",       hu: "Dél-Korea",       ro: "Coreea de Sud",  en: "South Korea" },
  northkorea:   { de: "Nordkorea",      hu: "Észak-Korea",     ro: "Coreea de Nord", en: "North Korea" },
  mongolia:     { de: "Mongolei",       hu: "Mongólia",        ro: "Mongolia",       en: "Mongolia" },
  vietnam:      { de: "Vietnam",        hu: "Vietnám",         ro: "Vietnam",        en: "Vietnam" },
  laos:         { de: "Laos",           hu: "Laosz",           ro: "Laos",           en: "Laos" },
  cambodia:     { de: "Kambodscha",     hu: "Kambodzsa",       ro: "Cambodgia",      en: "Cambodia" },
  thailand:     { de: "Thailand",       hu: "Thaiföld",        ro: "Thailanda",      en: "Thailand" },
  myanmar:      { de: "Myanmar",        hu: "Mianmar",         ro: "Myanmar",        en: "Myanmar" },
  malaysia:     { de: "Malaysia",       hu: "Malajzia",        ro: "Malaezia",       en: "Malaysia" },
  singapore:    { de: "Singapur",       hu: "Szingapúr",       ro: "Singapore",      en: "Singapore" },
  indonesia:    { de: "Indonesien",     hu: "Indonézia",       ro: "Indonezia",      en: "Indonesia" },
  philippines:  { de: "Philippinen",    hu: "Fülöp-szigetek",  ro: "Filipine",       en: "Philippines" },
  brunei:       { de: "Brunei",         hu: "Brunei",          ro: "Brunei",         en: "Brunei" },
  india:        { de: "Indien",         hu: "India",           ro: "India",          en: "India" },
  pakistan:     { de: "Pakistan",       hu: "Pakisztán",       ro: "Pakistan",       en: "Pakistan" },
  bangladesh:   { de: "Bangladesch",    hu: "Banglades",       ro: "Bangladesh",     en: "Bangladesh" },
  srilanka:     { de: "Sri Lanka",      hu: "Srí Lanka",       ro: "Sri Lanka",      en: "Sri Lanka" },
  nepal:        { de: "Nepal",          hu: "Nepál",           ro: "Nepal",          en: "Nepal" },
  bhutan:       { de: "Bhutan",         hu: "Bhután",          ro: "Bhutan",         en: "Bhutan" },
  maldives:     { de: "Malediven",      hu: "Maldív-szigetek", ro: "Maldive",        en: "Maldives" },
  afghanistan:  { de: "Afghanistan",    hu: "Afganisztán",     ro: "Afganistan",     en: "Afghanistan" },
  iran:         { de: "Iran",           hu: "Irán",            ro: "Iran",           en: "Iran" },
  iraq:         { de: "Irak",           hu: "Irak",            ro: "Irak",           en: "Iraq" },
  syria:        { de: "Syrien",         hu: "Szíria",          ro: "Siria",          en: "Syria" },
  lebanon:      { de: "Libanon",        hu: "Libanon",         ro: "Liban",          en: "Lebanon" },
  jordan:       { de: "Jordanien",      hu: "Jordánia",        ro: "Iordania",       en: "Jordan" },
  israel:       { de: "Israel",         hu: "Izrael",          ro: "Israel",         en: "Israel" },
  palestine:    { de: "Palästina",      hu: "Palesztina",      ro: "Palestina",      en: "Palestine" },
  saudiarabia:  { de: "Saudi-Arabien",  hu: "Szaúd-Arábia",    ro: "Arabia Saudită", en: "Saudi Arabia" },
  yemen:        { de: "Jemen",          hu: "Jemen",           ro: "Yemen",          en: "Yemen" },
  oman:         { de: "Oman",           hu: "Omán",            ro: "Oman",           en: "Oman" },
  uae:          { de: "VAE",            hu: "EAE",             ro: "EAU",            en: "UAE" },
  qatar:        { de: "Katar",          hu: "Katar",           ro: "Qatar",          en: "Qatar" },
  bahrain:      { de: "Bahrain",        hu: "Bahrein",         ro: "Bahrain",        en: "Bahrain" },
  kuwait:       { de: "Kuwait",         hu: "Kuvait",          ro: "Kuwait",         en: "Kuwait" },
  turkey:       { de: "Türkei",         hu: "Törökország",     ro: "Turcia",         en: "Turkey" },
  cyprus:       { de: "Zypern",         hu: "Ciprus",          ro: "Cipru",          en: "Cyprus" },
  georgia:      { de: "Georgien",       hu: "Grúzia",          ro: "Georgia",        en: "Georgia" },
  armenia:      { de: "Armenien",       hu: "Örményország",    ro: "Armenia",        en: "Armenia" },
  azerbaijan:   { de: "Aserbaidschan",  hu: "Azerbajdzsán",    ro: "Azerbaidjan",    en: "Azerbaijan" },
  kazakhstan:   { de: "Kasachstan",     hu: "Kazahsztán",      ro: "Kazahstan",      en: "Kazakhstan" },
  uzbekistan:   { de: "Usbekistan",     hu: "Üzbegisztán",     ro: "Uzbekistan",     en: "Uzbekistan" },
  turkmenistan: { de: "Turkmenistan",   hu: "Türkmenisztán",   ro: "Turkmenistan",   en: "Turkmenistan" },
  kyrgyzstan:   { de: "Kirgisistan",    hu: "Kirgizisztán",    ro: "Kârgâzstan",     en: "Kyrgyzstan" },
  tajikistan:   { de: "Tadschikistan",  hu: "Tádzsikisztán",   ro: "Tadjikistan",    en: "Tajikistan" },
  taiwan:       { de: "Taiwan",         hu: "Tajvan",          ro: "Taiwan",         en: "Taiwan" },
  timorleste:   { de: "Osttimor",       hu: "Kelet-Timor",     ro: "Timorul de Est", en: "Timor-Leste" },
};

const COMING_SOON: Partial<Record<Lang, string>> = {
  de: "Bald verfügbar", hu: "Hamarosan", ro: "În curând", en: "Coming soon",
  fr: "Bientôt disponible", it: "Prossimamente", es: "Próximamente",
  pl: "Wkrótce", nl: "Binnenkort", at: "Bald verfügbar", gb: "Coming soon",
};

const MIN_SCALE = 1;
const MAX_SCALE = 50;

const countriesBySlug: Record<string, { id: string; path: string }[]> = {};
for (const f of asiaMap) {
  if (!countriesBySlug[f.id]) countriesBySlug[f.id] = [];
  countriesBySlug[f.id].push(f);
}
const aggregated = Object.entries(countriesBySlug).map(([slug, parts]) => ({
  id: slug,
  path: parts.map((p) => p.path).join(""),
}));

export default function AsiaMap({ lang }: AsiaMapProps) {
  const router = useRouter();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const lastPinch = useRef<{ dist: number; cx: number; cy: number } | null>(null);
  const lastPan = useRef<{ x: number; y: number } | null>(null);
  const dragged = useRef(false);

  const [hovered, setHovered] = useState<string | null>(null);
  const [view, setView] = useState({ x: 0, y: 0, scale: 1 });
  const [toast, setToast] = useState<{ title: string; info: string } | null>(null);

  const [vbX, vbY, vbW, vbH] = asiaViewBox.split(" ").map(Number);

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
        ref={svgRef} viewBox={asiaViewBox}
        className="w-full h-[calc(100vh-90px)] lg:h-[75vh] select-none"
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
            {ASIA_CAPITALS.map((cap) => {
              const labels = COUNTRY_LABELS[cap.countryId];
              const countryLabel = labels ? labels[lang as keyof typeof labels] || labels.en : cap.countryId;
              const capitalName = cap.name[lang as keyof typeof cap.name] || cap.name.en;
              const [cx, cy] = projectCoordsAS(cap.lon, cap.lat);
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
