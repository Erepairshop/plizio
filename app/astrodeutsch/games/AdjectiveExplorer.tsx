"use client";
// AdjectiveExplorer — Island i3: Adjektive & Pronomen (K2)
// Teaches: adjective recognition, opposites, personal pronouns er/sie/es

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Adjective Explorer",
    round1Title: "Find the Adjective!",
    round1Hint: "Tap all the describing words (adjectives)!",
    round2Title: "Opposites!",
    round2Hint: "Tap the pair of opposite adjectives!",
    round3Title: "Personal Pronouns",
    round3Hint: "Tap each pronoun to learn it!",
    round4Title: "er, sie or es?",
    round4Hint: "Which pronoun replaces this noun?",
    round5Title: "Adjective Challenge",
    round5Hint: "Choose the correct opposite!",
    well: "Wonderful!",
    next: "Next",
    finish: "Finished!",
    correct: "Correct!",
    tapToLearn: "Tap to learn!",
    replaces: "replaces",
  },
  hu: {
    title: "Melléknév felfedező",
    round1Title: "Keresd a melléknevet!",
    round1Hint: "Koppints az összes leíró szóra (melléknévre)!",
    round2Title: "Ellentétek!",
    round2Hint: "Koppints az ellentétes melléknevekre!",
    round3Title: "Személyes névmások",
    round3Hint: "Koppints minden névmásra, hogy megtanuld!",
    round4Title: "er, sie vagy es?",
    round4Hint: "Melyik névmás helyettesíti ezt a főnevet?",
    round5Title: "Melléknév kihívás",
    round5Hint: "Válaszd ki a helyes ellentétet!",
    well: "Csodálatos!",
    next: "Tovább",
    finish: "Vége!",
    correct: "Helyes!",
    tapToLearn: "Koppints, hogy tanuld!",
    replaces: "helyettesíti",
  },
  de: {
    title: "Adjektiv-Entdecker",
    round1Title: "Finde das Adjektiv!",
    round1Hint: "Tippe auf alle Eigenschaftswörter (Adjektive)!",
    round2Title: "Gegensätze!",
    round2Hint: "Tippe auf das Gegensatz-Paar!",
    round3Title: "Personalpronomen",
    round3Hint: "Tippe auf jedes Pronomen um es zu lernen!",
    round4Title: "er, sie oder es?",
    round4Hint: "Welches Pronomen ersetzt dieses Nomen?",
    round5Title: "Adjektiv-Herausforderung",
    round5Hint: "Wähle den richtigen Gegensatz!",
    well: "Wunderbar!",
    next: "Weiter",
    finish: "Fertig!",
    correct: "Richtig!",
    tapToLearn: "Tippe zum Lernen!",
    replaces: "ersetzt",
  },
  ro: {
    title: "Exploratorul adjectivelor",
    round1Title: "Găsește adjectivul!",
    round1Hint: "Atinge toate cuvintele descriptive (adjective)!",
    round2Title: "Contrarii!",
    round2Hint: "Atinge perechea de adjective contrare!",
    round3Title: "Pronume personale",
    round3Hint: "Atinge fiecare pronume pentru a-l învăța!",
    round4Title: "er, sie sau es?",
    round4Hint: "Care pronume înlocuiește acest substantiv?",
    round5Title: "Provocare adjective",
    round5Hint: "Alege contrariul corect!",
    well: "Minunat!",
    next: "Înainte",
    finish: "Gata!",
    correct: "Corect!",
    tapToLearn: "Atinge pentru a învăța!",
    replaces: "înlocuiește",
  },
};

// Round 1: spot adjectives
const MIXED_WORDS: { word: string; isAdj: boolean; emoji?: string }[] = [
  { word: "groß", isAdj: true },
  { word: "Hund", isAdj: false, emoji: "🐕" },
  { word: "schnell", isAdj: true },
  { word: "spielen", isAdj: false },
  { word: "blau", isAdj: true },
  { word: "Schule", isAdj: false, emoji: "🏫" },
  { word: "warm", isAdj: true },
  { word: "laufen", isAdj: false },
  { word: "klein", isAdj: true },
  { word: "Baum", isAdj: false, emoji: "🌳" },
];

