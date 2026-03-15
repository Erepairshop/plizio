"use client";
// DecimalExplorer — Decimal place value discovery for Grade 5+
// Tap each digit to reveal: 3.47 = 3 + 0.4 + 0.07
// Same pattern as PlaceValueExplorer but for tenths/hundredths/thousandths

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ─────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    split: "A decimal number has place values too:",
    instruction: "Tap each digit to reveal its value!",
    ones: "ones", tenth: "tenths", hundredth: "hundredths", thousandth: "thousandths",
    zero: "none",
    discover: "You discovered:",
    next: "Next", done: "Brilliant! ✨", tap: "Tap!",
  },
  hu: {
    split: "Egy tizedes szám is helyiértékekből áll:",
    instruction: "Koppints minden számjegyre az értékért!",
    ones: "egyes", tenth: "tized", hundredth: "század", thousandth: "ezred",
    zero: "nincs",
    discover: "Felfedezted:",
    next: "Következő", done: "Fantasztikus! ✨", tap: "Koppints!",
  },
  de: {
    split: "Eine Dezimalzahl hat auch Stellenwerte:",
    instruction: "Tippe auf jede Ziffer, um ihren Wert zu entdecken!",
    ones: "Einer", tenth: "Zehntel", hundredth: "Hundertstel", thousandth: "Tausendstel",
    zero: "–",
    discover: "Du hast entdeckt:",
    next: "Weiter", done: "Fantastisch! ✨", tap: "Antippen",
  },
  ro: {
    split: "Un număr zecimal are și valori poziționale:",
    instruction: "Atinge fiecare cifră pentru a-i descoperi valoarea!",
    ones: "unități", tenth: "zecimi", hundredth: "sutimi", thousandth: "miimi",
    zero: "–",
    discover: "Ai descoperit:",
    next: "Înainte", done: "Fantastic! ✨", tap: "Atinge",
  },
};

// Colors: ones, tenths, hundredths (3 decimal places for G5)
const PLACE_COLORS = ["#4ECDC4", "#B44DFF", "#FF6B6B"];
const PLACE_KEYS = ["ones", "tenth", "hundredth"] as const;

// ─── Round pools ─────────────────────────────────────────────────────────────
// Numbers like X.YZ where X is 1-9, Y and Z are 0-9 (at least one nonzero decimal)
const ROUND_POOL = [
  3.47, 5.12, 2.85, 7.03, 1.60,
  4.91, 6.28, 8.05, 9.74, 3.50,
  2.09, 7.36, 1.48, 5.70, 8.23,
];

function generateRounds(): number[] {
  const pool = [...ROUND_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 6);
}

function decomposeDecimal(n: number): { digits: number[]; parts: number[]; display: string } {
  // Format to exactly 2 decimal places
  const display = n.toFixed(2);
  const onesDigit = Math.floor(n);
  const tenthsDigit = Math.floor((n * 10) % 10);
  const hundredthsDigit = Math.floor((n * 100) % 10);

  return {
    digits: [onesDigit, tenthsDigit, hundredthsDigit],
    parts: [onesDigit, tenthsDigit / 10, hundredthsDigit / 100],
    display,
  };
}

function formatPart(v: number): string {
  if (v === 0) return "";
  if (v >= 1) return String(v);
  // Show 0.4 or 0.07 etc.
  if (v >= 0.1) return v.toFixed(1);
  return v.toFixed(2);
}

