"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, Record<string, string>> = {
  en: { title: "Powers & Exponents", next: "Next", done: "Done!", tapToReveal: "Tap to reveal", base: "Base", exponent: "Exponent", result: "Result", means: "means", times: "times" },
  hu: { title: "Hatványok", next: "Tovább", done: "Kész!", tapToReveal: "Koppints a felfedéshez", base: "Alap", exponent: "Kitevő", result: "Eredmény", means: "azt jelenti", times: "×" },
  de: { title: "Potenzen", next: "Weiter", done: "Fertig!", tapToReveal: "Tippen zum Aufdecken", base: "Basis", exponent: "Exponent", result: "Ergebnis", means: "bedeutet", times: "mal" },
  ro: { title: "Puteri", next: "Următorul", done: "Gata!", tapToReveal: "Atinge pentru a dezvălui", base: "Baza", exponent: "Exponent", result: "Rezultat", means: "înseamnă", times: "ori" },
};

interface Round {
  base: number;
  exp: number;
  result: number;
  expanded: string;
}

const ROUND_POOL: Round[] = [
  { base: 2, exp: 2, result: 4, expanded: "2 × 2" },
  { base: 3, exp: 2, result: 9, expanded: "3 × 3" },
  { base: 5, exp: 2, result: 25, expanded: "5 × 5" },
  { base: 2, exp: 3, result: 8, expanded: "2 × 2 × 2" },
  { base: 3, exp: 3, result: 27, expanded: "3 × 3 × 3" },
  { base: 4, exp: 2, result: 16, expanded: "4 × 4" },
  { base: 10, exp: 2, result: 100, expanded: "10 × 10" },
  { base: 10, exp: 3, result: 1000, expanded: "10 × 10 × 10" },
  { base: 2, exp: 4, result: 16, expanded: "2 × 2 × 2 × 2" },
  { base: 5, exp: 3, result: 125, expanded: "5 × 5 × 5" },
];

interface Props {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

export default function PowerExplorer({ color, onDone, lang = "en" }: Props) {
  const t = LABELS[lang] ?? LABELS.en;
  const rounds = useMemo(() => {
    const arr = [...ROUND_POOL];
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    return arr.slice(0, 6);
  }, []);
  const total = rounds.length;
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0); // 0: show power, 1: show expanded, 2: show result
  const [score, setScore] = useState(0);

  const round = rounds[idx];
  const finished = idx >= total;

  const handleTap = useCallback(() => {
    if (step < 2) {
      setStep((s) => s + 1);
    }
  }, [step]);

  const handleNext = useCallback(() => {
    setScore((s) => s + 1);
    if (idx + 1 >= total) {
      onDone(total, total);
    } else {
      setIdx((i) => i + 1);
      setStep(0);
    }
  }, [idx, total, onDone]);

  if (finished) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4"
      style={{ background: "linear-gradient(135deg, #0a0a2e 0%, #1a0a3e 100%)" }}>
      {/* Progress */}
      <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
        <span className="text-white/60 text-xs font-bold">{idx + 1}/{total}</span>
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full rounded-full" style={{ background: color }}
            animate={{ width: `${((idx + 1) / total) * 100}%` }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
          className="flex flex-col items-center gap-6 w-full max-w-xs">

          {/* Power notation */}
          <motion.div className="flex items-baseline gap-0.5" onClick={handleTap}>
            <span className="text-6xl font-black text-white">{round.base}</span>
            <span className="text-3xl font-black" style={{ color }}>{round.exp}</span>
          </motion.div>

          {/* Labels */}
          <div className="flex gap-6 text-center">
            <div>
              <div className="text-xs text-white/40 font-semibold">{t.base}</div>
              <div className="text-lg font-bold text-white">{round.base}</div>
            </div>
            <div>
              <div className="text-xs text-white/40 font-semibold">{t.exponent}</div>
              <div className="text-lg font-bold" style={{ color }}>{round.exp}</div>
            </div>
          </div>

          {/* Step 1: Expanded form */}
          {step >= 1 ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl px-6 py-4 text-center" style={{ background: color + "18", border: `1.5px solid ${color}44` }}>
              <div className="text-xs text-white/50 font-semibold mb-1">{t.means}</div>
              <div className="text-2xl font-black text-white tracking-wide">{round.expanded}</div>
            </motion.div>
          ) : (
            <motion.button onClick={handleTap}
              className="rounded-2xl px-6 py-4 text-center cursor-pointer"
              style={{ background: "rgba(255,255,255,0.06)", border: "1.5px dashed rgba(255,255,255,0.2)" }}
              animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
              <div className="text-sm text-white/50 font-semibold">{t.tapToReveal}</div>
            </motion.button>
          )}

          {/* Step 2: Result */}
          {step >= 2 ? (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-2">
              <div className="text-xs text-white/40 font-semibold">{t.result}</div>
              <div className="text-5xl font-black" style={{ color }}>= {round.result}</div>
            </motion.div>
          ) : step === 1 ? (
            <motion.button onClick={handleTap}
              className="rounded-xl px-5 py-3 text-center cursor-pointer"
              style={{ background: "rgba(255,255,255,0.06)", border: "1.5px dashed rgba(255,255,255,0.2)" }}
              animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
              <div className="text-sm text-white/50 font-semibold">{t.tapToReveal}</div>
            </motion.button>
          ) : null}

          {/* Visual: grid of squares */}
          {step >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-1 justify-center max-w-[200px]">
              {Array.from({ length: Math.min(round.result, 25) }, (_, i) => (
                <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="w-4 h-4 rounded-sm" style={{ background: color + "88" }} />
              ))}
              {round.result > 25 && <span className="text-white/40 text-xs font-bold ml-1">+{round.result - 25}</span>}
            </motion.div>
          )}

          {/* Next button */}
          {step >= 2 && (
            <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              onClick={handleNext}
              className="mt-2 px-8 py-3 rounded-2xl font-extrabold text-white text-base"
              style={{ background: color }} whileTap={{ scale: 0.95 }}>
              {idx + 1 >= total ? t.done : t.next}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
