"use client";
import React, { useState, useRef, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ──────────────────────────────────────────────────── */

interface Props {
  pairs: { left: string; right: string }[]; // pairs to match, text already resolved
  color: string;
  instruction: string; // already resolved label text
  hint1: string;
  hint2: string;
  lang: string;
  onDone: (correct: boolean) => void;
}

type MatchState = "idle" | "correct" | "wrong";

interface PairState {
  matchState: MatchState;
  wrongAttempts: number;
}

/* ── Labels ─────────────────────────────────────────────────── */

const L: Record<string, Record<string, string>> = {
  en: {
    tapToMatch: "Tap a pair to match",
    great: "All matched!",
    wrongMatch: "Not a match!",
    hint: "Hint",
  },
  de: {
    tapToMatch: "Tippe ein Paar zum Zuordnen",
    great: "Alles zugeordnet!",
    wrongMatch: "Passt nicht!",
    hint: "Hinweis",
  },
  hu: {
    tapToMatch: "Koppints egy párra",
    great: "Mind párosítva!",
    wrongMatch: "Nem passzol!",
    hint: "Tipp",
  },
  ro: {
    tapToMatch: "Atinge o pereche",
    great: "Toate potrivite!",
    wrongMatch: "Nu se potrivește!",
    hint: "Indiciu",
  },
};

/* ── Component ──────────────────────────────────────────────── */

function MatchPairs({ pairs, color, instruction, hint1, hint2, lang, onDone }: Props) {
  const t = L[lang] || L.en;

  /* ── shuffled right column (stable across renders) ──────── */
  const shuffledRight = useMemo(() => {
    const indices = pairs.map((_, i) => i);
    // Fisher-Yates shuffle (seeded by pairs content for stability)
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices; // shuffledRight[displayRow] = pairIndex
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── state ──────────────────────────────────────────────── */
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null); // pairIndex
  const [pairStates, setPairStates] = useState<PairState[]>(() =>
    pairs.map(() => ({ matchState: "idle" as MatchState, wrongAttempts: 0 }))
  );
  const [totalErrors, setTotalErrors] = useState(0);
  const [flashWrong, setFlashWrong] = useState<{ leftIdx: number; rightDisplayIdx: number } | null>(null);
  const [showHint, setShowHint] = useState("");
  const [solved, setSolved] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const doneCalledRef = useRef(false);

  /* ── derived ─────────────────────────────────────────────── */
  const matchedCount = pairStates.filter((ps) => ps.matchState === "correct").length;

  /* ── tap left item ───────────────────────────────────────── */
  const handleLeftTap = useCallback(
    (pairIndex: number) => {
      if (solved) return;
      if (pairStates[pairIndex].matchState === "correct") return;
      setSelectedLeft((prev) => (prev === pairIndex ? null : pairIndex));
    },
    [solved, pairStates]
  );

  /* ── tap right item ──────────────────────────────────────── */
  const handleRightTap = useCallback(
    (displayRowIndex: number) => {
      if (solved) return;
      if (selectedLeft === null) return;

      const rightPairIndex = shuffledRight[displayRowIndex];

      // already matched on the right side
      if (pairStates[rightPairIndex].matchState === "correct") return;

      const isCorrect = rightPairIndex === selectedLeft;

      if (isCorrect) {
        setPairStates((prev) =>
          prev.map((ps, i) =>
            i === selectedLeft ? { ...ps, matchState: "correct" } : ps
          )
        );
        setSelectedLeft(null);

        // check all matched
        const newMatchedCount = matchedCount + 1;
        if (newMatchedCount === pairs.length) {
          setSolved(true);
          setShowSuccess(true);
          if (!doneCalledRef.current) {
            doneCalledRef.current = true;
            const succeeded = totalErrors <= 2;
            setTimeout(() => onDone(succeeded), 1200);
          }
        }
      } else {
        // wrong match
        const newTotal = totalErrors + 1;
        setTotalErrors(newTotal);
        setPairStates((prev) =>
          prev.map((ps, i) =>
            i === selectedLeft ? { ...ps, wrongAttempts: ps.wrongAttempts + 1 } : ps
          )
        );
        setFlashWrong({ leftIdx: selectedLeft, rightDisplayIdx: displayRowIndex });
        setTimeout(() => {
          setFlashWrong(null);
          setSelectedLeft(null);
        }, 400);

        if (newTotal === 2) setShowHint(hint1);
        else if (newTotal === 4) setShowHint(hint2);
      }
    },
    [
      solved,
      selectedLeft,
      shuffledRight,
      pairStates,
      matchedCount,
      pairs.length,
      totalErrors,
      hint1,
      hint2,
      onDone,
    ]
  );

  /* ── render ─────────────────────────────────────────────── */
  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto select-none">
      {/* instruction */}
      <p className="text-sm font-bold text-center text-white/80 px-4">{instruction}</p>

      {/* tap hint */}
      {!solved && (
        <p className="text-xs text-white/40 text-center">{t.tapToMatch}</p>
      )}

      {/* columns */}
      <div className="w-full flex gap-3">
        {/* left column */}
        <div className="flex-1 flex flex-col gap-2">
          {pairs.map((pair, pairIndex) => {
            const ps = pairStates[pairIndex];
            const isSelected = selectedLeft === pairIndex;
            const isCorrect = ps.matchState === "correct";
            const isFlashingWrong = flashWrong?.leftIdx === pairIndex;

            return (
              <motion.button
                key={pairIndex}
                layout
                whileTap={!isCorrect && !solved ? { scale: 0.97 } : {}}
                animate={
                  isFlashingWrong
                    ? { x: [-4, 4, -4, 4, 0] }
                    : isSelected
                    ? { scale: 1.05 }
                    : { scale: 1, x: 0 }
                }
                transition={{ duration: 0.3 }}
                onClick={() => handleLeftTap(pairIndex)}
                disabled={isCorrect || solved}
                className="w-full px-3 py-2.5 rounded-xl text-sm font-semibold text-left transition-colors"
                style={{
                  background: isCorrect
                    ? "rgba(34,197,94,0.12)"
                    : isFlashingWrong
                    ? "rgba(239,68,68,0.15)"
                    : isSelected
                    ? `${color}22`
                    : "rgba(255,255,255,0.07)",
                  border: isCorrect
                    ? "2px solid rgba(134,239,172,0.5)"
                    : isFlashingWrong
                    ? "2px solid rgba(252,165,165,0.6)"
                    : isSelected
                    ? `2px solid ${color}`
                    : `2px solid ${color}30`,
                  color: isCorrect
                    ? "#86efac"
                    : isFlashingWrong
                    ? "#fca5a5"
                    : isSelected
                    ? "#fff"
                    : "rgba(255,255,255,0.75)",
                  opacity: isCorrect ? 0.7 : 1,
                }}
              >
                <span className="flex items-center gap-1.5">
                  {isCorrect && <span className="text-green-400 text-xs">✓</span>}
                  {pair.left}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* right column */}
        <div className="flex-1 flex flex-col gap-2">
          {shuffledRight.map((pairIndex, displayRowIndex) => {
            const ps = pairStates[pairIndex];
            const isCorrect = ps.matchState === "correct";
            const isFlashingWrong = flashWrong?.rightDisplayIdx === displayRowIndex;
            // highlight right item if its corresponding left is selected
            const isPartnerSelected = selectedLeft !== null && !isCorrect;

            return (
              <motion.button
                key={displayRowIndex}
                layout
                whileTap={!isCorrect && !solved ? { scale: 0.97 } : {}}
                animate={
                  isFlashingWrong
                    ? { x: [-4, 4, -4, 4, 0] }
                    : { scale: 1, x: 0 }
                }
                transition={{ duration: 0.3 }}
                onClick={() => handleRightTap(displayRowIndex)}
                disabled={isCorrect || solved}
                className="w-full px-3 py-2.5 rounded-xl text-sm font-semibold text-right transition-colors"
                style={{
                  background: isCorrect
                    ? "rgba(34,197,94,0.12)"
                    : isFlashingWrong
                    ? "rgba(239,68,68,0.15)"
                    : isPartnerSelected
                    ? `${color}10`
                    : "rgba(255,255,255,0.07)",
                  border: isCorrect
                    ? "2px solid rgba(134,239,172,0.5)"
                    : isFlashingWrong
                    ? "2px solid rgba(252,165,165,0.6)"
                    : isPartnerSelected
                    ? `2px solid ${color}50`
                    : `2px solid ${color}18`,
                  color: isCorrect
                    ? "#86efac"
                    : isFlashingWrong
                    ? "#fca5a5"
                    : "rgba(255,255,255,0.75)",
                  opacity: isCorrect ? 0.7 : 1,
                }}
              >
                <span className="flex items-center justify-end gap-1.5">
                  {pairs[pairIndex].right}
                  {isCorrect && <span className="text-green-400 text-xs">✓</span>}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* hint bubble */}
      <AnimatePresence>
        {showHint && !solved && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full rounded-xl p-3 text-sm text-center"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}30`,
              color: `${color}`,
            }}
          >
            💡 {showHint}
          </motion.div>
        )}
      </AnimatePresence>

      {/* success banner */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="text-xl font-black text-green-400 text-center"
          >
            ✓ {t.great}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(MatchPairs);
