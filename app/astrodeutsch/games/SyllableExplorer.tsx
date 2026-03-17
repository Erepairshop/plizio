"use client";
// SyllableExplorer — Island i2: Silben (Syllables)
// Teaches: syllable splitting, counting, diphthongs (au/ei/eu), sp/st sounds

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Syllable Explorer",
    round1Title: "Split the Word!",
    round1Hint: "Tap each syllable part to split the word:",
    round2Title: "Count the Syllables",
    round2Hint: "How many syllables does this word have? Clap along!",
    round3Title: "Find the Diphthong",
    round3Hint: "Which sound do you hear? au · ei · eu",
    round4Title: "sp or st?",
    round4Hint: "Which sound does this word start with?",
    round5Title: "Mixed Practice",
    round5Hint: "How many syllables?",
    well: "Well done!",
    next: "Next",
    finish: "Finished!",
    syllables: "syllable(s)",
    correct: "Correct!",
    hint: "Count the syllables!",
  },
  hu: {
    title: "Szótag felfedező",
    round1Title: "Szeld fel a szót!",
    round1Hint: "Koppints minden szótagra hogy felszeld a szót:",
    round2Title: "Számold meg a szótagokat",
    round2Hint: "Hány szótag van? Tapsolj!",
    round3Title: "Találd meg a kettőshangzót",
    round3Hint: "Melyik hangot hallod? au · ei · eu",
    round4Title: "sp vagy st?",
    round4Hint: "Melyik hanggal kezdődik a szó?",
    round5Title: "Vegyes feladat",
    round5Hint: "Hány szótag van?",
    well: "Remek!",
    next: "Tovább",
    finish: "Vége!",
    syllables: "szótag",
    correct: "Helyes!",
    hint: "Számold a szótagokat!",
  },
  de: {
    title: "Silben-Entdecker",
    round1Title: "Trenne das Wort!",
    round1Hint: "Tippe auf jede Silbe, um das Wort zu trennen:",
    round2Title: "Zähle die Silben",
    round2Hint: "Wie viele Silben hat das Wort? Klatsche mit!",
    round3Title: "Finde den Zwielaut",
    round3Hint: "Welchen Laut hörst du? au · ei · eu",
    round4Title: "sp oder st?",
    round4Hint: "Mit welchem Laut beginnt das Wort?",
    round5Title: "Gemischte Übung",
    round5Hint: "Wie viele Silben?",
    well: "Toll gemacht!",
    next: "Weiter",
    finish: "Fertig!",
    syllables: "Silbe(n)",
    correct: "Richtig!",
    hint: "Zähle die Silben!",
  },
  ro: {
    title: "Exploratorul silabelor",
    round1Title: "Desparte cuvântul!",
    round1Hint: "Atinge fiecare silabă pentru a despărți cuvântul:",
    round2Title: "Numără silabele",
    round2Hint: "Câte silabe are cuvântul? Bate din palme!",
    round3Title: "Găsește diftongul",
    round3Hint: "Ce sunet auzi? au · ei · eu",
    round4Title: "sp sau st?",
    round4Hint: "Cu ce sunet începe cuvântul?",
    round5Title: "Exercițiu mixt",
    round5Hint: "Câte silabe?",
    well: "Bravo!",
    next: "Înainte",
    finish: "Gata!",
    syllables: "silabă/silabe",
    correct: "Corect!",
    hint: "Numără silabele!",
  },
};

// Round 1: words split into syllables
const SPLIT_WORDS: { word: string; parts: string[] }[] = [
  { word: "Schule", parts: ["Schu", "le"] },
  { word: "Banane", parts: ["Ba", "na", "ne"] },
  { word: "Elefant", parts: ["E", "le", "fant"] },
  { word: "Telefon", parts: ["Te", "le", "fon"] },
];

// Round 2: count syllables
const COUNT_WORDS: { word: string; count: number }[] = [
  { word: "Haus", count: 1 },
  { word: "Auto", count: 2 },
  { word: "Butter", count: 2 },
  { word: "Schokolade", count: 4 },
  { word: "Katze", count: 2 },
];

