"use client";
// AlgebraExplorer — Balance-model equation discovery for Grade 6
// Teaches step-by-step equation solving like a teacher:
//   1. Show equation as a balance (left side = right side)
//   2. Student taps each step to isolate x
//   3. Rule appears: "what you do to one side, do to the other"
// No wrong answers — pure guided discovery.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ──────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Algebra Explorer",
    intro: "An equation is like a balance — both sides must be equal!",
    step1: "Here is the equation:",
    tapStep: "Tap to see the next step",
    rule: "What you do to one side, you must do to the other!",
    result: "Solution:",
    check: "Check:",
    next: "Next",
    done: "Brilliant! ✨",
    bothSides: "on both sides",
    weGet: "we get",
  },
  hu: {
    title: "Algebra felfedezés",
    intro: "Egy egyenlet olyan, mint egy mérleg — mindkét oldal egyenlő kell legyen!",
    step1: "Íme az egyenlet:",
    tapStep: "Koppints a következő lépéshez",
    rule: "Amit az egyik oldalon csinálsz, a másikon is csinálnod kell!",
    result: "Megoldás:",
    check: "Ellenőrzés:",
    next: "Következő",
    done: "Fantasztikus! ✨",
    bothSides: "mindkét oldalon",
    weGet: "kapjuk",
  },
  de: {
    title: "Algebra entdecken",
    intro: "Eine Gleichung ist wie eine Waage — beide Seiten müssen gleich sein!",
    step1: "Hier ist die Gleichung:",
    tapStep: "Tippe für den nächsten Schritt",
    rule: "Was du auf einer Seite machst, musst du auch auf der anderen machen!",
    result: "Lösung:",
    check: "Probe:",
    next: "Weiter",
    done: "Fantastisch! ✨",
    bothSides: "auf beiden Seiten",
    weGet: "ergibt",
  },
  ro: {
    title: "Explorare algebră",
    intro: "O ecuație este ca o balanță — ambele părți trebuie să fie egale!",
    step1: "Iată ecuația:",
    tapStep: "Atinge pentru pasul următor",
    rule: "Ce faci pe o parte, trebuie să faci și pe cealaltă!",
    result: "Soluție:",
    check: "Verificare:",
    next: "Înainte",
    done: "Fantastic! ✨",
    bothSides: "pe ambele părți",
    weGet: "obținem",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
interface EquationRound {
  // ax + b = c
  a: number;
  b: number;
  x: number; // solution
}

const ROUND_POOL: EquationRound[] = [
  { a: 2, b: 3, x: 5 },   // 2x + 3 = 13
  { a: 3, b: 4, x: 3 },   // 3x + 4 = 13
  { a: 4, b: 2, x: 4 },   // 4x + 2 = 18
  { a: 2, b: 7, x: 6 },   // 2x + 7 = 19
  { a: 5, b: 3, x: 2 },   // 5x + 3 = 13
  { a: 3, b: 5, x: 4 },   // 3x + 5 = 17
  { a: 2, b: 1, x: 8 },   // 2x + 1 = 17
  { a: 4, b: 5, x: 3 },   // 4x + 5 = 17
  { a: 3, b: 2, x: 6 },   // 3x + 2 = 20
  { a: 6, b: 4, x: 2 },   // 6x + 4 = 16
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Balance SVG ──────────────────────────────────────────────────────────────
function BalanceSVG({ left, right, color, balanced }: {
  left: string; right: string; color: string; balanced: boolean;
}) {
  return (
    <svg viewBox="0 0 280 100" width="100%" style={{ maxHeight: 90 }}>
      {/* Triangle base */}
      <polygon points="140,90 125,70 155,70" fill={balanced ? "#00FF88" : color} opacity={0.6} />
      {/* Beam */}
      <line x1={30} y1={65} x2={250} y2={65} stroke={balanced ? "#00FF88" : color} strokeWidth={3} strokeLinecap="round" />
      {/* Left pan */}
      <rect x={20} y={35} width={110} height={28} rx={8}
        fill={`${color}22`} stroke={color} strokeWidth={1.5} />
      <text x={75} y={55} textAnchor="middle" fill="white" fontSize={14} fontWeight="900">{left}</text>
      {/* Right pan */}
      <rect x={150} y={35} width={110} height={28} rx={8}
        fill={`${color}22`} stroke={color} strokeWidth={1.5} />
      <text x={205} y={55} textAnchor="middle" fill="white" fontSize={14} fontWeight="900">{right}</text>
      {/* Equals */}
      <text x={140} y={55} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={16} fontWeight="900">=</text>
    </svg>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const AlgebraExplorer = memo(function AlgebraExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => shuffle(ROUND_POOL).slice(0, 6));
  const [idx, setIdx] = useState(0);
  // Steps: 0=show equation, 1=subtract b, 2=divide by a, 3=show solution+check
  const [step, setStep] = useState(0);

  const round = rounds[idx];
  const { a, b, x } = round;
  const c = a * x + b;

  const handleNext = useCallback(() => {
    if (idx + 1 >= rounds.length) {
      onDone(rounds.length, rounds.length);
      return;
    }
    setIdx(i => i + 1);
    setStep(0);
  }, [idx, rounds.length, onDone]);

  const stepColors = ["rgba(255,255,255,0.06)", "rgba(239,68,68,0.1)", "rgba(59,130,246,0.1)", "rgba(0,255,136,0.08)"];
  const stepBorders = ["rgba(255,255,255,0.1)", "rgba(239,68,68,0.3)", "rgba(59,130,246,0.3)", "rgba(0,255,136,0.3)"];

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {/* Progress */}
      <div className="flex gap-1.5 w-full">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Intro text — only first round */}
      {idx === 0 && step === 0 && (
        <p className="text-white/50 text-xs font-medium text-center px-4">{lbl.intro}</p>
      )}

      <AnimatePresence mode="wait">
        <motion.div key={`${idx}-${step}`}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* Step 0: Show the equation */}
          {step === 0 && (
            <>
              <p className="text-white/50 text-xs font-bold text-center">{lbl.step1}</p>
              <BalanceSVG left={`${a}x + ${b}`} right={`${c}`} color={color} balanced={true} />
              <div className="text-center py-2">
                <span className="text-2xl font-black" style={{ color }}>{a}x + {b} = {c}</span>
              </div>
              <motion.button
                onClick={() => setStep(1)}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}
              >
                {lbl.tapStep}
              </motion.button>
            </>
          )}

          {/* Step 1: Subtract b from both sides */}
          {step === 1 && (
            <>
              <div className="w-full rounded-2xl px-4 py-3"
                style={{ background: stepColors[1], border: `1px solid ${stepBorders[1]}` }}>
                <p className="text-xs font-bold text-center mb-2" style={{ color: "#EF4444" }}>
                  − {b} {lbl.bothSides}
                </p>
                <BalanceSVG left={`${a}x + ${b} − ${b}`} right={`${c} − ${b}`} color="#EF4444" balanced={true} />
              </div>
              <div className="text-center">
                <span className="text-lg font-black text-white/60">{a}x + {b} − {b} = {c} − {b}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white/40">→</span>
                <span className="text-xl font-black" style={{ color }}>{a}x = {c - b}</span>
              </div>
              <p className="text-white/50 text-xs font-bold text-center px-4">{lbl.rule}</p>
              <motion.button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}
              >
                {lbl.tapStep}
              </motion.button>
            </>
          )}

          {/* Step 2: Divide by a */}
          {step === 2 && (
            <>
              <div className="w-full rounded-2xl px-4 py-3"
                style={{ background: stepColors[2], border: `1px solid ${stepBorders[2]}` }}>
                <p className="text-xs font-bold text-center mb-2" style={{ color: "#3B82F6" }}>
                  ÷ {a} {lbl.bothSides}
                </p>
                <BalanceSVG left={`${a}x ÷ ${a}`} right={`${c - b} ÷ ${a}`} color="#3B82F6" balanced={true} />
              </div>
              <div className="text-center">
                <span className="text-lg font-black text-white/60">{a}x ÷ {a} = {c - b} ÷ {a}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white/40">→</span>
                <span className="text-xl font-black" style={{ color }}>{lbl.weGet}</span>
              </div>
              <motion.button
                onClick={() => setStep(3)}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}
              >
                {lbl.tapStep}
              </motion.button>
            </>
          )}

          {/* Step 3: Show solution + proof check */}
          {step === 3 && (
            <>
              <motion.div
                className="w-full rounded-2xl px-5 py-4"
                style={{ background: stepColors[3], border: `2px solid ${stepBorders[3]}` }}
                animate={{ scale: [0.95, 1.02, 1] }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.result}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-black" style={{ color: "#00FF88" }}>x = {x}</span>
                </div>
                {/* Proof */}
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-white/50 text-xs font-bold text-center mb-1">{lbl.check}</p>
                  <p className="text-center text-sm font-bold text-white/70">
                    {a} × <span style={{ color: "#00FF88" }}>{x}</span> + {b} = {a * x} + {b} = <span style={{ color: "#00FF88" }}>{c}</span> ✅
                  </p>
                </div>
              </motion.div>

              <BalanceSVG left={`${c}`} right={`${c}`} color="#00FF88" balanced={true} />

              <motion.button
                onClick={handleNext}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                whileTap={{ scale: 0.97 }}
              >
                {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={16} />
              </motion.button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default AlgebraExplorer;
