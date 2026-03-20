"use client";

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";

interface SentenceRound {
  words: string[];
  correctOrder: number[];
  hint?: string;
  explanation?: string;
}

interface SentenceBuilderExplorerProps {
  rounds: SentenceRound[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

const LABELS = {
  en: {
    buildSentence: "Build the sentence!",
    check: "Check",
    perfect: "Perfect!",
    tryFix: "Almost! Fix the highlighted word.",
    next: "Next",
    explanation: "Remember:",
  },
  hu: {
    buildSentence: "Rakd össze a mondatot!",
    check: "Ellenőrzés",
    perfect: "Tökéletes!",
    tryFix: "Majdnem! Javítsd a kijelölt szót.",
    next: "Tovább",
    explanation: "Jegyezd meg:",
  },
  de: {
    buildSentence: "Baue den Satz!",
    check: "Prüfen",
    perfect: "Perfekt!",
    tryFix: "Fast! Korrigiere das markierte Wort.",
    next: "Weiter",
    explanation: "Merke dir:",
  },
  ro: {
    buildSentence: "Construiește propoziția!",
    check: "Verifică",
    perfect: "Perfect!",
    tryFix: "Aproape! Corectează cuvântul evidențiat.",
    next: "Următorul",
    explanation: "Ține minte:",
  },
} as const;

// Helper: build a sentence from indices
const buildSentence = (words: string[], indices: number[]) =>
  indices.map((i) => words[i]).join(" ");

// Helper: check if current order matches correct order
const isCorrectOrder = (currentIndices: number[], correctIndices: number[]) =>
  currentIndices.length === correctIndices.length &&
  currentIndices.every((idx, pos) => idx === correctIndices[pos]);

const SentenceBuilderExplorer = memo(function SentenceBuilderExplorer({
  rounds,
  color,
  onDone,
  lang: langProp,
}: SentenceBuilderExplorerProps) {
  const { lang: contextLang } = useLang();
  const lang = langProp || contextLang;
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const [roundIdx, setRoundIdx] = useState(0);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [wrongIdx, setWrongIdx] = useState<number | null>(null);

  const scoreRef = useRef(0);

  const round = rounds[roundIdx];
  const unplacedWords = round.words
    .map((w, idx) => idx)
    .filter((idx) => !selectedIndices.includes(idx));

  // Check if the sentence is correct
  const checkSentence = useCallback(() => {
    const isCorrect = isCorrectOrder(selectedIndices, round.correctOrder);

    if (isCorrect) {
      scoreRef.current += 1;
      setFeedback("correct");
      setTimeout(() => {
        if (roundIdx + 1 >= rounds.length) {
          onDone(scoreRef.current, rounds.length);
        } else {
          setRoundIdx(roundIdx + 1);
          setSelectedIndices([]);
          setFeedback(null);
          setWrongIdx(null);
        }
      }, 1200);
    } else {
      // Find first wrong position
      let firstWrongIdx = null;
      for (let i = 0; i < selectedIndices.length; i++) {
        if (selectedIndices[i] !== round.correctOrder[i]) {
          firstWrongIdx = selectedIndices[i];
          break;
        }
      }
      setFeedback("wrong");
      setWrongIdx(firstWrongIdx);
    }
  }, [selectedIndices, round, roundIdx, rounds, onDone]);

  const handleWordSelect = useCallback(
    (wordIdx: number) => {
      if (selectedIndices.includes(wordIdx)) {
        // Remove the word (tap to undo)
        setSelectedIndices((prev) => prev.filter((i) => i !== wordIdx));
      } else {
        // Add word to sentence
        setSelectedIndices((prev) => [...prev, wordIdx]);
      }
      setFeedback(null);
      setWrongIdx(null);
    },
    [selectedIndices]
  );

  const handleClearAll = useCallback(() => {
    setSelectedIndices([]);
    setFeedback(null);
    setWrongIdx(null);
  }, []);

  if (!round) return null;

  const correctSentence = buildSentence(round.words, round.correctOrder);

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
        {round.hint || t.buildSentence}
      </motion.div>

      {/* Sentence slots (where words go) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl p-5 min-h-[80px] border-2 border-dashed flex flex-wrap gap-2 items-center justify-center"
        style={{ borderColor: `${color}50`, background: `${color}08` }}
      >
        <AnimatePresence mode="wait">
          {selectedIndices.length === 0 ? (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm font-semibold text-white/40 italic"
            >
              Tap words to build the sentence...
            </motion.div>
          ) : (
            selectedIndices.map((wordIdx, pos) => {
              const isWrong =
                feedback === "wrong" &&
                wordIdx !== round.correctOrder[pos];
              return (
                <motion.button
                  key={`${roundIdx}-${wordIdx}`}
                  onClick={() => handleWordSelect(wordIdx)}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="px-3 py-2 rounded-lg font-bold text-sm transition-all cursor-pointer"
                  style={{
                    background: isWrong
                      ? "rgba(239, 68, 68, 0.25)"
                      : `${color}40`,
                    color: isWrong ? "#FCA5A5" : "#fff",
                    border: isWrong
                      ? "2px solid rgba(239, 68, 68, 0.5)"
                      : `2px solid ${color}`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {round.words[wordIdx]}
                </motion.button>
              );
            })
          )}
        </AnimatePresence>
      </motion.div>

      {/* Word pool */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-2xl p-5 bg-white/5 border border-white/10"
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {unplacedWords.map((wordIdx) => {
            const isHighlighted = wrongIdx === wordIdx;
            return (
              <motion.button
                key={wordIdx}
                onClick={() => handleWordSelect(wordIdx)}
                className="px-4 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer border-2"
                style={{
                  background: isHighlighted
                    ? "rgba(239, 68, 68, 0.15)"
                    : "rgba(255,255,255,0.08)",
                  borderColor: isHighlighted
                    ? "#ef4444"
                    : "rgba(255,255,255,0.15)",
                  color: isHighlighted
                    ? "#FCA5A5"
                    : "rgba(255,255,255,0.85)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={
                  isHighlighted
                    ? {
                        borderColor: [
                          "#ef4444",
                          "rgba(239, 68, 68, 0.5)",
                          "#ef4444",
                        ],
                      }
                    : {}
                }
                transition={isHighlighted ? { duration: 0.6 } : {}}
              >
                {round.words[wordIdx]}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Clear button (if any words placed) */}
      <AnimatePresence>
        {selectedIndices.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center"
          >
            <button
              onClick={handleClearAll}
              className="text-xs font-semibold text-white/50 hover:text-white/70 transition-colors"
            >
              Clear all
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Check button (if all words placed) */}
      <AnimatePresence>
        {selectedIndices.length === round.words.length && (
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            onClick={checkSentence}
            className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2"
            style={{
              background: `linear-gradient(135deg, ${color}55, ${color}99)`,
              border: `2px solid ${color}`,
            }}
            whileTap={{ scale: 0.97 }}
          >
            {t.check}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Feedback */}
      <AnimatePresence>
        {feedback === "correct" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col gap-3"
          >
            {/* Success message */}
            <div className="flex items-center justify-center gap-2">
              <Check size={20} className="text-green-400" />
              <span className="text-base font-black text-green-400">
                {t.perfect}
              </span>
            </div>

            {/* Explanation (if provided) */}
            {round.explanation && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl p-3 bg-white/5 border border-white/10"
              >
                <p className="text-xs font-semibold text-white/70 text-center mb-2">
                  {t.explanation}
                </p>
                <p className="text-sm font-bold text-white/85 text-center italic">
                  "{correctSentence}"
                </p>
              </motion.div>
            )}

            {/* Next button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                if (roundIdx + 1 >= rounds.length) {
                  onDone(scoreRef.current, rounds.length);
                } else {
                  setRoundIdx(roundIdx + 1);
                  setSelectedIndices([]);
                  setFeedback(null);
                  setWrongIdx(null);
                }
              }}
              className="w-full py-4 rounded-2xl font-black text-white"
              style={{
                background: `linear-gradient(135deg, ${color}55, ${color}99)`,
                border: `2px solid ${color}`,
              }}
              whileTap={{ scale: 0.97 }}
            >
              {roundIdx + 1 >= rounds.length ? "Done!" : t.next}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error feedback */}
      <AnimatePresence>
        {feedback === "wrong" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center justify-center gap-2"
          >
            <X size={20} className="text-red-400" />
            <span className="text-sm font-bold text-red-400">
              {t.tryFix}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default SentenceBuilderExplorer;
