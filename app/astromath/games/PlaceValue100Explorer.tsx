"use client";
// PlaceValue100Explorer — Place value discovery for Grade 2 (i1)
// Teaches: tens & ones, building numbers, comparing with blocks.
// Step by step, no wrong answers.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Place Value Explorer",
    intro: "Every number is made of TENS and ONES. Let's explore!",
    tapTens: "Tap each ten-block to count!",
    tapOnes: "Now tap the ones!",
    tensIs: "tens",
    onesIs: "ones",
    together: "Together that's:",
    buildQ: "How many tens and ones make this number?",
    tapBuild: "Tap to build!",
    compare: "Which number is bigger?",
    tapCompare: "Tap to compare!",
    because: "because",
    moreTens: "has more tens!",
    sameButMoreOnes: "same tens, but more ones!",
    next: "Next",
    done: "Amazing!",
  },
  hu: {
    title: "Helyiérték felfedezés",
    intro: "Minden szám TÍZESEKBŐL és EGYESEKBŐL áll. Fedezzük fel!",
    tapTens: "Koppints minden tízes blokkra a számoláshoz!",
    tapOnes: "Most koppints az egyesekre!",
    tensIs: "tízes",
    onesIs: "egyes",
    together: "Együtt ez:",
    buildQ: "Hány tízes és egyes alkotja ezt a számot?",
    tapBuild: "Koppints az építéshez!",
    compare: "Melyik szám a nagyobb?",
    tapCompare: "Koppints az összehasonlításhoz!",
    because: "mert",
    moreTens: "több tízese van!",
    sameButMoreOnes: "ugyanannyi tízes, de több egyes!",
    next: "Következő",
    done: "Fantasztikus!",
  },
  de: {
    title: "Stellenwert entdecken",
    intro: "Jede Zahl besteht aus ZEHNERN und EINERN. Entdecken wir!",
    tapTens: "Tippe auf jeden Zehnerblock zum Zählen!",
    tapOnes: "Jetzt tippe auf die Einer!",
    tensIs: "Zehner",
    onesIs: "Einer",
    together: "Zusammen ergibt das:",
    buildQ: "Wie viele Zehner und Einer ergeben diese Zahl?",
    tapBuild: "Tippe zum Bauen!",
    compare: "Welche Zahl ist größer?",
    tapCompare: "Tippe zum Vergleichen!",
    because: "weil",
    moreTens: "mehr Zehner hat!",
    sameButMoreOnes: "gleich viele Zehner, aber mehr Einer!",
    next: "Weiter",
    done: "Super!",
  },
  ro: {
    title: "Explorare valori poziționale",
    intro: "Fiecare număr e format din ZECI și UNITĂȚI. Să explorăm!",
    tapTens: "Atinge fiecare bloc de zeci pentru a număra!",
    tapOnes: "Acum atinge unitățile!",
    tensIs: "zeci",
    onesIs: "unități",
    together: "Împreună fac:",
    buildQ: "Câte zeci și unități formează acest număr?",
    tapBuild: "Atinge pentru a construi!",
    compare: "Care număr e mai mare?",
    tapCompare: "Atinge pentru a compara!",
    because: "pentru că",
    moreTens: "are mai multe zeci!",
    sameButMoreOnes: "aceleași zeci, dar mai multe unități!",
    next: "Înainte",
    done: "Excelent!",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
type RoundType = "decompose" | "build" | "compare";
interface DecomposeRound { type: "decompose"; num: number }
interface BuildRound { type: "build"; num: number }
interface CompareRound { type: "compare"; a: number; b: number }
type Round = DecomposeRound | BuildRound | CompareRound;

const ROUNDS: Round[] = [
  { type: "decompose", num: 34 },
  { type: "decompose", num: 67 },
  { type: "build", num: 52 },
  { type: "build", num: 85 },
  { type: "compare", a: 38, b: 56 },
  { type: "compare", a: 73, b: 79 },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Visual: Ten Block ──────────────────────────────────────────────────────
function TenBlock({ tapped, color, onClick }: { tapped: boolean; color: string; onClick: () => void }) {
  return (
    <motion.button onClick={onClick} whileTap={{ scale: 0.9 }}
      className="flex flex-col gap-0.5 p-1 rounded-lg transition-colors"
      style={{
        background: tapped ? `${color}33` : "rgba(255,255,255,0.06)",
        border: `2px solid ${tapped ? color : "rgba(255,255,255,0.15)"}`,
      }}>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="w-4 h-1.5 rounded-sm"
          style={{ background: tapped ? color : "rgba(255,255,255,0.2)" }} />
      ))}
    </motion.button>
  );
}

