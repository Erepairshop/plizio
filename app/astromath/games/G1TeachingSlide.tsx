"use client";
import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  islandId: string;   // "i1" .. "i9"
  lang: string;
  color: string;
  onDone: (score: number, total: number) => void;
  onExit?: () => void;
}

// ─── Types ─────────────────────────────────────────────────────────────────────

type RoundDef =
  | ChooseRound
  | TapRevealRound
  | OrderRound
  | CountTapRound;

interface ChooseRound {
  type: "choose";
  question: Record<string, string>;
  visual: (lang: string, color: string) => React.ReactNode;
  options: { label: string; correct: boolean }[];
}

interface TapRevealRound {
  type: "tap-reveal";
  instruction: Record<string, string>;
  items: { display: React.ReactNode; hidden: React.ReactNode }[];
  cols?: number;
}

interface OrderRound {
  type: "order";
  instruction: Record<string, string>;
  values: number[];
  ascending?: boolean; // default true
}

interface CountTapRound {
  type: "count-tap";
  instruction: Record<string, string>;
  emoji: string;
  count: number;
  options: number[];
}

// ─── LABELS ────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
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

// ─── Reusable Activity Components ──────────────────────────────────────────────

function ChooseActivity({ round, color, lang, onCorrect }: {
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
      feedbackTimer.current = setTimeout(() => { setFeedback(null); setSelected(null); }, 700);
    }
  }, [round.options, feedback, onCorrect]);

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
            {LABELS.correct[lang] ?? LABELS.correct.en} ✓
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TapRevealActivity({ round, color, lang, onCorrect }: {
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
          {LABELS.correct[lang] ?? LABELS.correct.en} ⭐
        </motion.div>
      )}
    </div>
  );
}

function OrderActivity({ round, color, lang, onCorrect }: {
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
      wrongTimer.current = setTimeout(() => setWrongIdx(null), 500);
    }
  }, [tapped, sorted, onCorrect]);

  useEffect(() => () => {
    if (doneTimer.current) clearTimeout(doneTimer.current);
    if (wrongTimer.current) clearTimeout(wrongTimer.current);
  }, []);

  const instr = asc
    ? (LABELS.orderAsc[lang] ?? LABELS.orderAsc.en)
    : (LABELS.orderDesc[lang] ?? LABELS.orderDesc.en);

  return (
    <div className="flex flex-col items-center gap-5 w-full px-4">
      <div className="flex items-center gap-2">
        <motion.p className="text-base font-bold text-white/80 text-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {instr}
        </motion.p>
        <SpeakButton text={instr} lang={lang} />
      </div>

      {/* Tapped order display */}
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

      {/* Buttons */}
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
          {LABELS.correct[lang] ?? LABELS.correct.en} ⭐
        </motion.div>
      )}
    </div>
  );
}

function CountTapActivity({ round, color, lang, onCorrect }: {
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
      feedbackTimer.current = setTimeout(() => { setFeedback(null); setSelected(null); }, 700);
    }
  }, [round.count, feedback, onCorrect]);

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
            {LABELS.correct[lang] ?? LABELS.correct.en} ✓
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Visual helpers for rounds ─────────────────────────────────────────────────

function DotGroup({ count, color, size = 26 }: { count: number; color: string; size?: number }) {
  return (
    <div className="flex flex-wrap gap-1.5 justify-center" style={{ maxWidth: 5 * (size + 6) }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-full"
          style={{ width: size, height: size, background: color, boxShadow: `0 1px 6px ${color}50` }} />
      ))}
    </div>
  );
}

function MiniEquation({ parts, color }: { parts: (string | number)[]; color: string }) {
  return (
    <div className="flex items-center gap-1.5 text-2xl font-black">
      {parts.map((p, i) => {
        const isOp = typeof p === "string" && ["+", "–", "=", "?", "-", "×", ">", "<"].includes(p);
        return (
          <span key={i} style={{ color: isOp ? "rgba(255,255,255,0.5)" : (i === parts.length - 1 ? color : "#fff") }}>
            {p}
          </span>
        );
      })}
    </div>
  );
}

