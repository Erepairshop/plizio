"use client";
// PlaceValueExplorer — Place value discovery for Grade 4
// Teaches: 3247 = 3000 + 200 + 40 + 7
// Each digit card is tapped to reveal its actual contribution.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ─────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    split: "A number is made of place values:",
    instruction: "Tap each digit to reveal its value!",
    th: "thousands", h: "hundreds", t: "tens", o: "ones",
    zero: "none",
    discover: "You discovered:",
    next: "Next", done: "Brilliant! ✨", tap: "Tap!",
  },
  hu: {
    split: "Egy szám helyiértékekből áll:",
    instruction: "Koppints minden számjegyre az értékért!",
    th: "ezres", h: "százas", t: "tízes", o: "egyes",
    zero: "nincs",
    discover: "Felfedezted:",
    next: "Következő", done: "Fantasztikus! ✨", tap: "Koppints!",
  },
  de: {
    split: "Eine Zahl besteht aus Stellenwerten:",
    instruction: "Tippe auf jede Ziffer, um ihren Wert zu entdecken!",
    th: "Tausender", h: "Hunderter", t: "Zehner", o: "Einer",
    zero: "–",
    discover: "Du hast entdeckt:",
    next: "Weiter", done: "Fantastisch! ✨", tap: "Antippen",
  },
  ro: {
    split: "Un număr este format din valori poziționale:",
    instruction: "Atinge fiecare cifră pentru a-i descoperi valoarea!",
    th: "mii", h: "sute", t: "zeci", o: "unități",
    zero: "–",
    discover: "Ai descoperit:",
    next: "Înainte", done: "Fantastic! ✨", tap: "Atinge",
  },
};

// Colors per place: thousands, hundreds, tens, ones
const PLACE_COLORS = ["#4ECDC4", "#B44DFF", "#FF6B6B", "#FFD700"];
const PLACE_KEYS = ["th", "h", "t", "o"] as const;

// ─── Round data ───────────────────────────────────────────────────────────────
const ROUND_POOL = [
  2347, 1536, 4213, 3421, 5132,
  2053, 3040, 4102, 6208, 1405,
];

function generateRounds(): number[] {
  const pool = [...ROUND_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 6);
}

function decompose(n: number): [number, number, number, number] {
  return [
    Math.floor(n / 1000) * 1000,
    Math.floor((n % 1000) / 100) * 100,
    Math.floor((n % 100) / 10) * 10,
    n % 10,
  ];
}

// ─── Main Component ───────────────────────────────────────────────────────────
const PlaceValueExplorer = memo(function PlaceValueExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState<number[]>(generateRounds);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState([false, false, false, false]);
  const [completed, setCompleted] = useState(0);

  const n = rounds[idx];
  const parts = decompose(n);
  const digits = [
    Math.floor(n / 1000),
    Math.floor((n % 1000) / 100),
    Math.floor((n % 100) / 10),
    n % 10,
  ];
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
    setRevealed([false, false, false, false]);
  }, [idx, rounds.length, onDone, completed]);

  // Non-zero parts for the formula display
  const nonZero = parts.map((v, i) => ({ v, i })).filter(({ v }) => v > 0);

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
          <span className="text-6xl font-black tracking-[0.15em]">
            {String(n).split("").map((d, i) => (
              <motion.span key={i}
                animate={{ color: revealed[i] ? PLACE_COLORS[i] : "rgba(255,255,255,0.9)" }}
                transition={{ duration: 0.3 }}>
                {d}
              </motion.span>
            ))}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Instruction card */}
      <div className="rounded-xl px-4 py-2.5 text-center"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <p className="text-white/50 text-xs font-bold">{lbl.split}</p>
        <p className="text-white/70 text-xs font-bold mt-0.5">{lbl.instruction}</p>
      </div>

      {/* 4 place-value cards */}
      <div className="grid grid-cols-4 gap-2">
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
                  {val === 0 ? lbl.zero : val}
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
              {/* Formula: 3247 = 3000 + 200 + 40 + 7 */}
              <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
                <span className="text-xl font-black" style={{ color }}>{n}</span>
                <span className="text-white/40 text-lg">=</span>
                {nonZero.map(({ v, i }, idx2) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span className="text-xl font-black" style={{ color: PLACE_COLORS[i] }}>{v}</span>
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

export default PlaceValueExplorer;
