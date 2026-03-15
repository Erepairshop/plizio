"use client";
// MentalMathExplorer — Mental arithmetic with round numbers for Grade 2 (i2)
// Teaches: adding/subtracting tens, +10 jumps, number sequences.
// Step by step, no wrong answers.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Mental Math Explorer",
    intro: "We can add and subtract TENS quickly in our heads!",
    tapBars: "Tap each ten-bar to count!",
    weHave: "We have",
    weAdd: "we add",
    weRemove: "we remove",
    result: "Result:",
    tapAdd: "Tap to add!",
    tapRemove: "Tap to remove!",
    tapReveal: "Tap to see!",
    seqIntro: "Find the pattern!",
    seqRule: "The rule:",
    seqEvery: "Every time:",
    next: "Next",
    done: "Amazing!",
  },
  hu: {
    title: "Fejszámolás felfedezés",
    intro: "A TÍZESEKET gyorsan összeadhatjuk és kivonhatjuk fejben!",
    tapBars: "Koppints minden tízes sávra a számoláshoz!",
    weHave: "Van",
    weAdd: "hozzáadunk",
    weRemove: "elveszünk",
    result: "Eredmény:",
    tapAdd: "Koppints a hozzáadáshoz!",
    tapRemove: "Koppints az elvételhez!",
    tapReveal: "Koppints a felfedezéshez!",
    seqIntro: "Találd meg a szabályt!",
    seqRule: "A szabály:",
    seqEvery: "Mindig:",
    next: "Következő",
    done: "Fantasztikus!",
  },
  de: {
    title: "Kopfrechnen entdecken",
    intro: "Wir können ZEHNER schnell im Kopf addieren und subtrahieren!",
    tapBars: "Tippe auf jeden Zehnerstab zum Zählen!",
    weHave: "Wir haben",
    weAdd: "wir addieren",
    weRemove: "wir subtrahieren",
    result: "Ergebnis:",
    tapAdd: "Tippe zum Addieren!",
    tapRemove: "Tippe zum Subtrahieren!",
    tapReveal: "Tippe zum Entdecken!",
    seqIntro: "Finde das Muster!",
    seqRule: "Die Regel:",
    seqEvery: "Jedes Mal:",
    next: "Weiter",
    done: "Super!",
  },
  ro: {
    title: "Calcul mental",
    intro: "Putem aduna și scădea ZECILE rapid în minte!",
    tapBars: "Atinge fiecare bară de zeci pentru a număra!",
    weHave: "Avem",
    weAdd: "adunăm",
    weRemove: "scădem",
    result: "Rezultat:",
    tapAdd: "Atinge pentru a aduna!",
    tapRemove: "Atinge pentru a scădea!",
    tapReveal: "Atinge pentru a descoperi!",
    seqIntro: "Găsește regula!",
    seqRule: "Regula:",
    seqEvery: "De fiecare dată:",
    next: "Înainte",
    done: "Excelent!",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
type RoundType = "add-tens" | "sub-tens" | "sequence";
interface AddTensRound { type: "add-tens"; a: number; b: number }
interface SubTensRound { type: "sub-tens"; a: number; b: number }
interface SequenceRound { type: "sequence"; shown: number[]; step: number; next: number }
type Round = AddTensRound | SubTensRound | SequenceRound;

const ROUNDS: Round[] = [
  { type: "add-tens", a: 30, b: 20 },
  { type: "sub-tens", a: 70, b: 30 },
  { type: "add-tens", a: 40, b: 50 },
  { type: "sub-tens", a: 90, b: 60 },
  { type: "sequence", shown: [10, 20, 30, 40], step: 10, next: 50 },
  { type: "sequence", shown: [5, 10, 15, 20], step: 5, next: 25 },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Ten bar visual ──────────────────────────────────────────────────────────
function TenBar({ color, dim }: { color: string; dim?: boolean }) {
  return (
    <div className="w-5 h-14 rounded-md flex flex-col gap-0.5 p-0.5"
      style={{
        background: dim ? "rgba(255,255,255,0.04)" : `${color}33`,
        border: `1.5px solid ${dim ? "rgba(255,255,255,0.1)" : `${color}66`}`,
        opacity: dim ? 0.4 : 1,
      }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex-1 rounded-sm"
          style={{ background: dim ? "rgba(255,255,255,0.08)" : color }} />
      ))}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
const MentalMathExplorer = memo(function MentalMathExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => shuffle(ROUNDS));
  const [idx, setIdx] = useState(0);
  // Steps: 0=show, 1=action, 2=reveal
  const [step, setStep] = useState(0);

  const round = rounds[idx];

  const handleNext = useCallback(() => {
    if (idx + 1 >= rounds.length) {
      onDone(rounds.length, rounds.length);
      return;
    }
    setIdx(i => i + 1);
    setStep(0);
  }, [idx, rounds.length, onDone]);

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
          {/* ADD TENS */}
          {round.type === "add-tens" && (() => {
            const { a, b } = round;
            const tA = a / 10, tB = b / 10;
            const result = a + b;
            return (
              <>
                {/* Step 0: show first number */}
                {step === 0 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">
                      {lbl.weHave} {a}, {lbl.weAdd} {b}
                    </p>
                    <div className="flex gap-1 justify-center">
                      {Array.from({ length: tA }).map((_, i) => (
                        <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}>
                          <TenBar color={color} />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-lg font-black" style={{ color }}>{a}</p>
                    <motion.button onClick={() => setStep(1)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapAdd} +{b}
                    </motion.button>
                  </>
                )}

                {/* Step 1: add bars animate in */}
                {step === 1 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">
                      {a} + {b} = ?
                    </p>
                    <div className="flex gap-1 justify-center flex-wrap">
                      {Array.from({ length: tA }).map((_, i) => (
                        <TenBar key={`a-${i}`} color={`${color}88`} />
                      ))}
                      {Array.from({ length: tB }).map((_, i) => (
                        <motion.div key={`b-${i}`} initial={{ scale: 0, y: -20 }} animate={{ scale: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}>
                          <TenBar color="#00FF88" />
                        </motion.div>
                      ))}
                    </div>
                    <motion.button
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ delay: tB * 0.15 + 0.3 }}
                      onClick={() => setStep(2)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapReveal}
                    </motion.button>
                  </>
                )}

                {/* Step 2: reveal result */}
                {step === 2 && (
                  <>
                    <motion.div
                      className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                      animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                      <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.result}</p>
                      <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                        {a} + {b} = {result}
                      </p>
                      <p className="text-center text-sm font-bold text-white/50 mt-1">
                        {tA} + {tB} = {tA + tB} {lbl.tapBars.includes("ten") ? "tens" : lang === "hu" ? "tízes" : lang === "de" ? "Zehner" : lang === "ro" ? "zeci" : "tens"}
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

          {/* SUB TENS */}
          {round.type === "sub-tens" && (() => {
            const { a, b } = round;
            const tA = a / 10, tB = b / 10;
            const result = a - b;
            return (
              <>
                {/* Step 0: show all bars */}
                {step === 0 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">
                      {lbl.weHave} {a}, {lbl.weRemove} {b}
                    </p>
                    <div className="flex gap-1 justify-center">
                      {Array.from({ length: tA }).map((_, i) => (
                        <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}>
                          <TenBar color={color} />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-lg font-black" style={{ color }}>{a}</p>
                    <motion.button onClick={() => setStep(1)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapRemove} –{b}
                    </motion.button>
                  </>
                )}

                {/* Step 1: bars fade out */}
                {step === 1 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">
                      {a} – {b} = ?
                    </p>
                    <div className="flex gap-1 justify-center flex-wrap">
                      {Array.from({ length: tA }).map((_, i) => {
                        const removing = i >= tA - tB;
                        return removing ? (
                          <motion.div key={i} initial={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 0, opacity: 0 }}
                            transition={{ delay: (i - (tA - tB)) * 0.2 }}>
                            <TenBar color="#ef4444" />
                          </motion.div>
                        ) : (
                          <TenBar key={i} color={color} />
                        );
                      })}
                    </div>
                    <motion.button
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ delay: tB * 0.2 + 0.5 }}
                      onClick={() => setStep(2)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapReveal}
                    </motion.button>
                  </>
                )}

                {/* Step 2: reveal */}
                {step === 2 && (
                  <>
                    <motion.div
                      className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                      animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                      <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.result}</p>
                      <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                        {a} – {b} = {result}
                      </p>
                      <p className="text-center text-sm font-bold text-white/50 mt-1">
                        {tA} – {tB} = {tA - tB} {lang === "hu" ? "tízes" : lang === "de" ? "Zehner" : lang === "ro" ? "zeci" : "tens"}
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

          {/* SEQUENCE */}
          {round.type === "sequence" && (() => {
            const { shown, step: seqStep, next: seqNext } = round;
            return (
              <>
                {/* Step 0: show numbers */}
                {step === 0 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">{lbl.seqIntro}</p>
                    <div className="flex gap-2 justify-center">
                      {shown.map((n, i) => (
                        <motion.div key={i}
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black"
                          style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
                          initial={{ scale: 0 }} animate={{ scale: 1 }}
                          transition={{ delay: i * 0.12 }}>
                          {n}
                        </motion.div>
                      ))}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black"
                        style={{ background: "rgba(255,255,255,0.04)", border: "2px dashed rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.3)" }}>
                        ?
                      </div>
                    </div>
                    <motion.button onClick={() => setStep(1)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapReveal}
                    </motion.button>
                  </>
                )}

                {/* Step 1: show pattern rule */}
                {step === 1 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">{lbl.seqRule}</p>
                    <div className="w-full rounded-2xl p-4"
                      style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                      <div className="flex gap-1.5 justify-center items-center">
                        {shown.map((n, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <span className="text-lg font-black" style={{ color }}>{n}</span>
                            {i < shown.length - 1 && (
                              <span className="text-xs font-black" style={{ color: "#00FF88" }}>+{seqStep}</span>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text-center text-xs font-bold text-white/50 mt-2">
                        {lbl.seqEvery} +{seqStep}
                      </p>
                    </div>
                    <motion.button onClick={() => setStep(2)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapReveal}
                    </motion.button>
                  </>
                )}

                {/* Step 2: reveal next */}
                {step === 2 && (
                  <>
                    <motion.div
                      className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                      animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                      <div className="flex gap-2 justify-center items-center">
                        {shown.map((n, i) => (
                          <span key={i} className="text-lg font-black" style={{ color: "rgba(255,255,255,0.5)" }}>{n}</span>
                        ))}
                        <motion.span className="text-3xl font-black" style={{ color: "#00FF88" }}
                          initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          {seqNext}
                        </motion.span>
                      </div>
                      <p className="text-center text-sm font-bold text-white/50 mt-2">
                        {shown[shown.length - 1]} + {seqStep} = {seqNext}
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

export default MentalMathExplorer;
