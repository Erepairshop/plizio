"use client";

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

interface WordSortRound {
  categories: { label: string; color: string }[];
  words: { text: string; categoryIndex: number }[];
  instruction?: string;
  explanation?: string;
}

interface WordSortExplorerProps {
  rounds: WordSortRound[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

const LABELS = {
  en: {
    sortInstruction: "Tap each word, then tap the correct category!",
    correct: "Correct!",
    tryAgain: "Not quite — it belongs here:",
    roundComplete: "Round complete!",
    selectCategory: "Select the category",
    didYouKnow: "Did you know?",
    learnFromThis: "Learn from this!",
  },
  hu: {
    sortInstruction: "Koppints a szóra, majd a helyes kategóriára!",
    correct: "Helyes!",
    tryAgain: "Nem egészen — ide tartozik:",
    roundComplete: "Kör kész!",
    selectCategory: "Válaszd ki a kategóriát",
    didYouKnow: "Tudtad?",
    learnFromThis: "Tanulj ebből!",
  },
  de: {
    sortInstruction: "Tippe auf jedes Wort, dann auf die richtige Kategorie!",
    correct: "Richtig!",
    tryAgain: "Nicht ganz — es gehört hierhin:",
    roundComplete: "Runde fertig!",
    selectCategory: "Wähle die Kategorie",
    didYouKnow: "Wusstest du?",
    learnFromThis: "Lerne daraus!",
  },
  ro: {
    sortInstruction: "Atinge fiecare cuvânt, apoi categoria corectă!",
    correct: "Corect!",
    tryAgain: "Nu chiar — aparține aici:",
    roundComplete: "Runda completă!",
    selectCategory: "Alege categoria",
    didYouKnow: "Știai?",
    learnFromThis: "Învață din asta!",
  },
} as const;

const WordSortExplorer = memo(function WordSortExplorer({
  rounds,
  color,
  onDone,
  lang: langProp,
}: WordSortExplorerProps) {
  const { lang: contextLang } = useLang();
  const lang = langProp || contextLang;
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const [roundIdx, setRoundIdx] = useState(0);
  const [placedWords, setPlacedWords] = useState<number[]>(new Array(rounds[0]?.words.length ?? 0).fill(-1));
  const [selectedWord, setSelectedWord] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ type: "correct" | "wrong"; categoryIdx?: number } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [flashIdx, setFlashIdx] = useState<number | null>(null);
  const [flashType, setFlashType] = useState<"correct" | "wrong" | null>(null);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [currentDiscovery, setCurrentDiscovery] = useState("");

  const wrongCountRef = useRef(0);

  const round = rounds[roundIdx];
  const allWordsPlaced = placedWords.every((cat) => cat !== -1);

  const handleWordSelect = useCallback(
    (wordIdx: number) => {
      if (placedWords[wordIdx] !== -1) {
        // Word already placed, remove it
        setPlacedWords((prev) => {
          const next = [...prev];
          next[wordIdx] = -1;
          return next;
        });
        setSelectedWord(null);
        setFeedback(null);
        setShowHint(false);
      } else {
        // Word not placed, select it for category choice
        setSelectedWord(wordIdx);
        setFeedback(null);
        setShowHint(false);
      }
    },
    [placedWords]
  );

  const handleCategorySelect = useCallback(
    (categoryIdx: number) => {
      if (selectedWord === null) return;

      const correctCategoryIdx = round.words[selectedWord].categoryIndex;
      const isCorrect = categoryIdx === correctCategoryIdx;

      if (isCorrect) {
        // Correct! Place the word
        setPlacedWords((prev) => {
          const next = [...prev];
          next[selectedWord] = categoryIdx;
          return next;
        });
        setFlashIdx(categoryIdx);
        setFlashType("correct");
        setTimeout(() => {
          setFlashIdx(null);
          setFlashType(null);
        }, 800);
        setFeedback({ type: "correct" });
        setSelectedWord(null);

        // Auto-advance if all placed
        setTimeout(() => {
          setPlacedWords((prev) => {
            if (prev.every((cat) => cat !== -1)) {
              // All words placed, show discovery then next round
              setFeedback(null);
              setShowHint(false);
              setShowDiscovery(true);
              setCurrentDiscovery(round.explanation || "Keep sorting words by categories!");

              setTimeout(() => {
                setShowDiscovery(false);
                if (roundIdx + 1 >= rounds.length) {
                  // Calculate final score: rounds.length - min(wrongCount, rounds.length-1)
                  const score = Math.max(1, rounds.length - Math.min(wrongCountRef.current, rounds.length - 1));
                  setTimeout(() => onDone(score, rounds.length), 300);
                } else {
                  const nextRound = rounds[roundIdx + 1];
                  setRoundIdx(roundIdx + 1);
                  setPlacedWords(new Array(nextRound.words.length).fill(-1));
                }
              }, 2500);
            }
            return prev;
          });
        }, 700);
      } else {
        // Wrong, show teaching feedback and flash
        wrongCountRef.current += 1;
        fireWrongAnswer({
          question: `Sort: "${round.words[selectedWord].text}"`,
          wrongAnswer: round.categories[categoryIdx].label,
          correctAnswer: round.categories[correctCategoryIdx].label,
          topic: "Word Sort",
          lang: lang as string,
        });
        setFlashIdx(categoryIdx);
        setFlashType("wrong");
        setTimeout(() => {
          setFlashIdx(null);
          setFlashType(null);
        }, 800);
        setFeedback({ type: "wrong", categoryIdx: correctCategoryIdx });
        setShowHint(true);
      }
    },
    [selectedWord, round, roundIdx, rounds, onDone]
  );

  if (!round) return null;

  // Calculate which words are still available (not placed)
  const unplacedWords = round.words
    .map((w, idx) => ({ ...w, idx }))
    .filter((_, idx) => placedWords[idx] === -1);

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto px-4 py-6">
      {/* Progress */}
      <div className="flex gap-2">
        {rounds.map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 h-3 rounded-full transition-all"
            style={{
              background:
                i < roundIdx
                  ? "#00FF88"
                  : i === roundIdx
                    ? color
                    : "rgba(255,255,255,0.12)",
            }}
            animate={{ opacity: 1 }}
          />
        ))}
      </div>

