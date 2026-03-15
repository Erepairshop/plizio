"use client";
// NegativeNumberLine — Interactive number line explorer for Grade 6
// Students drag/tap to place numbers on a number line spanning negative to positive.
// No wrong answers in explore mode — pure discovery.

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ─────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Number Line",
    instruction: "Tap the correct position for the number!",
    place: "Place this number:",
    correct: "Correct!",
    tryAgain: "Try again — a bit off!",
    discover: "You placed:",
    next: "Next",
    done: "Brilliant! ✨",
    roundOf: "of",
  },
  hu: {
    title: "Számegyenes",
    instruction: "Koppints a szám helyes pozíciójára!",
    place: "Helyezd el ezt a számot:",
    correct: "Helyes!",
    tryAgain: "Próbáld újra — kicsit mellé!",
    discover: "Elhelyezted:",
    next: "Következő",
    done: "Fantasztikus! ✨",
    roundOf: "/",
  },
  de: {
    title: "Zahlenstrahl",
    instruction: "Tippe auf die richtige Position für die Zahl!",
    place: "Platziere diese Zahl:",
    correct: "Richtig!",
    tryAgain: "Nochmal — etwas daneben!",
    discover: "Du hast platziert:",
    next: "Weiter",
    done: "Fantastisch! ✨",
    roundOf: "von",
  },
  ro: {
    title: "Axa numerelor",
    instruction: "Atinge poziția corectă pentru număr!",
    place: "Plasează acest număr:",
    correct: "Corect!",
    tryAgain: "Încearcă din nou — puțin alături!",
    discover: "Ai plasat:",
    next: "Înainte",
    done: "Fantastic! ✨",
    roundOf: "din",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
interface Round {
  target: number;    // number to place
  rangeMin: number;  // left end of number line
  rangeMax: number;  // right end of number line
  step: number;      // tick marks every N
}

function generateRounds(): Round[] {
  const pool: Round[] = [
    { target: -3, rangeMin: -10, rangeMax: 10, step: 1 },
    { target: 5, rangeMin: -10, rangeMax: 10, step: 1 },
    { target: -7, rangeMin: -10, rangeMax: 10, step: 1 },
    { target: 0, rangeMin: -10, rangeMax: 10, step: 1 },
    { target: -5, rangeMin: -10, rangeMax: 10, step: 5 },
    { target: -8, rangeMin: -10, rangeMax: 10, step: 1 },
    { target: 3, rangeMin: -5, rangeMax: 5, step: 1 },
    { target: -2, rangeMin: -5, rangeMax: 5, step: 1 },
    { target: -15, rangeMin: -20, rangeMax: 20, step: 5 },
    { target: 10, rangeMin: -20, rangeMax: 20, step: 5 },
    { target: -4, rangeMin: -10, rangeMax: 10, step: 2 },
    { target: 6, rangeMin: -10, rangeMax: 10, step: 2 },
  ];
  // Shuffle and take 8
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 8);
}

