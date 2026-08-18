"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { TippSturmRound, Language } from "@/lib/visualLab/languageTypes";

const WORDS_PER_GAME = 10;

const T: Record<Language, {
  memorize: string; type: string; correct: string; wrong: string;
  score: string; streak: string; done: string; total: string;
  placeholder: string; pressEnter: string;
  word: string; of: string; ready: string; submit: string; noTasks: string;
}> = {
  de: {
    memorize: "Merke das Wort!",
    type: "Jetzt tippen!",
    correct: "Richtig!",
    wrong: "Falsch!",
    score: "Punkte",
    streak: "Serie",
    done: "Fertig!",
    total: "Gesamtpunkte",
    placeholder: "Wort eingeben…",
    pressEnter: "Enter zum Bestätigen",
    word: "Wort",
    of: "von",
    ready: "Ich habe es mir gemerkt",
    submit: "Prüfen",
    noTasks: "Für diese Runde sind keine Wörter verfügbar.",
  },
  hu: {
    memorize: "Jegyezd meg a szót!",
    type: "Most írd le!",
    correct: "Helyes!",
    wrong: "Hibás!",
    score: "Pont",
    streak: "Sorozat",
    done: "Kész!",
    total: "Összpontszám",
    placeholder: "Írd be a szót…",
    pressEnter: "Enter a megerősítéshez",
    word: "Szó",
    of: "/",
    ready: "Megjegyeztem",
    submit: "Ellenőrzés",
    noTasks: "Ehhez a körhöz még nincsenek szavak.",
  },
  ro: {
    memorize: "Memorează cuvântul!",
    type: "Scrie-l acum!",
    correct: "Corect!",
    wrong: "Greșit!",
    score: "Scor",
    streak: "Serie",
    done: "Gata!",
    total: "Total",
    placeholder: "Scrie cuvântul…",
    pressEnter: "Enter pentru confirmare",
    word: "Cuvânt",
    of: "din",
    ready: "Am memorat",
    submit: "Verifică",
    noTasks: "Nu există cuvinte pentru această rundă.",
  },
  en: {
    memorize: "Memorize the word!",
    type: "Now type it!",
    correct: "Correct!",
    wrong: "Wrong!",
    score: "Score",
    streak: "Streak",
    done: "Done!",
    total: "Total Score",
    placeholder: "Type the word…",
    pressEnter: "Press Enter to confirm",
    word: "Word",
    of: "of",
    ready: "I have memorized it",
    submit: "Check",
    noTasks: "No words are available for this round.",
  },
};

type Phase = "flash" | "type" | "feedback" | "done";

interface LetterResult {
  char: string;
  status: "correct" | "wrong" | "missing" | "extra";
}

function compareWords(target: string, typed: string): LetterResult[] {
  const t = target.trim();
  const i = typed.trim();
  const maxLen = Math.max(t.length, i.length);
  return Array.from({ length: maxLen }, (_, idx) => {
    const tc = t[idx];
    const ic = i[idx];
    if (!tc) return { char: ic, status: "extra" };
    if (!ic) return { char: tc, status: "missing" };
    return {
      char: ic,
      status: ic.toLowerCase() === tc.toLowerCase() ? "correct" : "wrong",
    };
  });
}

