"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, Record<string, string>> = {
  en: { title: "Equations", next: "Next", done: "Done!", tapToReveal: "Tap to reveal", step: "Step", solve: "Solve for x", both: "Do the same on both sides", result: "Solution" },
  hu: { title: "Egyenletek", next: "Tovább", done: "Kész!", tapToReveal: "Koppints a felfedéshez", step: "Lépés", solve: "Oldd meg x-re", both: "Végezd el mindkét oldalon", result: "Megoldás" },
  de: { title: "Gleichungen", next: "Weiter", done: "Fertig!", tapToReveal: "Tippen zum Aufdecken", step: "Schritt", solve: "Löse nach x", both: "Mache auf beiden Seiten dasselbe", result: "Lösung" },
  ro: { title: "Ecuații", next: "Următorul", done: "Gata!", tapToReveal: "Atinge pentru a dezvălui", step: "Pas", solve: "Rezolvă pentru x", both: "Fă la fel pe ambele părți", result: "Soluție" },
};

interface Round {
  equation: string;
  a: number; b: number; c: number;
  x: number;
  steps: { desc: string; eq: string }[];
}

function makeRound(): Round {
  const variant = Math.floor(Math.random() * 3);
  if (variant === 0) {
    // ax + b = c
    const a = 2 + Math.floor(Math.random() * 4);
    const x = 1 + Math.floor(Math.random() * 8);
    const b = 1 + Math.floor(Math.random() * 10);
    const c = a * x + b;
    return {
      equation: `${a}x + ${b} = ${c}`,
      a, b, c, x,
      steps: [
        { desc: `− ${b}`, eq: `${a}x = ${c - b}` },
        { desc: `÷ ${a}`, eq: `x = ${(c - b) / a}` },
      ],
    };
  } else if (variant === 1) {
    // ax − b = c
    const a = 2 + Math.floor(Math.random() * 4);
    const x = 2 + Math.floor(Math.random() * 7);
    const b = 1 + Math.floor(Math.random() * 8);
    const c = a * x - b;
    if (c < 0) return makeRound();
    return {
      equation: `${a}x − ${b} = ${c}`,
      a, b, c, x,
      steps: [
        { desc: `+ ${b}`, eq: `${a}x = ${c + b}` },
        { desc: `÷ ${a}`, eq: `x = ${(c + b) / a}` },
      ],
    };
  } else {
    // x/a + b = c
    const a = 2 + Math.floor(Math.random() * 4);
    const diff = 1 + Math.floor(Math.random() * 6);
    const b = 1 + Math.floor(Math.random() * 8);
    const c = diff + b;
    const x = diff * a;
    return {
      equation: `x/${a} + ${b} = ${c}`,
      a, b, c, x,
      steps: [
        { desc: `− ${b}`, eq: `x/${a} = ${diff}` },
        { desc: `× ${a}`, eq: `x = ${x}` },
      ],
    };
  }
}

interface Props {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

export default function EquationExplorer({ color, onDone, lang = "en" }: Props) {
  const t = LABELS[lang] ?? LABELS.en;
  const rounds = useMemo(() => {
    const arr: Round[] = [];
    const seen = new Set<string>();
    while (arr.length < 6) {
      const r = makeRound();
      if (!seen.has(r.equation)) { seen.add(r.equation); arr.push(r); }
    }
    return arr;
  }, []);
  const total = rounds.length;
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0); // 0: equation shown, 1..N: steps revealed

  const round = rounds[idx];
  const finished = idx >= total;
  const maxSteps = round?.steps.length ?? 0;

  const handleTap = useCallback(() => {
    if (step <= maxSteps) setStep((s) => s + 1);
  }, [step, maxSteps]);

  const handleNext = useCallback(() => {
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
          className="flex flex-col items-center gap-5 w-full max-w-xs">

          {/* Solve for x hint */}
          <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">{t.solve}</p>

          {/* Equation */}
          <div className="text-3xl font-black text-white tracking-wide text-center">{round.equation}</div>

          {/* Balance visual */}
          <div className="w-full flex items-center justify-center gap-2 my-2">
            <div className="h-0.5 flex-1 rounded" style={{ background: color + "44" }} />
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg" style={{ background: color + "22", border: `1.5px solid ${color}55` }}>⚖️</div>
            <div className="h-0.5 flex-1 rounded" style={{ background: color + "44" }} />
          </div>

          {/* Steps */}
          <div className="w-full flex flex-col gap-3">
            {round.steps.map((s, i) => (
              <div key={i}>
                {step > i ? (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    className="rounded-xl px-4 py-3" style={{ background: color + "15", border: `1px solid ${color}33` }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full"
                        style={{ background: color + "33", color }}>{t.step} {i + 1}</span>
                      <span className="text-xs text-white/50 font-semibold">{t.both}: {s.desc}</span>
                    </div>
                    <div className="text-xl font-black text-white text-center">{s.eq}</div>
                  </motion.div>
                ) : (step === i) ? (
                  <motion.button onClick={handleTap}
                    className="w-full rounded-xl px-4 py-3 text-center cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1.5px dashed rgba(255,255,255,0.2)" }}
                    animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                    <span className="text-sm text-white/50 font-semibold">{t.tapToReveal} — {t.step} {i + 1}</span>
                  </motion.button>
                ) : null}
              </div>
            ))}
          </div>

          {/* Final result */}
          {step > maxSteps && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-1 mt-2">
              <span className="text-xs text-white/40 font-semibold">{t.result}</span>
              <span className="text-4xl font-black" style={{ color }}>x = {round.x}</span>
            </motion.div>
          )}

          {/* Tap target when not all steps shown */}
          {step <= maxSteps && step >= round.steps.length && (
            <motion.button onClick={handleTap}
              className="rounded-xl px-5 py-3 text-center cursor-pointer"
              style={{ background: "rgba(255,255,255,0.06)", border: "1.5px dashed rgba(255,255,255,0.2)" }}
              animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
              <span className="text-sm text-white/50 font-semibold">{t.tapToReveal}</span>
            </motion.button>
          )}

          {/* Next button */}
          {step > maxSteps && (
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
