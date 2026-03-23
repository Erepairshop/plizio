"use client";
// WordClassExplorerK4 — Island i4: Wortarten (K4)
// Teaches: 4 word classes, sorting words, adjective comparison, pronouns, MCQ

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Word Class Explorer",
    round1Title: "The 4 Word Classes",
    round1Hint: "Tap each word class to see examples!",
    round2Title: "Sort the Words",
    round2Hint: "Tap each word, then tap its correct basket.",
    round3Title: "Adjective Comparison",
    round3Hint: "Tap to reveal each comparison step.",
    round4Title: "Personal Pronouns",
    round4Hint: "Tap each pronoun to see it in a sentence.",
    round5Title: "Identify the Word Class",
    round5Hint: "What word class is the highlighted word?",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    discovery: "💡 German has 10 word classes: Nomen, Verb, Adjektiv, Artikel, Pronomen, Adverb, Präposition, Konjunktion, Numerale, Interjektion!",
    noun: "Noun",
    verb: "Verb",
    adjective: "Adjective",
    pronoun: "Pronoun",
  },
  hu: {
    title: "Szófaj felfedező",
    round1Title: "A 4 szófaj",
    round1Hint: "Koppints minden szófajra a példák megtekintéséhez!",
    round2Title: "Rendezd a szavakat",
    round2Hint: "Koppints egy szóra, majd a helyes kosárba.",
    round3Title: "Melléknév fokozása",
    round3Hint: "Koppints a fokozási lépés felfedéséhez.",
    round4Title: "Személyes névmások",
    round4Hint: "Koppints minden névmásra egy példamondat megtekintéséhez.",
    round5Title: "Azonosítsd a szófajt",
    round5Hint: "Milyen szófaj a kiemelt szó?",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    discovery: "💡 A németben 10 szófaj van: Nomen, Verb, Adjektiv, Artikel, Pronomen, Adverb, Präposition, Konjunktion, Numerale, Interjektion!",
    noun: "Főnév",
    verb: "Ige",
    adjective: "Melléknév",
    pronoun: "Névmás",
  },
  de: {
    title: "Wortarten-Entdecker",
    round1Title: "Die 4 Wortarten",
    round1Hint: "Tippe auf jede Wortart, um Beispiele zu sehen!",
    round2Title: "Wörter sortieren",
    round2Hint: "Tippe auf ein Wort, dann auf den richtigen Korb.",
    round3Title: "Adjektiv-Steigerung",
    round3Hint: "Tippe, um jeden Steigerungsschritt aufzudecken.",
    round4Title: "Personalpronomen",
    round4Hint: "Tippe auf jedes Pronomen, um es in einem Satz zu sehen.",
    round5Title: "Wortart bestimmen",
    round5Hint: "Welche Wortart ist das markierte Wort?",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    discovery: "💡 German has 10 word classes: Nomen, Verb, Adjektiv, Artikel, Pronomen, Adverb, Präposition, Konjunktion, Numerale, Interjektion!",
    noun: "Nomen",
    verb: "Verb",
    adjective: "Adjektiv",
    pronoun: "Pronomen",
  },
  ro: {
    title: "Exploratorul claselor gramaticale",
    round1Title: "Cele 4 clase gramaticale",
    round1Hint: "Atinge fiecare clasă pentru a vedea exemple!",
    round2Title: "Sortează cuvintele",
    round2Hint: "Atinge un cuvânt, apoi coșul corect.",
    round3Title: "Gradele adjectivului",
    round3Hint: "Atinge pentru a dezvălui fiecare grad.",
    round4Title: "Pronume personale",
    round4Hint: "Atinge fiecare pronume pentru a-l vedea într-o propoziție.",
    round5Title: "Identifică clasa gramaticală",
    round5Hint: "Ce clasă gramaticală este cuvântul evidențiat?",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    discovery: "💡 Germana are 10 clase gramaticale: Nomen, Verb, Adjektiv, Artikel, Pronomen, Adverb, Präposition, Konjunktion, Numerale, Interjektion!",
    noun: "Substantiv",
    verb: "Verb",
    adjective: "Adjectiv",
    pronoun: "Pronume",
  },
};

const WORD_CLASSES = [
  { key: "noun", emoji: "🏷️", color: "#3B82F6", examples: ["Schule", "Hund", "Freude"], note: "always capitalized!" },
  { key: "verb", emoji: "⚡", color: "#10B981", examples: ["laufen", "denken", "essen"], note: "shows action or state" },
  { key: "adjective", emoji: "🎨", color: "#F59E0B", examples: ["schön", "groß", "klug"], note: "describes nouns" },
  { key: "pronoun", emoji: "👉", color: "#EC4899", examples: ["ich", "er", "sie", "wir"], note: "replaces nouns" },
];