export default function TippSturmGame({
  grade,
  lang,
  round,
  onDone,
}: {
  grade: number;
  lang: Language;
  round: TippSturmRound;
  onDone?: (correct: number, total?: number) => void;
}) {
  const t = T[lang] ?? T.de;

  const [wordQueue] = useState<string[]>(() => {
    const shuffled = [...round.words].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(WORDS_PER_GAME, shuffled.length));
  });

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("flash");
  const [typed, setTyped] = useState("");
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lastResult, setLastResult] = useState<"correct" | "wrong" | null>(null);
  const [letterResults, setLetterResults] = useState<LetterResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitCalledRef = useRef(false);

  const currentWord = wordQueue[index] ?? "";
  // Focus on type phase
  useEffect(() => {
    if (phase === "type") {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [phase]);

  // Feedback → next or done
  useEffect(() => {
    if (phase !== "feedback") return;
    const timer = setTimeout(() => {
      const nextIndex = index + 1;
      if (nextIndex >= wordQueue.length) {
        setPhase("done");
        onDone?.(correctCount, wordQueue.length);
      } else {
        setIndex(nextIndex);
        setTyped("");
        setPhase("flash");
      }
    }, 2200);
    return () => clearTimeout(timer);
  }, [correctCount, index, onDone, phase, wordQueue.length]);

  const handleSubmit = (value: string) => {
    if (submitCalledRef.current) return;
    submitCalledRef.current = true;

    const isCorrect = value.trim().toLowerCase() === currentWord.toLowerCase();
    const newStreak = isCorrect ? streak + 1 : 0;
    const basePoints = isCorrect ? 10 : 0;
    const streakBonus =
      isCorrect && newStreak >= 2 ? Math.min((newStreak - 1) * 5, 25) : 0;

    setScore((s) => s + basePoints + streakBonus);
    if (isCorrect) setCorrectCount((value) => value + 1);
    setStreak(newStreak);
    setLastResult(isCorrect ? "correct" : "wrong");
    setLetterResults(compareWords(currentWord, value.trim()));
    setPhase("feedback");
  };

  const progress = (index / wordQueue.length) * 100;

  if (wordQueue.length === 0) {
    return (
      <div className="w-full rounded-xl border border-white/10 bg-slate-950 p-6 text-center text-sm font-semibold text-white/70" role="status">
        {t.noTasks}
      </div>
    );
  }

  if (phase === "done") {
    const pct = Math.round((correctCount / wordQueue.length) * 100);
    const emoji = pct >= 80 ? "🏆" : pct >= 50 ? "🌟" : "💪";
    return (
      <div
        className="relative w-full h-[clamp(360px,72dvh,500px)] rounded-xl overflow-hidden flex flex-col items-center justify-center gap-5"
        style={{ background: round.theme.bg }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${round.theme.accent}30, transparent 70%)`,
          }}
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          className="text-7xl"
        >
          {emoji}
        </motion.div>
        <h2 className="text-3xl font-black text-white relative z-10">
          {t.done}
        </h2>
        <p
          className="text-6xl font-black relative z-10"
          style={{ color: round.theme.accent }}
        >
          {score}
        </p>
        <p className="text-white/50 text-sm relative z-10">{t.total}</p>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-[clamp(360px,72dvh,500px)] rounded-xl overflow-hidden flex flex-col"
      style={{ background: round.theme.bg }}
    >
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 110%, ${round.theme.accent}20, transparent 60%)`,
        }}
      />

      {/* HUD */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-4 pb-2">
        <div className="flex gap-2.5">
          <div className="bg-black/40 px-3 py-1 rounded-full border border-white/10 text-sm">
            <span className="text-white/50 mr-1.5">{t.score}</span>
            <span className="font-bold text-white">{score}</span>
          </div>
          <AnimatePresence>
            {streak >= 2 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/40 text-sm"
              >
                <span className="text-amber-400 font-bold">🔥 ×{streak}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="text-white/50 text-xs font-mono">
          {t.word} {index + 1} {t.of} {wordQueue.length}
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 mx-5 h-0.5 bg-white/10 rounded-full overflow-hidden mb-1">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: round.theme.accent }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Main area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-5 px-6">
        <AnimatePresence mode="wait">
          {/* FLASH PHASE */}
          {phase === "flash" && (
            <motion.div
              key={`flash-${index}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
              className="flex flex-col items-center gap-4"
            >
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold">
                {t.memorize}
              </p>
              <motion.div
                className="px-10 py-5 rounded-2xl border-2 font-black text-white tracking-wide text-center"
                style={{
                  borderColor: round.theme.accent,
                  background: "rgba(0,0,0,0.55)",
                  fontSize:
                    currentWord.length > 14
                      ? "1.5rem"
                      : currentWord.length > 9
                      ? "2rem"
                      : "2.5rem",
                }}
                animate={{
                  boxShadow: [
                    `0 0 15px ${round.theme.accent}30`,
                    `0 0 50px ${round.theme.accent}70`,
                    `0 0 15px ${round.theme.accent}30`,
                  ],
                }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                {currentWord}
              </motion.div>
              <button
                type="button"
                onClick={() => {
                  submitCalledRef.current = false;
                  setPhase("type");
                }}
                className="min-h-11 rounded-xl border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {t.ready}
              </button>
            </motion.div>
          )}

          {/* TYPE PHASE */}
          {phase === "type" && (
            <motion.div
              key={`type-${index}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4 w-full max-w-sm"
            >
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold">
                {t.type}
              </p>

              <input
                ref={inputRef}
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSubmit(typed);
                }}
                className="w-full text-center text-2xl font-bold bg-black/40 border-2 rounded-xl px-4 py-3 text-white outline-none transition-colors placeholder:text-white/20"
                style={{ borderColor: `${round.theme.accent}60` }}
                placeholder={t.placeholder}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
              />
              <p className="text-white/25 text-xs">{t.pressEnter}</p>
              <button
                type="button"
                onClick={() => handleSubmit(typed)}
                disabled={!typed.trim()}
                className="min-h-11 w-full rounded-xl px-4 py-2 font-bold text-slate-950 transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                style={{ backgroundColor: round.theme.accent }}
              >
                {t.submit}
              </button>
            </motion.div>
          )}

          {/* FEEDBACK PHASE */}
          {phase === "feedback" && (
            <motion.div
              key={`feedback-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-3"
            >
              <p
                className={`text-2xl font-black uppercase tracking-wide ${
                  lastResult === "correct"
                    ? "text-emerald-400"
                    : "text-rose-400"
                }`}
              >
                {lastResult === "correct" ? t.correct : t.wrong}
              </p>

              {/* Letter-by-letter comparison */}
              <div className="flex gap-0.5 flex-wrap justify-center max-w-xs">
                {letterResults.map((lr, i) => (
                  <span
                    key={i}
                    className={`text-3xl font-black font-mono ${
                      lr.status === "correct"
                        ? "text-emerald-400"
                        : lr.status === "wrong"
                        ? "text-rose-400"
                        : lr.status === "missing"
                        ? "text-amber-400 underline decoration-dotted underline-offset-4"
                        : "text-rose-400 line-through"
                    }`}
                  >
                    {lr.status === "missing" ? lr.char : lr.char}
                  </span>
                ))}
              </div>

              {lastResult === "wrong" && (
                <div className="text-white/50 text-sm">
                  ✓{" "}
                  <span className="text-white font-bold">{currentWord}</span>
                </div>
              )}

              {lastResult === "correct" && streak >= 2 && (
                <div className="text-amber-400 text-sm font-semibold">
                  🔥 {streak}× {t.streak}!
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom orbit decoration */}
      <div className="relative z-0 h-1 mx-5 mb-3">
        <div
          className="h-px w-full rounded-full opacity-20"
          style={{ background: round.theme.accent }}
        />
      </div>
    </div>
  );
}
