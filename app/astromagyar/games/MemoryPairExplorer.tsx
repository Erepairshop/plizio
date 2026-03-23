"use client";
import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

interface MemoryPair {
  word: string;
  match: string;
}

interface MemoryPairExplorerProps {
  pairs: MemoryPair[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

// LABELS with ALL 4 languages
const LABELS = {
  en: {
    title: "Memory Pairs",
    hint: "Find matching pairs!",
    correct: "Perfect match!",
    wrong: "Not a match",
    finished: "All pairs found!",
    yourScore: "Your Score",
    continue: "Continue",
    didYouKnow: "Did you know?",
  },
  hu: {
    title: "Memória Párok",
    hint: "Keress párosokat!",
    correct: "Tökéletes találat!",
    wrong: "Nem passzol",
    finished: "Minden párt megtaláltál!",
    yourScore: "Az te pontod",
    continue: "Folytatás",
    didYouKnow: "Tudtad?",
  },
  de: {
    title: "Speicherpaarungen",
    hint: "Finde passende Paare!",
    correct: "Perfekter Treffer!",
    wrong: "Keine Übereinstimmung",
    finished: "Alle Paare gefunden!",
    yourScore: "Dein Score",
    continue: "Weiter",
    didYouKnow: "Wusstest du?",
  },
  ro: {
    title: "Perechi de Memorie",
    hint: "Găsește perechi potrivite!",
    correct: "Potrivire perfectă!",
    wrong: "Nu se potrivește",
    finished: "Toate perechile găsite!",
    yourScore: "Scorul Tău",
    continue: "Continuă",
    didYouKnow: "Știai că?",
  },
} as const;

type CardState = "face-down" | "face-up-word" | "face-up-match" | "matched";

interface CardData {
  id: string;
  type: "word" | "match";
  content: string;
  pairIndex: number;
  state: CardState;
}

const MemoryPairExplorer = memo(function MemoryPairExplorer({
  pairs,
  color,
  onDone,
  lang: langProp,
}: MemoryPairExplorerProps) {
  const { lang: ctxLang } = useLang();
  const lang = langProp || ctxLang;
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const wrongCountRef = useRef(0);
  const totalPairs = pairs.length;

  // Initialize cards: 2 cards per pair (word + match), shuffled
  const cards = useMemo(() => {
    const shuffled: CardData[] = [];
    pairs.forEach((pair, idx) => {
      shuffled.push({
        id: `${idx}-word`,
        type: "word",
        content: pair.word,
        pairIndex: idx,
        state: "face-down" as const,
      });
      shuffled.push({
        id: `${idx}-match`,
        type: "match",
        content: pair.match,
        pairIndex: idx,
        state: "face-down" as const,
      });
    });
    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [pairs]);

  const [cardStates, setCardStates] = useState<CardData[]>(cards);
  const [flipped, setFlipped] = useState<Set<string>>(new Set());
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set());
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "correct" | "wrong" | null;
    show: boolean;
  }>({ type: null, show: false });
  const [discoveryShown, setDiscoveryShown] = useState(false);

  // Check for match after flipping 2 cards
  const checkMatch = useCallback(async (newFlipped: Set<string>) => {
    if (newFlipped.size !== 2) return;

    const flippedCards = cardStates.filter((c) => newFlipped.has(c.id));
    const [card1, card2] = flippedCards;

    // Check if they're the same pair
    const isMatch = card1.pairIndex === card2.pairIndex;

    if (isMatch) {
      setFeedback({ type: "correct", show: true });
      setTimeout(() => setFeedback({ type: null, show: false }), 800);

      const newMatched = new Set(matchedPairs);
      newMatched.add(card1.pairIndex);
      setMatchedPairs(newMatched);

      // Auto-flip matched cards to show they're locked
      setTimeout(() => {
        setFlipped(new Set());
        if (newMatched.size === totalPairs) {
          setTimeout(() => setGameOver(true), 300);
        }
      }, 800);
    } else {
      wrongCountRef.current += 1;
      fireWrongAnswer({
        question: `${card1.content} + ${card2.content}`,
        wrongAnswer: `${card1.content} ↔ ${card2.content}`,
        correctAnswer: `${pairs[card1.pairIndex].word} ↔ ${pairs[card1.pairIndex].match}`,
        topic: "Memory Pairs",
        lang: lang as string,
      });
      setFeedback({ type: "wrong", show: true });
      setTimeout(() => setFeedback({ type: null, show: false }), 800);

      // Flip back
      setTimeout(() => {
        setFlipped(new Set());
      }, 1000);
    }
  }, [cardStates, matchedPairs, totalPairs]);

  // Handle card click
  const handleCardClick = useCallback(
    (cardId: string) => {
      if (gameOver || flipped.has(cardId) || matchedPairs.has(cardStates.find((c) => c.id === cardId)?.pairIndex ?? -1)) {
        return;
      }

      const newFlipped = new Set(flipped);
      newFlipped.add(cardId);
      setFlipped(newFlipped);

      if (newFlipped.size === 2) {
        checkMatch(newFlipped);
      }
    },
    [flipped, matchedPairs, gameOver, cardStates, checkMatch]
  );

  const handleContinue = useCallback(() => {
    const score = Math.max(1, totalPairs - Math.min(wrongCountRef.current, totalPairs - 1));
    onDone(score, totalPairs);
  }, [totalPairs, onDone]);

  // Show discovery card on first match
  const handleFirstMatch = useCallback(() => {
    if (!discoveryShown && matchedPairs.size === 1) {
      setDiscoveryShown(true);
      setTimeout(() => setDiscoveryShown(false), 2500);
    }
  }, [discoveryShown, matchedPairs.size]);

  // Trigger discovery on first match
  useMemo(() => {
    handleFirstMatch();
  }, [matchedPairs.size, handleFirstMatch]);

  const progressPercentage = (matchedPairs.size / totalPairs) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060614] to-[#0F0F1F] flex flex-col items-center justify-center max-w-lg mx-auto px-4 py-6 gap-6">
      {/* Progress bar */}
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between text-xs font-bold text-white/60">
          <span>{t.title}</span>
          <span>
            {matchedPairs.size}/{totalPairs}
          </span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: color }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Hint text */}
      {!gameOver && (
        <p className="text-sm font-semibold text-white/60 text-center">{t.hint}</p>
      )}

