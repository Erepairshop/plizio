"use client";
// GapFill — Speed Gap Filling for AstroDeutsch Klasse 1
// 10 rounds: sentence with one missing word, pick from 3 options
// Timer: 6 seconds per question, auto-advance

import { memo, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton, speak } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

// ─── Labels ───────────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    hint: "Pick the right word!",
    correct: "Correct! ✓",
    wrong: "Not quite!",
    missed: "Time's up!",
    done: "Done!",
    score: "Score",
    answer: "Answer:",
  },
  hu: {
    hint: "Válaszd a megfelelő szót!",
    correct: "Helyes! ✓",
    wrong: "Nem egészen!",
    missed: "Idő lejárt!",
    done: "Kész!",
    score: "Pont",
    answer: "Válasz:",
  },
  de: {
    hint: "Wähle das richtige Wort!",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz!",
    missed: "Zeit um!",
    done: "Fertig!",
    score: "Punkte",
    answer: "Antwort:",
  },
  ro: {
    hint: "Alege cuvântul corect!",
    correct: "Corect! ✓",
    wrong: "Nu chiar!",
    missed: "Timp expirat!",
    done: "Gata!",
    score: "Puncte",
    answer: "Răspuns:",
  },
};

// ─── Question pool ────────────────────────────────────────────────────────────
interface GapQuestion {
  before: string;   // text before the gap
  after: string;    // text after the gap
  correct: string;  // correct answer
  options: [string, string, string]; // always 3, correct is one of them
}

const QUESTION_POOL: GapQuestion[] = [
  // Articles
  { before: "",     after: " Hund bellt.",      correct: "Der",   options: ["Der", "Die", "Das"] },
  { before: "",     after: " Katze schläft.",   correct: "Die",   options: ["Der", "Die", "Das"] },
  { before: "",     after: " Haus ist groß.",   correct: "Das",   options: ["Der", "Die", "Das"] },
  { before: "",     after: " Blume ist rot.",   correct: "Die",   options: ["Der", "Die", "Das"] },
  { before: "",     after: " Ball rollt.",      correct: "Der",   options: ["Der", "Die", "Das"] },
  { before: "",     after: " Buch ist blau.",   correct: "Das",   options: ["Der", "Die", "Das"] },
  { before: "",     after: " Auto fährt.",      correct: "Das",   options: ["Der", "Die", "Das"] },
  { before: "",     after: " Sonne scheint.",   correct: "Die",   options: ["Der", "Die", "Das"] },
  { before: "",     after: " Vogel singt.",     correct: "Der",   options: ["Der", "Die", "Das"] },
  { before: "",     after: " Kind lacht.",      correct: "Das",   options: ["Der", "Die", "Das"] },

  // Adjectives / descriptions
  { before: "Die Blume ist",    after: ".",              correct: "rot",      options: ["rot", "schlafen", "laut"] },
  { before: "Der Elefant ist",  after: ".",              correct: "groß",     options: ["groß", "blau", "laufen"] },
  { before: "Das Wasser ist",   after: ".",              correct: "kalt",     options: ["kalt", "schön", "spielen"] },
  { before: "Der Hund ist",     after: " und bellt.",   correct: "wach",     options: ["wach", "Tisch", "Baum"] },
  { before: "Die Sonne ist",    after: " und warm.",    correct: "hell",     options: ["hell", "laufen", "Schule"] },

  // Verbs
  { before: "Ich",              after: " gerne Fußball.", correct: "spiele",  options: ["spiele", "Tisch", "Baum"] },
  { before: "Wir",              after: " zur Schule.",    correct: "gehen",   options: ["gehen", "Haus", "rot"] },
  { before: "Der Hund",         after: " laut.",          correct: "bellt",   options: ["bellt", "blau", "Baum"] },
  { before: "Die Katze",        after: " auf dem Sofa.",  correct: "schläft", options: ["schläft", "klein", "Buch"] },
  { before: "Ich",              after: " ein Buch.",      correct: "lese",    options: ["lese", "schnell", "Hund"] },
  { before: "Papa",             after: " Suppe.",         correct: "kocht",   options: ["kocht", "groß", "Fenster"] },
  { before: "Mama",             after: " ein Lied.",      correct: "singt",   options: ["singt", "Tisch", "rot"] },
  { before: "Der Vogel",        after: " im Himmel.",     correct: "fliegt",  options: ["fliegt", "Brot", "blau"] },
  { before: "Das Kind",         after: " im Garten.",     correct: "spielt",  options: ["spielt", "Maus", "schwer"] },

  // Nouns
  { before: "Ich esse einen",   after: ".",               correct: "Apfel",   options: ["Apfel", "laufen", "blau"] },
  { before: "Der",              after: " schläft.",       correct: "Hund",    options: ["Hund", "rot", "fliegen"] },
  { before: "Die",              after: " ist schön.",     correct: "Blume",   options: ["Blume", "klein", "schlafen"] },
  { before: "Ich trinke",       after: ".",               correct: "Wasser",  options: ["Wasser", "groß", "laufen"] },
  { before: "Wir lesen ein",    after: ".",               correct: "Buch",    options: ["Buch", "schnell", "spielen"] },
];

