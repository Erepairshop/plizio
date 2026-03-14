"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Kör – kerület és terület",
    hintCirc: "Számítsd ki a kör kerületét! (K = 2 × π × r)",
    hintArea: "Számítsd ki a kör területét! (T = π × r²)",
    radius: "sugár",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    pi: "π ≈ 3,14",
    formulaCirc: "K = 2πr",
    formulaArea: "T = πr²",
    answer: "Válasz:",
    unit: "cm",
    unitSq: "cm²",
  },
  de: {
    title: "Kreis – Umfang und Fläche",
    hintCirc: "Berechne den Umfang des Kreises! (U = 2 × π × r)",
    hintArea: "Berechne die Fläche des Kreises! (A = π × r²)",
    radius: "Radius",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    pi: "π ≈ 3,14",
    formulaCirc: "U = 2πr",
    formulaArea: "A = πr²",
    answer: "Antwort:",
    unit: "cm",
    unitSq: "cm²",
  },
  en: {
    title: "Circle – Circumference & Area",
    hintCirc: "Calculate the circumference of the circle! (C = 2 × π × r)",
    hintArea: "Calculate the area of the circle! (A = π × r²)",
    radius: "radius",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    pi: "π ≈ 3.14",
    formulaCirc: "C = 2πr",
    formulaArea: "A = πr²",
    answer: "Answer:",
    unit: "cm",
    unitSq: "cm²",
  },
  ro: {
    title: "Cerc – Circumferință și Arie",
    hintCirc: "Calculează circumferința cercului! (C = 2 × π × r)",
    hintArea: "Calculează aria cercului! (A = π × r²)",
    radius: "raza",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    pi: "π ≈ 3,14",
    formulaCirc: "C = 2πr",
    formulaArea: "A = πr²",
    answer: "Răspuns:",
    unit: "cm",
    unitSq: "cm²",
  },
};

interface SubQuestion {
  r: number;
  findArea: boolean; // true = find area, false = find circumference
  answer: number | string;
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

function CircleSVG({ r, findArea }: { r: number; findArea: boolean }) {
  const cx = 100, cy = 100;
  const displayR = Math.min(60, r * 8);

  return (
    <svg viewBox="0 0 200 200" width="180" height="180">
      {/* Circle fill */}
      <circle
        cx={cx}
        cy={cy}
        r={displayR}
        fill="rgba(59,130,246,0.12)"
        stroke="#3B82F6"
        strokeWidth="2.5"
      />

      {/* Radius line */}
      <line
        x1={cx}
        y1={cy}
        x2={cx + displayR}
        y2={cy}
        stroke="#EC4899"
        strokeWidth="2"
        strokeDasharray="4 2"
      />

      {/* Radius label */}
      <text
        x={cx + displayR / 2}
        y={cy - 8}
        textAnchor="middle"
        fontSize="13"
        fontWeight="bold"
        fill="#EC4899"
      >
        r = {r} cm
      </text>

      {/* Center dot */}
      <circle cx={cx} cy={cy} r={3} fill="#3B82F6" />

      {/* If finding circumference: show the arc with a dashed outline */}
      {!findArea && (
        <circle
          cx={cx}
          cy={cy}
          r={displayR}
          fill="none"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeDasharray="6 4"
          opacity={0.7}
        />
      )}

      {/* Formula */}
      <text
        x={cx}
        y={cy + displayR + 22}
        textAnchor="middle"
        fontSize="12"
        fontFamily="monospace"
        fill="#1D4ED8"
        fontWeight="bold"
      >
        {findArea ? `A = π × ${r}²` : `C = 2 × π × ${r}`}
      </text>
    </svg>
  );
}

export default function CircleVisual({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaultSubs: SubQuestion[] = [
    { r: 5, findArea: false, answer: 31.4 },
    { r: 4, findArea: true, answer: 50.24 },
    { r: 3, findArea: false, answer: 18.84 },
  ];
  const subs = subQuestions || defaultSubs;

  const [idx] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const sub = subs[idx] || subs[0];
  const hint = sub.findArea ? t.hintArea : t.hintCirc;
  const formula = sub.findArea ? t.formulaArea : t.formulaCirc;
  const unitLabel = sub.findArea ? t.unitSq : t.unit;

  const handleSubmit = () => {
    if (embedded) return;
    const userVal = parseFloat(input.replace(",", "."));
    const correct = Math.abs(userVal - Number(sub.answer)) < 0.1;
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
      style={{ background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
            ⭕
          </div>
          <div>
            <div className="font-extrabold text-blue-900 text-sm">{t.title}</div>
            <div className="text-xs text-blue-400 font-mono">{formula}</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        {/* Instruction — always visible */}
        <p className="text-xs font-semibold text-center text-blue-700 pb-2">{hint}</p>

        {/* Circle SVG */}
        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-2">
            <CircleSVG r={sub.r} findArea={sub.findArea} />
          </div>
        </div>

        {/* Pi hint */}
        <div className="flex justify-center mb-3">
          <div className="bg-blue-50 rounded-xl px-4 py-1 text-blue-700 font-mono text-sm font-bold border border-blue-200">
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
                className="border-2 border-blue-200 rounded-xl px-3 py-2 text-center text-blue-900 font-bold text-lg w-32 focus:outline-none focus:border-blue-500 pr-10"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-blue-400 font-bold">
                {unitLabel}
              </span>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-blue-700 transition-colors"
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
                className="border-2 border-blue-200 rounded-xl px-3 py-2 text-center text-blue-900 font-bold text-lg w-36 focus:outline-none focus:border-blue-500 pr-10"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-blue-400 font-bold">
                {unitLabel}
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
