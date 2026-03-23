"use client";
import React, { useState, useRef, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Props ──────────────────────────────────────────────────── */

interface Props {
  min: number;
  max: number;
  start: number;
  target: number;
  step?: number;
  showJumps?: boolean;
  jumpCount?: number;
  color: string;
  instruction: string; // resolved label text
  hint1: string;
  hint2: string;
  lang: string;
  onDone: (correct: boolean) => void;
}

/* ── Labels ─────────────────────────────────────────────────── */

const L: Record<string, Record<string, string>> = {
  en: {
    tapNumber: "Tap the correct number",
    great: "Correct!",
    tryAgain: "Try again",
    start: "Start",
  },
  de: {
    tapNumber: "Tippe auf die richtige Zahl",
    great: "Richtig!",
    tryAgain: "Nochmal",
    start: "Start",
  },
  hu: {
    tapNumber: "Koppints a helyes számra",
    great: "Helyes!",
    tryAgain: "Próbáld újra",
    start: "Rajt",
  },
  ro: {
    tapNumber: "Atinge numărul corect",
    great: "Corect!",
    tryAgain: "Încearcă din nou",
    start: "Start",
  },
};

/* ── Helpers ────────────────────────────────────────────────── */

/** Format large numbers compactly: 2700000 → "2.7M", 350000 → "350k", 42 → "42" */
function fmtNum(n: number): string {
  const abs = Math.abs(n);
  if (abs >= 1_000_000) {
    const m = n / 1_000_000;
    return Number.isInteger(m) ? `${m}M` : `${parseFloat(m.toFixed(1))}M`;
  }
  if (abs >= 10_000) {
    const k = n / 1000;
    return Number.isInteger(k) ? `${k}k` : `${parseFloat(k.toFixed(1))}k`;
  }
  if (abs >= 1000) {
    return n.toLocaleString("en").replace(/,/g, " ");
  }
  return String(n);
}

/** Decide how many ticks to skip between labels so they don't overlap */
function labelEvery(tickCount: number, range: number): number {
  if (range >= 1_000_000 && tickCount > 6) return Math.ceil(tickCount / 5);
  if (range >= 100_000 && tickCount > 8) return Math.ceil(tickCount / 6);
  if (tickCount > 15) return Math.ceil(tickCount / 8);
  if (tickCount > 10) return 2;
  return 1;
}

/* ── Component ──────────────────────────────────────────────── */

function NumberLineTap({
  min,
  max,
  start,
  target,
  step = 1,
  showJumps = true,
  jumpCount,
  color,
  instruction,
  hint1,
  hint2,
  lang,
  onDone,
}: Props) {
  const t = L[lang] || L.en;

  const ticks = useMemo(() => {
    const arr: number[] = [];
    for (let i = min; i <= max; i += step) arr.push(i);
    return arr;
  }, [min, max, step]);

  const skipLabel = useMemo(() => labelEvery(ticks.length, max - min), [ticks.length, max, min]);

  const [selected, setSelected] = useState<number | null>(null);
  const [wrongCount, setWrongCount] = useState(0);
  const [showHint, setShowHint] = useState("");
  const [solved, setSolved] = useState(false);
  const [showResult, setShowResult] = useState<"correct" | "wrong" | null>(null);
  const [wrongTick, setWrongTick] = useState<number | null>(null);
  const doneCalledRef = useRef(false);

  /* ── jumps (arcs) to show after solving ────────────────── */
  const jumps = useMemo(() => {
    if (!showJumps || !solved) return [];
    const count = jumpCount ?? Math.abs(target - start);
    const direction = target > start ? 1 : -1;
    const arcs: { from: number; to: number }[] = [];
    for (let i = 0; i < count; i++) {
      arcs.push({
        from: start + i * direction * step,
        to: start + (i + 1) * direction * step,
      });
    }
    return arcs;
  }, [showJumps, solved, jumpCount, target, start, step]);

  /* ── position helper: number → percentage along line ───── */
  const numToPercent = useCallback(
    (n: number) => ((n - min) / (max - min)) * 100,
    [min, max]
  );

  /* ── handle tick tap ───────────────────────────────────── */
  const handleTap = useCallback(
    (n: number) => {
      if (solved) return;
      setSelected(n);

      if (n === target) {
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
        setWrongTick(n);
        setShowResult("wrong");
        setTimeout(() => {
          setShowResult(null);
          setWrongTick(null);
        }, 800);

        if (newWrong === 1) setShowHint(hint1);
        else if (newWrong === 2) setShowHint(hint2);
        else {
          // 3rd wrong → auto solve
          setSelected(target);
          setSolved(true);
          setShowResult("correct");
          if (!doneCalledRef.current) {
            doneCalledRef.current = true;
            setTimeout(() => onDone(false), 1500);
          }
        }
      }
    },
    [solved, target, wrongCount, hint1, hint2, onDone]
  );

  /* ── SVG dimensions ────────────────────────────────────── */
  const SVG_W = 320;
  const SVG_H = 120;
  const LINE_Y = 70;
  const PAD_X = 24;
  const LINE_W = SVG_W - PAD_X * 2;

  const tickX = (n: number) => PAD_X + (numToPercent(n) / 100) * LINE_W;

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto select-none">
      {/* instruction */}
      <p className="text-sm font-bold text-center text-white/80 px-4">
        {instruction}
      </p>

      {/* hint */}
      <p className="text-xs text-white/40 text-center">{t.tapNumber}</p>

      {/* number line SVG */}
      <div
        className="w-full rounded-2xl p-2 overflow-hidden"
        style={{ background: `${color}08`, border: `1px solid ${color}20` }}
      >
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="w-full"
          style={{ touchAction: "manipulation" }}
        >
          {/* main line */}
          <line
            x1={PAD_X}
            y1={LINE_Y}
            x2={SVG_W - PAD_X}
            y2={LINE_Y}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={2}
            strokeLinecap="round"
          />

          {/* arrows */}
          <polygon
            points={`${PAD_X - 6},${LINE_Y} ${PAD_X + 2},${LINE_Y - 4} ${PAD_X + 2},${LINE_Y + 4}`}
            fill="rgba(255,255,255,0.25)"
          />
          <polygon
            points={`${SVG_W - PAD_X + 6},${LINE_Y} ${SVG_W - PAD_X - 2},${LINE_Y - 4} ${SVG_W - PAD_X - 2},${LINE_Y + 4}`}
            fill="rgba(255,255,255,0.25)"
          />

          {/* ticks + numbers */}
          {ticks.map((n, idx) => {
            const x = tickX(n);
            const isStart = n === start;
            const isTarget = n === target && solved;
            const isWrong = n === wrongTick;
            const isSelected = n === selected && solved;

            let tickColor = "rgba(255,255,255,0.35)";
            if (isTarget || isSelected) tickColor = "#00FF88";
            else if (isWrong) tickColor = "#FF4444";
            else if (isStart) tickColor = color;

            // Show label on: first, last, start, target (when solved), every Nth, and wrong tick
            const isKeyTick = idx === 0 || idx === ticks.length - 1 || isStart || isTarget || isWrong;
            const showLabel = isKeyTick || (idx % skipLabel === 0);

            // Dynamic font size based on number magnitude
            const useLargeNums = (max - min) >= 10000;
            const baseFontSize = useLargeNums ? 7 : ticks.length > 15 ? 7 : 9;

            return (
              <g key={n}>
                {/* tick mark */}
                <line
                  x1={x}
                  y1={LINE_Y - (showLabel ? 6 : 4)}
                  x2={x}
                  y2={LINE_Y + (showLabel ? 6 : 4)}
                  stroke={tickColor}
                  strokeWidth={isStart || isTarget ? 2.5 : showLabel ? 1.5 : 1}
                />
                {/* number label — only on visible ticks */}
                {showLabel && (
                  <text
                    x={x}
                    y={LINE_Y + 18}
                    textAnchor="middle"
                    fontSize={baseFontSize}
                    fontWeight={isStart || isTarget ? 800 : 500}
                    fill={
                      isTarget
                        ? "#00FF88"
                        : isWrong
                          ? "#FF4444"
                          : isStart
                            ? color
                            : "rgba(255,255,255,0.55)"
                    }
                  >
                    {fmtNum(n)}
                  </text>
                )}
                {/* tap area (invisible larger rect) */}
                <rect
                  x={x - 12}
                  y={LINE_Y - 20}
                  width={24}
                  height={50}
                  fill="transparent"
                  style={{ cursor: solved ? "default" : "pointer" }}
                  onClick={() => handleTap(n)}
                />
              </g>
            );
          })}

          {/* start marker (character) */}
          <g>
            <circle cx={tickX(start)} cy={LINE_Y - 18} r={8} fill={color} opacity={0.9} />
            <text
              x={tickX(start)}
              y={LINE_Y - 14}
              textAnchor="middle"
              fontSize={8}
              fill="white"
              fontWeight={900}
            >
              ●
            </text>
            <text
              x={tickX(start)}
              y={LINE_Y - 30}
              textAnchor="middle"
              fontSize={7}
              fill={color}
              fontWeight={700}
            >
              {t.start}
            </text>
          </g>

          {/* target highlight when solved */}
          {solved && (
            <circle
              cx={tickX(target)}
              cy={LINE_Y}
              r={10}
              fill="none"
              stroke="#00FF88"
              strokeWidth={2}
              opacity={0.8}
            />
          )}

          {/* jump arcs */}
          {jumps.map((j, i) => {
            const x1 = tickX(j.from);
            const x2 = tickX(j.to);
            const midX = (x1 + x2) / 2;
            const arcH = 18 + (i % 2) * 4;
            return (
              <motion.path
                key={i}
                d={`M ${x1} ${LINE_Y - 7} Q ${midX} ${LINE_Y - arcH - 7} ${x2} ${LINE_Y - 7}`}
                fill="none"
                stroke={color}
                strokeWidth={1.5}
                strokeDasharray="4 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
              />
            );
          })}
        </svg>
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
    </div>
  );
}

export default memo(NumberLineTap);
