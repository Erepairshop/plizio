"use client";
import { useState, useCallback, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ──────────────────────────────────────────────────── */

interface Props {
  leftWeight: number;
  rightInitial: number;
  unitIcon?: string;
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
    addWeight: "Add weight",
    reset: "Reset",
    balanced: "Perfectly balanced!",
    needMore: "Need more weight on the right!",
    tooMuch: "Too heavy on the right!",
    great: "Great!",
    tryAgain: "Try again",
    hint: "Hint",
  },
  de: {
    addWeight: "Gewicht hinzufügen",
    reset: "Zurücksetzen",
    balanced: "Perfekt ausbalanciert!",
    needMore: "Mehr Gewicht rechts nötig!",
    tooMuch: "Rechts zu schwer!",
    great: "Super!",
    tryAgain: "Nochmal",
    hint: "Hinweis",
  },
  hu: {
    addWeight: "Súly hozzáadása",
    reset: "Újra",
    balanced: "Tökéletes egyensúly!",
    needMore: "Több súly kell a jobb oldalra!",
    tooMuch: "Túl nehéz a jobb oldal!",
    great: "Szuper!",
    tryAgain: "Próbáld újra",
    hint: "Tipp",
  },
  ro: {
    addWeight: "Adaugă greutate",
    reset: "Resetează",
    balanced: "Echilibru perfect!",
    needMore: "Mai multă greutate pe dreapta!",
    tooMuch: "Prea greu pe dreapta!",
    great: "Super!",
    tryAgain: "Încearcă din nou",
    hint: "Indiciu",
  },
};

/* ── Component ──────────────────────────────────────────────── */

const BalanceScale = memo(function BalanceScale({
  leftWeight,
  rightInitial,
  unitIcon = "📦",
  color,
  instruction,
  hint1,
  hint2,
  lang,
  onDone,
}: Props) {
  const t = L[lang] || L.en;
  const [currentRight, setCurrentRight] = useState(rightInitial);
  const [solved, setSolved] = useState(false);
  const [wrongCount, setWrongCount] = useState(0);
  const [hintMsg, setHintMsg] = useState("");
  const [isJiggling, setIsJiggling] = useState(false);
  const doneRef = useRef(false);

  const difference = leftWeight - currentRight;
  const tiltAngle = Math.max(-20, Math.min(20, difference * 3));

  const addWeight = useCallback((amount: number) => {
    if (solved || doneRef.current) return;
    const next = currentRight + amount;
    setCurrentRight(next);

    if (next === leftWeight) {
      setSolved(true);
      doneRef.current = true;
      setTimeout(() => onDone(true), 1200);
    }
  }, [currentRight, leftWeight, solved, onDone]);

  const handleCheck = useCallback(() => {
    if (solved || doneRef.current) return;
    if (currentRight === leftWeight) {
      setSolved(true);
      doneRef.current = true;
      setTimeout(() => onDone(true), 1200);
      return;
    }
    const wc = wrongCount + 1;
    setWrongCount(wc);
    setIsJiggling(true);
    setTimeout(() => setIsJiggling(false), 500);
    if (wc === 1) setHintMsg(hint1);
    else if (wc === 2) setHintMsg(hint2);
    else if (wc >= 3) {
      doneRef.current = true;
      setTimeout(() => onDone(false), 1200);
    }
  }, [currentRight, leftWeight, solved, wrongCount, hint1, hint2, onDone]);

  const handleReset = useCallback(() => {
    if (solved || doneRef.current) return;
    setCurrentRight(rightInitial);
  }, [rightInitial, solved]);

  return (
    <div className="flex flex-col items-center w-full gap-3">
      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-white/60 px-4">{instruction}</p>

      {/* Scale SVG */}
      <div className={`w-full transition-transform ${isJiggling ? "animate-bounce" : ""}`}>
        <svg viewBox="0 0 300 200" className="w-full h-40 sm:h-48">
          {/* Base */}
          <path d="M130 180 L170 180 L150 120 Z" fill="#4B5563" />
          <rect x="110" y="180" width="80" height="10" rx="5" fill="#374151" />

          {/* Arm + pans */}
          <g
            style={{
              transform: `rotate(${tiltAngle}deg)`,
              transformOrigin: "150px 120px",
              transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <line x1="50" y1="120" x2="250" y2="120" stroke="#9CA3AF" strokeWidth="6" strokeLinecap="round" />

            {/* Left pan */}
            <g transform="translate(50, 120)">
              <line x1="0" y1="0" x2="-20" y2="40" stroke="#9CA3AF" strokeWidth="2" />
              <line x1="0" y1="0" x2="20" y2="40" stroke="#9CA3AF" strokeWidth="2" />
              <path d="M-30 40 L30 40 Q0 60 -30 40" fill={color} opacity="0.9" />
              <text x="0" y="35" fontSize="16" fontWeight="900" fill="white" textAnchor="middle">{leftWeight}</text>
            </g>

            {/* Right pan */}
            <g transform="translate(250, 120)">
              <line x1="0" y1="0" x2="-20" y2="40" stroke="#9CA3AF" strokeWidth="2" />
              <line x1="0" y1="0" x2="20" y2="40" stroke="#9CA3AF" strokeWidth="2" />
              <path d="M-30 40 L30 40 Q0 60 -30 40" fill={color} opacity="0.9" />
              <text x="0" y="35" fontSize="16" fontWeight="900" fill="white" textAnchor="middle">{currentRight}</text>
            </g>
          </g>

          {/* Pivot */}
          <circle cx="150" cy="120" r="6" fill="#1F2937" />
          <circle cx="150" cy="120" r="3" fill="#D1D5DB" />
        </svg>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-2 w-full">
        {[1, 5, 10].map((val) => (
          <button
            key={val}
            onClick={() => addWeight(val)}
            disabled={solved}
            className="py-2.5 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-xl font-bold text-white text-sm transition-all active:scale-95 disabled:opacity-40"
          >
            +{val} {unitIcon}
          </button>
        ))}
        <button
          onClick={handleReset}
          disabled={solved}
          className="py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-200 rounded-xl font-bold text-sm transition-all active:scale-95 disabled:opacity-40"
        >
          {t.reset}
        </button>
      </div>

      {/* Check button */}
      {!solved && (
        <button
          onClick={handleCheck}
          className="w-full py-3 rounded-xl font-extrabold text-white text-sm transition-all active:scale-95"
          style={{ backgroundColor: color }}
        >
          {wrongCount > 0 ? t.tryAgain : "Check!"}
        </button>
      )}

      {/* Status */}
      <AnimatePresence>
        {solved && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-sm font-bold text-emerald-400">
            {t.balanced} ✅
          </motion.div>
        )}
        {!solved && difference !== 0 && (
          <p className="text-xs text-white/50">
            {difference > 0 ? t.needMore : t.tooMuch}
          </p>
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

export default BalanceScale;