// Round 2: opposites
const OPPOSITE_PAIRS: { a: string; b: string; emojiA: string; emojiB: string }[] = [
  { a: "groß", b: "klein", emojiA: "🦒", emojiB: "🐭" },
  { a: "heiß", b: "kalt", emojiA: "🔥", emojiB: "🧊" },
  { a: "schnell", b: "langsam", emojiA: "🐆", emojiB: "🐢" },
  { a: "hell", b: "dunkel", emojiA: "☀️", emojiB: "🌑" },
];

// Round 3: personal pronouns
const PRONOUNS: { pronoun: string; meaning: Record<string, string>; emoji: string; color: string }[] = [
  { pronoun: "ich", meaning: { de: "ich (I — über mich selbst)", en: "I (about myself)", hu: "én", ro: "eu" }, emoji: "👤", color: "#3B82F6" },
  { pronoun: "du", meaning: { de: "du (you — jemanden ansprechen)", en: "you (talking to someone)", hu: "te", ro: "tu" }, emoji: "👉", color: "#EC4899" },
  { pronoun: "er", meaning: { de: "er (he — ein Mann / Junge)", en: "he (a man/boy)", hu: "ő (hím)", ro: "el" }, emoji: "👦", color: "#10B981" },
  { pronoun: "sie", meaning: { de: "sie (she — eine Frau / ein Mädchen)", en: "she (a woman/girl)", hu: "ő (nő)", ro: "ea" }, emoji: "👧", color: "#F59E0B" },
  { pronoun: "es", meaning: { de: "es (it — ein sächliches Nomen)", en: "it (a neutral noun)", hu: "az (semleges)", ro: "el/ea (neutru)" }, emoji: "📦", color: "#A855F7" },
  { pronoun: "wir", meaning: { de: "wir (we — mehrere Personen)", en: "we (multiple people)", hu: "mi", ro: "noi" }, emoji: "👥", color: "#14B8A6" },
];

// Round 4: pronoun replacement
const PRONOUN_SUBS: { noun: string; article: string; pronoun: string; emoji: string }[] = [
  { noun: "Hund", article: "der", pronoun: "er", emoji: "🐕" },
  { noun: "Katze", article: "die", pronoun: "sie", emoji: "🐱" },
  { noun: "Kind", article: "das", pronoun: "es", emoji: "👦" },
  { noun: "Lehrer", article: "der", pronoun: "er", emoji: "👨‍🏫" },
  { noun: "Blume", article: "die", pronoun: "sie", emoji: "🌸" },
];

