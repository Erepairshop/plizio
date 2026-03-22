"use client";
// StyleDeviceExplorer — Island i4: Stilmittel (K7)
// Teaches: Stilmittel overview (Metapher/Vergleich/Alliteration etc), MemoryPairCards, identification MCQ

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import MemoryPairCards from "./blocks/MemoryPairCards";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Figures of Speech",
    round1Title: "Stilmittel Overview",
    round1Hint: "Tap each card to discover a figure of speech!",
    round2Title: "Match Name to Example",
    round2Hint: "Flip cards and find the matching pairs!",
    round3Title: "Which figure is this?",
    round3Hint: "Identify the correct Stilmittel.",
    round4Title: "More Matching Pairs",
    round4Hint: "Find all matching pairs!",
    round5Title: "Identify the Figure",
    round5Hint: "Choose the correct figure of speech.",
    next: "Next",
    finish: "Finished!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    discovery: "💡 Style devices (Stilmittel) make texts more expressive! Metapher (metaphor), Vergleich (simile), Alliteration, Personifikation — writers use them for effect.",
    definition: "Definition",
    example: "Example",
  },
  hu: {
    title: "Stíluseszközök",
    round1Title: "Stíluseszközök áttekintése",
    round1Hint: "Koppints minden kártyára egy stíluseszköz felfedezéséhez!",
    round2Title: "Párosítsd a neveket példákkal!",
    round2Hint: "Forgasd fel a kártyákat és keresd a párokat!",
    round3Title: "Melyik stíluseszköz ez?",
    round3Hint: "Azonosítsd a helyes stíluseszközt.",
    round4Title: "Még több párosítás",
    round4Hint: "Keresd meg az összes párt!",
    round5Title: "Azonosítsd a stíluseszközt!",
    round5Hint: "Válaszd ki a helyes stíluseszközt.",
    next: "Tovább",
    finish: "Kész!",
    tapToReveal: "Koppints",
    correct: "Helyes!",
    discovery: "💡 A stíluseszközök (Stilmittel) kifejezőbbé teszik a szövegeket! A Metapher (metafora), Vergleich (hasonlat), Alliteration, Personifikation — az írók ezeket használják hatásért.",
    definition: "Definíció",
    example: "Példa",
  },
  de: {
    title: "Stilmittel",
    round1Title: "Stilmittel-Übersicht",
    round1Hint: "Tippe auf jede Karte, um ein Stilmittel zu entdecken!",
    round2Title: "Name zum Beispiel zuordnen",
    round2Hint: "Decke Karten auf und finde die passenden Paare!",
    round3Title: "Welches Stilmittel ist das?",
    round3Hint: "Erkenne das richtige Stilmittel.",
    round4Title: "Weitere Paare zuordnen",
    round4Hint: "Finde alle passenden Paare!",
    round5Title: "Stilmittel erkennen",
    round5Hint: "Wähle das richtige Stilmittel.",
    next: "Weiter",
    finish: "Fertig!",
    tapToReveal: "Antippen",
    correct: "Richtig!",
    discovery: "💡 Style devices (Stilmittel) make texts more expressive! Metapher (metaphor), Vergleich (simile), Alliteration, Personifikation — writers use them for effect.",
    definition: "Definition",
    example: "Beispiel",
  },
  ro: {
    title: "Figuri de stil",
    round1Title: "Prezentare figuri de stil",
    round1Hint: "Atinge fiecare card pentru a descoperi o figură de stil!",
    round2Title: "Potrivește numele cu exemplul",
    round2Hint: "Întoarce cardurile și găsește perechile!",
    round3Title: "Ce figură de stil este?",
    round3Hint: "Identifică figura de stil corectă.",
    round4Title: "Mai multe perechi",
    round4Hint: "Găsește toate perechile!",
    round5Title: "Identifică figura de stil",
    round5Hint: "Alege figura de stil corectă.",
    next: "Înainte",
    finish: "Gata!",
    tapToReveal: "Atinge",
    correct: "Corect!",
    discovery: "💡 Figurile de stil (Stilmittel) fac textele mai expresive! Metaphora, Comparația, Aliterația, Personificarea — scriitorii le folosesc pentru efect.",
    definition: "Definiție",
    example: "Exemplu",
  },
};

