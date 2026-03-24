"use client";
import React, { useState, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Props ───────────────────────────────────────────────── */

interface Props {
  words: string[];        // shuffled words to arrange (already resolved text)
  correctOrder: number[]; // correct index order, e.g. [2,0,3,1] means words[2] first…
  color: string;
  instruction: string;    // already resolved label text
  hint1: string;
  hint2: string;
  lang: string;
  onDone: (correct: boolean) => void;
}

/* ── Labels ─────────────────────────────────────────────── */

const L: Record<string, Record<string, string>> = {
  en: {
    check: "Check!",
    great: "Great!",
    tryAgain: "Try again",
    tapToPlace: "Tap words to place them",
    correctOrder: "Correct order:",
  },
  de: {
    check: "Prüfen!",
    great: "Super!",
    tryAgain: "Nochmal!",
    tapToPlace: "Tippe auf Wörter zum Platzieren",
    correctOrder: "Richtige Reihenfolge:",
  },
  hu: {
    check: "Ellenőrzés!",
    great: "Szuper!",
    tryAgain: "Próbáld újra!",
    tapToPlace: "Koppints a szavakra",
    correctOrder: "Helyes sorrend:",
  },
  ro: {
    check: "Verifică!",
    great: "Excelent!",
    tryAgain: "Încearcă din nou!",
    tapToPlace: "Atinge cuvintele",
    correctOrder: "Ordinea corectă:",
  },
};

/* ── Component ──────────────────────────────────────────── */

function WordOrder({
  words,
  correctOrder,
  color,
  instruction,
  hint1,
  hint2,
  lang,
  onDone,
}: Props) {
  const t = L[lang] || L.en;

  // placed: ordered list of word indices placed into slots; null = empty slot
  const [placed, setPlaced] = useState<(number | null)[]>(
    () => new Array(words.length).fill(null)
  );
  const [wrongCount, setWrongCount] = useState(0);
  const [showHint, setShowHint] = useState("");
  const [solved, setSolved] = useState(false);
  const [showResult, setShowResult] = useState<"correct" | "wrong" | null>(null);
  const [shakeSlot, setShakeSlot] = useState<number | null>(null);
  const doneCalledRef = useRef(false);

  /* ── derived ─────────────────────────────────────────── */

  // indices of words still in the pool (not placed)
  const poolIndices = words
    .map((_, i) => i)
    .filter((i) => !placed.includes(i));

  const allFilled = placed.every((p) => p !== null);

  /* ── tap a pool word → place into next empty slot ────── */
  const handlePoolTap = useCallback(
    (wordIdx: number) => {
      if (solved) return;
      setPlaced((prev) => {
        const next = [...prev];
        const emptySlot = next.findIndex((p) => p === null);
        if (emptySlot === -1) return prev;
        next[emptySlot] = wordIdx;
        return next;
      });
    },
    [solved]
  );

  /* ── tap a placed slot → return word to pool ─────────── */
  const handleSlotTap = useCallback(
    (slotIdx: number) => {
      if (solved) return;
      setPlaced((prev) => {
        const next = [...prev];
        next[slotIdx] = null;
        return next;
      });
    },
    [solved]
  );

  /* ── check ───────────────────────────────────────────── */
  const handleCheck = useCallback(() => {
    if (solved || !allFilled) return;

    const isCorrect = placed.every(
      (wordIdx, slotIdx) => wordIdx === correctOrder[slotIdx]
    );

    if (isCorrect) {
      setSolved(true);
      setShowHint("");
      setShowResult("correct");
      if (!doneCalledRef.current) {
        doneCalledRef.current = true;
        setTimeout(() => onDone(true), 1200);
      }
    } else {
      const newWrong = wrongCount + 1;
      setWrongCount(newWrong);
      setShowResult("wrong");
      // shake all filled slots briefly
      setShakeSlot(-1); // -1 = shake all
      setTimeout(() => {
        setShowResult(null);
        setShakeSlot(null);
      }, 700);

      if (newWrong === 1) setShowHint(hint1);
      else if (newWrong === 2) setShowHint(hint2);
      else {
        // 3rd wrong → auto-solve with correct answer
        setSolved(true);
        setPlaced(correctOrder.map((i) => i));
        setShowResult("correct");
        if (!doneCalledRef.current) {
          doneCalledRef.current = true;
          setTimeout(() => onDone(false), 1800);
        }
      }
    }
  }, [solved, allFilled, placed, correctOrder, wrongCount, hint1, hint2, onDone]);

  /* ── render ──────────────────────────────────────────── */
  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto select-none">
      {/* instruction */}
      <p className="text-sm font-bold text-center text-white/80 px-4">
        {instruction}
      </p>

      {/* tap hint */}
      {!solved && (
        <p className="text-xs text-white/40 text-center">{t.tapToPlace}</p>
      )}

      {/* word pool */}
      <div
        className="w-full rounded-2xl p-3 min-h-[60px] flex flex-wrap gap-2 justify-center items-center"
        style={{ background: `${color}12`, border: `1px solid ${color}25` }}
      >
        <AnimatePresence>
          {poolIndices.map((wordIdx) => (
            <motion.button
              key={wordIdx}
              layout
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 420, damping: 26 }}
              whileTap={!solved ? { scale: 0.88 } : {}}
              onClick={() => handlePoolTap(wordIdx)}
              className="px-3 py-1.5 rounded-full text-sm font-bold cursor-pointer"
              style={{
                background: `${color}22`,
                border: `1.5px solid ${color}55`,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {words[wordIdx]}
            </motion.button>
          ))}
        </AnimatePresence>
        {poolIndices.length === 0 && !solved && (
          <span className="text-white/25 text-xs">—</span>
        )}
      </div>

      {/* arrow */}
      <span className="text-white/30 text-base">↓</span>

      {/* slots row */}
      <div className="w-full flex flex-wrap gap-2 justify-center">
        {placed.map((wordIdx, slotIdx) => {
          const isEmpty = wordIdx === null;
          const isShaking = shakeSlot === -1 && !isEmpty;
          return (
            <motion.div
              key={slotIdx}
              animate={
                isShaking
                  ? { x: [0, -5, 5, -4, 4, 0] }
                  : { x: 0 }
              }
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <motion.button
                layout
                whileTap={!solved && !isEmpty ? { scale: 0.88 } : {}}
                onClick={() => !isEmpty && handleSlotTap(slotIdx)}
                className="px-3 py-1.5 rounded-full text-sm font-bold min-w-[48px] text-center"
                style={
                  isEmpty
                    ? {
                        background: "transparent",
                        border: `1.5px dashed ${color}40`,
                        color: "transparent",
                        cursor: "default",
                        minWidth: 48,
                      }
                    : solved && showResult === "correct"
                    ? {
                        background: "rgba(0,220,100,0.18)",
                        border: "1.5px solid rgba(0,220,100,0.55)",
                        color: "rgba(255,255,255,0.95)",
                        cursor: "default",
                      }
                    : {
                        background: `${color}22`,
                        border: `1.5px solid ${color}55`,
                        color: "rgba(255,255,255,0.9)",
                        cursor: "pointer",
                      }
                }
              >
                {isEmpty ? "_" : words[wordIdx as number]}
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* correct order reveal (after auto-solve) */}
      <AnimatePresence>
        {solved && wrongCount >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full rounded-xl p-3 text-xs text-center"
            style={{ background: `${color}15`, border: `1px solid ${color}30`, color: `${color}` }}
          >
            {t.correctOrder}{" "}
            <span className="font-bold">
              {correctOrder.map((i) => words[i]).join(" ")}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

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
        {showResult && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className={`text-2xl font-black ${
              showResult === "correct" ? "text-green-400" : "text-red-400"
            }`}
          >
            {showResult === "correct" ? `✓ ${t.great}` : `✗ ${t.tryAgain}`}
          </motion.div>
        )}
      </AnimatePresence>

      {/* check button */}
      {!solved && (
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleCheck}
          disabled={!allFilled}
          className="w-full py-3 rounded-xl text-white font-extrabold text-base shadow-lg disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
          style={
            allFilled
              ? { background: color, boxShadow: `0 4px 20px ${color}40` }
              : { background: color }
          }
        >
          {t.check}
        </motion.button>
      )}
    </div>
  );
}

export default memo(WordOrder);
