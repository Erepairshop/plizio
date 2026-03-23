"use client";
// SpellRace — Spelling Race for AstroDeutsch Klasse 1
// 8 rounds: emoji hint shown, scrambled letters, tap in correct order to spell the word
// Timer: 10 seconds per word, auto-advance on timeout

import { memo, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton, speak } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

// ─── Labels ───────────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    hint: "Spell the word!",
    correct: "Great! ✓",
    wrong: "Almost!",
    missed: "Time's up!",
    done: "Done!",
    tapLetters: "Tap the letters in order",
    correctWord: "Correct word:",
  },
  hu: {
    hint: "Írd le a szót!",
    correct: "Szuper! ✓",
    wrong: "Majdnem!",
    missed: "Idő lejárt!",
    done: "Kész!",
    tapLetters: "Betűk sorban",
    correctWord: "Helyes szó:",
  },
  de: {
    hint: "Buchstabiere das Wort!",
    correct: "Toll! ✓",
    wrong: "Fast!",
    missed: "Zeit um!",
    done: "Fertig!",
    tapLetters: "Tippe die Buchstaben der Reihe nach",
    correctWord: "Richtiges Wort:",
  },
  ro: {
    hint: "Scrie cuvântul!",
    correct: "Bravo! ✓",
    wrong: "Aproape!",
    missed: "Timp expirat!",
    done: "Gata!",
    tapLetters: "Apasă literele în ordine",
    correctWord: "Cuvântul corect:",
  },
};

// ─── Word pool ────────────────────────────────────────────────────────────────
interface WordEntry {
  word: string;
  emoji: string;
}

const WORD_POOL: WordEntry[] = [
  { word: "HUND",   emoji: "🐕" },
  { word: "KATZE",  emoji: "🐱" },
  { word: "BAUM",   emoji: "🌳" },
  { word: "HAUS",   emoji: "🏠" },
  { word: "BALL",   emoji: "⚽" },
  { word: "SONNE",  emoji: "☀️" },
  { word: "MOND",   emoji: "🌙" },
  { word: "STERN",  emoji: "⭐" },
  { word: "BLUME",  emoji: "🌸" },
  { word: "VOGEL",  emoji: "🐦" },
  { word: "FISCH",  emoji: "🐟" },
  { word: "APFEL",  emoji: "🍎" },
  { word: "BUCH",   emoji: "📚" },
  { word: "AUTO",   emoji: "🚗" },
  { word: "TUR",    emoji: "🚪" },
  { word: "TISCH",  emoji: "🪑" },
  { word: "BROT",   emoji: "🍞" },
  { word: "MILCH",  emoji: "🥛" },
  { word: "SCHUH",  emoji: "👟" },
  { word: "HAND",   emoji: "✋" },
  { word: "AUGE",   emoji: "👁️" },
  { word: "NASE",   emoji: "👃" },
];

// K1: ~2s TTS + ~8s to tap 4-6 scrambled letters + ~2s think = ~12s
const TIMER_SECONDS = 14;
const ROUNDS = 8;

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildRounds(): WordEntry[] {
  return shuffle(WORD_POOL).slice(0, ROUNDS);
}

// Build shuffled letter tiles for a word (indices into the word)
function buildTiles(word: string): number[] {
  const indices = Array.from({ length: word.length }, (_, i) => i);
  return shuffle(indices);
}

type Phase = "active" | "feedback";
type FeedbackType = "correct" | "wrong" | "missed";

interface TileState {
  letterIndex: number; // index into word
  placed: boolean;     // has been tapped into the answer
  wrong: boolean;      // was this a wrong tap
}