// ─── Number Line SVG ────────────────────────────────────────────────────────
function NumberLineSVG({
  rangeMin, rangeMax, step, target, tapped, color,
  onTap,
}: {
  rangeMin: number; rangeMax: number; step: number; target: number;
  tapped: number | null; color: string;
  onTap: (value: number) => void;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const W = 300;
  const H = 80;
  const PAD = 30;
  const lineY = 40;
  const range = rangeMax - rangeMin;

  const valToX = (v: number) => PAD + ((v - rangeMin) / range) * (W - 2 * PAD);

  // Generate tick positions
  const ticks: number[] = [];
  for (let v = rangeMin; v <= rangeMax; v += step) {
    ticks.push(v);
  }

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (tapped !== null) return;
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * W;
    // Find closest tick
    let closest = ticks[0];
    let minDist = Infinity;
    for (const t of ticks) {
      const dist = Math.abs(valToX(t) - clickX);
      if (dist < minDist) { minDist = dist; closest = t; }
    }
    onTap(closest);
  };

  const isCorrect = tapped === target;

  return (
    <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} width="100%" className="touch-none cursor-pointer" onClick={handleClick}>
      {/* Main line */}
      <line x1={PAD - 5} y1={lineY} x2={W - PAD + 5} y2={lineY}
        stroke="rgba(255,255,255,0.3)" strokeWidth={2} />
      {/* Arrow tips */}
      <polygon points={`${PAD - 10},${lineY} ${PAD - 2},${lineY - 4} ${PAD - 2},${lineY + 4}`}
        fill="rgba(255,255,255,0.3)" />
      <polygon points={`${W - PAD + 10},${lineY} ${W - PAD + 2},${lineY - 4} ${W - PAD + 2},${lineY + 4}`}
        fill="rgba(255,255,255,0.3)" />

      {/* Tick marks */}
      {ticks.map((v) => {
        const x = valToX(v);
        const isZero = v === 0;
        const isTarget = v === target && tapped !== null;
        return (
          <g key={v}>
            <line x1={x} y1={lineY - (isZero ? 10 : 6)} x2={x} y2={lineY + (isZero ? 10 : 6)}
              stroke={isTarget ? (isCorrect ? "#00FF88" : "#FF4444") : isZero ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}
              strokeWidth={isZero ? 2 : 1} />
            <text x={x} y={lineY + 22} textAnchor="middle"
              fill={isTarget ? (isCorrect ? "#00FF88" : "#FF4444") : isZero ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.35)"}
              fontSize={isZero ? 11 : 9} fontWeight={isZero ? "900" : "700"}>
              {v}
            </text>
          </g>
        );
      })}

      {/* Tapped marker */}
      {tapped !== null && (
        <g>
          <circle cx={valToX(tapped)} cy={lineY} r={8}
            fill={isCorrect ? `${color}55` : "rgba(255,68,68,0.3)"}
            stroke={isCorrect ? color : "#FF4444"} strokeWidth={2} />
          <text x={valToX(tapped)} y={lineY - 16} textAnchor="middle"
            fill={isCorrect ? color : "#FF4444"} fontSize={12} fontWeight="900">
            {tapped}
          </text>
        </g>
      )}

      {/* Target hint on correct — green glow */}
      {tapped !== null && isCorrect && (
        <circle cx={valToX(target)} cy={lineY} r={12}
          fill="none" stroke="#00FF88" strokeWidth={1} opacity={0.4} />
      )}

      {/* Show correct position if wrong */}
      {tapped !== null && !isCorrect && (
        <g>
          <circle cx={valToX(target)} cy={lineY} r={8}
            fill="rgba(0,255,136,0.2)" stroke="#00FF88" strokeWidth={2} />
          <text x={valToX(target)} y={lineY - 16} textAnchor="middle"
            fill="#00FF88" fontSize={12} fontWeight="900">
            {target}
          </text>
        </g>
      )}
    </svg>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const NegativeNumberLine = memo(function NegativeNumberLine({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;

  const [rounds] = useState<Round[]>(() => generateRounds());
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<"play" | "feedback">("play");

  const total = rounds.length;
  const round = rounds[idx];
  const isLast = idx >= total - 1;

  const handleTap = useCallback((value: number) => {
    if (phase !== "play") return;
    setTapped(value);
    if (value === round.target) {
      setScore((s) => s + 1);
    }
    setPhase("feedback");
  }, [phase, round]);

  const handleNext = useCallback(() => {
    if (isLast) {
      const finalScore = score + (tapped === round.target ? 0 : 0); // already counted in handleTap
      onDone(score, total);
      return;
    }
    setIdx((i) => i + 1);
    setTapped(null);
    setPhase("play");
  }, [isLast, onDone, score, total, tapped, round]);

  const isCorrect = tapped === round.target;

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4">
      {/* Progress */}
      <div className="flex items-center gap-2 w-full">
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full rounded-full" style={{ background: color }}
            animate={{ width: `${((idx + (phase === "feedback" ? 1 : 0)) / total) * 100}%` }}
            transition={{ duration: 0.3 }} />
        </div>
        <span className="text-white/50 text-xs font-bold">{idx + 1}/{total}</span>
      </div>

      {/* Instruction */}
      <p className="text-white/50 text-xs font-medium text-center">{lbl.instruction}</p>

      {/* Target number */}
      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="flex flex-col items-center gap-2">
          <p className="text-white/60 text-sm font-medium">{lbl.place}</p>
          <motion.div
            className="text-4xl font-black px-6 py-3 rounded-2xl"
            style={{ color, background: `${color}15`, border: `2px solid ${color}40` }}
            animate={phase === "play" ? { scale: [1, 1.03, 1] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}>
            {round.target}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Number Line */}
      <div className="w-full bg-white/5 rounded-2xl p-3 border border-white/10">
        <NumberLineSVG
          rangeMin={round.rangeMin} rangeMax={round.rangeMax}
          step={round.step} target={round.target}
          tapped={tapped} color={color}
          onTap={handleTap}
        />
      </div>

      {/* Feedback */}
      {phase === "feedback" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-3 w-full">
          <p className={`text-sm font-bold ${isCorrect ? "text-green-400" : "text-orange-400"}`}>
            {isCorrect ? `✅ ${lbl.correct}` : `💡 ${lbl.tryAgain}`}
          </p>
          <motion.button onClick={handleNext}
            className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
            whileTap={{ scale: 0.97 }}>
            {isLast ? lbl.done : lbl.next} <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
});

export default NegativeNumberLine;
