"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, Record<string, string>> = {
  en: { title: "Circle Geometry", next: "Next", done: "Done!", tapToReveal: "Tap to reveal", radius: "Radius", diameter: "Diameter", circumference: "Circumference", area: "Area", formula: "Formula", result: "Result", hint: "Discover the circle formulas (π ≈ 3)" },
  hu: { title: "Kör geometria", next: "Tovább", done: "Kész!", tapToReveal: "Koppints a felfedéshez", radius: "Sugár", diameter: "Átmérő", circumference: "Kerület", area: "Terület", formula: "Képlet", result: "Eredmény", hint: "Fedezd fel a kör képleteit (π ≈ 3)" },
  de: { title: "Kreisgeometrie", next: "Weiter", done: "Fertig!", tapToReveal: "Tippen zum Aufdecken", radius: "Radius", diameter: "Durchmesser", circumference: "Umfang", area: "Fläche", formula: "Formel", result: "Ergebnis", hint: "Entdecke die Kreisformeln (π ≈ 3)" },
  ro: { title: "Geometria cercului", next: "Următorul", done: "Gata!", tapToReveal: "Atinge pentru a dezvălui", radius: "Raza", diameter: "Diametrul", circumference: "Circumferința", area: "Aria", formula: "Formula", result: "Rezultat", hint: "Descoperă formulele cercului (π ≈ 3)" },
};

interface Round {
  r: number;
  type: "circumference" | "area";
  formula: string;
  calculation: string;
  result: number;
}

function makeRounds(): Round[] {
  const radii = [2, 3, 4, 5, 6, 7, 8];
  const arr: Round[] = [];
  const shuffled = [...radii].sort(() => Math.random() - 0.5);

  for (let i = 0; i < 6; i++) {
    const r = shuffled[i % shuffled.length];
    const isCirc = i % 2 === 0;
    if (isCirc) {
      arr.push({
        r, type: "circumference",
        formula: "C = 2 × π × r",
        calculation: `2 × 3 × ${r}`,
        result: 2 * 3 * r,
      });
    } else {
      arr.push({
        r, type: "area",
        formula: "A = π × r²",
        calculation: `3 × ${r}² = 3 × ${r * r}`,
        result: 3 * r * r,
      });
    }
  }
  return arr;
}

interface Props {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

export default function CircleExplorer({ color, onDone, lang = "en" }: Props) {
  const t = LABELS[lang] ?? LABELS.en;
  const rounds = useMemo(makeRounds, []);
  const total = rounds.length;
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0); // 0: show circle, 1: show formula, 2: show calculation, 3: show result

  const round = rounds[idx];
  const finished = idx >= total;

  const handleTap = useCallback(() => {
    if (step < 3) setStep((s) => s + 1);
  }, [step]);

  const handleNext = useCallback(() => {
    if (idx + 1 >= total) {
      onDone(total, total);
    } else {
      setIdx((i) => i + 1);
      setStep(0);
    }
  }, [idx, total, onDone]);

  if (finished || !round) return null;

  const isCirc = round.type === "circumference";
  const typeLabel = isCirc ? t.circumference : t.area;

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
          className="flex flex-col items-center gap-4 w-full max-w-xs" onClick={step < 3 ? handleTap : undefined}>

          <p className="text-xs font-semibold text-white/50">{t.hint}</p>

          {/* What to find */}
          <div className="rounded-full px-4 py-1.5" style={{ background: color + "22", border: `1px solid ${color}44` }}>
            <span className="text-sm font-black" style={{ color }}>{typeLabel}?</span>
          </div>

          {/* Circle SVG */}
          <div className="w-full rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.04)" }}>
            <svg viewBox="0 0 200 200" className="w-full" style={{ maxHeight: 160 }}>
              {/* Circle */}
              <circle cx={100} cy={100} r={60} fill={isCirc ? "transparent" : color + "15"}
                stroke={color} strokeWidth={isCirc ? 3 : 2}
                strokeDasharray={isCirc && step >= 1 ? "none" : "none"} />

              {/* Radius line */}
              <line x1={100} y1={100} x2={160} y2={100} stroke="white" strokeWidth={1.5} strokeDasharray="4,3" />
              <circle cx={100} cy={100} r={3} fill="white" />
              <text x={130} y={93} textAnchor="middle" fill="white" fontSize={14} fontWeight="bold">r = {round.r}</text>

              {/* Area fill animation */}
              {!isCirc && step >= 1 && (
                <motion.circle cx={100} cy={100} r={60} fill={color + "30"}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
              )}

              {/* Circumference highlight */}
              {isCirc && step >= 1 && (
                <motion.circle cx={100} cy={100} r={60} fill="none"
                  stroke={color} strokeWidth={4}
                  strokeDasharray={`${2 * Math.PI * 60}`}
                  strokeDashoffset={2 * Math.PI * 60}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }} />
              )}
            </svg>
          </div>

          {/* Step 1: Formula */}
          {step >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-2 text-center" style={{ background: color + "12", border: `1px solid ${color}33` }}>
              <span className="text-xs text-white/40 font-semibold">{t.formula}</span>
              <div className="text-xl font-black text-white">{round.formula}</div>
            </motion.div>
          )}

          {/* Step 2: Calculation */}
          {step >= 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-2 text-center" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="text-lg font-bold text-white">{round.calculation}</div>
            </motion.div>
          )}

          {/* Step 3: Result */}
          {step >= 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-1">
              <span className="text-xs text-white/40 font-semibold">{t.result}</span>
              <span className="text-4xl font-black" style={{ color }}>= {round.result}</span>
            </motion.div>
          )}

          {/* Tap hint */}
          {step < 3 && (
            <div className="text-white/30 text-xs font-semibold animate-pulse">{t.tapToReveal}</div>
          )}

          {/* Next */}
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
