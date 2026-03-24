"use client";
import React, { useState, useRef, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ──────────────────────────────────────────────────── */

interface Props {
  fragments: string[];   // fragments in CORRECT order (already resolved text)
  color: string;
  instruction: string;   // already resolved label text
  hint1: string;
  hint2: string;
  lang: string;
  onDone: (correct: boolean) => void;
}

/* ── Internal labels ────────────────────────────────────────── */

const L: Record<string, Record<string, string>> = {
  en: {
    check: "Check!",
    great: "Perfect sentence!",
    tryAgain: "Not quite right!",
    tapToBuild: "Tap fragments to build the sentence",
    builtSentence: "Your sentence:",
  },
  de: {
    check: "Prüfen!",
    great: "Perfekter Satz!",
    tryAgain: "Nicht ganz richtig!",
    tapToBuild: "Tippe Teile an, um den Satz zu bauen",
    builtSentence: "Dein Satz:",
  },
  hu: {
    check: "Ellenőrzés!",
    great: "Tökéletes mondat!",
    tryAgain: "Nem teljesen jó!",
    tapToBuild: "Koppints a részekre a mondat építéséhez",
    builtSentence: "A mondatod:",
  },
  ro: {
    check: "Verifică!",
    great: "Propoziție perfectă!",
    tryAgain: "Nu e chiar corect!",
    tapToBuild: "Atinge fragmentele pentru a construi propoziția",
    builtSentence: "Propoziția ta:",
  },
};

/* ── Deterministic shuffle (stable across renders) ──────────── */

function shuffleWithSeed(arr: string[]): string[] {
  // Simple deterministic shuffle based on the content strings
  const seed = arr.reduce((acc, s) => acc + s.charCodeAt(0) + s.length, 0);
  const copy = arr.map((text, originalIndex) => ({ text, originalIndex }));
  // Fisher-Yates with a deterministic LCG
  let rng = seed;
  const next = () => {
    rng = (rng * 1664525 + 1013904223) & 0xffffffff;
    return (rng >>> 0) / 0xffffffff;
  };
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.map((c) => c.text);
}

/* ── Component ──────────────────────────────────────────────── */

function SentenceBuild({
  fragments,
  color,
  instruction,
  hint1,
  hint2,
  lang,
  onDone,
}: Props) {
  const t = L[lang] || L.en;

  /* ── Shuffle fragments once (deterministic) ─────────────── */
  const shuffled = useMemo(() => {
    // Guard: if only 1 fragment, no point shuffling
    if (fragments.length <= 1) return fragments;
    const s = shuffleWithSeed(fragments);
    // Ensure shuffled order is actually different from original (re-shuffle once if same)
    if (s.join("|") === fragments.join("|")) {
      const alt = [...s];
      const tmp = alt[0];
      alt[0] = alt[alt.length - 1];
      alt[alt.length - 1] = tmp;
      return alt;
    }
    return s;
  }, [fragments]);

  // Each item: { text, originalIndex (index in `fragments` = position in correct sentence) }
  const pool = useMemo(
    () =>
      shuffled.map((text) => ({
        text,
        originalIndex: fragments.indexOf(text),
      })),
    [shuffled, fragments]
  );

  /* ── State ──────────────────────────────────────────────── */
  // placed: ordered list of { text, originalIndex }
  const [placed, setPlaced] = useState<{ text: string; originalIndex: number }[]>([]);
  // inPool: bitmask of which pool positions are still available
  const [inPool, setInPool] = useState<boolean[]>(() => pool.map(() => true));

  const [wrongCount, setWrongCount] = useState(0);
  const [showHint, setShowHint] = useState("");
  const [showResult, setShowResult] = useState<"correct" | "wrong" | null>(null);
  const [shakeBuilt, setShakeBuilt] = useState(false);
  const [solved, setSolved] = useState(false);
  const doneCalledRef = useRef(false);

  const allPlaced = inPool.every((v) => !v);

  /* ── Tap pool item → move to sentence area ──────────────── */
  const handlePoolTap = useCallback(
    (poolIdx: number) => {
      if (solved || !inPool[poolIdx]) return;
      const item = pool[poolIdx];
      setInPool((prev) => {
        const next = [...prev];
        next[poolIdx] = false;
        return next;
      });
      setPlaced((prev) => [...prev, { text: item.text, originalIndex: item.originalIndex }]);
    },
    [solved, inPool, pool]
  );

  /* ── Tap placed fragment → return to pool ───────────────── */
  const handlePlacedTap = useCallback(
    (placedIdx: number) => {
      if (solved) return;
      const item = placed[placedIdx];
      // Find which pool slot this item came from
      const poolIdx = pool.findIndex(
        (p) => p.text === item.text && p.originalIndex === item.originalIndex
      );
      setPlaced((prev) => prev.filter((_, i) => i !== placedIdx));
      if (poolIdx !== -1) {
        setInPool((prev) => {
          const next = [...prev];
          next[poolIdx] = true;
          return next;
        });
      }
    },
    [solved, placed, pool]
  );

  /* ── Check ──────────────────────────────────────────────── */
  const handleCheck = useCallback(() => {
    if (solved || !allPlaced) return;

    const isCorrect = placed.every(
      (item, i) => item.originalIndex === i
    );

    if (isCorrect) {
      setSolved(true);
      setShowResult("correct");
      setShowHint("");
      if (!doneCalledRef.current) {
        doneCalledRef.current = true;
        setTimeout(() => onDone(true), 1400);
      }
    } else {
      const newWrong = wrongCount + 1;
      setWrongCount(newWrong);
      setShowResult("wrong");
      setShakeBuilt(true);

      setTimeout(() => {
        setShowResult(null);
        setShakeBuilt(false);
        // Return all placed items to pool
        setPlaced([]);
        setInPool(pool.map(() => true));
      }, 950);

      if (newWrong === 1) setShowHint(hint1);
      else if (newWrong === 2) setShowHint(hint2);
      else {
        // 3rd fail → auto-solve
        setSolved(true);
        setShakeBuilt(false);
        setPlaced(
          fragments.map((text) => ({
            text,
            originalIndex: fragments.indexOf(text),
          }))
        );
        setInPool(pool.map(() => false));
        setShowResult("correct");
        if (!doneCalledRef.current) {
          doneCalledRef.current = true;
          setTimeout(() => onDone(false), 1500);
        }
      }
    }
  }, [solved, allPlaced, placed, wrongCount, hint1, hint2, pool, fragments, onDone]);

  /* ── Render ─────────────────────────────────────────────── */
  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto select-none">
      {/* Instruction */}
      <p className="text-sm font-bold text-center text-white/80 px-4">{instruction}</p>

      {/* Tap-to-build hint */}
      {!solved && (
        <p className="text-xs text-white/40 text-center">{t.tapToBuild}</p>
      )}

      {/* Sentence construction area (notebook feel) */}
      <motion.div
        animate={
          shakeBuilt
            ? { x: [0, -6, 6, -5, 5, -3, 3, 0] }
            : { x: 0 }
        }
        transition={{ duration: 0.45 }}
        className="w-full rounded-2xl overflow-hidden"
        style={{
          background: solved
            ? "rgba(0,255,136,0.07)"
            : "rgba(255,255,255,0.04)",
          border: `2px solid ${solved ? "rgba(0,255,136,0.35)" : color + "35"}`,
        }}
      >
        {/* Notebook header bar */}
        <div
          className="px-3 py-1.5 flex items-center gap-2"
          style={{ background: `${color}18`, borderBottom: `1px solid ${color}20` }}
        >
          {/* Notebook rings */}
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: `${color}50` }}
              />
            ))}
          </div>
          <span
            className="text-xs font-bold"
            style={{ color: `${color}cc` }}
          >
            {t.builtSentence}
          </span>
        </div>

        {/* Lined area */}
        <div
          className="px-3 py-3 min-h-[72px] flex flex-wrap items-center gap-x-1 gap-y-2 relative"
          style={{
            // Subtle horizontal lines (notebook paper)
            backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent 31px, ${color}15 31px, ${color}15 32px)`,
            backgroundPosition: "0 8px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {placed.map((item, i) => (
              <React.Fragment key={`${item.text}-${item.originalIndex}-${i}`}>
                {i > 0 && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.35, scale: 1 }}
                    className="text-white text-xs font-bold"
                    style={{ lineHeight: 1 }}
                  >
                    +
                  </motion.span>
                )}
                <motion.button
                  layout
                  initial={{ scale: 0, y: -12, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  whileTap={!solved ? { scale: 0.9 } : {}}
                  onClick={() => handlePlacedTap(i)}
                  className="px-3 py-2 rounded-xl text-sm font-extrabold leading-tight shadow-md"
                  style={{
                    background: solved
                      ? "rgba(0,255,136,0.18)"
                      : `${color}28`,
                    border: `2px solid ${solved ? "rgba(0,255,136,0.45)" : color + "55"}`,
                    color: solved ? "#4ade80" : "#fff",
                    cursor: solved ? "default" : "pointer",
                  }}
                >
                  {item.text}
                </motion.button>
              </React.Fragment>
            ))}
          </AnimatePresence>
          {placed.length === 0 && (
            <span className="text-white/20 text-xs italic">…</span>
          )}
        </div>
      </motion.div>

      {/* Fragment pool */}
      <div
        className="w-full rounded-2xl p-3 min-h-[70px] flex flex-wrap gap-2 justify-center items-center"
        style={{ background: `${color}10`, border: `1px solid ${color}20` }}
      >
        <AnimatePresence>
          {pool.map((item, poolIdx) =>
            inPool[poolIdx] ? (
              <motion.button
                key={poolIdx}
                layout
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 360, damping: 26 }}
                whileTap={{ scale: 0.88 }}
                onClick={() => handlePoolTap(poolIdx)}
                className="px-4 py-2.5 rounded-xl text-sm font-extrabold shadow-sm cursor-pointer leading-tight"
                style={{
                  background: "rgba(255,255,255,0.90)",
                  color: "#1e293b",
                  border: `2px solid rgba(255,255,255,0.35)`,
                }}
              >
                {item.text}
              </motion.button>
            ) : null
          )}
        </AnimatePresence>
        {pool.every((_, i) => !inPool[i]) && !solved && (
          <span className="text-white/25 text-xs">—</span>
        )}
      </div>

      {/* Hint bubble */}
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
              color: color,
            }}
          >
            💡 {showHint}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result flash */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className={`text-xl font-black ${showResult === "correct" ? "text-green-400" : "text-red-400"}`}
          >
            {showResult === "correct" ? `✓ ${t.great}` : `✗ ${t.tryAgain}`}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Check button */}
      {!solved && (
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleCheck}
          disabled={!allPlaced}
          className="w-full py-3 rounded-xl text-white font-extrabold text-base shadow-lg transition-opacity"
          style={{
            background: allPlaced ? color : `${color}60`,
            boxShadow: allPlaced ? `0 4px 20px ${color}40` : "none",
            opacity: allPlaced ? 1 : 0.55,
          }}
        >
          {t.check}
        </motion.button>
      )}
    </div>
  );
}

export default memo(SentenceBuild);