const STILMITTEL = [
  {
    name: "Metapher",
    emoji: "🎭",
    color: "#B44DFF",
    def: { de: "ein Wort wird im übertragenen Sinne verwendet", en: "a word used in a transferred sense", hu: "átvitt értelmű szóhasználat", ro: "folosirea unui cuvânt în sens figurat" },
    example: "Das Leben ist ein Traum.",
  },
  {
    name: "Vergleich",
    emoji: "⚖️",
    color: "#3B82F6",
    def: { de: "Vergleich mit 'wie'", en: "comparison using 'wie' (like/as)", hu: "összehasonlítás 'wie' szóval", ro: "comparație cu 'wie'" },
    example: "Er ist stark wie ein Löwe.",
  },
  {
    name: "Alliteration",
    emoji: "🔤",
    color: "#10B981",
    def: { de: "Wörter beginnen mit gleichem Laut", en: "words begin with the same sound", hu: "szavak azonos hanggal kezdődnek", ro: "cuvinte care încep cu același sunet" },
    example: "Mit Milch macht man Muskeln.",
  },
  {
    name: "Personifikation",
    emoji: "🧍",
    color: "#F59E0B",
    def: { de: "ein Gegenstand bekommt menschliche Eigenschaften", en: "an object is given human qualities", hu: "tárgy emberi tulajdonságot kap", ro: "un obiect primește calități umane" },
    example: "Der Wind flüstert.",
  },
  {
    name: "Wiederholung",
    emoji: "🔁",
    color: "#EF4444",
    def: { de: "bewusste Wiederholung von Wörtern", en: "deliberate repetition of words", hu: "szavak tudatos ismétlése", ro: "repetarea deliberată a cuvintelor" },
    example: "Nie, nie wieder!",
  },
  {
    name: "Hyperbel",
    emoji: "💥",
    color: "#FF9500",
    def: { de: "starke Übertreibung", en: "strong exaggeration", hu: "erős túlzás", ro: "exagerare puternică" },
    example: "Ich habe tausendmal gesagt...",
  },
];

// Round 2 memory pairs: Stilmittel name ↔ example sentence
const MEMORY_PAIRS_1 = [
  { a: "Metapher", b: "Das Leben ist ein Traum." },
  { a: "Vergleich", b: "Er ist stark wie ein Löwe." },
  { a: "Alliteration", b: "Mit Milch macht man Muskeln." },
  { a: "Personifikation", b: "Der Wind flüstert." },
];

// Round 3 MCQ — identify Stilmittel from example
const MCQ3 = [
  { sentence: '"Die Zeit ist ein Dieb."', options: ["Metapher", "Vergleich", "Alliteration"], correct: "Metapher" },
  { sentence: '"Schnell wie der Wind."', options: ["Hyperbel", "Vergleich", "Wiederholung"], correct: "Vergleich" },
  { sentence: '"Peter Piper picked a peck..."', options: ["Personifikation", "Hyperbel", "Alliteration"], correct: "Alliteration" },
  { sentence: '"Die Sterne lachen uns an."', options: ["Metapher", "Personifikation", "Hyperbel"], correct: "Personifikation" },
];

// Round 4 memory pairs: more Stilmittel
const MEMORY_PAIRS_2 = [
  { a: "Hyperbel", b: "Ich habe tausendmal gesagt..." },
  { a: "Anapher", b: "Nie war es schöner..." },
  { a: "Klimax", b: "Er kam, er sah, er siegte." },
  { a: "Ellipse", b: "Kommst du?" },
];