// K1: ~2s TTS reads sentence + ~4s read 3 options + ~2s decide + ~1s tap = ~9s
const TIMER_SECONDS = 10;
const ROUNDS = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildRounds(): GapQuestion[] {
  return shuffle(QUESTION_POOL).slice(0, ROUNDS);
}

type Phase = "active" | "feedback";
type FeedbackType = "correct" | "wrong" | "missed";

const OPTION_COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

// ─── Main Component ───────────────────────────────────────────────────────────
const GapFill = memo(function GapFill({
  color,
  lang = "de",
  onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const t = LABELS[lang] ?? LABELS.de;
  const [questions] = useState<GapQuestion[]>(() => buildRounds());
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<Phase>("active");
  const [feedback, setFeedback] = useState<FeedbackType | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const advancingRef = useRef(false);
  const scoreRef = useRef(0);

  const q = questions[qIdx];

  const advance = useCallback((fb: FeedbackType, correct: boolean, sel: string | null) => {
    if (advancingRef.current) return;
    advancingRef.current = true;
    setPhase("feedback");
    setFeedback(fb);
    setSelected(sel);
    const newScore = correct ? scoreRef.current + 1 : scoreRef.current;
    if (correct) {
      setScore(newScore);
      scoreRef.current = newScore;
    } else {
      const currentQ = questions[qIdx];
      fireWrongAnswer({ question: (currentQ.before || "") + "___" + (currentQ.after || ""), wrongAnswer: sel || "—", correctAnswer: currentQ.correct, topic: "Gap Fill", lang: "de" });
    }

    setTimeout(() => {
      advancingRef.current = false;
      const next = qIdx + 1;
      if (next >= ROUNDS) {
        onDone(newScore, ROUNDS);
        return;
      }
      setQIdx(next);
      setFeedback(null);
      setSelected(null);
      setPhase("active");
      setTimeLeft(TIMER_SECONDS);
    }, 1000);
  }, [qIdx, onDone]);

  // Auto-speak the gap sentence (with correct answer filled in) when a new question appears
  useEffect(() => {
    const q = questions[qIdx];
    const full = (q.before ? q.before + " " : "") + q.correct + (q.after || "");
    speak(full, "de");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qIdx]);

  // Timer
  useEffect(() => {
    if (phase !== "active") return;
    if (timeLeft <= 0) {
      advance("missed", false, null);
      return;
    }
    const id = setTimeout(() => setTimeLeft((v) => Math.max(0, v - 0.1)), 100);
    return () => clearTimeout(id);
  }, [timeLeft, phase, advance]);

  const handlePick = useCallback((option: string) => {
    if (phase !== "active") return;
    const correct = option === q.correct;
    advance(correct ? "correct" : "wrong", correct, option);
  }, [phase, q, advance]);

  const timerPct = (timeLeft / TIMER_SECONDS) * 100;
  const timerColor = timerPct > 55 ? "#00FF88" : timerPct > 25 ? "#FFD700" : "#FF4444";

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress + score */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-white/50 shrink-0">
          {qIdx + 1}/{ROUNDS}
        </span>
        <div className="flex-1 flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1.5 rounded-full"
              style={{
                background:
                  i < qIdx
                    ? "#00FF88"
                    : i === qIdx
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
            key={`timer-${qIdx}`}
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
        <p className="text-xs font-semibold text-center text-white/50">{t.hint}</p>
        <SpeakButton text={(q.before ? q.before + " " : "") + q.correct + (q.after || "")} lang="de" size={16} />
      </div>

      {/* Sentence with gap */}
      <AnimatePresence mode="wait">
        <motion.div
          key={qIdx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="rounded-2xl px-5 py-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 min-h-[80px]"
          style={{
            background:
              phase === "feedback" && feedback === "correct"
                ? "rgba(0,255,136,0.10)"
                : phase === "feedback"
                ? "rgba(255,80,80,0.10)"
                : `${color}10`,
            border: `2px solid ${
              phase === "feedback" && feedback === "correct"
                ? "#00FF88"
                : phase === "feedback"
                ? "#FF4444"
                : `${color}40`
            }`,
          }}
        >
          {q.before && (
            <span className="text-xl font-black text-white">{q.before}</span>
          )}
          {/* Gap */}
          <motion.span
            className="inline-flex items-center justify-center px-3 py-1 rounded-lg font-black text-xl min-w-[4rem] text-center"
            style={{
              background:
                phase === "feedback" && selected === q.correct
                  ? "rgba(0,255,136,0.25)"
                  : phase === "feedback" && selected
                  ? "rgba(255,80,80,0.25)"
                  : phase === "feedback" && !selected
                  ? "rgba(120,120,120,0.25)"
                  : `${color}30`,
              border: `2px solid ${
                phase === "feedback" && selected === q.correct
                  ? "#00FF88"
                  : phase === "feedback"
                  ? "#FF4444"
                  : color
              }`,
              color:
                phase === "feedback"
                  ? selected === q.correct
                    ? "#00FF88"
                    : "#FF6B6B"
                  : color,
            }}
            animate={
              phase === "active"
                ? { opacity: [1, 0.5, 1] }
                : {}
            }
            transition={
              phase === "active"
                ? { repeat: Infinity, duration: 1.2 }
                : {}
            }
          >
            {phase === "feedback" ? (selected ?? q.correct) : "___"}
          </motion.span>
          {q.after && (
            <span className="text-xl font-black text-white">{q.after}</span>
          )}
        </motion.div>
      </AnimatePresence>

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
              <span className="text-sm text-white/50">
                {t.answer}{" "}
                <span className="font-black text-white/80">{q.correct}</span>
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Options */}
      <div className="flex flex-col gap-2.5">
        {q.options.map((option, i) => {
          const isSelected = selected === option;
          const isCorrect = option === q.correct;
          let bg = "rgba(255,255,255,0.06)";
          let border = "rgba(255,255,255,0.15)";
          let textColor = "rgba(255,255,255,0.85)";

          if (phase === "feedback") {
            if (isCorrect) {
              bg = "rgba(0,255,136,0.18)";
              border = "#00FF88";
              textColor = "#00FF88";
            } else if (isSelected) {
              bg = "rgba(255,50,50,0.15)";
              border = "#FF4444";
              textColor = "#FF6666";
            }
          }

          return (
            <motion.button
              key={i}
              onClick={() => handlePick(option)}
              disabled={phase !== "active"}
              className="w-full py-4 rounded-2xl font-black text-xl text-center"
              style={{ background: bg, border: `2px solid ${border}`, color: textColor }}
              whileTap={phase === "active" ? { scale: 0.96 } : {}}
            >
              {option}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
});

export default GapFill;
