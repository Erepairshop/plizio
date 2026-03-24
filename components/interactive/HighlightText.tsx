"use client";
import React, { useState, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ──────────────────────────────────────────────────── */

interface Props {
  tokens: string[]; // sentence split into tokens (words/punctuation), already resolved
  correctIndices: number[]; // indices of tokens that should be highlighted
  color: string;
  instruction: string; // already resolved label text (e.g. "Find the verb!")
  hint1: string;
  hint2: string;
  lang: string;
  onDone: (correct: boolean) => void;
}

type CheckResult = "correct" | "wrong" | null;

/* ── Helpers ─────────────────────────────────────────────────── */

function isPunctuation(token: string): boolean {
  return /^[.,;:!?()"\-–]$/.test(token);
}

/* ── Labels ─────────────────────────────────────────────────── */

const L: Record<string, Record<string, string>> = {
  en: {
    check: "Check!",
    great: "Correct!",
    tryAgain: "Not quite!",
    tapWords: "Tap the correct word(s)",
  },
  de: {
    check: "Prüfen!",
    great: "Richtig!",
    tryAgain: "Nicht ganz!",
    tapWords: "Tippe die richtigen Wörter an",
  },
  hu: {
    check: "Ellenőrzés!",
    great: "Helyes!",
    tryAgain: "Nem egészen!",
    tapWords: "Koppints a helyes szó(k)ra",
  },
  ro: {
    check: "Verifică!",
    great: "Corect!",
    tryAgain: "Nu chiar!",
    tapWords: "Atinge cuvântul/cuvintele corecte",
  },
};

/* ── Component ──────────────────────────────────────────────── */

function HighlightText({
  tokens,
  correctIndices,
  color,
  instruction,
  hint1,
  hint2,
  lang,
  onDone,
}: Props) {
  const t = L[lang] || L.en;

  /* ── state ──────────────────────────────────────────────── */
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [checkResult, setCheckResult] = useState<CheckResult>(null);
  const [wrongCount, setWrongCount] = useState(0);
  const [showHint, setShowHint] = useState("");
  const [solved, setSolved] = useState(false);
  const doneCalledRef = useRef(false);

  /* ── tap a word token ────────────────────────────────────── */
  const handleTokenTap = useCallback(
    (index: number) => {
      if (solved) return;
      if (isPunctuation(tokens[index])) return;
      setSelected((prev) => {
        const next = new Set(prev);
        if (next.has(index)) {
          next.delete(index);
        } else {
          next.add(index);
        }
        return next;
      });
    },
    [solved, tokens]
  );

  /* ── check answer ────────────────────────────────────────── */
  const handleCheck = useCallback(() => {
    if (solved) return;

    const correctSet = new Set(correctIndices);
    // selection must exactly match correctIndices (same set)
    const isCorrect =
      selected.size === correctSet.size &&
      [...selected].every((i) => correctSet.has(i));

    if (isCorrect) {
      setCheckResult("correct");
      setSolved(true);
      if (!doneCalledRef.current) {
        doneCalledRef.current = true;
        const succeeded = wrongCount === 0;
        setTimeout(() => onDone(succeeded), 1200);
      }
    } else {
      const newWrong = wrongCount + 1;
      setWrongCount(newWrong);
      setCheckResult("wrong");
      setTimeout(() => setCheckResult(null), 800);

      if (newWrong === 1) setShowHint(hint1);
      else if (newWrong === 2) {
        setShowHint(hint2);
      } else {
        // 3rd wrong → reveal correct and finish
        setSolved(true);
        setCheckResult("correct");
        setSelected(new Set(correctIndices));
        if (!doneCalledRef.current) {
          doneCalledRef.current = true;
          setTimeout(() => onDone(false), 1500);
        }
      }
    }
  }, [solved, correctIndices, selected, wrongCount, hint1, hint2, onDone]);

  /* ── token color logic post-check ───────────────────────── */
  const getTokenStyle = (index: number) => {
    if (isPunctuation(tokens[index])) return null;

    const isSelected = selected.has(index);
    const isCorrectToken = correctIndices.includes(index);

    if (solved) {
      if (isCorrectToken) {
        // correctly identified (or revealed)
        return {
          background: "rgba(34,197,94,0.18)",
          border: "2px solid rgba(134,239,172,0.55)",
          color: "#86efac",
        };
      }
      if (isSelected && !isCorrectToken) {
        // wrong selection
        return {
          background: "rgba(239,68,68,0.15)",
          border: "2px solid rgba(252,165,165,0.5)",
          color: "#fca5a5",
        };
      }
    }

    if (isSelected) {
      return {
        background: `${color}25`,
        border: `2px solid ${color}`,
        color: "#fff",
      };
    }

    return {
      background: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(255,255,255,0.12)",
      color: "rgba(255,255,255,0.80)",
    };
  };

  /* ── render ─────────────────────────────────────────────── */
  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto select-none">
      {/* instruction */}
      <p className="text-sm font-bold text-center text-white/80 px-4">{instruction}</p>

      {/* tap hint */}
      {!solved && (
        <p className="text-xs text-white/40 text-center">{t.tapWords}</p>
      )}

      {/* token display */}
      <div className="w-full flex flex-wrap gap-x-1.5 gap-y-2 justify-start px-1">
        {tokens.map((token, index) => {
          if (isPunctuation(token)) {
            return (
              <span
                key={index}
                className="text-sm text-white/50 -ml-1 self-center"
                style={{ pointerEvents: "none" }}
              >
                {token}
              </span>
            );
          }

          const style = getTokenStyle(index);
          const isSelected = selected.has(index);

          return (
            <motion.button
              key={index}
              whileTap={!solved ? { scale: 0.93 } : {}}
              animate={
                solved && correctIndices.includes(index)
                  ? { scale: [1, 1.08, 1] }
                  : { scale: 1 }
              }
              transition={
                solved && correctIndices.includes(index)
                  ? { duration: 0.4, delay: index * 0.04 }
                  : { duration: 0.15 }
              }
              onClick={() => handleTokenTap(index)}
              disabled={solved}
              className="px-2 py-1 rounded-lg text-sm font-medium transition-colors"
              style={style ?? undefined}
            >
              {token}
            </motion.button>
          );
        })}
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

      {/* result flash */}
      <AnimatePresence>
        {checkResult && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className={`text-xl font-black ${
              checkResult === "correct" ? "text-green-400" : "text-red-400"
            }`}
          >
            {checkResult === "correct" ? `✓ ${t.great}` : `✗ ${t.tryAgain}`}
          </motion.div>
        )}
      </AnimatePresence>

      {/* check button */}
      {!solved && (
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleCheck}
          disabled={selected.size === 0}
          className="w-full py-3 rounded-xl text-white font-extrabold text-base shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: color,
            boxShadow: `0 4px 20px ${color}40`,
          }}
        >
          {t.check}
        </motion.button>
      )}
    </div>
  );
}

export default memo(HighlightText);
