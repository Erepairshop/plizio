"use client";
// ConceptExplorer — Area model discovery for Grade 4 multiplication
// Teaches 2-digit × 1-digit via the distributive property (Rechteckmodell).
// e.g. 23 × 4 = (20 × 4) + (3 × 4) = 80 + 12 = 92
// No wrong answers — pure discovery.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ──────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    split: "Split the number into tens and ones:",
    step1: "Now tap each rectangle to reveal the product!",
    step2: "Now add both parts together!",
    tensPart: "Tens part",
    onesPart: "Ones part",
    discover: "You discovered:",
    next: "Next",
    done: "Brilliant! ✨",
    tap: "Tap to reveal",
    tens: "tens",
    ones: "ones",
  },
  hu: {
    split: "Bontsd fel a számot tízesekre és egyesekre:",
    step1: "Most koppints minden téglalapra a szorzatért!",
    step2: "Most add össze mindkét részt!",
    tensPart: "Tízes rész",
    onesPart: "Egyes rész",
    discover: "Felfedezted:",
    next: "Következő",
    done: "Fantasztikus! ✨",
    tap: "Koppints!",
    tens: "tízes",
    ones: "egyes",
  },
  de: {
    split: "Zerlege die Zahl in Zehner und Einer:",
    step1: "Tippe jetzt auf jedes Rechteck, um das Teilprodukt zu entdecken!",
    step2: "Jetzt beide Teile zusammenzählen!",
    tensPart: "Zehnerteil",
    onesPart: "Einerteil",
    discover: "Du hast entdeckt:",
    next: "Weiter",
    done: "Fantastisch! ✨",
    tap: "Antippen",
    tens: "Zehner",
    ones: "Einer",
  },
  ro: {
    split: "Descompune numărul în zeci și unități:",
    step1: "Atinge fiecare dreptunghi pentru a descoperi produsul parțial!",
    step2: "Acum adună ambele părți!",
    tensPart: "Partea zecilor",
    onesPart: "Partea unităților",
    discover: "Ai descoperit:",
    next: "Înainte",
    done: "Fantastic! ✨",
    tap: "Atinge",
    tens: "zeci",
    ones: "unități",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
interface Round { a: number; b: number } // a × b, where a is 2-digit

const ROUND_POOL: Round[] = [
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

function generateRounds(): Round[] {
  const pool = [...ROUND_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 6);
}

// ─── Area Model SVG ──────────────────────────────────────────────────────────
function AreaModel({ a, b, tensRevealed, onesRevealed, color }: {
  a: number; b: number;
  tensRevealed: boolean; onesRevealed: boolean;
  color: string;
}) {
  const tens = Math.floor(a / 10) * 10;
  const ones = a % 10;
  const totalW = 260;
  const tensW = Math.round((tens / a) * totalW);
  const onesW = totalW - tensW;
  const h = 60;
  const y = 18;

  return (
    <svg width={totalW + 20} height={h + 36} viewBox={`-14 0 ${totalW + 20} ${h + 36}`}>
      {/* Tens rectangle */}
      <rect x={1} y={y} width={tensW} height={h}
        fill={tensRevealed ? `${color}30` : "rgba(255,255,255,0.06)"}
        stroke={color} strokeWidth={2} rx={6} />
      {/* Ones rectangle */}
      <rect x={tensW + 1} y={y} width={onesW} height={h}
        fill={onesRevealed ? "rgba(251,191,36,0.25)" : "rgba(255,255,255,0.06)"}
        stroke="rgba(251,191,36,0.8)" strokeWidth={2} rx={6} />

      {/* Tens label — top */}
      <text x={1 + tensW / 2} y={y - 5} textAnchor="middle"
        fill={color} fontSize={13} fontWeight="900">{tens}</text>
      {/* Ones label — top */}
      <text x={tensW + 1 + onesW / 2} y={y - 5} textAnchor="middle"
        fill="rgb(251,191,36)" fontSize={13} fontWeight="900">{ones}</text>

      {/* Left label — b */}
      <text x={-2} y={y + h / 2 + 5} textAnchor="end"
        fill="rgba(255,255,255,0.6)" fontSize={13} fontWeight="900">{b}</text>

      {/* Tens content */}
      {tensRevealed ? (
        <text x={1 + tensW / 2} y={y + h / 2 + 7} textAnchor="middle"
          fill={color} fontSize={22} fontWeight="900">{tens * b}</text>
      ) : (
        <text x={1 + tensW / 2} y={y + h / 2 + 7} textAnchor="middle"
          fill="rgba(255,255,255,0.18)" fontSize={14} fontWeight="700">?</text>
      )}
      {/* Ones content */}
      {onesRevealed ? (
        <text x={tensW + 1 + onesW / 2} y={y + h / 2 + 7} textAnchor="middle"
          fill="rgb(251,191,36)" fontSize={22} fontWeight="900">{ones * b}</text>
      ) : (
        <text x={tensW + 1 + onesW / 2} y={y + h / 2 + 7} textAnchor="middle"
          fill="rgba(255,255,255,0.18)" fontSize={14} fontWeight="700">?</text>
      )}

      {/* Bottom labels */}
      <text x={1 + tensW / 2} y={y + h + 18} textAnchor="middle"
        fill="rgba(255,255,255,0.35)" fontSize={11} fontWeight="700">{b}×{tens}</text>
      <text x={tensW + 1 + onesW / 2} y={y + h + 18} textAnchor="middle"
        fill="rgba(255,255,255,0.35)" fontSize={11} fontWeight="700">{b}×{ones}</text>
    </svg>
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
  const [tensRevealed, setTensRevealed] = useState(false);
  const [onesRevealed, setOnesRevealed] = useState(false);
  const [completed, setCompleted] = useState(0);

  const round = rounds[idx];
  const { a, b } = round;
  const tens = Math.floor(a / 10) * 10;
  const ones = a % 10;
  const bothRevealed = tensRevealed && onesRevealed;

  const next = useCallback(() => {
    const newCompleted = completed + 1;
    setCompleted(newCompleted);
    if (idx + 1 >= rounds.length) {
      onDone(newCompleted, rounds.length);
      return;
    }
    setIdx(i => i + 1);
    setTensRevealed(false);
    setOnesRevealed(false);
  }, [idx, rounds.length, onDone, completed]);

  // Derive current step for progressive instructions
  const step = bothRevealed ? 2 : (tensRevealed || onesRevealed) ? 1 : 0;

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
            style={{ color: bothRevealed ? "#00FF88" : "rgba(255,255,255,0.18)" }}
            animate={bothRevealed ? { scale: [1, 1.18, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            {bothRevealed ? a * b : "?"}
          </motion.span>
        </motion.div>
      </AnimatePresence>

      {/* Step 0: Decomposition row — "24 = 20 + 4" */}
      <AnimatePresence mode="wait">
        {!bothRevealed && (
          <motion.div key="decomp"
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className="rounded-xl px-4 py-2.5 flex flex-col items-center gap-1"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {/* split label */}
            <p className="text-white/50 text-xs font-bold">{lbl.split}</p>
            {/* colored decomposition */}
            <div className="flex items-center gap-2 text-xl font-black">
              <span style={{ color }}>{a}</span>
              <span className="text-white/30">=</span>
              <span style={{ color }}>{tens}</span>
              <span className="text-white/30 text-base">+</span>
              <span className="text-amber-400">{ones}</span>
            </div>
            {/* step instruction */}
            <p className="text-white/70 text-xs font-bold text-center mt-0.5">
              {step < 2 ? lbl.step1 : lbl.step2}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Area model */}
      <div className="flex justify-center rounded-2xl p-4"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <AreaModel a={a} b={b}
          tensRevealed={tensRevealed} onesRevealed={onesRevealed} color={color} />
      </div>

      {/* Tap buttons */}
      {!bothRevealed && (
        <div className="flex gap-3">
          {/* Tens button */}
          <motion.button
            onClick={() => setTensRevealed(true)}
            disabled={tensRevealed}
            className="flex-1 py-3 rounded-2xl font-black text-sm flex flex-col items-center gap-1"
            style={{
              background: tensRevealed ? `${color}20` : `${color}12`,
              border: `2px solid ${tensRevealed ? color : `${color}50`}`,
              color: tensRevealed ? color : "rgba(255,255,255,0.7)",
            }}
            whileTap={!tensRevealed ? { scale: 0.96 } : {}}
          >
            <span className="text-lg">{tensRevealed ? `${tens * b}` : "?"}</span>
            <span className="text-xs opacity-70">{b} × {tens}</span>
            {!tensRevealed && (
              <span className="text-xs font-bold opacity-50">{lbl.tap}</span>
            )}
          </motion.button>

          <div className="flex items-center">
            <span className="text-white/30 font-black text-xl">+</span>
          </div>

          {/* Ones button */}
          <motion.button
            onClick={() => setOnesRevealed(true)}
            disabled={onesRevealed}
            className="flex-1 py-3 rounded-2xl font-black text-sm flex flex-col items-center gap-1"
            style={{
              background: onesRevealed ? "rgba(251,191,36,0.18)" : "rgba(251,191,36,0.08)",
              border: `2px solid ${onesRevealed ? "rgb(251,191,36)" : "rgba(251,191,36,0.4)"}`,
              color: onesRevealed ? "rgb(251,191,36)" : "rgba(255,255,255,0.7)",
            }}
            whileTap={!onesRevealed ? { scale: 0.96 } : {}}
          >
            <span className="text-lg">{onesRevealed ? `${ones * b}` : "?"}</span>
            <span className="text-xs opacity-70">{b} × {ones}</span>
            {!onesRevealed && (
              <span className="text-xs font-bold opacity-50">{lbl.tap}</span>
            )}
          </motion.button>
        </div>
      )}

      {/* Result after both revealed */}
      <AnimatePresence>
        {bothRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3 items-center"
          >
            {/* Addition breakdown */}
            <motion.div
              className="w-full rounded-2xl px-5 py-3"
              style={{ background: "rgba(0,255,136,0.10)", border: "2px solid rgba(0,255,136,0.3)" }}
              animate={{ scale: [0.92, 1.02, 1] }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.discover}</p>
              {/* Step-by-step formula */}
              <div className="flex flex-col gap-1 items-center">
                <p className="text-base font-black text-white/80">
                  {a} × {b}
                  <span className="text-white/40 mx-2">=</span>
                  <span style={{ color }}>({tens} × {b})</span>
                  <span className="text-white/40 mx-1">+</span>
                  <span className="text-amber-400">({ones} × {b})</span>
                </p>
                <p className="text-base font-black text-white/80">
                  <span style={{ color }}>{tens * b}</span>
                  <span className="text-white/40 mx-2">+</span>
                  <span className="text-amber-400">{ones * b}</span>
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
