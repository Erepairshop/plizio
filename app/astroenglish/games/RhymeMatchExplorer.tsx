"use client";
import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { SpeakButton } from "@/lib/astromath-tts";

// LABELS with ALL 4 languages (en, hu, de, ro)
const LABELS = {
  en: {
    title: "Rhyme Match",
    question: "What rhymes with",
    correct: "Correct!",
    wrong: "Not quite!",
    didYouKnow: "Did you know?",
    rhymePattern: "Rhyme pattern",
    next: "Next",
    tryAgain: "Try again",
    complete: "Complete!",
  },
  hu: {
    title: "Rímek párosítása",
    question: "Mi rimel erre",
    correct: "Helyes!",
    wrong: "Nem egészen!",
    didYouKnow: "Tudtad?",
    rhymePattern: "Rím mintázat",
    next: "Tovább",
    tryAgain: "Próbáld újra",
    complete: "Kész!",
  },
  de: {
    title: "Reim-Matching",
    question: "Was reimt sich auf",
    correct: "Richtig!",
    wrong: "Nicht ganz!",
    didYouKnow: "Wusstest du?",
    rhymePattern: "Reimschema",
    next: "Weiter",
    tryAgain: "Nochmal",
    complete: "Fertig!",
  },
  ro: {
    title: "Potrivire Rime",
    question: "Ce rimează cu",
    correct: "Corect!",
    wrong: "Nu chiar!",
    didYouKnow: "Știai?",
    rhymePattern: "Modelul rimei",
    next: "Următoarea",
    tryAgain: "Încearcă din nou",
    complete: "Gata!",
  },
} as const;

export interface RhymeRound {
  targetWord: string;
  options: string[];
  correctIndex: number;
  rhymePattern?: string;
  explanation?: string;
}

interface RhymeMatchExplorerProps {
  rounds: RhymeRound[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

const RhymeMatchExplorer = memo(function RhymeMatchExplorer({
  rounds,
  color,
  onDone,
  lang: langProp,
}: RhymeMatchExplorerProps) {
  const { lang: ctxLang } = useLang();
  const lang = langProp || ctxLang;
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [feedbackType, setFeedbackType] = useState<"correct" | "wrong" | null>(null);
  const [showDiscovery, setShowDiscovery] = useState(false);

  const wrongCountRef = useRef(0);

  const currentRound = useMemo(() => rounds[currentIndex], [rounds, currentIndex]);
  const totalRounds = rounds.length;
  const isLastRound = currentIndex === totalRounds - 1;

  const handleSelectOption = useCallback(
    (index: number) => {
      if (selectedIndex !== null || feedbackType) return;

      setSelectedIndex(index);

      if (index === currentRound.correctIndex) {
        setFeedbackType("correct");
        setShowDiscovery(true);
      } else {
        setFeedbackType("wrong");
        wrongCountRef.current += 1;
      }
    },
    [selectedIndex, feedbackType, currentRound.correctIndex]
  );

  const handleContinue = useCallback(() => {
    if (isLastRound) {
      const score = Math.max(1, totalRounds - Math.min(wrongCountRef.current, totalRounds - 1));
      onDone(score, totalRounds);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedIndex(null);
      setFeedbackType(null);
      setShowDiscovery(false);
    }
  }, [isLastRound, totalRounds, onDone]);

  const optionButtonClasses = (index: number) => {
    const base =
      "w-full py-3 px-4 rounded-2xl font-bold text-lg border-2 transition-all cursor-pointer";
    const isSelected = index === selectedIndex;
    const isCorrect = index === currentRound.correctIndex;

    if (!isSelected) {
      return `${base} bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30`;
    }

    if (feedbackType === "correct" && isCorrect) {
      return `${base} bg-[#00FF88]/20 border-[#00FF88] text-[#00FF88]`;
    }

    if (feedbackType === "wrong" && isSelected) {
      return `${base} bg-[#FF2D78]/20 border-[#FF2D78] text-[#FF2D78]`;
    }

    return base;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A1A] to-[#15101B] flex flex-col items-center justify-center px-4 py-6">
      {/* Progress dots */}
      <div className="flex gap-1.5 mb-8">
        {Array.from({ length: totalRounds }).map((_, idx) => (
          <motion.div
            key={idx}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-white w-8" : "bg-white/30 w-2"
            }`}
            style={{ backgroundColor: idx < currentIndex ? color : undefined }}
          />
        ))}
      </div>

      {/* Main card */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="max-w-lg w-full"
      >
        {/* Question */}
        <div className="text-center mb-8">
          <p className="text-white/60 text-sm font-semibold mb-3">{t.question}</p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              className="rounded-3xl bg-white/5 border-2 px-8 py-4"
              style={{ borderColor: color }}
            >
              <p className="text-4xl font-black text-white">{currentRound.targetWord}</p>
            </motion.div>
            <SpeakButton text={currentRound.targetWord} lang={lang ?? "en"} size={16} />
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentRound.options.map((option, idx) => (
            <motion.button
              key={idx}
              className={optionButtonClasses(idx)}
              onClick={() => handleSelectOption(idx)}
              whileHover={{ scale: selectedIndex === null ? 1.02 : 1 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {feedbackType && idx === selectedIndex && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {feedbackType === "correct" ? (
                      <Check size={24} className="text-[#00FF88]" />
                    ) : (
                      <X size={24} className="text-[#FF2D78]" />
                    )}
                  </motion.div>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Feedback message */}
        <AnimatePresence>
          {feedbackType && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className={`text-center mb-6 font-bold text-lg py-3 rounded-2xl ${
                feedbackType === "correct"
                  ? "bg-[#00FF88]/20 text-[#00FF88]"
                  : "bg-[#FF2D78]/20 text-[#FF2D78]"
              }`}
            >
              {feedbackType === "correct" ? t.correct : t.wrong}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Discovery card */}
        <AnimatePresence>
          {showDiscovery && currentRound.rhymePattern && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              onAnimationComplete={() => {
                setTimeout(() => setShowDiscovery(false), 2500);
              }}
              className="bg-purple-500/10 border border-purple-400/30 rounded-2xl p-4 mb-6"
            >
              <p className="text-xs font-bold text-purple-300 mb-2 uppercase">{t.didYouKnow}</p>
              <p className="text-white/80 text-sm font-semibold">
                {t.rhymePattern}: <span className="text-[#B44DFF]">{currentRound.rhymePattern}</span>
              </p>
              {currentRound.explanation && (
                <p className="text-white/60 text-xs mt-2 italic">{currentRound.explanation}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Continue/Next button */}
        <AnimatePresence>
          {feedbackType && !showDiscovery && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={handleContinue}
              className="w-full py-3 px-4 rounded-2xl font-black text-lg text-white border-2 transition-all"
              style={{
                background: `linear-gradient(135deg, ${color}40 0%, ${color}20 100%)`,
                borderColor: color,
              }}
            >
              {isLastRound ? t.complete : t.next}
            </motion.button>
          )}
        </AnimatePresence>

        {/* Retry message if wrong and not showing discovery */}
        <AnimatePresence>
          {feedbackType === "wrong" && !showDiscovery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-white/60 text-sm font-semibold mt-4"
            >
              {t.tryAgain}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
});

export default RhymeMatchExplorer;
