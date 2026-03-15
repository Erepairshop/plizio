"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, Record<string, string>> = {
  en: { title: "Triangles", next: "Next", done: "Done!", tapToReveal: "Tap to reveal", angleSum: "Angle sum = 180°", find: "Find the missing angle", type: "Type", hint: "The angles of any triangle always add up to 180°" },
  hu: { title: "Háromszögek", next: "Tovább", done: "Kész!", tapToReveal: "Koppints a felfedéshez", angleSum: "Szögösszeg = 180°", find: "Találd meg a hiányzó szöget", type: "Típus", hint: "Minden háromszög szögeinek összege 180°" },
  de: { title: "Dreiecke", next: "Weiter", done: "Fertig!", tapToReveal: "Tippen zum Aufdecken", angleSum: "Winkelsumme = 180°", find: "Finde den fehlenden Winkel", type: "Typ", hint: "Die Winkelsumme im Dreieck beträgt immer 180°" },
  ro: { title: "Triunghiuri", next: "Următorul", done: "Gata!", tapToReveal: "Atinge pentru a dezvălui", angleSum: "Suma unghiurilor = 180°", find: "Găsește unghiul lipsă", type: "Tip", hint: "Suma unghiurilor oricărui triunghi este 180°" },
};

const TYPE_NAMES: Record<string, Record<string, string>> = {
  en: { equilateral: "Equilateral", isosceles: "Isosceles", scalene: "Scalene", right: "Right" },
  hu: { equilateral: "Egyenlő oldalú", isosceles: "Egyenlő szárú", scalene: "Általános", right: "Derékszögű" },
  de: { equilateral: "Gleichseitig", isosceles: "Gleichschenklig", scalene: "Ungleichseitig", right: "Rechtwinklig" },
  ro: { equilateral: "Echilateral", isosceles: "Isoscel", scalene: "Scalen", right: "Dreptunghic" },
};

interface Round {
  a1: number; a2: number; a3: number;
  type: "equilateral" | "isosceles" | "scalene" | "right";
  hidden: 0 | 1 | 2; // which angle is hidden
}

const ROUND_POOL: Round[] = [
  { a1: 60, a2: 60, a3: 60, type: "equilateral", hidden: 2 },
  { a1: 70, a2: 70, a3: 40, type: "isosceles", hidden: 2 },
  { a1: 50, a2: 50, a3: 80, type: "isosceles", hidden: 0 },
  { a1: 90, a2: 45, a3: 45, type: "right", hidden: 2 },
  { a1: 90, a2: 30, a3: 60, type: "right", hidden: 1 },
  { a1: 40, a2: 65, a3: 75, type: "scalene", hidden: 2 },
  { a1: 55, a2: 55, a3: 70, type: "isosceles", hidden: 1 },
  { a1: 90, a2: 50, a3: 40, type: "right", hidden: 2 },
  { a1: 35, a2: 75, a3: 70, type: "scalene", hidden: 0 },
  { a1: 80, a2: 60, a3: 40, type: "scalene", hidden: 1 },
];

interface Props {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

export default function TriangleExplorer({ color, onDone, lang = "en" }: Props) {
  const t = LABELS[lang] ?? LABELS.en;
  const tn = TYPE_NAMES[lang] ?? TYPE_NAMES.en;
  const rounds = useMemo(() => {
    const arr = [...ROUND_POOL];
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    return arr.slice(0, 6);
  }, []);
  const total = rounds.length;
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0); // 0: show triangle with ?, 1: show known angles sum, 2: reveal missing, 3: show type

  const round = rounds[idx];
  const finished = idx >= total;
  const angles = [round?.a1, round?.a2, round?.a3] as number[];
  const hiddenAngle = angles[round?.hidden ?? 0];
  const knownAngles = angles.filter((_, i) => i !== round?.hidden);

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

  // Simple triangle SVG
  const cx = 150, cy = 120;
  const pts = [
    { x: cx - 80, y: cy + 60 },
    { x: cx + 80, y: cy + 60 },
    { x: cx + (round.a1 === 90 ? -80 : round.type === "equilateral" ? 0 : 20), y: cy - 60 },
  ];
  const triPath = `M ${pts[0].x},${pts[0].y} L ${pts[1].x},${pts[1].y} L ${pts[2].x},${pts[2].y} Z`;

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

          {/* Triangle SVG */}
          <div className="w-full rounded-2xl p-2" style={{ background: "rgba(255,255,255,0.04)" }}>
            <svg viewBox="0 0 300 200" className="w-full">
              <path d={triPath} fill={color + "15"} stroke={color} strokeWidth={2} />
              {/* Angle labels */}
              {pts.map((p, i) => {
                const isHidden = i === round.hidden;
                const show = isHidden ? step >= 2 : true;
                const offY = i < 2 ? 20 : -15;
                const offX = i === 0 ? 10 : i === 1 ? -10 : 0;
                return (
                  <text key={i} x={p.x + offX} y={p.y + offY}
                    textAnchor="middle" fill={isHidden && step >= 2 ? color : isHidden ? "rgba(255,255,255,0.3)" : "white"}
                    fontSize={14} fontWeight="bold">
                    {show ? `${angles[i]}°` : "?"}
                  </text>
                );
              })}
            </svg>
          </div>

          {/* Step 1: Known angles */}
          {step >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-2 text-center" style={{ background: color + "12", border: `1px solid ${color}33` }}>
              <span className="text-white/70 text-sm font-bold">{knownAngles[0]}° + {knownAngles[1]}° = {knownAngles[0] + knownAngles[1]}°</span>
            </motion.div>
          )}

          {/* Step 2: Missing angle */}
          {step >= 2 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-1">
              <span className="text-xs text-white/40 font-semibold">180° − {knownAngles[0] + knownAngles[1]}°</span>
              <span className="text-3xl font-black" style={{ color }}>= {hiddenAngle}°</span>
            </motion.div>
          )}

          {/* Step 3: Triangle type */}
          {step >= 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-5 py-2" style={{ background: color + "22" }}>
              <span className="text-xs text-white/50 font-semibold">{t.type}: </span>
              <span className="font-bold" style={{ color }}>{tn[round.type]}</span>
            </motion.div>
          )}

          {/* Tap hint */}
          {step < 3 && (
            <div className="text-white/30 text-xs font-semibold animate-pulse">{t.tapToReveal}</div>
          )}

          {/* Next button */}
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
