"use client";
// RatioExplorer — Visual ratio discovery for Grade 6
// Teaches ratios step by step like a teacher:
//   1. Show a real-world scenario with colored blocks
//   2. Student taps to reveal the ratio relationship
//   3. Then applies the ratio to find a missing value
// No wrong answers — pure guided discovery.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ──────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Ratio Explorer",
    step1: "Look at the picture! How many of each color?",
    tapCount: "Tap to count",
    step2: "This is a ratio!",
    step3: "Now use the ratio to find the answer!",
    tapReveal: "Tap to reveal",
    next: "Next",
    done: "Brilliant! ✨",
    rule: "Ratio Rule",
    forEvery: "For every",
    thereare: "there are",
    total: "total",
    ifWe: "If we have",
    howMany: "how many",
  },
  hu: {
    title: "Arány felfedezés",
    step1: "Nézd meg a képet! Hány van mindegyik színből?",
    tapCount: "Koppints a megszámláláshoz",
    step2: "Ez egy arány!",
    step3: "Most használd az arányt a válaszhoz!",
    tapReveal: "Koppints a felfedezéshez",
    next: "Következő",
    done: "Fantasztikus! ✨",
    rule: "Arány szabály",
    forEvery: "Minden",
    thereare: "darabhoz jut",
    total: "összesen",
    ifWe: "Ha van",
    howMany: "hány",
  },
  de: {
    title: "Verhältnis entdecken",
    step1: "Schau dir das Bild an! Wie viele von jeder Farbe?",
    tapCount: "Tippe zum Zählen",
    step2: "Das ist ein Verhältnis!",
    step3: "Jetzt nutze das Verhältnis, um die Antwort zu finden!",
    tapReveal: "Tippe zum Aufdecken",
    next: "Weiter",
    done: "Fantastisch! ✨",
    rule: "Verhältnisregel",
    forEvery: "Für je",
    thereare: "gibt es",
    total: "insgesamt",
    ifWe: "Wenn wir haben",
    howMany: "wie viele",
  },
  ro: {
    title: "Explorare proporții",
    step1: "Privește imaginea! Câte sunt din fiecare culoare?",
    tapCount: "Atinge pentru a număra",
    step2: "Acesta este un raport!",
    step3: "Acum folosește raportul pentru a găsi răspunsul!",
    tapReveal: "Atinge pentru a descoperi",
    next: "Înainte",
    done: "Fantastic! ✨",
    rule: "Regula raportului",
    forEvery: "Pentru fiecare",
    thereare: "există",
    total: "total",
    ifWe: "Dacă avem",
    howMany: "câte",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
interface RatioRound {
  a: number;          // count of color A (basic ratio)
  b: number;          // count of color B (basic ratio)
  labelA: Record<string, string>;
  labelB: Record<string, string>;
  colorA: string;
  colorB: string;
  multiplier: number; // to scale up for the application step
}

const ROUNDS: RatioRound[] = [
  { a: 2, b: 3, colorA: "#EF4444", colorB: "#3B82F6", multiplier: 4,
    labelA: { en: "red", hu: "piros", de: "rot", ro: "roșu" },
    labelB: { en: "blue", hu: "kék", de: "blau", ro: "albastru" } },
  { a: 1, b: 4, colorA: "#F59E0B", colorB: "#10B981", multiplier: 3,
    labelA: { en: "yellow", hu: "sárga", de: "gelb", ro: "galben" },
    labelB: { en: "green", hu: "zöld", de: "grün", ro: "verde" } },
  { a: 3, b: 2, colorA: "#8B5CF6", colorB: "#EC4899", multiplier: 5,
    labelA: { en: "purple", hu: "lila", de: "lila", ro: "violet" },
    labelB: { en: "pink", hu: "rózsaszín", de: "rosa", ro: "roz" } },
  { a: 2, b: 5, colorA: "#EF4444", colorB: "#14B8A6", multiplier: 3,
    labelA: { en: "red", hu: "piros", de: "rot", ro: "roșu" },
    labelB: { en: "teal", hu: "kékeszöld", de: "türkis", ro: "turcoaz" } },
  { a: 3, b: 1, colorA: "#F59E0B", colorB: "#6366F1", multiplier: 6,
    labelA: { en: "orange", hu: "narancs", de: "orange", ro: "portocaliu" },
    labelB: { en: "indigo", hu: "indigó", de: "indigo", ro: "indigo" } },
  { a: 4, b: 3, colorA: "#10B981", colorB: "#EF4444", multiplier: 4,
    labelA: { en: "green", hu: "zöld", de: "grün", ro: "verde" },
    labelB: { en: "red", hu: "piros", de: "rot", ro: "roșu" } },
  { a: 1, b: 2, colorA: "#3B82F6", colorB: "#F59E0B", multiplier: 7,
    labelA: { en: "blue", hu: "kék", de: "blau", ro: "albastru" },
    labelB: { en: "yellow", hu: "sárga", de: "gelb", ro: "galben" } },
  { a: 5, b: 2, colorA: "#EC4899", colorB: "#10B981", multiplier: 3,
    labelA: { en: "pink", hu: "rózsaszín", de: "rosa", ro: "roz" },
    labelB: { en: "green", hu: "zöld", de: "grün", ro: "verde" } },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Block Grid SVG ──────────────────────────────────────────────────────────
function BlockGrid({ a, b, colorA, colorB, revealed }: {
  a: number; b: number; colorA: string; colorB: string; revealed: boolean;
}) {
  const total = a + b;
  const cols = Math.min(total, 7);
  const rows = Math.ceil(total / cols);
  const bw = 32, bh = 32, gap = 4;
  const W = cols * (bw + gap) - gap;
  const H = rows * (bh + gap) - gap;

  return (
    <svg width="100%" viewBox={`-4 -4 ${W + 8} ${H + 8}`} style={{ maxHeight: 120 }}>
      {Array.from({ length: total }, (_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const isA = i < a;
        const color = isA ? colorA : colorB;
        return (
          <g key={i}>
            <rect
              x={col * (bw + gap)} y={row * (bh + gap)}
              width={bw} height={bh} rx={6}
              fill={revealed ? `${color}44` : "rgba(255,255,255,0.06)"}
              stroke={revealed ? color : "rgba(255,255,255,0.15)"}
              strokeWidth={revealed ? 2 : 1}
            />
            {revealed && (
              <text
                x={col * (bw + gap) + bw / 2} y={row * (bh + gap) + bh / 2 + 5}
                textAnchor="middle" fontSize={14} fontWeight="900"
                fill={color}
              >
                {i + 1}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const RatioExplorer = memo(function RatioExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => shuffle(ROUNDS).slice(0, 6));
  const [idx, setIdx] = useState(0);
  // Steps: 0=show blocks, 1=reveal count, 2=show ratio, 3=apply ratio
  const [step, setStep] = useState(0);

  const round = rounds[idx];
  const { a, b, colorA, colorB, multiplier } = round;
  const nameA = round.labelA[lang] ?? round.labelA.en;
  const nameB = round.labelB[lang] ?? round.labelB.en;
  const scaledA = a * multiplier;
  const scaledB = b * multiplier;

  const handleNext = useCallback(() => {
    if (idx + 1 >= rounds.length) {
      onDone(rounds.length, rounds.length);
      return;
    }
    setIdx(i => i + 1);
    setStep(0);
  }, [idx, rounds.length, onDone]);

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {/* Progress */}
      <div className="flex gap-1.5 w-full">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={`${idx}-${step}`}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* Step 0: Show blocks, tap to count */}
          {step === 0 && (
            <>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.step1}</p>
              <div className="w-full rounded-2xl p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <BlockGrid a={a} b={b} colorA={colorA} colorB={colorB} revealed={false} />
              </div>
              <motion.button
                onClick={() => setStep(1)}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}
              >
                {lbl.tapCount}
              </motion.button>
            </>
          )}

          {/* Step 1: Reveal counts */}
          {step === 1 && (
            <>
              <div className="w-full rounded-2xl p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <BlockGrid a={a} b={b} colorA={colorA} colorB={colorB} revealed={true} />
              </div>
              <div className="flex gap-3 w-full">
                <div className="flex-1 rounded-xl py-2.5 text-center font-black text-base"
                  style={{ background: `${colorA}22`, border: `2px solid ${colorA}`, color: colorA }}>
                  {a} {nameA}
                </div>
                <div className="flex-1 rounded-xl py-2.5 text-center font-black text-base"
                  style={{ background: `${colorB}22`, border: `2px solid ${colorB}`, color: colorB }}>
                  {b} {nameB}
                </div>
              </div>
              <motion.button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}
              >
                {lbl.step2} →
              </motion.button>
            </>
          )}

          {/* Step 2: Show ratio rule */}
          {step === 2 && (
            <>
              <div className="w-full rounded-2xl px-5 py-4"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <p className="text-white/50 text-xs font-bold text-center mb-3">{lbl.rule}</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl font-black" style={{ color: colorA }}>{a}</span>
                  <span className="text-white/40 text-2xl font-black">:</span>
                  <span className="text-3xl font-black" style={{ color: colorB }}>{b}</span>
                </div>
                <p className="text-white/60 text-xs font-bold text-center mt-3">
                  {lbl.forEvery} <span style={{ color: colorA }}>{a} {nameA}</span> {lbl.thereare} <span style={{ color: colorB }}>{b} {nameB}</span>
                </p>
              </div>

              {/* Visual multiplier demo */}
              <div className="w-full rounded-2xl px-4 py-3 flex flex-col gap-2"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-white/50 text-xs font-bold text-center">{lbl.step3}</p>
                <p className="text-white/70 text-sm font-bold text-center">
                  {lbl.ifWe} <span style={{ color: colorA }} className="text-base font-black">{scaledA} {nameA}</span>, {lbl.howMany} <span style={{ color: colorB }} className="font-black">{nameB}</span>?
                </p>
              </div>

              <motion.button
                onClick={() => setStep(3)}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}
              >
                {lbl.tapReveal}
              </motion.button>
            </>
          )}

          {/* Step 3: Show the answer with explanation */}
          {step === 3 && (
            <>
              <motion.div
                className="w-full rounded-2xl px-5 py-4"
                style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                animate={{ scale: [0.95, 1.02, 1] }}
                transition={{ duration: 0.4 }}
              >
                {/* Show the multiplication path */}
                <div className="flex flex-col gap-2 items-center">
                  <div className="flex items-center gap-2 text-sm font-black text-white/70">
                    <span style={{ color: colorA }}>{a}</span>
                    <span className="text-white/30">:</span>
                    <span style={{ color: colorB }}>{b}</span>
                    <span className="text-white/30 mx-1">=</span>
                    <span style={{ color: colorA }}>{a}</span>
                    <span className="text-white/30">×</span>
                    <span style={{ color }}>{multiplier}</span>
                    <span className="text-white/30">:</span>
                    <span style={{ color: colorB }}>{b}</span>
                    <span className="text-white/30">×</span>
                    <span style={{ color }}>{multiplier}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-2xl font-black" style={{ color: colorA }}>{scaledA}</span>
                    <span className="text-white/40 text-xl font-black">:</span>
                    <span className="text-2xl font-black" style={{ color: colorB }}>{scaledB}</span>
                  </div>
                  <p className="text-sm font-bold mt-1" style={{ color: "#00FF88" }}>
                    ✅ {scaledA} {nameA} → {scaledB} {nameB}
                  </p>
                </div>
              </motion.div>

              <motion.button
                onClick={handleNext}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                whileTap={{ scale: 0.97 }}
              >
                {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={16} />
              </motion.button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default RatioExplorer;
