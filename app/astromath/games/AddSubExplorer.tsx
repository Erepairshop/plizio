"use client";
// AddSubExplorer — Visual addition/subtraction discovery for Grade 1 (i2 + i3)
// Shows objects arriving (add) or leaving (sub) step by step.
// No wrong answers — pure guided discovery.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    addTitle: "Addition Explorer",
    subTitle: "Subtraction Explorer",
    step1add: "Here are some objects:",
    step2add: "more are coming!",
    step1sub: "Here are some objects:",
    step2sub: "are leaving!",
    tapToSee: "Tap to see what happens",
    howMany: "How many now?",
    total: "Total:",
    rule: "Rule:",
    addRule: "When we ADD, we get MORE!",
    subRule: "When we SUBTRACT, we get LESS!",
    next: "Next",
    done: "Well done!",
  },
  hu: {
    addTitle: "Összeadás felfedezés",
    subTitle: "Kivonás felfedezés",
    step1add: "Íme néhány tárgy:",
    step2add: "újabb érkezik!",
    step1sub: "Íme néhány tárgy:",
    step2sub: "távozik!",
    tapToSee: "Koppints és nézd mi történik",
    howMany: "Hány van most?",
    total: "Összesen:",
    rule: "Szabály:",
    addRule: "Ha HOZZÁADUNK, TÖBB lesz!",
    subRule: "Ha ELVESZÜNK, KEVESEBB lesz!",
    next: "Következő",
    done: "Ügyes!",
  },
  de: {
    addTitle: "Addition entdecken",
    subTitle: "Subtraktion entdecken",
    step1add: "Hier sind einige Objekte:",
    step2add: "kommen dazu!",
    step1sub: "Hier sind einige Objekte:",
    step2sub: "gehen weg!",
    tapToSee: "Tippe, um zu sehen, was passiert",
    howMany: "Wie viele jetzt?",
    total: "Insgesamt:",
    rule: "Regel:",
    addRule: "Wenn wir ADDIEREN, gibt es MEHR!",
    subRule: "Wenn wir SUBTRAHIEREN, gibt es WENIGER!",
    next: "Weiter",
    done: "Toll gemacht!",
  },
  ro: {
    addTitle: "Explorare adunare",
    subTitle: "Explorare scădere",
    step1add: "Iată câteva obiecte:",
    step2add: "mai vin!",
    step1sub: "Iată câteva obiecte:",
    step2sub: "pleacă!",
    tapToSee: "Atinge pentru a vedea ce se întâmplă",
    howMany: "Câte sunt acum?",
    total: "Total:",
    rule: "Regulă:",
    addRule: "Când ADUNĂM, avem MAI MULTE!",
    subRule: "Când SCĂDEM, avem MAI PUȚINE!",
    next: "Înainte",
    done: "Bravo!",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
interface Round { a: number; b: number; emoji: string }

const ADD_ROUNDS: Round[] = [
  { a: 3, b: 2, emoji: "🍎" },
  { a: 4, b: 3, emoji: "⭐" },
  { a: 2, b: 5, emoji: "🌸" },
  { a: 5, b: 4, emoji: "🐟" },
  { a: 1, b: 6, emoji: "🦋" },
  { a: 4, b: 4, emoji: "🍬" },
];

const SUB_ROUNDS: Round[] = [
  { a: 7, b: 3, emoji: "🍎" },
  { a: 6, b: 2, emoji: "⭐" },
  { a: 8, b: 5, emoji: "🌸" },
  { a: 5, b: 3, emoji: "🐟" },
  { a: 9, b: 4, emoji: "🦋" },
  { a: 6, b: 4, emoji: "🍬" },
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
const AddSubExplorer = memo(function AddSubExplorer({
  color, onDone, lang = "en", mode = "add",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
  mode?: "add" | "sub";
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const isAdd = mode === "add";
  const [rounds] = useState(() => shuffle(isAdd ? ADD_ROUNDS : SUB_ROUNDS).slice(0, 6));
  const [idx, setIdx] = useState(0);
  // Steps: 0=show first group, 1=show second group arriving/leaving, 2=reveal result
  const [step, setStep] = useState(0);

  const round = rounds[idx];
  const result = isAdd ? round.a + round.b : round.a - round.b;

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

      {/* Title */}
      {idx === 0 && step === 0 && (
        <p className="text-white/50 text-xs font-medium text-center px-4">
          {isAdd ? lbl.addRule : lbl.subRule}
        </p>
      )}

      <AnimatePresence mode="wait">
        <motion.div key={`${idx}-${step}`}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* Step 0: Show initial group */}
          {step === 0 && (
            <>
              <p className="text-white/60 text-xs font-bold text-center">
                {isAdd ? lbl.step1add : lbl.step1sub}
              </p>
              <div className="w-full rounded-2xl p-4 flex flex-wrap gap-2 justify-center"
                style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                {Array.from({ length: round.a }, (_, i) => (
                  <motion.span key={i} className="text-3xl"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ delay: i * 0.08 }}>
                    {round.emoji}
                  </motion.span>
                ))}
              </div>
              <div className="text-center">
                <span className="text-2xl font-black" style={{ color }}>{round.a}</span>
                <span className="text-white/40 text-sm ml-2">{round.emoji}</span>
              </div>
              <motion.button onClick={() => setStep(1)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.tapToSee}
              </motion.button>
            </>
          )}

          {/* Step 1: Show addition/subtraction happening */}
          {step === 1 && (
            <>
              <div className="w-full rounded-2xl p-4 flex flex-col items-center gap-3"
                style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                {/* Original objects */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {Array.from({ length: round.a }, (_, i) => (
                    <span key={`orig-${i}`} className="text-3xl">{round.emoji}</span>
                  ))}
                </div>

                {/* Divider + action */}
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1" style={{ background: `${color}44` }} />
                  <span className="text-lg font-black" style={{ color: isAdd ? "#00FF88" : "#FF6B6B" }}>
                    {isAdd ? `+ ${round.b}` : `− ${round.b}`}
                  </span>
                  <div className="h-px flex-1" style={{ background: `${color}44` }} />
                </div>

                {/* New objects arriving or leaving */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {Array.from({ length: round.b }, (_, i) => (
                    <motion.span key={`new-${i}`} className="text-3xl"
                      initial={isAdd ? { opacity: 0, y: -20 } : { opacity: 1 }}
                      animate={isAdd ? { opacity: 1, y: 0 } : { opacity: 0.25, scale: 0.7 }}
                      transition={{ delay: i * 0.12 }}
                      style={!isAdd ? { textDecoration: "line-through" } : {}}>
                      {round.emoji}
                    </motion.span>
                  ))}
                </div>
              </div>

              <p className="text-white/60 text-xs font-bold text-center">
                {round.b} {round.emoji} {isAdd ? lbl.step2add : lbl.step2sub}
              </p>

              {/* Equation preview */}
              <div className="text-center">
                <span className="text-xl font-black" style={{ color }}>
                  {round.a} {isAdd ? "+" : "−"} {round.b} = ?
                </span>
              </div>

              <motion.button onClick={() => setStep(2)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.howMany}
              </motion.button>
            </>
          )}

          {/* Step 2: Reveal answer */}
          {step === 2 && (
            <>
              <motion.div
                className="w-full rounded-2xl px-5 py-4"
                style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                animate={{ scale: [0.95, 1.02, 1] }}
                transition={{ duration: 0.4 }}
              >
                {/* Show final objects */}
                <div className="flex flex-wrap gap-2 justify-center mb-3">
                  {Array.from({ length: result }, (_, i) => (
                    <motion.span key={i} className="text-2xl"
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ delay: i * 0.05 }}>
                      {round.emoji}
                    </motion.span>
                  ))}
                </div>
                <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                  {round.a} {isAdd ? "+" : "−"} {round.b} = {result}
                </p>
              </motion.div>

              <p className="text-white/50 text-xs font-bold text-center px-4">
                {lbl.rule} {isAdd ? lbl.addRule : lbl.subRule}
              </p>

              <motion.button onClick={handleNext}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                whileTap={{ scale: 0.97 }}>
                {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={16} />
              </motion.button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default AddSubExplorer;
