"use client";
// PlaceValue20Explorer — Tens and ones discovery for Grade 1 (i5)
// Teaches: numbers 11-20 = 1 ten + some ones.
// Step by step, no wrong answers.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Place Value Explorer",
    intro: "Numbers from 11 to 20 are made of TENS and ONES!",
    hereIs: "Here is the number:",
    tapBreak: "Tap to break it apart!",
    ten: "ten",
    ones: "ones",
    so: "So:",
    equals: "=",
    plus: "+",
    next: "Next",
    done: "Amazing!",
  },
  hu: {
    title: "Helyiérték felfedezés",
    intro: "A 11-20 közötti számok TÍZESEKBŐL és EGYESEKBŐL állnak!",
    hereIs: "Íme a szám:",
    tapBreak: "Koppints és bontsd szét!",
    ten: "tízes",
    ones: "egyes",
    so: "Tehát:",
    equals: "=",
    plus: "+",
    next: "Következő",
    done: "Fantasztikus!",
  },
  de: {
    title: "Stellenwert entdecken",
    intro: "Zahlen von 11 bis 20 bestehen aus ZEHNERN und EINERN!",
    hereIs: "Hier ist die Zahl:",
    tapBreak: "Tippe, um sie zu zerlegen!",
    ten: "Zehner",
    ones: "Einer",
    so: "Also:",
    equals: "=",
    plus: "+",
    next: "Weiter",
    done: "Super!",
  },
  ro: {
    title: "Valoare pozițională",
    intro: "Numerele de la 11 la 20 sunt formate din ZECI și UNITĂȚI!",
    hereIs: "Iată numărul:",
    tapBreak: "Atinge pentru a-l descompune!",
    ten: "zece",
    ones: "unități",
    so: "Deci:",
    equals: "=",
    plus: "+",
    next: "Înainte",
    done: "Excelent!",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
const NUMBERS = [11, 13, 15, 17, 12, 16, 14, 18, 19, 20];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Block SVG ──────────────────────────────────────────────────────────────
function TenBlock({ color }: { color: string }) {
  return (
    <svg width={28} height={56} viewBox="0 0 28 56">
      <rect x={1} y={1} width={26} height={54} rx={4} fill={`${color}44`} stroke={color} strokeWidth={1.5} />
      {/* 10 unit divisions */}
      {Array.from({ length: 9 }, (_, i) => (
        <line key={i} x1={1} y1={5.4 * (i + 1)} x2={27} y2={5.4 * (i + 1)}
          stroke={color} strokeWidth={0.5} opacity={0.4} />
      ))}
    </svg>
  );
}

function OneBlock({ color, delay = 0 }: { color: string; delay?: number }) {
  return (
    <motion.svg width={16} height={16} viewBox="0 0 16 16"
      initial={{ scale: 0 }} animate={{ scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 300 }}>
      <rect x={1} y={1} width={14} height={14} rx={3}
        fill={`${color}66`} stroke={color} strokeWidth={1.5} />
    </motion.svg>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
const PlaceValue20Explorer = memo(function PlaceValue20Explorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => shuffle(NUMBERS).slice(0, 6));
  const [idx, setIdx] = useState(0);
  // Steps: 0=show number, 1=show decomposition
  const [step, setStep] = useState(0);

  const num = rounds[idx];
  const tens = Math.floor(num / 10);
  const ones = num % 10;

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

      {/* Intro */}
      {idx === 0 && step === 0 && (
        <p className="text-white/50 text-xs font-medium text-center px-4">{lbl.intro}</p>
      )}

      <AnimatePresence mode="wait">
        <motion.div key={`${idx}-${step}`}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* Step 0: Show the number */}
          {step === 0 && (
            <>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.hereIs}</p>
              <motion.div className="text-6xl font-black" style={{ color }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 0.6 }}>
                {num}
              </motion.div>
              <motion.button onClick={() => setStep(1)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.tapBreak}
              </motion.button>
            </>
          )}

          {/* Step 1: Show decomposition */}
          {step === 1 && (
            <>
              <div className="w-full rounded-2xl p-5"
                style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
                <div className="flex items-center justify-center gap-6">
                  {/* Tens column */}
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-white/50 uppercase">{tens} {lbl.ten}</span>
                    <div className="flex gap-1">
                      {Array.from({ length: tens }, (_, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}>
                          <TenBlock color={color} />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <span className="text-xl font-black" style={{ color: "#00FF88" }}>+</span>

                  {/* Ones column */}
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-white/50 uppercase">{ones} {lbl.ones}</span>
                    <div className="flex flex-wrap gap-1 justify-center" style={{ maxWidth: 80 }}>
                      {Array.from({ length: ones }, (_, i) => (
                        <OneBlock key={i} color={color} delay={0.3 + i * 0.08} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Equation */}
                <motion.p className="text-center text-2xl font-black mt-4" style={{ color: "#00FF88" }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                  {num} = {tens * 10} + {ones}
                </motion.p>

                <motion.p className="text-center text-sm font-bold text-white/50 mt-1"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                  {lbl.so} {tens} {lbl.ten} {lbl.plus} {ones} {lbl.ones}
                </motion.p>
              </div>

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

export default PlaceValue20Explorer;