// ─── Main Component ───────────────────────────────────────────────────────────
const DecimalExplorer = memo(function DecimalExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;

  const [rounds] = useState<number[]>(() => generateRounds());
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>([false, false, false]);
  const [completed, setCompleted] = useState(0);

  const n = rounds[idx];
  const { digits, parts, display } = decomposeDecimal(n);
  const allRevealed = revealed.every(Boolean);

  const revealPart = (i: number) => {
    if (revealed[i]) return;
    const next = [...revealed];
    next[i] = true;
    setRevealed(next);
  };

  const next = useCallback(() => {
    const newCompleted = completed + 1;
    setCompleted(newCompleted);
    if (idx + 1 >= rounds.length) { onDone(newCompleted, rounds.length); return; }
    setIdx(i => i + 1);
    setRevealed([false, false, false]);
  }, [idx, rounds.length, onDone, completed]);

  // Non-zero parts for the formula display
  const nonZero = parts.map((v, i) => ({ v, i })).filter(({ v }) => v > 0);

  // Split display into integer and decimal parts for colored rendering
  const [intPart, decPart] = display.split(".");

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress bar */}
      <div className="flex gap-1.5">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Large number — digits colored when revealed */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="text-center py-1">
          <span className="text-6xl font-black tracking-[0.08em]">
            {/* Ones digit */}
            <motion.span
              animate={{ color: revealed[0] ? PLACE_COLORS[0] : "rgba(255,255,255,0.9)" }}
              transition={{ duration: 0.3 }}>
              {intPart}
            </motion.span>
            {/* Decimal point */}
            <span className="text-white/60">.</span>
            {/* Tenths digit */}
            <motion.span
              animate={{ color: revealed[1] ? PLACE_COLORS[1] : "rgba(255,255,255,0.9)" }}
              transition={{ duration: 0.3 }}>
              {decPart[0]}
            </motion.span>
            {/* Hundredths digit */}
            <motion.span
              animate={{ color: revealed[2] ? PLACE_COLORS[2] : "rgba(255,255,255,0.9)" }}
              transition={{ duration: 0.3 }}>
              {decPart[1]}
            </motion.span>
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Instruction card */}
      <div className="rounded-xl px-4 py-2.5 text-center"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <p className="text-white/50 text-xs font-bold">{lbl.split}</p>
        <p className="text-white/70 text-xs font-bold mt-0.5">{lbl.instruction}</p>
      </div>

      {/* Place-value cards */}
      <div className="grid gap-2 grid-cols-3">
        {parts.map((val, i) => {
          const isRev = revealed[i];
          const col = PLACE_COLORS[i];
          return (
            <motion.button key={i}
              onClick={() => revealPart(i)}
              disabled={isRev}
              className="flex flex-col items-center gap-1.5 py-3 px-1 rounded-2xl"
              style={{
                background: isRev ? `${col}18` : "rgba(255,255,255,0.06)",
                border: `2px solid ${isRev ? col : "rgba(255,255,255,0.15)"}`,
              }}
              whileTap={!isRev ? { scale: 0.92 } : {}}
            >
              {/* The digit itself */}
              <motion.span className="text-3xl font-black"
                animate={{ color: isRev ? col : "rgba(255,255,255,0.75)" }}>
                {digits[i]}
              </motion.span>
              {/* Place label */}
              <span className="text-[9px] font-bold text-center leading-tight px-0.5"
                style={{ color: isRev ? col : "rgba(255,255,255,0.3)" }}>
                {lbl[PLACE_KEYS[i]]}
              </span>
              {/* Revealed value or ? */}
              {isRev ? (
                <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  className="text-sm font-black" style={{ color: col }}>
                  {val === 0 ? lbl.zero : formatPart(val)}
                </motion.span>
              ) : (
                <>
                  <span className="text-lg font-black text-white/20">?</span>
                  <span className="text-[8px] font-bold text-white/25">{lbl.tap}</span>
                </>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Result */}
      <AnimatePresence>
        {allRevealed && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3">
            <motion.div className="w-full rounded-2xl px-4 py-4"
              style={{ background: "rgba(0,255,136,0.10)", border: "2px solid rgba(0,255,136,0.3)" }}
              animate={{ scale: [0.92, 1.02, 1] }} transition={{ duration: 0.5 }}>
              <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.discover}</p>
              {/* Formula: 3.47 = 3 + 0.4 + 0.07 */}
              <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
                <span className="text-xl font-black" style={{ color }}>{display}</span>
                <span className="text-white/40 text-lg">=</span>
                {nonZero.map(({ v, i }, idx2) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span className="text-xl font-black" style={{ color: PLACE_COLORS[i] }}>{formatPart(v)}</span>
                    {idx2 < nonZero.length - 1 && (
                      <span className="text-white/40 text-lg">+</span>
                    )}
                  </span>
                ))}
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

export default DecimalExplorer;
