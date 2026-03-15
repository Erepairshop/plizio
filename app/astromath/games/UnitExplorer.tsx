"use client";
// UnitExplorer — Unit conversion discovery for Grade 3–5
// G3: smaller n (max 3), simpler conversions (m→cm, h→min)
// G4: 3 km = 3 × 1000 m = 3000 m
// G5: area units (m²→cm²), t→kg, larger numbers
// Students tap each unit segment to reveal its equivalent.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ─────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    concept: "Big units are made of many small ones!",
    instruction: "Tap each block to reveal how many it contains!",
    eachBlock: "each block",
    total: "Total",
    discover: "You discovered:",
    rule: "Always remember:",
    next: "Next", done: "Brilliant! ✨", tap: "Tap!",
  },
  hu: {
    concept: "A nagy mértékegységek kis egységekből állnak!",
    instruction: "Koppints minden blokkra, hogy lásd mennyi van benne!",
    eachBlock: "minden blokk",
    total: "Összesen",
    discover: "Felfedezted:",
    rule: "Mindig jegyezd meg:",
    next: "Következő", done: "Fantasztikus! ✨", tap: "Koppints!",
  },
  de: {
    concept: "Große Einheiten bestehen aus vielen kleinen!",
    instruction: "Tippe auf jeden Block, um zu sehen, wie viele er enthält!",
    eachBlock: "jeder Block",
    total: "Gesamt",
    discover: "Du hast entdeckt:",
    rule: "Merke dir:",
    next: "Weiter", done: "Fantastisch! ✨", tap: "Antippen",
  },
  ro: {
    concept: "Unitățile mari sunt formate din multe unități mici!",
    instruction: "Atinge fiecare bloc pentru a vedea câte conține!",
    eachBlock: "fiecare bloc",
    total: "Total",
    discover: "Ai descoperit:",
    rule: "Rețin:",
    next: "Înainte", done: "Fantastic! ✨", tap: "Atinge",
  },
};

// ─── Round data ───────────────────────────────────────────────────────────────
interface Round {
  n: number;          // how many "from" units (= number of tap blocks)
  from: string;       // e.g. "km"
  to: string;         // e.g. "m"
  mult: number;       // conversion factor: 1 from = mult to
  ruleLabel: string;  // shown in discovery card: "1 km = 1000 m"
}

// All conversions in all 4 languages
type LangRound = Record<string, Round[]>;

