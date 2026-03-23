"use client";
import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

// ─── Shared Types ──────────────────────────────────────────────────────────────

export type RoundDef =
  | ChooseRound
  | TapRevealRound
  | OrderRound
  | CountTapRound;

export interface ChooseRound {
  type: "choose";
  question: Record<string, string>;
  visual: (lang: string, color: string) => React.ReactNode;
  options: { label: string; correct: boolean }[];
}

export interface TapRevealRound {
  type: "tap-reveal";
  instruction: Record<string, string>;
  items: { display: React.ReactNode; hidden: React.ReactNode }[];
  cols?: number;
}

export interface OrderRound {
  type: "order";
  instruction: Record<string, string>;
  values: number[];
  ascending?: boolean; // default true
}

export interface CountTapRound {
  type: "count-tap";
  instruction: Record<string, string>;
  emoji: string;
  count: number;
  options: number[];
}

// ─── Shared Labels ─────────────────────────────────────────────────────────────

export const TEACHING_LABELS: Record<string, Record<string, string>> = {
  tapToReveal: { en: "Tap each card to discover!", hu: "Koppints mindegyikre a felfedezéshez!", de: "Tippe jede Karte an!", ro: "Atinge fiecare card!" },
  orderAsc: { en: "Tap numbers in order: smallest → biggest", hu: "Koppints sorrendben: legkisebb → legnagyobb", de: "Tippe die Zahlen der Reihe nach: kleinste → größte", ro: "Atinge numerele în ordine: cel mai mic → cel mai mare" },
  orderDesc: { en: "Tap numbers in order: biggest → smallest", hu: "Koppints sorrendben: legnagyobb → legkisebb", de: "Tippe die Zahlen der Reihe nach: größte → kleinste", ro: "Atinge numerele în ordine: cel mai mare → cel mai mic" },
  correct: { en: "Correct!", hu: "Helyes!", de: "Richtig!", ro: "Corect!" },
  tryAgain: { en: "Try again!", hu: "Próbáld újra!", de: "Versuch's nochmal!", ro: "Încearcă din nou!" },
  countQ: { en: "How many?", hu: "Hány darab?", de: "Wie viele?", ro: "Câte sunt?" },
  complete: {
    en: "Amazing! You discovered everything! 🎉",
    hu: "Fantasztikus! Mindent felfedeztél! 🎉",
    de: "Toll! Du hast alles entdeckt! 🎉",
    ro: "Extraordinar! Ai descoperit totul! 🎉",
  },
  letsGo: { en: "Let's practice! 🚀", hu: "Gyakoroljunk! 🚀", de: "Los geht's! 🚀", ro: "Să exersăm! 🚀" },
};

// ─── Activity Components ────────────────────────────────────────────────────────

