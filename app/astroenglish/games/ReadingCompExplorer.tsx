"use client";
import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, BookOpen } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

// LABELS with ALL 4 languages (en, hu, de, ro)
const LABELS = {
  en: {
    question: "Question:",
    didYouKnow: "Did you know?",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite.",
    selectAnswer: "Select your answer",
    readPassage: "Read the passage carefully",
  },
  hu: {
    question: "Kérdés:",
    didYouKnow: "Tudtad?",
    next: "Tovább",
    finish: "Befejezés",
    correct: "Helyes!",
    incorrect: "Nem egészen.",
    selectAnswer: "Válassz választ",
    readPassage: "Olvasd el figyelmesen a szöveget",
  },
  de: {
    question: "Frage:",
    didYouKnow: "Wusstest du?",
    next: "Weiter",
    finish: "Fertig",
    correct: "Richtig!",
    incorrect: "Nicht ganz.",
    selectAnswer: "Wähle eine Antwort",
    readPassage: "Lies den Text sorgfältig",
  },
  ro: {
    question: "Întrebare:",
    didYouKnow: "Știai?",
    next: "Înainte",
    finish: "Gata",
    correct: "Corect!",
    incorrect: "Nu chiar.",
    selectAnswer: "Selectează un răspuns",
    readPassage: "Citește pasajul cu atenție",
  },
} as const;

