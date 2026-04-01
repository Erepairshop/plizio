"use client";
import React, { useState, useRef, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ──────────────────────────────────────────────────── */

interface Bucket {
  id: string;
  label: string;
}

interface Item {
  text: string;
  bucketId: string;
}

interface Props {
  buckets: Bucket[];          // 2–3 buckets, label already resolved
  items: Item[];              // items to sort, text resolved, bucketId = correct bucket
  color: string;
  instruction: string;        // already resolved label text
  hint1: string;
  hint2: string;
  lang: string;
  onDone: (correct: boolean) => void;
}

/* ── Internal labels ────────────────────────────────────────── */

const L: Record<string, Record<string, string>> = {
  en: {
    check: "Check!",
    great: "All sorted correctly!",
    tryAgain: "Some are wrong, try again!",
    tapToSort: "Tap an item, then tap its category",
  },
  de: {
    check: "Prüfen!",
    great: "Alles richtig sortiert!",
    tryAgain: "Einige sind falsch, nochmal!",
    tapToSort: "Tippe ein Wort, dann die Kategorie",
  },
  hu: {
    check: "Ellenőrzés!",
    great: "Minden helyes!",
    tryAgain: "Néhány hibás, próbáld újra!",
    tapToSort: "Koppints egy szóra, majd a kategóriára",
  },
  ro: {
    check: "Verifică!",
    great: "Totul corect!",
    tryAgain: "Unele sunt greșite!",
    tapToSort: "Atinge un cuvânt, apoi categoria",
  },
};

/* ── Colour helpers ─────────────────────────────────────────── */

/** Rotate a hex colour's hue by `deg` degrees (approximate, works in HSL space). */
function shiftHue(hex: string, deg: number): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === r) h = ((g - b) / d + 6) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h = h * 60;
  }
  const l = (max + min) / 2;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));

  h = (h + deg + 360) % 360;

  const C = (1 - Math.abs(2 * l - 1)) * s;
  const X = C * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - C / 2;
  let rr = 0, gg = 0, bb = 0;
  if (h < 60)       { rr = C; gg = X; bb = 0; }
  else if (h < 120) { rr = X; gg = C; bb = 0; }
  else if (h < 180) { rr = 0; gg = C; bb = X; }
  else if (h < 240) { rr = 0; gg = X; bb = C; }
  else if (h < 300) { rr = X; gg = 0; bb = C; }
  else              { rr = C; gg = 0; bb = X; }

  const toHex = (v: number) => Math.round((v + m) * 255).toString(16).padStart(2, "0");
  return `#${toHex(rr)}${toHex(gg)}${toHex(bb)}`;
}

const BUCKET_HUE_SHIFTS = [0, 60, 120];

/* ── Component ──────────────────────────────────────────────── */

