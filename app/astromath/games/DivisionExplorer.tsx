"use client";
// DivisionExplorer — Division as equal groups for Grade 4
// Teaches: 24 ÷ 4 = 6 → split 24 into 4 equal groups of 6
// Students tap each group box to "fill" it and see the quotient.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ─────────────────────────────────────────────────────────────
type LblSet = {
  concept: string; instruction: string;
  groupOf: (q: number) => string;
  discover: string;
  formula: (a: number, b: number, q: number) => string;
  next: string; done: string; tap: string;
};

const LABELS: Record<string, LblSet> = {
  en: {
    concept: "Division = sharing equally into groups!",
    instruction: "Tap each group to fill it!",
    groupOf: (q) => `${q} each`,
    discover: "You discovered:",
    formula: (a, b, q) => `${a} ÷ ${b} = ${q}  (${q} in each group)`,
    next: "Next", done: "Brilliant! ✨", tap: "Tap",
  },
  hu: {
    concept: "Osztás = egyenlő elosztás csoportokba!",
    instruction: "Koppints minden csoportra és töltsd fel!",
    groupOf: (q) => `${q} darab`,
    discover: "Felfedezted:",
    formula: (a, b, q) => `${a} ÷ ${b} = ${q}  (minden csoportban ${q})`,
    next: "Következő", done: "Fantasztikus! ✨", tap: "Koppints",
  },
  de: {
    concept: "Division = gleichmäßig in Gruppen aufteilen!",
    instruction: "Tippe auf jede Gruppe und fülle sie!",
    groupOf: (q) => `je ${q}`,
    discover: "Du hast entdeckt:",
    formula: (a, b, q) => `${a} ÷ ${b} = ${q}  (je ${q} pro Gruppe)`,
    next: "Weiter", done: "Fantastisch! ✨", tap: "Antippen",
  },
  ro: {
    concept: "Împărțirea = distribuire egală în grupuri!",
    instruction: "Atinge fiecare grup pentru a-l umple!",
    groupOf: (q) => `${q} fiecare`,
    discover: "Ai descoperit:",
    formula: (a, b, q) => `${a} ÷ ${b} = ${q}  (${q} în fiecare grup)`,
    next: "Înainte", done: "Fantastic! ✨", tap: "Atinge",
  },
};

// ─── Round data (b ∈ {2,3,4} for clean group display) ─────────────────────────
interface Round { a: number; b: number }

const ROUND_POOL: Round[] = [
  { a: 12, b: 3 },  // q=4
  { a: 10, b: 2 },  // q=5
  { a: 15, b: 3 },  // q=5
  { a: 24, b: 4 },  // q=6
  { a: 16, b: 4 },  // q=4
  { a: 9,  b: 3 },  // q=3
  { a: 18, b: 3 },  // q=6
  { a: 12, b: 4 },  // q=3
  { a: 8,  b: 2 },  // q=4
  { a: 20, b: 4 },  // q=5
];

function generateRounds(): Round[] {
  const pool = [...ROUND_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 6);
}

