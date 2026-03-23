"use client";

import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, RotateCcw } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

interface SpellRound {
  word: string;
  hint: string;
  scrambledLetters: string[];
  category?: string;
  explanation?: string;
}

interface SpellRaceExplorerProps {
  rounds: SpellRound[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

const LABELS = {
  en: {
    spellWord: "Spell the word!",
    hint: "Hint:",
    perfect: "Perfect spelling!",
    next: "Next",
    done: "Done!",
    tapLetters: "Tap the letters in order",
    tryAgain: "Try again!",
    correct: "Correct!",
    mistake: "mistake",
    mistakes: "mistakes",
    back: "← Back",
    reset: "Reset",
    theWordIs: "The word is:",
    didYouKnow: "Did you know?",
    learnFromThis: "Learn from this!",
  },
  hu: {
    spellWord: "Betűzd ki a szót!",
    hint: "Tipp:",
    perfect: "Tökéletes helyesírás!",
    next: "Tovább",
    done: "Kész!",
    tapLetters: "Koppints a betűkre sorrendben",
    tryAgain: "Próbáld újra!",
    correct: "Helyes!",
    mistake: "hiba",
    mistakes: "hiba",
    back: "← Vissza",
    reset: "Újra",
    theWordIs: "A szó:",
    didYouKnow: "Tudtad?",
    learnFromThis: "Tanulj ebből!",
  },
  de: {
    spellWord: "Buchstabiere das Wort!",
    hint: "Hinweis:",
    perfect: "Perfekte Rechtschreibung!",
    next: "Weiter",
    done: "Fertig!",
    tapLetters: "Tippe die Buchstaben der Reihe nach",
    tryAgain: "Versuch nochmal!",
    correct: "Richtig!",
    mistake: "Fehler",
    mistakes: "Fehler",
    back: "← Zurück",
    reset: "Zurücksetzen",
    theWordIs: "Das Wort ist:",
    didYouKnow: "Wusstest du?",
    learnFromThis: "Lerne daraus!",
  },
  ro: {
    spellWord: "Literează cuvântul!",
    hint: "Indiciu:",
    perfect: "Ortografie perfectă!",
    next: "Următorul",
    done: "Gata!",
    tapLetters: "Atinge literele în ordine",
    tryAgain: "Încearcă din nou!",
    correct: "Corect!",
    mistake: "greșeală",
    mistakes: "greșeli",
    back: "← Înapoi",
    reset: "Resetare",
    theWordIs: "Cuvântul este:",
    didYouKnow: "Știai?",
    learnFromThis: "Învață din asta!",
  },
} as const;

const SpellRaceExplorer = memo(function SpellRaceExplorer({
  rounds,
  color,
  onDone,
  lang: langProp,
}: SpellRaceExplorerProps) {
  const { lang: contextLang } = useLang();
  const lang = langProp || contextLang;
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const [roundIdx, setRoundIdx] = useState(0);
  const [spellProgress, setSpellProgress] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [usedIndices, setUsedIndices] = useState<boolean[]>([]);
  const [flashIdx, setFlashIdx] = useState<number | null>(null);
  const [flashWrong, setFlashWrong] = useState(false);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [currentDiscovery, setCurrentDiscovery] = useState("");

  const wrongCountRef = useRef(0);
  const scoreRef = useRef(0);

  const round = rounds[roundIdx];
  const wordLength = round.word.length;
  const isComplete = spellProgress.length === wordLength;
  const isCorrect = spellProgress.join("").toLowerCase() === round.word.toLowerCase();
  const noMistakes = mistakes === 0;

  // Track which letter tiles have been used
  const localUsedIndices = useMemo(() => {
    const indices: boolean[] = new Array(round.scrambledLetters.length).fill(false);
    spellProgress.forEach((letter) => {
      const idx = round.scrambledLetters.findIndex(
        (l, i) => !indices[i] && l.toLowerCase() === letter.toLowerCase()
      );
      if (idx !== -1) indices[idx] = true;
    });
    return indices;
  }, [spellProgress, round.scrambledLetters]);

  const handleLetterTap = useCallback(
    (letterIdx: number) => {
      if (confirmed || isComplete) return;

      const letter = round.scrambledLetters[letterIdx];
      const nextIdx = spellProgress.length;

      if (letter.toLowerCase() === round.word[nextIdx].toLowerCase()) {
        // Correct letter — green flash
        setSpellProgress((prev) => [...prev, letter]);
        setFlashIdx(letterIdx);
        setTimeout(() => setFlashIdx(null), 800);
      } else {
        // Wrong letter — red flash + increment wrongCountRef
        wrongCountRef.current += 1;
        setMistakes((prev) => prev + 1);
        fireWrongAnswer({
          question: `Spell: "${round.hint}"`,
          wrongAnswer: letter,
          correctAnswer: round.word[nextIdx],
          topic: "Spell Race",
          lang: lang as string,
        });
        setFlashWrong(true);
        setTimeout(() => setFlashWrong(false), 800);
      }
    },
    [confirmed, isComplete, spellProgress, round]
  );

  const handleRemoveLast = useCallback(() => {
    if (spellProgress.length > 0) {
      setSpellProgress((prev) => prev.slice(0, -1));
    }
  }, [spellProgress]);

  const handleReset = useCallback(() => {
    setSpellProgress([]);
    setMistakes(0);
  }, []);

  const handleComplete = useCallback(() => {
    if (!isComplete || confirmed) return;
    setConfirmed(true);

    if (isCorrect) {
      if (noMistakes) {
        scoreRef.current += 1;
      } else if (mistakes === 1) {
        scoreRef.current += 0.5;
      }
      // else: 2+ mistakes = 0 points, but still marked correct
    }
  }, [isComplete, isCorrect, confirmed, noMistakes, mistakes]);

  const showDiscoveryFact = useCallback(() => {
    // Use explanation from round if available, else a generic fact
    const discovery = round.explanation || `"${round.word}" is a great word to practice!`;
    setCurrentDiscovery(discovery);
    setShowDiscovery(true);
    const timer = setTimeout(() => {
      setShowDiscovery(false);
      setTimeout(() => {
        handleNext();
      }, 300);
    }, 2500);
    return () => clearTimeout(timer);
  }, [round]);

  const handleNext = useCallback(() => {
    if (roundIdx + 1 >= rounds.length) {
      // Final score using wrongCountRef pattern
      const score = Math.max(1, rounds.length - Math.min(wrongCountRef.current, rounds.length - 1));
      onDone(score, rounds.length);
    } else {
      setRoundIdx((i) => i + 1);
      setSpellProgress([]);
      setMistakes(0);
      setConfirmed(false);
    }
  }, [roundIdx, rounds.length, onDone]);

  if (!round) return null;

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
        {t.spellWord}
      </motion.div>

      {/* Category badge */}
      {round.category && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center justify-center mx-auto px-3 py-1.5 rounded-full text-xs font-bold"
          style={{ background: `${color}25`, color }}
        >
          {round.category}
        </motion.div>
      )}

      {/* Hint */}
      <AnimatePresence mode="wait">
        <motion.div
          key={roundIdx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 text-center font-medium text-white/90 text-sm leading-relaxed"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}
        >
          {round.hint}
        </motion.div>
      </AnimatePresence>

      {/* Speak button - hear the word */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center"
      >
        <SpeakButton text={round.word} lang={lang ?? "en"} size={16} />
      </motion.div>

      {/* Word slots */}
      <motion.div className="flex justify-center gap-2 flex-wrap">
        {Array.from({ length: wordLength }).map((_, i) => (
          <motion.div
            key={i}
            className="w-10 h-10 rounded-xl border-2 border-dashed flex items-center justify-center font-bold text-lg transition-all"
            style={{
              borderColor: spellProgress[i]
                ? "#00FF88"
                : "rgba(255,255,255,0.3)",
              background: spellProgress[i]
                ? "rgba(0,255,136,0.1)"
                : "transparent",
              color: spellProgress[i] ? "#00FF88" : "rgba(255,255,255,0.5)",
            }}
            animate={
              spellProgress[i]
                ? {
                    scale: [0.8, 1.1, 1],
                    backgroundColor: [
                      "transparent",
                      `${color}40`,
                      "rgba(0,255,136,0.1)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 0.4 }}
          >
            {spellProgress[i] || ""}
          </motion.div>
        ))}
      </motion.div>

      {/* Mistake counter */}
      {mistakes > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center text-sm font-bold flex items-center justify-center gap-1"
          style={{ color: mistakes >= 2 ? "#FF6666" : "#FFB84D" }}
        >
          <X size={16} /> {mistakes} {mistakes === 1 ? t.mistake : t.mistakes}
        </motion.div>
      )}

      {/* Letter tiles */}
      {!confirmed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 bg-white/5 border border-white/10"
        >
          <p className="text-xs text-white/60 font-semibold text-center mb-3">
            {t.tapLetters}
          </p>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
            {round.scrambledLetters.map((letter, idx) => {
              const isUsed = localUsedIndices[idx];
              const isFlashing = flashIdx === idx;
              const isFlashingWrong = flashWrong && !isUsed;

              return (
                <motion.button
                  key={idx}
                  onClick={() => !isUsed && handleLetterTap(idx)}
                  className="w-10 h-10 rounded-xl font-bold text-base transition-all"
                  style={{
                    background: isFlashing
                      ? "#00FF88"
                      : isFlashingWrong
                      ? "#FF2D78"
                      : isUsed
                      ? "rgba(255,255,255,0.04)"
                      : `${color}25`,
                    color: isFlashing
                      ? "#000"
                      : isFlashingWrong
                      ? "#fff"
                      : isUsed
                      ? "rgba(255,255,255,0.3)"
                      : color,
                    border: `2px solid ${isUsed ? "rgba(255,255,255,0.1)" : color}`,
                    opacity: isUsed ? 0.5 : 1,
                    cursor: isUsed ? "not-allowed" : "pointer",
                  }}
                  animate={isFlashing ? { scale: [1, 1.15, 1] } : isFlashingWrong ? { scale: [1, 0.95, 1] } : {}}
                  transition={{ duration: 0.4 }}
                  whileTap={!isUsed ? { scale: 0.88 } : {}}
                  disabled={isUsed}
                >
                  {letter.toUpperCase()}
                </motion.button>
              );
            })}
          </div>

          {/* Control buttons */}
          <div className="flex gap-2 mt-4 justify-center">
            {spellProgress.length > 0 && (
              <motion.button
                onClick={handleRemoveLast}
                className="px-3 py-2 rounded-lg font-bold text-xs transition-colors flex items-center gap-1"
                style={{
                  background: "rgba(255,100,100,0.2)",
                  color: "#FF6666",
                  border: "1px solid rgba(255,100,100,0.4)",
                }}
                whileTap={{ scale: 0.94 }}
              >
                {t.back}
              </motion.button>
            )}
            {mistakes > 0 && (
              <motion.button
                onClick={handleReset}
                className="px-3 py-2 rounded-lg font-bold text-xs transition-colors flex items-center gap-1"
                style={{
                  background: `${color}20`,
                  color: color,
                  border: `1px solid ${color}40`,
                }}
                whileTap={{ scale: 0.94 }}
              >
                <RotateCcw size={12} /> {t.reset}
              </motion.button>
            )}
          </div>
        </motion.div>
      )}

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

      {/* Completion feedback */}
      <AnimatePresence>
        {isComplete && !confirmed && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleComplete}
            className="w-full py-3 rounded-2xl font-black text-white text-base"
            style={{
              background: `linear-gradient(135deg, ${color}55, ${color}99)`,
              border: `2px solid ${color}`,
            }}
            whileTap={{ scale: 0.97 }}
          >
            ✓ {t.correct}
          </motion.button>
        )}

        {confirmed && !showDiscovery && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3 items-center"
          >
            {isCorrect ? (
              <div className="flex items-center gap-2 justify-center">
                <Check size={20} className="text-green-400" />
                <span className="font-black text-base text-green-400">
                  {noMistakes ? t.perfect : t.correct}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 justify-center">
                <X size={20} className="text-red-400" />
                <span className="font-black text-base text-red-400">
                  {t.tryAgain}
                </span>
              </div>
            )}

            {confirmed && !isCorrect && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm font-bold"
                style={{ color }}
              >
                {t.theWordIs} <span className="text-base font-black">{round.word}</span>
              </motion.div>
            )}

            {/* Next button */}
            <motion.button
              onClick={showDiscoveryFact}
              className="w-full py-3 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base mt-2"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}
            >
              {roundIdx + 1 >= rounds.length ? t.done : t.next}
              {roundIdx + 1 < rounds.length && <span>→</span>}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default SpellRaceExplorer;
