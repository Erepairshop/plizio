"use client";
// DoubleHalfExplorer — Visual doubling & halving discovery for Grade 1 (i4)
// Shows mirror doubling and splitting in half step by step.
// No wrong answers — pure guided discovery.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Double & Half Explorer",
    introDouble: "Doubling means having the same amount TWICE!",
    introHalf: "Halving means splitting into TWO equal parts!",
    hereAre: "Here are",
    objects: "objects:",
    doubleIt: "Let's DOUBLE them!",
    halfIt: "Let's cut them in HALF!",
    tapMirror: "Tap to see the mirror!",
    tapSplit: "Tap to split!",
    result: "Result:",
    doubleRule: "double of",
    halfRule: "half of",
    is: "is",
    next: "Next",
    done: "Brilliant!",
  },
  hu: {
    title: "Dupla & Fele felfedezés",
    introDouble: "A duplázás azt jelenti, hogy KÉTSZER annyi van!",
    introHalf: "A felezés azt jelenti, hogy KÉT egyenlő részre osztjuk!",
    hereAre: "Íme",
    objects: "tárgy:",
    doubleIt: "DUPLÁZZUK meg!",
    halfIt: "FELEZZÜK meg!",
    tapMirror: "Koppints a tükörhöz!",
    tapSplit: "Koppints a felezéshez!",
    result: "Eredmény:",
    doubleRule: "duplája =",
    halfRule: "fele =",
    is: "az",
    next: "Következő",
    done: "Fantasztikus!",
  },
  de: {
    title: "Verdoppeln & Halbieren",
    introDouble: "Verdoppeln heißt, die gleiche Menge ZWEIMAL zu haben!",
    introHalf: "Halbieren heißt, in ZWEI gleiche Teile zu teilen!",
    hereAre: "Hier sind",
    objects: "Objekte:",
    doubleIt: "VERDOPPELN wir sie!",
    halfIt: "HALBIEREN wir sie!",
    tapMirror: "Tippe für den Spiegel!",
    tapSplit: "Tippe zum Teilen!",
    result: "Ergebnis:",
    doubleRule: "das Doppelte von",
    halfRule: "die Hälfte von",
    is: "ist",
    next: "Weiter",
    done: "Fantastisch!",
  },
  ro: {
    title: "Dublare & Înjumătățire",
    introDouble: "A dubla înseamnă a avea aceeași cantitate DE DOUĂ ORI!",
    introHalf: "A înjumătăți înseamnă a împărți în DOUĂ părți egale!",
    hereAre: "Iată",
    objects: "obiecte:",
    doubleIt: "Să le DUBLĂM!",
    halfIt: "Să le ÎNJUMĂTĂȚIM!",
    tapMirror: "Atinge pentru oglindă!",
    tapSplit: "Atinge pentru a împărți!",
    result: "Rezultat:",
    doubleRule: "dublul lui",
    halfRule: "jumătatea lui",
    is: "este",
    next: "Înainte",
    done: "Fantastic!",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
interface Round { n: number; emoji: string; type: "double" | "half" }

const ROUND_POOL: Round[] = [
  { n: 3, emoji: "⭐", type: "double" },
  { n: 4, emoji: "🍎", type: "double" },
  { n: 5, emoji: "🌸", type: "double" },
  { n: 6, emoji: "🐟", type: "half" },
  { n: 8, emoji: "🦋", type: "half" },
  { n: 4, emoji: "🍬", type: "half" },
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
const DoubleHalfExplorer = memo(function DoubleHalfExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => shuffle(ROUND_POOL));
  const [idx, setIdx] = useState(0);
  // Steps: 0=show objects, 1=show action (mirror/split), 2=reveal result
  const [step, setStep] = useState(0);

  const round = rounds[idx];
  const isDouble = round.type === "double";
  const result = isDouble ? round.n * 2 : round.n / 2;

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

      {/* Intro — first round only */}
      {idx === 0 && step === 0 && (
        <p className="text-white/50 text-xs font-medium text-center px-4">
          {isDouble ? lbl.introDouble : lbl.introHalf}
        </p>
      )}

      <AnimatePresence mode="wait">
        <motion.div key={`${idx}-${step}`}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* Step 0: Show objects */}
          {step === 0 && (
            <>
              <div className="flex items-center justify-center gap-2">
                <p className="text-white/60 text-xs font-bold text-center">
                  {lbl.hereAre} {round.n} {lbl.objects}
                </p>
                <SpeakButton text={`${lbl.hereAre} ${round.n} ${lbl.objects}`} lang={lang} size={14} />
              </div>
              <div className="w-full rounded-2xl p-4 flex flex-wrap gap-2.5 justify-center"
                style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                {Array.from({ length: round.n }, (_, i) => (
                  <motion.span key={i} className="text-3xl"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ delay: i * 0.08 }}>
                    {round.emoji}
                  </motion.span>
                ))}
              </div>
              <div className="text-center">
                <span className="text-2xl font-black" style={{ color }}>{round.n}</span>
              </div>
              <motion.button onClick={() => setStep(1)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {isDouble ? lbl.doubleIt : lbl.halfIt}
              </motion.button>
            </>
          )}

          {/* Step 1: Show mirror/split */}
          {step === 1 && (
            <>
              <div className="w-full rounded-2xl p-4"
                style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                {isDouble ? (
                  /* Double: two groups side by side with mirror line */
                  <div className="flex items-center gap-2">
                    <div className="flex-1 flex flex-wrap gap-2 justify-center">
                      {Array.from({ length: round.n }, (_, i) => (
                        <span key={`l-${i}`} className="text-2xl">{round.emoji}</span>
                      ))}
                    </div>
                    <div className="w-0.5 h-16 rounded-full" style={{ background: color }} />
                    <div className="flex-1 flex flex-wrap gap-2 justify-center">
                      {Array.from({ length: round.n }, (_, i) => (
                        <motion.span key={`r-${i}`} className="text-2xl"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}>
                          {round.emoji}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Half: one group splitting into two */
                  <div className="flex items-center gap-2">
                    <div className="flex-1 flex flex-wrap gap-2 justify-center p-2 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.05)" }}>
                      {Array.from({ length: round.n / 2 }, (_, i) => (
                        <span key={`l-${i}`} className="text-2xl">{round.emoji}</span>
                      ))}
                    </div>
                    <motion.div className="text-xl font-black" style={{ color }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      ✂️
                    </motion.div>
                    <div className="flex-1 flex flex-wrap gap-2 justify-center p-2 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.05)" }}>
                      {Array.from({ length: round.n / 2 }, (_, i) => (
                        <motion.span key={`r-${i}`} className="text-2xl"
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}>
                          {round.emoji}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center gap-2">
                <p className="text-white/60 text-xs font-bold text-center">
                  {isDouble
                    ? `${round.n} + ${round.n} = ?`
                    : `${round.n} ÷ 2 = ?`}
                </p>
                <SpeakButton text={isDouble ? `${round.n} + ${round.n} = ?` : `${round.n} ÷ 2 = ?`} lang={lang} size={14} />
              </div>

              <motion.button onClick={() => setStep(2)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {isDouble ? lbl.tapMirror : lbl.tapSplit}
              </motion.button>
            </>
          )}

          {/* Step 2: Reveal result */}
          {step === 2 && (
            <>
              <motion.div
                className="w-full rounded-2xl px-5 py-4"
                style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                animate={{ scale: [0.95, 1.02, 1] }}
                transition={{ duration: 0.4 }}>
                <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.result}</p>
                <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                  {isDouble
                    ? `${round.n} × 2 = ${result}`
                    : `${round.n} ÷ 2 = ${result}`}
                </p>
                <p className="text-center text-sm font-bold text-white/50 mt-2">
                  {isDouble ? lbl.doubleRule : lbl.halfRule} {round.n} {lbl.is} {result}
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default DoubleHalfExplorer;
