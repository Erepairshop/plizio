"use client";
// ClockCoinsExplorer — Clock reading & coin counting for Grade 1 (i8)
// Teaches: read analog clock (full hours) + count coins.
// Step by step, no wrong answers.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Clock & Coins Explorer",
    clockIntro: "The SHORT hand shows the HOUR!",
    coinIntro: "Let's count the money!",
    whatTime: "What time is it?",
    theShortHand: "The short hand points to",
    itIs: "It is",
    oClock: "o'clock!",
    coins: "Count the coins:",
    tapEach: "Tap each coin to count!",
    total: "Total:",
    currency: "cents",
    next: "Next",
    done: "Brilliant!",
    tapReveal: "Tap to see the answer",
  },
  hu: {
    title: "Óra & Pénz felfedezés",
    clockIntro: "A RÖVID mutató mutatja az ÓRÁT!",
    coinIntro: "Számoljuk meg a pénzt!",
    whatTime: "Hány óra van?",
    theShortHand: "A rövid mutató a számra mutat:",
    itIs: "Most",
    oClock: "óra van!",
    coins: "Számold meg az érméket:",
    tapEach: "Koppints minden érmére!",
    total: "Összesen:",
    currency: "cent",
    next: "Következő",
    done: "Fantasztikus!",
    tapReveal: "Koppints a válaszhoz",
  },
  de: {
    title: "Uhr & Geld entdecken",
    clockIntro: "Der KURZE Zeiger zeigt die STUNDE!",
    coinIntro: "Zählen wir das Geld!",
    whatTime: "Wie spät ist es?",
    theShortHand: "Der kurze Zeiger zeigt auf",
    itIs: "Es ist",
    oClock: "Uhr!",
    coins: "Zähle die Münzen:",
    tapEach: "Tippe auf jede Münze!",
    total: "Insgesamt:",
    currency: "Cent",
    next: "Weiter",
    done: "Super!",
    tapReveal: "Tippe für die Antwort",
  },
  ro: {
    title: "Explorare ceas & bani",
    clockIntro: "Acul SCURT arată ORA!",
    coinIntro: "Să numărăm banii!",
    whatTime: "Cât este ceasul?",
    theShortHand: "Acul scurt arată la",
    itIs: "Este ora",
    oClock: "!",
    coins: "Numără monedele:",
    tapEach: "Atinge fiecare monedă!",
    total: "Total:",
    currency: "cenți",
    next: "Înainte",
    done: "Excelent!",
    tapReveal: "Atinge pentru răspuns",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
type RoundType = "clock" | "coins";
interface ClockRound { type: "clock"; hour: number }
interface CoinRound { type: "coins"; values: number[] }
type Round = ClockRound | CoinRound;

const ROUNDS: Round[] = [
  { type: "clock", hour: 3 },
  { type: "coins", values: [10, 10, 5, 5, 1] },
  { type: "clock", hour: 7 },
  { type: "coins", values: [20, 10, 10, 5] },
  { type: "clock", hour: 11 },
  { type: "coins", values: [50, 20, 10, 5, 5, 2] },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Clock SVG ──────────────────────────────────────────────────────────────
function ClockSVG({ hour, color, showAnswer }: { hour: number; color: string; showAnswer: boolean }) {
  const cx = 60, cy = 60, r = 50;
  const hourAngle = ((hour % 12) / 12) * 2 * Math.PI - Math.PI / 2;
  const hx = cx + r * 0.5 * Math.cos(hourAngle);
  const hy = cy + r * 0.5 * Math.sin(hourAngle);
  // Minute hand always at 12
  const mx = cx;
  const my = cy - r * 0.7;

  return (
    <svg width={130} height={130} viewBox="0 0 120 120">
      {/* Face */}
      <circle cx={cx} cy={cy} r={r} fill="rgba(255,255,255,0.06)" stroke={color} strokeWidth={3} />
      {/* Numbers */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = ((i + 1) / 12) * 2 * Math.PI - Math.PI / 2;
        const nx = cx + (r - 12) * Math.cos(angle);
        const ny = cy + (r - 12) * Math.sin(angle);
        const isTarget = (i + 1) === hour;
        return (
          <text key={i} x={nx} y={ny + 4} textAnchor="middle"
            fill={showAnswer && isTarget ? "#00FF88" : "rgba(255,255,255,0.6)"}
            fontSize={isTarget && showAnswer ? 13 : 10} fontWeight={isTarget ? 900 : 600}>
            {i + 1}
          </text>
        );
      })}
      {/* Center dot */}
      <circle cx={cx} cy={cy} r={3} fill={color} />
      {/* Minute hand (long, thin, at 12) */}
      <line x1={cx} y1={cy} x2={mx} y2={my}
        stroke="rgba(255,255,255,0.5)" strokeWidth={2} strokeLinecap="round" />
      {/* Hour hand (short, thick) */}
      <line x1={cx} y1={cy} x2={hx} y2={hy}
        stroke={showAnswer ? "#00FF88" : color} strokeWidth={4} strokeLinecap="round" />
    </svg>
  );
}