      {/* Game over score display */}
      {gameOver && (
        <motion.div
          className="text-center py-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-white/60 text-sm font-bold uppercase mb-2">{t.finished}</p>
          <p className="text-4xl font-black text-white mb-1">
            {Math.max(1, totalPairs - Math.min(wrongCountRef.current, totalPairs - 1))}/{totalPairs}
          </p>
          <p className="text-white/40 text-xs font-semibold">{t.yourScore}</p>
        </motion.div>
      )}

      {/* Card grid */}
      {!gameOver && (
        <div className="grid grid-cols-4 gap-3 w-full">
          {cardStates.map((card) => {
            const isFlipped = flipped.has(card.id) || matchedPairs.has(card.pairIndex);
            const isMatched = matchedPairs.has(card.pairIndex);

            return (
              <motion.button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                disabled={isMatched || flipped.size === 2}
                className={`relative aspect-square rounded-2xl border-2 font-bold text-sm transition-all ${
                  isMatched
                    ? "bg-green-500/20 border-green-500/50 cursor-default opacity-70"
                    : isFlipped
                      ? `bg-white/10 border-[${color}] text-white`
                      : "bg-white/5 border-white/20 text-white/40 hover:border-white/40"
                }`}
                style={
                  isMatched || isFlipped ? { borderColor: color } : undefined
                }
                whileHover={!isMatched && !isFlipped ? { scale: 1.05 } : {}}
                whileTap={!isMatched && !isFlipped ? { scale: 0.95 } : {}}
              >
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  animate={{ rotateY: isFlipped ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                  style={{ perspective: "1000px" }}
                >
                  {isFlipped ? (
                    <span className="text-xs text-center leading-tight px-1 break-words">
                      {card.content}
                    </span>
                  ) : (
                    <span className="text-xl font-bold opacity-50">?</span>
                  )}
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      )}

      {/* Feedback flash */}
      <AnimatePresence>
        {feedback.show && (
          <motion.div
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-white backdrop-blur-sm z-40 ${
              feedback.type === "correct"
                ? "bg-green-500/30 border border-green-500/50"
                : "bg-red-500/30 border border-red-500/50"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {feedback.type === "correct" ? (
              <>
                <Check size={20} className="text-green-400" />
                <span>{t.correct}</span>
              </>
            ) : (
              <>
                <X size={20} className="text-red-400" />
                <span>{t.wrong}</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Discovery card */}
      <AnimatePresence>
        {discoveryShown && (
          <motion.div
            className="fixed bottom-6 left-6 right-6 p-4 rounded-2xl border-2 border-purple-500/50 bg-purple-500/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white/80 text-xs font-bold uppercase mb-1">{t.didYouKnow}?</p>
            <p className="text-white/70 text-sm">Great progress! Keep matching pairs.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Continue button */}
      {gameOver && (
        <motion.button
          onClick={handleContinue}
          className="w-full py-3 rounded-2xl font-black text-white transition-all"
          style={{ background: color }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {t.continue}
        </motion.button>
      )}
    </div>
  );
});

export default MemoryPairExplorer;