interface CompRound {
  passage: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

interface ReadingCompExplorerProps {
  rounds: CompRound[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

const ReadingCompExplorer = memo(function ReadingCompExplorer({
  rounds,
  color,
  onDone,
  lang: langProp,
}: ReadingCompExplorerProps) {
  const { lang: ctxLang } = useLang();
  const lang = langProp || ctxLang;
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [discoveryText, setDiscoveryText] = useState("");

  const wrongCountRef = useRef(0);

  const currentRound = useMemo(() => rounds[currentIdx], [currentIdx, rounds]);
  const isCorrect = useMemo(() => selectedIdx === currentRound.correctIndex, [selectedIdx, currentRound.correctIndex]);

  const handleSelectOption = useCallback(
    (idx: number) => {
      if (selectedIdx !== null) return;
      setSelectedIdx(idx);
      const correct = idx === currentRound.correctIndex;
      setFeedback(correct ? "correct" : "incorrect");
      if (!correct) {
        wrongCountRef.current += 1;
        fireWrongAnswer({
          question: currentRound.question,
          wrongAnswer: currentRound.options[idx],
          correctAnswer: currentRound.options[currentRound.correctIndex],
          topic: "Reading Comprehension",
          lang: lang as string,
        });
      }
      setTimeout(() => {
        if (currentRound.explanation) {
          setDiscoveryText(currentRound.explanation);
          setShowDiscovery(true);
        }
      }, 800);
    },
    [selectedIdx, currentRound.correctIndex, currentRound.explanation]
  );

  const handleNext = useCallback(() => {
    if (currentIdx < rounds.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedIdx(null);
      setFeedback(null);
      setShowDiscovery(false);
      setDiscoveryText("");
    } else {
      const score = Math.max(1, rounds.length - Math.min(wrongCountRef.current, rounds.length - 1));
      onDone(score, rounds.length);
    }
  }, [currentIdx, rounds.length, onDone]);

  const canProceed = feedback !== null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A1A] to-[#1a1a3a] flex flex-col items-center justify-center px-4 py-6">
      {/* Progress bar */}
      <div className="w-full max-w-lg mb-6">
        <div className="flex gap-1.5 justify-center">
          {rounds.map((_, idx) => (
            <motion.div
              key={idx}
              className="h-2 rounded-full flex-1"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: idx <= currentIdx ? 1 : 0.3, backgroundColor: idx < currentIdx ? color : idx === currentIdx ? color : "rgba(255,255,255,0.1)" }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Main card container */}
      <motion.div
        key={currentIdx}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-lg"
      >
        {/* Passage Card */}
        <motion.div
          className="rounded-3xl border-2 p-5 mb-6"
          style={{
            borderColor: color,
            backgroundColor: `rgba(255,255,255,0.02)`,
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={20} style={{ color }} />
            <span className="text-xs font-bold text-white/50 uppercase">{t.readPassage}</span>
          </div>
          <div className="max-h-48 overflow-y-auto pr-2">
            <p className="text-sm leading-relaxed text-white/80">{currentRound.passage}</p>
          </div>
        </motion.div>

        {/* Question */}
        <div className="mb-4">
          <p className="text-xs font-bold text-white/60 mb-2 uppercase">{t.question}</p>
          <p className="text-base font-semibold text-white">{currentRound.question}</p>
        </div>

        {/* Answer Options */}
        <div className="space-y-2 mb-6">
          {currentRound.options.map((option, idx) => {
            const isSelected = selectedIdx === idx;
            const isAnswered = selectedIdx !== null;
            const isCorrectOption = idx === currentRound.correctIndex;
            let bgColor = "bg-white/5";
            let borderColor = "border-white/10";
            let textColor = "text-white/80";

            if (isAnswered) {
              if (isSelected && isCorrect) {
                bgColor = "bg-green-500/20";
                borderColor = `border-green-400`;
                textColor = "text-green-200";
              } else if (isSelected && !isCorrect) {
                bgColor = "bg-red-500/20";
                borderColor = `border-red-400`;
                textColor = "text-red-200";
              } else if (isCorrectOption && !isSelected) {
                bgColor = "bg-green-500/10";
                borderColor = `border-green-400/30`;
                textColor = "text-white/80";
              } else {
                bgColor = "bg-white/2";
                borderColor = "border-white/5";
                textColor = "text-white/50";
              }
            } else if (isSelected) {
              bgColor = "bg-white/10";
              borderColor = `border-[${color}]`;
              textColor = "text-white";
            }

            return (
              <motion.button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                className={`w-full py-3 px-4 rounded-2xl font-bold border-2 text-sm transition-all flex items-center justify-between ${bgColor} ${borderColor} ${textColor}`}
                whileHover={!isAnswered ? { scale: 1.02 } : {}}
                whileTap={!isAnswered ? { scale: 0.98 } : {}}
              >
                <span>{option}</span>
                {isAnswered && isSelected && (isCorrect ? <Check size={16} /> : <X size={16} />)}
                {isAnswered && isCorrectOption && !isSelected && <Check size={16} className="opacity-50" />}
              </motion.button>
            );
          })}
        </div>

        {/* Feedback Flash */}
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`mb-4 p-4 rounded-2xl text-center font-bold text-sm ${feedback === "correct" ? "bg-green-500/20 text-green-200 border border-green-400" : "bg-red-500/20 text-red-200 border border-red-400"}`}
            >
              {feedback === "correct" ? t.correct : t.incorrect}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Discovery Card */}
        <AnimatePresence>
          {showDiscovery && discoveryText && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mb-4 p-4 rounded-2xl border border-purple-400/30 bg-purple-500/10"
              onAnimationComplete={() => {
                setTimeout(() => setShowDiscovery(false), 2500);
              }}
            >
              <p className="text-xs font-bold text-purple-300 mb-1 uppercase">{t.didYouKnow}</p>
              <p className="text-sm text-white/80">{discoveryText}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next/Finish Button */}
        {canProceed && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleNext}
            className="w-full py-3 rounded-2xl font-black text-white text-base transition-all"
            style={{
              background: `linear-gradient(135deg, ${color}, ${color}dd)`,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {currentIdx < rounds.length - 1 ? t.next : t.finish}
          </motion.button>
        )}

        {/* Placeholder when no answer selected */}
        {!canProceed && (
          <div className="text-center text-white/40 text-xs font-semibold">{t.selectAnswer}</div>
        )}
      </motion.div>
    </div>
  );
});

export default ReadingCompExplorer;
