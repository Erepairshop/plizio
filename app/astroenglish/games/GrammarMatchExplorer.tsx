"use client";
import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { CheckCircle2 } from "lucide-react";

export interface MatchRound {
  pairs: { rule: string; example: string; explanation?: string }[];
  instruction?: string;
}

interface GrammarMatchExplorerProps {
  rounds: MatchRound[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

const LABELS = {
  en: {
    matchInstruction: "Match the rule with its example!",
    tapRule: "Tap a rule first",
    tapExample: "Now tap the matching example",
    matched: "Matched!",
    wrongMatch: "Try another pair",
    roundComplete: "Round complete!",
    next: "Next",
    done: "Done!",
    roundOf: "Round",
  },
  hu: {
    matchInstruction: "Párosítsd a szabályt a példájával!",
    tapRule: "Először koppints egy szabályra",
    tapExample: "Most koppints a megfelelő példára",
    matched: "Párosítva!",
    wrongMatch: "Próbálj másik párt",
    roundComplete: "Kör kész!",
    next: "Tovább",
    done: "Kész!",
    roundOf: "Kör",
  },
  de: {
    matchInstruction: "Ordne die Regel dem Beispiel zu!",
    tapRule: "Tippe zuerst auf eine Regel",
    tapExample: "Tippe jetzt auf das passende Beispiel",
    matched: "Zugeordnet!",
    wrongMatch: "Versuche ein anderes Paar",
    roundComplete: "Runde fertig!",
    next: "Weiter",
    done: "Fertig!",
    roundOf: "Runde",
  },
  ro: {
    matchInstruction: "Potrivește regula cu exemplul!",
    tapRule: "Atinge mai întâi o regulă",
    tapExample: "Acum atinge exemplul potrivit",
    matched: "Potrivit!",
    wrongMatch: "Încearcă altă pereche",
    roundComplete: "Rundă completă!",
    next: "Următorul",
    done: "Gata!",
    roundOf: "Rundă",
  },
} as const;

interface MatchedPair {
  ruleIdx: number;
  exampleIdx: number;
}

const GrammarMatchExplorer = memo(function GrammarMatchExplorer({
  rounds,
  color,
  onDone,
  lang: langProp,
}: GrammarMatchExplorerProps) {
  const { lang: ctxLang } = useLang();
  const lang = (langProp || ctxLang) as keyof typeof LABELS;
  const t = LABELS[lang] ?? LABELS.en;

  const [roundIdx, setRoundIdx] = useState(0);
  const [matched, setMatched] = useState<MatchedPair[]>([]);
  const [selectedRule, setSelectedRule] = useState<number | null>(null);
  const [selectedExample, setSelectedExample] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanationText, setExplanationText] = useState("");
  const [score, setScore] = useState(0);

  const scoreRef = useRef(0);
  const currentRound = rounds[roundIdx];
  const pairs = currentRound.pairs;

  // Shuffle examples for the current round
  const shuffledExamples = useMemo(() => {
    const exs = pairs.map((p, i) => ({ example: p.example, originalIdx: i }));
    return exs.sort(() => Math.random() - 0.5);
  }, [roundIdx, pairs]); // eslint-disable-line react-hooks/exhaustive-deps

  const totalPairs = pairs.length;
  const completedPairs = matched.length;
  const roundProgress = completedPairs / totalPairs;

  const handleRuleTap = useCallback((ruleIdx: number) => {
    if (completedPairs === totalPairs) return;
    if (showExplanation) return;
    setSelectedRule(ruleIdx);
    setSelectedExample(null);
  }, [completedPairs, totalPairs, showExplanation]);

  const handleExampleTap = useCallback(
    (exampleOriginalIdx: number) => {
      if (completedPairs === totalPairs) return;
      if (showExplanation) return;
      if (selectedRule === null) return;

      const isCorrectMatch = selectedRule === exampleOriginalIdx;

      if (isCorrectMatch) {
        // Correct match
        setMatched((m) => [...m, { ruleIdx: selectedRule, exampleIdx: exampleOriginalIdx }]);
        scoreRef.current += 1;
        setScore(scoreRef.current);
        setExplanationText(pairs[selectedRule].explanation || t.matched);
        setShowExplanation(true);

        setTimeout(() => {
          setShowExplanation(false);
          setSelectedRule(null);
          setSelectedExample(null);

          // If all pairs matched, advance to next round or done
          if (completedPairs + 1 === totalPairs) {
            setTimeout(() => {
              if (roundIdx + 1 >= rounds.length) {
                onDone(scoreRef.current, rounds.reduce((acc, r) => acc + r.pairs.length, 0));
              } else {
                setRoundIdx((r) => r + 1);
                setMatched([]);
                setSelectedRule(null);
                setSelectedExample(null);
              }
            }, 800);
          }
        }, 2000);
      } else {
        // Wrong match
        setSelectedExample(exampleOriginalIdx);
        setTimeout(() => {
          setSelectedExample(null);
          setSelectedRule(null);
        }, 500);
      }
    },
    [
      selectedRule,
      completedPairs,
      totalPairs,
      showExplanation,
      pairs,
      roundIdx,
      rounds.length,
      onDone,
      t.matched,
    ]
  );

  if (!currentRound) return null;

  const isRoundDone = completedPairs === totalPairs;

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto px-3">
      {/* Header: Round progress + Score */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase text-white/60 mb-1">
            {t.roundOf} {roundIdx + 1}/{rounds.length}
          </div>
          <div className="flex gap-2">
            {pairs.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  background: matched.some((m) => m.ruleIdx === i || m.exampleIdx === i)
                    ? color
                    : "rgba(255,255,255,0.12)",
                }}
              />
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold uppercase text-white/60 mb-1">Matched</div>
          <div className="text-2xl font-black text-white">
            {completedPairs}/{totalPairs}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <motion.div
        className="h-1.5 rounded-full"
        animate={{ width: `${roundProgress * 100}%` }}
        style={{ background: color }}
      />

      {/* Instruction */}
      <p className="text-center text-sm font-semibold text-white/70">
        {currentRound.instruction || t.matchInstruction}
      </p>

      {/* Explanation overlay (if shown) */}
      <AnimatePresence>
        {showExplanation ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="rounded-2xl p-4 text-center"
            style={{ background: `${color}20`, border: `1.5px solid ${color}60` }}
          >
            <p className="text-base font-bold text-white mb-2">{t.matched}</p>
            <p className="text-sm font-semibold text-white/80">{explanationText}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Two-column match area */}
      <div className="grid grid-cols-2 gap-4 min-h-96">
        {/* Left column: Rules */}
        <div className="flex flex-col gap-2">
          {pairs.map((pair, i) => {
            const isMatched = matched.some((m) => m.ruleIdx === i);
            const isSelected = selectedRule === i;
            return (
              <motion.button
                key={i}
                onClick={() => !isMatched && handleRuleTap(i)}
                disabled={isMatched || showExplanation}
                className="rounded-2xl p-3 text-left font-semibold text-sm transition-all"
                style={{
                  background: isMatched
                    ? `${color}30`
                    : isSelected
                      ? `${color}40`
                      : "rgba(255,255,255,0.08)",
                  border: `2px solid ${
                    isMatched
                      ? color
                      : isSelected
                        ? color
                        : "rgba(255,255,255,0.12)"
                  }`,
                  color: isMatched ? color : "#fff",
                  opacity: isMatched ? 0.7 : 1,
                }}
                whileTap={!isMatched && !showExplanation ? { scale: 0.97 } : {}}
              >
                <div className="flex items-start gap-2">
                  {isMatched && <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" />}
                  <span>{pair.rule}</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right column: Examples (shuffled) */}
        <div className="flex flex-col gap-2">
          {shuffledExamples.map(({ example, originalIdx }) => {
            const isMatched = matched.some((m) => m.exampleIdx === originalIdx);
            const isSelected = selectedExample === originalIdx;
            const isCategoryColor = color;
            return (
              <motion.button
                key={originalIdx}
                onClick={() => !isMatched && handleExampleTap(originalIdx)}
                disabled={isMatched || showExplanation}
                className="rounded-2xl p-3 text-left font-semibold text-sm transition-all"
                style={{
                  background: isMatched
                    ? `${isCategoryColor}30`
                    : isSelected
                      ? "rgba(255,50,50,0.2)"
                      : "rgba(255,255,255,0.08)",
                  border: `2px solid ${
                    isMatched
                      ? isCategoryColor
                      : isSelected
                        ? "#FF4444"
                        : "rgba(255,255,255,0.12)"
                  }`,
                  color: isMatched ? isCategoryColor : "#fff",
                  opacity: isMatched ? 0.7 : 1,
                }}
                whileTap={!isMatched && !showExplanation ? { scale: 0.97 } : {}}
              >
                <div className="flex items-start gap-2">
                  {isMatched && <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" />}
                  <span>{example}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Help text (if no rule selected) */}
      <AnimatePresence>
        {!selectedRule && !showExplanation && !isRoundDone ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-xs font-semibold text-white/50 px-3"
          >
            {t.tapRule}
          </motion.p>
        ) : selectedRule !== null && !selectedExample && !showExplanation ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-xs font-semibold text-white/50 px-3"
          >
            {t.tapExample}
          </motion.p>
        ) : null}
      </AnimatePresence>

      {/* Round done - show next button */}
      <AnimatePresence>
        {isRoundDone && !showExplanation ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="flex flex-col gap-2 items-center"
          >
            <p className="text-base font-black" style={{ color }}>
              {t.roundComplete}
            </p>
            <motion.button
              onClick={() => {
                if (roundIdx + 1 >= rounds.length) {
                  onDone(scoreRef.current, rounds.reduce((acc, r) => acc + r.pairs.length, 0));
                } else {
                  setRoundIdx((r) => r + 1);
                  setMatched([]);
                  setSelectedRule(null);
                  setSelectedExample(null);
                }
              }}
              className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
              style={{
                background: `linear-gradient(135deg, ${color}55, ${color}99)`,
                border: `2px solid ${color}`,
              }}
              whileTap={{ scale: 0.97 }}
            >
              {roundIdx + 1 >= rounds.length ? t.done : t.next}
            </motion.button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
});

export default GrammarMatchExplorer;