const SORT_WORDS = [
  { word: "Baum", class: "noun", emoji: "🌳" },
  { word: "laufen", class: "verb", emoji: "🏃" },
  { word: "schön", class: "adjective", emoji: "✨" },
  { word: "er", class: "pronoun", emoji: "👦" },
  { word: "Buch", class: "noun", emoji: "📚" },
  { word: "spielen", class: "verb", emoji: "⚽" },
];

const ADJ_COMP = [
  { base: "schön", komparativ: "schöner", superlativ: "am schönsten", emoji: "🌸" },
  { base: "groß", komparativ: "größer", superlativ: "am größten", emoji: "📏" },
  { base: "gut", komparativ: "besser", superlativ: "am besten", emoji: "⭐" },
  { base: "schnell", komparativ: "schneller", superlativ: "am schnellsten", emoji: "🚀" },
];

const PRONOUNS = [
  { pro: "ich", example: "Ich lerne Deutsch.", emoji: "🙋" },
  { pro: "du", example: "Du bist mein Freund.", emoji: "👉" },
  { pro: "er/sie/es", example: "Er spielt Fußball.", emoji: "👦" },
  { pro: "wir", example: "Wir gehen zusammen.", emoji: "👫" },
  { pro: "ihr", example: "Ihr seid nett.", emoji: "👥" },
  { pro: "sie/Sie", example: "Sie kommen morgen.", emoji: "👋" },
];

const CLASS_QUIZ = [
  { sentence: "Der große Hund bellt.", highlight: "große", correct: "adjective" },
  { sentence: "Er kauft ein Buch.", highlight: "Er", correct: "pronoun" },
  { sentence: "Die Schule beginnt früh.", highlight: "Schule", correct: "noun" },
  { sentence: "Sie laufen schnell.", highlight: "laufen", correct: "verb" },
];

const CLASS_COLORS: Record<string, string> = {
  noun: "#3B82F6",
  verb: "#10B981",
  adjective: "#F59E0B",
  pronoun: "#EC4899",
};

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

