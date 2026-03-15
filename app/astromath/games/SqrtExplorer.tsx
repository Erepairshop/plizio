"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, Record<string, string>> = {
  en: { title: "Square Roots", next: "Next", done: "Done!", tapToReveal: "Tap to reveal", hint: "Discover the connection between squares and roots", perfect: "Perfect square", root: "Square root", check: "Check" },
  hu: { title: "Négyzetgyökök", next: "Tovább", done: "Kész!", tapToReveal: "Koppints a felfedéshez", hint: "Fedezd fel a négyzetek és gyökök kapcsolatát", perfect: "Tökéletes négyzet", root: "Négyzetgyök", check: "Ellenőrzés" },
  de: { title: "Quadratwurzeln", next: "Weiter", done: "Fertig!", tapToReveal: "Tippen zum Aufdecken", hint: "Entdecke den Zusammenhang zwischen Quadraten und Wurzeln", perfect: "Perfektes Quadrat", root: "Quadratwurzel", check: "Prüfen" },
  ro: { title: "Rădăcini pătrate", next: "Următorul", done: "Gata!", tapToReveal: "Atinge pentru a dezvălui", hint: "Descoperă legătura dintre pătrate și rădăcini", perfect: "Pătrat perfect", root: "Rădăcină pătrată", check: "Verificare" },
};

interface Round {
  n: number;  // the number under the root
  root: number;
}

const ROUND_POOL: Round[] = [
  { n: 4, root: 2 }, { n: 9, root: 3 }, { n: 16, root: 4 },
  { n: 25, root: 5 }, { n: 36, root: 6 }, { n: 49, root: 7 },
  { n: 64, root: 8 }, { n: 81, root: 9 }, { n: 100, root: 10 },
  { n: 121, root: 11 }, { n: 144, root: 12 },
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

export default function SqrtExplorer({ color, onDone, lang = "en" }: Props) {
  const t = LABELS[lang] ?? LABELS.en;
  const rounds = useMemo(makeRounds, []);
  const total = rounds.length;
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0); // 0: show √n, 1: show grid, 2: show root × root, 3: show result

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

  // Grid visualization: root x root squares
  const gridSize = Math.min(round.root, 8); // cap visual at 8x8
  const cellSize = Math.min(20, Math.floor(140 / gridSize));

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

          {/* The question */}
          <div className="rounded-full px-5 py-2" style={{ background: color + "22", border: `1px solid ${color}44` }}>
            <span className="text-2xl font-black" style={{ color }}>√{round.n} = ?</span>
          </div>

          {/* Grid visualization */}
          <div className="w-full rounded-2xl p-4 flex flex-col items-center" style={{ background: "rgba(255,255,255,0.04)" }}>
            <svg width={cellSize * gridSize + 10} height={cellSize * gridSize + 10} viewBox={`0 0 ${cellSize * gridSize + 10} ${cellSize * gridSize + 10}`}>
              {Array.from({ length: gridSize }).map((_, row) =>
                Array.from({ length: gridSize }).map((_, col) => {
                  const filled = step >= 1;
                  return (
                    <motion.rect
                      key={`${row}-${col}`}
                      x={5 + col * cellSize} y={5 + row * cellSize}
                      width={cellSize - 2} height={cellSize - 2}
                      rx={2}
                      fill={filled ? color + "55" : "rgba(255,255,255,0.06)"}
                      stroke={filled ? color : "rgba(255,255,255,0.12)"}
                      strokeWidth={1}
                      initial={filled ? { opacity: 0 } : {}}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (row * gridSize + col) * 0.02 }}
                    />
                  );
                })
              )}
            </svg>
            {step >= 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
                <span className="text-xs text-white/50 font-bold">{round.root} × {round.root} = {round.n}</span>
              </motion.div>
            )}
          </div>

          {/* Step 2: Show the equation */}
          {step >= 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-2 text-center" style={{ background: color + "12", border: `1px solid ${color}33` }}>
              <span className="text-xs text-white/40 font-semibold">{t.perfect}</span>
              <div className="text-xl font-black text-white">{round.root}² = {round.n}</div>
            </motion.div>
          )}

          {/* Step 3: Result */}
          {step >= 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-1">
              <span className="text-xs text-white/40 font-semibold">{t.root}</span>
              <span className="text-4xl font-black" style={{ color }}>√{round.n} = {round.root}</span>
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
