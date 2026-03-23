"use client";
import React, { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

export interface CategoryItem {
  text: string;
  categoryIndex: number;
  explanation?: string;
}

interface CategoryRushExplorerProps {
  categories: { label: string; color: string }[];
  items: CategoryItem[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
  timeLimit?: number;
}

const LABELS = {
  en: {
    sortWord: "Which category?",
    correct: "Yes!",
    notQuite: "Not quite...",
    timeUp: "Time's up!",
    score: "Score",
    time: "Time",
    didYouKnow: "Did you know?",
    learnFromThis: "Learn from this!",
  },
  hu: {
    sortWord: "Melyik kategória?",
    correct: "Igen!",
    notQuite: "Nem egészen...",
    timeUp: "Lejárt az idő!",
    score: "Pont",
    time: "Idő",
    didYouKnow: "Tudtad?",
    learnFromThis: "Tanulj ebből!",
  },
  de: {
    sortWord: "Welche Kategorie?",
    correct: "Ja!",
    notQuite: "Nicht ganz...",
    timeUp: "Zeit ist um!",
    score: "Punkte",
    time: "Zeit",
    didYouKnow: "Wusstest du?",
    learnFromThis: "Lerne daraus!",
  },
  ro: {
    sortWord: "Ce categorie?",
    correct: "Da!",
    notQuite: "Nu chiar...",
    timeUp: "Timpul a expirat!",
    score: "Scor",
    time: "Timp",
    didYouKnow: "Știai?",
    learnFromThis: "Învață din asta!",
  },
} as const;

const CategoryRushExplorer = memo(function CategoryRushExplorer({
  categories,
  items,
  color,
  onDone,
  lang: langProp,
  timeLimit,
}: CategoryRushExplorerProps) {
  const { lang: ctxLang } = useLang();
  const lang = (langProp || ctxLang) as keyof typeof LABELS;
  const t = LABELS[lang] ?? LABELS.en;

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [currentDiscovery, setCurrentDiscovery] = useState("");
  const [timeLeft, setTimeLeft] = useState(timeLimit ?? 0);
  const [gameEnded, setGameEnded] = useState(false);
  const [flashIdx, setFlashIdx] = useState<number | null>(null);
  const [flashIsCorrect, setFlashIsCorrect] = useState(false);

  const wrongCountRef = useRef(0);
  const scoreRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentItem = items[idx];
  const progress = idx / items.length;

  // Start timer on mount
  React.useEffect(() => {
    if (timeLimit && !gameEnded) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameEnded(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [timeLimit, gameEnded]);

  // Auto-advance after explanation
  React.useEffect(() => {
    if (!showExplanation) return;
    const timeout = setTimeout(() => {
      setShowExplanation(false);
      setShowDiscovery(true);
    }, 800);
    return () => clearTimeout(timeout);
  }, [showExplanation]);

  // Auto-dismiss discovery card and advance
  React.useEffect(() => {
    if (!showDiscovery) return;
    const timeout = setTimeout(() => {
      setShowDiscovery(false);
      advanceToNext();
    }, 2500);
    return () => clearTimeout(timeout);
  }, [showDiscovery]);

  const advanceToNext = useCallback(() => {
    if (idx + 1 >= items.length || gameEnded) {
      if (timerRef.current) clearInterval(timerRef.current);
      // Real scoring: score = max(1, totalRounds - min(wrongCount, totalRounds - 1))
      const totalRounds = items.length;
      const finalScore = Math.max(1, totalRounds - Math.min(wrongCountRef.current, totalRounds - 1));
      onDone(finalScore, totalRounds);
    } else {
      setIdx((i) => i + 1);
      setShowExplanation(false);
    }
  }, [idx, items.length, gameEnded, onDone]);

  const handleCategoryTap = useCallback(
    (categoryIdx: number) => {
      if (showExplanation || gameEnded) return;

      const isCorrect = categoryIdx === currentItem.categoryIndex;

      // Visual flash feedback
      setFlashIdx(categoryIdx);
      setFlashIsCorrect(isCorrect);
      setTimeout(() => setFlashIdx(null), 800);

      if (isCorrect) {
        // Correct: advance after flash
        setTimeout(() => advanceToNext(), 800);
      } else {
        // Wrong: increment error count and show explanation + discovery
        wrongCountRef.current += 1;
        fireWrongAnswer({
          question: `${t.sortWord} "${currentItem.text}"`,
          wrongAnswer: categories[categoryIdx].label,
          correctAnswer: categories[currentItem.categoryIndex].label,
          topic: "Category Rush",
          lang: lang as string,
        });
        setShowExplanation(true);
        if (currentItem.explanation) {
          setCurrentDiscovery(currentItem.explanation);
        }
      }
    },
    [showExplanation, gameEnded, currentItem.categoryIndex, currentItem.explanation, advanceToNext]
  );

  if (!currentItem) return null;

  const timerColor =
    timeLeft > timeLimit! * 0.6 ? "#00FF88" : timeLeft > timeLimit! * 0.3 ? "#FFD700" : "#FF4444";

  return (
    <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
      {/* Header: Score + Timer */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          <div className="text-xs font-bold uppercase text-white/60 mb-1">{t.score}</div>
          <div className="text-3xl font-black text-white">{score}</div>
        </div>
        {timeLimit ? (
          <div className="flex-1 text-right">
            <div className="text-xs font-bold uppercase text-white/60 mb-1">{t.time}</div>
            <div className="text-3xl font-black" style={{ color: timerColor }}>
              {timeLeft}s
            </div>
          </div>
        ) : null}
      </div>

      {/* Progress bar */}
      <motion.div
        className="h-1.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress * 100}%` }}
        style={{ background: color }}
      />

      {/* Timer bar (if timeLimit) */}
      {timeLimit ? (
        <motion.div
          className="h-1 rounded-full"
          initial={{ width: "100%" }}
          animate={{ width: `${(timeLeft / timeLimit) * 100}%` }}
          style={{ background: timerColor }}
          transition={{ duration: 1 }}
        />
      ) : null}

      {/* Word card - centered, large */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center min-h-32"
        >
          <div
            className="rounded-3xl px-8 py-6 text-center"
            style={{ background: `${color}15`, border: `2px solid ${color}40` }}
          >
            <p className="text-3xl font-black text-white">{currentItem.text}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Instruction */}
      {!showExplanation ? (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm font-semibold text-white/60">
          {t.sortWord}
        </motion.p>
      ) : null}

      {/* Explanation (if wrong) */}
      <AnimatePresence>
        {showExplanation && currentItem.explanation ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="rounded-2xl p-4 text-center"
            style={{ background: `${color}20`, border: `1.5px solid ${color}60` }}
          >
            <p className="text-xs font-bold uppercase text-white/60 mb-2">{t.notQuite}</p>
            <p className="text-sm font-semibold text-white/80">{currentItem.explanation}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Discovery card (after wrong answer) */}
      <AnimatePresence>
        {showDiscovery && currentDiscovery ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="rounded-2xl p-4 text-center"
            style={{ background: "rgba(180,77,255,0.1)", border: "1.5px solid rgba(180,77,255,0.3)" }}
          >
            <p className="text-xs font-bold uppercase text-purple-400 mb-1">💡 {t.didYouKnow}</p>
            <p className="text-sm font-semibold text-white/80">{currentDiscovery}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Category buttons */}
      <div className={`grid gap-2 ${categories.length === 2 ? "grid-cols-2" : "grid-cols-4"}`}>
        {categories.map((cat, i) => {
          const isCorrect = i === currentItem.categoryIndex;
          const isFlashing = flashIdx === i;
          const flashColor = flashIsCorrect ? "#00FF88" : "#FF2D78";
          return (
            <motion.button
              key={i}
              onClick={() => handleCategoryTap(i)}
              disabled={showExplanation || gameEnded}
              className="py-4 px-3 rounded-2xl font-bold text-sm text-center transition-colors"
              style={{
                background: isFlashing
                  ? `${flashColor}30`
                  : showExplanation && isCorrect
                    ? `${cat.color}40`
                    : showExplanation
                      ? `${cat.color}10`
                      : `${cat.color}20`,
                border: `2px solid ${
                  isFlashing
                    ? flashColor
                    : showExplanation && isCorrect
                      ? cat.color
                      : `${cat.color}60`
                }`,
                color: isFlashing ? flashColor : cat.color,
              }}
              whileTap={!showExplanation && !gameEnded ? { scale: 0.95 } : {}}
            >
              {cat.label}
            </motion.button>
          );
        })}
      </div>

      {/* Game ended message */}
      <AnimatePresence>
        {gameEnded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl p-4 text-center"
            style={{ background: `${color}20`, border: `1.5px solid ${color}` }}
          >
            <p className="text-base font-black" style={{ color }}>
              {t.timeUp}
            </p>
            <p className="text-xs font-bold uppercase text-white/60 mt-2">
              {score}/{items.length}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
});

export default CategoryRushExplorer;
