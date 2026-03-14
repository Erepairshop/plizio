"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Statisztika – Adatsor",
    hintMedian: "Rendezd sorba az adatokat, és add meg a mediánt!",
    hintMode: "Melyik érték szerepel a legtöbbször? Add meg a móduszt!",
    hintRange: "Add meg a terjedelmét! (max − min)",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    median: "Medián",
    mode: "Módusz",
    range: "Terjedelem",
    sorted: "Rendezve:",
    answer: "Válasz:",
    data: "Adatok:",
  },
  de: {
    title: "Statistik – Datensatz",
    hintMedian: "Ordne die Daten und gib den Median an!",
    hintMode: "Welcher Wert kommt am häufigsten vor? Gib den Modus an!",
    hintRange: "Gib die Spannweite an! (max − min)",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    median: "Median",
    mode: "Modus",
    range: "Spannweite",
    sorted: "Geordnet:",
    answer: "Antwort:",
    data: "Daten:",
  },
  en: {
    title: "Statistics – Data Set",
    hintMedian: "Sort the data and find the median!",
    hintMode: "Which value appears most often? Give the mode!",
    hintRange: "Give the range! (max − min)",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    median: "Median",
    mode: "Mode",
    range: "Range",
    sorted: "Sorted:",
    answer: "Answer:",
    data: "Data:",
  },
  ro: {
    title: "Statistică – Set de date",
    hintMedian: "Ordonează datele și găsește mediana!",
    hintMode: "Ce valoare apare cel mai des? Dă modul!",
    hintRange: "Dă amplitudinea! (max − min)",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    median: "Mediană",
    mode: "Modul",
    range: "Amplitudine",
    sorted: "Ordonat:",
    answer: "Răspuns:",
    data: "Date:",
  },
};

type StatType = "median" | "mode" | "range";

interface SubQuestion {
  data: number[];
  statType: StatType;
  answer: number | string;
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const BAR_COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B", "#0EA5E9", "#EF4444"];

function DataBarChart({ data, statType, answer }: { data: number[]; statType: StatType; answer: number | string }) {
  const sorted = [...data].sort((a, b) => a - b);
  const max = Math.max(...data);

  // Count frequencies for mode highlight
  const freq: Record<number, number> = {};
  data.forEach((v) => { freq[v] = (freq[v] || 0) + 1; });
  const maxFreq = Math.max(...Object.values(freq));

  return (
    <svg viewBox="0 0 220 120" width="220" height="120">
      {data.map((val, i) => {
        const barH = Math.max(8, (val / max) * 72);
        const x = 12 + i * (210 / data.length);
        const barW = Math.max(18, (200 / data.length) - 4);
        const isMode = statType === "mode" && freq[val] === maxFreq;
        const isMedianIdx =
          statType === "median" &&
          (i === Math.floor((data.length - 1) / 2) || i === Math.ceil((data.length - 1) / 2));

        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: i * 0.06, type: "spring", stiffness: 300 }}
            style={{ transformOrigin: `${x + barW / 2}px 88px` }}
          >
            <rect
              x={x}
              y={88 - barH}
              width={barW}
              height={barH}
              rx={3}
              fill={isMode ? "#EC4899" : BAR_COLORS[i % BAR_COLORS.length]}
              opacity={isMode ? 0.9 : 0.75}
              stroke={isMode ? "#BE185D" : "none"}
              strokeWidth={isMode ? 1.5 : 0}
            />
            {/* Value label on bar */}
            <text
              x={x + barW / 2}
              y={88 - barH - 4}
              textAnchor="middle"
              fontSize="10"
              fontWeight="bold"
              fill={isMode ? "#BE185D" : "#312e81"}
            >
              {val}
            </text>
          </motion.g>
        );
      })}

      {/* Baseline */}
      <line x1={8} y1={88} x2={212} y2={88} stroke="#94A3B8" strokeWidth="1.5" />
    </svg>
  );
}

