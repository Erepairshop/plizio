"use client";
import { useState, useCallback, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ──────────────────────────────────────────────────── */

interface Step {
  instruction: string;   // e.g. "Subtract 3 from both sides"
  choices: number[];     // 4 options
  answer: number;        // correct choice
  equation: string;      // equation state AFTER this step, e.g. "2x = 8"
}

interface Props {
  equation: string;        // initial equation, e.g. "2x + 3 = 11"
  steps: Step[];           // 2-3 solving steps
  finalAnswer: number;     // final value of x
  variable?: string;       // default "x"
  color: string;
  instruction: string;     // already translated
  hint1: string;
  hint2: string;
  lang: string;
  onDone: (correct: boolean) => void;
}

/* ── Labels ─────────────────────────────────────────────────── */

const L: Record<string, Record<string, string>> = {
  en: {
    solveStep: "Solve step by step",
    correct: "Correct!",
    wrong: "Not quite — try again!",
    great: "Well done!",
    hint: "Hint",
    next: "Next step",
    solved: "Solved!",
  },
  de: {
    solveStep: "Löse Schritt für Schritt",
    correct: "Richtig!",
    wrong: "Nicht ganz — versuche es nochmal!",
    great: "Super gemacht!",
    hint: "Hinweis",
    next: "Nächster Schritt",
    solved: "Gelöst!",
  },
  hu: {
    solveStep: "Oldd meg lépésről lépésre",
    correct: "Helyes!",
    wrong: "Nem egészen — próbáld újra!",
    great: "Szép munka!",
    hint: "Tipp",
    next: "Következő lépés",
    solved: "Megoldva!",
  },
  ro: {
    solveStep: "Rezolvă pas cu pas",
    correct: "Corect!",
    wrong: "Nu chiar — încearcă din nou!",
    great: "Bravo!",
    hint: "Indiciu",
    next: "Pasul următor",
    solved: "Rezolvat!",
  },
};

/* ── Component ──────────────────────────────────────────────── */

const EquationSolver = memo(function EquationSolver({
  equation, steps, finalAnswer, variable = "x",
  color, instruction, hint1, hint2, lang, onDone,
}: Props) {
  const t = L[lang] ?? L.en;

  const [stepIdx, setStepIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [solved, setSolved] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const wrongCount = useRef(0);
  const totalCorrect = useRef(0);

  const currentStep = steps[stepIdx];
  const currentEquation = stepIdx === 0 ? equation : steps[stepIdx - 1].equation;

  const handleChoice = useCallback((val: number) => {
    if (feedback) return;
    setSelected(val);
    if (val === currentStep.answer) {
      totalCorrect.current++;
      setFeedback("correct");
      setTimeout(() => {
        if (stepIdx + 1 >= steps.length) {
          setSolved(true);
          setTimeout(() => onDone(wrongCount.current <= 1), 1200);
        } else {
          setStepIdx(i => i + 1);
          setSelected(null);
          setFeedback(null);
          setHintLevel(0);
        }
      }, 1000);
    } else {
      wrongCount.current++;
      setFeedback("wrong");
      setTimeout(() => {
        setSelected(null);
        setFeedback(null);
      }, 1000);
    }
  }, [feedback, currentStep, stepIdx, steps.length, onDone]);

  const showHint = useCallback(() => {
    setHintLevel(h => Math.min(h + 1, 2));
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-3 px-2">
      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-white/50 px-4">{instruction}</p>

      {/* Current equation display */}
      <motion.div
        key={stepIdx}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative px-6 py-3 rounded-2xl border-2"
        style={{ borderColor: `${color}44`, background: `${color}11` }}
      >
        <span className="text-2xl font-black text-white tracking-wide">
          {solved ? `${variable} = ${finalAnswer}` : currentEquation}
        </span>
      </motion.div>

      {/* Step progress dots */}
      <div className="flex gap-1.5">
        {steps.map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full transition-colors"
            style={{
              background: i < stepIdx ? color : i === stepIdx ? `${color}cc` : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>

      {solved ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <p className="text-lg font-black" style={{ color }}>{t.solved}</p>
          <p className="text-3xl font-black text-white mt-1">{variable} = {finalAnswer}</p>
        </motion.div>
      ) : (
        <>
          {/* Step instruction */}
          <p className="text-sm font-bold text-white/70 text-center">{currentStep.instruction}</p>

          {/* Choices */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
            {currentStep.choices.map((val) => {
              const isSelected = selected === val;
              const isCorrect = val === currentStep.answer;
              let bg = "rgba(255,255,255,0.06)";
              let border = "rgba(255,255,255,0.15)";
              let textCol = "rgba(255,255,255,0.85)";

              if (feedback && isSelected) {
                if (feedback === "correct") {
                  bg = "#22c55e22"; border = "#22c55e"; textCol = "#22c55e";
                } else {
                  bg = "#ef444422"; border = "#ef4444"; textCol = "#ef4444";
                }
              }
              if (feedback === "wrong" && isCorrect) {
                bg = "#22c55e11"; border = "#22c55e66";
              }

              return (
                <motion.button
                  key={val}
                  onClick={() => handleChoice(val)}
                  disabled={!!feedback}
                  className="py-3 rounded-xl font-extrabold text-lg border-2 transition-colors"
                  style={{ background: bg, borderColor: border, color: textCol }}
                  whileTap={!feedback ? { scale: 0.95 } : {}}
                >
                  {val}
                </motion.button>
              );
            })}
          </div>

          {/* Hint button */}
          <AnimatePresence>
            {hintLevel < 2 && (
              <motion.button
                onClick={showHint}
                className="text-xs font-bold px-3 py-1 rounded-full"
                style={{ color: `${color}aa`, background: `${color}15` }}
              >
                💡 {t.hint}
              </motion.button>
            )}
          </AnimatePresence>
          {hintLevel >= 1 && <p className="text-xs text-white/40 text-center px-4">{hint1}</p>}
          {hintLevel >= 2 && <p className="text-xs text-white/40 text-center px-4">{hint2}</p>}
        </>
      )}
    </div>
  );
});

export default EquationSolver;
