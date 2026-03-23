"use client";
// WordBlitz — True/False Blitz for AstroDeutsch Klasse 1
// 12 rapid-fire German language statements, 5s per question, auto-advance
// Topics: Vokale/Konsonanten, Artikel, Reime, Silben, Farben, Zahlen

import { memo, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton, speak } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Statement {
  text: string;
  isTrue: boolean;
  explanation: string; // shown when wrong/missed
}

// ─── Labels ───────────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    trueBtn: "TRUE ✓",
    falseBtn: "FALSE ✗",
    correct: "Correct! ✓",
    wrong: "Not quite!",
    missed: "Time's up!",
    hint: "Correct answer:",
    done: "Done!",
    score: "Score",
    title: "True or False?",
  },
  hu: {
    trueBtn: "IGAZ ✓",
    falseBtn: "HAMIS ✗",
    correct: "Helyes! ✓",
    wrong: "Nem egészen!",
    missed: "Idő lejárt!",
    hint: "A helyes válasz:",
    done: "Kész!",
    score: "Pont",
    title: "Igaz vagy hamis?",
  },
  de: {
    trueBtn: "WAHR ✓",
    falseBtn: "FALSCH ✗",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz!",
    missed: "Zeit um!",
    hint: "Richtige Antwort:",
    done: "Fertig!",
    score: "Punkte",
    title: "Wahr oder falsch?",
  },
  ro: {
    trueBtn: "ADEVĂRAT ✓",
    falseBtn: "FALS ✗",
    correct: "Corect! ✓",
    wrong: "Nu chiar!",
    missed: "Timp expirat!",
    hint: "Răspuns corect:",
    done: "Gata!",
    score: "Puncte",
    title: "Adevărat sau fals?",
  },
};

// ─── Statement Pool ───────────────────────────────────────────────────────────
// Pool of 32 statements about German language for Klasse 1
const STATEMENT_POOL: Statement[] = [
  // Vokale / Konsonanten
  { text: "A ist ein Vokal.", isTrue: true, explanation: "A, E, I, O, U sind Vokale." },
  { text: "E ist ein Vokal.", isTrue: true, explanation: "A, E, I, O, U sind Vokale." },
  { text: "B ist ein Vokal.", isTrue: false, explanation: "B ist ein Konsonant." },
  { text: "U ist ein Vokal.", isTrue: true, explanation: "A, E, I, O, U sind Vokale." },
  { text: "M ist ein Vokal.", isTrue: false, explanation: "M ist ein Konsonant." },
  { text: "I ist ein Vokal.", isTrue: true, explanation: "A, E, I, O, U sind Vokale." },
  { text: "O ist ein Vokal.", isTrue: true, explanation: "A, E, I, O, U sind Vokale." },
  { text: "S ist ein Vokal.", isTrue: false, explanation: "S ist ein Konsonant." },
  { text: "T ist ein Konsonant.", isTrue: true, explanation: "T ist ein Konsonant." },
  { text: "K ist ein Konsonant.", isTrue: true, explanation: "K ist ein Konsonant." },

  // Artikel
  { text: "Es heißt: der Hund.", isTrue: true, explanation: "der Hund (maskulin)" },
  { text: "Es heißt: die Katze.", isTrue: true, explanation: "die Katze (feminin)" },
  { text: "Es heißt: das Haus.", isTrue: true, explanation: "das Haus (neutrum)" },
  { text: "Es heißt: der Katze.", isTrue: false, explanation: "Richtig: die Katze" },
  { text: "Es heißt: das Hund.", isTrue: false, explanation: "Richtig: der Hund" },
  { text: "Es heißt: die Buch.", isTrue: false, explanation: "Richtig: das Buch" },
  { text: "Es heißt: die Blume.", isTrue: true, explanation: "die Blume (feminin)" },
  { text: "Es heißt: der Ball.", isTrue: true, explanation: "der Ball (maskulin)" },
  { text: "Es heißt: das Auto.", isTrue: true, explanation: "das Auto (neutrum)" },

  // Reime
  { text: "Maus reimt sich auf Haus.", isTrue: true, explanation: "Maus – Haus ✓" },
  { text: "Hund reimt sich auf Mund.", isTrue: true, explanation: "Hund – Mund ✓" },
  { text: "Baum reimt sich auf Traum.", isTrue: true, explanation: "Baum – Traum ✓" },
  { text: "Sonne reimt sich auf Katze.", isTrue: false, explanation: "Richtig: Sonne reimt auf Wonne." },
  { text: "Ball reimt sich auf Fall.", isTrue: true, explanation: "Ball – Fall ✓" },
  { text: "Tür reimt sich auf Hund.", isTrue: false, explanation: "Richtig: Tür reimt auf Schnür." },

  // Silben
  { text: "\"Schule\" hat 2 Silben.", isTrue: true, explanation: "Schu-le = 2 Silben" },
  { text: "\"Haus\" hat 2 Silben.", isTrue: false, explanation: "Haus = 1 Silbe" },
  { text: "\"Katze\" hat 2 Silben.", isTrue: true, explanation: "Kat-ze = 2 Silben" },
  { text: "\"Ball\" hat 3 Silben.", isTrue: false, explanation: "Ball = 1 Silbe" },
  { text: "\"Apfel\" hat 2 Silben.", isTrue: true, explanation: "Ap-fel = 2 Silben" },

  // Nomen (Großschreibung)
  { text: "\"Hund\" ist ein Nomen.", isTrue: true, explanation: "Nomen schreibt man groß." },
  { text: "\"laufen\" ist ein Nomen.", isTrue: false, explanation: "Laufen ist ein Verb." },
];

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildStatements(): Statement[] {
  return shuffle(STATEMENT_POOL).slice(0, 12);
}

