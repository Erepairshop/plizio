"use client";
import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { SpeakButton } from "@/lib/astromath-tts";

// Props interface
interface TenseRound {
  sentence: string;
  tenseLabel: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

interface TenseExplorerProps {
  rounds: TenseRound[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

// LABELS with ALL 4 languages
const LABELS = {
  en: {
    selectOption: "Select the correct verb form:",
    correct: "Correct!",
    wrong: "Try again",
    didYouKnow: "Did you know?",
    next: "Next",
    finish: "Finish",
    score: "Score",
  },
  hu: {
    selectOption: "Válaszd ki a helyes igealakot:",
    correct: "Helyes!",
    wrong: "Próbáld újra",
    didYouKnow: "Tudtál?",
    next: "Következő",
    finish: "Befejez",
    score: "Pontszám",
  },
  de: {
    selectOption: "Wähle die richtige Verbform:",
    correct: "Korrekt!",
    wrong: "Versuche es erneut",
    didYouKnow: "Wusstest du?",
    next: "Weiter",
    finish: "Beenden",
    score: "Punktzahl",
  },
  ro: {
    selectOption: "Selectează forma verbului corectă:",
    correct: "Corect!",
    wrong: "Încearcă din nou",
    didYouKnow: "Știai?",
    next: "Înainte",
    finish: "Termină",
    score: "Scor",
  },
} as const;

const TenseExplorer = memo(function TenseExplorer({
  rounds,
  color,
  onDone,
  lang: langProp,
}: TenseExplorerProps) {
  const { lang: ctxLang } = useLang();
  const lang = langProp || ctxLang;
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const wrongCountRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [feedbackType, setFeedbackType] = useState<"correct" | "wrong" | null>(null);
  const [showDiscovery, setShowDiscovery] = useState(false);

  const totalRounds = rounds.length;
  const currentRound = rounds[currentIndex];
  const isAnswered = feedbackType !== null;

  // Handle option selection
  const handleSelectOption = useCallback(
    (index: number) => {
      if (isAnswered) return;
      setSelectedIndex(index);

      if (index === currentRound.correctIndex) {
        setFeedbackType("correct");
        setShowDiscovery(true);
      } else {
        wrongCountRef.current += 1;
        setFeedbackType("wrong");
      }
    },
    [currentRound.correctIndex, isAnswered]
  );

  // Move to next round
  const handleNext = useCallback(() => {
    if (currentIndex < totalRounds - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedIndex(null);
      setFeedbackType(null);
    } else {
      // All rounds done — calculate final score
      const finalScore = Math.max(1, totalRounds - Math.min(wrongCountRef.current, totalRounds - 1));
      onDone(finalScore, totalRounds);
    }
  }, [currentIndex, totalRounds, onDone]);

  // Auto-dismiss discovery card after 2.5s
  const discoveryTimeout = useRef<NodeJS.Timeout | null>(null);
  useMemo(() => {
    if (showDiscovery) {
      discoveryTimeout.current = setTimeout(() => setShowDiscovery(false), 2500);
    }
    return () => {
      if (discoveryTimeout.current) clearTimeout(discoveryTimeout.current);
    };
  }, [showDiscovery]);

  const COLORS = {
    correct: "#00FF88",
    wrong: "#FF2D78",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#060614] to-black flex items-center justify-center px-4 py-6">
      <motion.div
        className="max-w-lg w-full space-y-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Progress bar */}
        <div className="flex gap-1.5 justify-center">
          {Array.from({ length: totalRounds }).map((_, i) => (
            <motion.div
              key={i}
              className="h-2 rounded-full transition-all"
              style={{
                width: i < currentIndex ? 24 : 16,
                backgroundColor:
                  i < currentIndex
                    ? color
                    : i === currentIndex
                    ? color + "80"
                    : "rgba(255, 255, 255, 0.1)",
              }}
            />
          ))}
        </div>

        {/* Tense badge */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <div
            className="px-4 py-2 rounded-2xl font-bold text-sm border-2 text-white"
            style={{
              borderColor: color,
              backgroundColor: `${color}20`,
            }}
          >
            {currentRound.tenseLabel}
          </div>
        </motion.div>

        {/* Sentence with blank */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          <p className="text-white/60 text-sm font-medium uppercase tracking-wide">
            {t.selectOption}
          </p>
          <div className="relative text-lg md:text-xl font-semibold text-white/90 leading-relaxed px-4 py-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="absolute top-3 right-3">
              <SpeakButton
                text={currentRound.sentence.replace("___", currentRound.options[currentRound.correctIndex])}
                lang={lang}
                size={16}
              />
            </div>
            {currentRound.sentence.split("___").map((part, idx, arr) => (
              <span key={idx}>
                {part}
                {idx < arr.length - 1 && (
                  <span
                    className="font-black px-2 py-1 rounded-lg border-2 mx-1 inline-block"
                    style={{
                      borderColor: color,
                      backgroundColor: `${color}20`,
                      color: color,
                    }}
                  >
                    ?
                  </span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Options grid */}
        <div className="grid grid-cols-2 gap-3">
          <AnimatePresence mode="wait">
            {currentRound.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleSelectOption(index)}
                disabled={isAnswered}
                className="relative py-4 px-3 rounded-2xl font-bold text-sm md:text-base border-2 transition-all overflow-hidden group"
                style={{
                  borderColor:
                    selectedIndex === index
                      ? feedbackType === "correct"
                        ? COLORS.correct
                        : feedbackType === "wrong"
                        ? COLORS.wrong
                        : color
                      : "rgba(255, 255, 255, 0.2)",
                  backgroundColor:
                    selectedIndex === index
                      ? feedbackType === "correct"
                        ? `${COLORS.correct}20`
                        : feedbackType === "wrong"
                        ? `${COLORS.wrong}20`
                        : `${color}10`
                      : "rgba(255, 255, 255, 0.05)",
                  color:
                    selectedIndex === index
                      ? feedbackType === "correct"
                        ? COLORS.correct
                        : feedbackType === "wrong"
                        ? COLORS.wrong
                        : color
                      : "rgba(255, 255, 255, 0.7)",
                }}
                whileHover={!isAnswered ? { scale: 1.05 } : {}}
                whileTap={!isAnswered ? { scale: 0.95 } : {}}
              >
                <span className="relative z-10">{option}</span>

                {/* Feedback icon */}
                <AnimatePresence>
                  {selectedIndex === index && feedbackType && (
                    <motion.div
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ type: "spring", bounce: 0.6, duration: 0.4 }}
                    >
                      {feedbackType === "correct" ? (
                        <Check size={20} color={COLORS.correct} strokeWidth={3} />
                      ) : (
                        <X size={20} color={COLORS.wrong} strokeWidth={3} />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Feedback message */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p
                className="text-sm md:text-base font-bold"
                style={{
                  color: feedbackType === "correct" ? COLORS.correct : COLORS.wrong,
                }}
              >
                {feedbackType === "correct" ? t.correct : t.wrong}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Discovery card */}
        <AnimatePresence>
          {showDiscovery && currentRound.explanation && (
            <motion.div
              className="p-4 rounded-2xl border-2 border-purple-500/40 bg-purple-500/10 space-y-2"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-purple-300 text-xs font-bold uppercase tracking-wide">
                {t.didYouKnow}
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                {currentRound.explanation}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next button */}
        <AnimatePresence>
          {isAnswered && (
            <motion.button
              onClick={handleNext}
              className="w-full py-3 rounded-2xl font-black text-sm md:text-base text-white border-0 transition-all hover:brightness-110"
              style={{
                background: `linear-gradient(135deg, ${color}dd, ${color}aa)`,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {currentIndex < totalRounds - 1 ? t.next : t.finish}
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
});

export default TenseExplorer;
