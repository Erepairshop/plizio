"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, Record<string, string>> = {
  en: { title: "Pythagorean Theorem", next: "Next", done: "Done!", tapToReveal: "Tap to reveal", theorem: "a² + b² = c²", hint: "In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides", step: "Step", hypotenuse: "Hypotenuse", legs: "Legs" },
  hu: { title: "Pitagorasz-tétel", next: "Tovább", done: "Kész!", tapToReveal: "Koppints a felfedéshez", theorem: "a² + b² = c²", hint: "Derékszögű háromszögben az átfogó négyzete egyenlő a befogók négyzetösszegével", step: "Lépés", hypotenuse: "Átfogó", legs: "Befogók" },
  de: { title: "Satz des Pythagoras", next: "Weiter", done: "Fertig!", tapToReveal: "Tippen zum Aufdecken", theorem: "a² + b² = c²", hint: "Im rechtwinkligen Dreieck gilt: Das Quadrat der Hypotenuse ist gleich der Summe der Kathetenquadrate", step: "Schritt", hypotenuse: "Hypotenuse", legs: "Katheten" },
  ro: { title: "Teorema lui Pitagora", next: "Următorul", done: "Gata!", tapToReveal: "Atinge pentru a dezvălui", theorem: "a² + b² = c²", hint: "Într-un triunghi dreptunghic, pătratul ipotenuzei este egal cu suma pătratelor catetelor", step: "Pas", hypotenuse: "Ipotenuza", legs: "Catete" },
};

interface Round {
  a: number; b: number; c: number;
  findWhat: "c" | "a"; // find hypotenuse or leg
}

const ROUND_POOL: Round[] = [
  { a: 3, b: 4, c: 5, findWhat: "c" },
  { a: 6, b: 8, c: 10, findWhat: "c" },
  { a: 5, b: 12, c: 13, findWhat: "c" },
  { a: 8, b: 15, c: 17, findWhat: "c" },
  { a: 3, b: 4, c: 5, findWhat: "a" },
  { a: 6, b: 8, c: 10, findWhat: "a" },
  { a: 5, b: 12, c: 13, findWhat: "a" },
  { a: 9, b: 12, c: 15, findWhat: "c" },
  { a: 8, b: 15, c: 17, findWhat: "a" },
  { a: 9, b: 12, c: 15, findWhat: "a" },
];

interface Props {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

export default function PythagorasExplorer({ color, onDone, lang = "en" }: Props) {
  const t = LABELS[lang] ?? LABELS.en;
  const rounds = useMemo(() => {
    const arr = [...ROUND_POOL];
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    return arr.slice(0, 6);
  }, []);
  const total = rounds.length;
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0); // 0: show triangle, 1: show squares, 2: show calculation, 3: show result

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

  const isFindC = round.findWhat === "c";

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

          <p className="text-xs font-semibold text-white/50 text-center px-4">{t.hint}</p>

          {/* Theorem badge */}
          <div className="rounded-full px-4 py-1.5" style={{ background: color + "22", border: `1px solid ${color}44` }}>
            <span className="text-sm font-black" style={{ color }}>{t.theorem}</span>
          </div>

          {/* Triangle SVG with squares */}
          <div className="w-full rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.04)" }}>
            <svg viewBox="0 0 280 200" className="w-full">
              {/* Right triangle */}
              <polygon points="40,160 160,160 40,40" fill={color + "12"} stroke={color} strokeWidth={2} />
              {/* Right angle marker */}
              <polyline points="40,140 60,140 60,160" fill="none" stroke="white" strokeWidth={1} opacity={0.4} />

              {/* Labels */}
              <text x={100} y={178} textAnchor="middle" fill="white" fontSize={14} fontWeight="bold">
                a = {isFindC ? round.a : "?"}
              </text>
              <text x={22} y={105} textAnchor="middle" fill="white" fontSize={14} fontWeight="bold">
                b = {round.b}
              </text>
              <text x={115} y={90} textAnchor="middle" fill={color} fontSize={14} fontWeight="bold">
                c = {isFindC ? "?" : round.c}
              </text>

              {/* Square visualizations (step 1+) */}
              {step >= 1 && (
                <>
                  {/* a² square */}
                  <rect x={180} y={20} width={40} height={40} fill="#3b82f688" stroke="#3b82f6" strokeWidth={1} rx={2} />
                  <text x={200} y={44} textAnchor="middle" fill="white" fontSize={10} fontWeight="bold">a²={round.a * round.a}</text>

                  {/* b² square */}
                  <rect x={180} y={70} width={40} height={40} fill="#10b98188" stroke="#10b981" strokeWidth={1} rx={2} />
                  <text x={200} y={94} textAnchor="middle" fill="white" fontSize={10} fontWeight="bold">b²={round.b * round.b}</text>

                  {/* c² square */}
                  <rect x={180} y={130} width={50} height={50} fill={color + "55"} stroke={color} strokeWidth={1} rx={2} />
                  <text x={205} y={158} textAnchor="middle" fill="white" fontSize={10} fontWeight="bold">c²={round.c * round.c}</text>
                </>
              )}
            </svg>
          </div>

          {/* Step 2: Calculation */}
          {step >= 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-3 w-full text-center" style={{ background: color + "12", border: `1px solid ${color}33` }}>
              {isFindC ? (
                <div className="text-lg font-black text-white">
                  {round.a}² + {round.b}² = {round.a * round.a} + {round.b * round.b} = {round.c * round.c}
                </div>
              ) : (
                <div className="text-lg font-black text-white">
                  {round.c}² − {round.b}² = {round.c * round.c} − {round.b * round.b} = {round.a * round.a}
                </div>
              )}
            </motion.div>
          )}

          {/* Step 3: Result */}
          {step >= 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-1">
              <span className="text-xs text-white/40 font-semibold">√{isFindC ? round.c * round.c : round.a * round.a}</span>
              <span className="text-4xl font-black" style={{ color }}>
                {isFindC ? "c" : "a"} = {isFindC ? round.c : round.a}
              </span>
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
