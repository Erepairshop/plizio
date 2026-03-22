"use client";
// ─────────────────────────────────────────────────────────────────────────────
// MatchEngine — Modern pair-matching game UI
// Left column: questions, Right column: shuffled answers
// Tap question → tap matching answer. 3 rounds, 5 pairs each.
// ─────────────────────────────────────────────────────────────────────────────

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Trophy, Zap, CheckCircle } from "lucide-react";

export interface MatchPair { left: string; right: string }

interface Props {
  pairs: MatchPair[];
  color: string;
  onDone: (score: number, total: number) => void;
  /** Regenerate pairs for next round */
  regenerate?: () => MatchPair[];
  rounds?: number;
  lang?: string;
}

const LABELS: Record<string, Record<string, string>> = {
  en: { hint: "Tap a question, then the matching answer", round: "Round", allMatched: "All matched!", perfect: "Perfect round!" },
  de: { hint: "Aufgabe antippen, dann die passende Antwort", round: "Runde", allMatched: "Alle gefunden!", perfect: "Perfekte Runde!" },
  hu: { hint: "Koppints a kérdésre, majd a válaszra", round: "Kör", allMatched: "Mind megvan!", perfect: "Tökéletes kör!" },
  ro: { hint: "Atinge întrebarea, apoi răspunsul", round: "Rundă", allMatched: "Toate găsite!", perfect: "Rundă perfectă!" },
};

