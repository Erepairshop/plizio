"use client";
import { memo, useState, useCallback, useRef } from "react";
import { useLang } from "@/components/LanguageProvider";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

/**
 * VisualChallenge — wrapper that mounts Math Test visual components
 * in standalone mode for AstroMath missions.
 *
 * The visual component handles its own rendering, input, check button and feedback.
 * This wrapper only tracks correct/wrong across ROUNDS, shows progress bar,
 * and calls onDone when all rounds are complete.
 */

interface VisualChallengeProps {
  /** React element factory — receives (lang, onAnswer) and returns the visual component */
  renderVisual: (lang: string, onAnswer: (correct: boolean) => void) => React.ReactNode;
  rounds?: number;
  color: string;
  onDone: (score: number, total: number) => void;
}

const VisualChallenge = memo(function VisualChallenge({
  renderVisual,
  rounds = 5,
  color,
  onDone,
}: VisualChallengeProps) {
  const { lang } = useLang();
  const [round, setRound] = useState(0);
  const correctRef = useRef(0);
  const [roundKey, setRoundKey] = useState(0);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) correctRef.current += 1;
    else fireWrongAnswer({ question: `Visual Challenge round ${round + 1}`, wrongAnswer: "incorrect", correctAnswer: "correct", topic: "Visual Challenge", lang });

    // Wait for visual component's own feedback animation, then advance
    setTimeout(() => {
      const nextRound = round + 1;
      if (nextRound >= rounds) {
        onDone(correctRef.current, rounds);
      } else {
        setRound(nextRound);
        setRoundKey(k => k + 1);
      }
    }, 1500);
  }, [round, rounds, onDone]);

  return (
    <div className="flex flex-col gap-3 w-full max-w-sm mx-auto items-center">
      {/* Progress bar */}
      <div className="flex gap-1.5 w-full px-2">
        {Array.from({ length: rounds }).map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Round counter */}
      <div className="text-white/50 text-xs font-bold">
        {round + 1} / {rounds}
      </div>

      {/* Visual component — re-mounts on roundKey change for fresh random question */}
      <div key={roundKey} className="w-full">
        {renderVisual(lang, handleAnswer)}
      </div>
    </div>
  );
});

export default VisualChallenge;
