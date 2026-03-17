"use client";
// SentenceScramble — Sentence Building Challenge for AstroDeutsch Klasse 1
// 8 rounds: shuffled word tiles, tap to build the sentence in correct order
// Timer: 12 seconds per sentence, auto-advance on timeout

import { memo, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton, speak } from "@/lib/astromath-tts";

// ─── Labels ───────────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    hint: "Build the sentence!",
    correct: "Perfect! ✓",
    wrong: "Not quite!",
    missed: "Time's up!",
    done: "Done!",
    tapWords: "Tap the words in order",
    correctSentence: "Correct:",
    score: "Score",
  },
  hu: {
    hint: "Rakd össze a mondatot!",
    correct: "Tökéletes! ✓",
    wrong: "Nem egészen!",
    missed: "Idő lejárt!",
    done: "Kész!",
    tapWords: "Érintsd meg a szavakat sorban",
    correctSentence: "Helyes:",
    score: "Pont",
  },
  de: {
    hint: "Bilde den Satz!",
    correct: "Super! ✓",
    wrong: "Nicht ganz!",
    missed: "Zeit um!",
    done: "Fertig!",
    tapWords: "Tippe die Wörter der Reihe nach",
    correctSentence: "Richtig:",
    score: "Punkte",
  },
  ro: {
    hint: "Formează propoziția!",
    correct: "Perfect! ✓",
    wrong: "Nu chiar!",
    missed: "Timp expirat!",
    done: "Gata!",
    tapWords: "Apasă cuvintele în ordine",
    correctSentence: "Corect:",
    score: "Puncte",
  },
};

// ─── Sentence Pool ────────────────────────────────────────────────────────────
interface Sentence {
  words: string[]; // correct order (without punctuation)
  punct: string;   // end punctuation
}

const SENTENCE_POOL: Sentence[] = [
  { words: ["Ich", "bin", "Anna"], punct: "." },
  { words: ["Der", "Hund", "spielt"], punct: "." },
  { words: ["Die", "Katze", "schläft"], punct: "." },
  { words: ["Das", "Buch", "ist", "rot"], punct: "." },
  { words: ["Wir", "gehen", "zur", "Schule"], punct: "." },
  { words: ["Mama", "kocht", "Suppe"], punct: "." },
  { words: ["Papa", "liest", "ein", "Buch"], punct: "." },
  { words: ["Die", "Sonne", "scheint"], punct: "." },
  { words: ["Es", "regnet", "heute"], punct: "." },
  { words: ["Ich", "mag", "Eis"], punct: "." },
  { words: ["Der", "Ball", "ist", "rund"], punct: "." },
  { words: ["Das", "Kind", "lacht"], punct: "." },
  { words: ["Die", "Blume", "ist", "schön"], punct: "." },
  { words: ["Ich", "habe", "Hunger"], punct: "." },
  { words: ["Der", "Vogel", "singt"], punct: "." },
  { words: ["Das", "Auto", "ist", "blau"], punct: "." },
  { words: ["Wir", "spielen", "Fußball"], punct: "." },
  { words: ["Der", "Baum", "ist", "groß"], punct: "." },
  { words: ["Ich", "lese", "ein", "Buch"], punct: "." },
  { words: ["Die", "Maus", "ist", "klein"], punct: "." },
  { words: ["Das", "Haus", "ist", "gelb"], punct: "." },
  { words: ["Papa", "fährt", "Auto"], punct: "." },
];

const TIMER_SECONDS = 12;
const ROUNDS = 8;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildRounds(): Sentence[] {
  return shuffle(SENTENCE_POOL).slice(0, ROUNDS);
}

type Phase = "active" | "feedback";
type FeedbackType = "correct" | "wrong" | "missed";

