"use client";
// ─────────────────────────────────────────────────────────────────────────────
// SortEngine — Modern number/item sorting game UI
// Tap items in ascending order. 5 rounds.
// ─────────────────────────────────────────────────────────────────────────────

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpNarrowWide, Trophy, Zap, CheckCircle, XCircle } from "lucide-react";
import type { SortRound } from "@/lib/astromath";

interface Props {
  sortRange: [number, number];
  color: string;
  onDone: (score: number, total: number) => void;
  generateRound?: () => SortRound;
  rounds?: number;
  lang?: string;
}

const LABELS: Record<string, Record<string, string>> = {
  en: { hint: "Tap from smallest to largest", correct: "Perfect!", wrong: "Wrong order", round: "Round" },
  de: { hint: "Vom Kleinsten zum Größten tippen", correct: "Perfekt!", wrong: "Falsche Reihenfolge", round: "Runde" },
  hu: { hint: "Koppints a legkisebbtől a legnagyobbig", correct: "Tökéletes!", wrong: "Rossz sorrend", round: "Kör" },
  ro: { hint: "Atinge de la cel mai mic la cel mai mare", correct: "Perfect!", wrong: "Ordine greșită", round: "Rundă" },
};

// Import here to avoid circular deps
function defaultGenerateRound(range: [number, number]): SortRound {
  const count = 5;
  const [min, max] = range;
  const nums: number[] = [];
  const seen = new Set<number>();
  while (nums.length < count) {
    const n = min + Math.floor(Math.random() * (max - min + 1));
    if (!seen.has(n)) { seen.add(n); nums.push(n); }
  }
  return { numbers: nums, sorted: [...nums].sort((a, b) => a - b) };
}