// ─── Round 1: 4 word classes overview ─────────────────────────────────────────
function Round1({ color, lbl, onNext, showTeach, setShowTeach }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= WORD_CLASSES.length;


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
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {WORD_CLASSES.map((wc, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={wc.key}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="rounded-2xl p-3 flex flex-col items-start gap-1 text-left"
              style={{
                background: isOpen ? `${wc.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? wc.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.96 } : {}}>
              <div className="flex items-center gap-1">
                <span className="text-xl">{wc.emoji}</span>
                <span className="font-black text-sm" style={{ color: wc.color }}>{lbl[wc.key]}</span>
              </div>
              {isOpen ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1 flex-wrap">
                  <div className="flex items-center gap-1">
                    <p className="text-white/80 text-xs font-bold">{wc.examples.join(", ")}</p>
                    <SpeakButton text={wc.examples[0]} lang={"de"} size={14} />
                  </div>
                  <p className="text-white/40 text-[10px] w-full">{wc.note}</p>
                </motion.div>
              ) : (
                <p className="text-white/30 text-xs">{lbl.tapToReveal}</p>
              )}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 2: Sort words into classes ─────────────────────────────────────────
function Round2({ color, lbl, onNext, showTeach, setShowTeach }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [sorted, setSorted] = useState<Record<number, string>>({});
  const allSorted = Object.keys(sorted).length >= SORT_WORDS.length;

  const handleWordTap = (i: number) => {
    if (sorted[i] !== undefined) return;
    setSelected(i);
  };

  const handleBasketTap = (cls: string) => {
    if (selected === null) return;
    setSorted(prev => ({ ...prev, [selected]: cls }));
    setSelected(null);
  };


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
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="grid grid-cols-3 gap-2 w-full">
        {SORT_WORDS.map((item, i) => {
          const sortedClass = sorted[i];
          const isCorrect = sortedClass === item.class;
          const isSelected = selected === i;
          return (
            <motion.button key={item.word}
              onClick={() => handleWordTap(i)}
              className="rounded-xl p-2 flex flex-col items-center gap-0.5"
              style={{
                background: sortedClass !== undefined
                  ? (isCorrect ? "rgba(0,255,136,0.15)" : "rgba(255,107,107,0.15)")
                  : isSelected ? `${color}33` : "rgba(255,255,255,0.05)",
                border: `2px solid ${sortedClass !== undefined
                  ? (isCorrect ? "#00FF88" : "#FF6B6B")
                  : isSelected ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={sortedClass === undefined ? { scale: 0.95 } : {}}>
              <span className="text-lg">{item.emoji}</span>
              <span className="font-black text-sm text-white">{item.word}</span>
            </motion.button>
          );
        })}
      </div>
      {selected !== null && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2 w-full">
          {["noun", "verb", "adjective", "pronoun"].map(cls => (
            <motion.button key={cls}
              onClick={() => handleBasketTap(cls)}
              className="flex-1 py-2 rounded-xl font-black text-xs"
              style={{
                background: `${CLASS_COLORS[cls]}22`,
                border: `2px solid ${CLASS_COLORS[cls]}55`,
                color: CLASS_COLORS[cls],
              }}
              whileTap={{ scale: 0.93 }}>
              {lbl[cls]}
            </motion.button>
          ))}
        </motion.div>
      )}
      {allSorted && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 3: Adjective comparison reveal ─────────────────────────────────────
function Round3({ color, lbl, onNext, showTeach, setShowTeach }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0); // 0=base, 1=komp, 2=sup

  const item = ADJ_COMP[idx];
  const handleNext = () => {
    if (step < 2) { setStep(s => s + 1); }
    else if (idx + 1 >= ADJ_COMP.length) onNext();
    else { setIdx(i => i + 1); setStep(0); }
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
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1">
        {ADJ_COMP.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.base} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <span className="text-4xl">{item.emoji}</span>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-white/40 text-xs font-bold">Positiv</p>
              <p className="text-xl font-black text-white">{item.base}</p>
            </div>
            <span className="text-white/30">→</span>
            <div className="text-center">
              <p className="text-white/40 text-xs font-bold">Komparativ</p>
              <p className="text-xl font-black" style={{ color: step >= 1 ? color : "rgba(255,255,255,0.2)" }}>
                {step >= 1 ? item.komparativ : "?"}
              </p>
            </div>
            <span className="text-white/30">→</span>
            <div className="text-center">
              <p className="text-white/40 text-xs font-bold">Superlativ</p>
              <p className="text-base font-black" style={{ color: step >= 2 ? "#00FF88" : "rgba(255,255,255,0.2)" }}>
                {step >= 2 ? item.superlativ : "?"}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <NextBtn onClick={handleNext} label={step >= 2 && idx + 1 >= ADJ_COMP.length ? lbl.next : lbl.next} color={color} />
    </div>
  );
}

// ─── Round 4: Pronouns ────────────────────────────────────────────────────────
function Round4({ color, lbl, onNext, showTeach, setShowTeach }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= PRONOUNS.length;


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
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {PRONOUNS.map((item, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={item.pro}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="rounded-2xl p-3 flex flex-col items-start gap-1 text-left"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.96 } : {}}>
              <div className="flex items-center gap-1">
                <span className="text-lg">{item.emoji}</span>
                <span className="font-black text-base" style={{ color }}>{item.pro}</span>
              </div>
              {isOpen ? (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-white/70 text-xs">{item.example}</motion.p>
              ) : (
                <p className="text-white/30 text-xs">{lbl.tapToReveal}</p>
              )}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 5: Word class MCQ ───────────────────────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const item = CLASS_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.correct) {
      fireWrongAnswer({ question: item.sentence, wrongAnswer: opt, correctAnswer: item.correct, topic: "Word Classes", lang: "de" });
    }
    setTimeout(() => {
      if (idx + 1 >= CLASS_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  const parts = item.sentence.split(item.highlight);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1">
        {CLASS_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-lg">
            {parts[0]}
            <span className="font-black underline" style={{ color }}>
              {item.highlight}
            </span>
            {parts[1]}
          </p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${lbl[item.correct]}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-2 gap-2 w-full">
        {["noun", "verb", "adjective", "pronoun"].map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="py-3 rounded-xl font-black text-sm"
            style={{
              background: selected === opt ? (opt === item.correct ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : `${CLASS_COLORS[opt]}18`,
              border: `2px solid ${selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : CLASS_COLORS[opt] + "55"}`,
              color: selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : CLASS_COLORS[opt],
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {lbl[opt]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const WordClassExplorerK4 = memo(function WordClassExplorerK4({
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

  const next = useCallback(() => { setRound(r => r + 1); setShowTeach(true); }, []);
  const finish = useCallback(() => onDone(TOTAL_ROUNDS, TOTAL_ROUNDS), [onDone]);

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4 px-1">
      <ProgressBar current={round} total={TOTAL_ROUNDS} color={color} />
      <AnimatePresence mode="wait">
        <motion.div key={round}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="w-full flex flex-col items-center gap-4">
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 4 && <Round5 color={color} lbl={lbl} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default WordClassExplorerK4;
