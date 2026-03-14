"use client";
// ConceptExplorer — visual discovery game for Grade 4
// Teaches multiplication via interactive dot arrays.
// The child builds the array by tapping, then sees why a × b = result.
// No "wrong" answer — pure felfedezés (discovery).

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ──────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    instruction: "Tap each group to add the dots!",
    groups: "groups of",
    total: "total",
    discover: "You discovered:",
    next: "Next",
    done: "Amazing! ✨",
    hint: "Tap a group →",
    tap: "Tap!",
    filled: "×",
  },
  hu: {
    instruction: "Koppints minden csoportra a pontokért!",
    groups: "csoport, mindegyikben",
    total: "összesen",
    discover: "Felfedezted:",
    next: "Következő",
    done: "Fantasztikus! ✨",
    hint: "Koppints egy csoportra →",
    tap: "Koppints!",
    filled: "×",
  },
  de: {
    instruction: "Tippe auf jede Gruppe, um Punkte zu sammeln!",
    groups: "Gruppen à",
    total: "insgesamt",
    discover: "Du hast entdeckt:",
    next: "Weiter",
    done: "Fantastisch! ✨",
    hint: "Tippe auf eine Gruppe →",
    tap: "Tippen!",
    filled: "×",
  },
  ro: {
    instruction: "Atinge fiecare grup pentru a adăuga puncte!",
    groups: "grupuri de",
    total: "total",
    discover: "Ai descoperit:",
    next: "Înainte",
    done: "Fantastic! ✨",
    hint: "Atinge un grup →",
    tap: "Atinge!",
    filled: "×",
  },
};

// ─── Round generation ──────────────────────────────────────────────────────────
interface Round { rows: number; cols: number }

function generateRounds(): Round[] {
  const pairs: Round[] = [
    { rows: 2, cols: 3 },
    { rows: 3, cols: 4 },
    { rows: 2, cols: 6 },
    { rows: 4, cols: 4 },
    { rows: 3, cols: 5 },
    { rows: 5, cols: 4 },
    { rows: 2, cols: 8 },
    { rows: 6, cols: 3 },
  ];
  // Shuffle
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  return pairs.slice(0, 6);
}

// ─── Dot Grid ─────────────────────────────────────────────────────────────────
function DotGrid({ rows, cols, filledRows, color }: {
  rows: number; cols: number; filledRows: number; color: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 items-center">
      {Array.from({ length: rows }, (_, r) => (
        <div key={r} className="flex gap-1.5">
          {Array.from({ length: cols }, (_, c) => (
            <motion.div
              key={c}
              className="w-5 h-5 rounded-full"
              style={{ background: r < filledRows ? color : "rgba(255,255,255,0.12)" }}
              initial={r < filledRows && r === filledRows - 1 ? { scale: 0 } : false}
              animate={{ scale: 1 }}
              transition={{ delay: c * 0.04, type: "spring", stiffness: 260, damping: 20 }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Group Button ─────────────────────────────────────────────────────────────
function GroupButton({ rowIdx, filled, active, color, cols, lbl, onClick }: {
  rowIdx: number; filled: boolean; active: boolean; color: string; cols: number;
  lbl: Record<string, string>; onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={filled}
      className="flex items-center justify-between w-full px-3 py-2 rounded-xl border-2 font-bold text-sm"
      style={{
        background: filled ? `${color}20` : active ? `${color}10` : "rgba(255,255,255,0.04)",
        border: `2px solid ${filled ? color : active ? `${color}60` : "rgba(255,255,255,0.1)"}`,
        color: filled ? color : "rgba(255,255,255,0.5)",
      }}
      whileTap={!filled ? { scale: 0.96 } : {}}
    >
      <span>
        {filled ? `✓ ` : ""}
        {lbl.groups ? `${lbl.tap} ` : ""}
        {filled ? `+${cols}` : lbl.tap}
      </span>
      {filled && (
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-base">
          {"●".repeat(Math.min(cols, 8))}
        </motion.span>
      )}
    </motion.button>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const ConceptExplorer = memo(function ConceptExplorer({
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
  const [showResult, setShowResult] = useState(false);
  const totalRef = useRef(0);

  const round = rounds[idx];
  const { rows, cols } = round;
  const allFilled = filledRows >= rows;

  const tapRow = useCallback(() => {
    if (showResult) return;
    setFilledRows(r => {
      const next = r + 1;
      if (next >= rows) setShowResult(true);
      return next;
    });
  }, [showResult, rows]);

  const next = useCallback(() => {
    totalRef.current++;
    if (idx + 1 >= rounds.length) {
      onDone(totalRef.current, rounds.length);
      return;
    }
    setIdx(i => i + 1);
    setFilledRows(0);
    setShowResult(false);
  }, [idx, rounds.length, onDone]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-1.5">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Equation display */}
      <div className="flex items-center justify-center gap-3 py-1">
        <motion.span
          key={`${idx}-rows`}
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-black"
          style={{ color }}
        >
          {rows}
        </motion.span>
        <span className="text-white/40 text-xl font-bold">{lbl.filled}</span>
        <motion.span
          key={`${idx}-cols`}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-black"
          style={{ color }}
        >
          {cols}
        </motion.span>
        <span className="text-white/40 text-xl font-bold">=</span>
        <motion.span
          className="text-3xl font-black"
          style={{ color: allFilled ? "#00FF88" : "rgba(255,255,255,0.2)" }}
          animate={allFilled ? { scale: [1, 1.15, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          {allFilled ? rows * cols : "?"}
        </motion.span>
      </div>

      {/* Dot array */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="rounded-3xl p-5 flex justify-center"
          style={{ background: `${color}10`, border: `2px solid ${color}25` }}
        >
          <DotGrid rows={rows} cols={cols} filledRows={filledRows} color={color} />
        </motion.div>
      </AnimatePresence>

      {/* Group tap buttons */}
      {!allFilled && (
        <div className="flex flex-col gap-2">
          <p className="text-white/50 text-xs font-bold text-center">{lbl.instruction}</p>
          {Array.from({ length: rows }, (_, r) => (
            <GroupButton
              key={r}
              rowIdx={r}
              filled={r < filledRows}
              active={r === filledRows}
              color={color}
              cols={cols}
              lbl={lbl}
              onClick={r === filledRows ? tapRow : () => {}}
            />
          ))}
        </div>
      )}

      {/* Result */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3 items-center"
          >
            {/* Discovery text */}
            <motion.div
              className="rounded-2xl px-5 py-3 text-center"
              style={{ background: "rgba(0,255,136,0.12)", border: "2px solid rgba(0,255,136,0.35)" }}
              animate={{ scale: [0.9, 1.02, 1] }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white/60 text-xs font-bold mb-1">{lbl.discover}</p>
              <p className="text-2xl font-black" style={{ color: "#00FF88" }}>
                {rows} × {cols} = {rows * cols}
              </p>
              <p className="text-white/50 text-xs mt-1">
                {rows} {lbl.groups} {cols} = {rows * cols} {lbl.total}
              </p>
            </motion.div>

            <motion.button
              onClick={next}
              className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}
            >
              {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default ConceptExplorer;
