"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Háromszög szögei",
    hint: "Számítsd ki a hiányzó szöget! (A háromszög szögeinek összege 180°)",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    formula: "α + β + γ = 180°",
    answer: "? szög (°):",
    unknown: "?",
  },
  de: {
    title: "Dreieckswinkel",
    hint: "Berechne den fehlenden Winkel! (Winkelsumme im Dreieck = 180°)",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    formula: "α + β + γ = 180°",
    answer: "? Winkel (°):",
    unknown: "?",
  },
  en: {
    title: "Triangle Angles",
    hint: "Find the missing angle! (Angles in a triangle sum to 180°)",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    formula: "α + β + γ = 180°",
    answer: "? angle (°):",
    unknown: "?",
  },
  ro: {
    title: "Unghiurile unui triunghi",
    hint: "Calculează unghiul lipsă! (Suma unghiurilor = 180°)",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    formula: "α + β + γ = 180°",
    answer: "? unghi (°):",
    unknown: "?",
  },
};

interface SubQuestion {
  a: number;
  b: number;
  answer: number | string;
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

// SVG triangle with labeled angles
function TriangleSVG({ a, b, missing }: { a: number; b: number; missing: number }) {
  // Fixed triangle shape, labels are angles
  const pts = [
    [50, 160],
    [230, 160],
    [110, 30],
  ];
  const [x1, y1] = pts[0];
  const [x2, y2] = pts[1];
  const [x3, y3] = pts[2];

  // Arc positions inside triangle
  const arcR = 22;

  return (
    <svg viewBox="0 0 280 200" width="220" height="160" className="overflow-visible">
      {/* Triangle */}
      <polygon
        points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
        fill="rgba(251,191,36,0.12)"
        stroke="#F59E0B"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Angle arcs */}
      {/* Bottom-left angle (a°) */}
      <path
        d={`M ${x1 + arcR},${y1} A ${arcR},${arcR} 0 0,1 ${x1 + arcR * Math.cos(Math.atan2(y1 - y3, x3 - x1))},${y1 - arcR * Math.sin(Math.atan2(y1 - y3, x3 - x1))}`}
        fill="rgba(251,191,36,0.3)"
        stroke="#F59E0B"
        strokeWidth="1.5"
      />
      {/* Bottom-right angle (b°) */}
      <path
        d={`M ${x2 - arcR},${y2} A ${arcR},${arcR} 0 0,0 ${x2 + arcR * Math.cos(Math.atan2(y2 - y3, x3 - x2))},${y2 - arcR * Math.sin(Math.atan2(y2 - y3, x3 - x2))}`}
        fill="rgba(251,191,36,0.3)"
        stroke="#F59E0B"
        strokeWidth="1.5"
      />

      {/* Angle labels */}
      <text x={x1 + 18} y={y1 - 8} textAnchor="middle" fontSize="15" fontWeight="bold" fill="#92400E">{a}°</text>
      <text x={x2 - 20} y={y2 - 8} textAnchor="middle" fontSize="15" fontWeight="bold" fill="#92400E">{b}°</text>
      <text x={x3} y={y3 - 10} textAnchor="middle" fontSize="15" fontWeight="bold" fill="#EC4899">?</text>

      {/* Side labels (decorative) */}
      <text x={(x1 + x2) / 2} y={y1 + 18} textAnchor="middle" fontSize="11" fill="#D97706" opacity="0.7">a</text>
      <text x={(x1 + x3) / 2 - 14} y={(y1 + y3) / 2} textAnchor="middle" fontSize="11" fill="#D97706" opacity="0.7">b</text>
      <text x={(x2 + x3) / 2 + 14} y={(y2 + y3) / 2} textAnchor="middle" fontSize="11" fill="#D97706" opacity="0.7">c</text>

      {/* Formula reminder */}
      <text x="140" y="190" textAnchor="middle" fontSize="11" fill="#B45309" fontFamily="monospace">α + β + γ = 180°</text>
    </svg>
  );
}

export default function TriangleAngles({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaultSubs: SubQuestion[] = [
    { a: 60, b: 80, answer: 40 },
    { a: 45, b: 75, answer: 60 },
    { a: 30, b: 110, answer: 40 },
  ];
  const subs = subQuestions || defaultSubs;

  const [idx] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const sub = subs[idx] || subs[0];
  const missing = 180 - sub.a - sub.b;

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
      style={{ background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fde68a 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-white font-bold text-lg">
            🔺
          </div>
          <div>
            <div className="font-extrabold text-amber-900 text-sm">{t.title}</div>
            <div className="text-xs text-amber-500 font-mono">{t.formula}</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        <p className="text-xs font-semibold text-center text-amber-700 pb-2">{t.hint}</p>

        {/* Triangle SVG */}
        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-3">
            <TriangleSVG a={sub.a} b={sub.b} missing={missing} />
          </div>
        </div>

        {/* Given info */}
        <div className="flex justify-center gap-4 mb-3">
          <div className="bg-amber-100 rounded-xl px-3 py-1 text-amber-800 font-bold text-sm">α = {sub.a}°</div>
          <div className="bg-amber-100 rounded-xl px-3 py-1 text-amber-800 font-bold text-sm">β = {sub.b}°</div>
          <div className="bg-pink-100 rounded-xl px-3 py-1 text-pink-700 font-bold text-sm">γ = ?</div>
        </div>

        {/* Input */}
        {!embedded && (
          <div className="flex gap-2 justify-center mb-3">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={t.answer}
              className="border-2 border-amber-300 rounded-xl px-3 py-2 text-center text-amber-900 font-bold text-lg w-32 focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-amber-500 text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-amber-600 transition-colors"
            >
              {t.check}
            </button>
          </div>
        )}

        {embedded && (
          <div className="flex justify-center mb-2">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={t.answer}
              className="border-2 border-amber-300 rounded-xl px-3 py-2 text-center text-amber-900 font-bold text-lg w-36 focus:outline-none focus:border-amber-500"
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