function SortEngine({ sortRange, color, onDone, generateRound, rounds: totalRounds = 5, lang = "de" }: Props) {
  const t = LABELS[lang] || LABELS.en;
  const gen = useCallback(() => generateRound ? generateRound() : defaultGenerateRound(sortRange), [generateRound, sortRange]);

  const [round, setRound] = useState(0);
  const [roundData, setRoundData] = useState(() => gen());
  const [tapped, setTapped] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [streak, setStreak] = useState(0);
  const scoreRef = useRef(0);

  const tap = useCallback((idx: number) => {
    if (feedback || tapped.includes(idx)) return;
    const newTapped = [...tapped, idx];
    setTapped(newTapped);

    if (newTapped.length === roundData.numbers.length) {
      const userOrder = newTapped.map(i => roundData.numbers[i]);
      const isCorrect = userOrder.every((n, i) => n === roundData.sorted[i]);
      if (isCorrect) {
        scoreRef.current += 1;
        setStreak(s => s + 1);
      } else {
        setStreak(0);
      }
      setFeedback(isCorrect ? "correct" : "wrong");

      setTimeout(() => {
        if (round + 1 >= totalRounds) {
          onDone(scoreRef.current, totalRounds);
        } else {
          setRound(r => r + 1);
          setRoundData(gen());
          setTapped([]);
          setFeedback(null);
        }
      }, 1200);
    }
  }, [feedback, tapped, roundData, round, totalRounds, onDone, gen]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto items-center">
      {/* ── HUD ── */}
      <div className="flex items-center justify-between w-full px-2">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
          <Trophy size={14} style={{ color }} />
          <span className="text-sm font-black" style={{ color }}>{scoreRef.current}</span>
          <span className="text-xs font-bold text-white/30">/ {totalRounds}</span>
        </div>
        {streak >= 2 && (
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{ background: "rgba(255,200,0,0.15)", border: "1px solid rgba(255,200,0,0.35)" }}>
            <Zap size={14} className="text-yellow-400" />
            <span className="text-sm font-black text-yellow-400">{streak}×</span>
          </motion.div>
        )}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5">
          <span className="text-xs font-black text-white/50">{round + 1}</span>
          <span className="text-xs text-white/20">/</span>
          <span className="text-xs font-bold text-white/30">{totalRounds}</span>
        </div>
      </div>

      {/* ── Progress ── */}
      <div className="relative h-2 w-full rounded-full overflow-hidden mx-2" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}cc)`, boxShadow: `0 0 12px ${color}60` }}
          animate={{ width: `${((round + (feedback ? 1 : 0)) / totalRounds) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* ── Instruction ── */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-xl"
        style={{ background: `${color}10`, border: `1px solid ${color}20` }}>
        <ArrowUpNarrowWide size={16} style={{ color }} />
        <p className="text-white/60 text-sm font-bold">{t.hint}</p>
      </div>

      {/* ── Tapped sequence (slots) ── */}
      <div className="flex gap-2 items-center justify-center flex-wrap">
        {Array.from({ length: roundData.numbers.length }, (_, i) => (
          <motion.div key={i}
            className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg relative"
            style={{
              background: tapped[i] !== undefined ? `${color}20` : "rgba(255,255,255,0.03)",
              border: `2px solid ${tapped[i] !== undefined ? `${color}60` : "rgba(255,255,255,0.08)"}`,
              color: tapped[i] !== undefined ? color : "rgba(255,255,255,0.15)",
              boxShadow: tapped[i] !== undefined ? `0 0 12px ${color}20` : "none",
            }}
            animate={tapped[i] !== undefined ? { scale: [1.1, 1] } : {}}
          >
            {tapped[i] !== undefined ? (
              <>
                {roundData.labels ? roundData.labels[tapped[i]] : roundData.numbers[tapped[i]]}
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[8px] font-black flex items-center justify-center"
                  style={{ background: color, color: "#fff" }}>{i + 1}</span>
              </>
            ) : (
              <span className="text-xs">{i + 1}</span>
            )}
          </motion.div>
        ))}
      </div>

      {/* ── Number buttons ── */}
      <AnimatePresence mode="wait">
        <motion.div key={round} className="flex gap-3 flex-wrap justify-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          {roundData.numbers.map((num, idx) => {
            const isTapped = tapped.includes(idx);
            const isCorrectFb = feedback === "correct";
            const isWrongFb = feedback === "wrong";

            let bg: string, border: string, textCol: string, shadow: string;
            if (isTapped && isCorrectFb) {
              bg = "rgba(0,255,136,0.15)"; border = "#00FF88"; textCol = "#00FF88";
              shadow = "0 0 20px rgba(0,255,136,0.25)";
            } else if (isTapped && isWrongFb) {
              bg = "rgba(255,60,60,0.12)"; border = "#FF4444"; textCol = "#FF6666";
              shadow = "0 0 16px rgba(255,60,60,0.2)";
            } else if (isTapped) {
              bg = `${color}15`; border = `${color}40`; textCol = `${color}80`;
              shadow = "none";
            } else {
              bg = "rgba(255,255,255,0.06)"; border = "rgba(255,255,255,0.15)"; textCol = "#fff";
              shadow = "0 2px 8px rgba(0,0,0,0.2)";
            }

            return (
              <motion.button key={idx} onClick={() => tap(idx)}
                disabled={isTapped || !!feedback}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.05 + idx * 0.06, type: "spring", stiffness: 300, damping: 22 }}
                className="w-16 h-16 rounded-2xl font-black text-2xl flex items-center justify-center relative"
                style={{ background: bg, border: `2.5px solid ${border}`, color: textCol, boxShadow: shadow, opacity: isTapped && !feedback ? 0.5 : 1 }}
                whileHover={!isTapped && !feedback ? { scale: 1.08, borderColor: `${color}70`, boxShadow: `0 0 16px ${color}25` } : {}}
                whileTap={!isTapped && !feedback ? { scale: 0.92 } : {}}>
                {roundData.labels ? roundData.labels[idx] : num}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* ── Feedback ── */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl"
            style={{
              background: feedback === "correct" ? "rgba(0,255,136,0.1)" : "rgba(255,60,60,0.1)",
              border: `1.5px solid ${feedback === "correct" ? "rgba(0,255,136,0.25)" : "rgba(255,60,60,0.25)"}`,
            }}>
            {feedback === "correct" ? (
              <CheckCircle size={20} className="text-green-400" />
            ) : (
              <XCircle size={20} className="text-red-400" />
            )}
            <span className="font-black text-sm" style={{ color: feedback === "correct" ? "#00FF88" : "#FF6666" }}>
              {feedback === "correct" ? t.correct : t.wrong}
            </span>
            {feedback === "wrong" && (
              <span className="text-xs text-white/40 font-medium">
                {(roundData.sortedLabels ?? roundData.sorted).join(" → ")}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(SortEngine);