export function ChooseActivity({ round, color, lang, onCorrect }: {
  round: ChooseRound; color: string; lang: string; onCorrect: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePick = useCallback((idx: number) => {
    if (feedback === "correct") return;
    setSelected(idx);
    if (round.options[idx].correct) {
      setFeedback("correct");
      feedbackTimer.current = setTimeout(onCorrect, 900);
    } else {
      setFeedback("wrong");
      const correctOpt = round.options.find(o => o.correct);
      fireWrongAnswer({ question: q, wrongAnswer: round.options[idx].label, correctAnswer: correctOpt?.label ?? "", topic: "Teaching Activity", lang });
      feedbackTimer.current = setTimeout(() => { setFeedback(null); setSelected(null); }, 700);
    }
  }, [round.options, feedback, onCorrect, q, lang]);

  useEffect(() => () => { if (feedbackTimer.current) clearTimeout(feedbackTimer.current); }, []);

  const q = round.question[lang] ?? round.question.en;
  return (
    <div className="flex flex-col items-center gap-5 w-full px-4">
      <div className="flex items-center gap-2">
        <motion.p className="text-lg font-black text-white text-center leading-snug"
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
          {q}
        </motion.p>
        <SpeakButton text={q} lang={lang} />
      </div>

      {round.visual && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}>
          {round.visual(lang, color)}
        </motion.div>
      )}

      <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
        {round.options.map((opt, i) => {
          const isSelected = selected === i;
          const showCorrect = isSelected && feedback === "correct";
          const showWrong = isSelected && feedback === "wrong";
          return (
            <motion.button key={i} onClick={() => handlePick(i)}
              className="py-3.5 rounded-2xl font-extrabold text-lg border-2 transition-colors"
              style={{
                background: showCorrect ? "#22c55e" : showWrong ? "#fca5a5" : "rgba(255,255,255,0.08)",
                borderColor: showCorrect ? "#16a34a" : showWrong ? "#ef4444" : "rgba(255,255,255,0.15)",
                color: showCorrect ? "#fff" : showWrong ? "#991b1b" : "#fff",
              }}
              whileTap={{ scale: 0.95 }}
              animate={showWrong ? { x: [0, -6, 6, -4, 4, 0] } : {}}
              transition={showWrong ? { duration: 0.4 } : {}}>
              {opt.label}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {feedback === "correct" && (
          <motion.div className="text-base font-black" style={{ color }}
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            {TEACHING_LABELS.correct[lang] ?? TEACHING_LABELS.correct.en} ✓
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TapRevealActivity({ round, color, lang, onCorrect }: {
  round: TapRevealRound; color: string; lang: string; onCorrect: () => void;
}) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allDone = revealed.size === round.items.length;
  const doneTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTap = useCallback((idx: number) => {
    if (revealed.has(idx)) return;
    setRevealed(prev => {
      const next = new Set(prev);
      next.add(idx);
      if (next.size === round.items.length) {
        doneTimer.current = setTimeout(onCorrect, 1000);
      }
      return next;
    });
  }, [revealed, round.items.length, onCorrect]);

  useEffect(() => () => { if (doneTimer.current) clearTimeout(doneTimer.current); }, []);

  const cols = round.cols || Math.min(round.items.length, 4);
  const instr = round.instruction[lang] ?? round.instruction.en;
  return (
    <div className="flex flex-col items-center gap-5 w-full px-4">
      <div className="flex items-center gap-2">
        <motion.p className="text-base font-bold text-white/80 text-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {instr}
        </motion.p>
        <SpeakButton text={instr} lang={lang} />
      </div>

      <div className="grid gap-3 w-full max-w-xs" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {round.items.map((item, i) => {
          const isRevealed = revealed.has(i);
          return (
            <motion.button key={i} onClick={() => handleTap(i)}
              className="relative aspect-square rounded-2xl flex items-center justify-center overflow-hidden border-2"
              style={{
                borderColor: isRevealed ? color : "rgba(255,255,255,0.12)",
                background: isRevealed ? `${color}18` : "rgba(255,255,255,0.06)",
              }}
              whileTap={{ scale: 0.93 }}
              animate={isRevealed ? { borderColor: color } : {}}>
              <AnimatePresence mode="wait">
                {isRevealed ? (
                  <motion.div key="rev" className="flex flex-col items-center gap-1"
                    initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}>
                    {item.hidden}
                  </motion.div>
                ) : (
                  <motion.div key="hid" className="flex flex-col items-center gap-1"
                    exit={{ rotateY: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    {item.display}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      {allDone && (
        <motion.div className="text-base font-black" style={{ color }}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          {TEACHING_LABELS.correct[lang] ?? TEACHING_LABELS.correct.en} ⭐
        </motion.div>
      )}
    </div>
  );
}

export function OrderActivity({ round, color, lang, onCorrect }: {
  round: OrderRound; color: string; lang: string; onCorrect: () => void;
}) {
  const asc = round.ascending !== false;
  const sorted = useMemo(() => [...round.values].sort((a, b) => asc ? a - b : b - a), [round.values, asc]);
  const [tapped, setTapped] = useState<number[]>([]);
  const [wrongIdx, setWrongIdx] = useState<number | null>(null);
  const doneTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrongTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTap = useCallback((val: number) => {
    if (tapped.includes(val)) return;
    const nextExpected = sorted[tapped.length];
    if (val === nextExpected) {
      const next = [...tapped, val];
      setTapped(next);
      if (next.length === sorted.length) {
        doneTimer.current = setTimeout(onCorrect, 900);
      }
    } else {
      setWrongIdx(val);
      const instr = asc
        ? (TEACHING_LABELS.orderAsc[lang] ?? TEACHING_LABELS.orderAsc.en)
        : (TEACHING_LABELS.orderDesc[lang] ?? TEACHING_LABELS.orderDesc.en);
      fireWrongAnswer({ question: instr, wrongAnswer: String(val), correctAnswer: String(nextExpected), topic: "Order Activity", lang });
      wrongTimer.current = setTimeout(() => setWrongIdx(null), 500);
    }
  }, [tapped, sorted, onCorrect, asc, lang]);

  useEffect(() => () => {
    if (doneTimer.current) clearTimeout(doneTimer.current);
    if (wrongTimer.current) clearTimeout(wrongTimer.current);
  }, []);

  const instr = asc
    ? (TEACHING_LABELS.orderAsc[lang] ?? TEACHING_LABELS.orderAsc.en)
    : (TEACHING_LABELS.orderDesc[lang] ?? TEACHING_LABELS.orderDesc.en);

  return (
    <div className="flex flex-col items-center gap-5 w-full px-4">
      <div className="flex items-center gap-2">
        <motion.p className="text-base font-bold text-white/80 text-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {instr}
        </motion.p>
        <SpeakButton text={instr} lang={lang} />
      </div>

      <div className="flex gap-2 items-center min-h-[44px]">
        {tapped.map((v, i) => (
          <motion.div key={i}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black text-white"
            style={{ background: color, boxShadow: `0 2px 8px ${color}60` }}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }}>
            {v}
          </motion.div>
        ))}
        {tapped.length < sorted.length && (
          <motion.div className="w-10 h-10 rounded-xl border-2 border-dashed flex items-center justify-center text-lg font-bold text-white/30"
            style={{ borderColor: `${color}55` }}
            animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            ?
          </motion.div>
        )}
      </div>

      <div className="flex flex-wrap gap-3 justify-center max-w-xs">
        {round.values.map((v) => {
          const done = tapped.includes(v);
          const isWrong = wrongIdx === v;
          return (
            <motion.button key={v} onClick={() => handleTap(v)}
              disabled={done}
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black border-2"
              style={{
                background: done ? `${color}33` : isWrong ? "#fca5a5" : "rgba(255,255,255,0.08)",
                borderColor: done ? color : isWrong ? "#ef4444" : "rgba(255,255,255,0.15)",
                color: done ? `${color}99` : isWrong ? "#991b1b" : "#fff",
                opacity: done ? 0.5 : 1,
              }}
              whileTap={!done ? { scale: 0.9 } : {}}
              animate={isWrong ? { x: [0, -5, 5, -3, 3, 0] } : {}}
              transition={isWrong ? { duration: 0.35 } : {}}>
              {v}
            </motion.button>
          );
        })}
      </div>

      {tapped.length === sorted.length && (
        <motion.div className="text-base font-black" style={{ color }}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          {TEACHING_LABELS.correct[lang] ?? TEACHING_LABELS.correct.en} ⭐
        </motion.div>
      )}
    </div>
  );
}

export function CountTapActivity({ round, color, lang, onCorrect }: {
  round: CountTapRound; color: string; lang: string; onCorrect: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePick = useCallback((val: number) => {
    if (feedback === "correct") return;
    setSelected(val);
    if (val === round.count) {
      setFeedback("correct");
      feedbackTimer.current = setTimeout(onCorrect, 900);
    } else {
      setFeedback("wrong");
      fireWrongAnswer({ question: instr, wrongAnswer: String(val), correctAnswer: String(round.count), topic: "Count Tap", lang });
      feedbackTimer.current = setTimeout(() => { setFeedback(null); setSelected(null); }, 700);
    }
  }, [round.count, feedback, onCorrect, instr, lang]);

  useEffect(() => () => { if (feedbackTimer.current) clearTimeout(feedbackTimer.current); }, []);

  const instr = round.instruction[lang] ?? round.instruction.en;
  return (
    <div className="flex flex-col items-center gap-5 w-full px-4">
      <div className="flex items-center gap-2">
        <motion.p className="text-base font-bold text-white/80 text-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {instr}
        </motion.p>
        <SpeakButton text={instr} lang={lang} />
      </div>

      <motion.div className="flex flex-wrap gap-2 justify-center max-w-[240px]"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        {Array.from({ length: round.count }).map((_, i) => (
          <motion.span key={i} className="text-3xl"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: i * 0.06, type: "spring" }}>
            {round.emoji}
          </motion.span>
        ))}
      </motion.div>

      <div className="flex gap-3">
        {round.options.map((opt) => {
          const isSelected = selected === opt;
          const showCorrect = isSelected && feedback === "correct";
          const showWrong = isSelected && feedback === "wrong";
          return (
            <motion.button key={opt} onClick={() => handlePick(opt)}
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black border-2"
              style={{
                background: showCorrect ? "#22c55e" : showWrong ? "#fca5a5" : "rgba(255,255,255,0.08)",
                borderColor: showCorrect ? "#16a34a" : showWrong ? "#ef4444" : "rgba(255,255,255,0.15)",
                color: showCorrect ? "#fff" : showWrong ? "#991b1b" : "#fff",
              }}
              whileTap={{ scale: 0.9 }}
              animate={showWrong ? { x: [0, -5, 5, -3, 3, 0] } : {}}
              transition={showWrong ? { duration: 0.4 } : {}}>
              {opt}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {feedback === "correct" && (
          <motion.div className="text-base font-black" style={{ color }}
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            {TEACHING_LABELS.correct[lang] ?? TEACHING_LABELS.correct.en} ✓
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Visual helpers (shared) ────────────────────────────────────────────────────

export function DotGroup({ count, color, size = 26 }: { count: number; color: string; size?: number }) {
  return (
    <div className="flex flex-wrap gap-1.5 justify-center" style={{ maxWidth: 5 * (size + 6) }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-full"
          style={{ width: size, height: size, background: color, boxShadow: `0 1px 6px ${color}50` }} />
      ))}
    </div>
  );
}

export function MiniEquation({ parts, color }: { parts: (string | number)[]; color: string }) {
  return (
    <div className="flex items-center gap-1.5 text-2xl font-black">
      {parts.map((p, i) => {
        const isOp = typeof p === "string" && ["+", "–", "=", "?", "-", "×", "÷", ">", "<"].includes(p);
        return (
          <span key={i} style={{ color: isOp ? "rgba(255,255,255,0.5)" : (i === parts.length - 1 ? color : "#fff") }}>
            {p}
          </span>
        );
      })}
    </div>
  );
}

export function MiniClock({ hour, color }: { hour: number; color: string }) {
  const cx = 44, cy = 44, r = 40;
  const hourAngle = ((hour % 12) / 12) * 360 - 90;
  return (
    <svg width={88} height={88}>
      <circle cx={cx} cy={cy} r={r} fill="rgba(255,255,255,0.08)" stroke={color} strokeWidth={2} />
      {[12,3,6,9].map((n) => {
        const idx = [12,3,6,9].indexOf(n);
        const a = (idx / 4) * Math.PI * 2 - Math.PI / 2;
        return <text key={n} x={cx + Math.cos(a) * 30} y={cy + Math.sin(a) * 30 + 4} textAnchor="middle" fontSize={10} fill="rgba(255,255,255,0.6)" fontWeight="bold">{n}</text>;
      })}
      <line x1={cx} y1={cy} x2={cx + Math.cos(hourAngle * Math.PI / 180) * 24} y2={cy + Math.sin(hourAngle * Math.PI / 180) * 24} stroke="white" strokeWidth={3.5} strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={cx} y2={cy - 34} stroke="white" strokeWidth={2} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={3} fill={color} />
    </svg>
  );
}

// ─── Teaching Shell Component ───────────────────────────────────────────────────
// Shared wrapper that handles round progression, progress bar, celebration screen

interface TeachingShellProps {
  rounds: RoundDef[];
  lang: string;
  color: string;
  onDone: (score: number, total: number) => void;
  onExit?: () => void;
}

export function TeachingShell({ rounds, lang, color, onDone, onExit }: TeachingShellProps) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const total = rounds.length;

  const handleCorrect = useCallback(() => {
    const newCorrect = correctCount + 1;
    setCorrectCount(newCorrect);

    if (roundIdx + 1 >= total) {
      setShowCelebration(true);
    } else {
      setTimeout(() => setRoundIdx(prev => prev + 1), 200);
    }
  }, [correctCount, roundIdx, total]);

  const handleFinish = useCallback(() => {
    onDone(total, total);
  }, [onDone, total]);

  if (rounds.length === 0) {
    onDone(1, 1);
    return null;
  }

  // ── Celebration screen ──
  if (showCelebration) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-5 gap-6"
        style={{ background: `linear-gradient(180deg, #0a0a1a 0%, ${color}15 100%)` }}>
        <motion.div className="text-7xl"
          animate={{ rotate: [0, -10, 10, -5, 5, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}>
          ⭐
        </motion.div>
        <motion.p className="text-2xl font-black text-center" style={{ color }}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {TEACHING_LABELS.complete[lang] ?? TEACHING_LABELS.complete.en}
        </motion.p>
        <motion.p className="text-white/60 text-sm font-bold"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          {correctCount}/{total} ✓
        </motion.p>
        <motion.button onClick={handleFinish}
          className="mt-4 px-8 py-4 rounded-2xl font-black text-lg text-white"
          style={{ background: `linear-gradient(135deg, ${color}88, ${color})`, boxShadow: `0 4px 20px ${color}40` }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.95 }}>
          {TEACHING_LABELS.letsGo[lang] ?? TEACHING_LABELS.letsGo.en}
        </motion.button>
      </div>
    );
  }

  const round = rounds[roundIdx];

  return (
    <div className="min-h-screen flex flex-col"
      style={{ background: `linear-gradient(180deg, #0a0a1a 0%, ${color}10 100%)` }}>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-4 pb-2">
        {onExit && (
          <button onClick={onExit}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors">
            <X size={14} />
          </button>
        )}
        <div className="flex-1" />
        <span className="text-xs font-bold text-white/50">{roundIdx + 1}/{total}</span>
      </div>

      {/* Progress bar */}
      <div className="px-5 pb-4">
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
          <motion.div className="h-full rounded-full"
            style={{ background: color }}
            animate={{ width: `${((roundIdx + 1) / total) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }} />
        </div>
      </div>

      {/* Round content */}
      <div className="flex-1 flex items-center justify-center pb-8">
        <AnimatePresence mode="wait">
          <motion.div key={roundIdx}
            className="w-full flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}>
            {round.type === "choose" && (
              <ChooseActivity round={round} color={color} lang={lang} onCorrect={handleCorrect} />
            )}
            {round.type === "tap-reveal" && (
              <TapRevealActivity round={round} color={color} lang={lang} onCorrect={handleCorrect} />
            )}
            {round.type === "order" && (
              <OrderActivity round={round} color={color} lang={lang} onCorrect={handleCorrect} />
            )}
            {round.type === "count-tap" && (
              <CountTapActivity round={round} color={color} lang={lang} onCorrect={handleCorrect} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
