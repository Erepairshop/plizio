"use client";
// ─────────────────────────────────────────────────────────────────────────────
// QuizEngine — Shared modern quiz UI for all games
// Games only provide: questions, color, config. Engine handles ALL visuals.
// ─────────────────────────────────────────────────────────────────────────────

import { memo, useState, useCallback, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Volume2, Zap, Trophy, X } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface QuizQuestion {
  question: string;
  options: (string | number)[];
  correctAnswer: string | number;
  /** Optional hint shown below question */
  hint?: string;
}

export interface QuizConfig {
  /** Seconds per question. 0 = no timer (default) */
  timer?: number;
  /** Show streak/combo counter (default: true) */
  showStreak?: boolean;
  /** Show live score (default: true) */
  showScore?: boolean;
  /** Enable particles on correct (default: true) */
  particles?: boolean;
  /** Auto-advance delay ms after answer (default: 1800) */
  advanceDelay?: number;
  /** Grid layout for options: 1 = single column, 2 = 2 columns (default: auto) */
  columns?: 1 | 2;
  /** Show correct answer when wrong (default: true) */
  showCorrectOnWrong?: boolean;
}

interface Props {
  questions: QuizQuestion[];
  color: string;
  onDone: (score: number, total: number) => void;
  onCorrect?: () => void;
  onWrong?: () => void;
  onClose?: () => void;
  config?: QuizConfig;
  lang?: string;
}

// ─── Labels ──────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: { correct: "Correct!", wrong: "Not quite!", next: "Next", done: "Done!", streak: "Streak", score: "Score", timeUp: "Time's up!" },
  de: { correct: "Richtig!", wrong: "Nicht ganz!", next: "Weiter", done: "Fertig!", streak: "Serie", score: "Punkte", timeUp: "Zeit abgelaufen!" },
  hu: { correct: "Helyes!", wrong: "Nem egészen!", next: "Tovább", done: "Kész!", streak: "Sorozat", score: "Pont", timeUp: "Lejárt az idő!" },
  ro: { correct: "Corect!", wrong: "Nu tocmai!", next: "Înainte", done: "Gata!", streak: "Serie", score: "Puncte", timeUp: "Timpul a expirat!" },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const PARTICLE_COLORS = ["#FFD700", "#00FF88", "#FF6B9D", "#00D4FF", "#B44DFF"];

function Particles({ color, active }: { color: string; active: boolean }) {
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
            left: `${30 + Math.random() * 40}%`,
            top: "50%",
          }}
          initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: [1, 1.5, 0],
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200 - 50,
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.03 }}
        />
      ))}
    </div>
  );
}

