"use client";
// CarryBorrowExplorer — Addition with carrying / Subtraction with borrowing for Grade 2 (i5, i6)
// Teaches: what happens when ones overflow (carry) or aren't enough (borrow).
// Step by step, no wrong answers.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    introCarry: "When the ones add up to MORE than 9, we CARRY a ten!",
    introBorrow: "When we can't subtract the ones, we BORROW from the tens!",
    onesFirst: "First: add the ones!",
    onesFirstSub: "First: try to subtract the ones!",
    tooMany: "More than 9! We need to carry!",
    notEnough: "Not enough! We need to borrow!",
    carryExplain: "equals 1 ten and",
    borrowExplain: "Unbundle 1 ten → becomes",
    nowTens: "Now add the tens (+ the carried 1)!",
    nowTensSub: "Now subtract the tens (−1 borrowed)!",
    tapOnes: "Tap to add ones!",
    tapOnesSub: "Tap to subtract ones!",
    tapCarry: "Tap to carry!",
    tapBorrow: "Tap to borrow!",
    tapTens: "Tap to add tens!",
    tapTensSub: "Tap to subtract tens!",
    tapResult: "Tap to see result!",
    result: "Result:",
    tens: "T",
    ones: "O",
    next: "Next",
    done: "Amazing!",
  },
  hu: {
    introCarry: "Ha az egyesek összege TÖBB mint 9, ÁTVISZÜNK egy tízest!",
    introBorrow: "Ha nem tudunk kivonni az egyesekből, KÖLCSÖNZÜNK a tízesekből!",
    onesFirst: "Először: adjuk össze az egyeseket!",
    onesFirstSub: "Először: próbáljuk kivonni az egyeseket!",
    tooMany: "Több mint 9! Át kell vinni!",
    notEnough: "Nem elég! Kölcsönöznünk kell!",
    carryExplain: "az 1 tízes és",
    borrowExplain: "Feltörünk 1 tízest → lesz belőle",
    nowTens: "Most adjuk össze a tízeseket (+1 átvitt)!",
    nowTensSub: "Most vonjuk ki a tízeseket (−1 kölcsönzött)!",
    tapOnes: "Koppints az egyesek összeadásához!",
    tapOnesSub: "Koppints az egyesek kivonásához!",
    tapCarry: "Koppints az átvitelhez!",
    tapBorrow: "Koppints a kölcsönzéshez!",
    tapTens: "Koppints a tízesek összeadásához!",
    tapTensSub: "Koppints a tízesek kivonásához!",
    tapResult: "Koppints az eredményhez!",
    result: "Eredmény:",
    tens: "T",
    ones: "E",
    next: "Következő",
    done: "Fantasztikus!",
  },
  de: {
    introCarry: "Wenn die Einer zusammen MEHR als 9 ergeben, ÜBERTRAGEN wir einen Zehner!",
    introBorrow: "Wenn die Einer nicht reichen, ENTBÜNDELN wir einen Zehner!",
    onesFirst: "Zuerst: Einer addieren!",
    onesFirstSub: "Zuerst: Einer subtrahieren versuchen!",
    tooMany: "Mehr als 9! Wir müssen übertragen!",
    notEnough: "Nicht genug! Wir müssen entbündeln!",
    carryExplain: "ist 1 Zehner und",
    borrowExplain: "1 Zehner entbündeln → wird zu",
    nowTens: "Jetzt Zehner addieren (+1 übertragen)!",
    nowTensSub: "Jetzt Zehner subtrahieren (−1 entbündelt)!",
    tapOnes: "Tippe um Einer zu addieren!",
    tapOnesSub: "Tippe um Einer zu subtrahieren!",
    tapCarry: "Tippe zum Übertragen!",
    tapBorrow: "Tippe zum Entbündeln!",
    tapTens: "Tippe um Zehner zu addieren!",
    tapTensSub: "Tippe um Zehner zu subtrahieren!",
    tapResult: "Tippe für das Ergebnis!",
    result: "Ergebnis:",
    tens: "Z",
    ones: "E",
    next: "Weiter",
    done: "Super!",
  },
  ro: {
    introCarry: "Când unitățile depășesc 9, TRANSPORTĂM o zece!",
    introBorrow: "Când unitățile nu ajung, ÎMPRUMUTĂM de la zeci!",
    onesFirst: "Mai întâi: adunăm unitățile!",
    onesFirstSub: "Mai întâi: încercăm să scădem unitățile!",
    tooMany: "Mai mult de 9! Trebuie să transportăm!",
    notEnough: "Nu ajunge! Trebuie să împrumutăm!",
    carryExplain: "egal 1 zece și",
    borrowExplain: "Desfacem 1 zece → devine",
    nowTens: "Acum adunăm zecile (+1 transportat)!",
    nowTensSub: "Acum scădem zecile (−1 împrumutat)!",
    tapOnes: "Atinge pentru a aduna unitățile!",
    tapOnesSub: "Atinge pentru a scădea unitățile!",
    tapCarry: "Atinge pentru transport!",
    tapBorrow: "Atinge pentru împrumut!",
    tapTens: "Atinge pentru a aduna zecile!",
    tapTensSub: "Atinge pentru a scădea zecile!",
    tapResult: "Atinge pentru rezultat!",
    result: "Rezultat:",
    tens: "Z",
    ones: "U",
    next: "Înainte",
    done: "Excelent!",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
interface Problem { a: number; b: number }
const CARRY_PROBLEMS: Problem[] = [
  { a: 17, b: 15 }, { a: 28, b: 35 }, { a: 46, b: 37 }, { a: 19, b: 24 }, { a: 38, b: 47 },
];
const BORROW_PROBLEMS: Problem[] = [
  { a: 42, b: 18 }, { a: 63, b: 28 }, { a: 81, b: 46 }, { a: 52, b: 27 }, { a: 73, b: 38 },
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
const CarryBorrowExplorer = memo(function CarryBorrowExplorer({
  color, onDone, lang = "en", mode = "carry",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
  mode?: "carry" | "borrow";
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const isCarry = mode === "carry";
  const [problems] = useState(() => shuffle(isCarry ? CARRY_PROBLEMS : BORROW_PROBLEMS).slice(0, 5));
  const [idx, setIdx] = useState(0);
  // Steps: 0=show, 1=ones overflow/underflow, 2=carry/borrow visual, 3=tens, 4=result
  const [step, setStep] = useState(0);

  const prob = problems[idx];
  const { a, b } = prob;
  const tA = Math.floor(a / 10), oA = a % 10;
  const tB = Math.floor(b / 10), oB = b % 10;

  // Carry: ones sum > 9
  const onesSum = oA + oB;
  const carryOnesResult = onesSum % 10;
  const carryTensResult = tA + tB + 1;
  const carryFull = a + b;

  // Borrow: oA < oB
  const borrowedOA = oA + 10;
  const borrowOnesResult = borrowedOA - oB;
  const borrowTensResult = (tA - 1) - tB;
  const borrowFull = a - b;

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
          {isCarry ? lbl.introCarry : lbl.introBorrow}
        </p>
      )}

      <AnimatePresence mode="wait">
        <motion.div key={`${idx}-${step}`}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* ─── CARRY MODE ──────────────────────────── */}
          {isCarry && (
            <>
              {/* Step 0: show problem */}
              {step === 0 && (
                <>
                  <p className="text-2xl font-black" style={{ color }}>{a} + {b} = ?</p>
                  <div className="rounded-2xl p-4 w-full max-w-[200px]"
                    style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                    <div className="grid grid-cols-3 gap-1 text-center font-black">
                      <div /><span className="text-xs text-white/40">{lbl.tens}</span><span className="text-xs text-white/40">{lbl.ones}</span>
                      <span /><span className="text-xl" style={{ color }}>{tA}</span><span className="text-xl" style={{ color }}>{oA}</span>
                      <span className="text-xl text-white/60">+</span><span className="text-xl" style={{ color: `${color}AA` }}>{tB}</span><span className="text-xl" style={{ color: `${color}AA` }}>{oB}</span>
                    </div>
                  </div>
                  <motion.button onClick={() => setStep(1)}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {lbl.tapOnes}
                  </motion.button>
                </>
              )}

              {/* Step 1: ones overflow */}
              {step === 1 && (
                <>
                  <p className="text-white/60 text-xs font-bold text-center">{lbl.onesFirst}</p>
                  <motion.div className="rounded-2xl px-5 py-4 w-full"
                    style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}
                    animate={{ scale: [0.98, 1.02, 1] }}>
                    <p className="text-center text-2xl font-black" style={{ color }}>
                      {oA} + {oB} = {onesSum}
                    </p>
                    <p className="text-center text-sm font-black mt-2" style={{ color: "#f59e0b" }}>
                      {onesSum} &gt; 9 — {lbl.tooMany}
                    </p>
                  </motion.div>
                  <motion.button onClick={() => setStep(2)}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {lbl.tapCarry}
                  </motion.button>
                </>
              )}

              {/* Step 2: carry visual */}
              {step === 2 && (
                <>
                  <motion.div className="rounded-2xl px-5 py-4 w-full"
                    style={{ background: "rgba(0,255,136,0.06)", border: "1.5px solid rgba(0,255,136,0.25)" }}>
                    <p className="text-center text-xl font-black text-white/70">
                      {onesSum} = <span style={{ color: "#00FF88" }}>1</span> × 10 + <span style={{ color: "#00FF88" }}>{carryOnesResult}</span>
                    </p>
                    <p className="text-center text-sm font-bold text-white/50 mt-2">
                      {onesSum} {lbl.carryExplain} {carryOnesResult}
                    </p>
                    <div className="flex justify-center mt-3 gap-3">
                      <motion.div className="px-3 py-1.5 rounded-lg text-sm font-black"
                        style={{ background: "rgba(0,255,136,0.15)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.3)" }}
                        animate={{ y: [0, -8, 0] }} transition={{ repeat: 2, duration: 0.5 }}>
                        ↑ +1 {lbl.tens}
                      </motion.div>
                      <div className="px-3 py-1.5 rounded-lg text-sm font-black"
                        style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}>
                        {carryOnesResult} {lbl.ones}
                      </div>
                    </div>
                  </motion.div>
                  <motion.button onClick={() => setStep(3)}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {lbl.tapTens}
                  </motion.button>
                </>
              )}

              {/* Step 3: tens with carry */}
              {step === 3 && (
                <>
                  <p className="text-white/60 text-xs font-bold text-center">{lbl.nowTens}</p>
                  <div className="rounded-2xl px-5 py-4 w-full"
                    style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                    <p className="text-center text-xl font-black" style={{ color }}>
                      {tA} + {tB} + <span style={{ color: "#00FF88" }}>1</span> = {carryTensResult}
                    </p>
                  </div>
                  <motion.button onClick={() => setStep(4)}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {lbl.tapResult}
                  </motion.button>
                </>
              )}

              {/* Step 4: result */}
              {step === 4 && (
                <>
                  <motion.div
                    className="w-full rounded-2xl px-5 py-4"
                    style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                    animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                    <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.result}</p>
                    <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                      {a} + {b} = {carryFull}
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
            </>
          )}

          {/* ─── BORROW MODE ─────────────────────────── */}
          {!isCarry && (
            <>
              {/* Step 0: show problem */}
              {step === 0 && (
                <>
                  <p className="text-2xl font-black" style={{ color }}>{a} – {b} = ?</p>
                  <div className="rounded-2xl p-4 w-full max-w-[200px]"
                    style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                    <div className="grid grid-cols-3 gap-1 text-center font-black">
                      <div /><span className="text-xs text-white/40">{lbl.tens}</span><span className="text-xs text-white/40">{lbl.ones}</span>
                      <span /><span className="text-xl" style={{ color }}>{tA}</span><span className="text-xl" style={{ color }}>{oA}</span>
                      <span className="text-xl text-white/60">–</span><span className="text-xl" style={{ color: `${color}AA` }}>{tB}</span><span className="text-xl" style={{ color: `${color}AA` }}>{oB}</span>
                    </div>
                  </div>
                  <motion.button onClick={() => setStep(1)}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {lbl.tapOnesSub}
                  </motion.button>
                </>
              )}

              {/* Step 1: ones underflow */}
              {step === 1 && (
                <>
                  <p className="text-white/60 text-xs font-bold text-center">{lbl.onesFirstSub}</p>
                  <motion.div className="rounded-2xl px-5 py-4 w-full"
                    style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}
                    animate={{ scale: [0.98, 1.02, 1] }}>
                    <p className="text-center text-2xl font-black" style={{ color }}>
                      {oA} – {oB} = ?
                    </p>
                    <p className="text-center text-sm font-black mt-2" style={{ color: "#ef4444" }}>
                      {oA} &lt; {oB} — {lbl.notEnough}
                    </p>
                  </motion.div>
                  <motion.button onClick={() => setStep(2)}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {lbl.tapBorrow}
                  </motion.button>
                </>
              )}

              {/* Step 2: borrow visual */}
              {step === 2 && (
                <>
                  <motion.div className="rounded-2xl px-5 py-4 w-full"
                    style={{ background: "rgba(0,255,136,0.06)", border: "1.5px solid rgba(0,255,136,0.25)" }}>
                    <p className="text-center text-sm font-bold text-white/50 mb-2">
                      {lbl.borrowExplain} {borrowedOA}
                    </p>
                    <div className="flex justify-center gap-4 items-center">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-black" style={{ color: "#ef4444" }}>{tA} → {tA - 1}</span>
                        <span className="text-xs text-white/40">{lbl.tens}</span>
                      </div>
                      <motion.span className="text-2xl" animate={{ x: [0, 10, 0] }} transition={{ repeat: 2, duration: 0.4 }}>→</motion.span>
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-black" style={{ color: "#00FF88" }}>{oA} → {borrowedOA}</span>
                        <span className="text-xs text-white/40">{lbl.ones}</span>
                      </div>
                    </div>
                    <p className="text-center text-xl font-black mt-3" style={{ color: "#00FF88" }}>
                      {borrowedOA} – {oB} = {borrowOnesResult}
                    </p>
                  </motion.div>
                  <motion.button onClick={() => setStep(3)}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {lbl.tapTensSub}
                  </motion.button>
                </>
              )}

              {/* Step 3: tens with borrow */}
              {step === 3 && (
                <>
                  <p className="text-white/60 text-xs font-bold text-center">{lbl.nowTensSub}</p>
                  <div className="rounded-2xl px-5 py-4 w-full"
                    style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                    <p className="text-center text-xl font-black" style={{ color }}>
                      ({tA} – <span style={{ color: "#ef4444" }}>1</span>) – {tB} = {borrowTensResult}
                    </p>
                  </div>
                  <motion.button onClick={() => setStep(4)}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {lbl.tapResult}
                  </motion.button>
                </>
              )}

              {/* Step 4: result */}
              {step === 4 && (
                <>
                  <motion.div
                    className="w-full rounded-2xl px-5 py-4"
                    style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                    animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                    <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.result}</p>
                    <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                      {a} – {b} = {borrowFull}
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
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default CarryBorrowExplorer;
