"use client";
import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

// ─────────────────────────────────────────────────────────────
// LABELS — ALL 4 LANGUAGES
// ─────────────────────────────────────────────────────────────
const LABELS = {
  en: {
    title: "Word Builder",
    instructions: "Tap the word parts in the correct order to build the word",
    check: "Check",
    next: "Next",
    correct: "Great!",
    incorrect: "Not quite right",
    didYouKnow: "Did you know?",
    progress: "Round",
  },
  hu: {
    title: "Szóépítő",
    instructions: "Koppints a szórészekre a helyes sorrendben a szó felépítéséhez",
    check: "Ellenőrzés",
    next: "Következő",
    correct: "Kiváló!",
    incorrect: "Nem jó",
    didYouKnow: "Tudtad?",
    progress: "Forduló",
  },
  de: {
    title: "Wortbauer",
    instructions: "Tippe die Wortteile in der richtigen Reihenfolge an, um das Wort zu bauen",
    check: "Prüfen",
    next: "Weiter",
    correct: "Toll!",
    incorrect: "Leider falsch",
    didYouKnow: "Wusstest du?",
    progress: "Runde",
  },
  ro: {
    title: "Constructor de cuvinte",
    instructions: "Apasă părțile cuvântului în ordinea corectă pentru a construi cuvântul",
    check: "Verifică",
    next: "Următor",
    correct: "Grozav!",
    incorrect: "Nu e bine",
    didYouKnow: "Știai?",
    progress: "Runda",
  },
} as const;

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────
interface BuildRound {
  parts: string[];
  correctOrder: number[];
  resultWord: string;
  hint?: string;
  explanation?: string;
}

