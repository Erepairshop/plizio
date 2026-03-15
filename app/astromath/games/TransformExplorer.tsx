"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, Record<string, string>> = {
  en: { title: "Transformations", next: "Next", done: "Done!", tapToReveal: "Tap to reveal", hint: "Discover geometric transformations", original: "Original", result: "Result", rule: "Rule" },
  hu: { title: "Transzformációk", next: "Tovább", done: "Kész!", tapToReveal: "Koppints a felfedéshez", hint: "Fedezd fel a geometriai transzformációkat", original: "Eredeti", result: "Eredmény", rule: "Szabály" },
  de: { title: "Transformationen", next: "Weiter", done: "Fertig!", tapToReveal: "Tippen zum Aufdecken", hint: "Entdecke geometrische Transformationen", original: "Original", result: "Ergebnis", rule: "Regel" },
  ro: { title: "Transformări", next: "Următorul", done: "Gata!", tapToReveal: "Atinge pentru a dezvălui", hint: "Descoperă transformările geometrice", original: "Original", result: "Rezultat", rule: "Regulă" },
};

interface Round {
  type: "translate" | "reflectX" | "reflectY" | "rotate90";
  point: [number, number]; // original point
  result: [number, number]; // transformed point
  rule: Record<string, string>;
  formula: string; // e.g. "(x+3, y−2)"
}

