"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, Record<string, string>> = {
  en: { title: "Linear Functions", next: "Next", done: "Done!", tapToReveal: "Tap to reveal", hint: "Discover f(x) = mx + b", slope: "Slope", intercept: "y-intercept", value: "Value" },
  hu: { title: "Lineáris függvények", next: "Tovább", done: "Kész!", tapToReveal: "Koppints a felfedéshez", hint: "Fedezd fel az f(x) = mx + b függvényt", slope: "Meredekség", intercept: "y-tengelymetszet", value: "Érték" },
  de: { title: "Lineare Funktionen", next: "Weiter", done: "Fertig!", tapToReveal: "Tippen zum Aufdecken", hint: "Entdecke f(x) = mx + b", slope: "Steigung", intercept: "y-Achsenabschnitt", value: "Wert" },
  ro: { title: "Funcții liniare", next: "Următorul", done: "Gata!", tapToReveal: "Atinge pentru a dezvălui", hint: "Descoperă f(x) = mx + b", slope: "Panta", intercept: "Intersecție y", value: "Valoare" },
};

interface Round {
  m: number; b: number; x: number;
  fx: string; // "f(x) = 2x + 3"
  result: number; // f(x) at given x
}

function makeRounds(): Round[] {
  const pool: Round[] = [
    { m: 2, b: 3, x: 4, fx: "f(x) = 2x + 3", result: 11 },
    { m: 3, b: -1, x: 2, fx: "f(x) = 3x − 1", result: 5 },
    { m: -2, b: 5, x: 3, fx: "f(x) = −2x + 5", result: -1 },
    { m: 1, b: 4, x: 5, fx: "f(x) = x + 4", result: 9 },
    { m: 4, b: -2, x: 3, fx: "f(x) = 4x − 2", result: 10 },
    { m: -1, b: 8, x: 3, fx: "f(x) = −x + 8", result: 5 },
    { m: 2, b: -5, x: 4, fx: "f(x) = 2x − 5", result: 3 },
    { m: 3, b: 2, x: -1, fx: "f(x) = 3x + 2", result: -1 },
    { m: -3, b: 10, x: 2, fx: "f(x) = −3x + 10", result: 4 },
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

export default function FunctionExplorer({ color, onDone, lang = "en" }: Props) {
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

  // Mini coordinate graph
  const graphW = 200, graphH = 160;
  const gx = graphW / 2, gy = graphH / 2;
  const scale = 15;
  const x1 = -5, x2 = 5;
  const y1 = round.m * x1 + round.b;
  const y2v = round.m * x2 + round.b;
  const px1 = gx + x1 * scale, py1 = gy - y1 * scale;
  const px2 = gx + x2 * scale, py2 = gy - y2v * scale;
  const dotX = gx + round.x * scale, dotY = gy - round.result * scale;

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

          {/* Function definition + question */}
          <div className="rounded-full px-5 py-2" style={{ background: color + "22", border: `1px solid ${color}44` }}>
            <span className="text-lg font-black" style={{ color }}>{round.fx} → f({round.x}) = ?</span>
          </div>

          {/* Graph */}
          <div className="w-full rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.04)" }}>
            <svg viewBox={`0 0 ${graphW} ${graphH}`} className="w-full" style={{ maxHeight: 160 }}>
              {/* Axes */}
              <line x1={0} y1={gy} x2={graphW} y2={gy} stroke="rgba(255,255,255,0.15)" strokeWidth={1} />
              <line x1={gx} y1={0} x2={gx} y2={graphH} stroke="rgba(255,255,255,0.15)" strokeWidth={1} />
              {/* Grid */}
              {[-3,-2,-1,1,2,3].map(n => (
                <g key={n}>
                  <line x1={gx + n * scale} y1={0} x2={gx + n * scale} y2={graphH} stroke="rgba(255,255,255,0.05)" strokeWidth={0.5} />
                  <line x1={0} y1={gy - n * scale} x2={graphW} y2={gy - n * scale} stroke="rgba(255,255,255,0.05)" strokeWidth={0.5} />
                </g>
              ))}
              {/* Function line */}
              {step >= 1 && (
                <motion.line x1={px1} y1={py1} x2={px2} y2={py2}
                  stroke={color} strokeWidth={2.5}
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8 }} />
              )}
              {/* y-intercept dot */}
              {step >= 1 && (
                <circle cx={gx} cy={gy - round.b * scale} r={4} fill="white" />
              )}
              {/* Point at x */}
              {step >= 2 && (
                <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
                  <circle cx={dotX} cy={dotY} r={6} fill={color} />
                  <line x1={dotX} y1={gy} x2={dotX} y2={dotY} stroke={color} strokeWidth={1} strokeDasharray="3,2" />
                  <line x1={gx} y1={dotY} x2={dotX} y2={dotY} stroke={color} strokeWidth={1} strokeDasharray="3,2" />
                </motion.g>
              )}
              {/* Labels */}
              <text x={graphW - 8} y={gy - 4} textAnchor="end" fill="white" fontSize={9} opacity={0.4}>x</text>
              <text x={gx + 4} y={10} fill="white" fontSize={9} opacity={0.4}>y</text>
            </svg>
          </div>

          {/* Step 1: show slope and intercept */}
          {step >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex gap-3 text-center">
              <div className="rounded-lg px-3 py-1" style={{ background: "rgba(255,255,255,0.06)" }}>
                <span className="text-[10px] text-white/40 block">{t.slope}</span>
                <span className="text-base font-black text-white">m = {round.m}</span>
              </div>
              <div className="rounded-lg px-3 py-1" style={{ background: "rgba(255,255,255,0.06)" }}>
                <span className="text-[10px] text-white/40 block">{t.intercept}</span>
                <span className="text-base font-black text-white">b = {round.b}</span>
              </div>
            </motion.div>
          )}

          {/* Step 2: Calculation */}
          {step >= 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-2 text-center" style={{ background: color + "12", border: `1px solid ${color}33` }}>
              <div className="text-lg font-black text-white">
                f({round.x}) = {round.m === 1 ? "" : round.m === -1 ? "−" : round.m}·{round.x} {round.b >= 0 ? "+" : "−"} {Math.abs(round.b)}
              </div>
            </motion.div>
          )}

          {/* Step 3: Result */}
          {step >= 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-1">
              <span className="text-xs text-white/40 font-semibold">{t.value}</span>
              <span className="text-4xl font-black" style={{ color }}>f({round.x}) = {round.result}</span>
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