// ─── Main Component ───────────────────────────────────────────────────────────
const SentenceScramble = memo(function SentenceScramble({
  color,
  lang = "de",
  onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const t = LABELS[lang] ?? LABELS.de;
  const [rounds] = useState<Sentence[]>(() => buildRounds());
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<Phase>("active");
  const [feedback, setFeedback] = useState<FeedbackType | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  // tileOrder[i] = index into current sentence's words (shuffled)
  const [tileOrder, setTileOrder] = useState<number[]>(() =>
    shuffle(Array.from({ length: rounds[0].words.length }, (_, i) => i))
  );
  const [placedTiles, setPlacedTiles] = useState<number[]>([]); // word indices placed so far
  const advancingRef = useRef(false);
  const scoreRef = useRef(0);

  const currentSentence = rounds[roundIdx];

  const advance = useCallback((fb: FeedbackType, correct: boolean) => {
    if (advancingRef.current) return;
    advancingRef.current = true;
    setPhase("feedback");
    setFeedback(fb);
    const newScore = correct ? scoreRef.current + 1 : scoreRef.current;
    if (correct) {
      setScore(newScore);
      scoreRef.current = newScore;
    }

    setTimeout(() => {
      advancingRef.current = false;
      const next = roundIdx + 1;
      if (next >= ROUNDS) {
        onDone(newScore, ROUNDS);
        return;
      }
      setRoundIdx(next);
      const nextSentence = rounds[next];
      setTileOrder(shuffle(Array.from({ length: nextSentence.words.length }, (_, i) => i)));
      setPlacedTiles([]);
      setFeedback(null);
      setPhase("active");
      setTimeLeft(TIMER_SECONDS);
    }, 1200);
  }, [roundIdx, rounds, onDone]);

  // Auto-speak sentence when a new round appears
  useEffect(() => {
    const sentence = rounds[roundIdx].words.join(" ") + rounds[roundIdx].punct;
    speak(sentence, "de");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roundIdx]);

  // Timer
  useEffect(() => {
    if (phase !== "active") return;
    if (timeLeft <= 0) {
      advance("missed", false);
      return;
    }
    const id = setTimeout(() => setTimeLeft((v) => Math.max(0, v - 0.1)), 100);
    return () => clearTimeout(id);
  }, [timeLeft, phase, advance]);

  const handleTileTap = useCallback((wordIdx: number) => {
    if (phase !== "active") return;
    if (placedTiles.includes(wordIdx)) return;

    const nextPos = placedTiles.length;
    const isCorrect = wordIdx === nextPos;

    if (isCorrect) {
      const newPlaced = [...placedTiles, wordIdx];
      setPlacedTiles(newPlaced);
      if (newPlaced.length === currentSentence.words.length) {
        advance("correct", true);
      }
    } else {
      // Wrong word — bounce it back (visual handled below by wrongTile state)
      advance("wrong", false);
    }
  }, [phase, placedTiles, currentSentence, advance]);

  const timerPct = (timeLeft / TIMER_SECONDS) * 100;
  const timerColor = timerPct > 55 ? "#00FF88" : timerPct > 25 ? "#FFD700" : "#FF4444";

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress + score */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-white/50 shrink-0">
          {roundIdx + 1}/{ROUNDS}
        </span>
        <div className="flex-1 flex gap-1">
          {rounds.map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1.5 rounded-full"
              style={{
                background:
                  i < roundIdx
                    ? "#00FF88"
                    : i === roundIdx
                    ? color
                    : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
        <span className="text-xs font-black shrink-0" style={{ color }}>
          {score}
          <span className="text-white/30">/{ROUNDS}</span>
        </span>
      </div>

      {/* Timer bar */}
      <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
        {phase === "active" && (
          <motion.div
            key={`timer-${roundIdx}`}
            className="h-full rounded-full origin-left"
            style={{ background: timerColor }}
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: TIMER_SECONDS, ease: "linear" }}
          />
        )}
      </div>

      {/* Instruction */}
      <div className="flex items-center justify-center gap-2">
        <p className="text-xs font-semibold text-center text-white/50">{t.tapWords}</p>
        <SpeakButton text={currentSentence.words.join(" ") + currentSentence.punct} lang="de" size={16} />
      </div>

      {/* Answer slots */}
      <div
        className="rounded-2xl px-4 py-4 min-h-[64px] flex flex-wrap gap-2 items-center justify-center"
        style={{
          background:
            phase === "feedback" && feedback === "correct"
              ? "rgba(0,255,136,0.12)"
              : phase === "feedback"
              ? "rgba(255,80,80,0.10)"
              : "rgba(255,255,255,0.05)",
          border: `2px solid ${
            phase === "feedback" && feedback === "correct"
              ? "#00FF88"
              : phase === "feedback"
              ? "#FF4444"
              : `${color}30`
          }`,
        }}
      >
        {currentSentence.words.map((word, pos) => {
          const placed = pos < placedTiles.length;
          const placedWord = placed ? currentSentence.words[placedTiles[pos]] : "";
          return (
            <motion.span
              key={pos}
              className="px-2 py-1 rounded-lg font-black text-base"
              style={{
                background: placed ? `${color}30` : "rgba(255,255,255,0.06)",
                border: `1.5px solid ${placed ? color : "rgba(255,255,255,0.15)"}`,
                color: placed ? "#fff" : "rgba(255,255,255,0.25)",
                minWidth: "2rem",
                textAlign: "center",
              }}
              animate={
                placed && phase === "feedback" && feedback === "correct"
                  ? { scale: [1, 1.1, 1] }
                  : {}
              }
              transition={{ delay: pos * 0.04 }}
            >
              {placed ? placedWord : "?"}
            </motion.span>
          );
        })}
        <span className="font-black text-white/60 text-lg">{currentSentence.punct}</span>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {phase === "feedback" && feedback && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-1"
          >
            <span
              className="font-black text-base"
              style={{
                color:
                  feedback === "correct"
                    ? "#00FF88"
                    : feedback === "wrong"
                    ? "#FF6B6B"
                    : "#888",
              }}
            >
              {feedback === "correct"
                ? t.correct
                : feedback === "wrong"
                ? t.wrong
                : t.missed}
            </span>
            {feedback !== "correct" && (
              <span className="text-sm text-white/50 text-center">
                {t.correctSentence}{" "}
                <span className="font-black text-white/80">
                  {currentSentence.words.join(" ")}{currentSentence.punct}
                </span>
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Word tiles (shuffled) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={roundIdx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {tileOrder.map((wordIdx) => {
            const word = currentSentence.words[wordIdx];
            const isPlaced = placedTiles.includes(wordIdx);
            return (
              <motion.button
                key={wordIdx}
                onClick={() => handleTileTap(wordIdx)}
                disabled={isPlaced || phase !== "active"}
                className="px-4 py-3 rounded-xl font-black text-base"
                style={{
                  background: isPlaced
                    ? "rgba(255,255,255,0.03)"
                    : `${color}20`,
                  border: `2px solid ${isPlaced ? "rgba(255,255,255,0.08)" : `${color}70`}`,
                  color: isPlaced ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.9)",
                  opacity: isPlaced ? 0.4 : 1,
                }}
                whileTap={!isPlaced && phase === "active" ? { scale: 0.9 } : {}}
              >
                {word}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default SentenceScramble;
