"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FactSwipeRound, FactSwipeCard } from "@/lib/visualLab/types";
import { getLanguage } from "@/lib/language";

const LABELS: Record<string, any> = {
  de: {
    gameName: "Fakten-Check",
    correct: "Richtig!",
    wrong: "Falsch!",
    card: "Karte",
    of: "von",
    done: "Geschafft!",
    yourScore: "Dein Score",
    false: "Falsch",
    true: "Wahr",
  },
  en: {
    gameName: "Fact Check",
    correct: "Correct!",
    wrong: "Wrong!",
    card: "Card",
    of: "of",
    done: "Done!",
    yourScore: "Your Score",
    false: "False",
    true: "True",
  },
  hu: {
    gameName: "Tény-ellenőrzés",
    correct: "Helyes!",
    wrong: "Hibás!",
    card: "Kártya",
    of: "/",
    done: "Kész!",
    yourScore: "Pontszámod",
    false: "Hamis",
    true: "Igaz",
  },
  ro: {
    gameName: "Verificarea faptelor",
    correct: "Corect!",
    wrong: "Greșit!",
    card: "Cardul",
    of: "din",
    done: "Gata!",
    yourScore: "Scorul tău",
    false: "Fals",
    true: "Adevărat",
  },
};

interface Props {
  round: FactSwipeRound;
  onDone?: (score: number, total: number) => void;
}

export default function FactSwipeGame({ round, onDone }: Props) {
  const [lang, setLang] = useState("de");
  const [cards, setCards] = useState<FactSwipeCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  useEffect(() => {
    setLang(getLanguage());
  }, []);

  const t = LABELS[lang] || LABELS.en;

  useEffect(() => {
    setCards([...round.cards].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
  }, [round]);

  const handleSwipe = (guess: boolean) => {
    if (currentIndex >= cards.length || feedback) return;

    const card = cards[currentIndex];
    const isCorrect = guess === card.isTrue;
    
    if (isCorrect) setScore((s) => s + 1);
    
    setFeedback({
      isCorrect,
      text: card.explanation || (isCorrect ? t.correct : t.wrong),
    });

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex + 1 >= cards.length) {
        onDone?.(score + (isCorrect ? 1 : 0), cards.length);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    }, 2500);
  };

  const currentCard = cards[currentIndex];
  const isFinished = currentIndex >= cards.length;

  return (
    <div
      className="rounded-[30px] border p-6 text-white shadow-2xl min-h-[450px] flex flex-col"
      style={{
        background: `radial-gradient(circle at top, ${round.theme.accent}33 0%, ${round.theme.bg} 72%, #040816 100%)`,
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div className="mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-white/45">{t.gameName}</p>
        <h2 className="text-2xl font-black text-white/90">{round.title}</h2>
        <p className="mt-2 text-sm font-medium text-cyan-200">{round.instruction}</p>
        {!isFinished && (
          <p className="mt-2 text-xs text-white/40">
            {t.card} {currentIndex + 1} {t.of} {cards.length}
          </p>
        )}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative">
        <AnimatePresence mode="wait">
          {!isFinished && currentCard && !feedback && (
            <motion.div
              key={currentCard.id}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -20 }}
              className="w-full max-w-sm rounded-[24px] border p-8 text-center shadow-xl"
              style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="text-6xl mb-4">{currentCard.emoji}</div>
              <h3 className="text-xl font-semibold leading-relaxed text-white/90">{currentCard.statement}</h3>
            </motion.div>
          )}

          {feedback && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-full max-w-sm rounded-[24px] border p-8 text-center shadow-xl"
              style={{
                background: feedback.isCorrect ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
                borderColor: feedback.isCorrect ? "rgba(16,185,129,0.4)" : "rgba(239,68,68,0.4)",
              }}
            >
              <div className={`text-3xl font-black mb-3 ${feedback.isCorrect ? "text-emerald-400" : "text-red-400"}`}>
                {feedback.isCorrect ? `${t.correct} ✓` : `${t.wrong} ✗`}
              </div>
              <p className="text-white/80">{feedback.text}</p>
            </motion.div>
          )}
          
          {isFinished && !feedback && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white/90 mb-2">{t.done}</h3>
              <p className="text-lg text-cyan-200">{t.yourScore}: {score} / {cards.length}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isFinished && (
        <div className="mt-8 flex justify-center gap-6">
          <button
            disabled={!!feedback}
            onClick={() => handleSwipe(false)}
            className="flex-1 max-w-[140px] rounded-full border border-red-500/50 bg-red-500/10 py-4 font-bold text-red-300 transition-all hover:bg-red-500/20 active:scale-95 disabled:opacity-50"
          >
            {t.false}
          </button>
          <button
            disabled={!!feedback}
            onClick={() => handleSwipe(true)}
            className="flex-1 max-w-[140px] rounded-full border border-emerald-500/50 bg-emerald-500/10 py-4 font-bold text-emerald-300 transition-all hover:bg-emerald-500/20 active:scale-95 disabled:opacity-50"
          >
            {t.true}
          </button>
        </div>
      )}
    </div>
  );
}