// G4 pool: larger n, km→m, kg→g (1000× multiplier)
const ROUND_POOL_G4: LangRound = {
  de: [
    { n: 2, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 3, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 4, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
    { n: 3, from: "h",   to: "min", mult: 60,   ruleLabel: "1 h = 60 min"   },
    { n: 2, from: "l",   to: "ml",  mult: 1000, ruleLabel: "1 l = 1000 ml"  },
    { n: 5, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 3, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 2, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
  ],
  en: [
    { n: 2, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 3, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 4, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
    { n: 3, from: "h",   to: "min", mult: 60,   ruleLabel: "1 h = 60 min"   },
    { n: 2, from: "l",   to: "ml",  mult: 1000, ruleLabel: "1 l = 1000 ml"  },
    { n: 5, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 3, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 2, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
  ],
  hu: [
    { n: 2, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 3, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 4, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
    { n: 3, from: "h",   to: "min", mult: 60,   ruleLabel: "1 óra = 60 perc"},
    { n: 2, from: "l",   to: "ml",  mult: 1000, ruleLabel: "1 l = 1000 ml"  },
    { n: 5, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 3, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 2, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
  ],
  ro: [
    { n: 2, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 3, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 4, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
    { n: 3, from: "h",   to: "min", mult: 60,   ruleLabel: "1 h = 60 min"   },
    { n: 2, from: "l",   to: "ml",  mult: 1000, ruleLabel: "1 l = 1000 ml"  },
    { n: 5, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 3, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 2, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
  ],
};

// G3 pool: smaller n (max 3), simpler conversions, results ≤ 300
const ROUND_POOL_G3: LangRound = {
  de: [
    { n: 2, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 3, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 2, from: "h",   to: "min", mult: 60,   ruleLabel: "1 h = 60 min"   },
    { n: 3, from: "h",   to: "min", mult: 60,   ruleLabel: "1 h = 60 min"   },
    { n: 2, from: "cm",  to: "mm",  mult: 10,   ruleLabel: "1 cm = 10 mm"   },
    { n: 3, from: "cm",  to: "mm",  mult: 10,   ruleLabel: "1 cm = 10 mm"   },
    { n: 1, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 1, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
  ],
  en: [
    { n: 2, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 3, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 2, from: "h",   to: "min", mult: 60,   ruleLabel: "1 h = 60 min"   },
    { n: 3, from: "h",   to: "min", mult: 60,   ruleLabel: "1 h = 60 min"   },
    { n: 2, from: "cm",  to: "mm",  mult: 10,   ruleLabel: "1 cm = 10 mm"   },
    { n: 3, from: "cm",  to: "mm",  mult: 10,   ruleLabel: "1 cm = 10 mm"   },
    { n: 1, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 1, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
  ],
  hu: [
    { n: 2, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 3, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 2, from: "h",   to: "perc", mult: 60,  ruleLabel: "1 óra = 60 perc"},
    { n: 3, from: "h",   to: "perc", mult: 60,  ruleLabel: "1 óra = 60 perc"},
    { n: 2, from: "cm",  to: "mm",  mult: 10,   ruleLabel: "1 cm = 10 mm"   },
    { n: 3, from: "cm",  to: "mm",  mult: 10,   ruleLabel: "1 cm = 10 mm"   },
    { n: 1, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 1, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
  ],
  ro: [
    { n: 2, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 3, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 2, from: "h",   to: "min", mult: 60,   ruleLabel: "1 h = 60 min"   },
    { n: 3, from: "h",   to: "min", mult: 60,   ruleLabel: "1 h = 60 min"   },
    { n: 2, from: "cm",  to: "mm",  mult: 10,   ruleLabel: "1 cm = 10 mm"   },
    { n: 3, from: "cm",  to: "mm",  mult: 10,   ruleLabel: "1 cm = 10 mm"   },
    { n: 1, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 1, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
  ],
};

// G5 pool: area units, tonnes, larger conversions
const ROUND_POOL_G5: LangRound = {
  de: [
    { n: 3, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 2, from: "t",   to: "kg",  mult: 1000, ruleLabel: "1 t = 1000 kg"  },
    { n: 4, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 2, from: "m²",  to: "dm²", mult: 100,  ruleLabel: "1 m² = 100 dm²" },
    { n: 3, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
    { n: 5, from: "h",   to: "min", mult: 60,   ruleLabel: "1 h = 60 min"   },
    { n: 2, from: "l",   to: "ml",  mult: 1000, ruleLabel: "1 l = 1000 ml"  },
    { n: 3, from: "t",   to: "kg",  mult: 1000, ruleLabel: "1 t = 1000 kg"  },
  ],
  en: [
    { n: 3, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 2, from: "t",   to: "kg",  mult: 1000, ruleLabel: "1 t = 1000 kg"  },
    { n: 4, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 2, from: "m²",  to: "dm²", mult: 100,  ruleLabel: "1 m² = 100 dm²" },
    { n: 3, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
    { n: 5, from: "h",   to: "min", mult: 60,   ruleLabel: "1 h = 60 min"   },
    { n: 2, from: "l",   to: "ml",  mult: 1000, ruleLabel: "1 l = 1000 ml"  },
    { n: 3, from: "t",   to: "kg",  mult: 1000, ruleLabel: "1 t = 1000 kg"  },
  ],
  hu: [
    { n: 3, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 2, from: "t",   to: "kg",  mult: 1000, ruleLabel: "1 t = 1000 kg"  },
    { n: 4, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 2, from: "m²",  to: "dm²", mult: 100,  ruleLabel: "1 m² = 100 dm²" },
    { n: 3, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
    { n: 5, from: "h",   to: "perc", mult: 60,  ruleLabel: "1 óra = 60 perc"},
    { n: 2, from: "l",   to: "ml",  mult: 1000, ruleLabel: "1 l = 1000 ml"  },
    { n: 3, from: "t",   to: "kg",  mult: 1000, ruleLabel: "1 t = 1000 kg"  },
  ],
  ro: [
    { n: 3, from: "km",  to: "m",   mult: 1000, ruleLabel: "1 km = 1000 m"  },
    { n: 2, from: "t",   to: "kg",  mult: 1000, ruleLabel: "1 t = 1000 kg"  },
    { n: 4, from: "m",   to: "cm",  mult: 100,  ruleLabel: "1 m = 100 cm"   },
    { n: 2, from: "m²",  to: "dm²", mult: 100,  ruleLabel: "1 m² = 100 dm²" },
    { n: 3, from: "kg",  to: "g",   mult: 1000, ruleLabel: "1 kg = 1000 g"  },
    { n: 5, from: "h",   to: "min", mult: 60,   ruleLabel: "1 h = 60 min"   },
    { n: 2, from: "l",   to: "ml",  mult: 1000, ruleLabel: "1 l = 1000 ml"  },
    { n: 3, from: "t",   to: "kg",  mult: 1000, ruleLabel: "1 t = 1000 kg"  },
  ],
};

function generateRounds(lang: string, grade: number): Round[] {
  const pools = grade >= 5 ? ROUND_POOL_G5 : grade <= 3 ? ROUND_POOL_G3 : ROUND_POOL_G4;
  const pool = [...(pools[lang] ?? pools.en)];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 6);
}

// ─── Main Component ───────────────────────────────────────────────────────────
const UnitExplorer = memo(function UnitExplorer({
  color, onDone, lang = "en", grade = 4,
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
  grade?: number;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState<Round[]>(() => generateRounds(lang, grade));
  const [idx, setIdx] = useState(0);
  const [tappedCount, setTappedCount] = useState(0);
  const [completed, setCompleted] = useState(0);

  const round = rounds[idx];
  const { n, from, to, mult, ruleLabel } = round;
  const allTapped = tappedCount === n;
  const total = n * mult;

  const tapBlock = (i: number) => {
    // Only tap in order
    if (i === tappedCount) setTappedCount(c => c + 1);
  };

  const next = useCallback(() => {
    const newCompleted = completed + 1;
    setCompleted(newCompleted);
    setTappedCount(0);
    if (idx + 1 >= rounds.length) { onDone(newCompleted, rounds.length); return; }
    setIdx(i => i + 1);
  }, [idx, rounds.length, onDone, completed]);

  // Unit colors: cycle through 3 nice tones of the island color
  const blockColors = [color, `${color}CC`, `${color}AA`, `${color}88`, `${color}66`];

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-1.5">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Equation */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 py-1">
          <span className="text-5xl font-black" style={{ color }}>{n}</span>
          <span className="text-3xl font-black" style={{ color }}>{from}</span>
          <span className="text-3xl text-white/40 font-bold">=</span>
          <motion.span className="text-5xl font-black"
            style={{ color: allTapped ? "#00FF88" : "rgba(255,255,255,0.18)" }}
            animate={allTapped ? { scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 0.4 }}>
            {allTapped ? total : "?"}
          </motion.span>
          <motion.span className="text-2xl font-black"
            style={{ color: allTapped ? "#00FF88" : "rgba(255,255,255,0.18)" }}>
            {to}
          </motion.span>
        </motion.div>
      </AnimatePresence>

      {/* Concept + instruction */}
      <div className="rounded-xl px-4 py-2.5 text-center"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <p className="text-white/50 text-xs font-bold">{lbl.concept}</p>
        <p className="text-white/70 text-xs font-bold mt-0.5">{lbl.instruction}</p>
      </div>

      {/* Segment blocks */}
      <div className="flex flex-col gap-2">
        {/* The blocks + running total */}
        <div className={`grid gap-2`}
          style={{ gridTemplateColumns: `repeat(${Math.min(n, 5)}, 1fr)` }}>
          {Array.from({ length: n }).map((_, i) => {
            const isTapped = i < tappedCount;
            const isNext = i === tappedCount;
            const blockColor = blockColors[i % blockColors.length];
            return (
              <motion.button key={`${idx}-${i}`}
                onClick={() => tapBlock(i)}
                disabled={isTapped}
                className="flex flex-col items-center gap-1 py-3 rounded-2xl"
                style={{
                  background: isTapped ? `${blockColor}22` : "rgba(255,255,255,0.06)",
                  border: `2px solid ${isTapped ? blockColor : isNext ? `${color}60` : "rgba(255,255,255,0.12)"}`,
                  cursor: isTapped ? "default" : isNext ? "pointer" : "not-allowed",
                  opacity: !isTapped && !isNext ? 0.5 : 1,
                }}
                whileTap={isNext ? { scale: 0.92 } : {}}>
                {/* "1 km" label */}
                <span className="text-xs font-black" style={{ color: isTapped ? blockColor : "rgba(255,255,255,0.5)" }}>
                  1 {from}
                </span>
                {/* revealed value */}
                {isTapped ? (
                  <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="text-sm font-black" style={{ color: blockColor }}>
                    {mult} {to}
                  </motion.span>
                ) : (
                  <>
                    <span className="text-base font-black text-white/20">?</span>
                    {isNext && <span className="text-[9px] font-bold text-white/35">{lbl.tap}</span>}
                  </>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Running total row */}
        {tappedCount > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 pt-1">
            <span className="text-white/40 text-xs font-bold">{lbl.total}:</span>
            <AnimatePresence mode="wait">
              <motion.span key={tappedCount}
                initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="text-2xl font-black" style={{ color }}>
                {tappedCount * mult} {to}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Result */}
      <AnimatePresence>
        {allTapped && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3">
            <motion.div className="w-full rounded-2xl px-5 py-4"
              style={{ background: "rgba(0,255,136,0.10)", border: "2px solid rgba(0,255,136,0.3)" }}
              animate={{ scale: [0.92, 1.02, 1] }} transition={{ duration: 0.5 }}>
              <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.discover}</p>
              {/* Step formula: n × mult = total */}
              <p className="text-center text-base font-black text-white/80">
                {n} × {mult} {to}
                <span className="text-white/40 mx-2">=</span>
                <span style={{ color: "#00FF88" }}>{total} {to}</span>
              </p>
              {/* The base rule */}
              <p className="text-center text-xs font-bold text-white/40 mt-2">
                {lbl.rule} {ruleLabel}
              </p>
            </motion.div>

            <motion.button onClick={next}
              className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}>
              {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default UnitExplorer;
