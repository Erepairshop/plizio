"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Statisztika – Hisztogram",
    hint: "Olvasd le az adatokat és számold ki az átlagot!",
    hintMedian: "Olvasd le az adatokat és add meg a mediánt!",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    answer: "Válasz:",
    mean: "Átlag = ?",
    median: "Medián = ?",
    freq: "Gyakoriság",
  },
  de: {
    title: "Statistik – Histogramm",
    hint: "Lies die Daten ab und berechne den Mittelwert!",
    hintMedian: "Lies die Daten ab und gib den Median an!",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    answer: "Antwort:",
    mean: "Mittelwert = ?",
    median: "Median = ?",
    freq: "Häufigkeit",
  },
  en: {
    title: "Statistics – Histogram",
    hint: "Read the data and calculate the mean!",
    hintMedian: "Read the data and give the median!",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    answer: "Answer:",
    mean: "Mean = ?",
    median: "Median = ?",
    freq: "Frequency",
  },
  ro: {
    title: "Statistică – Histogramă",
    hint: "Citește datele și calculează media!",
    hintMedian: "Citește datele și dă mediana!",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    answer: "Răspuns:",
    mean: "Medie = ?",
    median: "Mediană = ?",
    freq: "Frecvență",
  },
};

type StatMode = "mean" | "median";

interface SubQuestion {
  data: number[];
  mode: StatMode;
  answer: number;
  labels: string[];
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

function HistogramSVG({ data, labels }: { data: number[]; labels: string[] }) {
  const W = 240, H = 160;
  const padL = 28, padR = 10, padT = 10, padB = 30;
  const maxVal = Math.max(...data);
  const barW = (W - padL - padR) / data.length;
  const chartH = H - padT - padB;

  const colors = ["#6366f1", "#8b5cf6", "#a78bfa", "#c4b5fd", "#ddd6fe"];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H}>
      {/* Y axis */}
      <line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="#94a3b8" strokeWidth="1.5" />
      {/* X axis */}
      <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="#94a3b8" strokeWidth="1.5" />

      {/* Y ticks */}
      {[0, Math.ceil(maxVal / 2), maxVal].map((v, i) => {
        const sy = H - padB - (v / maxVal) * chartH;
        return (
          <g key={i}>
            <line x1={padL - 3} y1={sy} x2={padL} y2={sy} stroke="#94a3b8" strokeWidth="1" />
            <text x={padL - 5} y={sy + 3} fontSize="8" textAnchor="end" fill="#64748b">{v}</text>
          </g>
        );
      })}

      {/* Bars */}
      {data.map((val, i) => {
        const bh = (val / maxVal) * chartH;
        const bx = padL + i * barW + 2;
        const by = H - padB - bh;
        return (
          <g key={i}>
            <motion.rect
              x={bx} y={by} width={barW - 4} height={bh}
              fill={colors[i % colors.length]}
              rx={2}
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              style={{ transformOrigin: `${bx + (barW - 4) / 2}px ${H - padB}px` }}
            />
            {/* Value on top of bar */}
            <text x={bx + (barW - 4) / 2} y={by - 2} textAnchor="middle" fontSize="9" fill="#4f46e5" fontWeight="bold">{val}</text>
            {/* X label */}
            <text x={bx + (barW - 4) / 2} y={H - padB + 12} textAnchor="middle" fontSize="8" fill="#64748b">{labels[i]}</text>
          </g>
        );
      })}
    </svg>
  );
}

export default function StatisticsHistogram({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaults: SubQuestion[] = [
    { data: [3, 5, 4, 6, 2], labels: ["A", "B", "C", "D", "E"], mode: "mean", answer: 4 },
    { data: [2, 4, 6, 4, 4], labels: ["A", "B", "C", "D", "E"], mode: "median", answer: 4 },
    { data: [5, 3, 7, 2, 3], labels: ["A", "B", "C", "D", "E"], mode: "mean", answer: 4 },
  ];
  const subs = subQuestions || defaults;
  const sub = subs[0] || defaults[0];

  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const hint = sub.mode === "median" ? t.hintMedian : t.hint;
  const badge = sub.mode === "median" ? t.median : t.mean;

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
      style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #f3e8ff 50%, #ede9fe 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold text-xl">📊</div>
          <div>
            <div className="font-extrabold text-violet-900 text-sm">{t.title}</div>
            <div className="text-xs text-violet-400 font-mono">n={sub.data.length} · {sub.mode}</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        <p className="text-xs font-semibold text-center text-violet-700 pb-2">{hint}</p>

        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-2">
            <HistogramSVG data={sub.data} labels={sub.labels} />
          </div>
        </div>

        <div className="flex justify-center mb-3">
          <div className="flex gap-1 flex-wrap justify-center">
            {sub.data.map((v, i) => (
              <div key={i} className="bg-violet-100 border border-violet-300 rounded-lg px-2 py-0.5 text-violet-800 font-bold text-xs">
                {sub.labels[i]}: {v}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mb-3">
          <div className="bg-violet-100 border border-violet-300 rounded-xl px-4 py-1.5 text-violet-800 font-bold text-sm">
            {badge}
          </div>
        </div>

        {!embedded ? (
          <div className="flex gap-2 justify-center mb-3">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="?"
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
              placeholder="?"
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