function OneBlock({ tapped, color, onClick }: { tapped: boolean; color: string; onClick: () => void }) {
  return (
    <motion.button onClick={onClick} whileTap={{ scale: 0.85 }}
      className="w-6 h-6 rounded-md transition-colors"
      style={{
        background: tapped ? `${color}55` : "rgba(255,255,255,0.06)",
        border: `2px solid ${tapped ? color : "rgba(255,255,255,0.15)"}`,
      }} />
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
const PlaceValue100Explorer = memo(function PlaceValue100Explorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => shuffle(ROUNDS));
  const [idx, setIdx] = useState(0);
  const [tappedTens, setTappedTens] = useState<Set<number>>(new Set());
  const [tappedOnes, setTappedOnes] = useState<Set<number>>(new Set());
  // Steps: 0=tap tens, 1=tap ones, 2=reveal
  const [step, setStep] = useState(0);

  const round = rounds[idx];
  const tens = round.type === "compare" ? 0 : Math.floor(round.num / 10);
  const ones = round.type === "compare" ? 0 : round.num % 10;

  const handleNext = useCallback(() => {
    if (idx + 1 >= rounds.length) {
      onDone(rounds.length, rounds.length);
      return;
    }
    setIdx(i => i + 1);
    setStep(0);
    setTappedTens(new Set());
    setTappedOnes(new Set());
  }, [idx, rounds.length, onDone]);

  const handleTapTen = useCallback((i: number) => {
    if (step !== 0) return;
    setTappedTens(prev => {
      const next = new Set([...prev, i]);
      return next;
    });
  }, [step]);

  const handleTapOne = useCallback((i: number) => {
    if (step !== 1) return;
    setTappedOnes(prev => new Set([...prev, i]));
  }, [step]);

  const allTensTapped = tappedTens.size >= tens;
  const allOnesTapped = tappedOnes.size >= ones;

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {/* Progress */}
      <div className="flex gap-1.5 w-full">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {idx === 0 && step === 0 && (
        <p className="text-white/50 text-xs font-medium text-center px-4">{lbl.intro}</p>
      )}

      <AnimatePresence mode="wait">
        <motion.div key={`${idx}-${step}`}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* DECOMPOSE round */}
          {round.type === "decompose" && (() => {
            const num = round.num;
            const t = Math.floor(num / 10);
            const o = num % 10;
            return (
              <>
                <p className="text-2xl font-black" style={{ color }}>{num}</p>

                {/* Step 0: tap tens */}
                {step === 0 && (
                  <>
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-white/60 text-xs font-bold text-center">{lbl.tapTens}</p>
                      <SpeakButton text={lbl.tapTens} lang={lang} size={14} />
                    </div>
                    <div className="flex gap-2 justify-center flex-wrap">
                      {Array.from({ length: t }).map((_, i) => (
                        <TenBlock key={i} tapped={tappedTens.has(i)} color={color}
                          onClick={() => handleTapTen(i)} />
                      ))}
                    </div>
                    <p className="text-lg font-black" style={{ color: allTensTapped ? "#00FF88" : "rgba(255,255,255,0.3)" }}>
                      {tappedTens.size} {lbl.tensIs}
                    </p>
                    {allTensTapped && (
                      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        onClick={() => setStep(1)}
                        className="w-full py-3 rounded-2xl font-black text-white text-sm"
                        style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                        whileTap={{ scale: 0.97 }}>
                        {lbl.tapOnes}
                      </motion.button>
                    )}
                  </>
                )}

                {/* Step 1: tap ones */}
                {step === 1 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">{lbl.tapOnes}</p>
                    <div className="flex gap-3 items-end">
                      <div className="flex gap-1">
                        {Array.from({ length: t }).map((_, i) => (
                          <TenBlock key={i} tapped={true} color={color} onClick={() => {}} />
                        ))}
                      </div>
                      <div className="flex gap-1.5 flex-wrap" style={{ maxWidth: 100 }}>
                        {Array.from({ length: o }).map((_, i) => (
                          <OneBlock key={i} tapped={tappedOnes.has(i)} color={color}
                            onClick={() => handleTapOne(i)} />
                        ))}
                      </div>
                    </div>
                    <p className="text-lg font-black" style={{ color: allOnesTapped ? "#00FF88" : "rgba(255,255,255,0.3)" }}>
                      {t} {lbl.tensIs} + {tappedOnes.size} {lbl.onesIs}
                    </p>
                    {allOnesTapped && (
                      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        onClick={() => setStep(2)}
                        className="w-full py-3 rounded-2xl font-black text-white text-sm"
                        style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                        whileTap={{ scale: 0.97 }}>
                        {lbl.together}
                      </motion.button>
                    )}
                  </>
                )}

                {/* Step 2: reveal */}
                {step === 2 && (
                  <>
                    <motion.div
                      className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                      animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                      <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.together}</p>
                      <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                        {t} × 10 + {o} = {num}
                      </p>
                      <p className="text-center text-sm font-bold text-white/50 mt-1">
                        {t} {lbl.tensIs} + {o} {lbl.onesIs} = {num}
                      </p>
                    </motion.div>
                    <motion.button onClick={handleNext}
                      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                      whileTap={{ scale: 0.97 }}>
                      {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={16} />
                    </motion.button>
                  </>
                )}
              </>
            );
          })()}

          {/* BUILD round */}
          {round.type === "build" && (() => {
            const num = round.num;
            const t = Math.floor(num / 10);
            const o = num % 10;
            return (
              <>
                {/* Step 0: show number, ask to build */}
                {step === 0 && (
                  <>
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-white/60 text-xs font-bold text-center">{lbl.buildQ}</p>
                      <SpeakButton text={lbl.buildQ} lang={lang} size={14} />
                    </div>
                    <p className="text-4xl font-black" style={{ color }}>{num}</p>
                    <motion.button onClick={() => setStep(1)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapBuild}
                    </motion.button>
                  </>
                )}

                {/* Step 1: show blocks appearing */}
                {step === 1 && (
                  <>
                    <p className="text-2xl font-black" style={{ color }}>{num}</p>
                    <div className="flex gap-4 items-end justify-center">
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex gap-1">
                          {Array.from({ length: t }).map((_, i) => (
                            <motion.div key={i}
                              initial={{ scale: 0 }} animate={{ scale: 1 }}
                              transition={{ delay: i * 0.15 }}>
                              <TenBlock tapped={true} color={color} onClick={() => {}} />
                            </motion.div>
                          ))}
                        </div>
                        <span className="text-sm font-black" style={{ color }}>{t} {lbl.tensIs}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex gap-1.5 flex-wrap" style={{ maxWidth: 80 }}>
                          {Array.from({ length: o }).map((_, i) => (
                            <motion.div key={i}
                              initial={{ scale: 0 }} animate={{ scale: 1 }}
                              transition={{ delay: t * 0.15 + i * 0.1 }}>
                              <OneBlock tapped={true} color={color} onClick={() => {}} />
                            </motion.div>
                          ))}
                        </div>
                        <span className="text-sm font-black" style={{ color }}>{o} {lbl.onesIs}</span>
                      </div>
                    </div>
                    <motion.button
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ delay: t * 0.15 + o * 0.1 + 0.3 }}
                      onClick={() => setStep(2)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.together}
                    </motion.button>
                  </>
                )}

                {/* Step 2: confirm */}
                {step === 2 && (
                  <>
                    <motion.div
                      className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                      animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                      <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                        {t} {lbl.tensIs} + {o} {lbl.onesIs} = {num}
                      </p>
                    </motion.div>
                    <motion.button onClick={handleNext}
                      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                      whileTap={{ scale: 0.97 }}>
                      {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={16} />
                    </motion.button>
                  </>
                )}
              </>
            );
          })()}

          {/* COMPARE round */}
          {round.type === "compare" && (() => {
            const { a, b } = round;
            const tA = Math.floor(a / 10), oA = a % 10;
            const tB = Math.floor(b / 10), oB = b % 10;
            const bigger = a > b ? a : b;
            const reason = tA !== tB ? lbl.moreTens : lbl.sameButMoreOnes;
            return (
              <>
                {/* Step 0: show both numbers */}
                {step === 0 && (
                  <>
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-white/60 text-xs font-bold text-center">{lbl.compare}</p>
                      <SpeakButton text={lbl.compare} lang={lang} size={14} />
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl font-black text-white/70">{a}</span>
                        <div className="flex gap-1">
                          {Array.from({ length: tA }).map((_, i) => (
                            <TenBlock key={i} tapped={true} color={`${color}88`} onClick={() => {}} />
                          ))}
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: oA }).map((_, i) => (
                            <OneBlock key={i} tapped={true} color={`${color}88`} onClick={() => {}} />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-white/40">{tA}T + {oA}E</span>
                      </div>
                      <span className="text-3xl font-black text-white/20">?</span>
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl font-black text-white/70">{b}</span>
                        <div className="flex gap-1">
                          {Array.from({ length: tB }).map((_, i) => (
                            <TenBlock key={i} tapped={true} color={color} onClick={() => {}} />
                          ))}
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: oB }).map((_, i) => (
                            <OneBlock key={i} tapped={true} color={color} onClick={() => {}} />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-white/40">{tB}T + {oB}E</span>
                      </div>
                    </div>
                    <motion.button onClick={() => setStep(2)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapCompare}
                    </motion.button>
                  </>
                )}

                {/* Step 2: reveal answer */}
                {step === 2 && (
                  <>
                    <motion.div
                      className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                      animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                      <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                        {a} {a < b ? "<" : ">"} {b}
                      </p>
                      <p className="text-center text-sm font-bold text-white/50 mt-1">
                        {bigger} &gt; {a > b ? b : a} — {lbl.because} {bigger} {reason}
                      </p>
                    </motion.div>
                    <motion.button onClick={handleNext}
                      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                      whileTap={{ scale: 0.97 }}>
                      {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={16} />
                    </motion.button>
                  </>
                )}
              </>
            );
          })()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default PlaceValue100Explorer;
