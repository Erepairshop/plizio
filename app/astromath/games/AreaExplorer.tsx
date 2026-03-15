"use client";
// AreaExplorer — Area discovery for Grade 4 Geometry
// Teaches: Area = length × width using an interactive SVG grid
// Students tap each row to fill it, counting squares as they go.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ─────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    concept: "Area = length × width",
    instruction: "Tap each row to count the squares!",
    squares: "squares",
    total: "total squares",
    discover: "You discovered:",
    formula: "Area",
    unit: "sq units",
    next: "Next", done: "Brilliant! ✨", tap: "Tap row",
    rowLabel: "row",
  },
  hu: {
    concept: "Terület = hossz × szélesség",
    instruction: "Koppints minden sorra a négyzetek megszámlálásához!",
    squares: "négyzet",
    total: "négyzet összesen",
    discover: "Felfedezted:",
    formula: "Terület",
    unit: "n. egység",
    next: "Következő", done: "Fantasztikus! ✨", tap: "Koppints",
    rowLabel: "sor",
  },
  de: {
    concept: "Fläche = Länge × Breite",
    instruction: "Tippe auf jede Reihe und zähle die Quadrate!",
    squares: "Quadrate",
    total: "Quadrate gesamt",
    discover: "Du hast entdeckt:",
    formula: "Fläche",
    unit: "Flächeneinheiten",
    next: "Weiter", done: "Fantastisch! ✨", tap: "Reihe antippen",
    rowLabel: "Reihe",
  },
  ro: {
    concept: "Arie = lungime × lățime",
    instruction: "Atinge fiecare rând pentru a număra pătratele!",
    squares: "pătrate",
    total: "pătrate total",
    discover: "Ai descoperit:",
    formula: "Arie",
    unit: "u.p.",
    next: "Înainte", done: "Fantastic! ✨", tap: "Atinge",
    rowLabel: "rând",
  },
};

// ─── Round data ───────────────────────────────────────────────────────────────
interface Round { l: number; w: number }  // l = columns, w = rows

const ROUND_POOL: Round[] = [
  { l: 4, w: 3 },  // A=12
  { l: 5, w: 2 },  // A=10
  { l: 6, w: 3 },  // A=18
  { l: 4, w: 4 },  // A=16
  { l: 5, w: 3 },  // A=15
  { l: 3, w: 4 },  // A=12
  { l: 6, w: 2 },  // A=12
  { l: 5, w: 4 },  // A=20
];

function generateRounds(): Round[] {
  const pool = [...ROUND_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 6);
}

// ─── SVG Grid ─────────────────────────────────────────────────────────────────
const CELL = 38; // px per grid cell

