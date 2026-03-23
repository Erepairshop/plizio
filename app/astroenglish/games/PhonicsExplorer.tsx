"use client";

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

interface PhonicsRound {
  sound: string;
  words: string[];
  correctIndices: number[];
  explanation?: string;
}

interface PhonicsExplorerProps {
  rounds: PhonicsRound[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

const LABELS = {
  en: {
    phonics: "Sound Hunt!",
    selectWords: "Select all words containing this sound:",
    check: "Check",
    correct: "Perfect!",
    incorrect: "Not quite right.",
    learnFromThis: "Learn from this!",
    explanation: "Why?",
    next: "Next",
    done: "Done!",
    didYouKnow: "Did you know?",
    tryAgain: "Try again!",
    sound: "Sound:",
    missed: "You missed some words.",
    extra: "Some of those don't have this sound.",
  },
  hu: {
    phonics: "Hangjárat!",
    selectWords: "Válaszd ki az összes szót, amely ezt a hangot tartalmazza:",
    check: "Ellenőrzés",
    correct: "Tökéletes!",
    incorrect: "Nem egészen jó.",
    learnFromThis: "Tanulj ebből!",
    explanation: "Miért?",
    next: "Tovább",
    done: "Kész!",
    didYouKnow: "Tudtad?",
    tryAgain: "Próbáld újra!",
    sound: "Hang:",
    missed: "Kimaradtak szavak.",
    extra: "Ezek nem tartalmaznak ilyen hangot.",
  },
  de: {
    phonics: "Lautsuche!",
    selectWords: "Wähle alle Wörter aus, die diesen Laut enthalten:",
    check: "Überprüfen",
    correct: "Perfekt!",
    incorrect: "Das ist nicht ganz richtig.",
    learnFromThis: "Lerne daraus!",
    explanation: "Warum?",
    next: "Weiter",
    done: "Fertig!",
    didYouKnow: "Wusstest du?",
    tryAgain: "Versuch nochmal!",
    sound: "Laut:",
    missed: "Einige Wörter fehlen.",
    extra: "Diese haben diesen Laut nicht.",
  },
  ro: {
    phonics: "Vânătoare de sunete!",
    selectWords: "Selectează toate cuvintele care conțin acest sunet:",
    check: "Verifică",
    correct: "Perfect!",
    incorrect: "Nu e chiar corect.",
    learnFromThis: "Învață din asta!",
    explanation: "De ce?",
    next: "Următorul",
    done: "Gata!",
    didYouKnow: "Știai?",
    tryAgain: "Încearcă din nou!",
    sound: "Sunet:",
    missed: "Ai ratat cuvinte.",
    extra: "Unele nu au acest sunet.",
  },
} as const;

const PhonicsExplorer = memo(function PhonicsExplorer({
  rounds,
  color,
  onDone,
  lang: langProp,
}: PhonicsExplorerProps) {
  const { lang: contextLang } = useLang();
  const lang = langProp || contextLang;
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const [roundIdx, setRoundIdx] = useState(0);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [confirmed, setConfirmed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [currentDiscovery, setCurrentDiscovery] = useState("");
  const [flashIndices, setFlashIndices] = useState<Set<number>>(new Set());

  const wrongCountRef = useRef(0);

  const round = rounds[roundIdx];
  if (!round) return null;

  const handleToggleWord = useCallback(
    (idx: number) => {
      if (confirmed) return;
      const newSelected = new Set(selected);
      if (newSelected.has(idx)) {
        newSelected.delete(idx);
      } else {
        newSelected.add(idx);
      }
      setSelected(newSelected);
    },
    [selected, confirmed]
  );

  const handleCheck = useCallback(() => {
    if (confirmed) return;

    const correctSet = new Set(round.correctIndices);
    const selectedArray = Array.from(selected);

    // Check if user selection matches correct answer
    const isExactMatch =
      selectedArray.length === round.correctIndices.length &&
      selectedArray.every((idx) => correctSet.has(idx));

    setConfirmed(true);

    if (isExactMatch) {
      // All correct
      setFlashIndices(new Set(round.correctIndices));
      setIsCorrect(true);
      setTimeout(() => setFlashIndices(new Set()), 800);
    } else {
      // Incorrect - flash all selected (both right and wrong)
      setFlashIndices(new Set(selectedArray));
      setIsCorrect(false);
      wrongCountRef.current += 1;
      fireWrongAnswer({
        question: `${t.selectWords} "${round.sound}"`,
        wrongAnswer: selectedArray.map((i) => round.words[i]).join(", "),
        correctAnswer: round.correctIndices.map((i) => round.words[i]).join(", "),
        topic: "Phonics",
        lang: lang as string,
      });
      setTimeout(() => setFlashIndices(new Set()), 800);
    }
  }, [confirmed, round, selected]);

  const handleNext = useCallback(() => {
    if (roundIdx + 1 >= rounds.length) {
      const score = Math.max(
        1,
        rounds.length - Math.min(wrongCountRef.current, rounds.length - 1)
      );
      onDone(score, rounds.length);
    } else {
      // Show discovery card before advancing
      setShowDiscovery(true);
      const discovery =
        round.explanation ||
        (lang === "hu"
          ? "Jó volt! Lépj tovább a következő hangra."
          : lang === "de"
            ? "Gut gemacht! Fahre mit dem nächsten Laut fort."
            : lang === "ro"
              ? "Bun lucru! Treci la următorul sunet."
              : "Well done! Move on to the next sound.");
      setCurrentDiscovery(discovery);

      // Auto-advance after 2.5s
      setTimeout(() => {
        setRoundIdx((i) => i + 1);
        setSelected(new Set());
        setConfirmed(false);
        setIsCorrect(false);
        setShowExplanation(false);
        setShowDiscovery(false);
      }, 2500);
    }
  }, [roundIdx, rounds.length, onDone, round, lang]);

  const canCheck = selected.size > 0 && !confirmed;
  const correctSet = new Set(round.correctIndices);
  const selectedArray = Array.from(selected);
  const isMissing = selectedArray.length < round.correctIndices.length;
  const hasExtra = selectedArray.some((idx) => !correctSet.has(idx));

  return (
    <div className="flex flex-col gap-6 w-full max-w-lg mx-auto px-4 py-6">
      {/* Progress */}
      <div className="flex gap-1.5">
        {rounds.map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 h-2 rounded-full transition-all"
            style={{
              background:
                i < roundIdx ? "#00FF88" : i === roundIdx ? color : "rgba(255,255,255,0.12)",
            }}
          />
        ))}
      </div>

      {/* Instruction */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-sm font-semibold text-white/70"
      >
        {t.selectWords}
      </motion.div>

      {/* Sound badge */}
      <AnimatePresence mode="wait">
        <motion.div
          key={roundIdx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl p-6 text-center"
          style={{ background: `${color}20`, border: `2px solid ${color}` }}
        >
          <p className="text-xs font-bold uppercase text-white/60 mb-2">{t.sound}</p>
          <motion.p
            animate={!confirmed ? { scale: [1, 1.08, 1] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-4xl font-black"
            style={{ color }}
          >
            {round.sound}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      {/* Discovery card */}
      {showDiscovery && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 text-center"
          style={{
            background: "rgba(180,77,255,0.1)",
            border: "1.5px solid rgba(180,77,255,0.3)",
          }}
        >
          <p className="text-xs font-bold uppercase text-purple-400 mb-1">
            💡 {t.didYouKnow}
          </p>
          <p className="text-sm font-semibold text-white/80">{currentDiscovery}</p>
        </motion.div>
      )}

      {/* Words grid */}
      {!showDiscovery && (
        <AnimatePresence mode="wait">
          <motion.div
            key={roundIdx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-2.5"
          >
            {round.words.map((word, i) => {
              const isSelected = selected.has(i);
              const isFlashing = flashIndices.has(i);
              const isCorrectWord = correctSet.has(i);
              let bgColor = "rgba(255,255,255,0.08)";
              let borderColor = "rgba(255,255,255,0.2)";
              let textColor = "text-white/80";

              if (confirmed) {
                if (isCorrectWord) {
                  bgColor = "#00FF88";
                  borderColor = "#00FF88";
                  textColor = "text-black font-bold";
                } else if (isSelected) {
                  bgColor = "#FF2D78";
                  borderColor = "#FF2D78";
                  textColor = "text-white font-bold";
                }
              } else if (isSelected) {
                bgColor = color;
                borderColor = color;
                textColor = "text-black font-bold";
              }

              return (
                <motion.button
                  key={i}
                  onClick={() => handleToggleWord(i)}
                  className={`rounded-2xl py-3 px-4 font-bold border-2 transition-all ${textColor}`}
                  style={{
                    backgroundColor: isFlashing ? (isCorrectWord ? "#00FF88" : "#FF2D78") : bgColor,
                    borderColor: isFlashing ? (isCorrectWord ? "#00FF88" : "#FF2D78") : borderColor,
                  }}
                  whileHover={!confirmed ? { scale: 1.05 } : {}}
                  whileTap={!confirmed ? { scale: 0.97 } : {}}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>{word}</span>
                    {confirmed && isCorrectWord && <Check size={16} className="flex-shrink-0" />}
                    {confirmed && isSelected && !isCorrectWord && (
                      <X size={16} className="flex-shrink-0" />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Feedback message */}
      {confirmed && !showDiscovery && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm font-semibold"
          style={{ color: isCorrect ? "#00FF88" : "#FF2D78" }}
        >
          {isCorrect ? t.correct : t.incorrect}
          {!isCorrect && (
            <div className="mt-1 text-xs text-white/60 font-normal">
              {isMissing && <p>🔍 {t.missed}</p>}
              {hasExtra && <p>❌ {t.extra}</p>}
            </div>
          )}
        </motion.div>
      )}

      {/* Explanation */}
      {confirmed && round.explanation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl p-3 text-center"
          style={{ background: `${color}12`, border: `1.5px solid ${color}30` }}
        >
          <p className="text-xs font-bold uppercase text-white/60 mb-1">💡 {t.explanation}</p>
          <p className="text-sm font-semibold text-white/80">{round.explanation}</p>
        </motion.div>
      )}

      {/* Check / Next button */}
      {!showDiscovery && (
        <motion.button
          onClick={confirmed ? handleNext : handleCheck}
          disabled={!canCheck && !confirmed}
          className="w-full py-3 rounded-2xl font-black text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: confirmed
              ? `linear-gradient(135deg, ${color}, ${color}cc)`
              : canCheck
                ? `linear-gradient(135deg, ${color}, ${color}cc)`
                : "rgba(255,255,255,0.08)",
          }}
          whileHover={canCheck || confirmed ? { scale: 1.02 } : {}}
          whileTap={canCheck || confirmed ? { scale: 0.98 } : {}}
        >
          {confirmed ? (roundIdx + 1 >= rounds.length ? t.done : t.next) : t.check}
        </motion.button>
      )}
    </div>
  );
});

export default PhonicsExplorer;
