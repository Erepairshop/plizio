"use client";
// StatExplorer — Statistics discovery for Grade 6
// Teaches mean, median, mode, range step by step like a teacher:
//   1. Show a data set (numbers)
//   2. Step through sorting / summing
//   3. Reveal the statistical measure with explanation
// No wrong answers — pure guided discovery.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ──────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Statistics Explorer",
    hereData: "Here is the data set:",
    tapSort: "Tap to sort the numbers",
    sorted: "Sorted!",
    now: "Now let's find:",
    meanTitle: "Mean (Average)",
    meanStep1: "Step 1: Add all numbers",
    meanStep2: "Step 2: Divide by how many numbers",
    medianTitle: "Median (Middle Value)",
    medianStep: "The middle number in a sorted list:",
    modeTitle: "Mode (Most Common)",
    modeStep: "Which number appears most often?",
    rangeTitle: "Range",
    rangeStep: "Biggest − Smallest =",
    tapReveal: "Tap to reveal",
    next: "Next",
    done: "Brilliant! ✨",
    numbers: "numbers",
  },
  hu: {
    title: "Statisztika felfedezés",
    hereData: "Íme az adatsor:",
    tapSort: "Koppints a számok rendezéséhez",
    sorted: "Rendezve!",
    now: "Most keressük meg:",
    meanTitle: "Átlag (Középérték)",
    meanStep1: "1. lépés: Add össze az összes számot",
    meanStep2: "2. lépés: Oszd el a számok darabszámával",
    medianTitle: "Medián (Középső érték)",
    medianStep: "A rendezett lista középső száma:",
    modeTitle: "Módusz (Leggyakoribb)",
    modeStep: "Melyik szám fordul elő legtöbbször?",
    rangeTitle: "Terjedelem",
    rangeStep: "Legnagyobb − Legkisebb =",
    tapReveal: "Koppints a felfedezéshez",
    next: "Következő",
    done: "Fantasztikus! ✨",
    numbers: "szám",
  },
  de: {
    title: "Statistik entdecken",
    hereData: "Hier ist der Datensatz:",
    tapSort: "Tippe zum Sortieren der Zahlen",
    sorted: "Sortiert!",
    now: "Jetzt finden wir:",
    meanTitle: "Mittelwert (Durchschnitt)",
    meanStep1: "Schritt 1: Alle Zahlen addieren",
    meanStep2: "Schritt 2: Durch die Anzahl teilen",
    medianTitle: "Median (Zentralwert)",
    medianStep: "Die mittlere Zahl in einer sortierten Liste:",
    modeTitle: "Modus (Häufigster Wert)",
    modeStep: "Welche Zahl kommt am häufigsten vor?",
    rangeTitle: "Spannweite",
    rangeStep: "Größte − Kleinste =",
    tapReveal: "Tippe zum Aufdecken",
    next: "Weiter",
    done: "Fantastisch! ✨",
    numbers: "Zahlen",
  },
  ro: {
    title: "Explorare statistică",
    hereData: "Iată setul de date:",
    tapSort: "Atinge pentru a sorta numerele",
    sorted: "Sortat!",
    now: "Acum să găsim:",
    meanTitle: "Media (Medie aritmetică)",
    meanStep1: "Pasul 1: Adună toate numerele",
    meanStep2: "Pasul 2: Împarte la câte numere sunt",
    medianTitle: "Mediana (Valoarea din mijloc)",
    medianStep: "Numărul din mijloc într-o listă sortată:",
    modeTitle: "Modul (Cel mai frecvent)",
    modeStep: "Care număr apare cel mai des?",
    rangeTitle: "Amplitudine",
    rangeStep: "Cel mai mare − Cel mai mic =",
    tapReveal: "Atinge pentru a descoperi",
    next: "Înainte",
    done: "Fantastic! ✨",
    numbers: "numere",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
type StatType = "mean" | "median" | "mode" | "range";

interface StatRound {
  nums: number[];
  type: StatType;
}

// Pre-computed datasets with clean integer means
function generateRounds(): StatRound[] {
  const datasets: { nums: number[]; mean: number }[] = [
    { nums: [4, 6, 8, 2, 10], mean: 6 },
    { nums: [3, 7, 5, 9, 1], mean: 5 },
    { nums: [5, 8, 3, 12, 7], mean: 7 },
    { nums: [2, 6, 10, 14], mean: 8 },
    { nums: [6, 9, 12, 9], mean: 9 },
    { nums: [4, 7, 13, 8], mean: 8 },
  ];

  // Mode datasets (one number appears 2+ times)
  const modeDatasets = [
    [3, 5, 3, 8, 3, 7],
    [2, 4, 4, 6, 4, 9],
    [7, 1, 7, 3, 5, 7],
    [6, 6, 2, 8, 6, 4],
  ];

  const rounds: StatRound[] = [];

  // 2 mean rounds
  const shuffledMean = [...datasets].sort(() => Math.random() - 0.5);
  rounds.push({ nums: shuffledMean[0].nums, type: "mean" });
  rounds.push({ nums: shuffledMean[1].nums, type: "mean" });

  // 1 median
  rounds.push({ nums: shuffledMean[2].nums, type: "median" });

  // 1 mode
  const modeSet = modeDatasets[Math.floor(Math.random() * modeDatasets.length)];
  rounds.push({ nums: modeSet, type: "mode" });

  // 1 range
  rounds.push({ nums: shuffledMean[3].nums, type: "range" });

  // 1 more median
  rounds.push({ nums: shuffledMean[4].nums, type: "median" });

  return rounds;
}

// ─── Number Chip Component ───────────────────────────────────────────────────
function NumberChips({ nums, sorted, highlight, color }: {
  nums: number[]; sorted: boolean; highlight?: number; color: string;
}) {
  const display = sorted ? [...nums].sort((a, b) => a - b) : nums;
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {display.map((n, i) => {
        const isHighlighted = highlight !== undefined && n === highlight;
        return (
          <motion.div key={`${i}-${n}`}
            layout
            className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base"
            style={{
              background: isHighlighted ? `${color}33` : "rgba(255,255,255,0.06)",
              border: `2px solid ${isHighlighted ? color : "rgba(255,255,255,0.15)"}`,
              color: isHighlighted ? color : "rgba(255,255,255,0.8)",
            }}
          >
            {n}
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const StatExplorer = memo(function StatExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => generateRounds());
  const [idx, setIdx] = useState(0);
  // Steps: 0=show data, 1=sort, 2=explain, 3=reveal answer
  const [step, setStep] = useState(0);

  const round = rounds[idx];
  const { nums, type } = round;
  const sorted = [...nums].sort((a, b) => a - b);
  const sum = nums.reduce((s, n) => s + n, 0);
  const mean = sum / nums.length;
  const medianVal = sorted[Math.floor(sorted.length / 2)];
  const rangeVal = sorted[sorted.length - 1] - sorted[0];

  // Mode calculation
  const freq: Record<number, number> = {};
  nums.forEach(n => { freq[n] = (freq[n] || 0) + 1; });
  const maxFreq = Math.max(...Object.values(freq));
  const modeVal = Number(Object.keys(freq).find(k => freq[Number(k)] === maxFreq));

  const typeTitle = type === "mean" ? lbl.meanTitle
    : type === "median" ? lbl.medianTitle
    : type === "mode" ? lbl.modeTitle
    : lbl.rangeTitle;

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

      <AnimatePresence mode="wait">
        <motion.div key={`${idx}-${step}`}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* Step 0: Show unsorted data */}
          {step === 0 && (
            <>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.hereData}</p>
              <div className="w-full rounded-2xl p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <NumberChips nums={nums} sorted={false} color={color} />
              </div>
              <div className="text-center">
                <span className="text-sm font-bold" style={{ color }}>
                  {lbl.now} <span className="text-white/80">{typeTitle}</span>
                </span>
              </div>
              <motion.button
                onClick={() => setStep(1)}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}
              >
                {type === "mode" ? lbl.tapReveal : lbl.tapSort}
              </motion.button>
            </>
          )}

          {/* Step 1: Sort the numbers (or for mode, skip to reveal) */}
          {step === 1 && (
            <>
              <div className="w-full rounded-2xl p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <NumberChips
                  nums={nums}
                  sorted={type !== "mode"}
                  highlight={type === "mode" ? modeVal : undefined}
                  color={color}
                />
              </div>
              {type !== "mode" && (
                <p className="text-xs font-bold" style={{ color: "#00FF88" }}>✅ {lbl.sorted}</p>
              )}
              <motion.button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}
              >
                {lbl.tapReveal}
              </motion.button>
            </>
          )}

          {/* Step 2: Explain the calculation */}
          {step === 2 && (
            <>
              <div className="w-full rounded-2xl px-4 py-3"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <p className="text-xs font-bold text-center mb-2" style={{ color }}>{typeTitle}</p>

                {type === "mean" && (
                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-white/50 text-xs font-bold">{lbl.meanStep1}</p>
                    <p className="text-white/80 text-sm font-bold">
                      {sorted.join(" + ")} = <span style={{ color }}>{sum}</span>
                    </p>
                    <p className="text-white/50 text-xs font-bold mt-1">{lbl.meanStep2}</p>
                    <p className="text-white/80 text-sm font-bold">
                      {sum} ÷ {nums.length} = <span style={{ color: "#00FF88" }} className="text-lg">{mean}</span>
                    </p>
                  </div>
                )}

                {type === "median" && (
                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-white/50 text-xs font-bold">{lbl.medianStep}</p>
                    <div className="flex gap-1.5 items-center">
                      {sorted.map((n, i) => {
                        const isMiddle = i === Math.floor(sorted.length / 2);
                        return (
                          <span key={i}
                            className="px-2.5 py-1.5 rounded-lg font-black text-sm"
                            style={{
                              background: isMiddle ? `${color}33` : "rgba(255,255,255,0.06)",
                              color: isMiddle ? color : "rgba(255,255,255,0.5)",
                              boxShadow: isMiddle ? `0 0 0 2px ${color}` : undefined,
                            }}
                          >
                            {n}
                          </span>
                        );
                      })}
                    </div>
                    <p className="text-sm font-bold mt-1">
                      → <span style={{ color: "#00FF88" }} className="text-lg font-black">{medianVal}</span>
                    </p>
                  </div>
                )}

                {type === "mode" && (
                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-white/50 text-xs font-bold">{lbl.modeStep}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {Object.entries(freq).sort(([,a],[,b]) => b - a).map(([num, count]) => (
                        <div key={num}
                          className="px-3 py-1.5 rounded-lg font-bold text-sm flex items-center gap-1.5"
                          style={{
                            background: Number(num) === modeVal ? `${color}33` : "rgba(255,255,255,0.06)",
                            border: Number(num) === modeVal ? `2px solid ${color}` : "1px solid rgba(255,255,255,0.1)",
                            color: Number(num) === modeVal ? color : "rgba(255,255,255,0.6)",
                          }}
                        >
                          {num} <span className="text-[10px] opacity-70">×{count}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm font-bold mt-1">
                      → <span style={{ color: "#00FF88" }} className="text-lg font-black">{modeVal}</span> (×{maxFreq})
                    </p>
                  </div>
                )}

                {type === "range" && (
                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-white/50 text-xs font-bold">{lbl.rangeStep}</p>
                    <p className="text-white/80 text-base font-bold">
                      <span style={{ color }}>{sorted[sorted.length - 1]}</span>
                      <span className="text-white/40 mx-2">−</span>
                      <span style={{ color }}>{sorted[0]}</span>
                      <span className="text-white/40 mx-2">=</span>
                      <span style={{ color: "#00FF88" }} className="text-xl font-black">{rangeVal}</span>
                    </p>
                  </div>
                )}
              </div>

              <motion.button
                onClick={() => setStep(3)}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}
              >
                {lbl.tapReveal}
              </motion.button>
            </>
          )}

          {/* Step 3: Summary card */}
          {step === 3 && (
            <>
              <motion.div
                className="w-full rounded-2xl px-5 py-4"
                style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                animate={{ scale: [0.95, 1.02, 1] }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-white/50 text-xs font-bold text-center mb-1">{typeTitle}</p>
                <div className="text-center">
                  <span className="text-3xl font-black" style={{ color: "#00FF88" }}>
                    {type === "mean" ? mean : type === "median" ? medianVal : type === "mode" ? modeVal : rangeVal}
                  </span>
                </div>
                <p className="text-white/40 text-xs text-center mt-2">
                  [{sorted.join(", ")}] — {nums.length} {lbl.numbers}
                </p>
              </motion.div>

              <motion.button
                onClick={handleNext}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                whileTap={{ scale: 0.97 }}
              >
                {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={16} />
              </motion.button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default StatExplorer;