// ─── Dot grid inside a group box ─────────────────────────────────────────────
function DotGrid({ count, revealed, color }: { count: number; revealed: boolean; color: string }) {
  // Arrange dots in rows of max 3
  const rowLen = count <= 4 ? 2 : 3;
  const rows = Math.ceil(count / rowLen);
  return (
    <div className="flex flex-col items-center gap-1 py-1">
      {Array.from({ length: rows }).map((_, rowIdx) => {
        const dotsInRow = Math.min(rowLen, count - rowIdx * rowLen);
        return (
          <div key={rowIdx} className="flex gap-1.5">
            {Array.from({ length: dotsInRow }).map((_, colIdx) => (
              <motion.div key={colIdx}
                initial={{ scale: 0, opacity: 0 }}
                animate={revealed ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: (rowIdx * rowLen + colIdx) * 0.06, type: "spring", stiffness: 300 }}
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: color }} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

// ─── Single group box ─────────────────────────────────────────────────────────
function GroupBox({
  q, revealed, color, onTap, lbl,
}: {
  q: number; revealed: boolean; color: string;
  onTap: () => void; lbl: LblSet;
}) {
  return (
    <motion.button
      onClick={onTap}
      disabled={revealed}
      className="flex flex-col items-center justify-center rounded-2xl py-3 px-2 min-h-[96px]"
      style={{
        background: revealed ? `${color}18` : "rgba(255,255,255,0.06)",
        border: `2px solid ${revealed ? color : "rgba(255,255,255,0.15)"}`,
      }}
      whileTap={!revealed ? { scale: 0.92 } : {}}
    >
      {revealed ? (
        <>
          <DotGrid count={q} revealed={true} color={color} />
          <motion.span initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
            className="text-sm font-black mt-1.5" style={{ color }}>
            {lbl.groupOf(q)}
          </motion.span>
        </>
      ) : (
        <>
          <DotGrid count={q} revealed={false} color={color} />
          <span className="text-2xl font-black text-white/20">?</span>
          <span className="text-[9px] font-bold text-white/30 mt-0.5">{lbl.tap}</span>
        </>
      )}
    </motion.button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const DivisionExplorer = memo(function DivisionExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState<Round[]>(generateRounds);
  const [idx, setIdx] = useState(0);
  const [revealedGroups, setRevealedGroups] = useState<boolean[]>([]);
  const [completed, setCompleted] = useState(0);

  const round = rounds[idx];
  const { a, b } = round;
  const q = a / b;
  const allRevealed = revealedGroups.length === b && revealedGroups.every(Boolean);

  // Reset groups when idx changes
  const revealGroup = (i: number) => {
    setRevealedGroups(prev => {
      const arr = prev.length === b ? [...prev] : Array(b).fill(false);
      arr[i] = true;
      return arr;
    });
  };

  // Cols: 2→2, 3→3, 4→4
  const gridCols = b === 2 ? "grid-cols-2" : b === 3 ? "grid-cols-3" : "grid-cols-4";

  const next = useCallback(() => {
    const newCompleted = completed + 1;
    setCompleted(newCompleted);
    setRevealedGroups([]);
    if (idx + 1 >= rounds.length) { onDone(newCompleted, rounds.length); return; }
    setIdx(i => i + 1);
  }, [idx, rounds.length, onDone, completed]);

  const groupsArr = Array.from({ length: b });

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
          <span className="text-5xl font-black" style={{ color }}>{a}</span>
          <span className="text-3xl font-black text-white/50">÷</span>
          <span className="text-5xl font-black" style={{ color }}>{b}</span>
          <span className="text-3xl text-white/50 font-bold">=</span>
          <motion.span className="text-5xl font-black"
            style={{ color: allRevealed ? "#00FF88" : "rgba(255,255,255,0.18)" }}
            animate={allRevealed ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.4 }}>
            {allRevealed ? q : "?"}
          </motion.span>
        </motion.div>
      </AnimatePresence>

      {/* Concept + instruction */}
      <div className="rounded-xl px-4 py-2.5 text-center"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <p className="text-white/50 text-xs font-bold">{lbl.concept}</p>
        <p className="text-white/70 text-xs font-bold mt-0.5">{lbl.instruction}</p>
      </div>

      {/* Group boxes */}
      <div className={`grid ${gridCols} gap-3`}>
        {groupsArr.map((_, i) => (
          <GroupBox key={`${idx}-${i}`}
            q={q}
            revealed={revealedGroups[i] ?? false}
            color={color}
            onTap={() => revealGroup(i)}
            lbl={lbl} />
        ))}
      </div>

      {/* Result */}
      <AnimatePresence>
        {allRevealed && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3">
            <motion.div className="w-full rounded-2xl px-5 py-4 text-center"
              style={{ background: "rgba(0,255,136,0.10)", border: "2px solid rgba(0,255,136,0.3)" }}
              animate={{ scale: [0.92, 1.02, 1] }} transition={{ duration: 0.5 }}>
              <p className="text-white/50 text-xs font-bold mb-2">{lbl.discover}</p>
              <p className="text-lg font-black" style={{ color: "#00FF88" }}>
                {lbl.formula(a, b, q)}
              </p>
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

export default DivisionExplorer;