// Round 3: diphthongs
const DIPHTHONG_WORDS: { word: string; diphthong: string }[] = [
  { word: "Haus", diphthong: "au" },
  { word: "Ei", diphthong: "ei" },
  { word: "Auto", diphthong: "au" },
  { word: "Freund", diphthong: "eu" },
  { word: "Baum", diphthong: "au" },
];

// Round 4: sp/st anlaut
const SP_ST_WORDS: { word: string; start: "sp" | "st" }[] = [
  { word: "Spinne", start: "sp" },
  { word: "Stern", start: "st" },
  { word: "Stuhl", start: "st" },
  { word: "Sport", start: "sp" },
  { word: "Spiel", start: "sp" },
  { word: "Stadt", start: "st" },
];

// Round 5: count syllables mixed
const MIXED_WORDS: { word: string; count: number }[] = [
  { word: "Schmetterling", count: 3 },
  { word: "Ball", count: 1 },
  { word: "Vogel", count: 2 },
  { word: "Giraffe", count: 3 },
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

// ─── Round 1: Tap syllable parts to split word ────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const [done, setDone] = useState(false);
  const item = SPLIT_WORDS[wordIdx];
  const allTapped = tapped.size === item.parts.length;

  const handleTap = (i: number) => {
    if (tapped.has(i)) return;
    setTapped(prev => new Set([...prev, i]));
  };

  const handleNext = () => {
    if (wordIdx + 1 >= SPLIT_WORDS.length) setDone(true);
    else { setWordIdx(i => i + 1); setTapped(new Set()); }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">✂️</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex gap-1 mb-1">
        {SPLIT_WORDS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < wordIdx ? "#00FF88" : i === wordIdx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2">
          <p className="text-4xl font-black text-white tracking-wider">{item.word}</p>
          <SpeakButton text={item.word} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 flex-wrap justify-center">
        {item.parts.map((part, i) => (
          <motion.button key={i} onClick={() => handleTap(i)}
            className="px-5 py-3 rounded-2xl font-black text-xl"
            style={{
              background: tapped.has(i) ? `${color}33` : "rgba(255,255,255,0.06)",
              border: `2px solid ${tapped.has(i) ? color : "rgba(255,255,255,0.2)"}`,
              color: tapped.has(i) ? color : "white",
              boxShadow: tapped.has(i) ? `0 0 14px ${color}55` : "none",
            }}
            animate={tapped.has(i) ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.2 }}>
            {part}
          </motion.button>
        ))}
      </div>
      {allTapped && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="w-full flex flex-col gap-2 items-center">
          <div className="rounded-2xl px-4 py-2 text-center"
            style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
            <p className="text-[#00FF88] font-black">{item.parts.join(" · ")}</p>
            <p className="text-white/50 text-xs">{item.parts.length} {lbl.syllables}</p>
          </div>
          <NextBtn onClick={handleNext} label={wordIdx + 1 >= SPLIT_WORDS.length ? lbl.next : lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 2: Count syllables ─────────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const item = COUNT_WORDS[idx];

  const handleSelect = (n: number) => {
    if (selected !== null) return;
    setSelected(n);
    setTimeout(() => {
      if (idx + 1 >= COUNT_WORDS.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">👏</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  const correct = item.count;
  const opts = [1, 2, 3, 4].filter(n => n !== correct);
  const shuffled = [correct, opts[0], opts[1]].sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {COUNT_WORDS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2">
          <p className="text-4xl font-black text-white tracking-wider">{item.word}</p>
          <SpeakButton text={item.word} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      {/* Clap visual */}
      <div className="flex gap-2 justify-center">
        {Array.from({ length: correct }, (_, i) => (
          <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, type: "spring" }}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
            style={{ background: `${color}22`, border: `2px solid ${color}55` }}>
            👏
          </motion.div>
        ))}
      </div>
      <div className="flex gap-3 justify-center">
        {shuffled.map(n => (
          <motion.button key={n} onClick={() => handleSelect(n)}
            className="w-16 h-16 rounded-2xl font-black text-3xl flex items-center justify-center"
            style={{
              background: selected === n
                ? (n === correct ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === n
                ? (n === correct ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === n ? (n === correct ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={selected === null ? { scale: 0.9 } : {}}>
            {n}
          </motion.button>
        ))}
      </div>
      {selected !== null && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-black text-lg"
          style={{ color: selected === correct ? "#00FF88" : "#FF2D78" }}>
          {selected === correct ? `✅ ${correct} ${lbl.syllables}` : `${correct} ${lbl.syllables}`}
        </motion.p>
      )}
    </div>
  );
}

// ─── Round 3: Diphthongs ──────────────────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const item = DIPHTHONG_WORDS[idx];
  const DIPHTHONGS = ["au", "ei", "eu"];

  const handleSelect = (d: string) => {
    if (selected) return;
    setSelected(d);
    setTimeout(() => {
      if (idx + 1 >= DIPHTHONG_WORDS.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🔤</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  // Highlight the diphthong in the word
  const highlightWord = (word: string, di: string) => {
    const idx2 = word.toLowerCase().indexOf(di);
    if (idx2 === -1) return <span className="text-white">{word}</span>;
    return (
      <>
        <span className="text-white">{word.slice(0, idx2)}</span>
        <span style={{ color }}>{word.slice(idx2, idx2 + di.length)}</span>
        <span className="text-white">{word.slice(idx2 + di.length)}</span>
      </>
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1 mb-1">
        {DIPHTHONG_WORDS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2">
          <p className="text-4xl font-black tracking-wider">
            {selected ? highlightWord(item.word, item.diphthong) : <span className="text-white">{item.word}</span>}
          </p>
          <SpeakButton text={item.word} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 justify-center">
        {DIPHTHONGS.map(d => (
          <motion.button key={d} onClick={() => handleSelect(d)}
            className="px-6 py-4 rounded-2xl font-black text-2xl"
            style={{
              background: selected === d
                ? (d === item.diphthong ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === d
                ? (d === item.diphthong ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === d ? (d === item.diphthong ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.9 } : {}}>
            {d}
          </motion.button>
        ))}
      </div>
      {selected && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-black text-base"
          style={{ color: selected === item.diphthong ? "#00FF88" : "#FF2D78" }}>
          {lbl.correct} — „{item.diphthong}" {selected === item.diphthong ? "✅" : ""}
        </motion.p>
      )}
    </div>
  );
}

// ─── Round 4: sp / st ─────────────────────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const item = SP_ST_WORDS[idx];

  const handleSelect = (s: string) => {
    if (selected) return;
    setSelected(s);
    setTimeout(() => {
      if (idx + 1 >= SP_ST_WORDS.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🌟</div>
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
        {SP_ST_WORDS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2">
          <p className="text-4xl font-black text-white tracking-wider">{item.word}</p>
          <SpeakButton text={item.word} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 w-full">
        {(["sp", "st"] as const).map(s => (
          <motion.button key={s} onClick={() => handleSelect(s)}
            className="flex-1 py-5 rounded-2xl font-black text-3xl"
            style={{
              background: selected === s
                ? (s === item.start ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === s
                ? (s === item.start ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === s ? (s === item.start ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {s}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 5: Count syllables mixed ───────────────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const item = MIXED_WORDS[idx];
  const OPTIONS = [1, 2, 3, 4];

  const handleSelect = (n: number) => {
    if (selected !== null) return;
    setSelected(n);
    setTimeout(() => {
      if (idx + 1 >= MIXED_WORDS.length) setDone(true);
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
        {MIXED_WORDS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2">
          <p className="text-4xl font-black text-white tracking-wider">{item.word}</p>
          <SpeakButton text={item.word} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 flex-wrap justify-center">
        {OPTIONS.map(n => (
          <motion.button key={n} onClick={() => handleSelect(n)}
            className="w-14 h-14 rounded-2xl font-black text-2xl flex items-center justify-center"
            style={{
              background: selected === n
                ? (n === item.count ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === n
                ? (n === item.count ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === n ? (n === item.count ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={selected === null ? { scale: 0.9 } : {}}>
            {n}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const SyllableExplorer = memo(function SyllableExplorer({
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

export default SyllableExplorer;
