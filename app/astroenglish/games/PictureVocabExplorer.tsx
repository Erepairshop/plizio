"use client";
import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

// LABELS with ALL 4 languages
const LABELS = {
  en: {
    title: "Picture Vocabulary",
    description: "Tap the correct word for the picture",
    correct: "Correct!",
    wrong: "Wrong!",
    tryAgain: "Try again",
    nextWord: "Next word",
    finished: "All done!",
    score: "Score",
    didYouKnow: "Did you know?",
    example: "Example:",
  },
  hu: {
    title: "Képszókincs",
    description: "Koppints a képhez tartozó szóra",
    correct: "Helyes!",
    wrong: "Rossz!",
    tryAgain: "Próbálkozz újra",
    nextWord: "Következő szó",
    finished: "Kész!",
    score: "Pont",
    didYouKnow: "Tudtad-e?",
    example: "Példa:",
  },
  de: {
    title: "Bild-Wortschatz",
    description: "Tippe das richtige Wort für das Bild",
    correct: "Richtig!",
    wrong: "Falsch!",
    tryAgain: "Versuchen Sie erneut",
    nextWord: "Nächstes Wort",
    finished: "Fertig!",
    score: "Punkte",
    didYouKnow: "Wusstest du?",
    example: "Beispiel:",
  },
  ro: {
    title: "Vocabular în imagini",
    description: "Apasă cuvântul corect pentru imagine",
    correct: "Corect!",
    wrong: "Greșit!",
    tryAgain: "Încearcă din nou",
    nextWord: "Cuvântul următor",
    finished: "Gata!",
    score: "Puncte",
    didYouKnow: "Știai că?",
    example: "Exemplu:",
  },
} as const;

interface VocabRound {
  emoji: string;
  word: string;
  options: string[];
  correctIndex: number;
  sentence?: string;
  explanation?: string;
}

