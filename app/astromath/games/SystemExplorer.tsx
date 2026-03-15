"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, Record<string, string>> = {
  en: { title: "Systems of Equations", next: "Next", done: "Done!", tapToReveal: "Tap to reveal", hint: "Solve two equations with two unknowns", step: "Step", solution: "Solution", add: "Add equations", subtract: "Subtract equations" },
  hu: { title: "Egyenletrendszerek", next: "Tovább", done: "Kész!", tapToReveal: "Koppints a felfedéshez", hint: "Oldd meg a két ismeretlenes egyenletrendszert", step: "Lépés", solution: "Megoldás", add: "Egyenletek összeadása", subtract: "Egyenletek kivonása" },
  de: { title: "Gleichungssysteme", next: "Weiter", done: "Fertig!", tapToReveal: "Tippen zum Aufdecken", hint: "Löse zwei Gleichungen mit zwei Unbekannten", step: "Schritt", solution: "Lösung", add: "Gleichungen addieren", subtract: "Gleichungen subtrahieren" },
  ro: { title: "Sisteme de ecuații", next: "Următorul", done: "Gata!", tapToReveal: "Atinge pentru a dezvălui", hint: "Rezolvă două ecuații cu două necunoscute", step: "Pas", solution: "Soluție", add: "Adunare ecuații", subtract: "Scădere ecuații" },
};

interface Round {
  eq1: string; // display: "x + y = 7"
  eq2: string; // display: "x − y = 3"
  method: "add" | "sub";
  elimination: string; // "2x = 10"
  x: number;
  y: number;
}

const ROUND_POOL: Round[] = [
  { eq1: "x + y = 7", eq2: "x − y = 3", method: "add", elimination: "2x = 10", x: 5, y: 2 },
  { eq1: "x + y = 10", eq2: "x − y = 4", method: "add", elimination: "2x = 14", x: 7, y: 3 },
  { eq1: "x + y = 8", eq2: "x − y = 2", method: "add", elimination: "2x = 10", x: 5, y: 3 },
  { eq1: "x + y = 12", eq2: "x − y = 6", method: "add", elimination: "2x = 18", x: 9, y: 3 },
  { eq1: "2x + y = 11", eq2: "x + y = 7", method: "sub", elimination: "x = 4", x: 4, y: 3 },
  { eq1: "x + 2y = 10", eq2: "x + y = 7", method: "sub", elimination: "y = 3", x: 4, y: 3 },
  { eq1: "2x + y = 13", eq2: "x + y = 8", method: "sub", elimination: "x = 5", x: 5, y: 3 },
  { eq1: "x + y = 9", eq2: "x − y = 1", method: "add", elimination: "2x = 10", x: 5, y: 4 },
  { eq1: "3x + y = 16", eq2: "x + y = 8", method: "sub", elimination: "2x = 8", x: 4, y: 4 },
];

function makeRounds(): Round[] {
  const arr = [...ROUND_POOL];
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

export default function SystemExplorer({ color, onDone, lang = "en" }: Props) {
  const t = LABELS[lang] ?? LABELS.en;
  const rounds = useMemo(makeRounds, []);
  const total = rounds.length;
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0);

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

          {/* Two equations */}
          <div className="w-full rounded-2xl p-4 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.04)" }}>
            <div className="rounded-xl px-4 py-2 text-center" style={{ background: color + "15", border: `1.5px solid ${color}44` }}>
              <span className="text-xl font-black text-white">① {round.eq1}</span>
            </div>
            <div className="rounded-xl px-4 py-2 text-center" style={{ background: color + "15", border: `1.5px solid ${color}44` }}>
              <span className="text-xl font-black text-white">② {round.eq2}</span>
            </div>
          </div>

          {/* Step 1: Method */}
          {step >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-2 text-center w-full" style={{ background: "rgba(255,255,255,0.06)" }}>
              <span className="text-xs text-white/40 font-semibold">{t.step} 1</span>
              <div className="text-sm font-bold mt-1" style={{ color }}>
                {round.method === "add" ? "① + ②" : "① − ②"} → {round.method === "add" ? t.add : t.subtract}
              </div>
            </motion.div>
          )}

          {/* Step 2: Elimination result */}
          {step >= 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-3 text-center w-full" style={{ background: color + "12", border: `1px solid ${color}33` }}>
              <span className="text-xs text-white/40 font-semibold">{t.step} 2</span>
              <div className="text-2xl font-black text-white mt-1">{round.elimination}</div>
            </motion.div>
          )}

          {/* Step 3: Full solution */}
          {step >= 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-1">
              <span className="text-xs text-white/40 font-semibold">{t.solution}</span>
              <span className="text-3xl font-black" style={{ color }}>x = {round.x}, y = {round.y}</span>
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
