"use client";
// ColumnAddSubExplorer — Column addition/subtraction WITHOUT carrying/borrowing for Grade 2 (i3, i4)
// Teaches: separate tens and ones, add/subtract each column.
// Step by step, no wrong answers.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    introAdd: "We add the ONES first, then the TENS!",
    introSub: "We subtract the ONES first, then the TENS!",
    stepOnesAdd: "First: add the ones!",
    stepOnesSub: "First: subtract the ones!",
    stepTensAdd: "Now: add the tens!",
    stepTensSub: "Now: subtract the tens!",
    tapOnes: "Tap to calculate ones!",
    tapTens: "Tap to calculate tens!",
    tapResult: "Tap to see the result!",
    tens: "T",
    ones: "O",
    result: "Result:",
    next: "Next",
    done: "Amazing!",
  },
  hu: {
    introAdd: "Először az EGYESEKET adjuk össze, aztán a TÍZESEKET!",
    introSub: "Először az EGYESEKET vonjuk ki, aztán a TÍZESEKET!",
    stepOnesAdd: "Először: egyesek összeadása!",
    stepOnesSub: "Először: egyesek kivonása!",
    stepTensAdd: "Most: tízesek összeadása!",
    stepTensSub: "Most: tízesek kivonása!",
    tapOnes: "Koppints az egyesek számolásához!",
    tapTens: "Koppints a tízesek számolásához!",
    tapResult: "Koppints az eredményhez!",
    tens: "T",
    ones: "E",
    result: "Eredmény:",
    next: "Következő",
    done: "Fantasztikus!",
  },
  de: {
    introAdd: "Wir addieren zuerst die EINER, dann die ZEHNER!",
    introSub: "Wir subtrahieren zuerst die EINER, dann die ZEHNER!",
    stepOnesAdd: "Zuerst: Einer addieren!",
    stepOnesSub: "Zuerst: Einer subtrahieren!",
    stepTensAdd: "Jetzt: Zehner addieren!",
    stepTensSub: "Jetzt: Zehner subtrahieren!",
    tapOnes: "Tippe um die Einer zu rechnen!",
    tapTens: "Tippe um die Zehner zu rechnen!",
    tapResult: "Tippe für das Ergebnis!",
    tens: "Z",
    ones: "E",
    result: "Ergebnis:",
    next: "Weiter",
    done: "Super!",
  },
  ro: {
    introAdd: "Adunăm mai întâi UNITĂȚILE, apoi ZECILE!",
    introSub: "Scădem mai întâi UNITĂȚILE, apoi ZECILE!",
    stepOnesAdd: "Mai întâi: adunăm unitățile!",
    stepOnesSub: "Mai întâi: scădem unitățile!",
    stepTensAdd: "Acum: adunăm zecile!",
    stepTensSub: "Acum: scădem zecile!",
    tapOnes: "Atinge pentru a calcula unitățile!",
    tapTens: "Atinge pentru a calcula zecile!",
    tapResult: "Atinge pentru rezultat!",
    tens: "Z",
    ones: "U",
    result: "Rezultat:",
    next: "Înainte",
    done: "Excelent!",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
interface Problem { a: number; b: number }
const ADD_PROBLEMS: Problem[] = [
  { a: 23, b: 14 }, { a: 41, b: 35 }, { a: 52, b: 26 }, { a: 32, b: 45 }, { a: 61, b: 18 }, { a: 43, b: 21 },
];
const SUB_PROBLEMS: Problem[] = [
  { a: 58, b: 23 }, { a: 76, b: 42 }, { a: 89, b: 54 }, { a: 67, b: 34 }, { a: 95, b: 43 }, { a: 48, b: 15 },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Column display ──────────────────────────────────────────────────────────
function ColumnDisplay({
  a, b, op, onesResult, tensResult, showOnes, showTens, color, lbl,
}: {
  a: number; b: number; op: "+" | "–";
  onesResult: number | null; tensResult: number | null;
  showOnes: boolean; showTens: boolean;
  color: string; lbl: Record<string, string>;
}) {
  const tA = Math.floor(a / 10), oA = a % 10;
  const tB = Math.floor(b / 10), oB = b % 10;

  return (
    <div className="rounded-2xl p-4 w-full max-w-[200px]"
      style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
      <div className="grid grid-cols-3 gap-1 text-center font-black">
        {/* Header */}
        <div />
        <span className="text-xs text-white/40">{lbl.tens}</span>
        <span className="text-xs text-white/40">{lbl.ones}</span>
        {/* Number A */}
        <span className="text-sm text-white/40" />
        <span className="text-xl" style={{ color }}>{tA}</span>
        <span className="text-xl" style={{ color }}>{oA}</span>
        {/* Operator + Number B */}
        <span className="text-xl text-white/60">{op}</span>
        <span className="text-xl" style={{ color: `${color}AA` }}>{tB}</span>
        <span className="text-xl" style={{ color: `${color}AA` }}>{oB}</span>
        {/* Divider */}
        <div className="col-span-3 h-0.5 rounded-full my-1" style={{ background: `${color}44` }} />
        {/* Result */}
        <span className="text-sm text-white/40">=</span>
        {showTens && tensResult !== null ? (
          <motion.span className="text-2xl font-black" style={{ color: "#00FF88" }}
            initial={{ scale: 0 }} animate={{ scale: 1 }}>
            {tensResult}
          </motion.span>
        ) : (
          <span className="text-xl text-white/20">?</span>
        )}
        {showOnes && onesResult !== null ? (
          <motion.span className="text-2xl font-black" style={{ color: "#00FF88" }}
            initial={{ scale: 0 }} animate={{ scale: 1 }}>
            {onesResult}
          </motion.span>
        ) : (
          <span className="text-xl text-white/20">?</span>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
const ColumnAddSubExplorer = memo(function ColumnAddSubExplorer({
  color, onDone, lang = "en", mode = "add",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
  mode?: "add" | "sub";
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const isAdd = mode === "add";
  const [problems] = useState(() => shuffle(isAdd ? ADD_PROBLEMS : SUB_PROBLEMS).slice(0, 5));
  const [idx, setIdx] = useState(0);
  // Steps: 0=show columns, 1=ones calculated, 2=tens calculated, 3=result
  const [step, setStep] = useState(0);

  const prob = problems[idx];
  const { a, b } = prob;
  const tA = Math.floor(a / 10), oA = a % 10;
  const tB = Math.floor(b / 10), oB = b % 10;
  const onesRes = isAdd ? oA + oB : oA - oB;
  const tensRes = isAdd ? tA + tB : tA - tB;
  const fullResult = isAdd ? a + b : a - b;

  const handleNext = useCallback(() => {
    if (idx + 1 >= problems.length) {
      onDone(problems.length, problems.length);
      return;
    }
    setIdx(i => i + 1);
    setStep(0);
  }, [idx, problems.length, onDone]);

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {/* Progress */}
      <div className="flex gap-1.5 w-full">
        {problems.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {idx === 0 && step === 0 && (
        <p className="text-white/50 text-xs font-medium text-center px-4">
          {isAdd ? lbl.introAdd : lbl.introSub}
        </p>
      )}

      <AnimatePresence mode="wait">
        <motion.div key={`${idx}-${step}`}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* Step 0: show column */}
          {step === 0 && (
            <>
              <div className="flex items-center justify-center gap-2">
                <p className="text-white/60 text-xs font-bold text-center">
                  {a} {isAdd ? "+" : "–"} {b} = ?
                </p>
                <SpeakButton text={`${a} ${isAdd ? "+" : "–"} ${b}`} lang={lang} size={14} />
              </div>
              <ColumnDisplay a={a} b={b} op={isAdd ? "+" : "–"}
                onesResult={null} tensResult={null}
                showOnes={false} showTens={false} color={color} lbl={lbl} />
              <motion.button onClick={() => setStep(1)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.tapOnes}
              </motion.button>
            </>
          )}

          {/* Step 1: ones calculated */}
          {step === 1 && (
            <>
              <p className="text-white/60 text-xs font-bold text-center">
                {isAdd ? lbl.stepOnesAdd : lbl.stepOnesSub}
              </p>
              <ColumnDisplay a={a} b={b} op={isAdd ? "+" : "–"}
                onesResult={onesRes} tensResult={null}
                showOnes={true} showTens={false} color={color} lbl={lbl} />
              <div className="rounded-xl px-4 py-2" style={{ background: `${color}15` }}>
                <p className="text-sm font-black text-center" style={{ color: "#00FF88" }}>
                  {oA} {isAdd ? "+" : "–"} {oB} = {onesRes}
                </p>
              </div>
              <motion.button onClick={() => setStep(2)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.tapTens}
              </motion.button>
            </>
          )}

          {/* Step 2: tens calculated */}
          {step === 2 && (
            <>
              <p className="text-white/60 text-xs font-bold text-center">
                {isAdd ? lbl.stepTensAdd : lbl.stepTensSub}
              </p>
              <ColumnDisplay a={a} b={b} op={isAdd ? "+" : "–"}
                onesResult={onesRes} tensResult={tensRes}
                showOnes={true} showTens={true} color={color} lbl={lbl} />
              <div className="rounded-xl px-4 py-2" style={{ background: `${color}15` }}>
                <p className="text-sm font-black text-center" style={{ color: "#00FF88" }}>
                  {tA} {isAdd ? "+" : "–"} {tB} = {tensRes}
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

          {/* Step 3: full result */}
          {step === 3 && (
            <>
              <motion.div
                className="w-full rounded-2xl px-5 py-4"
                style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.result}</p>
                <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                  {a} {isAdd ? "+" : "–"} {b} = {fullResult}
                </p>
              </motion.div>
              <motion.button onClick={handleNext}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                whileTap={{ scale: 0.97 }}>
                {idx + 1 >= problems.length ? lbl.done : lbl.next} <ChevronRight size={16} />
              </motion.button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ColumnAddSubExplorer;
