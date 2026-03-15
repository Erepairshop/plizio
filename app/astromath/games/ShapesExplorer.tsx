"use client";
// ShapesExplorer — Shape discovery for Grade 1 (i7)
// Teaches: shape names, sides, corners — tap to count.
// No wrong answers — pure guided discovery.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Shapes Explorer",
    intro: "Let's discover shapes and their properties!",
    thisIs: "This is a",
    tapSides: "Tap each side to count!",
    sides: "sides",
    corners: "corners",
    tapCorners: "Now tap the corners!",
    tapReveal: "Tap to see the summary",
    has: "has",
    and: "and",
    next: "Next",
    done: "Amazing!",
    circle: "circle", triangle: "triangle", square: "square", rectangle: "rectangle",
    pentagon: "pentagon", hexagon: "hexagon",
    special: "A circle has NO sides and NO corners — it's round!",
  },
  hu: {
    title: "Alakzatok felfedezés",
    intro: "Fedezzük fel az alakzatokat és tulajdonságaikat!",
    thisIs: "Ez egy",
    tapSides: "Koppints minden oldalra a számoláshoz!",
    sides: "oldal",
    corners: "sarok",
    tapCorners: "Most koppints a sarkokra!",
    tapReveal: "Koppints az összefoglalóhoz",
    has: "van",
    and: "és",
    next: "Következő",
    done: "Fantasztikus!",
    circle: "kör", triangle: "háromszög", square: "négyzet", rectangle: "téglalap",
    pentagon: "ötszög", hexagon: "hatszög",
    special: "A körnek NINCS oldala és NINCS sarka — kerek!",
  },
  de: {
    title: "Formen entdecken",
    intro: "Entdecken wir Formen und ihre Eigenschaften!",
    thisIs: "Das ist ein",
    tapSides: "Tippe auf jede Seite zum Zählen!",
    sides: "Seiten",
    corners: "Ecken",
    tapCorners: "Jetzt tippe auf die Ecken!",
    tapReveal: "Tippe für die Zusammenfassung",
    has: "hat",
    and: "und",
    next: "Weiter",
    done: "Super!",
    circle: "Kreis", triangle: "Dreieck", square: "Quadrat", rectangle: "Rechteck",
    pentagon: "Fünfeck", hexagon: "Sechseck",
    special: "Ein Kreis hat KEINE Seiten und KEINE Ecken — er ist rund!",
  },
  ro: {
    title: "Explorare forme",
    intro: "Să descoperim formele și proprietățile lor!",
    thisIs: "Aceasta este un",
    tapSides: "Atinge fiecare latură pentru a număra!",
    sides: "laturi",
    corners: "colțuri",
    tapCorners: "Acum atinge colțurile!",
    tapReveal: "Atinge pentru rezumat",
    has: "are",
    and: "și",
    next: "Înainte",
    done: "Excelent!",
    circle: "cerc", triangle: "triunghi", square: "pătrat", rectangle: "dreptunghi",
    pentagon: "pentagon", hexagon: "hexagon",
    special: "Un cerc NU are laturi și NU are colțuri — este rotund!",
  },
};

// ─── Shape data ──────────────────────────────────────────────────────────────
interface ShapeRound {
  key: string; // name key in LABELS
  sideCount: number;
  cornerCount: number;
  color: string;
  // SVG points for polygon (or null for circle)
  points: [number, number][] | null;
}

