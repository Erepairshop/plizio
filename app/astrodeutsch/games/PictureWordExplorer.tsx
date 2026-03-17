"use client";
// PictureWordExplorer — Island i6: Bilder (Pictures/Colors/Numbers)
// Teaches: Farben (colors), Zahlen als Wörter (number words), Wortschatz

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Picture & Word Explorer",
    round1Title: "Colors!",
    round1Hint: "Tap each color to learn its German name!",
    round2Title: "Match the Color",
    round2Hint: "Which color is this?",
    round3Title: "Number Words",
    round3Hint: "Tap each number word!",
    round4Title: "Number Match",
    round4Hint: "Match the number to its word!",
    round5Title: "Count & Say",
    round5Hint: "How many? Tap the correct number word!",
    well: "Well done!",
    next: "Next",
    finish: "Finished!",
    correct: "Correct!",
    hint: "Colors and numbers!",
  },
  hu: {
    title: "Kép és szó felfedező",
    round1Title: "Színek!",
    round1Hint: "Koppints minden színre és tanulj meg neveket!",
    round2Title: "Párosítsd a színt",
    round2Hint: "Melyik szín ez?",
    round3Title: "Számszavak",
    round3Hint: "Koppints minden számszóra!",
    round4Title: "Szám párosítás",
    round4Hint: "Kösd össze a számot és a szót!",
    round5Title: "Számolj és mondd",
    round5Hint: "Hány? Koppints a helyes számszóra!",
    well: "Remek!",
    next: "Tovább",
    finish: "Vége!",
    correct: "Helyes!",
    hint: "Színek és számok!",
  },
  de: {
    title: "Bild & Wort-Entdecker",
    round1Title: "Farben!",
    round1Hint: "Tippe auf jede Farbe, um ihren Namen zu lernen!",
    round2Title: "Passe die Farbe an",
    round2Hint: "Welche Farbe ist das?",
    round3Title: "Zahlenwörter",
    round3Hint: "Tippe auf jedes Zahlenwort!",
    round4Title: "Zahlen zuordnen",
    round4Hint: "Ordne die Zahl ihrem Wort zu!",
    round5Title: "Zähle und sage",
    round5Hint: "Wie viele? Tippe das richtige Zahlenwort!",
    well: "Toll gemacht!",
    next: "Weiter",
    finish: "Fertig!",
    correct: "Richtig!",
    hint: "Farben und Zahlen!",
  },
  ro: {
    title: "Exploratorul imaginilor și cuvintelor",
    round1Title: "Culori!",
    round1Hint: "Atinge fiecare culoare pentru a-i învăța numele german!",
    round2Title: "Potrivește culoarea",
    round2Hint: "Ce culoare este aceasta?",
    round3Title: "Numerele în cuvinte",
    round3Hint: "Atinge fiecare număr în cuvinte!",
    round4Title: "Potrivire numere",
    round4Hint: "Potrivește numărul cu cuvântul său!",
    round5Title: "Numără și spune",
    round5Hint: "Câte sunt? Atinge cuvântul corect!",
    well: "Bravo!",
    next: "Înainte",
    finish: "Gata!",
    correct: "Corect!",
    hint: "Culori și numere!",
  },
};

// Colors
const COLORS_DATA: { name: string; hex: string; emoji: string }[] = [
  { name: "rot", hex: "#EF4444", emoji: "🔴" },
  { name: "blau", hex: "#3B82F6", emoji: "🔵" },
  { name: "grün", hex: "#22C55E", emoji: "🟢" },
  { name: "gelb", hex: "#EAB308", emoji: "🟡" },
  { name: "orange", hex: "#F97316", emoji: "🟠" },
  { name: "lila", hex: "#A855F7", emoji: "🟣" },
  { name: "rosa", hex: "#EC4899", emoji: "🌸" },
  { name: "braun", hex: "#92400E", emoji: "🟤" },
  { name: "schwarz", hex: "#1F2937", emoji: "⚫" },
  { name: "weiß", hex: "#F3F4F6", emoji: "⚪" },
];

// Round 2: color match
const COLOR_QUIZ = COLORS_DATA.slice(0, 6);

// Number words
const NUMBER_WORDS: { num: number; word: string }[] = [
  { num: 1, word: "eins" },
  { num: 2, word: "zwei" },
  { num: 3, word: "drei" },
  { num: 4, word: "vier" },
  { num: 5, word: "fünf" },
  { num: 6, word: "sechs" },
  { num: 7, word: "sieben" },
  { num: 8, word: "acht" },
  { num: 9, word: "neun" },
  { num: 10, word: "zehn" },
];

// Round 5: counting
const COUNT_EMOJIS: { emoji: string; count: number }[] = [
  { emoji: "🍎", count: 3 },
  { emoji: "⭐", count: 5 },
  { emoji: "🐱", count: 2 },
  { emoji: "🌸", count: 4 },
];

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="flex gap-1.5 w-full">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex-1 h-2 rounded-full"
          style={{ background: i < current ? "#00FF88" : i === current ? color : "rgba(255,255,255,0.12)" }} />
      ))}
    </div>
  );
}

function NextBtn({ onClick, label, color }: { onClick: () => void; label: string; color: string }) {
  return (
    <motion.button onClick={onClick}
      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
      whileTap={{ scale: 0.97 }}>
      {label} <ChevronRight size={16} />
    </motion.button>
  );
}

