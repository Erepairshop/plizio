"use client";
// PatternExplorer — Pattern & sequence discovery for Grade 1 (i9)
// Teaches: recognize repeating patterns and number sequences.
// Step by step, no wrong answers.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Pattern Explorer",
    intro: "Patterns repeat! Let's find the rule and continue them!",
    lookAt: "Look at this pattern:",
    findRule: "What is the rule?",
    tapReveal: "Tap to see!",
    rule: "Rule:",
    repeat: "The pattern repeats:",
    whatNext: "What comes next?",
    answer: "Answer:",
    next: "Next",
    done: "Amazing!",
    numSeq: "Look at these numbers:",
    eachTime: "Each time we add",
    nextNum: "Next number:",
  },
  hu: {
    title: "Mintázat felfedezés",
    intro: "A minták ismétlődnek! Találjuk meg a szabályt!",
    lookAt: "Nézd ezt a mintázatot:",
    findRule: "Mi a szabály?",
    tapReveal: "Koppints és megtudod!",
    rule: "Szabály:",
    repeat: "A mintázat ismétlődik:",
    whatNext: "Mi jön ezután?",
    answer: "Válasz:",
    next: "Következő",
    done: "Fantasztikus!",
    numSeq: "Nézd ezeket a számokat:",
    eachTime: "Mindig hozzáadunk",
    nextNum: "Következő szám:",
  },
  de: {
    title: "Muster entdecken",
    intro: "Muster wiederholen sich! Finden wir die Regel!",
    lookAt: "Schau dir dieses Muster an:",
    findRule: "Was ist die Regel?",
    tapReveal: "Tippe, um es zu sehen!",
    rule: "Regel:",
    repeat: "Das Muster wiederholt sich:",
    whatNext: "Was kommt als nächstes?",
    answer: "Antwort:",
    next: "Weiter",
    done: "Super!",
    numSeq: "Schau dir diese Zahlen an:",
    eachTime: "Jedes Mal addieren wir",
    nextNum: "Nächste Zahl:",
  },
  ro: {
    title: "Explorare tipare",
    intro: "Tiparele se repetă! Să găsim regula!",
    lookAt: "Privește acest tipar:",
    findRule: "Care este regula?",
    tapReveal: "Atinge pentru a vedea!",
    rule: "Regulă:",
    repeat: "Tiparul se repetă:",
    whatNext: "Ce urmează?",
    answer: "Răspuns:",
    next: "Înainte",
    done: "Excelent!",
    numSeq: "Privește aceste numere:",
    eachTime: "De fiecare dată adăugăm",
    nextNum: "Următorul număr:",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
type RoundType = "emoji" | "number";
interface EmojiPatternRound {
  type: "emoji";
  pattern: string[];   // e.g. ["🔴","🔵","🔴","🔵"]
  unit: string[];      // repeating unit: ["🔴","🔵"]
  next: string[];      // next elements: ["🔴","🔵"]
}
interface NumberPatternRound {
  type: "number";
  shown: number[];     // e.g. [2, 4, 6, 8]
  step: number;        // +2
  next: number;        // 10
}
type Round = EmojiPatternRound | NumberPatternRound;

const ROUNDS: Round[] = [
  {
    type: "emoji",
    pattern: ["🔴", "🔵", "🔴", "🔵", "🔴", "🔵"],
    unit: ["🔴", "🔵"],
    next: ["🔴", "🔵"],
  },
  {
    type: "number",
    shown: [2, 4, 6, 8],
    step: 2,
    next: 10,
  },
  {
    type: "emoji",
    pattern: ["⭐", "⭐", "🌙", "⭐", "⭐", "🌙"],
    unit: ["⭐", "⭐", "🌙"],
    next: ["⭐", "⭐", "🌙"],
  },
  {
    type: "number",
    shown: [5, 10, 15, 20],
    step: 5,
    next: 25,
  },
  {
    type: "emoji",
    pattern: ["🟢", "🟡", "🔴", "🟢", "🟡", "🔴"],
    unit: ["🟢", "🟡", "🔴"],
    next: ["🟢", "🟡", "🔴"],
  },
  {
    type: "number",
    shown: [1, 3, 5, 7],
    step: 2,
    next: 9,
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Main Component ──────────────────────────────────────────────────────────
const PatternExplorer = memo(function PatternExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => shuffle(ROUNDS));
  const [idx, setIdx] = useState(0);
  // Steps: 0=show pattern, 1=reveal rule, 2=show answer
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
          {/* EMOJI pattern */}
          {round.type === "emoji" && (() => {
            const r = round as EmojiPatternRound;
            return (
              <>
                {/* Step 0: show pattern */}
                {step === 0 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">{lbl.lookAt}</p>
                    <div className="flex gap-2 flex-wrap justify-center">
                      {r.pattern.map((e, i) => (
                        <motion.span key={i} className="text-3xl"
                          initial={{ scale: 0 }} animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}>
                          {e}
                        </motion.span>
                      ))}
                      <span className="text-3xl text-white/30">❓</span>
                      <span className="text-3xl text-white/30">❓</span>
                    </div>
                    <motion.button onClick={() => setStep(1)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.findRule}
                    </motion.button>
                  </>
                )}

                {/* Step 1: reveal repeating unit */}
                {step === 1 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">{lbl.repeat}</p>
                    <div className="w-full rounded-2xl p-4"
                      style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                      <div className="flex gap-2 justify-center mb-2">
                        {r.unit.map((e, i) => (
                          <span key={i} className="text-3xl px-2 py-1 rounded-lg"
                            style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <p className="text-center text-xs font-bold text-white/50">{lbl.whatNext}</p>
                    </div>
                    <motion.button onClick={() => setStep(2)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapReveal}
                    </motion.button>
                  </>
                )}

                {/* Step 2: show complete pattern */}
                {step === 2 && (
                  <>
                    <motion.div
                      className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                      animate={{ scale: [0.95, 1.02, 1] }}
                      transition={{ duration: 0.4 }}>
                      <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.answer}</p>
                      <div className="flex gap-2 flex-wrap justify-center">
                        {r.pattern.map((e, i) => (
                          <span key={`p-${i}`} className="text-2xl">{e}</span>
                        ))}
                        {r.next.map((e, i) => (
                          <motion.span key={`n-${i}`} className="text-2xl"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: i * 0.15 }}
                            style={{ filter: "drop-shadow(0 0 4px rgba(0,255,136,0.5))" }}>
                            {e}
                          </motion.span>
                        ))}
                      </div>
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

          {/* NUMBER sequence */}
          {round.type === "number" && (() => {
            const r = round as NumberPatternRound;
            return (
              <>
                {/* Step 0: show sequence */}
                {step === 0 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">{lbl.numSeq}</p>
                    <div className="flex gap-3 justify-center">
                      {r.shown.map((n, i) => (
                        <motion.div key={i}
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black"
                          style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
                          initial={{ scale: 0 }} animate={{ scale: 1 }}
                          transition={{ delay: i * 0.12 }}>
                          {n}
                        </motion.div>
                      ))}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black"
                        style={{ background: "rgba(255,255,255,0.04)", border: "2px dashed rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.3)" }}>
                        ?
                      </div>
                    </div>
                    <motion.button onClick={() => setStep(1)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.findRule}
                    </motion.button>
                  </>
                )}

                {/* Step 1: show the step rule */}
                {step === 1 && (
                  <>
                    <div className="w-full rounded-2xl p-4"
                      style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                      <div className="flex gap-2 justify-center items-center">
                        {r.shown.map((n, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <span className="text-lg font-black" style={{ color }}>{n}</span>
                            {i < r.shown.length - 1 && (
                              <span className="text-xs font-black" style={{ color: "#00FF88" }}>+{r.step}</span>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text-center text-xs font-bold text-white/50 mt-2">
                        {lbl.eachTime} +{r.step}
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

                {/* Step 2: reveal next number */}
                {step === 2 && (
                  <>
                    <motion.div
                      className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                      animate={{ scale: [0.95, 1.02, 1] }}
                      transition={{ duration: 0.4 }}>
                      <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.nextNum}</p>
                      <div className="flex gap-3 justify-center items-center">
                        {r.shown.map((n, i) => (
                          <span key={i} className="text-lg font-black" style={{ color: "rgba(255,255,255,0.5)" }}>{n}</span>
                        ))}
                        <motion.span className="text-3xl font-black" style={{ color: "#00FF88" }}
                          initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          {r.next}
                        </motion.span>
                      </div>
                      <p className="text-center text-sm font-bold text-white/50 mt-2">
                        {r.shown[r.shown.length - 1]} + {r.step} = {r.next}
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

export default PatternExplorer;