interface WordBuildExplorerProps {
  rounds: BuildRound[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────
const WordBuildExplorer = memo(function WordBuildExplorer({
  rounds,
  color,
  onDone,
  lang: langProp,
}: WordBuildExplorerProps) {
  const { lang: ctxLang } = useLang();
  const lang = langProp || ctxLang;
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const wrongCountRef = useRef(0);

  // ───── STATE ─────
  const [roundIdx, setRoundIdx] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [flashColor, setFlashColor] = useState<"green" | "red" | null>(null);

  const currentRound = useMemo(() => rounds[roundIdx], [rounds, roundIdx]);
  const totalRounds = rounds.length;

  // ───── HELPERS ─────
  const isAnswerCorrect = useCallback(() => {
    return JSON.stringify(selectedOrder) === JSON.stringify(currentRound.correctOrder);
  }, [selectedOrder, currentRound]);

  const handlePartTap = useCallback(
    (idx: number) => {
      if (submitted) return;

      // If already selected, remove it
      if (selectedOrder.includes(idx)) {
        setSelectedOrder((prev) => prev.filter((x) => x !== idx));
      } else {
        // Add to selected
        setSelectedOrder((prev) => [...prev, idx]);
      }
    },
    [selectedOrder, submitted]
  );

  const handleCheck = useCallback(() => {
    if (selectedOrder.length === 0) return;

    const correct = isAnswerCorrect();

    if (!correct) {
      wrongCountRef.current += 1;
      fireWrongAnswer({
        question: `Build: "${currentRound.resultWord}"`,
        wrongAnswer: selectedOrder.map((i) => currentRound.parts[i]).join(" + "),
        correctAnswer: currentRound.correctOrder.map((i) => currentRound.parts[i]).join(" + "),
        topic: "Word Builder",
        lang: lang as string,
      });
    }

    setIsCorrect(correct);
    setFlashColor(correct ? "green" : "red");
    setSubmitted(true);

    // Flash 800ms, then show discovery card if correct
    setTimeout(() => {
      setFlashColor(null);
      if (correct) {
        setShowDiscovery(true);
        // Auto-dismiss after 2.5s
        setTimeout(() => {
          setShowDiscovery(false);
          // Move to next round after discovery
          if (roundIdx < totalRounds - 1) {
            setTimeout(() => {
              setRoundIdx((prev) => prev + 1);
              setSelectedOrder([]);
              setSubmitted(false);
            }, 200);
          }
        }, 2500);
      }
    }, 800);
  }, [selectedOrder, isAnswerCorrect, roundIdx, totalRounds]);

  const handleNext = useCallback(() => {
    if (roundIdx < totalRounds - 1) {
      setRoundIdx((prev) => prev + 1);
      setSelectedOrder([]);
      setSubmitted(false);
      setShowDiscovery(false);
    } else {
      // Game finished
      const score = Math.max(1, totalRounds - Math.min(wrongCountRef.current, totalRounds - 1));
      onDone(score, totalRounds);
    }
  }, [roundIdx, totalRounds, onDone]);

  const handleRetry = useCallback(() => {
    setSelectedOrder([]);
    setSubmitted(false);
    setShowDiscovery(false);
    setFlashColor(null);
  }, []);

  // ───── RENDER ─────
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center px-4 py-6">
      {/* Header */}
      <motion.div className="w-full max-w-lg mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-black text-white mb-2" style={{ color }}>{t.title}</h1>
        <p className="text-xs font-semibold text-white/60 mb-4">{t.instructions}</p>

        {/* Progress dots */}
        <div className="flex gap-1.5">
          {Array.from({ length: totalRounds }).map((_, i) => (
            <motion.div
              key={i}
              className="h-2 rounded-full flex-1"
              style={{
                backgroundColor: i <= roundIdx ? color : "rgba(255,255,255,0.1)",
              }}
              animate={{ scaleY: i === roundIdx ? 1.2 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          ))}
        </div>

        <span className="text-xs font-bold text-white/50 mt-2 block">
          {t.progress} {roundIdx + 1} / {totalRounds}
        </span>
      </motion.div>

      {/* Main card */}
      <motion.div
        className="w-full max-w-lg bg-white/5 border-2 rounded-3xl p-8 backdrop-blur-sm"
        style={{ borderColor: color }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={roundIdx}
      >
        {/* Flash overlay */}
        <AnimatePresence>
          {flashColor && (
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                backgroundColor: flashColor === "green" ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          )}
        </AnimatePresence>

        {/* Result word preview */}
        <motion.div
          className="mb-8 p-6 rounded-2xl text-center"
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderWidth: "1px",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <div className="text-xs font-semibold text-white/50 uppercase mb-2">Target Word</div>
          <div className="text-3xl font-black text-white tracking-wider">
            {currentRound.resultWord}
          </div>
        </motion.div>

        {/* Filled slots display */}
        {selectedOrder.length > 0 && (
          <motion.div
            className="mb-8 p-4 rounded-2xl bg-white/10 border border-white/20 flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {selectedOrder.map((partIdx) => (
              <motion.div
                key={`filled-${partIdx}`}
                className="px-4 py-2 rounded-xl font-bold text-sm"
                style={{
                  backgroundColor: color,
                  color: "#000",
                }}
              >
                {currentRound.parts[partIdx]}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Word parts to tap */}
        <motion.div
          className="grid grid-cols-2 gap-3 mb-8"
          layout
        >
          {currentRound.parts.map((part, idx) => {
            const isSelected = selectedOrder.includes(idx);
            return (
              <motion.button
                key={idx}
                onClick={() => handlePartTap(idx)}
                disabled={submitted}
                className={`py-3 rounded-2xl font-bold text-sm border-2 transition-all ${
                  submitted ? "opacity-50 cursor-default" : "hover:scale-105 active:scale-95"
                }`}
                style={{
                  borderColor: isSelected ? color : "rgba(255,255,255,0.2)",
                  backgroundColor: isSelected ? `${color}20` : "rgba(255,255,255,0.05)",
                  color: "white",
                }}
                whileHover={!submitted ? { scale: 1.05 } : {}}
                whileTap={!submitted ? { scale: 0.95 } : {}}
              >
                {part}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Hint */}
        {currentRound.hint && !submitted && (
          <motion.div
            className="mb-6 text-xs font-semibold text-white/60 text-center px-4 py-2 rounded-xl bg-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {currentRound.hint}
          </motion.div>
        )}

        {/* Check button (when not submitted) */}
        {!submitted && selectedOrder.length > 0 && (
          <motion.button
            onClick={handleCheck}
            className="w-full py-3 rounded-2xl font-black text-white border-2 mb-4"
            style={{
              backgroundColor: color,
              borderColor: color,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.check}
          </motion.button>
        )}

        {/* Result feedback */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              className="mb-6 flex items-center justify-center gap-2 p-4 rounded-2xl"
              style={{
                backgroundColor: isCorrect ? "rgba(0,255,136,0.1)" : "rgba(255,45,120,0.1)",
                borderWidth: "1px",
                borderColor: isCorrect ? "rgba(0,255,136,0.3)" : "rgba(255,45,120,0.3)",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {isCorrect ? (
                <Check size={20} className="text-[#00FF88]" />
              ) : (
                <X size={20} className="text-[#FF2D78]" />
              )}
              <span className="font-bold text-white">
                {isCorrect ? t.correct : t.incorrect}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next / Retry button */}
        {submitted && !isCorrect && (
          <motion.button
            onClick={handleRetry}
            className="w-full py-3 rounded-2xl font-black text-white border-2 mb-4"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              borderColor: color,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Retry
          </motion.button>
        )}

        {submitted && isCorrect && !showDiscovery && (
          <motion.button
            onClick={handleNext}
            className="w-full py-3 rounded-2xl font-black text-white border-2"
            style={{
              backgroundColor: color,
              borderColor: color,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {roundIdx < totalRounds - 1 ? t.next : "Finish"}
          </motion.button>
        )}
      </motion.div>

      {/* Discovery card */}
      <AnimatePresence>
        {showDiscovery && currentRound.explanation && (
          <motion.div
            className="w-full max-w-lg mt-6 p-6 rounded-3xl border-2"
            style={{
              backgroundColor: "rgba(180,77,255,0.1)",
              borderColor: "rgba(180,77,255,0.3)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="text-sm font-bold text-[#B44DFF] mb-2">{t.didYouKnow}</div>
            <p className="text-sm text-white/80 leading-relaxed">{currentRound.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default WordBuildExplorer;