function AreaGrid({
  l, w, filledRows, color,
}: {
  l: number; w: number; filledRows: number; color: string;
}) {
  const svgW = l * CELL + 1;
  const svgH = w * CELL + 1;

  return (
    <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`}
      style={{ display: "block", maxWidth: "100%" }}>
      {/* Filled row backgrounds */}
      {Array.from({ length: filledRows }).map((_, rowIdx) => (
        <motion.rect key={rowIdx}
          x={0} y={rowIdx * CELL} width={l * CELL} height={CELL}
          fill={`${color}35`}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }} />
      ))}

      {/* Grid lines */}
      {Array.from({ length: w + 1 }).map((_, i) => (
        <line key={`h${i}`}
          x1={0} y1={i * CELL} x2={l * CELL} y2={i * CELL}
          stroke={i < filledRows || i === filledRows
            ? `${color}80`
            : "rgba(255,255,255,0.2)"}
          strokeWidth={i === 0 || i === w ? 2 : 1} />
      ))}
      {Array.from({ length: l + 1 }).map((_, i) => (
        <line key={`v${i}`}
          x1={i * CELL} y1={0} x2={i * CELL} y2={w * CELL}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth={i === 0 || i === l ? 2 : 1} />
      ))}

      {/* Row square count labels (revealed rows) */}
      {Array.from({ length: filledRows }).map((_, rowIdx) => (
        <text key={rowIdx}
          x={l * CELL / 2} y={rowIdx * CELL + CELL * 0.65}
          textAnchor="middle" fontSize={13} fontWeight="800"
          fill={color}>
          {l}
        </text>
      ))}

      {/* Dimension labels */}
      {/* Length label: bottom */}
      <text x={l * CELL / 2} y={w * CELL + 16}
        textAnchor="middle" fontSize={11} fontWeight="700"
        fill="rgba(255,255,255,0.5)">
        {l}
      </text>
      {/* Width label: right side */}
      <text x={l * CELL + 12} y={w * CELL / 2 + 4}
        textAnchor="middle" fontSize={11} fontWeight="700"
        fill="rgba(255,255,255,0.5)">
        {w}
      </text>
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const AreaExplorer = memo(function AreaExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState<Round[]>(generateRounds);
  const [idx, setIdx] = useState(0);
  const [filledRows, setFilledRows] = useState(0);
  const [completed, setCompleted] = useState(0);

  const { l, w } = rounds[idx];
  const area = l * w;
  const allFilled = filledRows === w;
  const currentCount = filledRows * l;

  const tapNextRow = () => {
    if (filledRows < w) setFilledRows(r => r + 1);
  };

  const next = useCallback(() => {
    const newCompleted = completed + 1;
    setCompleted(newCompleted);
    setFilledRows(0);
    if (idx + 1 >= rounds.length) { onDone(newCompleted, rounds.length); return; }
    setIdx(i => i + 1);
  }, [idx, rounds.length, onDone, completed]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-1.5">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Equation */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 py-1">
          <span className="text-4xl font-black" style={{ color }}>{l}</span>
          <span className="text-2xl font-bold text-white/40">×</span>
          <span className="text-4xl font-black" style={{ color }}>{w}</span>
          <span className="text-2xl text-white/40 font-bold">=</span>
          <motion.span className="text-4xl font-black"
            style={{ color: allFilled ? "#00FF88" : "rgba(255,255,255,0.18)" }}
            animate={allFilled ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.4 }}>
            {allFilled ? area : "?"}
          </motion.span>
        </motion.div>
      </AnimatePresence>

      {/* Concept + instruction */}
      <div className="rounded-xl px-4 py-2.5 text-center"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <p className="text-white/50 text-xs font-bold">{lbl.concept}</p>
        <p className="text-white/70 text-xs font-bold mt-0.5">{lbl.instruction}</p>
      </div>

      {/* Grid + running counter */}
      <div className="flex flex-col items-center gap-3">
        {/* Grid */}
        <div className="relative flex justify-center rounded-2xl p-4 pb-6 w-full"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <AreaGrid l={l} w={w} filledRows={filledRows} color={color} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Running counter */}
        <div className="flex items-center gap-3">
          <AnimatePresence mode="wait">
            <motion.span key={currentCount}
              initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="text-3xl font-black" style={{ color: currentCount > 0 ? color : "rgba(255,255,255,0.2)" }}>
              {currentCount}
            </motion.span>
          </AnimatePresence>
          <span className="text-white/50 text-sm font-bold">{lbl.squares}</span>
        </div>

        {/* Tap next row button */}
        {!allFilled && (
          <motion.button onClick={tapNextRow}
            className="px-8 py-3 rounded-2xl font-black text-sm"
            style={{
              background: `${color}18`,
              border: `2px solid ${color}60`,
              color,
            }}
            whileTap={{ scale: 0.93 }}>
            + {lbl.rowLabel} {filledRows + 1}
          </motion.button>
        )}
      </div>

      {/* Result */}
      <AnimatePresence>
        {allFilled && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3">
            <motion.div className="w-full rounded-2xl px-5 py-4 text-center"
              style={{ background: "rgba(0,255,136,0.10)", border: "2px solid rgba(0,255,136,0.3)" }}
              animate={{ scale: [0.92, 1.02, 1] }} transition={{ duration: 0.5 }}>
              <p className="text-white/50 text-xs font-bold mb-2">{lbl.discover}</p>
              {/* Step-by-step formula */}
              <div className="flex flex-col items-center gap-1">
                <p className="text-base font-black text-white/80">
                  {w} {lbl.rowLabel} × {l} {lbl.squares}
                  <span className="text-white/40 mx-2">=</span>
                  <span style={{ color: "#00FF88" }}>{area}</span>
                  <span className="text-white/40 ml-1">{lbl.squares}</span>
                </p>
                <p className="text-base font-black text-white/70">
                  {lbl.formula} = {l} × {w} = <span style={{ color: "#00FF88" }}>{area}</span>
                  <span className="text-white/40 ml-1">{lbl.unit}</span>
                </p>
              </div>
            </motion.div>

            <motion.button onClick={next}
              className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}>
              {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default AreaExplorer;