type FBState = "correct" | "wrong" | "missed" | null;

// K1 (6-7 yrs): ~2s TTS read-aloud + ~4s think + ~1s tap = ~7s
// Higher grades can pass shorter timers via grade prop later
const TIMER_SECONDS = 8;

// ─── Main Component ───────────────────────────────────────────────────────────
const WordBlitz = memo(function WordBlitz({
  color,
  lang = "de",
  onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const t = LABELS[lang] ?? LABELS.de;
  const [statements] = useState<Statement[]>(() => buildStatements());
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [fb, setFb] = useState<FBState>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [done, setDone] = useState(false);
  const answeredRef = useRef(false);
  const total = statements.length;

  const advance = useCallback(() => {
    answeredRef.current = false;
    setFb(null);
    setTimeLeft(TIMER_SECONDS);
    setIdx(prev => {
      const next = prev + 1;
      if (next >= total) {
        setDone(true);
        return prev;
      }
      return next;
    });
  }, [total]);

  const respond = useCallback((result: FBState, isCorrect: boolean) => {
    if (answeredRef.current) return;
    answeredRef.current = true;
    setFb(result);
    if (isCorrect) setScore(s => s + 1);
    setTimeout(advance, 900);
  }, [advance]);

  // Auto-speak statement when a new question appears
  useEffect(() => {
    if (!done) speak(statements[idx].text, "de");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  // Timer countdown
  useEffect(() => {
    if (done || fb !== null) return;
    if (timeLeft <= 0) {
      respond("missed", false);
      return;
    }
    const id = setTimeout(() => setTimeLeft(t => Math.max(0, t - 0.1)), 100);
    return () => clearTimeout(id);
  }, [timeLeft, fb, done, respond]);

  const handleTap = (userTrue: boolean) => {
    if (answeredRef.current || done || fb !== null) return;
    const stmt = statements[idx];
    const correct = userTrue === stmt.isTrue;
    respond(correct ? "correct" : "wrong", correct);
  };

  // Done screen
  if (done) {
    const pct = score / total;
    const stars = pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : 1;
    const msgs: Record<string, string[]> = {
      en: ["Keep going! 💪", "Very good! ⭐⭐", "Perfect! ⭐⭐⭐"],
      hu: ["Tovább! 💪", "Nagyon jó! ⭐⭐", "Tökéletes! ⭐⭐⭐"],
      de: ["Weiter so! 💪", "Sehr gut! ⭐⭐", "Fantastisch! ⭐⭐⭐"],
      ro: ["Continuă! 💪", "Foarte bine! ⭐⭐", "Perfect! ⭐⭐⭐"],
    };
    const msg = (msgs[lang] ?? msgs.de)[stars - 1];
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6 py-8 px-4"
      >
        <div className="text-6xl font-black" style={{ color }}>
          {score}
          <span className="text-2xl text-white/40">/{total}</span>
        </div>
        <p className="text-xl font-black text-white/90 text-center">{msg}</p>
        <motion.button
          onClick={() => onDone(score, total)}
          className="w-full max-w-xs py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2"
          style={{
            background: `linear-gradient(135deg, ${color}55, ${color}AA)`,
            border: `2px solid ${color}`,
          }}
          whileTap={{ scale: 0.97 }}
        >
          {t.done} <ChevronRight size={18} />
        </motion.button>
      </motion.div>
    );
  }

  const stmt = statements[idx];
  const timerPct = (timeLeft / TIMER_SECONDS) * 100;
  const timerColor = timerPct > 55 ? "#00FF88" : timerPct > 25 ? "#FFD700" : "#FF4444";

  const fbBg =
    fb === "correct"
      ? "rgba(0,255,136,0.15)"
      : fb === "wrong"
      ? "rgba(255,80,80,0.15)"
      : fb === "missed"
      ? "rgba(120,120,120,0.15)"
      : "rgba(255,255,255,0.06)";

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Header: progress dots + score */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-white/50 shrink-0">
          {idx + 1}/{total}
        </span>
        <div className="flex-1 flex gap-1">
          {statements.map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1.5 rounded-full"
              style={{
                background:
                  i < idx
                    ? "#00FF88"
                    : i === idx
                    ? color
                    : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
        <span className="text-xs font-black shrink-0" style={{ color }}>
          {score}
          <span className="text-white/30">/{total}</span>
        </span>
      </div>

      {/* Timer bar */}
      <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
        {fb === null && (
          <motion.div
            key={`timer-${idx}`}
            className="h-full rounded-full origin-left"
            style={{ background: timerColor }}
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: TIMER_SECONDS, ease: "linear" }}
          />
        )}
      </div>

      {/* Statement card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="rounded-3xl px-6 py-7 min-h-[140px] flex flex-col items-center justify-center gap-3 transition-colors"
          style={{
            background: fbBg,
            border: `2px solid ${
              fb === "correct"
                ? "#00FF88"
                : fb === "wrong" || fb === "missed"
                ? "#FF4444"
                : `${color}40`
            }`,
          }}
        >
          {fb === null ? (
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl font-black text-white text-center leading-snug">
                {stmt.text}
              </p>
              <SpeakButton text={stmt.text} lang="de" size={16} />
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-4xl">
                {fb === "correct" ? "✓" : fb === "wrong" ? "✗" : "⏱"}
              </span>
              <span
                className="text-base font-black"
                style={{
                  color:
                    fb === "correct"
                      ? "#00FF88"
                      : fb === "wrong"
                      ? "#FF6B6B"
                      : "#888",
                }}
              >
                {fb === "correct" ? t.correct : fb === "wrong" ? t.wrong : t.missed}
              </span>
              {fb !== "correct" && (
                <p className="text-sm font-bold text-white/60 text-center mt-1">
                  <span className="text-white/40">{t.hint} </span>
                  {stmt.explanation}
                </p>
              )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* True / False buttons */}
      <div className="grid grid-cols-2 gap-3">
        <motion.button
          onClick={() => handleTap(true)}
          disabled={fb !== null}
          className="py-7 rounded-2xl font-black text-lg flex flex-col items-center gap-1"
          style={{
            background: "rgba(0,255,136,0.12)",
            border: "2px solid rgba(0,255,136,0.4)",
            color: "#00FF88",
            opacity: fb !== null ? 0.5 : 1,
          }}
          whileTap={{ scale: 0.94 }}
        >
          <span className="text-4xl">✓</span>
          <span className="text-sm">{t.trueBtn}</span>
        </motion.button>

        <motion.button
          onClick={() => handleTap(false)}
          disabled={fb !== null}
          className="py-7 rounded-2xl font-black text-lg flex flex-col items-center gap-1"
          style={{
            background: "rgba(255,80,80,0.12)",
            border: "2px solid rgba(255,80,80,0.4)",
            color: "#FF6B6B",
            opacity: fb !== null ? 0.5 : 1,
          }}
          whileTap={{ scale: 0.94 }}
        >
          <span className="text-4xl">✗</span>
          <span className="text-sm">{t.falseBtn}</span>
        </motion.button>
      </div>
    </div>
  );
});

export default WordBlitz;
