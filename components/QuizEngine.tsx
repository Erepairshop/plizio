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

  return (
    <div className="flex flex-col gap-3 w-full max-w-sm mx-auto relative">
      {/* ── Close button ── */}
      {onClose && (
        <button onClick={onClose}
          className="absolute -top-1 -right-1 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors">
          <X size={14} />
        </button>
      )}

      {/* ── Top HUD: Score + Streak ── */}
      <div className="flex items-center justify-between px-1">
        {cfg.showScore && (
          <div className="relative flex items-center gap-1.5">
            <Trophy size={14} className="text-yellow-400" />
            <span className="text-sm font-black text-white/80">{scoreRef.current}/{total}</span>
            <AnimatePresence>
              {showScorePopup && <ScorePopup show={true} color={color} />}
            </AnimatePresence>
          </div>
        )}
        <div className="flex items-center gap-1.5 text-xs font-bold text-white/40">
          {idx + 1} / {total}
        </div>
        {cfg.showStreak && streak >= 2 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-1 px-2 py-0.5 rounded-full"
            style={{ background: `${color}25`, border: `1px solid ${color}50` }}
          >
            <Zap size={12} style={{ color }} />
            <span className="text-xs font-black" style={{ color }}>{streak}×</span>
          </motion.div>
        )}
      </div>

      {/* ── Progress bar ── */}
      <div className="flex gap-1 px-1">
        {questions.map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 h-1.5 rounded-full"
            style={{ background: i < idx ? color : i === idx ? `${color}80` : "rgba(255,255,255,0.08)" }}
            layoutId={`prog-${i}`}
          />
        ))}
      </div>

      {/* ── Timer bar ── */}
      {cfg.timer > 0 && <TimerBar timeLeft={timeLeft} total={cfg.timer} color={color} />}

      {/* ── Question card ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative rounded-3xl p-5 min-h-[100px] flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${color}10 0%, ${color}05 100%)`,
            border: `1.5px solid ${color}25`,
            boxShadow: `0 0 30px ${color}10, inset 0 1px 0 rgba(255,255,255,0.05)`,
          }}
        >
          {/* Glassmorphism inner glow */}
          <div className="absolute inset-0 rounded-3xl" style={{
            background: `radial-gradient(ellipse at 50% 0%, ${color}12 0%, transparent 60%)`,
          }} />

          <div className="flex items-center gap-3 relative z-10 w-full">
            <p className="text-lg font-black text-white leading-snug flex-1 text-center">
              {q.question}
            </p>
            <button onClick={() => speakText(q.question, lang)}
              className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/15 transition-colors shrink-0">
              <Volume2 size={14} />
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
          transition={{ delay: 0.15 }}
          className={`grid gap-2.5 ${cols === 2 ? "grid-cols-2" : "grid-cols-1"}`}
        >
          {q.options.map((opt, i) => {
            const optStr = String(opt);
            const isThis = optStr === selected;
            const isRight = optStr === String(q.correctAnswer);
            const wasWrong = locked && selected !== String(q.correctAnswer);

            // ── Button state colors ──
            let bg = "rgba(255,255,255,0.04)";
            let border = "rgba(255,255,255,0.10)";
            let textCol = "rgba(255,255,255,0.85)";
            let shadow = "none";
            let glowBg = "transparent";

            if (locked) {
              if (isRight) {
                bg = "rgba(0,255,136,0.12)";
                border = "#00FF88";
                textCol = "#00FF88";
                shadow = "0 0 20px rgba(0,255,136,0.25)";
                glowBg = "radial-gradient(ellipse at 50% 50%, rgba(0,255,136,0.08) 0%, transparent 70%)";
              } else if (isThis && !isRight) {
                bg = "rgba(255,60,60,0.10)";
                border = "#FF4444";
                textCol = "#FF6666";
              } else if (wasWrong && isRight && cfg.showCorrectOnWrong) {
                bg = "rgba(0,255,136,0.12)";
                border = "#00FF88";
                textCol = "#00FF88";
              } else {
                bg = "rgba(255,255,255,0.02)";
                border = "rgba(255,255,255,0.06)";
                textCol = "rgba(255,255,255,0.3)";
              }
            } else {
              // Hover-ready idle state
              bg = "rgba(255,255,255,0.04)";
              border = "rgba(255,255,255,0.10)";
            }

            return (
              <motion.button
                key={i}
                onClick={() => handleAnswer(optStr)}
                disabled={locked}
                className="relative py-3.5 px-4 rounded-2xl font-bold text-sm text-center transition-all overflow-hidden"
                style={{
                  background: bg,
                  border: `2px solid ${border}`,
                  color: textCol,
                  boxShadow: shadow,
                }}
                whileHover={!locked ? {
                  background: `${color}18`,
                  borderColor: `${color}50`,
                  scale: 1.02,
                } : {}}
                whileTap={!locked ? { scale: 0.96 } : {}}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                {/* Inner glow for correct */}
                {locked && isRight && (
                  <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: glowBg }} />
                )}
                <span className="relative z-10">{optStr}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* ── Feedback ── */}
      <AnimatePresence>
        {locked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 py-1"
          >
            <motion.span
              className="font-black text-sm"
              style={{ color: isCorrect ? "#00FF88" : "#FF6666" }}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
            >
              {isCorrect ? `✓ ${t.correct}` : `✗ ${t.wrong}`}
            </motion.span>
            {!isCorrect && cfg.showCorrectOnWrong && (
              <span className="text-xs text-white/40 font-medium">→ {String(q.correctAnswer)}</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(QuizEngine);