const ROUND_POOL: Round[] = [
  { type: "translate", point: [2, 3], result: [5, 1], rule: { en: "Translate (3, −2)", hu: "Eltolás (3, −2)", de: "Verschiebung (3, −2)", ro: "Translație (3, −2)" }, formula: "(x+3, y−2)" },
  { type: "translate", point: [1, 1], result: [4, 4], rule: { en: "Translate (3, 3)", hu: "Eltolás (3, 3)", de: "Verschiebung (3, 3)", ro: "Translație (3, 3)" }, formula: "(x+3, y+3)" },
  { type: "reflectX", point: [3, 4], result: [3, -4], rule: { en: "Reflect across x-axis", hu: "Tükrözés x-tengelyre", de: "Spiegelung an x-Achse", ro: "Reflecție pe axa x" }, formula: "(x, −y)" },
  { type: "reflectX", point: [-2, 3], result: [-2, -3], rule: { en: "Reflect across x-axis", hu: "Tükrözés x-tengelyre", de: "Spiegelung an x-Achse", ro: "Reflecție pe axa x" }, formula: "(x, −y)" },
  { type: "reflectY", point: [4, 2], result: [-4, 2], rule: { en: "Reflect across y-axis", hu: "Tükrözés y-tengelyre", de: "Spiegelung an y-Achse", ro: "Reflecție pe axa y" }, formula: "(−x, y)" },
  { type: "reflectY", point: [-3, 1], result: [3, 1], rule: { en: "Reflect across y-axis", hu: "Tükrözés y-tengelyre", de: "Spiegelung an y-Achse", ro: "Reflecție pe axa y" }, formula: "(−x, y)" },
  { type: "rotate90", point: [3, 2], result: [-2, 3], rule: { en: "Rotate 90° counterclockwise", hu: "Forgatás 90° balra", de: "Drehung 90° gegen Uhrzeiger", ro: "Rotație 90° trigonometric" }, formula: "(−y, x)" },
  { type: "rotate90", point: [4, 1], result: [-1, 4], rule: { en: "Rotate 90° counterclockwise", hu: "Forgatás 90° balra", de: "Drehung 90° gegen Uhrzeiger", ro: "Rotație 90° trigonometric" }, formula: "(−y, x)" },
  { type: "translate", point: [-1, 2], result: [2, -1], rule: { en: "Translate (3, −3)", hu: "Eltolás (3, −3)", de: "Verschiebung (3, −3)", ro: "Translație (3, −3)" }, formula: "(x+3, y−3)" },
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

export default function TransformExplorer({ color, onDone, lang = "en" }: Props) {
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

  const graphW = 220, graphH = 220;
  const cx = graphW / 2, cy = graphH / 2;
  const scale = 20;

  const px = cx + round.point[0] * scale;
  const py = cy - round.point[1] * scale;
  const rx = cx + round.result[0] * scale;
  const ry = cy - round.result[1] * scale;

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
          className="flex flex-col items-center gap-3 w-full max-w-xs" onClick={step < 3 ? handleTap : undefined}>

          <p className="text-xs font-semibold text-white/50">{t.hint}</p>

          {/* Rule badge */}
          <div className="rounded-full px-4 py-1.5" style={{ background: color + "22", border: `1px solid ${color}44` }}>
            <span className="text-sm font-black" style={{ color }}>
              {round.rule[lang] ?? round.rule.en}
            </span>
          </div>

          {/* Coordinate grid */}
          <div className="w-full rounded-2xl p-2" style={{ background: "rgba(255,255,255,0.04)" }}>
            <svg viewBox={`0 0 ${graphW} ${graphH}`} className="w-full" style={{ maxHeight: 200 }}>
              {/* Grid */}
              {[-5,-4,-3,-2,-1,0,1,2,3,4,5].map(n => (
                <g key={n}>
                  <line x1={cx + n * scale} y1={0} x2={cx + n * scale} y2={graphH}
                    stroke={n === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.05)"} strokeWidth={n === 0 ? 1 : 0.5} />
                  <line x1={0} y1={cy + n * scale} x2={graphW} y2={cy + n * scale}
                    stroke={n === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.05)"} strokeWidth={n === 0 ? 1 : 0.5} />
                </g>
              ))}

              {/* Reflection axis highlight */}
              {step >= 1 && round.type === "reflectX" && (
                <line x1={0} y1={cy} x2={graphW} y2={cy} stroke={color} strokeWidth={2} opacity={0.4} strokeDasharray="6,3" />
              )}
              {step >= 1 && round.type === "reflectY" && (
                <line x1={cx} y1={0} x2={cx} y2={graphH} stroke={color} strokeWidth={2} opacity={0.4} strokeDasharray="6,3" />
              )}

              {/* Original point */}
              <circle cx={px} cy={py} r={7} fill="#3B82F6" />
              <text x={px + 10} y={py - 6} fill="#3B82F6" fontSize={11} fontWeight="bold">
                ({round.point[0]}, {round.point[1]})
              </text>

              {/* Transformed point */}
              {step >= 2 && (
                <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
                  <circle cx={rx} cy={ry} r={7} fill={color} />
                  <text x={rx + 10} y={ry - 6} fill={color} fontSize={11} fontWeight="bold">
                    ({round.result[0]}, {round.result[1]})
                  </text>
                  {/* Arrow */}
                  <line x1={px} y1={py} x2={rx} y2={ry} stroke="rgba(255,255,255,0.3)" strokeWidth={1} strokeDasharray="4,3" />
                </motion.g>
              )}

              <text x={graphW - 8} y={cy - 4} textAnchor="end" fill="white" fontSize={9} opacity={0.4}>x</text>
              <text x={cx + 4} y={10} fill="white" fontSize={9} opacity={0.4}>y</text>
            </svg>
          </div>

          {/* Step 1: Show formula */}
          {step >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-2 text-center" style={{ background: color + "12", border: `1px solid ${color}33` }}>
              <span className="text-xs text-white/40 font-semibold">{t.rule}</span>
              <div className="text-xl font-black text-white">(x, y) → {round.formula}</div>
            </motion.div>
          )}

          {/* Step 2: Calculation */}
          {step >= 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-2 text-center" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="text-lg font-bold text-white">
                ({round.point[0]}, {round.point[1]}) → ({round.result[0]}, {round.result[1]})
              </div>
            </motion.div>
          )}

          {/* Step 3: Result */}
          {step >= 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-1">
              <span className="text-xs text-white/40 font-semibold">{t.result}</span>
              <span className="text-3xl font-black" style={{ color }}>
                ({round.result[0]}, {round.result[1]})
              </span>
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
