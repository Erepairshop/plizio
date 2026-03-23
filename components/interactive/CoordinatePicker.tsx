"use client";
import { memo, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ──────────────────────────────────────────────────── */

interface Props {
  targetX: number;
  targetY: number;
  range?: number; // grid goes from -range to +range (default 5)
  color: string;
  instruction: string;
  hint1: string;
  hint2: string;
  lang: string;
  onDone: (correct: boolean) => void;
}

/* ── Labels ─────────────────────────────────────────────────── */

const L: Record<string, Record<string, string>> = {
  en: {
    target: "Target",
    great: "Correct!",
    tryAgain: "Not quite — try again!",
  },
  de: {
    target: "Ziel",
    great: "Richtig!",
    tryAgain: "Nicht ganz — versuch es nochmal!",
  },
  hu: {
    target: "Cél",
    great: "Helyes!",
    tryAgain: "Nem pontos — próbáld újra!",
  },
  ro: {
    target: "Țintă",
    great: "Corect!",
    tryAgain: "Nu e exact — încearcă din nou!",
  },
};

/* ── Component ──────────────────────────────────────────────── */

const CoordinatePicker = memo(function CoordinatePicker({
  targetX,
  targetY,
  range = 5,
  color,
  instruction,
  hint1,
  hint2,
  lang,
  onDone,
}: Props) {
  const t = L[lang] || L.en;
  const [lastGuess, setLastGuess] = useState<{ x: number; y: number } | null>(null);
  const [solved, setSolved] = useState(false);
  const [wrongCount, setWrongCount] = useState(0);
  const [hintMsg, setHintMsg] = useState("");
  const doneRef = useRef(false);

  const svgSize = 280;
  const padding = 24;
  const plotSize = svgSize - padding * 2;
  const step = plotSize / (range * 2);
  const origin = svgSize / 2;

  const handleClick = useCallback(
    (e: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) => {
      if (solved || doneRef.current) return;
      const svg = e.currentTarget;
      const rect = svg.getBoundingClientRect();
      let clientX: number, clientY: number;
      if ("touches" in e) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      const clickX = clientX - rect.left;
      const clickY = clientY - rect.top;

      // Scale from DOM to SVG coords
      const scaleX = svgSize / rect.width;
      const scaleY = svgSize / rect.height;
      const svgX = clickX * scaleX;
      const svgY = clickY * scaleY;

      const x = Math.round((svgX - origin) / step);
      const y = Math.round((origin - svgY) / step);

      if (x < -range || x > range || y < -range || y > range) return;
      setLastGuess({ x, y });

      if (x === targetX && y === targetY) {
        setSolved(true);
        doneRef.current = true;
        setTimeout(() => onDone(true), 1000);
      } else {
        const wc = wrongCount + 1;
        setWrongCount(wc);
        if (wc === 1) setHintMsg(hint1);
        else if (wc === 2) setHintMsg(hint2);
        else if (wc >= 3) {
          doneRef.current = true;
          // Show correct answer then fail
          setLastGuess({ x: targetX, y: targetY });
          setTimeout(() => onDone(false), 1500);
        }
      }
    },
    [solved, wrongCount, targetX, targetY, range, step, origin, svgSize, hint1, hint2, onDone]
  );

  const isCorrect = lastGuess && lastGuess.x === targetX && lastGuess.y === targetY;

  return (
    <div className="flex flex-col items-center w-full gap-3">
      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-white/60 px-4">{instruction}</p>

      {/* Target badge */}
      <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
        <span className="text-[10px] uppercase tracking-wider font-bold text-white/50">{t.target}:</span>
        <span className="text-lg font-mono font-black tracking-widest" style={{ color }}>
          ({targetX}, {targetY})
        </span>
      </div>

      {/* Grid SVG */}
      <div className="bg-white rounded-2xl p-2 shadow-sm border border-white/10">
        <svg
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="w-full cursor-crosshair select-none"
          style={{ maxWidth: 280 }}
          onClick={handleClick}
          onTouchEnd={handleClick}
        >
          {/* Grid lines */}
          {Array.from({ length: range * 2 + 1 }).map((_, i) => {
            const pos = padding + i * step;
            const isCenter = i === range;
            return (
              <g key={i}>
                <line x1={pos} y1={padding} x2={pos} y2={svgSize - padding} stroke={isCenter ? "#374151" : "#E5E7EB"} strokeWidth={isCenter ? 2 : 0.5} />
                <line x1={padding} y1={pos} x2={svgSize - padding} y2={pos} stroke={isCenter ? "#374151" : "#E5E7EB"} strokeWidth={isCenter ? 2 : 0.5} />
                {/* Axis labels */}
                {!isCenter && (
                  <>
                    <text x={pos} y={origin + 14} fontSize="9" fill="#9CA3AF" textAnchor="middle">{i - range}</text>
                    <text x={origin - 8} y={pos + 3} fontSize="9" fill="#9CA3AF" textAnchor="end">{range - i}</text>
                  </>
                )}
              </g>
            );
          })}

          <text x={svgSize - padding + 6} y={origin + 4} fontSize="11" fontWeight="bold" fill="#6B7280">x</text>
          <text x={origin + 4} y={padding - 6} fontSize="11" fontWeight="bold" fill="#6B7280">y</text>

          {/* Clicked point */}
          {lastGuess && (
            <g transform={`translate(${origin + lastGuess.x * step}, ${origin - lastGuess.y * step})`}>
              {isCorrect && <circle r="12" fill={color} opacity="0.2"><animate attributeName="r" from="6" to="18" dur="0.8s" repeatCount="indefinite" /><animate attributeName="opacity" from="0.3" to="0" dur="0.8s" repeatCount="indefinite" /></circle>}
              <circle r="6" fill={isCorrect ? "#10B981" : "#EF4444"} />
            </g>
          )}
        </svg>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {solved && (
          <motion.p initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-sm font-bold text-emerald-400">
            {t.great} ✅
          </motion.p>
        )}
        {!solved && lastGuess && !isCorrect && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-300/80">
            {t.tryAgain}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Hint */}
      {hintMsg && !solved && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-amber-300/80 bg-amber-500/10 px-3 py-2 rounded-lg text-center">
          💡 {hintMsg}
        </motion.div>
      )}
    </div>
  );
});

export default CoordinatePicker;