function ScorePopup({ show, color }: { show: boolean; color: string }) {
  if (!show) return null;
  return (
    <motion.div
      className="absolute top-0 right-4 font-black text-lg pointer-events-none"
      style={{ color }}
      initial={{ opacity: 1, y: 0, scale: 1.2 }}
      animate={{ opacity: 0, y: -40, scale: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      +1
    </motion.div>
  );
}

function TimerBar({ timeLeft, total, color }: { timeLeft: number; total: number; color: string }) {
  const pct = Math.max(0, (timeLeft / total) * 100);
  const barColor = pct > 50 ? "#00FF88" : pct > 25 ? "#FFD700" : "#FF4444";
  return (
    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${barColor}, ${color})`, width: `${pct}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

// ─── Speak helper ────────────────────────────────────────────────────────────

function speakText(text: string, lang: string) {
  if (typeof window === "undefined") return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === "hu" ? "hu-HU" : lang === "de" ? "de-DE" : lang === "ro" ? "ro-RO" : "en-US";
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

// ─── QuizEngine Component ────────────────────────────────────────────────────

function QuizEngine({ questions, color, onDone, onCorrect, onWrong, onClose, config, lang = "de" }: Props) {
  const t = LABELS[lang] || LABELS.en;
  const cfg = useMemo(() => ({
    timer: config?.timer ?? 0,
    showStreak: config?.showStreak ?? true,
    showScore: config?.showScore ?? true,
    particles: config?.particles ?? true,
    advanceDelay: config?.advanceDelay ?? 1800,
    columns: config?.columns,
    showCorrectOnWrong: config?.showCorrectOnWrong ?? true,
  }), [config]);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const [showScorePopup, setShowScorePopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(cfg.timer);

  const scoreRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const q = questions[idx];
  const total = questions.length;
  const isCorrect = selected !== null && selected === String(q?.correctAnswer);

  // Auto columns: 2 if all options short, 1 if any long
  const cols = cfg.columns ?? (q?.options.every(o => String(o).length < 20) ? 2 : 1);

  // ── Timer ──
  useEffect(() => {
    if (cfg.timer <= 0 || locked) return;
    setTimeLeft(cfg.timer);
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0.1) {
          // Time's up — auto wrong
          clearInterval(timerRef.current!);
          setLocked(true);
          setStreak(0);
          onWrong?.();
          setTimeout(() => advance(), cfg.advanceDelay);
          return 0;
        }
        return prev - 0.1;
      });
    }, 100);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [idx, cfg.timer]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Answer handler ──
  const handleAnswer = useCallback((opt: string) => {
    if (locked) return;
    setSelected(opt);
    setLocked(true);
    if (timerRef.current) clearInterval(timerRef.current);

    const correct = opt === String(q?.correctAnswer);
    if (correct) {
      scoreRef.current += 1;
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);
      setShowParticles(true);
      setShowScorePopup(true);
      setTimeout(() => { setShowParticles(false); setShowScorePopup(false); }, 800);
      onCorrect?.();
    } else {
      setStreak(0);
      onWrong?.();
    }

    const delay = correct ? cfg.advanceDelay - 300 : cfg.advanceDelay;
    setTimeout(() => advance(), delay);
  }, [locked, q, streak, bestStreak, cfg.advanceDelay, onCorrect, onWrong]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Advance ──
  const advance = useCallback(() => {
    if (idx + 1 >= total) {
      onDone(scoreRef.current, total);
    } else {
      setIdx(i => i + 1);
      setSelected(null);
      setLocked(false);
    }
  }, [idx, total, onDone]);

  if (!q) return null;

  // Option label letters
  const OPTION_LETTERS = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto relative">
      {/* ── Close button ── */}
      {onClose && (
        <button onClick={onClose}
          className="absolute -top-1 -right-1 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors">
          <X size={14} />
        </button>
      )}

      {/* ── Top HUD ── */}
      <div className="flex items-center justify-between px-2">
        {cfg.showScore && (
          <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
            <Trophy size={16} style={{ color }} />
            <span className="text-sm font-black" style={{ color }}>{scoreRef.current}</span>
            <span className="text-xs font-bold text-white/30">/ {total}</span>
            <AnimatePresence>
              {showScorePopup && <ScorePopup show={true} color={color} />}
            </AnimatePresence>
          </div>
        )}
        {cfg.showStreak && streak >= 2 && (
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{ background: "rgba(255,200,0,0.15)", border: "1px solid rgba(255,200,0,0.35)" }}
          >
            <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1 }}>
              <Zap size={14} className="text-yellow-400" />
            </motion.div>
            <span className="text-sm font-black text-yellow-400">{streak}×</span>
          </motion.div>
        )}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5">
          <span className="text-xs font-black text-white/50">{idx + 1}</span>
          <span className="text-xs text-white/20">/</span>
          <span className="text-xs font-bold text-white/30">{total}</span>
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div className="relative h-2 rounded-full overflow-hidden mx-2" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}cc)`, boxShadow: `0 0 12px ${color}60` }}
          animate={{ width: `${((idx + (locked ? 1 : 0)) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* ── Timer bar ── */}
      {cfg.timer > 0 && <TimerBar timeLeft={timeLeft} total={cfg.timer} color={color} />}

      {/* ── Question card ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl p-6 min-h-[120px] flex items-center justify-center overflow-hidden mx-1"
          style={{
            background: `linear-gradient(160deg, ${color}18 0%, ${color}08 50%, rgba(255,255,255,0.03) 100%)`,
            border: `2px solid ${color}35`,
            boxShadow: `0 0 40px ${color}15, 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)`,
          }}
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-[15%] right-[15%] h-[2px] rounded-full" style={{
            background: `linear-gradient(90deg, transparent, ${color}80, transparent)`,
          }} />

          {/* Corner glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full" style={{
            background: `radial-gradient(circle, ${color}12 0%, transparent 70%)`,
          }} />

          <div className="flex items-center gap-3 relative z-10 w-full">
            <p className="text-xl font-black text-white leading-snug flex-1 text-center drop-shadow-sm">
              {q.question}
            </p>
            <button onClick={() => speakText(q.question, lang)}
              className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/15 transition-all shrink-0 border border-white/10">
              <Volume2 size={15} />
            </button>
          </div>

          {/* Particles on correct */}
          {cfg.particles && <Particles color={color} active={showParticles} />}
        </motion.div>
      </AnimatePresence>

      {/* ── Hint ── */}
      {q.hint && !locked && (
        <p className="text-xs text-white/30 text-center px-4">{q.hint}</p>
      )}

      {/* ── Answer options ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12 }}
          className={`grid gap-3 mx-1 ${cols === 2 ? "grid-cols-2" : "grid-cols-1"}`}
        >
          {q.options.map((opt, i) => {
            const optStr = String(opt);
            const isThis = optStr === selected;
            const isRight = optStr === String(q.correctAnswer);
            const wasWrong = locked && selected !== String(q.correctAnswer);
            const letter = OPTION_LETTERS[i] || "";

            // ── Button state styles ──
            let bg: string, border: string, textCol: string, shadow: string, letterBg: string, letterCol: string;

            if (locked) {
              if (isRight) {
                bg = "rgba(0,255,136,0.15)";
                border = "#00FF88";
                textCol = "#00FF88";
                shadow = "0 0 24px rgba(0,255,136,0.3), inset 0 0 20px rgba(0,255,136,0.05)";
                letterBg = "#00FF88"; letterCol = "#000";
              } else if (isThis && !isRight) {
                bg = "rgba(255,60,60,0.12)";
                border = "#FF4444";
                textCol = "#FF6666";
                shadow = "0 0 16px rgba(255,60,60,0.2)";
                letterBg = "#FF4444"; letterCol = "#fff";
              } else if (wasWrong && isRight && cfg.showCorrectOnWrong) {
                bg = "rgba(0,255,136,0.15)";
                border = "#00FF88";
                textCol = "#00FF88";
                shadow = "0 0 24px rgba(0,255,136,0.3)";
                letterBg = "#00FF88"; letterCol = "#000";
              } else {
                bg = "rgba(255,255,255,0.02)";
                border = "rgba(255,255,255,0.06)";
                textCol = "rgba(255,255,255,0.25)";
                shadow = "none";
                letterBg = "rgba(255,255,255,0.06)"; letterCol = "rgba(255,255,255,0.2)";
              }
            } else {
              bg = "rgba(255,255,255,0.05)";
              border = "rgba(255,255,255,0.12)";
              textCol = "rgba(255,255,255,0.9)";
              shadow = "0 2px 8px rgba(0,0,0,0.2)";
              letterBg = `${color}25`; letterCol = color;
            }

            return (
              <motion.button
                key={i}
                onClick={() => handleAnswer(optStr)}
                disabled={locked}
                className="relative flex items-center gap-3 py-4 px-4 rounded-2xl font-bold text-sm text-left transition-all overflow-hidden"
                style={{ background: bg, border: `2px solid ${border}`, color: textCol, boxShadow: shadow }}
                whileHover={!locked ? {
                  borderColor: `${color}70`,
                  boxShadow: `0 0 20px ${color}20, 0 4px 16px rgba(0,0,0,0.3)`,
                  scale: 1.02,
                } : {}}
                whileTap={!locked ? { scale: 0.97 } : {}}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.06, type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Letter badge */}
                <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0 transition-colors"
                  style={{ background: letterBg, color: letterCol }}>
                  {letter}
                </div>
                <span className="relative z-10 flex-1">{optStr}</span>

                {/* Correct checkmark */}
                {locked && isRight && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="shrink-0">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-black text-xs font-black">✓</span>
                    </div>
                  </motion.div>
                )}
                {locked && isThis && !isRight && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="shrink-0">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="text-white text-xs font-black">✗</span>
                    </div>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* ── Feedback ── */}
      <AnimatePresence>
        {locked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="flex items-center justify-center gap-3 py-2 mx-4 rounded-2xl"
            style={{ background: isCorrect ? "rgba(0,255,136,0.08)" : "rgba(255,60,60,0.08)", border: `1px solid ${isCorrect ? "rgba(0,255,136,0.2)" : "rgba(255,60,60,0.2)"}` }}
          >
            <motion.span
              className="font-black text-sm"
              style={{ color: isCorrect ? "#00FF88" : "#FF6666" }}
              initial={{ scale: 1.4 }}
              animate={{ scale: 1 }}
            >
              {isCorrect ? `✓ ${t.correct}` : `✗ ${t.wrong}`}
            </motion.span>
            {!isCorrect && cfg.showCorrectOnWrong && (
              <span className="text-xs font-bold" style={{ color: "#00FF88" }}>→ {String(q.correctAnswer)}</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(QuizEngine);
