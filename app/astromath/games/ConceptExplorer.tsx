"use client";
// ConceptExplorer — Area model discovery for Grade 4–5 multiplication
// G4: 2-digit × 1-digit via the distributive property (Rechteckmodell).
//     e.g. 23 × 4 = (20 × 4) + (3 × 4) = 80 + 12 = 92
// G5: 3-digit × 1-digit: 234 × 5 = (200 × 5) + (30 × 5) + (4 × 5) = 1000 + 150 + 20 = 1170
// No wrong answers — pure discovery.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ──────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    split: "Split the number into parts:",
    step1: "Now tap each rectangle to reveal the product!",
    step2: "Now add all parts together!",
    tensPart: "Tens part",
    onesPart: "Ones part",
    hundredsPart: "Hundreds part",
    discover: "You discovered:",
    next: "Next",
    done: "Brilliant! ✨",
    tap: "Tap to reveal",
    tens: "tens",
    ones: "ones",
    hundreds: "hundreds",
  },
  hu: {
    split: "Bontsd fel a számot részekre:",
    step1: "Most koppints minden téglalapra a szorzatért!",
    step2: "Most add össze az összes részt!",
    tensPart: "Tízes rész",
    onesPart: "Egyes rész",
    hundredsPart: "Százas rész",
    discover: "Felfedezted:",
    next: "Következő",
    done: "Fantasztikus! ✨",
    tap: "Koppints!",
    tens: "tízes",
    ones: "egyes",
    hundreds: "százas",
  },
  de: {
    split: "Zerlege die Zahl in Teile:",
    step1: "Tippe jetzt auf jedes Rechteck, um das Teilprodukt zu entdecken!",
    step2: "Jetzt alle Teile zusammenzählen!",
    tensPart: "Zehnerteil",
    onesPart: "Einerteil",
    hundredsPart: "Hunderterteil",
    discover: "Du hast entdeckt:",
    next: "Weiter",
    done: "Fantastisch! ✨",
    tap: "Antippen",
    tens: "Zehner",
    ones: "Einer",
    hundreds: "Hunderter",
  },
  ro: {
    split: "Descompune numărul în părți:",
    step1: "Atinge fiecare dreptunghi pentru a descoperi produsul parțial!",
    step2: "Acum adună toate părțile!",
    tensPart: "Partea zecilor",
    onesPart: "Partea unităților",
    hundredsPart: "Partea sutelor",
    discover: "Ai descoperit:",
    next: "Înainte",
    done: "Fantastic! ✨",
    tap: "Atinge",
    tens: "zeci",
    ones: "unități",
    hundreds: "sute",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
interface Round { a: number; b: number } // a × b, where a is 2-digit

const ROUND_POOL_G4: Round[] = [
  { a: 23, b: 4 },
  { a: 34, b: 2 },
  { a: 42, b: 3 },
  { a: 15, b: 6 },
  { a: 24, b: 5 },
  { a: 31, b: 7 },
  { a: 13, b: 8 },
  { a: 22, b: 6 },
  { a: 41, b: 4 },
  { a: 32, b: 3 },
];

// G5: 3-digit × 1-digit
const ROUND_POOL_G5: Round[] = [
  { a: 234, b: 3 },
  { a: 152, b: 4 },
  { a: 321, b: 5 },
  { a: 213, b: 6 },
  { a: 142, b: 7 },
  { a: 312, b: 3 },
  { a: 125, b: 4 },
  { a: 231, b: 5 },
  { a: 413, b: 2 },
  { a: 324, b: 3 },
];

function generateRounds(grade: number): Round[] {
  const pool = [...(grade >= 5 ? ROUND_POOL_G5 : ROUND_POOL_G4)];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 6);
}

