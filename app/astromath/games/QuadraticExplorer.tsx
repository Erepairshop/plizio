"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, Record<string, string>> = {
  en: { title: "Quadratic Equations", next: "Next", done: "Done!", tapToReveal: "Tap to reveal", hint: "Solve equations of the form x² = n", step: "Step", solution: "Solution" },
  hu: { title: "Másodfokú egyenletek", next: "Tovább", done: "Kész!", tapToReveal: "Koppints a felfedéshez", hint: "Oldd meg az x² = n alakú egyenleteket", step: "Lépés", solution: "Megoldás" },
  de: { title: "Quadratische Gleichungen", next: "Weiter", done: "Fertig!", tapToReveal: "Tippen zum Aufdecken", hint: "Löse Gleichungen der Form x² = n", step: "Schritt", solution: "Lösung" },
  ro: { title: "Ecuații pătratice", next: "Următorul", done: "Gata!", tapToReveal: "Atinge pentru a dezvălui", hint: "Rezolvă ecuații de forma x² = n", step: "Pas", solution: "Soluție" },
};

interface Round {
  type: "simple" | "shifted";
  // simple: x² = n → x = ±√n
  // shifted: (x+a)² = b → x = -a ± √b
  n: number;
  a: number; // shift (0 for simple)
  root: number; // √n or √b
  solutions: string;
}

function makeRounds(): Round[] {
  const pool: Round[] = [
    { type: "simple", n: 9, a: 0, root: 3, solutions: "x = ±3" },
    { type: "simple", n: 16, a: 0, root: 4, solutions: "x = ±4" },
    { type: "simple", n: 25, a: 0, root: 5, solutions: "x = ±5" },
    { type: "simple", n: 36, a: 0, root: 6, solutions: "x = ±6" },
    { type: "simple", n: 49, a: 0, root: 7, solutions: "x = ±7" },
    { type: "shifted", n: 4, a: 1, root: 2, solutions: "x = −3 or x = 1" },
    { type: "shifted", n: 9, a: 2, root: 3, solutions: "x = −5 or x = 1" },
    { type: "shifted", n: 16, a: -3, root: 4, solutions: "x = −1 or x = 7" },
    { type: "shifted", n: 25, a: 1, root: 5, solutions: "x = −6 or x = 4" },
  ];
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, 6);
}

interface Props {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

export default function QuadraticExplorer({ color, onDone, lang = "en" }: Props) {
  const t = LABELS[lang] ?? LABELS.en;
  const rounds = useMemo(makeRounds, []);
  const total = rounds.length;
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0); // 0: equation, 1: take root, 2: simplify, 3: solutions

  const round = rounds[idx];
  const finished = idx >= total;

  const handleTap = useCallback(() => {
    if (step < 3) setStep(s => s + 1);
  }, [step]);

  const handleNext = useCallback(() => {
    if (idx + 1 >= total) {
      onDone(total, total);
    } else {
      setIdx(i => i + 1);
      setStep(0);
    }
  }, [idx, total, onDone]);

  if (finished || !round) return null;

  const isSimple = round.type === "simple";
  const equation = isSimple
    ? `x² = ${round.n}`
    : `(x${round.a >= 0 ? "+" : ""}${round.a})² = ${round.n}`;

  const stepTakeRoot = isSimple
    ? `x = ±√${round.n}`
    : `x${round.a >= 0 ? "+" : ""}${round.a} = ±√${round.n}`;

  const stepSimplify = isSimple
    ? `x = ±${round.root}`
    : `x${round.a >= 0 ? "+" : ""}${round.a} = ±${round.root}`;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4"
      style={{ background: "linear-gradient(135deg, #0a0a2e 0%, #1a0a3e 100%)" }}>
      <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
        <span className="text-white/60 text-xs font-bold">{idx + 1}/{total}</span>
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full rounded-full" style={{ background: color }}
            animate={{ width: `${((idx + 1) / total) * 100}%` }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
          className="flex flex-col items-center gap-4 w-full max-w-xs" onClick={step < 3 ? handleTap : undefined}>

          <p className="text-xs font-semibold text-white/50">{t.hint}</p>

          {/* The equation */}
          <div className="rounded-2xl px-6 py-4 w-full text-center" style={{ background: color + "15", border: `2px solid ${color}44` }}>
            <span className="text-3xl font-black text-white">{equation}</span>
          </div>

          {/* Step 1: Take square root */}
          {step >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-2 text-center w-full" style={{ background: "rgba(255,255,255,0.06)" }}>
              <span className="text-xs text-white/40 font-semibold">{t.step} 1: √</span>
              <div className="text-xl font-black text-white mt-1">{stepTakeRoot}</div>
            </motion.div>
          )}

          {/* Step 2: Simplify root */}
          {step >= 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-2 text-center w-full" style={{ background: color + "12", border: `1px solid ${color}33` }}>
              <span className="text-xs text-white/40 font-semibold">{t.step} 2</span>
              <div className="text-xl font-black text-white mt-1">{stepSimplify}</div>
            </motion.div>
          )}

          {/* Step 3: Final solutions */}
          {step >= 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-1">
              <span className="text-xs text-white/40 font-semibold">{t.solution}</span>
              <span className="text-3xl font-black" style={{ color }}>{round.solutions}</span>
            </motion.div>
          )}

          {step < 3 && (
            <div className="text-white/30 text-xs font-semibold animate-pulse">{t.tapToReveal}</div>
          )}

          {step >= 3 && (
            <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              onClick={handleNext}
              className="mt-1 px-8 py-3 rounded-2xl font-extrabold text-white text-base"
              style={{ background: color }} whileTap={{ scale: 0.95 }}>
              {idx + 1 >= total ? t.done : t.next}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
