"use client";
// MultiplicationExplorer — Multiplication discovery for Grade 2 (i7)
// Teaches: groups of objects → repeated addition → multiplication.
// Step by step, no wrong answers.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Multiplication Explorer",
    intro: "Multiplication means GROUPS of the SAME SIZE!",
    tapGroups: "Tap each group to count!",
    groups: "groups of",
    repeated: "That's the same as:",
    soEquals: "So",
    times: "×",
    tapRepeated: "Tap to see repeated addition!",
    tapResult: "Tap to see the result!",
    arrayIntro: "We can also see it as ROWS and COLUMNS!",
    rows: "rows",
    cols: "columns",
    tapArray: "Tap to count!",
    next: "Next",
    done: "Amazing!",
  },
  hu: {
    title: "Szorzás felfedezés",
    intro: "A szorzás EGYFORMA CSOPORTOKAT jelent!",
    tapGroups: "Koppints minden csoportra a számoláshoz!",
    groups: "csoport, mindegyikben",
    repeated: "Ez ugyanaz, mint:",
    soEquals: "Tehát",
    times: "×",
    tapRepeated: "Koppints az ismételt összeadáshoz!",
    tapResult: "Koppints az eredményhez!",
    arrayIntro: "Ezt SOROKKÉNT és OSZLOPOKKÉNT is láthatjuk!",
    rows: "sor",
    cols: "oszlop",
    tapArray: "Koppints a számoláshoz!",
    next: "Következő",
    done: "Fantasztikus!",
  },
  de: {
    title: "Multiplikation entdecken",
    intro: "Multiplikation bedeutet GLEICH GROSSE GRUPPEN!",
    tapGroups: "Tippe auf jede Gruppe zum Zählen!",
    groups: "Gruppen à",
    repeated: "Das ist dasselbe wie:",
    soEquals: "Also",
    times: "×",
    tapRepeated: "Tippe für wiederholte Addition!",
    tapResult: "Tippe für das Ergebnis!",
    arrayIntro: "Wir können es auch als REIHEN und SPALTEN sehen!",
    rows: "Reihen",
    cols: "Spalten",
    tapArray: "Tippe zum Zählen!",
    next: "Weiter",
    done: "Super!",
  },
  ro: {
    title: "Explorare înmulțire",
    intro: "Înmulțirea înseamnă GRUPURI de ACEEAȘI MĂRIME!",
    tapGroups: "Atinge fiecare grup pentru a număra!",
    groups: "grupuri de câte",
    repeated: "E la fel ca:",
    soEquals: "Deci",
    times: "×",
    tapRepeated: "Atinge pentru adunare repetată!",
    tapResult: "Atinge pentru rezultat!",
    arrayIntro: "Putem vedea și ca RÂNDURI și COLOANE!",
    rows: "rânduri",
    cols: "coloane",
    tapArray: "Atinge pentru a număra!",
    next: "Înainte",
    done: "Excelent!",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
type RoundType = "groups" | "array";
interface GroupsRound { type: "groups"; groups: number; perGroup: number; emoji: string }
interface ArrayRound { type: "array"; rows: number; cols: number; emoji: string }
type Round = GroupsRound | ArrayRound;

const ROUNDS: Round[] = [
  { type: "groups", groups: 3, perGroup: 2, emoji: "🍎" },
  { type: "groups", groups: 4, perGroup: 5, emoji: "⭐" },
  { type: "groups", groups: 2, perGroup: 10, emoji: "🔵" },
  { type: "array", rows: 3, cols: 4, emoji: "🟢" },
  { type: "array", rows: 5, cols: 2, emoji: "🌙" },
  { type: "groups", groups: 5, perGroup: 3, emoji: "🍭" },
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
const MultiplicationExplorer = memo(function MultiplicationExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => shuffle(ROUNDS));
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0);
  const [tappedGroups, setTappedGroups] = useState<Set<number>>(new Set());

  const round = rounds[idx];

  const handleNext = useCallback(() => {
    if (idx + 1 >= rounds.length) {
      onDone(rounds.length, rounds.length);
      return;
    }
    setIdx(i => i + 1);
    setStep(0);
    setTappedGroups(new Set());
  }, [idx, rounds.length, onDone]);

  const handleTapGroup = useCallback((i: number) => {
    if (step !== 0) return;
    setTappedGroups(prev => new Set([...prev, i]));
  }, [step]);

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
          {/* GROUPS round */}
          {round.type === "groups" && (() => {
            const { groups, perGroup, emoji } = round;
            const total = groups * perGroup;
            const allTapped = tappedGroups.size >= groups;

            return (
              <>
                {/* Step 0: tap groups */}
                {step === 0 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">
                      {groups} {lbl.groups} {perGroup}
                    </p>
                    <p className="text-white/60 text-xs font-bold text-center">{lbl.tapGroups}</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {Array.from({ length: groups }).map((_, g) => {
                        const isTapped = tappedGroups.has(g);
                        return (
                          <motion.button key={g} onClick={() => handleTapGroup(g)}
                            className="rounded-xl p-2 flex flex-wrap gap-1 justify-center"
                            style={{
                              background: isTapped ? `${color}22` : "rgba(255,255,255,0.04)",
                              border: `2px solid ${isTapped ? color : "rgba(255,255,255,0.1)"}`,
                              minWidth: 60,
                            }}
                            whileTap={{ scale: 0.95 }}>
                            {Array.from({ length: perGroup }).map((_, i) => (
                              <motion.span key={i} className="text-lg"
                                initial={isTapped ? { scale: 0 } : {}}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.05 }}>
                                {emoji}
                              </motion.span>
                            ))}
                            {isTapped && (
                              <span className="w-full text-center text-xs font-black mt-1" style={{ color }}>
                                {perGroup}
                              </span>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                    {allTapped && (
                      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        onClick={() => setStep(1)}
                        className="w-full py-3 rounded-2xl font-black text-white text-sm"
                        style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                        whileTap={{ scale: 0.97 }}>
                        {lbl.tapRepeated}
                      </motion.button>
                    )}
                  </>
                )}

                {/* Step 1: repeated addition */}
                {step === 1 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">{lbl.repeated}</p>
                    <div className="rounded-2xl px-5 py-4 w-full"
                      style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                      <p className="text-center text-lg font-black" style={{ color }}>
                        {Array.from({ length: groups }).map((_, i) => (
                          <span key={i}>
                            {perGroup}{i < groups - 1 ? " + " : ""}
                          </span>
                        ))}
                        {" = "}{total}
                      </p>
                      <p className="text-center text-sm font-bold text-white/50 mt-2">
                        {lbl.soEquals} {groups} {lbl.times} {perGroup} = {total}
                      </p>
                    </div>
                    <motion.button onClick={() => setStep(2)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapResult}
                    </motion.button>
                  </>
                )}

                {/* Step 2: result */}
                {step === 2 && (
                  <>
                    <motion.div
                      className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                      animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                      <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                        {groups} × {perGroup} = {total}
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

          {/* ARRAY round */}
          {round.type === "array" && (() => {
            const { rows, cols, emoji } = round;
            const total = rows * cols;

            return (
              <>
                {/* Step 0: show array */}
                {step === 0 && (
                  <>
                    <p className="text-white/60 text-xs font-bold text-center">
                      {lbl.arrayIntro}
                    </p>
                    <p className="text-sm font-black" style={{ color }}>
                      {rows} {lbl.rows} × {cols} {lbl.cols}
                    </p>
                    <div className="flex flex-col gap-1 items-center">
                      {Array.from({ length: rows }).map((_, r) => (
                        <div key={r} className="flex gap-1">
                          {Array.from({ length: cols }).map((_, c) => (
                            <motion.span key={c} className="text-xl"
                              initial={{ scale: 0 }} animate={{ scale: 1 }}
                              transition={{ delay: (r * cols + c) * 0.04 }}>
                              {emoji}
                            </motion.span>
                          ))}
                        </div>
                      ))}
                    </div>
                    <motion.button onClick={() => setStep(1)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapArray}
                    </motion.button>
                  </>
                )}

                {/* Step 1: count + explain */}
                {step === 1 && (
                  <>
                    <div className="rounded-2xl px-5 py-4 w-full"
                      style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                      <p className="text-center text-lg font-black" style={{ color }}>
                        {rows} {lbl.rows} × {cols} {lbl.cols}
                      </p>
                      <p className="text-center text-sm font-bold text-white/50 mt-1">
                        {Array.from({ length: rows }).map((_, i) => (
                          <span key={i}>{cols}{i < rows - 1 ? " + " : ""}</span>
                        ))} = {total}
                      </p>
                    </div>
                    <motion.button onClick={() => setStep(2)}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm"
                      style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                      whileTap={{ scale: 0.97 }}>
                      {lbl.tapResult}
                    </motion.button>
                  </>
                )}

                {/* Step 2: result */}
                {step === 2 && (
                  <>
                    <motion.div
                      className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                      animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                      <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                        {rows} × {cols} = {total}
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

export default MultiplicationExplorer;