// ─── Main Component ───────────────────────────────────────────────────────────
const SpellRace = memo(function SpellRace({
  color,
  lang = "de",
  onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const t = LABELS[lang] ?? LABELS.de;
  const [rounds] = useState<WordEntry[]>(() => buildRounds());
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<Phase>("active");
  const [feedback, setFeedback] = useState<FeedbackType | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [tiles, setTiles] = useState<TileState[]>(() => {
    const word = rounds[0].word;
    return buildTiles(word).map((li) => ({ letterIndex: li, placed: false, wrong: false }));
  });
  const [answer, setAnswer] = useState<number[]>([]); // tile indices in answer order
  const [wrongTile, setWrongTile] = useState<number | null>(null);
  const advancingRef = useRef(false);

  const currentWord = rounds[roundIdx].word;

  const advance = useCallback((fb: FeedbackType, correct: boolean) => {
    if (advancingRef.current) return;
    advancingRef.current = true;
    setPhase("feedback");
    setFeedback(fb);
    if (correct) setScore((s) => s + 1);

    setTimeout(() => {
      advancingRef.current = false;
      const next = roundIdx + 1;
      if (next >= ROUNDS) {
        onDone(correct ? score + 1 : score, ROUNDS);
        return;
      }
      setRoundIdx(next);
      const nextWord = rounds[next].word;
      setTiles(buildTiles(nextWord).map((li) => ({ letterIndex: li, placed: false, wrong: false })));
      setAnswer([]);
      setFeedback(null);
      setPhase("active");
      setTimeLeft(TIMER_SECONDS);
      setWrongTile(null);
    }, 1100);
  }, [roundIdx, score, rounds, onDone]);

  // Auto-speak word when a new round appears
  useEffect(() => {
    speak(rounds[roundIdx].word, "de");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roundIdx]);

  // Timer
  useEffect(() => {
    if (phase !== "active") return;
    if (timeLeft <= 0) {
      advance("missed", false);
      return;
    }
    const id = setTimeout(() => setTimeLeft((t) => Math.max(0, t - 0.1)), 100);
    return () => clearTimeout(id);
  }, [timeLeft, phase, advance]);

  const handleTileTap = useCallback((tileIdx: number) => {
    if (phase !== "active") return;
    const tile = tiles[tileIdx];
    if (tile.placed) return;

    const nextPos = answer.length;
    const expectedLetterIndex = nextPos; // word[nextPos] is expected
    const isCorrect = tile.letterIndex === expectedLetterIndex;

    if (isCorrect) {
      const newAnswer = [...answer, tileIdx];
      const newTiles = tiles.map((t, i) =>
        i === tileIdx ? { ...t, placed: true } : t
      );
      setAnswer(newAnswer);
      setTiles(newTiles);

      if (newAnswer.length === currentWord.length) {
        advance("correct", true);
      }
    } else {
      // Wrong letter — flash red then return
      setWrongTile(tileIdx);
      setTimeout(() => setWrongTile(null), 400);
      fireWrongAnswer({ question: currentWord, wrongAnswer: currentWord[tile.letterIndex] || "", correctAnswer: currentWord[expectedLetterIndex] || "", topic: "Spell Race", lang: "de" });
    }
  }, [phase, tiles, answer, currentWord, advance]);

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

      {/* Emoji + Instruction */}
      <AnimatePresence mode="wait">
        <motion.div
          key={roundIdx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <div className="text-7xl">{rounds[roundIdx].emoji}</div>
            <SpeakButton text={rounds[roundIdx].word} lang="de" size={16} />
          </div>
          <p className="text-xs font-semibold text-white/50 text-center">{t.tapLetters}</p>
        </motion.div>
      </AnimatePresence>

      {/* Answer slots */}
      <div className="flex gap-2 justify-center flex-wrap">
        {Array.from({ length: currentWord.length }).map((_, pos) => {
          const placedTileIdx = answer[pos] !== undefined ? answer[pos] : -1;
          const letter = placedTileIdx >= 0 ? currentWord[tiles[placedTileIdx]?.letterIndex ?? pos] : "";
          return (
            <motion.div
              key={pos}
              className="w-11 h-12 rounded-xl flex items-center justify-center font-black text-xl"
              style={{
                background:
                  phase === "feedback" && feedback === "correct"
                    ? "rgba(0,255,136,0.25)"
                    : phase === "feedback" && feedback !== "correct"
                    ? "rgba(255,80,80,0.2)"
                    : letter
                    ? `${color}30`
                    : "rgba(255,255,255,0.06)",
                border: `2px solid ${
                  phase === "feedback" && feedback === "correct"
                    ? "#00FF88"
                    : phase === "feedback" && feedback !== "correct"
                    ? "#FF4444"
                    : letter
                    ? color
                    : "rgba(255,255,255,0.2)"
                }`,
                color: letter ? "#fff" : "rgba(255,255,255,0.3)",
              }}
              animate={
                phase === "feedback" && feedback === "correct" && letter
                  ? { scale: [1, 1.15, 1] }
                  : {}
              }
              transition={{ delay: pos * 0.05 }}
            >
              {letter || "_"}
            </motion.div>
          );
        })}
      </div>

      {/* Feedback message */}
      <AnimatePresence>
        {phase === "feedback" && feedback && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-1"
          >
            <span
              className="text-base font-black"
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
              <span className="text-sm text-white/50">
                {t.correctWord}{" "}
                <span className="font-black text-white/80">{currentWord}</span>
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Letter tiles */}
      <div className="flex gap-2 flex-wrap justify-center mt-1">
        {tiles.map((tile, tileIdx) => {
          const letter = currentWord[tile.letterIndex];
          const isWrong = wrongTile === tileIdx;
          return (
            <motion.button
              key={tileIdx}
              onClick={() => handleTileTap(tileIdx)}
              disabled={tile.placed || phase !== "active"}
              className="w-12 h-14 rounded-xl font-black text-xl flex items-center justify-center"
              style={{
                background: tile.placed
                  ? "rgba(255,255,255,0.03)"
                  : isWrong
                  ? "rgba(255,80,80,0.25)"
                  : `${color}18`,
                border: `2px solid ${
                  tile.placed
                    ? "rgba(255,255,255,0.06)"
                    : isWrong
                    ? "#FF4444"
                    : `${color}60`
                }`,
                color: tile.placed
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(255,255,255,0.9)",
                opacity: tile.placed ? 0.3 : 1,
              }}
              animate={isWrong ? { x: [-4, 4, -4, 4, 0] } : {}}
              transition={{ duration: 0.3 }}
              whileTap={!tile.placed && phase === "active" ? { scale: 0.88 } : {}}
            >
              {tile.placed ? "" : letter}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
});

export default SpellRace;