function SortedRow({ data, statType, answer }: { data: number[]; statType: StatType; answer: number | string }) {
  const sorted = [...data].sort((a, b) => a - b);
  const medianIdx = (sorted.length - 1) / 2;
  const isEvenLength = sorted.length % 2 === 0;
  const lo = Math.floor(medianIdx);
  const hi = Math.ceil(medianIdx);

  // mode
  const freq: Record<number, number> = {};
  data.forEach((v) => { freq[v] = (freq[v] || 0) + 1; });
  const maxFreq = Math.max(...Object.values(freq));

  return (
    <div className="flex flex-wrap gap-1 justify-center">
      {sorted.map((val, i) => {
        const isMedian = statType === "median" && (i === lo || i === hi);
        const isMode = statType === "mode" && freq[val] === maxFreq;
        const isMin = statType === "range" && i === 0;
        const isMax = statType === "range" && i === sorted.length - 1;

        return (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.05, type: "spring" }}
            className={`w-8 h-8 flex items-center justify-center rounded-lg font-black text-sm border-2 ${
              isMedian
                ? "bg-pink-100 border-pink-400 text-pink-700"
                : isMode
                ? "bg-purple-100 border-purple-400 text-purple-700"
                : isMin || isMax
                ? "bg-indigo-100 border-indigo-400 text-indigo-700"
                : "bg-white border-slate-200 text-slate-600"
            }`}
          >
            {val}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function StatisticsVisual({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaultSubs: SubQuestion[] = [
    { data: [3, 7, 5, 2, 8, 4, 6], statType: "median", answer: 5 },
    { data: [2, 5, 3, 5, 4, 5, 3], statType: "mode", answer: 5 },
    { data: [4, 9, 2, 7, 6], statType: "range", answer: 7 },
  ];
  const subs = subQuestions || defaultSubs;

  const [idx] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const sub = subs[idx] || subs[0];

  const hint =
    sub.statType === "median"
      ? t.hintMedian
      : sub.statType === "mode"
      ? t.hintMode
      : t.hintRange;

  const statLabel =
    sub.statType === "median"
      ? t.median
      : sub.statType === "mode"
      ? t.mode
      : t.range;

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
      style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #f3e8ff 50%, #e0e7ff 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold text-xl">
            📊
          </div>
          <div>
            <div className="font-extrabold text-violet-900 text-sm">{t.title}</div>
            <div className="text-xs text-violet-400 font-mono">{statLabel}</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        {/* Instruction — always visible */}
        <p className="text-xs font-semibold text-center text-violet-700 pb-2">{hint}</p>

        {/* Data display */}
        <div className="flex justify-center mb-2">
          <div className="bg-white rounded-2xl shadow-sm border border-violet-100 px-4 py-2">
            <div className="text-xs text-violet-500 font-bold mb-1 text-center">{t.data}</div>
            <div className="flex flex-wrap gap-1 justify-center">
              {sub.data.map((val, i) => (
                <span
                  key={i}
                  className="w-7 h-7 flex items-center justify-center rounded-lg bg-violet-50 border border-violet-200 text-violet-800 font-black text-sm"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex justify-center mb-2">
          <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-2">
            <DataBarChart data={sub.data} statType={sub.statType} answer={sub.answer} />
          </div>
        </div>

        {/* Sorted row with hints */}
        <div className="bg-white/70 rounded-xl px-3 py-2 mb-3 border border-violet-100">
          <div className="text-xs text-violet-500 font-bold mb-1 text-center">{t.sorted}</div>
          <SortedRow data={sub.data} statType={sub.statType} answer={sub.answer} />
        </div>

        {/* Stat type badge */}
        <div className="flex justify-center mb-3">
          <div className="bg-violet-100 border border-violet-300 rounded-xl px-4 py-1 text-violet-700 font-bold text-sm">
            {statLabel} = ?
          </div>
        </div>

        {/* Input */}
        {!embedded && (
          <div className="flex gap-2 justify-center mb-3">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={t.answer}
              className="border-2 border-violet-200 rounded-xl px-3 py-2 text-center text-violet-900 font-bold text-lg w-32 focus:outline-none focus:border-violet-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-violet-600 text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-violet-700 transition-colors"
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
              className="border-2 border-violet-200 rounded-xl px-3 py-2 text-center text-violet-900 font-bold text-lg w-36 focus:outline-none focus:border-violet-500"
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