// Round 5 MCQ
const MCQ5 = [
  { sentence: '"Er kam, er sah, er siegte."', options: ["Klimax", "Ellipse", "Anapher"], correct: "Klimax" },
  { sentence: '"Nie hab ich so gelacht, nie war ich so froh."', options: ["Anapher", "Hyperbel", "Personifikation"], correct: "Anapher" },
  { sentence: '"Kommst du?" (statt: Kommst du mit?)', options: ["Ellipse", "Metapher", "Vergleich"], correct: "Ellipse" },
  { sentence: '"Ich sterbe vor Lachen!"', options: ["Metapher", "Alliteration", "Hyperbel"], correct: "Hyperbel" },
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

// ─── Round 1: Stilmittel overview cards ────────────────────────────────────────
function Round1({ color, lbl, lang, onNext , showTeach, setShowTeach } : { color: string; lbl: Record<string, string>; lang: string; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= STILMITTEL.length;

  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round1Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round1Teach}</p>
        </div>
        <motion.button onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-2">
        {STILMITTEL.map((sm, i) => {
          const open = revealed.has(i);
          const def = sm.def[lang as keyof typeof sm.def] ?? sm.def.de;
          return (
            <motion.button key={sm.name}
              className="w-full rounded-2xl p-3 text-left flex flex-col gap-1"
              style={{
                background: open ? `${sm.color}12` : "rgba(255,255,255,0.04)",
                border: `2px solid ${open ? sm.color : "rgba(255,255,255,0.1)"}`,
              }}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              whileTap={!open ? { scale: 0.97 } : {}}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{sm.emoji}</span>
                <span className="font-black text-base" style={{ color: sm.color }}>{sm.name}</span>
              </div>
              {open ? (
                <motion.div initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="text-white/60 text-xs">{def}</p>
                  <div className="flex items-center justify-between gap-2 mt-0.5">
                    <p className="text-white/80 text-sm font-semibold italic">„{sm.example}"</p>
                    <SpeakButton text={sm.example} lang="de" size={14} />
                  </div>
                </motion.div>
              ) : (
                <p className="text-white/30 text-xs">{lbl.tapToReveal}</p>
              )}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 2: MemoryPairCards — first set ──────────────────────────────────────
function Round2({ color, lbl, onNext , showTeach, setShowTeach } : { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {

  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round2Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round2Teach}</p>
        </div>
        <motion.button onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <MemoryPairCards pairs={MEMORY_PAIRS_1} color={color} onDone={() => setTimeout(onNext, 600)} />
    </div>
  );
}

// ─── Round 3: Identify Stilmittel MCQ ──────────────────────────────────────────
function Round3({ color, lbl, onNext , showTeach, setShowTeach } : { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = MCQ3[idx];
  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= MCQ3.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round3Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round3Teach}</p>
        </div>
        <motion.button onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1 justify-center">
        {MCQ3.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-lg">{item.sentence}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: selected === item.correct ? "#00FF88" : "#FF6B6B" }}>
              {selected === item.correct ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full flex-wrap justify-center">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="flex-1 min-w-24 py-3 rounded-xl font-black text-sm"
            style={{
              background: selected === opt ? (opt === item.correct ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 4: MemoryPairCards — second set ─────────────────────────────────────
function Round4({ color, lbl, onNext , showTeach, setShowTeach } : { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {

  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round4Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round4Teach}</p>
        </div>
        <motion.button onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <MemoryPairCards pairs={MEMORY_PAIRS_2} color={color} onDone={() => setTimeout(onNext, 600)} />
    </div>
  );
}

// ─── Round 5: More Stilmittel MCQ ──────────────────────────────────────────────
function Round5({ color, lbl, onDone , showTeach, setShowTeach } : { color: string; lbl: Record<string, string>; onDone: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = MCQ5[idx];
  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= MCQ5.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round5Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round5Teach}</p>
        </div>
        <motion.button onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 justify-center">
        {MCQ5.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <div className="flex items-center justify-center gap-2">
            <p className="text-white font-bold text-lg">{item.sentence}</p>
            <SpeakButton text={item.sentence} lang="de" size={16} />
          </div>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: selected === item.correct ? "#00FF88" : "#FF6B6B" }}>
              {selected === item.correct ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full flex-wrap justify-center">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="flex-1 min-w-24 py-3 rounded-xl font-black text-sm"
            style={{
              background: selected === opt ? (opt === item.correct ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const StyleDeviceExplorer = memo(function StyleDeviceExplorer({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const [showTeach, setShowTeach] = useState(true);
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
          {round === 0 && <Round1 color={color} lbl={lbl} lang={lang} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 4 && <Round5 color={color} lbl={lbl} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default StyleDeviceExplorer;
