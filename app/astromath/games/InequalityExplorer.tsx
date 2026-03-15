"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, Record<string, string>> = {
  en: { title: "Inequalities", next: "Next", done: "Done!", tapToReveal: "Tap to reveal", step: "Step", solve: "Find the values of x", numberLine: "Number line", hint: "Solve the inequality step by step" },
  hu: { title: "Egyenlőtlenségek", next: "Tovább", done: "Kész!", tapToReveal: "Koppints a felfedéshez", step: "Lépés", solve: "Határozd meg x értékeit", numberLine: "Számegyenes", hint: "Oldd meg az egyenlőtlenséget lépésről lépésre" },
  de: { title: "Ungleichungen", next: "Weiter", done: "Fertig!", tapToReveal: "Tippen zum Aufdecken", step: "Schritt", solve: "Finde die Werte von x", numberLine: "Zahlenstrahl", hint: "Löse die Ungleichung Schritt für Schritt" },
  ro: { title: "Inegalități", next: "Următorul", done: "Gata!", tapToReveal: "Atinge pentru a dezvălui", step: "Pas", solve: "Găsește valorile lui x", numberLine: "Axa numerelor", hint: "Rezolvă inegalitatea pas cu pas" },
};

interface Round {
  inequality: string;
  a: number; b: number; c: number;
  op: ">" | "<" | "≥" | "≤";
  solution: number;
  solutionText: string;
  steps: { desc: string; eq: string }[];
}

function makeRound(): Round {
  const ops: Array<">" | "<"> = [">", "<"];
  const op = ops[Math.floor(Math.random() * 2)];
  const a = 2 + Math.floor(Math.random() * 4);
  const x = 1 + Math.floor(Math.random() * 8);
  const b = 1 + Math.floor(Math.random() * 10);
  const isGt = op === ">";

  if (isGt) {
    const c = a * x + b;
    return {
      inequality: `${a}x + ${b} > ${c}`,
      a, b, c, op,
      solution: x,
      solutionText: `x > ${x}`,
      steps: [
        { desc: `− ${b}`, eq: `${a}x > ${c - b}` },
        { desc: `÷ ${a}`, eq: `x > ${x}` },
      ],
    };
  } else {
    const c = a * x - b;
    if (c < 1) return makeRound();
    return {
      inequality: `${a}x − ${b} < ${c}`,
      a, b, c, op,
      solution: x,
      solutionText: `x < ${x}`,
      steps: [
        { desc: `+ ${b}`, eq: `${a}x < ${c + b}` },
        { desc: `÷ ${a}`, eq: `x < ${x}` },
      ],
    };
  }
}

interface Props {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

export default function InequalityExplorer({ color, onDone, lang = "en" }: Props) {
  const t = LABELS[lang] ?? LABELS.en;
  const rounds = useMemo(() => {
    const arr: Round[] = [];
    const seen = new Set<string>();
    while (arr.length < 6) {
      const r = makeRound();
      if (!seen.has(r.inequality)) { seen.add(r.inequality); arr.push(r); }
    }
    return arr;
  }, []);
  const total = rounds.length;
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0);

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

  // Number line range
  const nlMin = round.solution - 5;
  const nlMax = round.solution + 5;
  const numbers = Array.from({ length: nlMax - nlMin + 1 }, (_, i) => nlMin + i);

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

          <p className="text-xs font-semibold text-white/50">{t.hint}</p>

          {/* Inequality */}
          <div className="text-3xl font-black text-white tracking-wide text-center">{round.inequality}</div>

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
                      <span className="text-xs text-white/50 font-semibold">{s.desc}</span>
                    </div>
                    <div className="text-xl font-black text-white text-center">{s.eq}</div>
                  </motion.div>
                ) : step === i ? (
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

          {/* Solution + number line */}
          {step > maxSteps && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 w-full">
              <div className="text-3xl font-black" style={{ color }}>{round.solutionText}</div>

              {/* Number line */}
              <div className="w-full rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)" }}>
                <div className="text-[10px] text-white/40 font-semibold text-center mb-2">{t.numberLine}</div>
                <div className="relative h-8 flex items-center">
                  <div className="absolute inset-x-2 h-0.5 bg-white/20 rounded" />
                  {numbers.map((n) => {
                    const pct = ((n - nlMin) / (nlMax - nlMin)) * 100;
                    const isActive = round.op === ">" ? n > round.solution : n < round.solution;
                    const isBoundary = n === round.solution;
                    return (
                      <div key={n} className="absolute flex flex-col items-center" style={{ left: `${pct}%`, transform: "translateX(-50%)" }}>
                        <div className="w-2 h-2 rounded-full"
                          style={{
                            background: isBoundary ? "white" : isActive ? color : "rgba(255,255,255,0.2)",
                            border: isBoundary ? `2px solid ${color}` : "none",
                          }} />
                        <span className="text-[8px] mt-1 font-bold" style={{ color: isActive || isBoundary ? color : "rgba(255,255,255,0.3)" }}>{n}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {step <= maxSteps && step >= round.steps.length && (
            <motion.button onClick={handleTap}
              className="rounded-xl px-5 py-3 text-center cursor-pointer"
              style={{ background: "rgba(255,255,255,0.06)", border: "1.5px dashed rgba(255,255,255,0.2)" }}
              animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
              <span className="text-sm text-white/50 font-semibold">{t.tapToReveal}</span>
            </motion.button>
          )}

          {/* Next */}
          {step > maxSteps && (
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
