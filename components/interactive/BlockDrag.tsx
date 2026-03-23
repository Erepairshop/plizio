"use client";
import React, { useState, useRef, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ──────────────────────────────────────────────────── */

interface Block {
  id: number;
  icon: string;
  color: string;
  inZone: boolean; // dragged to target zone
}

interface Props {
  mode: "combine" | "split" | "place-value";
  groups: number[];
  answer: number;
  tens?: number;
  ones?: number;
  blockIcon?: string;
  blockColor?: string;
  color: string;
  instruction: string; // already resolved label text
  hint1: string;
  hint2: string;
  lang: string;
  onDone: (correct: boolean) => void;
}

/* ── Labels ─────────────────────────────────────────────────── */

const L: Record<string, Record<string, string>> = {
  en: {
    check: "Check!",
    dragHere: "Drag here",
    howMany: "How many?",
    great: "Great!",
    tryAgain: "Try again",
    tapToMove: "Tap blocks to move them",
    total: "Total",
    tens: "Tens",
    ones: "Ones",
    remain: "Remaining",
    showMe: "Show me",
  },
  de: {
    check: "Prüfen!",
    dragHere: "Hierher ziehen",
    howMany: "Wie viele?",
    great: "Super!",
    tryAgain: "Nochmal",
    tapToMove: "Tippe auf die Blöcke",
    total: "Gesamt",
    tens: "Zehner",
    ones: "Einer",
    remain: "Übrig",
    showMe: "Zeig mir",
  },
  hu: {
    check: "Ellenőrzés!",
    dragHere: "Húzd ide",
    howMany: "Hány van?",
    great: "Szuper!",
    tryAgain: "Próbáld újra",
    tapToMove: "Koppints a kockákra",
    total: "Összesen",
    tens: "Tízesek",
    ones: "Egyesek",
    remain: "Maradt",
    showMe: "Mutasd meg",
  },
  ro: {
    check: "Verifică!",
    dragHere: "Trage aici",
    howMany: "Câte sunt?",
    great: "Super!",
    tryAgain: "Încearcă din nou",
    tapToMove: "Atinge blocurile",
    total: "Total",
    tens: "Zeci",
    ones: "Unități",
    remain: "Rămase",
    showMe: "Arată-mi",
  },
};

/* ── Component ──────────────────────────────────────────────── */

function BlockDrag({
  mode,
  groups,
  answer,
  tens,
  ones,
  blockIcon = "🟦",
  blockColor,
  color,
  instruction,
  hint1,
  hint2,
  lang,
  onDone,
}: Props) {
  const t = L[lang] || L.en;

  /* ── build blocks ──────────────────────────────────────── */
  const initialBlocks = useMemo(() => {
    const blocks: Block[] = [];
    let id = 0;
    if (mode === "combine") {
      for (const g of groups) {
        for (let i = 0; i < g; i++) {
          blocks.push({ id: id++, icon: blockIcon, color: blockColor || color, inZone: false });
        }
      }
    } else if (mode === "split") {
      const total = groups[0] || 0;
      for (let i = 0; i < total; i++) {
        blocks.push({ id: id++, icon: blockIcon, color: blockColor || color, inZone: false });
      }
    } else {
      // place-value: tens blocks + ones blocks
      const t = tens ?? 0;
      const o = ones ?? 0;
      for (let i = 0; i < t; i++) {
        blocks.push({ id: id++, icon: "🔷", color: "#3B82F6", inZone: false });
      }
      for (let i = 0; i < o; i++) {
        blocks.push({ id: id++, icon: "🟡", color: "#F59E0B", inZone: false });
      }
    }
    return blocks;
  }, [mode, groups, tens, ones, blockIcon, blockColor, color]);

  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);
  const [inputVal, setInputVal] = useState("");
  const [wrongCount, setWrongCount] = useState(0);
  const [showHint, setShowHint] = useState("");
  const [solved, setSolved] = useState(false);
  const [showResult, setShowResult] = useState<"correct" | "wrong" | null>(null);
  const doneCalledRef = useRef(false);

  /* ── tap a block to toggle it to/from zone ─────────────── */
  const toggleBlock = useCallback(
    (id: number) => {
      if (solved) return;
      setBlocks((prev) =>
        prev.map((b) => (b.id === id ? { ...b, inZone: !b.inZone } : b))
      );
    },
    [solved]
  );

  /* ── count blocks in zone ──────────────────────────────── */
  const inZoneCount = blocks.filter((b) => b.inZone).length;
  const outZoneCount = blocks.filter((b) => !b.inZone).length;

  /* ── derive what the "answer input" should be ──────────── */
  const needsInput = mode === "place-value";
  // combine/split: answer = how many in zone (combine) or how many NOT in zone (split)

  /* ── check answer ──────────────────────────────────────── */
  const handleCheck = useCallback(() => {
    if (solved) return;
    let userAnswer: number;
    if (mode === "combine") {
      // all blocks should be in zone, answer = total
      userAnswer = inZoneCount;
    } else if (mode === "split") {
      // remove groups[1] blocks to zone, remaining = answer
      userAnswer = outZoneCount;
    } else {
      // place-value: user types the number
      userAnswer = parseInt(inputVal) || 0;
    }

    if (userAnswer === answer) {
      setSolved(true);
      setShowResult("correct");
      setShowHint("");
      if (!doneCalledRef.current) {
        doneCalledRef.current = true;
        setTimeout(() => onDone(true), 1200);
      }
    } else {
      const newWrong = wrongCount + 1;
      setWrongCount(newWrong);
      setShowResult("wrong");
      setTimeout(() => setShowResult(null), 800);
      if (newWrong === 1) setShowHint(hint1);
      else if (newWrong === 2) setShowHint(hint2);
      else {
        // 3rd wrong → auto solve
        setSolved(true);
        if (mode === "combine") {
          setBlocks((prev) => prev.map((b) => ({ ...b, inZone: true })));
        } else if (mode === "split") {
          const removeCount = groups[1] || 0;
          setBlocks((prev) =>
            prev.map((b, i) => ({ ...b, inZone: i < removeCount }))
          );
        } else {
          setInputVal(String(answer));
        }
        setShowResult("correct");
        if (!doneCalledRef.current) {
          doneCalledRef.current = true;
          setTimeout(() => onDone(false), 1500);
        }
      }
    }
  }, [solved, mode, inZoneCount, outZoneCount, inputVal, answer, wrongCount, hint1, hint2, groups, onDone]);

  /* ── group labels ──────────────────────────────────────── */
  const groupSeparators = useMemo(() => {
    if (mode !== "combine" || groups.length < 2) return [];
    const seps: number[] = [];
    let acc = 0;
    for (let i = 0; i < groups.length - 1; i++) {
      acc += groups[i];
      seps.push(acc);
    }
    return seps;
  }, [mode, groups]);

  /* ── render ────────────────────────────────────────────── */
  const zoneLabel =
    mode === "combine"
      ? t.total
      : mode === "split"
        ? t.remain
        : `${t.tens} + ${t.ones}`;

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto select-none">
      {/* instruction */}
      <p className="text-sm font-bold text-center text-white/80 px-4">
        {instruction}
      </p>

      {/* source blocks area */}
      <div
        className="relative w-full rounded-2xl p-3 min-h-[80px] flex flex-wrap gap-2 justify-center items-center"
        style={{ background: `${color}15`, border: `1px solid ${color}25` }}
      >
        <AnimatePresence>
          {blocks
            .filter((b) => !b.inZone)
            .map((b, i) => {
              // show group dividers for combine mode
              const showDivider =
                mode === "combine" &&
                !solved &&
                groupSeparators.includes(
                  blocks.filter((bb) => !bb.inZone).indexOf(b)
                ) &&
                i > 0;
              return (
                <React.Fragment key={b.id}>
                  {showDivider && (
                    <div className="w-px h-10 bg-white/20 mx-1" />
                  )}
                  <motion.button
                    layout
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0, y: 30 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    whileTap={!solved ? { scale: 0.85 } : {}}
                    onClick={() => toggleBlock(b.id)}
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-md cursor-pointer"
                    style={{
                      background: `${b.color}30`,
                      border: `2px solid ${b.color}60`,
                    }}
                  >
                    {b.icon}
                  </motion.button>
                </React.Fragment>
              );
            })}
        </AnimatePresence>
        {blocks.filter((b) => !b.inZone).length === 0 && (
          <span className="text-white/30 text-xs">{mode === "split" ? t.remain + ": 0" : "—"}</span>
        )}
      </div>

      {/* tap hint */}
      {!solved && (
        <p className="text-xs text-white/40 text-center">{t.tapToMove}</p>
      )}

      {/* target zone */}
      <div
        className="relative w-full rounded-2xl p-3 min-h-[70px] flex flex-wrap gap-2 justify-center items-center"
        style={{
          background: solved
            ? "rgba(0,255,136,0.08)"
            : `${color}08`,
          border: solved
            ? "2px solid rgba(0,255,136,0.3)"
            : `2px dashed ${color}30`,
        }}
      >
        <span
          className="absolute -top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: `${color}20`, color: `${color}` }}
        >
          {zoneLabel}
        </span>
        <AnimatePresence>
          {blocks
            .filter((b) => b.inZone)
            .map((b) => (
              <motion.button
                key={b.id}
                layout
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                whileTap={!solved ? { scale: 0.85 } : {}}
                onClick={() => toggleBlock(b.id)}
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-md cursor-pointer"
                style={{
                  background: `${b.color}30`,
                  border: `2px solid ${b.color}60`,
                }}
              >
                {b.icon}
              </motion.button>
            ))}
        </AnimatePresence>
        {blocks.filter((b) => b.inZone).length === 0 && !solved && (
          <span className="text-white/25 text-xs">{t.dragHere}</span>
        )}
      </div>

      {/* place-value input */}
      {needsInput && (
        <div className="flex items-center gap-2">
          <span className="text-white/60 text-sm font-bold">=</span>
          <input
            type="number"
            inputMode="numeric"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            disabled={solved}
            className="w-20 h-10 rounded-xl text-center text-lg font-black bg-white/10 border border-white/20 text-white outline-none focus:border-white/40"
            placeholder="?"
          />
        </div>
      )}

      {/* count display for combine/split */}
      {!needsInput && (
        <div className="flex items-center gap-3">
          {mode === "combine" && (
            <span className="text-lg font-black text-white/80">
              {groups.join(" + ")} = {inZoneCount}
            </span>
          )}
          {mode === "split" && (
            <span className="text-lg font-black text-white/80">
              {groups[0]} − {inZoneCount} = {outZoneCount}
            </span>
          )}
        </div>
      )}

      {/* hint bubble */}
      <AnimatePresence>
        {showHint && !solved && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full rounded-xl p-3 text-sm text-center"
            style={{ background: `${color}15`, border: `1px solid ${color}30`, color: `${color}` }}
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
            className={`text-2xl font-black ${showResult === "correct" ? "text-green-400" : "text-red-400"}`}
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
          className="w-full py-3 rounded-xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color, boxShadow: `0 4px 20px ${color}40` }}
        >
          {t.check}
        </motion.button>
      )}
    </div>
  );
}

export default memo(BlockDrag);
