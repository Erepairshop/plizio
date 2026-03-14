"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Henger – térfogat",
    hint: "Számítsd ki a henger térfogatát! (V = π × r² × h)",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    pi: "π ≈ 3,14",
    formula: "V = πr²h",
    answer: "Válasz:",
    unit: "cm³",
    radius: "sugár",
    height: "magasság",
  },
  de: {
    title: "Zylinder – Volumen",
    hint: "Berechne das Volumen des Zylinders! (V = π × r² × h)",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    pi: "π ≈ 3,14",
    formula: "V = πr²h",
    answer: "Antwort:",
    unit: "cm³",
    radius: "Radius",
    height: "Höhe",
  },
  en: {
    title: "Cylinder – Volume",
    hint: "Calculate the volume of the cylinder! (V = π × r² × h)",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    pi: "π ≈ 3.14",
    formula: "V = πr²h",
    answer: "Answer:",
    unit: "cm³",
    radius: "radius",
    height: "height",
  },
  ro: {
    title: "Cilindru – Volum",
    hint: "Calculează volumul cilindrului! (V = π × r² × h)",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    pi: "π ≈ 3,14",
    formula: "V = πr²h",
    answer: "Răspuns:",
    unit: "cm³",
    radius: "raza",
    height: "înălțimea",
  },
};

interface SubQuestion {
  r: number;
  h: number;
  answer: number | string;
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

function CylinderSVG({ r, h, radiusLabel, heightLabel }: { r: number; h: number; radiusLabel: string; heightLabel: string }) {
  const cx = 100;
  const displayR = Math.min(55, r * 10);
  const displayH = Math.min(80, h * 8);
  const topY = 40;
  const bottomY = topY + displayH;
  const ry = displayR * 0.35; // ellipse y radius for 3D effect

  return (
    <svg viewBox="0 0 200 200" width="180" height="180">
      {/* Bottom ellipse */}
      <ellipse
        cx={cx}
        cy={bottomY}
        rx={displayR}
        ry={ry}
        fill="rgba(16,185,129,0.25)"
        stroke="#10B981"
        strokeWidth="2"
      />

      {/* Cylinder body sides */}
      <rect
        x={cx - displayR}
        y={topY}
        width={displayR * 2}
        height={displayH}
        fill="rgba(16,185,129,0.12)"
      />

      {/* Left and right edges */}
      <line x1={cx - displayR} y1={topY} x2={cx - displayR} y2={bottomY} stroke="#10B981" strokeWidth="2" />
      <line x1={cx + displayR} y1={topY} x2={cx + displayR} y2={bottomY} stroke="#10B981" strokeWidth="2" />

      {/* Top ellipse */}
      <ellipse
        cx={cx}
        cy={topY}
        rx={displayR}
        ry={ry}
        fill="rgba(16,185,129,0.3)"
        stroke="#10B981"
        strokeWidth="2"
      />

      {/* Radius line on top */}
      <line
        x1={cx}
        y1={topY}
        x2={cx + displayR}
        y2={topY}
        stroke="#EC4899"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
      <text x={cx + displayR / 2} y={topY - 7} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#EC4899">
        {radiusLabel} = {r} cm
      </text>

      {/* Height line */}
      <line
        x1={cx + displayR + 12}
        y1={topY}
        x2={cx + displayR + 12}
        y2={bottomY}
        stroke="#6366F1"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
      {/* Height arrows */}
      <line x1={cx + displayR + 8} y1={topY} x2={cx + displayR + 16} y2={topY} stroke="#6366F1" strokeWidth="1.5" />
      <line x1={cx + displayR + 8} y1={bottomY} x2={cx + displayR + 16} y2={bottomY} stroke="#6366F1" strokeWidth="1.5" />
      <text
        x={cx + displayR + 24}
        y={(topY + bottomY) / 2 + 4}
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#6366F1"
        transform={`rotate(-90, ${cx + displayR + 24}, ${(topY + bottomY) / 2 + 4})`}
      >
        {heightLabel} = {h} cm
      </text>

      {/* Center dot on top */}
      <circle cx={cx} cy={topY} r={3} fill="#10B981" />

      {/* Formula */}
      <text x={cx} y={bottomY + 22} textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#059669" fontWeight="bold">
        V = π × {r}² × {h}
      </text>
    </svg>
  );
}

export default function CylinderVolume({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaultSubs: SubQuestion[] = [
    { r: 3, h: 5, answer: 141.3 },
    { r: 4, h: 6, answer: 301.44 },
    { r: 2, h: 10, answer: 125.6 },
  ];
  const subs = subQuestions || defaultSubs;

  const [idx] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const sub = subs[idx] || subs[0];

  const handleSubmit = () => {
    if (embedded) return;
    const userVal = parseFloat(input.replace(",", "."));
    const correct = Math.abs(userVal - Number(sub.answer)) < 0.5;
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer?.(correct);
  };

  const handleChange = (val: string) => {
    setInput(val);
    onValueChange?.(val.replace(",", "."));
  };

  return (
    <div
      className="rounded-3xl overflow-hidden shadow-xl"
      style={{ background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
            🥫
          </div>
          <div>
            <div className="font-extrabold text-emerald-900 text-sm">{t.title}</div>
            <div className="text-xs text-emerald-400 font-mono">{t.formula}</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        {/* Instruction — always visible */}
        <p className="text-xs font-semibold text-center text-emerald-700 pb-2">{t.hint}</p>

        {/* Cylinder SVG */}
        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-2">
            <CylinderSVG r={sub.r} h={sub.h} radiusLabel={t.radius} heightLabel={t.height} />
          </div>
        </div>

        {/* Pi hint */}
        <div className="flex justify-center mb-3">
          <div className="bg-emerald-50 rounded-xl px-4 py-1 text-emerald-700 font-mono text-sm font-bold border border-emerald-200">
            {t.pi}
          </div>
        </div>

        {/* Input */}
        {!embedded && (
          <div className="flex gap-2 justify-center mb-3">
            <div className="relative">
              <input
                type="text"
                inputMode="decimal"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={t.answer}
                className="border-2 border-emerald-200 rounded-xl px-3 py-2 text-center text-emerald-900 font-bold text-lg w-32 focus:outline-none focus:border-emerald-500 pr-10"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-emerald-400 font-bold">
                {t.unit}
              </span>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-emerald-600 text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-emerald-700 transition-colors"
            >
              {t.check}
            </button>
          </div>
        )}

        {embedded && (
          <div className="flex justify-center mb-2">
            <div className="relative">
              <input
                type="text"
                inputMode="decimal"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={t.answer}
                className="border-2 border-emerald-200 rounded-xl px-3 py-2 text-center text-emerald-900 font-bold text-lg w-36 focus:outline-none focus:border-emerald-500 pr-10"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-emerald-400 font-bold">
                {t.unit}
              </span>
            </div>
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
