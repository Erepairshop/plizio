"use client";
import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

// Types
interface PronRound {
  word: string;
  phonetic: string;
  syllables: string[];
  stressIndex?: number;
  options: string[];
  correctIndex: number;
  questionType: "syllable-count" | "stress" | "rhyme-group" | "silent-letter";
  explanation?: string;
}

interface PronunciationExplorerProps {
  rounds: PronRound[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

// LABELS with ALL 4 languages
const LABELS = {
  en: {
    howManySyllables: "How many syllables?",
    whichStressed: "Which syllable is stressed?",
    rhymeGroup: "Which word rhymes?",
    silentLetter: "Which letter is silent?",
    didYouKnow: "Did you know?",
    correct: "Correct!",
    incorrect: "Incorrect",
    continue: "Continue",
    finish: "Finish",
    nextRound: "Next",
    syllable: "syllable",
    syllables: "syllables",
  },
  hu: {
    howManySyllables: "Hány szótag?",
    whichStressed: "Melyik szótag nyomatékos?",
    rhymeGroup: "Melyik szó végzik rímbe?",
    silentLetter: "Melyik betű hallgatag?",
    didYouKnow: "Tudtad?",
    correct: "Helyes!",
    incorrect: "Helytelen",
    continue: "Tovább",
    finish: "Vége",
    nextRound: "Tovább",
    syllable: "szótag",
    syllables: "szótag",
  },
  de: {
    howManySyllables: "Wie viele Silben?",
    whichStressed: "Welche Silbe ist betont?",
    rhymeGroup: "Welches Wort reimt sich?",
    silentLetter: "Welcher Buchstabe ist stumm?",
    didYouKnow: "Wusstest du?",
    correct: "Richtig!",
    incorrect: "Falsch",
    continue: "Weiter",
    finish: "Fertig",
    nextRound: "Weiter",
    syllable: "Silbe",
    syllables: "Silben",
  },
  ro: {
    howManySyllables: "Câte silabe?",
    whichStressed: "Care silabă este accentuată?",
    rhymeGroup: "Care cuvânt rimează?",
    silentLetter: "Care literă este tăcută?",
    didYouKnow: "Știai?",
    correct: "Corect!",
    incorrect: "Incorect",
    continue: "Continuă",
    finish: "Gata",
    nextRound: "Continuă",
    syllable: "silabă",
    syllables: "silabe",
  },
} as const;

const PronunciationExplorer = memo(function PronunciationExplorer({
  rounds,
  color,
  onDone,
  lang: langProp,
}: PronunciationExplorerProps) {
  const { lang: ctxLang } = useLang();
  const lang = langProp || ctxLang;
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const wrongCountRef = useRef(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [feedbackType, setFeedbackType] = useState<"correct" | "incorrect" | null>(null);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [discoveryText, setDiscoveryText] = useState("");

  const TOTAL = rounds.length;
  const currentRound = rounds[currentIdx];

  const questionLabel = useMemo(() => {
    if (!currentRound) return "";
    switch (currentRound.questionType) {
      case "syllable-count":
        return t.howManySyllables;
      case "stress":
        return t.whichStressed;
      case "rhyme-group":
        return t.rhymeGroup;
      case "silent-letter":
        return t.silentLetter;
      default:
        return "";
    }
  }, [currentRound, t]);

  const handleSelectOption = useCallback((idx: number) => {
    if (selectedIdx !== null) return;
    setSelectedIdx(idx);

    const isCorrect = idx === currentRound.correctIndex;
    setFeedbackType(isCorrect ? "correct" : "incorrect");

    if (!isCorrect) {
      wrongCountRef.current += 1;
      fireWrongAnswer({
        question: `${questionLabel}: "${currentRound.word}"`,
        wrongAnswer: currentRound.options[idx],
        correctAnswer: currentRound.options[currentRound.correctIndex],
        topic: "Pronunciation",
        lang: lang as string,
      });
    }

    if (!isCorrect && currentRound.explanation) {
      setDiscoveryText(currentRound.explanation);
      setShowDiscovery(true);
      setTimeout(() => setShowDiscovery(false), 2500);
    }
  }, [selectedIdx, currentRound]);

  const handleNext = useCallback(() => {
    if (currentIdx < TOTAL - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedIdx(null);
      setFeedbackType(null);
    } else {
      const score = Math.max(1, TOTAL - Math.min(wrongCountRef.current, TOTAL - 1));
      onDone(score, TOTAL);
    }
  }, [currentIdx, TOTAL, onDone]);

  if (!currentRound) return null;

  const syllableCount = currentRound.syllables.length;
  const stressIdx = currentRound.stressIndex ?? 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center px-4 py-8">
      {/* Progress bar */}
      <div className="w-full max-w-lg mb-8">
        <div className="flex gap-1.5 justify-center">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <motion.div
              key={i}
              className="h-2 rounded-full"
              style={{
                width: i === currentIdx ? 16 : 8,
                backgroundColor: i < currentIdx ? color : i === currentIdx ? color : "rgba(255,255,255,0.2)",
              }}
              animate={{ width: i === currentIdx ? 16 : 8 }}
            />
          ))}
        </div>
      </div>

      {/* Main card */}
      <motion.div
        className="w-full max-w-lg mx-auto px-4 py-8 rounded-3xl border-2 bg-white/5 backdrop-blur-sm"
        style={{ borderColor: color }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        key={currentIdx}
      >
        {/* Word display */}
        <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-5xl font-black text-white mb-3">{currentRound.word}</div>
          <div className="text-lg text-white/70 font-semibold">{currentRound.phonetic}</div>
          <div className="flex justify-center mt-4">
            <SpeakButton text={currentRound.word} lang={lang ?? "en"} size={18} />
          </div>
        </motion.div>

        {/* Syllable visualization */}
        <motion.div className="flex gap-3 justify-center items-end mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {currentRound.syllables.map((syl, i) => (
            <motion.div
              key={i}
              className="relative"
              animate={i === stressIdx ? { y: [0, -4, 0] } : {}}
              transition={i === stressIdx ? { repeat: Infinity, duration: 1.5 } : {}}
            >
              <div
                className="px-3 py-2 rounded-lg font-bold text-white text-sm border-2"
                style={{
                  backgroundColor: i === stressIdx ? `${color}40` : "rgba(255,255,255,0.1)",
                  borderColor: i === stressIdx ? color : "rgba(255,255,255,0.2)",
                }}
              >
                {syl}
              </div>
              {i === stressIdx && (
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{ borderColor: color, borderWidth: 2 }}
                  animate={{ opacity: [0.6, 0.2, 0.6] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Question */}
        <div className="text-center mb-6">
          <p className="text-white/70 text-sm font-semibold uppercase tracking-wider">{questionLabel}</p>
        </div>

        {/* Options */}
        <div className="space-y-2 mb-8">
          {currentRound.options.map((option, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              disabled={selectedIdx !== null}
              className="w-full py-3 px-4 rounded-2xl font-bold border-2 transition-all text-white"
              style={{
                borderColor:
                  selectedIdx === null
                    ? "rgba(255,255,255,0.2)"
                    : idx === currentRound.correctIndex
                      ? "#00FF88"
                      : idx === selectedIdx
                        ? "#FF2D78"
                        : "rgba(255,255,255,0.1)",
                backgroundColor:
                  selectedIdx === null
                    ? "rgba(255,255,255,0.05)"
                    : idx === currentRound.correctIndex
                      ? "rgba(0,255,136,0.15)"
                      : idx === selectedIdx
                        ? "rgba(255,45,120,0.15)"
                        : "rgba(255,255,255,0.02)",
              }}
              whileHover={selectedIdx === null ? { scale: 1.02 } : {}}
              whileTap={selectedIdx === null ? { scale: 0.98 } : {}}
            >
              <div className="flex items-center gap-3 justify-between">
                <span>{option}</span>
                <AnimatePresence>
                  {selectedIdx === idx && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      {idx === currentRound.correctIndex ? (
                        <Check size={20} className="text-green-400" />
                      ) : (
                        <X size={20} className="text-red-400" />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Feedback message */}
        <AnimatePresence>
          {feedbackType && (
            <motion.div
              className={`text-center py-3 rounded-xl font-bold text-sm mb-6 ${
                feedbackType === "correct" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {feedbackType === "correct" ? t.correct : t.incorrect}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Discovery card */}
        <AnimatePresence>
          {showDiscovery && (
            <motion.div
              className="mb-6 p-4 rounded-2xl border-2 bg-white/5 border-purple-500/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <p className="text-xs font-bold text-purple-300 uppercase mb-2">{t.didYouKnow}</p>
              <p className="text-sm text-white/80">{discoveryText}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next button */}
        {selectedIdx !== null && (
          <motion.button
            onClick={handleNext}
            className="w-full py-3 rounded-2xl font-black text-white border-0 transition-all"
            style={{
              background: `linear-gradient(135deg, ${color}80, ${color}40)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {currentIdx < TOTAL - 1 ? t.nextRound : t.finish}
          </motion.button>
        )}
      </motion.div>
    </div>
  );
});

export default PronunciationExplorer;