      {/* Instruction */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-sm font-semibold text-white/70"
      >
        {round.instruction || t.sortInstruction}
      </motion.div>

      {/* Category buckets */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {round.categories.map((cat, catIdx) => (
          <motion.div
            key={catIdx}
            className="relative rounded-2xl p-4 min-h-[100px] flex flex-col items-center justify-center cursor-pointer border-2 transition-all"
            style={{
              background:
                flashIdx === catIdx && flashType === "correct"
                  ? "rgba(0,255,136,0.2)"
                  : flashIdx === catIdx && flashType === "wrong"
                    ? "rgba(255,45,120,0.2)"
                    : `${cat.color}15`,
              borderColor:
                flashIdx === catIdx && flashType === "correct"
                  ? "#00FF88"
                  : flashIdx === catIdx && flashType === "wrong"
                    ? "#FF2D78"
                    : selectedWord !== null
                      ? `${cat.color}80`
                      : `${cat.color}40`,
            }}
            animate={{
              borderWidth: flashIdx === catIdx ? 3 : 2,
            }}
            whileTap={{ scale: selectedWord !== null ? 0.96 : 1 }}
            onClick={() => selectedWord !== null && handleCategorySelect(catIdx)}
          >
            {/* Bucket label */}
            <span className="text-xs font-bold text-center mb-2" style={{ color: cat.color }}>
              {cat.label}
            </span>

            {/* Placed words in bucket */}
            <div className="flex flex-wrap gap-1 justify-center w-full">
              <AnimatePresence>
                {round.words.map((word, wordIdx) => {
                  if (placedWords[wordIdx] !== catIdx) return null;
                  return (
                    <motion.div
                      key={wordIdx}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="px-2 py-1 rounded-lg text-xs font-semibold text-white"
                      style={{ background: cat.color }}
                    >
                      {word.text}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Hint text for teaching */}
            {showHint &&
              feedback?.type === "wrong" &&
              feedback.categoryIdx === catIdx && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-12 left-0 right-0 text-center text-xs font-semibold text-white/60 whitespace-nowrap"
                >
                  {t.tryAgain}
                </motion.div>
              )}
          </motion.div>
        ))}
      </div>

      {/* Word pool */}
      <AnimatePresence mode="wait">
        <motion.div
          key={roundIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl p-5 bg-white/5 border border-white/10"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {unplacedWords.map((word) => (
              <motion.button
                key={word.idx}
                onClick={() => handleWordSelect(word.idx)}
                className="px-4 py-3 rounded-xl font-bold text-sm transition-all"
                style={{
                  background:
                    selectedWord === word.idx
                      ? `${color}40`
                      : "rgba(255,255,255,0.08)",
                  borderColor:
                    selectedWord === word.idx ? color : "rgba(255,255,255,0.15)",
                  color: selectedWord === word.idx ? "#fff" : "rgba(255,255,255,0.85)",
                  border: "2px solid",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {word.text}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Feedback message */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center justify-center gap-2"
          >
            {feedback.type === "correct" ? (
              <>
                <Check size={20} className="text-green-400" />
                <span className="text-sm font-bold text-green-400">{t.correct}</span>
              </>
            ) : (
              <>
                <X size={20} className="text-red-400" />
                <span className="text-sm font-bold text-red-400">{t.tryAgain}</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Round completion */}
      <AnimatePresence>
        {allWordsPlaced && feedback?.type === "correct" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center text-base font-black rounded-2xl p-4"
            style={{ background: `${color}30`, color }}
          >
            ✓ {t.roundComplete}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Discovery card */}
      <AnimatePresence>
        {showDiscovery && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="rounded-2xl p-4 text-center"
            style={{ background: "rgba(180,77,255,0.1)", border: "1.5px solid rgba(180,77,255,0.3)" }}
          >
            <p className="text-xs font-bold uppercase text-purple-400 mb-1">💡 {t.didYouKnow}</p>
            <p className="text-sm font-semibold text-white/80">{currentDiscovery}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default WordSortExplorer;
