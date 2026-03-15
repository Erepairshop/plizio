"use client";
// DivisionIntroExplorer — Division discovery for Grade 2 (i8)
// Teaches: sharing equally, connection to multiplication.
// Step by step, no wrong answers.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Division Explorer",
    intro: "Division means SHARING EQUALLY into groups!",
    share: "Share equally!",
    items: "items into",
    groupsWord: "groups",
    tapShare: "Tap to share!",
    eachGets: "Each group gets:",
    because: "Because",
    soDiv: "So",
    connection: "Connection to multiplication:",
    tapConnection: "Tap to see the connection!",
    tapResult: "Tap to see!",
    next: "Next",
    done: "Amazing!",
  },
  hu: {
    title: "Osztás felfedezés",
    intro: "Az osztás EGYENLŐ ELOSZTÁST jelent csoportokba!",
    share: "Osszuk el egyenlően!",
    items: "darab elosztva",
    groupsWord: "csoportba",
    tapShare: "Koppints a szétosztáshoz!",
    eachGets: "Minden csoport kap:",
    because: "Mert",
    soDiv: "Tehát",
    connection: "Kapcsolat a szorzással:",
    tapConnection: "Koppints a kapcsolathoz!",
    tapResult: "Koppints a megtekintéshez!",
    next: "Következő",
    done: "Fantasztikus!",
  },
  de: {
    title: "Division entdecken",
    intro: "Division bedeutet GLEICHMÄSSIG AUFTEILEN in Gruppen!",
    share: "Gleichmäßig aufteilen!",
    items: "Stück in",
    groupsWord: "Gruppen",
    tapShare: "Tippe zum Aufteilen!",
    eachGets: "Jede Gruppe bekommt:",
    because: "Weil",
    soDiv: "Also",
    connection: "Verbindung zur Multiplikation:",
    tapConnection: "Tippe um die Verbindung zu sehen!",
    tapResult: "Tippe zum Sehen!",
    next: "Weiter",
    done: "Super!",
  },
  ro: {
    title: "Explorare împărțire",
    intro: "Împărțirea înseamnă să ÎMPARȚI EGAL în grupuri!",
    share: "Împarte egal!",
    items: "obiecte în",
    groupsWord: "grupuri",
    tapShare: "Atinge pentru a împărți!",
    eachGets: "Fiecare grup primește:",
    because: "Pentru că",
    soDiv: "Deci",
    connection: "Legătura cu înmulțirea:",
    tapConnection: "Atinge pentru a vedea legătura!",
    tapResult: "Atinge pentru a vedea!",
    next: "Înainte",
    done: "Excelent!",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
interface ShareRound { total: number; groups: number; emoji: string }

const ROUNDS: ShareRound[] = [
  { total: 12, groups: 3, emoji: "🍎" },
  { total: 10, groups: 2, emoji: "⭐" },
  { total: 15, groups: 5, emoji: "🍭" },
  { total: 8, groups: 4, emoji: "🔵" },
  { total: 20, groups: 10, emoji: "🌙" },
  { total: 6, groups: 2, emoji: "🍬" },
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
const DivisionIntroExplorer = memo(function DivisionIntroExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => shuffle(ROUNDS));
  const [idx, setIdx] = useState(0);
  // Steps: 0=show all items, 1=shared into groups, 2=connection, 3=result
  const [step, setStep] = useState(0);

  const round = rounds[idx];
  const perGroup = round.total / round.groups;

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
          {/* Step 0: show all items in a heap */}
          {step === 0 && (
            <>
              <p className="text-white/60 text-xs font-bold text-center">
                {round.total} {lbl.items} {round.groups} {lbl.groupsWord}
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center px-4">
                {Array.from({ length: round.total }).map((_, i) => (
                  <motion.span key={i} className="text-2xl"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ delay: i * 0.04 }}>
                    {round.emoji}
                  </motion.span>
                ))}
              </div>
              <p className="text-sm font-black" style={{ color }}>
                {round.total} ÷ {round.groups} = ?
              </p>
              <motion.button onClick={() => setStep(1)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.tapShare}
              </motion.button>
            </>
          )}

          {/* Step 1: shared into groups */}
          {step === 1 && (
            <>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.share}</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {Array.from({ length: round.groups }).map((_, g) => (
                  <motion.div key={g}
                    className="rounded-xl p-2 flex flex-wrap gap-1 justify-center"
                    style={{ background: `${color}15`, border: `1.5px solid ${color}33`, minWidth: 50 }}
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ delay: g * 0.15 }}>
                    {Array.from({ length: perGroup }).map((_, i) => (
                      <motion.span key={i} className="text-lg"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: g * 0.15 + i * 0.08 }}>
                        {round.emoji}
                      </motion.span>
                    ))}
                    <motion.span className="w-full text-center text-xs font-black mt-1"
                      style={{ color: "#00FF88" }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ delay: g * 0.15 + perGroup * 0.08 }}>
                      {perGroup}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm font-black" style={{ color: "#00FF88" }}>
                {lbl.eachGets} {perGroup}
              </p>
              <motion.button onClick={() => setStep(2)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.tapConnection}
              </motion.button>
            </>
          )}

          {/* Step 2: connection to multiplication */}
          {step === 2 && (
            <>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.connection}</p>
              <div className="w-full rounded-2xl px-5 py-4"
                style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                <p className="text-center text-lg font-black" style={{ color }}>
                  {round.groups} × {perGroup} = {round.total}
                </p>
                <p className="text-center text-sm font-bold text-white/50 mt-2">
                  {lbl.soDiv} {round.total} ÷ {round.groups} = {perGroup}
                </p>
              </div>
              <motion.button onClick={() => setStep(3)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.tapResult}
              </motion.button>
            </>
          )}

          {/* Step 3: final result */}
          {step === 3 && (
            <>
              <motion.div
                className="w-full rounded-2xl px-5 py-4"
                style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                  {round.total} ÷ {round.groups} = {perGroup}
                </p>
                <p className="text-center text-sm font-bold text-white/50 mt-1">
                  {lbl.because} {round.groups} × {perGroup} = {round.total}
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

export default DivisionIntroExplorer;