// ─── Area Model SVG ──────────────────────────────────────────────────────────
// G4: 2 rectangles (tens + ones), G5: 3 rectangles (hundreds + tens + ones)
function AreaModel({ a, b, revealed, color, isG5 }: {
  a: number; b: number;
  revealed: boolean[];
  color: string;
  isG5: boolean;
}) {
  const hundreds = isG5 ? Math.floor(a / 100) * 100 : 0;
  const tens = isG5 ? Math.floor((a % 100) / 10) * 10 : Math.floor(a / 10) * 10;
  const ones = a % 10;
  const parts = isG5 ? [hundreds, tens, ones] : [tens, ones];
  const partColors = isG5
    ? [color, "rgb(96,165,250)", "rgb(251,191,36)"]
    : [color, "rgb(251,191,36)"];

  const totalW = 260;
  const h = 60;
  const y = 18;

  // Calculate proportional widths
  const widths = parts.map(p => Math.max(30, Math.round((p / a) * totalW)));
  const wSum = widths.reduce((s, w) => s + w, 0);
  // Normalize
  const scale = totalW / wSum;
  const scaledW = widths.map(w => Math.round(w * scale));

  let xOff = 1;
  return (
    <svg width={totalW + 20} height={h + 36} viewBox={`-14 0 ${totalW + 20} ${h + 36}`}>
      {/* Left label — b */}
      <text x={-2} y={y + h / 2 + 5} textAnchor="end"
        fill="rgba(255,255,255,0.6)" fontSize={13} fontWeight="900">{b}</text>

      {parts.map((part, i) => {
        const x = xOff;
        const w = scaledW[i];
        xOff += w;
        const pColor = partColors[i];
        const isRev = revealed[i];
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h}
              fill={isRev ? `${pColor}30` : "rgba(255,255,255,0.06)"}
              stroke={pColor} strokeWidth={2} rx={6} />
            {/* Top label */}
            <text x={x + w / 2} y={y - 5} textAnchor="middle"
              fill={pColor} fontSize={isG5 ? 11 : 13} fontWeight="900">{part}</text>
            {/* Center content */}
            {isRev ? (
              <text x={x + w / 2} y={y + h / 2 + 7} textAnchor="middle"
                fill={pColor} fontSize={isG5 ? 18 : 22} fontWeight="900">{part * b}</text>
            ) : (
              <text x={x + w / 2} y={y + h / 2 + 7} textAnchor="middle"
                fill="rgba(255,255,255,0.18)" fontSize={14} fontWeight="700">?</text>
            )}
            {/* Bottom label */}
            <text x={x + w / 2} y={y + h + 18} textAnchor="middle"
              fill="rgba(255,255,255,0.35)" fontSize={isG5 ? 9 : 11} fontWeight="700">{b}×{part}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const ConceptExplorer = memo(function ConceptExplorer({
  color, onDone, lang = "en", grade = 4,
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
  grade?: number;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const isG5 = grade >= 5;
  const partCount = isG5 ? 3 : 2;

  const [rounds] = useState<Round[]>(() => generateRounds(grade));
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>(Array(partCount).fill(false));
  const [completed, setCompleted] = useState(0);

  const round = rounds[idx];
  const { a, b } = round;

  // Decompose
  const hundreds = isG5 ? Math.floor(a / 100) * 100 : 0;
  const tens = isG5 ? Math.floor((a % 100) / 10) * 10 : Math.floor(a / 10) * 10;
  const ones = a % 10;
  const parts = isG5 ? [hundreds, tens, ones] : [tens, ones];
  const partColors = isG5
    ? [color, "rgb(96,165,250)", "rgb(251,191,36)"]
    : [color, "rgb(251,191,36)"];

  const allRevealed = revealed.every(Boolean);

  const next = useCallback(() => {
    const newCompleted = completed + 1;
    setCompleted(newCompleted);
    if (idx + 1 >= rounds.length) {
      onDone(newCompleted, rounds.length);
      return;
    }
    setIdx(i => i + 1);
    setRevealed(Array(partCount).fill(false));
  }, [idx, rounds.length, onDone, completed, partCount]);

  const someRevealed = revealed.some(Boolean);

  return (
    <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-1.5">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Main equation */}
      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 py-1">
          <span className="text-4xl font-black" style={{ color }}>{a}</span>
          <span className="text-white/40 text-2xl font-bold">×</span>
          <span className="text-4xl font-black" style={{ color }}>{b}</span>
          <span className="text-white/40 text-2xl font-bold">=</span>
          <motion.span
            className="text-4xl font-black"
            style={{ color: allRevealed ? "#00FF88" : "rgba(255,255,255,0.18)" }}
            animate={allRevealed ? { scale: [1, 1.18, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            {allRevealed ? a * b : "?"}
          </motion.span>
        </motion.div>
      </AnimatePresence>

      {/* Decomposition row */}
      <AnimatePresence mode="wait">
        {!allRevealed && (
          <motion.div key="decomp"
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className="rounded-xl px-4 py-2.5 flex flex-col items-center gap-1"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p className="text-white/50 text-xs font-bold">{lbl.split}</p>
            <div className="flex items-center gap-2 text-xl font-black">
              <span style={{ color }}>{a}</span>
              <span className="text-white/30">=</span>
              {parts.map((p, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/30 text-base">+</span>}
                  <span style={{ color: partColors[i] }}>{p}</span>
                </span>
              ))}
            </div>
            <p className="text-white/70 text-xs font-bold text-center mt-0.5">
              {someRevealed && !allRevealed ? lbl.step1 : lbl.step1}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Area model */}
      <div className="flex justify-center rounded-2xl p-4"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <AreaModel a={a} b={b} revealed={revealed} color={color} isG5={isG5} />
      </div>

      {/* Tap buttons */}
      {!allRevealed && (
        <div className="flex gap-2">
          {parts.map((part, i) => {
            const isRev = revealed[i];
            const pColor = partColors[i];
            return (
              <span key={i} className="contents">
                {i > 0 && (
                  <div className="flex items-center">
                    <span className="text-white/30 font-black text-xl">+</span>
                  </div>
                )}
                <motion.button
                  onClick={() => {
                    const next = [...revealed];
                    next[i] = true;
                    setRevealed(next);
                  }}
                  disabled={isRev}
                  className="flex-1 py-3 rounded-2xl font-black text-sm flex flex-col items-center gap-1"
                  style={{
                    background: isRev ? `${pColor}20` : `${pColor}12`,
                    border: `2px solid ${isRev ? pColor : `${pColor}50`}`,
                    color: isRev ? pColor : "rgba(255,255,255,0.7)",
                  }}
                  whileTap={!isRev ? { scale: 0.96 } : {}}
                >
                  <span className={isG5 ? "text-base" : "text-lg"}>{isRev ? `${part * b}` : "?"}</span>
                  <span className="text-[10px] opacity-70">{b} × {part}</span>
                  {!isRev && (
                    <span className="text-[10px] font-bold opacity-50">{lbl.tap}</span>
                  )}
                </motion.button>
              </span>
            );
          })}
        </div>
      )}

      {/* Result after all revealed */}
      <AnimatePresence>
        {allRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3 items-center"
          >
            <motion.div
              className="w-full rounded-2xl px-5 py-3"
              style={{ background: "rgba(0,255,136,0.10)", border: "2px solid rgba(0,255,136,0.3)" }}
              animate={{ scale: [0.92, 1.02, 1] }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.discover}</p>
              <div className="flex flex-col gap-1 items-center">
                <p className={`${isG5 ? "text-sm" : "text-base"} font-black text-white/80`}>
                  {a} × {b}
                  <span className="text-white/40 mx-2">=</span>
                  {parts.map((p, i) => (
                    <span key={i}>
                      {i > 0 && <span className="text-white/40 mx-1">+</span>}
                      <span style={{ color: partColors[i] }}>({p} × {b})</span>
                    </span>
                  ))}
                </p>
                <p className={`${isG5 ? "text-sm" : "text-base"} font-black text-white/80`}>
                  {parts.map((p, i) => (
                    <span key={i}>
                      {i > 0 && <span className="text-white/40 mx-2">+</span>}
                      <span style={{ color: partColors[i] }}>{p * b}</span>
                    </span>
                  ))}
                  <span className="text-white/40 mx-2">=</span>
                  <span style={{ color: "#00FF88" }} className="text-xl">{a * b}</span>
                </p>
              </div>
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
