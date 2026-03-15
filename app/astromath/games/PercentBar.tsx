"use client";
// PercentBar — Interactive percent visualizer for Grade 6
// Students see a shaded bar and determine the percentage,
// or see a percentage and tap to fill the correct amount.
// No wrong answers in explore mode — pure discovery.

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ─────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Percent Explorer",
    modeRead: "How much is shaded?",
    modeFill: "Tap to fill",
    correct: "Correct!",
    tryAgain: "Not quite — look again!",
    next: "Next",
    done: "Brilliant! ✨",
    ofTotal: "of",
    percent: "percent",
    instruction: "Tap the correct answer!",
  },
  hu: {
    title: "Százalék felfedezés",
    modeRead: "Mennyi van kiszínezve?",
    modeFill: "Koppints a kitöltéshez",
    correct: "Helyes!",
    tryAgain: "Nem egészen — nézd meg újra!",
    next: "Következő",
    done: "Fantasztikus! ✨",
    ofTotal: "/",
    percent: "százalék",
    instruction: "Koppints a helyes válaszra!",
  },
  de: {
    title: "Prozent-Entdecker",
    modeRead: "Wie viel ist eingefärbt?",
    modeFill: "Tippe zum Ausfüllen",
    correct: "Richtig!",
    tryAgain: "Nicht ganz — schau nochmal!",
    next: "Weiter",
    done: "Fantastisch! ✨",
    ofTotal: "von",
    percent: "Prozent",
    instruction: "Tippe die richtige Antwort!",
  },
  ro: {
    title: "Explorator procente",
    modeRead: "Cât este colorat?",
    modeFill: "Atinge pentru a completa",
    correct: "Corect!",
    tryAgain: "Nu chiar — privește din nou!",
    next: "Înainte",
    done: "Fantastic! ✨",
    ofTotal: "din",
    percent: "procent",
    instruction: "Atinge răspunsul corect!",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
interface Round {
  mode: "read" | "fill";
  percent: number;       // correct answer
  total: number;         // total units in the bar (10 or 20)
  options: number[];     // 4 MCQ options
}

function generateRounds(): Round[] {
  const percents = [10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90];
  const shuffled = [...percents].sort(() => Math.random() - 0.5);
  const picked = shuffled.slice(0, 8);

  return picked.map((pct, i) => {
    const mode: "read" | "fill" = i % 2 === 0 ? "read" : "fill";
    const total = pct % 10 === 0 ? 10 : 20;
    // Generate distractors
    const distractors = new Set<number>();
    distractors.add(pct);
    while (distractors.size < 4) {
      const offset = (Math.floor(Math.random() * 4) + 1) * (Math.random() < 0.5 ? 10 : 5);
      const candidate = pct + (Math.random() < 0.5 ? offset : -offset);
      if (candidate > 0 && candidate <= 100 && candidate !== pct) {
        distractors.add(candidate);
      }
    }
    const options = [...distractors].sort(() => Math.random() - 0.5);
    return { mode, percent: pct, total, options };
  });
}

// ─── Percent Bar SVG ─────────────────────────────────────────────────────────
function PercentBarSVG({
  total, filledCount, color, showLabels,
}: {
  total: number; filledCount: number; color: string; showLabels: boolean;
}) {
  const W = 280;
  const H = 40;
  const cellW = W / total;
  const gap = 1;

  return (
    <svg viewBox={`0 0 ${W} ${H + (showLabels ? 18 : 0)}`} width="100%">
      {Array.from({ length: total }, (_, i) => {
        const filled = i < filledCount;
        return (
          <g key={i}>
            <rect x={i * cellW + gap / 2} y={0} width={cellW - gap} height={H}
              rx={3}
              fill={filled ? `${color}66` : "rgba(255,255,255,0.06)"}
              stroke={filled ? color : "rgba(255,255,255,0.12)"}
              strokeWidth={filled ? 1.5 : 0.5} />
          </g>
        );
      })}
      {/* Percentage labels at 0%, 50%, 100% */}
      {showLabels && (
        <>
          <text x={0} y={H + 14} fontSize={9} fill="rgba(255,255,255,0.35)" fontWeight="700">0%</text>
          <text x={W / 2} y={H + 14} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,0.35)" fontWeight="700">50%</text>
          <text x={W} y={H + 14} textAnchor="end" fontSize={9} fill="rgba(255,255,255,0.35)" fontWeight="700">100%</text>
        </>
      )}
    </svg>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const PercentBar = memo(function PercentBar({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;

  const [rounds] = useState<Round[]>(() => generateRounds());
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<"play" | "feedback">("play");

  const total = rounds.length;
  const round = rounds[idx];
  const isLast = idx >= total - 1;
  const filledCount = Math.round((round.percent / 100) * round.total);

  const handleSelect = useCallback((value: number) => {
    if (phase !== "play") return;
    setSelected(value);
    if (value === round.percent) {
      setScore((s) => s + 1);
    }
    setPhase("feedback");
  }, [phase, round]);

  const handleNext = useCallback(() => {
    if (isLast) {
      onDone(score, total);
      return;
    }
    setIdx((i) => i + 1);
    setSelected(null);
    setPhase("play");
  }, [isLast, onDone, score, total]);

  const isCorrect = selected === round.percent;
  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

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

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="flex flex-col items-center gap-3 w-full">

          {/* Mode label */}
          <p className="text-white/50 text-xs font-medium text-center">{lbl.instruction}</p>

          {round.mode === "read" ? (
            <>
              {/* Show filled bar, ask what % */}
              <p className="text-white/70 text-sm font-bold text-center">{lbl.modeRead}</p>
              <div className="w-full bg-white/5 rounded-2xl p-3 border border-white/10">
                <PercentBarSVG total={round.total} filledCount={filledCount} color={color} showLabels={true} />
              </div>
            </>
          ) : (
            <>
              {/* Show target %, bar fills on correct */}
              <div className="flex items-center gap-3">
                <p className="text-white/70 text-sm font-bold">{lbl.modeFill}</p>
                <span className="text-2xl font-black" style={{ color }}>{round.percent}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-2xl p-3 border border-white/10">
                <PercentBarSVG
                  total={round.total}
                  filledCount={phase === "feedback" && isCorrect ? filledCount : 0}
                  color={color}
                  showLabels={true}
                />
              </div>
            </>
          )}

          {/* MCQ Options */}
          <div className="grid grid-cols-2 gap-2 w-full mt-1">
            {round.options.map((opt, i) => {
              const isOpt = selected === opt;
              const optCorrect = opt === round.percent;
              let bg = "rgba(255,255,255,0.06)";
              let border = "rgba(255,255,255,0.12)";
              let textColor = "rgba(255,255,255,0.8)";

              if (phase === "feedback") {
                if (optCorrect) {
                  bg = "rgba(0,255,136,0.15)"; border = "#00FF88"; textColor = "#00FF88";
                } else if (isOpt && !optCorrect) {
                  bg = "rgba(255,68,68,0.12)"; border = "rgba(255,68,68,0.4)"; textColor = "rgba(255,68,68,0.7)";
                }
              } else if (isOpt) {
                bg = `${COLORS[i % COLORS.length]}22`;
                border = COLORS[i % COLORS.length];
                textColor = COLORS[i % COLORS.length];
              }

              return (
                <motion.button key={opt}
                  onClick={() => handleSelect(opt)}
                  disabled={phase === "feedback"}
                  className="py-3 rounded-xl font-extrabold text-base transition-colors"
                  style={{ background: bg, border: `2px solid ${border}`, color: textColor }}
                  whileTap={phase === "play" ? { scale: 0.96 } : {}}>
                  {opt}%
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Feedback */}
      {phase === "feedback" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-3 w-full">
          <p className={`text-sm font-bold ${isCorrect ? "text-green-400" : "text-orange-400"}`}>
            {isCorrect ? `✅ ${lbl.correct}` : `💡 ${round.percent}%`}
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

export default PercentBar;