function MiniClock({ hour, color }: { hour: number; color: string }) {
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

// ─── Island round definitions ──────────────────────────────────────────────────

function getIslandRounds(islandId: string, lang: string): RoundDef[] {
  switch (islandId) {

    // ── i1: Zählinsel — Counting, comparing 1-10 ─────────────────────────────
    case "i1": return [
      {
        type: "count-tap",
        instruction: { en: "Count the stars!", hu: "Számold meg a csillagokat!", de: "Zähle die Sterne!", ro: "Numără stelele!" },
        emoji: "⭐", count: 5, options: [3, 5, 7],
      },
      {
        type: "count-tap",
        instruction: { en: "Count the apples!", hu: "Számold meg az almákat!", de: "Zähle die Äpfel!", ro: "Numără merele!" },
        emoji: "🍎", count: 8, options: [6, 8, 9],
      },
      {
        type: "tap-reveal",
        instruction: { en: "Tap each number to see its dot pattern!", hu: "Koppints a számokra a pontmintájuk megtekintéséhez!", de: "Tippe auf jede Zahl um ihr Punktmuster zu sehen!", ro: "Atinge fiecare număr pentru a vedea modelul!" },
        cols: 5,
        items: [1,2,3,4,5,6,7,8,9,10].map(n => ({
          display: <span className="text-xl font-black text-white/40">?</span>,
          hidden: (
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-sm font-black text-white">{n}</span>
              <div className="flex flex-wrap gap-0.5 justify-center" style={{ maxWidth: 36 }}>
                {Array.from({ length: n }).map((_, j) => (
                  <div key={j} className="w-1.5 h-1.5 rounded-full bg-white/70" />
                ))}
              </div>
            </div>
          ),
        })),
      },
      {
        type: "choose",
        question: { en: "Which number comes AFTER 6?", hu: "Melyik szám jön 6 UTÁN?", de: "Welche Zahl kommt NACH 6?", ro: "Ce număr vine DUPĂ 6?" },
        visual: (_, color) => (
          <div className="flex gap-1.5">
            {[4,5,6].map(n => (
              <div key={n} className="w-10 h-10 rounded-full flex items-center justify-center text-base font-black"
                style={{ background: n === 6 ? color : "rgba(255,255,255,0.1)", color: n === 6 ? "#000" : "rgba(255,255,255,0.7)" }}>{n}</div>
            ))}
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-base font-black border-2 border-dashed"
              style={{ borderColor: `${color}66`, color: `${color}` }}>?</div>
          </div>
        ),
        options: [
          { label: "5", correct: false },
          { label: "7", correct: true },
          { label: "8", correct: false },
          { label: "6", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "Which is bigger: 3 or 8?", hu: "Melyik a nagyobb: 3 vagy 8?", de: "Was ist größer: 3 oder 8?", ro: "Care e mai mare: 3 sau 8?" },
        visual: (_, color) => (
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-1">
              <DotGroup count={3} color={`${color}99`} size={20} />
              <span className="text-xl font-black text-white/70">3</span>
            </div>
            <span className="text-3xl font-black text-white/30">?</span>
            <div className="flex flex-col items-center gap-1">
              <DotGroup count={8} color={`${color}99`} size={20} />
              <span className="text-xl font-black text-white/70">8</span>
            </div>
          </div>
        ),
        options: [
          { label: "3", correct: false },
          { label: "8", correct: true },
        ],
      },
      {
        type: "order",
        instruction: { en: "Put the numbers in order!", hu: "Rakd sorba a számokat!", de: "Ordne die Zahlen!", ro: "Pune numerele în ordine!" },
        values: [4, 1, 7, 3, 9],
        ascending: true,
      },
    ];

    // ── i2: Additionsinsel — Addition to 10 ──────────────────────────────────
    case "i2": return [
      {
        type: "count-tap",
        instruction: { en: "How many in total?", hu: "Összesen hány van?", de: "Wie viele insgesamt?", ro: "Câte sunt în total?" },
        emoji: "🍎", count: 5,
        options: [3, 5, 7],
      },
      {
        type: "choose",
        question: { en: "2 + 3 = ?", hu: "2 + 3 = ?", de: "2 + 3 = ?", ro: "2 + 3 = ?" },
        visual: (_, color) => (
          <div className="flex items-center gap-3">
            <DotGroup count={2} color={color} />
            <span className="text-2xl font-black text-white/40">+</span>
            <DotGroup count={3} color={`${color}99`} />
          </div>
        ),
        options: [
          { label: "4", correct: false },
          { label: "5", correct: true },
          { label: "6", correct: false },
          { label: "3", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "4 + 3 = ?", hu: "4 + 3 = ?", de: "4 + 3 = ?", ro: "4 + 3 = ?" },
        visual: (_, color) => (
          <div className="flex items-center gap-3">
            <DotGroup count={4} color={color} />
            <span className="text-2xl font-black text-white/40">+</span>
            <DotGroup count={3} color={`${color}99`} />
          </div>
        ),
        options: [
          { label: "7", correct: true },
          { label: "6", correct: false },
          { label: "8", correct: false },
          { label: "5", correct: false },
        ],
      },
      {
        type: "tap-reveal",
        instruction: { en: "Discover the swap rule! Tap each pair!", hu: "Fedezd fel a csereszabályt! Koppints a párokra!", de: "Entdecke die Tauschaufgabe! Tippe auf jedes Paar!", ro: "Descoperă regula schimbului! Atinge fiecare pereche!" },
        cols: 2,
        items: [
          { display: <span className="text-lg font-bold text-white/40">2+3=?</span>, hidden: <MiniEquation parts={[2,"+",3,"=",5]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">3+2=?</span>, hidden: <MiniEquation parts={[3,"+",2,"=",5]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">4+1=?</span>, hidden: <MiniEquation parts={[4,"+",1,"=",5]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">1+4=?</span>, hidden: <MiniEquation parts={[1,"+",4,"=",5]} color="#22c55e" /> },
        ],
      },
      {
        type: "choose",
        question: { en: "5 can be split into…", hu: "5 felbontható…", de: "5 kann man aufteilen in…", ro: "5 se poate descompune în…" },
        visual: (_, color) => (
          <div className="flex items-center gap-1">
            <DotGroup count={5} color={color} />
            <span className="text-xl font-black text-white/40 mx-2">=</span>
            <span className="text-2xl font-black" style={{ color }}>?</span>
            <span className="text-xl font-black text-white/40 mx-1">+</span>
            <span className="text-2xl font-black" style={{ color }}>?</span>
          </div>
        ),
        options: [
          { label: "3 + 2", correct: true },
          { label: "4 + 3", correct: false },
          { label: "2 + 1", correct: false },
          { label: "5 + 1", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "6 + 4 = ?", hu: "6 + 4 = ?", de: "6 + 4 = ?", ro: "6 + 4 = ?" },
        visual: (_, color) => (
          <div className="flex items-center gap-3">
            <DotGroup count={6} color={color} />
            <span className="text-2xl font-black text-white/40">+</span>
            <DotGroup count={4} color={`${color}99`} />
          </div>
        ),
        options: [
          { label: "9", correct: false },
          { label: "10", correct: true },
          { label: "8", correct: false },
          { label: "11", correct: false },
        ],
      },
    ];

    // ── i3: Subtraktionsinsel — Subtraction to 10 ────────────────────────────
    case "i3": return [
      {
        type: "choose",
        question: { en: "5 apples – 2 eaten = ?", hu: "5 alma – 2 megevés = ?", de: "5 Äpfel – 2 gegessen = ?", ro: "5 mere – 2 mâncate = ?" },
        visual: (_, color) => (
          <div className="flex gap-2 items-center">
            {["🍎","🍎","🍎","❌","❌"].map((e, i) => (
              <motion.span key={i} className="text-2xl"
                initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}>{e}</motion.span>
            ))}
          </div>
        ),
        options: [
          { label: "2", correct: false },
          { label: "3", correct: true },
          { label: "4", correct: false },
          { label: "7", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "8 – 3 = ?", hu: "8 – 3 = ?", de: "8 – 3 = ?", ro: "8 – 3 = ?" },
        visual: (_, color) => <MiniEquation parts={[8, "–", 3, "=", "?"]} color={color} />,
        options: [
          { label: "5", correct: true },
          { label: "4", correct: false },
          { label: "6", correct: false },
          { label: "3", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "3 + ? = 7", hu: "3 + ? = 7", de: "3 + ? = 7", ro: "3 + ? = 7" },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[1,2,3,4,5,6,7].map(n => (
                <div key={n} className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: n <= 3 ? color : n <= 7 ? `${color}33` : "rgba(255,255,255,0.06)", color: n <= 3 ? "#000" : "rgba(255,255,255,0.5)" }}>{n}</div>
              ))}
            </div>
            <MiniEquation parts={[3, "+", "?", "=", 7]} color={color} />
          </div>
        ),
        options: [
          { label: "3", correct: false },
          { label: "4", correct: true },
          { label: "5", correct: false },
          { label: "2", correct: false },
        ],
      },
      {
        type: "tap-reveal",
        instruction: { en: "Tap to discover the number family of 3, 4, 7!", hu: "Koppints a 3, 4, 7 számcsalád felfedezéséhez!", de: "Tippe um die Zahlenfamilie 3, 4, 7 zu entdecken!", ro: "Atinge pentru a descoperi familia 3, 4, 7!" },
        cols: 2,
        items: [
          { display: <span className="text-base font-bold text-white/40">?+?=?</span>, hidden: <MiniEquation parts={[3,"+",4,"=",7]} color="#22c55e" /> },
          { display: <span className="text-base font-bold text-white/40">?+?=?</span>, hidden: <MiniEquation parts={[4,"+",3,"=",7]} color="#22c55e" /> },
          { display: <span className="text-base font-bold text-white/40">?–?=?</span>, hidden: <MiniEquation parts={[7,"–",3,"=",4]} color="#f59e0b" /> },
          { display: <span className="text-base font-bold text-white/40">?–?=?</span>, hidden: <MiniEquation parts={[7,"–",4,"=",3]} color="#f59e0b" /> },
        ],
      },
      {
        type: "choose",
        question: { en: "10 – 6 = ?", hu: "10 – 6 = ?", de: "10 – 6 = ?", ro: "10 – 6 = ?" },
        visual: (_, color) => <MiniEquation parts={[10, "–", 6, "=", "?"]} color={color} />,
        options: [
          { label: "3", correct: false },
          { label: "5", correct: false },
          { label: "4", correct: true },
          { label: "6", correct: false },
        ],
      },
    ];

    // ── i4: Verdoppeln & Halbieren — Doubles and halves ──────────────────────
    case "i4": return [
      {
        type: "tap-reveal",
        instruction: { en: "Discover the doubles! Tap each card!", hu: "Fedezd fel a duplázásokat! Koppints!", de: "Entdecke die Verdopplungen! Tippe!", ro: "Descoperă dublurile! Atinge!" },
        cols: 3,
        items: [2,3,4,5,6].map(n => ({
          display: <span className="text-lg font-bold text-white/40">{n}+{n}</span>,
          hidden: (
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-white/50">{n}+{n}</span>
              <span className="text-xl font-black text-white">{n * 2}</span>
            </div>
          ),
        })),
      },
      {
        type: "choose",
        question: { en: "Double of 4?", hu: "4 duplája?", de: "Das Doppelte von 4?", ro: "Dublul lui 4?" },
        visual: (_, color) => (
          <div className="flex items-center gap-3">
            <DotGroup count={4} color={color} />
            <span className="text-2xl font-black text-white/40">+</span>
            <DotGroup count={4} color={`${color}88`} />
          </div>
        ),
        options: [
          { label: "6", correct: false },
          { label: "8", correct: true },
          { label: "10", correct: false },
          { label: "4", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "Double of 7?", hu: "7 duplája?", de: "Das Doppelte von 7?", ro: "Dublul lui 7?" },
        visual: (_, color) => <MiniEquation parts={[7, "+", 7, "=", "?"]} color={color} />,
        options: [
          { label: "12", correct: false },
          { label: "14", correct: true },
          { label: "15", correct: false },
          { label: "13", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "Half of 10?", hu: "10 fele?", de: "Die Hälfte von 10?", ro: "Jumătatea lui 10?" },
        visual: (_, color) => (
          <div className="flex items-center gap-2">
            <DotGroup count={10} color={color} size={18} />
            <span className="text-xl font-black text-white/40 mx-1">÷ 2 =</span>
            <span className="text-2xl font-black" style={{ color }}>?</span>
          </div>
        ),
        options: [
          { label: "4", correct: false },
          { label: "5", correct: true },
          { label: "6", correct: false },
          { label: "3", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "Half of 8?", hu: "8 fele?", de: "Die Hälfte von 8?", ro: "Jumătatea lui 8?" },
        visual: (_, color) => <MiniEquation parts={[8, "÷", 2, "=", "?"]} color={color} />,
        options: [
          { label: "3", correct: false },
          { label: "4", correct: true },
          { label: "5", correct: false },
          { label: "6", correct: false },
        ],
      },
    ];

    // ── i5: Zahlen bis 20 — Numbers 11-20, place value ───────────────────────
    case "i5": return [
      {
        type: "tap-reveal",
        instruction: { en: "Discover numbers 11 to 20! Each is 10 + something!", hu: "Fedezd fel a 11-20 számokat! Mindegyik 10 + valami!", de: "Entdecke die Zahlen 11 bis 20! Jede ist 10 + etwas!", ro: "Descoperă numerele 11-20! Fiecare e 10 + ceva!" },
        cols: 5,
        items: [11,12,13,14,15,16,17,18,19,20].map(n => ({
          display: <span className="text-lg font-black text-white/40">?</span>,
          hidden: (
            <div className="flex flex-col items-center">
              <span className="text-base font-black text-white">{n}</span>
              <span className="text-[10px] font-bold text-white/50">10+{n-10}</span>
            </div>
          ),
        })),
      },
      {
        type: "choose",
        question: { en: "10 + 5 = ?", hu: "10 + 5 = ?", de: "10 + 5 = ?", ro: "10 + 5 = ?" },
        visual: (_, color) => (
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <DotGroup count={10} color={`${color}66`} size={16} />
              <span className="text-xs font-bold text-white/40">10</span>
            </div>
            <span className="text-xl font-black text-white/40">+</span>
            <div className="flex flex-col items-center gap-1">
              <DotGroup count={5} color={color} size={16} />
              <span className="text-xs font-bold text-white/40">5</span>
            </div>
          </div>
        ),
        options: [
          { label: "14", correct: false },
          { label: "15", correct: true },
          { label: "16", correct: false },
          { label: "13", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "What comes BEFORE 15?", hu: "Mi jön 15 ELŐTT?", de: "Was kommt VOR 15?", ro: "Ce vine ÎNAINTE de 15?" },
        visual: (_, color) => (
          <div className="flex gap-1.5">
            {[12,13].map(n => (
              <div key={n} className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-white/70"
                style={{ background: "rgba(255,255,255,0.1)" }}>{n}</div>
            ))}
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black border-2 border-dashed"
              style={{ borderColor: `${color}66`, color }}>?</div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-white"
              style={{ background: color, color: "#000" }}>15</div>
          </div>
        ),
        options: [
          { label: "13", correct: false },
          { label: "14", correct: true },
          { label: "16", correct: false },
          { label: "12", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "Is 17 even or odd?", hu: "A 17 páros vagy páratlan?", de: "Ist 17 gerade oder ungerade?", ro: "17 este par sau impar?" },
        visual: (_, color) => (
          <div className="flex items-center gap-2">
            <div className="flex flex-wrap gap-1 justify-center" style={{ maxWidth: 100 }}>
              {Array.from({length: 17}).map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full"
                  style={{ background: i < 16 ? `${color}66` : color }} />
              ))}
            </div>
          </div>
        ),
        options: [
          { label: lang === "hu" ? "Páros" : lang === "de" ? "Gerade" : lang === "ro" ? "Par" : "Even", correct: false },
          { label: lang === "hu" ? "Páratlan" : lang === "de" ? "Ungerade" : lang === "ro" ? "Impar" : "Odd", correct: true },
        ],
      },
      {
        type: "order",
        instruction: { en: "Order: smallest to biggest!", hu: "Rakd sorba: legkisebb → legnagyobb!", de: "Ordne: kleinste → größte!", ro: "Ordonează: cel mai mic → cel mai mare!" },
        values: [18, 12, 15, 11, 20],
        ascending: true,
      },
    ];

    // ── i6: Sachaufgaben — Word problems ─────────────────────────────────────
    case "i6": return [
      {
        type: "choose",
        question: { en: "Tom has 5 🍎 and gets 3 more. How many now?", hu: "Tomnak van 5 🍎 és kap még 3-at. Hány van most?", de: "Tom hat 5 🍎 und bekommt 3 dazu. Wie viele jetzt?", ro: "Tom are 5 🍎 și primește încă 3. Câte are acum?" },
        visual: (_, color) => (
          <div className="flex items-center gap-2">
            {["🍎","🍎","🍎","🍎","🍎"].map((e,i) => <span key={i} className="text-2xl">{e}</span>)}
            <span className="text-xl font-black text-white/40">+</span>
            {["🍎","🍎","🍎"].map((e,i) => <motion.span key={`b${i}`} className="text-2xl"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>{e}</motion.span>)}
          </div>
        ),
        options: [
          { label: "7", correct: false },
          { label: "8", correct: true },
          { label: "9", correct: false },
          { label: "6", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "Anna has 9 🌟 and loses 4. How many left?", hu: "Annának van 9 🌟 és elveszít 4-et. Hány maradt?", de: "Anna hat 9 🌟 und verliert 4. Wie viele bleiben?", ro: "Anna are 9 🌟 și pierde 4. Câte rămân?" },
        visual: (_, color) => (
          <div className="flex items-center gap-1">
            {Array.from({length: 9}).map((_, i) => (
              <motion.span key={i} className="text-2xl"
                animate={i >= 5 ? { opacity: 0.3, scale: 0.8 } : {}}
                transition={{ delay: 0.3 + i * 0.05 }}>⭐</motion.span>
            ))}
          </div>
        ),
        options: [
          { label: "4", correct: false },
          { label: "5", correct: true },
          { label: "6", correct: false },
          { label: "3", correct: false },
        ],
      },
      {
        type: "choose",
        question: {
          en: "Is this + or –? \"Max had 7 balls. He gave away 2.\"",
          hu: "Ez + vagy –? \"Maxnak volt 7 labdája. Elajándékozott 2-t.\"",
          de: "Ist das + oder –? \"Max hatte 7 Bälle. Er hat 2 verschenkt.\"",
          ro: "Este + sau –? \"Max avea 7 mingi. A dat 2.\"",
        },
        visual: () => <span className="text-5xl">🤔</span>,
        options: [
          { label: "+", correct: false },
          { label: "–", correct: true },
        ],
      },
      {
        type: "choose",
        question: {
          en: "Is this + or –? \"3 birds joined 5 others on the tree.\"",
          hu: "Ez + vagy –? \"3 madár csatlakozott 5 másikhoz a fán.\"",
          de: "Ist das + oder –? \"3 Vögel kamen zu 5 anderen auf dem Baum.\"",
          ro: "Este + sau –? \"3 păsări s-au alăturat altor 5 din copac.\"",
        },
        visual: () => <span className="text-5xl">🐦</span>,
        options: [
          { label: "+", correct: true },
          { label: "–", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "6 kids + 4 more kids = ?", hu: "6 gyerek + 4 gyerek = ?", de: "6 Kinder + 4 Kinder = ?", ro: "6 copii + alți 4 copii = ?" },
        visual: (_, color) => <MiniEquation parts={[6, "+", 4, "=", "?"]} color={color} />,
        options: [
          { label: "8", correct: false },
          { label: "10", correct: true },
          { label: "9", correct: false },
          { label: "11", correct: false },
        ],
      },
    ];

    // ── i7: Formeninsel — Shapes, spatial ────────────────────────────────────
    case "i7": return [
      {
        type: "tap-reveal",
        instruction: { en: "Tap to discover the shapes!", hu: "Koppints az alakzatok felfedezéséhez!", de: "Tippe um die Formen zu entdecken!", ro: "Atinge pentru a descoperi formele!" },
        cols: 3,
        items: [
          { display: <span className="text-3xl text-white/30">?</span>, hidden: <div className="flex flex-col items-center"><span className="text-3xl">⬜</span><span className="text-[10px] font-bold text-white/60">{lang === "hu" ? "Négyzet" : lang === "de" ? "Quadrat" : lang === "ro" ? "Pătrat" : "Square"}</span></div> },
          { display: <span className="text-3xl text-white/30">?</span>, hidden: <div className="flex flex-col items-center"><span className="text-3xl">🔺</span><span className="text-[10px] font-bold text-white/60">{lang === "hu" ? "Háromszög" : lang === "de" ? "Dreieck" : lang === "ro" ? "Triunghi" : "Triangle"}</span></div> },
          { display: <span className="text-3xl text-white/30">?</span>, hidden: <div className="flex flex-col items-center"><span className="text-3xl">🔵</span><span className="text-[10px] font-bold text-white/60">{lang === "hu" ? "Kör" : lang === "de" ? "Kreis" : lang === "ro" ? "Cerc" : "Circle"}</span></div> },
          { display: <span className="text-3xl text-white/30">?</span>, hidden: <div className="flex flex-col items-center"><span className="text-3xl">▬</span><span className="text-[10px] font-bold text-white/60">{lang === "hu" ? "Téglalap" : lang === "de" ? "Rechteck" : lang === "ro" ? "Dreptunghi" : "Rectangle"}</span></div> },
          { display: <span className="text-3xl text-white/30">?</span>, hidden: <div className="flex flex-col items-center"><span className="text-3xl">⬡</span><span className="text-[10px] font-bold text-white/60">{lang === "hu" ? "Hatszög" : lang === "de" ? "Sechseck" : lang === "ro" ? "Hexagon" : "Hexagon"}</span></div> },
          { display: <span className="text-3xl text-white/30">?</span>, hidden: <div className="flex flex-col items-center"><span className="text-3xl">⬟</span><span className="text-[10px] font-bold text-white/60">{lang === "hu" ? "Ötszög" : lang === "de" ? "Fünfeck" : lang === "ro" ? "Pentagon" : "Pentagon"}</span></div> },
        ],
      },
      {
        type: "choose",
        question: { en: "How many corners does a triangle have?", hu: "Hány csúcsa van a háromszögnek?", de: "Wie viele Ecken hat ein Dreieck?", ro: "Câte colțuri are un triunghi?" },
        visual: () => <span className="text-6xl">🔺</span>,
        options: [
          { label: "3", correct: true },
          { label: "4", correct: false },
          { label: "2", correct: false },
          { label: "5", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "Which shape has 4 equal sides?", hu: "Melyik alakzatnak van 4 egyenlő oldala?", de: "Welche Form hat 4 gleiche Seiten?", ro: "Care formă are 4 laturi egale?" },
        visual: () => null,
        options: [
          { label: lang === "hu" ? "Négyzet" : lang === "de" ? "Quadrat" : lang === "ro" ? "Pătrat" : "Square", correct: true },
          { label: lang === "hu" ? "Háromszög" : lang === "de" ? "Dreieck" : lang === "ro" ? "Triunghi" : "Triangle", correct: false },
          { label: lang === "hu" ? "Kör" : lang === "de" ? "Kreis" : lang === "ro" ? "Cerc" : "Circle", correct: false },
          { label: lang === "hu" ? "Téglalap" : lang === "de" ? "Rechteck" : lang === "ro" ? "Dreptunghi" : "Rectangle", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "What comes next? 🔴 🔵 🔴 🔵 🔴 ?", hu: "Mi jön ezután? 🔴 🔵 🔴 🔵 🔴 ?", de: "Was kommt als nächstes? 🔴 🔵 🔴 🔵 🔴 ?", ro: "Ce urmează? 🔴 🔵 🔴 🔵 🔴 ?" },
        visual: () => (
          <div className="flex gap-2 items-center">
            {["🔴","🔵","🔴","🔵","🔴"].map((e,i) => <span key={i} className="text-2xl">{e}</span>)}
            <span className="text-2xl text-white/30">?</span>
          </div>
        ),
        options: [
          { label: "🔴", correct: false },
          { label: "🔵", correct: true },
        ],
      },
      {
        type: "choose",
        question: { en: "A door looks like a…", hu: "Az ajtó olyan, mint egy…", de: "Eine Tür sieht aus wie ein…", ro: "O ușă arată ca un…" },
        visual: () => <span className="text-5xl">🚪</span>,
        options: [
          { label: lang === "hu" ? "Kör" : lang === "de" ? "Kreis" : lang === "ro" ? "Cerc" : "Circle", correct: false },
          { label: lang === "hu" ? "Téglalap" : lang === "de" ? "Rechteck" : lang === "ro" ? "Dreptunghi" : "Rectangle", correct: true },
          { label: lang === "hu" ? "Háromszög" : lang === "de" ? "Dreieck" : lang === "ro" ? "Triunghi" : "Triangle", correct: false },
        ],
      },
    ];

    // ── i8: Messinsel — Clock, money, weight, days ───────────────────────────
    case "i8": return [
      {
        type: "choose",
        question: { en: "What time is it?", hu: "Hány óra van?", de: "Wie spät ist es?", ro: "Cât este ceasul?" },
        visual: (_, color) => <MiniClock hour={3} color={color} />,
        options: [
          { label: "2:00", correct: false },
          { label: "3:00", correct: true },
          { label: "6:00", correct: false },
          { label: "9:00", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "What time is it?", hu: "Hány óra van?", de: "Wie spät ist es?", ro: "Cât este ceasul?" },
        visual: (_, color) => <MiniClock hour={8} color={color} />,
        options: [
          { label: "7:00", correct: false },
          { label: "8:00", correct: true },
          { label: "10:00", correct: false },
          { label: "4:00", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "Which is heavier?", hu: "Melyik nehezebb?", de: "Was ist schwerer?", ro: "Care e mai greu?" },
        visual: () => (
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center"><span className="text-4xl">🪶</span><span className="text-xs text-white/50">{lang === "hu" ? "Toll" : lang === "de" ? "Feder" : lang === "ro" ? "Pană" : "Feather"}</span></div>
            <span className="text-2xl text-white/30">?</span>
            <div className="flex flex-col items-center"><span className="text-4xl">🪨</span><span className="text-xs text-white/50">{lang === "hu" ? "Kő" : lang === "de" ? "Stein" : lang === "ro" ? "Piatră" : "Rock"}</span></div>
          </div>
        ),
        options: [
          { label: "🪶", correct: false },
          { label: "🪨", correct: true },
        ],
      },
      {
        type: "order",
        instruction: {
          en: "Order the days: Mon=1, Tue=2 … Put in order!",
          hu: "Rakd sorba a napokat: Hé=1, Ke=2 … Sorrendbe!",
          de: "Ordne die Tage: Mo=1, Di=2 … Reihenfolge!",
          ro: "Ordonează zilele: Lu=1, Ma=2 … În ordine!",
        },
        values: [3, 1, 5, 2, 4],
        ascending: true,
      },
      {
        type: "choose",
        question: { en: "2 coins of 5 = ?", hu: "2 darab 5-ös érme = ?", de: "2 Münzen à 5 = ?", ro: "2 monede de 5 = ?" },
        visual: () => (
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black bg-yellow-500/20 border-2 border-yellow-500/40 text-yellow-300">5</div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black bg-yellow-500/20 border-2 border-yellow-500/40 text-yellow-300">5</div>
          </div>
        ),
        options: [
          { label: "8", correct: false },
          { label: "10", correct: true },
          { label: "15", correct: false },
          { label: "5", correct: false },
        ],
      },
    ];

    // ── i9: Daten & Muster — Data, sequences, patterns ───────────────────────
    case "i9": return [
      {
        type: "choose",
        question: { en: "What comes next? 2, 4, 6, 8, ?", hu: "Mi jön ezután? 2, 4, 6, 8, ?", de: "Was kommt als nächstes? 2, 4, 6, 8, ?", ro: "Ce urmează? 2, 4, 6, 8, ?" },
        visual: (_, color) => (
          <div className="flex gap-2">
            {[2,4,6,8].map(n => (
              <div key={n} className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-black text-white"
                style={{ background: `${color}44` }}>{n}</div>
            ))}
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-black border-2 border-dashed"
              style={{ borderColor: color, color }}>?</div>
          </div>
        ),
        options: [
          { label: "9", correct: false },
          { label: "10", correct: true },
          { label: "12", correct: false },
          { label: "11", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "What comes next? 5, 10, 15, 20, ?", hu: "Mi jön ezután? 5, 10, 15, 20, ?", de: "Was kommt als nächstes? 5, 10, 15, 20, ?", ro: "Ce urmează? 5, 10, 15, 20, ?" },
        visual: (_, color) => (
          <div className="flex gap-2">
            {[5,10,15,20].map(n => (
              <div key={n} className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white"
                style={{ background: `${color}44` }}>{n}</div>
            ))}
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black border-2 border-dashed"
              style={{ borderColor: color, color }}>?</div>
          </div>
        ),
        options: [
          { label: "22", correct: false },
          { label: "25", correct: true },
          { label: "30", correct: false },
          { label: "24", correct: false },
        ],
      },
      {
        type: "count-tap",
        instruction: { en: "Count the ⭐ in the chart!", hu: "Számold meg a ⭐-okat a táblázatban!", de: "Zähle die ⭐ in der Tabelle!", ro: "Numără ⭐ din tabel!" },
        emoji: "⭐", count: 7, options: [5, 7, 9],
      },
      {
        type: "choose",
        question: { en: "What comes next? 🔴🔵🔵🔴🔵🔵🔴?", hu: "Mi jön? 🔴🔵🔵🔴🔵🔵🔴?", de: "Was kommt? 🔴🔵🔵🔴🔵🔵🔴?", ro: "Ce urmează? 🔴🔵🔵🔴🔵🔵🔴?" },
        visual: () => (
          <div className="flex gap-1.5 items-center">
            {["🔴","🔵","🔵","🔴","🔵","🔵","🔴"].map((e,i) => <span key={i} className="text-xl">{e}</span>)}
            <span className="text-xl text-white/30">?</span>
          </div>
        ),
        options: [
          { label: "🔴", correct: false },
          { label: "🔵", correct: true },
        ],
      },
      {
        type: "order",
        instruction: { en: "Put in order: smallest to biggest!", hu: "Rakd sorba!", de: "Ordne die Zahlen!", ro: "Pune în ordine!" },
        values: [13, 7, 19, 3, 11],
        ascending: true,
      },
    ];

    default: return [];
  }
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function G1TeachingSlide({ islandId, lang, color, onDone, onExit }: Props) {
  const rounds = useMemo(() => getIslandRounds(islandId, lang), [islandId, lang]);
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
          {LABELS.complete[lang] ?? LABELS.complete.en}
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
          {LABELS.letsGo[lang] ?? LABELS.letsGo.en}
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