// ─── Round 1: Learn colors ────────────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<string>>(new Set());
  const allTapped = tapped.size >= 6; // tap at least 6

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {COLORS_DATA.map(c => {
          const isTapped = tapped.has(c.name);
          return (
            <motion.button key={c.name} onClick={() => setTapped(prev => new Set([...prev, c.name]))}
              className="flex flex-col items-center gap-1 p-2 rounded-2xl"
              style={{
                background: isTapped ? `${c.hex}22` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isTapped ? c.hex : "rgba(255,255,255,0.12)"}`,
                minWidth: 60,
              }}
              whileTap={{ scale: 0.95 }}>
              <div className="w-8 h-8 rounded-lg" style={{ background: c.hex, border: "2px solid rgba(255,255,255,0.2)" }} />
              <span className="text-xs font-black" style={{ color: isTapped ? c.hex : "rgba(255,255,255,0.5)" }}>
                {c.name}
              </span>
            </motion.button>
          );
        })}
      </div>
      <div className="text-white/40 text-xs font-bold">{tapped.size}/{COLORS_DATA.length} ✅</div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 2: Color name quiz ─────────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [opts] = useState(() => COLOR_QUIZ.map(c => {
    const others = COLORS_DATA.filter(x => x.name !== c.name).slice(0, 2).map(x => x.name);
    return [c.name, ...others].sort(() => Math.random() - 0.5);
  }));
  const item = COLOR_QUIZ[idx];

  const handleSelect = (name: string) => {
    if (selected) return;
    setSelected(name);
    setTimeout(() => {
      if (idx + 1 >= COLOR_QUIZ.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🎨</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {COLOR_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="w-24 h-24 rounded-3xl"
          style={{ background: item.hex, border: "3px solid rgba(255,255,255,0.2)" }} />
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {opts[idx].map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="w-full py-3 rounded-2xl font-black text-xl"
            style={{
              background: selected === opt
                ? (opt === item.name ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt
                ? (opt === item.name ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.name ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.97 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 3: Learn number words ─────────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const allTapped = tapped.size >= 8;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {NUMBER_WORDS.map(n => {
          const isTapped = tapped.has(n.num);
          return (
            <motion.button key={n.num} onClick={() => setTapped(prev => new Set([...prev, n.num]))}
              className="flex items-center gap-2 px-3 py-2 rounded-2xl"
              style={{
                background: isTapped ? `${color}22` : "rgba(255,255,255,0.06)",
                border: `2px solid ${isTapped ? color : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={{ scale: 0.95 }}>
              <span className="text-2xl font-black" style={{ color }}>{n.num}</span>
              <span className="text-sm font-black" style={{ color: isTapped ? color : "rgba(255,255,255,0.6)" }}>
                {n.word}
              </span>
            </motion.button>
          );
        })}
      </div>
      <div className="text-white/40 text-xs font-bold">{tapped.size}/{NUMBER_WORDS.length} ✅</div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: Number → word match ─────────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const items = NUMBER_WORDS.slice(0, 5);
  const item = items[idx];
  const [opts] = useState(() => items.map(n => {
    const others = NUMBER_WORDS.filter(x => x.num !== n.num).slice(0, 2).map(x => x.word);
    return [n.word, ...others].sort(() => Math.random() - 0.5);
  }));

  const handleSelect = (w: string) => {
    if (selected) return;
    setSelected(w);
    setTimeout(() => {
      if (idx + 1 >= items.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🔢</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.num} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="w-24 h-24 rounded-3xl flex items-center justify-center text-6xl font-black"
          style={{ background: `${color}22`, border: `3px solid ${color}60`, color }}>
          {item.num}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {opts[idx].map(w => (
          <motion.button key={w} onClick={() => handleSelect(w)}
            className="w-full py-3.5 rounded-2xl font-black text-xl"
            style={{
              background: selected === w ? (w === item.word ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === w ? (w === item.word ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.2)"}`,
              color: selected === w ? (w === item.word ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.97 } : {}}>
            {w}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 5: Count emojis and say word ──────────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const item = COUNT_EMOJIS[idx];
  const correctWord = NUMBER_WORDS.find(n => n.num === item.count)!;
  const [opts] = useState(() => COUNT_EMOJIS.map(ce => {
    const cw = NUMBER_WORDS.find(n => n.num === ce.count)!;
    const others = NUMBER_WORDS.filter(n => n.num !== ce.count && n.num <= 6).slice(0, 2).map(n => n.word);
    return [cw.word, ...others].sort(() => Math.random() - 0.5);
  }));

  const handleSelect = (w: string) => {
    if (selected) return;
    setSelected(w);
    setTimeout(() => {
      if (idx + 1 >= COUNT_EMOJIS.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🎉</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onDone} label={lbl.finish} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 mb-1">
        {COUNT_EMOJIS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }} className="flex flex-wrap gap-2 justify-center p-3 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.04)", border: "2px solid rgba(255,255,255,0.08)" }}>
          {Array.from({ length: item.count }, (_, i) => (
            <span key={i} className="text-3xl">{item.emoji}</span>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {opts[idx].map(w => (
          <motion.button key={w} onClick={() => handleSelect(w)}
            className="w-full py-3.5 rounded-2xl font-black text-xl"
            style={{
              background: selected === w ? (w === correctWord.word ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === w ? (w === correctWord.word ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.2)"}`,
              color: selected === w ? (w === correctWord.word ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.97 } : {}}>
            {w}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const PictureWordExplorer = memo(function PictureWordExplorer({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const TOTAL_ROUNDS = 5;

  const next = useCallback(() => setRound(r => r + 1), []);
  const finish = useCallback(() => onDone(TOTAL_ROUNDS, TOTAL_ROUNDS), [onDone]);

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4 px-1">
      <ProgressBar current={round} total={TOTAL_ROUNDS} color={color} />
      <AnimatePresence mode="wait">
        <motion.div key={round}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="w-full flex flex-col items-center gap-4">
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default PictureWordExplorer;
