"use client";

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Lightbulb } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

interface GapRound {
  sentence: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  hint?: string;
}

interface FillGapExplorerProps {
  rounds: GapRound[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

const LABELS = {
  en: {
    fillGap: "Fill in the blank!",
    hint: "Hint:",
    correct: "Correct!",
    tryAgain: "Try again!",
    learnFromThis: "Learn from this!",
    explanation: "Why?",
    next: "Next",
    done: "Done!",
    didYouKnow: "Did you know?",
  },
  hu: {
    fillGap: "Töltsd ki az üres helyet!",
    hint: "Tipp:",
    correct: "Helyes!",
    tryAgain: "Próbáld újra!",
    learnFromThis: "Tanulj ebből!",
    explanation: "Miért?",
    next: "Tovább",
    done: "Kész!",
    didYouKnow: "Tudtad?",
  },
  de: {
    fillGap: "Fülle die Lücke!",
    hint: "Hinweis:",
    correct: "Richtig!",
    tryAgain: "Versuch nochmal!",
    learnFromThis: "Lerne daraus!",
    explanation: "Warum?",
    next: "Weiter",
    done: "Fertig!",
    didYouKnow: "Wusstest du?",
  },
  ro: {
    fillGap: "Completează spațiul gol!",
    hint: "Indiciu:",
    correct: "Corect!",
    tryAgain: "Încearcă din nou!",
    learnFromThis: "Învață din asta!",
    explanation: "De ce?",
    next: "Următorul",
    done: "Gata!",
    didYouKnow: "Știai?",
  },
} as const;

const FillGapExplorer = memo(function FillGapExplorer({
  rounds,
  color,
  onDone,
  lang: langProp,
}: FillGapExplorerProps) {
  const { lang: contextLang } = useLang();
  const lang = langProp || contextLang;
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const [roundIdx, setRoundIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [flashIdx, setFlashIdx] = useState<number | null>(null);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [currentDiscovery, setCurrentDiscovery] = useState("");

  const wrongCountRef = useRef(0);

  const round = rounds[roundIdx];
  const correctAnswer = round.options[round.correctIndex];
  const isCorrect = selected !== null && selected === round.correctIndex;

  const handleSelect = useCallback(
    (optIdx: number) => {
      if (confirmed) return;
      setSelected(optIdx);
      setConfirmed(true);

      if (optIdx === round.correctIndex) {
        setFlashIdx(optIdx);
        setTimeout(() => setFlashIdx(null), 800);
      } else {
        wrongCountRef.current += 1;
        setWrongAttempts((prev) => prev + 1);
        fireWrongAnswer({
          question: round.sentence,
          wrongAnswer: round.options[optIdx],
          correctAnswer: correctAnswer,
          topic: "Fill in the Gap",
          lang: lang as string,
        });
        setFlashIdx(optIdx);
        setTimeout(() => setFlashIdx(null), 800);
      }
    },
    [confirmed, round.correctIndex]
  );

  const handleNext = useCallback(() => {
    if (roundIdx + 1 >= rounds.length) {
      const score = Math.max(
        1,
        rounds.length - Math.min(wrongCountRef.current, rounds.length - 1)
      );
      onDone(score, rounds.length);
    } else {
      // Show discovery card before advancing
      setShowDiscovery(true);
      const discovery =
        round.explanation ||
        (lang === "hu"
          ? "Jó volt! Lépj tovább a következő kérdésre."
          : lang === "de"
            ? "Gut gemacht! Fahre mit der nächsten Frage fort."
            : lang === "ro"
              ? "Bun lucru! Treci la următoarea întrebare."
              : "Well done! Move on to the next question.");
      setCurrentDiscovery(discovery);

      // Auto-advance after 2.5s
      setTimeout(() => {
        setRoundIdx((i) => i + 1);
        setSelected(null);
        setConfirmed(false);
        setWrongAttempts(0);
        setShowExplanation(false);
        setShowDiscovery(false);
      }, 2500);
    }
  }, [roundIdx, rounds.length, onDone, round, lang]);

  const handleShowExplanation = useCallback(() => {
    setShowExplanation(!showExplanation);
  }, [showExplanation]);

  if (!round) return null;

  // Split sentence by gap
  const gapIdx = round.sentence.indexOf("___");
  const beforeGap = round.sentence.substring(0, gapIdx);
  const afterGap = round.sentence.substring(gapIdx + 3);

  // Auto-reveal after 2 wrong attempts
  const autoRevealed = wrongAttempts >= 2;
  const showAnswer = isCorrect || autoRevealed;

  return (
    <div className="flex flex-col gap-6 w-full max-w-lg mx-auto px-4 py-6">
      {/* Progress */}
      <div className="flex gap-1.5">
        {rounds.map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 h-2 rounded-full transition-all"
            style={{
              background:
                i < roundIdx ? "#00FF88" : i === roundIdx ? color : "rgba(255,255,255,0.12)",
            }}
          />
        ))}
      </div>

      {/* Instruction */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-sm font-semibold text-white/70"
      >
        {t.fillGap}
      </motion.div>

      {/* Sentence with gap */}
      <AnimatePresence mode="wait">
        <motion.div
          key={roundIdx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl p-6 min-h-[100px] flex items-center justify-center"
          style={{ background: `${color}12`, border: `1.5px solid ${color}30` }}
        >
          <div className="absolute top-2 right-2">
            <SpeakButton text={round.sentence.replace("___", correctAnswer)} lang={lang ?? "en"} size={16} />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-lg font-medium text-white leading-relaxed">
            <span>{beforeGap}</span>
            <motion.div
              animate={confirmed ? {} : { scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="px-4 py-2 rounded-lg border-b-2 border-dashed min-w-[120px] text-center font-bold"
              style={{
                borderColor: color,
                color: showAnswer ? "#00FF88" : "rgba(255,255,255,0.5)",
              }}
            >
              {showAnswer ? correctAnswer : "___"}
            </motion.div>
            <span>{afterGap}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Hint */}
      {round.hint && !confirmed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xs font-semibold italic text-white/50 px-4"
        >
          💡 {t.hint} {round.hint}
        </motion.div>
      )}

      {/* Discovery card */}
      {showDiscovery && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 text-center"
          style={{
            background: "rgba(180,77,255,0.1)",
            border: "1.5px solid rgba(180,77,255,0.3)",
          }}
        >
          <p className="text-xs font-bold uppercase text-purple-400 mb-1">
            💡 {t.didYouKnow}
          </p>
          <p className="text-sm font-semibold text-white/80">{currentDiscovery}</p>
        </motion.div>
      )}

      {/* Options */}
      {!showAnswer && (
        <div className="grid grid-cols-2 gap-2.5">
          {round.options.map((opt, i) => {
            const isThis = selected === i;
            const isRight = i === round.correctIndex;
            const isFlashing = flashIdx === i;
            let bg = "rgba(255,255,255,0.06)";
            let border = "rgba(255,255,255,0.12)";
            let textColor = "rgba(255,255,255,0.85)";

            if (isFlashing) {
              if (isRight) {
                bg = "rgba(0,255,136,0.35)";
                border = "#00FF88";
                textColor = "#00FF88";
              } else {
                bg = "rgba(255,45,120,0.35)";
                border = "#FF2D78";
                textColor = "#FF2D78";
              }
            } else if (confirmed) {
              if (isRight) {
                bg = "rgba(0,255,136,0.2)";
                border = "#00FF88";
                textColor = "#00FF88";
              } else if (isThis && !isRight) {
                bg = "rgba(255,50,50,0.15)";
                border = "#FF4444";
                textColor = "#FF6666";
              }
            } else if (isThis) {
              bg = `${color}30`;
              border = color;
              textColor = "#fff";
            }

            return (
              <motion.button
                key={i}
                onClick={() => !confirmed && handleSelect(i)}
                className="py-3 px-3 rounded-2xl font-bold text-sm text-center transition-colors"
                style={{ background: bg, border: `2px solid ${border}`, color: textColor }}
                whileTap={!confirmed ? { scale: 0.96 } : {}}
                animate={confirmed && isThis && !isRight ? { x: [-4, 4, -4, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                {opt}
              </motion.button>
            );
          })}
        </div>
      )}

      {/* Teaching feedback */}
      <AnimatePresence>
        {confirmed && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2 items-center"
          >
            <div className="flex items-center gap-2">
              {isCorrect || autoRevealed ? (
                <>
                  <Check size={18} className="text-green-400" />
                  <span className="font-black text-base text-green-400">{t.correct}</span>
                </>
              ) : (
                <>
                  <X size={18} className="text-red-400" />
                  <span className="font-black text-base text-red-400">
                    {wrongAttempts < 2 ? t.tryAgain : t.learnFromThis}
                  </span>
                </>
              )}
            </div>

            {/* Explanation button */}
            {round.explanation && (
              <motion.button
                onClick={handleShowExplanation}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors"
                style={{
                  background: `${color}20`,
                  color: color,
                }}
                whileTap={{ scale: 0.96 }}
              >
                <Lightbulb size={14} />
                {t.explanation}
              </motion.button>
            )}

            {/* Explanation text */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="rounded-lg p-3 text-xs font-medium text-white/80 text-center bg-white/5 border border-white/10"
                >
                  {round.explanation}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next button */}
            <motion.button
              onClick={handleNext}
              className="w-full py-3 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base mt-2"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}
            >
              {roundIdx + 1 >= rounds.length ? t.done : t.next}
              {roundIdx + 1 < rounds.length && <span>→</span>}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default FillGapExplorer;
