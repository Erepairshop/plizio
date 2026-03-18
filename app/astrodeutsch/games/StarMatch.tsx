"use client";
// StarMatch — AstroDeutsch Deutsch version
// Matching pairs game: left column shows questions/terms, right column shows answers/definitions.
// Player taps one on left, then taps matching one on right.
// 4 rounds × up to 5 pairs per round = up to 20 pairs total.

import { memo, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import type { MathQuestion } from "@/lib/mathCurriculum";

// ─── Labels ───────────────────────────────────────────────────────────────────
const LABELS = {
  de: {
    hint: "Aufgabe antippen, dann die passende Antwort",
    round: "Runde",
    allMatched: "Alle verbunden",
    correct: "Richtig!",
    done: "Fertig!",
  },
  en: {
    hint: "Tap a term, then the matching answer",
    round: "Round",
    allMatched: "All matched",
    correct: "Correct!",
    done: "Done!",
  },
  hu: {
    hint: "Koppints a kérdésre, majd a helyes válaszra",
    round: "Kör",
    allMatched: "Minden párosítva",
    correct: "Helyes!",
    done: "Kész!",
  },
  ro: {
    hint: "Atinge termenul, apoi răspunsul potrivit",
    round: "Rundă",
    allMatched: "Toate potrivite",
    correct: "Corect!",
    done: "Gata!",
  },
};

const SM_TOTAL_ROUNDS = 4;
const PAIRS_PER_ROUND = 5;

// ─── Types ────────────────────────────────────────────────────────────────────
interface MatchPair {
  left: string;   // question / term
  right: string;  // correct answer / definition
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildPairsFromQuestions(questions: MathQuestion[]): MatchPair[] {
  // Deduplicate by correctAnswer to avoid identical right-side cards
  const seen = new Set<string>();
  const unique: MathQuestion[] = [];
  for (const q of shuffle([...questions])) {
    const key = String(q.correctAnswer);
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(q);
    }
    if (unique.length === PAIRS_PER_ROUND) break;
  }
  return unique.map((q) => ({
    left: q.question,
    right: String(q.correctAnswer),
  }));
}

function buildRound(questions: MathQuestion[]): { pairs: MatchPair[]; answerOrder: number[] } {
  const pairs = buildPairsFromQuestions(questions);
  const answerOrder = shuffle(pairs.map((_, i) => i));
  return { pairs, answerOrder };
}

// ─── Component ────────────────────────────────────────────────────────────────
const StarMatch = memo(function StarMatch({
  questions,
  color,
  onDone,
  lang: langProp,
}: {
  questions: MathQuestion[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
  onCorrect?: () => void;
  onWrong?: () => void;
}) {
  const langKey = (langProp ?? "de") as keyof typeof LABELS;
  const t = LABELS[langKey] ?? LABELS.de;

  const [round, setRound] = useState(0);
  const [completedRounds, setCompletedRounds] = useState(0);
  const [{ pairs, answerOrder }, setRoundData] = useState(() => buildRound(questions));
  const [selectedQ, setSelectedQ] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [wrongQ, setWrongQ] = useState<number | null>(null);
  const [wrongA, setWrongA] = useState<number | null>(null);
  const [roundFlash, setRoundFlash] = useState(false);
  const lockRef = useRef(false);
  const totalScore = useRef(0);

  const startNextRound = useCallback(
    (nextRound: number) => {
      setRound(nextRound);
      setRoundData(buildRound(questions));
      setMatched(new Set());
      setSelectedQ(null);
      setRoundFlash(false);
    },
    [questions]
  );

  const tapQuestion = useCallback(
    (idx: number) => {
      if (lockRef.current || matched.has(idx)) return;
      setSelectedQ(idx === selectedQ ? null : idx);
    },
    [selectedQ, matched]
  );

  const tapAnswer = useCallback(
    (pairIdx: number) => {
      if (lockRef.current || matched.has(pairIdx)) return;

      // If nothing selected on left yet, treat as selecting left item by index
      if (selectedQ === null) {
        setSelectedQ(pairIdx);
        return;
      }

      if (selectedQ === pairIdx) {
        // Correct match
        totalScore.current += 1;
        const newMatched = new Set(matched);
        newMatched.add(pairIdx);
        setMatched(newMatched);
        setSelectedQ(null);

        if (newMatched.size === pairs.length) {
          const nextCompleted = completedRounds + 1;
          setCompletedRounds(nextCompleted);
          if (nextCompleted >= SM_TOTAL_ROUNDS) {
            lockRef.current = true;
            setRoundFlash(true);
            setTimeout(
              () => onDone(totalScore.current, SM_TOTAL_ROUNDS * PAIRS_PER_ROUND),
              1200
            );
          } else {
            lockRef.current = true;
            setRoundFlash(true);
            setTimeout(() => {
              lockRef.current = false;
              startNextRound(round + 1);
            }, 900);
          }
        }
      } else {
        // Wrong match — brief red flash
        lockRef.current = true;
        setWrongQ(selectedQ);
        setWrongA(pairIdx);
        setTimeout(() => {
          setSelectedQ(null);
          setWrongQ(null);
          setWrongA(null);
          lockRef.current = false;
        }, 700);
      }
    },
    [selectedQ, matched, pairs, completedRounds, round, startNextRound, onDone]
  );

  const totalPairs = SM_TOTAL_ROUNDS * PAIRS_PER_ROUND;

  return (
    <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
      {/* Round progress dots + hint */}
      <div className="flex flex-col items-center gap-1.5">
        <div className="flex gap-2">
          {Array.from({ length: SM_TOTAL_ROUNDS }).map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              animate={{
                scale:
                  i === completedRounds && !roundFlash ? [1, 1.3, 1] : 1,
              }}
              transition={{
                repeat: i === completedRounds ? Infinity : 0,
                duration: 1.4,
              }}
              style={{
                background:
                  i < completedRounds
                    ? "#00FF88"
                    : i === completedRounds
                    ? color
                    : "rgba(255,255,255,0.15)",
                boxShadow:
                  i === completedRounds && !roundFlash
                    ? `0 0 8px ${color}`
                    : "none",
              }}
            />
          ))}
        </div>
        <p className="text-white/40 text-xs">{t.hint}</p>
      </div>

      {/* Round complete flash */}
      {roundFlash && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center text-lg font-black"
          style={{ color: "#00FF88" }}
        >
          {completedRounds >= SM_TOTAL_ROUNDS
            ? `${t.allMatched} ⭐`
            : `${t.correct} ✓`}
        </motion.div>
      )}

      {/* Two columns: questions | answers */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Left column — questions / terms */}
        <div className="flex flex-col gap-2">
          {pairs.map((pair, i) => {
            const isMatched = matched.has(i);
            const isSelected = selectedQ === i;
            const isWrong = wrongQ === i;
            return (
              <motion.button
                key={`${round}-q${i}`}
                onClick={() => tapQuestion(i)}
                disabled={isMatched}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl px-3 py-3.5 text-sm font-bold text-center min-h-[58px] flex items-center justify-center leading-snug"
                style={{
                  background: isMatched
                    ? "rgba(0,255,136,0.18)"
                    : isWrong
                    ? "rgba(255,50,50,0.18)"
                    : isSelected
                    ? `${color}28`
                    : "rgba(255,255,255,0.05)",
                  border: `2px solid ${
                    isMatched
                      ? "#00FF88"
                      : isWrong
                      ? "#FF4444"
                      : isSelected
                      ? color
                      : "rgba(255,255,255,0.12)"
                  }`,
                  color: isMatched
                    ? "#00FF88"
                    : isWrong
                    ? "#FF6666"
                    : isSelected
                    ? "#fff"
                    : "rgba(255,255,255,0.82)",
                  boxShadow: isSelected ? `0 0 10px ${color}44` : "none",
                }}
                whileTap={!isMatched ? { scale: 0.94 } : {}}
              >
                {isMatched ? "✓" : pair.left}
              </motion.button>
            );
          })}
        </div>

        {/* Right column — answers / definitions (shuffled order) */}
        <div className="flex flex-col gap-2">
          {answerOrder.map((pairIdx, idx) => {
            const isMatched = matched.has(pairIdx);
            const isWrong = wrongA === pairIdx;
            const isHighlighted = selectedQ !== null && !isMatched;
            return (
              <motion.button
                key={`${round}-a${pairIdx}`}
                onClick={() => tapAnswer(pairIdx)}
                disabled={isMatched}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-2xl px-3 py-3.5 text-sm font-black text-center min-h-[58px] flex items-center justify-center leading-snug"
                style={{
                  background: isMatched
                    ? "rgba(0,255,136,0.18)"
                    : isWrong
                    ? "rgba(255,50,50,0.18)"
                    : isHighlighted
                    ? "rgba(255,255,255,0.09)"
                    : "rgba(255,255,255,0.05)",
                  border: `2px solid ${
                    isMatched
                      ? "#00FF88"
                      : isWrong
                      ? "#FF4444"
                      : isHighlighted
                      ? "rgba(255,255,255,0.28)"
                      : "rgba(255,255,255,0.12)"
                  }`,
                  color: isMatched
                    ? "#00FF88"
                    : isWrong
                    ? "#FF6666"
                    : "#fff",
                }}
                whileTap={!isMatched ? { scale: 0.94 } : {}}
              >
                {isMatched ? "✓" : pairs[pairIdx].right}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Score tracker */}
      <p className="text-center text-white/30 text-xs mt-1">
        {totalScore.current} / {totalPairs}
      </p>
    </div>
  );
});

export default StarMatch;
