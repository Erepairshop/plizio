"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Egyenletrendszer – Mérleg",
    hint: "Oldd meg az egyenletrendszert! Add meg x értékét!",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    answer: "x =",
    system: "Egyenletrendszer",
    solve: "x = ?",
  },
  de: {
    title: "Gleichungssystem – Waage",
    hint: "Löse das Gleichungssystem! Gib den Wert von x an!",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    answer: "x =",
    system: "Gleichungssystem",
    solve: "x = ?",
  },
  en: {
    title: "Systems of Equations – Balance Scale",
    hint: "Solve the system of equations! Give the value of x!",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    answer: "x =",
    system: "System",
    solve: "x = ?",
  },
  ro: {
    title: "Sistem de ecuații – Balanță",
    hint: "Rezolvă sistemul de ecuații! Dă valoarea lui x!",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    answer: "x =",
    system: "Sistem",
    solve: "x = ?",
  },
};

interface SubQuestion {
  // ax + by = s1
  // cx - dy = s2
  // answer = x
  eq1: string;
  eq2: string;
  answer: number;
  xVal: number;
  yVal: number;
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

function BalanceSVG({ eq1, eq2, xVal, yVal }: { eq1: string; eq2: string; xVal: number; yVal: number }) {
  const W = 240, H = 160;
  const cx = W / 2;

  // Tilt based on balance — show balanced (both equations satisfied)
  const tilt = 0; // balanced

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H}>
      {/* Stand */}
      <rect x={cx - 4} y={90} width={8} height={55} rx={3} fill="#94a3b8" />
      <rect x={cx - 20} y={140} width={40} height={8} rx={3} fill="#64748b" />

      {/* Beam */}
      <motion.g
        animate={{ rotate: tilt }}
        style={{ originX: `${cx}px`, originY: "90px" }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <line x1={30} y1={90} x2={W - 30} y2={90} stroke="#6366f1" strokeWidth="4" strokeLinecap="round" />
        {/* Pivot */}
        <circle cx={cx} cy={90} r={7} fill="#818cf8" />

        {/* Left pan */}
        <line x1={50} y1={90} x2={50} y2={118} stroke="#818cf8" strokeWidth="1.5" />
        <ellipse cx={50} cy={120} rx={28} ry={6} fill="#c7d2fe" stroke="#818cf8" strokeWidth="1.5" />

        {/* Right pan */}
        <line x1={W - 50} y1={90} x2={W - 50} y2={118} stroke="#818cf8" strokeWidth="1.5" />
        <ellipse cx={W - 50} cy={120} rx={28} ry={6} fill="#c7d2fe" stroke="#818cf8" strokeWidth="1.5" />
      </motion.g>

      {/* Equation labels on pans */}
      <text x={50} y={108} textAnchor="middle" fontSize="8" fill="#3730a3" fontWeight="bold">{eq1}</text>
      <text x={W - 50} y={108} textAnchor="middle" fontSize="8" fill="#3730a3" fontWeight="bold">{eq2}</text>

      {/* Solution badges */}
      <rect x={cx - 45} y={10} width={90} height={32} rx={10} fill="#6366f1" opacity={0.9} />
      <text x={cx} y={28} textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">x=? · y=?</text>

      {/* Helper hint arrows */}
      <text x={18} y={88} fontSize="9" fill="#818cf8">⬇</text>
      <text x={W - 22} y={88} fontSize="9" fill="#818cf8">⬇</text>
    </svg>
  );
}

export default function SystemsBalance({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaults: SubQuestion[] = [
    { eq1: "x+y=10", eq2: "x-y=4", answer: 7, xVal: 7, yVal: 3 },
    { eq1: "x+y=15", eq2: "x-y=5", answer: 10, xVal: 10, yVal: 5 },
    { eq1: "x+y=12", eq2: "x-y=2", answer: 7, xVal: 7, yVal: 5 },
  ];
  const subs = subQuestions || defaults;
  const sub = subs[0] || defaults[0];

  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (embedded) return;
    const correct = String(input).trim() === String(sub.answer).trim();
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer?.(correct);
  };

  const handleChange = (val: string) => {
    setInput(val);
    onValueChange?.(val);
  };

  return (
    <div
      className="rounded-3xl overflow-hidden shadow-xl"
      style={{ background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 60%, #ddd6fe 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold text-xl">⚖️</div>
          <div>
            <div className="font-extrabold text-violet-900 text-sm">{t.title}</div>
            <div className="text-xs text-violet-400 font-mono">{sub.eq1}</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        <p className="text-xs font-semibold text-center text-violet-700 pb-2">{t.hint}</p>

        {/* Equations */}
        <div className="flex gap-2 justify-center mb-2">
          {[sub.eq1, sub.eq2].map((eq, i) => (
            <div key={i} className="bg-indigo-50 border border-indigo-200 rounded-xl px-3 py-1.5 text-indigo-800 font-bold text-sm">
              {eq}
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-2">
            <BalanceSVG eq1={sub.eq1} eq2={sub.eq2} xVal={sub.xVal} yVal={sub.yVal} />
          </div>
        </div>

        <div className="flex justify-center mb-3">
          <div className="bg-violet-100 border border-violet-300 rounded-xl px-4 py-1.5 text-violet-800 font-bold text-sm">
            {t.solve}
          </div>
        </div>

        {!embedded ? (
          <div className="flex gap-2 justify-center mb-3">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="x ="
              className="border-2 border-violet-200 rounded-xl px-3 py-2 text-center text-violet-900 font-bold text-lg w-28 focus:outline-none focus:border-violet-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-violet-600 text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-violet-700 transition-colors"
            >
              {t.check}
            </button>
          </div>
        ) : (
          <div className="flex justify-center mb-2">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="x ="
              className="border-2 border-violet-200 rounded-xl px-3 py-2 text-center text-violet-900 font-bold text-lg w-32 focus:outline-none focus:border-violet-500"
            />
          </div>
        )}

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-center font-bold text-sm py-1 rounded-xl ${isCorrect ? "text-green-700 bg-green-100" : "text-red-600 bg-red-100"}`}
            >
              {isCorrect ? t.correct : `${t.wrong} (${sub.answer})`}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