// ─── Coin component ──────────────────────────────────────────────────────────
const COIN_COLORS: Record<number, string> = {
  1: "#CD7F32", 2: "#CD7F32", 5: "#CD7F32",
  10: "#C0C0C0", 20: "#C0C0C0", 50: "#C0C0C0",
};
const COIN_SIZE: Record<number, number> = {
  1: 28, 2: 30, 5: 32, 10: 34, 20: 36, 50: 40,
};

// ─── Main Component ──────────────────────────────────────────────────────────
const ClockCoinsExplorer = memo(function ClockCoinsExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => {
    // Keep alternating pattern but shuffle within type
    const clocks = shuffle(ROUNDS.filter(r => r.type === "clock"));
    const coins = shuffle(ROUNDS.filter(r => r.type === "coins"));
    const result: Round[] = [];
    for (let i = 0; i < 3; i++) {
      if (clocks[i]) result.push(clocks[i]);
      if (coins[i]) result.push(coins[i]);
    }
    return result;
  });
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [tappedCoins, setTappedCoins] = useState<Set<number>>(new Set());

  const round = rounds[idx];

  const handleNext = useCallback(() => {
    if (idx + 1 >= rounds.length) {
      onDone(rounds.length, rounds.length);
      return;
    }
    setIdx(i => i + 1);
    setRevealed(false);
    setTappedCoins(new Set());
  }, [idx, rounds.length, onDone]);

  const handleTapCoin = useCallback((i: number) => {
    if (revealed) return;
    setTappedCoins(prev => new Set([...prev, i]));
  }, [revealed]);

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {/* Progress */}
      <div className="flex gap-1.5 w-full">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* CLOCK round */}
          {round.type === "clock" && (() => {
            const r = round as ClockRound;
            return (
              <>
                <p className="text-white/50 text-xs font-medium text-center px-4">{lbl.clockIntro}</p>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-white/60 text-xs font-bold text-center">{lbl.whatTime}</p>
                  <SpeakButton text={lbl.whatTime} lang={lang} size={14} />
                </div>

                <div className="rounded-2xl p-3 flex items-center justify-center"
                  style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                  <ClockSVG hour={r.hour} color={color} showAnswer={revealed} />
                </div>

                {!revealed ? (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">
                      {lbl.theShortHand}...
                    </p>
                    <motion.button onClick={() => setRevealed(true)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapReveal}
                    </motion.button>
                  </>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col gap-2 items-center w-full">
                    <div className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
                      <p className="text-center text-sm font-bold text-white/50">
                        {lbl.theShortHand} {r.hour}
                      </p>
                      <p className="text-center text-3xl font-black mt-1" style={{ color: "#00FF88" }}>
                        {lbl.itIs} {r.hour} {lbl.oClock}
                      </p>
                    </div>
                    <motion.button onClick={handleNext}
                      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                      whileTap={{ scale: 0.97 }}>
                      {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={16} />
                    </motion.button>
                  </motion.div>
                )}
              </>
            );
          })()}

          {/* COINS round */}
          {round.type === "coins" && (() => {
            const r = round as CoinRound;
            const total = r.values.reduce((s, v) => s + v, 0);
            const allTapped = tappedCoins.size >= r.values.length;
            const runningTotal = r.values.reduce((s, v, i) => s + (tappedCoins.has(i) ? v : 0), 0);

            return (
              <>
                <p className="text-white/50 text-xs font-medium text-center px-4">{lbl.coinIntro}</p>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-white/60 text-xs font-bold text-center">{lbl.tapEach}</p>
                  <SpeakButton text={lbl.tapEach} lang={lang} size={14} />
                </div>

                {/* Coins grid */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {r.values.map((val, i) => {
                    const sz = COIN_SIZE[val] ?? 32;
                    const clr = COIN_COLORS[val] ?? "#C0C0C0";
                    const isTapped = tappedCoins.has(i);
                    return (
                      <motion.button key={i} onClick={() => handleTapCoin(i)}
                        className="rounded-full flex items-center justify-center font-black relative"
                        style={{
                          width: sz + 8, height: sz + 8,
                          background: isTapped ? `${clr}44` : `${clr}22`,
                          border: `2px solid ${isTapped ? "#00FF88" : clr}`,
                          fontSize: val >= 10 ? 11 : 10,
                          color: isTapped ? "#00FF88" : clr,
                        }}
                        animate={isTapped ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.2 }}>
                        {val}¢
                      </motion.button>
                    );
                  })}
                </div>

                {/* Running total */}
                <div className="text-center">
                  <span className="text-xl font-black" style={{ color: allTapped ? "#00FF88" : color }}>
                    {runningTotal} {lbl.currency}
                  </span>
                </div>

                {allTapped && !revealed && (
                  <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    onClick={() => setRevealed(true)}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {lbl.tapReveal}
                  </motion.button>
                )}

                {revealed && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col gap-2 items-center w-full">
                    <div className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
                      <p className="text-white/50 text-xs font-bold text-center mb-1">{lbl.total}</p>
                      <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                        {total} {lbl.currency}
                      </p>
                    </div>
                    <motion.button onClick={handleNext}
                      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                      whileTap={{ scale: 0.97 }}>
                      {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={16} />
                    </motion.button>
                  </motion.div>
                )}
              </>
            );
          })()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ClockCoinsExplorer;
