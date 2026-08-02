"use client";
import React, { memo, useState, useCallback, useRef } from "react";
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
  /** Retained for older content definitions; rounds are intentionally untimed. */
  timeLimit?: number;
}

const LABELS = {
  en: {
    sortWord: "Which category?",
    correct: "Yes!",
    notQuite: "Not quite...",
    score: "Score",
    didYouKnow: "Did you know?",
    learnFromThis: "Learn from this!",
    noTasks: "No tasks are available for this round.",
  },
  hu: {
    sortWord: "Melyik kategória?",
    correct: "Igen!",
    notQuite: "Nem egészen...",
    score: "Pont",
    didYouKnow: "Tudtad?",
    learnFromThis: "Tanulj ebből!",
    noTasks: "Ehhez a körhöz még nincs elérhető feladat.",
  },
  de: {
    sortWord: "Welche Kategorie?",
    correct: "Ja!",
    notQuite: "Nicht ganz...",
    score: "Punkte",
    didYouKnow: "Wusstest du?",
    learnFromThis: "Lerne daraus!",
    noTasks: "Für diese Runde sind keine Aufgaben verfügbar.",
  },
  ro: {
    sortWord: "Ce categorie?",
    correct: "Da!",
    notQuite: "Nu chiar...",
    score: "Scor",
    didYouKnow: "Știai?",
    learnFromThis: "Învață din asta!",
    noTasks: "Nu există exerciții disponibile pentru această rundă.",
  },
} as const;

const CategoryRushExplorer = memo(function CategoryRushExplorer({
  categories,
  items,
  color,
  onDone,
  lang: langProp,
}: CategoryRushExplorerProps) {
  const { lang: ctxLang } = useLang();
  const lang = (langProp || ctxLang) as keyof typeof LABELS;
  const t = LABELS[lang] ?? LABELS.en;

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [currentDiscovery, setCurrentDiscovery] = useState("");
  const [flashIdx, setFlashIdx] = useState<number | null>(null);
  const [flashIsCorrect, setFlashIsCorrect] = useState(false);

  const scoreRef = useRef(0);

  const currentItem = items[idx];
  const progress = items.length > 0 ? idx / items.length : 0;

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
    if (idx + 1 >= items.length) {
      onDone(scoreRef.current, items.length);
    } else {
      setIdx((i) => i + 1);
      setShowExplanation(false);
    }
  }, [idx, items.length, onDone]);

  const handleCategoryTap = useCallback(
    (categoryIdx: number) => {
      if (showExplanation) return;

      const isCorrect = categoryIdx === currentItem.categoryIndex;

      // Visual flash feedback
      setFlashIdx(categoryIdx);
      setFlashIsCorrect(isCorrect);
      setTimeout(() => setFlashIdx(null), 800);

      if (isCorrect) {
        scoreRef.current += 1;
        setScore(scoreRef.current);
        // Correct: advance after flash
        setTimeout(() => advanceToNext(), 800);
      } else {
        // Wrong: increment error count and show explanation + discovery
        fireWrongAnswer({
          question: currentItem.text,
          wrongAnswer: categories[categoryIdx].label,
          correctAnswer: categories[currentItem.categoryIndex].label,
          topic: "Category Rush",
          lang: lang as string,
        });
        setShowExplanation(true);
        setCurrentDiscovery(currentItem.explanation ?? "");
      }
    },
    [showExplanation, currentItem, advanceToNext, categories, lang, t.sortWord]
  );

  if (!currentItem) {
    return (
      <div className="w-full max-w-sm mx-auto rounded-2xl border border-white/15 bg-white/5 p-6 text-center text-sm font-semibold text-white/70" role="status">
        {t.noTasks}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          <div className="text-xs font-bold uppercase text-white/60 mb-1">{t.score}</div>
          <div className="text-3xl font-black text-white">{score}</div>
        </div>
        <div className="text-sm font-bold text-white/60">{idx + 1}/{items.length}</div>
      </div>

      {/* Progress bar */}
      <motion.div
        className="h-1.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress * 100}%` }}
        style={{ background: color }}
      />

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
      <div className={`grid gap-2 ${categories.length === 2 ? "grid-cols-2" : categories.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-4"}`}>
        {categories.map((cat, i) => {
          const isCorrect = i === currentItem.categoryIndex;
          const isFlashing = flashIdx === i;
          const flashColor = flashIsCorrect ? "#00FF88" : "#FF2D78";
          return (
            <motion.button
              key={i}
              onClick={() => handleCategoryTap(i)}
              disabled={showExplanation}
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
              whileTap={!showExplanation ? { scale: 0.95 } : {}}
            >
              {cat.label}
            </motion.button>
          );
        })}
      </div>

    </div>
  );
});

export default CategoryRushExplorer;