function DragToBucket({
  buckets,
  items,
  color,
  instruction,
  hint1,
  hint2,
  lang,
  onDone,
}: Props) {
  const t = L[lang] || L.en;

  /* ── Derive bucket colours ─────────────────────────────── */
  const bucketColors = useMemo(
    () => buckets.map((_, i) => shiftHue(color, BUCKET_HUE_SHIFTS[i] ?? 0)),
    [buckets, color]
  );

  /* ── State ──────────────────────────────────────────────── */
  // assignments: itemIndex → bucketId | null
  const [assignments, setAssignments] = useState<(string | null)[]>(
    () => items.map(() => null)
  );
  const [selected, setSelected] = useState<number | null>(null); // item index
  const [wrongItems, setWrongItems] = useState<Set<number>>(new Set());
  const [wrongCount, setWrongCount] = useState(0);
  const [showHint, setShowHint] = useState("");
  const [showResult, setShowResult] = useState<"correct" | "wrong" | null>(null);
  const [solved, setSolved] = useState(false);
  const doneCalledRef = useRef(false);

  const allPlaced = assignments.every((a) => a !== null);

  /* ── Tap item ───────────────────────────────────────────── */
  const handleItemTap = useCallback(
    (idx: number) => {
      if (solved) return;
      setSelected((prev) => (prev === idx ? null : idx));
    },
    [solved]
  );

  /* ── Tap bucket ─────────────────────────────────────────── */
  const handleBucketTap = useCallback(
    (bucketId: string) => {
      if (solved || selected === null) return;
      setAssignments((prev) => {
        const next = [...prev];
        next[selected] = bucketId;
        return next;
      });
      setSelected(null);
    },
    [solved, selected]
  );

  /* ── Remove item from bucket (tap placed chip) ──────────── */
  const handleRemoveItem = useCallback(
    (idx: number) => {
      if (solved) return;
      setAssignments((prev) => {
        const next = [...prev];
        next[idx] = null;
        return next;
      });
      setSelected(null);
    },
    [solved]
  );

  /* ── Check ──────────────────────────────────────────────── */
  const handleCheck = useCallback(() => {
    if (solved || !allPlaced) return;

    const wrong = new Set<number>();
    items.forEach((item, i) => {
      if (assignments[i] !== item.bucketId) wrong.add(i);
    });

    if (wrong.size === 0) {
      setSolved(true);
      setShowResult("correct");
      setShowHint("");
      setWrongItems(new Set());
      if (!doneCalledRef.current) {
        doneCalledRef.current = true;
        setTimeout(() => onDone(true), 1300);
      }
    } else {
      const newWrong = wrongCount + 1;
      setWrongCount(newWrong);
      setWrongItems(wrong);
      setShowResult("wrong");
      setTimeout(() => {
        setShowResult(null);
        setWrongItems(new Set());
        // Return wrong items to pool
        setAssignments((prev) => {
          const next = [...prev];
          wrong.forEach((i) => { next[i] = null; });
          return next;
        });
      }, 900);

      if (newWrong === 1) setShowHint(hint1);
      else if (newWrong === 2) setShowHint(hint2);
      else {
        // 3rd fail → auto-solve
        setSolved(true);
        setWrongItems(new Set());
        setAssignments(items.map((item) => item.bucketId));
        setShowResult("correct");
        if (!doneCalledRef.current) {
          doneCalledRef.current = true;
          setTimeout(() => onDone(false), 1500);
        }
      }
    }
  }, [solved, allPlaced, items, assignments, wrongCount, hint1, hint2, onDone]);

  /* ── Pool items (not yet assigned) ─────────────────────── */
  const poolItems = items
    .map((item, i) => ({ ...item, idx: i }))
    .filter((item) => assignments[item.idx] === null);

  /* ── Render ─────────────────────────────────────────────── */
  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto select-none">
      {/* Instruction */}
      <p className="text-sm font-bold text-center text-white/80 px-4">{instruction}</p>

      {/* Tap-to-sort hint */}
      {!solved && (
        <p className="text-xs text-white/40 text-center">{t.tapToSort}</p>
      )}

      {/* Pool of unplaced items */}
      <div
        className="w-full rounded-2xl p-3 min-h-[64px] flex flex-wrap gap-2 justify-center items-center"
        style={{ background: `${color}10`, border: `1px solid ${color}20` }}
      >
        <AnimatePresence>
          {poolItems.map(({ text, idx }) => {
            const isSel = selected === idx;
            return (
              <motion.button
                key={idx}
                layout
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
                whileTap={{ scale: 0.88 }}
                onClick={() => handleItemTap(idx)}
                className="px-3 py-1.5 rounded-full text-sm font-bold transition-all cursor-pointer"
                style={{
                  background: isSel ? color : "rgba(255,255,255,0.92)",
                  color: isSel ? "#fff" : "#1e293b",
                  border: `2px solid ${isSel ? color : "rgba(255,255,255,0.4)"}`,
                  boxShadow: isSel ? `0 0 0 3px ${color}40` : undefined,
                }}
              >
                {text}
              </motion.button>
            );
          })}
        </AnimatePresence>
        {poolItems.length === 0 && (
          <span className="text-white/25 text-xs">—</span>
        )}
      </div>

      {/* Buckets */}
      <div className={`w-full grid gap-2 ${buckets.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {buckets.map((bucket, bi) => {
          const bColor = bucketColors[bi];
          const placedInBucket = items
            .map((item, i) => ({ ...item, idx: i }))
            .filter(({ idx }) => assignments[idx] === bucket.id);
          const isTarget = selected !== null;

          return (
            <motion.div
              key={bucket.id}
              whileTap={isTarget ? { scale: 0.97 } : {}}
              onClick={() => isTarget && handleBucketTap(bucket.id)}
              className="rounded-2xl p-2 flex flex-col gap-1.5 min-h-[90px] transition-all"
              style={{
                background: `${bColor}15`,
                border: `2px solid ${isTarget ? bColor : bColor + "40"}`,
                cursor: isTarget ? "pointer" : "default",
                boxShadow: isTarget ? `0 0 0 2px ${bColor}30` : undefined,
              }}
            >
              {/* Bucket label */}
              <span
                className="text-center text-sm font-extrabold px-1 py-0.5 rounded-lg leading-tight"
                style={{ color: bColor, background: `${bColor}18` }}
              >
                {bucket.label}
              </span>

              {/* Placed chips */}
              <div className="flex flex-wrap gap-1 justify-center">
                <AnimatePresence>
                  {placedInBucket.map(({ text, idx }) => {
                    const isWrong = wrongItems.has(idx);
                    return (
                      <motion.button
                        key={idx}
                        layout
                        initial={{ scale: 0, opacity: 0 }}
                        animate={
                          isWrong
                            ? { scale: [1, 1.05, 0.95, 1.05, 1], x: [0, -4, 4, -4, 0] }
                            : { scale: 1, opacity: 1 }
                        }
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        whileTap={!solved ? { scale: 0.88 } : {}}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!solved) handleRemoveItem(idx);
                        }}
                        className="px-2 py-1 rounded-full text-xs font-bold"
                        style={{
                          background: isWrong
                            ? "rgba(239,68,68,0.18)"
                            : solved
                            ? "rgba(0,255,136,0.15)"
                            : `${bColor}25`,
                          border: `1.5px solid ${isWrong ? "rgba(239,68,68,0.5)" : solved ? "rgba(0,255,136,0.4)" : bColor + "60"}`,
                          color: isWrong ? "#f87171" : solved ? "#4ade80" : "#fff",
                          cursor: solved ? "default" : "pointer",
                        }}
                      >
                        {text}
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
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

export default memo(DragToBucket);