interface PictureVocabExplorerProps {
  rounds: VocabRound[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

const PictureVocabExplorer = memo(function PictureVocabExplorer({
  rounds,
  color,
  onDone,
  lang: langProp,
}: PictureVocabExplorerProps) {
  const { lang: ctxLang } = useLang();
  const lang = langProp || ctxLang;
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const TOTAL = rounds.length;
  const wrongCountRef = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [finished, setFinished] = useState(false);

  const currentRound = rounds[currentIndex];
  const isCorrectSelected = selectedIndex === currentRound.correctIndex;

  // Handle option click
  const handleOptionClick = useCallback(
    (index: number) => {
      if (selectedIndex !== null) return; // Already selected
      setSelectedIndex(index);

      if (index === currentRound.correctIndex) {
        setFeedback("correct");
        // Show discovery card for 2.5s
        setTimeout(() => {
          setShowDiscovery(true);
          setTimeout(() => {
            setShowDiscovery(false);
          }, 2500);
        }, 400);
      } else {
        setFeedback("wrong");
        wrongCountRef.current++;
        fireWrongAnswer({
          question: `${t.description}: ${currentRound.emoji}`,
          wrongAnswer: currentRound.options[index],
          correctAnswer: currentRound.options[currentRound.correctIndex],
          topic: "Picture Vocabulary",
          lang: lang as string,
        });
      }
    },
    [selectedIndex, currentRound.correctIndex]
  );

  // Handle next
  const handleNext = useCallback(() => {
    if (currentIndex < TOTAL - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedIndex(null);
      setFeedback(null);
    } else {
      // Game finished
      const finalScore = Math.max(1, TOTAL - Math.min(wrongCountRef.current, TOTAL - 1));
      setFinished(true);
      setTimeout(() => {
        onDone(finalScore, TOTAL);
      }, 800);
    }
  }, [currentIndex, TOTAL, onDone]);

  // Progress bar
  const progressPercent = useMemo(() => {
    return ((currentIndex + 1) / TOTAL) * 100;
  }, [currentIndex, TOTAL]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: color, opacity: 0.15 }}
        />
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-40"
        style={{ backgroundColor: color }}
        animate={{ width: `${progressPercent}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Main container */}
      <div className="relative z-10 max-w-lg mx-auto px-4 py-6 min-h-screen flex flex-col">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl font-black text-white mb-2">{t.title}</h1>
          <p className="text-sm text-white/60">{t.description}</p>
        </motion.div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mb-8">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <motion.div
              key={i}
              className="h-2 rounded-full"
              animate={{
                width: i < currentIndex ? 16 : 8,
                backgroundColor: i < currentIndex ? color : "rgba(255,255,255,0.2)",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        {/* Game card */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          <AnimatePresence mode="wait">
            {!finished && (
              <motion.div
                key={currentIndex}
                className="w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {/* Emoji display */}
                <motion.div
                  className="text-center mb-8"
                  animate={{
                    scale: feedback === "correct" ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-7xl inline-block"
                    animate={{
                      filter:
                        feedback === "correct"
                          ? "drop-shadow(0 0 20px #00FF88)"
                          : feedback === "wrong"
                            ? "drop-shadow(0 0 20px #FF2D78)"
                            : "drop-shadow(0 0 10px rgba(255,255,255,0.1))",
                    }}
                  >
                    {currentRound.emoji}
                  </motion.div>
                </motion.div>

                {/* Speak button for word pronunciation */}
                <div className="flex justify-center mb-8">
                  <SpeakButton text={currentRound.word} lang={lang ?? "en"} size={16} />
                </div>

                {/* Feedback flash */}
                <AnimatePresence>
                  {feedback && (
                    <motion.div
                      className={`fixed inset-0 pointer-events-none z-50 flex items-center justify-center`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <motion.div
                        className={`w-24 h-24 rounded-full flex items-center justify-center text-white font-black text-4xl`}
                        style={{
                          backgroundColor:
                            feedback === "correct" ? "#00FF88" : "#FF2D78",
                        }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "backOut",
                        }}
                      >
                        {feedback === "correct" ? (
                          <Check size={48} />
                        ) : (
                          <X size={48} />
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Options */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {currentRound.options.map((option, idx) => {
                    const isSelected = selectedIndex === idx;
                    const isCorrect = idx === currentRound.correctIndex;
                    let bgColor = "bg-white/5 hover:bg-white/10";
                    let borderColor = "border-white/10";

                    if (selectedIndex !== null) {
                      if (isSelected && isCorrect) {
                        bgColor = "bg-green-500/20";
                        borderColor = "border-green-500";
                      } else if (isSelected && !isCorrect) {
                        bgColor = "bg-red-500/20";
                        borderColor = "border-red-500";
                      } else if (isCorrect) {
                        bgColor = "bg-green-500/10";
                        borderColor = "border-green-500";
                      }
                    }

                    return (
                      <motion.button
                        key={idx}
                        onClick={() => handleOptionClick(idx)}
                        disabled={selectedIndex !== null}
                        className={`py-3 px-3 rounded-2xl font-bold border-2 text-sm text-white/80 transition-all ${bgColor} ${borderColor}`}
                        whileHover={selectedIndex === null ? { scale: 1.05 } : {}}
                        whileTap={selectedIndex === null ? { scale: 0.95 } : {}}
                      >
                        {option}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Next button */}
                {selectedIndex !== null && (
                  <motion.button
                    onClick={handleNext}
                    className="w-full py-3 rounded-2xl font-black text-white mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {currentIndex < TOTAL - 1
                      ? t.nextWord
                      : t.finished}
                  </motion.button>
                )}
              </motion.div>
            )}

            {finished && (
              <motion.div
                className="w-full text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  🎉
                </motion.div>
                <p className="text-white/80 text-lg font-bold mb-2">
                  {t.finished}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Discovery card */}
        <AnimatePresence>
          {showDiscovery && currentRound.sentence && (
            <motion.div
              className="mb-8 p-4 rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-500/5 to-purple-500/0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl">💡</span>
                <div className="text-left w-full">
                  <p className="text-purple-300 text-xs font-bold mb-1">
                    {t.didYouKnow}
                  </p>
                  <div className="flex items-start gap-2 mb-2">
                    <p className="text-white/70 text-sm flex-1">
                      <span className="font-bold text-white">
                        {t.example}
                      </span>{" "}
                      {currentRound.sentence}
                    </p>
                    <SpeakButton text={currentRound.sentence} lang={lang ?? "en"} size={14} />
                  </div>
                  {currentRound.explanation && (
                    <p className="text-white/50 text-xs">
                      {currentRound.explanation}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

export default PictureVocabExplorer;