function shuffle<T>(arr: T[]): T[] {
  const r = [...arr];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

function MatchEngine({ pairs: initialPairs, color, onDone, regenerate, rounds: totalRounds = 3, lang = "de" }: Props) {
  const t = LABELS[lang] || LABELS.en;
  const [round, setRound] = useState(0);
  const [pairs, setPairs] = useState(() => initialPairs.slice(0, 5));
  const [answerOrder, setAnswerOrder] = useState(() => shuffle(pairs.map((_, i) => i)));
  const [selectedQ, setSelectedQ] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [wrongQ, setWrongQ] = useState<number | null>(null);
  const [wrongA, setWrongA] = useState<number | null>(null);
  const [roundFlash, setRoundFlash] = useState(false);
  const lockRef = useRef(false);
  const scoreRef = useRef(0);

  const startNextRound = useCallback((nextRound: number) => {
    const newPairs = regenerate ? regenerate().slice(0, 5) : shuffle(initialPairs).slice(0, 5);
    setPairs(newPairs);
    setAnswerOrder(shuffle(newPairs.map((_, i) => i)));
    setRound(nextRound);
    setMatched(new Set());
    setSelectedQ(null);
    setRoundFlash(false);
  }, [initialPairs, regenerate]);

  const tapQuestion = useCallback((idx: number) => {
    if (lockRef.current || matched.has(idx)) return;
    setSelectedQ(idx === selectedQ ? null : idx);
  }, [selectedQ, matched]);

  const tapAnswer = useCallback((pairIdx: number) => {
    if (lockRef.current || matched.has(pairIdx)) return;
    if (selectedQ === null) return;

    if (selectedQ === pairIdx) {
      // Correct match!
      scoreRef.current += 1;
      const newMatched = new Set(matched);
      newMatched.add(pairIdx);
      setMatched(newMatched);
      setSelectedQ(null);

      if (newMatched.size === pairs.length) {
        lockRef.current = true;
        setRoundFlash(true);
        const nextRound = round + 1;
        if (nextRound >= totalRounds) {
          setTimeout(() => onDone(scoreRef.current, totalRounds * pairs.length), 1200);
        } else {
          setTimeout(() => { lockRef.current = false; startNextRound(nextRound); }, 900);
        }
      }
    } else {
      // Wrong match
      lockRef.current = true;
      setWrongQ(selectedQ);
      setWrongA(pairIdx);
      setTimeout(() => {
        setSelectedQ(null); setWrongQ(null); setWrongA(null);
        lockRef.current = false;
      }, 600);
    }
  }, [selectedQ, matched, pairs, round, totalRounds, startNextRound, onDone]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      {/* ── HUD ── */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
          <Trophy size={14} style={{ color }} />
          <span className="text-sm font-black" style={{ color }}>{scoreRef.current}</span>
        </div>
        <div className="flex items-center gap-2">
          <Link2 size={14} className="text-white/40" />
          <span className="text-xs font-black text-white/50">{t.round} {round + 1}/{totalRounds}</span>
        </div>
      </div>

      {/* ── Round progress ── */}
      <div className="flex gap-2 justify-center">
        {Array.from({ length: totalRounds }).map((_, i) => (
          <motion.div key={i}
            className="w-3.5 h-3.5 rounded-full"
            animate={{ scale: i === round && !roundFlash ? [1, 1.2, 1] : 1 }}
            transition={{ repeat: i === round ? Infinity : 0, duration: 1.5 }}
            style={{
              background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.1)",
              boxShadow: i < round ? "0 0 8px rgba(0,255,136,0.4)" : i === round ? `0 0 10px ${color}60` : "none",
            }} />
        ))}
      </div>

      {/* ── Hint ── */}
      <p className="text-white/35 text-xs text-center font-medium">{t.hint}</p>

      {/* ── Round flash ── */}
      <AnimatePresence>
        {roundFlash && (
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="text-center font-black text-lg flex items-center justify-center gap-2" style={{ color: "#00FF88" }}>
            <CheckCircle size={20} /> {round + 1 >= totalRounds ? t.allMatched : t.perfect}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Match grid ── */}
      <div className="grid grid-cols-2 gap-3 mx-1">
        {/* Left: Questions */}
        <div className="flex flex-col gap-2.5">
          {pairs.map((pair, i) => {
            const isMatched = matched.has(i);
            const isSelected = selectedQ === i;
            const isWrong = wrongQ === i;

            let bg: string, border: string, textCol: string, shadow: string;
            if (isMatched) {
              bg = "rgba(0,255,136,0.12)"; border = "#00FF88"; textCol = "#00FF88";
              shadow = "0 0 16px rgba(0,255,136,0.2)";
            } else if (isWrong) {
              bg = "rgba(255,60,60,0.12)"; border = "#FF4444"; textCol = "#FF6666";
              shadow = "0 0 12px rgba(255,60,60,0.2)";
            } else if (isSelected) {
              bg = `${color}20`; border = color; textCol = "#fff";
              shadow = `0 0 16px ${color}30`;
            } else {
              bg = "rgba(255,255,255,0.05)"; border = "rgba(255,255,255,0.12)"; textCol = "rgba(255,255,255,0.85)";
              shadow = "0 2px 8px rgba(0,0,0,0.2)";
            }

            return (
              <motion.button key={`q-${round}-${i}`} onClick={() => tapQuestion(i)}
                disabled={isMatched}
                initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 300, damping: 25 }}
                className="rounded-2xl px-3 py-4 text-sm font-bold text-center min-h-[60px] flex items-center justify-center leading-snug relative overflow-hidden"
                style={{ background: bg, border: `2px solid ${border}`, color: textCol, boxShadow: shadow }}
                whileTap={!isMatched ? { scale: 0.95 } : {}}>
                {isMatched ? (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <CheckCircle size={20} className="text-green-400" />
                  </motion.div>
                ) : pair.left}
              </motion.button>
            );
          })}
        </div>

        {/* Right: Answers (shuffled) */}
        <div className="flex flex-col gap-2.5">
          {answerOrder.map((pairIdx, idx) => {
            const isMatched = matched.has(pairIdx);
            const isWrong = wrongA === pairIdx;
            const isHighlighted = selectedQ !== null && !isMatched;

            let bg: string, border: string, textCol: string, shadow: string;
            if (isMatched) {
              bg = "rgba(0,255,136,0.12)"; border = "#00FF88"; textCol = "#00FF88";
              shadow = "0 0 16px rgba(0,255,136,0.2)";
            } else if (isWrong) {
              bg = "rgba(255,60,60,0.12)"; border = "#FF4444"; textCol = "#FF6666";
              shadow = "0 0 12px rgba(255,60,60,0.2)";
            } else if (isHighlighted) {
              bg = "rgba(255,255,255,0.08)"; border = `${color}50`; textCol = "#fff";
              shadow = `0 0 8px ${color}15`;
            } else {
              bg = "rgba(255,255,255,0.04)"; border = "rgba(255,255,255,0.10)"; textCol = "rgba(255,255,255,0.75)";
              shadow = "0 2px 8px rgba(0,0,0,0.15)";
            }

            return (
              <motion.button key={`a-${round}-${pairIdx}`} onClick={() => tapAnswer(pairIdx)}
                disabled={isMatched}
                initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.06, type: "spring", stiffness: 300, damping: 25 }}
                className="rounded-2xl px-3 py-4 text-lg font-black text-center min-h-[60px] flex items-center justify-center relative overflow-hidden"
                style={{ background: bg, border: `2px solid ${border}`, color: textCol, boxShadow: shadow }}
                whileTap={!isMatched ? { scale: 0.95 } : {}}>
                {isMatched ? (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <CheckCircle size={20} className="text-green-400" />
                  </motion.div>
                ) : pairs[pairIdx].right}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(MatchEngine);