// Round 5: opposites quiz
const OPPOSITE_QUIZ: { word: string; options: string[]; answer: string }[] = [
  { word: "alt", options: ["jung", "groß", "schnell"], answer: "jung" },
  { word: "nass", options: ["warm", "trocken", "klein"], answer: "trocken" },
  { word: "laut", options: ["leise", "hell", "kalt"], answer: "leise" },
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

// ─── Round 1: Find adjectives ─────────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const adjCount = MIXED_WORDS.filter(w => w.isAdj).length;
  const tappedAdjCount = [...tapped].filter(i => MIXED_WORDS[i].isAdj).length;
  const allAdjTapped = tappedAdjCount === adjCount;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {MIXED_WORDS.map((item, i) => {
          const isTapped = tapped.has(i);
          const isAdj = item.isAdj;
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="w-full rounded-2xl p-3 flex items-center gap-2"
              style={{
                background: isTapped ? (isAdj ? "rgba(0,255,136,0.15)" : "rgba(255,255,255,0.04)") : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? (isAdj ? "#00FF88" : "rgba(255,255,255,0.1)") : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.95 } : {}}>
              {item.emoji && <span className="text-lg">{item.emoji}</span>}
              <span className="font-black text-base" style={{
                color: isTapped ? (isAdj ? "#00FF88" : "rgba(255,255,255,0.35)") : "white",
              }}>{item.word}</span>
              {isTapped && isAdj && <span className="ml-auto text-sm">✅</span>}
            </motion.button>
          );
        })}
      </div>
      {allAdjTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 2: Opposites pairs ─────────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const pair = OPPOSITE_PAIRS[idx];
  const bothTapped = tapped.has(0) && tapped.has(1);

  const handleNext = () => {
    if (idx + 1 >= OPPOSITE_PAIRS.length) onNext();
    else { setIdx(i => i + 1); setTapped(new Set()); }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {OPPOSITE_PAIRS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex gap-4 w-full">
          {[{ word: pair.a, emoji: pair.emojiA }, { word: pair.b, emoji: pair.emojiB }].map((item, i) => {
            const isTapped = tapped.has(i);
            return (
              <motion.button key={i}
                onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
                className="flex-1 rounded-2xl p-4 flex flex-col items-center gap-2"
                style={{
                  background: isTapped ? `${color}22` : "rgba(255,255,255,0.05)",
                  border: `2px solid ${isTapped ? color : "rgba(255,255,255,0.15)"}`,
                }}
                whileTap={!isTapped ? { scale: 0.93 } : {}}>
                <span className="text-4xl">{item.emoji}</span>
                <span className="text-xl font-black" style={{ color: isTapped ? color : "white" }}>
                  {item.word}
                </span>
                {isTapped && <SpeakButton text={item.word} lang="de" size={14} />}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>
      {bothTapped && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="w-full flex items-center justify-center gap-3">
          <span className="text-lg font-black" style={{ color }}>{pair.a}</span>
          <span className="text-white/50">↔</span>
          <span className="text-lg font-black" style={{ color }}>{pair.b}</span>
          <NextBtn onClick={handleNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 3: Personal pronouns display ──────────────────────────────────────
function Round3({ lang, color, lbl, onNext }: { lang: string; color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const allTapped = tapped.size === PRONOUNS.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {PRONOUNS.map((p, i) => {
          const isTapped = tapped.has(i);
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="rounded-2xl p-3 flex items-center gap-2"
              style={{
                background: isTapped ? `${p.color}22` : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? p.color : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.95 } : {}}>
              <span className="text-2xl">{p.emoji}</span>
              <div className="flex-1 text-left">
                <p className="font-black text-lg" style={{ color: p.color }}>{p.pronoun}</p>
                {isTapped && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-[10px] font-bold text-white/60 leading-tight">
                    {p.meaning[lang] ?? p.meaning.de}
                  </motion.p>
                )}
              </div>
              {isTapped && <SpeakButton text={p.pronoun} lang="de" size={12} />}
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: er/sie/es replacement ──────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = PRONOUN_SUBS[idx];
  const pronColors: Record<string, string> = { er: "#10B981", sie: "#F59E0B", es: "#A855F7" };

  const handleSelect = (p: string) => {
    if (selected) return;
    setSelected(p);
    setTimeout(() => {
      if (idx + 1 >= PRONOUN_SUBS.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {PRONOUN_SUBS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.noun} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-2">
          <span className="text-5xl">{item.emoji}</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-white/60">{item.article}</span>
            <span className="text-3xl font-black text-white">{item.noun}</span>
            <SpeakButton text={`${item.article} ${item.noun}`} lang="de" size={16} />
          </div>
          <p className="text-white/40 text-xs font-bold">→ {lbl.replaces}:</p>
          {selected && (
            <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="text-4xl font-black"
              style={{ color: pronColors[item.pronoun] ?? color }}>
              {item.pronoun} {selected === item.pronoun ? "✅" : ""}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 w-full">
        {["er", "sie", "es"].map(p => (
          <motion.button key={p} onClick={() => handleSelect(p)}
            className="flex-1 py-4 rounded-2xl font-black text-2xl"
            style={{
              background: selected === p ? `${pronColors[p] ?? color}33` : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === p ? (pronColors[p] ?? color) : "rgba(255,255,255,0.2)"}`,
              color: selected === p ? (pronColors[p] ?? color) : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {p}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 5: Opposites quiz ──────────────────────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = OPPOSITE_QUIZ[idx];

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= OPPOSITE_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 mb-1">
        {OPPOSITE_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white/60 text-sm font-bold mb-1">Gegenteil von:</p>
          <p className="text-3xl font-black text-white">{item.word}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="w-full py-3.5 rounded-2xl font-black text-lg"
            style={{
              background: selected === opt
                ? (opt === item.answer ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt
                ? (opt === item.answer ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.answer ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.97 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const AdjectiveExplorer = memo(function AdjectiveExplorer({
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
          {round === 2 && <Round3 lang={lang} color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default AdjectiveExplorer;
