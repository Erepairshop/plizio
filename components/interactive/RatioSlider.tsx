"use client";
import { useState, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ──────────────────────────────────────────────────── */

interface Props {
  baseValue: number;
  basePrice: number;
  targetValue: number;
  targetPrice: number;
  unitName?: string;
  currency?: string;
  tolerance?: number; // how close is acceptable (default 0 = exact)
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
    base: "Example",
    task: "Find the answer",
    check: "Check!",
    great: "Correct!",
    tryAgain: "Try again",
    tooLow: "Too low!",
    tooHigh: "Too high!",
  },
  de: {
    base: "Beispiel",
    task: "Finde die Antwort",
    check: "Prüfen!",
    great: "Richtig!",
    tryAgain: "Nochmal",
    tooLow: "Zu niedrig!",
    tooHigh: "Zu hoch!",
  },
  hu: {
    base: "Példa",
    task: "Találd meg a választ",
    check: "Ellenőrzés!",
    great: "Helyes!",
    tryAgain: "Próbáld újra",
    tooLow: "Túl alacsony!",
    tooHigh: "Túl magas!",
  },
  ro: {
    base: "Exemplu",
    task: "Găsește răspunsul",
    check: "Verifică!",
    great: "Corect!",
    tryAgain: "Încearcă din nou",
    tooLow: "Prea mic!",
    tooHigh: "Prea mare!",
  },
};

/* ── Component ──────────────────────────────────────────────── */

const RatioSlider = memo(function RatioSlider({
  baseValue,
  basePrice,
  targetValue,
  targetPrice,
  unitName = "",
  currency = "",
  tolerance = 0,
  color,
  instruction,
  hint1,
  hint2,
  lang,
  onDone,
}: Props) {
  const t = L[lang] || L.en;
  const maxRange = Math.ceil(targetPrice * 1.6);
  const [guess, setGuess] = useState(0);
  const [solved, setSolved] = useState(false);
  const [wrongCount, setWrongCount] = useState(0);
  const [hintMsg, setHintMsg] = useState("");
  const [feedback, setFeedback] = useState("");
  const doneRef = useRef(false);

  const isClose = Math.abs(guess - targetPrice) <= tolerance;

  const handleCheck = useCallback(() => {
    if (solved || doneRef.current) return;
    if (isClose) {
      setSolved(true);
      doneRef.current = true;
      setFeedback("");
      setTimeout(() => onDone(true), 1000);
    } else {
      const wc = wrongCount + 1;
      setWrongCount(wc);
      setFeedback(guess < targetPrice ? t.tooLow : t.tooHigh);
      if (wc === 1) setHintMsg(hint1);
      else if (wc === 2) setHintMsg(hint2);
      else if (wc >= 3) {
        doneRef.current = true;
        setGuess(targetPrice);
        setTimeout(() => onDone(false), 1500);
      }
    }
  }, [guess, targetPrice, isClose, solved, wrongCount, hint1, hint2, t, onDone]);

  const basePct = (basePrice / maxRange) * 100;
  const guessPct = (guess / maxRange) * 100;

  return (
    <div className="flex flex-col w-full gap-4">
      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-white/60 px-4">{instruction}</p>

      <div className="flex flex-col gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
        {/* Base ratio reference */}
        <div>
          <div className="flex justify-between items-end mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">{t.base}</span>
            <span className="text-sm font-mono font-bold text-white/70">
              {baseValue} {unitName} = {basePrice} {currency}
            </span>
          </div>
          <div className="h-3 bg-black/20 rounded-full overflow-hidden">
            <div className="h-full opacity-40 transition-all" style={{ width: `${basePct}%`, backgroundColor: color }} />
          </div>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* Target slider */}
        <div>
          <div className="flex justify-between items-end mb-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">{t.task}</span>
            <span className="text-lg font-mono font-black" style={{ color }}>
              {targetValue} {unitName} = {guess} {currency}
            </span>
          </div>

          <div className="relative w-full h-8 flex items-center">
            <input
              type="range"
              min="0"
              max={maxRange}
              step="1"
              value={guess}
              onChange={(e) => { if (!solved) setGuess(Number(e.target.value)); }}
              disabled={solved}
              className="absolute z-20 w-full opacity-0 cursor-pointer h-full disabled:cursor-default"
            />
            {/* Visual track */}
            <div className="absolute z-10 w-full h-3.5 bg-black/20 rounded-full overflow-hidden">
              <div className="h-full transition-all duration-75" style={{ width: `${guessPct}%`, backgroundColor: color }} />
            </div>
            {/* Thumb */}
            <div
              className="absolute z-10 w-5 h-5 bg-white rounded-full shadow-lg border-2 pointer-events-none transition-all duration-75"
              style={{ left: `calc(${guessPct}% - 10px)`, borderColor: color }}
            />
          </div>

          <div className="flex justify-between text-[9px] font-bold text-white/30 mt-1 px-0.5">
            <span>0</span>
            <span>{maxRange}</span>
          </div>
        </div>
      </div>

      {/* Check button */}
      {!solved && (
        <button
          onClick={handleCheck}
          className="w-full py-3 rounded-xl font-extrabold text-white text-sm transition-all active:scale-95"
          style={{ backgroundColor: color }}
        >
          {wrongCount > 0 ? t.tryAgain : t.check}
        </button>
      )}

      {/* Feedback */}
      <AnimatePresence>
        {solved && (
          <motion.p initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-sm font-bold text-emerald-400 text-center">
            {t.great} ✅
          </motion.p>
        )}
        {feedback && !solved && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-300/80 text-center">
            {feedback}
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

export default RatioSlider;
