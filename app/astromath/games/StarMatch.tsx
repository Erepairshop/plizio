"use client";
import { memo, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { speak } from "@/lib/astromath-tts";
import { T } from "@/app/astromath/games/translations";
import { generateMatchPairs } from "@/lib/astromath";
import type { MathQuestion } from "@/lib/mathCurriculum";

const SM_LABELS = {
  en: { hint: "Tap a question, then the matching answer", round: "Round" },
  hu: { hint: "Koppints a kérdésre, majd a helyes válaszra", round: "Kör" },
  de: { hint: "Aufgabe antippen, dann die passende Antwort", round: "Runde" },
  ro: { hint: "Atinge întrebarea, apoi răspunsul potrivit", round: "Rundă" },
};
const SM_TOTAL_ROUNDS = 3;

function buildRound(questions: MathQuestion[], offset: number) {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  const pairs = generateMatchPairs(shuffled.slice(offset % Math.max(1, questions.length - 4)));
  const answerOrder = [...pairs.map((_, i) => i)].sort(() => Math.random() - 0.5);
  return { pairs, answerOrder };
}

const StarMatch = memo(function StarMatch({ questions, color, onDone }: {
  questions: MathQuestion[]; color: string; onDone: (score: number, total: number) => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const sl = SM_LABELS[lang as keyof typeof SM_LABELS] ?? SM_LABELS.en;

  const [round, setRound] = useState(0);
  const [completedRounds, setCompletedRounds] = useState(0);
  const [{ pairs, answerOrder }, setRoundData] = useState(() => buildRound(questions, 0));
  const [selectedQ, setSelectedQ] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [wrongQ, setWrongQ] = useState<number | null>(null);
  const [wrongA, setWrongA] = useState<number | null>(null);
  const [roundFlash, setRoundFlash] = useState(false);
  const lockRef = useRef(false);
  const totalScore = useRef(0);

  const startNextRound = useCallback((nextRound: number) => {
    setRound(nextRound);
    setRoundData(buildRound(questions, nextRound));
    setMatched(new Set());
    setSelectedQ(null);
    setRoundFlash(false);
  }, [questions]);

  const tapQuestion = useCallback((idx: number) => {
    if (lockRef.current || matched.has(idx)) return;
    speak(pairs[idx].left, lang);
    setSelectedQ(idx === selectedQ ? null : idx);
  }, [selectedQ, matched, pairs, lang]);

  const tapAnswer = useCallback((pairIdx: number) => {
    if (lockRef.current || matched.has(pairIdx)) return;
    speak(pairs[pairIdx].right, lang);

    if (selectedQ === null) { setSelectedQ(pairIdx); return; }

    if (selectedQ === pairIdx) {
      totalScore.current += 1;
      const newMatched = new Set(matched);
      newMatched.add(pairIdx);
      setMatched(newMatched);
      setSelectedQ(null);

      if (newMatched.size === pairs.length) {
        const nextCompleted = completedRounds + 1;
        setCompletedRounds(nextCompleted);
        if (nextCompleted >= SM_TOTAL_ROUNDS) {
          lockRef.current = true;
          setRoundFlash(true);
          setTimeout(() => onDone(totalScore.current, SM_TOTAL_ROUNDS * pairs.length), 1200);
        } else {
          lockRef.current = true;
          setRoundFlash(true);
          setTimeout(() => { lockRef.current = false; startNextRound(round + 1); }, 900);
        }
      }
    } else {
      lockRef.current = true;
      setWrongQ(selectedQ);
      setWrongA(pairIdx);
      setTimeout(() => {
        setSelectedQ(null); setWrongQ(null); setWrongA(null);
        lockRef.current = false;
      }, 700);
    }
  }, [selectedQ, matched, pairs, lang, completedRounds, round, startNextRound, onDone]);

  return (
    <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
      {/* Round progress dots + hint */}
      <div className="flex flex-col items-center gap-1.5">
        <div className="flex gap-2">
          {Array.from({ length: SM_TOTAL_ROUNDS }).map((_, i) => (
            <motion.div key={i}
              className="w-3 h-3 rounded-full"
              animate={{ scale: i === completedRounds && !roundFlash ? [1, 1.3, 1] : 1 }}
              transition={{ repeat: i === completedRounds ? Infinity : 0, duration: 1.4 }}
              style={{
                background: i < completedRounds ? "#00FF88" : i === completedRounds ? color : "rgba(255,255,255,0.15)",
                boxShadow: i === completedRounds && !roundFlash ? `0 0 8px ${color}` : "none",
              }} />
          ))}
        </div>
        <p className="text-white/40 text-xs">{sl.hint}</p>
      </div>

      {roundFlash && (
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          className="text-center text-lg font-black" style={{ color: "#00FF88" }}>
          {completedRounds >= SM_TOTAL_ROUNDS ? `${t.allMatched} ⭐` : "✓"}
        </motion.div>
      )}

      {/* Two columns: questions | answers */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="flex flex-col gap-2">
          {pairs.map((pair, i) => {
            const isMatched = matched.has(i);
            const isSelected = selectedQ === i;
            const isWrong = wrongQ === i;
            return (
              <motion.button key={`${round}-q${i}`} onClick={() => tapQuestion(i)}
                disabled={isMatched}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl px-3 py-3.5 text-sm font-bold text-center min-h-[58px] flex items-center justify-center leading-snug"
                style={{
                  background: isMatched ? "rgba(0,255,136,0.18)" : isWrong ? "rgba(255,50,50,0.18)" : isSelected ? `${color}28` : "rgba(255,255,255,0.05)",
                  border: `2px solid ${isMatched ? "#00FF88" : isWrong ? "#FF4444" : isSelected ? color : "rgba(255,255,255,0.12)"}`,
                  color: isMatched ? "#00FF88" : isWrong ? "#FF6666" : isSelected ? "#fff" : "rgba(255,255,255,0.82)",
                  boxShadow: isSelected ? `0 0 10px ${color}44` : "none",
                }}
                whileTap={!isMatched ? { scale: 0.94 } : {}}>
                {isMatched ? "✓" : pair.left}
              </motion.button>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          {answerOrder.map((pairIdx, idx) => {
            const isMatched = matched.has(pairIdx);
            const isWrong = wrongA === pairIdx;
            const isHighlighted = selectedQ !== null && !isMatched;
            return (
              <motion.button key={`${round}-a${pairIdx}`} onClick={() => tapAnswer(pairIdx)}
                disabled={isMatched}
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-2xl px-3 py-3.5 text-lg font-black text-center min-h-[58px] flex items-center justify-center"
                style={{
                  background: isMatched ? "rgba(0,255,136,0.18)" : isWrong ? "rgba(255,50,50,0.18)" : isHighlighted ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.05)",
                  border: `2px solid ${isMatched ? "#00FF88" : isWrong ? "#FF4444" : isHighlighted ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.12)"}`,
                  color: isMatched ? "#00FF88" : isWrong ? "#FF6666" : "#fff",
                }}
                whileTap={!isMatched ? { scale: 0.94 } : {}}>
                {isMatched ? "✓" : pairs[pairIdx].right}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default StarMatch;