const SHAPES: ShapeRound[] = [
  {
    key: "triangle", sideCount: 3, cornerCount: 3, color: "#EF4444",
    points: [[60, 10], [110, 100], [10, 100]],
  },
  {
    key: "square", sideCount: 4, cornerCount: 4, color: "#3B82F6",
    points: [[20, 20], [100, 20], [100, 100], [20, 100]],
  },
  {
    key: "rectangle", sideCount: 4, cornerCount: 4, color: "#10B981",
    points: [[10, 30], [110, 30], [110, 90], [10, 90]],
  },
  {
    key: "circle", sideCount: 0, cornerCount: 0, color: "#F59E0B",
    points: null,
  },
  {
    key: "pentagon", sideCount: 5, cornerCount: 5, color: "#8B5CF6",
    points: [[60, 10], [110, 45], [95, 100], [25, 100], [10, 45]],
  },
  {
    key: "hexagon", sideCount: 6, cornerCount: 6, color: "#EC4899",
    points: [[60, 10], [105, 30], [105, 80], [60, 100], [15, 80], [15, 30]],
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Shape SVG ──────────────────────────────────────────────────────────────
function ShapeSVG({ shape, tappedSides, tappedCorners, onTapSide, onTapCorner, phase }: {
  shape: ShapeRound;
  tappedSides: Set<number>;
  tappedCorners: Set<number>;
  onTapSide: (i: number) => void;
  onTapCorner: (i: number) => void;
  phase: "sides" | "corners" | "done";
}) {
  if (!shape.points) {
    // Circle
    return (
      <svg width={120} height={120} viewBox="0 0 120 120">
        <circle cx={60} cy={60} r={48} fill={`${shape.color}22`} stroke={shape.color} strokeWidth={3} />
      </svg>
    );
  }

  const pts = shape.points;
  const polygon = pts.map(p => p.join(",")).join(" ");

  return (
    <svg width={120} height={120} viewBox="0 0 120 120">
      <polygon points={polygon} fill={`${shape.color}22`} stroke={shape.color} strokeWidth={2.5} />

      {/* Sides as clickable lines */}
      {phase === "sides" && pts.map((p, i) => {
        const next = pts[(i + 1) % pts.length];
        const mx = (p[0] + next[0]) / 2;
        const my = (p[1] + next[1]) / 2;
        return (
          <g key={`s-${i}`} onClick={() => onTapSide(i)} style={{ cursor: "pointer" }}>
            <line x1={p[0]} y1={p[1]} x2={next[0]} y2={next[1]}
              stroke={tappedSides.has(i) ? "#00FF88" : shape.color}
              strokeWidth={tappedSides.has(i) ? 4 : 2.5} />
            {tappedSides.has(i) && (
              <text x={mx} y={my - 6} textAnchor="middle" fill="#00FF88" fontSize={11} fontWeight={900}>
                {i + 1}
              </text>
            )}
          </g>
        );
      })}

      {/* Corners as clickable circles */}
      {phase === "corners" && pts.map((p, i) => (
        <g key={`c-${i}`} onClick={() => onTapCorner(i)} style={{ cursor: "pointer" }}>
          <circle cx={p[0]} cy={p[1]} r={tappedCorners.has(i) ? 8 : 6}
            fill={tappedCorners.has(i) ? "#00FF88" : "rgba(255,255,255,0.3)"}
            stroke={tappedCorners.has(i) ? "#00FF88" : shape.color} strokeWidth={2} />
          {tappedCorners.has(i) && (
            <text x={p[0]} y={p[1] + 4} textAnchor="middle" fill="white" fontSize={9} fontWeight={900}>
              {i + 1}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
const ShapesExplorer = memo(function ShapesExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => shuffle(SHAPES));
  const [idx, setIdx] = useState(0);
  const [tappedSides, setTappedSides] = useState<Set<number>>(new Set());
  const [tappedCorners, setTappedCorners] = useState<Set<number>>(new Set());
  // Phases: "sides" → "corners" → "done"
  const [phase, setPhase] = useState<"sides" | "corners" | "done">("sides");

  const shape = rounds[idx];
  const isCircle = shape.points === null;
  const allSidesTapped = tappedSides.size >= shape.sideCount;
  const allCornersTapped = tappedCorners.size >= shape.cornerCount;

  const handleTapSide = useCallback((i: number) => {
    if (phase !== "sides") return;
    setTappedSides(prev => new Set([...prev, i]));
  }, [phase]);

  const handleTapCorner = useCallback((i: number) => {
    if (phase !== "corners") return;
    setTappedCorners(prev => new Set([...prev, i]));
  }, [phase]);

  const handleNext = useCallback(() => {
    if (idx + 1 >= rounds.length) {
      onDone(rounds.length, rounds.length);
      return;
    }
    setIdx(i => i + 1);
    setTappedSides(new Set());
    setTappedCorners(new Set());
    setPhase("sides");
  }, [idx, rounds.length, onDone]);

  // Auto-advance circle (no sides/corners to tap)
  const circleStep = isCircle && phase === "sides";

  const shapeName = (lbl as Record<string, string>)[shape.key] ?? shape.key;

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {/* Progress */}
      <div className="flex gap-1.5 w-full">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {idx === 0 && phase === "sides" && (
        <p className="text-white/50 text-xs font-medium text-center px-4">{lbl.intro}</p>
      )}

      <AnimatePresence mode="wait">
        <motion.div key={`${idx}-${phase}`}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* Shape name */}
          <p className="text-lg font-black" style={{ color: shape.color }}>
            {lbl.thisIs} {shapeName}
          </p>

          {/* Shape SVG */}
          <div className="rounded-2xl p-4 flex items-center justify-center"
            style={{ background: `${shape.color}10`, border: `1.5px solid ${shape.color}30` }}>
            <ShapeSVG shape={shape} tappedSides={tappedSides} tappedCorners={tappedCorners}
              onTapSide={handleTapSide} onTapCorner={handleTapCorner} phase={phase} />
          </div>

          {/* Circle special case */}
          {circleStep && (
            <>
              <p className="text-white/60 text-xs font-bold text-center px-4">{lbl.special}</p>
              <motion.button onClick={() => setPhase("done")}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.tapReveal}
              </motion.button>
            </>
          )}

          {/* Sides phase (non-circle) */}
          {!isCircle && phase === "sides" && (
            <>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.tapSides}</p>
              <div className="text-center">
                <span className="text-xl font-black" style={{ color: allSidesTapped ? "#00FF88" : color }}>
                  {tappedSides.size} / {shape.sideCount}
                </span>
                <span className="text-white/40 text-sm ml-2">{lbl.sides}</span>
              </div>
              {allSidesTapped && (
                <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  onClick={() => setPhase("corners")}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm"
                  style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.tapCorners}
                </motion.button>
              )}
            </>
          )}

          {/* Corners phase */}
          {!isCircle && phase === "corners" && (
            <>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.tapCorners}</p>
              <div className="text-center">
                <span className="text-xl font-black" style={{ color: allCornersTapped ? "#00FF88" : color }}>
                  {tappedCorners.size} / {shape.cornerCount}
                </span>
                <span className="text-white/40 text-sm ml-2">{lbl.corners}</span>
              </div>
              {allCornersTapped && (
                <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  onClick={() => setPhase("done")}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm"
                  style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.tapReveal}
                </motion.button>
              )}
            </>
          )}

          {/* Done phase — summary */}
          {phase === "done" && (
            <>
              <motion.div
                className="w-full rounded-2xl px-5 py-4"
                style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                animate={{ scale: [0.95, 1.02, 1] }}
                transition={{ duration: 0.4 }}>
                <p className="text-center text-xl font-black" style={{ color: "#00FF88" }}>
                  {isCircle
                    ? `${shapeName}: 0 ${lbl.sides}, 0 ${lbl.corners}`
                    : `${shapeName}: ${shape.sideCount} ${lbl.sides} ${lbl.and} ${shape.cornerCount} ${lbl.corners}`}
                </p>
              </motion.div>

              <motion.button onClick={handleNext}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                whileTap={{ scale: 0.97 }}>
                {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={16} />
              </motion.button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ShapesExplorer;
